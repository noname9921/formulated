var e=`# The Binomial Theorem

## Definition

The Binomial Theorem is a fundamental algebraic principle that provides a systematic way to expand powers of a binomial expression. A binomial is a polynomial with two terms, typically represented as $(a + b)$. The theorem states that for any non-negative integer $n$, the expansion of the expression $(a + b)^n$ can be expressed as a sum of terms in the form:

$$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$$

In this expansion, the symbol $\\binom{n}{k}$ denotes the binomial coefficient, which represents the number of ways to choose a subset of $k$ items from a set of $n$ items. It is calculated using factorials:

$$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$

The theorem is central to algebra, combinatorics, and probability theory, serving as the bridge between algebraic expansion and counting theory. It allows for the rapid determination of coefficients without the necessity of performing exhaustive polynomial multiplication.

## Key Terminology

To master the Binomial Theorem, one must understand several foundational terms and mathematical notations:

1. **Binomial:** An algebraic expression consisting of two terms separated by an addition or subtraction sign, such as $(x + y)$ or $(2a - 3b)$.
2. **Exponent ($n$):** The power to which the binomial is raised. This must be a non-negative integer for the standard form of the theorem.
3. **Binomial Coefficient:** The scalar value $\\binom{n}{k}$ (read as "$n$ choose $k$"). These coefficients correspond to the entries found in Pascal's Triangle.
4. **Factorial ($n!$):** The product of all positive integers up to $n$. By definition, $0! = 1$. The formula $n! = n \\times (n-1) \\times \\dots \\times 1$ is essential for calculating coefficients.
5. **Term:** Each individual component in the expanded sum. A binomial expansion of power $n$ will always result in exactly $n+1$ terms.
6. **Pascal's Triangle:** A triangular array of numbers where each number is the sum of the two numbers directly above it. The $n$-th row of Pascal’s Triangle contains the binomial coefficients for $(a + b)^n$.

## Purpose

The primary purpose of the Binomial Theorem is to streamline the algebraic process of raising a binomial to a high power. Without this theorem, expanding an expression like $(x + y)^7$ would require repeated manual multiplication, which is prone to error and highly inefficient.

Beyond mere calculation, the theorem serves several higher-order purposes:

* **Combinatorial Insight:** It demonstrates that the coefficients in an algebraic expansion are identical to the number of ways to arrange combinations of objects. This connects algebra to discrete mathematics.
* **Probability Theory:** It forms the basis of the Binomial Distribution, which models the probability of having exactly $k$ successes in $n$ independent Bernoulli trials.
* **Approximation:** In calculus and physics, the binomial series (an extension of the theorem for non-integer exponents) is used to approximate complex functions as polynomials, which are much easier to integrate and differentiate.
* **Algebraic Identity Verification:** It provides a framework for proving other mathematical identities, such as the sum of row entries in Pascal's Triangle being equal to $2^n$.

## Fundamental Properties

The expansion of $(a + b)^n$ exhibits several invariant properties that govern its structure:

1. **Number of Terms:** The expansion of $(a+b)^n$ always contains $n+1$ terms.
2. **Degree Consistency:** Every individual term in the expansion has a combined degree of $n$. For any term $\\binom{n}{k} a^{n-k} b^k$, the sum of the exponents of $a$ and $b$ is $(n-k) + k = n$.
3. **Symmetry:** The binomial coefficients are symmetric. Specifically, $\\binom{n}{k} = \\binom{n}{n-k}$. This means the coefficients read the same forward and backward.
4. **Power Descent and Ascent:** As the terms progress from $k=0$ to $k=n$, the exponent of $a$ decreases by 1 in each step (from $n$ down to $0$), while the exponent of $b$ increases by 1 in each step (from $0$ up to $n$).
5. **Coefficient Sum:** The sum of all coefficients in the expansion of $(a + b)^n$ is always $2^n$. This is proven by setting $a=1$ and $b=1$.
6. **Alternating Signs:** If the binomial is of the form $(a - b)^n$, the signs of the terms in the expansion will alternate between positive and negative, specifically $(-1)^k \\binom{n}{k} a^{n-k} b^k$.

## Types & Variations

While the basic Binomial Theorem covers $(a + b)^n$ for positive integers, there are critical variations used in advanced mathematics:

### The General Binomial Theorem (Newton's Generalized Binomial Theorem)
If the exponent $\\alpha$ is not a positive integer (e.g., negative numbers or fractions), the expansion becomes an infinite series:
$$(1 + x)^\\alpha = \\sum_{k=0}^{\\infty} \\binom{\\alpha}{k} x^k = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\dots$$
Here, the binomial coefficient is generalized to:
$$\\binom{\\alpha}{k} = \\frac{\\alpha(\\alpha-1)\\dots(\\alpha-k+1)}{k!}$$

### Multinomial Theorem
This is an extension for expressions with more than two terms, such as $(a + b + c)^n$. The general term is given by:
$$\\frac{n!}{k_1! k_2! \\dots k_m!} a_1^{k_1} a_2^{k_2} \\dots a_m^{k_m}$$
where $k_1 + k_2 + \\dots + k_m = n$.

### Table of Coefficients (Pascal's Triangle)

| $n$ | Row | Coefficients |
| :--- | :--- | :--- |
| 0 | 1 | 1 |
| 1 | 1, 1 | 1, 1 |
| 2 | 1, 2, 1 | 1, 2, 1 |
| 3 | 1, 3, 3, 1 | 1, 3, 3, 1 |
| 4 | 1, 4, 6, 4, 1 | 1, 4, 6, 4, 1 |
| 5 | 1, 5, 10, 10, 5, 1 | 1, 5, 10, 10, 5, 1 |

## How to Solve

To solve a problem using the Binomial Theorem, follow this systematic algorithmic approach:

### Step 1: Identify the Variables
Determine the values of $a$, $b$, and $n$ from your given expression $(a + b)^n$. Pay close attention to negative signs; if you have $(x - 3)^4$, treat $a$ as $x$ and $b$ as $-3$.

### Step 2: Determine the Number of Terms
Calculate $n+1$. This is the number of terms you must generate. For $(x + y)^4$, you will have $4+1 = 5$ terms.

### Step 3: Write the General Term
Construct the general form for each term $k$:
$$T_{k+1} = \\binom{n}{k} a^{n-k} b^k$$
where $k$ ranges from $0$ to $n$.

### Step 4: Calculate Coefficients
Calculate $\\binom{n}{k}$ for each $k$. You can use Pascal's Triangle for smaller $n$ or the factorial formula for larger $n$.

### Step 5: Simplify
Substitute the known values of $a$ and $b$ into the general term formula. Perform the arithmetic for each term. Ensure you apply the powers correctly, particularly to coefficients within the binomial terms (e.g., $(2x)^3 = 8x^3$).

### Example: Expand $(x + 2)^3$
1. $a=x, b=2, n=3$.
2. We need $3+1 = 4$ terms.
3. Terms ($k=0$ to $3$):
   - $k=0: \\binom{3}{0} (x)^3 (2)^0 = 1 \\cdot x^3 \\cdot 1 = x^3$
   - $k=1: \\binom{3}{1} (x)^2 (2)^1 = 3 \\cdot x^2 \\cdot 2 = 6x^2$
   - $k=2: \\binom{3}{2} (x)^1 (2)^2 = 3 \\cdot x \\cdot 4 = 12x$
   - $k=3: \\binom{3}{3} (x)^0 (2)^3 = 1 \\cdot 1 \\cdot 8 = 8$
4. Combine: $x^3 + 6x^2 + 12x + 8$.

## Summary

The Binomial Theorem is a cornerstone of mathematical expansion. By converting the complex process of polynomial multiplication into a structured summation of combinations, it provides a precise and efficient pathway for evaluating binomial powers. From the foundational definitions involving factorials and Pascal's Triangle to the advanced applications of Newton's Generalized Theorem, this topic bridges basic algebra with sophisticated fields like probability and series analysis.

When working with the theorem, remember that the expansion is governed by rigid rules: the sum of exponents must remain constant at $n$, the coefficients follow symmetric patterns, and signs alternate for subtraction-based binomials. Whether calculating probability distributions or simplifying complex algebraic expressions, the Binomial Theorem remains an indispensable tool in the mathematician's toolkit. Through disciplined application of the general term formula $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$, one can confidently expand any binomial expression of the form $(a+b)^n$.`;export{e as default};