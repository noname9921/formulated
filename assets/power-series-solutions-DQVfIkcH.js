var e=`# Power Series Solutions Around Ordinary Points

Differential equations are the mathematical bedrock upon which we build models of the physical world. While many first-order and some higher-order linear equations with constant coefficients possess closed-form solutions involving elementary functions, the vast majority of linear differential equations with variable coefficients do not. When faced with equations such as the Airy equation or the Bessel equation, mathematicians turn to the method of power series. This technique allows us to represent the solution as an infinite sum of terms, providing a robust pathway to approximate and analyze behavior near specific points in the domain.

## Definition

A power series solution around an ordinary point $x_0$ is a representation of an unknown function $y(x)$ as an infinite series of the form:
$$y(x)=\\sum_{n=0}^{\\infty}a_n(x-x_0)^n$$
For this series to be a valid solution to a linear differential equation of the form $P(x)y''+Q(x)y'+R(x)y=0$, the point $x_0$ must be classified as an ordinary point. A point $x_0$ is defined as an ordinary point if the functions $p(x)=\\frac{Q(x)}{P(x)}$ and $q(x)=\\frac{R(x)}{P(x)}$ are analytic at $x_0$. Analyticity implies that these functions possess a Taylor series expansion in some neighborhood of $x_0$. If $P(x_0)=0$, the point is singular, and this specific power series method may fail or require the more complex Frobenius method.

## Key Terminology

To master this method, one must understand several technical terms that govern the convergence and utility of the series:

| Term | Definition |
| :--- | :--- |
| Ordinary Point | A point $x_0$ where the coefficient functions of the normalized ODE are analytic. |
| Singular Point | A point where the coefficient functions are not analytic; $P(x_0)=0$. |
| Radius of Convergence | The distance $R$ from $x_0$ such that the series converges for all $|x-x_0|<R$. |
| Recurrence Relation | An algebraic equation relating the coefficients $a_n$ to preceding terms $a_{n-k}$. |
| Cauchy-Kovalevskaya Theorem | A guarantee that a power series solution exists for analytic coefficients. |
| Analytic Function | A function that can be expressed locally by a convergent power series. |

The radius of convergence $R$ is at least as large as the distance from $x_0$ to the nearest singular point of the differential equation in the complex plane. This is a critical property, as it dictates how far from our "center" $x_0$ we can trust our power series approximation.

## Purpose

The primary purpose of seeking power series solutions is to solve differential equations that resist standard integration techniques. Many physical systems—such as those governed by quantum mechanical potentials, heat distribution in cylindrical objects, or celestial mechanics—result in linear differential equations with non-constant coefficients.

By converting a differential equation into a recurrence relation for coefficients, we effectively transform a continuous calculus problem into a discrete algebraic one. This approach serves three main objectives:
1. **Computational Approximation:** By truncating the series at a high $n$ value, we generate polynomial approximations that are numerically efficient.
2. **Global Behavior Analysis:** The series reveals information about the function's derivatives at $x_0$ through the values of $a_n$, where $a_n = \\frac{y^{(n)}(x_0)}{n!}$.
3. **Existence Proofs:** The method confirms that solutions exist and are analytic in the neighborhood of ordinary points, providing a rigorous foundation for numerical solvers.

## Fundamental Properties

The power series method relies on the term-by-term differentiability of power series within their radius of convergence. If $y(x) = \\sum_{n=0}^{\\infty} a_n (x-x_0)^n$, then:
$$y'(x) = \\sum_{n=1}^{\\infty} n a_n (x-x_0)^{n-1}$$
$$y''(x) = \\sum_{n=2}^{\\infty} n(n-1) a_n (x-x_0)^{n-2}$$

These properties allow us to substitute the series into the differential equation and group terms by powers of $(x-x_0)$. According to the Identity Principle for power series, if a series $\\sum_{n=0}^{\\infty} c_n (x-x_0)^n = 0$ for all $x$ in an interval, then $c_n = 0$ for every $n$. This allows us to solve for the coefficients $a_n$ by setting the sum of coefficients for each power of $x$ to zero.

The graph below plots $y_1(x) = 1 - \\frac{x^2}{2} + \\frac{x^4}{24}$ and $y_2(x) = x - \\frac{x^3}{6} + \\frac{x^5}{120}$, which are the partial sums (Taylor polynomials) for the sine and cosine functions. These represent the fundamental solutions to the differential equation $y'' + y = 0$ near the ordinary point $x_0 = 0$.

\`\`\`graph
1 - x^2/2 + x^4/24
x - x^3/6 + x^5/120
\`\`\`

The user can observe how these polynomials approximate the periodic oscillations of trigonometric functions. As we increase the number of terms in the series, the approximation interval expands.

## Types & Variations

While the basic power series method addresses ordinary points, variations arise depending on the complexity of the ODE:

1. **Homogeneous Linear ODEs:** The standard case where the recurrence relation determines $a_n$ based on $a_0$ and $a_1$, which serve as the two required integration constants.
2. **Non-Homogeneous Linear ODEs:** When the equation equals a function $f(x)$, we must also expand $f(x)$ as a power series and match coefficients accordingly.
3. **Complex Coefficients:** When the variable $x$ is treated as a complex domain, the radius of convergence corresponds to the distance to the nearest pole or branch point in the complex plane.
4. **Systems of Equations:** Multiple coupled ODEs can be solved simultaneously using a vector of power series, extending the method to higher-dimensional spaces.

## How to Solve

To find the power series solution around an ordinary point $x_0$ (taking $x_0=0$ for simplicity), follow this rigorous protocol:

1. **Assumption:** Assume the solution takes the form $y(x) = \\sum_{n=0}^{\\infty} a_n x^n$.
2. **Differentiation:** Compute the first and second derivatives, $y'$ and $y''$, as series. Ensure index shifts are performed so that all terms share the same power of $x$, usually $x^k$.
3. **Substitution:** Insert $y, y',$ and $y''$ into the original differential equation $P(x)y'' + Q(x)y' + R(x)y = 0$.
4. **Re-indexing:** Shift indices of the summations such that the general term for all sums involves the same power of $x$. This often involves extracting the first few terms (e.g., $n=0, 1$) from the series before merging.
5. **Coefficient Matching:** Set the coefficient of each power $x^k$ to zero. This yields the recurrence relation.
6. **Iteration:** Solve the recurrence relation for $a_n$ in terms of $a_0$ and $a_1$.
7. **Series Construction:** Write the solution as $y(x) = a_0 y_1(x) + a_1 y_2(x)$, where $y_1$ and $y_2$ are the linearly independent solutions.

Consider the interactive exploration of how the choice of $a_0$ and $a_1$ affects the trajectory of the solution.

\`\`\`interactivegraph
a0 * \\cos(x) + a1 * \\sin(x)
params: a0=1, a1=0
range: a0=-2:2, a1=-2:2
\`\`\`

In the interactive plot, $a_0$ and $a_1$ act as initial conditions $y(0)$ and $y'(0)$. By sliding these parameters, one can visualize the entire family of solutions for the harmonic oscillator equation, all of which are perfectly represented by power series near the ordinary point $x=0$.

## Summary

Power series solutions around ordinary points represent a fundamental bridge between elementary calculus and advanced analysis. By treating functions as infinite polynomials, we gain the ability to approximate solutions to differential equations that otherwise defy analytical capture. The process—moving from the differential equation to a recurrence relation—exemplifies the power of algebraic transformation in mathematical physics. While the method is constrained by the radius of convergence, it remains a pillar of classical analysis, ensuring that as long as a point is "ordinary," a predictable and systematic solution path exists. Whether dealing with the oscillatory behavior of waves or the static profiles of fields, power series remain an indispensable tool for the technical practitioner.`;export{e as default};