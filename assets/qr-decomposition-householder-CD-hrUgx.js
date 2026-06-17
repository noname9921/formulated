var e=`# QR Decomposition and Householder Reflections

## Definition

QR decomposition is a fundamental operation in numerical linear algebra that factors a matrix $A$ into the product of two matrices, $A=QR$, where $Q$ is an orthogonal matrix and $R$ is an upper triangular matrix. Specifically, if $A \\in \\mathbb{R}^{m \\times n}$ has linearly independent columns, then $Q \\in \\mathbb{R}^{m \\times m}$ satisfies $Q^TQ=I$ (the identity matrix), and $R \\in \\mathbb{R}^{m \\times n}$ is an upper triangular matrix such that $r_{ij}=0$ for $i>j$.

Householder reflections provide a robust numerical method to achieve this decomposition. A Householder reflection is defined by a transformation matrix $H = I - 2vv^T$, where $v$ is a unit vector ($||v||_2=1$). Geometrically, this transformation represents a reflection across the hyperplane orthogonal to the vector $v$. By systematically selecting reflection vectors that zero out the elements below the diagonal of matrix $A$, one can construct the upper triangular matrix $R$ through a sequence of orthogonal transformations $H_n \\dots H_1 A = R$. Since the product of orthogonal matrices is orthogonal, we define $Q^T = H_n \\dots H_1$, yielding $Q = H_1 \\dots H_n$.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Orthogonal Matrix | A square matrix $Q$ such that $Q^TQ = QQ^T = I$. |
| Upper Triangular | A matrix $R$ where all entries below the main diagonal are zero. |
| Householder Vector | A vector $v$ used to construct a reflection $H = I - 2vv^T$. |
| Unitary Matrix | The complex analog of an orthogonal matrix where $Q^*Q = I$. |
| Rank-Deficiency | A condition where a matrix does not have full column rank. |
| Numerical Stability | The property of an algorithm to resist the growth of rounding errors. |
| Hyperplane | A subspace of dimension $n-1$ in an $n$-dimensional space. |

## Purpose

The primary utility of QR decomposition lies in solving linear least squares problems, eigenvalue computations, and linear systems. When solving $Ax=b$, the standard approach using the Gaussian elimination or $LU$ decomposition can be sensitive to precision issues if $A$ is ill-conditioned. QR decomposition offers superior stability.

By transforming $Ax=b$ into $QRx=b$, we multiply by $Q^T$ to obtain $Rx = Q^Tb$. Because $R$ is upper triangular, this system is easily solved using back substitution. In least squares problems, where we seek to minimize $||Ax-b||_2$, the orthogonality of $Q$ ensures that the $L_2$ norm remains invariant under the transformation, meaning $||Ax-b||_2 = ||QRx-b||_2 = ||Q(Rx - Q^Tb)||_2 = ||Rx - Q^Tb||_2$. This simplifies the optimization process significantly.

Householder reflections are favored for QR decomposition over other methods like the Gram-Schmidt process due to their numerical stability. While Gram-Schmidt orthogonalization is prone to losing orthogonality due to floating-point round-off, Householder reflections remain orthogonal to machine precision throughout the transformation process.

## Fundamental Properties

The QR decomposition inherits several core properties from its construction:

1. **Existence:** Any $m \\times n$ matrix $A$ has a QR decomposition. If $A$ has full column rank, $R$ will have non-zero diagonal elements.
2. **Orthogonality:** Since $Q$ is orthogonal, the map $x \\mapsto Qx$ preserves the Euclidean norm, $||Qx||_2 = ||x||_2$. This is crucial for maintaining numerical accuracy during iterative solvers.
3. **Uniqueness:** If $A$ is non-singular, the QR decomposition is unique, provided that we constrain the diagonal elements of $R$ to be positive.
4. **Energy Conservation:** Because $H$ is a reflection, it is both orthogonal and symmetric ($H^T = H = H^{-1}$), which makes the computational overhead of applying the reflection very low.
5. **Stability:** The Householder algorithm is unconditionally stable, meaning it does not amplify the relative error of the input data as severely as non-orthogonal methods.

## Types & Variations

There are several variations of the QR decomposition depending on the structure of the matrix and the requirements of the problem:

1. **Reduced QR:** For $A \\in \\mathbb{R}^{m \\times n}$ with $m \\ge n$, $Q$ can be partitioned into $Q_1 \\in \\mathbb{R}^{m \\times n}$ and $Q_2 \\in \\mathbb{R}^{m \\times (m-n)}$, where $Q_1$ contains the first $n$ columns. The decomposition becomes $A = Q_1R_1$, where $R_1 \\in \\mathbb{R}^{n \\times n}$ is upper triangular. This is space-efficient.
2. **Column Pivoting:** In $AP = QR$, where $P$ is a permutation matrix, we rearrange columns of $A$ to ensure that the diagonal elements of $R$ are non-increasing in magnitude. This is particularly useful for detecting the numerical rank of a matrix.
3. **Full vs. Economy Size:** The "full" decomposition provides an $m \\times m$ matrix $Q$, while the "economy" version provides only the columns necessary to satisfy the $m \\times n$ requirement.
4. **Complex Householder:** When dealing with complex-valued matrices, the reflection is modified to $H = I - 2vv^* / v^*v$, ensuring $Q$ remains unitary.

## How to Solve

To decompose a matrix $A$ using Householder reflections, follow these algorithmic steps:

1. **Initialization:** Let $k=1$ and $A^{(0)} = A$.
2. **Select Vector:** Identify the first column $x$ of the current submatrix $A^{(k-1)}$. We want to find a reflection $H_k$ such that $H_k x = \\alpha e_1$, where $e_1$ is the first standard basis vector and $\\alpha = \\pm ||x||_2$.
3. **Construct Reflection:** Choose $v = x - \\alpha e_1$ (or $x + \\alpha e_1$ for stability) and normalize it to construct $H_k = I - 2(vv^T)/(v^Tv)$.
4. **Update:** Apply the transformation: $A^{(k)} = H_k A^{(k-1)}$. This zeros out entries below the pivot.
5. **Iterate:** Repeat steps 2-4 for the next submatrix, moving down the diagonal ($k = k+1$).
6. **Finalize:** The result after $n$ iterations is $R$. The matrix $Q$ is obtained by accumulating the reflections: $Q = H_1 H_2 \\dots H_n$.

As a conceptual example, consider the transformation of a 2D vector $x = [x_1, x_2]^T$ into the form $[ \\alpha, 0 ]^T$. The reflection vector $v$ effectively rotates the coordinate system to align with the axis, a process visualized by the reflection across a line.

The graph below plots the effect of a Householder reflection on a unit circle, illustrating how $f(x) = \\sqrt{1-x^2}$ and its negative counterpart represent the geometric boundary being reflected across a line defined by a Householder vector $v$.

\`\`\`graph
\\sqrt{1-x^2}
-\\sqrt{1-x^2}
\`\`\`

This reflects the geometric property of $H$ as an isometry. When performing these transformations in a computational environment, one must use the sign of the pivot element to avoid subtraction cancellation (choosing $\\alpha = -\\text{sign}(x_1)||x||_2$).

## Summary

QR decomposition via Householder reflections is a cornerstone of numerical linear algebra. By leveraging the geometric concept of reflections, the method transforms any matrix into an upper triangular form while preserving the structural integrity of the data through orthogonal transformations. Its primary advantages are numerical stability, efficiency in solving least squares problems, and its role as a precursor to eigenvalue algorithms like the QR algorithm. While other methods like Gram-Schmidt or Givens rotations exist, Householder reflections remain the gold standard for dense matrix decompositions where robustness against round-off error is paramount. Understanding the interplay between the reflection vector $v$, the orthogonal matrix $Q$, and the triangular matrix $R$ provides the necessary foundation for advanced computational tasks in engineering, physics, and data science.`;export{e as default};