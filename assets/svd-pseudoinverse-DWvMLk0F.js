var e=`# Singular Value Decomposition (SVD) and the Pseudoinverse

## Definition

Singular Value Decomposition (SVD) is a fundamental theorem in linear algebra that generalizes the eigendecomposition of a square normal matrix to any $m \\times n$ matrix. Formally, for any matrix $A \\in \\mathbb{R}^{m \\times n}$, there exists a factorization of the form:

$$A=U\\Sigma V^T$$

In this expression, $U$ is an $m \\times m$ orthogonal matrix whose columns are the left singular vectors of $A$. $\\Sigma$ is an $m \\times n$ diagonal matrix with non-negative real entries $\\sigma_i$ on the diagonal, known as the singular values, typically ordered such that $\\sigma_1 \\geq \\sigma_2 \\geq \\dots \\geq \\sigma_p \\geq 0$, where $p = \\min(m, n)$. $V^T$ is the transpose of an $n \\times n$ orthogonal matrix $V$, whose columns are the right singular vectors of $A$.

The Moore-Penrose pseudoinverse, denoted as $A^+$, is a unique generalization of the matrix inverse for non-square or singular matrices. It provides a "best-fit" (in the least-squares sense) solution to systems of linear equations. For a matrix $A$ with SVD $A=U\\Sigma V^T$, the pseudoinverse is defined as:

$$A^+=V\\Sigma^+ U^T$$

Where $\\Sigma^+$ is an $n \\times m$ diagonal matrix formed by taking the reciprocal of each non-zero singular value $\\sigma_i$ on the diagonal, leaving zeros in place, and then transposing the resulting matrix.

## Key Terminology

To understand SVD and the pseudoinverse, one must master the following foundational terms:

| Term | Definition |
| :--- | :--- |
| Orthogonal Matrix | A square matrix $Q$ such that $Q^T Q = Q Q^T = I$, preserving lengths and angles. |
| Singular Values | The square roots of the eigenvalues of $A^T A$ (or $A A^T$). |
| Rank | The dimension of the vector space spanned by the rows or columns of a matrix. |
| Left Singular Vectors | The eigenvectors of $AA^T$, forming the columns of $U$. |
| Right Singular Vectors | The eigenvectors of $A^T A$, forming the columns of $V$. |
| Condition Number | The ratio $\\sigma_{max} / \\sigma_{min}$, indicating the sensitivity of the system to numerical noise. |
| Least Squares | A method to minimize the sum of the squares of the vertical deviations between data and a model. |

## Purpose

The SVD is widely considered the "Swiss Army knife" of numerical linear algebra. Its primary purpose is to provide a robust way to analyze the geometry and rank of a linear transformation. By decomposing a matrix into rotation, scaling, and rotation components, it reveals the intrinsic structure of the data.

The Moore-Penrose pseudoinverse serves two critical purposes:
1. Solving underdetermined systems: When there are more variables than equations, it selects the solution with the minimum Euclidean norm.
2. Solving overdetermined systems: When there are more equations than variables, it finds the "least-squares" solution that minimizes the residual $\\|Ax - b\\|_2$.

These tools are essential in dimensionality reduction (e.g., Principal Component Analysis), signal processing, noise reduction, and solving ill-posed inverse problems where a standard inverse $A^{-1}$ does not exist or is numerically unstable.

## Fundamental Properties

The SVD and pseudoinverse exhibit properties that make them computationally superior to traditional inversion methods.

### Geometry of Transformation
A matrix $A$ transforms a unit sphere into a hyper-ellipse. The singular values $\\sigma_i$ represent the lengths of the semi-axes of this hyper-ellipse. The columns of $U$ define the orientation of these axes in the output space, while the columns of $V$ represent the directions in the input space that map to these axes.

### The Four Fundamental Subspaces
SVD provides an explicit orthonormal basis for the four fundamental subspaces of $A$:
1. The Range of $A$: The first $r$ columns of $U$ (where $r$ is the rank).
2. The Null Space of $A$: The last $n-r$ columns of $V$.
3. The Row Space of $A$: The first $r$ columns of $V$.
4. The Left Null Space of $A$: The last $m-r$ columns of $U$.

### Properties of the Pseudoinverse
The pseudoinverse $A^+$ satisfies the four Moore-Penrose conditions:
1. $AA^+ A = A$
2. $A^+ A A^+ = A^+$
3. $(AA^+)^T = AA^+$
4. $(A^+ A)^T = A^+ A$

If a matrix $A$ is invertible, then $A^+ = A^{-1}$. If $A$ has full column rank, $A^+ = (A^T A)^{-1} A^T$. If $A$ has full row rank, $A^+ = A^T (A A^T)^{-1}$.

## Types & Variations

Several variants of SVD exist to address computational efficiency and specific data constraints.

### Thin SVD (Economy Size)
If $m > n$, we only need the first $n$ columns of $U$. The decomposition becomes $A = U_n \\Sigma_n V^T$, where $U_n$ is $m \\times n$ and $\\Sigma_n$ is $n \\times n$. This saves significant memory when processing tall, skinny matrices commonly found in regression tasks.

### Truncated SVD
By keeping only the largest $k$ singular values and setting the remaining to zero, we obtain the "Rank-$k$ approximation" of the matrix. This is the mathematical basis for latent semantic indexing and image compression, where we discard noise associated with small singular values.

### The Role of Parameterized Scaling
Consider the transformation of data under varying singular values. The interactive graph below simulates how a system's output changes as we scale the primary singular value $\\sigma_1$.

\`\`\`interactivegraph
\\sigma * \\sin(x)
params: \\sigma=1
range: \\sigma=-2:2
\`\`\`

In the interactive graph above, the parameter $\\sigma$ acts as a singular value controlling the "stretch" or scaling of the function along the vertical axis. Observe how the magnitude of the oscillation, represented by the range of the function, is directly proportional to the magnitude of the singular value. This illustrates how the singular values define the principal magnitude of information or signal within a transformed space.

## How to Solve

Calculating the SVD manually for large matrices is computationally prohibitive, but the theoretical framework is standard.

### Theoretical Steps
1. **Form the Gramian Matrices:** Calculate $A^T A$ (size $n \\times n$) and $A A^T$ (size $m \\times m$). These are symmetric positive semi-definite matrices.
2. **Find Right Singular Vectors:** Compute the eigenvalues $\\lambda_i$ and eigenvectors $v_i$ of $A^T A$. The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The $v_i$ form the columns of $V$.
3. **Find Left Singular Vectors:** Compute the $u_i$ using the relation $u_i = \\frac{1}{\\sigma_i} A v_i$ for all $\\sigma_i > 0$.
4. **Construct $\\Sigma$:** Place the $\\sigma_i$ on the diagonal in descending order.

### Numerical Implementation
In practice, algorithms like the Golub-Reinsch algorithm are used. These involve two phases:
1. **Bidiagonalization:** Using Householder reflections to reduce $A$ to a bidiagonal matrix $B$.
2. **Diagonalization:** Using an iterative QR algorithm to reduce the bidiagonal matrix to a diagonal matrix $\\Sigma$.

The pseudoinverse is then computed by inverting the non-zero diagonal elements of $\\Sigma$ and rearranging the basis components. This numerical approach is highly stable compared to solving $Ax = b$ via the normal equations $(A^T A)x = A^T b$, as the latter squares the condition number, leading to significant loss of precision for ill-conditioned matrices.

## Summary

The Singular Value Decomposition (SVD) and the Moore-Penrose pseudoinverse form the bedrock of modern numerical linear algebra. By decomposing a complex linear transformation into a sequence of orthogonal rotations and a singular scaling, SVD provides deep insight into the structure of data. 

The pseudoinverse offers a robust, unified mechanism for solving systems of linear equations, whether they are underdetermined, overdetermined, or singular. By leveraging the truncated SVD, researchers and engineers can effectively separate signal from noise, allowing for powerful applications in data compression, statistical modeling, and computational geometry. Mastering these concepts provides the analytical maturity required to navigate high-dimensional data spaces and solve real-world problems with mathematical rigor and numerical stability.`;export{e as default};