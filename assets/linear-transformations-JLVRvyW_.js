var e=`# Linear Transformations

Linear transformations form the bedrock of linear algebra, providing a rigorous mathematical framework for understanding how vectors move, scale, and rotate within vector spaces. At their core, these transformations map vectors from one space to another while preserving the underlying structure of the vector space—specifically, the operations of vector addition and scalar multiplication.

## Definition

A function $T: V \\to W$, where $V$ and $W$ are vector spaces over a field $F$ (typically the real numbers $\\mathbb{R}$), is defined as a linear transformation if it satisfies two specific conditions for all vectors $u, v \\in V$ and all scalars $c \\in F$:

1. Additivity: $T(u+v) = T(u) + T(v)$
2. Homogeneity: $T(cu) = cT(u)$

These two axioms are often collapsed into the single condition of linearity: $T(cu + v) = cT(u) + T(v)$. If a function satisfies these properties, the transformation is considered linear. It is crucial to note that the transformation must map the zero vector of $V$ to the zero vector of $W$ ($T(0_V) = 0_W$). Any function that fails to map the origin to the origin cannot be a linear transformation, though it may be an affine transformation.

## Key Terminology

To discuss linear transformations effectively, one must master the language used to describe the mapping behavior and the spaces involved:

| Term | Definition |
| :--- | :--- |
| Domain | The vector space $V$ from which the transformation maps. |
| Codomain | The vector space $W$ into which the transformation maps. |
| Range | The subset of $W$ consisting of all vectors $w$ such that $T(v) = w$ for some $v \\in V$. |
| Kernel | The set of all vectors $v \\in V$ such that $T(v) = 0_W$. |
| Matrix Representation | The matrix $A$ such that $T(x) = Ax$, unique to a given basis. |
| Rank | The dimension of the range of the transformation. |
| Nullity | The dimension of the kernel of the transformation. |

The Rank-Nullity Theorem is a fundamental result linking these terms: for a linear transformation $T: V \\to W$ where $V$ is finite-dimensional, $\\dim(\\ker(T)) + \\dim(\\text{range}(T)) = \\dim(V)$.

## Purpose

Linear transformations serve as the bridge between abstract vector spaces and concrete computational matrices. By representing geometric processes (like rotations, scaling, or shearing) as matrix-vector products, we can compute complex transformations efficiently. 

In engineering and physics, linear transformations allow us to model systems that scale proportionally. For instance, in computer graphics, every pixel manipulation, perspective shift, and 3D rotation relies on compositions of linear transformations. In data science, techniques like Principal Component Analysis (PCA) utilize linear transformations to project high-dimensional data onto lower-dimensional subspaces while preserving as much variance as possible. Furthermore, differential equations are often solved by linearizing non-linear systems near equilibrium points, turning local behavior into a matrix transformation problem.

## Fundamental Properties

Linear transformations possess inherent properties that simplify complex operations into predictable algebraic steps:

1. **Composition:** If $T_1: U \\to V$ and $T_2: V \\to W$ are linear transformations, their composition $T_2 \\circ T_1$ is also a linear transformation. If $T_1$ is represented by matrix $A$ and $T_2$ by matrix $B$, the composition is represented by the matrix product $BA$.
2. **Invertibility:** A transformation $T$ is invertible if it is a bijection (both injective and surjective). An invertible transformation has an inverse $T^{-1}$ such that $T^{-1}(T(v)) = v$. In matrix terms, this requires the transformation matrix to be square and non-singular (determinant $\\neq 0$).
3. **Linearity of the Identity:** For any linear transformation, the image of a linear combination of vectors is the same linear combination of the images of the vectors. This is the "Principle of Superposition," which is vital in analyzing electrical circuits and wave mechanics.

## Types & Variations

Linear transformations are categorized based on their geometric and algebraic effects on the input space:

* **Scaling (Dilation/Contraction):** These scale space along the axes. For example, $T(x,y) = (ax, by)$. If $a=b$, it is uniform scaling; if $a \\neq b$, it is non-uniform.
* **Rotation:** In $\\mathbb{R}^2$, a counter-clockwise rotation by angle $\\theta$ is represented by the matrix:
$$
\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}
$$
* **Reflection:** These map vectors across a line or plane. For example, reflecting across the x-axis maps $(x,y)$ to $(x, -y)$.
* **Shear:** These displace space parallel to an axis. A horizontal shear is defined by $T(x,y) = (x+ky, y)$, where $k$ is the shear factor.
* **Projection:** These map a space onto a subspace, such as mapping 3D space onto the $xy$-plane by setting the $z$-coordinate to $0$.

The following interactive graph allows the visualization of how scaling and rotation parameters affect the plane. Observe how changing the transformation parameters alters the visual output of the identity vector mappings.

\`\`\`interactivegraph
ax + by
params: a=1, b=1
range: a=-2:2, b=-2:2
\`\`\`

In the interactive graph above, we explore a basic transformation $f(x) = ax + bx$. While simplified, this represents a scalar transformation across the domain. Notice how changing the value of $a$ and $b$ influences the slope of the output, effectively demonstrating the impact of matrix scaling components on linear space.

## How to Solve

To determine the behavior of a linear transformation $T$, follow this systematic approach:

**1. Determine the Transformation Matrix**
Identify the image of the standard basis vectors. For $\\mathbb{R}^n$, the standard basis vectors are $e_1 = (1, 0, ..., 0)^T, e_2 = (0, 1, ..., 0)^T, \\dots$. The matrix $A$ representing $T$ is constructed by placing the vectors $T(e_1), T(e_2), \\dots$ as columns of $A$.

**2. Evaluate Kernel and Range**
To find the kernel, solve the homogeneous system $Ax = 0$. The solutions form the null space. To find the range, determine the column space of $A$ by row-reducing the matrix to its row-echelon form; the columns of the original matrix corresponding to the pivots span the range.

**3. Composition of Transformations**
If you need to apply multiple transformations, do not calculate them sequentially. Instead, multiply the corresponding matrices. If $T_1$ is $A$ and $T_2$ is $B$, the combined transformation $T = T_2(T_1(v))$ is simply $(BA)v$. This matrix multiplication is associative, allowing for efficient pre-computation.

**4. Eigenvalue Analysis**
To understand the "characteristic" behavior of a transformation, solve $\\det(A - \\lambda I) = 0$ to find eigenvalues $\\lambda$. These scalars tell you the factor by which the transformation scales the specific vectors (eigenvectors) that remain in their span during the transformation.

## Summary

Linear transformations are the language of multidimensional geometry and linear algebra. By defining mappings that satisfy additivity and homogeneity, we ensure that the structural integrity of a vector space is maintained during geometric or algebraic modification. Whether through simple rotation matrices or complex spectral decompositions, linear transformations provide the tools necessary to analyze, simplify, and compute operations in fields ranging from quantum mechanics to computer graphics. Understanding the relationship between the algebraic matrix representation and the geometric action of these transformations is essential for any practitioner of advanced mathematics.`;export{e as default};