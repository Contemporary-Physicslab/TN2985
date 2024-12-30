# Boltzmann

## Goal
This experiment consists of two parts. The goal of these experiments are to get acquainted with electronics and electronic instruments. These instruments are often used in more advanced physics labs.

**Part 1: Boltzmann constant**

The goal of the experiment is to gain experience with Digital Multi Meters (DMMs) with an experiment in which you determine the Boltzmann constant. We use a frequently used setup, the ''voltage divider''. 

## Background
### Measurements using DMMs
DMMs are versatile measuring instruments. These instruments are used to measure voltage, current, resistance, frequencies, periods, capacities, induction, temperature, features of diodes etc. Advanced DMMs have the option to be controlled using a computer.


The difference in price is often determined by its functionality, resolution and sensitivity. The resolution of a digital instrument is the ratio between the smallest counts and the largest counts that can be displayed. This is determined by the number of counts that can be displayed. A simple DMM often has $3\frac{1}{2}$ digits, which means that the DMM can display three  whole digits (0-9) and  an additional (first) digit which has the value 0 or $\pm$ 1. As such, this DMM can display the number 0-1999, a total of 2000 counts. The resolution of this DMM is thus $\frac{1}{2000}$ or 0.05\%.


The sensitivity is the smallest change that still can be noted. A sensitivity of $1\mathrm{\mu V}$ implies that signals smaller than $1\mathrm{\mu V}$ can not be detected. The sensitivity does depend on the amplitude of the signal we want to measure. Suppose we want to measure a $15\mathrm{V}$ signal using a $3\frac{1}{2}$ DMM, the best range is $\mathrm{20V}$. This means a sensitivity of $10\mathrm{mV}$. Using a $5\frac{1}{2}$ DMM, we can get a sensitivity of $0.01\mathrm{mV}$. The ultimate sensitivity of a DMM depends on the resolution and the smallest range. Example: the sensitivity of a $6\frac{1}{2}$ digit DMM with the smallest range of $200\mathrm{mV}$ is $0.1\mathrm{\mu V}$.


However, measuring $0.2\mathrm{\mu V}$ does not mean this is the exact value you measure. This does depend on the accuracy, and the accuracy is not determined by the last digit of the DMM alone. The accuracy is often defined as ''..\% reading + ..\%range + .. counts''.

```{admonition} Example
Suppose we use a $3\frac{1}{2}$ digit DMM and read a value of $1.234\mathrm{V}$. For the Dynatek D9100 with a $2\mathrm{V}$ range is stated that the inaccuracy is given by: $\pm 0.5\\%$ of the reading + 1 count. So: 0.5\% of the reading yields $6\mathrm{mV}$ + 1 digit ($1\mathrm{mV}$) gives an accuracy of $7\mathrm{mV}$. The reading should be written as: $1.234 \pm 0.007 \mathrm{V}$. 
```

```{exercise}
:class: dropdown

1. The accuracy of a DMM in the range of $10\mathrm{V}$ is defined as: 0.0015\% of the reading and 0.0004\% of the range. The reading on the DMM is $5.00000\mathrm{V}$. What is the accuracy of the measurement?
1. What is the sensitivity of a measurement using a $4\frac{1}{2}$ digit DMM with a $200\mathrm{mV}$ range?

```
### Ideal instruments
A DMM can be used as a voltmeter or ammeter. In the ideal case a voltmeter has an  infinite internal resistance and an ammeter no resistance. In many cases these assumptions are valid. However, in cases where the circuit resistance is approximately 0 or $\infty$, we can not neglect the features of the meters. Using these meters inevitably changes the features of the circuits itself, see {numref}`fig:II:circuits`. 

```{exercise}
:class: dropdown

{numref}`fig:II:circuits` shows two circuits in which the current through and voltage over a diode is measured. 

1. Which circuit do you use when the resistance of the diode is very small? Explain why.
1. Which circuit do you use when the resistance of the diode is very large? Explain why.
1. How does the resistor $R_1$ prevent blowing up the fuse of the Ammeter?
```

```{figure} /figures/Boltzmann/Figuur1.png
:name: fig:II:circuits
:width: 70%

Two ways of measuring current and voltage through a diode
```

In this experiment we will determine the $(U,I)$-characteristics of a silicon diode. However, during the experiment the current through the diode easily changes with 6 decades  ($10^{-2}\mathrm{A} \xrightarrow{} 10^{-8}\mathrm{A}$). Therefore we measure the current indirectly, using a voltage divider.

### Voltage divider
In this experiment we use a voltage divider circuit to make a $(U,I)$-characteristic of a diode, see {numref}`fig:Boltzmann:volt_div-setup`. A simple voltage divider is a circuit with two resistors in series ''sharing'' the voltage of the source. If you do not remember the rules that apply in series circuits, look these up yourselves. The formulas are given below.

```{note}
        Series circuit

$$
I_{t} = I_{1} = I_{2} = \frac{U_{t}}{R_{t}} = \frac{U_{1}+U_{2}}{R_{1}+R_{2}}
$$

$$
U_{1} = \frac{R_{1}}{R_{1}+R_{2}} U_{t}
$$

        Parallel circuit

$$
I_{t} = I_{1} + I_{2} = \frac{U_{1}}{R_{1}} + \frac{U_{2}}{R_{2}}
$$

        Power dissipation

$$
P_{t} = U_{t} I_{t} = U_{1} I_{1} + U_{2} I_{2}
$$

```
An advantages of this circuit is that we do not measure current directly. As the current changes a few decades, we approximate the original circuit (without instruments). 

```{figure} /figures/Boltzmann/volt_div.png
:name: fig:Boltzmann:volt_div-setup
:width: 50%

The experimental setup to determine the $(U,I)$-characteristic of the diode
```

```{exercise}
:class: dropdown

Explain how you will obtain the current running through the diode using circuit {numref}`fig:Boltzmann:volt_div-setup`.
```

```{exercise}
:class: dropdown

Suppose we have a voltage divider consisting a $330\Omega$ and a $1000\Omega$ resistor. 

1. Calculate the maximum current through the $330\Omega$ resistor if the maximum dissipation in the resistors is $1\mathrm{W}$.
1. What is the maximum source voltage which can be applied such that the maximum permissible dissipation is not exceeded?
1. Calculate the voltage over the $330\Omega$ resistor if the source voltage is $20\mathrm{V}$.
```

```{exercise}
:class: dropdown

A voltage divider is used as a sensor for an automatic night lamp. It circuit consist of an Ohmic resistor and a light dependent resistor (LDR) in series. The LDR has a resistance of about $1\mathrm{M\Omega}$ in the dark and a resistance of about $1\mathrm{k\Omega}$ in the light. The sensor works best when a small change in the resistance of the LDR changes the voltage of the Ohmic resistor as much as possible. 

1. What value should the Ohmic resistor ideally have? [hint: Physicist often use extreme cases to calculate what happens (0,$\infty$,R$_{LDR}$)].
1. In our experiment the diode has a resistance of more than $1\mathrm{M\Omega}$. Why is it not wise to choose $R_1>$$\mathrm{1M\Omega}$?
```

### Semiconductor diode
A diode is a semiconductor. In a semiconductor the energy of the electrons are distributed according the Boltzmann distribution. The average energy of an electron is $k_{B}T$, where $k_B$ is the Boltzmann constant and $T$ is the absolute temperature. The current flowing through the circuit depends on the height of the energy barrier relative to $k_{B}T$. On its turn, the height of the barrier depends on the the applied voltage. The higher the applied voltage the lower the energy barrier.


The Boltzmann distribution of the energy of the electrons, and the presence of a barrier is given by a theoretical formula that relates the applied voltage over and the current through a diode. This is an exponential function given by:

$$
I_D(U_D)=I_0\left(e^{-\frac{qU}{nk_BT}}-1\right)
$$

where $q$ is the charge of an electron, $-1.602\cdot10^{-19}\mathrm{C}$, $n$ an ideality factor which is 2 for Si, $I_0$ the reverse current when $V_D$ is strongly negative. For more (background) information, refer to {cite}`wolfson2007essential`, chapter 27-28.

```{figure} /figures/Boltzmann/figuur12.png
:name: fig:UIcharacteristic
:width: 70%

The $(U,I)$-characteristic of the diode as determined by two first year physics students (2019). The slope is used to determine the Boltzmann constant.
```

In order to enable us to determine the $(U,I)$-characteristics of a silicon diode (over a range which is as large as possible), we should consider a number of topics before we actually conduct the experiment. We note that we aim to determine Boltzmann's constant using a logarithmic plot. To do this accurately, it is key to distribute measurements evenly along the range of the variables (diode current $I$ and diode voltage $U$). In practice, it is convenient to start at (or near) the maximum value for the current and subsequently decrease the current with a constant factor for each measurement. However, it might be simpler to measure, plot and choose the next value based upon your findings. 

## Method
### Preparation phase
Prepare you python script in which you collect and process your data. Carry out the following steps: 
1. Load the various libraries. (single cell)
1. Make numpy arrays for your raw measurements. (single cell)
1. Make numpy arrays for the processed data and their uncertainties. Use the manual of the DMM to calculate the uncertainties. (single cell)
1. Make a single cell in which you plot the $(U,I)$-characteristics of the diode.
1. Setup a single cell for curve fitting.
1. Setup a single cell for calculating the Boltzmann constant and its uncertainty.

### Experimental phase
Determine the exact resistance of the resistors you will use, calculate the uncertainty.
Build the circuit shown in {numref}`fig:Boltzmann:volt_div-setup`.
Start your measurements with a $6.0\mathrm{V}$ source voltage. Slowly decrease the source voltage using the plot. Make sure you have at least 15 measurements in the range $0.1\mathrm{V}-0.6\mathrm{V}$ for $U_{diode}$. Take care of an even spread interval.

### Evaluation phase
Run your script and determine the Boltzmann constant accordingly. You should be at least within 5\% accuracy.

