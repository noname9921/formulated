var e=`# The One-Dimensional Heat Equation

The one-dimensional heat equation is a parabolic partial differential equation (PDE) that describes the distribution of heat (or variation in temperature) in a given region over time. It serves as the foundational model for diffusion processes in physics, chemistry, and financial mathematics.

## Definition

The one-dimensional heat equation for a function $u(x,t)$ representing temperature at position $x$ and time $t$ is given by the following second-order partial differential equation:

$$\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$$

In this equation, $u(x,t)$ denotes the temperature field, $t \\ge 0$ is the time variable, and $x \\in [0,L]$ represents the spatial coordinate along a thin rod or wire. The parameter $\\alpha$ is known as the thermal diffusivity, defined as $\\alpha = \\frac{k}{\\rho c_p}$, where $k$ is the thermal conductivity of the material, $\\rho$ is the density, and $c_p$ is the specific heat capacity. This constant determines how quickly heat propagates through the medium.

## Key Terminology

Understanding the heat equation requires familiarity with specific mathematical and physical terms:

| Term | Definition |
| :--- | :--- |
| Thermal Diffusivity ($\\alpha$) | A material property measuring the rate at which heat moves through a material. |
| Boundary Conditions | Constraints applied at the edges of the domain (e.g., $x=0$ and $x=L$). |
| Initial Condition | The state of the system at time $t=0$, typically $u(x,0) = f(x)$. |
| Dirichlet Condition | Prescribing the temperature at the boundaries, such as $u(0,t) = T_0$. |
| Neumann Condition | Prescribing the heat flux at the boundaries, such as $\\frac{\\partial u}{\\partial x} = 0$ (insulation). |
| Fourier Series | An expansion of a periodic function as an infinite sum of sines and cosines. |

The interaction between these terms determines the uniqueness and existence of solutions to the PDE.

## Purpose

The primary purpose of the heat equation is to model the evolution of thermal equilibrium. In isolation, a system with a temperature gradient will undergo heat transfer from higher temperature regions to lower temperature regions until the entire system reaches a uniform state. 

Beyond thermodynamics, the equation is essential in:
1. **Diffusion Modeling:** Predicting the spread of pollutants, gas molecules, or chemical concentrations.
2. **Probability Theory:** The heat equation is deeply linked to Brownian motion and the Wiener process, where the probability distribution of a random walk satisfies the diffusion equation.
3. **Financial Mathematics:** The Black-Scholes model for pricing options can be transformed into the heat equation, allowing traders to calculate theoretical values of derivatives.
4. **Image Processing:** Gaussian blurring in digital image processing is mathematically equivalent to solving the heat equation over a finite time interval.

## Fundamental Properties

The heat equation possesses several mathematical characteristics that make it distinct from other equations like the wave equation:

1. **Smoothing Property:** Even if the initial temperature distribution $f(x)$ is discontinuous or non-differentiable, the solution $u(x,t)$ becomes smooth (infinitely differentiable) for any $t > 0$. The equation acts as a low-pass filter, rapidly dampening high-frequency components of the spatial temperature profile.
2. **Maximum Principle:** The temperature at any interior point cannot exceed the maximum value reached by the initial or boundary conditions. This implies that heat cannot spontaneously concentrate without an external source.
3. **Irreversibility:** While the wave equation is time-reversible (replacing $t$ with $-t$ leaves the physics unchanged), the heat equation is time-irreversible. Knowing the temperature at a future time does not allow for the unique reconstruction of the initial state because the high-frequency components have been permanently "lost" to diffusion.
4. **Infinite Propagation Speed:** For an initial disturbance localized at a point, the effect is theoretically felt instantly everywhere in the domain, though the magnitude decreases exponentially with distance.

## Types & Variations

Depending on the physical constraints, the heat equation can take several forms:

1. **Homogeneous:** $\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$. There are no internal heat sources or sinks.
2. **Non-Homogeneous:** $\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2} + Q(x,t)$. The term $Q(x,t)$ represents internal heat generation (e.g., electrical heating or chemical reactions).
3. **Constant Coefficient:** When $\\alpha$ is independent of $x$ and $u$. If the material properties depend on temperature, the equation becomes non-linear, taking the form $\\frac{\\partial u}{\\partial t} = \\nabla \\cdot (\\alpha(u) \\nabla u)$.

To visualize the effect of the diffusivity parameter on the evolution of a profile, consider the following interaction:

\`\`\`interactivegraph
\\exp(-a \\cdot x^2)
params: a=1
range: a=0.1:5
\`\`\`

The graph above plots the function $u(x) = e^{-ax^2}$. The parameter $a$ represents the influence of thermal diffusivity and time. As $a$ increases, the "spike" of heat diffuses more rapidly, resulting in a broader and flatter distribution, which illustrates how localized heat spreads across the spatial domain.

## How to Solve

The standard method for solving the one-dimensional heat equation with homogeneous boundary conditions is the **Method of Separation of Variables**.

### 1. Separation
We assume a product solution of the form:
$$u(x,t) = X(x)T(t)$$
Substituting this into the heat equation:
$$X(x)T'(t) = \\alpha X''(x)T(t)$$
Dividing by $\\alpha X(x)T(t)$ yields:
$$\\frac{T'(t)}{\\alpha T(t)} = \\frac{X''(x)}{X(x)} = -\\lambda$$
where $\\lambda$ is a separation constant.

### 2. Solving the Spatial ODE
The spatial equation $X''(x) + \\lambda X(x) = 0$ must satisfy the boundary conditions. For Dirichlet conditions $u(0,t)=0$ and $u(L,t)=0$, we find non-trivial solutions only for positive $\\lambda_n = (\\frac{n\\pi}{L})^2$, where $n = 1, 2, 3, \\dots$. The eigenfunctions are:
$$X_n(x) = \\sin\\left(\\frac{n\\pi x}{L}\\right)$$

### 3. Solving the Temporal ODE
Substituting $\\lambda_n$ into the temporal equation $T'(t) = -\\alpha \\lambda_n T(t)$ gives:
$$T_n(t) = e^{-\\alpha (\\frac{n\\pi}{L})^2 t}$$

### 4. Constructing the General Solution
By the principle of superposition, the general solution is the sum of all individual modes:
$$u(x,t) = \\sum_{n=1}^{\\infty} B_n \\sin\\left(\\frac{n\\pi x}{L}\\right) e^{-\\alpha (\\frac{n\\pi}{L})^2 t}$$
The coefficients $B_n$ are determined by the initial condition $u(x,0) = f(x)$ using the orthogonality of the sine function:
$$B_n = \\frac{2}{L} \\int_{0}^{L} f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx$$

This infinite series converges rapidly, representing the decay of different spatial harmonics over time.

## Summary

The one-dimensional heat equation is a cornerstone of mathematical physics. It provides a robust framework for understanding how systems evolve toward equilibrium through the diffusion process. By utilizing separation of variables and Fourier analysis, we can decompose complex initial temperature distributions into simple sinusoidal modes, each decaying at a rate proportional to the square of its spatial frequency. The equation's properties—specifically its smoothing effect and the dominance of the fundamental mode at long time scales—explain why thermal systems behave predictably over time. Whether applied to metallurgy, climate modeling, or financial derivatives, the heat equation remains an indispensable tool for analyzing continuous change and the inevitable dissipation of energy.`;export{e as default};