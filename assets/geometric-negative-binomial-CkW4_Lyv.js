var e=`# Discrete Distributions: Geometric and Negative Binomial

## Definition

The Geometric and Negative Binomial distributions are fundamental members of the family of discrete probability distributions. Both are rooted in the concept of Bernoulli trials—a sequence of independent experiments, each having exactly two possible outcomes: "success" (with probability $p$) and "failure" (with probability $q = 1-p$). 

The Geometric distribution models the number of trials required to achieve the first success. If we denote $X$ as the random variable representing the number of trials until the first success, then $X$ follows a geometric distribution. Conversely, the Negative Binomial distribution is a generalization of the geometric distribution. It models the number of trials required to achieve a specified number of successes, $r$. While the geometric distribution tracks the waiting time for the first success, the negative binomial distribution tracks the waiting time for the $r$-th success.

Mathematically, these distributions assume the trials are independent and the probability of success remains constant across all trials. They are essential for modeling waiting times in stochastic processes, quality control, and population genetics.

## Key Terminology

To understand these distributions, one must be familiar with several core concepts:

- **Bernoulli Trial:** A random experiment with exactly two outcomes: success ($S$) and failure ($F$).
- **Success Probability ($p$):** The fixed probability of a success occurring in any single trial.
- **Failure Probability ($q$):** Defined as $1-p$, representing the probability of failure.
- **Support:** The set of possible values the random variable can take. For these distributions, the support is typically the set of positive integers.
- **Waiting Time:** The number of trials or failures experienced before a predefined number of successes is reached.
- **Independence:** The assumption that the outcome of any trial does not influence the outcome of subsequent trials.
- **Memoryless Property:** A unique characteristic of the geometric distribution where the probability of future success is independent of the number of trials already performed.

## Purpose

The primary purpose of these distributions is to quantify uncertainty in sequences of events. 

The Geometric distribution is utilized when an observer is interested in the "first-time" event. For example, in engineering, it is used to model the number of cycles an electronic component functions before its first failure. In human resource management, it can model the number of interviews required to find the first qualified candidate.

The Negative Binomial distribution serves a broader purpose by allowing for "event accumulation." It is used when a process is only completed or considered successful after a series of specific events occur. For example, in manufacturing, it is used to determine how many units must be tested to ensure that $r$ units meet a specific quality standard. It is also extensively used in ecology to model over-dispersed count data, where the variance of the data is greater than the mean, a condition that a simple Poisson distribution cannot address.

## Fundamental Properties

The statistical properties of these distributions are derived from the binomial coefficient and the power series expansions of probabilities.

### The Geometric Distribution
The probability mass function (PMF) for a geometric random variable $X$, representing the number of trials until the first success, is given by:
$$P(X=k) = (1-p)^{k-1}p$$
where $k \\in \\{1, 2, 3, \\dots\\}$.

- **Mean ($E[X]$):** The expected number of trials until the first success is $1/p$.
- **Variance ($Var(X)$):** The variance is $(1-p)/p^2$.
- **Memoryless Property:** This is the defining feature of the geometric distribution, expressed as $P(X > s+t | X > s) = P(X > t)$. It implies that the probability of success in the next trial is independent of how many trials have already been conducted.

### The Negative Binomial Distribution
The PMF for a negative binomial random variable $Y$, representing the number of trials until the $r$-th success, is:
$$P(Y=k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$$
where $k \\in \\{r, r+1, r+2, \\dots\\}$.

- **Mean ($E[Y]$):** The expected number of trials is $r/p$.
- **Variance ($Var(Y)$):** The variance is $r(1-p)/p^2$.

It is crucial to note that the Negative Binomial distribution is essentially the sum of $r$ independent and identically distributed (i.i.d.) geometric random variables. This additive property makes it a powerful tool for complex probability modeling.

## Types & Variations

There are subtle variations in how these distributions are defined in literature:

1. **Trials vs. Failures:**
   - The definition used above counts the total number of trials ($k$).
   - An alternative definition counts only the number of *failures* before the $r$-th success. In this case, the support starts from 0 instead of $r$. The PMF for failures $F$ becomes $P(F=f) = \\binom{f+r-1}{f} p^r (1-p)^f$.

2. **The Over-dispersed Poisson:**
   - In applied statistics, the Negative Binomial distribution is often treated as a Gamma-Poisson mixture. This allows the parameter $p$ to be replaced by a latent variable following a Gamma distribution, effectively accounting for "extra-Poisson variation." This is widely used in regression models (Negative Binomial Regression) to handle count data where the mean is not equal to the variance.

3. **Truncated Versions:**
   - In scenarios where an experiment must stop after a maximum number of trials (e.g., a "best of 7" series), the distributions are truncated, leading to modified PMFs and cumulative distribution functions.

## How to Solve

Solving problems involving these distributions requires a structured analytical approach.

### Step 1: Identify the Parameter $p$ and the Requirement $r$
Determine if the problem asks for the *first* success or the *$r$-th* success. If $r=1$, use the Geometric distribution. If $r > 1$, use the Negative Binomial.

### Step 2: Define the Variable $k$
Clearly identify what $k$ represents. Does it represent total trials (including successes) or just the number of failures? The formula chosen must match the interpretation of $k$.

### Step 3: Apply the Combinatorial Logic
If calculating the Negative Binomial, remember that the last trial (the $k$-th trial) must be a success. This leaves $r-1$ successes to be distributed among the previous $k-1$ trials. This is the derivation behind the $\\binom{k-1}{r-1}$ term.

### Step 4: Evaluate the Series (Optional)
If calculating the Cumulative Distribution Function (CDF), one must sum the PMFs:
$$P(Y \\le k) = \\sum_{i=r}^{k} \\binom{i-1}{r-1} p^r (1-p)^{i-r}$$
For large $k$, this can be simplified using the Regularized Incomplete Beta Function, which is the standard method used in statistical software packages.

| Feature | Geometric Distribution | Negative Binomial |
| :--- | :--- | :--- |
| Goal | 1st Success | $r$-th Success |
| Support ($k$) | $1, 2, 3, \\dots$ | $r, r+1, \\dots$ |
| Mean | $1/p$ | $r/p$ |
| Variance | $(1-p)/p^2$ | $r(1-p)/p^2$ |
| Relationship | Base Case ($r=1$) | Sum of $r$ Geometric |

## Summary

The Geometric and Negative Binomial distributions provide the mathematical machinery to analyze wait times in Bernoulli processes. The Geometric distribution is a specialized, memoryless model focused on the arrival of the first success, characterized by its simple mean of $1/p$. The Negative Binomial distribution extends this logic, providing a flexible framework for modeling the time until multiple successes occur. 

Beyond simple probability exercises, these distributions are cornerstone models for advanced statistical inference, particularly in regression analysis where over-dispersion poses a challenge to standard Poisson models. Understanding the distinction between trial-counting and failure-counting variations, as well as the underlying combinatorial logic, enables practitioners to effectively model uncertainty across a wide range of real-world scientific and industrial domains. By recognizing the additive property of geometric random variables into negative binomial ones, researchers can decompose complex waiting-time problems into manageable, sequential steps.`;export{e as default};