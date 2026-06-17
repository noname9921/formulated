var e=`# Homogeneous Linear Systems with Constant Coefficients

A homogeneous linear system with constant coefficients is a fundamental mathematical structure used to describe the evolution of a vector-valued function over time. These systems appear extensively in physics, control theory, economics, and biology, serving as the backbone for modeling multi-dimensional dynamical processes where the rate of change is proportional to the current state.

## Definition

A system of first-order linear homogeneous ordinary differential equations with constant coefficients is defined as a system of the form:

$$ \\frac{d\\mathbf{x}}{dt} = A\\mathbf{x} $$

In this expression, $\\mathbf{x}(t)$ is an $n \\times 1$ vector of unknown functions $\\mathbf{x}(t) = [x_1(t), x_2(t), \\dots, x_n(t)]^T$, and $A$ is an $n \\times n$ matrix of constant real or complex numbers. The term "homogeneous" signifies that the right-hand side of the equation equals the zero vector when $\\mathbf{x} = \\mathbf{0}$, meaning there are no external forcing functions independent of the state vector $\\mathbf{x}$. The "constant coefficient" property implies that the matrix $A$ does not depend on the independent variable $t$, allowing for global analytical solutions based on the spectral properties of $A$.

## Key Terminology

To understand these systems, one must grasp several core linear algebraic and analytic concepts:

*   **State Vector:** The column vector $\\mathbf{x}(t)$ representing the configuration of the system at time $t$.
*   **Coefficient Matrix ($A$):** The constant matrix defining the coupling between components.
*   **Eigenvalues ($\\lambda$):** Scalars that satisfy the characteristic equation $\\det(A - \\lambda I) = 0$. These dictate the growth, decay, or oscillatory nature of the solutions.
*   **Eigenvectors ($\\mathbf{v}$):** Non-zero vectors satisfying $(A - \\lambda I)\\mathbf{v} = 0$. They define the "modes" or directions along which the system evolves proportionally.
*   **Fundamental Solution Set:** A set of $n$ linearly independent solutions $\\{\\mathbf{x}_1(t), \\dots, \\mathbf{x}_n(t)\\}$ that span the space of all possible solutions.
*   **General Solution:** A linear combination of the fundamental solution set, expressed as $\\mathbf{x}(t) = c_1\\mathbf{x}_1(t) + \\dots + c_n\\mathbf{x}_n(t)$, where $c_i$ are constants determined by initial conditions.
*   **Phase Portrait:** A geometric representation of system trajectories in the state space.

## Purpose

The primary purpose of studying these systems is to determine the long-term behavior of a dynamical process. By analyzing the matrix $A$, we can ascertain if a system will converge to an equilibrium point (stability), diverge to infinity (instability), or maintain a periodic oscillation. Because these systems characterize linear dynamics, they are often used as first-order approximations for non-linear systems near equilibrium points, a technique known as linearization. In engineering, they are used to design feedback controllers where the matrix $A$ represents the closed-loop system dynamics, and the eigenvalues are manipulated to achieve desired performance metrics.

## Fundamental Properties

Homogeneous linear systems exhibit properties derived from the linearity of the differentiation operator and matrix multiplication:

1.  **Principle of Superposition:** If $\\mathbf{x}_1(t)$ and $\\mathbf{x}_2(t)$ are solutions to $\\dot{\\mathbf{x}} = A\\mathbf{x}$, then any linear combination $c_1\\mathbf{x}_1(t) + c_2\\mathbf{x}_2(t)$ is also a solution.
2.  **Existence and Uniqueness:** For any initial condition $\\mathbf{x}(t_0) = \\mathbf{x}_0$, there exists a unique solution defined for all $t$ in the real domain.
3.  **The Matrix Exponential:** The formal solution to the system is given by $\\mathbf{x}(t) = e^{At}\\mathbf{x}_0$, where the matrix exponential is defined by the power series $e^{At} = I + At + \\frac{(At)^2}{2!} + \\dots$.
4.  **Wronskian:** The linear independence of solutions is determined by the Wronskian $W(t) = \\det[\\mathbf{x}_1(t) \\dots \\mathbf{x}_n(t)]$. If the Wronskian is non-zero at some point, the solutions are linearly independent.

## Types & Variations

Systems can be categorized based on the nature of the eigenvalues of the matrix $A$:

| Type | Eigenvalue Nature | Dynamical Behavior |
| :--- | :--- | :--- |
| Node | Real, same sign | Exponential growth or decay |
| Saddle | Real, opposite signs | Attraction along one axis, repulsion along another |
| Center | Purely imaginary | Purely periodic oscillations |
| Spiral | Complex with non-zero real part | Oscillatory decay or growth |
| Degenerate | Repeated eigenvalues | Possible algebraic growth terms ($t e^{\\lambda t}$) |

The interactive graph below demonstrates the behavior of a simple two-dimensional oscillator. By adjusting the trace and determinant of the matrix, you can observe how the system trajectory transforms between stable, unstable, and oscillatory regimes.

\`\`\`interactivegraph
\\cos(ax)
params: a=1
range: a=-3:3
\`\`\`

In the context of this graph, the variable $a$ acts as a frequency parameter for a periodic solution, illustrating how the imaginary part of an eigenvalue dictates the frequency of rotation in the phase plane.

## How to Solve

Solving a system $\\dot{\\mathbf{x}} = A\\mathbf{x}$ generally follows a standardized procedure centered on finding the eigenvalues and eigenvectors of the coefficient matrix.

### Step 1: Find the Characteristic Equation
Solve $\\det(A - \\lambda I) = 0$ to find the eigenvalues $\\lambda_1, \\lambda_2, \\dots, \\lambda_n$. This is a polynomial of degree $n$.

### Step 2: Find the Eigenvectors
For each eigenvalue $\\lambda_i$, solve the homogeneous system $(A - \\lambda_i I)\\mathbf{v}_i = \\mathbf{0}$ to find the corresponding eigenvector $\\mathbf{v}_i$. If an eigenvalue is repeated and there are insufficient independent eigenvectors, you must find "generalized eigenvectors" to form the solution, leading to terms containing powers of $t$.

### Step 3: Construct the Fundamental Solutions
Each eigenvalue-eigenvector pair $(\\lambda_i, \\mathbf{v}_i)$ provides a solution of the form:
$$ \\mathbf{x}_i(t) = \\mathbf{v}_i e^{\\lambda_i t} $$
If the eigenvalues are complex, say $\\lambda = \\alpha \\pm i\\beta$, the solutions involve Euler's formula, resulting in real-valued solutions of the form:
$$ \\mathbf{x}(t) = e^{\\alpha t} (c_1(\\cos(\\beta t)\\mathbf{u} - \\sin(\\beta t)\\mathbf{w}) + c_2(\\sin(\\beta t)\\mathbf{u} + \\cos(\\beta t)\\mathbf{w})) $$
where $\\mathbf{v} = \\mathbf{u} + i\\mathbf{w}$ is the complex eigenvector.

### Step 4: Form the General Solution
Combine the individual solutions: $\\mathbf{x}(t) = \\sum_{i=1}^{n} c_i \\mathbf{x}_i(t)$.

### Step 5: Apply Initial Conditions
Use the given vector $\\mathbf{x}(0)$ to solve for the constants $c_1, \\dots, c_n$. This is a standard linear system problem $V\\mathbf{c} = \\mathbf{x}(0)$, where $V$ is the matrix of eigenvectors.

## Summary

Homogeneous linear systems with constant coefficients provide a rigorous framework for analyzing dynamical systems. By reducing complex differential equations to the algebraic problem of finding eigenvalues and eigenvectors, we gain significant insight into the system's stability and long-term trajectory. Mastery of this subject requires a balance of linear algebra for spectral decomposition and calculus for integrating the resulting exponential solutions. Whether through the direct summation of exponential modes or the computation of the matrix exponential, these systems remain the foundational tool for predicting the behavior of interconnected components in any linear environment.`;export{e as default};