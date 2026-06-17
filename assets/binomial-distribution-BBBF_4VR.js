var e=`# Discrete Distributions: Bernoulli and Binomial

Probability theory provides the mathematical framework for modeling uncertainty. Among the most foundational components of this field are discrete probability distributions, which characterize the likelihood of outcomes for random variables that take on countable values. The Bernoulli and Binomial distributions serve as the bedrock for understanding binary phenomena, ranging from quality control in manufacturing to clinical trial outcomes in medicine.

## Definition

The Bernoulli distribution is the simplest discrete probability distribution. It models a single experiment, often called a Bernoulli trial, which results in exactly one of two possible outcomes: "success" (usually denoted as $1$) or "failure" (usually denoted as $0$). A random variable $X$ follows a Bernoulli distribution with parameter $p$, denoted as $X \\sim \\text{Bernoulli}(p)$, if its probability mass function is given by:

$$P(X=x) = p^x(1-p)^{1-x}$$

where $x \\in \\{0, 1\\}$ and $0 \\leq p \\leq 1$. Here, $p$ represents the probability of success, and $q = 1-p$ represents the probability of failure.

The Binomial distribution generalizes the Bernoulli distribution. If we conduct $n$ independent Bernoulli trials, each with the same success probability $p$, and we let the random variable $Y$ represent the total number of successes observed across all $n$ trials, then $Y$ follows a Binomial distribution, denoted as $Y \\sim \\text{Binomial}(n, p)$. The probability mass function for the Binomial distribution is:

$$P(Y=k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

where $k \\in \\{0, 1, 2, \\dots, n\\}$. The term $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ is the binomial coefficient, which accounts for the number of distinct ways $k$ successes can be arranged within a sequence of $n$ trials.

## Key Terminology

To master these distributions, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| **Trial** | A single execution of a random experiment with a binary outcome. |
| **Success** | The outcome of interest, assigned the value $1$. |
| **Failure** | The alternative outcome, assigned the value $0$. |
| **Parameter $p$** | The probability of success in a single trial. |
| **Parameter $n$** | The fixed, finite number of independent trials. |
| **Independence** | The state where the outcome of one trial does not affect another. |
| **Support** | The set of possible values a random variable can assume. |

The support for the Bernoulli distribution is the discrete set $\\{0, 1\\}$, whereas the support for the Binomial distribution is the set of integers $\\{0, 1, \\dots, n\\}$. The assumption of independence is critical; if the trials were dependent, the Binomial distribution would not apply, and one would instead require models like the Hypergeometric distribution.

## Purpose

The primary purpose of these distributions is to quantify uncertainty in binary systems. In practice, researchers and analysts utilize these models to:

1. **Prediction:** Estimate the likelihood of a specific number of occurrences given a known probability. For example, a company might use the Binomial distribution to predict how many customers out of $100$ will click on an advertisement if the historical click-through rate is $2\\%$.
2. **Quality Control:** Determine if a manufacturing process is stable. By sampling a batch of items, one can calculate the probability of observing a certain number of defects to decide whether to reject the entire batch.
3. **Hypothesis Testing:** Serve as the mathematical foundation for tests such as the Exact Binomial Test. By comparing observed data to the Binomial distribution, statisticians determine if a deviation from an expected probability $p$ is statistically significant or merely due to random chance.

The simplicity of the Bernoulli distribution makes it the building block for more complex models, such as Logistic Regression, where the success probability $p$ is modeled as a function of independent variables.

## Fundamental Properties

Both distributions possess well-defined mathematical properties that describe their central tendency and dispersion.

### Bernoulli Properties
For a random variable $X \\sim \\text{Bernoulli}(p)$:
- **Expected Value:** $E[X] = \\sum x P(x) = (0 \\cdot (1-p)) + (1 \\cdot p) = p$.
- **Variance:** $Var(X) = E[X^2] - (E[X])^2$. Since $X^2 = X$ for $x \\in \\{0, 1\\}$, $E[X^2] = p$. Thus, $Var(X) = p - p^2 = p(1-p)$.

### Binomial Properties
For a random variable $Y \\sim \\text{Binomial}(n, p)$:
- **Expected Value:** Since $Y$ is the sum of $n$ independent Bernoulli trials $X_i$, $E[Y] = E[\\sum X_i] = \\sum E[X_i] = np$.
- **Variance:** Due to independence, the variance of the sum is the sum of the variances: $Var(Y) = \\sum Var(X_i) = np(1-p)$.
- **Mode:** The value of $k$ that maximizes $P(Y=k)$ is $\\lfloor (n+1)p \\rfloor$. If $(n+1)p$ is an integer, both $(n+1)p$ and $(n+1)p - 1$ are modes.

The following interactive graph allows for the observation of how the shape of the Binomial distribution's underlying curve (represented by a continuous approximation) changes with parameters. Note that while the distribution is discrete, we can explore the continuous density function equivalent, $f(x)$, to observe the shift in central mass.

\`\`\`interactivegraph
(1/(sqrt(2*pi*n*p*(1-p)))) * exp(-(x-n*p)^2 / (2*n*p*(1-p)))
params: n=20, p=0.5
range: n=1:50, p=0.05:0.95
\`\`\`

The interactive graph above plots the Gaussian approximation of the Binomial distribution, $f(x)$, demonstrating how changes in $n$ (total trials) and $p$ (probability of success) affect the location and spread of the distribution. As $n$ increases, the peak shifts, and as $p$ approaches $0.5$, the distribution becomes increasingly symmetric.

## Types & Variations

While the basic Bernoulli and Binomial distributions are robust, they exist within a family of related distributions:

1. **Geometric Distribution:** A variation that asks: "How many trials are required to achieve the *first* success?" The Bernoulli process continues until success occurs.
2. **Negative Binomial Distribution:** This distribution models the number of trials required to achieve a *pre-specified number of successes* $r$. It is effectively a sequence of Binomial events where the final trial is fixed as a success.
3. **Multinomial Distribution:** A generalization of the Binomial distribution. Instead of two possible outcomes (success/failure), it allows for $m > 2$ outcomes, such as rolling a six-sided die where each face has a specific probability.
4. **Poisson Distribution:** This acts as a limiting case for the Binomial distribution. When $n$ is very large and $p$ is very small such that $np = \\lambda$, the Binomial distribution converges to the Poisson distribution, which is used to model the number of events occurring in a fixed interval of time or space.

## How to Solve

To solve problems involving Binomial distributions, follow this systematic approach:

**Step 1: Identify Parameters.** Clearly define $n$ (number of trials) and $p$ (probability of success). Ensure that trials are independent and the probability $p$ remains constant.

**Step 2: Define the Random Variable.** Clearly state what $X$ represents (e.g., "Let $X$ be the number of heads in $10$ flips"). 

**Step 3: Select the Formula.** Use the probability mass function:
$$P(X=k) = \\frac{n!}{k!(n-k)!} p^k (1-p)^{n-k}$$

**Step 4: Calculate.** Substitute the values. For large $n$, manual computation of factorials is impractical. Use logarithmic transformations to prevent arithmetic overflow:
$$\\ln(P(X=k)) = \\ln\\binom{n}{k} + k \\ln(p) + (n-k) \\ln(1-p)$$

**Step 5: Cumulative Probabilities.** If the question asks for "at least $x$ successes" or "at most $x$ successes," utilize the cumulative distribution function (CDF):
$$P(X \\leq x) = \\sum_{i=0}^{x} \\binom{n}{i} p^i (1-p)^{n-i}$$

For example, consider a scenario where a basketball player has a free-throw success rate of $p=0.8$. If they take $n=5$ shots, what is the probability they make exactly $4$?
- $P(X=4) = \\binom{5}{4} (0.8)^4 (0.2)^1$
- $P(X=4) = 5 \\cdot (0.4096) \\cdot (0.2)$
- $P(X=4) = 0.4096$

## Summary

The Bernoulli and Binomial distributions are the fundamental building blocks of discrete probability. The Bernoulli distribution provides a simple binary model for single-event uncertainty, while the Binomial distribution extends this logic to sequences of independent trials. By understanding their mass functions, expected values, and variances, one gains the ability to model a wide array of real-world phenomena. From basic quality control to complex predictive modeling, these distributions remain essential tools for any quantitative analysis, serving as the bridge between raw frequency data and statistical inference. Mastery of these concepts ensures a rigorous approach to evaluating probability in finite, independent systems.`;export{e as default};