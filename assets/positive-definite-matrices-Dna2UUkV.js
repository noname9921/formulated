var e=`# Positive Definite and Semidefinite Matrices

## Definition

In linear algebra, a symmetric matrix $A \\in \\mathbb{R}^{n \\times n}$ is said to be positive definite if it satisfies the condition that for any non-zero vector $x \\in \\mathbb{R}^n$, the quadratic form $x^T Ax$ is strictly greater than zero. Formally, $A$ is positive definite if:
$$x^T Ax > 0, \\quad \\forall x \\in \\mathbb{R}^n, x \\neq 0$$
Similarly, a matrix $A$ is positive semidefinite if the quadratic form is non-negative for all vectors $x$:
$$x^T Ax \\geq 0, \\quad \\forall x \\in \\mathbb{R}^n$$
While definitions are often extended to complex Hermitian matrices where $x^* Ax > 0$ (with $x^*$ being the conjugate transpose), the standard framework focuses on real symmetric matrices. These matrices are the multidimensional generalizations of positive real numbers. Just as a positive number $a > 0$ ensures that $ax^2 > 0$ for $x \\neq 0$, positive definite matrices ensure that the "energy" or "norm-like" value associated with the matrix is always positive.

## Key Terminology

To navigate the theory of these matrices, one must master several foundational terms:

| Term | Definition |
| :--- | :--- |
| Symmetric Matrix | A matrix where $A = A^T$. All real symmetric matrices have real eigenvalues. |
| Quadratic Form | A scalar function of the form $f(x) = x^T Ax$. |
| Eigenvalue | A scalar $\\lambda$ such that $Ax = \\lambda x$ for a non-zero vector $x$. |
| Principal Minor | The determinant of any $k \\times k$ submatrix obtained by deleting $n-k$ rows and columns. |
| Leading Principal Minor | The determinant of the top-left $k \\times k$ submatrix of $A$. |
| Cholesky Decomposition | A factorization of a positive definite matrix into $LL^T$, where $L$ is a lower triangular matrix. |
| Sylvester's Criterion | A theorem stating that a matrix is positive definite if and only if all its leading principal minors are positive. |

## Purpose

The primary utility of positive definite (PD) and positive semidefinite (PSD) matrices lies in optimization, statistics, and physical systems modeling. In optimization, if the Hessian matrix of a multivariate function is positive definite at a critical point, that point is guaranteed to be a local minimum. This property makes them the backbone of convex optimization and machine learning algorithms such as Support Vector Machines (SVMs) and Gaussian Processes.

In statistics, the covariance matrix of any set of random variables is always positive semidefinite. Because the variance of any linear combination of random variables $Y = a^T X$ must be non-negative, $Var(a^T X) = a^T \\Sigma a \\geq 0$ must hold, where $\\Sigma$ is the covariance matrix.

In physics, PD matrices arise in the context of potential energy. For a system in stable equilibrium, the potential energy function is locally approximated by a quadratic form, and the requirement for stability (the potential energy at a minimum) necessitates a positive definite stiffness or Hessian matrix.

## Fundamental Properties

The classification of these matrices relies on the interplay between their eigenvalues, determinants, and factorization properties. For a symmetric matrix $A$:

1. **Eigenvalue Characterization**: $A$ is positive definite if and only if all its eigenvalues are strictly positive ($\\lambda_i > 0$). $A$ is positive semidefinite if and only if all its eigenvalues are non-negative ($\\lambda_i \\geq 0$).
2. **Determinant Property**: For a positive definite matrix, the determinant must be positive (as it is the product of positive eigenvalues). However, a positive determinant alone is not sufficient to guarantee positive definiteness.
3. **Invertibility**: All positive definite matrices are non-singular and therefore invertible. Positive semidefinite matrices are singular if at least one eigenvalue is zero.
4. **Diagonal Elements**: A necessary (but not sufficient) condition for $A$ to be positive definite is that all diagonal elements $a_{ii}$ must be strictly positive.
5. **Trace**: The trace of a positive definite matrix is strictly positive, as $Tr(A) = \\sum \\lambda_i > 0$.

Consider the interactive exploration of how the quadratic form behaves for a $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ b & c \\end{pmatrix}$. The quadratic form is $f(x, y) = ax^2 + 2bxy + cy^2$. The following interactive graph allows you to adjust the entries $a$ and $c$ to observe the curvature of the surface.

\`\`\`interactivegraph
a*x^2 + 2*b*x + c
params: a=1, b=0, c=1
range: a=0:5, c=0:5
\`\`\`

The graph above plots the quadratic form $f(x) = ax^2 + 2bx + c$. Note that when $a$ and $c$ are positive and $b^2 < ac$, the function is concave up (positive definite behavior). When $b^2 = ac$, the function becomes semidefinite, effectively flattening along the direction of the null space.

## Types & Variations

Beyond the strictly definite and semidefinite categories, we identify related matrix types:

- **Negative Definite**: A matrix $A$ where $x^T Ax < 0$ for all $x \\neq 0$. This is equivalent to saying $-A$ is positive definite.
- **Negative Semidefinite**: A matrix $A$ where $x^T Ax \\leq 0$ for all $x$.
- **Indefinite**: A matrix is indefinite if it produces both positive and negative values for the quadratic form. This occurs when the matrix has both positive and negative eigenvalues.
- **Strictly Positive Definite**: A redundant term often used in functional analysis to specify that the quadratic form is bounded away from zero by a factor of the squared norm, i.e., $x^T Ax \\geq \\gamma \\|x\\|^2$ for some $\\gamma > 0$.

These variations are critical when analyzing saddle points in multivariate calculus. If a Hessian matrix is indefinite at a critical point, the point is a saddle point rather than a local extremum.

## How to Solve

To determine if a matrix $A \\in \\mathbb{R}^{n \\times n}$ is positive definite, one typically employs one of the following systematic approaches:

### 1. Sylvester's Criterion
Calculate the determinants of all leading principal minors. Let $A_k$ be the $k \\times k$ submatrix formed by the first $k$ rows and columns.
- $A$ is positive definite if $\\det(A_k) > 0$ for all $k = 1, \\dots, n$.
- $A$ is positive semidefinite if $\\det(A_k) \\geq 0$ for all $k = 1, \\dots, n$ (though this is a simplified view; for PSD, one must check all principal minors, not just leading ones).

### 2. Eigenvalue Decomposition
Compute the characteristic polynomial $\\det(A - \\lambda I) = 0$. Solve for all $\\lambda_i$.
- If $\\min(\\lambda_i) > 0$, the matrix is positive definite.
- If $\\min(\\lambda_i) = 0$ and all other $\\lambda_i \\geq 0$, it is positive semidefinite.

### 3. Cholesky Factorization
Attempt to decompose $A = LL^T$ where $L$ is a lower triangular matrix with positive diagonal entries.
- If the algorithm completes successfully, the matrix is positive definite.
- If a square root of a non-positive number is encountered during the computation, the matrix is not positive definite.

For computational efficiency in software (like LAPACK or Eigen), the Cholesky decomposition is preferred over eigenvalue calculation, as it has a complexity of $O(n^3/3)$ operations, significantly faster than the iterative methods required for general eigenvalue extraction.

## Summary

Positive definite and semidefinite matrices serve as the bedrock for modern linear algebra applications. By providing a rigorous criterion for convexity and stability, they allow for the classification of critical points in optimization, the analysis of variances in statistics, and the description of energy landscapes in physical systems. The transition from the simple scalar condition of "positiveness" to the matrix-level conditions defined by $x^T Ax > 0$ provides the necessary mathematical machinery to handle multidimensional data and complex systems. Mastery of these matrices—specifically the ability to perform Cholesky decomposition and apply Sylvester's criterion—is essential for any practitioner in scientific computing or data engineering. By understanding the eigenvalues and minors of a matrix, one gains immediate insight into its geometric and algebraic characteristics, allowing for more robust and efficient modeling in high-dimensional spaces.`;export{e as default};