var e=`# Discrete Distributions: Poisson and Hypergeometric

In the study of probability theory, discrete distributions provide the mathematical framework for modeling random variables that take on countable values. Unlike continuous distributions, which describe phenomena over an interval, discrete distributions are defined by probability mass functions (PMF) that map specific integers to their likelihood of occurrence. This document explores two pillars of discrete probability: the Poisson distribution, which models event rates over time or space, and the Hypergeometric distribution, which models sampling without replacement.

## Definition

The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space. These events must occur with a known constant mean rate and independently of the time since the last event. For a random variable $X$ following a Poisson distribution with parameter $\\lambda > 0$, the PMF is defined as:

$$P(X=k)=\\frac{\\lambda^k e^{-\\lambda}}{k!}$$

where $k \\in \\{0, 1, 2, \\dots\\}$.

The Hypergeometric distribution, by contrast, describes the probability of $k$ successes in $n$ draws from a finite population of size $N$ that contains exactly $K$ successes, performed without replacement. The PMF is defined as:

$$P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$$

where $\\max(0, n-(N-K)) \\leq k \\leq \\min(n, K)$.

## Key Terminology

To understand these distributions, one must grasp several foundational concepts:

* **Event Rate ($\\lambda$):** In Poisson logic, this represents the average number of occurrences per unit interval. It is the sole parameter controlling the distribution's shape.
* **Population Size ($N$):** In the Hypergeometric context, the total number of items available for selection.
* **Successes in Population ($K$):** The total number of items in $N$ that satisfy the condition of a "success."
* **Sample Size ($n$):** The number of items drawn from the population.
* **Sampling Without Replacement:** A process where each item removed from the population changes the composition of the remaining items, leading to dependent trials.
* **Independence:** A condition where the outcome of one trial does not affect the probability of the next; this holds for the Poisson process but fails for the Hypergeometric distribution.

## Purpose

The Poisson distribution serves to model "arrival" processes. It is ubiquitous in queuing theory, telecommunications (modeling packet arrival), and reliability engineering (modeling failure rates over time). It is essentially the limiting case of a Binomial distribution where $n \\to \\infty$ and $p \\to 0$ such that $np = \\lambda$.

The Hypergeometric distribution is the standard for finite population sampling. It is vital in quality control (testing batches of products), ecology (capture-recapture methods for estimating animal population sizes), and card games or lottery systems where the removal of an item permanently alters the remaining state space.

## Fundamental Properties

Both distributions possess unique mathematical characteristics that define their utility:

### Poisson Properties
1. **Mean and Variance:** Both the expected value $E[X]$ and the variance $Var(X)$ equal $\\lambda$. This equality is a distinct signature of the Poisson distribution.
2. **Additivity:** The sum of independent Poisson random variables is itself a Poisson random variable with a parameter equal to the sum of the individual parameters.
3. **Memorylessness:** While the Poisson process is often confused with memorylessness (which applies to the Exponential distribution of inter-arrival times), the count of events in disjoint intervals is independent.

### Hypergeometric Properties
1. **Finite Population Correction:** As $N \\to \\infty$ while the ratio $K/N = p$ remains constant, the Hypergeometric distribution converges to the Binomial distribution.
2. **Mean:** The expected value is $E[X] = n \\frac{K}{N}$.
3. **Variance:** The variance is $Var(X) = n \\frac{K}{N} \\frac{N-K}{N} \\frac{N-n}{N-1}$. The term $\\frac{N-n}{N-1}$ is known as the finite population correction factor.

## Types & Variations

### Poisson Variations
* **Compound Poisson Process:** Used when the size of each "event" is itself a random variable.
* **Non-homogeneous Poisson Process:** Occurs when the intensity $\\lambda$ is a function of time, $\\lambda(t)$, rather than a constant.

### Hypergeometric Variations
* **Multivariate Hypergeometric Distribution:** Extends the model to situations where the population contains more than two types of items (e.g., drawing red, blue, and green marbles from an urn).

The following table summarizes the primary structural differences between these two distributions:

| Feature | Poisson Distribution | Hypergeometric Distribution |
| :--- | :--- | :--- |
| **Trials** | Infinite sequence potential | Finite population constraint |
| **Replacement** | N/A (Continuous time/space) | Without replacement |
| **Dependency** | Independent occurrences | Dependent (sampling affects odds) |
| **Parameters** | $\\lambda$ | $N, K, n$ |
| **Variance/Mean** | $Var(X) = E[X]$ | $Var(X) < E[X]$ |

## How to Solve

Solving problems involving these distributions requires a systematic approach to identifying the underlying stochastic process.

### Solving Poisson Problems
1. **Identify the interval:** Determine the space or time duration.
2. **Calculate $\\lambda$:** Ensure the average rate corresponds to the interval provided. If the interval changes, scale $\\lambda$ proportionally (e.g., if $\\lambda=5$ per hour, then for two hours, use $\\lambda=10$).
3. **Apply the PMF:** Plug the specific count $k$ and $\\lambda$ into $P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$.
4. **Cumulative probabilities:** To find $P(X \\leq k)$, sum the PMF from $0$ to $k$. For large $k$, consider using the normal approximation if $\\lambda > 20$.

### Solving Hypergeometric Problems
1. **Deconstruct the population:** Identify $N$ (total), $K$ (successes), and $N-K$ (failures).
2. **Define the draw:** Identify $n$ (sample size) and $k$ (number of successes desired).
3. **Apply the PMF:** Use the combination formula $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$. The numerator $\\binom{K}{k}\\binom{N-K}{n-k}$ counts ways to pick successes and failures separately, while the denominator $\\binom{N}{n}$ counts total possible samples.
4. **Range constraints:** Always verify that $k \\leq K$ and $n-k \\leq N-K$. If the values violate these, the probability is zero.

## Summary

The Poisson and Hypergeometric distributions represent the dichotomy between infinite-process modeling and finite-sampling reality. The Poisson distribution is the mathematical elegance of randomness constrained by a constant rate, providing a foundation for modeling phenomena from radioactive decay to web-traffic surges. Conversely, the Hypergeometric distribution is the rigorous accountant of probability, strictly tracking the depletion of a population to ensure that every selection is governed by the shifting availability of items.

Understanding when to apply each is crucial for statistical integrity. One chooses the Poisson distribution when the population is effectively infinite or the sampling process is continuous, and the Hypergeometric distribution when the sampling process is discrete, finite, and performed without replacement. Mastering these tools allows for the accurate prediction and analysis of complex systems in fields ranging from actuarial science to biological sampling. By recognizing the constraints of independence and population size, one can select the appropriate model to characterize discrete random phenomena effectively.`;export{e as default};