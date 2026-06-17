var e=`# Expected Value, Variance, and Moments

## Definition

In probability theory and statistics, the descriptors of a random variable's distribution are encapsulated by the concept of moments. A random variable $X$ is a mapping from a sample space to the real numbers. The behavior of this variable is characterized by its expected value, variance, and higher-order moments.

The $n$-th moment of a random variable $X$ about a constant $c$ is defined as $E[(X-c)^n]$. When $c=0$, we speak of the raw moments or moments about the origin. When $c=E[X]$, we define the central moments, which describe the shape of the distribution independent of its location.

The expected value, denoted as $E[X]$ or $\\mu$, is the first raw moment. It represents the probability-weighted average of all possible values of $X$. For a continuous random variable with probability density function $f(x)$, the expected value is given by:
$$E[X]=\\int_{-\\infty}^{\\infty}x f(x)dx$$
For a discrete random variable with probability mass function $p(x_i)$, the definition is:
$$E[X]=\\sum_{i}x_i p(x_i)$$

The variance, denoted as $Var(X)$ or $\\sigma^2$, is the second central moment. It quantifies the dispersion or "spread" of the variable around its mean:
$$Var(X)=E[(X-E[X])^2]=E[X^2]-(E[X])^2$$

## Key Terminology

To navigate the study of probability distributions, one must master the following foundational terms:

| Term | Definition | Mathematical Symbol |
| :--- | :--- | :--- |
| Random Variable | A variable whose value is subject to variations due to chance. | $X, Y, Z$ |
| Probability Density Function | A function representing the relative likelihood of a variable taking a given value. | $f(x)$ |
| Expected Value | The long-run average value of repetitions of the same experiment. | $E[X]$ or $\\mu$ |
| Variance | The expectation of the squared deviation of a random variable from its mean. | $Var(X)$ or $\\sigma^2$ |
| Standard Deviation | The square root of the variance, providing a measure in the same units as the mean. | $\\sigma$ |
| Skewness | The third standardized moment, representing the asymmetry of the distribution. | $\\gamma_1$ |
| Kurtosis | The fourth standardized moment, measuring the "tailedness" of the distribution. | $\\beta_2$ |

## Purpose

The primary utility of moments is the characterization of probability distributions. A distribution is rarely fully defined by a single parameter. The expected value provides a measure of central tendency, acting as the "center of mass" for the distribution. However, knowing only the mean provides no information regarding the reliability or volatility of the variable.

Variance supplements the mean by defining the scale of fluctuations. In finance, for example, the expected value of an asset return represents projected profit, while variance represents risk. Higher-order moments provide even greater granularity. Skewness identifies whether extreme values are more likely to occur on the left or right tail of the distribution, and kurtosis reveals the propensity of a distribution to produce outliers (heavy tails).

Together, these moments allow statisticians to approximate complex distributions using a limited set of descriptive values. In the context of the Method of Moments, we equate population moments to sample moments to estimate unknown parameters of a probability model, providing a robust statistical inference framework.

## Fundamental Properties

Expected value and variance exhibit specific algebraic properties that simplify complex calculations. Linearity of expectation is a cornerstone property, stating that for any constants $a$ and $b$:
$$E[aX+b]=aE[X]+b$$
Furthermore, for the sum of two random variables $X$ and $Y$:
$$E[X+Y]=E[X]+E[Y]$$
This property holds regardless of whether the variables are independent.

Conversely, the variance is not linear. For constants $a$ and $b$:
$$Var(aX+b)=a^2Var(X)$$
The constant $b$ disappears because shifting the distribution does not change its spread. If $X$ and $Y$ are independent, the variance of their sum is the sum of their variances:
$$Var(X+Y)=Var(X)+Var(Y)$$
If they are not independent, one must account for the covariance:
$$Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y)$$

The moments are also linked via the Moment Generating Function (MGF), defined as $M_X(t)=E[e^{tX}]$. The $n$-th raw moment is found by taking the $n$-th derivative of the MGF evaluated at $t=0$:
$$E[X^n]=\\left.\\frac{d^n}{dt^n}M_X(t)\\right|_{t=0}$$

## Types & Variations

There are several ways to categorize moments, each serving a distinct analytical role.

### Raw Moments
These are moments about the origin, $E[X^n]$. While mathematically useful for derivations, they are often less intuitive than central moments because they are dependent on the shift of the data.

### Central Moments
Defined as $E[(X-\\mu)^n]$, these characterize the distribution's shape.
- 1st central moment: Always $0$.
- 2nd central moment: Variance.
- 3rd central moment: Used to calculate skewness.
- 4th central moment: Used to calculate kurtosis.

### Standardized Moments
To compare different distributions regardless of scale, we divide the $n$-th central moment by the standard deviation raised to the $n$-th power:
$$\\mu'_n = \\frac{E[(X-\\mu)^n]}{\\sigma^n}$$
This normalization allows for the comparison of shape characteristics between a distribution with a mean of $0$ and one with a mean of $1,000$.

The following interactive graph allows exploration of how the parameters of a normal distribution influence the shape. By varying the mean $\\mu$ and variance $\\sigma^2$, one can observe the shift and spread of the probability density function $f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$.

\`\`\`interactivegraph
(1/sqrt(2*pi*v))*exp(-(x-m)^2/(2*v))
params: m=0, v=1
range: m=-2:2, v=0.5:2
\`\`\`

In the interactive graph above, the parameter $m$ represents the expected value ($\\mu$), causing a horizontal translation of the distribution. The parameter $v$ represents the variance ($\\sigma^2$), which controls the width and height; as $v$ increases, the distribution flattens and widens to maintain a total area of $1$.

## How to Solve

Solving for moments involves integration (for continuous variables) or summation (for discrete variables). The process generally follows a standardized pipeline:

1. **Identify the Distribution:** Determine if the variable follows a known distribution (e.g., Normal, Poisson, Binomial). If it does, use the established formula for its moments.
2. **Apply the Definition:** If the distribution is custom, evaluate the integral or sum:
   - For $E[X]$, compute $\\int x f(x)dx$.
   - For $E[X^2]$, compute $\\int x^2 f(x)dx$.
   - For $Var(X)$, subtract $(E[X])^2$ from $E[X^2]$.
3. **Use the MGF (If Applicable):** For distributions where the PDF is complex, derive the Moment Generating Function $M_X(t)$. Differentiate $M_X(t)$ with respect to $t$ and evaluate at $t=0$. This is often faster for variables like the Gamma or Exponential distributions.
4. **Law of Total Expectation:** For hierarchical models, utilize the law of iterated expectations:
   $$E[X]=E[E[X|Y]]$$
   And the law of total variance:
   $$Var(X)=E[Var(X|Y)]+Var(E[X|Y])$$

These analytical tools ensure that even in high-dimensional probability spaces, one can derive the moments of a random variable through a systematic reduction of complexity.

## Summary

Expected value, variance, and moments constitute the mathematical foundation of descriptive statistics. By summarizing the location, dispersion, and shape of probability distributions, these measures allow us to distill complex, stochastic processes into actionable information. The expected value provides the center, variance measures the spread, and higher moments describe the finer geometric nuances like skew and tail behavior. Mastery of these concepts, from the linearity of expectation to the derivative-based approach using Moment Generating Functions, is essential for any practitioner dealing with data analysis, financial modeling, or physical sciences. Through the lens of moments, randomness becomes structured and quantifiable.`;export{e as default};