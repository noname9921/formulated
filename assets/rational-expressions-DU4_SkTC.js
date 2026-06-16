var e=`# Rational Expressions

A rational expression is a mathematical statement defined as the ratio of two polynomials. Formally, it is an expression of the form $\\frac{P(x)}{Q(x)}$, where $P(x)$ and $Q(x)$ are polynomials in the variable $x$, and $Q(x) \\neq 0$. These expressions represent the algebraic equivalent of fractions in arithmetic, where the numerator and denominator are not mere integers, but complex polynomial functions.

The study of rational expressions is essential to algebra because it extends the operations of arithmetic to polynomial structures. Just as one might simplify $\\frac{6}{8}$ to $\\frac{3}{4}$ by dividing by common factors, one can simplify $\\frac{x^2-1}{x^2+x-2}$ to $\\frac{x+1}{x+2}$ by factoring the constituent polynomials and canceling shared factors. Understanding these expressions is a prerequisite for advanced calculus, differential equations, and complex analysis.

## Key Terminology

To analyze rational expressions, one must master several specific terms that define their structure and behavior:

| Term | Definition |
| :--- | :--- |
| **Numerator** | The polynomial $P(x)$ located above the fraction bar. |
| **Denominator** | The polynomial $Q(x)$ located below the fraction bar. |
| **Excluded Values** | Values of $x$ that cause the denominator $Q(x)$ to equal zero, making the expression undefined. |
| **Simplified Form** | The state of an expression where all common factors between $P(x)$ and $Q(x)$ have been removed. |
| **Asymptote** | A line that a graph approaches infinitely closely as $x$ or $y$ tends toward infinity or a specific value. |
| **Reciprocal** | The rational expression formed by flipping the numerator and denominator, denoted as $\\frac{Q(x)}{P(x)}$. |
| **Common Denominator** | A shared polynomial expression used to add or subtract two or more rational expressions. |

The identification of these components is the first step in any analytical process involving rational functions, as the domain of the expression is strictly determined by the roots of the denominator.

## Purpose

Rational expressions serve as the primary mechanism for modeling phenomena that involve inverse relationships or ratios of polynomial growth. In physics and engineering, they are used to describe rate problems, work efficiency, and electrical circuit resistance. 

Mathematically, rational expressions allow for the representation of complex functions that possess discontinuities. Because rational expressions are defined by division, they inherently create "holes" or "gaps" in the coordinate plane at the values of $x$ where the denominator is zero. By studying these expressions, mathematicians gain insight into the asymptotic behavior of functions—how a value behaves as it approaches extreme limits. This is a fundamental concept in the development of limits and derivatives within calculus.

## Fundamental Properties

Rational expressions inherit the laws of arithmetic fractions, adapted for the commutative and distributive nature of polynomial algebra.

### Domain Restrictions
The domain of a rational expression includes all real numbers except those that cause the denominator to equal zero. Given $\\frac{P(x)}{Q(x)}$, the domain is $\\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}$. Identifying these restrictions is not merely a procedural step but a necessity for maintaining mathematical integrity.

### Identity Property
An expression $\\frac{P(x)}{Q(x)}$ remains equivalent to $\\frac{P(x) \\cdot R(x)}{Q(x) \\cdot R(x)}$ provided that $R(x) \\neq 0$ and the domain constraints are maintained. This allows for the scaling of expressions to find common denominators.

### Simplification Property
If $P(x) = A(x) \\cdot K(x)$ and $Q(x) = B(x) \\cdot K(x)$, then:
$$\\frac{P(x)}{Q(x)} = \\frac{A(x)}{B(x)}$$
This is only valid for $x$ values that are not the roots of $K(x)$. Failure to account for this can lead to the "cancellation of singularities," where a hole in the graph is erroneously ignored.

## Types & Variations

Rational expressions are categorized by the degree of their constituent polynomials and their overall behavior.

### Proper vs. Improper Expressions
A rational expression is considered "proper" if the degree of the numerator is strictly less than the degree of the denominator. If the degree of the numerator is greater than or equal to the degree of the denominator, the expression is "improper." Improper expressions can be simplified using polynomial long division to produce a polynomial plus a proper rational fraction.

### Complex Rational Expressions
A complex rational expression is a fraction where either the numerator or the denominator (or both) contains one or more rational expressions. For example, $\\frac{1 + \\frac{1}{x}}{x - \\frac{1}{x}}$ is a complex rational expression. These are simplified by multiplying the entire expression by the least common denominator (LCD) of the internal fractions.

### Behavioral Variations
Rational functions, the graphical representation of these expressions, exhibit diverse behaviors. They can possess:
1. **Vertical Asymptotes:** Occurring at $x$-values where the simplified denominator equals zero.
2. **Horizontal Asymptotes:** Determined by the ratio of the leading coefficients of $P(x)$ and $Q(x)$ as $x \\to \\infty$.
3. **Slant (Oblique) Asymptotes:** Occurring when the degree of the numerator is exactly one higher than the degree of the denominator.

The interactive graph below demonstrates the transformation of a basic rational function $f(x) = \\frac{a}{x-h} + k$, showing how parameters $a$, $h$, and $k$ shift the position of the asymptotes.

\`\`\`interactivegraph
a/(x-h) + k
params: a=1, h=0, k=0
range: a=-5:5, h=-5:5, k=-5:5
\`\`\`

## How to Solve

Working with rational expressions requires a disciplined, multi-step approach. The primary operations are multiplication, division, addition, and subtraction.

### Multiplication and Division
To multiply rational expressions:
1. Factor every numerator and denominator completely.
2. Multiply the numerators together and the denominators together.
3. Simplify by canceling out common factors.

To divide, multiply by the reciprocal of the divisor:
$$\\frac{P(x)}{Q(x)} \\div \\frac{R(x)}{S(x)} = \\frac{P(x)}{Q(x)} \\cdot \\frac{S(x)}{R(x)}$$

### Addition and Subtraction
1. Identify the Least Common Denominator (LCD) of the expressions.
2. Rewrite each fraction using the LCD by multiplying the numerator and denominator by the missing factors.
3. Combine the numerators while keeping the common denominator.
4. Simplify the resulting numerator and determine if any final factors can be cancelled.

### Solving Equations
When solving equations of the form $\\frac{P(x)}{Q(x)} = \\frac{R(x)}{S(x)}$, one can use the "cross-multiplication" method: $P(x) \\cdot S(x) = R(x) \\cdot Q(x)$. However, one must verify that the solutions obtained do not result in a denominator of zero in the original equation (extraneous solutions).

The following static graph plots $f(x) = \\frac{x^2-1}{x^2-4}$, illustrating the vertical asymptotes at $x=2$ and $x=-2$, and a horizontal asymptote at $y=1$.

\`\`\`graph
(x^2-1)/(x^2-4)
1
\`\`\`

## Summary

Rational expressions constitute a vital link between basic polynomial algebra and the study of functions in calculus. By viewing these expressions as ratios, we can apply the rules of fractions to polynomials, enabling us to simplify, combine, and manipulate complex algebraic structures. The core of working with these expressions lies in the ability to factor polynomials effectively and maintain constant vigilance regarding domain restrictions. Whether one is identifying asymptotes, solving rate-based equations, or performing algebraic simplification, the principles governing rational expressions provide the necessary analytical framework for higher-level mathematics. Mastering these properties allows for the precise description of inverse variation and asymptotic behavior, which are cornerstones of scientific and engineering modeling.`;export{e as default};