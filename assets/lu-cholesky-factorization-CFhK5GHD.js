var e=`# LU Factorization and Cholesky Decomposition

Numerical linear algebra forms the backbone of computational science, providing the algorithms necessary to solve systems of linear equations, invert matrices, and analyze data structures. Among the most critical techniques in this field are LU Factorization and Cholesky Decomposition. These methods transform complex matrices into simpler, triangular forms, allowing for efficient computation through forward and backward substitution.

## Definition

LU Factorization is the decomposition of a square matrix $A$ into the product of two triangular matrices: a lower triangular matrix $L$ and an upper triangular matrix $U$, such that $A=LU$. In the basic form, $L$ has ones on its diagonal (unit lower triangular), while $U$ contains the upper triangular elements derived during Gaussian elimination. This process is essentially a matrix representation of Gaussian elimination without the right-hand side vector.

Cholesky Decomposition is a specialized form of LU factorization applicable exclusively to Hermitian (or symmetric, in the real case), positive-definite matrices. It factors a matrix $A$ into the product of a lower triangular matrix $L$ and its conjugate transpose (or transpose) $L^*$, such that $A=LL^*$. This decomposition is significant because it requires roughly half the computational effort of standard LU factorization and is numerically stable for symmetric positive-definite systems.

## Key Terminology

*   **Positive Definite Matrix:** A symmetric matrix $A$ for which $x^*Ax>0$ for all non-zero vectors $x$. These matrices guarantee that the diagonal elements in Cholesky decomposition remain real and positive.
*   **Triangular Matrix:** A square matrix where all entries above (lower triangular) or below (upper triangular) the main diagonal are zero.
*   **Pivoting:** The process of swapping rows or columns during decomposition to avoid division by zero or very small numbers, which minimizes numerical round-off errors.
*   **Gaussian Elimination:** The algorithmic procedure of transforming a matrix into row-echelon form using elementary row operations.
*   **Computational Complexity:** Measured in floating-point operations (flops). LU decomposition generally requires $\\frac{2}{3}n^3$ flops, whereas Cholesky decomposition requires $\\frac{1}{3}n^3$ flops.
*   **Condition Number:** A measure of how sensitive the solution of a linear system is to errors in the input data. Well-conditioned matrices have low condition numbers, making them ideal for LU and Cholesky methods.

## Purpose

The primary purpose of these factorizations is to solve the linear system $Ax=b$. By decomposing $A$, the problem $Ax=b$ becomes $LUx=b$. We define an intermediate vector $y$ such that $Ly=b$, which is solved easily via forward substitution. Once $y$ is found, we solve $Ux=y$ via back substitution.

Beyond solving linear systems, these techniques are utilized for:
1.  **Matrix Inversion:** Finding the inverse $A^{-1}$ by solving $AX=I$ column by column.
2.  **Determinant Calculation:** The determinant of $A$ is simply the product of the diagonal elements of $U$ (for LU) or the square of the product of the diagonal elements of $L$ (for Cholesky).
3.  **Optimization:** Many optimization algorithms, such as those solving least-squares problems or interior-point methods, rely on Cholesky decomposition to handle the Hessian matrices.
4.  **Monte Carlo Simulations:** Cholesky decomposition is used to generate correlated random variables by transforming uncorrelated samples.

## Fundamental Properties

Both methods rely on the properties of triangular systems. A lower triangular matrix $L$ simplifies the equation $Ly=b$ because the first variable is determined immediately, and subsequent variables are determined sequentially.

For LU Factorization, the existence of a unique $LU$ decomposition requires that all leading principal minors of $A$ are non-zero. If this condition is not met, row permutations (Partial Pivoting) represented by a permutation matrix $P$ are required, yielding the $PA=LU$ form.

For Cholesky Decomposition, the requirement of positive definiteness is absolute. If a matrix is positive definite, the Cholesky factor $L$ is unique if we constrain the diagonal elements to be positive. Geometrically, this reflects that the transformation defined by a positive-definite matrix maps vectors into a space where they maintain a positive inner product, a property essential in statistical covariance modeling.

The following table summarizes the comparison between these two methods:

| Feature | LU Factorization | Cholesky Decomposition |
| :--- | :--- | :--- |
| Matrix Requirement | Square, non-singular | Symmetric, positive-definite |
| Complexity (flops) | $\\frac{2}{3}n^3$ | $\\frac{1}{3}n^3$ |
| Stability | Requires pivoting | Inherently stable |
| Output | $A=LU$ | $A=LL^*$ |
| Diagonal of $L$ | Unit (1s) | Square root of residual |

## Types & Variations

1.  **Doolittle’s Algorithm:** An LU variation where $L$ is forced to have unit diagonal elements.
2.  **Crout’s Algorithm:** An LU variation where $U$ is forced to have unit diagonal elements.
3.  **LDLt (Cholesky-Banachiewicz):** A variation that decomposes $A$ into $LDL^*$, where $D$ is a diagonal matrix. This avoids computing square roots, which can be computationally expensive or lead to complex numbers if the matrix is not positive-definite.
4.  **Block LU/Cholesky:** Used for large, sparse matrices where the matrix is partitioned into smaller blocks to fit into cache memory or to utilize parallel processing architectures.
5.  **Sparse LU:** Variations that preserve the sparsity pattern of the original matrix by reordering rows and columns, significantly reducing the fill-in (zero elements becoming non-zero during elimination).

## How to Solve

### LU Factorization Process
Given $A = \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix}$:
1. Set $l_{11} = 1, l_{21} = a_{21}/u_{11}$.
2. Determine $u_{11} = a_{11}, u_{12} = a_{12}$.
3. Solve for remaining elements via $u_{22} = a_{22} - l_{21}u_{12}$.
4. Generalize for $n \\times n$ using nested loops for $i$ and $j$.

### Cholesky Decomposition Process
To find $L$ for $A$ where $a_{ij} = \\sum_{k=1}^j l_{ik}l_{jk}$:
1. For the diagonal elements: $l_{ii} = \\sqrt{a_{ii} - \\sum_{k=1}^{i-1} l_{ik}^2}$.
2. For the off-diagonal elements ($i > j$): $l_{ij} = \\frac{1}{l_{jj}} \\left( a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk} \\right)$.
3. Iterate through columns $j=1$ to $n$, then through rows $i=j$ to $n$.

### Graphical Representation
To visualize the growth rate difference in operations between these methods, consider the following graph plotting the number of floating point operations as a function of matrix dimension $n$, assuming a coefficient of $2/3$ for LU and $1/3$ for Cholesky.

\`\`\`graph
(2/3)*x^3
(1/3)*x^3
\`\`\`

The graph above plots the cubic complexity functions $f(n) = \\frac{2}{3}n^3$ and $g(n) = \\frac{1}{3}n^3$, representing the total number of operations required for LU Factorization and Cholesky Decomposition, respectively. As $n$ increases, the divergence between these two curves highlights the efficiency gains provided by the Cholesky method when the symmetry and positive-definiteness criteria are met.

## Summary

LU Factorization and Cholesky Decomposition are essential tools for solving linear algebraic systems. LU is the versatile workhorse, capable of handling any non-singular square matrix, provided that pivoting strategies are employed to manage numerical stability. In contrast, Cholesky Decomposition serves as the high-performance specialist, restricted to symmetric positive-definite matrices. By exploiting the symmetry of the input, Cholesky reduces the computational load by fifty percent and provides an elegant, stable mechanism for inversion and system resolution. Understanding these decompositions is prerequisite for advanced numerical analysis, engineering simulations, and large-scale data science applications, as they bridge the gap between abstract linear algebra and practical, performant software implementation.`;export{e as default};