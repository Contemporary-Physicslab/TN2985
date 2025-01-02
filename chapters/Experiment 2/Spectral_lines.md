# Spectral lines of Hg and Na

## Goal

In this experiment, we will study the light emitted by a mercury lamp (Hg) and sodium (Na). The spectrum for such lamps is comprised of a few clear spectral lines. The goal for this experiment will be to determine the wavelengths of those lines as accurately as possible. We will use a diffraction grating to do so. One of the questions related to this experiment is: how small can the difference in wavelength of two spectral lines be for those lines to still show up separately on the setup?

## Preparation
Before you arrive at the practical, you are expected to have properly studied this chapter of the manual, and to have written down the answers to the twelve questions that are noted in your lab journal. If any questions came up during your preparation, write them down in your journal and ask them at the beginning of the experiment. 

### Theoretical Background
#### What is a diffraction grating?
A diffraction grating is a plate with a very large number of parallel lines on it, which are spaced an equal distance from each other. A schematic representation is shown in {numref}`fig:Diffraction_grating`.


```{figure} /figures/Spectral/figuur1.png
:width: 80%
:name: fig:Diffraction_Grating

Schematic representation of a diffraction grating. Typical measurements are 5x5 cm. The number of lines per mm is in the range 100-1000.
```

Typical measurements are 5x5 cm and a typical value for the number of lines per mm is in the range 100-1000. A diffraction grating can be either transmissive or or reflective, known, respectively, as a transmission or a reflection grating. 

#### What does a diffraction grating do?
A diffraction grating is an optical instrument which diffracts light. The larger the wavelength, the larger the diffraction. {numref}`fig:Transmissive_grating` shows what happens when 'white' light with a continuous colour spectrum between blue and red falls on a *transmission grating*. A part of the light goes straight ahead and remains white. This is the $0^{th}$ order diffraction pattern. Under and above of this order we see spectacular ribbons of which show a colour range from red to blue". These are the $1^{st}$ order diffraction patterns. These patters can repeat itself multiple times ($2^{nd}$ order, $3^{rd}$ order, ...).


```{figure} /figures/Spectral/figuur2_EN.png
:width: 80%
:name: fig:Transmissive_grating

A transmissive grating in operation. White light with a continuous colour spectrum from blue to red is split into multiple colours and orders.
```

The purpose of a diffraction grating is to study the colour spectrum of a light source. As seen in {numref}`fig:Transmissive_grating`, the vertical distance on the screen is a measurement for the wavelength of a certain colour. A diffraction grating also allows one to select a desired colour from white light.

#### Light rays and wavefronts
This experiment focuses on the wave characteristics of light. The terms interference and diffraction are central to this. The Huygens Principle is often used to explain diffraction phenomena. This principle relates to the extension of wavefronts. A wavefront is a collection of points where the "vibration" is in the same phase. Waves in water are in fact wavefronts. If we throw a stone into the water, then we see wavefronts that extend in a circular fashion. If we look at waves washing up at the beach, we see a series of parallel wavefronts. These characteristic wavefronts are shown schematically in {numref}`fig:Wave_patterns`.


```{figure} /figures/Spectral/figuur3_EN.png
:width: 80%
:name: fig:Wave_patterns

Two characteristic wave patterns. Left: the extension of circular (spherical) shaped wavefronts. Right: plane (flat) waves moving to the right (= parallel light bundle).
```

The relation with light rays is that the propagation direction of the light in a certain point is displayed by a light ray. If a wave propagates in an isotropic medium, then the direction of it is perpendicular to the wavefront. See {numref}`fig:Wave_patterns`.

#### Huygens principle (Wolfson, ch. 32.5)

*All points on a wavefront work like point sources for spherically shaped 'waves' which propagate with lightspeed in the medium. A short time $\Delta t$ later, a new wavefront is formed by the surface that touches all 'waves' which propagate in the previous direction of propagation.*

{numref}`fig:Wave_propagation` shows how this works. On the left we see how a spherically shaped wavefront at $t$ develops itself to a new spherically shaped wavefront at $t + \Delta t$. For four points on the wavefront at $t = t$ is shown how the waves develop themselves in a time interval $\Delta t$. The new wavefront at $t + \Delta t$ is the 'tangent' line to these waves.


```{figure} /figures/Spectral/figuur4_EN.png
:width: 80%
:name: fig:Wave_propagation

Propagation of a wavefront according to the Huygens principle. Left a spherically shaped wavefront and right a plane wavefront.
```

The image on the right in {numref}`fig:Wave_propagation` displays the same way of propagation for a plane wavefront. As said, the Huygens Principle explains the diffraction of light. For the first application, we look at what happens when a plane wave falls on a screen with a hole in it. The diameter of the hole is comparable with or smaller than the wavelength of the light. See {numref}`fig:plane_to_source`.


```{figure} /figures/Spectral/figuur5.png
:width: 80%
:name: fig:plane_to_source

A plane light wave falls on a screen with a hole with a diameter comparable to the wavelength. According to the principle of Huygens, the hole acts like a point source that emits spherically extending waves.
```


In {numref}`fig:plane_to_source` a plane wave falls on the screen from the left side. The light that falls in the hole, emits spherically propagating waves according to the Huygens principle. If the size of the hole is of the same order as the wavelength, most of the light is diffracted. To see a demonstration with a tank filled with water, look up 'ripple tank diffraction' on YouTube. In Fig. 32.33 (c) of Wolfson you can also see how the intensity of the light.

```{figure} /figures/Spectral/figuur6.png
:width: 80%
:name: fig:two_point_sources

A plane light wave falls on a screen with two holes. These holes work like point sources that emit spherically propagating waves in phase. Both waves interfere constructively in point P in this situation.
```



#### Interference
The next question is: what happens if there are two holes in the screen? This is shown in {numref}`fig:two_point_sources` where a plane wave falls perpendicularly from the left side on a screen with two holes (diameter $\geq$ wavelength). The distance between the holes, $d$, is three times the wavelength for instance. The plane wave causes the holes to emit spherically shaped waves in phase. The light in a point P (See {numref}`fig:two_point_sources`) is a superposition of the light that is emitted by the two sources. Both sources of light interfere with each other. The distance between the upper hole and P that is covered by the light is not the same as the distance between the bottom hole and P covered by the light. The length of the path covered by the light is different, meaning that the phase of the two waves at P is not equal. However, it is possible that the phase difference is exactly the same as a whole number times $2\pi$, as shown in {numref}`fig:two_point_sources`. The phase difference is $2\pi$ and the waves interfere constructively in P. For points just above and below P, the phase difference is different and there is no longer 100\% constructive interference. Thus the light intensity will be lower.

```{exercise}
:class: dropdown
Light from both sources arrive at point M. What is the path (phase) difference? What does this mean in terms of constructive or destructive interference? Does this depend on the wavelength of the light?
```

It can be deduced from {numref}`fig:two_point_sources`  that the path difference can be approached by $d \sin \theta$. The angle $\theta$ determines the place of P (and vice versa). Constructive interference occurs when:

$$
d \sin \theta = m\lambda
$$ (eq:order_of_interference)

with $m$ an integer that we call the order.  

```{exercise}
:class: dropdown
$m$ can also be negative. What does this mean for $\theta$? What is the location of P in this case? 
```

```{exercise}
:class: dropdown
What consequences does a change in $d, m$ and/or $\lambda$ have on the angle in the case of constructive interference?
```

#### Interference in "a point far away". Multiple sources.
In {numref}`fig:two_point_sources` the distance between the screen and a source is of the same order as the distance between two sources. This concerns distances of the order 10 $\mu \mathrm{m}$. In practice we work with distance in the range of $10 - 100 \mathrm{cm}$. So, we are interested in what happens in *points* that are *far away* from the sources.

```{figure} /figures/Spectral/figuur7.png
:width: 80%
:name: fig:three_point_sources

The upper part of this figure is identical to {numref}`fig:two_point_sources`, the only difference is that the point P is now infinitely far away from the sources. There is constructive interference in point P. The bottom right part of the figure shows that extra holes with spacing $d$ also contribute to  the constructive interference. The slanted striped lines on the right side of the figure indicate the development of plane wavefronts (parallel bundle).
```

{numref}`fig:three_point_sources` shows that the paths from the sources towards P now run parallel to each other. Because of this, the condition for constructive interference (eqn. {eq}`eq:order_of_interference`) is exact.



It is not hard to imagine what happens if we add an extra hole. We make sure the third hole is located on the line that goes through the two other holes and that the mutual distance is $d$  (see {numref}`fig:three_point_sources` above). The third source also emits, in phase, a wave that contributes to the amplitude in the far point P. The correlated path runs parallel to the other path. The path difference is $\lambda$ or $2\lambda$. So the contribution of the third source interferes constructively with the other sources.


We can continue this reasoning for $4, 5, .. , N$ holes that lie on a line with mutual distance d. In this manner we construct the theoretical description for a diffraction grating with $N$ lines. The amplitude of the electric (magnetic) field of the light in P is $N$ times as large as the amplitude that is produced by a single hole.


If we look at {numref}`fig:three_point_sources`, it is tempting to drawn lines that go through the points where the drawn waves run in phase (the dotted lines on the right side in {numref}`fig:three_point_sources`). These lines are perpendicular to the direction of propagation and you might be inclined to conceive these lines as wavefronts of a parallel bundle. That thought is fine, but you must be sure that for instance the points on the dotted line between the points a and b (in {numref}`fig:three_point_sources`) vibrate in phase with the vibrations in a and b. Close to the sources this is a difficult matter, but *far away* from the sources this is certainly the case. You can determine this using Huygens' principle. This also follows from the wave equation. For light waves that are possible in a uniform medium, the direction of propagation is always perpendicular to the wavefronts.


```{exercise}
:class: dropdown

The direction of the first order diffraction of light with one certain wavelength is drawn in {numref}`fig:three_point_sources`. How do you construct the direction of the second order diffraction? Do this (in {numref}`fig:three_point_sources`).
```

#### From transmission to reflection grating. Grating equation.
Up until now, we have discussed the operation of a diffraction grating according to a transmission grating. However, reflection gratings are more commonly used. These have accurate grooves instead of translucent lines. Everything that has been said above about plane waves, point sources, including {eq}`eq:order_of_interference` is also true for reflection gratings.


At the derivation of eqn. {eq}`eq:order_of_interference` it is assumed that the incoming plane wave falls perpendicular into the diffraction grating. That restriction does not have to be made. The plane wave can also fall at an angle with the normal of the diffraction grating. {numref}`fig:Grating_reflection` demonstrates how the angles of the exiting bundles can be found for a parallel bundle that falls at angle $i$ with the normal of the diffraction grating.


```{figure} /figures/Spectral/figuur8.png
:width: 80%
:name: fig:Grating_reflection

onstruction of the angle of reflection for a reflection grating. a) a plane wave falls at an angle $i$ onto the diffraction grating. The wavefront g reaches grating line 1. This incites the development of a spherical wavefront from 1. A time interval $\Delta t=(d\sin i)/c$ later reaches the plane front g grating line 2. b) at this point the spherical wavefront from 1 has the radius $d\sin i$. The vibrations on this wavefront and the ones in point 2 are in phase. The line that goes through 2 and touches the spherical wavefront determines the direction of propagation of the 0-th order exiting wavefronts (wavefront is perpendicular to direction of propagation) and c) the construction of the direction of the 1-st order exiting bundle.
```

In {numref}`fig:Grating_reflection`a, a parallel bundle falls at an angle $i$ with the normal of the diffraction grating. A plane wavefront will first reach grating point 1 and, according to Huygens, that point emits spherically shaped waves. A time $\Delta t$ later the wavefront reaches grating 2. From {numref}`fig:Grating_reflection`a it turns out that $\Delta t=(d\sin i)/c$ ($d$ is the distance between two grating lines and $c$ is the speed of light). In {numref}`fig:Grating_reflection`b we see how far the spherical wave from grating point 1 has propagated. As said, the phase of points on a wavefront is by definition equal, but in this case the vibration in grating point 2 is also in the same phase. We can now draw a line which goes through grating point 2 and touches the spherical wave. This line is cut by the perpendicular line that goes through grating point 1 and the point where the first line touches the spherical wave. These two lines can be seen as the "precursors" a wavefront / direction of propagation pair before the exiting wave (as discussed at {numref}`fig:three_point_sources`). Just like in {numref}`fig:three_point_sources` more grating lines can be added to this consideration.


{numref}`fig:Grating_reflection`b is special because in the way that it turns out from the figure that $d\sin u = d\sin i$. In this case the exiting bundle is called the 0$^{th}$ order diffraction bundle.

Of course not only the drawn wavefront in {numref}`fig:Grating_reflection`b has the same phase as the phase in grating point 2. Wavefronts belonging to spherical waves that have left earlier,have the phase as the phase in grating point 2 as well (apart from a difference of $2\pi n$ of course). In {numref}`fig:Grating_reflection`c you can see a bundle emerge from the sketching of the tangent line on the wavefront with radius $(d\sin i) + \lambda$. It turns out from the figure that in this case $d\sin u_1 = (d\sin i) + \lambda$. Of course we can also do this for wavefronts with radius $(d\sin i) + m\lambda$, with $m$ an integer. For an incident angle $i$ we can determine the angles $u_m$ from possibly exiting bundles with:

$$
d \sin u_m = d \sin i + m\lambda
$$ (eq:reflection_angle_um)

This is the grating equation. It follows from this equation that, if a plane wave with a certain wavelength falls on the diffraction grating under an angle $i$, different plane waves are reflected with the same wavelength under different angles $u_m$. We can determine the wavelength of a certain component by accurately measuring $i$ and $u_m$, and using eqn. {eq}`eq:reflection_angle_um`.


```{exercise}
:class: dropdown
$m$ can also be negative. What does this say about the relation between $i$ and $u_m$?
```

```{exercise}
:class: dropdown
When does eqn. {eq}`eq:order_of_interference` equal eqn. {eq}`eq:reflection_angle_um`?
```

#### Processing and generating light with a flat wavefront

A direct measurement of the direction of a parallel bundle will not be very accurate. It is far more effective if we first let the bundle fall on a positive lens. The bundle then converges to a point in the focal plane. See {numref}`fig:Course_of_light`.


```{figure} /figures/Spectral/figuur9.png
:width: 80%
:name: fig:Course_of_light

The course of the wavefronts at the focusing of a light bundle with a plane wavefront. On the right, the relation between the direction of the bundle and the position of the focal point is shown.
```

When the focal point is placed on a screen, the position of the spot can be used to determine the direction of the bundle. The relation between the direction of the bundle and the position on the screen is shown on the right side in {numref}`fig:Course_of_light`.

#### Incident light bundle. Optical system.
At the derivation of eqn. {eq}`eq:reflection_angle_um` we assume that the incident light is a parallel bundle. This assumption is not justified for the lamp used in this experiment. The light of the mercury lamp is divergent by nature. To counter this, we will need to  *collimate* the sources.


Collimation is easily done for a point source. You only need to place the source in the focal point of a convergent lens. In fact, the exact opposite of what is happening in {numref}`fig:Course_of_light`. Unfortunately, the lamp used in our experiment is not a point source. A small slit placed in the focal point of a lens will be needed to collimate the source, see {numref}`fig:Collimation`.

```{figure} /figures/Spectral/figuur10.png
:width: 80%
:name: fig:Collimation

By placing the lens at the right position, the source is collimated.
```

The narrower the slit, the better the light from the lens can be characterised as one plane wave with one sharp direction. A disadvantage is of course that the intensity of the light that falls on the diffraction grating diminishes as the slit is narrowed.


Our setup for the determination of the wavelength of spectral lines with a diffraction grating now consists of: a source (lamp), a slit, a collimating lens, the diffraction grating, an image lens, and a screen. These parts will be setup in such a way that an image of the slit is formed on the screen.


```{exercise}
:class: dropdown
What determines whether the size of the slit is reduced or magnified in the image?
What is beneficial to the accuracy of the determination of the wavelength of a spectral line: a reduction or magnification? Explain.
```

### Method

#### Setup

The setup that we will use for the determination of the wavelength of the visible spectral lines of the Hg lamp is shown in {numref}`fig:II8_Setup`. This setup is also called the monochromator setup. The only moving part of the setup is the diffraction grating. The grating will be mounted on a turntable with an angle distribution that makes it possible to measure the angle (See {numref}`fig:II8_Setup`).

```{figure} /figures/Spectral/figuur11_EN.png
:width: 80%
:name: fig:II8_Setup

Setup for measuring the wavelength of spectral lines.
```

Using a slit directly behind the lamp, and a lens F$_1$ produce a collimated (parallel) light bundle. This bundle hits the diffraction grating. We have seen that, because of the diffraction of the light through the grating, depending on the wavelength, parallel bundles are reflected at different angles. By changing the angle of the diffraction grating in respect to the incident light bundle, we can make a certain colour fall on a set point on the screen or the camera with the help of lens F$_2$. From the according angle, we can calculate the wavelength of the light.


At one specific angle for the diffraction grating, it seems like the light is conveyed. At this angle it seems like the light is portrayed by a normal mirror (via the lens F$_2$) to the set point on the screen. In fact, the 0$^{th}$ order diffraction pattern is portrayed in the set point. This does not change with the wavelength of the light. This position is shown in Fig. 11 by the dotted line. The angle between the normal on the diffraction grating and the direction of the incident light is $\alpha$ (thus the angle between the incident and reflected wave is 2$\alpha$). Note that $\alpha$ is determined by the positions of the lamp, the lens F$_1$, the lens F$_2$, and the point on the screen.


If we want to use a certain setup in practice for, for example, the measurement of a number of spectral lines, then we measure the angle between the normal of the diffraction grating and the 'mirror position'. In {numref}`fig:II8_Setup` this angle is $\phi$.

#### Elaboration
If we call the incident angle $i$ and the reflected angle $u$, then the following formulas apply (see {numref}`fig:II8_Setup`)

$$
\begin{split}
    i = \alpha + \phi  \\
    u = \alpha - \phi
    \label{eq:angle_inc_refl}
\end{split}
$$ (eq:angle_inc_refl)

```{exercise}

Show that when you fill in eqn. {eq}`eq:angle_inc_refl` in the grating formula {eq}`eq:reflection_angle_um`, you get the following condition for light with wavelength $\lambda$ that falls on the set point.

```

$$
2 \cos \alpha \sin \phi = -mN\lambda
$$ (eq:II8_Que8)

In which $N$ is the number of lines per length unit, $\lambda$ the wavelength and the order of diffraction $m$. Note that $m$ can be either positive or negative.


```{exercise}
For the situation drawn in {numref}`fig:II8_Setup`, is $m$ positive or negative? Does this correspond to your answer from question 5?
```

```{exercise}
From measurements of $\alpha$ and $\phi$ we can use eqn. {eq}`eq:II8_Que8` to calculate $\lambda$. If we call the uncertainties in $\alpha$ and $\phi$, u($\alpha$) and u($\phi$) respectively, derive the law of propagation of errors for the uncertainty in $\lambda$, $u(\lambda)$. 
```

*If the difference between two spectral lines is very small,* they cannot be distinguished by the naked eye, and the diffraction grating cannot be rotated accurately enough.


To still be able to measure the little wavelength difference, we replace the screen by a camera. The enlargement of the camera allows us to be able see and accurately measure the separation between the spectral lines.


The procedure for this is as follows. From the grating equation {eq}`eq:reflection_angle_um` follows that with a set angle of incidence i, a small change in the wavelength $\lambda$ is paired with a small change in the angle of reflection $u$. The relation is:

$$
\Delta \lambda = \frac{\cos u}{mN}\Delta u
$$ (eq:deltalabda)

We calculate $\Delta u$ from the distance of the spectral lines on the camera and the focal point of f$_2$. The unit of $\Delta u$ is radian.


```{exercise}
With eqn. {eq}`eq:deltalabda` we can determine $\Delta \lambda$ from measurements of $u$ and $\Delta u$. Of course you want to know uncertainty in $\Delta \lambda$. If you use the law of propagation for errors in the common way, you encounter a notation problem. Thus, call the angle of reflection v (was u) and the change in the angle of reflection $\Delta v$ (was $\Delta u$). If we indicate the uncertainties in v and $\Delta v$ with $u(v)$ and $u(\Delta v)$, derive the law of propagation of errors for the uncertainty in $\Delta \lambda$, u($\lambda$).
```

#### Resolving (separating) power
Spectral lines have a certain width. It is clear that when the distance between two separate lines decreases, they will overlap and become indistinguishable from each other, at least with the naked eye. The intensity of the light as function of the wavelength is shown in {numref}`fig:Resolving_Power`. 

```{figure} /figures/Spectral/figuur12.png
:width: 80%
:name: fig:Resolving_Power

Resolving power
```



The resolving power of the setup is characterized by the quantity $R$:

$$
R=\frac{\lambda}{\Delta \lambda}
$$ (eq:Resolving_Power)

in which $\Delta \lambda$ is the smallest observable difference in wavelength. This equation only holds for the first order. For higher orders we expect more spacing between spectral lines. Therefore the resolving power is higher at higher orders.


In practice, we make a prediction for $\Delta \lambda$ based on a picture of two nearby spectral lines. We use this estimated value and the average value of the two spectral lines. We can compare this value with the theoretical upper limit:

$$
R_{theor} = \frac{\lambda}{\Delta \lambda} = mN_{tot}
$$ (eq:Theor_Resolving_Power)

in which $m$ is the order of the spectral lines. $N_{tot}$ is the total number of grading lines involved in the interference process. If the entire grating is used, $N_{tot}$ resembles the total number of lines of the grating.

## Method
### Preparation phase
**First and foremost:** visor trusts that you will use the equipment with care at the practicum. This applies especially to the handling with the diffraction gratings and lenses. Do not be clumsy! Read the following instructions and apply them!

-	**ONLY HOLD THE DIFFRACTION GRATINGS AT THE RECTANGULAR FRAME OR AT THE STEM OF THE FRAME. A fingerprint or a scratch can not be cleaned or repaired. Diffraction gratings are very expensive.**
-	The spectral lamps become hot when they are turned on. **Only hold the stem of the lamp. Otherwise you can get burned badly.**
-	Hold the lenses and other optical components at the stem of the frame.
-	Make sure that all components are tightly secured with the clamp and screw on the breadboard.
-	**Again: Do not touch the lenses and diffraction gratings in the central part.**
-	**Do not leave equipment on the edge of the table. Secure them. Things can fall on the ground and break.**
- **Do not leave components on the table. This way you prevent damage.**
-	Do not look into the lamp directly. This can damage your eyes.
-	Turn the lamp, camera and computer off when you do not use them.

**A tip:** When setting up the experiments, you have to make sure that the entirety of the optical system is in line. Make sure that the elements that have to be in line, really do line up. Look at your setup from above and use the lines on the breadboard. Also make sure all elements are at the same height. Look from the side and use the height indicator.


### Experimental phase
1. Build the monochromator setup. Use the Hg lamp and the 600 lines per mm diffraction grating. Start with the screen. Hold enough distance to be able to replace the screen by the camera. Control the collimation and assure yourself that the screen is in the focal point of f$_2$.
1. Rotate the diffraction grating such that $i (=\alpha+\phi) = 0$. (use autocollimation, ask the assistant). Read the angle from the angle scale. This the zero point. Pick a point on the screen and rotate the diffraction grating such that the 0-th order falls exactly on that point. How do you recognise the 0-th order here? Read the angle scale and determine $\alpha$. Do not forget to estimate the uncertainty in the angle. Play around with the width of the slit.
1. Now rotate the diffraction grating systematically and notate the angle for each spectral line that falls on the chosen point on the screen. Do this for as many orders as possible. Make a table with the headings: colour, order, reading, $\phi$, $\lambda$, u($\lambda$) and the result from preparation question 10. How do you get $\phi$?
Use Python to help you fill in the last three columns.
Also note that a set of colours represents one order.

1. Make a plot in which you plot the calculated wavelength on the vertical axis with its respected uncertainty against the order m on the horizontal axis. Plot the literary values as horizontal dotted lines in the same figure.
1. Calculate the weighted average of the wavelength for each measured spectral line and calculate the uncertainty in this average value. Take as weight $w = 1/(u(\lambda))^2$. Use the given formulas from the Appendix for this. Does the result contradict the literary value?
1. Next, study the splitting of the yellow Hg lines. Replace the screen by the camera. Portray an order of the yellow lines on the camera (note: The colour can be different on the screen. Pay close attention.). (Think about the width of the slit and the use of the filter). Save the result for the report. (Use the save icon at the middle top.) Determine the distance between the lines on the screen in pixels. Calculate the difference in the angle of reflection $\Delta u$ from this. Check if your value of u is still current. Calculate the difference in the wavelength $\Delta \lambda$ with eqn. {eq}`eq:deltalabda`. What is the uncertainty $u(\Delta \lambda)$?
1. 	Replace the Hg-lamp with the Na-lamp and use the camera instead of the screen. Measure the angels of the visible spectral lines. What is the angle that corresponds with the 0$^{th}$ order? Specify the orders to the measured angles and calculate for each order the wavelength and its uncertainty. Again try to find splitting for all lines (except the 0$^{th}$ order of course). Do the individual results agree with the literature values? Calculate the weighted average and its uncertainty.

### Evaluation phase
Determine the difference in wavelength of the two Na lines. Try to do this for all the orders. What is the associated uncertainty? At what order do you obtain the best results? Are the results in agreement with the literature values?


What is the smallest difference in wavelength that you can determine using this set up? What is the resolving power of this set up? What is the expected, theoretical value for the resolving power? What can be done to improve the results?

**Finally** Suggestions for the improvement of the experiment and the manual or ideas about what you would like to research with the used instruments, please mail to:  c.f.j.pols@tudelft.nl

## Appendix
For the calculation of the weighted average you need to first calculate the weights, this is done in the following way:

$$
w_i = \frac{1}{u(\lambda_i)^2}
$$

This means that datapoints with a high uncertainty get a lower weight. And datapoints with a low uncertainty get a high weight (thus are more important). To find the final value for $\lambda$ we use the following equation:

$$
\overline{\lambda} = \frac{\sum_i ^N w_i \lambda_i}{\sum_i ^N w_i}
$$

The final error/uncertainty in $\lambda$ is equal to:

$$
u(\overline{\lambda}) = \sqrt{\frac{1}{\sum_i ^N w_i}}
$$

