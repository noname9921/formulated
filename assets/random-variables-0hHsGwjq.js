var e=`# Discrete Random Variables and Probability Mass Functions

## Definition

A random variable is a formal mathematical construct that maps the outcomes of a random phenomenon—a sample space—to numerical values. When the set of possible outcomes is finite or countably infinite, we classify it as a discrete random variable. Formally, if $S$ is a sample space, a discrete random variable $X$ is a function $X: S \\to \\mathbb{R}$ such that the range of $X$, denoted by $X(S)$, is a discrete set of real numbers $\\{x_1, x_2, x_3, \\dots\\}$.

The behavior of a discrete random variable is characterized by its Probability Mass Function (PMF). The PMF, denoted as $p_X(x)$ or simply $f(x)$, assigns a probability to each possible value of $X$. Mathematically, the PMF is defined as:
$$p_X(x) = P(X = x)$$
For any value $x$, this function returns the probability that the random variable $X$ takes exactly that value. Because the values in the range of $X$ are discrete, the PMF effectively "concentrates" probability mass at specific points along the real number line, while assigning zero probability to all other values not included in the set $\\{x_1, x_2, \\dots\\}$.

## Key Terminology

To analyze discrete random variables, one must master the nomenclature that defines their constraints and behaviors:

- **Sample Space ($S$):** The set of all possible outcomes of a random experiment.
- **Support:** The set of all values $x$ for which $p_X(x) > 0$. For discrete variables, this is a finite or countably infinite subset of the real numbers.
- **Cumulative Distribution Function (CDF):** Defined as $F_X(x) = P(X \\le x) = \\sum_{t \\le x} p_X(t)$. The CDF represents the accumulated probability up to a point $x$.
- **Expectation ($E[X]$):** The long-run average value of the random variable, calculated as $\\mu = \\sum_{i} x_i p(x_i)$.
- **Variance ($Var(X)$):** A measure of the dispersion of the distribution around the mean, calculated as $\\sigma^2 = E[(X - \\mu)^2] = \\sum_{i} (x_i - \\mu)^2 p(x_i)$.
- **Bernoulli Trial:** A fundamental building block representing a single experiment with two possible outcomes: success or failure.
- **Indicator Function:** A special type of random variable that takes the value 1 if an event occurs and 0 otherwise.

## Purpose

The primary purpose of a PMF is to provide a complete probabilistic description of a system. By mapping non-numeric outcomes to numerical values, we enable the application of algebraic and analytical techniques to problems involving uncertainty. In fields ranging from engineering to economics, PMFs allow us to:

1. **Model Stochastic Processes:** We can predict the frequency of specific events, such as the number of defective units in a batch of manufactured goods or the number of packets arriving at a network router.
2. **Decision Theory:** By calculating the expected value ($E[X]$), stakeholders can make informed decisions by evaluating the weighted average of potential outcomes rather than relying on intuition.
3. **Risk Assessment:** The variance ($Var(X)$) provides a metric for volatility. High variance indicates a high level of uncertainty, which is critical in insurance underwriting and financial modeling.
4. **Data Compression and Information Theory:** PMFs are fundamental to entropy calculations, which determine the theoretical limit of data compression for a given information source.

## Fundamental Properties

Every PMF must adhere to two strict axioms of probability to ensure logical consistency:

1. **Non-negativity:** For every possible value $x$ in the sample space, the probability must be greater than or equal to zero:
$$p(x) \\ge 0, \\forall x$$
If a function returns a negative value, it cannot represent a probability, as negative probability lacks physical or logical meaning in this framework.

2. **Normalization:** The sum of probabilities over the entire support must equal exactly 1. This ensures that the random variable must take on one of the defined values:
$$\\sum_{x \\in S} p(x) = 1$$
If a sum exceeds 1, it implies multiple outcomes occurring simultaneously in a way that violates the exclusivity of the sample space. If it is less than 1, it implies that the sample space is incomplete.

These properties allow us to construct a "Probability Distribution," which is essentially the comprehensive list of all outcomes and their associated probabilities.

## Types & Variations

Discrete random variables are categorized based on the underlying process that generates the outcomes. Several standard distributions appear frequently in practice:

| Distribution | Support | Application |
| :--- | :--- | :--- |
| Bernoulli | $\\{0, 1\\}$ | Single trial with two outcomes. |
| Binomial | $\\{0, 1, \\dots, n\\}$ | Number of successes in $n$ independent trials. |
| Poisson | $\\{0, 1, 2, \\dots\\}$ | Number of events occurring in a fixed interval. |
| Geometric | $\\{1, 2, 3, \\dots\\}$ | Number of trials until the first success. |
| Hypergeometric | $\\{0, \\dots, K\\}$ | Successes in a finite population without replacement. |

The Binomial distribution, for example, is governed by the formula $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$. Here, the binomial coefficient $\\binom{n}{k}$ calculates the number of ways to arrange $k$ successes across $n$ trials. The Poisson distribution is often used to model arrivals (like phone calls or radioactive decay), defined by the parameter $\\lambda$ as $p(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$.

## How to Solve

Solving problems involving discrete random variables typically follows a systematic three-step approach:

**Step 1: Identify the Support and the Process**
First, determine the set of possible values for $X$. Ask if the process involves replacement, whether trials are independent, and if the number of trials is fixed. For example, if you are drawing cards, determine if the deck is reset after each draw.

**Step 2: Construct the PMF**
Assign probabilities to each value in the support. If the experiment is complex, use combinations and permutations. If the experiment follows a standard model, use the PMF formula for that specific distribution. For instance, if you are calculating the probability of getting 3 heads in 5 coin flips, define $n=5$, $p=0.5$, and $k=3$ using the Binomial PMF.

**Step 3: Apply Statistical Operators**
Calculate the required metrics. To find the mean, multiply each value $x$ by its corresponding probability $p(x)$ and sum the results. To find the variance, calculate the deviation of each outcome from the mean, square it, multiply by the probability, and sum these values.

**Example derivation for the Mean of a Bernoulli Variable:**
For a Bernoulli variable $X$ where $P(X=1) = p$ and $P(X=0) = 1-p$:
$E[X] = \\sum x_i p(x_i) = (1 \\cdot p) + (0 \\cdot (1-p)) = p$.
This confirms that the expected value of an indicator variable is simply the probability of the event it tracks.

While PMFs are inherently discrete, one can approximate trends using continuous functions for large sample sizes. For example, the graph below shows $f(x) = \\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}$, which is the continuous normal density often used to approximate discrete binomial distributions as $n \\to \\infty$.

\`\`\`graph
(1/sqrt(2*3.14159)) * exp(-(x^2)/2)
\`\`\`

## Summary

Discrete random variables and their associated Probability Mass Functions provide the bedrock for statistical analysis. By establishing a rigorous link between sample space outcomes and real numbers through $p(x) = P(X=x)$, we gain the ability to quantify uncertainty. The requirements for non-negativity and total normalization ensure that these models remain mathematically sound. Whether calculating the simple mean of a Bernoulli trial or analyzing the complex frequency of rare events via the Poisson distribution, the PMF remains the most essential tool for translating random physical phenomena into actionable data. Mastery of this subject requires not only the memorization of specific distributions but also an intuitive grasp of how to map real-world experiments into valid mathematical structures.`;export{e as default};