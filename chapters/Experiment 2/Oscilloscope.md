# RC-circuits


The  goal  of  the  experiment  is  to  gain  experience  with  oscilloscopes with  an  experiment in which you do measurements on a RC-circuit. You first determine the value of a capacitor and subsequently build and measure a low pass filter.
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

The product of $R\cdot C$ is often called the RC-time, $\tau_0$. The RC-time is the time required to charge the capacitor from $0\mathrm{V}$ to $3.2\mathrm{V}$ ($63.2\%  = 1-e^{-1}$) of the voltage applied by the source. Equation {eq}`eq:RCI` becomes then:

$$
I(t) = \frac{V}{R}e^{-t/\tau_0}
$$ (eq:RCIt)

```{figure} /figures/RC/RC_circuit.png
:label: fig:RC_circuit
:width: 70%

The RC-circuit to charge a capacitor
```

```{exercise}
:class: dropdown

1. Calculate the RC-time when a $120\mathrm{k\Omega}$ resistor is used in combination with a $47\mathrm{\mu F}$.
2. Calculate the time required to charge a capacitor to 90\% of the applied voltage.

```

When a alternating voltage is applied, the capacitor will charge and discharge. When the applied voltage changes from sign, the capacitor quickly discharges at the start. However, the amount of current flowing through the circuit  quickly reduces (this idea is applied in flash lights of cameras).


If the frequency of the alternating voltage is very high, the capacitor can be regarded as a simple wire without resistance. The current flowing through the circuit is determined by the resistor. The voltage over the resistor is roughly the same as the voltage applied by the source. However, if the frequency is low, the current is dominated by the characteristics of the capacitor.


According to the theory, the voltage gain over the capacitor can be calculated by: 

$$
\left|\frac{V_C}{V_{in}}\right|=\frac{1}{\sqrt{1+(\omega RC)^2}}
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


A usual ADC in a digital oscilloscope has $N=8$ bits (the SoundBlaster ranges from $N=12$ to $14$ bits usually, the DAC in your MP3-player can have up to $N=18$ bits). The resolution determines the level up to which details can be distinguished. The resolution is limited by the criteria of fast ADC-conversion: for measuring signals of $10\mathrm{MHz}$, the conversion needs to last no more than $10$ns (in principle). In practice, combining speed and resolution is difficult. The latter means such equipment is quite expensive.


During this experiment, our digital oscilloscopes have $N=8$ bit resolution, such that the screen is divided in $2^8=256$ intervals vertically.


The Agilent DSO3062A (used in this experiment) has a bandwidth of $60\mathrm{MHz}$, meaning (in theory) signals with a period of $17\mathrm{ns}$ can be measured. When measuring a single channel, the time-dependent signal is shown. In this setting, the vertical axis displays the voltage, and the time is shown on the horizontal axis. A 2-channel oscilloscope allows two signals to be displayed on a shared horizontal axis, with each having its own vertical axis Y1 and Y2. An example is shown in {numref}`ii4:fig:2-channel`. Such feature allows to compare the time-dependent behaviour of the signals, e.g. the relative phase-shift.


```{figure} /figures/RC/figuur44.png
:label: ii4:fig:2-channel
:width: 80%

A 2-channel oscilloscope allows to compare two signal, e.g. determine the phase difference.
```

To display a signal, it is first written to memory, after which it is shown on a display, which is often a Liquid Crystal Display (LCD). Several signals can be saved and subsequently compared and processed: subtract, multiply, integrate, average, etc. The data can also be saved to a PC for further processing.

(ii4:subsec:basisinstellingen)=
### Basic settings

To study a signal effectively, two settings are important: the vertical sensitivity and the temporal axis. The former refers to the set vertical range in Volts per division ($\mathrm{V/div}$), The temporal resolution is measured in $\mathrm{s/div}$, where a fewer seconds per division means that higher frequency signals can be seen.

````{exercise}
:class: dropdown

```{figure} /figures/RC/figuur43.png
:label: ii4:fig:blokgolf
:width: 70%

Measurement of a periodic signal.
````

A scope displays a signal as shown in {numref}`ii4:fig:blokgolf`. Its settings are configured as follows:
- Amplification: $2\mathrm{V/div}$
- Temporal resolution: $5\mathrm{ms/div}$
- Trigger slope: +
- Coupling: DC

Determine the period, top-to-top amplitude and the pulse length.


(ii4:subsec:triggeren)=
### Triggering

To read a signal effectively, it helps if the scope is not continuously updating the screen real-time. Triggering is a tool designed for this purpose. When a trigger level is set, the oscilloscope only starts to display a signal when it reaches that setpoint. The triggerlevel can be approached from the top or bottom, and must be configured by the slope+ or slope- setting.

````{exercise}
:class: dropdown

- Draw how the signal shown in {numref}`ii4:fig:driehoeksgolf` will be displayed when it continues on the left side on the screen if it reaches the end on the right.
- The vertical sensitivity is set to $0.2\mathrm{V/div}$. The scope is set to trigger at $0.35\mathrm{V}$. Draw the signal as seen on the scope.

```{figure} /figures/RC/figuur45.png
:label: ii4:fig:driehoeksgolf
:width: 70%

The oscilloscope displaying a saw tooth wave signal.
```
````

(ii4:subsec:meten_en_rekenen)=
### Processing

An advantage of a digital scope is that the signal can be processed right away. Various options can be selected with the `MEASURE` button. The most important are `TIME`, which has the option `FREQUENCY` and `VOLTAGE`, which has the option `UTT` which refers to Top-Top Voltage.


Measuring frequencies is easy to do in the time domain. The frequency can be calculated by determining the time difference between two identical (both value and slope) points on the curve. This difference is the period $T$ of the signal, its inverse $f = \frac{1}{T}$ is the frequency.


Determination of the phase difference is similar. We need a two-channel scope. First, determine the period of the signal. Do the same for the relative shift between the signals. The ratio of the two yield the phase shift, in units of period. Multiplying by 360 results in the phase shift in degrees.


## Method

### Determining the RC-time
1. Pick any combination of R and C so that the cut-off frequency is somewhere between $100$ and $1000\mathrm{Hz}$.
2. Build the RC-circuit, connect the oscilloscope in such a way that the GND of both the oscilloscope and  frequency generator are connected.
3. Apply a square wave with a frequency of $\approx 1/(10\tau)$. Connect the main out with **Hi**. Make sure that the offset is $0\mathrm{V}$.
4. Trigger the signal. Use mode/coupling. Choose a positive slope. What happens if you alter the trigger level?
5. Draw the signal that is displayed. 

We can determine the RC-time in various ways. We start by doing this by hand to get more familiar with the oscilloscope.

1. Adjust the time division so you only see one wave.
2. Hit `SINGLE`. This provides a single measurement (instead of a continuous signal).
3. Calculate the RC-time using its definition (63.2\% of the maximum applied voltage). It only has to be a rough estimate. 
4. A more accurate value is obtained when we first determine the minimum and maximum voltage. To do so, press:  `MEASURE` / `VOLTAGE` / $V_{pp}$; $V_{max}$; $V_{min}$. In the lower left corner you will find the $V_{pp}$ value (peak-peak), $V_{max}$ (maximum value), $V_{min}$ (minimum value).
5. Use these values to calculate $U_C = 63,2\% \Delta U$.
6. Press `CURSOR` and subsequently `TRACK`. The tracking point can be moved. You can also use a second Tracker. Set both trackers in the right position so you can determine the RC-time.
7. There is another way to measure RC-time. You can use the rise-time. This is the time required for the signal to go from 10\% to 90\% of the maximum voltage. The RC-time is roughly $\tau=t_r/2.2$
8. Press `MEASURE` / `TIME` / `RISE TIME`. Use the oscilloscope to determine the rise time.
9. Compare the three values you have found for the Rise time. Which one is most reliable? Do these values deviate from the calculated RC-time?

### Characteristics of a low-pass filter
Now you know the cut-off frequency, you can determine the characteristics of a low-pass filter. Measure from two decades below cut-off frequency up to two decades above cut-off frequency the Vpp and phase shift. **Be sure to use a SINE wave now!** Per decade, obtain at least three measurements. In the decade of the cut-off frequency ($100-1000\mathrm{Hz}$) obtain at least five measurements. Note: you thus have at least 17 measurements!


Plot your measurements using a logscale for the frequency. You can use the commando `plt.xscale(‘log’)`. Use this graph to determine, again, the cut-off frequency. Compare it with the calculated, theoretical value.

#### Low-pass filter applied
A Low-Pass Filter can be used to filter noise superposed over a signal. To experience the effectiveness, we will send a signal with noise to the RC circuit used in the previous exercise. The noisy signal can be send with a desktop computer to the signal generator.

- Download and open the file containing the wave with noise: $sineWaveWithNoise.xls$. This file contains macros to connect with the signal generator, therefore you must enable content in Excel if you're asked to in a banner.
- The top of the Excel file has a few marked cells in which values can be altered, such as the amplitude ($V_{PP}$) and frequency $f$. If you wish, you can also edit the noise frequency. The graph below shows both the main signal (which we want to measure) and the noise.
- Press the `UTILITY` button, then `I/O` and finally `SHOW USB ID`. Copy this address into cell D3 in your Excel sheet.
- Test if everything works with a voltage of $2 \mathrm{V_{PP}}$ and a frequency of $1\mathrm{Hz}$. Press `SEND TO FUNCTION GENERATOR` and check on the oscilloscope if the signal from the graph is generated.

The signal send to the function generator is constructed by adding a base signal with the given frequency to a sine wave with the noise frequency (initially set to 100 times the base frequency), resulting in the blue curve shown in the Excel graph. This curve should match with channel 1 on your oscilloscope.

1. For which frequencies do you expect the filter to work optimal, i.e. the highest signal-to-noise ratio (S/N)? What are your expectations for lower and higher frequencies?
1. Set the frequency in Excel to the one found in the previous question, and study channel 2 of the oscilloscope. Add a picture (either a photo or a drawing) to your lab journal.
1. Take a look what happens for other frequencies up to 3 decades difference. Note for each decade (6 in total) whether the working of the filter improves, deteriorates or stays unchanged. Does this meet your expectations?
1. If the results in the previous question are not clearly showing a difference in the filter quality (S/N), the chosen cut-off frequency was probably poorly chosen. Go again through your calculations to find out if errors were made.
