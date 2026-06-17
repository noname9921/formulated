var e=`# The Multinomial Theorem

The multinomial theorem is a fundamental pillar of combinatorics and algebra, serving as a powerful generalization of the binomial theorem. While the binomial theorem describes the expansion of a sum of two variables raised to a power, the multinomial theorem extends this concept to an arbitrary number of terms. It provides a precise formula for calculating the coefficients of the expansion of a polynomial raised to any non-negative integer power.

## Definition

The multinomial theorem states that for any positive integer $n$ and any sequence of variables $x_1, x_2, \\dots, x_m$, the $n$-th power of their sum can be expressed as:

$$(x_1 + x_2 + \\dots + x_m)^n = \\sum_{k_1+k_2+\\dots+k_m=n} \\binom{n}{k_1, k_2, \\dots, k_m} \\prod_{t=1}^m x_t^{k_t}$$

In this expression, the summation extends over all sequences of non-negative integer indices $k_1, k_2, \\dots, k_m$ such that their sum equals $n$. The coefficient $\\binom{n}{k_1, k_2, \\dots, k_m}$ is known as the multinomial coefficient, defined as:

$$\\binom{n}{k_1, k_2, \\dots, k_m} = \\frac{n!}{k_1! k_2! \\dots k_m!}$$

This formula allows for the systematic expansion of powers of polynomials with any number of terms, where each term in the expansion is a product of the original variables raised to powers whose sum is $n$.

## Key Terminology

To master the multinomial theorem, one must understand several core concepts that govern its structure:

1. **Multinomial Coefficient:** The weight assigned to each term in the expansion. It counts the number of ways to partition a set of $n$ elements into $m$ distinct groups of sizes $k_1, k_2, \\dots, k_m$.
2. **Indices of Partition:** The set of integers $k_i$ that satisfy the constraint $\\sum_{i=1}^m k_i = n$. These represent the exponents of each variable in a specific term of the expansion.
3. **Multiset Permutation:** The multinomial coefficient is identical to the number of distinct permutations of a multiset of $n$ objects, where there are $k_1$ objects of type 1, $k_2$ objects of type 2, and so on, up to $k_m$ objects of type $m$.
4. **Degree of the Polynomial:** The integer $n$, which remains invariant across all terms in the expansion. Each resulting term in the expansion is a monomial of degree $n$.
5. **Number of Terms:** The total number of terms in the expansion is given by the stars and bars formula, specifically $\\binom{n+m-1}{m-1}$.

## Purpose

The primary purpose of the multinomial theorem is to provide a closed-form algebraic representation for the power of a sum. Beyond pure algebra, the theorem serves several practical and theoretical functions:

- **Combinatorial Counting:** It provides the mathematical framework for solving problems involving the distribution of $n$ distinct items into $m$ distinct bins, where the order of items within a bin does not matter but the bins themselves are distinguishable.
- **Probability Theory:** It is essential for defining the multinomial distribution, which generalizes the binomial distribution. The multinomial distribution models the probability of counts for multiple categorical outcomes in independent trials.
- **Efficient Expansion:** Without this theorem, expanding an expression like $(a+b+c)^4$ would require repeated applications of the distributive property (FOIL or its multi-term equivalents), which is prone to human error. The theorem allows for the direct identification of coefficients.
- **Polynomial Identity Analysis:** It facilitates the study of symmetric polynomials and provides a basis for understanding how variables interact when raised to powers collectively.

## Fundamental Properties

The multinomial theorem exhibits several mathematical properties that make it a robust tool in algebraic manipulation:

| Property | Description |
| :--- | :--- |
| **Sum of Coefficients** | If all variables $x_i = 1$, the sum of the multinomial coefficients equals $m^n$. |
| **Symmetry** | The multinomial coefficient is symmetric with respect to its lower indices; changing the order of $k_i$ does not change the result. |
| **Recursive Relation** | Multinomial coefficients satisfy a Pascal-like identity: $\\binom{n}{k_1, \\dots, k_m} = \\sum_{j=1}^m \\binom{n-1}{k_1, \\dots, k_j-1, \\dots, k_m}$. |
| **Degeneracy** | When $m=2$, the theorem collapses exactly into the binomial theorem, as $\\binom{n}{k, n-k} = \\binom{n}{k}$. |

These properties ensure that the theorem is consistent with simpler algebraic structures while providing the flexibility to handle high-dimensional expansions.

## Types & Variations

While the basic form of the multinomial theorem covers the expansion of a sum of variables, variations exist to handle specific constraints and mathematical contexts:

### The Multinomial Probability Distribution
In statistics, the multinomial theorem is the basis for the probability mass function of the multinomial distribution. For an experiment with $m$ possible outcomes having probabilities $p_1, p_2, \\dots, p_m$, the probability of obtaining exactly $k_1, k_2, \\dots, k_m$ occurrences is given by:

$$P(X_1=k_1, \\dots, X_m=k_m) = \\frac{n!}{k_1! \\dots k_m!} p_1^{k_1} \\dots p_m^{k_m}$$

This formula is a direct application of the theorem where the probabilities themselves act as the variables.

### The Negative Multinomial Theorem
The negative multinomial theorem addresses the case where the power $n$ is a negative integer. This results in an infinite series expansion, which is useful in generating functions and asymptotic analysis. The coefficients involve negative multinomial coefficients, calculated using the generalized binomial coefficient definition.

### Multinomial Coefficients with Constraints
Sometimes, the expansion is required only for a subset of variables or under specific constraints where certain $k_i$ are fixed. In these cases, the theorem is applied by treating the constrained variables as constants, effectively reducing the number of terms $m$.

## How to Solve

Solving a problem using the multinomial theorem involves a systematic approach to identifying the indices and calculating the coefficients. Consider the expansion of $(x + 2y + 3z)^3$.

### Step 1: Identify Parameters
Here, $n=3$. The variables are $x_1=x$, $x_2=2y$, and $x_3=3z$. The number of terms $m=3$.

### Step 2: List Integer Partitions
We must find all sets $\\{k_1, k_2, k_3\\}$ such that $k_1 + k_2 + k_3 = 3$. The possible combinations are:
- $(3, 0, 0), (0, 3, 0), (0, 0, 3)$
- $(2, 1, 0), (2, 0, 1), (1, 2, 0), (0, 2, 1), (1, 0, 2), (0, 1, 2)$
- $(1, 1, 1)$

### Step 3: Calculate Coefficients
For each combination, compute the multinomial coefficient and the associated term:
- For $(3, 0, 0)$: $\\frac{3!}{3!0!0!} (x)^3 (2y)^0 (3z)^0 = 1 \\cdot x^3 = x^3$
- For $(1, 1, 1)$: $\\frac{3!}{1!1!1!} (x)^1 (2y)^1 (3z)^1 = 6 \\cdot 6xyz = 36xyz$
- For $(2, 1, 0)$: $\\frac{3!}{2!1!0!} (x)^2 (2y)^1 (3z)^0 = 3 \\cdot x^2 \\cdot 2y = 6x^2y$

### Step 4: Final Summation
Sum all terms derived from the permutations of indices. The final expansion is the sum of these values. This algorithmic approach prevents missing terms and ensures that the power of each variable is correctly accounted for, satisfying the degree $n=3$.

The computational complexity of this process grows factorially with the number of terms, which is why software implementations for symbolic mathematics use the theorem to perform these expansions efficiently in polynomial time relative to the number of terms generated.

## Summary

The multinomial theorem is a profound generalization that bridges elementary algebra and advanced combinatorics. By defining the expansion of $(x_1 + \\dots + x_m)^n$ through the use of multinomial coefficients $\\frac{n!}{k_1! \\dots k_m!}$, it provides an exact method for understanding the distribution of powers in multivariate polynomials. From its role in defining the structure of probability distributions to its utility in algebraic expansion and counting theory, the theorem remains a fundamental tool for mathematicians and scientists alike. Mastery of the theorem requires comfort with integer partitions, factorials, and the systematic enumeration of combinations, all of which are essential skills in high-level analytical mathematics.`;export{e as default};