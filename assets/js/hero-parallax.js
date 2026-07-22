// =====================================================
// HERO — parallasse 2.5D con depth map (WebGL)
// I piani vicini (chiari nella depth) si spostano più dei lontani
// col movimento del mouse → estrusione sobria.
// Fallback: immagine statica (mobile / reduced-motion / no-WebGL).
// =====================================================
(function () {
  const canvas = document.querySelector('.hero-canvas');
  if (!canvas) return;

  const imgSrc = canvas.getAttribute('data-img');
  const depthSrc = canvas.getAttribute('data-depth');
  if (!imgSrc || !depthSrc) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const interactive = finePointer && !reduceMotion;

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) {
    // Nessun WebGL: resta lo sfondo CSS di fallback (.hero-media)
    canvas.style.display = 'none';
    return;
  }

  const vsSource = `
    attribute vec2 a_pos;
    varying vec2 v_uv;
    void main() {
      v_uv = a_pos * 0.5 + 0.5;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }`;

  const fsSource = `
    precision highp float;
    varying vec2 v_uv;
    uniform sampler2D u_img;
    uniform sampler2D u_depth;
    uniform vec2 u_cover;      // fattore cover (immagine → canvas)
    uniform vec2 u_mouse;      // -0.5..0.5
    uniform float u_strength;
    void main() {
      // "cover": la 0..1 del canvas mappata sull'immagine mantenendo il crop
      vec2 base = (v_uv - 0.5) * u_cover + 0.5;
      // v_uv.y invertita per l'orientamento texture
      base.y = 1.0 - base.y;
      float d = texture2D(u_depth, base).r;
      vec2 uv = base + u_mouse * u_strength * (d - 0.45);
      // Duotone: mappa la luminanza sulla rampa Oltremare (ombre) -> Gesso (alte luci)
      vec3 c = texture2D(u_img, uv).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      vec3 shadow = vec3(0.106, 0.169, 0.271);  // Oltremare scuro
      vec3 highlight = vec3(0.909, 0.874, 0.788); // Gesso
      vec3 duo = mix(shadow, highlight, l);
      // Preserva i toni caldi: la maschera (rosso - blu) fa riemergere rossi/ocra,
      // mentre grigi e azzurri restano nel duotone Oltremare. Indipendente dall'immagine.
      float warm = clamp((c.r - c.b) * 3.0, 0.0, 1.0);
      gl_FragColor = vec4(mix(duo, c, warm * 0.85), 1.0);
    }`;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('hero shader:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vs = compile(gl.VERTEX_SHADER, vsSource);
  const fs = compile(gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) { canvas.style.display = 'none'; return; }

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.style.display = 'none'; return; }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, 'a_pos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uImg = gl.getUniformLocation(prog, 'u_img');
  const uDepth = gl.getUniformLocation(prog, 'u_depth');
  const uCover = gl.getUniformLocation(prog, 'u_cover');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');
  const uStrength = gl.getUniformLocation(prog, 'u_strength');

  let imgTex, depthTex;
  let imgAspect = 16 / 9;
  let loaded = 0;

  function makeTexture(image, unit) {
    const tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    return tex;
  }

  function loadImg(src) {
    return new Promise((res, rej) => {
      const im = new Image();
      im.onload = () => res(im);
      im.onerror = rej;
      im.src = src;
    });
  }

  let W = 1, H = 1, cover = [1, 1];
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, Math.round(r.width * dpr));
    H = Math.max(1, Math.round(r.height * dpr));
    canvas.width = W;
    canvas.height = H;
    gl.viewport(0, 0, W, H);
    const canvasA = r.width / r.height;
    // cover: comprime l'asse in eccesso così l'immagine riempie sempre
    if (canvasA > imgAspect) cover = [1, imgAspect / canvasA];
    else cover = [canvasA / imgAspect, 1];
  }

  // Mouse (lerp per morbidezza)
  let tx = 0, ty = 0, cx = 0, cy = 0;
  if (interactive) {
    window.addEventListener('mousemove', (e) => {
      tx = (e.clientX / window.innerWidth) - 0.5;
      ty = (e.clientY / window.innerHeight) - 0.5;
    }, { passive: true });
  }

  const STRENGTH = 0.05;
  function render() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    gl.uniform1i(uImg, 0);
    gl.uniform1i(uDepth, 1);
    gl.uniform2f(uCover, cover[0], cover[1]);
    gl.uniform2f(uMouse, cx, cy);
    gl.uniform1f(uStrength, interactive ? STRENGTH : 0.0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }

  Promise.all([loadImg(imgSrc), loadImg(depthSrc)]).then(([img, depth]) => {
    imgAspect = img.naturalWidth / img.naturalHeight;
    imgTex = makeTexture(img, 0);
    depthTex = makeTexture(depth, 1);
    resize();
    window.addEventListener('resize', resize, { passive: true });
    // La texture 0 e 1 restano legate alle unità 0 e 1
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, imgTex);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, depthTex);
    canvas.classList.add('is-ready');
    requestAnimationFrame(render);
  }).catch(() => {
    canvas.style.display = 'none'; // fallback CSS
  });
})();
