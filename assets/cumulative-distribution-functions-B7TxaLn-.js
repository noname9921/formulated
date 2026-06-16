var e=`# Cumulative Distribution Functions (CDF)

## Definition

In the field of probability theory and statistics, the Cumulative Distribution Function (CDF) of a real-valued random variable $X$, often denoted by $F_X(x)$ or simply $F(x)$, is a fundamental function that completely describes the probability distribution of a random variable. Specifically, the CDF evaluated at a value $x$ is defined as the probability that the random variable $X$ will take a value less than or equal to $x$.

Formally, for any real number $x \\in (-\\infty, \\infty)$:
$$F_X(x) = P(X \\le x)$$

The CDF encompasses the behavior of the random variable by mapping the outcome space to the interval $[0, 1]$. While the Probability Density Function (PDF) $f(x)$ provides the "density" of probability at a point, the CDF provides the "accumulated" probability up to that point. For continuous random variables, this accumulation is mathematically represented by the integral of the PDF:
$$F_X(x) = \\int_{-\\infty}^{x} f(t) dt$$

In the context of discrete random variables, the CDF is determined by the summation of the Probability Mass Function (PMF) values $p(x_i) = P(X=x_i)$:
$$F_X(x) = \\sum_{x_i \\le x} P(X=x_i)$$

This function is essential because it is defined for both continuous and discrete variables, as well as for mixed distributions, providing a unified framework for probabilistic analysis.

## Key Terminology

Understanding the CDF requires familiarity with several core statistical concepts that define its mathematical structure and utility:

* **Random Variable ($X$):** A mapping from the sample space of a random experiment to the set of real numbers.
* **Probability Density Function (PDF):** The derivative of the CDF for continuous variables ($f(x) = \\frac{d}{dx}F(x)$). It represents the likelihood of the variable taking a specific value.
* **Probability Mass Function (PMF):** The analogue of the PDF for discrete variables, representing the probability that a random variable is exactly equal to some value.
* **Support:** The set of values for which the PDF or PMF is non-zero. The CDF is constant outside this range (specifically, it is 0 below the support and 1 above it).
* **Right-Continuity:** A mathematical property where the limit of the function as it approaches $x$ from the right is equal to the function value at $x$. The CDF is always right-continuous.
* **Quantile Function:** The inverse of the CDF ($F^{-1}(p)$), often called the percent-point function. It returns the value $x$ such that $P(X \\le x) = p$.

## Purpose

The primary purpose of the CDF is to provide a complete description of the probability distribution of a random variable in a single, robust function. Unlike the PDF, which can be zero or undefined in certain contexts (like discrete points), the CDF is monotonically non-decreasing and bounded between 0 and 1, making it highly suitable for computational analysis and theoretical proofs.

Key applications of the CDF include:

1. **Calculating Interval Probabilities:** One of the most practical uses of the CDF is to determine the probability that a random variable falls within an interval $[a, b]$. This is computed simply as:
   $$P(a < X \\le b) = F(b) - F(a)$$
   This avoids the need for complex integration if the CDF is already known or tabulated.

2. **Simulation and Random Number Generation:** The Inverse Transform Sampling method uses the CDF to generate random numbers from a specific distribution. By taking a uniform random variable $U \\sim \\text{Uniform}(0, 1)$ and calculating $X = F^{-1}(U)$, one can generate samples following the desired distribution $F$.

3. **Comparison of Distributions:** The Kolmogorov-Smirnov test uses the maximum vertical distance between an empirical CDF (derived from data) and a theoretical CDF to determine if a sample comes from a particular population.

4. **Reliability Engineering:** In survival analysis, the CDF represents the probability that a component or system fails before time $t$, often referred to as the "failure function."

## Fundamental Properties

Any function $F(x)$ must satisfy three specific criteria to qualify as a valid Cumulative Distribution Function:

1. **Monotonicity:** The function must be non-decreasing. If $x_1 < x_2$, then $F(x_1) \\le F(x_2)$. This follows from the fact that adding more possible outcomes to an interval can only increase (or leave unchanged) the total accumulated probability.

2. **Normalization (Limits):** The limits at the extremities of the real number line must be 0 and 1:
   $$\\lim_{x \\to -\\infty} F(x) = 0$$
   $$\\lim_{x \\to +\\infty} F(x) = 1$$
   This ensures that the total probability space covers 100% of outcomes.

3. **Right-Continuity:** For any $x$, $F(x) = \\lim_{t \\to x^+} F(t)$. This ensures consistency when calculating probabilities for closed or semi-closed intervals.

If a function satisfies these three conditions, it is a valid CDF of some random variable. The behavior of the function at jump discontinuities identifies the discrete parts of a distribution, while the derivative identifies the continuous parts.

## Types & Variations

CDF behavior varies based on the nature of the underlying random variable.

### Continuous Distributions
For continuous variables, the CDF is a continuous function. The most common example is the Normal (Gaussian) distribution. The CDF of the standard normal distribution, denoted by $\\Phi(x)$, does not have a closed-form algebraic expression and is expressed via the error function:
$$\\Phi(x) = \\frac{1}{2} \\left[ 1 + \\text{erf}\\left( \\frac{x}{\\sqrt{2}} \\right) \\right]$$

The interactive graph below demonstrates the effect of parameters $\\mu$ (mean) and $\\sigma$ (standard deviation) on the normal CDF. Note how the "steepness" of the sigmoid shape changes as the distribution spreads out.

\`\`\`interactivegraph
0.5 * (1 + erf((x - m) / (s * sqrt(2))))
params: m=0, s=1
range: m=-2:2, s=0.5:2
\`\`\`

### Discrete Distributions
For discrete variables, the CDF is a step function. It remains constant between consecutive values of the random variable and "jumps" at each possible value. The size of the jump at $x_i$ is exactly $P(X = x_i)$.

### Mixed Distributions
A mixed distribution combines continuous and discrete components. The CDF of such a distribution will have both smooth sections and jump discontinuities. An example is a random variable that is zero with probability 0.5 and follows an exponential distribution with probability 0.5.

## How to Solve

Determining a CDF from a given PDF or PMF is a standard analytical task. Consider the following workflow for different distribution types.

### 1. The Continuous Case
Given a PDF $f(x)$ defined over an interval $[a, b]$, the CDF is found via integration.

**Example:** Find the CDF of $f(x) = 2x$ for $0 \\le x \\le 1$.
1. Identify the range: $F(x) = 0$ for $x < 0$ and $F(x) = 1$ for $x > 1$.
2. Integrate within the range:
   $$F(x) = \\int_{0}^{x} 2t \\, dt = [t^2]_0^x = x^2$$
3. Result: $F(x) = 0$ if $x < 0$, $x^2$ if $0 \\le x \\le 1$, and $1$ if $x > 1$.

### 2. The Discrete Case
Given a PMF, find the CDF by taking the running sum of probabilities.

| Value ($x$) | $P(X=x)$ | $F(x)$ |
| :--- | :--- | :--- |
| 1 | 0.2 | 0.2 |
| 2 | 0.3 | 0.5 |
| 3 | 0.5 | 1.0 |

The table above illustrates a discrete CDF where the probabilities are accumulated row by row.

### 3. Calculating Probabilities from the CDF
Once the CDF is defined, calculating the probability of a range is a matter of subtraction. To find $P(0.2 \\le X \\le 0.5)$ for the continuous example above ($F(x) = x^2$):
$$P(0.2 \\le X \\le 0.5) = F(0.5) - F(0.2) = 0.5^2 - 0.2^2 = 0.25 - 0.04 = 0.21$$

## Summary

The Cumulative Distribution Function (CDF) serves as the backbone of probability theory, providing a rigorous and unified way to define the probability distribution of any random variable. By satisfying the conditions of monotonicity, proper boundary limits, and right-continuity, the CDF enables the calculation of probabilities across ranges, the generation of random samples, and the comparison of data against theoretical models. 

Whether dealing with the smooth sigmoid curves of continuous distributions or the jagged steps of discrete variables, the CDF effectively compresses all available probabilistic information into a single, accessible function. It is a critical tool for practitioners in statistics, machine learning, and reliability engineering, bridging the gap between theoretical density and practical numerical application. By mastering the CDF, one gains the ability to quantify uncertainty, compute interval likelihoods, and implement complex probabilistic algorithms with precision and mathematical clarity.`;export{e as default};