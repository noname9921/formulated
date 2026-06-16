var e=`# Vectors & Vector Spaces

## Definition

In the realm of linear algebra, a vector is fundamentally an element of a vector space. While introductory physics often defines a vector as a quantity possessing both magnitude and direction, mathematics provides a more abstract and generalized definition. A vector space $V$ over a field $F$ (commonly the real numbers $\\mathbb{R}$ or complex numbers $\\mathbb{C}$) is a set of objects, called vectors, on which two operations are defined: vector addition and scalar multiplication.

Formally, a vector space $V$ is a set $V$ together with two operations, $+$ and $\\cdot$, that satisfy the following axioms for all $u, v, w \\in V$ and all scalars $a, b \\in F$:
1. Closure under addition: $u+v \\in V$.
2. Commutativity of addition: $u+v=v+u$.
3. Associativity of addition: $(u+v)+w=u+(v+w)$.
4. Existence of additive identity: There exists a vector $0 \\in V$ such that $v+0=v$.
5. Existence of additive inverse: For every $v \\in V$, there exists $-v \\in V$ such that $v+(-v)=0$.
6. Closure under scalar multiplication: $a \\cdot v \\in V$.
7. Distributivity of scalar multiplication over vector addition: $a \\cdot (u+v)=a \\cdot u + a \\cdot v$.
8. Distributivity of scalar multiplication over field addition: $(a+b) \\cdot v=a \\cdot v + b \\cdot v$.
9. Compatibility of scalar multiplication: $a \\cdot (b \\cdot v)=(ab) \\cdot v$.
10. Identity element of scalar multiplication: $1 \\cdot v=v$.

## Key Terminology

To navigate the study of vector spaces, one must master specific nomenclature that defines the internal structure and relationships within these spaces:

| Term | Definition |
| :--- | :--- |
| Scalar | A quantity from the field $F$ (e.g., a real number) that scales a vector. |
| Linear Combination | An expression constructed from a set of vectors by multiplying each vector by a scalar and adding the results. |
| Span | The set of all possible linear combinations of a given set of vectors. |
| Linear Independence | A set of vectors is linearly independent if no vector in the set can be written as a linear combination of the others. |
| Basis | A linearly independent set of vectors that spans the entire vector space. |
| Dimension | The cardinality (number of vectors) of any basis of the vector space. |
| Subspace | A subset of a vector space that is itself a vector space under the same operations. |

## Purpose

The study of vector spaces provides a universal language for modern science and engineering. Its purpose is to generalize the geometric intuition of directed line segments into an algebraic framework capable of handling high-dimensional data. 

In physics, vector spaces facilitate the description of state spaces, where coordinates represent physical properties like position, momentum, and energy. In computer science, they form the bedrock of machine learning and graphics, where data points are treated as vectors in $n$-dimensional space, and transformations are represented by matrices. By abstracting the concept, mathematicians can apply identical theorems to disparate fields, ranging from signal processing, where functions are treated as vectors in an infinite-dimensional Hilbert space, to quantum mechanics, where state vectors represent the probability amplitudes of quantum systems.

## Fundamental Properties

The power of vector spaces lies in their structural stability. Key properties include:

**Linearity:** All operations within a vector space must be linear. This ensures that the principle of superposition holds: the result of a transformation applied to a sum of vectors is the sum of the individual transformed vectors. If $T: V \\to W$ is a linear transformation, then $T(av+bu)=aT(v)+bT(u)$.

**Basis Invariance:** While a vector space may have many different bases, every basis for a given finite-dimensional space contains exactly the same number of vectors (the dimension). This property ensures that dimension is an intrinsic property of the space, independent of the chosen coordinate system.

**Orthogonality:** In inner product spaces, we define the concept of perpendicularity. Two vectors $u$ and $v$ are orthogonal if their inner product $\\langle u,v \\rangle=0$. This allows for the decomposition of vectors into projections, which is essential for solving least-squares problems and Fourier analysis.

**Completeness:** Some vector spaces, particularly in analysis, satisfy the property of completeness, meaning every Cauchy sequence of vectors converges to a vector within the space. These are known as Banach spaces (if normed) or Hilbert spaces (if an inner product is defined).

## Types & Variations

Vector spaces are classified by their field of scalars and the properties of their elements:

1. **Euclidean Space ($\\mathbb{R}^n$):** The standard $n$-dimensional space consisting of tuples of real numbers.
2. **Function Spaces:** Sets where the "vectors" are functions. For example, the space $C[a,b]$ is the set of all continuous real-valued functions on an interval $[a,b]$.
3. **Polynomial Spaces ($P_n$):** The set of all polynomials of degree at most $n$. These form a finite-dimensional vector space where the basis is typically $\\{1, x, x^2, \\dots, x^n\\}$.
4. **Hilbert Spaces:** Vector spaces equipped with an inner product that are also complete. These are fundamental to quantum mechanics and signal processing.
5. **Matrix Spaces ($M_{m \\times n}$):** The set of all $m \\times n$ matrices. Because matrices can be added and scaled, they satisfy all vector space axioms.

To visualize how a linear combination of basis vectors covers a space, consider a 2D plane. The graph below plots $f(x)=1x$ and $g(x)=0.5x$, representing two basis vectors in $\\mathbb{R}^2$ that span the space, assuming a linear combination $y=c_1(x) + c_2(g(x))$.

\`\`\`graph
x
0.5*x
\`\`\`

## How to Solve

Solving problems within vector spaces typically involves determining the basis, verifying subspace membership, or calculating linear transformations.

### 1. Determining Linear Independence
To determine if a set of vectors $\\{v_1, v_2, \\dots, v_n\\}$ is linearly independent, form the matrix $A$ with these vectors as columns. Solve the homogeneous equation $Ax=0$. If the only solution is the trivial solution $x=0$, the vectors are linearly independent. If there exist non-zero solutions, the vectors are linearly dependent.

### 2. Finding a Basis for the Span
If you are given a set of vectors and asked to find a basis for their span:
1. Place the vectors as rows in a matrix.
2. Perform Gaussian elimination to transform the matrix into row-echelon form.
3. The non-zero rows of the resulting matrix constitute a basis for the span.

### 3. Coordinate Transformation
Given a vector $v$ and a basis $B=\\{b_1, b_2\\}$, the coordinates of $v$ with respect to $B$ are found by solving the equation:
$$v=c_1b_1 + c_2b_2$$
This results in a system of linear equations where $c_1$ and $c_2$ are the unknowns.

The following interactive graph allows exploration of how scaling constants affect a linear combination. By adjusting the parameters, one can see how a vector changes in 2D space relative to its components.

\`\`\`interactivegraph
a*x + b
params: a=1, b=0
range: a=-2:2, b=-2:2
\`\`\`

In the interactive graph above, the parameter $a$ represents the weight applied to the base function $x$, while $b$ represents a translation (shifting the "vector"). Observing how $f(x)=ax+b$ behaves helps visualize the span of vectors in a simplified linear function space.

## Summary

Vector spaces are the structural backbone of linear algebra, providing the necessary axioms to perform rigorous calculations in multidimensional environments. By abstracting the notions of "length" and "direction" into the concepts of basis, span, and dimension, we gain the ability to analyze complex systems through linear transformations. Whether solving a system of differential equations, performing a principal component analysis on high-dimensional data, or modeling the state of a quantum particle, the framework of vector spaces remains the most efficient and robust tool in the mathematician's repertoire. Mastery of these concepts—from linear independence and basis construction to the application of inner products—is essential for any student of the quantitative sciences. The transition from concrete $n$-tuples to abstract function spaces represents a significant leap in mathematical maturity, enabling the resolution of problems that would otherwise be analytically intractable.`;export{e as default};