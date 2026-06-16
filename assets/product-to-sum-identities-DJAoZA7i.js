var e=`# Product-to-Sum and Sum-to-Product Identities

## Definition

Product-to-Sum and Sum-to-Product identities are a set of trigonometric formulas that describe the relationship between the products of trigonometric functions and their corresponding sums or differences. These identities allow for the transformation of expressions involving the product of sine and cosine functions into expressions involving the sum or difference of sine and cosine functions, and vice-versa.

These identities are derived directly from the fundamental angle addition and subtraction formulas. Specifically, they rely on the properties of sine and cosine under addition of arguments, such as $\\sin(A+B) = \\sin A \\cos B + \\cos A \\sin B$ and $\\cos(A+B) = \\cos A \\cos B - \\sin A \\sin B$. Because these transformations do not change the fundamental nature of the functions involved, they remain valid for all real numbers within the domain of the trigonometric functions.

## Key Terminology

* **Argument:** The input value to a trigonometric function, often denoted by variables like $x$, $y$, $A$, or $B$. In these identities, we often deal with linear combinations of these arguments.
* **Sum-to-Product:** The process of converting an expression of the form $\\sin(A) + \\sin(B)$ into an expression involving the product of trigonometric functions, typically $2\\sin(\\frac{A+B}{2})\\cos(\\frac{A-B}{2})$.
* **Product-to-Sum:** The process of converting an expression of the form $\\sin(A)\\cos(B)$ into a sum of trigonometric functions, such as $\\frac{1}{2}(\\sin(A+B) + \\sin(A-B))$.
* **Periodicity:** The property of trigonometric functions to repeat their values in regular intervals (periods). These identities often collapse or expand these periods during the conversion process.
* **Linear Combination:** A mathematical expression constructed by multiplying each term by a constant and adding the results. The arguments of the trigonometric functions in these identities are linear combinations of the original input variables.

## Purpose

The primary purpose of these identities is simplification and integration. In analytical mathematics, particularly in calculus and complex analysis, it is often significantly easier to integrate or differentiate a sum of terms than it is to handle the product of two oscillating functions.

For instance, consider the integral of a product of two sine waves: $\\int \\sin(ax)\\cos(bx)dx$. Integrating this directly requires integration by parts. However, by using the Product-to-Sum identities, one can rewrite the integrand as $\\frac{1}{2}(\\sin((a+b)x) + \\sin((a-b)x))$, which is straightforward to integrate term-by-term.

Furthermore, in signal processing and wave physics, these identities are vital for understanding interference patterns. When two waves of different frequencies superimpose, the resulting constructive and destructive interference can be described elegantly using these transformations. They bridge the gap between "amplitude modulation" (product form) and "superposition" (sum form).

## Fundamental Properties

The identities are built upon the symmetry and angle sum properties of circular functions. Let $A$ and $B$ represent two arbitrary angles.

### Derivation Basis
To derive the Product-to-Sum formulas, we start with the standard addition formulas:
1. $\\sin(A+B) = \\sin A \\cos B + \\cos A \\sin B$
2. $\\sin(A-B) = \\sin A \\cos B - \\cos A \\sin B$
3. $\\cos(A+B) = \\cos A \\cos B - \\sin A \\sin B$
4. $\\cos(A-B) = \\cos A \\cos B + \\sin A \\sin B$

By adding (1) and (2), we obtain $2\\sin A \\cos B = \\sin(A+B) + \\sin(A-B)$. By subtracting (2) from (1), we obtain $2\\cos A \\sin B = \\sin(A+B) - \\sin(A-B)$. Similar algebraic manipulation of (3) and (4) yields the remaining Product-to-Sum identities.

### Symmetry
The functions behave differently under these transformations due to the odd parity of the sine function ($\\sin(-x) = -\\sin(x)$) and the even parity of the cosine function ($\\cos(-x) = \\cos(x)$). These symmetry properties ensure that the conversion process is consistent regardless of the sign of the arguments.

## Types & Variations

### Product-to-Sum Identities
These identities transform products of sine and cosine into sums and differences.

| Identity |
| :--- |
| $\\sin A \\cos B = \\frac{1}{2}(\\sin(A+B) + \\sin(A-B))$ |
| $\\cos A \\sin B = \\frac{1}{2}(\\sin(A+B) - \\sin(A-B))$ |
| $\\cos A \\cos B = \\frac{1}{2}(\\cos(A+B) + \\cos(A-B))$ |
| $\\sin A \\sin B = \\frac{1}{2}(\\cos(A-B) - \\cos(A+B))$ |

### Sum-to-Product Identities
These are the inverse, transforming sums and differences into products. Let $u = \\frac{A+B}{2}$ and $v = \\frac{A-B}{2}$, which implies $A = u+v$ and $B = u-v$.

| Identity |
| :--- |
| $\\sin A + \\sin B = 2\\sin(\\frac{A+B}{2})\\cos(\\frac{A-B}{2})$ |
| $\\sin A - \\sin B = 2\\cos(\\frac{A+B}{2})\\sin(\\frac{A-B}{2})$ |
| $\\cos A + \\cos B = 2\\cos(\\frac{A+B}{2})\\cos(\\frac{A-B}{2})$ |
| $\\cos A - \\cos B = -2\\sin(\\frac{A+B}{2})\\sin(\\frac{A-B}{2})$ |

The interactive graph below demonstrates the effect of adding two sine waves with different frequencies. Note how the resulting wave $f(x) = \\sin(ax) + \\sin(bx)$ can be analyzed as a product of a fast-oscillating sine component and a slowly-varying cosine envelope, which is the physical manifestation of the Sum-to-Product identity.

\`\`\`interactivegraph
\\sin(ax) + \\sin(bx)
params: a=2, b=1
range: a=0:5, b=0:5
\`\`\`

## How to Solve

Solving problems using these identities requires a systematic approach to identifying which identity fits the form of the expression.

### Step-by-Step Strategy
1. **Identify the Structure:** Determine if the expression is a product (e.g., $\\sin(3x)\\cos(x)$) or a sum/difference (e.g., $\\cos(5x) + \\cos(3x)$).
2. **Match with Identity:** Select the corresponding formula from the tables provided in the previous section.
3. **Substitute Variables:** Clearly define $A$ and $B$. If using the Sum-to-Product identity, calculate the average angle $\\frac{A+B}{2}$ and the half-difference angle $\\frac{A-B}{2}$.
4. **Simplify:** Perform the arithmetic within the sine or cosine arguments.
5. **Verify:** Check that the transformation remains valid by testing with a known angle (e.g., $\\pi/4$ or $\\pi/2$).

### Worked Example: Simplifying $\\cos(70^\\circ) + \\cos(20^\\circ)$
Using the Sum-to-Product identity:
$\\cos A + \\cos B = 2\\cos(\\frac{A+B}{2})\\cos(\\frac{A-B}{2})$

Set $A = 70^\\circ$ and $B = 20^\\circ$:
$A+B = 90^\\circ \\implies \\frac{A+B}{2} = 45^\\circ$
$A-B = 50^\\circ \\implies \\frac{A-B}{2} = 25^\\circ$

Result: $2\\cos(45^\\circ)\\cos(25^\\circ) = 2(\\frac{\\sqrt{2}}{2})\\cos(25^\\circ) = \\sqrt{2}\\cos(25^\\circ)$.

## Summary

The Product-to-Sum and Sum-to-Product identities are essential tools in the trigonometric repertoire. By providing a pathway to switch between additive and multiplicative forms, they simplify the calculus of trigonometric functions and provide deep insights into wave phenomena.

- **Product-to-Sum** is used primarily when integration or reduction of complexity is required.
- **Sum-to-Product** is used to identify roots of equations involving sums of trigonometric functions and to analyze beat frequencies in physics.
- The derivation of these identities is strictly algebraic, relying on the expandability of the sine and cosine functions for sum arguments.
- Mastery of these identities is not just about memorization, but about recognizing the underlying symmetries in circular functions that allow these transformations to hold true.

For students and engineers, these identities act as a bridge between the geometric definition of angles and the algebraic representation of periodic signals, proving that even within a fixed system of identities, there exist multiple perspectives through which a single mathematical truth can be expressed.`;export{e as default};