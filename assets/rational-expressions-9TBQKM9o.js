var e=`# Rational Expressions

A rational expression is a mathematical fraction where both the numerator and the denominator are polynomials. Formally, a rational expression is defined as an expression of the form $\\frac{P(x)}{Q(x)}$, where $P(x)$ and $Q(x)$ are polynomials in one or more variables, and $Q(x) \\neq 0$. The study of these expressions forms the bedrock of algebraic manipulation, calculus, and complex analysis. Just as rational numbers ($\\mathbb{Q}$) represent the ratio of two integers, rational expressions represent the ratio of two algebraic structures.

## Key Terminology

To analyze rational expressions effectively, one must be familiar with specific nomenclature that defines their behavior and constraints:

| Term | Definition |
|:---|:---|
| Numerator | The polynomial $P(x)$ located above the division bar. |
| Denominator | The polynomial $Q(x)$ located below the division bar. |
| Excluded Value | Any value of $x$ that causes $Q(x) = 0$, rendering the expression undefined. |
| Simplified Form | The expression $\\frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ share no common factors other than $1$. |
| Asymptote | A line that a curve approaches arbitrarily closely as the variable approaches a specific value or infinity. |
| Hole (Removable Discontinuity) | A point on the graph where the function is undefined because a common factor exists in both the numerator and denominator. |

The "domain" of a rational expression is the set of all real numbers except those that make the denominator equal to zero. Determining the domain is the first analytical step in evaluating any rational expression.

## Purpose

Rational expressions are essential for modeling real-world phenomena that involve ratios, rates, and inverse relationships. Because rational functions exhibit non-linear behavior, they are frequently used in physics, engineering, and economics.

1. **Modeling Proportionality:** Many physical laws involve inverse proportionality. For instance, Boyle's Law ($PV = k$) can be rearranged as $P = \\frac{k}{V}$, which is a rational expression.
2. **Standardization in Calculus:** Rational expressions are the building blocks of the Rational Function class, which are among the simplest functions to differentiate and integrate using techniques like partial fraction decomposition.
3. **Engineering and Signal Processing:** In control theory and electrical engineering, transfer functions—which describe the relationship between the input and output of a system—are typically represented as the ratio of two polynomials.
4. **Simplification of Algebraic Complexity:** The algebraic laws governing rational expressions (the "Laws of Fractions") allow engineers to reduce highly complex system descriptions into manageable, reduced forms.

## Fundamental Properties

The properties of rational expressions mirror those of arithmetic fractions, provided that the operations remain within the defined domain.

### The Fundamental Principle of Rational Expressions
For any polynomials $P(x), Q(x),$ and $R(x)$ where $Q(x) \\neq 0$ and $R(x) \\neq 0$:
$$\\frac{P(x) \\cdot R(x)}{Q(x) \\cdot R(x)} = \\frac{P(x)}{Q(x)}$$
This property justifies the process of "canceling out" common factors. It is critical to note that the equality holds only for values of $x$ where $R(x) \\neq 0$. If $R(x)$ contains a variable, canceling it may change the domain of the expression by "filling" a hole or removing a constraint.

### Operations
1. **Multiplication:** Multiply the numerators and the denominators separately: $\\frac{P(x)}{Q(x)} \\cdot \\frac{R(x)}{S(x)} = \\frac{P(x) \\cdot R(x)}{Q(x) \\cdot S(x)}$.
2. **Division:** Multiply by the reciprocal: $\\frac{P(x)}{Q(x)} \\div \\frac{R(x)}{S(x)} = \\frac{P(x) \\cdot S(x)}{Q(x) \\cdot R(x)}$.
3. **Addition/Subtraction:** Require a common denominator. The least common multiple (LCM) of the denominators $Q(x)$ and $S(x)$ is used to equate the denominators before combining the numerators.

## Types & Variations

Rational expressions can be categorized by the degrees of their polynomials.

### Proper Rational Expressions
If the degree of the numerator $P(x)$ is strictly less than the degree of the denominator $Q(x)$, the expression is called "proper." These functions typically approach zero as $x \\to \\pm\\infty$.

### Improper Rational Expressions
If the degree of the numerator $P(x)$ is greater than or equal to the degree of the denominator $Q(x)$, the expression is "improper." These can be converted into a polynomial plus a proper rational expression using polynomial long division. For example:
$$\\frac{x^2 + 1}{x} = x + \\frac{1}{x}$$

### Complex Rational Expressions
A complex rational expression is one where the numerator or denominator contains other rational expressions (i.e., a "fraction within a fraction"). These are resolved by multiplying the entire expression by the LCD of all individual internal denominators.

The interactive graph below demonstrates how coefficients affect the vertical and horizontal asymptotes of a basic rational function $f(x) = \\frac{ax+b}{cx+d}$.

\`\`\`interactivegraph
(ax+b)/(cx+d)
params: a=1, b=0, c=1, d=0
range: a=-5:5, b=-5:5, c=-5:5, d=-5:5
\`\`\`

By adjusting the sliders, one observes that the horizontal asymptote shifts with the ratio of $a$ to $c$, while the vertical asymptote is dictated by the root of the denominator ($cx+d=0$).

## How to Solve

Solving problems involving rational expressions usually involves simplification, equation solving, or decomposition.

### 1. Simplifying Expressions
To simplify, factor both the numerator and denominator completely. Identify any values of $x$ that make the denominator zero. Cancel common factors. 
Example: Simplify $\\frac{x^2 - 4}{x^2 + 4x + 4}$.
Factor: $\\frac{(x-2)(x+2)}{(x+2)(x+2)} = \\frac{x-2}{x+2}$, with the restriction $x \\neq -2$.

### 2. Solving Rational Equations
To solve an equation of the form $\\frac{P(x)}{Q(x)} = \\frac{R(x)}{S(x)}$, one should:
1. Identify all excluded values (roots of $Q(x)$ and $S(x)$).
2. Multiply both sides by the least common denominator (LCD) to eliminate the fractions.
3. Solve the resulting polynomial equation.
4. Check the solutions against the excluded values; discard any "extraneous solutions."

### 3. Partial Fraction Decomposition
This is the reverse of adding fractions. It is used in calculus to integrate complex rational expressions. The process involves setting:
$$\\frac{P(x)}{Q(x)} = \\frac{A}{factor_1} + \\frac{B}{factor_2} + \\dots$$
and solving for constants $A, B,$ etc., using system-of-equations methods or the Heaviside cover-up method.

The graph below plots $f(x) = \\frac{x^2 - 1}{x^2 - 4}$, which illustrates the standard behavior of a rational expression with two vertical asymptotes at $x=2$ and $x=-2$.

\`\`\`graph
(x^2 - 1) / (x^2 - 4)
\`\`\`

## Summary

Rational expressions are a fundamental class of functions in algebra, serving as the bridge between basic arithmetic of fractions and the advanced functional analysis found in calculus. Their behavior is defined by the interaction between the roots of their constituent polynomials, which manifest as asymptotes and holes in coordinate geometry. 

Mastery of rational expressions requires three distinct skills: the ability to factor complex polynomials, the capacity to track domain restrictions (excluded values) throughout multi-step manipulations, and the logical application of the LCD to combine or equate terms. As demonstrated through the analysis of properties and operations, these expressions are governed by strict algebraic laws that ensure consistency across various domains, making them indispensable in both theoretical mathematics and applied scientific modeling. By viewing rational expressions not merely as symbols on a page but as dynamic relations defined by their asymptotes and roots, one gains a deeper understanding of how complex systems can be decomposed and managed through rational analysis.`;export{e as default};