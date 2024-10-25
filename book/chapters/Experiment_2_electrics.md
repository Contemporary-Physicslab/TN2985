# Experiment 2A: Electronics and Boltzmann

## Goal
This experiment consists of two parts. The goal of these experiments are to get acquainted with electronics and electronic instruments. These instruments are often used in more advanced physics labs.

**Part 1: Boltzmann constant**

The goal of the experiment is to gain experience with Digital Multi Meters (DMMs) with an experiment in which you determine the Boltzmann constant. We use a frequently used setup, the ''voltage divider''. 

## Background
### Measurements using DMMs
DMMs are versatile measuring instruments. These instruments are used to measure voltage, current, resistance, frequencies, periods, capacities, induction, temperature, features of diodes etc. Advanced DMMs have the option to be controlled using a computer.


The difference in price is often determined by its functionality, resolution and sensitivity. The resolution of a digital instrument is the ratio between the smallest counts and the largest counts that can be displayed. This is determined by the number of counts that can be displayed. A simple DMM often has $3\frac{1}{2}$ digits, which means that the DMM can display three  whole digits (0-9) and  an additional (first) digit which has the value 0 or $\pm 1$. As such, this DMM can display the number 0-1999, a total of 2000 counts. The resolution of this DMM is thus $\frac{1}{2000}$ or 0.05\%.


The sensitivity is the smallest change that still can be noted. A sensitivity of $1\mu V$ implies that signals smaller than $1\mu V$ can not be detected. The sensitivity does depend on the amplitude of the signal we want to measure. Suppose we want to measure a $15V$ signal using a $3\frac{1}{2}$ DMM, the best range is $20V$. This means a sensitivity of $10mV$. Using a $5\frac{1}{2}$ DMM, we can get a sensitivity of $0.01mV$. The ultimate sensitivity of a DMM depends on the resolution and the smallest range. Example: the sensitivity of a $6\frac{1}{2}$ digit DMM with the smallest range of $200mV$ is $0.1\mu V$.


However, measuring $0.2\mu V$ does not mean this is the exact value you measure. This does depend on the accuracy, and the accuracy is not determined by the last digit of the DMM alone. The accuracy is often defined as ''..\% reading + ..\%range + .. counts''.
```{admonition} Example
Suppose we use a $3\frac{1}{2}$ digit DMM and read a value of $1.234V$. For the Dynatek D9100 with a $2V$ range is stated that the inaccuracy is given by: $\pm 0.5\\%$ of the reading + 1 count. So: 0.5\% of the reading yields $6mV$ + 1 digit ($1mV$) gives an accuracy of $7mV$. The reading should be written as: $1.234 \pm 0.007 V$. 
```

```{assignment}
1. The accuracy of a DMM in the range of $10V$ is defined as: 0.0015\% of the reading and 0.0004\% of the range. The reading on the DMM is $5.00000V$. What is the accuracy of the measurement?
1. What is the sensitivity of a measurement using a $4\frac{1}{2}$ digit DMM with a $200mV$ range?
```
### Ideal instruments
A DMM can be used as a voltmeter or ammeter. In the ideal case a voltmeter has an  infinite internal resistance and an ammeter no resistance. In many cases these assumptions are valid. However, in cases where the circuit resistance is approximately 0 or $\infty$, we can not neglect the features of the meters. Using these meters inevitably changes the features of the circuits itself, see {numref}`fig:II:circuits`. 
```{assignment}

{numref}`fig:II:circuits` shows two circuits in which the current through and voltage over a diode is measured. 

1. Which circuit do you use when the resistance of the diode is very small? Explain why.
1. Which circuit do you use when the resistance of the diode is very large? Explain why.
1. How does the resistor $R_1$ prevent blowing up the fuse of the Ammeter?

```
```{figure} /figures/II1/II_totaal_Figuur1.png
:name: fig:II:circuits
Two ways of measuring current and voltage through a diode
```

In this experiment we will determine the $(U,I)$-characteristics of a silicon diode. However, during the experiment the current through the diode easily changes with 6 decades  ($10^{-2} \xrightarrow{} 10^{-8}A$). Therefore we measure the current indirectly, using a voltage divider.

### Voltage divider
In this experiment we use a voltage divider circuit to make a $(U,I)$-characteristic of a diode, see {numref}`fig:II1:volt_div-setup`. A simple voltage divider is a circuit with two resistors in series ''sharing'' the voltage of the source. If you do not remember the rules that apply in series circuits, look these up yourselves. The formulas are given below.

```{note}
    **Series**

$$
I_{t} = I_{1} = I_{2} = \frac{U_{t}}{R_{t}} = \frac{U_{1}+U_{2}}{R_{1}+R_{2}}
$$

$$
U_{1} = \frac{R_{1}}{R_{1}+R_{2}} U_{t}
$$

    **Parallel**

$$
I_{t} = I_{1} + I_{2} = \frac{U_{1}}{R_{1}} + \frac{U_{2}}{R_{2}}
$$

    **Power dissipation**

$$
P_{t} = U_{t} I_{t} = U_{1} I_{1} + U_{2} I_{2}
$$

```
An advantages of this circuit is that we do not measure current directly. As the current changes a few decades, we approximate the original circuit (without instruments). 
```{figure} /figures/II1/II_1_volt_div.png
:name: fig:II1:volt_div-setup
The experimental setup to determine the $(U,I)$-characteristic of the diode
```

```{assignment}
Explain how you will obtain the current running through the diode using circuit {numref}`fig:II1:volt_div-setup`.
```
```{assignment}
Suppose we have a voltage divider consisting a $330\Omega$ and a $1000\Omega$ resistor. 
1. Calculate the maximum current through the $330\Omega$ resistor if the maximum dissipation in the resistors is $1W$.
1. What is the maximum source voltage which can be applied such that the maximum permissible dissipation is not exceeded?
1. Calculate the voltage over the $330\Omega$ resistor if the source voltage is $20V$.

```

```{assignment}
A voltage divider is used as a sensor for an automatic night lamp. It circuit consist of an Ohmic resistor and a light dependent resistor (LDR) in series. The LDR has a resistance of about $1M\Omega$ in the dark and a resistance of about $1k\Omega$ in the light. The sensor works best when a small change in the resistance of the LDR changes the voltage of the Ohmic resistor as much as possible. \newline
1. What value should the Ohmic resistor ideally have? [hint: Physicist often use extreme cases to calculate what happens (0,$\infty$,R$_{LDR}$)].
1. In our experiment the diode has a resistance of more than $1M\Omega$. Why is it not wise to choose $R_1>1M\Omega$?

```

### Semiconductor diode
A diode is a semiconductor. In a semiconductor the energy of the electrons are distributed according the Boltzmann distribution. The average energy of an electron is $k_{B}T$, where $k_B$ is the Boltzmann constant and $T$ is the absolute temperature. The current flowing through the circuit depends on the height of the energy barrier relative to $k_{B}T$. On its turn, the height of the barrier depends on the the applied voltage. The higher the applied voltage the lower the energy barrier.


The Boltzmann distribution of the energy of the electrons, and the presence of a barrier is given by a theoretical formula that relates the applied voltage over and the current through a diode. This is an exponential function given by:

$$
I_D(U_D)=I_0(e^{-\frac{qU}{nk_BT}}-1)
$$

where $q$ is the charge of an electron, $-1.602\cdot10^{-19}C$, $n$ an ideality factor which is 2 for Si, $I_0$ the reverse current when $V_D$ is strongly negative. For more (background) information, refer to {cite}`wolfson2007essential`, chapter 27-28.

```{figure} /figures/II1/II_totaal_figuur12.png
:name: fig:UIcharacteristic
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
Determine the exact resistance of the resistors you will use, calculate the uncertainty. \\
Build the circuit shown in {numref}`fig:II1:volt_div-setup`.
Start your measurements with a $6.0V$ source voltage. Slowly decrease the source voltage using the plot. Make sure you have at least 15 measurements in the range $0.1-0.7V$ for $U_{diode}$. Take care of an even spread interval.

### Evaluation phase
Run your script and determine the Boltzmann constant accordingly. You should be at least within 5\% accuracy.

**Part 2: RC-circuits**
The  goal  of  the  experiment  is  to  gain  experience  with  Oscilloscopes with  an  experiment in which you do measurements on a RC-circuit. You first determine the value of a capacitor and subsequently build and measure a low pass filter.
## Background

### Capacitors and RC-circuits
A capacitor consists of two plates that are separated a small distance from each other. You can store electrical charge on the plates. Its capacitance can be calculated by:

$$
C = \frac{Q}{V}
$$

Where $C$ is the capacitance, $Q$ the amount of charge stored on the capacitor and $V$ the voltage over the capacitor.


To charge a capacitor, you simply apply a voltage over the capacitor. To prevent damage while (dis)charging, a resistor should be used, see {numref}`fig:RC_circuit`. While the capacitor is charged, more and more electrons are collected on a plate producing a counter voltage. This thus means that further charging the capacitor becomes more difficult and the voltage over the capacitor increases while the voltage of the resistor decreases:

$$
V_{source} = V_{R} + V_{C}
$$

Knowing that the current is defined by:

$$
I = \frac{\Delta Q}{\Delta t}
$$

and applying Ohm's law results in the following differential equation:

$$
\frac{\partial V}{\partial t} = R\frac{\partial I}{\partial t} + \frac{1}{C}I
$$

When a constant voltage is suddenly applied ($V_{source}=0\xrightarrow{}V$), the current through the RC-circuit is described by:

$$
I(t) = \frac{V}{R}e^{-t/RC}
$$ (eq:RCI)

The product of $R\cdot C$ is often called the RC-time, $\tau_0$. The RC-time is the time required to charge the capacitor from $0V$ to 3.2\% ($63.2\\% = 1-e^{-1}$) of the voltage applied by the source. Equation {eq}`eq:RCI` becomes then:

$$
I(t) = \frac{V}{R}e^{-t/\tau_0}
$$ (eq:RCIt)

```{figure} /figures/II1/RC_circuit.png
:name: fig:RC_circuit
The RC-circuit to charge a capacitor
```

```{assignment}
1. Calculate the RC-time when a $120k\Omega$ resistor is used in combination with a $47\muF$.
1. Calculate the time required to charge a capacitor to 90\% of the applied voltage.

```

When a alternating voltage is applied, the capacitor will charge and discharge. When the applied voltage changes from sign, the capacitor quickly discharges at the start. However, the amount of current flowing through the circuit  quickly reduces (this idea is applied in flash lights of cameras).


If the frequency of the alternating voltage is very high, the capacitor can be regarded as a simple wire without resistance. The current flowing through the circuit is determined by the resistor. The voltage over the resistor is roughly the same as the voltage applied by the source. However, if the frequency is low, the current is dominated by the characteristics of the capacitor.


According to the theory, the voltage gain over the capacitor can be calculated by: 

$$
|\frac{V_C}{V_{in}}|=\frac{1}{\sqrt{1+(\omega RC)^2}}
$$

There will be a phase shift between the applied voltage and the current which is dependent on the applied frequency. According to theory, the phase shift $\phi$ is calculated by:

$$
\phi = tan^{-1}(\omega CR)
$$

where $\omega = 2\pi f$. 


The transit in behaviour becomes notably at the cutoff frequency:

$$
f_{\text {cutoff}}=\frac{1}{2 \pi R C}
$$ (eq:cutoff)

In this experiment we determine the characteristics of the RC-circuit as described above using a oscilloscope.

### Measurements using Oscilloscopes
You can find oscilloscopes in most physics lab rooms. It is an all round measure- and test-instrument. The oscilloscope displays the measured quantity as function of time or a second quantity on a screen. The input signal is always an electrical voltage. For measurements of temperature, light intensity etc. you need a sensor which turns the measured quantity in an electrical output.


As most signals in nature are analogue, these are converted to a digital signal using an Analogue-Digital-Converter (ADC). The resolution of the digital signal depends on the number of bits ($N$) in the voltage range $U_{mm}$. This range is divided in $2^N$ equal intervals.


A usual ADC in a digital oscilloscope has $N=8$ bits (the SoundBlaster ranges from $N=12$ to 14 usually, the DAC in your MP3-player can have up to $N=18$ bits). The resolution determines the level up to which details can be distinguished. The resolution is limited by the criteria of fast ADC-conversion: for measuring signals of $10MHz$, the conversion needs to last no more than $10ns$ (in principle). In practice, combining speed and resolution is difficult. The latter means such equipment is quite expensive.


During this experiment, our digital oscilloscopes have $N=8$ bit resolution, such that the screen is divided in $2^8=256$ intervals vertically.


The Agilent DSO3062A (used in this experiment) has a bandwidth of $60MHz$, meaning (in theory) signals with a period of $17ns$ can be measured. When measuring a single channel, the time-dependent signal is shown. In this setting, the vertical axis displays the voltage, and the time is shown on the horizontal axis. A 2-channel oscilloscope allows two signals to be displayed on a shared horizontal axis, with each having its own vertical axis Y1 and Y2. An example is shown in {numref}`ii4:fig:2-channel`. Such feature allows to compare the time-dependent behaviour of the signals, e.g. the relative phase-shift.


```{figure} /figures/II1/II_4_figuur44.png
:name: ii4:fig:2-channel
A 2-channel oscilloscope allows to compare two signal, e.g., determine the phase difference.
```

To display a signal, it is first written to memory, after which it is shown on a display, which is often a Liquid Crystal Display (LCD). Several signals can be saved and subsequently compared and processed: subtract, multiply, integrate, average, etc. The data can also be saved to a PC for further processing.

(ii4:subsec:basisinstellingen)=
### Basic settings

To study a signal effectively, two settings are important: the vertical sensitivity and the temporal axis. The former refers to the set vertical range in Volts per division ($V/div$), The temporal resolution is measured in $s/div$, where a fewer seconds per division means that higher frequency signals can be seen.

```{assignment}
```{figure} /figures/II1/II_4_figuur43.png
:name: ii4:fig:blokgolf
Measurement of a periodic signal.
```

A scope displays a signal as shown in {numref}`ii4:fig:blokgolf`. Its settings are configured as follows:
- Amplification: $2V/div$
- Temporal resolution: $5ms/div$
- Trigger slope: +
- Coupling: DC

Determine the period, top-to-top amplitude and the pulse length.
```
```
(ii4:subsec:triggeren)=
### Triggering

To read a signal effectively, it helps if the scope is not continuously updating the screen real-time. Triggering is a tool designed for this purpose. When a trigger level is set, the oscilloscope only starts to display a signal when it reaches that setpoint. The triggerlevel can be approached from the top or bottom, and must be configured by the slope+ or slope- setting.

```{assignment}
- Draw how the signal shown in {numref}`ii4:fig:driehoeksgolf` will be displayed when it continues on the left side on the screen if it reaches the end on the right.
- The vertical sensitivity is set to $0.2V/div$. The scope is set to trigger at $0.35V$. Draw the signal as seen on the scope.

```{figure} /figures/II1/II_4_figuur45.png
:name: ii4:fig:driehoeksgolf
The oscilloscope displaying a saw tooth wave signal.
```
```
```

(ii4:subsec:meten_en_rekenen)=
### Processing

An advantage of a digital scope is that the signal can be processed right away. Various options can be selected with the MEASURE button. The most important are TIME, which has the option FREQUENCY and VOLTAGE, which has the option UTT which refers to Top-Top Voltage.


Measuring frequencies is easy to do in the time domain. The frequency can be calculated by determining the time difference between two identical (both value and slope) points on the curve. This difference is the period $T$ of the signal, its inverse $f = 1/T$ is the frequency.


Determination of the phase difference is similar. We need a two-channel scope. First, determine the period of the signal. Do the same for the relative shift between the signals. The ratio of the two yield the phase shift, in units of period. Multiplying by 360 results in the phase shift in degrees.


## Method

### Determining the RC-time
1. Pick any combination of R and C so that the cut-off frequency is somewhere between 100 and $1000Hz$.
1. Build the RC-circuit, connect the oscilloscope in such a way that the GND of both the oscilloscope and  frequency generator are connected.
1. Apply a square wave with a frequency of $\approx 1/(10\tau)$. Connect the main out with **Hi**. Make sure that the offset is $0V$.
1. Trigger the signal. Use mode/coupling. Choose a positive slope. What happens if you alter the trigger level?
1. Draw the signal that is displayed. 

We can determine the RC-time in various ways. We start by doing this by hand to get more familiar with the oscilloscope.

1. Adjust the time division so you only see one wave.
1. Hit 'SINGLE'. This provides a single measurement (instead of a continuous signal).
1. Calculate the RC-time using its definition (63.2\% of the maximum applied voltage). It only has to be a rough estimate. 
1. A more accurate value is obtained when we first determine the minimum and maximum voltage. Subsequently, we calculate $U_C = 63,2\\%\ \Delta U$. To do so, press:  Measure / Voltage / $V_{pp}$; $V_{max}$; $V_{min}$. In the lower left corner you will find the Vpp value (peak-peak), Vmax (maximum value), Vmin (minimum value).
2. 1. Use these values to calculate $U_C = 63,2\\%\ \Delta U$.
1. Press cursor and subsequently Track. The tracking point can be moved. You can also use a second Tracker. Set both trackers in the right position so you can determine the RC-time.
1. There is another way to measure RC-time. You can use the rise-time. This is the time required for the signal to go from 10\% to 90\% of the maximum voltage. The RC-time is roughly $\tau=t_r/2.2$
1. Press Measure / Time / Rise time. Use the oscilloscope to determine the rise time.
1. Compare the three values you have found for the Rise time. Which one is most reliable? Do these values deviate from the calculated RC-time?

### Characteristics of a low-pass filter
Now you know the cut-off frequency, you can determine the characteristics of a low-pass filter. Measure from two decades below cut-off frequency up to two decades above cut-off frequency the Vpp and phase shift. **Be sure to use a SINE wave now!** Per decade, obtain at least three measurements. In the decade of the cut-off frequency ($100-1000Hz$) obtain at least five measurements. Note: you thus have at least 17 measurements!


Plot your measurements using a logscale for the frequency. You can use the commando `plt.xscale(‘log’)`. Use this graph to determine, again, the cut-off frequency. Compare it with the calculated, theoretical value.

#### Low-pass filter applied
A Low-Pass Filter can be used to filter noise superposed over a signal. To experience the effectiveness, we will send a signal with noise to the RC circuit used in the previous exercise. The noisy signal can be send with a desktop computer to the signal generator.

- Download and open the file containing the wave with noise: \verb|sineWaveWithNoise.xls|. This file contains macros to connect with the signal generator, therefore you must enable content in Excel if you're asked to in a banner.
- The top of the Excel file has a few marked cells in which values can be altered, such as the amplitude ($V_{*PP*}$) and frequency $f$. If you wish, you can also edit the noise frequency. The graph below shows both the main signal (which we want to measure) and the noise.
- Press the `Utility` button, then `I/O` and finally `Show USB Id`. Copy this address into cell D3 in your Excel sheet.
- Test if everything works with a voltage of $2V_{*PP*}$ and a frequency of $1Hz$. Press `Send to Function Generator` and check on the oscilloscope if the signal from the graph is generated.

The signal send to the function generator is constructed by adding a base signal with the given frequency to a sine wave with the noise frequency (initially set to 100 times the base frequency, resulting in the blue curve shown in the Excel graph. This curve should match with channel 1 on your oscilloscope.

1. For which frequencies do you expect the filter to work optimal, i.e. the highest signal-to-noise ratio (S/N)? What are your expectations for lower and higher frequencies?
1. Set the frequency in Excel to the one found in the previous question, and study channel 2 of the oscilloscope. Add a picture (either a photo or a drawing) to your lab journal.
1. Take a look what happens for other frequencies up to 3 decades difference. Note for each decade (6 in total) whether the working of the filter improves, deteriorates or stays unchanged. Does this meet your expectations?
1. If the results in the previous question are not clearly showing a difference in the filter quality (S/N), the chosen cut-off frequency was probably poorly chosen. Go again through your calculations to find out if errors were made.
