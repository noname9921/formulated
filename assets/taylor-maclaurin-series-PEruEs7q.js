var e=`# Taylor and Maclaurin Series

Taylor and Maclaurin series represent one of the most powerful tools in mathematical analysis, allowing us to approximate complex, transcendental, or non-algebraic functions using simple, infinite polynomials. By converting functions like $e^x$, $\\sin(x)$, or $\\ln(1+x)$ into power series, we can perform calculus operations, solve differential equations, and evaluate limits with unprecedented precision.

## Definition

A Taylor series is an infinite sum of terms that are expressed in terms of the function's derivatives at a single point. If a function $f(x)$ is infinitely differentiable at a point $a$, then the Taylor series of $f$ centered at $a$ is defined as:

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$$

Expanding this summation, we get:

$$f(x) = f(a) + \\frac{f'(a)}{1!}(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 + \\dots$$

Where:
- $f^{(n)}(a)$ denotes the $n$-th derivative of the function evaluated at $x=a$.
- $n!$ is the factorial of $n$.
- $(x-a)^n$ is the power term centered at $a$.

When the center of the series is at $a=0$, the series is specifically called a Maclaurin series. The definition simplifies to:

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\dots$$

## Key Terminology

- **Power Series:** An infinite series of the form $\\sum_{n=0}^{\\infty} c_n(x-a)^n$, where $c_n$ are coefficients. Taylor and Maclaurin series are specific types of power series.
- **Center ($a$):** The specific point where the function's derivatives are calculated to build the approximation.
- **Radius of Convergence ($R$):** The distance from the center $a$ within which the series converges. If $|x-a| < R$, the series converges; if $|x-a| > R$, it diverges.
- **Interval of Convergence:** The set of all $x$ values for which the series converges, often including the endpoints $a-R$ and $a+R$.
- **Taylor Polynomial:** A finite truncation of the Taylor series (the first $n$ terms), used for numerical approximations.
- **Remainder ($R_n(x)$):** The difference between the actual function value and the $n$-th degree Taylor polynomial. This is often analyzed using Taylor's Theorem with Lagrange error bound.

## Purpose

The primary purpose of Taylor and Maclaurin series is function approximation. In computational science and engineering, computers cannot directly compute transcendental values like $\\sin(0.5)$ or $\\ln(2)$. Instead, they evaluate a finite number of terms of the corresponding Taylor polynomial to reach a required level of precision.

Furthermore, these series allow mathematicians to:
1. Simplify difficult integrals: Functions that have no elementary antiderivative (like $e^{-x^2}$) can be integrated term-by-term as polynomials.
2. Evaluate limits: Calculating $\\lim_{x\\to 0} \\frac{\\sin(x)-x}{x^3}$ becomes trivial when replacing $\\sin(x)$ with its series expansion.
3. Stability analysis: Linearizing complex systems around an equilibrium point $a$ is essentially taking the first-order Taylor expansion of a non-linear system.

## Fundamental Properties

### Convergence
A Taylor series only provides an accurate representation of $f(x)$ if the series converges to $f(x)$. A function is said to be "analytic" at $a$ if it can be represented by a power series in some neighborhood of $a$. Not all infinitely differentiable functions are analytic; some functions have series that converge to values other than the original function.

### Uniqueness
If a function $f(x)$ can be expressed as a power series centered at $a$ with a non-zero radius of convergence, then that series must be the Taylor series of $f(x)$.

### Error Estimation
To quantify the accuracy of a Taylor polynomial of degree $n$, we use the Lagrange form of the remainder:
$$R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$
where $c$ is some value between $a$ and $x$. This formula provides the theoretical maximum error of the approximation.

## Types & Variations

### Common Maclaurin Series
Several foundational functions have well-known Maclaurin series that serve as building blocks for more complex expressions:

| Function | Maclaurin Series | Radius of Convergence |
| :--- | :--- | :--- |
| $e^x$ | $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ | $\\infty$ |
| $\\sin(x)$ | $\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$ | $\\infty$ |
| $\\cos(x)$ | $\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}$ | $\\infty$ |
| $\\ln(1+x)$ | $\\sum_{n=1}^{\\infty} (-1)^{n+1} \\frac{x^n}{n}$ | $R=1$ |
| $\\frac{1}{1-x}$ | $\\sum_{n=0}^{\\infty} x^n$ | $R=1$ |

The following interactive graph demonstrates how adding successive terms of the Maclaurin series for $\\sin(x)$ brings the approximation closer to the actual function.

\`\`\`interactivegraph
\\sin(x)
\\sum_{k=0}^{n} (-1)^k \\frac{x^{2k+1}}{(2k+1)!}
params: n=1
range: n=0:5
\`\`\`

## How to Solve

To construct a Taylor or Maclaurin series for a given function $f(x)$ at $x=a$, follow these systematic steps:

### Step 1: Compute Derivatives
Find the sequence of derivatives $f'(x), f''(x), f'''(x), \\dots, f^{(n)}(x)$. Identifying a pattern in the derivatives is essential for writing the general summation notation.

### Step 2: Evaluate at the Center
Plug the value $a$ into the function and all calculated derivatives: $f(a), f'(a), f''(a), \\dots, f^{(n)}(a)$.

### Step 3: Apply the Formula
Insert these values into the Taylor series definition:
$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$.

### Step 4: Determine the Radius of Convergence
Apply the Ratio Test to the power series to find the interval of convergence:
$$\\lim_{n\\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| < 1$$

### Example: Maclaurin Series for $f(x) = e^x$
1. $f(x) = e^x \\Rightarrow f(0) = 1$
2. $f'(x) = e^x \\Rightarrow f'(0) = 1$
3. $f''(x) = e^x \\Rightarrow f''(0) = 1$
4. General term: $f^{(n)}(0) = 1$.
5. Applying the formula: $\\sum_{n=0}^{\\infty} \\frac{1}{n!}x^n$.

The static graph below shows the function $e^x$ alongside its 3rd-degree Taylor polynomial $P_3(x) = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}$.

\`\`\`graph
\\exp(x)
1 + x + 0.5*x^2 + 0.1666666667*x^3
\`\`\`

## Summary

Taylor and Maclaurin series bridge the gap between abstract calculus and numerical computation. By representing smooth functions as power series, we transform non-linear problems into polynomial algebra. Key takeaways include:

1. A Taylor series is centered at $a$, while a Maclaurin series is a Taylor series centered at $0$.
2. The accuracy of the series depends on the number of terms included (the degree of the Taylor polynomial) and the distance of $x$ from the center $a$.
3. Power series allow for term-by-term differentiation and integration within the radius of convergence.
4. Taylor's Theorem provides the mathematical rigor to bound the error of these approximations, making them safe for use in precision-critical applications like aerospace navigation and high-speed financial modeling.

Mastering these series is essential for any advanced study in mathematics, physics, and engineering, as they constitute the most standard method for approximating the behavior of complex systems.`;export{e as default};