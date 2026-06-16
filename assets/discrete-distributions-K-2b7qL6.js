var e=`# Continuous Distributions: Uniform and Exponential

## Definition

Continuous probability distributions are mathematical functions that describe the likelihood of a random variable taking on a value within a specified range, rather than at an exact point. Unlike discrete distributions, which assign probabilities to countable outcomes, continuous distributions use a Probability Density Function (PDF) $f(x)$ to characterize the relative likelihood of outcomes over an interval. The total area under the PDF curve must equal $1$, representing the certainty that the random variable falls somewhere within its support.

The Uniform distribution is the simplest continuous distribution, modeling a scenario where all outcomes in a defined interval $[a, b]$ are equally likely. It is characterized by a constant probability density across its support.

The Exponential distribution models the time or space between independent events occurring at a constant average rate $\\lambda$. It is closely related to the Poisson process, which counts the number of events in a fixed interval. While the Uniform distribution suggests predictability and lack of bias, the Exponential distribution represents "memoryless" decay, frequently appearing in survival analysis and reliability engineering.

## Key Terminology

- **Probability Density Function (PDF):** A function $f(x)$ such that the probability that a random variable $X$ falls in interval $[c, d]$ is $\\int_{c}^{d}f(x)dx$.
- **Cumulative Distribution Function (CDF):** A function $F(x) = P(X \\le x)$ that accumulates the probability up to value $x$.
- **Support:** The set of values for which the PDF is non-zero. For the Uniform distribution on $[a, b]$, the support is $a \\le x \\le b$. For the Exponential distribution, the support is $x \\ge 0$.
- **Rate Parameter ($\\lambda$):** A positive constant in the Exponential distribution representing the average number of events per unit time or space.
- **Memorylessness:** A defining property of the Exponential distribution where the probability of an event occurring in the future is independent of how much time has already elapsed.
- **Support Interval:** The closed interval $[a, b]$ for the Uniform distribution.

## Purpose

Continuous distributions are essential for modeling physical and social phenomena that occur on a continuum. The Uniform distribution serves as the foundation for random number generation in computer science and simulations where total uncertainty or "fairness" is required. By transforming the Uniform distribution, one can generate samples from other complex probability distributions via the Probability Integral Transform.

The Exponential distribution is the primary tool for modeling the "waiting time" between events. In telecommunications, it models the time between incoming packets; in finance, it models the time between defaults; and in biology, it models the lifespan of radioactive atoms or the time until a failure in a mechanical system. Its utility lies in its ability to simplify complex stochastic processes into a single parameter $\\lambda$, allowing engineers and scientists to predict system reliability under constant-rate assumptions.

## Fundamental Properties

### The Uniform Distribution
For a random variable $X \\sim U(a, b)$, the PDF is defined as:
$$f(x) = \\frac{1}{b-a}, \\quad a \\le x \\le b$$
The expected value is the midpoint, $E[X] = \\frac{a+b}{2}$, and the variance is $Var(X) = \\frac{(b-a)^2}{12}$. The CDF is $F(x) = \\frac{x-a}{b-a}$ for $x$ in the support.

\`\`\`interactivegraph
1/(b-a)
params: a=0, b=1
range: a=-2:2, b=1:5
\`\`\`
The interactive graph above plots the constant probability density of the Uniform distribution. The user can adjust parameters $a$ and $b$ to observe how the height of the rectangle ($1/(b-a)$) changes to maintain a total area of $1$ as the width of the interval expands or contracts.

### The Exponential Distribution
For a random variable $X \\sim \\text{Exp}(\\lambda)$, the PDF is:
$$f(x) = \\lambda e^{-\\lambda x}, \\quad x \\ge 0$$
The expected value is $E[X] = \\frac{1}{\\lambda}$ and the variance is $Var(X) = \\frac{1}{\\lambda^2}$. The CDF is $F(x) = 1 - e^{-\\lambda x}$.

\`\`\`interactivegraph
l * exp(-l * x)
params: l=1
range: l=0.1:3
\`\`\`
The graph above illustrates the Exponential decay function $f(x) = \\lambda e^{-\\lambda x}$. Observe how increasing the rate parameter $\\lambda$ causes the curve to decay more rapidly toward zero, indicating that events occur more frequently (shorter expected waiting time).

## Types & Variations

### Uniform Variations
- **Standard Uniform:** $U(0, 1)$. This is the most common variation, serving as the raw input for most pseudo-random number generators in software libraries.
- **Discrete Uniform:** Though often contrasted with continuous, it is the conceptual progenitor where $P(X=k) = 1/n$.
- **Multivariate Uniform:** Extending the concept to hypershapes (e.g., inside a sphere or cube).

### Exponential Variations
- **Shifted Exponential:** Introduces a location parameter $\\gamma$ such that the support becomes $[\\gamma, \\infty)$, shifting the start of the distribution.
- **Truncated Exponential:** Restricts the range to a finite interval $[0, T]$.
- **Weibull Distribution:** A generalization of the Exponential distribution. While the Exponential distribution has a constant failure rate, the Weibull distribution introduces a shape parameter $k$, allowing the failure rate to increase or decrease over time.
- **Gamma Distribution:** Represents the sum of independent Exponentially distributed variables. If we wait for $\\alpha$ events to occur, the total time follows a Gamma distribution.

| Distribution | PDF | Support | Mean |
| :--- | :--- | :--- | :--- |
| Uniform | $\\frac{1}{b-a}$ | $[a, b]$ | $\\frac{a+b}{2}$ |
| Exponential | $\\lambda e^{-\\lambda x}$ | $[0, \\infty)$ | $\\frac{1}{\\lambda}$ |

## How to Solve

To work with these distributions, one must be proficient in integration and calculus-based probability.

### Calculating Probabilities
To find the probability $P(X \\le k)$ for a continuous random variable, compute the integral of the PDF from the lower bound to $k$:
$$P(X \\le k) = \\int_{-\\infty}^{k} f(x) dx$$

**Example: Exponential Distribution**
If the arrival of emails follows an Exponential distribution with a rate of $2$ emails per hour ($\\lambda=2$), what is the probability that the next email arrives in less than 30 minutes (0.5 hours)?
1. Identify the CDF: $F(x) = 1 - e^{-\\lambda x}$.
2. Plug in values: $F(0.5) = 1 - e^{-2(0.5)} = 1 - e^{-1}$.
3. Calculate: $1 - 0.3678 = 0.6322$.
The probability is approximately $63.2\\%$.

### Deriving Moments
The $n$-th moment $E[X^n]$ is calculated as $\\int x^n f(x) dx$. For the Uniform distribution, finding the mean is straightforward:
$$E[X] = \\int_{a}^{b} x \\frac{1}{b-a} dx = \\frac{1}{b-a} \\left[ \\frac{x^2}{2} \\right]_{a}^{b} = \\frac{b^2-a^2}{2(b-a)} = \\frac{(b-a)(b+a)}{2(b-a)} = \\frac{a+b}{2}$$

### Memoryless Property Proof
The defining characteristic of the Exponential distribution is $P(X > s+t | X > s) = P(X > t)$.
1. By definition of conditional probability: $\\frac{P(X > s+t \\cap X > s)}{P(X > s)}$.
2. Since $s, t > 0$, $X > s+t$ implies $X > s$, so the intersection simplifies to $P(X > s+t)$.
3. Substitute the survival function $S(x) = e^{-\\lambda x}$:
$$\\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}} = \\frac{e^{-\\lambda s} e^{-\\lambda t}}{e^{-\\lambda s}} = e^{-\\lambda t} = P(X > t)$$
This algebraic proof confirms that the remaining waiting time is independent of the time already elapsed.

## Summary

Continuous probability distributions provide a rigorous framework for quantifying uncertainty in time and space. The Uniform distribution models total ignorance of preference within a bounded range, providing a flat probability landscape. The Exponential distribution models the stochastic nature of arrival processes, defined by its unique memoryless property and its sensitivity to the rate parameter $\\lambda$.

Understanding these two distributions is foundational for advanced statistics. The Uniform distribution allows for the simulation of complex systems through the inversion of the CDF, while the Exponential distribution serves as the building block for queuing theory and reliability models. Mastering the calculus behind their moments, cumulative probabilities, and properties ensures the ability to model real-world processes accurately, whether it be predicting the failure of hardware or the arrival times of data packets in a high-traffic network. Both distributions represent the elegance of mathematical parsimony, where complex behavior is governed by simple, tractable functional forms.`;export{e as default};