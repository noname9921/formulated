var e=`# Bessel and Legendre Differential Equations

The study of linear differential equations with variable coefficients forms the backbone of mathematical physics and engineering. Among the most critical of these are the Bessel and Legendre differential equations. These equations arise naturally when solving partial differential equations, such as the Laplace equation, the wave equation, or the heat equation, in coordinate systems that possess cylindrical or spherical symmetry.

## Definition

The Bessel differential equation of order $\\nu$ is a second-order linear ordinary differential equation given by:
$$x^2\\frac{d^2y}{dx^2}+x\\frac{dy}{dx}+(x^2-\\nu^2)y=0$$
Here, $\\nu$ is a constant, which may be any real or complex number. The solutions to this equation are known as Bessel functions.

The Legendre differential equation is defined as:
$$(1-x^2)\\frac{d^2y}{dx^2}-2x\\frac{dy}{dx}+n(n+1)y=0$$
In this equation, $n$ is typically a non-negative integer or a constant. This equation frequently appears in problems involving potential theory where spherical symmetry dictates the use of spherical coordinates.

## Key Terminology

To analyze these equations effectively, one must understand several technical terms:

| Term | Definition |
|:---|:---|
| Ordinary Point | A point $x_0$ where the coefficient functions are analytic. |
| Singular Point | A point where the coefficient functions are not analytic. |
| Regular Singular Point | A singularity where the limits $(x-x_0)P(x)$ and $(x-x_0)^2Q(x)$ exist and are finite. |
| Frobenius Method | A technique for finding infinite series solutions around regular singular points. |
| Recurrence Relation | An algebraic relation connecting the coefficients of a power series solution. |
| Orthogonality | A property where the integral of the product of two distinct solutions over an interval is zero. |

In the Bessel equation, $x=0$ is a regular singular point. In the Legendre equation, $x=1$ and $x=-1$ are regular singular points, which necessitates special care when expanding solutions in power series.

## Purpose

The primary purpose of these equations is to serve as the radial and angular components of separation of variables for partial differential equations in curvilinear coordinate systems. 

When solving the Laplace equation $\\nabla^2\\Phi=0$ in cylindrical coordinates $(r, \\theta, z)$, the radial part of the equation transforms into the Bessel equation. Similarly, when solving the same equation in spherical coordinates $(r, \\theta, \\phi)$, the angular part $\\theta$ transforms into the Legendre equation. These functions form a complete basis set, allowing physicists and engineers to express arbitrary functions as series expansions, much like the Fourier series, but adapted to circular or spherical geometries.

## Fundamental Properties

Bessel functions and Legendre polynomials possess distinct analytical properties that make them useful for solving boundary value problems.

### Bessel Functions
Bessel functions of the first kind, denoted $J_\\nu(x)$, are defined by the Frobenius series:
$$J_\\nu(x)=\\sum_{k=0}^\\infty\\frac{(-1)^k}{k!\\Gamma(k+\\nu+1)}\\left(\\frac{x}{2}\\right)^{2k+\\nu}$$
They exhibit oscillatory behavior as $x \\to \\infty$, acting like a damped sine or cosine wave. Because the Bessel equation has a regular singular point at the origin, the solution $J_{-\\nu}(x)$ is linearly independent of $J_\\nu(x)$ unless $\\nu$ is an integer.

### Legendre Polynomials
When $n$ is an integer, the Legendre differential equation yields polynomial solutions known as Legendre polynomials, $P_n(x)$. These polynomials are orthogonal on the interval $[-1, 1]$ with respect to the weight function $w(x)=1$:
$$\\int_{-1}^1 P_m(x)P_n(x)dx=\\frac{2}{2n+1}\\delta_{mn}$$
This property allows for the expansion of functions in terms of Legendre polynomials, a technique essential in electromagnetic theory and quantum mechanics (specifically for the angular momentum states of the hydrogen atom).

## Types & Variations

Variations of these equations arise frequently in applied mathematics:

1. **Modified Bessel Equation:** By replacing $x$ with $ix$, one obtains:
   $$x^2y''+xy'-(x^2+\\nu^2)y=0$$
   The solutions are modified Bessel functions $I_\\nu(x)$ and $K_\\nu(x)$, which exhibit exponential growth and decay rather than oscillation.

2. **Associated Legendre Equation:** A generalization of the Legendre equation:
   $$(1-x^2)y''-2xy'+\\left[n(n+1)-\\frac{m^2}{1-x^2}\\right]y=0$$
   This equation governs the behavior of spherical harmonics, which are the angular solutions to the Laplace equation in 3D space.

The following interactive graph allows the exploration of the Bessel function of the first kind $J_\\nu(x)$ as the order parameter $\\nu$ changes. 

\`\`\`interactivegraph
\\sum_{k=0}^{10} \\frac{(-1)^k}{k!\\Gamma(k+n+1)} (x/2)^{2k+n}
params: n=0
range: n=0:3
\`\`\`

In the interactive graph above, observe how the order $n$ (the parameter $\\nu$) shifts the starting position of the function at the origin. As $n$ increases, the function $J_n(x)$ stays closer to zero for larger intervals of $x$ before beginning its oscillation.

## How to Solve

Solving these equations usually requires the power series method or the method of Frobenius.

### Frobenius Method for Bessel's Equation
1. Assume a solution of the form $y(x)=x^r\\sum_{k=0}^\\infty a_k x^k$.
2. Substitute this series into the Bessel equation.
3. Determine the indicial equation by setting the coefficient of the lowest power of $x$ to zero. For the Bessel equation, this yields $r^2-\\nu^2=0$, giving exponents $r=\\pm \\nu$.
4. Determine the recurrence relation for the coefficients $a_k$.
5. Use the recurrence relation to solve for $a_k$ in terms of $a_0$.

### Legendre's Equation
For the Legendre equation, we substitute $y(x)=\\sum_{k=0}^\\infty a_k x^k$. The resulting recurrence relation is:
$$a_{k+2} = \\frac{k(k+1)-n(n+1)}{(k+1)(k+2)}a_k$$
If $n$ is an integer, the series terminates at $k=n$, resulting in a polynomial of degree $n$. These polynomials are scaled such that $P_n(1)=1$.

For non-polynomial cases, one must utilize the second solution, $Q_n(x)$, known as the Legendre function of the second kind. Unlike $P_n(x)$, these solutions are singular at $x=1$ or $x=-1$, which often leads to their rejection in physical problems where the solution must be finite throughout the domain.

The following graph plots $P_0(x)=1$, $P_1(x)=x$, and $P_2(x)=\\frac{1}{2}(3x^2-1)$. These represent the first three Legendre polynomials, showing how they oscillate within the domain $[-1, 1]$.

\`\`\`graph
1
x
0.5*(3*x^2-1)
\`\`\`

## Summary

Bessel and Legendre differential equations are fundamental tools for analyzing systems with cylindrical and spherical symmetries. The Bessel equation, with its oscillatory solutions $J_\\nu(x)$, describes radial distribution in systems like vibrating membranes or wave propagation in cables. The Legendre equation, leading to the orthogonal $P_n(x)$ polynomials, provides the necessary structure for describing potential fields and angular variations in spherical coordinates. Through the Frobenius method and recurrence relations, these equations allow us to bridge the gap between abstract differential calculus and the concrete requirements of physical modeling. Mastering these equations is essential for any practitioner of advanced mathematics or theoretical physics.`;export{e as default};