var e=`# Continuous Distributions: Gamma, Beta, and Chi-Square

## Definition

Continuous probability distributions are fundamental to statistical modeling, describing the likelihood of a variable taking on any value within a range. The Gamma, Beta, and Chi-Square distributions are part of a family of distributions defined by complex integrals and power functions.

The Gamma distribution, denoted as $X \\sim \\text{Gamma}(\\alpha, \\beta)$, is a two-parameter family of continuous probability distributions defined for $x > 0$. It is essentially the generalization of the exponential distribution. Its probability density function (PDF) is given by:
$$f(x;\\alpha,\\beta) = \\frac{\\beta^\\alpha x^{\\alpha-1} e^{-\\beta x}}{\\Gamma(\\alpha)}$$
where $\\alpha > 0$ is the shape parameter, $\\beta > 0$ is the rate parameter, and $\\Gamma(\\alpha)$ is the Gamma function defined by the integral $\\int_0^\\infty t^{\\alpha-1} e^{-t} dt$.

The Beta distribution, denoted as $X \\sim \\text{Beta}(\\alpha, \\beta)$, is defined on the interval $[0, 1]$. It is widely used to model the behavior of random variables limited to intervals of finite length. Its PDF is:
$$f(x;\\alpha,\\beta) = \\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha,\\beta)}$$
where $\\alpha, \\beta > 0$ are shape parameters and $B(\\alpha,\\beta)$ is the Beta function, which serves as the normalizing constant, linked to the Gamma function by $B(\\alpha,\\beta) = \\frac{\\Gamma(\\alpha)\\Gamma(\\beta)}{\\Gamma(\\alpha+\\beta)}$.

The Chi-Square distribution, denoted as $X \\sim \\chi^2(k)$, is a special case of the Gamma distribution. It is primarily used in hypothesis testing and confidence interval estimation. It represents the distribution of the sum of squares of $k$ independent standard normal random variables. Its PDF is:
$$f(x;k) = \\frac{1}{2^{k/2}\\Gamma(k/2)} x^{k/2-1} e^{-x/2}$$
for $x \\geq 0$, where $k$ is the degrees of freedom.

## Key Terminology

To navigate these distributions, one must be familiar with the following technical concepts:

| Term | Definition |
| :--- | :--- |
| **Shape Parameter** | A parameter that dictates the geometric structure (e.g., skewness, peak location) of the distribution density. |
| **Scale/Rate Parameter** | A parameter that stretches or compresses the distribution along the x-axis. |
| **Normalization** | The process of ensuring the total area under the PDF equals 1, often requiring specific functions like $\\Gamma(\\alpha)$. |
| **Degrees of Freedom** | In the context of $\\chi^2$, this represents the number of independent squared standard normal variables being summed. |
| **Conjugate Prior** | A property in Bayesian statistics where the posterior distribution belongs to the same family as the prior distribution; the Beta is conjugate to the Binomial, and the Gamma is conjugate to the Poisson. |
| **Support** | The interval of $x$ values for which the PDF is non-zero (e.g., $(0, \\infty)$ for Gamma, $(0, 1)$ for Beta). |

## Purpose

These distributions are essential tools in inferential statistics, Bayesian modeling, and reliability engineering.

The Gamma distribution is primarily utilized for modeling "waiting times." If one tracks the time until the occurrence of a sequence of independent events following a Poisson process, the waiting time for the $\\alpha$-th event follows a Gamma distribution. It is indispensable in insurance (modeling claim sizes) and hydrology (modeling rainfall volume).

The Beta distribution is the standard choice for modeling proportions or percentages. Because its support is bounded between 0 and 1, it is ideal for modeling physical processes that are inherently fractional, such as the probability of a binary outcome or the progress of a task completion over time. In Bayesian statistics, it serves as the most flexible prior for binomial proportions.

The Chi-Square distribution is the cornerstone of frequentist inference. It is used to construct the Chi-Square test for independence (testing if two categorical variables are related) and the Goodness-of-Fit test (testing if a sample data set follows a theoretical distribution). It is also vital for estimating population variance via confidence intervals.

## Fundamental Properties

Each distribution possesses unique mathematical characteristics that define its behavior.

For the Gamma distribution, the mean is $E[X] = \\alpha/\\beta$ and the variance is $Var(X) = \\alpha/\\beta^2$. As $\\alpha$ increases, the distribution becomes more symmetric and approaches a normal distribution according to the Central Limit Theorem.

For the Beta distribution, the mean is $E[X] = \\alpha/(\\alpha+\\beta)$ and the variance is $Var(X) = \\frac{\\alpha\\beta}{(\\alpha+\\beta)^2(\\alpha+\\beta+1)}$. The shape parameters $\\alpha$ and $\\beta$ allow the density to take on a variety of forms: it can be uniform ($\\alpha=1, \\beta=1$), unimodal, or U-shaped.

For the Chi-Square distribution, the mean is $k$ and the variance is $2k$. Since it is a specific Gamma distribution, it inherits the property that the sum of two independent Chi-Square random variables with $k_1$ and $k_2$ degrees of freedom is itself a Chi-Square variable with $k_1 + k_2$ degrees of freedom.

Below is an interactive graph demonstrating the shape sensitivity of the Gamma distribution:

\`\`\`interactivegraph
\\frac{\\beta^\\alpha x^{\\alpha-1} e^{-\\beta x}}{\\Gamma(\\alpha)}
params: alpha=2, beta=1
range: alpha=0.5:5, beta=0.5:5
\`\`\`

The interactive graph above plots the PDF of the Gamma distribution. The user can adjust $\\alpha$ (shape) and $\\beta$ (rate). Observe how increasing $\\alpha$ shifts the mode to the right, while increasing $\\beta$ forces the mass of the distribution toward zero, effectively shrinking the scale.

## Types & Variations

Variations of these distributions often arise in specific analytical contexts:

1. **Erlang Distribution:** A subset of the Gamma distribution where the shape parameter $\\alpha$ is a positive integer. It is used extensively in queuing theory.
2. **Inverse-Gamma Distribution:** If $X \\sim \\text{Gamma}(\\alpha, \\beta)$, then $Y = 1/X$ follows an Inverse-Gamma distribution. This is frequently used as a conjugate prior for the variance of a normal distribution.
3. **Beta-Prime Distribution:** A related distribution defined as $Y = X/(1-X)$ where $X \\sim \\text{Beta}(\\alpha, \\beta)$. It is often used in the context of odds ratios.
4. **Non-Central Chi-Square:** This occurs when the underlying normal variables have non-zero means. It is used in power analysis to determine the probability of rejecting a false null hypothesis.

These variations demonstrate that by applying simple algebraic transformations—such as taking the reciprocal or changing the parameters of the base function—one can expand the utility of these distributions to a broader set of statistical problems.

## How to Solve

Solving problems involving these distributions typically involves calculating probabilities (integrals of the PDF) or finding expected values (moments).

### Analytical Integration
To find the probability $P(X \\leq x)$, one must evaluate the Cumulative Distribution Function (CDF). For the Gamma distribution:
$$F(x) = \\int_0^x \\frac{\\beta^\\alpha t^{\\alpha-1} e^{-\\beta t}}{\\Gamma(\\alpha)} dt = \\frac{\\gamma(\\alpha, \\beta x)}{\\Gamma(\\alpha)}$$
where $\\gamma$ is the lower incomplete gamma function. Because this integral has no elementary closed-form solution, numerical methods or statistical tables are employed in practice.

### Moment Generating Functions (MGF)
MGFs are powerful tools for deriving moments. The MGF for a Gamma distribution is $M_X(t) = (1 - t/\\beta)^{-\\alpha}$ for $t < \\beta$. Differentiating this with respect to $t$ and evaluating at $t=0$ yields the raw moments.

### Numerical Simulation
When analytical solutions are intractable, simulation is the preferred route. For instance, to simulate from a Gamma distribution:
1. Generate values using the "Acceptance-Rejection" method.
2. For specific integer values of $\\alpha$, one can sum independent exponential random variables.

Consider a practical example using the Chi-Square distribution: Suppose we want to find the 95th percentile of a $\\chi^2$ distribution with 5 degrees of freedom. We set up the integral $\\int_0^x f(t;5) dt = 0.95$ and solve for $x$ using root-finding algorithms (e.g., Newton's method). This is the standard procedure for determining critical values in hypothesis testing.

## Summary

The Gamma, Beta, and Chi-Square distributions constitute a vital triad in probability theory. The Gamma distribution provides a flexible framework for modeling continuous, positive-valued data with right-skewness. The Beta distribution offers a versatile bounded framework for modeling probabilities and proportions. The Chi-Square distribution serves as the engine for frequentist hypothesis testing, linking the properties of normal variance to inferential decision-making. 

Mastery of these distributions requires understanding the interaction between shape and scale parameters, their relationship to the Gamma function, and their roles within Bayesian and Frequentist paradigms. Whether analyzing the wait-time for a manufacturing failure, the success rate of a clinical trial, or the goodness-of-fit for an experimental dataset, these continuous distributions provide the robust mathematical scaffolding necessary for rigorous statistical analysis. Their interoperability—such as the Chi-Square being a specific case of the Gamma—highlights the elegance and internal consistency of probability theory. Through these tools, researchers can translate raw empirical observations into precise probabilistic statements, enabling informed decision-making across scientific and engineering disciplines.`;export{e as default};