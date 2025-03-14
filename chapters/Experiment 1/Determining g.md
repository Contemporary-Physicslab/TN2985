# Determining *g*

This experiment doesn't introduce you to any new physics that you aren't familiar with already... it is used to help you think about setting up an rigorous physics experiment.

## Experimental goal
In this experiment you will determine the gravitational acceleration on earth, $g$. Find the fourth significant figure and determine $g$ within 0.1\% accuracy of the value established by scientists. The determined values should be compared to the literature value.

## Learning goal
The physics involved is pretty easy, but devising a proper method, analyzing the data, calculating the uncertainties, presenting you data in a convincing matter, writing a proper paper, probably is not. With this experiment you will learn how to: 
1. Devise a proper method.
2. Process, analyse and present your data.
3. Write a concise, scientific paper on your findings.

```{figure} figures/setup_exp_1_white.png
:name: fig:exp:g
:width: 70%

The same setup can be used for both experiments
```

## Introduction
The gravitational force causes you to fall (accelerate) back to earth when you jump. The value of the gravitational acceleration $g$ is well known. Near the surface in the Netherlands it has a value of 9.812 m/s$^2$. How can we determine this value with simple methods but high precision ourselves?

## Theory
### The pendulum
According to the theory of a simple physical pendulum which consists of a point mass hanging on a mass-less wire, see figure 1, the period of this pendulum is described by:

$$
T=2\pi\sqrt{l/g}
$$

When the period and the length are determined, the gravitational acceleration can be calculated.

### Free-fall
The movement of a falling object in a vacuum can be described by:

$$
y(t)= y_0+v_0t+\frac{gt^2}{2}
$$

If the fall time for different heights is measured, this expression can be used to determine the gravitational acceleration.

### Agreement analysis
Experimental values can be compared with the known empirical value and with each other. Two values $a$ and $b$ are not in good agreement when: 

$$
|v|=|a-b|>2\sqrt{u_a^2+u_b^2}=2u_v
$$

## Method
### Preparation phase
1. Choose either the Pendulum or the Free-fall experiment
2. Install the free Arduino software on your laptop: www.arduino.cc and download the script for the experiment from Brightspace.
3. Do a trial run for the experiment using the stopwatch on your mobile phone. 
4. Carry out the experiment five times for a fixed length or height.
5. Determine the average measured time, the standard deviation and the measurement uncertainty.
6. 	Is the measurement uncertainty in time small enough to determine $g$ within 0.5\% accuracy?
7. Use the break-beam sensor to determine the time for five repeated readings. Compare this result with the values determined before.
8. The provided theory is only valid for specific conditions. For the required accuracy in this experiment, the theory should be extended. Identify what is missing and needs to be added.
9. Develop a plan for the experiment to determine $g$ within the required accuracy. Substantiate each choice you make, identify and validate assumptions. Carry out extra trials if necessary.
10. Have your plan checked by the TA.
11. Prepare a Python script to carry out the data analysis.

### Experimental phase
Carry out the experiment using the approved plan.

### Evaluation phase
1. Process your data according your plan.
2. Carry out the agreement analysis.
3. Present your findings in a 'scientific' paper. You will write most of this on two scheduled afternoons. You are allowed to write in pairs and hand in a single paper.
