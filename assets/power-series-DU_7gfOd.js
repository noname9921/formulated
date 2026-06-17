var e=`# Power Series and Radius of Convergence

A power series is an infinite series of the form $\\sum_{n=0}^{\\infty} c_n(x-a)^n$, where $c_n$ represents the coefficients of the series, $x$ is the variable, and $a$ is the center of the series. This mathematical construct serves as a cornerstone of calculus and analysis, enabling the representation of complex functions—such as transcendental functions—as infinite polynomials. By approximating functions with polynomials, we can perform integration, differentiation, and solving of differential equations with high precision.

## Definition

A power series centered at $a$ is defined as the infinite series:
$$f(x) = \\sum_{n=0}^{\\infty} c_n(x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\dots$$
The convergence of this series is not guaranteed for all values of $x$. A power series converges if the partial sums approach a finite limit as $n$ approaches infinity. The "Radius of Convergence" $R$ is a non-negative real number or infinity such that the series converges absolutely for $|x-a|<R$ and diverges for $|x-a|>R$.

If the series converges only at $x=a$, we say $R=0$. If it converges for all real $x$, we say $R=\\infty$. The interval of convergence includes all $x$ values for which the series converges, ranging from $(a-R, a+R)$, and potentially including the endpoints $a-R$ or $a+R$ depending on the behavior of the specific series at those boundaries.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| **Coefficient ($c_n$)** | The sequence of real or complex numbers that scales each term. |
| **Center ($a$)** | The point about which the power series is expanded. |
| **Radius of Convergence ($R$)** | The distance from the center within which the series is guaranteed to converge. |
| **Interval of Convergence** | The set of all $x$ values for which the series converges. |
| **Absolute Convergence** | Convergence occurring when the series of absolute values converges. |
| **Taylor Series** | A specific power series where $c_n = \\frac{f^{(n)}(a)}{n!}$. |
| **Maclaurin Series** | A Taylor series centered at $a=0$. |

## Purpose

The primary utility of power series lies in function approximation and simplification. In many areas of physics and engineering, functions like $e^x$, $\\sin(x)$, and $\\cos(x)$ are difficult to manipulate in their closed forms. By expressing these as power series, we can:

1. **Numerical Approximation:** Calculate values of complex functions using only basic arithmetic operations.
2. **Solving Differential Equations:** Represent unknown functions as power series and solve for coefficients $c_n$ to find the function's analytical form.
3. **Integration:** Evaluate integrals that lack elementary antiderivatives by integrating the power series term-by-term.
4. **Analysis of Limits:** Utilize power series representations to resolve indeterminate forms in limit calculations.

The radius of convergence identifies the domain of validity for these operations, ensuring that the approximation remains reliable.

## Fundamental Properties

Power series are governed by several critical analytical properties that dictate their behavior within the radius of convergence:

### Term-by-Term Operations
Within the interval of convergence $(-R, R)$, a power series $f(x) = \\sum_{n=0}^{\\infty} c_n(x-a)^n$ is infinitely differentiable. Its derivative and integral can be computed as:
$$f'(x) = \\sum_{n=1}^{\\infty} n c_n(x-a)^{n-1}$$
$$\\int f(x)dx = C + \\sum_{n=0}^{\\infty} \\frac{c_n(x-a)^{n+1}}{n+1}$$
Importantly, these new series share the exact same radius of convergence $R$ as the original series.

### The Cauchy-Hadamard Theorem
The radius of convergence can be determined using the coefficients of the series. According to the Cauchy-Hadamard theorem:
$$\\frac{1}{R} = \\limsup_{n \\to \\infty} \\sqrt[n]{|c_n|}$$
If the limit of the ratio of successive coefficients exists, the radius is also given by the Ratio Test:
$$R = \\lim_{n \\to \\infty} \\left| \\frac{c_n}{c_{n+1}} \\right|$$

### Analytic Continuity
If two power series $\\sum a_n(x-a)^n$ and $\\sum b_n(x-a)^n$ converge to the same function on an interval containing $a$, then all corresponding coefficients must be identical ($a_n = b_n$ for all $n$). This uniqueness property allows for the identity of functions to be established through their power series representation.

## Types & Variations

Power series are categorized based on their center and their convergence characteristics:

1. **Geometric Series:** The simplest case where $c_n = 1$. It takes the form $\\sum_{n=0}^{\\infty} (x-a)^n$, which converges to $\\frac{1}{1-(x-a)}$ for $|x-a| < 1$.
2. **Taylor Series:** These arise from the Taylor expansion of smooth functions. They are the most common variations encountered in scientific modeling.
3. **Maclaurin Series:** A specific case of Taylor series where $a=0$.
4. **General Power Series:** Series where the coefficients do not follow a simple Taylor formula, often encountered in solutions to linear differential equations where the function itself is not initially known.

Consider the following functions which are standard power series representations:
- $e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ (Radius $R = \\infty$)
- $\\sin(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (Radius $R = \\infty$)
- $\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$ (Radius $R = 1$)

## How to Solve

To determine the radius of convergence and interval of convergence for a power series, follow this systematic process:

### Step 1: Identify Coefficients
Extract the coefficient $c_n$ from the given series. For example, if given $\\sum \\frac{(x-3)^n}{n^2 2^n}$, identify $c_n = \\frac{1}{n^2 2^n}$.

### Step 2: Apply the Ratio Test
Set up the limit $\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| < 1$, where $a_n = c_n(x-a)^n$.
$$\\lim_{n \\to \\infty} \\left| \\frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n} \\right| < 1$$
$$\\lim_{n \\to \\infty} \\left| \\frac{c_{n+1}}{c_n} \\right| |x-a| < 1$$

### Step 3: Solve for $R$
Rearrange the inequality to isolate $|x-a|$. The resulting constant on the right side is the radius of convergence $R$.
$$|x-a| < \\frac{1}{\\lim_{n \\to \\infty} \\left| \\frac{c_{n+1}}{c_n} \\right|}$$

### Step 4: Test Endpoints
The Ratio Test is inconclusive at the boundary $|x-a| = R$. You must manually substitute $x = a-R$ and $x = a+R$ into the original series and test for convergence using standard series tests (p-series test, alternating series test, integral test).

### Example
For the series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$:
1. $c_n = \\frac{1}{n}$.
2. Ratio: $\\left| \\frac{x^{n+1}}{n+1} \\cdot \\frac{n}{x^n} \\right| = |x| \\frac{n}{n+1}$.
3. Limit as $n \\to \\infty$ is $|x|$. So $|x| < 1$, meaning $R=1$.
4. At $x=1$, we get $\\sum \\frac{1}{n}$, which diverges (harmonic series).
5. At $x=-1$, we get $\\sum \\frac{(-1)^n}{n}$, which converges (alternating series).
6. Interval: $[-1, 1)$.

## Summary

The study of power series provides a bridge between discrete summation and continuous function analysis. By representing functions as infinite polynomials, we simplify operations like differentiation and integration. The radius of convergence defines the critical boundary of these approximations. 

Understanding this concept requires a mastery of limit laws, specifically the Ratio Test, and a cautious approach to boundary conditions at the edges of the interval of convergence. As you explore these series, remember that the "infinite" nature of the polynomial is what allows it to capture the unique geometric properties of the functions it represents. Whether you are solving differential equations or approximating values for engineering simulations, the power series remains an essential tool in the mathematician's toolkit. Always ensure that the value of $x$ remains within the radius of convergence $R$ to maintain the validity of your series calculations, as stepping outside this bound typically results in rapid divergence and erroneous data.`;export{e as default};