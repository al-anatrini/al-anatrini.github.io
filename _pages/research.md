---
layout: page
title: Research
permalink: /research/
redirect_from:
  - /about/
description: "Research by Alessandro Anatrini: navigating complexity through latent-space maps, instrument design, machine learning for music, adaptive environments, and a critique of platform technologies."
---

Much of my work takes the shape of maps. Using machine learning, I fold high-dimensional material into compact spaces where proximity means similarity, so that navigating complexity becomes a matter of moving through it rather than mastering it. I think of this as *latent-space curation*: choosing what a reduced space should hold, how it is shaped, and how one moves across it.

This grows out of instrument design, at the centre of my practice: I build the instruments themselves and treat the interface and its latent space as compositional material. From there the work opens onto adaptive environments, the acoustics of physical space, and a critique of the technologies it relies on.

The full record of publications, talks and presentations is [below](#writing).

## Selected research

<div class="research-threads" markdown="1">

<div class="research-thread" markdown="1">
<p class="rt-year">2026 · Alpha testing</p>
### audiostellar2: a constellation of sounds
A macOS build in the AudioStellar 2 line (a fork of AudioStellar, GPL-3) that lays a sound collection out as a constellation of samples on a 2-D map generated from audio similarity, then lets you play it: explorers, sequencers, particle emitters, trajectories, morphing and AudioGuide-style concatenative matching, with OSC and MIDI. My build computes the map entirely in native C++ (UMAP, t-SNE, MDS or PCA, no Python) and shares a single descriptor space between the map and the concatenative matcher, so that nearness on the map genuinely tracks sonic similarity. Currently in alpha testing and available on request, ahead of a public release.
</div>

<div class="research-thread" markdown="1">
<p class="rt-year">2025-2026 · Software</p>
### ec2~: granular synthesis in Max
A multichannel granular-synthesis external for Max, porting the EmissionControl2 engine and the ideas in Curtis Roads's *Microsound*. It handles up to around two thousand simultaneous grains across sixteen channels, driven over OSC, with per-grain stochastic variation and several strategies for spreading sound across space: a performable instrument for building dense, evolving textures.
[Code ↗](https://github.com/anatrini/max-emission-control)
</div>

<div class="research-thread" markdown="1">
<p class="rt-year">2025 · P+ARTS</p>
### Digital Neomedievalism: art and resistance in the platform age
A theoretical paper proposing "digital neomedievalism" as a lens on the hidden power structures and ecological costs of contemporary digital systems. It argues that platforms such as generative AI and cloud computing reproduce feudal dynamics of asymmetric dependency, data extraction and precarious labour, which I read as "recursive hybrid ontologies": self-reinforcing systems that bind historical injustices to computational futures. Working through my own installation practice, the paper frames artistic research as a form of *epistemic activism*, and points to open-source and craft practices as present-day echoes of the medieval guild.
[About the conference ↗](https://partsproject.eu/activity/parts-conference-on-artistic-research/)
</div>

<div class="research-thread" markdown="1">
<p class="rt-year">2021-2024 · CIM</p>
### Wavepilot: a map of an instrument's controls
An open-source framework (command-line tool and Python module) for exploring and reshaping the parameters of digital multimedia instruments. A variational autoencoder compresses an instrument's high-dimensional parameter space into a low-dimensional map you can navigate; moving through it changes many parameters at once, while radial-basis-function interpolation fills in smooth transitions between saved states. Because it works on the parameter values themselves rather than on audio analysis, it stays agnostic to the medium, whether audio, video or effects, and the resulting meta-GUI works as a kind of score. It grew out of my own compositional practice (used in Wunderkammer and Sandy Island) and belongs to my thesis, *Hybrid Ecosystems*.
[Read the paper ↗](https://www.aimi-musica.org/wp-content/uploads/2024/09/programma_XXIV_CIM.pdf)
</div>

<div class="research-thread" markdown="1">
<p class="rt-year">2022-2023 · AIMC</p>
### Sandy Island: parameters as a place
A site-specific audio-visual installation (2022) built on a new way of framing synthesis-space exploration: the parameters of aggregate instruments are treated, agnostically, as points in a three-dimensional virtual space. From that space the system can morph between settings and self-generate new instrument configurations with the characteristics I am after. The paper concentrates on this underlying technology, its flexibility and its capacity for self-generation, and places the work within a wider, data-driven line of research into self-evolving multimedia environments that adapt to the conditions around them. Part of my doctoral thesis, *Hybrid Ecosystems*.
[Read the paper ↗](https://aimc2023.pubpub.org/pub/a3ofjcxd/release/1)
</div>

<div class="research-thread" markdown="1">
<p class="rt-year">2022-2025 · Software</p>
### AcousticFEM: the physics of a room
A Python tool for the modal analysis of spaces: using the finite element method (FEniCSx) it solves the Helmholtz eigenvalue problem to compute a room's resonant modes and reverberation time (T60) from an arbitrary 3-D mesh, with interactive 3-D visualisations of the sound-pressure fields. A step from the parameter-spaces of instruments into the acoustics of real, physical spaces.
[Code ↗](https://github.com/anatrini/AcousticFEM)
</div>

<div class="research-thread" markdown="1">
<p class="rt-year">2022-2023 · Software</p>
### PPG Wave: emulating a classic
A software synthesiser (AU/VST3, macOS) loosely modelled on the core engine of the PPG Wave 2.3, playing back the original's wave bank. It is a hands-on study in reconstructing a piece of historic synthesis hardware in software, controllable over OSC, and part of an ongoing interest in where instrument-building, sound synthesis and preservation meet.
[Code ↗](https://github.com/anatrini/Waveset-Emulation)
</div>

</div>

## Publications, Talks & Presentations
{: #writing}

### 2026
- **Estetiche, agency e responsabilità nelle arti multimediali** (Doctoral seminar for XLI-cycle PhD students) · Piacenza • Conservatorio Statale di Musica G. Nicolini
- **Physiological and Physical Foundations of Creative Systems** (Panel with Rolf Bader and Jakub Sawicki) · Hamburg • International Computer Music Conference (ICMC2026)
- **MetaConcert: A Shared VR Audio-Visual Experience Model Reducing User Isolation Through Synchronized 360 Video on HMDs and HOA Playback on a Multichannel Dome** (Conference Paper, co-authored with M. Cantonetti, P. Malpeli & G. Rizzo) · Hamburg • International Computer Music Conference (ICMC2026)

### 2025
- **Digital Neomedievalism: Art and Resistance in the Platform Age** (Conference Paper) · ABANA Napoli • P+ARTS Conference on Artistic Research
- **Ecologie del possibile. Simulazione e Worldbuilding in Sandy Island** (Presentation) · Tempo Reale, Florence • MAGNETICA

### 2024
- **Phausto: Embedding the Faust Compiler in the Pharo World** (Conference Paper, co-authored with D. Cipriani & S.J. Montaño) · SoundMiT Torino • International Faust Conference (IFC-24)
- **WavePilot: Framework multidimensionale per l'esplorazione dello spazio parametrico degli strumenti digitali** (Conference Paper) · Università di Torino • XXIV Colloqui di Informatica Musicale

### 2023
- **Sandy Island: A New Form of Parameters' Space Management** (Conference Paper) · University of Sussex / Intelligent Instrument Lab Iceland • AI and Music Creativity Conference (AIMC2023)
- **The Awareness of the Tools in the Neural Media Praxis** (Book Chapter) · Wolke Verlag, Berlin • KISS: Kinetics in Sound & Space monograph

### 2021
- **Proceedings of the Sixth International Conference on Technologies for Music Notation and Representation** (Co-Editor) · Hamburg • TENOR 2020/21

### 2020
- **Panoramica della libreria MaxScore** (Workshop) · Reggio Emilia • Dialoghi sul comporre

### 2019
- **Alex McLean and Roger T. Dean (Eds.), The Oxford Handbook of Algorithmic Music** (Review) · Sage Publications • Musicæ Scientiæ

### 2017
- **MaxPiccolo: A Prototype for an Early Computer-Based Music Education in Schools** (Conference Paper) · Paris • Journées d'informatique musicale (JIM2017)
- **MaxPiccolo, Historical Background and Overview** (Presentation) · Karlsruhe • ZKM | next_generation 7.0

### 2016
- **The State of the Art on the Educational Software Tools for Electroacoustic Composition** (Conference Paper) · Hamburg • Sound and Music Computing Conference (SMC2016)
- **Suono, elettronica e musica: valutazioni per una didattica della musica** (Presentation) · Budrio • Dialoghi sul comporre

## Workshops & Educational Activities

I have developed online tutorial series for Hamburg Open Online University (HOOU):
- **Interactivity in Classrooms: Introduction to Pure Data and TouchOSC** (2019-2020) · 10-part series for music educators
- **Chiptune Music with Sunvox** (2018-2019) · 10-part series for music educators

I regularly serve as peer reviewer for international conferences including AIMC, ICMC, NIME, TENOR, and SMC.
