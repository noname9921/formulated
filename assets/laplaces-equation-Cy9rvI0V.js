var e=`# Laplace's Equation in Rectangular and Polar Coordinates

## Definition

Laplace's equation is a second-order linear partial differential equation (PDE) named after Pierre-Simon Laplace. It describes a wide array of physical phenomena, including gravitational potential, electrostatic potential, and steady-state heat distribution. A function $\\phi$ is said to be harmonic if it satisfies Laplace's equation in a given domain.

In its most general vector calculus form, Laplace's equation is defined as:
$$\\nabla^2\\phi=0$$
where $\\nabla^2$ is the Laplace operator or Laplacian. The Laplacian represents the divergence of the gradient of a scalar function. Physically, it measures the difference between the average value of a function in a small region surrounding a point and the value at the point itself.

In a three-dimensional rectangular coordinate system $(x,y,z)$, the equation expands to:
$$\\frac{\\partial^2\\phi}{\\partial x^2}+\\frac{\\partial^2\\phi}{\\partial y^2}+\\frac{\\partial^2\\phi}{\\partial z^2}=0$$
For two-dimensional problems in rectangular coordinates, the $z$ term is omitted, resulting in:
$$\\frac{\\partial^2\\phi}{\\partial x^2}+\\frac{\\partial^2\\phi}{\\partial y^2}=0$$
In two-dimensional polar coordinates $(r,\\theta)$, where $x=r\\cos\\theta$ and $y=r\\sin\\theta$, the transformation of the Laplacian requires the chain rule, yielding:
$$\\frac{\\partial^2\\phi}{\\partial r^2}+\\frac{1}{r}\\frac{\\partial\\phi}{\\partial r}+\\frac{1}{r^2}\\frac{\\partial^2\\phi}{\\partial \\theta^2}=0$$

## Key Terminology

- Harmonic Function: Any twice-differentiable function $\\phi$ that satisfies $\\nabla^2\\phi=0$.
- Dirichlet Boundary Condition: A type of boundary condition where the value of the function $\\phi$ is specified on the boundary of the domain.
- Neumann Boundary Condition: A type of boundary condition where the normal derivative of the function $\\frac{\\partial\\phi}{\\partial n}$ is specified on the boundary.
- Steady-State: A condition in which the variables defining a system, such as temperature, do not change over time.
- Separation of Variables: A mathematical technique used to solve PDEs by assuming the solution can be factored into products of single-variable functions.
- Poisson's Equation: A generalization of Laplace's equation defined as $\\nabla^2\\phi=f$, where $f$ is a non-zero source term.

## Purpose

The primary purpose of Laplace's equation is to model equilibrium states in physical systems. Because it represents a condition of "no source or sink" within the domain, it is fundamental to understanding fields that reach a state of minimum energy or maximum stability.

In fluid dynamics, it models the velocity potential of an incompressible, irrotational flow. In electromagnetism, it governs the electric potential in charge-free regions. In heat transfer, it describes the temperature distribution of an object once the initial transients have died away, leaving only the steady-state temperature profile. The study of Laplace's equation is essential for engineering and physics because it allows for the prediction of behavior in complex geometries through boundary value problems.

## Fundamental Properties

Laplace's equation possesses several critical properties that distinguish it from other PDEs:

1. Mean Value Property: For any point in the domain of a harmonic function, the value of the function at that point is equal to the average of the function's values over any sphere (or circle in 2D) centered at that point, provided the sphere is contained within the domain.
2. Maximum Principle: A non-constant harmonic function cannot have a local maximum or local minimum within its domain. Consequently, the maximum and minimum values of $\\phi$ must occur on the boundaries of the domain.
3. Uniqueness: Given Dirichlet boundary conditions on a bounded domain, the solution to Laplace's equation is unique. This is vital for physical modeling, as it ensures that physical states are determined solely by their boundary influences.
4. Smoothness: Harmonic functions are infinitely differentiable ($C^\\infty$) within the interior of their domain, even if the boundary conditions are not smooth.

## Types & Variations

Laplace's equation is classified based on the coordinate system used and the domain's geometry.

| Coordinate System | Form | Primary Application |
| :--- | :--- | :--- |
| Rectangular | $\\phi_{xx} + \\phi_{yy} = 0$ | Plates, rectangular boxes, heat sinks |
| Polar | $\\phi_{rr} + \\frac{1}{r}\\phi_r + \\frac{1}{r^2}\\phi_{\\theta\\theta} = 0$ | Cylinders, circular disks, wedges |
| Spherical | $\\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2\\frac{\\partial\\phi}{\\partial r}) + \\dots$ | Planets, stars, charged spheres |

Variations include the Poisson equation ($\\nabla^2\\phi=f$), which accounts for internal sources, and the Helmholtz equation ($\\nabla^2\\phi+k^2\\phi=0$), which accounts for wave propagation phenomena.

## How to Solve

Solving Laplace's equation typically involves the technique of separation of variables.

### Solving in Rectangular Coordinates
For a rectangle of dimensions $a \\times b$, we assume $\\phi(x,y)=X(x)Y(y)$. Substituting this into $\\phi_{xx} + \\phi_{yy} = 0$:
$$X''(x)Y(y) + X(x)Y''(y) = 0 \\implies \\frac{X''}{X} = -\\frac{Y''}{Y} = -\\lambda$$
This yields two ordinary differential equations:
1. $X'' + \\lambda X = 0$
2. $Y'' - \\lambda Y = 0$
By applying boundary conditions (e.g., $\\phi=0$ at $x=0,a$), we determine eigenvalues $\\lambda_n$ and eigenfunctions $X_n(x)$. The final solution is expressed as a Fourier series sum:
$$\\phi(x,y) = \\sum_{n=1}^{\\infty} [A_n \\sinh(\\frac{n\\pi y}{a}) + B_n \\cosh(\\frac{n\\pi y}{a})] \\sin(\\frac{n\\pi x}{a})$$

### Solving in Polar Coordinates
For a circular domain of radius $a$, we assume $\\phi(r,\\theta)=R(r)\\Theta(\\theta)$. The equation becomes:
$$r^2 R'' + rR' + \\frac{R\\Theta''}{\\Theta} = 0$$
This leads to the Cauchy-Euler equation for $R(r)$ and a trigonometric equation for $\\Theta(\\theta)$. Given the periodicity of $\\theta$ (i.e., $\\phi(r, \\theta) = \\phi(r, \\theta + 2\\pi)$), the solution involves terms of $r^n$ and $\\cos(n\\theta)$ or $\\sin(n\\theta)$. The general solution in a disk is:
$$\\phi(r,\\theta) = a_0 + \\sum_{n=1}^{\\infty} r^n (a_n \\cos(n\\theta) + b_n \\sin(n\\theta))$$

Below is an interactive graph demonstrating how the number of terms (n) in a harmonic expansion influences the shape of a potential distribution in a 1D slice of a 2D system.

\`\`\`interactivegraph
\\sin(nx)
params: n=1
range: n=1:10
\`\`\`

The graph plots the function $f(x) = \\sin(nx)$, representing the spatial harmonics that constitute the solutions to Laplace's equation. Adjusting $n$ demonstrates how higher-order harmonics oscillate more rapidly, allowing for the construction of complex boundary profiles through superposition.

## Summary

Laplace's equation serves as the cornerstone for analyzing steady-state potentials in physics. Its mathematical elegance, characterized by the mean value property and the maximum principle, allows engineers and scientists to derive analytic solutions for complex boundary value problems. Whether working in rectangular coordinates for grid-based systems or polar coordinates for rotational symmetry, the technique of separation of variables remains the standard method for decomposition. Understanding these fundamental coordinate systems and the behavior of harmonic functions enables the accurate modeling of thermal, electrostatic, and fluid systems, providing a robust framework for theoretical and applied physics.`;export{e as default};