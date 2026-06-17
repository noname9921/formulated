var e=`# Bessel and Legendre Differential Equations

The study of linear second-order ordinary differential equations with variable coefficients constitutes a cornerstone of mathematical physics. Among these, the Bessel and Legendre differential equations emerge naturally when solving partial differential equations—such as the Laplace, Helmholtz, or wave equations—in coordinate systems featuring symmetry, specifically cylindrical and spherical geometries.

## Definition

The Bessel differential equation of order $\\nu$ is a linear second-order ordinary differential equation given by:

$$x^2 \\frac{d^2y}{dx^2} + x \\frac{dy}{dx} + (x^2 - \\nu^2)y = 0$$

where $\\nu$ is a constant representing the order of the equation. This equation is typically solved for $x > 0$. When $\\nu$ is an integer $n$, it often arises in problems involving periodic boundary conditions.

The Legendre differential equation is defined as:

$$(1 - x^2) \\frac{d^2y}{dx^2} - 2x \\frac{dy}{dx} + l(l+1)y = 0$$

where $l$ is a constant, usually a non-negative integer. This equation is defined on the interval $x \\in [-1, 1]$. It commonly appears when applying the method of separation of variables to the Laplace equation in spherical coordinates.

## Key Terminology

To analyze these equations effectively, one must understand several technical terms:

| Term | Definition |
| :--- | :--- |
| Regular Singular Point | A point where the differential equation's coefficients blow up, but the singularity is weak enough to be handled by the Frobenius method. |
| Frobenius Method | A technique for finding an infinite series solution for linear differential equations near a regular singular point. |
| Bessel Function of the First Kind $J_\\nu(x)$ | A solution to the Bessel equation that remains finite at the origin $x=0$. |
| Bessel Function of the Second Kind $Y_\\nu(x)$ | A solution to the Bessel equation, also known as the Weber function, which diverges at $x=0$. |
| Legendre Polynomial $P_l(x)$ | A specific polynomial solution to the Legendre equation that is finite at $x = \\pm 1$. |
| Associated Legendre Functions | Solutions to the generalized Legendre equation, involving an additional parameter $m$ representing azimuthal dependence. |

## Purpose

These equations are indispensable because they describe how physical fields behave in curved space. The Bessel equation characterizes radial oscillation in cylinders, such as the vibration of a drumhead or the propagation of electromagnetic waves in waveguides. The Legendre equation is central to problems with spherical symmetry, such as gravitational potentials, electrostatic fields, and the quantum mechanical description of the hydrogen atom, where the angular part of the wavefunction is expressed in terms of spherical harmonics (products of Legendre functions and azimuthal terms).

## Fundamental Properties

Bessel functions exhibit oscillatory behavior that decays as $x$ increases. For large $x$, $J_\\nu(x) \\approx \\sqrt{2/(\\pi x)} \\cos(x - \\nu\\pi/2 - \\pi/4)$. They possess an infinite number of roots, which are critical in determining the eigenvalues of vibrating systems.

Legendre polynomials $P_l(x)$ form a complete orthogonal set on the interval $[-1, 1]$ with respect to the weight function $w(x) = 1$. The orthogonality condition is defined by:

$$\\int_{-1}^1 P_l(x)P_k(x)dx = \\frac{2}{2l+1} \\delta_{lk}$$

where $\\delta_{lk}$ is the Kronecker delta. This property allows for the expansion of arbitrary functions in series of Legendre polynomials, analogous to Fourier series expansions.

The interactive graph below demonstrates the effect of the parameter $l$ on the shape of the Legendre polynomials $P_l(x)$. Note how increasing $l$ increases the number of zeros of the polynomial within the interval $[-1, 1]$.

\`\`\`interactivegraph
p_l(x, l)
params: l=1
range: l=0:5
\`\`\`

The graph above plots the Legendre polynomials $P_l(x)$ for different integer values of $l$. Observe how $P_0(x)=1$, $P_1(x)=x$, and $P_2(x)=(3x^2-1)/2$.

## Types & Variations

Variations of these equations often appear in applied contexts:

1. **Modified Bessel Equation**: Obtained by replacing $x$ with $ix$, leading to $x^2y'' + xy' - (x^2 + \\nu^2)y = 0$. Solutions are modified Bessel functions $I_\\nu(x)$ and $K_\\nu(x)$, which represent exponential growth and decay rather than oscillation.
2. **Spherical Bessel Equation**: Arises when solving the Helmholtz equation in spherical coordinates. The solutions are related to standard Bessel functions by the factor $1/\\sqrt{x}$.
3. **Associated Legendre Equation**: Extends the standard Legendre equation to include a term $-m^2/(1-x^2)$ in the differential operator. These are the basis for the angular component of spherical harmonics $Y_l^m(\\theta, \\phi)$.

## How to Solve

### Solving the Bessel Equation
The Bessel equation is solved using the Frobenius method. We assume a solution of the form:

$$y(x) = \\sum_{k=0}^\\infty a_k x^{k+r}$$

Substituting this into the differential equation yields the indicial equation $r^2 - \\nu^2 = 0$, giving roots $r = \\pm \\nu$. For $\\nu \\neq 0$, the two linearly independent solutions are $J_\\nu(x)$ and $J_{-\\nu}(x)$. If $\\nu$ is an integer, $J_{-\\nu}(x) = (-1)^\\nu J_\\nu(x)$, and the second linearly independent solution is defined as the Bessel function of the second kind, $Y_\\nu(x)$.

### Solving the Legendre Equation
The Legendre equation can be solved using power series expansion. Assuming $y(x) = \\sum a_n x^n$ leads to the recurrence relation:

$$a_{n+2} = \\frac{n(n+1) - l(l+1)}{(n+1)(n+2)} a_n$$

If $l$ is a non-negative integer, the series terminates when $n=l$, resulting in a polynomial of degree $l$. These are the Legendre polynomials $P_l(x)$. The second solution, $Q_l(x)$ (Legendre function of the second kind), corresponds to the infinite series and diverges at $x = \\pm 1$.

## Summary

Bessel and Legendre differential equations are the mathematical engines of field theory in curved coordinate systems. Bessel functions provide the radial description for cylindrical symmetry, characterized by oscillating, decaying waves. Legendre polynomials provide the angular description for spherical symmetry, forming an orthogonal basis that allows the decomposition of potential and wave fields into modes. Mastery of these equations requires understanding their power series solutions, their singular behaviors at boundaries, and their essential roles in the eigenfunction expansions of physical systems. Their study bridges the gap between pure abstract analysis and the practical calculation of physical phenomena.`;export{e as default};