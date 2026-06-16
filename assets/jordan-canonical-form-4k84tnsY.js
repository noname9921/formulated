var e=`# Jordan Canonical Form and Generalized Eigenvectors

## Definition

The Jordan Canonical Form (JCF) is a refined representation of a linear operator $A$ acting on a finite-dimensional complex vector space $V$. While diagonalization is the ideal state for a matrix, many matrices are "defective," meaning they do not possess a complete set of linearly independent eigenvectors to span the space. The Jordan Canonical Form generalizes the concept of diagonalization by reducing a matrix into a block-diagonal form consisting of Jordan blocks, $J_i$.

A matrix $A \\in \\mathbb{C}^{n \\times n}$ is similar to a block-diagonal matrix $J$ such that $A = PJP^{-1}$, where $J$ is defined as:

$$J = \\begin{pmatrix} J_1 & 0 & \\cdots & 0 \\\\ 0 & J_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & J_k \\end{pmatrix}$$

Each Jordan block $J_i$ is a square matrix of size $m_i \\times m_i$ with a constant eigenvalue $\\lambda_i$ on the main diagonal and 1s on the super-diagonal:

$$J_i = \\begin{pmatrix} \\lambda_i & 1 & 0 & \\cdots & 0 \\\\ 0 & \\lambda_i & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\lambda_i & 1 \\\\ 0 & 0 & 0 & 0 & \\lambda_i \\end{pmatrix}$$

This form exists for any square matrix with entries in an algebraically closed field, such as the complex numbers $\\mathbb{C}$.

## Key Terminology

To understand the JCF, one must distinguish between the algebraic and geometric properties of eigenvalues:

- **Algebraic Multiplicity ($am$):** The number of times an eigenvalue $\\lambda$ appears as a root of the characteristic polynomial $p(\\lambda) = \\det(A - \\lambda I)$.
- **Geometric Multiplicity ($gm$):** The dimension of the eigenspace corresponding to $\\lambda$, calculated as $\\dim(\\ker(A - \\lambda I))$. This represents the number of linearly independent eigenvectors associated with $\\lambda$.
- **Defect:** A matrix is defective if $gm(\\lambda) < am(\\lambda)$ for at least one eigenvalue.
- **Generalized Eigenvector:** A vector $v$ is a generalized eigenvector of rank $k$ corresponding to eigenvalue $\\lambda$ if $(A - \\lambda I)^k v = 0$ but $(A - \\lambda I)^{k-1} v \\neq 0$.
- **Jordan Chain:** A sequence of vectors $\\{v_1, v_2, \\dots, v_m\\}$ such that $(A - \\lambda I)v_1 = 0$ and $(A - \\lambda I)v_k = v_{k-1}$ for $k=2, \\dots, m$. The vector $v_1$ is an ordinary eigenvector, while $v_2, \\dots, v_m$ are generalized eigenvectors.
- **Minimal Polynomial:** The unique monic polynomial $q(t)$ of smallest degree such that $q(A) = 0$. The size of the largest Jordan block for an eigenvalue $\\lambda$ is determined by the power of the factor $(t - \\lambda)$ in the minimal polynomial.

## Purpose

The Jordan Canonical Form serves as the ultimate "classification" tool in linear algebra. Its primary purposes include:

1. **Solving Linear Systems:** JCF simplifies the computation of matrix functions, such as the matrix exponential $e^{At}$, which is vital for solving systems of linear differential equations. If $A = PJP^{-1}$, then $e^{At} = Pe^{Jt}P^{-1}$. The exponential of a Jordan block is easily computable.
2. **Structural Analysis:** It provides a clear view of the "internal structure" of an operator. It reveals the nesting of kernels of powers of $(A - \\lambda I)$, effectively partitioning the space into invariant subspaces.
3. **Stability Analysis:** In dynamical systems, the behavior of a system near an equilibrium point is governed by eigenvalues. Jordan blocks represent "resonant" or "polynomial-growing" terms ($t^k e^{\\lambda t}$), which provide deeper insights into stability than simple diagonalization.
4. **Theoretical Rigor:** It serves as a canonical representative for similarity equivalence classes, allowing mathematicians to treat all matrices with the same Jordan structure as equivalent for the purpose of abstract operator analysis.

## Fundamental Properties

The construction of the JCF relies on several non-trivial properties of vector spaces and linear maps:

- **Uniqueness:** The JCF is unique up to the ordering of the Jordan blocks. Two matrices are similar if and only if they share the exact same Jordan structure.
- **Dimension Matching:** The total number of Jordan blocks corresponding to an eigenvalue $\\lambda$ is exactly equal to the geometric multiplicity $gm(\\lambda)$.
- **Chain Lengths:** The size of the largest Jordan block for eigenvalue $\\lambda$ corresponds to the multiplicity of the root $\\lambda$ in the minimal polynomial.
- **Invariant Subspaces:** The entire vector space $V$ decomposes into a direct sum of generalized eigenspaces, $V = \\bigoplus_{\\lambda} K_\\lambda$, where $K_\\lambda = \\ker((A - \\lambda I)^n)$. This is a consequence of the Primary Decomposition Theorem.
- **Matrix Powers:** If $A$ has a Jordan block $J$ of size $m$, calculating $A^k$ involves binomial coefficients in the super-diagonals, showing how generalized eigenvectors grow polynomially.

## Types & Variations

While the Jordan form itself is a specific structure, the variations manifest in how the blocks aggregate to form the total matrix:

| Structure Type | Characteristic | Mathematical Implication |
| :--- | :--- | :--- |
| Diagonalizable | $am(\\lambda) = gm(\\lambda)$ | All Jordan blocks are size $1 \\times 1$. |
| Purely Nilpotent | All eigenvalues are zero | The matrix is essentially a shift operator. |
| Single Jordan Block | $gm(\\lambda) = 1$ | The matrix is cyclic; one chain spans the whole space. |
| Non-Defective | $am = gm$ for all $\\lambda$ | Equivalent to the diagonal form. |

In the case of real matrices with complex eigenvalues, the "Real Jordan Form" is often used. Instead of complex Jordan blocks, the complex eigenvalues $\\lambda = a \\pm bi$ are replaced by $2 \\times 2$ blocks of the form:

$$R = \\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix}$$

This maintains real-valued entries while capturing the rotational nature of the complex components of the transformation.

## How to Solve

Determining the Jordan Canonical Form involves a systematic algorithmic process. To find the JCF of a matrix $A$:

1. **Calculate Eigenvalues:** Find the roots of the characteristic polynomial $\\det(A - \\lambda I) = 0$.
2. **Determine Algebraic Multiplicities:** Factor the polynomial to determine $am(\\lambda)$ for each eigenvalue.
3. **Analyze Geometric Multiplicities:** Compute $gm(\\lambda) = \\dim(\\ker(A - \\lambda I))$. This tells you the number of Jordan blocks for each eigenvalue.
4. **Compute Higher Powers of $(A - \\lambda I)$:** To find the sizes of individual Jordan blocks, examine the sequence of kernels:
   $$K_1 \\subset K_2 \\subset K_3 \\dots \\subset K_m$$
   where $K_i = \\ker((A - \\lambda I)^i)$. The dimension of these kernels helps determine how many chains of specific lengths exist.
5. **Construct Jordan Chains:** For each Jordan block of size $k$, find a "top" vector $v_k$ such that $(A - \\lambda I)^k v_k = 0$ but $(A - \\lambda I)^{k-1} v_k \\neq 0$. Generate the chain:
   $$v_{k-1} = (A - \\lambda I)v_k, \\dots, v_1 = (A - \\lambda I)v_2$$
6. **Form the Basis $P$:** Assemble all vectors from the Jordan chains as columns in a matrix $P$.
7. **Verify:** Confirm that $A = PJP^{-1}$, or equivalently, $AP = PJ$.

As an analytical note, the size of the Jordan blocks can be precisely determined by the rank of $(A - \\lambda I)^k$. Let $d_k = \\dim(\\ker((A - \\lambda I)^k))$. The number of blocks of size at least $k$ is $d_k - d_{k-1}$. The number of blocks of exactly size $k$ is $(d_k - d_{k-1}) - (d_{k+1} - d_k) = 2d_k - d_{k-1} - d_{k+1}$.

## Summary

The Jordan Canonical Form is a powerful generalization that bridges the gap between diagonalizable matrices and the broader class of all square matrices. By utilizing generalized eigenvectors and Jordan chains, one can decompose any linear operator into a structure that highlights both its stationary and non-stationary components. 

The existence of the JCF ensures that even when a system is defective, we can find a basis—the Jordan basis—that simplifies the interaction of the matrix with the vector space. Whether utilized for solving complex differential equations, studying the stability of dynamical systems, or classifying operators, the JCF remains a cornerstone of advanced linear algebra. The interplay between the algebraic multiplicities of eigenvalues and the geometry of their associated kernels provides the deep structure required to master the complexity of high-dimensional linear transformations.`;export{e as default};