var e=`# Discrete Distributions: Poisson and Hypergeometric

Discrete probability distributions form the bedrock of statistical analysis when dealing with countable outcomes. Among these, the Poisson distribution and the Hypergeometric distribution serve distinct but vital roles in modeling random phenomena. While the Poisson distribution excels at describing occurrences over continuous intervals, the Hypergeometric distribution is the standard for sampling without replacement from a finite population.

## Definition

The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space, provided these events occur with a known constant mean rate and independently of the time since the last event. It is characterized by the parameter $\\lambda$, where $\\lambda > 0$ represents the average number of occurrences. A random variable $X$ follows a Poisson distribution, denoted as $X \\sim \\text{Poisson}(\\lambda)$, if its probability mass function is:

$$P(X=k)=\\frac{\\lambda^k e^{-\\lambda}}{k!}$$

for $k = 0, 1, 2, \\dots$.

The Hypergeometric distribution models the probability of $k$ successes in $n$ draws from a finite population of size $N$ that contains exactly $K$ successes, performed without replacement. Unlike the Binomial distribution, where probabilities remain constant, the Hypergeometric distribution accounts for the changing probability of success as the population is depleted. A random variable $X$ following this distribution, denoted as $X \\sim \\text{Hypergeometric}(N, K, n)$, has the probability mass function:

$$P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$$

where $\\max(0, n-(N-K)) \\le k \\le \\min(n, K)$.

## Key Terminology

To navigate these distributions, one must be familiar with several core concepts:

*   **Discrete Random Variable:** A variable that can only take on a countable number of distinct values.
*   **Independent Events:** In the Poisson context, the occurrence of one event does not influence the probability of another.
*   **Without Replacement:** A sampling method where items are not returned to the population, causing the composition of the remaining population to change.
*   **Success:** An outcome defined by the criteria of the research (e.g., finding a defective part, observing a phone call).
*   **Parameter ($\\lambda$):** The rate parameter in Poisson; it represents both the mean and the variance of the distribution.
*   **Population size ($N$):** The total number of items available in the Hypergeometric framework.
*   **Sample size ($n$):** The number of trials or items selected from the population.
*   **Support:** The set of possible values a random variable can take with non-zero probability.

## Purpose

The Poisson distribution is primarily used in queueing theory, reliability engineering, and risk assessment. It models scenarios such as the number of cars arriving at a toll booth per hour, the number of emails received in an inbox, or the number of mutations on a DNA strand. Because it requires only a single parameter ($\\lambda$), it is highly efficient for modeling processes where counting the total number of non-occurrences (the "zeros") is difficult or impossible.

The Hypergeometric distribution is indispensable in quality control and finite population sampling. For example, if a manufacturer inspects a batch of 100 microchips to see how many are defective, they are essentially sampling without replacement. If the population $N$ is small relative to the sample $n$, using a Binomial approximation would be inaccurate because the probability of selecting a defective item shifts significantly as items are removed from the batch.

## Fundamental Properties

The Poisson distribution exhibits unique mathematical properties:
1.  **Mean and Variance:** $E[X] = \\lambda$ and $Var(X) = \\lambda$. The fact that the mean equals the variance is a defining characteristic of the Poisson distribution.
2.  **Additivity:** If $X \\sim \\text{Poisson}(\\lambda_1)$ and $Y \\sim \\text{Poisson}(\\lambda_2)$ are independent, then $X+Y \\sim \\text{Poisson}(\\lambda_1 + \\lambda_2)$.
3.  **Limiting Case:** The Poisson distribution is the limit of the Binomial distribution as $n \\to \\infty$ and $p \\to 0$ such that $np = \\lambda$.

The Hypergeometric distribution properties include:
1.  **Mean:** $E[X] = n \\frac{K}{N}$.
2.  **Variance:** $Var(X) = n \\frac{K}{N} \\frac{N-K}{N} \\frac{N-n}{N-1}$. The term $\\frac{N-n}{N-1}$ is known as the "finite population correction factor."
3.  **Symmetry:** If $K = N/2$, the distribution is symmetric about its mean.

| Feature | Poisson Distribution | Hypergeometric Distribution |
| :--- | :--- | :--- |
| Population | Infinite (effectively) | Finite |
| Sampling | Independent | Without replacement |
| Parameters | $\\lambda$ | $N, K, n$ |
| Mean | $\\lambda$ | $n(K/N)$ |
| Variance | $\\lambda$ | $n(K/N)((N-K)/N)((N-n)/(N-1))$ |

## Types & Variations

Variations of these distributions often arise in advanced statistical modeling:

*   **Poisson Regression:** Used when the dependent variable is a count. The log of the expected count is modeled as a linear combination of independent variables: $\\ln(\\lambda) = X\\beta$.
*   **Bivariate Poisson:** An extension where two Poisson variables are correlated through a common latent factor.
*   **Non-central Hypergeometric:** A generalization where items have different "weights" or probabilities of being selected, often used in gene enrichment analysis.
*   **Multivariate Hypergeometric:** Used when the population contains more than two categories (e.g., drawing red, blue, and green marbles from an urn).

## How to Solve

Solving problems involving these distributions requires a systematic approach to variable identification.

### Solving Poisson Problems
1.  **Identify the Interval:** Determine the time or spatial window ($t$).
2.  **Determine $\\lambda$:** Calculate the average rate per unit. If given a rate $\\mu$ over interval $T$, then $\\lambda = \\mu \\times t/T$.
3.  **Apply PMF:** Plug $\\lambda$ and the target count $k$ into the Poisson PMF. 
4.  **Cumulative Probability:** For "at least" or "at most" questions, sum the PMF values for the relevant range: $P(X \\le k) = \\sum_{i=0}^k \\frac{\\lambda^i e^{-\\lambda}}{i!}$.

### Solving Hypergeometric Problems
1.  **Define N, K, and n:** Identify total items, total successes available, and total items drawn.
2.  **Verify Assumptions:** Ensure sampling is without replacement.
3.  **Calculate Combinations:** Use the binomial coefficient $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.
4.  **Compute Probability:** Calculate the ratio of the product of ways to choose successes and failures to the total ways to choose the sample.

### Example Derivation: The Birthday Analogy
Suppose we draw 5 items from a bag of 20, where 4 are "gold" and 16 are "regular." What is the probability of getting exactly 2 gold items?
- $N = 20, K = 4, n = 5, k = 2$
- $P(X=2) = \\frac{\\binom{4}{2}\\binom{16}{3}}{\\binom{20}{5}}$
- $\\binom{4}{2} = 6$
- $\\binom{16}{3} = 560$
- $\\binom{20}{5} = 15504$
- $P(X=2) = \\frac{6 \\times 560}{15504} = \\frac{3360}{15504} \\approx 0.2167$

## Summary

The Poisson and Hypergeometric distributions provide the mathematical language to describe discrete events in scenarios ranging from queueing systems to finite sampling. The Poisson distribution simplifies complex, potentially infinite arrival processes into a single parameter $\\lambda$, assuming independence. In contrast, the Hypergeometric distribution respects the physical constraints of finite populations, capturing the dependency introduced by sampling without replacement. Mastery of these distributions allows for the accurate modeling of systems where trials are not identical and outcomes are naturally countable. While Poisson serves as a cornerstone of continuous-time modeling, the Hypergeometric distribution serves as the rigorous standard for finite set theory and quality control. Understanding the transition between these models and their underlying assumptions is critical for any practitioner of probability theory.`;export{e as default};