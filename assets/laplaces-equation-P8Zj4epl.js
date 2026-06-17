var e=`# Laplace's Equation in Rectangular and Polar Coordinates

## Definition

Laplace's equation is a second-order linear partial differential equation named after the French mathematician Pierre-Simon Laplace. It is expressed as the divergence of the gradient of a scalar field $\\phi$. Mathematically, it is defined as:

$$\\nabla^2 \\phi = 0$$

In this context, $\\nabla^2$ is known as the Laplace operator or the Laplacian. When a function $\\phi$ satisfies this equation, it is referred to as a harmonic function. The equation essentially states that the Laplacian of a function is zero everywhere in a given domain, implying that the value at any point is the average of the values in the immediate neighborhood of that point.

In a three-dimensional Euclidean space, the Laplacian can be expressed in different coordinate systems. For two-dimensional problems, which are the focus of this discourse, we primarily consider rectangular (Cartesian) and polar coordinates. In Cartesian coordinates $(x,y)$, the equation takes the form:

$$\\frac{\\partial^2 \\phi}{\\partial x^2} + \\frac{\\partial^2 \\phi}{\\partial y^2} = 0$$

In polar coordinates $(r, \\theta)$, where $x=r\\cos\\theta$ and $y=r\\sin\\theta$, the transformation of the Laplacian results in:

$$\\frac{\\partial^2 \\phi}{\\partial r^2} + \\frac{1}{r}\\frac{\\partial \\phi}{\\partial r} + \\frac{1}{r^2}\\frac{\\partial^2 \\phi}{\\partial \\theta^2} = 0$$

These equations serve as the foundation for solving boundary value problems in physics and engineering, particularly in the study of steady-state heat conduction, fluid dynamics, and electrostatics.

## Key Terminology

To understand Laplace's equation, one must master the terminology used to describe the fields and the coordinate systems involved.

| Term | Definition |
| :--- | :--- |
| **Harmonic Function** | A twice continuously differentiable function $\\phi$ that satisfies $\\nabla^2 \\phi = 0$. |
| **Laplacian Operator** | The divergence of the gradient, $\\nabla \\cdot \\nabla = \\nabla^2$. |
| **Boundary Conditions** | Constraints required to solve the PDE, usually Dirichlet or Neumann conditions. |
| **Steady-State** | A condition where the state of the system does not change over time (e.g., $\\frac{\\partial T}{\\partial t} = 0$). |
| **Separation of Variables** | A technique that assumes the solution is a product of independent functions of each coordinate. |
| **Dirichlet Condition** | Specifying the values of the function $\\phi$ on the boundary of the domain. |
| **Neumann Condition** | Specifying the values of the derivative $\\frac{\\partial \\phi}{\\partial n}$ on the boundary of the domain. |

Understanding these terms is critical because Laplace's equation is almost never solved in isolation; it requires a domain and defined constraints on that domain's boundaries to produce a unique solution.

## Purpose

The primary purpose of Laplace's equation is to model equilibrium states. When a system reaches a state where the net flux through any point is zero, the system is governed by Laplace's equation.

In thermal physics, if we consider a metal plate where the edges are held at fixed temperatures, the temperature distribution $T(x,y)$ inside the plate will eventually reach a steady state. In this state, the rate of heat flowing into a small region is exactly balanced by the rate of heat flowing out. The mathematical result is the heat equation $\\frac{\\partial T}{\\partial t} = \\alpha \\nabla^2 T$ reducing to $\\nabla^2 T = 0$ as $t \\to \\infty$.

In electrostatics, the electric potential $\\phi$ in a source-free region (a region with no electric charge) satisfies Laplace's equation. This allows engineers to calculate the potential distribution between charged conductors. Similarly, in fluid dynamics, the velocity potential of an incompressible, irrotational, and inviscid fluid flow is described by Laplace's equation, which is fundamental to calculating lift on airfoil shapes.

The transition between rectangular and polar coordinates is essential because the geometry of the physical system often dictates the choice of coordinate system. If a problem involves a rectangular plate, Cartesian coordinates are used. If the problem involves circular geometry or cylindrical objects, polar coordinates significantly simplify the boundary conditions, transforming complex numerical problems into manageable analytical ones.

## Fundamental Properties

Laplace's equation possesses several unique mathematical properties that make it a cornerstone of analysis:

1. **Mean Value Property**: A harmonic function $\\phi$ at any point $(x_0, y_0)$ is equal to the average of its values on any circle centered at $(x_0, y_0)$. This reflects the "smoothing" nature of the equation.
2. **Maximum Principle**: A non-constant harmonic function on a bounded domain cannot attain its maximum or minimum value in the interior of the domain. The extrema must occur on the boundaries. This is physically intuitive; if you heat a plate at the edges, the hottest point must be on the edge, not inside the plate.
3. **Uniqueness**: Given the Dirichlet boundary conditions on a bounded domain, the solution to Laplace's equation is unique. If two functions satisfy the equation and the same boundary values, they are identical.
4. **Analyticity**: Harmonic functions are infinitely differentiable (smooth) within their domain, even if the boundary conditions are not smooth. The Laplacian operator effectively "filters" noise and high-frequency variations.

These properties ensure that solutions to Laplace's equation are stable and well-behaved, which is why the equation is so prevalent in numerical analysis and computational physics.

## Types & Variations

While the Laplace equation $\\nabla^2 \\phi = 0$ describes potential fields, it is often a specific case of broader equations:

- **Poisson's Equation**: When there is a source term, the equation becomes $\\nabla^2 \\phi = f(x,y)$. Poisson's equation is used when there are internal charge densities (electrostatics) or internal heat sources (thermal).
- **Time-Dependent Variations**: The Heat Equation $\\frac{\\partial \\phi}{\\partial t} = \\alpha \\nabla^2 \\phi$ and the Wave Equation $\\frac{\\partial^2 \\phi}{\\partial t^2} = c^2 \\nabla^2 \\phi$. Laplace's equation represents the steady-state limit of the heat equation.
- **Helmholtz Equation**: Given by $\\nabla^2 \\phi + k^2 \\phi = 0$, this is often used in wave propagation problems where the time component has been removed via Fourier transform.

Each of these variations shares the same Laplacian operator, meaning that the techniques used to solve Laplace's equation (such as separation of variables or eigenfunction expansion) are highly transferable to these other domains.

## How to Solve

The standard method for solving Laplace's equation is the **Separation of Variables**. 

### Cartesian Coordinates
We assume a solution of the form $\\phi(x,y) = X(x)Y(y)$. Substituting this into the Cartesian Laplace equation:
$$\\frac{\\partial^2 (XY)}{\\partial x^2} + \\frac{\\partial^2 (XY)}{\\partial y^2} = 0 \\implies X''(x)Y(y) + X(x)Y''(y) = 0$$
Dividing by $X(x)Y(y)$:
$$\\frac{X''}{X} = -\\frac{Y''}{Y} = \\lambda$$
where $\\lambda$ is a separation constant. This splits the PDE into two ODEs:
1. $X'' - \\lambda X = 0$
2. $Y'' + \\lambda Y = 0$

By applying boundary conditions (e.g., $X(0)=0, X(L)=0$), one finds the eigenvalues $\\lambda_n$ and the eigenfunctions. The full solution is an infinite sum (Fourier series) of these product solutions.

### Polar Coordinates
Using $\\phi(r, \\theta) = R(r)\\Theta(\\theta)$, we substitute into the polar Laplacian:
$$R''\\Theta + \\frac{1}{r}R'\\Theta + \\frac{1}{r^2}R\\Theta'' = 0$$
Rearranging to separate variables:
$$\\frac{r^2 R'' + r R'}{R} = -\\frac{\\Theta''}{\\Theta} = n^2$$
This leads to the Euler-Cauchy equation for $R(r)$ and a simple harmonic oscillator equation for $\\Theta(\\theta)$. The radial solutions typically take the form $r^n$ and $r^{-n}$, while the angular solutions involve $\\sin(n\\theta)$ and $\\cos(n\\theta)$.

### Interactive Example
Consider a circular domain where the temperature at the edge ($r=R$) is governed by a function $f(\\theta)$. We can explore how different angular frequencies $n$ contribute to the temperature profile inside the circle.

\`\`\`interactivegraph
\\sin(n * x)
params: n=1
range: n=1:5
\`\`\`

The graph above demonstrates the angular dependence of the solution $\\Theta(\\theta) = \\sin(n\\theta)$. As $n$ increases, the number of oscillations around the circle increases, representing more complex boundary temperature distributions. The radial distribution (not shown) would then decay or grow based on the specific power of $r$ associated with that frequency component, ensuring the solution remains finite at the center ($r=0$).

## Summary

Laplace's equation serves as a bridge between pure mathematics and applied physics. By defining the state of equilibrium, it allows for the prediction of temperature, potential, and flow patterns across diverse domains. 

In rectangular coordinates, the reliance on Fourier series allows for the decomposition of complex boundary values into simple sinusoidal components. In polar coordinates, the use of power-law radial functions and angular harmonics provides the necessary toolkit for analyzing circular or radial systems.

The core strength of the equation lies in the properties of harmonic functions. The maximum principle guarantees that we can predict boundaries to control internal values, while the mean value property guarantees stability. As a technical discipline, mastering Laplace's equation requires understanding how to transform boundary conditions into coordinate-appropriate series representations. Whether analyzing the flow of air over a wing in polar space or heat diffusion across a square plate in Cartesian space, the Laplacian operator remains the definitive operator for understanding steady-state behavior in continuous systems.`;export{e as default};