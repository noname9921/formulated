var e=`# Expected Value, Variance, and Moments

The study of probability distributions relies heavily on descriptive statistics that summarize the behavior, spread, and shape of data. Among these, expected value, variance, and moments form the bedrock of statistical inference, decision theory, and stochastic modeling. These metrics allow mathematicians and data scientists to condense complex infinite-dimensional probability distributions into a set of manageable, scalar parameters.

## Definition

In probability theory, the **expected value** of a random variable $X$, denoted as $E[X]$ or $\\mu$, represents the long-term average value of repetitions of the same experiment. For a discrete random variable with probability mass function $P(x)$, it is defined as $E[X]=\\sum_{x}xP(x)$. For a continuous random variable with probability density function $f(x)$, it is defined as $E[X]=\\int_{-\\infty}^{\\infty}xf(x)dx$.

**Variance**, denoted as $Var(X)$ or $\\sigma^2$, measures the dispersion of a random variable around its mean. It quantifies how far, on average, the values of $X$ fall from $E[X]$. Mathematically, it is defined as $Var(X)=E[(X-E[X])^2]$.

**Moments** are quantitative measures of the shape of a probability distribution. The $n$-th moment of a random variable $X$ about a value $c$ is defined as $E[(X-c)^n]$. When $c=0$, we obtain raw moments; when $c=E[X]$, we obtain central moments. The first raw moment is the mean, and the second central moment is the variance. Higher-order moments provide insights into skewness (third moment) and kurtosis (fourth moment).

## Key Terminology

To navigate this field, one must master the following vocabulary:

| Term | Definition |
| :--- | :--- |
| Random Variable | A variable whose values depend on outcomes of a random phenomenon. |
| Probability Mass Function | A function that gives the probability that a discrete random variable is exactly equal to some value. |
| Probability Density Function | A function that describes the relative likelihood for a continuous random variable to take on a given value. |
| Dispersion | The extent to which a distribution is stretched or squeezed. |
| Skewness | A measure of the asymmetry of the probability distribution. |
| Kurtosis | A measure of the "tailedness" of the probability distribution. |
| Linearity of Expectation | The property that the expected value of a sum is the sum of the expected values, regardless of independence. |

## Purpose

The primary utility of these metrics is the reduction of complexity. A probability distribution can contain an infinite amount of information, but by calculating moments, we can approximate the distribution's behavior effectively. Expected value serves as the "center of gravity" of a distribution, providing a single point estimator for the most likely outcome in a weighted sense.

Variance is critical for risk assessment. In financial modeling, for example, the expected return is the mean, but the variance is the risk. A high variance implies that the actual outcome may deviate significantly from the mean, whereas low variance indicates stability.

Moments extend this utility. Skewness tells us if the distribution leans left or right, which is vital in detecting fraud or systemic bias. Kurtosis helps identify the risk of "fat-tail" events, where extreme outliers occur with higher frequency than a normal distribution would suggest.

## Fundamental Properties

The operators for expectation and variance obey specific laws that simplify algebraic manipulation:

1. **Expectation of a Constant:** $E[a]=a$ for any constant $a$.
2. **Linearity of Expectation:** $E[aX+bY]=aE[X]+bE[Y]$. This holds even if $X$ and $Y$ are dependent.
3. **Expectation of a Function:** By the Law of the Unconscious Statistician (LOTUS), $E[g(X)]=\\int g(x)f(x)dx$.
4. **Variance of a Constant:** $Var(a)=0$.
5. **Variance Scaling:** $Var(aX)=a^2Var(X)$.
6. **Computational Formula for Variance:** $Var(X)=E[X^2]-(E[X])^2$. This is derived by expanding the definition: $E[(X-\\mu)^2]=E[X^2-2X\\mu+\\mu^2]=E[X^2]-2\\mu E[X]+\\mu^2=E[X^2]-\\mu^2$.

These properties allow us to calculate statistics for complex distributions by breaking them into simpler component parts.

## Types & Variations

Moments are categorized based on their reference point and order. 

Raw moments ($m_n$) are defined as $m_n=E[X^n]$. These are the building blocks of the moment-generating function $M_X(t)=E[e^{tX}]$, which contains all moments of a distribution. If $M_X(t)$ is differentiable at $t=0$, then $E[X^n]=\\frac{d^n}{dt^n}M_X(t)|_{t=0}$.

Central moments ($\\mu_n$) are defined as $\\mu_n=E[(X-\\mu)^n]$. These are location-invariant, meaning they remain the same if you shift the distribution by a constant.

The standardized moments, such as skewness and kurtosis, are normalized versions of the central moments:
- **Skewness:** $\\gamma_1 = \\frac{\\mu_3}{\\sigma^3}$
- **Kurtosis (excess):** $\\gamma_2 = \\frac{\\mu_4}{\\sigma^4}-3$

Standardizing allows for comparison between distributions with different scales. Below, we examine the influence of parameters on a simple distribution.

\`\`\`interactivegraph
(x-a)^2 + b
params: a=0, b=1
range: a=-2:2, b=0:5
\`\`\`

The interactive graph above plots the function $f(x) = (x-a)^2 + b$. The parameter $a$ represents the mean (the location of the minimum), while $b$ represents the vertical shift related to the variance or base energy of the system. By adjusting $a$, you shift the center of the distribution; by adjusting $b$, you change the baseline value.

## How to Solve

Calculating moments for practical distributions follows a systematic workflow.

**Step 1: Identify the Distribution.** Determine if the random variable is discrete or continuous and specify its support (e.g., $x \\in [0, \\infty)$).

**Step 2: Set up the integral or sum.** For a continuous variable $X$ with density $f(x)$, the $n$-th raw moment is $\\int x^n f(x) dx$.

**Step 3: Solve for the Mean ($n=1$).** Ensure the integral converges. If it does not, the moment is undefined.

**Step 4: Use the computational formula for Variance.** Rather than integrating the squared difference, calculate the second raw moment $E[X^2]$ and subtract the square of the mean $(E[X])^2$.

**Step 5: Apply Symmetry.** If the distribution is symmetric about a point $\\mu$, then all odd central moments are zero. This significantly simplifies the calculation of skewness.

Consider the exponential distribution $f(x) = \\lambda e^{-\\lambda x}$ for $x \\ge 0$. To find the mean:
$E[X] = \\int_{0}^{\\infty} x \\lambda e^{-\\lambda x} dx$. Using integration by parts, let $u=x$ and $dv=\\lambda e^{-\\lambda x} dx$:
$E[X] = [-x e^{-\\lambda x}]_0^\\infty + \\int_{0}^{\\infty} e^{-\\lambda x} dx = 0 + [-\\frac{1}{\\lambda} e^{-\\lambda x}]_0^\\infty = \\frac{1}{\\lambda}$.

The graph below plots $f(x) = \\lambda e^{-\\lambda x}$ for $\\lambda=1$. This illustrates how the density decays rapidly, impacting the higher moments.

\`\`\`graph
\\exp(-x)
\`\`\`

## Summary

Expected value, variance, and moments provide the essential language for describing stochastic processes. The expected value identifies the center of a distribution, variance characterizes the dispersion, and higher-order moments describe the shape (skewness and kurtosis). 

By mastering the linearity of expectation and the computational formula for variance, one can decompose complex random variables into interpretable components. These tools are not merely abstract concepts; they are the foundation for statistical hypothesis testing, financial risk management, and machine learning model validation. Whether dealing with the simplicity of a uniform distribution or the complexity of a non-parametric model, the analysis of moments remains the most robust strategy for statistical summarization.`;export{e as default};