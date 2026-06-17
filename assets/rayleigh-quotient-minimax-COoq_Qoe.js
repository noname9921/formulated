var e=`# The Rayleigh Quotient and Courant-Fischer Minimax Theorem

## Definition

The Rayleigh Quotient, named after Lord Rayleigh, is a scalar function defined for a non-zero vector $v$ and a Hermitian matrix $A$. It characterizes the behavior of the quadratic form associated with the matrix $A$. Specifically, for a Hermitian matrix $A \\in \\mathbb{C}^{n \\times n}$ and a non-zero vector $v \\in \\mathbb{C}^n$, the Rayleigh Quotient $R(A, v)$ is defined as:

$$R(A, v) = \\frac{v^*Av}{v^*v}$$

where $v^*$ denotes the conjugate transpose (Hermitian transpose) of $v$. In the case of real symmetric matrices, this simplifies to $R(A, v) = \\frac{v^TAv}{v^Tv}$.

The Courant-Fischer Minimax Theorem provides a variational characterization of the eigenvalues of a Hermitian matrix. It states that the $k$-th eigenvalue $\\lambda_k$ (when arranged in non-decreasing order $\\lambda_1 \\le \\lambda_2 \\le \\dots \\le \\lambda_n$) of a Hermitian matrix $A$ can be expressed as:

$$\\lambda_k = \\min_{S_k} \\max_{v \\in S_k, v \\neq 0} \\frac{v^*Av}{v^*v}$$

where $S_k$ ranges over all $k$-dimensional subspaces of $\\mathbb{C}^n$. This theorem bridges the gap between the geometry of quadratic forms and the spectral properties of linear operators.

## Key Terminology

- **Hermitian Matrix:** A square matrix $A$ such that $A = A^*$. These matrices have the property that their eigenvalues are always real.
- **Quadratic Form:** A scalar function of the form $f(v) = v^TAv$, representing a homogeneous polynomial of degree two.
- **Eigenvalues and Eigenvectors:** For a matrix $A$, an eigenvalue $\\lambda$ and its corresponding non-zero eigenvector $v$ satisfy $Av = \\lambda v$.
- **Rayleigh Quotient:** The ratio of the quadratic form to the squared Euclidean norm of the vector, essentially measuring the "average" value of the operator $A$ in the direction of $v$.
- **Minimax:** An optimization objective where one minimizes the maximum possible value of a function, common in saddle-point problems and variational analysis.
- **Subspace:** A subset of a vector space that is itself a vector space, typically spanned by a set of linearly independent vectors.
- **Spectral Decomposition:** The representation of a Hermitian matrix as $A = \\sum_{i=1}^n \\lambda_i u_i u_i^*$, where $u_i$ are orthonormal eigenvectors.

## Purpose

The primary purpose of the Rayleigh Quotient is to provide a computational and theoretical link between the geometry of the space defined by a matrix and the specific values that characterize that matrix—the eigenvalues. In practice, it is the cornerstone of many numerical algorithms, particularly those used in large-scale computation, such as the Rayleigh-Ritz method.

The Courant-Fischer Minimax Theorem serves as a fundamental theoretical tool for bounding eigenvalues. It is used to prove sensitivity analysis results, such as Weyl's Inequality, which describes how eigenvalues change when a matrix is perturbed. Furthermore, the theorem is essential in establishing the stability of dynamical systems and in quantum mechanics, where it underpins the Variational Principle for estimating ground-state energies of physical systems.

The theorem allows mathematicians and engineers to characterize eigenvalues without explicitly computing the characteristic polynomial of a matrix, which becomes computationally prohibitive for very large matrices.

## Fundamental Properties

The Rayleigh Quotient and the Courant-Fischer Minimax Theorem exhibit several critical mathematical properties that define their utility in linear algebra.

1. **Stationarity:** The Rayleigh Quotient is stationary at the eigenvectors of $A$. Specifically, the gradient of $R(A, v)$ with respect to $v$ is zero if and only if $v$ is an eigenvector of $A$. At these stationary points, the value of the quotient equals the corresponding eigenvalue.
2. **Extremal Values:** The maximum value of $R(A, v)$ over all $v \\neq 0$ is exactly the largest eigenvalue $\\lambda_n$, and the minimum value is the smallest eigenvalue $\\lambda_1$.
3. **Invariance under Scaling:** The Rayleigh Quotient is scale-invariant, meaning $R(A, cv) = R(A, v)$ for any non-zero scalar $c$. This allows us to restrict the domain to unit vectors $v$ (where $\\|v\\|=1$) without loss of generality.
4. **Variational Nature:** The Courant-Fischer characterization defines eigenvalues as the result of a nested optimization process. By restricting the vector $v$ to specific subspaces, we can isolate individual eigenvalues. For instance, $\\lambda_1 = \\min_{\\|v\\|=1} v^*Av$.

The following table summarizes the relationship between subspace dimensions and the optimization process:

| Eigenvalue | Optimization Form | Constraint |
| :--- | :--- | :--- |
| $\\lambda_1$ | $\\min_{\\|v\\|=1} R(A, v)$ | $v \\in \\mathbb{C}^n$ |
| $\\lambda_n$ | $\\max_{\\|v\\|=1} R(A, v)$ | $v \\in \\mathbb{C}^n$ |
| $\\lambda_k$ | $\\min_{\\dim(S)=k} \\max_{v \\in S} R(A, v)$ | $v \\in S, \\|v\\|=1$ |
| $\\lambda_k$ | $\\max_{\\dim(S)=n-k+1} \\min_{v \\in S} R(A, v)$ | $v \\in S, \\|v\\|=1$ |

## Types & Variations

There are several variations and extensions of these concepts that appear in advanced numerical linear algebra:

- **Generalized Rayleigh Quotient:** When considering the generalized eigenvalue problem $Av = \\lambda Bv$, where $B$ is a positive definite matrix, the Rayleigh Quotient takes the form $R(A, B, v) = \\frac{v^*Av}{v^*Bv}$. This is essential in structural engineering, where $A$ and $B$ represent stiffness and mass matrices, respectively.
- **Rayleigh-Ritz Method:** This is a numerical technique used to approximate the eigenvalues and eigenvectors of a high-dimensional system by projecting the problem into a lower-dimensional subspace. The eigenvalues of the projected matrix provide upper bounds for the true eigenvalues of the original matrix.
- **Generalized Courant-Fischer:** This extension applies to the pencil $(A, B)$, providing a minimax characterization for generalized eigenvalues.
- **Interlacing Theorems:** These are consequences of the Minimax Theorem, such as Cauchy's Interlacing Theorem, which describes the eigenvalues of a principal submatrix relative to the eigenvalues of the parent matrix.

Consider the simple quadratic form $f(x) = x^T A x$. The following interactive graph allows you to visualize how changing the parameters of a matrix $A$ affects the value of $R(A, v)$ as the vector $v$ rotates in a 2D plane.

\`\`\`interactivegraph
\\cos(x)^2 * a + \\sin(x)^2 * b
params: a=2, b=-1
range: a=-3:3, b=-3:3
\`\`\`

In the interactive graph above, the plotted function represents the Rayleigh Quotient of a $2 \\times 2$ diagonal matrix $A = \\text{diag}(a, b)$ for a normalized vector $v = (\\cos(x), \\sin(x))^T$. The reader can observe that the extrema of the curve correspond to the eigenvalues $a$ and $b$ as the vector orientation $x$ varies.

## How to Solve

Solving problems involving the Rayleigh Quotient often requires evaluating the quotient at specific vectors or determining the range of the function.

### Step-by-Step Analytical Approach
1. **Identify the Matrix $A$:** Ensure $A$ is Hermitian. If $A$ is not, the Rayleigh Quotient may be complex-valued, losing its standard interpretation.
2. **Compute Eigenvalues:** Find the characteristic equation $\\det(A - \\lambda I) = 0$ to identify the range of possible Rayleigh Quotient values $[\\lambda_{\\min}, \\lambda_{\\max}]$.
3. **Select Test Vectors:** Use specific vectors, such as the standard basis vectors $e_i$, to determine the diagonal elements $A_{ii}$, which are values of the Rayleigh Quotient for those directions.
4. **Optimization:** To find the maximum or minimum, compute the gradient $\\nabla R(A, v)$ and set it to zero.
   $$\\nabla_v R(A, v) = \\frac{2}{v^*v} (Av - R(A, v)v) = 0$$
   This confirms that $Av = \\lambda v$, reinforcing that extrema occur at eigenvectors.

### Numerical Estimation
For large systems, one typically uses the Power Iteration method. Starting with a vector $v_0$, the sequence $v_{k+1} = \\frac{Av_k}{\\|Av_k\\|}$ converges to the eigenvector corresponding to the dominant eigenvalue. The Rayleigh Quotient $R(A, v_k)$ converges to the dominant eigenvalue $\\lambda_n$ much faster than the vector itself, exhibiting cubic convergence if the starting vector is sufficiently close to the eigenvector.

### Example Construction
Given a matrix $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$, the eigenvalues are found via $(3-\\lambda)^2 - 1 = 0$, giving $\\lambda_1 = 2$ and $\\lambda_2 = 4$.
- The minimum value of $R(A, v)$ is 2.
- The maximum value of $R(A, v)$ is 4.
- For any vector $v$, $2 \\le \\frac{v^TAv}{v^Tv} \\le 4$.

## Summary

The Rayleigh Quotient and the Courant-Fischer Minimax Theorem represent the peak of variational linear algebra. By expressing eigenvalues as the result of optimization problems, we transition from viewing matrices as static arrays of numbers to viewing them as operators whose spectral properties are dictated by the geometry of the space they inhabit.

The Rayleigh Quotient provides a scalar assessment of an operator's influence in a specific direction, while the Courant-Fischer Minimax Theorem provides a global map of the spectral range. Together, these tools enable the analysis of high-dimensional systems in physics, signal processing, and machine learning (notably in Principal Component Analysis and spectral clustering). Mastery of these concepts is essential for anyone dealing with the numerical approximation of eigenvalues, stability analysis, or the optimization of quadratic forms.`;export{e as default};