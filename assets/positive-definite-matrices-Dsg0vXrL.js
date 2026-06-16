var e=`# Positive Definite and Semidefinite Matrices

## Definition

A square matrix $A \\in \\mathbb{R}^{n \\times n}$ is considered positive definite if it is symmetric and the associated quadratic form $x^TAx$ is strictly positive for all non-zero vectors $x \\in \\mathbb{R}^n$. Formally, a symmetric matrix $A$ is positive definite if $x^TAx > 0$ for all $x \\neq 0$.

If the condition is relaxed such that $x^TAx \\geq 0$ for all $x \\in \\mathbb{R}^n$, the matrix is termed positive semidefinite. In this context, there may exist non-zero vectors $x$ for which the quadratic form evaluates to zero.

To appreciate these definitions, consider the quadratic form $f(x) = x^TAx$. For a $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the quadratic form is $ax_1^2 + (b+c)x_1x_2 + dx_2^2$. If $A$ is symmetric ($b=c$), this reduces to $ax_1^2 + 2bx_1x_2 + dx_2^2$. Positive definiteness implies that this surface is a paraboloid opening strictly upward, touching the origin only at $(0,0)$.

## Key Terminology

To navigate the theory of these matrices, several foundational concepts are required:

- **Symmetry:** By definition in real-valued contexts, positive definite matrices are symmetric ($A = A^T$). While complex Hermitian matrices ($A = A^H$) can also be positive definite, we focus here on real symmetric matrices.
- **Quadratic Form:** A scalar function defined by $Q(x) = x^TAx$. This represents the energy or "cost" associated with a vector $x$ under the transformation defined by $A$.
- **Eigenvalues:** For a symmetric matrix, all eigenvalues $\\lambda_i$ are real. A matrix is positive definite if and only if all $\\lambda_i > 0$. It is positive semidefinite if and only if all $\\lambda_i \\geq 0$.
- **Principal Minors:** The determinant of a $k \\times k$ submatrix formed by selecting the first $k$ rows and columns.
- **Cholesky Decomposition:** A matrix factorization $A = LL^T$, where $L$ is a lower triangular matrix with positive diagonal entries. This exists if and only if $A$ is positive definite.
- **Congruence:** Two matrices $A$ and $B$ are congruent if there exists an invertible matrix $P$ such that $B = P^TAP$. Positive definiteness is preserved under congruence.

## Purpose

Positive definite matrices serve as the bedrock for optimization, statistics, and physical modeling. Their primary purpose is to characterize "convexity."

In multivariable calculus, the Second Derivative Test for a function $f: \\mathbb{R}^n \\to \\mathbb{R}$ relies on the Hessian matrix $H$. If $H$ is positive definite at a critical point, the point is a local minimum. If it is negative definite, it is a local maximum. If indefinite, it is a saddle point.

In statistics, the covariance matrix of a set of random variables is always positive semidefinite. The requirement of positive semidefiniteness ensures that the variance of any linear combination of the random variables is non-negative, which is a physical and logical necessity.

In computer graphics and machine learning, kernels in support vector machines or Gaussian processes must be positive definite to ensure a valid inner product space (a Reproducing Kernel Hilbert Space). Without this property, the underlying optimization problems would become non-convex, leading to multiple local minima and numerical instability.

## Fundamental Properties

The properties of positive definite matrices are rigid and elegant. Let $A$ be an $n \\times n$ symmetric matrix.

1. **Eigenvalue Constraint:** $A$ is positive definite if and only if all its eigenvalues are strictly positive. If the smallest eigenvalue is 0, the matrix is positive semidefinite but singular.
2. **Sylvester’s Criterion:** A symmetric matrix is positive definite if and only if all its leading principal minors are positive. For example, if $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $A$ is positive definite if $a > 0$ and $ad - bc > 0$.
3. **Invertibility:** Every positive definite matrix is non-singular (invertible). Since all eigenvalues are positive, the determinant (the product of eigenvalues) must be positive.
4. **Diagonal Elements:** A positive definite matrix must have strictly positive diagonal elements. This follows from $e_i^TAe_i > 0$, where $e_i$ is the $i$-th standard basis vector.
5. **Trace:** The trace of a positive definite matrix is strictly positive because $\\text{tr}(A) = \\sum \\lambda_i > 0$.
6. **Unique Square Root:** There exists a unique positive definite matrix $B$ such that $B^2 = A$. This is denoted as $A^{1/2}$.

The following table summarizes the criteria for testing matrix definiteness based on eigenvalues:

| Matrix Type | Eigenvalues ($\\lambda$) | Quadratic Form ($x^TAx$) |
| :--- | :--- | :--- |
| Positive Definite | All $\\lambda > 0$ | $x^TAx > 0$ for $x \\neq 0$ |
| Positive Semidefinite | All $\\lambda \\geq 0$ | $x^TAx \\geq 0$ for all $x$ |
| Negative Definite | All $\\lambda < 0$ | $x^TAx < 0$ for $x \\neq 0$ |
| Negative Semidefinite | All $\\lambda \\leq 0$ | $x^TAx \\leq 0$ for all $x$ |
| Indefinite | Some $\\lambda > 0, \\lambda < 0$ | $x^TAx$ changes sign |

## Types & Variations

Variations of positive definite matrices arise when we relax or alter the fundamental definitions.

### Positive Semidefinite (PSD) Matrices
These occur when $x^TAx \\geq 0$. They represent "flat" directions in a landscape. If $A$ is PSD and singular, there exists a vector $v \\neq 0$ such that $Av = 0$, meaning the function $f(x) = x^TAx$ is constant along the direction of $v$.

### Gram Matrices
A Gram matrix $G$ is formed by the inner products of a set of vectors $\\{v_1, \\dots, v_n\\}$, where $G_{ij} = \\langle v_i, v_j \\rangle$. Every Gram matrix is positive semidefinite. Conversely, any positive semidefinite matrix can be expressed as a Gram matrix, which provides a deep connection between matrix algebra and geometry.

### Block Positive Definite Matrices
If a matrix is partitioned as $A = \\begin{pmatrix} A_{11} & A_{12} \\\\ A_{21} & A_{22} \\end{pmatrix}$, it is positive definite if $A_{11}$ is positive definite and the Schur complement $S = A_{22} - A_{21}A_{11}^{-1}A_{12}$ is also positive definite. This is vital for recursive algorithms and large-scale system analysis.

We can explore the quadratic form $f(x) = ax^2 + 2bxy + cy^2$ for a $2 \\times 2$ symmetric matrix. The shape changes as we adjust the entries.

\`\`\`interactivegraph
ax^2 + 2bxy + cy^2
params: a=1, b=0, c=1
range: a=-2:2, b=-2:2, c=-2:2
\`\`\`

In the interactive graph above, observe how the surface behaves. When $a > 0, c > 0$ and $ac - b^2 > 0$, the surface is a bowl. When $ac - b^2 < 0$, the surface becomes a saddle. When $ac - b^2 = 0$, the surface has a "valley" or flat bottom, indicating positive semidefiniteness.

## How to Solve

Determining if a matrix is positive definite or finding its decomposition is a common task in scientific computing.

### 1. Eigenvalue Decomposition
Compute the eigenvalues of $A$. If the solver returns a set of values where every element is strictly greater than a small tolerance $\\epsilon$ (to account for floating-point errors), the matrix is positive definite. This is computationally expensive, $O(n^3)$.

### 2. Cholesky Decomposition
This is the preferred numerical method. Attempt to decompose $A$ into $LL^T$. The algorithm proceeds row by row. If at any point the algorithm requires the square root of a negative number or a zero, the matrix is not positive definite. This method is roughly twice as fast as LU decomposition.

### 3. Sylvester's Criterion
For small matrices (e.g., $3 \\times 3$ or $4 \\times 4$), calculating the determinant of the leading principal minors is feasible. 
For $A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix}$:
- Check $a_{11} > 0$.
- Check $a_{11}a_{22} - a_{12}a_{21} > 0$.
- Check $\\det(A) > 0$.

### 4. Diagonal Dominance
While not a definitive test, if a symmetric matrix is strictly diagonally dominant ($|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|$) and all diagonal elements are positive, the matrix is guaranteed to be positive definite by the Gershgorin Circle Theorem.

### Practical Implementation Logic
When writing code to verify a matrix $A$:
1. Check symmetry: $A - A^T \\approx 0$.
2. Attempt Cholesky factorization. If the algorithm succeeds, $A$ is positive definite.
3. If the Cholesky factor encounters a zero, the matrix might be positive semidefinite (requires checking the remaining elements).
4. If the Cholesky factor encounters a negative value, the matrix is either indefinite or negative definite.

The growth of the eigenvalues of a simple diagonal matrix demonstrates the scale of the quadratic form.

\`\`\`graph
x^2
0.5*x^2
2*x^2
\`\`\`
The graph above shows the quadratic form $f(x) = \\lambda x^2$ for $\\lambda \\in \\{0.5, 1, 2\\}$. Each curve represents a positive definite scalar matrix. As the eigenvalue $\\lambda$ increases, the "steepness" of the bowl increases, reflecting the sensitivity of the quadratic form to changes in the vector $x$.

## Summary

Positive definite and semidefinite matrices are essential tools in linear algebra, providing the mathematical framework for understanding convexity, stability, and geometry. A matrix is positive definite if all its eigenvalues are positive, its leading principal minors are positive, and it admits a Cholesky decomposition. These matrices act as the "bowl-shaped" functions of the matrix world, ensuring that minimization problems are well-posed and that physical systems, such as spring-mass structures or covariance models, remain stable and consistent.

Understanding the distinction between positive definite (strict positivity) and positive semidefinite (allowing for null directions) is critical for identifying potential redundancies in datasets or "flat" regions in an optimization landscape. Through techniques like eigenvalue analysis, Cholesky decomposition, and Sylvester's criterion, practitioners can robustly classify these matrices to support high-level analytical tasks.`;export{e as default};