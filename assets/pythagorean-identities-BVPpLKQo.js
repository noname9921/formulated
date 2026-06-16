var e=`# The Fundamental Pythagorean Identities

## Definition

The Fundamental Pythagorean Identities are a set of trigonometric equations that express the relationship between the squares of trigonometric functions of an angle. These identities are derived directly from the Pythagorean theorem, which relates the sides of a right-angled triangle. In trigonometry, the unit circle is defined as a circle with a radius of $r=1$ centered at the origin $(0,0)$ in a Cartesian coordinate system. For any point $(x,y)$ on the unit circle, the angle $\\theta$ formed with the positive $x$-axis determines the coordinates as $x=\\cos(\\theta)$ and $y=\\sin(\\theta)$.

According to the Pythagorean theorem, for any point $(x,y)$ on the unit circle, the sum of the squares of the coordinates must equal the square of the radius. Since the radius is $1$, we arrive at the core identity:
$$\\cos^2(\\theta)+\\sin^2(\\theta)=1$$
This relationship holds true for all real numbers $\\theta$, providing a constant constraint that links the horizontal and vertical projections of the unit circle. From this primary identity, two other secondary identities are derived by dividing the terms by either $\\cos^2(\\theta)$ or $\\sin^2(\\theta)$, resulting in relationships involving the tangent, cotangent, secant, and cosecant functions.

## Key Terminology

To fully grasp the Pythagorean identities, one must be familiar with the following trigonometric functions and concepts:

| Term | Definition |
| :--- | :--- |
| $\\sin(\\theta)$ | The $y$-coordinate of a point on the unit circle at angle $\\theta$. |
| $\\cos(\\theta)$ | The $x$-coordinate of a point on the unit circle at angle $\\theta$. |
| $\\tan(\\theta)$ | The ratio of the sine to the cosine, defined as $\\frac{\\sin(\\theta)}{\\cos(\\theta)}$. |
| $\\sec(\\theta)$ | The reciprocal of the cosine, defined as $\\frac{1}{\\cos(\\theta)}$. |
| $\\csc(\\theta)$ | The reciprocal of the sine, defined as $\\frac{1}{\\sin(\\theta)}$. |
| $\\cot(\\theta)$ | The reciprocal of the tangent, defined as $\\frac{\\cos(\\theta)}{\\sin(\\theta)}$. |
| Unit Circle | A circle of radius $1$ centered at the origin $(0,0)$. |
| Identity | An equality that remains true regardless of the value assigned to the variables. |

These terms form the vocabulary of trigonometry. The identities serve as the "grammar" that allows for the transformation and simplification of complex expressions by leveraging the geometric constraints imposed by the unit circle.

## Purpose

The fundamental purpose of the Pythagorean identities is to reduce the complexity of trigonometric expressions and equations. By allowing the substitution of squared terms, these identities enable mathematicians and engineers to consolidate multiple trigonometric functions into a single term or to eliminate one function in favor of another.

They are indispensable in several domains:
1. **Integration and Differentiation:** In calculus, transforming a difficult integral involving powers of trigonometric functions into a simpler form often requires the use of these identities.
2. **Signal Processing:** Analyzing wave interference patterns frequently involves manipulating sums and products of sinusoids, where Pythagorean identities simplify the underlying algebra.
3. **Engineering and Physics:** When decomposing force vectors or analyzing oscillatory motion, projecting forces onto Cartesian axes often necessitates these identities to reconcile the magnitude of resultant vectors with their angular components.
4. **Equation Solving:** Solving trigonometric equations often results in mixed functions (e.g., both sine and cosine). Identities allow one to express the entire equation in terms of a single function, facilitating algebraic solutions.

## Fundamental Properties

The Pythagorean identities share several properties that differentiate them from other trigonometric relationships such as sum-to-product or double-angle formulas. 

First, they involve squares. This makes them particularly useful for evaluating magnitudes, as the square of a trigonometric function is inherently non-negative, reflecting the physical reality of distance or energy in a system. Second, they are periodic and satisfy the identity across the entire domain of real numbers, excluding values where the functions are undefined (e.g., where $\\cos(\\theta)=0$ or $\\sin(\\theta)=0$).

Consider the behavior of $\\sin^2(x)$ and $\\cos^2(x)$. The graph below illustrates these two functions. Note that their sum is identically $1$ at every point along the $x$-axis.

\`\`\`graph
\\sin(x)^2
\\cos(x)^2
\`\`\`

The graph shows the functions $f(x) = \\sin^2(x)$ and $g(x) = \\cos^2(x)$. By observing the curves, one can see they are vertical shifts and reflections of one another. Their horizontal alignment ensures that at any point $x$, the values sum to exactly $1$, confirming the fundamental identity visually.

## Types & Variations

There are three primary forms of the Pythagorean identities. The primary identity involves sine and cosine, while the remaining two are derived using algebraic manipulation.

### 1. The Primary Identity
This is the base form derived from $x^2+y^2=r^2$:
$$\\sin^2(\\theta)+\\cos^2(\\theta)=1$$
This can be rearranged into two useful variations:
- $\\sin^2(\\theta)=1-\\cos^2(\\theta)$
- $\\cos^2(\\theta)=1-\\sin^2(\\theta)$

### 2. The Tangent-Secant Identity
Dividing the primary identity by $\\cos^2(\\theta)$ (assuming $\\cos(\\theta) \\neq 0$):
$$\\frac{\\sin^2(\\theta)}{\\cos^2(\\theta)}+\\frac{\\cos^2(\\theta)}{\\cos^2(\\theta)}=\\frac{1}{\\cos^2(\\theta)}$$
This yields:
$$\\tan^2(\\theta)+1=\\sec^2(\\theta)$$
This identity is particularly useful in calculus when performing trigonometric substitution for integrals involving terms like $x^2+a^2$.

### 3. The Cotangent-Cosecant Identity
Dividing the primary identity by $\\sin^2(\\theta)$ (assuming $\\sin(\\theta) \\neq 0$):
$$\\frac{\\sin^2(\\theta)}{\\sin^2(\\theta)}+\\frac{\\cos^2(\\theta)}{\\sin^2(\\theta)}=\\frac{1}{\\sin^2(\\theta)}$$
This yields:
$$1+\\cot^2(\\theta)=\\csc^2(\\theta)$$
This identity provides a pathway to simplify expressions containing cosecant or cotangent, often used when dealing with problems involving inverse trigonometric functions or specific coordinate system transformations.

## How to Solve

Solving problems using Pythagorean identities involves a structured approach to simplification. The following process is standard for handling these identities in an academic or technical context:

1. **Identify the goal:** Determine if you need to solve for a specific variable or simplify a complex expression into a single term.
2. **Standardize the expression:** If an expression contains a mix of sine and cosine, try to convert everything to one function. For example, if you see a $\\cos^2(\\theta)$ in an equation dominated by $\\sin(\\theta)$, substitute it with $(1-\\sin^2(\\theta))$.
3. **Use the interactive relationship:** When dealing with functions involving tangents or secants, look for squares. If you have $\\sec^2(\\theta)-1$, immediately replace it with $\\tan^2(\\theta)$.
4. **Factor and Simplify:** Once the expression is in a single trigonometric function, treat that function as a variable (e.g., $u = \\sin(\\theta)$) and perform standard algebraic factoring, such as differences of squares or quadratic factoring.

To explore how these parameters behave when manipulated, we can observe the relationship $\\sec^2(ax) - \\tan^2(ax) = 1$. While this is an identity, it is helpful to visualize how frequency ($a$) impacts the oscillation while the identity holds constant.

\`\`\`interactivegraph
\\sec(ax)^2 - \\tan(ax)^2
params: a=1
range: a=0.1:5
\`\`\`

The interactive graph above plots the expression $\\sec^2(ax) - \\tan^2(ax)$. Despite changing the frequency parameter $a$, the result is a constant line at $y=1$. This illustrates that the identity is independent of the input frequency; the relationship between the secant and tangent functions is a fundamental geometric property of the unit circle that remains invariant under vertical scaling or frequency transformation.

## Summary

The Fundamental Pythagorean Identities are the bedrock of trigonometric simplification and analysis. They consist of:
1. $\\sin^2(\\theta)+\\cos^2(\\theta)=1$
2. $\\tan^2(\\theta)+1=\\sec^2(\\theta)$
3. $1+\\cot^2(\\theta)=\\csc^2(\\theta)$

By relating the square of the trigonometric functions, these identities allow for the fluid transition between different trigonometric representations. They are derived from the geometric constraints of the unit circle and the Pythagorean theorem. Mastery of these identities enables the efficient resolution of complex equations in calculus, signal processing, and physics. Whether by converting mixed-function expressions into single-function forms or utilizing algebraic substitution to simplify integrands, these identities provide the necessary tools to navigate the interconnected landscape of trigonometry. Remembering that these identities are simply expressions of the distance formula in a circular coordinate system provides the intuitive anchor required to apply them effectively in diverse mathematical contexts. Always remember to consider domain restrictions, as the secondary identities require the denominators of the tangent, secant, cotangent, and cosecant functions to be non-zero.`;export{e as default};