var e=`# Matrix Functions: Matrix Exponentials, Logarithms, and Sine

## Definition

In linear algebra, a matrix function $f(A)$ extends the concept of scalar functions to square matrices. For a square matrix $A \\in \\mathbb{C}^{n \\times n}$, a function $f$ is defined such that it maps the matrix to another matrix of the same dimension. The most rigorous definition relies on the power series expansion of analytic functions. If a scalar function $f(z)$ has a Taylor series expansion $f(z) = \\sum_{k=0}^{\\infty} c_k z^k$ with a radius of convergence $R$, then the matrix function $f(A)$ is defined as:

$$f(A) = \\sum_{k=0}^{\\infty} c_k A^k$$

Provided that the spectral radius $\\rho(A) < R$. For entire functions, such as the exponential, sine, and cosine functions, the radius of convergence is infinite, ensuring that the matrix series converges for any square matrix $A$. Beyond power series, matrix functions can be defined via the Jordan Canonical Form or the Cauchy Integral Formula, which allows for the definition of non-analytic functions (e.g., the matrix sign function or square root) by integrating over a contour in the complex plane that encloses the eigenvalues of $A$.

## Key Terminology

- **Spectrum:** The set of eigenvalues $\\lambda_1, \\dots, \\lambda_n$ of a matrix $A$.
- **Spectral Radius:** The maximum absolute value of the eigenvalues, denoted $\\rho(A) = \\max_i |\\lambda_i|$.
- **Matrix Exponential:** Defined as $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}$. It plays a central role in solving systems of linear differential equations.
- **Matrix Logarithm:** The inverse of the matrix exponential, defined such that $e^{\\log(A)} = A$. It is generally multi-valued unless restricted to a principal branch.
- **Matrix Sine:** Defined via the Taylor series $\\sin(A) = \\sum_{k=0}^{\\infty} (-1)^k \\frac{A^{2k+1}}{(2k+1)!}$.
- **Nilpotent Matrix:** A matrix $N$ such that $N^k = 0$ for some integer $k$. For such matrices, the infinite series for matrix functions terminate, making them polynomials.
- **Commutativity:** A critical property where $f(A)A = Af(A)$. Unlike scalars, general matrix multiplication is non-commutative; however, a matrix commutes with any function of itself.

## Purpose

The primary purpose of matrix functions is to extend the utility of classical analysis into the domain of multivariable linear systems. Matrix exponentials are indispensable in control theory and physics, specifically in solving the autonomous linear system $\\dot{x}(t) = Ax(t)$, where the solution is $x(t) = e^{At}x(0)$. This allows us to describe the evolution of dynamical systems, from quantum mechanical state vectors to population growth models.

Matrix logarithms allow for the interpolation of matrix powers. If one wishes to compute the fractional power $A^{1/2}$ (the square root of a matrix), one can use the relationship $A^{1/2} = e^{\\frac{1}{2}\\log(A)}$. This is essential in structural engineering and statistics, where "average" matrices or continuous transitions between states are required. Matrix trigonometric functions like $\\sin(A)$ and $\\cos(A)$ appear in the solution to second-order differential equations of the form $\\ddot{x}(t) + A^2x(t) = 0$, describing harmonic oscillations in multi-degree-of-freedom systems.

## Fundamental Properties

Matrix functions satisfy several properties that mirror their scalar counterparts, provided the matrices involved commute.

| Property | Description |
| :--- | :--- |
| **Consistency** | If $A = V \\Lambda V^{-1}$, then $f(A) = V f(\\Lambda) V^{-1}$, where $f(\\Lambda)$ is the diagonal matrix of eigenvalues $f(\\lambda_i)$. |
| **Identity** | For any matrix $A$, $f(A)A = Af(A)$. |
| **Exponential Property** | $e^{A+B} = e^A e^B$ if and only if $AB = BA$. |
| **Logarithmic Property** | $\\log(AB) = \\log(A) + \\log(B)$ if and only if $A$ and $B$ commute. |
| **Trigonometric Identity** | $\\sin^2(A) + \\cos^2(A) = I$. |
| **Differentiation** | $\\frac{d}{dt} e^{At} = Ae^{At} = e^{At}A$. |

It is vital to note that $e^{A+B} \\neq e^A e^B$ in the general case where $[A, B] \\neq 0$. This failure of the distributive property of the exponential over non-commuting matrices is a fundamental hurdle in Lie Algebra theory, often addressed by the Baker-Campbell-Hausdorff formula.

## Types & Variations

There are three primary analytical frameworks for constructing matrix functions:

1. **Taylor Series Approach:** This is most effective for entire functions like $e^A$, $\\sin(A)$, and $\\cos(A)$. Because the series converges everywhere, we can construct the function purely from powers of $A$.
2. **Spectral Decomposition:** If a matrix is diagonalizable such that $A = V \\Lambda V^{-1}$, then $f(A) = V f(\\text{diag}(\\lambda_1, \\dots, \\lambda_n)) V^{-1} = V \\text{diag}(f(\\lambda_1), \\dots, f(\\lambda_n)) V^{-1}$. This reduces the matrix problem to a collection of scalar problems.
3. **Jordan Canonical Form:** If $A$ is not diagonalizable, it can be written as $A = PJP^{-1}$, where $J$ is a block diagonal matrix of Jordan blocks. For a Jordan block $J_i = \\lambda_i I + N$, the function is defined as $f(J_i) = \\sum_{k=0}^{n-1} \\frac{f^{(k)}(\\lambda_i)}{k!} N^k$. This accounts for the derivatives of the scalar function at the eigenvalues.

The following interactive graph demonstrates how the scalar components of a matrix function evolve. Imagine a $2 \\times 2$ diagonal matrix $A = \\text{diag}(\\lambda_1, \\lambda_2)$. The matrix $\\sin(A)$ results in a diagonal matrix $\\text{diag}(\\sin(\\lambda_1), \\sin(\\lambda_2))$. By adjusting the parameters $a$ and $b$ below, we visualize the transformation of individual eigenvalue components.

\`\`\`interactivegraph
\\sin(ax + b)
params: a=1, b=0
range: a=-3:3, b=-3:3
\`\`\`

In the interactive plot above, $x$ represents the value of an eigenvalue. The output $y$ is the corresponding value of the function $f(\\lambda) = \\sin(a\\lambda + b)$. By varying the frequency $a$ and phase shift $b$, one can observe how the transformation sensitivity changes depending on the magnitude of the eigenvalue.

## How to Solve

Solving for $f(A)$ can be approached through several methodologies depending on the matrix properties:

### 1. Diagonalization
If $A$ has $n$ linearly independent eigenvectors, find the matrix of eigenvectors $V$ and the diagonal matrix of eigenvalues $\\Lambda$. Calculate $f(A) = V \\text{diag}(f(\\lambda_1), \\dots, f(\\lambda_n)) V^{-1}$. This is the standard procedure for most engineering applications.

### 2. Sylvester's Formula (Lagrange-Sylvester Interpolation)
For a matrix with distinct eigenvalues $\\lambda_1, \\dots, \\lambda_n$, the function $f(A)$ can be expressed as a polynomial $p(A)$ of degree $n-1$:
$$f(A) = \\sum_{i=1}^{n} f(\\lambda_i) L_i(A)$$
where $L_i(A) = \\prod_{j=1, j \\neq i}^{n} \\frac{A - \\lambda_j I}{\\lambda_i - \\lambda_j}$. This is useful because it bypasses the need for explicit calculation of eigenvectors if only the eigenvalues are known.

### 3. Numerical Approximations
For large, sparse matrices, direct series evaluation or diagonalization is computationally expensive. Algorithms such as the **Padé approximation** are preferred. The matrix exponential $e^A$ is often computed using the "scaling and squaring" method:
1. Scale the matrix: $A \\leftarrow A / 2^m$ such that $\\|A\\|$ is small.
2. Compute the Padé approximant $R(A) \\approx e^A$.
3. Square the result $m$ times: $e^A \\approx (R(A))^{2^m}$.

The graph below displays the behavior of $f(x) = \\sin(x)$ and $f(x) = x - x^3/6$, representing the convergence of the Taylor series for $\\sin(x)$ near the origin.

\`\`\`graph
\\sin(x)
x - x^3/6
\`\`\`

## Summary

Matrix functions provide the formal machinery required to extend scalar calculus into high-dimensional space. The matrix exponential, logarithm, and sine functions are not merely curiosities; they are foundational tools in solving linear differential equations, analyzing stability in dynamic systems, and mapping transitions in geometric transformations. 

We have explored that:
- Matrix functions are fundamentally defined by their power series or spectral decompositions.
- Commutativity is the defining constraint: identities that hold for scalars generally only hold for matrices if the inputs commute.
- Computationally, diagonalization remains the most intuitive method, but Padé approximations and Lagrange-Sylvester interpolation are required for complex or non-diagonalizable matrices.
- The spectral mapping theorem ensures that the eigenvalues of $f(A)$ are simply $f(\\lambda_i)$, providing a direct bridge between the matrix-level transformation and the underlying scalar behaviors.

Mastering these functions requires both an understanding of the algebraic structure of matrices and an appreciation for the convergence properties of analytical series. As systems grow in complexity, the ability to compute $f(A)$ efficiently remains a cornerstone of modern computational science.`;export{e as default};