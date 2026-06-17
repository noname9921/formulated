var e=`# Matrices & Determinants

## Definition

A matrix is defined as a rectangular array of numbers, symbols, or expressions arranged in rows and columns. Formally, an $m \\times n$ matrix is a collection of $mn$ elements organized into $m$ horizontal rows and $n$ vertical columns. The individual elements within a matrix are denoted by $a_{ij}$, where $i$ represents the row index and $j$ represents the column index.

Matrices serve as the primary medium for linear algebra, acting as a structured representation of linear transformations. A determinant, conversely, is a scalar value that is a function of the entries of a square matrix. For an $n \\times n$ matrix $A$, the determinant, denoted by $\\det(A)$ or $|A|$, encapsulates critical geometric and algebraic properties, such as the scaling factor of the linear transformation described by the matrix and the invertibility of the system.

## Key Terminology

To navigate the study of linear algebra, one must master the nomenclature associated with matrix theory:

| Term | Definition |
| :--- | :--- |
| Scalar | A single numerical value used to scale a matrix. |
| Vector | A matrix with either a single row or a single column. |
| Square Matrix | A matrix where the number of rows equals the number of columns ($m=n$). |
| Identity Matrix | A square matrix with ones on the main diagonal and zeros elsewhere. |
| Transpose | The matrix obtained by swapping rows and columns ($A^T$). |
| Minor | The determinant of a sub-matrix created by deleting a row and column. |
| Cofactor | The signed minor, calculated as $C_{ij}=(-1)^{i+j}M_{ij}$. |
| Trace | The sum of elements on the main diagonal of a square matrix. |

The main diagonal of a matrix consists of elements $a_{ii}$ for $1 \\le i \\le \\min(m, n)$. In the context of determinants, the cofactor expansion is a fundamental method used to decompose a large determinant into the sum of products of its elements and their respective cofactors.

## Purpose

The primary utility of matrices lies in their capacity to solve systems of linear equations. A system of equations such as $ax+by=e$ and $cx+dy=f$ can be represented as $AX=B$, where:

$$
A=
\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix},
X=
\\begin{bmatrix}
x \\\\
y
\\end{bmatrix},
B=
\\begin{bmatrix}
e \\\\
f
\\end{bmatrix}
$$

The determinant $\\det(A) = ad-bc$ informs us whether the system has a unique solution. If $\\det(A) \\ne 0$, the matrix is invertible, and a unique solution exists. If $\\det(A) = 0$, the system is either inconsistent or possesses infinitely many solutions.

Beyond algebra, matrices are foundational in computer graphics, where they perform transformations such as rotation, scaling, and shearing. In quantum mechanics, matrices (operators) represent physical observables, and their eigenvalues correspond to measurable states. In data science, matrices are the bedrock of machine learning, facilitating the manipulation of large feature sets via high-dimensional tensors.

## Fundamental Properties

The determinant possesses several algebraic properties that simplify computation and theoretical derivation:

1. Multiplicativity: $\\det(AB) = \\det(A)\\det(B)$. This property is vital for understanding how composed transformations affect space.
2. Row Operations:
   - If two rows of a matrix are swapped, the determinant changes sign.
   - If a row is multiplied by a scalar $k$, the determinant is multiplied by $k$.
   - Adding a multiple of one row to another row does not change the determinant.
3. Transpose: $\\det(A) = \\det(A^T)$.
4. Identity: $\\det(I) = 1$, where $I$ is the identity matrix.

These properties imply that if any two rows or columns are identical, or if a row consists entirely of zeros, the determinant is zero. Geometrically, the absolute value of the determinant represents the factor by which the linear transformation scales volumes in $n$-dimensional space. For a $2 \\times 2$ matrix, the determinant represents the area of the parallelogram formed by the two column vectors.

## Types & Variations

Matrices are categorized by their structure and spectral properties:

* Diagonal Matrix: All non-diagonal elements are zero. The determinant is the product of the diagonal entries.
* Upper Triangular Matrix: All entries below the main diagonal are zero. The determinant is the product of the diagonal entries.
* Symmetric Matrix: A matrix equal to its transpose ($A=A^T$). These matrices have real eigenvalues and are crucial in statistical covariance.
* Orthogonal Matrix: A square matrix where the transpose is equal to the inverse ($A^T=A^{-1}$). These represent rotations and reflections, always maintaining a determinant of $\\pm 1$.
* Singular Matrix: A matrix with a determinant of $0$, implying it lacks an inverse.

To observe how linear transformations act on a vector space, consider the transformation of coordinates. The following interactive graph allows the adjustment of a $2 \\times 2$ matrix $M = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ where $a, b, c, d$ are parameters. Specifically, this explores how the transformation affects the line $y=x$.

\`\`\`interactivegraph
(c*x + d*x) / (a*x + b*x)
params: a=1, b=0, c=0, d=1
range: a=-2:2, b=-2:2, c=-2:2, d=-2:2
\`\`\`

In the interactive graph above, the reader can observe how changing the entries of the transformation matrix influences the slope and intercept of the resulting line. Note that when the determinant $ad-bc$ approaches zero, the transformation collapses the 2D plane into a lower dimension, making the transformation non-invertible.

## How to Solve

Calculating determinants and manipulating matrices involves distinct algorithmic approaches depending on the matrix size.

### Calculating $2 \\times 2$ Determinants
For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, the formula is straightforward:
$$
\\det(A) = ad - bc
$$

### Calculating $3 \\times 3$ Determinants (Sarrus' Rule)
For a $3 \\times 3$ matrix, we can use the rule of Sarrus or cofactor expansion. Using the top row:
$$
\\det(A) = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})
$$

### Gaussian Elimination
For matrices of size $n > 3$, cofactor expansion is computationally expensive ($O(n!)$ complexity). Instead, we use Gaussian elimination to reduce the matrix to an upper triangular form. Since the determinant of a triangular matrix is the product of its diagonal elements, and we know the effect of row operations on the determinant, we can track the changes:
1. Apply elementary row operations to reach upper triangular form.
2. If row swaps are performed, multiply the determinant by $-1$ for each swap.
3. If a row was scaled by $k$, divide the final product by $k$.
4. Multiply the resulting diagonal entries to find $\\det(A)$.

### Matrix Inversion
To invert a matrix $A$ where $\\det(A) \\ne 0$, one uses the adjugate matrix:
$$
A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)
$$
where $\\text{adj}(A)$ is the transpose of the cofactor matrix.

## Summary

Matrices and determinants form the backbone of modern mathematical analysis. A matrix provides a structured, coordinate-based representation of linear transformations, while the determinant provides an essential scalar diagnostic tool to evaluate the nature, invertibility, and geometric impact of those transformations.

From basic algebraic systems to complex quantum field theory and high-frequency trading algorithms, the utility of this subject is universal. By mastering the fundamental properties—such as the rules governing row operations and the relationship between cofactors and minors—students and practitioners alike can solve high-dimensional problems that would be intractable through elementary algebra. Whether utilizing the efficiency of Gaussian elimination for large-scale data sets or the geometric intuition of $2 \\times 2$ transformations, the study of matrices remains a prerequisite for success in engineering, physics, and computational science.`;export{e as default};