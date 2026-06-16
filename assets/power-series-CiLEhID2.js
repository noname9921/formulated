var e=`# Power Series and Radius of Convergence

A power series is an infinite series of the form $\\sum_{n=0}^{\\infty} c_n(x-a)^n$, where $a$ is a constant called the center of the series, $x$ is a variable, and $c_n$ represents the coefficients of the series. Power series are the primary tool used in mathematical analysis to represent functions as infinite polynomials, facilitating computation, differentiation, and integration of complex functions.

## Definition

A power series centered at $a$ is defined as the infinite sum:
$$f(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\dots = \\sum_{n=0}^{\\infty} c_n(x-a)^n$$
When $a=0$, the series simplifies to the form $\\sum_{n=0}^{\\infty} c_n x^n$, which is often referred to as a Maclaurin series in the specific context where the coefficients are derived from the derivatives of a function. The convergence of this series depends strictly on the value of $x$. For a given power series, there exists a non-negative number $R$, known as the radius of convergence, such that the series converges absolutely when $|x-a|<R$ and diverges when $|x-a|>R$.

## Key Terminology

To analyze power series effectively, one must be familiar with the following core concepts:

| Term | Definition |
| :--- | :--- |
| Center ($a$) | The point about which the power series is expanded. |
| Coefficients ($c_n$) | The constants determining the scaling of each term $(x-a)^n$. |
| Radius of Convergence ($R$) | The distance from the center $a$ within which the series converges. |
| Interval of Convergence | The set of all $x$ values for which the series converges, including potential endpoints. |
| Absolute Convergence | The property where the series of absolute values $\\sum |c_n(x-a)^n|$ converges. |
| Taylor Series | A power series where $c_n = \\frac{f^{(n)}(a)}{n!}$. |

The interval of convergence can take several forms: $(a-R, a+R)$, $[a-R, a+R)$, $(a-R, a+R]$, or $[a-R, a+R]$. Testing the endpoints is a mandatory step in determining the complete interval, as the ratio test is typically inconclusive when $|x-a|=R$.

## Purpose

Power series act as a bridge between elementary algebraic functions and transcendental functions. Their primary utility lies in three domains:

1. **Approximation:** By truncating an infinite series after $N$ terms, we create a Taylor polynomial $P_N(x)$. This allows for high-precision numerical approximation of functions like $e^x$, $\\sin(x)$, and $\\ln(x)$ using only basic arithmetic operations.
2. **Solving Differential Equations:** Many linear differential equations with variable coefficients cannot be solved via standard integration. Substituting a power series into the equation allows us to determine the coefficients $c_n$ recursively.
3. **Analytic Continuation:** Power series enable the definition of functions in the complex plane, extending the utility of real-valued functions to complex variables, which is fundamental in engineering and physics.

## Fundamental Properties

The behavior of power series is governed by rigid mathematical rules derived from the Ratio Test. For a power series $\\sum c_n(x-a)^n$, let $L = \\lim_{n \\to \\infty} \\left| \\frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n} \\right|$. The series converges if $L < 1$.

Key properties include:
- **Term-by-term Differentiation:** If a power series has a radius of convergence $R > 0$, it is infinitely differentiable within the interval of convergence. The derivative is given by $\\sum_{n=1}^{\\infty} n c_n (x-a)^{n-1}$, which shares the same radius of convergence $R$.
- **Term-by-term Integration:** The integral of a power series is $\\int f(x) dx = C + \\sum_{n=0}^{\\infty} \\frac{c_n}{n+1} (x-a)^{n+1}$, also maintaining the radius of convergence $R$.
- **Uniqueness:** If two power series represent the same function in an open interval, their coefficients must be identical.
- **Ratio Test for $R$:** The radius of convergence is found by evaluating $R = \\lim_{n \\to \\infty} \\left| \\frac{c_n}{c_{n+1}} \\right|$ if the limit exists.

## Types & Variations

Power series are categorized based on their centers and the specific nature of their coefficients.

1. **Maclaurin Series:** Centered at $a=0$. These are the most common series encountered in calculus. For example, $e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$.
2. **Taylor Series:** Centered at any $a$. These provide localized approximations of functions at a specific point of interest.
3. **Geometric Power Series:** The series $\\sum x^n$ is the archetype of power series, converging for $|x|<1$ to $\\frac{1}{1-x}$. Any function that can be algebraically manipulated into this form is a candidate for power series representation.
4. **Binomial Series:** These take the form $(1+x)^k = \\sum_{n=0}^{\\infty} \\binom{k}{n} x^n$. These series are critical in probability and advanced combinatorics.

The following interactive graph allows the visualization of how the degree of a Taylor polynomial ($n$) affects the fit of the function $f(x) = \\sin(x)$ near its center.

\`\`\`interactivegraph
\\sin(x)
params: n=1
range: n=1:10
\`\`\`

In the interactive graph above, the parameter $n$ represents the number of terms included in the Taylor expansion of the sine function. As $n$ increases, observe how the polynomial approximation maps more closely to the target function $f(x) = \\sin(x)$ over a wider domain, illustrating the concept that as $n \\to \\infty$, the polynomial identity converges to the transcendental function within its radius of convergence.

## How to Solve

Determining the radius and interval of convergence involves a rigorous, algorithmic approach:

**Step 1: Identify the coefficients.**
Extract the expression for $c_n$. If the series is given as $\\sum a_n$, ensure that $a_n$ is expressed clearly as $c_n(x-a)^n$.

**Step 2: Apply the Ratio Test.**
Set up the limit $L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$. For the series to converge, we require $L < 1$.

**Step 3: Solve for $R$.**
Rearrange the inequality resulting from the Ratio Test to isolate $|x-a|$. The expression will typically look like $|x-a| < R$. If the limit is $0$ for all $x$, then $R = \\infty$. If the limit is $\\infty$ for all $x \\neq a$, then $R = 0$.

**Step 4: Test the Endpoints.**
The Ratio Test is inconclusive when $L=1$. You must manually substitute $x = a-R$ and $x = a+R$ into the original series. Once substituted, use the $p$-series test, alternating series test, or divergence test to check for convergence at these two specific points.

**Step 5: Write the Interval.**
Combine the open interval from the Ratio Test with the results from the endpoint tests to define the final Interval of Convergence.

Example: Consider the series $\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n 2^n}$.
1. $c_n = \\frac{1}{n 2^n}$.
2. Ratio Test: $\\lim_{n \\to \\infty} \\left| \\frac{(x-3)^{n+1}}{(n+1) 2^{n+1}} \\cdot \\frac{n 2^n}{(x-3)^n} \\right| = \\lim_{n \\to \\infty} \\left| \\frac{x-3}{2} \\cdot \\frac{n}{n+1} \\right| = \\frac{|x-3|}{2}$.
3. Set $\\frac{|x-3|}{2} < 1 \\implies |x-3| < 2$. Thus, $R=2$. The open interval is $(1, 5)$.
4. Endpoints:
   - At $x=1$: $\\sum \\frac{(-2)^n}{n 2^n} = \\sum \\frac{(-1)^n}{n}$, which is the alternating harmonic series (convergent).
   - At $x=5$: $\\sum \\frac{2^n}{n 2^n} = \\sum \\frac{1}{n}$, which is the harmonic series (divergent).
5. Final Interval: $[1, 5)$.

## Summary

Power series are essential instruments in mathematical analysis, providing a mechanism to represent complicated functions as infinite summations of simpler algebraic terms. The radius of convergence $R$ defines the critical boundary within which these representations are valid. By mastering the Ratio Test and the systematic checking of endpoints, one can define the exact domain of validity for any given power series. Whether utilized for numerical approximation, the solution of differential equations, or theoretical explorations in complex analysis, the power series remains a cornerstone of undergraduate and professional mathematics. Understanding the interplay between the center of the series, the coefficients, and the resulting interval is fundamental to bridging the gap between discrete sequences and continuous functions.`;export{e as default};