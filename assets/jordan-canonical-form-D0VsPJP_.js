var e=`# Jordan Canonical Form and Generalized Eigenvectors

## Definition

The Jordan Canonical Form (JCF) is a generalization of the diagonalization of a square matrix. While not every square matrix over a field (such as the complex numbers $\\mathbb{C}$) is diagonalizable, every square matrix is similar to a block-diagonal matrix known as its Jordan form. Formally, for a matrix $A \\in \\mathbb{C}^{n \\times n}$, there exists an invertible matrix $P$ such that $A=PJP^{-1}$, where $J$ is a block-diagonal matrix of the form:

$$J=\\begin{pmatrix} J_1 & 0 & \\cdots & 0 \\\\ 0 & J_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & J_k \\end{pmatrix}$$

Each $J_i$ is a Jordan block associated with an eigenvalue $\\lambda_i$, represented as:

$$J_i=\\begin{pmatrix} \\lambda_i & 1 & 0 & \\cdots & 0 \\\\ 0 & \\lambda_i & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\lambda_i & 1 \\\\ 0 & 0 & 0 & 0 & \\lambda_i \\end{pmatrix}$$

The size of the Jordan block corresponds to the multiplicity of the eigenvalue in the minimal polynomial of the matrix. If a matrix is already diagonalizable, all Jordan blocks are $1 \\times 1$. The JCF exists for any matrix over an algebraically closed field, such as $\\mathbb{C}$.

## Key Terminology

To understand JCF, one must distinguish between several critical linear algebraic concepts:

**Geometric Multiplicity:** The dimension of the eigenspace corresponding to an eigenvalue $\\lambda$. It is equal to $n-\\text{rank}(A-\\lambda I)$. This represents the number of linearly independent eigenvectors for a given eigenvalue.

**Algebraic Multiplicity:** The number of times an eigenvalue $\\lambda$ appears as a root of the characteristic polynomial $p(\\lambda)=\\det(A-\\lambda I)$.

**Defective Matrix:** A square matrix that does not possess a complete set of linearly independent eigenvectors. Specifically, a matrix is defective if its geometric multiplicity is strictly less than its algebraic multiplicity for at least one eigenvalue.

**Generalized Eigenvectors:** A vector $v$ is a generalized eigenvector of rank $k$ associated with $\\lambda$ if $(A-\\lambda I)^k v=0$ but $(A-\\lambda I)^{k-1} v \\neq 0$. These vectors are required to fill the "gap" in the basis when the standard eigenvectors are insufficient to span the space.

**Minimal Polynomial:** The unique monic polynomial $m(x)$ of smallest degree such that $m(A)=0$. The size of the largest Jordan block for an eigenvalue $\\lambda$ is exactly the power of the factor $(x-\\lambda)$ in the minimal polynomial.

## Purpose

The primary purpose of the Jordan Canonical Form is to provide the simplest possible representation of a linear operator under a change of basis. In computational mathematics, physics, and engineering, the JCF serves three main functions:

1. **Analytical Simplification:** It decouples systems of linear differential equations. For a system $\\dot{x}=Ax$, if $A$ is in Jordan form, the system can be solved block by block, where each block leads to a combination of exponential and polynomial terms.
2. **Structural Insight:** It reveals the internal structure of a linear transformation, specifically identifying how "defective" a matrix is. By examining the sizes of Jordan blocks, one can determine the stability and behavior of dynamical systems.
3. **Computation of Matrix Functions:** Computing $e^{At}$ or $A^k$ is significantly easier when $A$ is in Jordan form. For a Jordan block $J_i$, the matrix exponential $e^{J_it}$ yields a result involving powers of $t$ multiplied by $e^{\\lambda_i t}$, which is critical for solving non-homogeneous systems.

## Fundamental Properties

The Jordan Canonical Form is unique up to the ordering of the Jordan blocks. This uniqueness is guaranteed by the following properties:

- **Similarity Invariance:** Two matrices are similar if and only if they share the same Jordan Canonical Form. This means the JCF acts as a complete invariant for similarity classes.
- **Dimensionality Constraint:** The total number of Jordan blocks associated with an eigenvalue $\\lambda$ is equal to the geometric multiplicity of $\\lambda$.
- **Block Size Relationship:** The number of Jordan blocks of size $k \\times k$ or larger for an eigenvalue $\\lambda$ is given by $\\text{rank}(A-\\lambda I)^{k-1} - \\text{rank}(A-\\lambda I)^k$.
- **Eigenvalue Preservation:** The diagonal entries of the Jordan blocks are precisely the eigenvalues of the original matrix.
- **Trace and Determinant:** Because the JCF is similar to $A$, the trace of $J$ equals the trace of $A$, and the determinant of $J$ equals the determinant of $A$.

## Types & Variations

While the Jordan form is standard, its behavior varies based on the underlying matrix properties:

| Property | Diagonalizable Matrix | Non-Diagonalizable (Defective) Matrix |
| :--- | :--- | :--- |
| Jordan Blocks | All $1 \\times 1$ | At least one block of size $\\geq 2 \\times 2$ |
| Eigenvector Basis | Complete | Incomplete (requires generalized eigenvectors) |
| Minimal Polynomial | Product of distinct linear factors | Contains factors with powers $> 1$ |
| Basis $P$ | Formed by eigenvectors | Formed by Jordan chains |

Generalized eigenvectors form "Jordan chains." A chain of length $k$ is a set of vectors $\\{v_1, v_2, \\dots, v_k\\}$ such that:
$(A-\\lambda I)v_1 = 0$
$(A-\\lambda I)v_2 = v_1$
$(A-\\lambda I)v_3 = v_2$
$\\dots$
$(A-\\lambda I)v_k = v_{k-1}$

These chains are essential for constructing the transformation matrix $P$ such that $A=PJP^{-1}$.

## How to Solve

Finding the JCF of a matrix $A$ involves a systematic algorithmic approach:

1. **Calculate the Characteristic Polynomial:** Find $p(\\lambda) = \\det(A-\\lambda I)$ and determine the eigenvalues $\\lambda_1, \\lambda_2, \\dots, \\lambda_m$.
2. **Determine Algebraic Multiplicities:** Factor $p(\\lambda)$ to find the multiplicity $a_i$ of each $\\lambda_i$.
3. **Determine Geometric Multiplicities:** For each $\\lambda_i$, compute $g_i = \\text{nullity}(A-\\lambda_i I)$. This tells you the number of Jordan blocks for $\\lambda_i$.
4. **Identify Block Sizes:** If $a_i > g_i$, the matrix is defective. Use the powers of $(A-\\lambda_i I)$ to determine the sizes of the Jordan blocks. The size of the largest block corresponds to the smallest $k$ such that $\\text{nullity}(A-\\lambda_i I)^k = a_i$.
5. **Construct Jordan Chains:** For each block of size $k$, find a generalized eigenvector $v_k$ such that $(A-\\lambda_i I)^k v_k = 0$ and $(A-\\lambda_i I)^{k-1} v_k \\neq 0$. Generate the chain by repeatedly multiplying by $(A-\\lambda_i I)$.
6. **Form the Transformation Matrix $P$:** Place the vectors from the Jordan chains into the columns of $P$ in the order determined by the structure of the Jordan blocks.

Example: Consider the matrix:
$$A=\\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$$
Here, $\\lambda=2$ is the only eigenvalue with algebraic multiplicity 2. The rank of $(A-2I)$ is 1, so the geometric multiplicity is $2-1=1$. Since $g < a$, it is defective. The Jordan form is:
$$J=\\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$$
This is already in Jordan form.

## Summary

The Jordan Canonical Form provides a rigorous mathematical framework for understanding the structure of linear operators that cannot be diagonalized. By moving beyond simple eigenvectors to the more general concept of Jordan chains, we can decompose any square matrix into a collection of predictable, fundamental building blocks. This theory bridges the gap between basic eigenvalue problems and advanced analysis, offering the tools necessary to solve defective linear systems, analyze the stability of dynamical processes, and simplify complex matrix algebra. While constructing the JCF for large, dense matrices can be numerically sensitive, its theoretical utility remains unparalleled in linear algebra.`;export{e as default};