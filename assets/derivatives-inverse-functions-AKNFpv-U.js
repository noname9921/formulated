var e=`# Derivatives of Inverse Functions

## Definition

The derivative of an inverse function describes the rate of change of a function's input with respect to its output. If a function $f$ is differentiable and invertible, and $f^{-1}$ is the inverse function of $f$, the derivative of the inverse at a specific point is the reciprocal of the derivative of the original function evaluated at the corresponding point.

Formally, if $y=f(x)$, then $x=f^{-1}(y)$. By the chain rule applied to the identity $f(f^{-1}(y))=y$, we obtain the fundamental relationship:
$$(f^{-1})'(y)=\\frac{1}{f'(x)}=\\frac{1}{f'(f^{-1}(y))}$$
This relationship holds provided that $f'(x) \\neq 0$. This formula allows us to compute the slope of the inverse function without explicitly solving for the algebraic expression of the inverse, which is often difficult or impossible to obtain in closed form.

## Key Terminology

- **Invertibility (Bijectivity):** A function $f$ must be injective (one-to-one) and surjective onto its range to have a well-defined inverse $f^{-1}$. In calculus, this is typically guaranteed by requiring the function to be strictly monotonic.
- **Strict Monotonicity:** A function $f$ is strictly monotonic if it is either strictly increasing or strictly decreasing throughout its domain. If $f'(x) > 0$ or $f'(x) < 0$ for all $x$ in an interval, the function is strictly monotonic and thus invertible on that interval.
- **Critical Point:** A point $x$ where $f'(x)=0$. At such points, the inverse function $f^{-1}$ will have a vertical tangent, meaning the derivative $(f^{-1})'$ is undefined (tends to infinity).
- **Domain and Range Swap:** For any point $(a,b)$ on the graph of $y=f(x)$, the point $(b,a)$ lies on the graph of $y=f^{-1}(x)$. The derivative of the inverse function at $x=b$ represents the reciprocal of the slope of the original function at $x=a$.

## Purpose

The primary utility of the derivative of inverse functions lies in three domains: computational efficiency, theoretical completion, and the derivation of transcendental function derivatives.

1. **Computational Efficiency:** Many functions, such as $f(x)=x^5+x+1$, cannot be solved algebraically for $x$. However, we can still determine the derivative of the inverse at a point $y$ if we can identify the corresponding $x$ such that $f(x)=y$.
2. **Derivative Derivations:** This theorem is essential for finding the derivatives of inverse trigonometric functions (like $\\arcsin(x)$) and inverse hyperbolic functions (like $\\text{arsinh}(x)$). By expressing these as the inverses of the base functions, we can systematically apply the inverse function theorem to derive their derivatives.
3. **Implicit Analysis:** It provides a mechanism for analyzing the behavior of inverse transformations in mapping problems, control theory, and coordinate transformations, where we need to understand how small changes in the output space reflect back into the input space.

## Fundamental Properties

The inverse function derivative theorem relies on the following structural properties of functions and their slopes:

1. **Reciprocity of Slopes:** If the slope of $f$ at $x$ is $m$, the slope of $f^{-1}$ at $f(x)$ is $1/m$. This is geometrically interpreted as the reflection of the tangent line across the line $y=x$.
2. **Horizontal Tangents:** If $f'(x)=0$, the inverse function has a vertical tangent at $f(x)$, leading to an undefined derivative for the inverse at that point.
3. **Differentiability Continuity:** If $f$ is differentiable in an open interval containing $x$ and $f'(x) \\neq 0$, then $f^{-1}$ is differentiable at $y=f(x)$.
4. **Second Derivatives:** The second derivative of the inverse can also be calculated using the quotient rule on the first derivative result:
$$(f^{-1})''(y) = \\frac{d}{dy}\\left(\\frac{1}{f'(f^{-1}(y))}\\right) = -\\frac{f''(f^{-1}(y))}{(f'(f^{-1}(y)))^3}$$
This property highlights that the concavity of the inverse function depends not only on the concavity of the original function but also on the cube of its slope.

## Types & Variations

Inverse functions generally fall into several categories depending on the nature of the original function:

| Function Type | Inverse Type | Derivative Form |
| :--- | :--- | :--- |
| Power ($x^n$) | Root ($x^{1/n}$) | $1/(nx^{n-1})$ |
| Exponential ($e^x$) | Logarithmic ($\\ln x$) | $1/x$ |
| Trigonometric ($\\sin x$) | Inverse Trig ($\\arcsin x$) | $1/\\sqrt{1-x^2}$ |
| Hyperbolic ($\\sinh x$) | Inverse Hyperbolic ($\\text{arsinh} x$) | $1/\\sqrt{1+x^2}$ |

The interactive nature of these variations is explored below, where parameters modify the base function and influence the slope of the inverse.

\`\`\`interactivegraph
\\sqrt[a]{x}
params: a=2
range: a=1:5
\`\`\`

The graph above shows the function $f(x) = x^{1/a}$, which is the inverse of $g(x) = x^a$. As $a$ increases (the exponent of the original power function), the derivative of the inverse function $f'(x) = \\frac{1}{a}x^{(1/a)-1}$ changes drastically. For $a > 1$, the slope of the inverse function near the origin becomes increasingly steep, illustrating the impact of the original function's derivative approaching zero at $x=0$.

## How to Solve

To find the derivative of an inverse function $(f^{-1})'(b)$, follow these steps:

1. **Identify the Point:** Determine the value of $a$ such that $f(a)=b$. This often requires solving the equation $f(x)=b$ either by inspection or numerical methods.
2. **Differentiate the Original:** Find the derivative $f'(x)$.
3. **Evaluate the Original Derivative:** Calculate $f'(a)$. Ensure $f'(a) \\neq 0$. If $f'(a)=0$, the inverse derivative is undefined.
4. **Apply the Reciprocal:** Use the formula $(f^{-1})'(b) = \\frac{1}{f'(a)}$.

### Example Application
Consider $f(x) = x^3 + 2x + 1$. Find $(f^{-1})'(4)$.

**Step 1:** Solve $x^3 + 2x + 1 = 4$. By inspection, $x=1$ works ($1+2+1=4$). So $a=1, b=4$.
**Step 2:** Find $f'(x) = 3x^2 + 2$.
**Step 3:** Evaluate $f'(1) = 3(1)^2 + 2 = 5$.
**Step 4:** Calculate $(f^{-1})'(4) = 1 / f'(1) = 1/5 = 0.2$.

This analytical framework is robust and avoids the need for finding the inverse function explicitly, which for $f(x)=x^3+2x+1$ would involve the cumbersome Cardano's formula.

## Summary

The derivative of inverse functions provides a powerful link between a function's local behavior and the behavior of its inversion. By establishing that the slope of the inverse is the reciprocal of the slope of the original, calculus allows for the differentiation of complex functions like $\\ln(x)$ and $\\arctan(x)$ through their simpler counterparts. 

Key takeaways include:
- The necessity of strict monotonicity for local invertibility.
- The geometric interpretation of the derivative as a reciprocal reflection across $y=x$.
- The requirement that the original derivative at the pre-image must be non-zero to avoid vertical tangents in the inverse.
- The use of the quotient rule to derive higher-order derivatives of inverse functions, illustrating the dependence of concavity on both $f'$ and $f''$.

Mastery of this topic is foundational for advanced calculus, differential equations, and complex analysis, where changing variables between coordinate systems often requires the use of the inverse derivative relationship to preserve the integrity of the differential operator.`;export{e as default};