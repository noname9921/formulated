var e=`# The One-Dimensional Heat Equation

The heat equation is a parabolic partial differential equation (PDE) that describes the distribution of heat (or variation in temperature) in a given region over time. In its one-dimensional form, it models the temperature profile along a thin rod or wire, assuming that the material is homogeneous and that heat flow occurs only along the longitudinal axis.

## Definition

The one-dimensional heat equation is defined as:

$$\\frac{\\partial u}{\\partial t} = \\alpha\\frac{\\partial^2 u}{\\partial x^2}$$

In this equation:
- $u(x, t)$ represents the temperature at position $x$ and time $t$.
- $\\alpha$ (alpha) is the thermal diffusivity of the material, a positive constant defined by $\\alpha = \\frac{k}{\\rho c_p}$, where $k$ is the thermal conductivity, $\\rho$ is the mass density, and $c_p$ is the specific heat capacity.
- $\\frac{\\partial u}{\\partial t}$ is the rate of change of temperature with respect to time.
- $\\frac{\\partial^2 u}{\\partial x^2}$ represents the spatial curvature (concavity) of the temperature profile.

The equation essentially states that the rate of change of temperature at any point is proportional to the second spatial derivative of temperature at that point. If the temperature profile is concave down, the temperature at that point will increase; if it is concave up, it will decrease.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Thermal Diffusivity ($\\alpha$) | A material-specific constant measuring the rate of heat transfer from the hot side to the cold side. |
| Boundary Conditions | Constraints applied to the ends of the domain (e.g., $x=0$ and $x=L$). |
| Initial Condition | The state of the system at time $t=0$, typically $u(x, 0) = f(x)$. |
| Dirichlet Conditions | A type of boundary condition specifying the temperature value at the boundaries. |
| Neumann Conditions | A type of boundary condition specifying the heat flux (derivative) at the boundaries. |
| Steady State | The condition reached as $t \\to \\infty$ where $\\frac{\\partial u}{\\partial t} = 0$. |

## Purpose

The primary purpose of the one-dimensional heat equation is to model transient heat conduction in solids. Beyond its literal interpretation in thermodynamics, the equation serves as a foundational model in mathematical physics and engineering for any diffusive process. It explains how non-equilibrium systems evolve toward equilibrium over time. By solving this equation, scientists can predict the cooling rate of components, the propagation of thermal gradients in structural engineering, and even behaviors in finance (such as Black-Scholes modeling of option pricing) and image processing (as a method for Gaussian blurring).

## Fundamental Properties

The heat equation possesses several critical mathematical properties that define its behavior:

1. **Smoothing Property:** The heat equation is infinitely smoothing. Even if the initial condition $f(x)$ is discontinuous (e.g., a step function), the solution $u(x, t)$ becomes smooth (analytic) for any $t > 0$. This reflects the physical reality that sharp temperature gradients are rapidly diffused.
2. **Maximum Principle:** In the absence of internal heat sources, the maximum and minimum temperatures in a closed domain must occur either at the boundaries or at the initial time $t=0$. The temperature cannot spontaneously become hotter than the maximum initial boundary temperature.
3. **Irreversibility:** The process is time-irreversible. Unlike the wave equation, which is time-symmetric and allows for the reversal of movement, the heat equation dissipates information. Given $u(x, t)$ at a later time, one cannot uniquely determine the initial state $u(x, 0)$ because high-frequency spatial information is lost during the diffusion process.
4. **Linearity:** The equation is a linear homogeneous PDE. If $u_1$ and $u_2$ are solutions, then any linear combination $c_1u_1 + c_2u_2$ is also a solution, which allows for the use of the principle of superposition.

Below is an interactive graph demonstrating the effect of the diffusion parameter $\\alpha$ and time $t$ on an initial Gaussian temperature distribution. The reader should observe how the peak of the distribution lowers and spreads out as time progresses or as diffusivity increases.

\`\`\`interactivegraph
\\frac{1}{\\sqrt{4\\pi \\alpha t}} e^{-\\frac{x^2}{4\\alpha t}}
params: \\alpha=0.5, t=0.1
range: \\alpha=0.1:2.0, t=0.01:2.0
\`\`\`

## Types & Variations

While the fundamental heat equation assumes constant properties and no internal sources, real-world scenarios often require variations:

- **Non-Homogeneous Heat Equation:** Includes an internal heat source term $Q(x, t)$:
  $$\\frac{\\partial u}{\\partial t} = \\alpha\\frac{\\partial^2 u}{\\partial x^2} + Q(x, t)$$
- **Variable Coefficients:** If thermal conductivity varies with position, the equation becomes:
  $$\\frac{\\partial u}{\\partial t} = \\frac{1}{\\rho c_p} \\frac{\\partial}{\\partial x} \\left( k(x) \\frac{\\partial u}{\\partial x} \\right)$$
- **Convection-Diffusion Equation:** If the medium is moving, an advection term is added:
  $$\\frac{\\partial u}{\\partial t} + v \\frac{\\partial u}{\\partial x} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$$
  where $v$ is the velocity of the fluid or material medium.

## How to Solve

The most common analytical method for solving the one-dimensional heat equation is **Separation of Variables**. 

### Step 1: Assumption
We assume that the solution $u(x, t)$ can be expressed as a product of two single-variable functions:
$$u(x, t) = X(x)T(t)$$

### Step 2: Substitution
Substituting this into the heat equation gives:
$$X(x)T'(t) = \\alpha X''(x)T(t)$$
Rearranging to isolate variables on opposite sides:
$$\\frac{T'(t)}{\\alpha T(t)} = \\frac{X''(x)}{X(x)} = -\\lambda$$
where $-\\lambda$ is a separation constant. This yields two ordinary differential equations:
1. $T'(t) + \\alpha \\lambda T(t) = 0$
2. $X''(x) + \\lambda X(x) = 0$

### Step 3: Solve ODEs
For a rod of length $L$ with fixed boundaries at $u(0, t) = 0$ and $u(L, t) = 0$, we find the eigenvalues $\\lambda_n = (\\frac{n\\pi}{L})^2$ and eigenfunctions $X_n(x) = \\sin(\\frac{n\\pi x}{L})$. The corresponding time solutions are $T_n(t) = e^{-\\alpha(\\frac{n\\pi}{L})^2 t}$.

### Step 4: Superposition
The general solution is the infinite sum of all particular solutions:
$$u(x, t) = \\sum_{n=1}^{\\infty} B_n \\sin\\left(\\frac{n\\pi x}{L}\\right) e^{-\\alpha(\\frac{n\\pi}{L})^2 t}$$
The coefficients $B_n$ are determined using the Fourier sine series of the initial condition $f(x)$ at $t=0$:
$$B_n = \\frac{2}{L} \\int_0^L f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx$$

The following static graph plots the first three harmonics ($n=1, 2, 3$) of the temperature profile solution at a fixed time $t$. These sine waves demonstrate how the full solution is constructed via superposition.

\`\`\`graph
\\sin(\\pi x)
\\sin(2\\pi x)
\\sin(3\\pi x)
\`\`\`

## Summary

The one-dimensional heat equation is the cornerstone of diffusion theory. Its derivation relies on the law of conservation of energy and Fourier’s Law of heat conduction. By relating the temporal evolution of a temperature gradient to its spatial curvature, the equation provides a robust framework for modeling how systems dissipate energy over time. Whether approached through the rigorous method of separation of variables or through numerical schemes like finite difference methods, understanding the heat equation is essential for any professional engaging with thermal physics, signal processing, or mathematical modeling. Its properties—specifically the tendency toward smoothing and the irreversible nature of diffusion—make it a perfect model for understanding how information and energy degrade in complex systems.`;export{e as default};