---
title: 'Wunderkammer'
subtitle: 'generative audio and light environment (2021)'
date: 2022-03-24 18:45:00
description: ''
featured_image: '/images/works/wunderkammer/cover.jpg'
---



## Short description

The installation has been created for the opening of Spazio Materia in Prato a space devoted to host improvised workshops and concerts.
The work has been realised at Spazio Materia in Prato. Spazio Materia is used both as an exhibition venue and as a dance theatre workshop. The artwork has been created as a compendium to the venue's unique architecture, an ancient commercial building of the XV century with a ceiling made
of pavilion vaults.

| Première                | Date                     | Tools                      | Playback format       | Duration     |
|-------------------------|--------------------------|----------------------------|-----------------------|--------------|
| Spazio Materia, Prato   | from 27 to 30 May 2021   | Live, Faust, Max, Python   | 4.1 and neon lights   | 3 days ca.   |



## Program notes

Wunderkammer is a site-specific interactive sound and light installation that run from 27.5 to 30.5.2021. It is conceived as an "intelligent space" in which unique sound objects manifest as audible traces of the visitor's actions.
The acoustics of the place where the work is set up, was previously analysed and used to develop physical models of the environment, which are then converted into soft instruments (VSTs). The sounds produced by the visitors are captured by a microphone that analyses their spectro-morphological characteristics. The resulting data is used to read out the contents of a neural network that carries the values of the sound synthesis parameters, which are thus modified in real time.
Wunderkammer is designed as a living organism with a life cycle of about 72 hours. At the beginning (excerpt 1), the neural network has excellent adaptive capabilities and the visitor can exert considerable control over the network, resulting in a heterogeneous and unpredictable outcome. Over time, the work becomes less responsive to external stimuli and the interpolation capacity of the neural network is reduced until it is exhausted, leading to a homogeneous result over which the visitor no longer exercises control (excerpt 3).
The aim of the work, presented in a public space, is to make visitors aware of their role as co-creators of the soundscape in relation to the characteristics of the surrounding space. In this way, a place of participatory interaction is created that promotes the quality of the relationship between environment-visitor-intervention of the artist, being aware that it is not possible to observe without transforming.



## Images

The goal of the GUI is to assign the presets, representing the values of the synthesis parameters to a corresponding point in a two-dimensional space described by a pair of values (x,y). Once the presets, in the form of normalized vectors, are assigned to the points, the system is able to calculate the vector values of interpolation between two points to each of which a preset has been previously assigned, and to send them to the effects chain that has been mapped.
On the left image an overview of the system is shown. Once the knobs have been finely tuned in order to obtain the desired sound effect, a first preset it is created and it is saved in the form of a normalised vector (right image). Once the presets are created, a certain amount of
information can be extracted from them, such as the euclidean distance, the similarity between the different or the centre of gravity of each preset. The corresponding data are formatted and used to populate a dictionary and are then represented as two-dimensional points via multidimensional scaling.

<div class="gallery" data-columns="2">
	<img src="{{site.baseurl}}/images/works/wunderkammer/snippet-1.jpg">
	<img src="{{site.baseurl}}/images/works/wunderkammer/snippet-2.jpg">
</div>



## Recording

Three live excerpts of the installation to show the evolutionary character of the work. The first excerpt has been recorded whe the system has been turned for the very first time, the second one 3o hours later ca. the last one just before turning off the system after 70 hours ca.

<iframe src="https://player.vimeo.com/video/690577455" width="640" height="360" frameborder="0" allowfullscreen></iframe>

<iframe src="https://player.vimeo.com/video/690624889" width="640" height="360" frameborder="0" allowfullscreen></iframe>

<iframe src="https://player.vimeo.com/video/690628207" width="640" height="360" frameborder="0" allowfullscreen></iframe>


---