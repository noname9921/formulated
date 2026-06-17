var e=`# Eigenvalues & Eigenvectors

Eigenvalues and eigenvectors constitute the foundational language of linear algebra, providing a framework to understand how linear transformations reshape the space they act upon. At their core, these concepts allow us to decompose complex matrix operations into simpler, independent scaling factors along specific directions, a process known as eigendecomposition.

## Definition

Let $A$ be a square $n \\times n$ matrix over a field $K$ (usually $\\mathbb{R}$ or $\\mathbb{C}$). A non-zero vector $v \\in K^n$ is called an eigenvector of $A$ if there exists a scalar $\\lambda \\in K$ such that:

$$Av = \\lambda v$$

In this relationship, $\\lambda$ is known as the eigenvalue associated with the eigenvector $v$. Geometrically, this equation states that the transformation defined by $A$ does not change the direction of the vector $v$; instead, it merely scales it by a factor of $\\lambda$. If $\\lambda > 0$, the vector maintains its direction; if $\\lambda < 0$, it points in the opposite direction; and if $\\lambda = 0$, the vector lies in the null space of the matrix.

## Key Terminology

To navigate the study of linear operators, several terms are essential:

| Term | Definition |
| :--- | :--- |
| Characteristic Equation | The polynomial $\\det(A - \\lambda I) = 0$ used to find eigenvalues. |
| Eigenspace | The set of all eigenvectors corresponding to $\\lambda$, plus the zero vector. |
| Algebraic Multiplicity | The number of times a root $\\lambda$ appears in the characteristic polynomial. |
| Geometric Multiplicity | The dimension of the eigenspace associated with a given eigenvalue. |
| Spectrum | The complete set of eigenvalues for a given matrix $A$. |
| Spectral Radius | The maximum absolute value among all eigenvalues of $A$. |

Understanding the distinction between algebraic and geometric multiplicity is critical. A matrix is considered "defective" if the geometric multiplicity of any eigenvalue is strictly less than its algebraic multiplicity, meaning the matrix cannot be fully diagonalized.

## Purpose

The primary utility of eigenvalues and eigenvectors lies in simplifying the operation $A^k$, which represents applying a transformation multiple times. If we can represent a matrix as $A = PDP^{-1}$, where $D$ is a diagonal matrix of eigenvalues, then $A^k = PD^kP^{-1}$. Since raising a diagonal matrix to a power is computationally trivial (simply raise each diagonal element to the power $k$), this significantly accelerates computations in areas like differential equations, probability, and computer graphics.

In physics and engineering, eigenvectors often represent "principal axes" or "modes." For instance, in structural mechanics, the eigenvectors of a stiffness matrix represent the natural vibration modes of a structure, while the corresponding eigenvalues represent the natural frequencies of those vibrations. In data science, Principal Component Analysis (PCA) relies on the eigenvectors of a covariance matrix to identify the directions of maximum variance in high-dimensional datasets.

## Fundamental Properties

Several mathematical properties govern the behavior of eigenvalues and eigenvectors:

1. **Sum and Product:** The sum of the eigenvalues of $A$ equals the trace of $A$ ($\\sum \\lambda_i = \\text{tr}(A)$), and the product of the eigenvalues equals the determinant of $A$ ($\\prod \\lambda_i = \\det(A)$).
2. **Linear Independence:** Eigenvectors corresponding to distinct eigenvalues are linearly independent. This ensures that if a matrix has $n$ distinct eigenvalues, it is guaranteed to be diagonalizable.
3. **Invariance:** If $A$ is invertible, the eigenvalues of $A^{-1}$ are the reciprocals of the eigenvalues of $A$, specifically $1/\\lambda_i$.
4. **Triangular Matrices:** For any upper or lower triangular matrix, the eigenvalues are precisely the elements located on the main diagonal.
5. **Symmetry:** Real symmetric matrices always have real eigenvalues and possess orthogonal eigenvectors, a property leveraged heavily in the Spectral Theorem.

Consider the transformation of a 2D space. The following interactive graph allows you to visualize how a simple diagonal matrix transformation $T(x) = \\text{diag}(\\lambda_1, \\lambda_2)x$ scales space along the standard basis vectors.

\`\`\`interactivegraph
\\lambda_1 * x
params: \\lambda_1=1
range: \\lambda_1=-3:3
\`\`\`

In the graph above, the parameter $\\lambda_1$ represents an eigenvalue. By varying $\\lambda_1$, you can observe how the transformation expands, compresses, or flips the function $f(x) = \\lambda_1 x$ relative to the identity line.

## Types & Variations

Matrices can be categorized by the behavior of their eigenvalues:

* **Stochastic Matrices:** These matrices have a maximum eigenvalue of $1$. The corresponding eigenvector represents the "steady state" of a Markov chain, explaining how a system settles into a long-term equilibrium probability distribution.
* **Normal Matrices:** Matrices that commute with their adjoint ($AA^* = A^*A$). These are essentially the matrices for which the Spectral Theorem applies, guaranteeing an orthonormal basis of eigenvectors.
* **Defective Matrices:** Matrices that lack a full set of linearly independent eigenvectors. These matrices cannot be diagonalized, though they can be brought into Jordan Normal Form.
* **Positive Definite Matrices:** Matrices where all eigenvalues are strictly positive. These are vital in optimization, as they ensure that a stationary point is a local minimum.

## How to Solve

Solving for eigenvalues and eigenvectors follows a rigorous algorithmic approach:

1. **Construct the Characteristic Equation:** Subtract $\\lambda$ from the main diagonal of $A$ to form $(A - \\lambda I)$. Calculate the determinant $\\det(A - \\lambda I)$. This results in a polynomial in $\\lambda$ of degree $n$.
2. **Find Roots:** Solve the characteristic polynomial $\\det(A - \\lambda I) = 0$. The roots $\\lambda_1, \\lambda_2, \\dots, \\lambda_n$ are the eigenvalues.
3. **Solve for Eigenvectors:** For each eigenvalue $\\lambda_i$, substitute it back into the equation $(A - \\lambda_i I)v = 0$. This is a homogeneous system of linear equations. Use Gaussian elimination to find the basis of the null space, which provides the corresponding eigenvectors.

As a concrete example, let $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.
The characteristic equation is $\\det \\begin{pmatrix} 2-\\lambda & 1 \\\\ 1 & 2-\\lambda \\end{pmatrix} = (2-\\lambda)^2 - 1 = \\lambda^2 - 4\\lambda + 3 = 0$.
Factoring gives $(\\lambda - 3)(\\lambda - 1) = 0$, so $\\lambda_1 = 3$ and $\\lambda_2 = 1$.
For $\\lambda = 3$, $(A - 3I)v = \\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = 0$, leading to $x=y$. An eigenvector is $(1, 1)^T$.
For $\\lambda = 1$, $(A - 1I)v = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = 0$, leading to $x=-y$. An eigenvector is $(1, -1)^T$.

The following static graph shows the behavior of the polynomial $p(\\lambda) = \\lambda^2 - 4\\lambda + 3$, where the x-intercepts represent the eigenvalues calculated above.

\`\`\`graph
x^2 - 4*x + 3
\`\`\`

The graph plots $p(x) = x^2 - 4x + 3$. The x-intercepts at $x=1$ and $x=3$ illustrate the roots of the characteristic polynomial, confirming the eigenvalues of the matrix $A$.

## Summary

Eigenvalues and eigenvectors transform the daunting task of analyzing linear operators into a problem of coordinate transformation. By identifying the directions in which a matrix acts merely as a scalar multiplier, we gain profound insights into the stability of systems, the vibrational modes of structures, and the dimensionality of massive datasets. While the manual calculation of these values involves polynomial root-finding, the conceptual framework provided by the spectral decomposition is what allows for the efficient simulation and analysis of complex, high-dimensional spaces in modern computational science. As one progresses further into advanced linear algebra, the realization remains that eigenvalues are not just numbers, but are the fundamental fingerprints of a linear operator.`;export{e as default};