var e=`# Continuous Distributions: The Normal Distribution

The Normal distribution, also known as the Gaussian distribution, is the cornerstone of classical statistics and the theory of probability. It is a continuous probability distribution that describes data that clusters around a central mean, forming a symmetric, bell-shaped curve. Its ubiquity in natural and social sciences arises largely from the Central Limit Theorem, which dictates that the sum of a large number of independent, identically distributed random variables tends toward a normal distribution, regardless of the underlying distribution of the individual variables.

## Definition

A continuous random variable $X$ is said to follow a Normal distribution with parameters $\\mu$ (mean) and $\\sigma^2$ (variance) if its probability density function (PDF) is given by:

$$f(x|\\mu,\\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

In this definition, $x$ is any real number $(-\\infty < x < \\infty)$, $\\mu$ is the expected value or center of the distribution $(-\\infty < \\mu < \\infty)$, and $\\sigma$ is the standard deviation $(\\sigma > 0)$. The parameter $\\sigma^2$ represents the variance. The notation $X \\sim N(\\mu, \\sigma^2)$ is commonly used to signify that the random variable $X$ is normally distributed with mean $\\mu$ and variance $\\sigma^2$.

## Key Terminology

*   **Probability Density Function (PDF):** A function that describes the relative likelihood for a random variable to take on a given value. For the Normal distribution, the area under the curve between any two points $a$ and $b$ represents the probability $P(a \\le X \\le b)$.
*   **Mean ($\\mu$):** The arithmetic average and the peak of the distribution. Because the Normal distribution is symmetric, the mean is also the median and the mode.
*   **Variance ($\\sigma^2$):** A measure of how far the set of numbers is spread out from their average value. It is defined as the square of the standard deviation.
*   **Standard Deviation ($\\sigma$):** The square root of the variance. It quantifies the "width" of the bell curve. A larger $\\sigma$ results in a flatter, wider curve, while a smaller $\\sigma$ results in a taller, narrower curve.
*   **Standard Normal Distribution:** A special case where $\\mu=0$ and $\\sigma=1$. This is denoted as $Z \\sim N(0,1)$. Any normal variable can be transformed into a standard normal variable using the $z$-score formula: $z = \\frac{x-\\mu}{\\sigma}$.

## Purpose

The Normal distribution serves as the foundation for inferential statistics. Its primary purposes include:

1.  **Modeling Natural Phenomena:** Many real-world variables, such as human heights, blood pressure, measurement errors, and test scores, naturally follow a bell-shaped distribution.
2.  **Approximation:** Due to the Central Limit Theorem, the Normal distribution is used to approximate the distribution of sample means, even when the population distribution is not normal.
3.  **Hypothesis Testing:** Most parametric statistical tests, including $t$-tests and ANOVA, assume that the underlying population data follows a Normal distribution.
4.  **Error Analysis:** In physics and engineering, the distribution of random measurement errors is often assumed to be normal, allowing for the quantification of uncertainty.

## Fundamental Properties

The Normal distribution possesses several unique mathematical properties:

*   **Symmetry:** The PDF is symmetric about the line $x = \\mu$. This implies that the probability of observing a value $\\mu + a$ is identical to the probability of observing $\\mu - a$.
*   **Asymptotic Behavior:** The curve approaches the $x$-axis as $x \\to \\infty$ and $x \\to -\\infty$ but never actually touches it, meaning the tails of the distribution extend infinitely.
*   **The Empirical Rule (68-95-99.7 Rule):** For any normal distribution:
    *   Approximately $68.27\\%$ of the data lies within one standard deviation of the mean ($\\mu \\pm 1\\sigma$).
    *   Approximately $95.45\\%$ of the data lies within two standard deviations of the mean ($\\mu \\pm 2\\sigma$).
    *   Approximately $99.73\\%$ of the data lies within three standard deviations of the mean ($\\mu \\pm 3\\sigma$).
*   **Linear Transformation:** If $X \\sim N(\\mu, \\sigma^2)$, then a linear transformation $Y = aX + b$ results in a new normal distribution $Y \\sim N(a\\mu+b, a^2\\sigma^2)$.
*   **Stability:** The sum of two independent normally distributed random variables is also normally distributed. If $X_1 \\sim N(\\mu_1, \\sigma_1^2)$ and $X_2 \\sim N(\\mu_2, \\sigma_2^2)$, then $X_1 + X_2 \\sim N(\\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2)$.

To visualize the effect of the mean and standard deviation, consider the following interactive tool. The graph plots the normal density function where the mean $\\mu$ shifts the center of the bell and the standard deviation $\\sigma$ modifies the spread.

\`\`\`interactivegraph
\\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}
params: \\mu=0, \\sigma=1
range: \\mu=-3:3, \\sigma=0.5:2
\`\`\`

## Types & Variations

While the basic Gaussian distribution is symmetric, variations exist for specific data characteristics:

*   **Standard Normal Distribution ($Z$):** As defined previously, this centers the distribution at $0$ with unit variance. It is the reference distribution for all calculations involving normal probability tables.
*   **Multivariate Normal Distribution:** An extension to $n$ dimensions. Instead of a mean and variance, it is defined by a mean vector $\\boldsymbol{\\mu}$ and a covariance matrix $\\boldsymbol{\\Sigma}$. It models vectors of random variables where the components are correlated.
*   **Truncated Normal Distribution:** A normal distribution where the range of $x$ is restricted. For example, if $x$ must be greater than $0$, the PDF is renormalized over the interval $(0, \\infty)$.
*   **Log-Normal Distribution:** A distribution where the natural logarithm of the variable follows a normal distribution. This is used for variables that are bounded by zero and exhibit right-skewness, such as income distribution or stock prices.

## How to Solve

Solving problems involving the Normal distribution typically involves calculating probabilities for intervals. Since the PDF cannot be integrated analytically using elementary functions (the integral is the error function), we rely on the $z$-table or computational software.

### Step 1: Identification of Parameters
Identify the mean $\\mu$ and the standard deviation $\\sigma$ from the problem statement.

### Step 2: Standardization
Convert the raw value $x$ to a $z$-score using the formula:
$$z = \\frac{x - \\mu}{\\sigma}$$
The $z$-score represents the number of standard deviations the value $x$ is away from the mean.

### Step 3: Lookup or Integration
Use a standard normal distribution table or a statistical function to find the cumulative probability $P(Z < z)$.
*   To find $P(X < x)$, find the value $\\Phi(z)$ in the $z$-table.
*   To find $P(X > x)$, calculate $1 - \\Phi(z)$.
*   To find $P(x_1 < X < x_2)$, calculate $\\Phi(z_2) - \\Phi(z_1)$.

### Illustrative Example
Suppose IQ scores are normally distributed with a mean of $100$ and a standard deviation of $15$. What is the probability that a randomly selected individual has an IQ greater than $130$?

1.  **Parameters:** $\\mu = 100, \\sigma = 15$.
2.  **Standardize:** $z = \\frac{130 - 100}{15} = \\frac{30}{15} = 2$.
3.  **Probability:** We seek $P(Z > 2)$. From the $z$-table, $P(Z < 2) \\approx 0.9772$.
4.  **Result:** $P(Z > 2) = 1 - 0.9772 = 0.0228$.
Thus, there is approximately a $2.28\\%$ chance of a person having an IQ score above $130$.

The following table summarizes probability thresholds for the Standard Normal distribution:

| Z-score Range | Cumulative Probability $\\Phi(z)$ |
| :--- | :--- |
| $-1$ to $1$ | $0.6827$ |
| $-2$ to $2$ | $0.9545$ |
| $-3$ to $3$ | $0.9973$ |
| $-1.96$ to $1.96$ | $0.9500$ |

## Summary

The Normal distribution is an essential mathematical construct that acts as a bridge between theoretical probability and real-world data analysis. Its defining features—symmetry, asymptotic tails, and dependence on $\\mu$ and $\\sigma$—provide a robust framework for modeling phenomena across virtually every scientific discipline. By transforming data into $z$-scores, we can standardize disparate variables into a common format, allowing for direct comparison and hypothesis testing. While other distributions exist for non-symmetric or constrained data, the Normal distribution remains the most widely applied, both for its own characteristics and as an approximation for large-sample behaviors. Mastery of this distribution, particularly the relationship between the PDF and the cumulative distribution function, is a prerequisite for advanced statistical modeling and data science.`;export{e as default};