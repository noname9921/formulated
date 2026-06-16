var e=`# Complex and Repeated Eigenvalues in Systems

## Definition

In the study of linear dynamical systems represented by the differential equation $\\mathbf{x}'(t) = A\\mathbf{x}(t)$, where $A$ is an $n \\times n$ constant matrix, the behavior of the solution is dictated by the eigenvalues of $A$. An eigenvalue $\\lambda$ is a scalar that satisfies the characteristic equation $\\det(A - \\lambda I) = 0$. 

Complex eigenvalues occur when the characteristic polynomial has roots with non-zero imaginary parts. Given that the coefficients of the characteristic polynomial are real, these eigenvalues necessarily appear in conjugate pairs $\\lambda = \\alpha \\pm i\\beta$. 

Repeated eigenvalues occur when the characteristic polynomial has roots with algebraic multiplicity $k > 1$. If the geometric multiplicity (the dimension of the eigenspace) is less than the algebraic multiplicity, the matrix is considered defective. This scenario requires the use of generalized eigenvectors to construct a complete set of linearly independent solutions.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Characteristic Equation | The polynomial equation $\\det(A - \\lambda I) = 0$ used to find eigenvalues. |
| Algebraic Multiplicity | The number of times a root $\\lambda$ appears in the characteristic polynomial. |
| Geometric Multiplicity | The dimension of the null space of $(A - \\lambda I)$, representing available eigenvectors. |
| Defective Matrix | A matrix where the geometric multiplicity is less than the algebraic multiplicity. |
| Generalized Eigenvector | A vector $\\mathbf{v}$ satisfying $(A - \\lambda I)^k \\mathbf{v} = 0$ for some integer $k > 1$. |
| Fundamental Solution Set | A set of $n$ linearly independent solutions that spans the general solution space. |
| Jordan Canonical Form | A block diagonal representation of a matrix, useful for handling defective systems. |

## Purpose

The primary purpose of analyzing complex and repeated eigenvalues is to classify the stability and qualitative geometry of equilibrium points in linear systems. Complex eigenvalues indicate rotation and oscillation, while repeated eigenvalues often signify a transition state between different types of stability, such as a degenerate node. Understanding these mathematical structures allows engineers and scientists to predict whether a system will converge to an equilibrium, diverge to infinity, or exhibit sustained oscillatory behavior in fields such as control theory, structural vibration analysis, and circuit design.

## Fundamental Properties

For complex eigenvalues $\\lambda = \\alpha \\pm i\\beta$, the solutions to the system involve trigonometric functions. If $\\alpha < 0$, the system exhibits a stable spiral sink; if $\\alpha > 0$, it is an unstable spiral source; and if $\\alpha = 0$, it produces centers or closed orbits.

For repeated eigenvalues $\\lambda$, the nature of the solution depends on the geometric multiplicity. If the matrix is not defective (the eigenspace is full), the solution takes the form $\\mathbf{x}(t) = c_1 e^{\\lambda t} \\mathbf{v}_1 + c_2 e^{\\lambda t} \\mathbf{v}_2$. However, if the matrix is defective, the system requires the form:
$$\\mathbf{x}_2(t) = c_1 e^{\\lambda t} \\mathbf{v} + c_2 (t e^{\\lambda t} \\mathbf{v} + e^{\\lambda t} \\mathbf{w})$$
where $\\mathbf{w}$ is a generalized eigenvector satisfying $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$. This demonstrates that repeated eigenvalues introduce polynomial growth terms ($t e^{\\lambda t}$), which fundamentally alter the long-term behavior of the system compared to simple exponential growth.

## Types & Variations

1. **Complex Conjugate Pairs:** These lead to rotational dynamics. The real part $\\alpha$ determines growth/decay, while the imaginary part $\\beta$ determines the frequency of rotation. 
2. **Repeated Eigenvalues with Complete Eigenspace:** These occur when a matrix is diagonalizable despite having repeated eigenvalues (e.g., the identity matrix). The geometry remains that of a star node.
3. **Repeated Eigenvalues with Incomplete Eigenspace:** These are the "defective" cases. They result in improper or degenerate nodes. The trajectories are forced to approach the origin tangent to a single eigenvector direction.

We can visualize the impact of parameters on a simple harmonic oscillator system, which often arises from complex eigenvalues. The following graph explores the influence of frequency and damping parameters on the trajectory.

\`\`\`interactivegraph
\\exp(ax) * \\cos(bx)
params: a=-0.5, b=2
range: a=-1:1, b=0:5
\`\`\`

The graph plots $f(x) = e^{ax} \\cos(bx)$, where $a$ represents the real part of a complex eigenvalue (controlling damping/growth) and $b$ represents the imaginary part (controlling frequency). Observe how changing $a$ expands or contracts the envelope, while changing $b$ alters the oscillation density.

## How to Solve

### 1. Complex Eigenvalues
To solve $\\mathbf{x}' = A\\mathbf{x}$ with $\\lambda = \\alpha + i\\beta$:
- Find the complex eigenvector $\\mathbf{v} = \\mathbf{u} + i\\mathbf{w}$ associated with $\\lambda$.
- Form the complex solution $\\mathbf{z}(t) = e^{(\\alpha + i\\beta)t} (\\mathbf{u} + i\\mathbf{w})$.
- Use Euler's formula $e^{i\\beta t} = \\cos(\\beta t) + i \\sin(\\beta t)$ to expand $\\mathbf{z}(t)$.
- The real part $\\text{Re}(\\mathbf{z}(t))$ and imaginary part $\\text{Im}(\\mathbf{z}(t))$ form two linearly independent real-valued solutions.

### 2. Repeated Eigenvalues
If $\\lambda$ is repeated and the matrix is defective (only one eigenvector $\\mathbf{v}$):
- Solve $(A - \\lambda I)\\mathbf{v} = 0$ to find the eigenvector.
- Solve $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$ to find the generalized eigenvector $\\mathbf{w}$.
- The general solution is $\\mathbf{x}(t) = c_1 e^{\\lambda t} \\mathbf{v} + c_2 e^{\\lambda t} (t\\mathbf{v} + \\mathbf{w})$.

### Example Analytical Case
Consider a matrix $A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 4 \\end{pmatrix}$. The characteristic equation is $(2-\\lambda)(4-\\lambda) + 1 = \\lambda^2 - 6\\lambda + 9 = (\\lambda - 3)^2$. This gives a repeated eigenvalue $\\lambda = 3$.
Solving $(A - 3I)\\mathbf{v} = 0$:
$$\\begin{pmatrix} -1 & -1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = 0 \\implies v_1 = -v_2$$
Choosing $\\mathbf{v} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$. To find $\\mathbf{w}$, solve $(A - 3I)\\mathbf{w} = \\mathbf{v}$:
$$\\begin{pmatrix} -1 & -1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} w_1 \\\\ w_2 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\implies -w_1 - w_2 = 1$$
Setting $w_1 = 0$, we get $w_2 = -1$. Thus $\\mathbf{w} = \\begin{pmatrix} 0 \\\\ -1 \\end{pmatrix}$.
The final solution is $\\mathbf{x}(t) = c_1 e^{3t} \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} + c_2 e^{3t} \\left( t \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} 0 \\\\ -1 \\end{pmatrix} \\right)$.

The following graph demonstrates a linear growth function, which characterizes the $t e^{\\lambda t}$ term in defective systems.

\`\`\`graph
x * \\exp(0.5 * x)
\`\`\`

The graph plots $f(x) = x e^{0.5x}$, illustrating how the linear term $t$ dominates the initial growth alongside the exponential decay or growth of the system.

## Summary

Complex and repeated eigenvalues represent the boundaries and special states of linear dynamical systems. Complex eigenvalues transition the system between simple nodal behavior and oscillatory behavior, defining the physics of resonance and rotation. Repeated eigenvalues mark the critical transition points—often called "bifurcations"—where the topological nature of the equilibrium changes. 

While complex eigenvalues are handled by decomposing complex vectors into their real and imaginary components, repeated eigenvalues require a systematic search for generalized eigenvectors to fill the solution space. Together, these tools allow the analyst to construct a complete portrait of any linear system's temporal evolution. Mastery of these techniques is essential for moving from simple linear models to the complex, non-linear, or high-dimensional systems found in modern engineering applications.`;export{e as default};