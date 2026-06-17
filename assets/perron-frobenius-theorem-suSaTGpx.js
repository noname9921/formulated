var e=`# The Perron-Frobenius Theorem for Non-Negative Matrices

## Definition

The Perron-Frobenius Theorem is a fundamental result in linear algebra and matrix theory concerning the eigenvalues and eigenvectors of non-negative matrices. In its most basic form, it states that for a square matrix $A$ with non-negative entries ($a_{ij} \\geq 0$), there exists a real eigenvalue $r$ (the Perron root) such that $r \\geq |\\lambda|$ for any other eigenvalue $\\lambda$ of $A$. Furthermore, this eigenvalue $r$ is associated with an eigenvector whose components are all non-negative.

The theorem is typically divided into two parts: the Perron theorem (for strictly positive matrices, where $a_{ij} > 0$) and the Frobenius generalization (for non-negative, irreducible matrices). For a strictly positive matrix, the theorem guarantees that the spectral radius is a simple eigenvalue, and the corresponding eigenvector can be chosen to have strictly positive components. For irreducible non-negative matrices, the property holds, though the eigenvalue may be periodic (if the matrix is imprimitive) or possess specific symmetries related to the structure of the matrix.

## Key Terminology

To understand the theorem, one must define the following classes of matrices and associated properties:

| Term | Definition |
| :--- | :--- |
| Non-negative Matrix | A matrix $A \\in \\mathbb{R}^{n \\times n}$ where $a_{ij} \\geq 0$ for all $i, j$. |
| Positive Matrix | A matrix $A$ where $a_{ij} > 0$ for all $i, j$. |
| Reducible Matrix | A matrix $A$ that can be put into block upper-triangular form via a permutation. |
| Irreducible Matrix | A matrix $A$ is irreducible if for any $i, j$, there exists $k > 0$ such that $(A^k)_{ij} > 0$. |
| Spectral Radius | The value $\\rho(A) = \\max\\{|\\lambda| : \\lambda \\in \\sigma(A)\\}$. |
| Perron Root | The largest real eigenvalue $r$ of a non-negative matrix. |
| Primitivity | An irreducible matrix $A$ is primitive if there exists $k$ such that $A^k > 0$. |

The distinction between reducible and irreducible matrices is critical. An irreducible matrix corresponds to a strongly connected directed graph, where any node can reach any other node. If a matrix is reducible, it represents a graph with components that might have one-way paths to others but not vice versa.

## Purpose

The primary utility of the Perron-Frobenius Theorem lies in its ability to predict the long-term behavior of dynamic systems described by linear operators. In many physical, economic, and biological systems, we define states by non-negative vectors (e.g., populations, probabilities, wealth distributions). Since physical processes cannot map non-negative inputs to negative outputs, the system evolution is governed by non-negative matrices.

Key applications include:
1. **Markov Chains:** The theorem guarantees the existence of a stationary distribution for stochastic matrices, where the Perron root is exactly $1$.
2. **PageRank Algorithm:** Google’s original ranking algorithm relies on the fact that a modified transition matrix (the Google matrix) is primitive, ensuring a unique steady-state vector.
3. **Population Dynamics:** The Leslie matrix model, used in ecology, describes the growth of age-structured populations. The Perron root represents the asymptotic growth rate of the population.
4. **Economics:** The Leontief Input-Output model uses the theorem to ensure that an economy can produce a net output given a set of production requirements.

## Fundamental Properties

The power of the theorem resides in the specific constraints it places on the spectrum of $A$. Let $A \\geq 0$ be irreducible. The theorem asserts the following:

1. **Existence of the Perron Root:** The spectral radius $\\rho(A)$ is an eigenvalue of $A$.
2. **Positive Eigenvector:** There exists an eigenvector $v > 0$ such that $Av = \\rho(A)v$.
3. **Simplicity:** The eigenvalue $\\rho(A)$ is algebraically simple (its multiplicity as a root of the characteristic polynomial is 1).
4. **Bounds:** The Perron root is bounded by the minimum and maximum row sums of the matrix:
   $$\\min_i \\sum_j a_{ij} \\leq \\rho(A) \\leq \\max_i \\sum_j a_{ij}$$
5. **Collatz-Wielandt Formula:** The Perron root can be expressed as:
   $$\\rho(A) = \\sup_{x > 0} \\min_{i: x_i > 0} \\frac{(Ax)_i}{x_i}$$

For non-negative matrices, the interaction between the entries and the spectral properties is rigid. The graph below plots $f(x) = x^2$ and $g(x) = x$, demonstrating the growth potential of iterates $A^k x$. As $k \\to \\infty$, the direction of $A^k x$ aligns with the Perron eigenvector.

\`\`\`graph
x^2
x
\`\`\`

The graph shows $f(x) = x^2$ (a parabola) and $g(x) = x$ (a line). This represents the divergence between the growth of a dominant eigenvalue ($\\lambda > 1$) and a stable eigenvalue ($\\lambda = 1$). In the context of the theorem, the iteration $A^k v$ will be dominated by the term $r^k$ where $r$ is the Perron root.

## Types & Variations

The behavior of a non-negative matrix depends heavily on its structure. We categorize matrices into three main tiers:

### 1. The Perron Theorem (Strictly Positive)
If $A > 0$, the spectral radius $\\rho(A)$ is the unique eigenvalue of maximal modulus, it is simple, and the associated eigenvector is strictly positive. Furthermore, there is no other eigenvalue on the circle $|z| = \\rho(A)$.

### 2. Irreducible Non-Negative Matrices
If $A$ is irreducible, the Perron root $r$ exists and is simple. However, there may be other eigenvalues on the circle of radius $r$. If there are $h$ eigenvalues on this circle, they are of the form $r \\cdot e^{2\\pi i m / h}$ for $m = 0, \\dots, h-1$. This $h$ is called the index of imprimitivity.

### 3. Primitive Matrices
A matrix $A$ is primitive if $A^h > 0$ for some $h > 0$. This is equivalent to saying $A$ is irreducible and $h=1$ (the only eigenvalue on the spectral circle is $r$). For primitive matrices, the power $A^k$ converges to a rank-one matrix proportional to $v w^T$, where $v$ is the right eigenvector and $w$ is the left eigenvector.

The following table summarizes the behavior based on the structural properties:

| Property | Eigenvalue at $\\rho(A)$ | Other eigenvalues at $|\\lambda| = \\rho(A)$ |
| :--- | :--- | :--- |
| Positive ($A>0$) | Simple | None |
| Primitive | Simple | None |
| Irreducible | Simple | $h-1$ additional |
| Reducible | Depends on blocks | Depends on blocks |

## How to Solve

Determining the Perron root and the associated eigenvector is a problem of finding the dominant solution to $Av = rv$. In practical applications where $n$ is very large (e.g., web graphs), we utilize the **Power Iteration Method**.

Given an initial vector $x^{(0)}$ (usually a uniform vector), we iterate:
$$x^{(k+1)} = \\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$$
This sequence converges to the Perron eigenvector, provided the matrix is primitive. The rate of convergence is determined by the ratio of the two largest eigenvalues: $|\\lambda_2| / \\rho(A)$.

For small matrices, one can use the Collatz-Wielandt bounds. Consider a matrix:
$$A = \\begin{pmatrix} 0 & 1 \\\\ 2 & 1 \\end{pmatrix}$$
The row sums are $1$ and $3$. By the property $\\min(row\\_sums) \\leq \\rho(A) \\leq \\max(row\\_sums)$, we know $1 \\leq \\rho(A) \\leq 3$.
The characteristic equation is $\\det(A - \\lambda I) = \\det\\begin{pmatrix} -\\lambda & 1 \\\\ 2 & 1-\\lambda \\end{pmatrix} = \\lambda^2 - \\lambda - 2 = 0$.
The roots are $(\\lambda-2)(\\lambda+1) = 0$, giving $\\lambda = 2, -1$. Thus $\\rho(A) = 2$.

When dealing with parameter-dependent matrices, such as those found in linear growth models, we can observe how the Perron root shifts. The interactive graph below allows the user to explore how a scaling parameter $a$ affects the growth function $f(x) = a x^2$.

\`\`\`interactivegraph
a * x^2
params: a=1
range: a=0:2
\`\`\`

In the interactive graph above, the reader can observe that for $x > 0$, the value of the function $f(x)$ scales linearly with $a$. This mirrors how the Perron root $r$ of a matrix scales when the matrix is multiplied by a scalar $aA$. Since the Perron root is the dominant scaling factor of the matrix, the spectral radius of $aA$ is simply $a \\cdot \\rho(A)$.

## Summary

The Perron-Frobenius Theorem provides the mathematical foundation for analyzing systems governed by non-negative linear operators. By asserting the existence of a dominant real eigenvalue and a corresponding non-negative eigenvector, it transforms complex matrix algebra into a predictable framework. Whether in the convergence of Markov processes, the ranking of web pages, or the modeling of biological populations, the theorem ensures that large, complex systems eventually settle into a steady state defined by the Perron root and its associated vector. The distinction between irreducible and primitive matrices remains the most vital consideration for practitioners, as it determines whether a system converges to a single state or enters a periodic orbit. The Power Iteration method serves as the standard computational bridge between this theoretical existence proof and the numerical requirements of modern data science.`;export{e as default};