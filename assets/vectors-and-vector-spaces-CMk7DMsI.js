var e=`# Vectors & Vector Spaces

## Definition

In the realm of linear algebra, a vector is fundamentally an element of a vector space. While introductory physics often defines vectors as entities possessing both magnitude and direction, mathematics generalizes this concept significantly. A vector space $V$ over a field $F$ (commonly the real numbers $\\mathbb{R}$ or complex numbers $\\mathbb{C}$) is a set of objects, called vectors, which can be added together and multiplied by scalars from the field.

Formally, a vector space $V$ is a non-empty set equipped with two operations: vector addition and scalar multiplication. For any vectors $u, v, w \\in V$ and scalars $a, b \\in F$, the following axioms must hold:
1. Associativity of addition: $(u+v)+w = u+(v+w)$.
2. Commutativity of addition: $u+v = v+u$.
3. Identity element of addition: There exists a zero vector $0 \\in V$ such that $u+0 = u$.
4. Inverse elements of addition: For every $u$, there exists $-u$ such that $u+(-u) = 0$.
5. Compatibility of scalar multiplication: $a(bu) = (ab)u$.
6. Identity element of scalar multiplication: $1u = u$ where $1$ is the multiplicative identity of $F$.
7. Distributivity of scalar multiplication with respect to vector addition: $a(u+v) = au+av$.
8. Distributivity of scalar multiplication with respect to field addition: $(a+b)u = au+bu$.

## Key Terminology

To navigate the abstract space of linear algebra, one must master the nomenclature that defines relationships between vectors and the structures they inhabit.

- Scalar: An element of the field $F$. These are just numbers that scale vectors without changing their direction (if the scalar is positive).
- Linear Combination: An expression of the form $c_1v_1 + c_2v_2 + \\dots + c_nv_n$, where $c_i \\in F$ and $v_i \\in V$.
- Span: The set of all possible linear combinations of a collection of vectors $\\{v_1, \\dots, v_n\\}$. If the span of a set equals $V$, the set is said to span $V$.
- Linear Independence: A set of vectors $\\{v_1, \\dots, v_n\\}$ is linearly independent if the equation $c_1v_1 + c_2v_2 + \\dots + c_nv_n = 0$ has only the trivial solution $c_1 = c_2 = \\dots = c_n = 0$.
- Basis: A set of vectors that is both linearly independent and spans the vector space $V$. Every vector in $V$ can be uniquely expressed as a linear combination of basis vectors.
- Dimension: The number of vectors in any basis of $V$. If $V$ has a finite basis, it is finite-dimensional; otherwise, it is infinite-dimensional.
- Subspace: A subset $S \\subseteq V$ that is itself a vector space under the same addition and scalar multiplication operations defined for $V$.

## Purpose

The utility of vector spaces extends far beyond simple geometry. They provide the foundational language for modeling high-dimensional data, quantum mechanics, and differential equations.

In machine learning and statistics, data points are treated as vectors in $\\mathbb{R}^n$. Operations such as calculating the distance between data points (Euclidean norm) or projecting data onto lower-dimensional subspaces (Principal Component Analysis) rely entirely on vector space axioms. Without this framework, defining concepts like "similarity" between non-geometric objects (like documents or images mapped to feature vectors) would be mathematically impossible.

In physical sciences, specifically quantum mechanics, the state of a system is represented as a vector in a Hilbert space (an infinite-dimensional vector space with an inner product). The linear nature of these spaces allows for the Principle of Superposition, where any combination of valid states is also a valid state. By formalizing these concepts as vector spaces, mathematicians and scientists gain access to powerful tools like the Spectral Theorem, which allows for the decomposition of complex linear operators into simpler, understandable components (eigenvalues and eigenvectors).

## Fundamental Properties

The power of vector spaces lies in the consistency of their properties under transformation. One of the most critical concepts is the inner product, which introduces geometry to abstract vector spaces. An inner product $\\langle u, v \\rangle$ assigns a scalar to two vectors, allowing us to define orthogonality (where $\\langle u, v \\rangle = 0$) and the norm (magnitude) of a vector via $\\|u\\| = \\sqrt{\\langle u, u \\rangle}$.

Another vital property is the concept of a Linear Transformation. A mapping $T: V \\to W$ is linear if $T(u+v) = T(u) + T(v)$ and $T(cu) = cT(u)$. Linear transformations preserve the structure of the vector space. They are the natural language of change; when we rotate an object, stretch a fabric, or perform a coordinate transform in physics, we are applying a linear transformation.

Consider the relationship between two basis vectors in a two-dimensional plane. The following table summarizes how basic properties manifest in finite-dimensional Euclidean space $\\mathbb{R}^2$.

| Property | Definition/Formula | Physical/Geometric Intuition |
| :--- | :--- | :--- |
| Norm | $\\|v\\| = \\sqrt{x^2+y^2}$ | Length of the vector |
| Dot Product | $u \\cdot v = u_x v_x + u_y v_y$ | Projection and orthogonality |
| Scalar Multi. | $c(x, y) = (cx, cy)$ | Stretching or flipping |
| Orthogonality | $u \\cdot v = 0$ | Vectors meet at $90^\\circ$ |
| Dimension | $n$ | Degrees of freedom |

## Types & Variations

Vector spaces are classified by the nature of their underlying field and their internal properties regarding distance and convergence.

1. Euclidean Space ($\\mathbb{R}^n$): The most common space, representing $n$-tuples of real numbers. It is equipped with the standard dot product.
2. Function Spaces: Sets of functions (e.g., continuous functions on $[a, b]$). These are often infinite-dimensional. An example is the space of polynomials, where each power of $x$ (like $x^2$, $x$) acts as a basis element.
3. Complex Vector Spaces ($\\mathbb{C}^n$): Similar to Euclidean space, but the scalars are complex numbers, allowing for the analysis of rotations and oscillations via Euler's formula.
4. Hilbert Spaces: These are complete inner product spaces. "Complete" means that any sequence of vectors that appears to be converging actually converges to a vector within the space.
5. Quotient Spaces: If $W$ is a subspace of $V$, one can create a new space $V/W$ by treating all vectors that differ only by an element in $W$ as equivalent.

The visual representation of how a vector $x$ relates to its scaled version in a transformation is helpful. Below, we use a static graph to represent the behavior of the identity function $f(x) = x$ and a transformation $f(x) = 0.5x$, representing the scaling of a coordinate along a line.

\`\`\`graph
x
0.5*x
\`\`\`

The graph above plots $f(x) = x$ and $f(x) = 0.5x$. These represent vectors in one dimension being transformed by scalars $1$ and $0.5$ respectively, illustrating how scalar multiplication compresses or maintains the magnitude of a basis component.

## How to Solve

Solving problems within vector spaces typically involves determining if a set of vectors forms a basis or identifying the transformation of a vector under a linear mapping.

### Determining Linear Independence
To check if vectors $\\{v_1, v_2, v_3\\}$ are linearly independent, we solve the system of linear equations $c_1v_1 + c_2v_2 + c_3v_3 = 0$.
1. Construct an augmented matrix where the columns are the vectors.
2. Perform Gaussian elimination to transform the matrix into row-echelon form.
3. If the rank of the matrix equals the number of vectors, the set is linearly independent. If there is a free variable (a column without a pivot), the vectors are linearly dependent.

### Applying Linear Transformations
If a transformation is defined by a matrix $A$, finding the image of a vector $v$ is a matrix-vector multiplication $Av$. If the transformation is a reflection or rotation, $A$ represents the basis change. To find the result of transforming a vector, multiply the matrix by the column vector representing $v$.

### Finding the Span
To determine if a vector $b$ is in the span of $\\{v_1, v_2, v_3\\}$, determine if there exist constants $c_1, c_2, c_3$ such that $c_1v_1 + c_2v_2 + c_3v_3 = b$. This is equivalent to solving the matrix equation $Ax = b$. If the system is consistent (the final column of the augmented matrix does not yield a contradiction like $0=1$), then $b$ is in the span.

For exploring the effect of a transformation parameter, we can consider the interactive nature of a vector mapping $f(x) = ax$.

\`\`\`interactivegraph
a*x
params: a=1
range: a=-2:2
\`\`\`

In this interactive graph, the parameter $a$ represents the scalar multiplier applied to the "vector" $x$. By adjusting $a$, you can observe how the transformation flips the direction (negative values) or expands/contracts the magnitude (values greater than 1 or between 0 and 1).

## Summary

Vectors and vector spaces constitute the backbone of modern applied mathematics. By transitioning from the concrete (arrows in space) to the abstract (elements of a set satisfying algebraic axioms), we gain the ability to analyze structures as diverse as digital image data, economic models, and quantum wave functions. The key takeaway is that a vector space is defined not by what its elements *are*, but by how they *interact* through addition and scalar multiplication. Mastering these axioms and the resulting tools—span, basis, dimension, and linear transformation—provides the necessary toolkit to solve complex problems in every technical discipline, from machine learning to engineering physics. As long as the properties of associativity, distributivity, and the existence of identities hold, the beauty and power of linear algebra remain robust and applicable.`;export{e as default};