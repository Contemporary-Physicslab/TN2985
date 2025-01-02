# Boltzmann

## Goal
This experiment consists of two parts. The goal of these experiments are to get acquainted with electronics and electronic instruments. These instruments are often used in more advanced physics labs.

**Part 1: Boltzmann constant**

The goal of the experiment is to gain experience with Digital Multi Meters (DMMs) with an experiment in which you determine the Boltzmann constant. We use a frequently used setup, the ''voltage divider''. 

```{iframe} https://www.youtube.com/embed/AF8d72mA41M?si=-2jLw0ajdfY6VGUG
:width: 70%

This video is a great introduction to this experiment.
```

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

## Part 2 As function of temperature


https://contemporary-physicslab.github.io/NP-new-style/main/Deel5/BoltzmannT.html

In the experiment described above it is possible  investigated the $(U,I)$ characteristic of a diode at a constant temperature. However, the Boltzmann energy distribution also includes a temperature dependence. Based on this experiment, you can determine the effect of temperature on the characteristic of a diode and an Ohmic resistor.

## Introduction

Both the classical free-electron model and the quantum mechanical free-electron model lead to Ohmic behavior for the conduction of metals and semiconductors. In this experiment, the resistance is measured as a function of temperature for a metal (which satisfies the criteria of a free electron gas) and two semiconductors. By the end of the project, you are expected to interpret the measurement results according to the microscopic conduction model, where the concepts of electron mass, electron density, electron charge, and relaxation- (or collision-) time are addressed, along with the influence of temperature on these quantities. The conduction models must be verified or falsified through interpretation.

In the microscopic picture of electrical conduction, Ohm's law results in a relationship (equation 38.12, page 1235 ref `Tippler`) between the specific resistance ($\rho$) and the effective electron mass ($m_e$), charge carrier density ($n$), elementary charge ($e$), and the time between two successive collisions ($\tau$):

$$\rho=\frac{m_e}{ne^2\tau}$$ (eq:elek_gel)

In a metal, the electron density does not strongly depend on temperature $T$, but the time between two successive collisions ($\tau$) is crucial for conduction.

Classical conduction theory predicts a temperature dependence proportional to the square root of the temperature ($\rho \sim \sqrt{T}$).

The kinetic energy $E_{kin}$ of the electron is given by three degrees of freedom (i.e., movements in the x, y, and z directions), each contributing $\frac{1}{2}k_BT$ to the total energy (equipartition theorem, p 544 `Tippler`):

$$E_{kin}=\frac{1}{2}mv^2=\frac{3}{2}k_BT$$ (eq:Evrijheidsgraden)

where $v$ is the velocity of the electron, and $k_B$ is the Boltzmann constant.

In the quantum mechanical model, lattice vibrations primarily limit the collision time. Because the number of quantized lattice vibrations increases linearly with temperature at low temperatures, the collision time and therefore the specific resistance also increase linearly with temperature.

For conduction in semiconductors, temperature changes in collision time are much smaller than changes in charge carrier density. Due to the forbidden band gap, the occupied valence bands and unoccupied conduction bands are separated. Conduction occurs through electrons in the conduction band and holes in the valence band. The probability that a valence electron can be thermally excited from the valence band to the conduction band is given by the Fermi-Dirac distribution (vgl 38.45, p 1257 `Tippler`):

$$P(E)=\left(e^{\frac{E_g}{k_BT}}+1\right)^{-1}$$ (eq:FermiDirac)

where $E$ is the electron's energy, and $E_g$ represents the bandgap energy.

## Equipment

### Cryostat

Temperature-dependent measurements are usually performed in a cryostat. This device consists of several compartments. The innermost compartment is the sample space, where the sample to be measured is located, optionally with a small oven for heating. Surrounding the sample space is a compartment for the coolant (liquid nitrogen or helium). In this experiment, liquid nitrogen is used for cooling. Nitrogen has a boiling point of $77\mathrm{K}$ at an atmospheric pressure of $1010\mathrm{hPa}$.

```{figure} Figures/BoltzmannT/Cryo_1.jpg
---
width: 50%
name: fig_cryo
---
The cryostat with electronics.
```

Between the space for the liquid nitrogen and the outer wall, there is an insulation compartment that is under vacuum, so that no heat is transferred to the liquid nitrogen through convection. Additionally, there is an absorption pump in this space that starts pumping once the compartment for the coolant is filled. The surfaces in this insulation space that face outward are also provided with a layer of super insulation that has a high reflective ability for thermal radiation.

One or more samples can be attached to the sample rod in an IC socket. A heating tape wrapped around the sample holder acts as a small oven to set the temperature from the boiling point of liquid nitrogen to $350\mathrm{K}$. A thermocouple sensor weld is also attached to the sample rod, which records the temperature of the sample holder.

### Thermocouple
The temperature is measured using a thermocouple and a readout unit. This unit measures the thermoelectric voltage of the measuring junction (a metal/metal contact) and displays the temperature in degrees Celsius on the screen. The voltage of the reference junction is automatically compensated. The reference table for a copper/constantan (type T) thermocouple is stored in the memory of this unit. With a type T thermocouple, the temperature can be reliably measured in the range from $-250 \mathrm{\degree C}$ to $+400\mathrm{\degree C}$.

### Power Supply and DMM
A power supply is available to drive the heating tape. The inventory of this experiment includes three digital multimeters to measure the resistance of the choke coil and the operating points of the diode.

## Tasks
```{exercise}
:class: dropdown 

The classical free electron model
How does this model cause the temperature dependence in conduction? Derive the temperature dependence from equations {eq}`eq:Evrijheidsgraden` and {eq}`eq:FermiDirac`. Sketch the expected behavior of the specific resistance of a metal as a function of temperature according to this model.
```

```{exercise}
:class: dropdown

The quantum mechanical free electron model
How is the temperature dependence expressed in this model? Sketch the expected behavior of the specific resistance as a function of temperature for a metal.
```

```{exercise}
:class: dropdown

Fermi-Dirac distribution in semiconductors
Using {eq}`eq:elek_gel` and {eq}`eq:FermiDirac`, show that the number of charge carriers increases with increasing temperature, thereby reducing the resistance in a semiconductor.
```

DC current in a diode is determined by the probability that the electrons can make the potential step from n $\rightarrow$ p. The current $I$ in a diode is therefore given by:

$$I = I_0 \left( e^{\frac{qU}{k_B T}} - 1 \right)$$ (eq:lekstroom)

Here, $I_0$ is the dark current, which is determined by the probability that electrons are thermally excited from the valence band to the conduction band:

$$A e^{-\frac{E_g}{k_B T}}$$ (eq:I0)

From {eq}`eq:lekstroom` and {eq}`eq:I0`, it follows that:

$$qU = E_g - k_B T \ln \left( \frac{A}{I} \right)$$ (eq:iconst)

For a constant current $I$, the voltage across a diode in the forward direction is linear with temperature.

```{exercise}
:class: dropdown

Sketch the voltage behavior as a function of temperature and indicate how the bandgap can be determined from this.
```

```{tip}
:class: dropdown
In the original experiment, the resistance of the choke coil and diodes in the cryostat had to be measured in the temperature range from $100\mathrm{K}$ to $300\mathrm{K}$ with steps of $5\mathrm{K}$, and heated at a rate of 2 degrees per minute.
```

