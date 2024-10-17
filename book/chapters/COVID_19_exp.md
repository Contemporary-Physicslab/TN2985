# Home experiment 1
You find yourself at home, bored. Very bored, obliged to stay at home while others carry out experiments with equipment only available at the University. However, your love for physics may inspire you once again. You still have one of the most powerful sensory devices in your pocket, allowing you to do scientific experiments, even at home. 


## Goal
In this experiment you will determine the velocity of sound in air, $c_{air}$, using only a mobile phone (or two) and 'stuff' you can find at home. The learning goal is to set up a scientific experiment with basic materials.

## Introduction
The velocity of sound in air is an important physical quantity. Its precise value is of importance when using, e.g., an ultrasound distance sensor which can be found at the back of most modern cars, see {numref}`fig:ultra`. Although its value can be calculated by:

$$
c_{air} = \sqrt{\frac{\gamma R T}{M}}
$$

with $\gamma$ the adiabatic index, $R$ the gas constant, $T$ the temperature in Kelvin and $M$ the molecular mass of air, it is much more fun to experimentally determine the value. Different experiments allow you to do so. In this assignment you choose one out of two proposed ways.

```{figure} /figures/soundvelocity/ultrasonicsensor.jpeg
:name: fig:ultra
Most modern cars are equipped with ultrasonic distance sensors. 
```

## Theory
### Resonance
Resonance is the phenomenon that occurs when you apply a small, periodical force on an object with the same frequency as the objects' natural frequency. The object starts to 'resonate' with a far more greater amplitude than you would suspect. Most musical instruments make use of this phenomenon, [*whistling over a bottle of beer](https://www.youtube.com/watch?v=VAySXYqbc8M)* is a good example of resonance. 


We study [*the physics of resonance of a pipe which is closed at one side](https://www.youtube.com/watch?v=bHdHaYNX4Tk)*, and open at the other, see {numref}`fig:wave`. At the end of the closed pipe, there is always a node, and an anti-node at the open end of the tube. Using this knowledge and the general equation $\lambda = \frac{c_{air}}{f}$ we can derive that if you blow over the open end of the tube you hear a tone with a frequency of: 

$$
f = \frac{c_{air}(2n-1)}{4(L+\Delta L)}
$$

in which $f$ is the frequency, $n$ is the wavenumber, a non-negative integer, $L$ the length of the tube and $\Delta L$ a end-correction which is determined experimentally. For more background information, see for instance [*Acoustics and Vibration Animations](https://www.acs.psu.edu/drussell/Demos/StandingWaves/StandingWaves.html)*.

```{figure} /figures/soundvelocity/wave.png
:name: fig:wave
A sound wave in its natural mode in an open-close system
```

### Travel time
Echolocation is used by some animals, among them are bats. Somehow bats are able to determine the time between sending and receiving a sound signal. For a not moving object this time interval is given by:

$$
\Delta t = \frac{2s}{c_{air}}
$$

in which $s$ it the distance between sender and object.


Although this phenomenon can be recreated in our own environment, this is rather difficult as there are many walls reflecting the sound. However, we still can mimic the idea of echolocation using the setup of {numref}`fig:echolocation`. First a sound wave is created at the left, detected first by phone 1 and subsequently by phone 2. This detection triggers the acoustic chronometers (stopwatch) which then starts the timer. A second sound wave is then produced at the right, first detected by phone 2 and subsequently by phone 1. This detection stops the acoustic chronometer. The time difference is again $\Delta t = \frac{2s}{c_{air}}$, where $s$ is the distance between the two phones. This only holds true for a straight alignment. If the distance between the phones is known and we assume the speed of sound is given, we can even calculate the angle at which the sound is produced. Using a third phone makes this directly possible (this idea is used in acoustic anemometers).

```{figure} /figures/soundvelocity/soundtravel.eps
:name: fig:echolocation
The idea of echolocation can be mimicked using this simple experiment, where 1 and 2 are mobile phones.
```

## Method
As the speed of sound is present in both equations, we can use either one of the experiments to determine the speed of sound in air.

#### Preparation phase
1. Form a pair.
1. Install the app Phyphox on your mobile phone (both acoustic chronometer and frequency analyzer available).
1. Choose either the resonance or the echolocation experiment.
1. Make a plan of approach to accurately determine $c_{air}$, your answer should be within $\pm 5 m/s$ of the literature value.
1. Do a trial run and calculate the velocity of sound based upon a single measurement to see whether the approach is working.
1. Share your plan of approach to the teacher and discuss (make an appointment).
1. Prepare a Python script to carry out the data analysis.

#### Experimental phase
Carry out the experiment using the approved plan. Both students collect their own data and compare the outcomes. Quantify the accuracy of the outcomes (are they in good agreement with each other?).

#### Evaluation phase
1. Process your data according your plan.
1. Carry out the agreement analysis.
1. Present your findings in a report. You will write most of this report on two scheduled afternoons. You are allowed to write in pairs and hand in a single report.
