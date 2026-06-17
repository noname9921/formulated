var e=`# Matrix Norms: Spectral, Frobenius, and Induced Norms

## Definition

A matrix norm is a function that assigns a strictly positive scalar value to a matrix, representing its "size" or "magnitude." Formally, for a vector space of matrices $M_{m \\times n}(\\mathbb{K})$ where $\\mathbb{K}$ is the field of real or complex numbers, a function $|| \\cdot || : M_{m \\times n}(\\mathbb{K}) \\to \\mathbb{R}$ is a matrix norm if it satisfies the following axioms for all $A, B \\in M_{m \\times n}(\\mathbb{K})$ and all scalars $\\alpha \\in \\mathbb{K}$:

1. **Non-negativity:** $||A|| \\ge 0$, and $||A|| = 0$ if and only if $A$ is the zero matrix.
2. **Absolute Homogeneity:** $|| \\alpha A || = |\\alpha| \\cdot ||A||$.
3. **Triangle Inequality:** $|| A + B || \\le ||A|| + ||B||$.
4. **Sub-multiplicativity (for square matrices):** $|| AB || \\le ||A|| \\cdot ||B||$ for $A, B \\in M_{n \\times n}(\\mathbb{K})$.

Matrix norms provide the quantitative foundation for numerical linear algebra, allowing us to measure the stability of algorithms, the sensitivity of linear systems, and the convergence of iterative methods.

## Key Terminology

- **Vector Norm:** A function mapping a vector to a scalar, serving as the building block for induced matrix norms. Common examples include the $p$-norm $||x||_p = (\\sum |x_i|^p)^{1/p}$.
- **Singular Values ($\\sigma_i$):** The square roots of the eigenvalues of $A^*A$ (where $A^*$ is the conjugate transpose). They characterize the transformation behavior of a matrix.
- **Spectral Radius ($\\rho(A)$):** The maximum absolute value of the eigenvalues of a square matrix $A$, defined as $\\rho(A) = \\max \\{|\\lambda_1|, \\dots, |\\lambda_n|\\}$. Note that while $\\rho(A)$ is not a norm (it fails the triangle inequality), it is closely related to the spectral norm.
- **Induced Norm:** A matrix norm derived from a vector norm, defined as $||A||_p = \\sup_{x \\neq 0} \\frac{||Ax||_p}{||x||_p}$.
- **Consistency:** A property where a matrix norm is "consistent" with a vector norm if $||Ax|| \\le ||A|| \\cdot ||x||$.

## Purpose

Matrix norms are indispensable for analyzing the error propagation in numerical computing. When we solve a linear system $Ax = b$, we must understand how perturbations in $A$ or $b$ affect the solution $x$. The **condition number** of a matrix, defined as $\\kappa(A) = ||A|| \\cdot ||A^{-1}||$, quantifies the sensitivity of the system to input noise. High condition numbers indicate an ill-conditioned system where numerical precision is easily lost.

Furthermore, matrix norms are used to define the convergence of sequences of matrices. For instance, a sequence $A^k$ converges to the zero matrix if $||A^k|| \\to 0$ as $k \\to \\infty$. This is a crucial requirement for the stability of dynamical systems and the analysis of iterative solvers like the Jacobi or Gauss-Seidel methods.

## Fundamental Properties

While many matrix norms exist, they are constrained by essential algebraic properties. Every matrix norm is a continuous function of the matrix entries. In finite-dimensional spaces, all norms are equivalent, meaning that for any two norms $||\\cdot||_\\alpha$ and $||\\cdot||_\\beta$, there exist constants $c_1, c_2 > 0$ such that $c_1 ||A||_\\alpha \\le ||A||_\\beta \\le c_2 ||A||_\\alpha$.

One distinct class consists of **sub-multiplicative** norms. These are vital for proving the convergence of power series, such as the matrix exponential $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}$. A norm is sub-multiplicative if it respects the underlying algebraic structure of matrix multiplication, preventing the norm of the product from exceeding the product of the norms.

## Types & Variations

### The Frobenius Norm
The Frobenius norm is analogous to the Euclidean norm for vectors. It is defined as the square root of the sum of the absolute squares of its elements:
$$||A||_F = \\sqrt{\\sum_{i=1}^m \\sum_{j=1}^n |a_{ij}|^2}$$
This is equivalent to $||A||_F = \\sqrt{\\text{trace}(A^*A)}$. It is computationally efficient to calculate and is often used in optimization problems involving least-squares approximations, such as Low-Rank Approximation (PCA).

### The Spectral Norm
The spectral norm (or operator 2-norm) is the induced norm derived from the Euclidean vector norm. It is defined as:
$$||A||_2 = \\max_{||x||_2=1} ||Ax||_2$$
This norm is equal to the largest singular value of the matrix, $\\sigma_{max}(A)$. It is the most robust measure of the "gain" a matrix provides in the direction of maximum amplification.

### Induced Norms
Induced norms define how much a matrix stretches the unit ball of a vector norm. Common induced norms include:
- **Maximum Column Sum ($||A||_1$):** The maximum absolute column sum: $||A||_1 = \\max_{1 \\le j \\le n} \\sum_{i=1}^m |a_{ij}|$.
- **Maximum Row Sum ($||A||_\\infty$):** The maximum absolute row sum: $||A||_\\infty = \\max_{1 \\le i \\le m} \\sum_{j=1}^n |a_{ij}|$.

The table below summarizes common matrix norms and their computational definitions.

| Norm Type | Mathematical Formula | Key Characteristic |
| :--- | :--- | :--- |
| Frobenius | $\\sqrt{\\sum |a_{ij}|^2}$ | Scalar sum of squares |
| Spectral ($L_2$) | $\\sigma_{max}(A)$ | Largest singular value |
| $L_1$ Norm | $\\max_j \\sum_i |a_{ij}|$ | Maximum column sum |
| $L_\\infty$ Norm | $\\max_i \\sum_j |a_{ij}|$ | Maximum row sum |

## How to Solve

Calculating these norms requires different levels of computational effort.

### Computing Frobenius Norm
The Frobenius norm is the simplest to compute. One iterates through all $m \\times n$ entries, squares them, adds them together, and takes the square root. The complexity is $O(mn)$.

### Computing $L_1$ and $L_\\infty$ Norms
These are computed by summing absolute values along dimensions.
1. For $||A||_1$, sum the absolute values of each column and identify the largest sum.
2. For $||A||_\\infty$, sum the absolute values of each row and identify the largest sum.
Both require $O(mn)$ operations.

### Computing the Spectral Norm
Computing the spectral norm is more complex as it requires finding the largest singular value. This is typically done via the power iteration method applied to $A^*A$ or through Singular Value Decomposition (SVD). Given the complexity of SVD, the spectral norm is computationally more expensive than the Frobenius or $L_p$ norms.

To visualize the concept of matrix transformation growth, we can consider a 2D matrix scaling operation. The following interactive graph shows how a linear transformation affects a unit vector's magnitude under different scaling factors $a$ and $b$, representing the singular values of a $2 \\times 2$ diagonal matrix.

\`\`\`interactivegraph
a*x
b*x
params: a=2, b=0.5
range: a=0:5, b=0:5
\`\`\`

The graph displays two linear functions $f(x) = ax$ and $f(x) = bx$, illustrating how a matrix with singular values $\\{a, b\\}$ scales the input space. The spectral norm $||A||_2$ would be $\\max(|a|, |b|)$.

## Summary

Matrix norms are fundamental to the field of numerical analysis. While the **Frobenius norm** provides an easy-to-calculate global measure of matrix size, the **spectral norm** provides a deeper understanding of the geometric stretching caused by a matrix transformation. **Induced norms** like the $L_1$ and $L_\\infty$ provide efficient bounds for analytical work and stability checking. Choosing the correct norm depends on the specific requirements of the application—be it computational speed, geometric interpretation, or theoretical convergence proofs. Mastering these norms allows engineers and scientists to quantify the reliability of numerical results and the performance of linear transformations in complex systems.`;export{e as default};