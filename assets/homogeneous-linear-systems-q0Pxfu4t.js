var e=`# Homogeneous Linear Systems with Constant Coefficients

## Definition

A homogeneous linear system with constant coefficients is a system of first-order ordinary differential equations (ODEs) that can be expressed in vector-matrix notation as:

$$\\mathbf{x}'(t) = A\\mathbf{x}(t)$$

In this system, $\\mathbf{x}(t)$ is an $n \\times 1$ column vector of unknown functions $x_1(t), x_2(t), \\dots, x_n(t)$, and $\\mathbf{x}'(t)$ is the derivative vector $\\frac{d\\mathbf{x}}{dt}$. The matrix $A$ is an $n \\times n$ matrix of constant real or complex numbers, meaning the coefficients of the system do not change over time. The term "homogeneous" signifies that there is no external forcing vector $\\mathbf{f}(t)$ added to the equation; the system evolves solely based on its internal structure defined by $A$. If $\\mathbf{f}(t) \\neq \\mathbf{0}$, the system would be classified as non-homogeneous.

## Key Terminology

To analyze these systems effectively, one must be familiar with the following technical terms:

| Term | Definition |
|---|---|
| Eigenvalue | A scalar $\\lambda$ such that $A\\mathbf{v} = \\lambda\\mathbf{v}$ for a non-zero vector $\\mathbf{v}$. |
| Eigenvector | The non-zero vector $\\mathbf{v}$ corresponding to an eigenvalue $\\lambda$. |
| Fundamental Set | A set of $n$ linearly independent solutions $\\{\\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_n\\}$. |
| Wronskian | The determinant of the matrix formed by a fundamental set of solutions. |
| General Solution | The linear combination $\\mathbf{x}(t) = c_1\\mathbf{x}_1(t) + \\dots + c_n\\mathbf{x}_n(t)$. |
| Phase Portrait | A geometric representation of trajectories in the state space. |
| Stable Node | An equilibrium point where all trajectories approach the origin as $t \\to \\infty$. |
| Saddle Point | An equilibrium point where trajectories approach and then move away from the origin. |

## Purpose

The primary purpose of studying homogeneous linear systems is to model dynamical processes where the rate of change of state variables depends linearly on the current state. These systems provide a rigorous framework for understanding stability in engineering, economics, and biological systems. By decomposing a system into its constituent eigenvalues and eigenvectors, we can decouple complex, interconnected variables into simpler, independent modes of behavior. This allows for the prediction of long-term stability—determining whether a system will settle to an equilibrium, oscillate indefinitely, or diverge toward infinity.

## Fundamental Properties

Linearity and the principle of superposition are the cornerstones of this subject. If $\\mathbf{x}_1(t)$ and $\\mathbf{x}_2(t)$ are solutions to $\\mathbf{x}' = A\\mathbf{x}$, then any linear combination $\\mathbf{x}(t) = c_1\\mathbf{x}_1(t) + c_2\\mathbf{x}_2(t)$ is also a solution. This property arises because the derivative operator is linear.

Another critical property is the behavior of the Wronskian. If the Wronskian of a set of solutions is non-zero at any point $t_0$, it is non-zero for all $t$. This guarantees that a set of solutions remains linearly independent, ensuring they form a basis for the solution space.

The stability of the origin $(0,0)$ is determined by the real parts of the eigenvalues of $A$:
1. If all $\\text{Re}(\\lambda_i) < 0$, the origin is asymptotically stable (a sink).
2. If any $\\text{Re}(\\lambda_i) > 0$, the origin is unstable (a source or saddle).
3. If $\\text{Re}(\\lambda_i) = 0$ for some $\\lambda$, the system exhibits marginal stability or centers.

## Types & Variations

Systems are categorized based on the nature of the eigenvalues of $A$:

1. **Distinct Real Eigenvalues:** The general solution is a linear combination of terms $c_i e^{\\lambda_i t} \\mathbf{v}_i$. This leads to exponential growth or decay along the directions of the eigenvectors.
2. **Repeated Eigenvalues:** When an eigenvalue has algebraic multiplicity $k > 1$ but geometric multiplicity less than $k$, we encounter "defective" matrices. We must introduce terms involving $t e^{\\lambda t} \\mathbf{v}$ to find independent solutions.
3. **Complex Eigenvalues:** These occur in conjugate pairs $\\lambda = \\alpha \\pm i\\beta$. The solutions involve trigonometric functions $e^{\\alpha t}(\\cos(\\beta t) + i\\sin(\\beta t))$, leading to rotation in the phase plane.

The following interactive graph demonstrates how parameters in a simple 2D system affect the trajectories of a system defined by $\\mathbf{x}' = A\\mathbf{x}$, where the reader can adjust the oscillation and growth parameters to see how spirals change.

\`\`\`interactivegraph
\\exp(at) * \\cos(bt + x)
params: a=0.1, b=2
range: a=-1:1, b=0:5
\`\`\`

The interactive graph plots the projection of a complex solution trajectory onto an axis, where $a$ represents the growth rate (real part of the eigenvalue) and $b$ represents the frequency of oscillation (imaginary part). One should observe that for $a < 0$, the amplitude decays, indicating stability, while $a > 0$ indicates instability.

## How to Solve

The standard procedure for solving $\\mathbf{x}' = A\\mathbf{x}$ follows a systematic algorithmic approach:

1. **Find Eigenvalues:** Solve the characteristic equation $\\det(A - \\lambda I) = 0$. This is an $n$-degree polynomial in $\\lambda$.
2. **Find Eigenvectors:** For each eigenvalue $\\lambda_i$, solve the homogeneous linear system $(A - \\lambda_i I)\\mathbf{v}_i = \\mathbf{0}$.
3. **Construct Solutions:** 
   - For real $\\lambda$, the solution is $\\mathbf{x}_i(t) = e^{\\lambda_i t}\\mathbf{v}_i$.
   - For complex $\\lambda = \\alpha + i\\beta$, use Euler's formula $e^{i\\beta t} = \\cos(\\beta t) + i\\sin(\\beta t)$ to extract real and imaginary parts to form two independent real solutions.
   - For repeated eigenvalues, if only one eigenvector is found, solve $(A - \\lambda I)\\mathbf{u} = \\mathbf{v}$ for a generalized eigenvector $\\mathbf{u}$ and use the solution form $\\mathbf{x}_2(t) = t e^{\\lambda t}\\mathbf{v} + e^{\\lambda t}\\mathbf{u}$.
4. **General Solution:** Combine all found solutions: $\\mathbf{x}(t) = \\sum c_i \\mathbf{x}_i(t)$.

Consider the system:
$$x_1' = x_1 + x_2$$
$$x_2' = 4x_1 + x_2$$

The matrix $A$ is:
$$A = \\begin{pmatrix} 1 & 1 \\\\ 4 & 1 \\end{pmatrix}$$
The characteristic equation is $(1-\\lambda)^2 - 4 = 0$, leading to $\\lambda^2 - 2\\lambda - 3 = 0$. Factoring gives $(\\lambda - 3)(\\lambda + 1) = 0$. The eigenvalues are $\\lambda_1 = 3$ and $\\lambda_2 = -1$.
For $\\lambda_1 = 3$: $(A - 3I)\\mathbf{v} = 0 \\implies -2v_1 + v_2 = 0 \\implies \\mathbf{v}_1 = [1, 2]^T$.
For $\\lambda_2 = -1$: $(A + I)\\mathbf{v} = 0 \\implies 2v_1 + v_2 = 0 \\implies \\mathbf{v}_2 = [1, -2]^T$.
The general solution is $\\mathbf{x}(t) = c_1 e^{3t} \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + c_2 e^{-t} \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$.

## Summary

Homogeneous linear systems with constant coefficients form the bedrock of multi-variable calculus and differential equations. By utilizing the spectral properties of the transformation matrix $A$, we transform the complex task of solving a coupled set of differential equations into a manageable algebraic problem. The classification of systems based on eigenvalues provides a deep, intuitive understanding of the long-term qualitative behavior of physical systems. Mastery of this topic requires proficiency in linear algebra, particularly the determination of eigenvalues and eigenvectors, and an ability to interpret the resulting time-dependent functions in the context of phase portraits and dynamical stability. Whether modeling chemical kinetics, electrical circuit currents, or population dynamics, these systems remain a vital tool in the mathematician's and engineer's toolkit.`;export{e as default};