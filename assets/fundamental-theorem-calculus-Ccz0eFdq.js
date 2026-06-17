var e=`# Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) serves as the bridge between the two primary pillars of calculus: differential calculus and integral calculus. Before its formulation by Isaac Newton and Gottfried Wilhelm Leibniz in the 17th century, the problems of finding tangents (slopes) and finding areas under curves were treated as largely distinct, unrelated endeavors. The FTC proves that differentiation and integration are inverse operations, much like multiplication and division, providing a powerful analytical framework for solving complex problems in physics, engineering, and mathematics.

## Definition

The Fundamental Theorem of Calculus is split into two distinct, yet mathematically linked, parts. 

**Part I: The First Fundamental Theorem of Calculus (The Derivative of an Integral)**
This part establishes that the process of integration is essentially the inverse of differentiation. Let $f$ be a continuous real-valued function defined on a closed interval $[a,b]$. Let $F$ be the function defined for all $x$ in $[a,b]$ by:
$$F(x)=\\int_{a}^{x}f(t)dt$$
Then $F$ is uniformly continuous on $[a,b]$ and differentiable on the open interval $(a,b)$, and its derivative is given by:
$$F'(x)=f(x)$$
This implies that every continuous function $f$ has an antiderivative, and the accumulation function $F(x)$ recovers the original function $f$ when differentiated.

**Part II: The Second Fundamental Theorem of Calculus (The Evaluation Theorem)**
This part provides a practical method for calculating the definite integral of a function using its antiderivatives. If $f$ is continuous on $[a,b]$ and $F$ is any antiderivative of $f$ (such that $F'(x)=f(x)$ for all $x$ in $[a,b]$), then:
$$\\int_{a}^{b}f(x)dx=F(b)-F(a)$$
This result is profound because it demonstrates that the total accumulated change of a function over an interval depends only on the values of its antiderivative at the boundaries of that interval.

## Key Terminology

To fully grasp the FTC, one must be familiar with the following concepts:

| Term | Definition |
| :--- | :--- |
| **Definite Integral** | A mathematical expression $\\int_{a}^{b}f(x)dx$ representing the signed area between the curve $f(x)$ and the $x$-axis from $x=a$ to $x=b$. |
| **Antiderivative** | A function $F(x)$ such that its derivative $F'(x)$ is equal to the original function $f(x)$. |
| **Continuity** | A property of a function where a small change in the input produces a small change in the output, with no sudden breaks or jumps. |
| **Integrand** | The function $f(x)$ being integrated within the integral symbol. |
| **Limits of Integration** | The values $a$ (lower limit) and $b$ (upper limit) that define the interval over which the integral is computed. |
| **Accumulation Function** | A function defined as an integral with a variable upper limit, representing the "area so far." |

## Purpose

The primary purpose of the FTC is to simplify the computation of integrals. Before the theorem, calculating the area under a curve required the limit of a Riemann sum—an arduous process involving infinite partitions of an interval and the summation of infinitesimal rectangles. 

Mathematically, a Riemann sum is defined as $\\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\Delta x$. Without the FTC, evaluating this limit for even simple polynomials is computationally expensive. The FTC bypasses this limit process entirely by reducing the integral calculation to a simple subtraction of the antiderivative at two points. Beyond computation, the purpose is structural: it provides a rigorous proof that differentiation and integration are inverses, allowing mathematicians to use tools from differential calculus to solve problems in integral calculus and vice versa.

## Fundamental Properties

The power of the FTC relies on several underlying properties:

1. **Existence:** If $f$ is continuous on $[a,b]$, then the definite integral $\\int_{a}^{b}f(x)dx$ necessarily exists. The continuity ensures that the accumulation function is smooth and differentiable.
2. **Linearity of Integration:** The integral operator is linear, meaning $\\int (cf(x) + g(x))dx = c \\int f(x)dx + \\int g(x)dx$. This property, combined with the FTC, allows for the integration of complex polynomials and transcendental functions by breaking them into simpler parts.
3. **Additivity of Intervals:** For any $c$ in the interval, $\\int_{a}^{b}f(x)dx = \\int_{a}^{c}f(x)dx + \\int_{c}^{b}f(x)dx$. This property is derived from the FTC and allows for the integration of piecewise functions.
4. **Inverse Relationship:** If we define $G(x) = \\int_{a}^{x} f(t) dt$, the theorem confirms $G'(x) = f(x)$. If we differentiate $G(x)$, we retrieve the input to the integral.

The following graph plots $f(x) = x^2$ on the interval $[0, 2]$. The area under the curve is the definite integral $\\int_{0}^{2} x^2 dx$. The FTC tells us this is $F(2) - F(0)$, where $F(x) = \\frac{x^3}{3}$. Thus, the area is $\\frac{2^3}{3} - \\frac{0^3}{3} = \\frac{8}{3} \\approx 2.67$.

\`\`\`graph
x^2
\`\`\`

## Types & Variations

While the standard versions of the FTC are central, extensions exist for broader contexts:

**Leibniz Integral Rule**
The Leibniz rule generalizes the FTC to cases where the limits of integration are themselves functions of $x$:
$$\\frac{d}{dx} \\int_{g(x)}^{h(x)} f(t)dt = f(h(x)) \\cdot h'(x) - f(g(x)) \\cdot g'(x)$$
This is a combination of the FTC Part I and the Chain Rule. It is essential in physics when dealing with moving boundaries.

**Fundamental Theorem of Line Integrals**
This is a higher-dimensional generalization of the FTC. It states that the line integral of a gradient field $\\nabla \\phi$ over a curve $C$ from $A$ to $B$ is:
$$\\int_{C} \\nabla \\phi \\cdot d\\mathbf{r} = \\phi(B) - \\phi(A)$$
This mirrors the second part of the FTC, proving that the integral of a derivative depends only on the endpoints of the path.

**Green’s and Stokes' Theorems**
These are essentially the "FTC in higher dimensions." They relate the integral of a derivative (curl or divergence) over a region to the integral of the function itself over the boundary of that region.

## How to Solve

Solving problems using the Fundamental Theorem of Calculus follows a systematic procedure, primarily focusing on Part II for evaluation.

### Step-by-Step Evaluation
1. **Identify the integrand $f(x)$**: Extract the function to be integrated from the expression $\\int_{a}^{b} f(x) dx$.
2. **Find the general antiderivative $F(x)$**: Determine a function $F$ such that $F'(x) = f(x)$. Note that while $F(x) + C$ is the most general form, the constant of integration $C$ cancels out during the subtraction in Part II, so it is standard to use $C = 0$.
3. **Evaluate at the limits**: Compute $F(b)$ and $F(a)$ by substituting the upper and lower bounds into the antiderivative.
4. **Subtract**: Perform the calculation $F(b) - F(a)$.

### Example: Computing $\\int_{1}^{3} (3x^2 + 2) dx$
1. $f(x) = 3x^2 + 2$.
2. Antiderivative $F(x) = x^3 + 2x$ (since the derivative of $x^3$ is $3x^2$ and the derivative of $2x$ is $2$).
3. Evaluate $F(3) = (3^3 + 2(3)) = 27 + 6 = 33$.
4. Evaluate $F(1) = (1^3 + 2(1)) = 1 + 2 = 3$.
5. Subtract $33 - 3 = 30$.

The following interactive graph shows how changing the upper bound $b$ of the integral $F(b) = \\int_{0}^{b} x^2 dx$ changes the resulting area.

\`\`\`interactivegraph
x^2
params: b=1
range: b=0:3
\`\`\`

Observe that as $b$ increases, the area under the curve grows at a rate proportional to the height of the function at $b$, confirming $F'(b) = f(b)$.

## Summary

The Fundamental Theorem of Calculus is the cornerstone of analytical mathematics. By formalizing the inverse relationship between the derivative and the integral, it provides a computational bridge that transforms the difficult problem of summing infinitesimal areas into the elegant problem of evaluating function boundaries. 

The first part of the theorem validates the existence of antiderivatives for all continuous functions and defines the accumulation function as a differentiable entity. The second part provides the "Evaluation Theorem," which is the primary tool used in physics to calculate displacement from velocity, work from force, and in engineering to determine structural loading or fluid flow. 

Understanding the FTC is essential not only for computing definite integrals but for appreciating the structural beauty of calculus, where the rate of change and the accumulation of total change are shown to be two sides of the same mathematical coin. Through its generalizations like the Leibniz rule and the theorem of line integrals, the FTC remains the foundation upon which modern physics and engineering analysis are constructed.`;export{e as default};