var e=`## Definition

The Rayleigh Quotient is a scalar value associated with a square matrix $A$ and a non-zero vector $x$, defined as the ratio of the quadratic form to the squared Euclidean norm of the vector. For a symmetric (or Hermitian) matrix $A \\in \\mathbb{R}^{n \\times n}$ and a non-zero vector $x \\in \\mathbb{R}^n$, the Rayleigh Quotient $R(A, x)$ is defined as:
$$R(A, x)=\\frac{x^T Ax}{x^T x}$$
In the complex domain, for a Hermitian matrix $A$, the quotient is defined using the conjugate transpose:
$$R(A, x)=\\frac{x^* Ax}{x^* x}$$
The Courant-Fischer Minimax Theorem provides a variational characterization of the eigenvalues of a symmetric matrix. It states that the $k$-th smallest eigenvalue $\\lambda_k$ of a symmetric matrix $A$ can be expressed as:
$$\\lambda_k=\\min_{S_k} \\max_{x \\in S_k, x \\neq 0} \\frac{x^T Ax}{x^T x}$$
where $S_k$ is a subspace of dimension $k$. Equivalently, the $k$-th largest eigenvalue can be characterized by reversing the roles of minimum and maximum, providing a powerful bridge between linear algebra and optimization theory.

## Key Terminology

To understand these concepts, one must define several foundational terms:

*   **Quadratic Form:** A scalar-valued function $f(x)=x^T Ax$, representing a homogeneous polynomial of degree two.
*   **Symmetric Matrix:** A matrix $A$ such that $A=A^T$. These matrices possess real eigenvalues and orthogonal eigenvectors, which are critical for the spectral theorem.
*   **Rayleigh Quotient:** A measure of the "average" value of a linear operator in the direction of $x$. It serves as a bounded indicator of where an eigenvalue lies relative to the spectral range of $A$.
*   **Variational Characterization:** A method of defining eigenvalues as the solution to an optimization problem rather than the roots of a characteristic polynomial $\\det(A-\\lambda I)=0$.
*   **Subspace:** A subset of a vector space that is itself a vector space. In the context of the minimax theorem, we consider subspaces $S_k$ of dimension $k$.
*   **Spectral Decomposition:** The representation of a symmetric matrix as $A=Q \\Lambda Q^T$, where $Q$ is an orthogonal matrix of eigenvectors and $\\Lambda$ is a diagonal matrix of eigenvalues.

## Purpose

The Rayleigh Quotient and the Courant-Fischer Minimax Theorem serve three primary purposes in mathematical physics and numerical linear algebra.

First, they allow for the estimation of eigenvalues without explicitly computing the full characteristic polynomial. This is computationally expensive for large matrices, but the Rayleigh Quotient provides an immediate upper and lower bound on the spectrum. Specifically, the minimum and maximum values of $R(A, x)$ are exactly the minimum and maximum eigenvalues of $A$.

Second, these tools facilitate the development of iterative solvers. Algorithms such as the Lanczos iteration or the Rayleigh Quotient Iteration (RQI) use the quotient to converge rapidly to specific eigenvalues. RQI, in particular, exhibits cubic convergence for symmetric matrices, making it a cornerstone of high-performance eigenvalue algorithms.

Third, the Minimax theorem provides theoretical stability analysis. In structural engineering and quantum mechanics, the "energy" of a system is often represented by a quadratic form. The Minimax theorem allows engineers and physicists to bound the frequency response or energy levels of a system by looking at lower-dimensional subspaces, effectively simplifying high-dimensional physical models.

## Fundamental Properties

The properties of the Rayleigh Quotient are rooted in the spectral decomposition of $A$. Let $\\lambda_1 \\leq \\lambda_2 \\leq \\dots \\leq \\lambda_n$ be the eigenvalues of $A$ with corresponding orthonormal eigenvectors $v_1, v_2, \\dots, v_n$. Any vector $x$ can be expressed as $x = \\sum_{i=1}^n c_i v_i$. Substituting this into the Rayleigh Quotient yields:
$$R(A, x)=\\frac{\\sum_{i=1}^n \\lambda_i c_i^2}{\\sum_{i=1}^n c_i^2}$$
From this representation, several fundamental properties emerge:

1.  **Boundedness:** The Rayleigh Quotient is always bounded by the extremal eigenvalues: $\\lambda_1 \\leq R(A, x) \\leq \\lambda_n$.
2.  **Stationarity:** The gradient of the Rayleigh Quotient $\\nabla R(A, x)$ is zero if and only if $x$ is an eigenvector of $A$. Specifically, $\\nabla R(A, x) = \\frac{2}{x^T x} (Ax - R(A, x)x)$.
3.  **Monotonicity:** The Courant-Fischer theorem implies that as we expand the subspace $S_k$ to $S_{k+1}$, the maximum value of the quotient over that subspace must increase or remain the same, which leads to the interlacing theorem of eigenvalues.
4.  **Invariance:** $R(A, x) = R(A, \\alpha x)$ for any non-zero scalar $\\alpha$, signifying that the quotient depends only on the direction of $x$, not its magnitude.

## Types & Variations

There are several notable variations and related concepts:

*   **Generalized Rayleigh Quotient:** When dealing with generalized eigenvalue problems of the form $Ax = \\lambda Bx$, where $B$ is positive definite, the quotient becomes:
    $$R(A, B, x) = \\frac{x^T Ax}{x^T Bx}$$
    This is ubiquitous in finite element analysis, where $A$ is the stiffness matrix and $B$ is the mass matrix.
*   **Courant-Fischer for Max-Min:** The theorem can be stated in two forms:
    $$\\lambda_k = \\min_{S_k} \\max_{x \\in S_k, x \\neq 0} R(A, x)$$
    $$\\lambda_k = \\max_{S_{n-k+1}} \\min_{x \\in S_{n-k+1}, x \\neq 0} R(A, x)$$
    These provide dual perspectives on the spectrum, which are often used interchangeably depending on whether one is searching for the smallest or largest eigenvalues.
*   **Weyl's Inequalities:** These are direct consequences of the Courant-Fischer theorem, providing bounds on the eigenvalues of the sum of two symmetric matrices, $A+B$, in terms of the individual eigenvalues of $A$ and $B$.

## How to Solve

To apply these theorems analytically or numerically, one follows a systematic framework. When seeking the smallest eigenvalue $\\lambda_1$ of a symmetric matrix $A$:

1.  **Initialization:** Select an initial guess vector $x_0$.
2.  **Quotient Calculation:** Compute the current estimate $\\mu = R(A, x_k)$.
3.  **Iteration:** Solve the linear system $(A - \\mu I)x_{k+1} = x_k$. This step, known as Rayleigh Quotient Iteration, effectively pushes $x$ toward the eigenvector corresponding to $\\mu$.
4.  **Normalization:** Update $x_{k+1} = \\frac{x_{k+1}}{\\|x_{k+1}\\|}$.
5.  **Refinement:** Repeat steps 2-4 until convergence.

The Minimax theorem also allows for theoretical "solving" by restricting the search space. For a matrix $A \\in \\mathbb{R}^{3 \\times 3}$, to find $\\lambda_2$, one considers all 2D subspaces $S_2$. For each $S_2$, one identifies the worst-case (maximum) $R(A, x)$. Then, one minimizes this maximum across all possible 2D planes. While this is rarely done by hand for high-dimensional spaces, it is the basis for proving bounds in perturbation theory, where one assumes that the deviation of eigenvalues $\\Delta \\lambda$ is bounded by the change in the matrix $\\Delta A$ measured via the Rayleigh Quotient.

| Method | Focus | Complexity | Stability |
| :--- | :--- | :--- | :--- |
| Power Iteration | Largest $\\lambda$ | $O(n^2)$ | Low |
| Rayleigh Quotient Iteration | Local $\\lambda$ | $O(n^3)$ | Very High |
| Lanczos Method | Range of $\\lambda$ | $O(m \\cdot n^2)$ | Medium |

## Summary

The Rayleigh Quotient is a scalar function that maps vectors to the spectral range of a symmetric matrix, acting as a crucial bridge between algebraic geometry and numerical analysis. It identifies the "spectral position" of a vector relative to a matrix, reaching its extrema at the eigenvectors of that matrix. The Courant-Fischer Minimax Theorem generalizes this observation, characterizing the entire spectrum of symmetric operators through an optimization lens. By transforming the problem of root-finding for characteristic polynomials into a problem of constrained optimization over subspaces, the Minimax theorem provides the mathematical bedrock for modern eigenvalue algorithms, structural stability analysis, and perturbation theory. Mastery of these concepts is essential for anyone engaged in scientific computing, as they allow for the efficient estimation of eigenvalues in high-dimensional systems where explicit diagonalization is computationally prohibitive. Through the interplay of the Rayleigh Quotient's stationarity and the Minimax theorem's variational bounds, we gain a comprehensive framework for understanding the behavior of linear operators in both abstract mathematics and practical engineering applications.`;export{e as default};