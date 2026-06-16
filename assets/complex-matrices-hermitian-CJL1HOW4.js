var e=`# Complex Matrices: Hermitian, Skew-Hermitian, and Unitary

## Definition

In the study of linear algebra over the complex field $\\mathbb{C}$, we transition from the familiar domain of real matrices to those containing complex entries $a + bi$. The behavior of these matrices is governed by the concept of the conjugate transpose, also known as the adjoint or Hermitian conjugate. If $A$ is a complex matrix, its conjugate transpose, denoted by $A^*$, is obtained by taking the transpose of $A$ and replacing each element with its complex conjugate: $A^* = (\\bar{A})^T$.

A matrix $A \\in \\mathbb{C}^{n \\times n}$ is classified based on its relationship with $A^*$:

1. **Hermitian Matrix**: A matrix such that $A = A^*$. This is the complex analogue of a symmetric matrix.
2. **Skew-Hermitian Matrix**: A matrix such that $A = -A^*$. This is the complex analogue of an antisymmetric (skew-symmetric) matrix.
3. **Unitary Matrix**: A matrix such that $A^* A = AA^* = I$. This is the complex analogue of an orthogonal matrix, representing an isometry in complex inner product spaces.

## Key Terminology

* **Complex Conjugate**: For $z = a + bi$, the conjugate is $\\bar{z} = a - bi$.
* **Conjugate Transpose ($A^*$)**: The matrix formed by $(A^*)_{ij} = \\overline{A_{ji}}$. It is the standard adjoint in the context of matrices.
* **Inner Product Space**: A vector space $V$ equipped with a sesquilinear form $\\langle u, v \\rangle$ that is conjugate-symmetric and positive-definite.
* **Isometry**: A transformation that preserves distances, defined by $\\|Ax\\| = \\|x\\|$ for all vectors $x$.
* **Eigenvalues**: Scalars $\\lambda$ such that $Av = \\lambda v$ for some non-zero vector $v$.
* **Spectral Decomposition**: The representation of a matrix as a sum of projections onto its eigenspaces.

## Purpose

The study of these matrices is foundational to quantum mechanics, signal processing, and numerical analysis. In quantum mechanics, physical observables are represented by Hermitian operators because they are guaranteed to have real eigenvalues, which correspond to measurable physical quantities. Unitary matrices represent time evolution and symmetry transformations, ensuring that probability amplitudes remain conserved (i.e., the total probability remains $1$).

In numerical linear algebra, unitary matrices (such as those arising from QR decomposition) are prized for their numerical stability. Multiplying a vector by a unitary matrix does not magnify rounding errors because the operation preserves the Euclidean norm. Skew-Hermitian matrices appear in the context of the Schrödinger equation, where the time-evolution operator $U(t) = e^{tA}$ is unitary if and only if $A$ is skew-Hermitian.

## Fundamental Properties

The interplay between these matrices and their eigenvalues provides deep insights into their structure.

### Hermitian Matrices
* **Real Eigenvalues**: If $A$ is Hermitian, all eigenvalues are real.
* **Orthogonal Eigenspaces**: Eigenvectors corresponding to distinct eigenvalues are orthogonal with respect to the standard complex inner product.
* **Spectral Theorem**: Every Hermitian matrix is unitarily diagonalizable. That is, $A = UDU^*$ where $U$ is unitary and $D$ is a diagonal matrix of real eigenvalues.

### Skew-Hermitian Matrices
* **Purely Imaginary Eigenvalues**: If $A$ is skew-Hermitian, all eigenvalues are either zero or purely imaginary (of the form $bi$ where $b \\in \\mathbb{R}$).
* **Relationship to Hermitian**: If $A$ is skew-Hermitian, then $iA$ is Hermitian. This mapping allows us to import all spectral theorems from the Hermitian case directly to the skew-Hermitian case.

### Unitary Matrices
* **Modulus of Eigenvalues**: All eigenvalues $\\lambda$ of a unitary matrix satisfy $|\\lambda| = 1$.
* **Norm Preservation**: For any vector $x \\in \\mathbb{C}^n$, $\\|Ax\\| = \\|x\\|$. This implies that unitary matrices represent rotations or reflections in complex space.
* **Unitary Group**: The set of all $n \\times n$ unitary matrices forms a group under multiplication, denoted $U(n)$.

## Types & Variations

We can categorize complex matrices by looking at how they decompose. Any square complex matrix $A$ can be uniquely written as the sum of a Hermitian matrix and a skew-Hermitian matrix:

$$A = \\frac{A + A^*}{2} + \\frac{A - A^*}{2}$$

Let $H = \\frac{A + A^*}{2}$ (the Hermitian part) and $S = \\frac{A - A^*}{2}$ (the skew-Hermitian part). It is easily verified that $H^* = H$ and $S^* = -S$.

| Matrix Type | Condition | Eigenvalue Constraint |
| :--- | :--- | :--- |
| Hermitian | $A^* = A$ | $\\lambda \\in \\mathbb{R}$ |
| Skew-Hermitian | $A^* = -A$ | $\\lambda \\in \\{bi : b \\in \\mathbb{R}\\}$ |
| Unitary | $A^* A = I$ | $|\\lambda| = 1$ |
| Normal | $A^* A = AA^*$ | Arbitrary $\\mathbb{C}$ |

The class of **Normal Matrices** is the most inclusive. A matrix is normal if it commutes with its adjoint. Hermitian, skew-Hermitian, and unitary matrices are all specific subsets of normal matrices. The Spectral Theorem for normal matrices states that a matrix is normal if and only if it is unitarily diagonalizable.

## How to Solve

Solving problems involving these matrices typically involves finding eigenvalues and eigenvectors. Because these matrices are normal, they admit a complete orthonormal basis of eigenvectors.

### Step-by-Step Diagonalization Procedure
1. **Identify the Matrix**: Determine if the matrix is Hermitian, skew-Hermitian, or unitary.
2. **Find the Characteristic Equation**: Compute $\\det(A - \\lambda I) = 0$.
3. **Solve for Eigenvalues**: Find the roots $\\lambda_1, \\lambda_2, \\dots, \\lambda_n$.
   - If Hermitian, confirm $\\lambda_i \\in \\mathbb{R}$.
   - If skew-Hermitian, confirm $\\text{Re}(\\lambda_i) = 0$.
   - If unitary, confirm $|\\lambda_i| = 1$.
4. **Determine Eigenvectors**: Solve $(A - \\lambda_i I)v_i = 0$ for each eigenvalue.
5. **Orthonormalize**: Use the Gram-Schmidt process if necessary, though for distinct eigenvalues, eigenvectors of normal matrices are already orthogonal.
6. **Construct $U$ and $D$**: Form the unitary matrix $U$ by placing normalized eigenvectors as columns, and $D$ as the diagonal matrix of corresponding eigenvalues.

### Example: Decomposition of a Normal Matrix
Consider a matrix $A$ where we wish to observe the relationship between the magnitude of eigenvalues and the transformation. While we cannot visualize the complex space directly, we can examine the magnitude of eigenvalues $\\lambda$ in the complex plane. 

\`\`\`interactivegraph
\\sqrt{(x-a)^2 + b^2}
params: a=0, b=1
range: a=-2:2, b=-2:2
\`\`\`

In the interactive graph above, imagine the variable $x$ representing the real part of an eigenvalue, while the parameter $b$ represents the imaginary component. For a unitary matrix, the eigenvalues lie on the unit circle. Adjusting the parameters allows one to visualize how the "distance" or magnitude from the origin $0$ reflects the modulus of the eigenvalue, which is constrained to $1$ for unitary matrices.

## Summary

Complex matrices extend the utility of linear algebra into realms where phase and rotation are critical. Hermitian matrices provide the bedrock for self-adjoint operators, ensuring real measurements in physical systems. Skew-Hermitian matrices describe the infinitesimal generators of these systems. Unitary matrices provide the structure for symmetry and stability, ensuring that inner products are preserved across transformations.

The unifying principle for these three types is the concept of **normality**. A matrix is normal if and only if it is unitarily diagonalizable, a property that allows us to decompose complex operators into simple, decoupled scalar actions along orthogonal basis vectors. Understanding these matrices is not merely a theoretical exercise; it is a prerequisite for mastering advanced physics, control theory, and quantum computing. By leveraging the properties of $A^*$, we gain the ability to simplify massive systems of linear equations into independent components, rendering complex problems tractable.`;export{e as default};