var e=`# Nonlinear Systems and Linearization

## Definition

A nonlinear system is a mathematical model where the output is not directly proportional to the change in input. In the context of dynamical systems, a nonlinear system is described by a set of differential or difference equations where the variables appear as powers higher than one, as products of variables, or as transcendental functions such as $e^x$, $\\sin(x)$, or $\\ln(x)$. Formally, a continuous-time nonlinear system is represented by the state-space equation $\\dot{x}=f(x,u)$, where $x \\in \\mathbb{R}^n$ represents the state vector, $u \\in \\mathbb{R}^m$ represents the input vector, and $f$ is a nonlinear vector-valued function.

Linearization is the process of approximating a nonlinear system with a linear system in the vicinity of a specific operating point, usually an equilibrium point. While linear systems satisfy the principle of superposition—where the response to a sum of inputs is the sum of the individual responses—nonlinear systems exhibit complex phenomena such as chaos, limit cycles, bifurcation, and multiple isolated equilibrium points. Linearization allows engineers and mathematicians to apply the powerful tools of linear algebra, such as eigenvalue analysis and frequency response, to local regions of nonlinear behavior.

## Key Terminology

- **Equilibrium Point:** A state $x^*$ such that $f(x^*,u^*)=0$. At this point, if the system is undisturbed, it remains at $x^*$ for all time.
- **Jacobian Matrix:** A matrix of all first-order partial derivatives of a vector-valued function. For a system $\\dot{x}=f(x)$, the Jacobian $J$ at $x^*$ is defined as $J_{ij}=\\frac{\\partial f_i}{\\partial x_j}|_{x^*}$.
- **Taylor Series Expansion:** An infinite sum of terms that represents a function as a power series, used to approximate nonlinear functions by discarding higher-order terms.
- **Stability:** A measure of how a system reacts to small perturbations. In nonlinear systems, stability is often categorized as local (asymptotic stability near an equilibrium) or global (across the entire state space).
- **Bifurcation:** A point where a small change in a parameter causes a sudden "qualitative" or topological change in the system's long-term behavior.
- **State-Space Representation:** A mathematical model of a physical system as a set of input, output, and state variables related by first-order differential equations.

## Purpose

The primary purpose of linearization is analytical simplification. Most real-world phenomena—ranging from chemical reaction kinetics and aerospace flight dynamics to biological neural networks—are inherently nonlinear. Solving nonlinear differential equations analytically is often impossible. By linearizing a system, we reduce a complex, high-degree nonlinear relationship to a first-order linear approximation, which can be analyzed using matrix exponential solutions and stability criteria such as the Routh-Hurwitz stability criterion.

Linearization is essential for control system design. Feedback controllers, such as Proportional-Integral-Derivative (PID) controllers, are derived based on linear assumptions. By linearizing a system about a steady-state operating condition, designers can calculate gains that ensure the system stays near the target equilibrium. Furthermore, linearization helps identify local stability; if the eigenvalues of the linearized system have negative real parts, the nonlinear system is locally asymptotically stable according to the Hartman-Grobman theorem.

## Fundamental Properties

Nonlinear systems deviate significantly from the predictable behavior of linear systems. Understanding these properties is crucial for knowing when linearization is valid and where it fails.

1. **Lack of Superposition:** If $f(x_1+x_2) \\neq f(x_1)+f(x_2)$, the system is nonlinear. This means that scaling the input does not scale the output proportionally.
2. **Multiple Equilibria:** Linear systems typically have a single equilibrium point (usually the origin) or an infinite set of equilibria (e.g., a line of points). Nonlinear systems can possess multiple isolated equilibrium points, meaning the system can "settle" in different states depending on the initial conditions.
3. **Limit Cycles:** Nonlinear systems can exhibit isolated closed trajectories in the state space where the system oscillates with a fixed amplitude and frequency, independent of initial conditions. This is impossible in linear systems.
4. **Chaos and Sensitivity:** Many nonlinear systems exhibit "sensitive dependence on initial conditions," colloquially known as the butterfly effect. Small changes in initial states lead to exponentially diverging trajectories, making long-term prediction difficult.
5. **Local Validity:** The fundamental property of linearization is that it is a local approximation. The error between the nonlinear system and the linear model grows as the state moves further away from the point of linearization.

## Types & Variations

### 1. The Taylor Series Linearization
This is the most common method, involving the truncation of a multidimensional Taylor series. For a system $\\dot{x}=f(x)$, the approximation is:
$$f(x) \\approx f(x^*) + \\left. \\frac{\\partial f}{\\partial x} \\right|_{x=x^*} (x-x^*) + \\text{higher order terms}$$
Since $f(x^*)=0$ at equilibrium, the linearized system is $\\delta \\dot{x} \\approx A \\delta x$, where $A$ is the Jacobian evaluated at $x^*$.

### 2. Feedback Linearization
This is a sophisticated control technique where a nonlinear control input is designed to cancel out the nonlinearities of the system. Instead of merely approximating the system, one applies an algebraic transformation to the state variables and a control law to make the closed-loop system appear linear.

### 3. Harmonic Linearization (Describing Functions)
Used for analyzing nonlinear oscillations, this approach replaces the nonlinear element with an equivalent gain that depends on the amplitude of the input signal. It is particularly effective for systems involving relays, saturation, or dead-zones.

The following graph illustrates how a nonlinear function $f(x) = x^3 - x$ can be approximated by a linear tangent line at a specific point.

\`\`\`graph
x^3 - x
-1.35*x
\`\`\`

The graph above shows the nonlinear function $f(x) = x^3 - x$ in comparison to its linearized tangent line $y = -1.35x$ evaluated near the equilibrium point $x=0.5$. Note how the approximation is accurate near the point of tangency but diverges rapidly as $x$ increases.

## How to Solve

Solving nonlinear systems requires a systematic approach involving finding equilibria, calculating the Jacobian, and applying linear analysis.

### Step 1: Identifying Equilibria
Set all derivatives to zero. For a system:
$$\\dot{x}_1 = x_2$$
$$\\dot{x}_2 = -x_1 - x_2^3$$
The equilibrium points $(x_1^*, x_2^*)$ are found by solving $x_2^*=0$ and $-x_1^*- (x_2^*)^3=0$. This yields $(0,0)$ as the unique equilibrium.

### Step 2: Calculating the Jacobian
Construct the Jacobian matrix $J$ for the system $\\dot{x} = f(x)$:
$$J(x) = \\begin{bmatrix} \\frac{\\partial f_1}{\\partial x_1} & \\frac{\\partial f_1}{\\partial x_2} \\\\ \\frac{\\partial f_2}{\\partial x_1} & \\frac{\\partial f_2}{\\partial x_2} \\end{bmatrix}$$
For the example above:
$$J = \\begin{bmatrix} 0 & 1 \\\\ -1 & -3x_2^2 \\end{bmatrix}$$

### Step 3: Evaluating at the Operating Point
Substitute the equilibrium coordinates into the Jacobian. At $(0,0)$:
$$A = J(0,0) = \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$$

### Step 4: Stability Analysis
Solve the characteristic equation $\\det(sI - A) = 0$. For this matrix, $\\det(sI-A) = s^2+1=0$, leading to eigenvalues $s = \\pm i$. Since the real part is zero, the linearized system is marginally stable (oscillatory). The nonlinear system's actual behavior requires higher-order analysis (e.g., Lyapunov functions) to confirm if the stability persists beyond the linear approximation.

The following interactive graph allows for the observation of how changing the curvature of a nonlinear system affects the quality of a linear approximation.

\`\`\`interactivegraph
a*x^3 + x
3*a*x^2*x_0 + x
params: a=0.5, x_0=0.5
range: a=-2:2, x_0=-2:2
\`\`\`

In this interactive graph, the user can adjust parameter $a$ to change the "strength" of the nonlinearity $x^3$ and $x_0$ to change the point of linearization. Observing the curves demonstrates that as the nonlinearity ($a$) increases, the range over which the linear approximation is valid shrinks, reinforcing the "local" nature of linearization.

## Summary

Nonlinear systems and linearization form the bedrock of modern engineering and applied mathematics. While nonlinear systems provide the descriptive power to model the world's complexity, linearization provides the computational tractability required for design and analysis. 

| Feature | Linear System | Nonlinear System |
| :--- | :--- | :--- |
| Equilibrium | Unique (usually) | Multiple isolated |
| Stability | Global (Eigenvalues) | Local (Hartman-Grobman) |
| Superposition | Yes | No |
| Complexity | Low | High (Chaos potential) |
| Approximation | N/A | Linearization |

The transition from a nonlinear equation to its linear counterpart is not merely a simplification; it is a transformation into a coordinate system where behavior can be understood via eigenvalues. However, the expert practitioner must always be wary of the boundaries of validity. When the state deviates too far from the operating point, the Jacobian loses its predictive power, and the neglected higher-order terms in the Taylor expansion—such as quadratic or cubic interactions—begin to dominate. In such cases, one must either re-linearize at a new operating point or employ advanced nonlinear methods such as state-dependent coefficient factorization or Lyapunov stability theory to ensure the system remains controlled and functional.`;export{e as default};