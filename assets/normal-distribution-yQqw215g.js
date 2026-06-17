var e=`# Continuous Distributions: The Normal Distribution

The Normal distribution, frequently referred to as the Gaussian distribution, is the cornerstone of classical statistics and probability theory. Its ubiquitous presence in natural phenomena, social sciences, and engineering is primarily a consequence of the Central Limit Theorem. This distribution provides a mathematical model for describing the distribution of continuous data that clusters around a central mean.

## Definition

The Normal distribution is a continuous probability distribution defined by two parameters: the mean $\\mu$, which represents the central location of the distribution, and the variance $\\sigma^2$, which determines the spread of the data. The probability density function (PDF) for a random variable $X \\sim N(\\mu, \\sigma^2)$ is given by:

$$f(x|\\mu, \\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

In this equation, $x$ can take any real value from $-\\infty$ to $\\infty$. The term $\\frac{1}{\\sqrt{2\\pi\\sigma^2}}$ acts as a normalization constant ensuring that the total area under the curve equals $1$. The exponential term defines the bell-shaped decay of the probability density as one moves away from the mean $\\mu$.

The interactive graph below demonstrates how changing $\\mu$ shifts the distribution horizontally, while changing $\\sigma$ affects the width and height of the bell curve.

\`\`\`interactivegraph
\\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}
params: \\mu=0, \\sigma=1
range: \\mu=-3:3, \\sigma=0.5:2
\`\`\`

In the interactive graph above, adjusting $\\mu$ moves the center of the distribution, while adjusting $\\sigma$ controls the standard deviation. A smaller $\\sigma$ results in a sharp, narrow peak, whereas a larger $\\sigma$ results in a wider, flatter curve.

## Key Terminology

To master the Normal distribution, one must be familiar with several fundamental statistical terms:

| Term | Definition |
| :--- | :--- |
| Mean ($\\mu$) | The arithmetic average; the peak of the distribution. |
| Variance ($\\sigma^2$) | The average squared deviation from the mean. |
| Standard Deviation ($\\sigma$) | The square root of the variance; measures dispersion in the original units. |
| PDF | Probability Density Function; gives the relative likelihood of a value. |
| CDF | Cumulative Distribution Function; gives the probability $P(X \\le x)$. |
| Standard Normal | A Normal distribution with $\\mu=0$ and $\\sigma=1$, denoted as $Z \\sim N(0,1)$. |
| Z-score | The number of standard deviations a value $x$ is from the mean: $z = \\frac{x-\\mu}{\\sigma}$. |

## Purpose

The primary purpose of the Normal distribution is to model continuous variables that are subject to additive, independent random errors or variations. It serves as an approximation for many discrete distributions when the number of trials is large, and it is the foundation for almost all parametric inferential statistics.

When a dataset follows a Normal distribution, researchers can apply powerful techniques such as hypothesis testing, confidence intervals, and linear regression. Its significance arises because the sum of a large number of independent and identically distributed (i.i.d.) random variables tends toward a Normal distribution, even if the underlying variables themselves are not normally distributed. This realization, formalized as the Central Limit Theorem, is the reason why measurement errors, biological traits, and financial fluctuations often mirror the Gaussian bell curve.

## Fundamental Properties

The Normal distribution possesses several rigorous mathematical properties that make it analytically tractable:

1. **Symmetry:** The PDF is perfectly symmetric about the mean $\\mu$. Consequently, the mean, median, and mode are all equal.
2. **Asymptotes:** The curve approaches the x-axis as $x \\to \\pm\\infty$ but never touches it. The x-axis is a horizontal asymptote.
3. **Total Area:** The integral of the PDF over the entire real line is equal to $1$, satisfying the requirement for a valid probability distribution.
4. **Inflection Points:** The PDF has inflection points at $x = \\mu - \\sigma$ and $x = \\mu + \\sigma$. At these points, the curve changes from concave down to concave up.
5. **The Empirical Rule:** For any Normal distribution, approximately $68.27\\%$ of the data lies within one standard deviation of the mean ($\\mu \\pm \\sigma$), $95.45\\%$ within two ($\\mu \\pm 2\\sigma$), and $99.73\\%$ within three ($\\mu \\pm 3\\sigma$).

## Types & Variations

While the basic Gaussian form is standard, variations occur based on dimensionality and transformation:

- **The Standard Normal Distribution:** A special case where $\\mu = 0$ and $\\sigma = 1$. All Normal distributions can be transformed into the standard normal distribution using the Z-score transformation. This allows for the use of unified lookup tables for probability calculations.
- **Bivariate Normal Distribution:** An extension to two variables where the joint distribution is defined by a mean vector and a covariance matrix. It describes the dependency between two correlated normally distributed variables.
- **Multivariate Normal Distribution:** A further generalization to $n$ dimensions. It is critical in fields like machine learning and econometrics, where relationships between large vectors of variables must be modeled.
- **Log-Normal Distribution:** If the logarithm of a variable is normally distributed, the variable itself follows a Log-Normal distribution. This is common for variables that cannot be negative, such as income or asset prices.

## How to Solve

Calculating probabilities for a continuous distribution involves integration, as the probability of the variable $X$ falling within a specific interval $[a, b]$ is defined by the area under the PDF:

$$P(a \\le X \\le b) = \\int_{a}^{b} \\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}dx$$

Because the Gaussian integral does not have an elementary antiderivative, analytical solutions are not possible. Instead, we use the standard normal distribution $Z$ to perform calculations.

### Step-by-Step Probability Calculation

1. **Identify parameters:** Determine the mean $\\mu$ and the standard deviation $\\sigma$ for your specific distribution.
2. **Formulate the query:** State the probability to be found, such as $P(X < k)$.
3. **Normalize (Z-score):** Convert the value $k$ into a Z-score:
   $$z = \\frac{k - \\mu}{\\sigma}$$
4. **Lookup or Compute:** Use the Standard Normal CDF, denoted as $\\Phi(z)$, to find the probability. Tables for $\\Phi(z)$ provide values for $P(Z \\le z)$.
5. **Adjust for Ranges:** If calculating $P(a < X < b)$, calculate $\\Phi(z_b) - \\Phi(z_a)$.

### Illustrative Example
Suppose the heights of a population are normally distributed with $\\mu = 170$ cm and $\\sigma = 10$ cm. To find the probability that a person is shorter than $185$ cm:
1. $\\mu = 170, \\sigma = 10, x = 185$.
2. $z = (185 - 170) / 10 = 1.5$.
3. Consult the Z-table for $\\Phi(1.5) \\approx 0.9332$.
4. The probability is $93.32\\%$.

## Summary

The Normal distribution remains the most important probability distribution in statistics due to its mathematical elegance and its role as the limit for aggregate random processes. By characterizing data through only two parameters—the mean and the standard deviation—it simplifies complex real-world phenomena into a manageable, predictive model. While it requires the use of cumulative distribution tables or computational integration, the Z-score transformation provides a robust method for universal application across varying scales of measurement. Understanding the Normal distribution is not merely an academic exercise; it is an essential toolkit for anyone interpreting data, assessing risk, or conducting scientific research. The symmetry, empirical rules, and asymptotic behavior of the Gaussian curve ensure that it will remain a central fixture in the quantitative sciences for the foreseeable future.`;export{e as default};