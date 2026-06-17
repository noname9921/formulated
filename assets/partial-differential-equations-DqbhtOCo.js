var e=`# Introduction to Partial Differential Equations

Partial Differential Equations (PDEs) constitute the mathematical language used to describe the evolution of physical systems in space and time. Unlike Ordinary Differential Equations (ODEs), which involve functions of a single variable, PDEs involve functions of multiple variables and their partial derivatives. These equations are foundational to physics, engineering, quantitative finance, and biology, providing the framework to model everything from heat dissipation to the propagation of quantum wavefunctions.

## Definition

A Partial Differential Equation is an equation involving an unknown function $u(x_1, x_2, \\dots, x_n)$ and its partial derivatives with respect to these independent variables. Mathematically, a PDE of order $k$ is expressed in the general form:

$$F(x_1, \\dots, x_n, u, \\frac{\\partial u}{\\partial x_1}, \\dots, \\frac{\\partial^k u}{\\partial x_n^k}) = 0$$

If the equation is linear in $u$ and all its derivatives, it is called a linear PDE. If the coefficients depend on $u$ or its derivatives, the equation is nonlinear. The dimension of the PDE is defined by the number of independent variables, while the order is determined by the highest derivative present in the expression.

## Key Terminology

To analyze PDEs, one must understand several foundational terms that classify these objects:

- **Order:** The highest derivative present in the equation. For example, the Heat Equation involves a first-order time derivative and a second-order spatial derivative, making it a second-order PDE.
- **Linearity:** An equation is linear if the operator acting on $u$ satisfies the superposition principle. If $u_1$ and $u_2$ are solutions, then $c_1u_1 + c_2u_2$ is also a solution.
- **Homogeneity:** An equation is homogeneous if every term contains the unknown function $u$ or one of its derivatives. If there is a term independent of $u$ (a "source" term), the equation is non-homogeneous.
- **Boundary and Initial Conditions:** Since PDEs involve spatial domains, the behavior of the system must be defined at the domain's boundary (e.g., Dirichlet or Neumann conditions). Initial conditions define the state of the system at time $t=0$.

## Purpose

The primary purpose of PDEs is to describe continuous fields. While ODEs track the trajectory of discrete particles, PDEs track the state of a continuum. In fluid dynamics, the Navier-Stokes equations describe the velocity and pressure fields of a fluid. In electromagnetism, Maxwell’s equations describe how electric and magnetic fields propagate through space. 

By solving a PDE, we obtain a global solution that describes the state of a system at any coordinate within its domain. This allows for predictive modeling: given the current distribution of temperature in a rod, the Heat Equation predicts its distribution at any future time $t > 0$.

## Fundamental Properties

PDEs are generally classified into three categories based on the discriminant of their characteristic equations, which dictates the nature of their solutions:

| Type | Discriminant Condition | Physical Analogy |
| :--- | :--- | :--- |
| Elliptic | $b^2 - 4ac < 0$ | Equilibrium states, steady-state heat |
| Parabolic | $b^2 - 4ac = 0$ | Diffusion processes, time-evolution |
| Hyperbolic | $b^2 - 4ac > 0$ | Wave propagation, vibrations |

Elliptic equations, such as Laplace’s equation $\\nabla^2 u = 0$, represent steady-state processes where the solution at any point depends on the entire boundary. Parabolic equations, like the heat equation $u_t = k\\nabla^2 u$, exhibit "smoothing" behavior, where initial irregularities in the data are dampened over time. Hyperbolic equations, such as the wave equation $u_{tt} = c^2 \\nabla^2 u$, propagate signals at finite speeds, preserving the features of the initial data as they travel.

The following static graph illustrates the spatial distribution of a steady-state solution. The graph plots $f(x) = \\sin(x)e^{-0.1x}$, which represents the dampening of an initial wave perturbation over a spatial domain $x \\in [0, 10]$.

\`\`\`graph
\\sin(x) * \\exp(-0.1 * x)
\`\`\`

## Types & Variations

### The Laplace Equation
Represented as $\\Delta u = 0$, this elliptic PDE describes potential fields in physics, such as gravitational or electrostatic potentials in a vacuum. It is the hallmark of steady-state systems.

### The Heat Equation
The classic parabolic PDE $u_t = \\alpha \\Delta u$ describes the diffusion of heat. The parameter $\\alpha$ (thermal diffusivity) dictates how quickly temperature gradients are smoothed out over time.

### The Wave Equation
The hyperbolic PDE $u_{tt} = c^2 \\Delta u$ describes the propagation of waves. The constant $c$ represents the wave speed. This equation is fundamental to acoustics, optics, and seismology.

To observe how the wave speed parameter affects the curvature of a harmonic wave, we use the interactive graph below. The parameter $c$ adjusts the spatial frequency of the wave at a fixed time slice.

\`\`\`interactivegraph
\\sin(c * x)
params: c=1
range: c=0.5:3
\`\`\`

The graph above plots $f(x) = \\sin(cx)$, illustrating how varying the parameter $c$ (wave speed) alters the spatial frequency. As $c$ increases, the frequency increases, representing a wave with shorter spatial intervals between peaks.

## How to Solve

Solving PDEs is significantly more complex than solving ODEs, as there is no universal algorithm for finding exact solutions. Analytical methods include:

1. **Separation of Variables:** One assumes the solution can be written as a product of single-variable functions $u(x,t) = X(x)T(t)$. This reduces the PDE into a set of coupled ODEs.
2. **Integral Transforms:** Applying the Fourier or Laplace transform converts derivatives into algebraic multiplications, transforming the PDE into an algebraic equation in the frequency domain.
3. **Method of Characteristics:** Specifically useful for first-order and hyperbolic PDEs, this method reduces the PDE to a system of ODEs along specific curves called "characteristics."
4. **Numerical Methods:** For complex geometries where analytical solutions are impossible, discretization techniques like Finite Difference Methods (FDM), Finite Element Methods (FEM), or Spectral Methods are employed to compute approximate solutions on a computational grid.

## Summary

Partial Differential Equations are the essential mathematical tools for describing phenomena that vary continuously across space and time. From the elliptic equations that govern static fields, to the parabolic equations that model diffusive processes, to the hyperbolic equations that describe wave motion, PDEs encompass the core of physical reality. While solving them requires sophisticated analytical or numerical techniques, the fundamental properties—order, linearity, and classification—provide a systematic framework for understanding how systems behave, evolve, and reach equilibrium. As computational power grows, the ability to solve increasingly complex nonlinear PDEs continues to push the boundaries of science and engineering.`;export{e as default};