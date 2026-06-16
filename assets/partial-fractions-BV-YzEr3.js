var e=`## Definition

Partial fraction decomposition is an algebraic technique used to express a complex rational function as a sum of simpler, "partial" fractions. A rational function $f(x)$ is defined as the ratio of two polynomials, $P(x)$ and $Q(x)$, such that $f(x) = \\frac{P(x)}{Q(x)}$. The goal of decomposition is to break down the fraction into a form where each term has a denominator that is a factor of the original denominator $Q(x)$ and a numerator of lower degree than that factor.

Mathematically, if $Q(x)$ can be factored into linear or irreducible quadratic factors over the real numbers, the expression can be written as:
$$\\frac{P(x)}{Q(x)} = \\sum \\frac{A_i(x)}{(q_i(x))^{n_i}}$$
where $q_i(x)$ are the irreducible factors of $Q(x)$. This process effectively reverses the common denominator operation performed when adding two or more fractions. It is a fundamental procedure in calculus, specifically for integration, and in engineering, particularly in the study of linear systems through Laplace transforms.

## Key Terminology

To understand the decomposition process, one must master the underlying components of polynomial algebra:

| Term | Definition |
| :--- | :--- |
| Rational Function | A function defined by the ratio of two polynomials $P(x)$ and $Q(x)$. |
| Proper Fraction | A rational function where the degree of $P(x)$ is strictly less than the degree of $Q(x)$. |
| Improper Fraction | A rational function where the degree of $P(x)$ is greater than or equal to the degree of $Q(x)$. |
| Polynomial Long Division | The algorithm used to convert an improper fraction into a polynomial plus a proper fraction. |
| Linear Factor | A factor of the form $(ax+b)$ appearing in the denominator. |
| Irreducible Quadratic | A factor of the form $(ax^2+bx+c)$ where the discriminant $b^2-4ac < 0$. |
| Multiplicity | The number of times a specific factor appears in the factorization of the denominator. |
| Residue | In the context of partial fractions, the constant coefficient found in the numerator of a first-degree term. |

## Purpose

The primary motivation for partial fraction decomposition lies in simplifying otherwise intractable mathematical operations. The technique is not merely an algebraic exercise but a critical tool in the following fields:

1. **Integration:** Many rational functions are impossible to integrate in their composite form. By decomposing the function into terms like $\\frac{A}{x-a}$, $\\frac{B}{(x-a)^n}$, or $\\frac{Cx+D}{x^2+bx+c}$, the resulting integrals involve simple power rules, logarithms, or inverse trigonometric functions (like arctan).

2. **Inverse Laplace Transforms:** In control theory and signal processing, the behavior of a system is often represented in the $s$-domain. To transform these representations back to the time domain, engineers must use partial fractions to match standard Laplace transform tables.

3. **Probability Theory:** Generating functions in probability often involve rational expressions. Decomposition allows for the identification of probabilities associated with specific outcomes in discrete distributions.

4. **Series Expansion:** Decomposing a fraction allows for easier expansion into Taylor or Laurent series, which is useful when analyzing the behavior of functions near their singularities.

## Fundamental Properties

Partial fraction decomposition relies on the Fundamental Theorem of Algebra, which states that every non-zero, single-variable, degree-$n$ polynomial with complex coefficients has exactly $n$ complex roots. For partial fractions, we work over the field of real numbers, which implies that every polynomial $Q(x)$ can be uniquely factored into linear factors and irreducible quadratic factors.

The decomposition is governed by the following rules regarding the numerator:
1. If the denominator factor is $(ax+b)^n$, the decomposition includes $n$ terms of the form $\\frac{A_1}{ax+b} + \\frac{A_2}{(ax+b)^2} + \\dots + \\frac{A_n}{(ax+b)^n}$.
2. If the denominator factor is $(ax^2+bx+c)^n$, the decomposition includes $n$ terms of the form $\\frac{A_1x+B_1}{ax^2+bx+c} + \\dots + \\frac{A_nx+B_n}{(ax^2+bx+c)^n}$.
3. The sum of the degrees of the numerators in the decomposed form must allow the expression to re-combine to the original degree of $P(x)$ when placed over a common denominator.

The uniqueness of the decomposition is guaranteed by the partial fraction theorem, which ensures that for any proper rational function, there is exactly one set of constants that satisfies the equality.

## Types & Variations

Decomposition strategies change based on the nature of the factors present in the denominator $Q(x)$.

### Case 1: Distinct Linear Factors
If $Q(x) = (x-a_1)(x-a_2)\\dots(x-a_n)$, the decomposition is:
$$\\frac{P(x)}{Q(x)} = \\frac{A_1}{x-a_1} + \\frac{A_2}{x-a_2} + \\dots + \\frac{A_n}{x-a_n}$$
This is the simplest case, solvable by the "Heaviside cover-up method" or by substituting roots of the denominator into the cleared equation.

### Case 2: Repeated Linear Factors
If a factor $(x-a)$ is repeated $k$ times, the decomposition must account for every power from 1 to $k$:
$$\\frac{P(x)}{(x-a)^k} = \\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\dots + \\frac{A_k}{(x-a)^k}$$

### Case 3: Irreducible Quadratic Factors
If $Q(x)$ contains a factor $ax^2+bx+c$ that has no real roots, the numerator must be a linear expression:
$$\\frac{P(x)}{ax^2+bx+c} = \\frac{Ax+B}{ax^2+bx+c}$$
If the quadratic factor is raised to a power $n$, one must include all powers up to $n$ with linear numerators for each.

## How to Solve

To perform a successful decomposition, follow this systematic procedure:

**Step 1: Check for Properness.**
Ensure the degree of $P(x)$ is less than the degree of $Q(x)$. If not, use polynomial long division to write $\\frac{P(x)}{Q(x)} = S(x) + \\frac{R(x)}{Q(x)}$, where $S(x)$ is the quotient and $R(x)$ is the remainder. Apply the decomposition process only to the remainder term $\\frac{R(x)}{Q(x)}$.

**Step 2: Factor the Denominator.**
Completely factor $Q(x)$ into linear factors and irreducible quadratic factors. Use synthetic division or the quadratic formula as necessary.

**Step 3: Set up the Decomposition Template.**
Write the equation based on the factors identified. For example, if the denominator is $(x-1)(x^2+1)$, write:
$$\\frac{P(x)}{(x-1)(x^2+1)} = \\frac{A}{x-1} + \\frac{Bx+C}{x^2+1}$$

**Step 4: Solve for Constants.**
Multiply both sides of the equation by the original denominator $Q(x)$ to clear the fractions, resulting in an identity:
$$P(x) = A(x^2+1) + (Bx+C)(x-1)$$
Solve for the unknown constants $A, B,$ and $C$ using three primary methods:
- **Substitution:** Choose values for $x$ that simplify the equation (e.g., set $x=1$ to isolate $A$).
- **Coefficient Matching:** Expand both sides into polynomial form and equate the coefficients of like powers of $x$. This creates a system of linear equations.
- **Differentiation:** In cases of high-multiplicity roots, differentiating the identity can help isolate coefficients.

**Step 5: Assemble the Result.**
Substitute the determined values back into the partial fraction template.

## Summary

Partial fraction decomposition serves as a bridge between complex rational expressions and computationally manageable terms. By transforming a singular, complicated fraction into a summation of simpler parts, mathematicians and engineers can perform operations that would otherwise be algebraically impossible. The process hinges on the ability to factor polynomials and systematically determine unknown constants through substitution or coefficient comparison. Whether integrating functions in calculus or analyzing the stability of a control system, the technique remains an indispensable element of the mathematical toolkit. Mastery of the different cases—distinct linear, repeated linear, and irreducible quadratic—provides the necessary flexibility to tackle a wide variety of rational function problems across diverse technical domains.`;export{e as default};