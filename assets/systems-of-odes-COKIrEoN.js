var e=`# Introduction to Linear Systems of ODEs

A linear system of ordinary differential equations (ODEs) is a collection of two or more differential equations involving several unknown functions and their derivatives, linked together in a linear fashion. These systems are fundamental to physics, engineering, biology, and economics, providing a mathematical framework to describe how multiple interconnected variables evolve over time. Unlike single ODEs, systems allow us to model complex phenomena where the rate of change of one variable depends on the states of other variables simultaneously.

## Definition

A system of first-order linear ordinary differential equations in $n$ variables is a set of equations that can be expressed in the general vector-matrix form:

$$\\mathbf{x}'(t) = A(t)\\mathbf{x}(t) + \\mathbf{f}(t)$$

In this representation, $\\mathbf{x}(t)$ is an $n \\times 1$ column vector of unknown functions, $\\mathbf{x}(t) = [x_1(t), x_2(t), \\dots, x_n(t)]^T$. The matrix $A(t)$ is an $n \\times n$ matrix of coefficients, where each entry $a_{ij}(t)$ is a function of the independent variable $t$. The vector $\\mathbf{f}(t)$ represents an $n \\times 1$ column vector of non-homogeneous forcing terms. If $\\mathbf{f}(t) = \\mathbf{0}$, the system is termed homogeneous; otherwise, it is non-homogeneous.

The term "linear" refers to the fact that the unknown functions $x_i(t)$ and their derivatives appear only to the first power and are not multiplied together or passed through nonlinear functions like $\\sin(x)$ or $e^x$.

## Key Terminology

To navigate the study of linear systems, one must master several foundational terms:

| Term | Definition |
| :--- | :--- |
| Independent Variable | Usually denoted by $t$ (time), the parameter upon which the state variables depend. |
| State Vector | The vector $\\mathbf{x}(t)$ representing the configuration of the system at any time $t$. |
| Homogeneous System | A system where $\\mathbf{f}(t) = \\mathbf{0}$, reflecting a system with no external input. |
| Non-homogeneous | A system where $\\mathbf{f}(t) \\neq \\mathbf{0}$, representing external influences or drives. |
| Equilibrium Point | A constant state $\\mathbf{x}^*$ such that $A\\mathbf{x}^* = \\mathbf{0}$, where the system remains stationary. |
| Fundamental Matrix | A matrix whose columns are $n$ linearly independent solutions to the homogeneous system. |
| Wronskian | The determinant of the fundamental matrix; if it is non-zero, the solutions are linearly independent. |
| Eigenvalues/Eigenvectors | Scalar values $\\lambda$ and vectors $\\mathbf{v}$ such that $A\\mathbf{v} = \\lambda\\mathbf{v}$, critical for solving constant-coefficient systems. |

## Purpose

The primary purpose of studying linear systems of ODEs is to predict the long-term behavior of dynamic systems. Because real-world processes—such as the chemical concentrations in a reactor, the currents in an electrical circuit, or the populations of competing species—rarely evolve in isolation, systems of ODEs provide the necessary mathematical language to capture multi-variable coupling.

By solving these systems, we can:
1. Determine stability: Understand whether a system returns to equilibrium after a perturbation.
2. Predict trajectories: Visualize the path a system takes through "phase space," where coordinates represent the state variables.
3. Decouple variables: Transform complex, interconnected systems into simpler, independent components to isolate the behavior of specific parts.

## Fundamental Properties

Linear systems possess elegant mathematical properties that simplify their analysis, most notably the Principle of Superposition.

### Linearity and Superposition
If $\\mathbf{x}_1(t)$ and $\\mathbf{x}_2(t)$ are both solutions to a homogeneous system $\\mathbf{x}' = A\\mathbf{x}$, then any linear combination $\\mathbf{x}(t) = c_1\\mathbf{x}_1(t) + c_2\\mathbf{x}_2(t)$ is also a solution. This allows us to construct a general solution from a set of basis solutions.

### Existence and Uniqueness
For the initial value problem (IVP) defined by $\\mathbf{x}' = A(t)\\mathbf{x} + \\mathbf{f}(t)$ with $\\mathbf{x}(t_0) = \\mathbf{x}_0$, the Picard-Lindelöf theorem guarantees that if $A(t)$ and $\\mathbf{f}(t)$ are continuous on an interval, there exists a unique solution defined on that interval.

### Stability
The behavior of the system as $t \\to \\infty$ is dictated by the eigenvalues $\\lambda$ of the matrix $A$. If all eigenvalues have negative real parts, the system is asymptotically stable. If any eigenvalue has a positive real part, the system is unstable. If eigenvalues are purely imaginary, the system exhibits stable oscillations.

## Types & Variations

Systems can be categorized based on the nature of the coefficient matrix $A$ and the forcing term $\\mathbf{f}$.

### Constant Coefficient Systems
These are systems where $A$ is a constant matrix. These are the most common in practice, as they allow for closed-form solutions using matrix exponentials and eigenvalue decomposition.

### Non-Autonomous Systems
If $A = A(t)$, the matrix changes over time. These are more difficult to solve and often require numerical methods or series expansions, as the commutative property of matrix multiplication ($A(t_1)A(t_2) = A(t_2)A(t_1)$) rarely holds.

### Autonomous Systems
These are systems where $A$ is constant and $\\mathbf{f} = \\mathbf{0}$. They represent systems where the underlying dynamics are stationary, allowing for the use of phase plane analysis to characterize the "flow" of the system.

## How to Solve

Solving a system of constant-coefficient linear ODEs, $\\mathbf{x}' = A\\mathbf{x}$, typically follows these procedural steps:

### 1. Eigenvalue Calculation
Solve the characteristic equation $\\det(A - \\lambda I) = 0$ for eigenvalues $\\lambda_1, \\dots, \\lambda_n$. These values dictate the growth or decay rates of the system.

### 2. Eigenvector Calculation
For each eigenvalue $\\lambda_i$, solve the equation $(A - \\lambda_i I)\\mathbf{v}_i = \\mathbf{0}$ to find the corresponding eigenvector $\\mathbf{v}_i$.

### 3. General Solution Construction
The general solution for the homogeneous system is:
$$\\mathbf{x}(t) = c_1 e^{\\lambda_1 t} \\mathbf{v}_1 + c_2 e^{\\lambda_2 t} \\mathbf{v}_2 + \\dots + c_n e^{\\lambda_n t} \\mathbf{v}_n$$
If eigenvalues are complex ($\\lambda = \\alpha \\pm i\\beta$), the solutions involve oscillating sine and cosine terms. If eigenvalues are repeated, generalized eigenvectors must be used to form the basis.

### 4. Variation of Parameters
To solve non-homogeneous systems ($\\mathbf{x}' = A\\mathbf{x} + \\mathbf{f}$), one uses the method of variation of parameters, assuming the solution is of the form $\\mathbf{x}(t) = \\Phi(t) \\mathbf{u}(t)$, where $\\Phi(t)$ is the fundamental matrix. This leads to:
$$\\mathbf{u}'(t) = \\Phi^{-1}(t) \\mathbf{f}(t) \\implies \\mathbf{u}(t) = \\int \\Phi^{-1}(t) \\mathbf{f}(t) dt + \\mathbf{C}$$

## Summary

Linear systems of ODEs represent the bedrock of dynamic modeling. By framing physical problems as vector-matrix equations, we leverage the power of linear algebra to decompose complex dynamics into manageable, independent components. Through the study of eigenvalues and eigenvectors, we gain deep insights into the stability and long-term evolution of systems, enabling us to predict behaviors in everything from mechanical vibrations to the spread of infectious diseases. Mastery of these systems requires an integration of differential calculus, linear algebra, and the geometric perspective of phase space analysis.`;export{e as default};