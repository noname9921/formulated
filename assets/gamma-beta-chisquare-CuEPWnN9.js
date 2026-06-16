var e=`# Continuous Distributions: Gamma, Beta, and Chi-Square

## Definition

Continuous probability distributions are mathematical models used to describe the likelihood of outcomes in a sample space that is continuous—meaning the random variable can take any value within a range. Unlike discrete distributions where probabilities are assigned to specific points, continuous distributions assign probabilities to intervals via a Probability Density Function (PDF), denoted $f(x)$.

The Gamma, Beta, and Chi-Square distributions represent a core family of distributions that are inherently linked through the properties of the Gamma function, defined as:
$$\\Gamma(z)=\\int_0^\\infty t^{z-1}e^{-t}dt$$
For positive integers $n$, $\\Gamma(n)=(n-1)!$. This function serves as the backbone for normalizing the density functions of these three distributions.

The Gamma distribution is defined for $x > 0$ with shape parameter $\\alpha > 0$ and rate parameter $\\beta > 0$. Its PDF is $f(x) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)}x^{\\alpha-1}e^{-\\beta x}$.

The Beta distribution is defined on the interval $x \\in [0, 1]$ with parameters $\\alpha, \\beta > 0$. Its PDF is $f(x) = \\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha, \\beta)}$, where $B(\\alpha, \\beta) = \\frac{\\Gamma(\\alpha)\\Gamma(\\beta)}{\\Gamma(\\alpha+\\beta)}$.

The Chi-Square distribution is a specific case of the Gamma distribution where the shape parameter $\\alpha = k/2$ and the rate parameter $\\beta = 1/2$. It is primarily used in inferential statistics to model the sum of the squares of independent standard normal random variables.

## Key Terminology

- **Probability Density Function (PDF):** A function $f(x)$ such that the probability that $X$ lies in $[a, b]$ is $\\int_a^b f(x) dx$.
- **Cumulative Distribution Function (CDF):** The function $F(x) = P(X \\leq x)$, which represents the accumulated probability up to a value $x$.
- **Shape Parameter ($\\alpha$):** A parameter that governs the form of the distribution, influencing skewness and modality.
- **Scale/Rate Parameter ($\\beta$):** A parameter that stretches or compresses the distribution along the x-axis. In the Gamma distribution, if $\\beta$ is the rate, the scale is $1/\\beta$.
- **Degrees of Freedom ($k$):** A parameter specific to the Chi-Square distribution that dictates the mean and variance, derived from the number of independent squared normal variables.
- **Conjugate Prior:** In Bayesian statistics, a prior distribution is a conjugate prior if the posterior distribution belongs to the same family. Both Beta and Gamma are frequent choices for conjugate priors.

## Purpose

These distributions serve distinct yet overlapping roles in statistics, engineering, and the physical sciences.

1. **Gamma Distribution:** Used extensively in reliability engineering to model the time until a series of events occurs. It is common in queuing theory and finance to model waiting times or interest rate variations.
2. **Beta Distribution:** Due to its bounded support on $[0, 1]$, it is the standard distribution for modeling proportions, percentages, and probabilities. It is central to Bayesian inference as the conjugate prior for the Bernoulli, Binomial, and Geometric distributions.
3. **Chi-Square Distribution:** It is fundamental to frequentist inference. It is used to test the goodness of fit of an observed distribution to a theoretical one, to test the independence of categorical variables, and to estimate confidence intervals for the population variance of a normally distributed variable.

## Fundamental Properties

The following table summarizes the mean and variance for these distributions:

| Distribution | Mean | Variance |
| :--- | :--- | :--- |
| Gamma | $\\alpha / \\beta$ | $\\alpha / \\beta^2$ |
| Beta | $\\alpha / (\\alpha + \\beta)$ | $\\alpha\\beta / [(\\alpha+\\beta)^2(\\alpha+\\beta+1)]$ |
| Chi-Square | $k$ | $2k$ |

The Gamma distribution is additive: the sum of $n$ independent Gamma-distributed variables with the same rate $\\beta$ is also Gamma-distributed with shape $\\sum \\alpha_i$.

The Chi-Square distribution is a special case of the Gamma distribution. Specifically, if $X \\sim \\Gamma(k/2, 1/2)$, then $X \\sim \\chi^2(k)$. This makes the Gamma distribution a generalization of the Chi-Square, allowing for more flexibility in modeling data that are not restricted to the degrees-of-freedom constraint of the Chi-Square.

The Beta distribution is highly flexible. Depending on the values of $\\alpha$ and $\\beta$, it can be symmetric (if $\\alpha = \\beta$), skewed (if $\\alpha \\neq \\beta$), U-shaped (if $\\alpha < 1, \\beta < 1$), or uniform (if $\\alpha = 1, \\beta = 1$).

\`\`\`interactivegraph
\\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha, \\beta)}
params: a=2, b=2
range: a=0.5:5, b=0.5:5
\`\`\`

The graph above shows the Beta distribution. Adjusting the parameters $\\alpha$ (labeled \`a\`) and $\\beta$ (labeled \`b\`) shifts the density. When $\\alpha = \\beta$, the distribution is symmetric about $0.5$. When $\\alpha > \\beta$, the mass shifts to the right; when $\\beta > \\alpha$, it shifts to the left.

## Types & Variations

### Gamma Variations
- **Erlang Distribution:** A special case of the Gamma distribution where the shape parameter $\\alpha$ is a positive integer. It is used in telecommunications to model the number of calls arriving at a switch.
- **Exponential Distribution:** The case where $\\alpha = 1$. It models the time between independent events occurring at a constant average rate.

### Beta Variations
- **Beta Prime Distribution:** Related to the ratio of two Gamma-distributed variables.
- **Arcsine Distribution:** A specific Beta distribution where $\\alpha = \\beta = 0.5$.

### Chi-Square Variations
- **Non-Central Chi-Square:** Occurs when the underlying normal variables have non-zero means. This is used to calculate the power of statistical hypothesis tests.

## How to Solve

### Calculating Probabilities
Because the integrals for these distributions often lack closed-form algebraic solutions for the CDF, analysts rely on the Regularized Incomplete Gamma function for Gamma and Chi-Square, and the Regularized Incomplete Beta function for the Beta distribution.

To solve for the probability $P(X \\leq x)$:
1. **Gamma:** Use $F(x; \\alpha, \\beta) = \\frac{\\gamma(\\alpha, \\beta x)}{\\Gamma(\\alpha)}$, where $\\gamma$ is the lower incomplete gamma function.
2. **Chi-Square:** Use $F(x; k) = \\frac{\\gamma(k/2, x/2)}{\\Gamma(k/2)}$.
3. **Beta:** Use $F(x; \\alpha, \\beta) = I_x(\\alpha, \\beta)$, the regularized incomplete beta function.

### Parameter Estimation
Method of Moments is frequently used to find estimates for $\\alpha$ and $\\beta$. 
For the Gamma distribution:
$$\\beta = \\bar{x} / s^2$$
$$\\alpha = \\bar{x}^2 / s^2$$
where $\\bar{x}$ is the sample mean and $s^2$ is the sample variance. Maximum Likelihood Estimation (MLE) is preferred for better asymptotic efficiency but requires numerical iteration as it involves the Digamma function.

## Summary

The Gamma, Beta, and Chi-Square distributions represent the backbone of continuous probability theory. The Gamma distribution provides a flexible framework for modeling positive, right-skewed data. The Beta distribution offers a robust tool for probability and proportion modeling. The Chi-Square distribution serves as the crucial bridge between normal variables and statistical significance testing.

Understanding these distributions requires moving beyond simple arithmetic into the realm of the Gamma function and its associated incomplete integrals. By leveraging their properties—such as the additivity of the Gamma distribution or the conjugate prior nature of the Beta distribution—practitioners can solve complex problems in Bayesian statistics, reliability engineering, and hypothesis testing. While analytical solutions are often unavailable, computational approximations and established software libraries allow for precise numerical evaluation in virtually any research or industrial context.`;export{e as default};