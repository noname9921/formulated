var e=`# Rigorous Proof of the Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) serves as the bridge between two seemingly disparate branches of mathematical analysis: differential calculus, which explores the rates of change, and integral calculus, which concerns the accumulation of quantities. By establishing that differentiation and integration are inverse operations, the FTC provides the primary computational tool for evaluating definite integrals.

## Definition

The Fundamental Theorem of Calculus is partitioned into two distinct parts, commonly referred to as the First and Second Fundamental Theorems.

The First Fundamental Theorem of Calculus states that if $f$ is a continuous real-valued function defined on a closed interval $[a, b]$, and $F$ is defined for all $x \\in [a, b]$ by $F(x) = \\int_{a}^{x}f(t)dt$, then $F$ is uniformly continuous on $[a, b]$, differentiable on the open interval $(a, b)$, and its derivative is $F'(x) = f(x)$ for all $x \\in (a, b)$.

The Second Fundamental Theorem of Calculus, often called the Evaluation Theorem, states that if $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ on $[a, b]$ (such that $F'(x) = f(x)$), then:
$$\\int_{a}^{b}f(x)dx = F(b) - F(a)$$

## Key Terminology

*   **Antiderivative:** A function $F$ is an antiderivative of $f$ if $F'(x) = f(x)$. By the Mean Value Theorem, any two antiderivatives of a function differ only by a constant $C$.
*   **Riemann Integral:** The limit of a Riemann sum as the mesh size of the partition approaches zero, representing the area under a curve.
*   **Continuity:** A function $f$ is continuous at $c$ if the limit of $f(x)$ as $x \\to c$ equals $f(c)$. The FTC relies heavily on the continuity of the integrand.
*   **Partition:** A finite set of points $a = x_0 < x_1 < \\dots < x_n = b$ that divides the interval $[a, b]$ into sub-intervals.
*   **Differentiability:** The existence of the limit of the difference quotient $\\lim_{h \\to 0} \\frac{F(x+h)-F(x)}{h}$ at every point in the domain.

## Purpose

The primary purpose of the FTC is to provide a mechanism to compute the value of a definite integral without resorting to the calculation of the limit of an infinite Riemann sum. Before the development of the FTC by Isaac Newton and Gottfried Wilhelm Leibniz, finding the area under a curve required tedious geometric summations. The theorem fundamentally transforms the problem of integration into the problem of identifying an antiderivative. Furthermore, it asserts that every continuous function possesses an antiderivative, thereby ensuring the existence of solutions for a broad class of problems in physics, engineering, and economics.

## Fundamental Properties

The rigorous proof of the First Fundamental Theorem of Calculus utilizes the definition of the derivative and the properties of the integral. Given $F(x) = \\int_{a}^{x}f(t)dt$, we examine the difference quotient for $h > 0$:
$$\\frac{F(x+h) - F(x)}{h} = \\frac{1}{h} \\left( \\int_{a}^{x+h}f(t)dt - \\int_{a}^{x}f(t)dt \\right) = \\frac{1}{h} \\int_{x}^{x+h}f(t)dt$$

By the Mean Value Theorem for Integrals, since $f$ is continuous on $[x, x+h]$, there exists a point $c_h \\in [x, x+h]$ such that:
$$\\int_{x}^{x+h}f(t)dt = f(c_h) \\cdot h$$

Substituting this into the difference quotient, we obtain:
$$\\frac{F(x+h) - F(x)}{h} = f(c_h)$$

As $h \\to 0$, the interval $[x, x+h]$ shrinks to $x$. Consequently, since $x \\le c_h \\le x+h$, the Squeeze Theorem dictates that $c_h \\to x$. Given that $f$ is continuous, $\\lim_{h \\to 0} f(c_h) = f(x)$. Thus:
$$F'(x) = \\lim_{h \\to 0} \\frac{F(x+h) - F(x)}{h} = f(x)$$

This proves that $F(x)$ is an antiderivative of $f(x)$.

## Types & Variations

Variations of the FTC allow for application to non-constant bounds and vector-valued functions.

| Variation | Mathematical Expression | Context |
| :--- | :--- | :--- |
| Variable Upper Limit | $\\frac{d}{dx} \\int_{a}^{g(x)} f(t)dt = f(g(x)) \\cdot g'(x)$ | Leibniz Rule for differentiation |
| Variable Lower Limit | $\\frac{d}{dx} \\int_{h(x)}^{b} f(t)dt = -f(h(x)) \\cdot h'(x)$ | Applying linearity of integration |
| Double Variable Bounds | $\\frac{d}{dx} \\int_{h(x)}^{g(x)} f(t)dt = f(g(x))g'(x) - f(h(x))h'(x)$ | Generalization of the FTC |

The Leibniz Integral Rule is a significant extension, which states that for an integrand $f(x, t)$, the derivative of the integral with respect to $x$ involves the partial derivative of the integrand with respect to $x$.

## How to Solve

To evaluate a definite integral $\\int_{a}^{b}f(x)dx$ rigorously, one must follow a systematic process based on the Second Fundamental Theorem.

1.  **Verify Continuity:** Ensure that the function $f(x)$ is continuous on the closed interval $[a, b]$. If there are discontinuities, the integral may need to be split into sub-intervals or treated as an improper integral.
2.  **Find the General Antiderivative:** Determine a function $F(x)$ such that $F'(x) = f(x)$. This often involves techniques such as u-substitution, integration by parts, or partial fraction decomposition. Note that the constant $C$ is unnecessary in the evaluation because it cancels out: $(F(b)+C) - (F(a)+C) = F(b) - F(a)$.
3.  **Apply Evaluation:** Substitute the upper limit $b$ into the antiderivative and subtract the evaluation of the antiderivative at the lower limit $a$.

Example: Evaluate $\\int_{0}^{\\pi} \\sin(x) dx$.
*   Identify $f(x) = \\sin(x)$.
*   The antiderivative is $F(x) = -\\cos(x)$.
*   Apply the theorem: $[-\\cos(x)]_{0}^{\\pi} = (-\\cos(\\pi)) - (-\\cos(0)) = (-(-1)) - (-1) = 1 + 1 = 2$.

The graph below plots $f(x) = \\sin(x)$ over the interval $[0, \\pi]$. It illustrates that the area enclosed between the curve and the $x$-axis from $0$ to $\\pi$ is positive, as the function remains non-negative in this domain.

\`\`\`graph
\\sin(x)
\`\`\`

## Summary

The Fundamental Theorem of Calculus provides the mathematical justification for the most common methods of integration taught in undergraduate curricula. By asserting that the operation of integration is the inverse of differentiation, the theorem allows mathematicians to bypass the calculation of Riemann sums, which are notoriously difficult for complex functions. The rigorous proof relies on the Mean Value Theorem for Integrals and the continuity of the integrand to show that the accumulated area function $F(x)$ possesses $f(x)$ as its derivative. Whether evaluating simple polynomials or complex transcendental functions, the reliance on the Evaluation Theorem remains the cornerstone of analytical geometry and calculus-based physics. Modern applications range from fluid dynamics, where the accumulation of mass is calculated via integration, to economics, where marginal cost functions are integrated to determine total cost. The elegance of the theorem lies in its ability to condense an infinite process into a simple evaluation of two points on an antiderivative, forming the logical backbone of modern analysis.`;export{e as default};