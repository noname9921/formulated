var e=`# Separation of Variables for PDEs

## Definition

The method of Separation of Variables is a powerful analytical technique used to find exact solutions to linear partial differential equations (PDEs). The fundamental premise of this approach is the assumption that a multi-variable solution $u(x,t)$ can be expressed as a product of single-variable functions, such as $u(x,t) = X(x)T(t)$. By substituting this product into the given PDE, one can decouple the partial differential equation into a set of independent ordinary differential equations (ODEs), each involving only one variable. These resulting ODEs are generally easier to solve using standard calculus and linear algebra techniques. Once the general solutions for $X(x)$ and $T(t)$ are obtained, the Principle of Superposition allows for the construction of a general solution as an infinite series, which is then constrained by boundary and initial conditions.

## Key Terminology

To understand the mechanics and scope of separation of variables, it is essential to define the following terms:

| Term | Definition |
|:---|:---|
| Linear PDE | An equation where the unknown function and its derivatives appear to the first power and are not multiplied together. |
| Boundary Conditions | Constraints applied to the solution at the limits of the spatial domain, such as Dirichlet or Neumann conditions. |
| Eigenvalues | Specific values of a parameter $\\lambda$ for which the ODE system has non-trivial solutions. |
| Eigenfunctions | The non-trivial solutions $X_n(x)$ associated with specific eigenvalues $\\lambda_n$. |
| Orthogonality | A property of eigenfunctions where their inner product over a specific interval is zero, facilitating the expansion of arbitrary functions. |
| Principle of Superposition | The property that any linear combination of solutions to a linear homogeneous PDE is also a solution. |

## Purpose

The primary purpose of the separation of variables is to reduce the dimensionality of complex physical problems. In many scientific fields, such as heat conduction, wave propagation, and quantum mechanics, physical laws are described by PDEs. Because solving PDEs directly is often intractable due to the interplay of spatial and temporal variables, separation of variables serves as a bridge. It converts the multidimensional problem into a sequence of one-dimensional problems. This is particularly useful for problems defined on simple geometries, such as rectangles, cylinders, or spheres, where the boundary conditions are coordinate-aligned. Furthermore, the method produces solutions in the form of Fourier series, which provides deep insight into the frequency components or modes of the underlying physical system.

## Fundamental Properties

The validity of the separation of variables relies on several core mathematical properties:

1. **Linearity and Homogeneity:** The PDE must be linear and homogeneous. If a PDE is non-homogeneous, one must first find a particular solution to satisfy the non-homogeneous terms before applying separation of variables to the remaining homogeneous part.
2. **Independence of Variables:** The separation constant, denoted typically by $-\\lambda$ or $k$, serves as the link between the decoupled ODEs. For the equation to hold for all $x$ and $t$, both sides of the separated equation must equate to the same constant.
3. **Completeness of Eigenfunctions:** The set of eigenfunctions obtained from the spatial ODE must form a complete basis for the function space. This ensures that any initial state of the system can be represented as a linear combination of these eigenfunctions, typically via a Fourier series.
4. **Separability of Domains:** The domain must be such that boundary conditions can be applied independently to each spatial dimension. This explains why the method works best on rectangular or polar geometries rather than irregular, non-convex shapes.

## Types & Variations

Separation of variables is not a monolithic technique but varies based on the coordinate system and the type of equation:

* **Cartesian Separation:** Applied to equations like the heat equation $u_t = \\alpha u_{xx}$ or the wave equation $u_{tt} = c^2 u_{xx}$. Here, $u(x,t) = X(x)T(t)$.
* **Polar/Spherical Separation:** Used for the Laplace equation $\\nabla^2 u = 0$ in circular or spherical domains. In these cases, the separation involves functions like Bessel functions or Spherical Harmonics.
* **Generalized Fourier Series:** When the spatial ODE is a Sturm-Liouville problem, the solutions exhibit orthogonality with respect to a weight function $w(x)$, allowing for the generalized expansion:
$$f(x) = \\sum_{n=1}^{\\infty} c_n \\phi_n(x)$$
where $\\phi_n(x)$ are the eigenfunctions of the Sturm-Liouville operator.

The following interactive graph explores how varying parameters in a simple harmonic mode $\\sin(kx) \\cos(\\omega t)$ affects the visualization of a wave profile. As you change $k$ (the spatial frequency) and $\\omega$ (the temporal frequency), notice how the "nodes" of the wave shift.

\`\`\`interactivegraph
\\sin(kx) * \\cos(wt)
params: k=1, w=1
range: k=0.1:5, w=0.1:5
\`\`\`

The graph above demonstrates the interplay of spatial and temporal components. The $k$ parameter determines the number of standing waves within the domain, while the $w$ parameter dictates the oscillation speed of these modes.

## How to Solve

The execution of the method follows a rigorous, multi-step algorithmic approach:

### 1. Separation Assumption
Assume the solution takes the product form $u(x,t) = X(x)T(t)$. For a simple heat equation $u_t = k u_{xx}$, this yields:
$$X(x)T'(t) = k X''(x)T(t)$$
Dividing by $k X(x)T(t)$ leads to:
$$\\frac{T'}{k T} = \\frac{X''}{X} = -\\lambda$$
where $-\\lambda$ is the separation constant.

### 2. Solving the ODEs
We now have two ODEs:
$$X'' + \\lambda X = 0$$
$$T' + \\lambda k T = 0$$
The spatial ODE is a boundary value problem. Depending on the boundary conditions (e.g., $u(0,t)=0$ and $u(L,t)=0$), we find eigenvalues $\\lambda_n = (\\frac{n\\pi}{L})^2$ and eigenfunctions $X_n(x) = \\sin(\\frac{n\\pi x}{L})$.

### 3. Combining Solutions
The solution for $T_n(t)$ is $T_n(t) = e^{-\\lambda_n k t}$. By the principle of superposition, the general solution is:
$$u(x,t) = \\sum_{n=1}^{\\infty} B_n \\sin\\left(\\frac{n\\pi x}{L}\\right) e^{-k(n\\pi/L)^2 t}$$

### 4. Applying Initial Conditions
To find the coefficients $B_n$, use the initial condition $u(x,0) = f(x)$:
$$f(x) = \\sum_{n=1}^{\\infty} B_n \\sin\\left(\\frac{n\\pi x}{L}\\right)$$
Applying the orthogonality of sine functions over $[0, L]$, we obtain:
$$B_n = \\frac{2}{L} \\int_{0}^{L} f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx$$

The static graph below plots the first three modes of a vibrating string: $y_1 = \\sin(\\pi x)$, $y_2 = \\sin(2\\pi x)$, and $y_3 = \\sin(3\\pi x)$. These represent the fundamental frequency and its harmonics.

\`\`\`graph
\\sin(\\pi x)
\\sin(2\\pi x)
\\sin(3\\pi x)
\`\`\`

## Summary

Separation of variables remains the cornerstone of mathematical physics for solving linear PDEs. By transforming multi-dimensional operators into one-dimensional ODEs, it enables the decomposition of complex systems into simpler, discrete modes of behavior. Whether analyzing the cooling of a metal rod, the vibration of a drumhead, or the steady-state temperature distribution in a room, the process of assuming a product solution, identifying eigenvalues, and constructing a series expansion provides both an exact answer and a profound physical interpretation of the system's dynamics. While limited to linear homogeneous equations and specific geometries, its utility in providing exact, interpretable solutions ensures its place as a fundamental tool in the arsenal of any engineer, physicist, or applied mathematician. The power of the method lies not just in the calculation, but in the insight that the whole is truly a sum of its basic, harmonic parts.`;export{e as default};