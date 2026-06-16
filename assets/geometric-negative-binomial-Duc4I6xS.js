var e=`# Discrete Distributions: Geometric and Negative Binomial

In the realm of probability theory, discrete distributions serve as the mathematical bedrock for modeling experiments where outcomes are counted rather than measured. While the Binomial distribution is frequently cited for its simplicity in modeling a fixed number of trials, the Geometric and Negative Binomial distributions extend this logic to scenarios where the number of trials is not predetermined, but rather depends on the occurrence of a specific event.

## Definition

The Geometric and Negative Binomial distributions are defined by a sequence of independent Bernoulli trials, each with a constant probability of success $p$ and a corresponding probability of failure $q=1-p$.

The **Geometric distribution** models the number of trials required to achieve the first success. Let $X$ be a random variable representing the trial number of the first success. The probability mass function (PMF) is defined as:
$$P(X=k)=(1-p)^{k-1}p$$
for $k=1, 2, 3, \\dots$. This represents $k-1$ failures followed by a single success.

The **Negative Binomial distribution** is a generalization of the Geometric distribution. It models the number of trials required to achieve a total of $r$ successes. Let $Y$ be the random variable representing the total number of trials until the $r$-th success. The PMF is defined as:
$$P(Y=k)=\\binom{k-1}{r-1}p^r(1-p)^{k-r}$$
for $k=r, r+1, r+2, \\dots$. This formulation accounts for the fact that the $r$-th success must occur on the final trial, and there must be exactly $r-1$ successes in the preceding $k-1$ trials.

## Key Terminology

To navigate these distributions, one must be familiar with specific nomenclature:

- **Bernoulli Trial:** An experiment with exactly two possible outcomes: success (1) and failure (0).
- **Success Probability ($p$):** The fixed probability that any given trial results in a success.
- **Trial Count ($k$):** The discrete integer representing the number of iterations performed.
- **Target Successes ($r$):** The fixed threshold of successes required to terminate the experiment in the Negative Binomial case.
- **Memorylessness:** A unique property of the Geometric distribution indicating that the probability of success in future trials is independent of how many failures have already occurred.
- **Support:** The set of possible values a random variable can take. For these distributions, the support is the set of positive integers.

## Purpose

These distributions are essential when researchers are interested in the "waiting time" or "cost" of achieving a specific goal in stochastic processes. 

The Geometric distribution is utilized in reliability engineering to model the time to first failure of a component, provided the component does not age (a concept linked to its memoryless property). In finance, it can model the time until a stock price hits a specific target or until an option is exercised.

The Negative Binomial distribution is primarily used in overdispersed data modeling. In ecology, for instance, it is often used to model the distribution of species across a geographic area where the variance exceeds the mean—a phenomenon known as "clumping." It provides a more flexible alternative to the Poisson distribution, which constrains the mean to equal the variance.

## Fundamental Properties

The statistical properties of these distributions highlight the relationship between the number of trials and the success probability.

For a Geometric random variable $X$:
1. Mean: $E[X]=\\frac{1}{p}$
2. Variance: $Var(X)=\\frac{1-p}{p^2}$

For a Negative Binomial random variable $Y$ (total trials):
1. Mean: $E[Y]=\\frac{r}{p}$
2. Variance: $Var(Y)=\\frac{r(1-p)}{p^2}$

| Property | Geometric | Negative Binomial |
| :--- | :--- | :--- |
| Parameters | $p$ | $r, p$ |
| Support | $k \\in \\{1, 2, \\dots\\}$ | $k \\in \\{r, r+1, \\dots\\}$ |
| Mean | $1/p$ | $r/p$ |
| Variance | $(1-p)/p^2$ | $r(1-p)/p^2$ |

The derivation of the variance for the Negative Binomial distribution demonstrates that it is exactly $r$ times the variance of a single Geometric distribution. This confirms the conceptual view of the Negative Binomial as a sum of $r$ independent and identically distributed Geometric random variables.

## Types & Variations

There are two common variations in how these distributions are defined based on the variable of interest:

1. **Trials-based definition:** $Y$ represents the total number of trials until $r$ successes are achieved. This is the definition provided in the sections above, with the support starting at $r$.
2. **Failures-based definition:** $Y'$ represents the number of failures before the $r$-th success is achieved. In this variation, $Y'=Y-r$, and the support starts at 0. The PMF becomes:
$$P(Y'=k)=\\binom{k+r-1}{k}p^r(1-p)^k$$

This failures-based definition is often preferred in software packages and statistical software like R or Python's \`scipy.stats\`, as it allows for a support that begins at zero, mirroring the structure of many other discrete distributions like the Poisson or Binomial.

## How to Solve

Solving problems involving Geometric and Negative Binomial distributions requires a systematic approach to identifying the parameters and the target outcome.

### Step 1: Identify the Experiment Structure
Determine if the trials are independent and if the probability $p$ is constant. If the experiment stops after the *first* success, use the Geometric distribution. If it stops after the *r-th* success, use the Negative Binomial.

### Step 2: Define the Parameters
Clearly state the values for $p$ and $r$. If the problem provides the mean of the distribution, remember that $E[X] = 1/p$. If you have the variance and the mean, you can solve for both parameters algebraically.

### Step 3: Apply the PMF
Plug the known variables into the PMF formula. For cumulative probability (e.g., $P(X \\le k)$), use the cumulative distribution function (CDF):
- Geometric: $P(X \\le k) = 1 - (1-p)^k$
- Negative Binomial: $P(Y \\le k) = \\sum_{i=r}^k \\binom{i-1}{r-1}p^r(1-p)^{i-r}$

### Illustrative Example
Suppose a basketball player hits a free throw with probability $p=0.7$. What is the probability that they achieve their 3rd successful free throw on their 5th attempt?

Given: $r=3$, $k=5$, $p=0.7$, $(1-p)=0.3$.
Using the Negative Binomial formula:
$$P(Y=5)=\\binom{5-1}{3-1}(0.7)^3(0.3)^{5-3}$$
$$P(Y=5)=\\binom{4}{2}(0.343)(0.09)$$
$$P(Y=5)=6 \\times 0.343 \\times 0.09 = 0.18522$$
Thus, there is approximately an 18.52% chance that the 3rd success occurs exactly on the 5th attempt.

## Summary

The Geometric and Negative Binomial distributions are indispensable tools for modeling sequences of discrete events. The Geometric distribution acts as a specialized case of the Negative Binomial, specifically where $r=1$. Their utility stems from their ability to model processes defined by "waiting time" rather than fixed counts.

Key takeaways include:
- The Geometric distribution models the first success in independent Bernoulli trials and exhibits the memoryless property.
- The Negative Binomial distribution models the $r$-th success, offering a robust method to handle overdispersion in count data.
- The distinction between "total trials" and "total failures" is a common source of error; always verify which definition the problem context requires before applying the PMF.
- Both distributions rely strictly on the assumption of independent, constant-probability trials, making them the natural extension of the foundational Bernoulli process in statistical inference.`;export{e as default};