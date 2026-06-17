var e=`# LU Factorization and Cholesky Decomposition

Numerical linear algebra forms the backbone of computational science, providing the algorithms necessary to solve systems of linear equations, invert matrices, and perform statistical analysis. Among the most critical techniques are LU factorization and Cholesky decomposition, which transform dense matrix operations into structured, computationally efficient procedures.

## Definition

LU factorization is a matrix decomposition method that expresses a square matrix $A$ as the product of two triangular matrices: a lower triangular matrix $L$ and an upper triangular matrix $U$. Formally, for a matrix $A \\in \\mathbb{R}^{n \\times n}$, we seek to compute $A=LU$, where $L$ has ones on its diagonal (unit lower triangular) and $U$ is upper triangular. If row interchanges are required to maintain numerical stability, this becomes $PA=LU$, where $P$ is a permutation matrix.

Cholesky decomposition is a specialized, more efficient variation of LU factorization designed exclusively for Hermitian (or symmetric), positive-definite matrices. It decomposes a matrix $A$ into the product of a lower triangular matrix $L$ and its conjugate transpose (or transpose for real matrices) $L^*$. That is, $A=LL^*$. This decomposition exists if and only if $A$ is positive definite, meaning for any non-zero vector $x$, the quadratic form $x^*Ax > 0$.

## Key Terminology

To master these decompositions, one must understand the structural components of matrices involved:

| Term | Definition |
| :--- | :--- |
| Lower Triangular Matrix ($L$) | A square matrix where all entries above the main diagonal are zero. |
| Upper Triangular Matrix ($U$) | A square matrix where all entries below the main diagonal are zero. |
| Permutation Matrix ($P$) | A matrix obtained by permuting the rows of an identity matrix, used to track row swaps. |
| Positive Definite | A symmetric matrix where all eigenvalues are strictly positive. |
| Pivot | The element used as a divisor during Gaussian elimination to eliminate entries in a column. |
| Stability | The degree to which an algorithm resists magnification of rounding errors. |
| Flops | Floating-point operations, the standard metric for computational complexity. |

## Purpose

The primary motivation for these decompositions is the efficient solution of the linear system $Ax=b$. Solving a system directly via Gaussian elimination is computationally expensive ($O(n^3)$) and must be repeated entirely if the vector $b$ changes. By factorizing $A$ once, we reduce the problem to solving two successive triangular systems, which are significantly faster ($O(n^2)$).

For LU factorization, the process becomes:
1. Decompose $A=LU$.
2. Solve $Ly=b$ using forward substitution.
3. Solve $Ux=y$ using backward substitution.

Cholesky decomposition serves a dual purpose. Beyond solving linear systems, it is the standard method for generating multivariate normal random variables. In financial modeling and structural engineering, a vector of independent standard normal variables $z$ is transformed into correlated variables $x$ via $x=\\mu + Lz$, where $LL^*$ is the covariance matrix. Because $L$ is triangular, this computation is highly optimized for modern hardware.

## Fundamental Properties

The utility of these methods is rooted in the mathematical properties of matrix multiplication and triangular structures. 

1. **Existence:** LU factorization exists for any non-singular matrix $A$ if the principal minors are non-zero. If any minor is zero, row pivoting ($PA=LU$) is required. Cholesky decomposition requires the matrix to be strictly positive definite; otherwise, the square root of a non-positive number would be required during the calculation.
2. **Computational Complexity:** LU factorization requires approximately $\\frac{2}{3}n^3$ flops. Cholesky decomposition, by exploiting symmetry, requires only $\\frac{1}{3}n^3$ flops, effectively doubling the speed of the computation compared to standard LU.
3. **Storage:** Both methods allow for "in-place" computation, where the input matrix $A$ is overwritten by the factors $L$ and $U$, minimizing memory overhead in high-performance environments.
4. **Numerical Stability:** Cholesky decomposition is inherently stable without the need for pivoting. LU factorization, however, is prone to instability when pivots are near zero, necessitating partial or complete pivoting strategies.

## Types & Variations

Several variations exist to address specific constraints or improve performance:

- **Doolittle’s Algorithm:** Sets the diagonal elements of $L$ to 1. This is the standard form of LU factorization.
- **Crout’s Algorithm:** Sets the diagonal elements of $U$ to 1, putting the burden of the decomposition on the lower triangular matrix.
- **LDU Decomposition:** A variation where $A=LDU$, separating the diagonal elements of $U$ into a distinct diagonal matrix $D$.
- **LDL* Decomposition:** A variant of Cholesky that avoids the computation of square roots. This is particularly useful in field arithmetic or when working with sparse matrices where square root operations are costly.
- **Block LU:** For very large matrices, the matrix is partitioned into blocks, allowing the algorithm to leverage BLAS (Basic Linear Algebra Subprograms) and parallel processing across multiple CPU cores.

## How to Solve

The manual derivation of LU factorization follows the Gaussian elimination procedure. Consider the matrix:
$$A = \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix}$$
To factor this into $L$ and $U$:
$$L = \\begin{pmatrix} 1 & 0 \\\\ l_{21} & 1 \\end{pmatrix}, U = \\begin{pmatrix} u_{11} & u_{12} \\\\ 0 & u_{22} \\end{pmatrix}$$
By multiplying $LU$ and equating entries to $A$:
$u_{11} = a_{11}$
$u_{12} = a_{12}$
$l_{21} = a_{21} / u_{11}$
$u_{22} = a_{22} - l_{21}u_{12}$

For larger matrices, this is generalized using the Doolittle algorithm:
1. For $i=1$ to $n$:
   - $u_{ij} = a_{ij} - \\sum_{k=1}^{i-1} l_{ik}u_{kj}$ for $j=i, \\dots, n$
   - $l_{ji} = (a_{ji} - \\sum_{k=1}^{i-1} l_{jk}u_{ki}) / u_{ii}$ for $j=i+1, \\dots, n$

For Cholesky decomposition, the algorithm is even more direct:
1. $l_{ii} = \\sqrt{a_{ii} - \\sum_{k=1}^{i-1} l_{ik}^2}$
2. $l_{ji} = \\frac{1}{l_{ii}} \\left( a_{ji} - \\sum_{k=1}^{i-1} l_{jk}l_{ik} \\right)$ for $j > i$

The graph below illustrates how the computational effort (flops) grows as a function of matrix size $n$. We plot the quadratic $f(n) = n^2$ and the cubic $g(n) = n^3$.

\`\`\`graph
n^2
n^3
\`\`\`

In the interactive graph below, we examine the behavior of a simple system transformation $y=Ax$. You can adjust the scaling parameter $a$ to observe how the magnitude of the system output responds to changes in the matrix elements.

\`\`\`interactivegraph
a*x^2 + 2
params: a=1
range: a=-3:3
\`\`\`

## Summary

LU factorization and Cholesky decomposition are foundational pillars of numerical linear algebra. LU factorization provides a robust, general-purpose method for solving arbitrary square systems, while Cholesky decomposition offers a highly optimized, stable solution specifically tailored for symmetric, positive-definite systems. Understanding these methods is essential for anyone working in fields ranging from finite element analysis and optimization to machine learning and statistics. By exploiting the inherent properties of triangular matrices, these algorithms reduce the complexity of dense matrix computations, enabling the simulation of complex systems that would otherwise be computationally intractable. The choice between them depends primarily on the properties of the matrix $A$: use Cholesky if the matrix is symmetric and positive definite to benefit from the $2\\times$ performance gain; otherwise, use LU factorization with partial pivoting for numerical reliability.`;export{e as default};