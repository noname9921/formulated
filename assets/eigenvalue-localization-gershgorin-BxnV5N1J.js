var e=`# Eigenvalue Localization: Gershgorin Disc Theorem

Eigenvalue analysis lies at the heart of numerical linear algebra, stability theory, and dynamical systems. While the characteristic equation $\\det(A - \\lambda I) = 0$ provides the formal framework for finding eigenvalues, calculating these values explicitly for large, dense, or non-symmetric matrices is computationally expensive and analytically difficult. The Gershgorin Disc Theorem provides a powerful, elegant, and computationally efficient tool to estimate the region of the complex plane where all eigenvalues of a square matrix must reside. By using only the entries of the matrix itself, we can "trap" the eigenvalues within a set of discs, offering an immediate qualitative understanding of the matrix's spectrum without solving polynomial equations of high degree.

## Definition

Let $A = (a_{ij})$ be an $n \\times n$ complex matrix. For each row $i$, define the Gershgorin disc $R_i$ as a closed disc in the complex plane $\\mathbb{C}$ centered at $a_{ii}$ with radius $r_i$ equal to the sum of the absolute values of the off-diagonal entries in that row:

$$R_i = \\{z \\in \\mathbb{C} : |z - a_{ii}| \\leq r_i\\}$$

where

$$r_i = \\sum_{j=1, j \\neq i}^{n} |a_{ij}|$$

The Gershgorin Disc Theorem states that every eigenvalue $\\lambda$ of the matrix $A$ lies within the union of these $n$ discs:

$$\\sigma(A) \\subseteq \\bigcup_{i=1}^{n} R_i$$

In this context, $\\sigma(A)$ denotes the spectrum of $A$, which is the set of all its eigenvalues. This theorem implies that the entire spectrum is contained within the region formed by the union of all $R_i$. Furthermore, if a union of $k$ such discs is disjoint from the remaining $n-k$ discs, then this union contains exactly $k$ eigenvalues of $A$.

## Key Terminology

To fully grasp the mechanics of the theorem, one must be familiar with several fundamental linear algebra concepts:

*   **Spectrum ($\\sigma(A)$):** The set of all scalars $\\lambda$ such that $(A - \\lambda I)v = 0$ for some non-zero vector $v$.
*   **Diagonal Dominance:** A matrix $A$ is strictly diagonally dominant if for every row $i$, $|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|$. Under this condition, the Gershgorin Disc Theorem implies that all eigenvalues have non-zero real parts or specific constraints that ensure the matrix is invertible, as the discs cannot contain the origin.
*   **Complex Plane:** Since matrices can have complex entries, eigenvalues may also be complex. The Gershgorin discs are geometric subsets of $\\mathbb{C}$.
*   **Similarity Transformation:** Since $A$ and $P^{-1}AP$ have the same eigenvalues, applying the theorem to $D^{-1}AD$ for some diagonal matrix $D$ (a process known as "diagonal scaling") can yield tighter localization bounds.
*   **Gershgorin Radii:** The value $r_i$ representing the absolute sum of off-diagonal elements, acting as the "tightness" parameter of the disc.

## Purpose

The primary utility of the Gershgorin Disc Theorem is the localization of spectra without full diagonalization or the application of iterative methods like the QR algorithm.

1.  **Computational Efficiency:** Calculating the row sums of absolute values takes $O(n^2)$ time, whereas finding eigenvalues generally requires $O(n^3)$ operations. This makes the theorem an ideal pre-processing step for numerical algorithms.
2.  **Stability Analysis:** In control theory, systems are often described by systems of differential equations $\\dot{x} = Ax$. If all Gershgorin discs lie in the left half of the complex plane (i.e., $\\text{Re}(z) < 0$ for all $z \\in \\bigcup R_i$), the system is guaranteed to be asymptotically stable.
3.  **Numerical Bounds:** It provides error bounds for perturbed matrices. If we have an approximate matrix $\\tilde{A} = A + E$, we can estimate how much the eigenvalues shift by examining the discs of $E$.
4.  **Initial Guesses:** Many iterative eigenvalue solvers, such as the power iteration or Arnoldi iteration, require a starting point. Gershgorin discs provide natural regions to search for these starting vectors.

## Fundamental Properties

The theorem relies on the concept of vector norms and the properties of the eigenvector associated with a specific eigenvalue. Consider an eigenvalue $\\lambda$ of $A$ and its corresponding eigenvector $x$. Let $i$ be the index such that $|x_i| = \\max_j |x_j|$. Since $x$ is non-zero, we can normalize it such that $|x_i| = 1$ and $|x_j| \\leq 1$ for all $j$.

Starting from the eigenvalue equation $Ax = \\lambda x$, we focus on the $i$-th row:

$$\\sum_{j=1}^{n} a_{ij}x_j = \\lambda x_i$$

Subtracting $a_{ii}x_i$ from both sides:

$$\\sum_{j \\neq i} a_{ij}x_j = (\\lambda - a_{ii})x_i$$

Taking the absolute value and applying the triangle inequality:

$$|\\lambda - a_{ii}| |x_i| = |\\sum_{j \\neq i} a_{ij}x_j| \\leq \\sum_{j \\neq i} |a_{ij}| |x_j|$$

Given our normalization $|x_i| = 1$ and $|x_j| \\leq 1$:

$$|\\lambda - a_{ii}| \\leq \\sum_{j \\neq i} |a_{ij}| = r_i$$

This proves that $\\lambda$ must reside within the $i$-th Gershgorin disc. This property is robust for any square matrix, regardless of whether it is symmetric, Hermitian, or defective (where the geometric multiplicity of an eigenvalue is less than its algebraic multiplicity).

## Types & Variations

While the basic theorem is powerful, extensions improve its precision:

| Variation | Description |
| :--- | :--- |
| **Column Gershgorin** | The eigenvalues of $A$ are the same as those of $A^T$. Thus, the discs formed by column sums of absolute values also contain the eigenvalues. |
| **Intersection Theorem** | The spectrum $\\sigma(A)$ is contained in the intersection of the row-disc union and the column-disc union. |
| **Brauer's Cassini Ovals** | A more restrictive localization formed by pairs of discs, providing a tighter region than the union of individual discs for certain matrix structures. |
| **Diagonal Scaling** | Applying a similarity transform $D^{-1}AD$ where $D$ is a diagonal matrix. The eigenvalues remain invariant, but the centers and radii of the discs change, potentially allowing for significantly tighter localization. |

The following table summarizes the behavior of localization based on diagonal dominance:

| Matrix Property | Localization Effect |
| :--- | :--- |
| Strictly Row Dominant | All discs are displaced from the origin; eigenvalues cannot be zero. |
| Symmetric Matrix | All eigenvalues are real; discs collapse to intervals on the real line. |
| Irreducible Matrix | If a disc is disjoint from the others, it contains exactly one eigenvalue. |

## How to Solve

To apply the Gershgorin Disc Theorem analytically, follow this systematic procedure:

1.  **Identify Matrix Elements:** Write down the matrix $A$. Ensure it is square.
2.  **Calculate Centers:** For each row $i$, identify the diagonal element $a_{ii}$. These are the centers $c_i$ of your discs in the complex plane.
3.  **Calculate Radii:** For each row $i$, calculate the sum of the absolute values of the remaining elements: $r_i = \\sum_{j \\neq i} |a_{ij}|$.
4.  **Construct Discs:** Define each disc $D_i$ as the set of points $z$ such that $|z - c_i| \\leq r_i$.
5.  **Visualize/Bound:** Plot the discs in the complex plane. The union of these discs identifies the region containing the spectrum $\\sigma(A)$.
6.  **Refine (Optional):** If the bound is too loose, try scaling the matrix by a diagonal matrix $D$ to minimize the maximum radius $\\max(r_i)$ or to isolate individual eigenvalues into smaller, disjoint regions.

Example: Consider $A = \\begin{pmatrix} 2 & 0.5 \\\\ 0.2 & -1 \\end{pmatrix}$.
Row 1: Center $2$, Radius $0.5$. Range $[1.5, 2.5]$.
Row 2: Center $-1$, Radius $0.2$. Range $[-1.2, -0.8]$.
The eigenvalues must be in the union of these two intervals on the real line.

## Summary

The Gershgorin Disc Theorem is an indispensable tool for spectral localization. It transforms the algebraic problem of finding roots of the characteristic polynomial into a geometric problem of defining regions in the complex plane. While it does not always provide the exact location of individual eigenvalues, it establishes rigorous boundaries that are essential for verifying matrix properties such as invertibility, definiteness, and stability. 

By leveraging the row-wise sums of absolute values, we gain a global perspective on the spectrum of $A$. Whether utilized in computational software to initialize iterative solvers or in theoretical physics to bound energy levels of Hamiltonians, the theorem remains a pillar of linear algebra. Advanced variations, such as similarity scaling and intersection methods, extend its utility for matrices where diagonal dominance is not initially apparent, ensuring that Gershgorin's insights remain relevant even in the analysis of highly complex dynamical systems. The power of this theorem lies in its simplicity; it extracts maximum information about the global distribution of eigenvalues with minimal computational effort, standing as a testament to the elegance of classical matrix analysis.`;export{e as default};