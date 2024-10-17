# Experiment 2B: Determination of the half-life of $^{40}K$
## Goal
In the first part of this experiment you will determine the half-life of the naturally occurring radioactive atomic species $^{40}K$, an isotope of the element potassium. You will do this by establishing of the activity and the number of radioactive nuclei of $^{40}K$ samples. In the second part you will establish a histogram of the number of measured decay processes and you will fit a Poisson probability function to the histogram. The fit will also yield a value of the half-life of $^{40}K$, which should be compared with the value resulting from the first part. The question is which method yields the best result and whether there is a trade-off.

## Introduction
### The natural background of ionizing radiation: $^{40}$K
Although not generally known, everyone is exposed to ionizing radiation of natural origin. This radiation originates from both cosmic and terrestrial sources. Terrestrial radiation arises from several kinds of radioactive substances. Some of these substances are present because of human activity (nuclear tests, nuclear power plants). A substantial part of these substances, however, occurs naturally and comprises radioactive nuclides with a long lifetime. This category includes uranium isotopes and the radioactive decay products of these isotopes, including the noble gas radon. The natural composition of potassium also includes and isotope with a very long lifetime: $^{40}K$.
 

This potassium isotope dominantly decays to $^{40}$Ca by emission of an electron, so-called $\beta^-$-decay. Further processes are $\beta^+$-decay (emission of a positron, i.e. a positively charged electron) or capture of an electron from an electron shell close to the nucleus (electron capture, EC). In these cases the decay product is $^{40}$Ar. A decay scheme of $^{40}K$ is given in Figure 1 [1].


The lifetime of $^{40}K$ must be of the same order of magnitude as that of the lifetime of the Earth. Otherwise, the $^{40}K$ formed in creation of the Earth would have disappeared already by radioactive decay.

```{figure} /figures/K40/EI_4figuur1.png
---
name: K40_intro
width: 50%
---
Decay scheme of $^{40}K$. Vertical lines correspond to emission of gamma radiation. EC: electron capture.
```

### Equivalent dose from background radiation
In expressing the potential risks due to radiation the equivalent dose is often used. This is the radiation load due to ionizing radiation. The equivalent dose is the absorbed dose (absorbed energy per kg material) multiplied by a factor representing the biological effectiveness of the radiation. The SI unit of equivalent dose is the Sievert (Sv).


In the Netherlands, the equivalent dose resulting from natural sources is roughly 2 mSv per year of which roughly 10\%  is due to the decay of $^{40}K$. In comparison, having an X-ray in a hospital also gives an equivalent dose of several tenths of mSv. A skiing holiday or a transatlantic flight, since one is higher up in the atmosphere, give equivalent doses of one hundredth to one tenth of a mSv.

## Theory of the radioactive decay
### Average behaviour
Suppose we have a number of $N(t)$ nuclei of a radioactive nuclide at time $t$. It is reasonable to assume that the number of nuclei that decays ($\Delta N$) on average in a time span $\Delta t$ is both proportional to $N(t)$ and $\Delta t$:

$$
\Delta N =-\lambda N(t)\Delta t
$$ (dN)

Here, the proportionality factor $\lambda$ is called the decay constant. Equation {eq}`dN` is in fact a differential equation for $N(t)$. Its solution,the law of *radioactive decay*, is an exponentially decaying function in time:

$$
N(t) = N(0) e^{-\lambda t}
$$ (N(t))

$N(0)$ is the number of radioactive nuclei in a sample at $t = 0$. Furthermore, $N(t)$ is the number of radioactive nuclei that did not yet decay at time $t$.
 

The inverse of $\lambda$, i.e. $\tau$ = 1/$\lambda$, is called the *average lifetime* of the nuclide. This is the time it takes for the number of parent nuclei to decrease to 1/e of its initial value. Additionally, the half-life $t_{1/2}$ is often used. This is the time it takes for half the original nuclei to decay. By substituting in Eq.(\ref{N(t)}) the value $\frac{1}{2}$*N*(0) for $N(t)$, it easily follows that

$$
t_{1/2} = \frac{\ln(2)}{\lambda} = \tau \ln(2)
$$ (t1/2)

The decay constant (and hence the average lifetime and the half-life) is a characteristic of a radioactive nuclide, for example $^{40}K$. 
The activity of a radioactive source is the number of nuclei that decay per unit of time:

$$
A(t)=\left|\frac{d N(t)}{d t}\right|=\lambda N(0) e^{-\lambda t}
$$ (A(t))

The activity also decays exponentially in time, again with constant $\tau$ = 1/$\lambda$. The activity has the dimension t$^{-1}$ and thus can be expressed in s$^{-1}$. However, there is a distinct SI-unit for activity of a radioactive source, the becquerel (Bq). In this context, we note that a *count rate should be expressed in the unit in s$^{-1}$* or a similar unit (*e.g.* min$^{-1}$). A count rate only *becomes an activity with unit Bq after correction for a number of effects*, such as background radiation and the efficiency of the setup.

### Statistics of the decay
Equation {eq}`N(t)` describes the average behaviour of radioactive decay. On a short time scale, however, the decay has a random character. The number of decay processes
taking place in a time interval $\Delta$*t* varies in time and shows a statistical behaviour around the mean $\mu$. The statistical probability that *k* nuclei of the *N*(t) nuclei present in the sample decay in the time interval $\Delta$*t* is given by the Poisson probability distribution  *P_{$\mu$}*(*k*) :

$$
P_{\mu}(k)=\frac{\mu^{k}}{k !} e^{-\mu}
$$ (Pmu)

The parameter $\mu$ is the mean number of decay processes in a time interval $\Delta t$. The value of $\mu$ can be calculated from the values of *k* measured for a very large number of in-dependent time intervals $\Delta t$ (of equal size). The function *k*! (pronounce: k faculty) is the factorial function given by $k! = 1\times2\times3\times...\times k$ (with 0!=1).

```{figure} /figures/K40/EI_4figuur2.png
:name: K40_Poisson
Poisson probability distribution for $\mu=3$, plotted together with the histogram to which the distribution has been fitted. The probability distribution is asymmetric. The curve has been plotted as a continuous curve, but in reality the distribution only holds for integer values of k.
```

Although Eq. {eq}`Pmu` gives a relatively simple function, it is difficult to remember how $\mu$ and *k* are placed in the expression (Advice: keep on paying attention to this!). From Eq. {eq}`Pmu` it follows that the Poisson probability distribution is determined by only a single parameter $\mu$, the mean of the distribution. Figure 2 shows the plot of a Poisson distribution for $\mu=3$. It can be
noticed immediately that the Poisson distribution is not symmetric, a property most easily seen for $\mu\leq 5$.


An expression for $\mu$ based on the average behaviour of the radioactive decay can be obtained by multiplying the average decrease of the number of radioactive nuclei per unit of time [i.e. the activity, Eq. {eq}`A(t)`] with the time interval $\Delta t$:

$$
\mu=\left|\frac{d N(t)}{d t}\right| \Delta t=\lambda N(0) e^{-\lambda t} \Delta t=\lambda N(t) \Delta t=\frac{\ln 2}{t_{1/2}}N \Delta t
$$ (mu)

Omitting the time dependence of *N* in the last part of this equation indicates that the number of radioactive nuclei only decreases negligibly in the time interval $\Delta t$. (N.b.: usually, the notation for a time interval is $\Delta t$; generally, *t* denotes a point in time.)


Typically, in measuring radioactive decay, a counting experiment is performed. In such an experiment the number of decay processes in the time interval $\Delta t$ is counted
by detection of the decay products. By repeating the counting many times and making a histogram of the count totals in the time intervals $\Delta t$, a distribution is obtained. This distribution will confirm the Poisson distribution.
Apart from the mean, the standard deviation $\sigma$ is an important characteristic of the Poisson distribution. In particular, $\sigma$  determines the width of the distribution. From the definition of the standard deviation and Eq. {eq}`Pmu`, one can derive:

$$
\sigma=\sqrt{\mu}
$$ (sigma)

Thus, the parameter $\mu$ is not only the mean of the distribution, but also determines its standard deviation. Equation {eq}`sigma` is often generalised to the square root rule for an individual counting experiment (not limited to radioactive decay; for example the number of babies born per month in a hospital): the uncertainty in a counting experiment with a count total of *k* is $\sqrt{k}$. The fractional uncertainty then is

$$
\frac{u(k)}{k}=\frac{\sqrt{k}}{k}=\frac{1}{\sqrt{k}},
$$ (uk)

implying it pays off to score a higher count total, for instance by using a source of higher activity or by measuring during a longer time period.


We now address two more topics about the Poisson distribution: the normalisation of the distribution and the calculation of the mean using Eq. {eq}`Pmu`.


*Normalisation*: For a probability distribution the sum of all probabilities equals unity. This applies to the Poison distribution as well:

$$
\sum_{k=0}^{\infty} P_{\mu}(k)=1.
$$ (poisson)

The correctness of Eq. {eq}`poisson` immediately follows from the Taylor series expansion of $e^{\mu}$: $e^{\mu}=\sum_{k=0}^{\infty} \mu^{k} / k!$


*Calculation of the mean*: the property that $\mu$ is the mean number of decay processes can be proven by summing over all possible value of *k*, each multiplied by the probability of its occurrence:

$$
\bar{k}=\sum_{k=0}^{\infty} k P_{\mu}(k)=\sum_{k=0}^{\infty} k \frac{\mu^{k}}{k !} e^{-\mu}=\mu e^{-\mu} \sum_{k=1}^{\infty} \frac{\mu^{k-1}}{(k-1) !}=\mu
$$

The Poisson distribution typically holds for a probability experiment with a very large population and a small probability of �success�. Here, success means that a nucleus
decays; *k* in Eq. {eq}`Pmu` counts the number of successes. For radioactive decay the population is the very large number of radioactive nuclei (here: $N\sim 10^{18}$), while the probability of success is given by the small number $w=\frac{\Delta t}{\tau}$  (here: $w\sim 10^{-16}$). In the terminology of statistics, each individual counting experiment during a time period $\Delta t$ can be seen as *N* attempts (since there are *N* nuclei). In each counting experiment, the count is made how many of *N* attempts lead to success.


In the limit of very large $\mu$, the asymmetric Poisson distribution turns into the symmetric normal distribution, which in general is determined by two independent parameters (the mean and the standard deviation). For rare and random decay processes, however, only the parameter $\mu$ of the original Poisson distribution determines the resulting normal distribution (again with: mean = $\mu$ and standard deviation = $\sqrt{\mu}$ ).

## Determination of the Half-Life of $^{40
$K}
From the preceding chapter it follows that the half-life of a nuclide can be determined by measuring the activity as a function of time. One could measure the count rate and, if needed, correct it for background radiation. The corrected count rate is proportional to the activity. If the corrected count rate is plotted on a logarithmic scale versus time, then within the measurement uncertainty a straight line results with a slope $-\lambda$, from which $\tau$ can be calculated using Eq. {eq}`t1/2`.


However, a sample containing $^{40}K$ is not expected to show a decrease of activity during any realistic measurement time, given the half-life of billions of years. Therefore, our first method to obtain the half-life is based on Eq. {eq}`A(t)`, by determining $A(0)$ and $N(0)$. Indeed, according to Eq. {eq}`A(t)` we have

$$
\lambda=\frac{A(0)}{N(0)}
$$

And from Eq. {eq}`t1/2` it follows

$$
t_{1/2}=\frac{N(0)}{A(0)} \ln 2
$$ (N0/A0)

The other way of determining $\tau$ is by experimentally obtaining the histogram of count totals, each total measured during the time interval $\Delta t$. By fitting a Poisson distribution to the histogram the mean $\mu$ is obtained, which via Eq. {eq}`mu` leads to $\tau$.

### Determining the number of $^{40
$K nuclei in one gram of KCl}
The quantities $N(0)$ and $A(0)$ in the equation for the half-life relate to the same number of $^{40}K$ nuclei. This situation can be realized by reducing measurement results from different samples to the mass of one gram of KCl.
When we redefine $N(0)$ as the number of $^{40}K$ nuclei in one gram of KCl, then $N(0)$ can be expressed in $p$, $N_{A}$ and $M$.
$p$ is the fraction of the presence (abundance) of the isotope $^{40}K$ in the natural isotope mixture, $N_{A}$ is the Avogadro constant, $M$ is the molar mass of KCl. The values of $p$, $N_{A}$ and $M$ can be looked up in a data compendium, for example [3].

### Determining the activity of one gram of KCl
To determine the activity of one gram of KCl, we use the setup depicted in {numref}`K40_GM`. The heart of the setup is a Geiger-Muller (GM) detector, applied in this experiment to detect electrons.


```{figure} /figures/K40/EI_4figuur3EN.png
:name: K40_GM
Geiger-M�ller counting setup for determining the half-live of $^{40}K$.  Sample holders are available to accommodate different thicknesses of KCl powder. The holder should be placed in the uppermost slot.
```

Typically, the number of detections induced by the KCl sample is counted during a certain time period, using a counter/timer. The count rate *R* is obtained by dividing the count total $N_{count}$ by the measurement time $\Delta t$: $R = N_{count}/\Delta t$. Since the count rate is not equal to the activity, it is therefore expressed in s$^{-1}$ and not in Bq. The count rate is recalculated into the activity by making several corrections. The discussion below is limited to those corrections that give a significant contribution.


*1. Background radiation*
The count rate *R* should be corrected for the background radiation. To determine the background, a count is made without the sample in place. The count is taken over a time period as long as reasonably possible, to minimize the relative uncertainty of the correction. See Eq. {eq}`uk`. The resulting count rate $R_{corr}$ corrected for the background then is 

$$
R_{\mathrm{corr}}=\frac{N_{\mathrm{count}}}{\Delta t}-\frac{N_{\mathrm{b}}}{\Delta t_{\mathrm{b}}},
$$ (Rcorr)

where $N_b$ is the count total for the background and $\Delta t_b$ the duration of background counting. From $R_{corr}$ the count rate per gram is given by

$$
r_{\mathrm{corr}}=\frac{R_{corr}}{m}
$$ (eq:rcorr)

with $M$ the mass of the sample in grams.


*2. Efficiency*
Since not each decay induces a detection, further correction of the count rate is needed. The ratio of the count rate to the activity is called the *efficiency*. The total efficiency is determined by three factors: (a) the *self-absorption* in the source, (b) the $\beta$-*efficiency* of the GM detector and (c) the *geometric efficiency* of the setup.


a. *Self-absorption*.

With increasing sample thickness, more decay products will be absorbed in the source itself and will thus not reach the detector. This effect of self-absorption can be corrected for by measuring the rate $r_{corr}$ as a function of sample thickness *d* and by extrapolating the results to zero thickness. To enable this, sample holders are available to accommodate different thicknesses of KCl powder. The extrapolation including uncertainty analysis is performed in Python, using a least squares fit of a polynomial to the data points and taking into account the error bars of the points. When using a polynomial, the following relation between $r_{corr}$ and *d* is assumed to hold:

$$
r_{\mathrm{corr}}(d)=a_{0}+a_{1} d+a_{2} d^{2}+\ldots
$$ (eq:rcorr2)

The least squares fit yields the coefficients $a_0, a_1, a_2, ...$ of the polynomial. Extrapolation to zero thickness implies setting $d = 0$ in the fitted polynomial, thus obtaining
$r_{corr,0} = r_{corr}(0) = a_0$. Thus, $r_{corr,0}$ is the self-absorption corrected count rate of 1 gram of KCl, obtained via determining the count rate per gram as a function of sample thickness including correction for the background. In the symbol $r_{corr,0}$ the index �corr� denotes correction for the background, while the index �0� denotes extrapolation to zero sample thickness.


b. *The $\beta$-efficiency $\epsilon$*\\
This is the ratio of the number of detected $\beta$-particles to the number of $\beta$-particles reaching the GM-tube. The value of $\epsilon$ is given in the data sheet of the setup.


c. *Geometric efficiency G.*

This is the ratio of the number of electrons reaching the detector to the number of electrons that are emitted by the source. Since electron emission from the source is omnidirectional and the detector does not completely enclose the source, only a fraction of the electrons will reach the detector. This geometric efficiency relates to the solid angle under which the detector �sees� the source (solid angle is the three-dimensional equivalent of angle in the plane). For a point source the solid angle can be easily calculated. In our case, however, the source is not a point source, resulting in a rather complex expression for G:

$$
G=0.5 \times\left[1-\frac{1}{(1+\beta)^{1 / 2}}-\gamma \frac{3}{8} \frac{\beta}{(1+\beta)^{5 / 2}}-\gamma^{2}\left(-\frac{5}{16} \frac{\beta}{(1+\beta)^{7 / 2}}+\frac{35}{64} \frac{\beta^{2}}{\left(1+\beta^{9 / 2}\right)}\right)-\ldots\right]
$$ (G)

Here $\beta=\left(R_{\mathrm{d}} / s\right)^{2}$ and $\gamma=\left(R_{\mathrm{s}} / s\right)^{2}$, with *s* the distance between the source and the detector window, $R_d$ the radius of the circular and flat detector window and $R_s$ the radius of the circular and flat source (see {numref}`Fig:K40_geometry`).

You can verify that: 

$$
\begin{array}{ll}{s=6.7 \mathrm{mm},} & {u(s)=0.1 \mathrm{mm} \text { (highest position) }} \\ {R_{\mathrm{d}}=14.5 \mathrm{mm},} & {u\left(R_{\mathrm{d}}\right)=0.3 \mathrm{mm}} \\ {R_{\mathrm{s}}=15.00 \mathrm{mm},} & {u\left(\mathrm{R}_{\mathrm{s}}\right)=0.05 \mathrm{mm}}\end{array}
$$

Equation {eq}`G` is rather complex, making the complete uncertainty analysis for the efficiency $G$ rather involved. Therefore, the value of $G$ and the corresponding uncertainty are given here: $G=0.215$, with $u(G)=0.006$.


```{figure} /figures/K40/EI_4figuur4EN.png
:name: Fig:K40_geometry
Geometry of the source and detector, with indication of relevant dimensions.
```

*3. Fraction of $\beta^-$ -decay*

The last correction to be discussed relates to the property of the GM detector of only detecting the $\beta^-$-decay.
The very few positrons emitted in the $\beta^+$-decay (see {numref}`K40_intro`) annihilate with electrons of the K$^{+}$ and Cl$^{-}$ ions and thus will not reach the detector. This positron annihilation results in $\gamma$-radiation, for which the detector has a very low efficiency. Electron capture (EC, see {numref}`K40_intro`) will mainly result in X-ray photons, of which a very high fraction is absorbed in the source. It follows that of the three decay channels only the fraction of $\beta^-$-decay is seen by the detector. This fraction is denoted by the symbol $f$.

## Assignments
For the formulation of the problem, see the chapter GOAL. A separate afternoon will be scheduled to work on the problem analysis aad a measurement plan.
For data processing and data plotting you will use Python. In particular, you will use Python for making least squares fits of functions (polynomial and Poisson distribution) to the experimental data.

### Part1: Determining the half-life from the activity and the number of nuclei
Before equation {eq}`N0/A0` can be applied to determine the half-life, the number of nuclei $N(0)$ and the measured activity $A(0)$, both per gram, should be expressed. These can be calculated from the measuring data or taken from literature. The related assignments are:

1. Express $N(0)$ in $p$, $N_A$ and $M$.
1. Look up the values for $p$, $N_A$ and $M$, including their uncertainties, and write these down.
1. Write $A(0)$ as a function of the quantities $r_{corr,0}$ ,  $\epsilon$, $G$ and  $f$. You will calculate the value of $r_{corr,0}$ in assignment 9 below, the three other quantities can be looked up.
1. Look up the values for $\epsilon$, $G$ and $f$, including their uncertainties, and write these down.
1. Write the half-life $t_{1/2}$ as a function of the quantities $p$, $N_A$, $M$, $r_{corr,0}$,  $\epsilon$, $G$ and  $f$ using Eq. {eq}`N0/A0` and the expressions derived for $N(0)$ and $A(0)$
1. Derive the equation for the relative uncertainty of $t_{1/2}$ using the expression for $t_{1/2}$ just obtained. Determine those contributions to the total uncertainty that can be neglected.
1. Study the measurement setup. The sample holders should be placed in the upper-most slot, since the G-value given in paragraph 4.2 holds for this position.
1. The raw count data, measured as a function of sample thickness, must be converted to count rates $r_{corr}$. Based on Eqs. {eq}`Rcorr` and {eq}`eq:rcorr`, write $r_{corr}$ as a function of quantities that either can be measured directly or can be set to a certain value.
1. To determine $r_{corr,0}$, make a plot in Python of $r_{corr}$ as a function of $d$ and extrapolate the polynomial fit to $d=0$. Include the error bars for the data points in your plot, for which you will need the uncertainty of $r_{corr}$. Derive the expression for the uncertainty of $r_{corr}$ and determine which contributions can be neglected.
1. What is the literature value of the half-life of $^{40}K$ in literature?

### Part 2: Determining the half-life from the Poisson distribution
You will repeatedly count the number $k$ of decayed nuclei during a time interval $\Delta t$ and determine the Poisson distribution $P_{\mu}(k)$ corresponding to the count totals. The resulting fit parameter is $\mu$, which is related to the half-life according to Eq. {eq}`mu`. Assignments:
1. To obtain an accurate approximation of the Poisson distribution, you have to
perform at least 200 individual counts. Choose the time interval $\Delta t$ such that the
average number of counts in the interval is less than 10. Choose the sample holder with the most shallow cavity (why?) and again use the uppermost slot.
1. Determine the mean from the count totals, using Python. This will be your first estimate of $\mu$. A logical way for this is by putting the count totals in a vector $N$. Additionally, use: 
    \begin{lstlisting}[language=Python]
    min(N)
    max(N)
    len(N)
    mu = sum(N)/len(N)          \end{lstlisting}
1. With Python, plot a histogram of the count totals. Then add the Poisson distribution for the value of $\mu$ (from assignment 12) to the same plot. For the plot you may approximate the Poisson distribution by replacing $k!$ in Eq. {eq}`Pmu` with the gamma function for the argument $(k+1)$. By doing so, $P_{\mu}(k)$ can also be calculated for non-integer values of $k$. Don't forget to add to the top of the script:
    \begin{lstlisting}[language=Python]
    from scipy.special import gamma
    \end{lstlisting}
    For calculating and plotting a histogram, with 25 bins, with the centers corresponding to the number of counts within $\Delta t$ (here 0 to 24), the input in Python will be
    \begin{lstlisting}[language=Python]
     n = plt.hist(N, bins=25, range=[-0.5, 24.5], rwidth=0.9)
    \end{lstlisting}
    We like to add the theoretical distribution corresponding to the value of $\mu$ of Assignment 12 to the plot. To this end prepare an array with closely spaced values \lstinline[columns=fixed]{kf}. For instance:
     \begin{lstlisting}[language=Python]
        kf = np.linspace(-0.5,24.5,100)	
	    Pois = len(N)*(mu**kf)*np.exp(-mu)/gamma(kf+1)
        plt.plot(kf,Pois,color='k', linestyle='dashed')
    \end{lstlisting}
If needed, you can adapt the axes: range, labels, font size. 
1. Then, use \lstinline[columns=fixed]{curve fit} to fit the frequencies (= the number in the bins) to the Poisson distribution. The fit function is:
    \begin{lstlisting}[language=Python]
        def func(x,a):
            y = len(N)*(a**x)*exp(-a)/gamma(x+1)
            return y
    \end{lstlisting}
    NOTE: It�s not possible to directly multiply \lstinline[columns=fixed]{func()} in the argument of \lstinline[columns=fixed]{curve_fit} with \lstinline[columns=fixed]{len(N)}. Therefore, we have to incorporate \lstinline[columns=fixed]{len(N)} in the function definition. You could fit this as a parameter as well, but this is not required. This yields the fitted $\mu (= a)$, as well as the extreme values of $\mu$ determined by the error in the fit. 
1. Plot the Poisson distribution corresponding to the $\mu$ just obtained in the same plot that already has the histogram and the previously derived distribution (assignment 13).  Evaluate the similarity of the two distributions to the histogram.

	Is the figure complete? Save it.
	1. Compare the obtained half-life to the value of Part 1, and compare each result to the literature value.

\medskip
*Measurement Plan*
Before performing the measurements, you have to set up a measurement plan. Discuss the plan with the assistant, whom you can also ask about issues that remained unclear. If needed, perform a test measurement. After approval by the assistant, you will execute the measurement plan on the afternoon scheduled. 

\medskip

\begin{thebibliography}{9}
\bibitem{USDHEW} 
*Radiological Health Handbook*. 
U.S. Department of Health Education and Welfare, 1970.

\bibitem{hughes} 
I.G. Hughes and T.P.A. Hase, 
*Measurements and their Uncertainties*.
Oxford University Press, 2010.

\bibitem{james} 
A.M. James and M.P. Lord,
*MAcMillan's Chemical and Physical Data,*
MacMillan Press, 1992
\end{thebibliography}

