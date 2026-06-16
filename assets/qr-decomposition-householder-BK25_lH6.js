var e=`# QR Decomposition and Householder Reflections

## Definition

QR decomposition is a fundamental process in numerical linear algebra that factors a matrix $A$ into the product of an orthogonal matrix $Q$ and an upper triangular matrix $R$. Specifically, for any real $m \\times n$ matrix $A$ with $m \\ge n$, there exists a decomposition such that $A=QR$, where $Q$ is an $m \\times m$ orthogonal matrix (satisfying $Q^TQ=I_m$) and $R$ is an $m \\times n$ upper triangular matrix. 

In numerical practice, Householder reflections are the preferred algorithm to compute this decomposition due to their superior numerical stability compared to the Gram-Schmidt process. A Householder reflection is a linear transformation that reflects a vector about a hyperplane. The associated matrix, known as a Householder matrix $H$, is defined as $H=I-2vv^T$, where $v$ is a unit vector (i.e., $||v||_2=1$). This matrix is both symmetric ($H^T=H$) and orthogonal ($H^TH=I$). By applying a sequence of such reflections to the columns of $A$, one can systematically zero out the entries below the diagonal, effectively transforming $A$ into the upper triangular matrix $R$.

## Key Terminology

To understand the mechanics of QR decomposition, one must be familiar with the following concepts:

| Term | Definition |
| :--- | :--- |
| Orthogonal Matrix | A square matrix $Q$ such that $Q^TQ = QQ^T = I$. It preserves lengths and angles. |
| Upper Triangular | A matrix where all entries below the main diagonal are zero ($r_{ij}=0$ for $i > j$). |
| Householder Vector | A vector $v$ used to define the reflection $H = I-2vv^T$. |
| Householder Reflection | An isometric transformation that maps one vector to another of the same length by reflecting across a plane. |
| Orthogonalization | The process of constructing a set of orthogonal vectors from a linearly independent set. |
| Stability | The property of an algorithm where rounding errors do not grow uncontrollably during computation. |

## Purpose

The primary purpose of QR decomposition is to solve linear systems $Ax=b$ and linear least-squares problems $min||Ax-b||_2$ with high numerical reliability. While the LU decomposition is computationally cheaper, it can be unstable for matrices that are not diagonally dominant or possess poor condition numbers. QR decomposition, particularly when implemented via Householder reflections, provides a robust alternative.

Furthermore, QR decomposition is the foundational engine behind the QR algorithm, which is the most widely used method for computing eigenvalues and eigenvectors of matrices. Because $A_k = Q_kR_k$ and $A_{k+1} = R_kQ_k$ share the same eigenvalues, iteratively performing this decomposition allows the matrix to converge toward a form (like the Schur form or diagonal form) from which eigenvalues are easily extracted.

## Fundamental Properties

The Householder reflection possesses several algebraic properties that make it uniquely suited for matrix decomposition:

1. **Involutory Nature:** Since $H^2 = (I-2vv^T)(I-2vv^T) = I - 4vv^T + 4v(v^Tv)v^T$. Given $||v||=1$, $v^Tv=1$, thus $H^2 = I - 4vv^T + 4vv^T = I$. This means a reflection is its own inverse.
2. **Orthogonality:** $H^T = (I-2vv^T)^T = I-2vv^T = H$. Thus $H^TH = H^2 = I$.
3. **Norm Preservation:** For any vector $x$, $||Hx||_2 = ||x||_2$. This prevents the amplification of numerical errors during the transformation process.
4. **Zeroing Capability:** Given a vector $x$, one can choose $v$ such that $Hx$ results in a vector where all components except the first are zero. Specifically, if $x = [x_1, x_2, \\dots, x_n]^T$, we seek $Hx = [\\pm ||x||, 0, \\dots, 0]^T$.

By applying a sequence of these matrices $H_1, H_2, \\dots, H_n$ such that $H_n \\dots H_1 A = R$, we define $Q^T = H_n \\dots H_1$, implying $Q = H_1 H_2 \\dots H_n$ because each $H_i$ is symmetric.

## Types & Variations

QR decomposition is not a monolithic algorithm; it manifests in several variants depending on the application and constraints:

1. **Full QR:** Produces a square $m \\times m$ matrix $Q$ and $m \\times n$ matrix $R$.
2. **Reduced (Thin) QR:** For $m > n$, produces an $m \\times n$ matrix $Q_1$ (with orthonormal columns) and an $n \\times n$ upper triangular matrix $R_1$. This is more space-efficient.
3. **Pivoted QR:** Incorporates column pivoting to handle rank-deficient matrices. By swapping columns to place the largest norm in the diagonal position, one can estimate the rank of $A$ and handle ill-conditioned matrices effectively.
4. **Gram-Schmidt QR:** While theoretically elegant, the Classical Gram-Schmidt (CGS) method is numerically unstable. The Modified Gram-Schmidt (MGS) improves this but is still less stable than Householder reflections.
5. **Givens Rotations:** An alternative to Householder reflections that zeros out elements one by one using rotation matrices. It is preferred when $A$ is sparse or when only specific entries need to be zeroed.

The following graph plots a linear transformation reflecting a vector across a plane, modeled by $f(x) = -x + c$, which serves as the 2D visualization of a reflection property.

\`\`\`graph
-x + 2
-x + 0
\`\`\`

The graph above plots the function $f(x) = -x + 2$ and $f(x) = -x$, representing hyperplanes in 2D space. Reflecting a vector across these lines demonstrates the orthogonal mapping essential to understanding Householder reflections.

## How to Solve

To perform QR decomposition using Householder reflections on an $m \\times n$ matrix $A$, follow these algorithmic steps:

1. **Initialization:** Start with $R = A$ and $Q = I_m$.
2. **Iteration:** For each column $k = 1$ to $n$:
   - Extract the sub-vector $x = R[k:m, k]$.
   - Compute the Householder vector $v$. Let $e_1 = [1, 0, \\dots, 0]^T$. Calculate $v = x + \\text{sign}(x_1)||x||_2 e_1$.
   - Normalize $v = v / ||v||_2$.
   - Define the Householder matrix $H_k = I - 2vv^T$.
   - Update $R = H_k R$. (Only the sub-matrix $R[k:m, k:n]$ needs to be updated).
   - Update $Q = Q H_k$.
3. **Completion:** The final $R$ is upper triangular, and $Q$ is orthogonal such that $A=QR$.

**Example:**
Consider a $3 \\times 2$ matrix $A = [[3, 1], [4, 1], [0, 1]]$.
1. To zero out the entries below the first element of the first column ($x = [3, 4, 0]^T$):
   - $||x||_2 = \\sqrt{3^2+4^2+0^2} = 5$.
   - $v = [3+5, 4, 0]^T = [8, 4, 0]^T$.
   - Normalize $v$ to unit length.
   - Construct $H_1 = I - 2vv^T$.
2. Apply $H_1$ to $A$. The first column of the resulting matrix will be $[5, 0, 0]^T$.
3. Proceed to the next column and continue until the lower triangular part is eliminated.

This methodology ensures that the transformation is performed via orthogonal matrices, which do not increase the condition number of the problem, thus maintaining precision.

## Summary

QR decomposition via Householder reflections represents a pinnacle of numerical linear algebra. By leveraging the geometric properties of reflections, we transform arbitrary matrices into a product of orthogonal and upper triangular components. This process circumvents the catastrophic loss of orthogonality seen in simpler methods like Gram-Schmidt. 

The stability provided by Householder transformations allows for reliable computation in solving overdetermined linear systems and eigenvalue problems. As demonstrated, the algorithm is structured iteratively, making it computationally efficient and highly parallelizable for modern hardware. Whether dealing with full rank or rank-deficient systems, the application of pivoted Householder QR ensures that engineers and scientists have a consistent, stable, and theoretically sound framework for matrix manipulation. Understanding these reflections is not merely an academic exercise; it is an essential skill for anyone working in scientific computing, data analysis, or computer graphics where geometric transformations and matrix systems are ubiquitous.`;export{e as default};