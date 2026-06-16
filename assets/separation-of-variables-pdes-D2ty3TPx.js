var e=`# Separation of Variables for PDEs

## Definition

The method of Separation of Variables is a powerful analytical technique used to solve linear partial differential equations (PDEs) by transforming them into a system of decoupled ordinary differential equations (ODEs). In its most fundamental form, it assumes that a solution to a PDE with multiple independent variables can be expressed as a product of single-variable functions. If we have a PDE for a function $u(x, t)$, the method assumes the solution takes the form $u(x, t) = X(x)T(t)$.

By substituting this ansatz into the original PDE, the variables are "separated" onto opposite sides of the equation. Because each side depends on a different independent variable yet must equal the other, both sides must be equal to a common separation constant, typically denoted as $-\\lambda$. This converts a single PDE into a set of independent ODEs, which are generally easier to solve. The final solution is then constructed as a linear combination of these product solutions, satisfying the specified boundary and initial conditions through the application of Fourier series or generalized orthogonal expansions.

## Key Terminology

To understand this method, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| Ansatz | An initial mathematical assumption or educated guess used to find a solution. |
| Separation Constant | A constant $\\lambda$ used to equate two independent expressions involving different variables. |
| Eigenvalue Problem | An equation of the form $L[X] = \\lambda X$, where $L$ is a differential operator. |
| Boundary Conditions | Constraints applied to the spatial variables (e.g., Dirichlet or Neumann conditions). |
| Superposition Principle | The property that any linear combination of solutions to a linear PDE is also a solution. |
| Orthogonality | A property of eigenfunctions ensuring that the integral of their product over a domain is zero. |
| Fourier Series | A way to represent a function as an infinite sum of sine and cosine terms. |

## Purpose

The primary objective of the Separation of Variables is to reduce the dimensionality of a mathematical problem. PDEs are notoriously difficult to solve analytically, as they involve derivatives with respect to multiple variables simultaneously. By isolating these variables, we can leverage the robust theory of linear ODEs.

This method is specifically designed for linear PDEs defined on regular domains, such as rectangles, circles, or spheres. It provides the mechanism to satisfy complex initial conditions by decomposing them into a series of fundamental modes (eigenfunctions). These modes represent the "natural" behavior of the system, such as standing waves on a string or heat distribution in a rod. The method is foundational for physics and engineering, serving as the gateway to understanding heat conduction, wave propagation, and potential theory.

## Fundamental Properties

The validity of the separation of variables rests on several core mathematical properties:

1. **Linearity**: The PDE must be linear and homogeneous, such that $L[c_1u_1 + c_2u_2] = c_1L[u_1] + c_2L[u_2]$. This ensures that the principle of superposition holds, allowing us to sum individual product solutions to satisfy arbitrary initial conditions.
2. **Eigenvalue Spectrum**: The resulting spatial ODEs typically constitute a Sturm-Liouville problem. These problems are guaranteed to have a countably infinite set of eigenvalues $\\lambda_n$ and corresponding orthogonal eigenfunctions $\\phi_n(x)$.
3. **Completeness**: The set of eigenfunctions must be complete, meaning that any piecewise smooth function in the spatial domain can be represented as an infinite series of these eigenfunctions. This is the bedrock of Fourier analysis.
4. **Consistency**: The separation constant $\\lambda$ must be the same for both the spatial and temporal equations to maintain the equality $X''(x)/X(x) = T'(t)/(kT(t)) = -\\lambda$.

## Types & Variations

Separation of variables can be applied to various coordinate systems and PDE types:

### Cartesian Coordinates
The most common application occurs in rectangular domains. For the heat equation $u_t = k u_{xx}$, we assume $u(x, t) = X(x)T(t)$, leading to $X'' + \\lambda X = 0$ and $T' + k\\lambda T = 0$.

### Polar and Cylindrical Coordinates
When dealing with circular or cylindrical domains, the Laplacian operator $\\nabla^2$ is expanded into polar terms. The assumption $u(r, \\theta) = R(r)\\Theta(\\theta)$ leads to Bessel's differential equation in $r$ and a periodic ODE in $\\theta$.

### Spherical Coordinates
For spherical symmetry, $u(r, \\theta, \\phi) = R(r)\\Theta(\\theta)\\Phi(\\phi)$. This separation involves Legendre polynomials and associated Legendre functions, which are critical in quantum mechanics and electrostatics.

### Non-homogeneous Variations
If the PDE is non-homogeneous (e.g., $u_t = k u_{xx} + f(x, t)$), the method is often combined with the method of eigenfunction expansion, where the forcing term $f(x, t)$ is also expanded into the basis of the spatial eigenfunctions.

## How to Solve

To solve a linear PDE using this method, follow this systematic algorithmic approach:

### 1. Separation of Variables
Assume a product solution $u(x, t) = X(x)T(t)$. Substitute this into the PDE. For a heat equation $u_t = \\alpha u_{xx}$, we obtain:
$$X(x)T'(t) = \\alpha X''(x)T(t)$$
Divide by $\\alpha X(x)T(t)$ to isolate the variables:
$$\\frac{T'(t)}{\\alpha T(t)} = \\frac{X''(x)}{X(x)} = -\\lambda$$

### 2. Solve the Eigenvalue Problem
The spatial ODE $X''(x) + \\lambda X(x) = 0$ must satisfy the boundary conditions (e.g., $u(0, t) = 0$ and $u(L, t) = 0$). This identifies the discrete eigenvalues $\\lambda_n$ and eigenfunctions $\\phi_n(x)$.
For example, if $\\phi(0) = \\phi(L) = 0$, the solutions are $\\lambda_n = (n\\pi/L)^2$ and $X_n(x) = \\sin(\\frac{n\\pi x}{L})$.

### 3. Solve the Temporal ODE
Substitute each $\\lambda_n$ back into the temporal equation:
$$T_n'(t) + \\alpha \\lambda_n T_n(t) = 0$$
The solution is of the form $T_n(t) = C_n e^{-\\alpha \\lambda_n t}$.

### 4. Construct the General Solution
By the superposition principle, the total solution is the sum of all product solutions:
$$u(x, t) = \\sum_{n=1}^{\\infty} A_n \\phi_n(x) T_n(t)$$

### 5. Satisfy Initial Conditions
Use the initial condition $u(x, 0) = f(x)$ and the orthogonality of eigenfunctions to determine the coefficients $A_n$:
$$A_n = \\frac{\\int_0^L f(x) \\phi_n(x) dx}{\\int_0^L \\phi_n^2(x) dx}$$

The interactive graph below allows for the exploration of the first three fundamental modes for a vibrating string, where $a$ represents the harmonic index.

\`\`\`interactivegraph
\\sin(ax\\pi)
params: a=1
range: a=1:3
\`\`\`

The graph above plots the standing wave patterns $f(x) = \\sin(ax\\pi)$ for $x \\in [0, 1]$. By adjusting the slider $a$, one observes how higher harmonics increase the number of nodes in the solution, reflecting the discrete nature of the eigenvalue spectrum.

## Summary

Separation of variables remains the cornerstone of theoretical physics and applied mathematics. It provides a structured, logical pathway from a complex, multi-dimensional partial differential equation to a manageable set of ordinary differential equations. 

The strength of the method lies in its ability to reveal the underlying "modes" of a system. Whether calculating the temperature gradient in a metal plate or predicting the oscillation of a bridge, the method decomposes the motion or field into fundamental building blocks. While modern computational methods like Finite Element Analysis (FEA) are used for complex, irregular geometries, Separation of Variables provides the essential theoretical insight needed to understand the physical phenomena being modeled. It enforces the requirement for boundary consistency and mathematical elegance, ensuring that solutions respect the physical constraints of the problem domain. By transforming global PDE behavior into local ODE solutions, it creates a bridge between simple differential relations and the global, observed behavior of physical fields.`;export{e as default};