---
title: 'Wunderkammer'
subtitle: 'generative audio and light environment (2021)'
date: 2023-01-09 18:04:00
description: ''
featured_image: '/images/works/wunderkammer/cover.jpg'
---


<iframe src="https://player.vimeo.com/video/690577455" width="640" height="360" frameborder="0" allowfullscreen></iframe>
A live recording when the system was turned on right before the opening.

<iframe src="https://player.vimeo.com/video/690619186" width="640" height="360" frameborder="0" allowfullscreen></iframe>

<iframe src="https://player.vimeo.com/video/690624889" width="640" height="360" frameborder="0" allowfullscreen></iframe>

<iframe src="https://player.vimeo.com/video/690628207" width="640" height="360" frameborder="0" allowfullscreen></iframe>
Three dumps of the systems to show the evolutionary character of the work. The dumps have been recorded 1 hour, 30 and 70 hours after the opening respectively.


The installation has been realised for the opening of Spazio Materia in Prato a space devoted to host performances and dance theatrer workshops. The work has been thought as a compendium to the venue's unique architecture, an ancient commercial building of the 15th century with a ceiling made of pavilion vaults.
_Wunderkammer_ is an "intelligent space" in which unique sound objects manifest as audible traces of the visitor's actions.
The acoustics of the space, has been analysed and used to develop physical models of the environment, which are then converted into software instruments. The sounds produced by the visitors are captured by a microphone that analyses their spectro-morphological characteristics. The resulting data is used to read out the contents of a neural network that carries the values of the sound synthesis parameters, which are thus modified in real time.
_Wunderkammer_ is designed as a living organism with a life cycle of about 72 hours. At the beginning (excerpt 1 and 2), the neural network exhibits excellent adaptive capabilities and the visitors are able to exert a certain degree of control over the network. Over time, the work becomes less responsive to external stimuli and the interpolation capacity of the neural network is reduced until it is exhausted, leading to a homogeneous result over which the visitor no longer exercises any control (excerpt 3).


| Première                | Date                     | Tools                      | Playback format       | Duration     |
|-------------------------|--------------------------|----------------------------|-----------------------|--------------|
| Spazio Materia, Prato   | from 27 to 30 May 2021   | Live, Faust, Max, Python   | 4.1 and neon lights   | 3 days ca.   |



The GUI shown in the pictures below has been used to control the presets and thus the values of the synthesis parameters.
On the left an overview of the system. Once the knobs have been tweaked in order to get the desired sound effect, a first preset is created and stored. A certain amount of information can be extracted from the presets, such as the euclidean distance, the similarity between different ones or the centre of gravity of each preset. These data are used to populate a dictionary (right image) and represented as two-dimensional points via multidimensional scaling. As a last step a regression-like operation on the the data held by the points allows the system to smoothly interpolate the synthesis's parameters.


<div class="gallery" data-columns="2">
	<img src="{{site.baseurl}}/images/works/wunderkammer/snippet-1.jpg">
	<img src="{{site.baseurl}}/images/works/wunderkammer/snippet-2.jpg">
</div>

---