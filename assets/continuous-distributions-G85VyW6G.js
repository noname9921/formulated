var e=`# Continuous Random Variables and Probability Density Functions

## Definition

A continuous random variable is a random variable whose possible values are uncountably infinite and form an entire interval of real numbers. Unlike discrete random variables, which take on values that can be counted (such as integers or specific categories), continuous random variables are defined by their ability to take any value within a defined range $[a, b]$, $(-\\infty, \\infty)$, or any other subset of the real line $\\mathbb{R}$.

In formal probability theory, if $X$ is a continuous random variable, the probability that $X$ takes on any specific, exact value $x$ is defined as zero, written as $P(X=x)=0$. This is because the probability is distributed over an infinite number of possible outcomes. Instead, we describe the behavior of the variable using a Probability Density Function (PDF), denoted as $f(x)$. The PDF does not represent probability itself, but rather the relative likelihood that the variable falls within a particular range. The probability that $X$ lies within the interval $[a, b]$ is given by the definite integral of the PDF over that interval:

$$P(a \\leq X \\leq b)=\\int_{a}^{b} f(x) \\, dx$$

## Key Terminology

To understand continuous distributions, one must be familiar with the following core concepts:

- **Support:** The set of all possible values $x$ for which $f(x) > 0$. Outside the support, the PDF is assumed to be zero.
- **Cumulative Distribution Function (CDF):** The function $F(x)$, which represents the probability that the random variable $X$ will take a value less than or equal to $x$. Mathematically, $F(x)=P(X \\leq x)=\\int_{-\\infty}^{x} f(t) \\, dt$.
- **Normalization:** The requirement that the total area under the PDF curve must equal exactly 1. This ensures that the total probability of all possible outcomes is 100%.
- **Expected Value ($E[X]$):** The long-run average value of the random variable, defined as $E[X]=\\int_{-\\infty}^{\\infty} x \\cdot f(x) \\, dx$.
- **Variance ($Var(X)$):** A measure of the dispersion of the variable, calculated as $E[X^2]-(E[X])^2$, where $E[X^2]=\\int_{-\\infty}^{\\infty} x^2 \\cdot f(x) \\, dx$.

## Purpose

The primary purpose of using continuous random variables and PDFs is to model real-world phenomena where outcomes are measured on a continuous scale. Examples include time duration, physical dimensions (length, mass, temperature), and economic fluctuations. By utilizing a PDF, we can calculate the probability of a variable falling within any range, allowing for statistical inference, risk assessment, and predictive modeling. Without the framework of continuous variables, it would be mathematically impossible to model processes that do not jump in discrete increments but rather flow or vary across a continuum.

## Fundamental Properties

For a function $f(x)$ to be a valid probability density function, it must satisfy two essential conditions:

1. **Non-negativity:** For all $x \\in \\mathbb{R}$, $f(x) \\geq 0$. Probability cannot be negative; therefore, the density must remain on or above the x-axis.
2. **Total Probability:** The total area under the curve must satisfy $\\int_{-\\infty}^{\\infty} f(x) \\, dx = 1$. This signifies that the variable $X$ must take some value within the real line with certainty.

Additionally, because $P(X=x)=0$, the probability of a range is unaffected by whether the interval is inclusive or exclusive:
$$P(a < X < b) = P(a \\leq X \\leq b) = P(a \\leq X < b) = P(a < X \\leq b)$$

The following interactive graph explores the impact of parameters on the Normal Distribution (Gaussian) PDF. In this example, $\\mu$ represents the mean (center) and $\\sigma$ represents the standard deviation (spread).

\`\`\`interactivegraph
(1/(\\sigma * sqrt(2*3.14159))) * exp(-0.5 * ((x - \\mu) / \\sigma)^2)
params: \\mu=0, \\sigma=1
range: \\mu=-3:3, \\sigma=0.5:2
\`\`\`

The graph plots the Gaussian PDF $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2}$. The $\\mu$ parameter shifts the peak of the curve horizontally, while the $\\sigma$ parameter determines the width and height of the distribution.

## Types & Variations

There are several standard continuous distributions, each with unique PDFs designed to model specific types of data:

| Distribution | PDF Formula | Support | Context |
| :--- | :--- | :--- | :--- |
| Uniform | $f(x) = \\frac{1}{b-a}$ | $a \\leq x \\leq b$ | Equal probability across interval |
| Normal | $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ | $-\\infty < x < \\infty$ | Natural phenomena, measurement error |
| Exponential | $f(x) = \\lambda e^{-\\lambda x}$ | $x \\geq 0$ | Time until an event occurs |
| Beta | $f(x) = \\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha, \\beta)}$ | $0 \\leq x \\leq 1$ | Probabilities and percentages |

The uniform distribution is a simple model where every value in an interval is equally likely. Conversely, the normal distribution is the most critical distribution in statistics due to the Central Limit Theorem, which states that the sum of independent, identically distributed random variables tends toward a normal distribution.

## How to Solve

Solving problems involving continuous random variables typically follows a structured analytical approach.

**Step 1: Verify the PDF.** Ensure the given function is valid by checking if $f(x) \\geq 0$ and verifying that the integral over the support is equal to 1. If a constant is missing (e.g., $f(x)=c \\cdot x^2$), solve for $c$ such that $\\int c \\cdot x^2 \\, dx = 1$.

**Step 2: Calculate Probabilities.** To find $P(a \\leq X \\leq b)$, perform the definite integration $\\int_{a}^{b} f(x) \\, dx$. If the bounds are defined by the support, use those limits.

**Step 3: Determine Expected Value.** Evaluate the integral $\\int x \\cdot f(x) \\, dx$ over the support. This requires applying integration techniques such as integration by parts or substitution.

**Step 4: Determine Variance.** First find $E[X^2] = \\int x^2 \\cdot f(x) \\, dx$, then subtract the square of the mean $(E[X])^2$.

**Example:**
Consider the PDF $f(x) = 2x$ for $0 \\leq x \\leq 1$.
1. Verification: $\\int_{0}^{1} 2x \\, dx = [x^2]_{0}^{1} = 1 - 0 = 1$. Valid.
2. Find $P(0.5 \\leq X \\leq 0.8)$:
   $$\\int_{0.5}^{0.8} 2x \\, dx = [x^2]_{0.5}^{0.8} = 0.64 - 0.25 = 0.39$$
3. Find $E[X]$:
   $$\\int_{0}^{1} x(2x) \\, dx = \\int_{0}^{1} 2x^2 \\, dx = [\\frac{2}{3}x^3]_{0}^{1} = \\frac{2}{3}$$

The static graph below plots a generic linear PDF $f(x)=2x$ on the interval $[0, 1]$, showing its increasing density toward $x=1$.

\`\`\`graph
2*x
\`\`\`

## Summary

Continuous random variables provide the mathematical foundation for handling uncertainty in continuous domains. By moving from discrete probability mass functions to continuous probability density functions, we gain the ability to model complex, real-world systems. Key to this transition is the understanding that while individual points have zero probability, intervals hold cumulative weight defined by the area under the PDF curve. Mastery of the normalization property, the calculation of expected values, and the integration of PDFs over specified ranges allows for robust statistical analysis across fields ranging from engineering to finance. Understanding these principles is essential for any technical practitioner dealing with data that inherently fluctuates within a continuous range.`;export{e as default};