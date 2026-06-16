var e=`# Regular Singular Points and the Method of Frobenius

## Definition

In the study of second-order linear homogeneous ordinary differential equations (ODEs), we often encounter equations of the form:

$$P(x)y'' + Q(x)y' + R(x)y = 0$$

where $P(x)$, $Q(x)$, and $R(x)$ are polynomials. We can normalize this equation by dividing by the leading coefficient $P(x)$, yielding:

$$y'' + p(x)y' + q(x)y = 0$$

where $p(x) = Q(x)/P(x)$ and $q(x) = R(x)/P(x)$. A point $x_0$ is called an ordinary point if both $p(x)$ and $q(x)$ are analytic at $x_0$. If $p(x)$ or $q(x)$ is not analytic at $x_0$, the point is a singular point. Specifically, $x_0$ is a regular singular point if the functions $(x-x_0)p(x)$ and $(x-x_0)^2q(x)$ are both analytic at $x_0$. If this condition is not met, the point is called an irregular singular point.

## Key Terminology

To analyze these points effectively, we define the following terms:

| Term | Definition |
| :--- | :--- |
| Ordinary Point | A point where the coefficients are analytic. |
| Singular Point | A point where at least one coefficient fails to be analytic. |
| Regular Singular Point | A point where the singularities are "weak" enough to be tamed. |
| Indicial Equation | A quadratic equation derived from the Frobenius series that determines the exponents. |
| Frobenius Series | A power series solution of the form $\\sum_{n=0}^{\\infty}a_n(x-x_0)^{n+r}$. |
| Recurrence Relation | An algebraic relation that determines the coefficients $a_n$ based on previous terms. |

The classification of these points is critical because the behavior of solutions near a singular point is fundamentally different from the behavior near an ordinary point. While ordinary points yield standard Taylor series solutions, regular singular points allow for solutions that may involve non-integer powers, logarithms, or both.

## Purpose

The primary purpose of the Method of Frobenius is to find series solutions to linear differential equations near regular singular points. Many important equations in mathematical physics, such as Bessel's equation, Legendre's equation, and Hermite's equation, have regular singular points. 

Standard power series methods fail at singular points because the solution might blow up or behave like $(x-x_0)^r$ where $r$ is a fraction or a negative number. The Method of Frobenius generalizes the power series approach by introducing the index $r$. This allows us to construct a basis for the solution space even when the point itself is not in the domain of the analytic coefficients. Without this method, large classes of differential equations describing physical systems (like fluid dynamics, heat distribution, or quantum mechanical wave functions) would remain analytically intractable.

## Fundamental Properties

The Frobenius theorem guarantees the existence of at least one solution of the form $y(x) = (x-x_0)^r \\sum_{n=0}^{\\infty} a_n (x-x_0)^n$. The behavior of the solution depends heavily on the roots $r_1$ and $r_2$ of the indicial equation.

1. **Existence:** If $x_0$ is a regular singular point, at least one solution exists in the form of a Frobenius series.
2. **Convergence:** The resulting series converges in some punctured disk $0 < |x-x_0| < \\rho$, where $\\rho$ is the distance to the nearest other singular point.
3. **Indicial Roots:** Let the indicial equation be $r(r-1) + p_0 r + q_0 = 0$. The roots $r_1, r_2$ define the nature of the solution space. If $r_1 - r_2$ is not an integer, two linearly independent solutions exist. If $r_1 - r_2$ is an integer, or if $r_1 = r_2$, the second solution may involve a logarithmic term: $y_2(x) = C y_1(x) \\ln(x-x_0) + (x-x_0)^{r_2} \\sum_{n=0}^\\infty b_n(x-x_0)^n$.

## Types & Variations

There are three primary cases to consider based on the roots of the indicial equation:

**Case 1: Roots not differing by an integer ($r_1 - r_2 \\notin \\mathbb{Z}$)**
This is the simplest case. Two linearly independent solutions are obtained directly from the Frobenius series by substituting $r_1$ and $r_2$ into the recurrence relation.

**Case 2: Equal roots ($r_1 = r_2$)**
When the roots are identical, the second solution must contain a logarithm to maintain linear independence. It typically takes the form $y_2(x) = y_1(x) \\ln(x-x_0) + \\sum_{n=1}^\\infty b_n (x-x_0)^{n+r_1}$.

**Case 3: Roots differing by a positive integer ($r_1 - r_2 = N \\in \\{1, 2, 3, ...\\}$)**
In this case, the recurrence relation for $r_2$ might involve a division by zero. The solution $y_1$ (corresponding to the larger root) is always valid, but $y_2$ may either involve a logarithm or require a modification of the coefficients.

The following interactive graph helps visualize how a function $y = x^r$ behaves near the origin $x=0$. As you adjust the parameter $r$, observe the radical changes in curvature and the approach to the singular point.

\`\`\`interactivegraph
x^r
params: r=0.5
range: r=-2:2
\`\`\`

The graph above plots $f(x) = x^r$ for $x > 0$. When $r > 0$, the function approaches 0 at the origin; when $r = 0$, it is a constant; when $r < 0$, the function blows up, illustrating the singularity.

## How to Solve

To apply the Method of Frobenius for a differential equation $y'' + p(x)y' + q(x)y = 0$ at $x_0 = 0$:

1. **Verify the singular point:** Confirm that $x p(x)$ and $x^2 q(x)$ are analytic at $x=0$.
2. **Assume the series:** Let $y(x) = \\sum_{n=0}^{\\infty} a_n x^{n+r}$ with $a_0 \\neq 0$.
3. **Differentiate:** Compute the derivatives:
   - $y' = \\sum_{n=0}^{\\infty} (n+r) a_n x^{n+r-1}$
   - $y'' = \\sum_{n=0}^{\\infty} (n+r)(n+r-1) a_n x^{n+r-2}$
4. **Substitute:** Plug these into the original ODE.
5. **Collect terms:** Factor out the lowest power of $x$ (usually $x^{r-2}$ or $x^{r-1}$) to extract the **indicial equation**.
6. **Solve for $r$:** Find the roots $r_1$ and $r_2$.
7. **Recurrence Relation:** For a chosen $r$, set the coefficients of higher powers of $x$ to zero to find the relationship between $a_n$ and $a_{n-1}$.
8. **Construct the solution:** Write out the terms of the series and identify the general function if possible.

Consider the Bessel equation $x^2 y'' + x y' + (x^2 - \\nu^2)y = 0$. At $x=0$, $p(x) = 1/x$ and $q(x) = (x^2-\\nu^2)/x^2$. Multiplying by $x$ and $x^2$ gives $1$ and $(x^2-\\nu^2)$, both analytic at $0$. Thus, $x=0$ is a regular singular point. Applying Frobenius leads to the Bessel functions of the first kind $J_\\nu(x)$ and $J_{-\\nu}(x)$.

## Summary

The Method of Frobenius is a robust framework for extending the reach of power series methods into the realm of singular points. By identifying regular singular points through the behavior of $p(x)$ and $q(x)$, we can determine the indicial behavior of the system. Whether the roots of the indicial equation lead to simple series or require logarithmic modifications, the method provides a systematic path to finding the fundamental solutions to complex differential equations. Mastering this technique is essential for solving boundary value problems in engineering and theoretical physics, where equations often possess singular points at the boundaries of the physical domain. The interaction between the indicial roots and the recurrence relation captures the "DNA" of the differential equation, dictating the growth, oscillation, and stability of the resulting solutions.`;export{e as default};