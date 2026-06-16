var e=`# Introduction to Linear Systems of ODEs

A linear system of ordinary differential equations (ODEs) is a collection of two or more differential equations involving several unknown functions and their derivatives, where each equation is a linear combination of the functions and their derivatives. In the study of dynamical systems, these structures provide the mathematical framework necessary to model complex processes ranging from mechanical vibrations and electrical circuits to population ecology and chemical kinetics.

## Definition

A system of linear first-order ODEs in $n$ variables is defined by a set of functions $\\mathbf{x}(t) = [x_1(t), x_2(t), \\dots, x_n(t)]^T$ that satisfy a relationship of the form:

$$ \\frac{d\\mathbf{x}}{dt} = A(t)\\mathbf{x}(t) + \\mathbf{f}(t) $$

In this notation, $A(t)$ is an $n \\times n$ matrix whose entries are functions of $t$, and $\\mathbf{f}(t)$ is a vector of functions known as the forcing term. If $\\mathbf{f}(t) = \\mathbf{0}$, the system is termed homogeneous. If $\\mathbf{f}(t) \\neq \\mathbf{0}$, the system is inhomogeneous. When the matrix $A$ consists of constant entries, the system is referred to as a linear system with constant coefficients, which allows for the application of algebraic techniques derived from linear algebra.

## Key Terminology

To analyze these systems effectively, one must be familiar with several core concepts that describe the behavior of the solution space:

| Term | Definition |
| :--- | :--- |
| Homogeneous System | A system where $\\mathbf{f}(t) = \\mathbf{0}$, ensuring that $\\mathbf{x} = \\mathbf{0}$ is a trivial solution. |
| General Solution | A linear combination of all linearly independent solutions that spans the entire solution space. |
| Fundamental Matrix | A matrix $\\Phi(t)$ whose columns are linearly independent solutions to the homogeneous system. |
| Eigenvalues | Scalars $\\lambda$ such that $\\det(A - \\lambda I) = 0$, governing the growth or decay of solutions. |
| Eigenvectors | Non-zero vectors $\\mathbf{v}$ such that $A\\mathbf{v} = \\lambda\\mathbf{v}$, defining the directions of flow in phase space. |
| Phase Portrait | A geometric representation of trajectories of a dynamical system in the state space. |
| Stability | A condition describing whether solutions remain bounded or converge to an equilibrium point over time. |

The relationship between these terms is symbiotic. For instance, the eigenvalues of matrix $A$ act as the "gatekeepers" of system behavior, determining whether the system exhibits exponential growth, oscillatory decay, or steady-state stability.

## Purpose

The primary purpose of studying linear systems of ODEs is to transform complex, coupled dynamics into a form that is computationally and analytically tractable. In nature, variables are rarely independent; the rate of change of one variable frequently depends on the values of others. By decoupling these dependencies through coordinate transformations—specifically via diagonalization—we can isolate individual modes of behavior.

Furthermore, linear systems serve as the local linear approximation of nonlinear systems. According to the Hartman-Grobman theorem, near an equilibrium point, a nonlinear system behaves qualitatively like its linearized counterpart. Thus, mastering linear systems is an essential prerequisite for understanding chaos, bifurcations, and global stability in complex systems.

## Fundamental Properties

Linear systems exhibit two essential properties that define their analytical behavior: the Principle of Superposition and the existence of a unique basis for the solution space.

### Principle of Superposition
If $\\mathbf{x}_1(t)$ and $\\mathbf{x}_2(t)$ are solutions to a homogeneous linear system, then any linear combination $c_1\\mathbf{x}_1(t) + c_2\\mathbf{x}_2(t)$ is also a solution. This property arises directly from the linearity of the differentiation operator and matrix-vector multiplication. It allows mathematicians to decompose complex motions into a sum of simpler, fundamental solutions.

### Existence and Uniqueness
For a system defined on an interval $I$ containing $t_0$, if the entries of $A(t)$ and $\\mathbf{f}(t)$ are continuous, then for any initial condition $\\mathbf{x}(t_0) = \\mathbf{x}_0$, there exists a unique solution $\\mathbf{x}(t)$ defined for all $t$ in $I$. This guarantees that our mathematical models are well-posed, provided the inputs are physically continuous.

### Dimensionality of the Solution Space
For an $n \\times n$ system, the solution space is an $n$-dimensional vector space. Consequently, we only need to find $n$ linearly independent solutions, $\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_n\\}$, to construct the general solution:

$$ \\mathbf{x}(t) = \\sum_{i=1}^{n} c_i \\mathbf{x}_i(t) $$

## Types & Variations

Linear systems are categorized based on the nature of their coefficient matrix $A$ and the forcing function $\\mathbf{f}(t)$.

### Constant vs. Time-Varying Coefficients
In constant coefficient systems, $A$ is a static matrix. These are solved using the matrix exponential $e^{At}$. In time-varying systems, $A(t)$ changes over time, often requiring the use of the Peano-Baker series or numerical integration methods, as the commutativity of the matrix at different times is not guaranteed.

### Autonomous vs. Non-Autonomous
An autonomous system is one where $\\frac{d\\mathbf{x}}{dt} = A\\mathbf{x}$. The evolution of the system depends only on the current state, not explicitly on time $t$. Non-autonomous systems incorporate time-explicit forcing, often used to model external inputs like driving forces in mechanical systems.

## How to Solve

The solution to $\\dot{\\mathbf{x}} = A\\mathbf{x}$ for constant $A$ relies heavily on the eigenvalue-eigenvector decomposition of $A$.

### Step 1: Characteristic Equation
Solve the polynomial equation $\\det(A - \\lambda I) = 0$ to find the eigenvalues $\\lambda_1, \\lambda_2, \\dots, \\lambda_n$. These eigenvalues dictate the "rhythm" of the system. If an eigenvalue has a negative real part, the corresponding solution decays; if positive, it grows.

### Step 2: Eigenvector Calculation
For each eigenvalue $\\lambda_i$, solve the singular system $(A - \\lambda_i I)\\mathbf{v}_i = \\mathbf{0}$ to find the associated eigenvector $\\mathbf{v}_i$. The product $\\mathbf{v}_i e^{\\lambda_i t}$ provides a fundamental solution.

### Step 3: Complex and Repeated Eigenvalues
If $\\lambda = \\alpha \\pm \\beta i$, the solution involves complex exponentials. Using Euler's formula, $e^{(\\alpha + \\beta i)t} = e^{\\alpha t}(\\cos(\\beta t) + i \\sin(\\beta t))$, we extract real-valued solutions. If an eigenvalue is repeated and the geometric multiplicity is less than the algebraic multiplicity, we must introduce generalized eigenvectors to form the complete set of basis solutions.

### Step 4: The Matrix Exponential
The general solution can be compactly written as $\\mathbf{x}(t) = e^{At}\\mathbf{x}_0$, where the matrix exponential is defined by the power series:

$$ e^{At} = I + At + \\frac{(At)^2}{2!} + \\frac{(At)^3}{3!} + \\dots $$

This operator acts as a flow map, evolving the initial state $\\mathbf{x}_0$ forward in time. 

To visualize the stability of a 2D system $\\frac{d\\mathbf{x}}{dt} = A\\mathbf{x}$, consider the behavior of trajectories. The following interactive graph allows for the adjustment of coefficients in the matrix $A$, which effectively modifies the eigenvalues and changes the qualitative behavior (e.g., node, saddle, or spiral).

\`\`\`interactivegraph
a*x + b*x
params: a=0.5, b=-1
range: a=-2:2, b=-2:2
\`\`\`

The graph above illustrates how the trace and determinant of matrix $A$, parameterized by $a$ and $b$, alter the vector field. When the parameters create complex eigenvalues with negative real parts, the trajectory follows a spiral sink. If real eigenvalues of opposite signs are present, a saddle point emerges.

## Summary

Linear systems of ODEs represent the cornerstone of deterministic modeling. By leveraging the algebraic properties of matrices and the analytical nature of calculus, these systems allow us to decompose intricate, coupled processes into observable modes. Whether solving for the steady state of an electrical grid or the stability of a structural beam, the methodology remains consistent: identify the eigenvalues to understand growth, find the eigenvectors to determine orientation, and apply superposition to satisfy initial conditions. As the field advances, these linear foundations continue to serve as the critical bridge to understanding the broader, nonlinear complexities of the natural world.`;export{e as default};