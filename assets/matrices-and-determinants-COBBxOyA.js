var e=`# Matrices & Determinants

## Definition

A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns. Formally, a matrix $A$ of size $m \\times n$ is a collection of elements $a_{ij}$ where $i$ denotes the row index $(1 \\leq i \\leq m)$ and $j$ denotes the column index $(1 \\leq j \\leq n)$. The set of all $m \\times n$ matrices over a field $F$ is denoted by $M_{m,n}(F)$.

A determinant, on the other hand, is a unique scalar value that is associated with a square matrix (where $m=n$). It provides profound insights into the properties of the linear transformation represented by the matrix. For a square matrix $A$, the determinant is denoted as $\\det(A)$ or $|A|$. While a matrix represents a transformation, the determinant characterizes the scaling factor of that transformation, specifically how it affects the $n$-dimensional volume of a geometric figure.

## Key Terminology

To navigate the study of matrices, one must understand several foundational terms:

| Term | Definition |
| :--- | :--- |
| Scalar | A single numerical value used to scale a matrix. |
| Vector | A matrix with only one row ($1 \\times n$) or one column ($m \\times 1$). |
| Square Matrix | A matrix where the number of rows equals the number of columns ($m=n$). |
| Identity Matrix | A square matrix with ones on the main diagonal and zeros elsewhere, denoted as $I$. |
| Transpose | A matrix obtained by swapping rows and columns ($A^T_{ij} = A_{ji}$). |
| Trace | The sum of elements on the main diagonal of a square matrix. |
| Minor | The determinant of a sub-matrix formed by deleting a specific row and column. |
| Cofactor | The signed minor: $C_{ij} = (-1)^{i+j}M_{ij}$. |

The main diagonal of a matrix consists of elements $a_{ii}$ where the row index equals the column index. A matrix is termed "singular" if its determinant is zero, implying the matrix does not have an inverse.

## Purpose

Matrices serve as the language of modern mathematics and computational science. Their primary purposes include:

1. **Linear Systems Representation:** Large systems of linear equations $Ax=b$ can be represented compactly as a matrix multiplication, allowing for efficient algorithmic solutions using Gaussian elimination or matrix inversion.
2. **Geometric Transformations:** Matrices are the engine behind computer graphics and physics engines. Operations such as rotation, scaling, shearing, and reflection are represented as matrix-vector multiplications.
3. **Data Organization:** In statistics and machine learning, datasets are stored as matrices (or tensors), where rows represent individual samples and columns represent features.
4. **Volume Scaling:** The determinant specifically functions as the "area/volume scale factor." If a transformation is defined by matrix $A$, the volume of a shape transformed by $A$ is $| \\det(A) |$ times its original volume.

## Fundamental Properties

The behavior of matrices is governed by strict algebraic laws.

### Matrix Addition and Scalar Multiplication
If $A$ and $B$ are matrices of the same dimensions, then $(A+B)_{ij} = A_{ij} + B_{ij}$. Scalar multiplication follows $c(A_{ij}) = (cA)_{ij}$.

### Matrix Multiplication
Multiplication is defined for matrices $A$ ($m \\times n$) and $B$ ($n \\times p$) resulting in $C$ ($m \\times p$), where $C_{ij} = \\sum_{k=1}^{n} A_{ik}B_{kj}$. It is crucial to note that matrix multiplication is generally not commutative ($AB \\neq BA$).

### Determinant Properties
Determinants follow several rigorous rules:
1. $\\det(AB) = \\det(A)\\det(B)$: The determinant of a product is the product of the determinants.
2. $\\det(A^T) = \\det(A)$: The transpose does not change the determinant.
3. $\\det(kA) = k^n \\det(A)$: If $A$ is an $n \\times n$ matrix, scaling it by $k$ scales the determinant by $k^n$.
4. $\\det(A) = 0$ if and only if $A$ is non-invertible (singular).

## Types & Variations

Matrices are classified based on their structure and properties:

1. **Diagonal Matrix:** A square matrix where all entries outside the main diagonal are zero. 
2. **Upper/Lower Triangular Matrix:** Matrices where all entries below or above the main diagonal are zero, respectively. The determinant of any triangular matrix is simply the product of its diagonal elements.
3. **Symmetric Matrix:** $A = A^T$. These appear frequently in optimization and quadratic forms.
4. **Orthogonal Matrix:** A square matrix where $A^T = A^{-1}$, implying $A^TA = I$. These matrices preserve lengths and angles during transformations.
5. **Invertible Matrix:** A square matrix for which there exists an $A^{-1}$ such that $AA^{-1} = I$. This exists if and only if $\\det(A) \\neq 0$.

## How to Solve

### Calculating the Determinant
For a $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\det(A) = ad - bc$.

For larger matrices, we use the Laplace expansion along any row or column. For an $n \\times n$ matrix, the determinant is:
$$ \\det(A) = \\sum_{j=1}^{n} a_{ij} C_{ij} $$
where $C_{ij}$ is the cofactor.

### Gaussian Elimination
To solve $Ax=b$, one usually performs row operations:
1. Swap two rows.
2. Multiply a row by a non-zero scalar.
3. Add a multiple of one row to another.

These operations are used to transform the matrix into Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). If the final matrix has a row of zeros in the coefficient part, the system is either inconsistent or has infinitely many solutions.

### Interactive Analysis of Linear Transformations
When applying a transformation matrix $A = \\begin{pmatrix} a & 0 \\\\ 0 & d \\end{pmatrix}$ to a coordinate $x$, we can observe how parameters $a$ and $d$ influence the scaling of the vector. While we usually represent functions as $f(x)$, consider the mapping $y = Ax$. The following interactive graph demonstrates how scaling factors influence a simple linear function representation if we consider a single row transformation $y = ax$.

\`\`\`interactivegraph
ax
params: a=1
range: a=-3:3
\`\`\`
In the graph above, the parameter $a$ represents the diagonal scaling of a transformation matrix. When $a > 1$, the function undergoes a vertical stretch; when $0 < a < 1$, it is compressed. When $a$ is negative, the function is reflected across the x-axis.

## Summary

Matrices and determinants represent the bedrock of linear algebra. A matrix provides the structure to store and manipulate multidimensional data and transformations, while the determinant provides the essential diagnostic tool to determine if that structure is collapsible (singular) or uniquely invertible.

Mastery of this field requires fluency in:
1. Matrix multiplication mechanics.
2. The recursive nature of calculating determinants via minors and cofactors.
3. Row reduction techniques for solving systems of linear equations.
4. Understanding the geometric interpretation of transformations, where the determinant scales space.

From the transformation matrices used in game engines to the covariance matrices used in deep learning, these objects remain the most versatile tools in the mathematical toolkit. The interplay between the discrete values within an array and the singular scalar value of the determinant captures the fundamental duality of linear algebra: the tension between the specific coordinates and the underlying abstract space they inhabit.`;export{e as default};