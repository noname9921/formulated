var e=`# Eigenvalue Localization: Gershgorin Disc Theorem

Eigenvalue analysis lies at the heart of numerical linear algebra, control theory, and quantum mechanics. Determining the exact eigenvalues of an $n \\times n$ matrix $A$ requires finding the roots of the characteristic polynomial $p(\\lambda) = \\det(A - \\lambda I) = 0$. For large matrices, finding these roots is computationally expensive and often sensitive to floating-point errors. The Gershgorin Disc Theorem provides a robust, computationally inexpensive method to estimate the location of these eigenvalues in the complex plane without solving the characteristic equation.

## Definition

The Gershgorin Disc Theorem states that for any square matrix $A \\in \\mathbb{C}^{n \\times n}$ with entries $a_{ij}$, every eigenvalue $\\lambda$ of $A$ lies within at least one of the Gershgorin discs $D_i$ in the complex plane. These discs are defined for each row $i$ as:

$$D_i = \\{z \\in \\mathbb{C} : |z - a_{ii}| \\leq R_i\\}$$

where the radius $R_i$ is the sum of the absolute values of the off-diagonal entries in the $i$-th row:

$$R_i = \\sum_{j=1, j \\neq i}^{n} |a_{ij}|$$

Since the set of eigenvalues of $A$ is identical to the set of eigenvalues of its transpose $A^T$, the union of the discs formed by the columns of $A$ also contains all eigenvalues of $A$. This implies that the intersection of the row-based discs and the column-based discs provides an even tighter bound on the spectrum of $A$.

## Key Terminology

To fully grasp the mechanics of the theorem, one must define the following mathematical constructs:

1. **Spectrum ($\\sigma(A)$):** The set of all eigenvalues of matrix $A$.
2. **Gershgorin Disc:** A circular region in the complex plane centered at the diagonal element $a_{ii}$ with a radius equal to the $L_1$-norm of the remaining elements in that row.
3. **Strictly Diagonally Dominant Matrix:** A matrix where $|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|$ for all $i$. For such matrices, the theorem guarantees that all eigenvalues lie within discs that do not contain the origin, which is crucial for proving invertibility.
4. **Spectral Radius ($\\rho(A)$):** Defined as $\\max \\{|\\lambda| : \\lambda \\in \\sigma(A)\\}$. Gershgorin discs provide an upper bound for this value: $\\rho(A) \\leq \\max_i (|a_{ii}| + R_i)$.
5. **Gershgorin Set:** The union of all $n$ Gershgorin discs, denoted as $G(A) = \\bigcup_{i=1}^n D_i$.

## Purpose

The primary utility of the Gershgorin Disc Theorem is to provide a "quick-look" estimate of the spectrum. In engineering applications such as stability analysis of dynamical systems, we often do not need the exact value of the eigenvalues; we only need to know if they reside in the left-half of the complex plane (indicating a stable system).

Furthermore, the theorem is foundational in iterative methods for solving linear systems. For instance, in the Jacobi method, the convergence criteria are often tied to the diagonal dominance of the matrix. If a matrix is strictly diagonally dominant, the Gershgorin discs are disjoint from the imaginary axis, ensuring that the matrix is non-singular. This theorem transforms a problem that is difficult to solve algebraically into a simple arithmetic summation problem, drastically reducing the overhead for high-dimensional matrices.

## Fundamental Properties

The theorem rests on a rigorous proof using the properties of eigenvectors. Suppose $\\lambda$ is an eigenvalue of $A$ with a corresponding eigenvector $x = [x_1, x_2, \\dots, x_n]^T \\neq 0$. Choose the component $x_k$ such that $|x_k| = \\max_j |x_j|$. Since $x \\neq 0$, $|x_k| > 0$.

From the eigenvalue equation $Ax = \\lambda x$, we examine the $k$-th component:
$$\\sum_{j=1}^n a_{kj} x_j = \\lambda x_k$$

Rearranging this to isolate the diagonal term:
$$(\\lambda - a_{kk}) x_k = \\sum_{j \\neq k} a_{kj} x_j$$

Taking the absolute value of both sides and applying the triangle inequality:
$$|\\lambda - a_{kk}| |x_k| = \\left| \\sum_{j \\neq k} a_{kj} x_j \\right| \\leq \\sum_{j \\neq k} |a_{kj}| |x_j|$$

Since $|x_j| \\leq |x_k|$ for all $j$, we divide by $|x_k|$:
$$|\\lambda - a_{kk}| \\leq \\sum_{j \\neq k} |a_{kj}| = R_k$$

This inequality proves that $\\lambda$ must be contained within the disc centered at $a_{kk}$ with radius $R_k$. This property is invariant under unitary transformations, though the discs themselves change depending on the chosen basis, suggesting that scaling matrices (using similarity transformations $D A D^{-1}$) can shrink the discs and improve the localization accuracy.

## Types & Variations

### 1. Brauer's Theorem (Ovals of Cassini)
While the basic theorem uses $n$ discs, Richard Brauer refined this by showing that eigenvalues lie within the union of the ovals of Cassini. For a $2 \\times 2$ partition, the eigenvalues lie in the region defined by $|z - a_{ii}| |z - a_{jj}| \\leq R_i R_j$. This provides a tighter localization than the sum of individual discs.

### 2. Disjoint Union Property
A significant refinement of the theorem states that if the union of $k$ Gershgorin discs is disjoint from the union of the other $n-k$ discs, then exactly $k$ eigenvalues lie within the first set of $k$ discs. This allows for the isolation of specific eigenvalue clusters, which is vital in analyzing partitioned systems or block-diagonal approximations.

### 3. Inclusion Regions for Symmetric Matrices
For symmetric matrices, the eigenvalues are purely real. Consequently, the Gershgorin discs degenerate into intervals on the real line: $[a_{ii} - R_i, a_{ii} + R_i]$. This simplifies the localization significantly, providing a tight interval bound on the real spectrum.

## How to Solve

To apply the Gershgorin Disc Theorem to a matrix $A$, follow these systematic steps:

| Step | Action | Description |
| :--- | :--- | :--- |
| 1 | Identity Centers | Extract the diagonal elements $a_{ii}$ from the matrix. These are the centers of the discs. |
| 2 | Compute Radii | For each row $i$, sum the absolute values of all non-diagonal elements: $R_i = \\sum_{j \\neq i} |a_{ij}|$. |
| 3 | Define Discs | Write the inequality for each disc: $D_i = \\{z : |z - a_{ii}| \\leq R_i\\}$. |
| 4 | Map Union | Combine the discs into a union set $G(A)$ in the complex plane. |
| 5 | Intersect | If possible, compute column-based discs $C_j$ and take the intersection $G(A) \\cap G(A^T)$. |

### Worked Example
Consider the matrix:
$$A = \\begin{pmatrix} 4 & 1 & 1 \\\\ 0 & 2 & 1 \\\\ -2 & 0 & 9 \\end{pmatrix}$$

1. **Row 1:** Center $a_{11} = 4$, Radius $R_1 = |1| + |1| = 2$. Disc $D_1 = \\{z : |z - 4| \\leq 2\\}$.
2. **Row 2:** Center $a_{22} = 2$, Radius $R_2 = |0| + |1| = 1$. Disc $D_2 = \\{z : |z - 2| \\leq 1\\}$.
3. **Row 3:** Center $a_{33} = 9$, Radius $R_3 = |-2| + |0| = 2$. Disc $D_3 = \\{z : |z - 9| \\leq 2\\}$.

The eigenvalues must lie in the union of intervals $[2, 6]$, $[1, 3]$, and $[7, 11]$ on the complex plane. Since this matrix is real, the eigenvalues are guaranteed to be real and within these ranges.

Below is an interactive graph to visualize how changing the off-diagonal magnitudes affects the radii and the localization of eigenvalues in a $2 \\times 2$ system. The parameters $r1$ and $r2$ represent the off-diagonal sum $|a_{12}|$ and $|a_{21}|$ respectively.

\`\`\`interactivegraph
(x-4)^2 + y^2 - r1^2
(x-2)^2 + y^2 - r2^2
params: r1=1, r2=1
range: r1=0:3, r2=0:3
\`\`\`

In the interactive graph above, the circles represent the bounds for a $2 \\times 2$ matrix. Observe how as $r1$ and $r2$ approach zero, the discs shrink toward the points $(4,0)$ and $(2,0)$, which are the eigenvalues of the diagonal matrix.

## Summary

The Gershgorin Disc Theorem is an elegant and powerful instrument in the linear algebra toolkit. It bridges the gap between individual matrix entries and the global spectral properties of a system. By providing a low-cost, geometric bound on the location of eigenvalues, it enables faster stability testing and numerical analysis. While it does not provide exact eigenvalues, its ability to constrain the search space or confirm the sign of real parts makes it indispensable for practitioners dealing with large or dense matrices where direct characteristic polynomial computation is prohibitive. Future applications continue to evolve, particularly in the realm of perturbed systems and interval matrix analysis, where the robustness of the Gershgorin approach remains superior to more computationally demanding methods.`;export{e as default};