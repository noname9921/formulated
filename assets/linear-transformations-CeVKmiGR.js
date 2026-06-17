var e=`# Linear Transformations

A linear transformation is a fundamental mapping between two vector spaces that preserves the operations of vector addition and scalar multiplication. These mappings serve as the backbone of linear algebra, providing the structural framework for analyzing systems of equations, geometric projections, data compression, and quantum mechanics.

## Definition

Formally, a transformation $T: V \\to W$ from a vector space $V$ to a vector space $W$ is considered a linear transformation if, for all vectors $u, v \\in V$ and every scalar $c \\in \\mathbb{R}$ (or $\\mathbb{C}$), the following two conditions hold:

1. Additivity: $T(u+v)=T(u)+T(v)$
2. Homogeneity: $T(cu)=cT(u)$

These two properties are often combined into a single requirement known as the superposition principle:
$$T(au+bv)=aT(u)+bT(v)$$
where $a, b$ are scalars and $u, v$ are vectors in $V$. If a function fails to satisfy these conditions, it is classified as a nonlinear transformation. An essential consequence of this definition is that $T(0)=0$, meaning every linear transformation must map the zero vector of the domain to the zero vector of the codomain.

## Key Terminology

To understand linear transformations, one must master the nomenclature associated with their structural properties:

*   **Domain:** The set $V$ which serves as the input space for the transformation.
*   **Codomain:** The set $W$ which contains the output space.
*   **Kernel (Null Space):** The set of all vectors $v \\in V$ such that $T(v)=0$. The kernel measures the "loss" of information during the mapping.
*   **Image (Range):** The set of all vectors $w \\in W$ such that $w=T(v)$ for some $v \\in V$.
*   **Rank:** The dimension of the image of the transformation.
*   **Nullity:** The dimension of the kernel of the transformation.
*   **Matrix Representation:** A matrix $A$ such that $T(v)=Av$. For finite-dimensional spaces, every linear transformation can be uniquely represented by a matrix once bases for $V$ and $W$ are chosen.
*   **Isomorphism:** A linear transformation that is both injective (one-to-one) and surjective (onto). If such a transformation exists, the spaces $V$ and $W$ are considered structurally identical.

## Purpose

Linear transformations allow mathematicians and engineers to simplify complex multidimensional problems into manageable matrix operations. Their primary utility stems from the ability to represent geometric operations such as rotation, scaling, shearing, and reflection as multiplication by a specific matrix. 

In computer graphics, linear transformations are used to render 3D objects on 2D screens. In physics, they describe the evolution of quantum states or coordinate changes in relativity. In data science, techniques such as Principal Component Analysis (PCA) rely on linear transformations to identify the axes of maximum variance within a high-dimensional dataset. By understanding the transformation, one understands the intrinsic structure of the underlying vector space.

## Fundamental Properties

The power of linear transformations lies in their rigidity; they preserve the linear structure of space. Several theorems govern their behavior:

1. **Composition:** If $T: U \\to V$ and $S: V \\to W$ are linear transformations, then the composition $(S \\circ T)(u) = S(T(u))$ is also a linear transformation. This corresponds to the multiplication of their respective matrices.
2. **Invertibility:** A transformation $T$ is invertible if and only if its matrix representation $A$ is square and has a non-zero determinant. The inverse transformation $T^{-1}$ satisfies $T^{-1}(T(v)) = v$.
3. **Rank-Nullity Theorem:** For any linear transformation $T: V \\to W$ where $V$ is finite-dimensional:
$$\\dim(\\ker(T)) + \\dim(\\text{im}(T)) = \\dim(V)$$
This theorem establishes a conservation law for dimension, stating that the number of dimensions "collapsed" into the kernel plus the dimensions "preserved" in the image must equal the dimension of the original space.

## Types & Variations

Linear transformations can be categorized by their geometric effects on a vector space:

| Transformation Type | Matrix Representation (2D) | Geometric Effect |
| :--- | :--- | :--- |
| Scaling | $\\begin{pmatrix} k_x & 0 \\\\ 0 & k_y \\end{pmatrix}$ | Stretches or shrinks space by $k_x$ and $k_y$. |
| Rotation | $\\begin{pmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{pmatrix}$ | Rotates space by $\\theta$ counter-clockwise. |
| Reflection | $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ | Flips the space across an axis. |
| Shear | $\\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ | Shifts space horizontally or vertically. |
| Projection | $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$ | Collapses space onto a lower-dimensional subspace. |

The following interactive graph allows for the exploration of how a linear transformation defined by a matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ affects the function $f(x) = x^2$ in a transformed space. Note how the shape maintains its characteristic parabolic nature but is distorted according to the parameters.

\`\`\`interactivegraph
(ax + b)^2
params: a=1, b=0
range: a=-2:2, b=-2:2
\`\`\`

## How to Solve

To determine if a transformation $T$ is linear or to compute its effects, follow these analytical steps:

**1. Verification:**
To check if $T$ is linear, test the superposition principle:
- Compute $T(u+v)$ and $T(u)+T(v)$. If they are equal for all $u, v$, proceed.
- Compute $T(cu)$ and $cT(u)$. If they are equal for all $c$, the transformation is linear.

**2. Finding the Matrix Representation:**
Given a linear transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$, the standard matrix $A$ is found by observing the transformation of the standard basis vectors $\\{e_1, e_2, \\dots, e_n\\}$:
$$A = [T(e_1) | T(e_2) | \\dots | T(e_n)]$$
This involves applying $T$ to each unit vector and using the results as the columns of $A$.

**3. Solving for the Image and Kernel:**
- **Kernel:** Solve the homogeneous system $Av=0$ using Gaussian elimination. The solutions are the basis vectors of the null space.
- **Image:** Solve $Av=w$ for a general $w$. Alternatively, perform row reduction on $A$; the pivot columns of the original matrix $A$ form a basis for the image (range).

**4. Change of Basis:**
If given a transformation in a non-standard basis $B$, use a transition matrix $P$ to move to the standard basis, perform the transformation using $A$, and convert back:
$$[T]_B = P^{-1}AP$$

## Summary

Linear transformations constitute the most elegant and useful branch of linear algebra. By enforcing strict rules of additivity and homogeneity, they ensure that the "lines" of a vector space remain straight and the origin remains fixed. Whether viewed as algebraic mappings or geometric manipulations, they provide a consistent language to describe how systems change. From the basic scaling of a 2D vector to the high-dimensional projections required for machine learning, the principles of kernels, images, and matrix representations remain the primary tools for dissecting the nature of these mappings. Mastering these concepts provides the foundation for advanced study in differential equations, functional analysis, and numerical computing.`;export{e as default};