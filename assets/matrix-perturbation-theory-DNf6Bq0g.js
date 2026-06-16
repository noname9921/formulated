var e=`# Perturbation Theory of Eigenvalues

## Definition

Perturbation theory of eigenvalues is a mathematical framework used to determine how the eigenvalues and eigenvectors of a linear operator change when the operator itself is subjected to a small modification, or "perturbation." In many physical and engineering systems, the exact solution to an eigenvalue problem $Av=\\lambda v$ is either computationally intractable or analytically unavailable. However, if the operator $A$ can be expressed as $A = A_0 + \\epsilon V$, where $A_0$ is a simpler "unperturbed" operator, $\\epsilon$ is a small dimensionless parameter, and $V$ is the perturbation, we can express the new eigenvalues and eigenvectors as power series expansions in $\\epsilon$.

Formally, we seek solutions for the perturbed system $(A_0+\\epsilon V)(v_0+\\epsilon v_1+\\epsilon^2 v_2+\\dots) = (\\lambda_0+\\epsilon \\lambda_1+\\epsilon^2 \\lambda_2+\\dots)(v_0+\\epsilon v_1+\\epsilon^2 v_2+\\dots)$. By collecting terms of equal powers of $\\epsilon$, we can solve for the corrections to the eigenvalues $\\lambda_n$ and the eigenvectors $v_n$ systematically.

## Key Terminology

To navigate this theory, several foundational concepts must be understood:

| Term | Definition |
| :--- | :--- |
| Unperturbed Operator | The baseline operator $A_0$ whose eigenvalues and eigenvectors are known. |
| Perturbation | The term $\\epsilon V$ representing the deviation from the ideal $A_0$. |
| Order of Correction | The power of $\\epsilon$ at which a term is calculated (e.g., first-order is $\\mathcal{O}(\\epsilon)$). |
| Non-degenerate | A state where each eigenvalue has a unique, linearly independent eigenvector. |
| Degenerate | A state where multiple eigenvectors correspond to the same eigenvalue, requiring specialized handling. |
| Rayleigh-Schrödinger expansion | The standard iterative approach to solving for eigenvalues in a power series. |
| Secular Equation | The characteristic equation used in degenerate perturbation theory to resolve eigenvalue splitting. |

## Purpose

The primary purpose of perturbation theory is to provide approximate solutions to problems that are otherwise unsolvable. In quantum mechanics, the Hamiltonian of a complex atom or molecule is too complicated to diagonalize exactly; perturbation theory allows us to treat the interactions between electrons as small adjustments to the independent-particle model. 

In structural engineering, perturbation theory is used to analyze how structural frequencies (eigenvalues of a stiffness-mass matrix) shift when the geometry or material properties of a bridge or frame are slightly modified. By calculating the sensitivity of an eigenvalue to a specific parameter, engineers can perform robust design optimizations without re-solving the full system matrix from scratch for every iteration.

## Fundamental Properties

Perturbation theory relies on the assumption that the operator $A(\\epsilon)$ depends analytically on $\\epsilon$ in the neighborhood of $\\epsilon=0$. Several key properties define the behavior of the perturbed system:

1. **Convergence**: For sufficiently small $\\epsilon$, the series expansions for $\\lambda(\\epsilon)$ and $v(\\epsilon)$ are convergent. This is guaranteed if the perturbation $V$ is bounded relative to $A_0$.
2. **Eigenvalue Splitting**: In the presence of degeneracy, a small perturbation can "lift" the degeneracy, causing a single eigenvalue of the unperturbed system to split into multiple distinct eigenvalues. This is a critical phenomenon in physics, such as the Zeeman effect in atomic spectra.
3. **Orthogonality**: Under perturbation, the eigenvectors maintain their normalization properties. In the case of Hermitian operators, the perturbed eigenvectors remain orthogonal to each other to first order.
4. **Sensitivity**: The magnitude of the shift $\\Delta \\lambda = \\lambda - \\lambda_0$ is often directly proportional to the expectation value of the perturbation operator $V$ in the unperturbed state, $\\langle v_0 | V | v_0 \\rangle$.

## Types & Variations

Perturbation theory is categorized based on the nature of the eigenvalues of the unperturbed operator $A_0$:

### Non-degenerate Perturbation Theory
This is the most common application. It assumes that the unperturbed eigenvalue $\\lambda_0$ is distinct. The correction $\\lambda_1$ is found simply by projecting the perturbation into the unperturbed basis. The shift is given by $\\lambda_1 = \\langle v_0 | V | v_0 \\rangle$ (assuming normalized vectors).

### Degenerate Perturbation Theory
If $\\lambda_0$ is shared by multiple eigenvectors, the standard non-degenerate formulas break down (leading to division by zero). In this case, one must construct a "secular matrix" using the matrix elements $V_{ij} = \\langle v_{0,i} | V | v_{0,j} \\rangle$ restricted to the degenerate subspace. Diagonalizing this smaller matrix yields the first-order corrections as its eigenvalues.

### Time-Dependent Perturbation Theory
While static perturbation theory looks at constant changes, time-dependent theory deals with operators that vary as $A(t) = A_0 + \\epsilon V(t)$. This is vital for analyzing transitions between states in dynamic systems, often using the Dyson series or interaction picture operators.

## How to Solve

The systematic procedure for non-degenerate perturbation theory follows these steps:

1. **Expand the equation**: Substitute $\\lambda = \\lambda_0 + \\epsilon \\lambda_1 + \\epsilon^2 \\lambda_2 + \\dots$ and $v = v_0 + \\epsilon v_1 + \\epsilon^2 v_2 + \\dots$ into $(A_0 + \\epsilon V)v = \\lambda v$.
2. **Equate powers of $\\epsilon$**:
   - Order $\\epsilon^0$: $A_0 v_0 = \\lambda_0 v_0$. This confirms the base state.
   - Order $\\epsilon^1$: $A_0 v_1 + V v_0 = \\lambda_0 v_1 + \\lambda_1 v_0$.
3. **Solve for First-Order**: To find $\\lambda_1$, left-multiply by the dual vector $v_0^*$ (the conjugate transpose):
   $$ \\langle v_0 | A_0 | v_1 \\rangle + \\langle v_0 | V | v_0 \\rangle = \\lambda_0 \\langle v_0 | v_1 \\rangle + \\lambda_1 \\langle v_0 | v_0 \\rangle $$
   Since $A_0$ is Hermitian, $\\langle v_0 | A_0 = \\lambda_0 \\langle v_0 |$. The terms $\\langle v_0 | A_0 | v_1 \\rangle$ and $\\lambda_0 \\langle v_0 | v_1 \\rangle$ cancel, leaving:
   $$ \\lambda_1 = \\langle v_0 | V | v_0 \\rangle $$
4. **Higher Orders**: Repeat the projection process for $\\epsilon^2$ to find $\\lambda_2$, which typically involves the summation over all other unperturbed states $v_k$:
   $$ \\lambda_2 = \\sum_{k \\neq 0} \\frac{|\\langle v_k | V | v_0 \\rangle|^2}{\\lambda_0 - \\lambda_k} $$

The following interactive graph demonstrates how a perturbation parameter $\\epsilon$ impacts the eigenvalue of a simple $2 \\times 2$ matrix system $A = A_0 + \\epsilon V$. 

\`\`\`interactivegraph
(1 + epsilon) * x^2 + (epsilon) * x
params: epsilon=0.1
range: epsilon=-1:1
\`\`\`

In this interactive visualization, the function represents the characteristic behavior of an eigenvalue shift as the perturbation parameter $\\epsilon$ varies. Observe how the slope at $\\epsilon=0$ corresponds to the first-order correction $\\lambda_1$, and the curvature represents higher-order effects.

## Summary

Perturbation theory of eigenvalues provides a robust mathematical framework for analyzing systems where small deviations from a known model occur. By treating the total operator as an expansion in a small parameter $\\epsilon$, we convert a potentially impossible exact eigenvalue problem into a sequence of solvable linear algebra operations. 

Key takeaways include:
- **Non-degenerate systems** yield shifts proportional to the expectation value of the perturbation in the unperturbed state.
- **Degenerate systems** require the diagonalization of a secular matrix, causing eigenvalue splitting.
- The **Rayleigh-Schrödinger expansion** remains the cornerstone of this methodology, providing high-order accuracy through recursive calculations.
- Applications range from atomic physics (Zeeman and Stark effects) to structural dynamics, where the sensitivities of eigenvalues are used to tune complex engineering systems.

Mastery of this theory allows researchers to predict, understand, and refine the behavior of complex systems with high precision, provided the underlying perturbation is small relative to the principal dynamics of the system.`;export{e as default};