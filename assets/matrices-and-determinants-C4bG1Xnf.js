var e=`# Algebra: Matrices & Determinants\r
\r
---\r
\r
## 1. Definition\r
\r
In linear algebra, a **matrix** is a structured, rectangular array of numbers, symbols, or expressions arranged systematically in horizontal rows and vertical columns. Matrices serve as a mathematical framework to store data, represent linear transformations, and track multi-dimensional operations simultaneously.\r
\r
Formally, a matrix $A$ with $m$ rows and $n$ columns is called an $m \\times n$ matrix (read as "$m$ by $n$"), where the numbers $m$ and $n$ designate its structural dimensions. An individual value within the matrix is called an element or entry. A generic matrix $A$ is represented mathematically as:\r
\r
$$\r
A = \\begin{pmatrix}\r
a_{11} & a_{12} & \\dots & a_{1n} \\\\\r
a_{21} & a_{22} & \\dots & a_{2n} \\\\\r
\\vdots & \\vdots & \\ddots & \\vdots \\\\\r
a_{m1} & a_{m2} & \\dots & a_{mn}\r
\\end{pmatrix}\r
$$\r
\r
Where:\r
\r
- $a_{ij}$ represents the specific entry located at the intersection of the $i$-th row and $j$-th column.\r
- The index $i$ ranges from $1$ to $m$ ($\\text{row index}$).\r
- The index $j$ ranges from $1$ to $n$ ($\\text{column index}$).\r
\r
A **determinant** is a unique, scalar value that can be computed exclusively from a **square matrix** (a matrix where the number of rows equals the number of columns, $m = n$). The determinant encodes critical structural information about the matrix, such as whether it can be inverted and how it scales geometric space. For a square matrix $A$, its determinant is denoted as $\\det(A)$ or $|A|$.\r
\r
For the simplest non-trivial square matrix, a $2 \\times 2$ grid:\r
\r
$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\implies \\det(A) = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze matrix structures and operations effectively, the following precise vocabulary definitions are required:\r
\r
- **Dimensions / Order:** The size of a matrix, specified by its number of rows ($m$) and columns ($n$), written as $m \\times n$.\r
- **Square Matrix:** A matrix configuration where the number of rows is exactly equal to the number of columns ($m = n$).\r
- **Main Diagonal:** The collection of entries $a_{ij}$ in a square matrix where the row index equals the column index ($i = j$). These run from the top-left corner down to the bottom-right corner.\r
- **Identity Matrix ($I$):** A special square matrix where all entries along the main diagonal are equal to $1$, and all other remaining entries are equal to $0$. It serves as the multiplicative identity in matrix algebra.\r
- **Transpose ($A^T$):** An operation where the rows and columns of a matrix are swapped. The entry at position $(i,j)$ moves to position $(j,i)$.\r
- **Inverse Matrix ($A^{-1}$):** A unique square matrix that, when multiplied by the original matrix $A$, yields the Identity matrix: $A \\cdot A^{-1} = A^{-1} \\cdot A = I$.\r
- **Singular Matrix:** A square matrix whose determinant is exactly equal to zero ($\\det(A) = 0$). Singular matrices lack an inverse and cannot be inverted.\r
- **Non-Singular Matrix:** A square matrix whose determinant is non-zero ($\\det(A) \\neq 0$), which guarantees that a unique inverse matrix exists.\r
- **Minor ($M_{ij}$):** The determinant of the smaller square sub-matrix left behind after deleting the $i$-th row and $j$-th column from a larger matrix.\r
- **Cofactor ($C_{ij}$):** A signed minor, calculated by applying an alternating directional sign grid over the minor value: $C_{ij} = (-1)^{i+j} M_{ij}$.\r
\r
---\r
\r
## 3. Purpose\r
\r
Matrices and determinants provide a comprehensive framework for handling multi-variable data arrangements and structural configurations across various branches of science and advanced mathematics.\r
\r
### Solving Systems of Linear Equations\r
\r
One of the primary historical drivers behind matrix algebra is the simplification of extensive systems of linear equations. A complex system of equations involving dozens of interdependent variables can be unified into a single structural statement:\r
\r
$$A\\mathbf{x} = \\mathbf{b}$$\r
\r
Where $A$ represents the coefficient grid, $\\mathbf{x}$ is the column vector of unknown variables, and $\\mathbf{b}$ is the solution constraint vector. This unified notation allows computational systems to evaluate large datasets rapidly using linear transformations.\r
\r
### Geometric Transformations\r
\r
In modern computational graphics, game physics engines, and robotics, matrices act as operators that transform space. Multiplying a vector (representing a coordinate in 2D or 3D space) by a specialized transformation matrix allows developers to perform spatial operations seamlessly:\r
\r
- **Rotation:** Moving objects smoothly around an axis angle.\r
- **Scaling:** Expanding or compressing dimensions along target planes.\r
- **Translation:** Shifting positional alignments across coordinate frameworks.\r
\r
### Advanced Computational Engineering\r
\r
- **Data Science & Machine Learning:** Modern artificial intelligence architectures process operational layers using matrices. High-dimensional vector maps, image recognition filters, and large language model weights are stored, scaled, and adjusted via matrix multiplications.\r
- **Quantum Computing:** Quantum state spaces are represented via complex vectors, and logical gate modifications are mapped out as unitary matrix transformations.\r
- **Network Analysis:** In graph theory, connections between nodes (such as routing maps or social media friend networks) are recorded using adjacency matrices to find shortest structural paths.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Matrix operations obey a distinct set of algebraic laws that differ from standard real-number arithmetic.\r
\r
### Arithmetic Constraints & Laws\r
\r
Let $A$, $B$, and $C$ be matrices with compatible operational shapes, and let $c$ be a scalar value.\r
\r
#### Addition and Subtraction\r
\r
Matrices can only be added or subtracted if they share the exact same dimensions ($m \\times n$). The operations are performed element-wise.\r
\r
- **Commutative Law:** $A + B = B + A$\r
- **Associative Law:** $(A + B) + C = A + (B + C)$\r
\r
#### Scalar Multiplication\r
\r
Multiplying a matrix by a real scalar $c$ scales every individual entry within that matrix by that value: $c \\cdot [a_{ij}] = [c \\cdot a_{ij}]$.\r
\r
#### Matrix Multiplication\r
\r
Multiplication between two separate matrices $A$ and $B$ is only possible if they are **conformable**. This requires the number of columns in the first matrix ($A$) to be exactly equal to the number of rows in the second matrix ($B$). If matrix $A$ has size $m \\times n$ and matrix $B$ has size $n \\times p$, the resulting matrix $C = AB$ will have size $m \\times p$.\r
\r
The individual entry $c_{ij}$ in the product matrix is computed by taking the dot product of the $i$-th row of $A$ and the $j$-th column of $B$:\r
\r
$$c_{ij} = \\sum_{k=1}^{n} a_{ik}b_{kj}$$\r
\r
- **NON-COMMUTATIVE WARNING:** In matrix arithmetic, multiplication order matters. In general:\r
  $$AB \\neq BA$$\r
- **Associative Property:** $A(BC) = (AB)C$\r
- **Distributive Property:** $A(B + C) = AB + AC$\r
\r
### Properties of Determinants\r
\r
The scalar determinant displays unique mathematical interactions with other matrix operations:\r
\r
- **Identity Equality:** $\\det(I) = 1$\r
- **Transpose Equality:** $\\det(A^T) = \\det(A)$\r
- **Multiplicative Distribution:** $\\det(AB) = \\det(A) \\cdot \\det(B)$\r
- **Inverse Scaling Property:** $\\det(A^{-1}) = \\frac{1}{\\det(A)}$\r
- **Scalar Multiplication Scaling:** If $A$ is an $n \\times n$ square matrix and $c$ is a constant scalar value, then:\r
  $$\\det(c \\cdot A) = c^n \\cdot \\det(A)$$\r
\r
### Core Operational Identities\r
\r
| Operation Type           | Matrix Representation | Transpose Rule            | Inverse Rule                |\r
| :----------------------- | :-------------------- | :------------------------ | :-------------------------- |\r
| **Summation**            | $A + B$               | $(A + B)^T = A^T + B^T$   | _(No direct rule)_          |\r
| **Product Combination**  | $AB$                  | $(AB)^T = B^T A^T$        | $(AB)^{-1} = B^{-1} A^{-1}$ |\r
| **Inverse Relationship** | $A^{-1}$              | $(A^{-1})^T = (A^T)^{-1}$ | $(A^{-1})^{-1} = A$         |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Matrices are classified into specific functional categories based on structural symmetries, entry values, or operational behaviors.\r
\r
### 1. Structural Diagonal Variations\r
\r
- **Diagonal Matrix:** A square matrix where all entries outside the main diagonal are equal to $0$.\r
- **Upper Triangular Matrix:** A matrix where all entries located directly _below_ the main diagonal are equal to $0$.\r
- **Lower Triangular Matrix:** A matrix where all entries located directly _above_ the main diagonal are equal to $0$.\r
\r
> **Determinant Shortcut Rule:** For any diagonal, upper triangular, or lower triangular matrix, the determinant can be calculated by multiplying the entries along the main diagonal:\r
> $$\\det(A) = a_{11} \\cdot a_{22} \\dots a_{nn}$$\r
\r
### 2. Symmetric Variations\r
\r
- **Symmetric Matrix:** A matrix that is completely identical to its own transpose:\r
  $$A = A^T \\iff a_{ij} = a_{ji}$$\r
- **Skew-Symmetric Matrix:** A matrix where swapping rows and columns yields a negated version of the original matrix:\r
  $$A^T = -A \\iff a_{ij} = -a_{ji}$$\r
  _(Note: This requires all entries along the main diagonal to be exactly zero)._\r
\r
### 3. Special Operational Matrices\r
\r
- **Orthogonal Matrix:** A square matrix whose transpose is equal to its inverse, meaning $A^T A = I$. The determinant of an orthogonal matrix is always $\\pm 1$.\r
- **Idempotent Matrix:** A matrix that yields its original form when multiplied by itself: $A^2 = A$.\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for computing determinants of higher-order systems, calculating inverse configurations, and solving linear networks using **Cramer's Rule**.\r
\r
### Strategy A: Evaluating a $3 \\times 3$ Determinant via Cofactor Expansion\r
\r
To evaluate the determinant of a matrix larger than a $2 \\times 2$, we break it down into smaller components using **Laplace's Cofactor Expansion** along any target row or column.\r
\r
**Example Question:** Calculate the determinant of the following $3 \\times 3$ matrix $A$:\r
\r
$$\r
A = \\begin{pmatrix}\r
1 & 2 & 3 \\\\\r
0 & -1 & 4 \\\\\r
2 & 1 & 5\r
\\end{pmatrix}\r
$$\r
\r
1. **Select an expansion line:** For efficiency, choose a row or column containing zeros. We will expand along the first column ($\\text{Column 1}$: entries $1, 0, 2$).\r
2. **Recall the checkerboard sign matrix pattern for signs:**\r
   $$\\begin{pmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{pmatrix}$$\r
3. **Set up the expansion equation along Column 1:**\r
   $$\\det(A) = +1 \\cdot \\begin{vmatrix} -1 & 4 \\\\ 1 & 5 \\end{vmatrix} - 0 \\cdot \\begin{vmatrix} 2 & 3 \\\\ 1 & 5 \\end{vmatrix} + 2 \\cdot \\begin{vmatrix} 2 & 3 \\\\ -1 & 4 \\end{vmatrix}$$\r
4. **Evaluate the $2 \\times 2$ minor determinants using $ad - bc$:**\r
   - **Minor 1:** $\\begin{vmatrix} -1 & 4 \\\\ 1 & 5 \\end{vmatrix} = (-1)(5) - (4)(1) = -5 - 4 = -9$\r
   - **Minor 2:** Multiplied by $0$, so it evaluates to $0$.\r
   - **Minor 3:** $\\begin{vmatrix} 2 & 3 \\\\ -1 & 4 \\end{vmatrix} = (2)(4) - (3)(-1) = 8 + 3 = 11$\r
5. **Combine the weighted results:**\r
   $$\\det(A) = 1(-9) - 0 + 2(11)$$\r
   $$\\det(A) = -9 + 22 = 13$$\r
\r
The scalar determinant of matrix $A$ is exactly $13$.\r
\r
### Strategy B: Finding the Inverse of a $2 \\times 2$ Matrix\r
\r
For a $2 \\times 2$ matrix, the inverse matrix can be computed directly using a formula based on the determinant and a structural rearrangement.\r
\r
**Example Question:** Find the inverse of matrix $B = \\begin{pmatrix} 4 & 7 \\\\ 1 & 2 \\end{pmatrix}$.\r
\r
1. **Calculate the determinant of the matrix:**\r
   $$\\det(B) = (4)(2) - (7)(1) = 8 - 7 = 1$$\r
   Since $\\det(B) = 1 \\neq 0$, the matrix is non-singular and its inverse exists.\r
2. **Apply the standard inverse formula for a $2 \\times 2$ matrix:**\r
   $$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$\r
3. **Rearrange the internal matrix values:** Swap the main diagonal elements ($4$ and $2$), and negate the off-diagonal elements ($7$ and $1$).\r
   $$B^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -7 \\\\ -1 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & -7 \\\\ -1 & 4 \\end{pmatrix}$$\r
4. **Verify the solution:** Multiply $B$ by $B^{-1}$ to confirm it yields the Identity matrix.\r
   $$B \\cdot B^{-1} = \\begin{pmatrix} 4 & 7 \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} 2 & -7 \\\\ -1 & 4 \\end{pmatrix} = \\begin{pmatrix} (8-7) & (-28+28) \\\\ (2-2) & (-7+8) \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$\r
\r
The inverse calculation is correct.\r
\r
### Strategy C: Solving a Linear System via Cramer's Rule\r
\r
**Cramer's Rule** is an algebraic method that uses determinants to solve a system of linear equations with a unique solution.\r
\r
**Example Question:** Solve the following system of linear equations for $x$ and $y$:\r
\r
$$\r
\\begin{cases}\r
2x + 3y = 8 \\\\\r
1x + 4y = 9\r
\\end{cases}\r
$$\r
\r
1. **Construct the primary coefficient matrix ($D$) and evaluate its determinant:**\r
   $$D = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} \\implies \\det(D) = (2)(4) - (3)(1) = 8 - 3 = 5$$\r
2. **Construct the variable matrix for $x$ ($D_x$):** Replace the first column (the coefficients of $x$) with the constant solutions vector values $\\begin{pmatrix} 8 \\\\ 9 \\end{pmatrix}$.\r
   $$D_x = \\begin{pmatrix} 8 & 3 \\\\ 9 & 4 \\end{pmatrix} \\implies \\det(D_x) = (8)(4) - (3)(9) = 32 - 27 = 5$$\r
3. **Construct the variable matrix for $y$ ($D_y$):** Replace the second column (the coefficients of $y$) with the constant solutions vector values $\\begin{pmatrix} 8 \\\\ 9 \\end{pmatrix}$.\r
   $$D_y = \\begin{pmatrix} 2 & 8 \\\\ 1 & 9 \\end{pmatrix} \\implies \\det(D_y) = (2)(9) - (8)(1) = 18 - 8 = 10$$\r
4. **Divide the component determinants to find the variable values:**\r
   $$x = \\frac{\\det(D_x)}{\\det(D)} = \\frac{5}{5} = 1$$\r
   $$y = \\frac{\\det(D_y)}{\\det(D)} = \\frac{10}{5} = 2$$\r
\r
The unique solution to the linear system is $x = 1$ and $y = 2$.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Structured Arrays:** A matrix is a rectangular array of values organized into rows and columns, used to handle multi-variable data arrangements and linear transformations.\r
- **The Scalar Key:** The determinant is a scalar value computed from a square matrix that indicates whether the matrix can be inverted ($\\det(A) \\neq 0$) and tracks how it scales geometric space.\r
- **Order Matters:** Matrix addition and subtraction are performed element-wise and are commutative. Matrix multiplication, however, is highly sensitive to ordering ($AB \\neq BA$) and requires consistent dimension matching across terms.\r
- **System Resolution:** Complex multi-variable networks can be evaluated systematically using determinants and inverse operations via standard algebraic methods like Cramer's Rule or Gaussian elimination.\r
`;export{e as default};