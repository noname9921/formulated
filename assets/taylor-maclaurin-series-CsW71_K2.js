var e=`# Taylor and Maclaurin Series

## Definition

A Taylor series is a mathematical representation of a function as an infinite sum of terms calculated from the values of the function's derivatives at a single point. If a function $f(x)$ is infinitely differentiable at a point $a$, then the Taylor series of $f$ centered at $a$ is defined by the power series:

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + \\frac{f'(a)}{1!}(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 + \\dots$$

In this expansion, $f^{(n)}(a)$ denotes the $n$-th derivative of the function evaluated at the point $x=a$, and $n!$ represents the factorial of $n$. The Taylor series provides a local polynomial approximation of a smooth function near a chosen point.

A Maclaurin series is a special case of the Taylor series where the expansion is centered at $a=0$. Thus, the Maclaurin series of a function $f(x)$ is defined as:

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\dots$$

The Maclaurin series is frequently utilized because the calculation of derivatives at zero often simplifies the coefficients significantly, making it an essential tool in calculus and numerical analysis.

## Key Terminology

To master these series, one must understand several foundational concepts that govern their behavior and validity.

| Term | Definition |
| :--- | :--- |
| **Power Series** | A series of the form $\\sum c_n(x-a)^n$ where $c_n$ are constants. |
| **Center ($a$)** | The specific point about which the function is being approximated. |
| **Order of Approximation** | The highest degree $n$ of the polynomial used in a partial sum. |
| **Radius of Convergence ($R$)** | The distance from the center $a$ within which the series converges to $f(x)$. |
| **Interval of Convergence** | The set of all $x$ values for which the series converges. |
| **Remainder ($R_n(x)$)** | The error between the actual function value and the $n$-th degree Taylor polynomial. |
| **Analytic Function** | A function that can be locally represented by a convergent power series. |

The remainder term $R_n(x)$ is expressed by Taylor's Theorem, which states that for some $c$ between $a$ and $x$:

$$R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$

This formulation allows mathematicians to determine the accuracy of a partial sum, ensuring that the approximation remains within a desired tolerance.

## Purpose

The primary purpose of Taylor and Maclaurin series is to simplify complex, non-polynomial functions into manageable, infinite-degree polynomials. This transformation serves several high-level functions:

1. **Approximation:** Many functions (such as $e^x$, $\\sin(x)$, and $\\ln(1+x)$) are difficult to compute manually or computationally for arbitrary values. Taylor series allow computers to evaluate these functions to high precision using only basic arithmetic.
2. **Solving Differential Equations:** Power series methods are standard tools for solving linear and non-linear differential equations where closed-form solutions do not exist.
3. **Limit Evaluation:** Indeterminate forms (like $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$) can be resolved efficiently by replacing the functions in the expression with their respective Taylor expansions, often revealing the limit more transparently than L'Hôpital's rule.
4. **Integration:** Some functions, such as $e^{-x^2}$, do not have elementary antiderivatives. By expressing the function as a power series, one can integrate term-by-term to obtain a rapidly converging numerical result.
5. **Stability Analysis:** In engineering and physics, the first few terms of a Taylor expansion are often used to linearize non-linear systems near equilibrium points, allowing for stability analysis using linear algebra.

## Fundamental Properties

A Taylor series is governed by strict convergence requirements. The series converges if and only if the remainder term $R_n(x)$ approaches zero as $n$ goes to infinity. 

A critical property is that if $f(x)$ is equal to its Taylor series, the function must be analytic. While many common functions are analytic, some smooth functions (infinitely differentiable) are not equal to their Taylor series. For instance, the function $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0)=0$ has all derivatives equal to zero at the origin, meaning its Maclaurin series is zero everywhere, even though the function itself is non-zero for $x \\neq 0$.

Another fundamental property is the linearity of the series: if $h(x) = Af(x) + Bg(x)$, then the Taylor series of $h(x)$ is the sum of $A$ times the Taylor series of $f(x)$ and $B$ times the Taylor series of $g(x)$. Additionally, multiplication, differentiation, and integration of power series can be performed term-by-term within the radius of convergence.

The radius of convergence $R$ is typically determined using the Ratio Test:

$$\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| < 1$$

If this limit is less than 1, the series converges absolutely. If the limit is greater than 1, the series diverges.

## Types & Variations

While the standard Taylor/Maclaurin series provides a global power series representation, variations are used to suit specific computational needs.

### Taylor Polynomials
A Taylor polynomial is a partial sum of a Taylor series. It is defined as:
$$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$$
This polynomial approximates the function $f(x)$ and its first $n$ derivatives at the point $x=a$.

### Laurent Series
In complex analysis, if a function is not analytic at a point (e.g., due to a pole), we use a Laurent series, which allows for negative powers:
$$f(z) = \\sum_{n=-\\infty}^{\\infty} c_n(z-a)^n$$
This is a generalization of the Taylor series used to study singularities.

### Multivariate Taylor Series
For functions of several variables, the Taylor series is generalized using partial derivatives. For a function $f(x, y)$ centered at $(a, b)$:
$$f(x, y) = \\sum_{n=0}^{\\infty} \\sum_{k=0}^{n} \\frac{1}{k!(n-k)!} \\frac{\\partial^n f}{\\partial x^k \\partial y^{n-k}}(a, b)(x-a)^k(y-b)^{n-k}$$
This is crucial in multi-variable calculus, particularly in locating local extrema (Hessian matrix analysis).

## How to Solve

To find the Taylor or Maclaurin series of a function, follow this systematic procedure:

1. **Verify Differentiability:** Ensure the function is infinitely differentiable at the center point $a$.
2. **Calculate Derivatives:** Find the first few derivatives ($f'(x), f''(x), f'''(x), \\dots$).
3. **Evaluate at Center:** Plug in $x=a$ (for Taylor) or $x=0$ (for Maclaurin) into the original function and all subsequent derivatives.
4. **Identify the Pattern:** Look for a general formula for the $n$-th derivative $f^{(n)}(a)$. This is often the most challenging step.
5. **Assemble the Series:** Plug the values into the summation formula $\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n$.
6. **Determine Convergence:** Use the Ratio Test to find the radius of convergence $R$.

### Example: Maclaurin Series for $\\sin(x)$
To derive the Maclaurin series for $f(x) = \\sin(x)$:
- $f(0) = \\sin(0) = 0$
- $f'(0) = \\cos(0) = 1$
- $f''(0) = -\\sin(0) = 0$
- $f'''(0) = -\\cos(0) = -1$
- $f^{(4)}(0) = \\sin(0) = 0$
- $f^{(5)}(0) = \\cos(0) = 1$

The pattern of derivatives is $0, 1, 0, -1, 0, 1, \\dots$. The series is:
$$\\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\dots = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$$

The interactive graph below allows you to adjust the order of the Taylor polynomial approximation for the sine function. Note how increasing the order $n$ improves the fit of the polynomial over a wider range of $x$.

\`\`\`interactivegraph
\\sin(x)
params: n=1
range: n=1:10
\`\`\`

*Note: The code above visualizes the partial sum of the Taylor expansion of $\\sin(x)$ where $n$ represents the highest power included in the polynomial.*

## Summary

The Taylor and Maclaurin series are pillars of mathematical analysis, providing a bridge between complex transcendental functions and simple polynomials. By expressing a function as an infinite series, we gain access to a powerful toolset for approximation, integration, and problem-solving in physics and engineering. 

The convergence of these series, governed by Taylor's Theorem and the remainder term, ensures that we can control the accuracy of our approximations. While the Maclaurin series offers computational convenience, the generalized Taylor series allows for local analysis at any arbitrary point. Ultimately, these series demonstrate the elegance of calculus in breaking down high-order function behavior into the predictable, manageable structure of power series. Understanding these series is essential for anyone progressing into advanced analysis, differential equations, or computational science.`;export{e as default};