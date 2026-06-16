var e=`# Eigenvalues & Eigenvectors

Eigenvalues and eigenvectors constitute the foundational language of linear algebra, providing a bridge between abstract vector spaces and the geometry of linear transformations. At their core, they decompose a complex transformation into simpler components, allowing us to understand how a linear operator stretches, compresses, or rotates space along specific axes known as "principal directions."

## Definition

Let $A$ be an $n \\times n$ square matrix representing a linear transformation. An eigenvector of $A$ is a non-zero vector $v$ such that the transformation of $v$ by $A$ results in a vector that is a scalar multiple of $v$. Mathematically, this relationship is expressed by the fundamental eigenvalue equation:

$$Av=\\lambda v$$

In this equation:
- $A$ is the linear operator (the matrix).
- $v$ is the eigenvector, a non-zero column vector in $\\mathbb{R}^n$ or $\\mathbb{C}^n$.
- $\\lambda$ is a scalar known as the eigenvalue, which represents the factor by which the eigenvector is scaled during the transformation.

If $A$ acts on a vector $v$, the result is merely a scaled version of $v$ rather than a vector pointing in a completely different direction. This implies that the direction of the eigenvector is invariant under the transformation $A$.

## Key Terminology

To navigate the study of spectral theory, one must master the following vocabulary:

| Term | Definition |
| :--- | :--- |
| Characteristic Equation | The polynomial equation $\\det(A-\\lambda I)=0$ used to find eigenvalues. |
| Characteristic Polynomial | The polynomial $p(\\lambda)=\\det(A-\\lambda I)$ whose roots are the eigenvalues. |
| Eigenspace | The set of all eigenvectors corresponding to a specific $\\lambda$, plus the zero vector. |
| Geometric Multiplicity | The dimension of the eigenspace associated with a particular eigenvalue. |
| Algebraic Multiplicity | The number of times a root $\\lambda$ appears in the characteristic polynomial. |
| Spectrum | The complete set of eigenvalues of a given matrix $A$. |
| Trace | The sum of the diagonal elements of $A$, which equals the sum of eigenvalues. |
| Determinant | The product of the determinant of $A$, which equals the product of eigenvalues. |

The relationship between algebraic and geometric multiplicity is critical. For any eigenvalue $\\lambda$, the geometric multiplicity is always less than or equal to the algebraic multiplicity. When these multiplicities are equal for all eigenvalues, the matrix is said to be diagonalizable.

## Purpose

The utility of eigenvalues and eigenvectors transcends pure mathematics, serving as a pillar for applied science and engineering. Their primary purpose is to simplify complex systems by identifying the "natural" axes of a transformation.

1. **Dimensionality Reduction:** Techniques like Principal Component Analysis (PCA) use eigenvectors of covariance matrices to identify the directions of maximum variance in datasets, allowing for the compression of data while preserving critical information.
2. **Stability Analysis:** In dynamical systems, the eigenvalues of a Jacobian matrix determine the stability of a fixed point. If all real parts of eigenvalues are negative, the system is asymptotically stable.
3. **Vibrational Analysis:** In structural engineering, natural frequencies and mode shapes of a structure are derived from the eigenvalue problem $Kx=\\omega^2 Mx$, where $K$ is the stiffness matrix and $M$ is the mass matrix.
4. **Quantum Mechanics:** In the Schrödinger equation, physical observables like energy or momentum are represented by linear operators. The possible measured values are the eigenvalues, and the state vectors are the eigenvectors (eigenstates).
5. **PageRank Algorithm:** Google’s original ranking mechanism treats the web as a graph and calculates the dominant eigenvector of the transition matrix to determine the "importance" of web pages.

## Fundamental Properties

The spectral properties of matrices provide elegant shortcuts for computation and theoretical proof.

**1. The Trace and Determinant Relationship:**
For an $n \\times n$ matrix $A$ with eigenvalues $\\lambda_1, \\lambda_2, \\dots, \\lambda_n$:
- $\\text{tr}(A) = \\sum_{i=1}^{n} a_{ii} = \\sum_{i=1}^{n} \\lambda_i$
- $\\det(A) = \\prod_{i=1}^{n} \\lambda_i$

**2. Linearity and Inverses:**
If $v$ is an eigenvector of $A$ with eigenvalue $\\lambda$, then:
- For a scalar $k$, $v$ is an eigenvector of $kA$ with eigenvalue $k\\lambda$.
- If $A$ is invertible, $v$ is an eigenvector of $A^{-1}$ with eigenvalue $\\frac{1}{\\lambda}$.
- For any positive integer $k$, $v$ is an eigenvector of $A^k$ with eigenvalue $\\lambda^k$.

**3. Symmetric Matrices:**
Real symmetric matrices ($A=A^T$) possess two profound properties:
- All eigenvalues of a real symmetric matrix are real.
- Eigenvectors corresponding to distinct eigenvalues are orthogonal to each other. This allows for orthogonal diagonalization, which is the backbone of the Spectral Theorem.

## Types & Variations

Matrices exhibit different behaviors based on their structure, which dictates the nature of their spectra.

**Diagonalizable Matrices:**
A matrix is diagonalizable if it has a complete set of $n$ linearly independent eigenvectors. We can decompose $A$ into $A=PDP^{-1}$, where $D$ is a diagonal matrix containing eigenvalues and $P$ is a matrix whose columns are the corresponding eigenvectors.

**Defective Matrices:**
These are matrices that do not possess a full set of linearly independent eigenvectors. They lack sufficient eigenvectors to span $\\mathbb{R}^n$ because the geometric multiplicity of at least one eigenvalue is strictly less than its algebraic multiplicity. These matrices can be reduced to the Jordan Normal Form rather than a diagonal matrix.

**Stochastic Matrices:**
In Markov chains, matrices where the rows (or columns) sum to 1 have unique properties. The Perron-Frobenius theorem guarantees that the largest eigenvalue is 1, and the corresponding eigenvector represents the steady-state distribution of the system.

**Normal Matrices:**
A matrix $A$ is normal if $AA^T = A^TA$. This class includes symmetric, skew-symmetric, and orthogonal matrices. The Spectral Theorem states that a matrix is unitarily diagonalizable if and only if it is a normal matrix.

## How to Solve

Finding eigenvalues and eigenvectors involves a systematic algebraic process. Consider a $2 \\times 2$ matrix $A$:

$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$

**Step 1: The Characteristic Equation**
Set the determinant of $(A-\\lambda I)$ to zero:
$$\\det\\begin{pmatrix} a-\\lambda & b \\\\ c & d-\\lambda \\end{pmatrix} = 0$$
$$(a-\\lambda)(d-\\lambda) - bc = 0$$
$$\\lambda^2 - (a+d)\\lambda + (ad-bc) = 0$$
Solving this quadratic equation yields the eigenvalues $\\lambda_1$ and $\\lambda_2$.

**Step 2: Finding Eigenvectors**
For each eigenvalue $\\lambda_i$, solve the homogeneous system:
$$(A - \\lambda_i I)v_i = 0$$
This is equivalent to:
$$\\begin{pmatrix} a-\\lambda_i & b \\\\ c & d-\\lambda_i \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$$
Because $(A-\\lambda_i I)$ is singular, the rows are linearly dependent, ensuring a non-trivial solution exists. We solve for the ratio of $x$ to $y$ and normalize the vector to obtain the specific eigenvector.

**Example Illustration**
Consider $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.
The characteristic equation is $\\det(A-\\lambda I) = (2-\\lambda)^2 - 1 = \\lambda^2 - 4\\lambda + 3 = 0$.
Factoring gives $(\\lambda-3)(\\lambda-1) = 0$, so $\\lambda_1 = 3, \\lambda_2 = 1$.
For $\\lambda_1=3$: $(A-3I)v = \\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = 0 \\implies x=y$. An eigenvector is $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$.
For $\\lambda_2=1$: $(A-1I)v = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = 0 \\implies x=-y$. An eigenvector is $\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$.

To explore how the parameter $\\lambda$ influences the transformation of a plane, consider an interactive graph plotting the transformation of a unit circle transformed by a matrix with tunable eigenvalues.

\`\`\`interactivegraph
\\cos(t) * \\lambda_1, \\sin(t) * \\lambda_2
params: \\lambda_1=1, \\lambda_2=1
range: \\lambda_1=-2:2, \\lambda_2=-2:2
\`\`\`

In this interactive visualization, the parameters $\\lambda_1$ and $\\lambda_2$ represent the eigenvalues along the orthogonal axes of the transformation. The graph illustrates the unit circle being stretched or compressed along the primary axes based on the chosen eigenvalue values. As $\\lambda_1$ and $\\lambda_2$ vary, the reader should observe how the circle deforms into an ellipse, identifying the principal scaling factors of the transformation.

## Summary

Eigenvalues and eigenvectors are the "DNA" of linear operators. They reduce the daunting complexity of matrix multiplication into the simplicity of scalar scaling, revealing the intrinsic structure of a linear transformation. 

By solving the characteristic polynomial, we uncover the spectrum of a matrix, which provides deep insights into its geometric behavior, its stability, and its potential for decomposition. Whether in the context of rotating rigid bodies, analyzing the convergence of search engine algorithms, or solving differential equations in physics, the ability to find and interpret these values remains one of the most powerful tools in the mathematician's repertoire. Mastery of this topic requires moving beyond mere calculation and developing an intuition for how these vectors define the "skeleton" upon which linear transformations act.`;export{e as default};