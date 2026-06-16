var e=`# Cauchy-Euler Equations

## Definition

A Cauchy-Euler equation is a linear homogeneous ordinary differential equation (ODE) with variable coefficients of a very specific form. Named after mathematicians Augustin-Louis Cauchy and Leonhard Euler, this equation is characterized by the property that the power of the independent variable $x$ matches the order of the derivative acting upon the dependent variable $y(x)$.

The general form of an $n$-th order Cauchy-Euler equation is given by:
$$a_n x^n \\frac{d^n y}{d x^n} + a_{n-1} x^{n-1} \\frac{d^{n-1} y}{d x^{n-1}} + \\dots + a_1 x \\frac{d y}{d x} + a_0 y = f(x)$$

For the homogeneous case, $f(x) = 0$. The coefficients $a_0, a_1, \\dots, a_n$ are typically real constants. The most common application appears in the second-order case, which takes the form:
$$a x^2 \\frac{d^2 y}{d x^2} + b x \\frac{d y}{d x} + c y = 0$$

Unlike constant-coefficient equations, where the solutions are exponential functions, Cauchy-Euler equations possess solutions that are power functions of $x$. This structure arises frequently in physical problems involving radial symmetry, such as heat conduction in a cylinder or potential flow in a sphere.

## Key Terminology

- **Equidimensional Equation:** An alternative name for the Cauchy-Euler equation. The term refers to the fact that each term in the equation has the same "dimension" or degree regarding the scaling of $x$.
- **Characteristic Equation (Indicial Equation):** An algebraic polynomial equation derived by substituting a trial solution of the form $y = x^m$ into the differential equation, which allows for the determination of the exponent $m$.
- **Independent Variable:** In the standard form, this is $x$. It is assumed that $x > 0$ for the power function $x^m$ to be well-defined for non-integer values of $m$.
- **Dependent Variable:** This is $y(x)$, the function to be determined.
- **Basis of Solutions:** A set of linearly independent functions that span the solution space of the ODE. For an $n$-th order equation, $n$ linearly independent solutions are required.

## Purpose

The primary purpose of studying Cauchy-Euler equations is to solve differential equations where coefficients vary with the independent variable in a way that scales consistently with the derivative order. In standard constant-coefficient ODEs, the solution behavior is determined by the roots of a characteristic polynomial. In Cauchy-Euler systems, the behavior is determined by how the function grows or decays as a power of $x$.

These equations act as a bridge between simple linear systems and more complex variable-coefficient systems (such as Bessel or Legendre equations). They serve as the standard model for boundary value problems in polar, cylindrical, or spherical coordinates, where the variable $r$ (representing distance) often appears in exactly the pattern $r^n y^{(n)}$.

## Fundamental Properties

1. **Scaling Invariance:** If $y(x)$ is a solution, then $y(kx)$ is also a solution to the homogeneous equation. This confirms the "equidimensional" nature of the system.
2. **Singularity:** The point $x = 0$ is a singular point for the differential equation. Because the lead coefficient $ax^2$ vanishes at $x = 0$, the existence and uniqueness theorem for linear ODEs does not guarantee a solution defined across the origin. Consequently, the domain is restricted to $(0, \\infty)$ or $(-\\infty, 0)$.
3. **Power Function Basis:** Unlike constant-coefficient equations where solutions involve $e^{mx}$, the solutions here involve $x^m$. If $m$ is complex, the solutions involve oscillating power functions of the form $x^{\\alpha}\\cos(\\beta \\ln x)$ and $x^{\\alpha}\\sin(\\beta \\ln x)$, derived using Euler's formula.
4. **Reduction of Order:** A Cauchy-Euler equation can be transformed into a constant-coefficient ODE using the substitution $x = e^t$ (or $t = \\ln x$). This transformation maps the singular point at $x=0$ to $t \\to -\\infty$.

## Types & Variations

Cauchy-Euler equations can be classified by the roots of their indicial equation. Consider the second-order equation $ax^2y'' + bxy' + cy = 0$. By substituting $y = x^m$, we obtain the indicial equation:
$$am(m - 1) + bm + c = 0$$
Or simplified:
$$am^2 + (b-a)m + c = 0$$

The solutions depend on the discriminant $D = (b-a)^2 - 4ac$:

| Case | Nature of Roots | General Solution Structure |
| :--- | :--- | :--- |
| $D > 0$ | Two distinct real roots $m_1, m_2$ | $y = c_1 x^{m_1} + c_2 x^{m_2}$ |
| $D = 0$ | One repeated real root $m$ | $y = c_1 x^m + c_2 x^m \\ln x$ |
| $D < 0$ | Complex conjugate roots $\\alpha \\pm i\\beta$ | $y = x^{\\alpha} [c_1 \\cos(\\beta \\ln x) + c_2 \\sin(\\beta \\ln x)]$ |

The following interactive graph allows for the exploration of how the roots of the indicial equation affect the solution shape for the real, distinct root case.

\`\`\`interactivegraph
c1*x^m1 + c2*x^m2
params: c1=1, c2=1, m1=1, m2=2
range: c1=-2:2, c2=-2:2, m1=-2:2, m2=-2:2
\`\`\`

The user should observe how changing $m_1$ and $m_2$ alters the growth rate of the function, while changing $c_1$ and $c_2$ scales the amplitude of the individual components.

## How to Solve

To solve a Cauchy-Euler equation of order two, follow these systematic steps:

1. **Verify the Form:** Ensure the equation is in the form $ax^2y'' + bxy' + cy = 0$. If the coefficients are not simple powers, ensure they scale proportionately.
2. **Form the Indicial Equation:** Assume $y = x^m$. Calculate $y' = mx^{m-1}$ and $y'' = m(m-1)x^{m-2}$. Substitute these into the ODE. The $x^m$ terms will factor out.
3. **Solve for $m$:** Use the quadratic formula to find the roots of $am^2 + (b-a)m + c = 0$.
4. **Construct the Solution:** Apply the appropriate case formula based on the discriminant.
   - For distinct roots $m_1, m_2$, the basis is $\\{x^{m_1}, x^{m_2}\\}$.
   - For repeated roots $m$, the basis is $\\{x^m, x^m \\ln x\\}$.
   - For complex roots $m = \\alpha \\pm i\\beta$, use the identity $x^{i\\beta} = e^{i\\beta \\ln x} = \\cos(\\beta \\ln x) + i\\sin(\\beta \\ln x)$ to extract the real basis $\\{x^\\alpha \\cos(\\beta \\ln x), x^\\alpha \\sin(\\beta \\ln x)\\}$.

### Example Derivation
Consider the equation $x^2y'' - 3xy' + 3y = 0$.
Substituting $y = x^m$:
$x^2(m(m-1)x^{m-2}) - 3x(mx^{m-1}) + 3x^m = 0$
$m(m-1) - 3m + 3 = 0$
$m^2 - 4m + 3 = 0$
$(m-3)(m-1) = 0$
The roots are $m_1 = 3, m_2 = 1$. The general solution is $y = c_1 x^3 + c_2 x$.

The graph below plots $f(x) = x^3$ and $g(x) = x$ to illustrate these individual basis functions.

\`\`\`graph
x^3
x
\`\`\`

## Summary

The Cauchy-Euler equation is a vital tool in the study of differential equations, specifically for problems involving radial symmetry. By converting variable-coefficient equations into algebraic indicial equations, we can find closed-form solutions involving power functions. Key takeaways include:
- The transformation $x=e^t$ maps the Cauchy-Euler equation into a constant-coefficient ODE, highlighting the relationship between exponential and power-law growth.
- The behavior of the solution is dictated by the roots of the indicial equation, with three distinct behaviors (distinct real, repeated real, and complex) analogous to constant-coefficient systems.
- The restriction $x > 0$ is a standard constraint to ensure the validity of $x^m$ as a real-valued function.
- These equations are foundational for solving higher-order physical equations like Laplace's equation in non-Cartesian coordinate systems.`;export{e as default};