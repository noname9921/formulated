var e=`# Discrete Distributions: Bernoulli and Binomial

Probability theory provides the mathematical framework for understanding uncertainty. At the core of this discipline are discrete probability distributions, which model scenarios where outcomes are restricted to distinct, countable values. Among these, the Bernoulli and Binomial distributions serve as the foundational building blocks for more complex statistical models, including logistic regression and quality control analysis.

## Definition

The Bernoulli distribution is the simplest discrete distribution. It models a single trial—often called a "Bernoulli trial"—that has exactly two possible outcomes: "success" (typically denoted by $1$) and "failure" (typically denoted by $0$). If we define $p$ as the probability of success, where $0 \\leq p \\leq 1$, then the probability of failure is $q = 1 - p$. A random variable $X$ follows a Bernoulli distribution if its probability mass function (PMF) is defined as:

$$P(X=x) = p^x(1-p)^{1-x} \\quad \\text{for } x \\in \\{0, 1\\}$$

The Binomial distribution, by extension, models the number of successes in a fixed number of $n$ independent Bernoulli trials, each with the same probability of success $p$. If $Y$ is a random variable representing the total number of successes, $Y$ follows a Binomial distribution, denoted $Y \\sim B(n, p)$. The PMF for a Binomial random variable is given by:

$$P(Y=k) = \\binom{n}{k}p^k(1-p)^{n-k} \\quad \\text{for } k \\in \\{0, 1, \\dots, n\\}$$

In this expression, the term $\\binom{n}{k}$ is the binomial coefficient, calculated as $\\frac{n!}{k!(n-k)!}$, which accounts for the number of distinct ways to arrange $k$ successes across $n$ trials.

## Key Terminology

To analyze these distributions effectively, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| **Bernoulli Trial** | A random experiment with exactly two outcomes: Success or Failure. |
| **Success Probability ($p$)** | The constant probability of the desired outcome occurring in a single trial. |
| **Independence** | The requirement that the outcome of one trial does not affect the outcome of any other. |
| **Parameter ($n$)** | The total count of trials performed in a Binomial experiment. |
| **Support** | The set of values a random variable can take (e.g., $\\{0, 1\\}$ for Bernoulli). |
| **Binomial Coefficient** | The number of ways to choose $k$ successes from $n$ trials, denoted $\\binom{n}{k}$. |
| **PMF** | Probability Mass Function, which maps each discrete value to its likelihood. |

## Purpose

The Bernoulli distribution acts as the atomic unit of discrete probability. It is utilized whenever a binary state transition must be modeled, such as a coin flip, a switch being on or off, or a customer deciding whether to purchase a product.

The Binomial distribution is utilized when we are interested in the aggregate performance of multiple independent binary events. Its primary purpose is to predict the likelihood of observing a specific count of "successes" within a defined population sample. In real-world applications, this is essential for:
1. **Quality Assurance:** Determining the probability of finding $k$ defective items in a batch of $n$ manufactured parts.
2. **Clinical Trials:** Modeling the number of patients who respond to a specific treatment.
3. **Marketing Analytics:** Estimating the conversion rates for email campaigns based on a known historical click-through probability.
4. **Risk Management:** Calculating the likelihood of multiple system failures occurring within a window of operation.

## Fundamental Properties

Both distributions possess unique mathematical characteristics that define their behavior.

### Mean and Variance of Bernoulli
For $X \\sim \\text{Bernoulli}(p)$:
- Expected Value: $E[X] = \\sum x P(x) = (0 \\cdot (1-p)) + (1 \\cdot p) = p$
- Variance: $Var(X) = E[X^2] - (E[X])^2 = p - p^2 = p(1-p)$

### Mean and Variance of Binomial
Because a Binomial random variable $Y$ is the sum of $n$ independent Bernoulli variables, we apply the linearity of expectation and the property that the variance of the sum of independent variables is the sum of their variances:
- Expected Value: $E[Y] = np$
- Variance: $Var(Y) = np(1-p)$

The relationship between these properties is vital. As $n$ increases for a fixed $p$, the expected number of successes scales linearly, while the variance also grows, illustrating that larger samples provide more expected successes but increase the range of potential outcomes.

## Types & Variations

While the basic Bernoulli and Binomial models are rigid in their assumptions (constant $p$ and independent trials), several related distributions emerge by relaxing these constraints:

1. **Geometric Distribution:** Instead of a fixed $n$, we model the number of Bernoulli trials required to achieve the *first* success.
2. **Negative Binomial Distribution:** This models the number of trials needed to achieve a specified number of successes ($r$).
3. **Poisson Distribution:** This acts as a limiting case of the Binomial distribution. When $n$ is very large and $p$ is very small, such that $np = \\lambda$ (a constant), the Binomial distribution converges to the Poisson distribution. This is often used to model rare events over a fixed interval.
4. **Multinomial Distribution:** A generalization of the Binomial distribution where each trial can result in one of $k$ possible outcomes, rather than just two.

## How to Solve

Solving problems involving Binomial distributions requires a systematic approach to identifying the parameters and applying the PMF.

### Step 1: Identify Parameters
Identify $n$ (total trials) and $p$ (probability of success). Ensure the trials are independent and the probability of success is constant across all trials. If $p$ changes, the Binomial distribution is not applicable.

### Step 2: Formulate the Equation
Substitute the values into the binomial formula:
$$P(Y=k) = \\frac{n!}{k!(n-k)!} \\cdot p^k \\cdot (1-p)^{n-k}$$

### Step 3: Calculation Strategy
For small $n$, the calculation is straightforward arithmetic. For large $n$, one should use:
- **Pascal’s Triangle:** To find the binomial coefficient $\\binom{n}{k}$ manually.
- **Normal Approximation:** When $np > 5$ and $n(1-p) > 5$, the Binomial distribution can be approximated by a Normal distribution $N(\\mu = np, \\sigma^2 = np(1-p))$. This is a powerful computational shortcut.
- **Cumulative Probabilities:** If the question asks for "at least" or "at most" $k$ successes, one must sum the probabilities: $P(Y \\leq k) = \\sum_{i=0}^k \\binom{n}{i}p^i(1-p)^{n-i}$.

### Illustrative Example
Consider a process where the probability of a machine part being defective is $0.05$. If you sample $10$ parts, what is the probability that exactly $2$ are defective?
- $n = 10, p = 0.05, k = 2$.
- $P(Y=2) = \\binom{10}{2} (0.05)^2 (0.95)^8$
- $\\binom{10}{2} = 45$
- $P(Y=2) = 45 \\cdot 0.0025 \\cdot 0.6634 \\approx 0.0746$
- There is approximately a $7.46\\%$ chance of observing exactly 2 defective parts.

## Summary

Discrete distributions provide the mathematical language to describe binary and counting phenomena. The Bernoulli distribution serves as the fundamental unit, representing a single binary experiment defined by success probability $p$. The Binomial distribution aggregates these trials into a sequence of $n$ events, allowing for the calculation of probabilities regarding the total frequency of success. 

Understanding these distributions requires a firm grasp of the PMF, the calculation of binomial coefficients, and the moments (mean and variance) of the variables. While these distributions are powerful on their own, their capacity to serve as a foundation for more complex models—such as the Poisson, Negative Binomial, and Normal approximations—makes them indispensable tools for any statistician or data analyst. By verifying the assumptions of independence and constant probability, practitioners can reliably apply these models to a vast array of real-world decision-making scenarios.`;export{e as default};