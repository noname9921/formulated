var e=`# Rigorous Proof of the Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) serves as the bridge between two seemingly disparate branches of mathematics: differential calculus and integral calculus. While the concept of area (integration) and the concept of slope (differentiation) were studied independently for centuries, the realization that they are inverse operations transformed mathematical analysis. This document provides a rigorous analytical treatment of the theorem's proof, its implications, and its foundational mechanics.

## Definition

The Fundamental Theorem of Calculus is typically presented in two parts. Let $f$ be a continuous function on the closed interval $[a, b]$.

**Part 1 (The First Fundamental Theorem):**
If $F$ is defined by the integral function $F(x) = \\int_a^x f(t)dt$, then $F$ is continuous on $[a, b]$, differentiable on $(a, b)$, and its derivative is given by:
$$F'(x) = f(x)$$

**Part 2 (The Second Fundamental Theorem or the Evaluation Theorem):**
If $f$ is continuous on $[a, b]$ and $G$ is any antiderivative of $f$ on $[a, b]$ (i.e., $G'(x) = f(x)$), then:
$$\\int_a^b f(x)dx = G(b) - G(a)$$

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Riemann Integral | A formal way to define the integral of a function as the limit of Riemann sums. |
| Antiderivative | A function $G$ whose derivative is $f$. Symbolically, $G' = f$. |
| Continuity | A function $f$ is continuous at $c$ if the limit of $f(x)$ as $x \\to c$ equals $f(c)$. |
| Partition | A finite set of points $\\{x_0, x_1, ..., x_n\\}$ dividing $[a, b]$ into sub-intervals. |
| Mean Value Theorem | A theorem stating that for a differentiable function, there exists a point where the tangent is parallel to the secant line. |

## Purpose

The primary purpose of the FTC is to provide a computational shortcut for evaluating definite integrals. Without this theorem, calculating the area under a curve would necessitate the computation of an infinite limit of Riemann sums, which is analytically taxing and often impossible for complex functions. By identifying differentiation as the inverse of integration, we gain the ability to compute exact values for areas using simple algebraic manipulation of antiderivatives. Furthermore, it establishes a theoretical guarantee that every continuous function possesses an antiderivative, which is foundational for solving differential equations in physics, engineering, and economics.

## Fundamental Properties

The rigorous proof of the FTC relies heavily on the definition of the derivative and the Mean Value Theorem (MVT).

### Proof of Part 1
To prove that $F'(x) = f(x)$, we invoke the limit definition of the derivative:
$$F'(x) = \\lim_{h \\to 0} \\frac{F(x+h) - F(x)}{h}$$
By the definition of $F(x)$:
$$F(x+h) - F(x) = \\int_a^{x+h} f(t)dt - \\int_a^x f(t)dt = \\int_x^{x+h} f(t)dt$$
According to the Mean Value Theorem for integrals, there exists a number $c_h$ between $x$ and $x+h$ such that:
$$\\int_x^{x+h} f(t)dt = f(c_h) \\cdot h$$
Substituting this back into the limit:
$$F'(x) = \\lim_{h \\to 0} \\frac{f(c_h) \\cdot h}{h} = \\lim_{h \\to 0} f(c_h)$$
Since $f$ is continuous and $c_h$ is trapped between $x$ and $x+h$, as $h \\to 0$, $c_h$ must approach $x$. Therefore, $f(c_h) \\to f(x)$, proving $F'(x) = f(x)$.

### Proof of Part 2
Let $G(x)$ be any antiderivative of $f(x)$. We know from Part 1 that $F(x) = \\int_a^x f(t)dt$ is also an antiderivative of $f(x)$. By the property of antiderivatives, $F(x)$ and $G(x)$ must differ by a constant $C$:
$$F(x) = G(x) + C$$
At $x = a$, we have $F(a) = \\int_a^a f(t)dt = 0$. Thus:
$$0 = G(a) + C \\implies C = -G(a)$$
Substituting $C$ back into the equation:
$$F(x) = G(x) - G(a)$$
Evaluating at $x = b$:
$$F(b) = \\int_a^b f(t)dt = G(b) - G(a)$$

## Types & Variations

The FTC has various extensions, including the Leibniz Integral Rule and generalizations to multiple dimensions (e.g., Stokes' Theorem and the Divergence Theorem).

1. **Leibniz Integral Rule:** Provides a formula for differentiating an integral where the limits of integration are themselves functions of the variable of differentiation:
$$\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(x, t)dt = f(x, b(x))b'(x) - f(x, a(x))a'(x) + \\int_{a(x)}^{b(x)} \\frac{\\partial}{\\partial x} f(x, t)dt$$

2. **Multivariable Generalization:** The theorem is a special case of the generalized Stokes' Theorem, which relates the integral of a differential form over a boundary to the integral of its exterior derivative over the whole manifold.

## How to Solve

The practical application of the FTC involves finding the antiderivative of the integrand. The following steps outline the procedure:

1. **Verify Continuity:** Ensure the function $f(x)$ is continuous over the interval $[a, b]$. If the function has an infinite discontinuity, the integral may be improper.
2. **Determine the Antiderivative:** Find $G(x)$ such that $G'(x) = f(x)$. Common methods include integration by parts, substitution (u-substitution), or partial fraction decomposition.
3. **Evaluate at Boundaries:** Apply the Fundamental Theorem: calculate $G(b) - G(a)$.
4. **Interpretation:** If the integral represents a physical quantity (like displacement from velocity), ensure that the units are consistent with the context of the problem.

Consider an example: Evaluate $\\int_1^3 x^2 dx$.
- The antiderivative of $x^2$ is $\\frac{1}{3}x^3$.
- Applying Part 2: $G(3) - G(1) = \\frac{1}{3}(3)^3 - \\frac{1}{3}(1)^3 = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3} \\approx 8.667$.

For deeper insight into how the accumulation of area changes, we observe the behavior of the integral function $F(x) = \\int_0^x t^2 dt$.

\`\`\`graph
(1/3)*x^3
\`\`\`

The graph above shows the function $G(x) = \\frac{1}{3}x^3$, which represents the cumulative area of the function $f(t) = t^2$ from 0 to $x$. Note how the rate of growth of the area (the slope) increases as $x$ increases, corresponding to the increasing value of $t^2$.

## Summary

The Fundamental Theorem of Calculus is the bedrock of modern analysis. It simplifies the calculation of areas, volumes, and work, while simultaneously unifying the two major concepts of calculus. By rigorously proving that differentiation and integration are inverse processes, the theorem provides the mathematical framework necessary to solve problems involving rates of change and accumulation. Its significance extends beyond simple calculus; it underpins the theory of differential equations, functional analysis, and complex physics, serving as the essential tool for linking local properties (derivatives) to global properties (integrals). Understanding the proof via the Mean Value Theorem reinforces the logical necessity of this connection, transforming a computational shortcut into a profound analytical truth.`;export{e as default};