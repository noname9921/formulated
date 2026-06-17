var e=`# The One-Dimensional Wave Equation and d'Alembert's Solution

## Definition

The one-dimensional wave equation is a second-order linear partial differential equation (PDE) that describes the propagation of waves—such as sound waves, light waves, or water waves—through a medium. Mathematically, it relates the temporal second derivative of a scalar function to its spatial second derivative. Given a displacement function $u(x,t)$, where $x$ represents the spatial coordinate and $t$ represents time, the equation is expressed as:

$$
\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}
$$

In this formulation, $c$ represents the wave speed, a positive constant determined by the physical properties of the medium (such as tension and mass density in a vibrating string). The equation assumes an idealized, homogeneous medium where the wave travels without dispersion or attenuation. 

## Key Terminology

To analyze the wave equation, one must understand several foundational terms:

| Term | Definition |
| :--- | :--- |
| Displacement ($u$) | The deviation of the medium from its equilibrium position at position $x$ and time $t$. |
| Wave Speed ($c$) | The constant velocity at which the wave profile travels through the medium. |
| D'Alembert's Solution | The general solution constructed as the superposition of two traveling waves. |
| Characteristic Coordinates | Transformation variables $(\\xi, \\eta)$ used to simplify the PDE into a solvable form. |
| Initial Condition | The state of the system at $t=0$, typically defined by $u(x,0)$ and $u_t(x,0)$. |
| Cauchy Problem | A differential equation problem consisting of the PDE and specified initial data. |

## Purpose

The primary utility of the one-dimensional wave equation is to model the dynamics of oscillations in physical systems. Beyond the classic example of a vibrating guitar string, this equation serves as a cornerstone in acoustics, electromagnetism, and fluid dynamics. By solving this equation, physicists and engineers can predict the future state of a system based on its current position and velocity. 

D'Alembert's solution, proposed by Jean le Rond d'Alembert in 1747, revolutionized mathematical physics by demonstrating that the motion of a string could be decomposed into two independent waveforms traveling in opposite directions. This insight bridges the gap between abstract calculus and physical phenomena, allowing for the analysis of wave interference, reflection at boundaries, and signal transmission.

## Fundamental Properties

The wave equation exhibits several mathematically significant properties:

1. **Linearity**: The equation is linear, meaning if $u_1$ and $u_2$ are solutions, then any linear combination $a u_1 + b u_2$ is also a solution. This property facilitates the Principle of Superposition.
2. **Hyperbolicity**: The wave equation is a prototypical hyperbolic PDE. This classification implies that information propagates through the medium at a finite speed $c$, creating "light cones" or causal domains in the $(x,t)$ plane.
3. **Time-Reversibility**: The equation is invariant under the transformation $t \\to -t$. If a wave profile satisfies the equation, its reversed temporal evolution also satisfies it, reflecting the absence of dissipation.
4. **Finite Propagation Speed**: Unlike the heat equation (where information spreads instantaneously to all points), the wave equation restricts the influence of a point source at $x_0$ to the interval $[x_0 - ct, x_0 + ct]$ at any given time $t$.

The following graph illustrates a traveling wave pulse moving along the x-axis, defined by a Gaussian function $f(x,t) = e^{-(x-ct)^2}$. As time increases, the peak shifts to the right, maintaining its shape.

\`\`\`graph
e^{-(x-1)^2}
e^{-(x-2)^2}
\`\`\`

The graph above plots the function $f(x,t) = e^{-(x-ct)^2}$ for two different time slices, demonstrating how the wave profile preserves its spatial distribution while translating along the $x$-axis.

## Types & Variations

While the basic wave equation describes an ideal system, variations are often required to model real-world complexities:

* **Inhomogeneous Wave Equation**: Includes a source term $f(x,t)$ representing external forces:
$$
u_{tt} - c^2 u_{xx} = f(x,t)
$$
* **Damped Wave Equation**: Accounts for energy loss due to friction or air resistance, adding a first-order temporal derivative:
$$
u_{tt} - c^2 u_{xx} + \\gamma u_t = 0
$$
* **Dispersion**: In dispersive media, the speed $c$ depends on the frequency of the wave, requiring higher-order spatial derivatives (e.g., the Korteweg-de Vries equation).

## How to Solve

The analytical derivation of d'Alembert's solution involves a change of variables to the characteristic coordinates of the PDE.

### 1. Change of Variables
We introduce the characteristic variables $\\xi = x - ct$ and $\\eta = x + ct$. By the chain rule, the operators transform as:
$$
\\frac{\\partial}{\\partial x} = \\frac{\\partial}{\\partial \\xi} + \\frac{\\partial}{\\partial \\eta}
$$
$$
\\frac{\\partial}{\\partial t} = c\\left(\\frac{\\partial}{\\partial \\eta} - \\frac{\\partial}{\\partial \\xi}\\right)
$$
Substituting these into the original wave equation results in the simplified form:
$$
\\frac{\\partial^2 u}{\\partial \\xi \\partial \\eta} = 0
$$

### 2. Integration
Integrating with respect to $\\eta$, we find $\\frac{\\partial u}{\\partial \\xi} = \\psi(\\xi)$, where $\\psi$ is an arbitrary function. Integrating again with respect to $\\xi$, we get:
$$
u(\\xi, \\eta) = F(\\xi) + G(\\eta)
$$
Returning to the original variables $x$ and $t$:
$$
u(x, t) = F(x - ct) + G(x + ct)
$$

### 3. Applying Initial Conditions
Given the initial conditions $u(x,0) = f(x)$ and $u_t(x,0) = g(x)$, we can solve for $F$ and $G$:
1. $F(x) + G(x) = f(x)$
2. $-c F'(x) + c G'(x) = g(x) \\implies -F(x) + G(x) = \\frac{1}{c} \\int_{x_0}^x g(s) ds + K$

Solving this system yields the complete d'Alembert formula:
$$
u(x,t) = \\frac{1}{2}[f(x-ct) + f(x+ct)] + \\frac{1}{2c} \\int_{x-ct}^{x+ct} g(s) ds
$$

This interactive graph demonstrates the superposition of two waves $u(x,t) = A\\cos(x-ct) + A\\cos(x+ct)$ to form a standing wave. Use the sliders to observe how the amplitude and wave speed influence the resulting interference pattern.

\`\`\`interactivegraph
A*\\cos(x-c*t) + A*\\cos(x+c*t)
params: A=1, c=1, t=0
range: A=0:2, c=0:2, t=0:5
\`\`\`

The interactive graph allows for the modification of amplitude $A$, wave speed $c$, and time $t$. By manipulating these variables, one can observe how the constructive and destructive interference of the forward-moving wave $F(x-ct)$ and the backward-moving wave $G(x+ct)$ creates stationary nodes and antinodes.

## Summary

The one-dimensional wave equation is more than a mathematical curiosity; it is a fundamental description of the universe's oscillatory nature. D'Alembert’s solution provides a profound insight: any arbitrary wave disturbance on an infinite string is simply the summation of two signals moving in opposite directions. By defining $u(x,t) = F(x-ct) + G(x+ct)$, d'Alembert successfully demonstrated that the complex evolution of a physical system could be reduced to the simple translation of two independent functions.

This analytical framework serves as the foundation for more advanced topics, including Fourier series solutions for finite domains (using boundary conditions), the study of wave packets in quantum mechanics, and the numerical modeling of acoustic phenomena. The elegance of the derivation, moving from the second-order partial derivative to the superposition of arbitrary functions, remains one of the most significant achievements in the history of mathematical analysis. Through the lens of the wave equation, we gain the ability to predict the behavior of everything from the vibration of a cello string to the propagation of signals in communication fibers.`;export{e as default};