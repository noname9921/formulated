var e=`# Continuous Distributions: Uniform and Exponential

## Definition

Continuous probability distributions are mathematical models used to represent variables that can take on any value within a specified range or interval. Unlike discrete distributions, which deal with countable outcomes, continuous distributions are defined by a probability density function (PDF), $f(x)$. The probability of the variable falling within any specific interval $[a, b]$ is given by the integral of the PDF over that interval: $P(a \\leq X \\leq b) = \\int_{a}^{b} f(x) dx$.

The Continuous Uniform Distribution is the simplest continuous distribution, characterizing a scenario where all outcomes within a closed interval $[a, b]$ are equally likely. It is often described as a "rectangular" distribution because its density remains constant across its support.

The Exponential Distribution models the time or space between events in a Poisson process—a sequence of events where events occur continuously and independently at a constant average rate. It is characterized by a high initial density that decays over time, representing a "memoryless" property where the probability of an event occurring in the next interval is independent of how much time has already elapsed.

## Key Terminology

- **Support:** The set of values for which the PDF is non-zero. For Uniform, it is $[a, b]$. For Exponential, it is $[0, \\infty)$.
- **Probability Density Function (PDF):** A function $f(x)$ such that the area under the curve equals 1. For continuous distributions, $P(X=x) = 0$; we only calculate probabilities over ranges.
- **Cumulative Distribution Function (CDF):** The function $F(x) = P(X \\leq x)$, representing the accumulated probability up to point $x$. It is the integral of the PDF from the lower bound to $x$.
- **Memorylessness:** A unique property of the exponential distribution where the probability of an event occurring in the future is independent of the past. Formally, $P(X > s + t | X > s) = P(X > t)$.
- **Rate Parameter ($\\lambda$):** Used in the exponential distribution, $\\lambda > 0$ represents the average number of events per unit time or space.
- **Mean (Expected Value):** The long-run average value of a random variable, denoted as $E[X]$.
- **Variance:** A measure of the dispersion of the distribution, denoted as $Var(X)$.

## Purpose

These distributions serve as foundational building blocks for stochastic modeling. The Uniform distribution is the theoretical basis for Monte Carlo simulations, random number generation, and modeling situations where total ignorance of a variable's exact value exists, save for its bounds. By assigning equal weight to all outcomes, it serves as an "uninformative" prior in Bayesian statistics.

The Exponential distribution is critical in reliability engineering, queuing theory, and survival analysis. Because it models the time between independent, random occurrences, it is the standard choice for calculating the lifespan of components, the wait time for a customer at a service desk, or the time between radioactive decays. Understanding these distributions allows analysts to predict system failures and optimize resource allocation based on arrival and service rates.

## Fundamental Properties

The following table summarizes the mathematical characteristics of the Uniform and Exponential distributions.

| Property | Uniform Distribution $U(a, b)$ | Exponential Distribution $Exp(\\lambda)$ |
| :--- | :--- | :--- |
| PDF $f(x)$ | $\\frac{1}{b-a}$ for $a \\leq x \\leq b$ | $\\lambda e^{-\\lambda x}$ for $x \\geq 0$ |
| CDF $F(x)$ | $\\frac{x-a}{b-a}$ for $a \\leq x \\leq b$ | $1 - e^{-\\lambda x}$ for $x \\geq 0$ |
| Mean $E[X]$ | $\\frac{a+b}{2}$ | $\\frac{1}{\\lambda}$ |
| Variance $Var(X)$ | $\\frac{(b-a)^2}{12}$ | $\\frac{1}{\\lambda^2}$ |
| Support | $x \\in [a, b]$ | $x \\in [0, \\infty)$ |

The Uniform distribution is symmetric; its mean is exactly the midpoint of its bounds. In contrast, the Exponential distribution is highly right-skewed, with the density concentrated near zero and a long "tail" extending toward infinity.

\`\`\`interactivegraph
\\lambda * \\exp(-\\lambda * x)
params: \\lambda=1
range: \\lambda=0.1:3
\`\`\`

The interactive graph above plots the PDF of the Exponential distribution $f(x) = \\lambda e^{-\\lambda x}$. By adjusting the parameter $\\lambda$, one can observe how the rate parameter dictates the decay speed. Higher values of $\\lambda$ result in a steeper drop-off, signifying a higher frequency of events and thus a shorter expected waiting time ($1/\\lambda$).

## Types & Variations

### Continuous Uniform Variations
The standard uniform distribution is $U(0, 1)$, which is the default output for most pseudo-random number generators in computing. Any other uniform distribution $U(a, b)$ can be derived from the standard uniform via the transformation $Y = a + (b-a)X$. 

### Exponential Variations
The Exponential distribution is a specific case of the Gamma distribution. Specifically, $Exp(\\lambda)$ is equivalent to $Gamma(k=1, \\theta=1/\\lambda)$. Furthermore, the sum of $n$ independent, identically distributed exponential random variables follows an Erlang distribution, which is itself a special case of the Gamma distribution where $k=n$. This relationship is fundamental in queuing theory when modeling multi-stage service processes.

## How to Solve

### Calculating Uniform Probabilities
To find the probability $P(x_1 \\leq X \\leq x_2)$ for $X \\sim U(a, b)$:
1. Verify that the interval $[x_1, x_2]$ is within $[a, b]$.
2. Calculate the length of the interval: $\\Delta x = x_2 - x_1$.
3. Divide by the total support length: $P = \\frac{x_2 - x_1}{b-a}$.

**Example:** If the arrival time of a bus is uniformly distributed between 12:00 PM and 12:30 PM ($a=0, b=30$ minutes), the probability of the bus arriving between 12:05 and 12:10 is:
$$ P(5 \\leq X \\leq 10) = \\frac{10 - 5}{30 - 0} = \\frac{5}{30} = \\frac{1}{6} \\approx 0.1667 $$

### Calculating Exponential Probabilities
To find the probability $P(X \\leq x)$ for $X \\sim Exp(\\lambda)$:
1. Identify the rate parameter $\\lambda$.
2. Use the CDF: $F(x) = 1 - e^{-\\lambda x}$.
3. For the probability $P(X > x)$, use the survival function $S(x) = 1 - F(x) = e^{-\\lambda x}$.

**Example:** Suppose service times at a bank follow an exponential distribution with an average of 5 minutes ($E[X] = 1/\\lambda = 5 \\implies \\lambda = 0.2$). The probability that a customer is served in less than 3 minutes is:
$$ P(X \\leq 3) = 1 - e^{-0.2(3)} = 1 - e^{-0.6} \\approx 1 - 0.5488 = 0.4512 $$

## Summary

The Uniform and Exponential distributions provide the mathematical framework for modeling uncertainty in continuous spaces. The Uniform distribution acts as a baseline of maximum entropy, where every outcome within a range is equally likely, forming the basis for simulation and random sampling. The Exponential distribution provides the framework for modeling the time intervals between random, independent events, governed by a constant rate $\\lambda$. 

Understanding the properties of these distributions—specifically the mean, variance, and the unique memoryless property of the exponential decay—allows engineers, mathematicians, and data scientists to build robust models for real-world systems. Whether calculating the probability of a component failure before a specific time or determining the likelihood of an arrival occurring within a time window, these continuous models are indispensable tools in the analytical toolkit. By mastering the integration of their density functions and the application of their CDFs, one gains the ability to quantify risk and predict performance in non-deterministic environments.`;export{e as default};