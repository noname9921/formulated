var e=`# Algebra: Vectors & Vector Spaces\r
\r
---\r
\r
## 1. Definition\r
\r
In modern algebra, a **vector** is fundamentally understood not merely as a geometric arrow or a list of numbers, but as an element of an abstract mathematical structure known as a vector space.\r
\r
To bridge the transition from classical physics to formal algebra, vectors are defined across two distinct frameworks:\r
\r
### Concrete Definition (The Coordinate Vector)\r
\r
In coordinate geometry and basic linear algebra, a vector is an ordered sequence of real or complex numbers enclosed within a column or row structure. An $n$-dimensional coordinate vector $\\mathbf{v}$ in the real coordinate space $\\mathbb{R}^n$ is written as:\r
\r
$$\\mathbf{v} = \\begin{pmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{pmatrix}$$\r
\r
Where each $v_i \\in \\mathbb{R}$ represents a scalar coordinate component mapping along a specific dimensional axis.\r
\r
### Abstract Algebraic Definition (The Vector Space)\r
\r
Formally, a **vector space** (or linear space) over a field $F$ (such as the field of real numbers $\\mathbb{R}$ or complex numbers $\\mathbb{C}$) is a non-empty set $V$ bound to two operational rules: **vector addition** ($+$) and **scalar multiplication** ($\\cdot$). For $V$ to qualify as a valid vector space, these operations must satisfy a strict set of eight structural axioms for all vectors $\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V$ and all scalars $a, b \\in F$.\r
\r
#### Vector Addition Axioms\r
\r
1. **Associativity:** $\\mathbf{u} + (\\mathbf{v} + \\mathbf{w}) = (\\mathbf{u} + \\mathbf{v}) + \\mathbf{w}$\r
2. **Commutativity:** $\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}$\r
3. **Identity Element:** There exists a unique zero vector $\\mathbf{0} \\in V$ such that $\\mathbf{v} + \\mathbf{0} = \\mathbf{v}$.\r
4. **Inverse Element:** For every vector $\\mathbf{v} \\in V$, there exists an additive inverse $-\\mathbf{v} \\in V$ such that $\\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0}$.\r
\r
#### Scalar Multiplication Axioms\r
\r
5. **Compatibility (Associativity of Scalar Multiplication):** $a(b\\mathbf{v}) = (ab)\\mathbf{v}$\r
6. **Identity Element:** The scalar unit $1 \\in F$ satisfies $1\\cdot\\mathbf{v} = \\mathbf{v}$.\r
7. **Distributivity over Vector Addition:** $a(\\mathbf{u} + \\mathbf{v}) = a\\mathbf{u} + a\\mathbf{v}$\r
8. **Distributivity over Scalar Addition:** $(a + b)\\mathbf{v} = a\\mathbf{v} + b\\mathbf{v}$\r
\r
---\r
\r
## 2. Key Terminology\r
\r
Developing fluency in high-level vector analysis requires a precise understanding of the following foundational concepts:\r
\r
- **Scalar:** A element belonging to the underlying field $F$ used to scale vectors. Scalars are typically real or complex numbers.\r
- **Linear Combination:** An expression constructed by multiplying a set of vectors by scalar constants and adding the results together. Formally written as:\r
  $$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3 + \\dots + c_k\\mathbf{v}_k$$\r
- **Span:** The set of all possible linear combinations that can be generated from a specific subset of vectors. The span of a set forms a valid subspace.\r
- **Linear Independence:** A characteristic of a set of vectors where no individual vector in the set can be written as a linear combination of the remaining vectors. Formally, the equation $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\dots + c_k\\mathbf{v}_k = \\mathbf{0}$ has only the trivial solution where all scalars equal zero ($c_1 = c_2 = \\dots = c_k = 0$).\r
- **Linear Dependence:** A state where at least one vector in a set can be expressed as a linear combination of the others, meaning non-zero scalar constants exist that can solve the zero vector equation.\r
- **Basis:** A linearly independent set of vectors that completely spans the entire vector space $V$. A basis serves as a minimal generating set for the space.\r
- **Dimension ($\\dim(V)$):** The unique number of individual vectors present in a basis for the vector space $V$. If a space requires an infinite number of basis vectors, it is classified as an infinite-dimensional space.\r
- **Subspace:** A non-empty subset $W$ of a vector space $V$ that remains a valid vector space in its own right under the inherited operations, requiring explicit closure under addition and scalar multiplication.\r
\r
---\r
\r
## 3. Purpose\r
\r
The axiomatic framework of vectors and vector spaces unifies diverse mathematical concepts under a single, cohesive theory. It isolates structural characteristics from specific visual representations.\r
\r
### Unifying Geometric and Analytic Math\r
\r
Historically, algebra and geometry evolved along independent paths. Vector space theory completely unifies these disciplines. Representing geometric planes, points, and spatial rotations as abstract vectors allows geometric relationships to be analyzed using matrix arithmetic and systems of linear equations.\r
\r
### Abstract Functional Simplification\r
\r
Vector spaces extend far beyond lists of numbers. By treating continuous mathematical functions, infinite sequences, and polynomial equations as abstract "vectors", higher-level mathematics can solve calculus problems using linear algebra tools.\r
\r
### Real-World Engineering Applications\r
\r
- **Computer Graphics & Gaming Physics:** Objects, lighting values, surface normals, and motion trajectories are computed as vector components. Spatial orientations are updated instantly via matrix transformations applied to coordinate arrays.\r
- **Data Dimension Reduction:** In modern data analytics and artificial intelligence, massive datasets are processed as high-dimensional vectors. Optimization routines compress thousands of operational dimensions down to low-dimensional subspaces using Principal Component Analysis (PCA).\r
- **Quantum State Trajectories:** Quantum computing mechanics are modeled entirely using specialized complex vector spaces known as Hilbert Spaces, where quantum state bits are combined using linear combinations.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Vectors exhibit specific internal arithmetic behaviors under inner product pairings, norm mappings, and algebraic transformations.\r
\r
### Inner Product Spaces\r
\r
An inner product is an operation that pairs two vectors from a vector space to produce a scalar value, introducing geometric concepts like length and angle into abstract spaces. For the real space $\\mathbb{R}^n$, the standard inner product is the **Dot Product**:\r
\r
$$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\dots + u_n v_n = \\sum_{i=1}^{n} u_i v_i$$\r
\r
### Norm and Metric Foundations\r
\r
The length or magnitude of an individual vector is quantified via a mapping called a **norm**, denoted by $\\|\\mathbf{v}\\|$. In a standard Euclidean inner product space, the norm is calculated directly from the inner product:\r
\r
$$\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle} = \\sqrt{v_1^2 + v_2^2 + \\dots + v_n^2}$$\r
\r
### Core Vector Inequalities\r
\r
Vector operations are bounded by several foundational algebraic inequalities:\r
\r
- **The Cauchy-Schwarz Inequality:** The absolute value of the inner product of two vectors is always bounded by the product of their individual norms:\r
  $$|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\le \\|\\mathbf{u}\\| \\cdot \\|\\mathbf{v}\\|$$\r
- **The Triangle Inequality:** The geometric norm of the sum of two vectors is less than or equal to the sum of their individual norms:\r
  $$\\|\\mathbf{u} + \\mathbf{v}\\| \\le \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$$\r
\r
### Matrix of Classical Vector Structural Properties\r
\r
The following table summarizes core mathematical operations applied to standard coordinate vectors.\r
\r
| Vector Operation          | Input Configurations                              | Mathematical Expression Result                                                                                      | Structural Properties                                     |\r
| :------------------------ | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------- |\r
| **Vector Addition**       | Two vectors of identical dimension                | $\\mathbf{u} + \\mathbf{v} = \\begin{pmatrix} u_1 + v_1 \\\\ \\vdots \\\\ u_n + v_n \\end{pmatrix}$                          | Commutative, associative, preserves space dimensions      |\r
| **Scalar Multiplication** | One scalar $c$, one vector $\\mathbf{v}$           | $c\\mathbf{v} = \\begin{pmatrix} c \\cdot v_1 \\\\ \\vdots \\\\ c \\cdot v_n \\end{pmatrix}$                                  | Distributive, adjusts magnitude, scales space coordinates |\r
| **Dot Product**           | Two vectors of identical dimension                | $\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + \\dots + u_nv_n$                                                             | Produces scalar output, measures spatial orthogonality    |\r
| **Cross Product**         | Two vectors strictly restricted to $\\mathbb{R}^3$ | $\\mathbf{u} \\times \\mathbf{v} = \\begin{pmatrix} u_2v_3 - u_3v2 \\\\ u_3v_1 - u_1v_3 \\\\ u_1v_2 - u_2v_1 \\end{pmatrix}$ | Vector output, orthogonal to both original inputs         |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Vector space theory covers multiple unique mathematical structures depending on the nature of their elements and structural constraints.\r
\r
### 1. Coordinate Space $\\mathbb{R}^n$ and $\\mathbb{C}^n$\r
\r
The most common vector space family. It consists of all possible column lists containing $n$ real or complex numbers. These spaces form the foundational backbone for matrix computations and elementary coordinate physics.\r
\r
### 2. Polynomial Spaces ($P_n$)\r
\r
The set of all algebraic polynomials of degree less than or equal to $n$ forms a valid vector space. For example, in $P_2$, a generic "vector" is expressed as:\r
\r
$$p(x) = ax^2 + bx + c$$\r
\r
Here, polynomial addition and scalar multiplication follow standard algebraic distribution rules, and the set satisfies all eight vector space axioms. The standard basis for this space is the set of monomials $\\{1, x, x^2\\}$, making $\\dim(P_2) = 3$.\r
\r
### 3. Function Spaces ($C[a, b]$)\r
\r
The set of all continuous, real-valued functions operating within a closed interval $[a, b]$ forms an infinite-dimensional vector space. Individual functions act as the vectors. For instance, functions like $f(x) = \\sin(x)$ and $g(x) = e^x$ can be added together or multiplied by constants to create new functions within the same space.\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step algebraic methodologies for testing linear independence, verifying subspace constraints, and calculating vector projections.\r
\r
### Strategy A: Testing a Set of Vectors for Linear Independence\r
\r
To determine if a given collection of vectors forms a linearly independent set, we construct a vector equation equal to zero and evaluate its scalar solution set.\r
\r
**Example Question:** Determine if the following three vectors in $\\mathbb{R}^3$ are linearly independent:\r
\r
$$\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}, \\quad \\mathbf{v}_2 = \\begin{pmatrix} 0 \\\\ 1 \\\\ 4 \\end{pmatrix}, \\quad \\mathbf{v}_3 = \\begin{pmatrix} 2 \\\\ 3 \\\\ 2 \\end{pmatrix}$$\r
\r
1. **Set up the linear combination equation equal to the zero vector:**\r
   $$c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + c_3 \\mathbf{v}_3 = \\mathbf{0}$$\r
   $$c_1 \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + c_2 \\begin{pmatrix} 0 \\\\ 1 \\\\ 4 \\end{pmatrix} + c_3 \\begin{pmatrix} 2 \\\\ 3 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$\r
\r
2. **Convert the vector system into a standard matrix format:**\r
   $$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 3 \\\\ 3 & 4 & 2 \\end{pmatrix}$$\r
\r
3. **Evaluate the determinant of the matrix to determine the nature of its solution set:**\r
   Expand along the first row:\r
   $$\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & 3 \\\\ 4 & 2 \\end{vmatrix} - 0 \\cdot \\begin{vmatrix} 2 & 3 \\\\ 3 & 2 \\end{vmatrix} + 2 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 3 & 4 \\end{vmatrix}$$\r
   $$\\det(A) = 1(2 - 12) - 0 + 2(8 - 3)$$\r
   $$\\det(A) = -10 + 2(5) = -10 + 10 = 0$$\r
\r
4. **Interpret the determinant result:**\r
   Because $\\det(A) = 0$, the matrix is singular. This indicates that the system has non-trivial solutions, meaning there are non-zero scalars that satisfy the equation.\r
\r
Therefore, the vectors are **linearly dependent**.\r
\r
### Strategy B: Verifying the Subspace Closure Constraints\r
\r
To prove whether a subset $W$ forms a valid algebraic subspace of a known vector space $V$, you must verify that it satisfies the three core closure criteria.\r
\r
**Example Question:** Prove whether the subset $W \\subset \\mathbb{R}^2$ consisting of all vectors where the second coordinate is exactly double the first coordinate ($W = \\left\\{ \\begin{pmatrix} x \\\\ 2x \\end{pmatrix} \\Big| x \\in \\mathbb{R} \\right\\}$) forms a valid subspace.\r
\r
1. **Test for the presence of the Zero Vector:**\r
   Set $x = 0$. The resulting vector is $\\begin{pmatrix} 0 \\\\ 2(0) \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\mathbf{0}$. The zero vector is present in $W$.\r
\r
2. **Test for Closure under Vector Addition:**\r
   Select two arbitrary vectors $\\mathbf{u}, \\mathbf{v}$ that satisfy the structural definition of $W$:\r
   $$\\mathbf{u} = \\begin{pmatrix} x_1 \\\\ 2x_1 \\end{pmatrix}, \\quad \\mathbf{v} = \\begin{pmatrix} x_2 \\\\ 2x_2 \\end{pmatrix}$$\r
   Add the two vectors together:\r
   $$\\mathbf{u} + \\mathbf{v} = \\begin{pmatrix} x_1 + x_2 \\\\ 2x_1 + 2x_2 \\end{pmatrix} = \\begin{pmatrix} (x_1 + x_2) \\\\ 2(x_1 + x_2) \\end{pmatrix}$$\r
   Let $x_3 = x_1 + x_2$. The sum vector matches the structural pattern $\\begin{pmatrix} x_3 \\\\ 2x_3 \\end{pmatrix}$, confirming that the subset is closed under addition.\r
\r
3. **Test for Closure under Scalar Multiplication:**\r
   Multiply an arbitrary vector $\\mathbf{u} \\in W$ by a scalar constant $c \\in \\mathbb{R}$:\r
   $$c \\mathbf{u} = c \\begin{pmatrix} x_1 \\\\ 2x_1 \\end{pmatrix} = \\begin{pmatrix} c \\cdot x_1 \\\\ c \\cdot (2x_1) \\end{pmatrix} = \\begin{pmatrix} (cx_1) \\\\ 2(cx_1) \\end{pmatrix}$$\r
   Let $x_4 = cx_1$. The resulting vector matches the structural pattern $\\begin{pmatrix} x_4 \\\\ 2x_4 \\end{pmatrix}$, confirming that the subset is closed under scalar multiplication.\r
\r
Because all three criteria are satisfied, the subset $W$ is a **valid algebraic subspace**.\r
\r
### Strategy C: Calculating the Orthogonal Projection of a Vector\r
\r
Orthogonal projection maps a vector onto a straight-line vector subspace path, decomposing complex vectors into perpendicular components.\r
\r
**Example Question:** Calculate the orthogonal projection of vector $\\mathbf{u} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$ onto the line spanned by vector $\\mathbf{v} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$.\r
\r
1. **Recall the algebraic projection formula:**\r
   $$\\text{proj}_{\\mathbf{v}}(\\mathbf{u}) = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{v}\\|^2} \\mathbf{v} = \\left( \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\mathbf{v} \\cdot \\mathbf{v}} \\right) \\mathbf{v}$$\r
\r
2. **Compute the inner product dot product value ($\\mathbf{u} \\cdot \\mathbf{v}$):**\r
   $$\\mathbf{u} \\cdot \\mathbf{v} = (4)(3) + (1)(1) = 12 + 1 = 13$$\r
\r
3. **Compute the squared norm value ($\\mathbf{v} \\cdot \\mathbf{v}$):**\r
   $$\\mathbf{v} \\cdot \\mathbf{v} = (3)(3) + (1)(1) = 9 + 1 = 10$$\r
\r
4. **Combine the computed values to scale the target vector:**\r
   $$\\text{proj}_{\\mathbf{v}}(\\mathbf{u}) = \\frac{13}{10} \\mathbf{v} = \\frac{13}{10} \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 3.9 \\\\ 1.3 \\end{pmatrix}$$\r
\r
The orthogonal projection of $\\mathbf{u}$ onto $\\mathbf{v}$ is exactly $\\begin{pmatrix} 3.9 \\\\ 1.3 \\end{pmatrix}$.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Structural Axioms:** A vector space is an abstract set of elements bound by rules for vector addition and scalar multiplication that satisfy eight structural axioms.\r
- **The Structural Kernel:** Linear independence defines a set of unique, non-redundant vectors, whereas a span maps out the entire range of space reachable via linear combinations.\r
- **Basis and Dimensional Boundaries:** A basis is a minimal independent set that completely generates a space. The number of vectors in this basis determines the space's dimension.\r
- **Geometric Integration:** Introducing inner products and norms into abstract vector spaces adds geometric properties like lengths, distances, and orthogonal angles.\r
- **Universal Flexibility:** Vector spaces apply well beyond simple spatial coordinates, wrapping structures like polynomials, matrices, and continuous functions into a unified algebraic framework.\r
`;export{e as default};