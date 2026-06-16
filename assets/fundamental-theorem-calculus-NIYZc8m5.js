var e=`# Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) stands as the singular bridge connecting the two primary branches of calculus: differential calculus, which concerns itself with the instantaneous rate of change and the slopes of curves, and integral calculus, which focuses on the accumulation of quantities and the calculation of areas beneath curves. Before the emergence of this theorem in the 17th century, the determination of tangent lines and the calculation of areas were treated as largely distinct, disconnected geometric challenges. Isaac Newton and Gottfried Wilhelm Leibniz independently formalized this relationship, demonstrating that integration and differentiation are inverse operations.

## Definition

The Fundamental Theorem of Calculus is partitioned into two distinct parts, often labeled Part I and Part II (or the First and Second Fundamental Theorems).

The First Fundamental Theorem of Calculus establishes that if $f$ is a continuous real-valued function defined on a closed interval $[a, b]$, and $F$ is defined by the integral function:
$$F(x)=\\int_{a}^{x}f(t)dt$$
for all $x$ in $[a, b]$, then $F$ is uniformly continuous on $[a, b]$, differentiable on the open interval $(a, b)$, and its derivative is given by:
$$F'(x)=f(x)$$

The Second Fundamental Theorem of Calculus, often referred to as the Evaluation Theorem, provides the mechanism for computing definite integrals using antiderivatives. It states that if $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ (such that $F'(x)=f(x)$ for all $x$ in $[a, b]$), then the definite integral of $f$ from $a$ to $b$ is:
$$\\int_{a}^{b}f(x)dx=F(b)-F(a)$$

## Key Terminology

To understand the theorem, one must define several foundational mathematical terms that characterize the behavior of functions and the process of integration.

| Term | Definition |
| :--- | :--- |
| Antiderivative | A function $F$ such that its derivative $F'$ equals the original function $f$. |
| Definite Integral | A mathematical construct represented by $\\int_{a}^{b}f(x)dx$, signifying the net area between the curve $f(x)$ and the x-axis from $a$ to $b$. |
| Continuous Function | A function whose graph has no breaks, jumps, or holes; a requirement for the FTC to hold. |
| Accumulation Function | A function $F(x)=\\int_{a}^{x}f(t)dt$ that tracks the total area accumulated under $f$ as the upper bound $x$ varies. |
| Variable of Integration | The dummy variable (e.g., $t$ in $\\int_{a}^{x}f(t)dt$) used to represent the input of the integrand within the bounds of the integral. |

## Purpose

The primary purpose of the Fundamental Theorem of Calculus is to transform the computationally difficult problem of calculating infinite Riemann sums into the relatively straightforward process of finding an antiderivative. Historically, calculating the area under a complex curve required taking the limit of a sum of rectangles as the width of those rectangles approached zero. This process is tedious and algebraically demanding.

By revealing that the accumulation of area is governed by the antiderivative, the theorem allows mathematicians and engineers to bypass the summation process entirely. Furthermore, it clarifies the conceptual symmetry between slope and area. Differentiation measures local behavior (how fast a function changes at a point), while integration measures global behavior (how much a function has accumulated over an interval). The theorem proves that these two perspectives are mathematically dual.

## Fundamental Properties

The validity of the FTC relies on specific analytic properties of functions and the real number system.

First, linearity is a critical property of the integral. For any constants $c_1, c_2$ and functions $f, g$:
$$\\int_{a}^{b}(c_1f(x)+c_2g(x))dx = c_1\\int_{a}^{b}f(x)dx+c_2\\int_{a}^{b}g(x)dx$$

Second, the additive property of intervals allows the splitting of integrals:
$$\\int_{a}^{c}f(x)dx = \\int_{a}^{b}f(x)dx + \\int_{b}^{c}f(x)dx$$

Third, the relationship between bounds and sign:
$$\\int_{a}^{b}f(x)dx = -\\int_{b}^{a}f(x)dx$$

These properties, combined with the FTC, ensure that once an antiderivative is known for a basic set of functions (the "elementary functions"), the definite integral of any combination of these functions can be calculated systematically.

## Types & Variations

While the basic versions of the FTC apply to continuous functions on closed intervals, the theorem has several powerful variations and extensions used in more advanced contexts.

### The Leibniz Integral Rule
When the limits of integration are themselves functions of $x$, the theorem requires the chain rule for differentiation. If $G(x) = \\int_{u(x)}^{v(x)}f(t)dt$, then:
$$G'(x) = f(v(x)) \\cdot v'(x) - f(u(x)) \\cdot u'(x)$$
This variation is essential in physics and fluid dynamics, where the domain of interest may expand or contract over time.

### The Barrow's Formula
Often treated as synonymous with the Second Fundamental Theorem, Isaac Barrow is credited with the geometric insight that the rate of change of the area under a curve is the height of the curve itself. This is essentially the differential form of the FTC.

### Multi-variable Generalization (Stokes' Theorem)
The FTC can be viewed as the one-dimensional case of the Generalized Stokes' Theorem, which relates the integral of a differential form over a manifold to the integral of its exterior derivative over the boundary of that manifold. In this view:
$$\\int_{\\Omega} d\\omega = \\int_{\\partial\\Omega} \\omega$$
The FTC is recovered when $\\Omega$ is a line segment $[a, b]$ and its boundary $\\partial\\Omega$ consists of the points $\\{a, b\\}$.

## How to Solve

To apply the Fundamental Theorem of Calculus in practice, one follows a structured analytical approach.

### Step-by-Step Integration Using FTC
1. **Identify the Integrand:** Ensure the function $f(x)$ is continuous on the interval $[a, b]$.
2. **Find the Antiderivative:** Determine a function $F(x)$ such that $F'(x)=f(x)$. Common techniques include using basic power rules, substitution (u-substitution), or integration by parts.
3. **Evaluate at Boundaries:** Calculate $F(b)$ and $F(a)$.
4. **Subtract:** Compute the final value $F(b) - F(a)$.

### Illustrative Example
Consider the integral of $f(x) = x^2$ from $0$ to $3$.
1. The integrand $f(x) = x^2$ is continuous on $[0, 3]$.
2. The general antiderivative of $x^2$ is $F(x) = \\frac{1}{3}x^3 + C$. For the purpose of the definite integral, we can choose the constant $C=0$.
3. Evaluate $F(3) = \\frac{1}{3}(3)^3 = 9$.
4. Evaluate $F(0) = \\frac{1}{3}(0)^3 = 0$.
5. The result is $9 - 0 = 9$.

The graph below plots $f(x) = x^2$, illustrating that the area under the parabola from $0$ to $3$ is equivalent to the difference between the values of its antiderivative $F(x) = \\frac{1}{3}x^3$.

\`\`\`graph
x^2
\`\`\`

### Applying the First Theorem (Variable Bounds)
If asked to differentiate $F(x) = \\int_{1}^{x^2} \\sin(t) dt$, we do not need to integrate $\\sin(t)$. Instead, we use the chain rule version of the FTC:
$F'(x) = \\sin(x^2) \\cdot \\frac{d}{dx}(x^2)$
$F'(x) = 2x \\sin(x^2)$

This demonstrates the power of the FTC: it allows us to handle integrals that may be impossible to evaluate in closed form by directly relating them to the derivative of the integrand.

## Summary

The Fundamental Theorem of Calculus serves as the bedrock of mathematical analysis. By asserting that differentiation and integration are inverse processes, it simplifies the calculation of area and accumulation to a level that permits the advancement of modern engineering, physics, and economics.

The First Part of the theorem allows for the definition of new functions through integration, revealing that the derivative of an accumulation function is the original function. The Second Part provides the practical tool of the Evaluation Theorem, which makes the computation of definite integrals a routine algebraic task rather than a limit-based geometric labor. 

Understanding the FTC requires grasping the duality of the operations involved. While differentiation decomposes a function into its local rate of change, integration synthesizes these local changes into a total accumulated value. This relationship is not merely a computational convenience; it is a fundamental property of the mathematical universe, reflecting how infinitesimal variations aggregate into macroscopic quantities. Whether calculating the work done by a variable force, the volume of a solid of revolution, or the probability distribution in statistics, the Fundamental Theorem of Calculus is the primary mathematical mechanism that enables these derivations.`;export{e as default};