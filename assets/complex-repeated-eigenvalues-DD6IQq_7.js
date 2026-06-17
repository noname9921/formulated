var e=`# Complex and Repeated Eigenvalues in Systems

## Definition

In the study of linear dynamical systems represented by the differential equation $\\mathbf{x}'(t) = A\\mathbf{x}(t)$, where $A$ is an $n \\times n$ constant matrix, the long-term behavior of the system is determined by the eigenvalues of $A$. An eigenvalue $\\lambda$ satisfies the characteristic equation $\\det(A - \\lambda I) = 0$. 

Complex eigenvalues occur when the characteristic polynomial has roots in the form $\\lambda = \\alpha \\pm i\\beta$, where $\\alpha, \\beta \\in \\mathbb{R}$ and $i = \\sqrt{-1}$. These eigenvalues signify oscillatory behavior in the system's trajectories. Repeated eigenvalues, or eigenvalues with algebraic multiplicity $k > 1$, occur when the characteristic polynomial contains a factor $(\\lambda - \\lambda_0)^k$. When the geometric multiplicity (the dimension of the eigenspace) is less than the algebraic multiplicity, the matrix is said to be defective, requiring the use of generalized eigenvectors to complete the basis of solutions.

## Key Terminology

- **Characteristic Equation:** The polynomial equation $\\det(A - \\lambda I) = 0$ used to find the eigenvalues of a matrix $A$.
- **Algebraic Multiplicity:** The number of times a specific eigenvalue appears as a root of the characteristic polynomial.
- **Geometric Multiplicity:** The dimension of the null space of $(A - \\lambda I)$, representing the number of linearly independent eigenvectors associated with $\\lambda$.
- **Defective Matrix:** A matrix where at least one eigenvalue has a geometric multiplicity strictly less than its algebraic multiplicity.
- **Generalized Eigenvector:** A vector $\\mathbf{v}$ that satisfies $(A - \\lambda I)^k\\mathbf{v} = 0$ for some integer $k > 1$, used to construct solutions when insufficient standard eigenvectors exist.
- **Fundamental Solution Set:** A set of $n$ linearly independent solutions $\\mathbf{x}_1(t), \\dots, \\mathbf{x}_n(t)$ that span the solution space of the system.
- **Phase Portrait:** A geometric representation of the trajectories of a dynamical system in the state space.

## Purpose

Understanding complex and repeated eigenvalues is critical for analyzing stability and transient behavior in engineering, physics, and economics. Systems with complex eigenvalues typically exhibit rotation or spiral patterns in their phase portraits, representing damped or undamped harmonic motion. In electrical circuits, these represent RLC circuits with underdamped responses.

Repeated eigenvalues, particularly those involving defective matrices, characterize "critically damped" systems or systems at a bifurcation point. They define the transition between different qualitative behaviors (e.g., between an over-damped and under-damped state). By mastering these concepts, an analyst can predict whether a system will return to equilibrium, oscillate indefinitely, or grow boundlessly, allowing for the design of robust controllers and structural stability assessments.

## Fundamental Properties

The nature of the eigenvalues dictates the fundamental solution structure of the system $\\mathbf{x}' = A\\mathbf{x}$.

For a pair of complex eigenvalues $\\lambda = \\alpha \\pm i\\beta$, the corresponding solutions are based on Euler's formula, $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. The solution takes the form:
$$\\mathbf{x}(t) = c_1 e^{\\alpha t}(\\mathbf{u}\\cos(\\beta t) - \\mathbf{v}\\sin(\\beta t)) + c_2 e^{\\alpha t}(\\mathbf{u}\\sin(\\beta t) + \\mathbf{v}\\cos(\\beta t))$$
where $\\mathbf{u} + i\\mathbf{v}$ is the eigenvector associated with $\\alpha + i\\beta$. If $\\alpha < 0$, the system spirals into an equilibrium point; if $\\alpha > 0$, it spirals outward; if $\\alpha = 0$, the trajectories are closed elliptical orbits.

For repeated eigenvalues $\\lambda$ with algebraic multiplicity $k$, the solution is constructed using chains of generalized eigenvectors $\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k$ satisfying:
$$(A - \\lambda I)\\mathbf{v}_1 = 0$$
$$(A - \\lambda I)\\mathbf{v}_2 = \\mathbf{v}_1$$
$$(A - \\lambda I)\\mathbf{v}_k = \\mathbf{v}_{k-1}$$
The solutions involve polynomial growth multiplied by the exponential $e^{\\lambda t}$, specifically terms like $t^m e^{\\lambda t}$. This polynomial growth is a defining characteristic of repeated eigenvalues in systems that are not diagonalizable.

## Types & Variations

Systems can be categorized by the structure of their eigenvalues and the resulting stability.

| Eigenvalue Type | Phase Portrait Behavior | Stability |
| :--- | :--- | :--- |
| $\\alpha \\pm i\\beta, \\alpha < 0$ | Stable Spiral | Asymptotically Stable |
| $\\alpha \\pm i\\beta, \\alpha > 0$ | Unstable Spiral | Unstable |
| $\\pm i\\beta$ | Center | Marginally Stable |
| $\\lambda, \\lambda$ (Repeated) | Degenerate Node | Depends on sign of $\\lambda$ |

The following interactive graph allows the exploration of damped oscillations, which are representative of systems with complex eigenvalues where the real part $\\alpha$ dictates the decay or growth, and $\\beta$ dictates the frequency of oscillation.

\`\`\`interactivegraph
e^{at} * \\cos(bx)
params: a=-0.5, b=2
range: a=-2:2, b=0:5
\`\`\`

The graph above plots the function $f(x) = e^{ax}\\cos(bx)$, which illustrates the impact of a complex eigenvalue's real part ($a$) on amplitude decay or growth, and the imaginary part ($b$) on the oscillation frequency. A negative $a$ creates a decaying oscillation (stable), while a positive $a$ creates an expanding oscillation (unstable).

## How to Solve

To solve a linear system $\\mathbf{x}' = A\\mathbf{x}$:

1. **Calculate the Characteristic Polynomial:** Solve $\\det(A - \\lambda I) = 0$.
2. **Identify Eigenvalues:** Find roots $\\lambda_1, \\dots, \\lambda_n$.
3. **Handle Complex Roots:**
   - Solve $(A - (\\alpha + i\\beta)I)(\\mathbf{u} + i\\mathbf{v}) = 0$ for the complex eigenvector.
   - Separate real and imaginary parts to obtain $\\mathbf{u}$ and $\\mathbf{v}$.
   - Construct the fundamental solutions using the real and imaginary components derived from $e^{(\\alpha + i\\beta)t}(\\mathbf{u} + i\\mathbf{v})$.
4. **Handle Repeated Roots:**
   - Check geometric multiplicity. If it equals algebraic multiplicity, the matrix is not defective; use standard eigenvectors.
   - If geometric multiplicity is lower, solve the chain of equations $(A - \\lambda I)\\mathbf{v}_j = \\mathbf{v}_{j-1}$ to find generalized eigenvectors.
   - Construct the solutions as $\\mathbf{x}_1 = e^{\\lambda t}\\mathbf{v}_1$, $\\mathbf{x}_2 = e^{\\lambda t}(t\\mathbf{v}_1 + \\mathbf{v}_2)$, etc.
5. **General Solution:** Combine all linearly independent solutions into $\\mathbf{x}(t) = \\sum c_i \\mathbf{x}_i(t)$.

For a simple $2 \\times 2$ matrix with a repeated eigenvalue $\\lambda$ and only one eigenvector $\\mathbf{v}$, the solution is given by:
$$\\mathbf{x}(t) = c_1 e^{\\lambda t} \\mathbf{v} + c_2 e^{\\lambda t} (t\\mathbf{v} + \\mathbf{w})$$
where $\\mathbf{w}$ is the generalized eigenvector solving $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.

## Summary

Complex and repeated eigenvalues represent the boundaries of system behavior. Complex eigenvalues introduce rotation into the system state, transforming simple linear growth into spiraling dynamics. Their real component determines if the system dissipates energy or gains it, defining the difference between a stable equilibrium and a volatile, diverging system. 

Repeated eigenvalues signify a transition state. When a matrix is defective, the system exhibits not just exponential dynamics, but also polynomial growth ($t^k e^{\\lambda t}$), which can cause temporary growth even if the exponential decay dominates in the long run. By employing the framework of generalized eigenvectors and Euler-derived complex solution pairs, one can fully characterize the motion of any linear constant-coefficient system. These mathematical tools remain the foundation for modern control theory, vibration analysis, and mechanical engineering, providing the necessary precision to manage complex, multi-variable dynamic environments.`;export{e as default};