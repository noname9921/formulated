var e=`# Cumulative Distribution Functions (CDF)

## Definition

In the field of probability theory and statistics, the Cumulative Distribution Function (CDF), typically denoted as $F_X(x)$, describes the probability that a real-valued random variable $X$ will take a value less than or equal to a specific scalar $x$. Formally, for a random variable $X$ defined on a probability space, the CDF is defined as:

$$F_X(x)=P(X\\le x)$$

The domain of the CDF is the entire set of real numbers, $(-\\infty, \\infty)$, while its codomain is the closed interval $[0, 1]$. This function serves as the complete probabilistic characterization of a random variable. Because it encapsulates the probability mass or density of $X$ from negative infinity up to $x$, it provides a non-decreasing, right-continuous representation of the underlying distribution. Regardless of whether $X$ is discrete, continuous, or a mixture of both, the CDF exists and uniquely determines the distribution of the random variable.

## Key Terminology

To navigate the intricacies of CDFs, one must understand several foundational terms that describe the behavior and properties of random variables and their functions:

| Term | Definition |
| :--- | :--- |
| Random Variable | A measurable function that maps outcomes of a random process to numerical values. |
| Probability Density Function (PDF) | The derivative of the CDF for continuous variables, representing the relative likelihood. |
| Probability Mass Function (PMF) | The function that gives the probability that a discrete random variable is exactly equal to some value. |
| Right-Continuity | A property where the limit of the function from the right equals the value at the point. |
| Support | The set of values $x$ for which the probability distribution is non-zero. |
| Quantile Function | The inverse of the CDF, often used to determine the value $x$ such that $F_X(x)=p$. |
| Monotonicity | A non-decreasing property where $F_X(a)\\le F_X(b)$ whenever $a<b$. |

## Purpose

The primary utility of the CDF lies in its ability to standardize the treatment of different types of random variables. While the PDF/PMF provides local information about the likelihood of specific values or intervals, the CDF provides a global perspective.

1. **Probability Calculation**: The CDF allows for the direct calculation of probabilities over intervals. Specifically, for any two points $a$ and $b$ where $a < b$, the probability that $X$ falls within the interval $(a, b]$ is given by $P(a<X\\le b)=F_X(b)-F_X(a)$.
2. **Comparison of Distributions**: Because all CDFs are bounded between 0 and 1 and are monotonically increasing, they allow for the comparison of different statistical models on a common scale, even when the variables have different units or ranges.
3. **Simulation and Sampling**: The Inverse Transform Sampling method relies on the CDF. By generating a uniform random variable $U \\sim \\text{Uniform}(0, 1)$ and calculating $X = F_X^{-1}(U)$, one can generate random samples from any distribution, provided the inverse CDF is known.
4. **Theoretical Foundations**: The CDF is essential in the proof of the Central Limit Theorem and other convergence theorems, as it allows for the definition of convergence in distribution.

## Fundamental Properties

Any function $F(x)$ acts as a valid CDF if and only if it satisfies the following four axiomatic properties:

1. **Monotonicity**: $F(x)$ must be a non-decreasing function. That is, if $x_1 < x_2$, then $F(x_1) \\le F(x_2)$. This stems from the fact that as the upper bound $x$ increases, the set $\\{X \\le x\\}$ grows, thus including more sample space events.
2. **Right-Continuity**: $F(x)$ must be right-continuous, meaning $\\lim_{h \\downarrow 0} F(x+h) = F(x)$. This ensures consistency when dealing with discrete jump points.
3. **Limit at Negative Infinity**: As $x \\to -\\infty$, the probability of $X$ being less than or equal to a value that is essentially impossible must be zero: $\\lim_{x \\to -\\infty} F_X(x) = 0$.
4. **Limit at Positive Infinity**: As $x \\to \\infty$, the probability of $X$ being less than or equal to a value that encompasses all possibilities must be unity: $\\lim_{x \\to \\infty} F_X(x) = 1$.

If $X$ is a continuous random variable, the CDF is a continuous function. If $X$ is discrete, the CDF is a step function with jumps at each value of $x$ for which the probability mass is non-zero. The magnitude of the jump at a point $x_i$ is equal to $P(X=x_i)$.

## Types & Variations

CDFs vary significantly based on the nature of the underlying random variable. The following interactive graph allows for the visualization of the CDF of a Normal distribution, where the mean $\\mu$ (center) and the standard deviation $\\sigma$ (spread) are controlled.

\`\`\`interactivegraph
0.5 * (1 + erf((x - mu) / (sigma * sqrt(2))))
params: mu=0, sigma=1
range: mu=-2:2, sigma=0.5:2
\`\`\`

In the interactive graph above, the parameter $\\mu$ shifts the sigmoid curve horizontally, while $\\sigma$ dictates the steepness of the transition. As $\\sigma$ decreases, the CDF becomes steeper, approaching a step function (a Dirac delta distribution) as the variance vanishes.

### Continuous Distributions
For continuous variables, $F_X(x)$ is defined by the integral of the PDF:
$$F_X(x) = \\int_{-\\infty}^{x} f_X(t) dt$$
Common examples include the Normal distribution, the Exponential distribution, and the Uniform distribution. These functions are smooth and differentiable.

### Discrete Distributions
For discrete variables, $F_X(x)$ is defined as the summation of the PMF:
$$F_X(x) = \\sum_{x_i \\le x} P(X = x_i)$$
The graph of a discrete CDF is characterized by flat plateaus with abrupt, vertical "jumps" occurring at each possible outcome of the random variable.

### Mixed Distributions
A mixed distribution contains both continuous and discrete components. The CDF of a mixed distribution is a weighted sum:
$$F_X(x) = w F_{discrete}(x) + (1 - w) F_{continuous}(x)$$
where $0 < w < 1$. These functions exhibit both jumps and smooth growth segments.

## How to Solve

Deriving the CDF of a random variable requires an understanding of integration (for continuous variables) or summation (for discrete variables). 

### Analytical Derivation Steps
1. **Identify the Support**: Determine the range of values for $X$ where the density or mass is non-zero.
2. **Set the Integral/Sum**: If $X$ is continuous with PDF $f_X(t)$, set up the integral $\\int_{-\\infty}^x f_X(t) dt$. If $X$ is discrete with PMF $p_i$, calculate the partial sum $\\sum_{x_i \\le x} p_i$.
3. **Partition by Cases**: Define the function piecewise. 
   - For $x < \\text{min(support)}$, $F_X(x) = 0$.
   - For $x > \\text{max(support)}$, $F_X(x) = 1$.
   - For $x$ within the support, evaluate the integral or sum.
4. **Verify Properties**: Ensure the resulting piecewise function satisfies the limits at $\\pm \\infty$ and is non-decreasing.

### Example: The Uniform Distribution
For a continuous random variable $X$ uniformly distributed on $[a, b]$, the PDF is $f_X(x) = \\frac{1}{b-a}$ for $a \\le x \\le b$, and $0$ otherwise.
To find the CDF:
- For $x < a$: $F_X(x) = 0$.
- For $a \\le x \\le b$: $F_X(x) = \\int_a^x \\frac{1}{b-a} dt = \\left[ \\frac{t}{b-a} \\right]_a^x = \\frac{x-a}{b-a}$.
- For $x > b$: $F_X(x) = 1$.

The result is a linear ramp connecting 0 to 1 over the interval $[a, b]$.

### Example: The Bernoulli Distribution
For a discrete variable $X$ where $P(X=0) = 1-p$ and $P(X=1) = p$:
- For $x < 0$: $F_X(x) = 0$.
- For $0 \\le x < 1$: $F_X(x) = P(X=0) = 1-p$.
- For $x \\ge 1$: $F_X(x) = P(X=0) + P(X=1) = 1-p+p = 1$.

This yields a step function that jumps from 0 to $1-p$ at $x=0$, and from $1-p$ to $1$ at $x=1$.

## Summary

The Cumulative Distribution Function is a cornerstone of probabilistic modeling, providing a rigorous, unified framework for expressing the uncertainty inherent in random variables. By mapping values to their cumulative probabilities, it facilitates a deeper understanding of distribution shapes, supports quantile-based analysis, and enables practical applications in simulation and statistical inference. 

From its foundational properties of monotonicity and right-continuity to its varied implementations in discrete and continuous spaces, the CDF acts as the ultimate descriptive tool for probability distributions. Mastering the derivation and interpretation of CDFs allows statisticians and data scientists to move beyond simple point probabilities, enabling the calculation of interval probabilities and the rigorous comparison of statistical models. Whether analyzing the risks associated with financial portfolios, verifying the performance of algorithms through simulation, or establishing the theoretical limits of statistical estimators, the CDF remains an indispensable analytical instrument.`;export{e as default};