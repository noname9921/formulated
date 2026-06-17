var e=`# Matrix Functions: Matrix Exponentials, Logarithms, and Sine

## Definition

Matrix functions extend the concept of scalar functions $f(z)$ to square matrices $A \\in \\mathbb{C}^{n \\times n}$. A matrix function $f(A)$ is formally defined through the power series expansion of the corresponding scalar function. Given a function $f(z)$ that is analytic in a region containing the spectrum (the set of eigenvalues) of $A$, the matrix function is defined as:

$$f(A) = \\sum_{k=0}^{\\infty} c_k A^k$$

where $c_k = \\frac{f^{(k)}(0)}{k!}$ are the coefficients of the Taylor series of $f(z)$. This definition requires that the series converges for the matrix $A$. Specifically, for the matrix exponential, logarithm, and sine, we utilize the following series:

1. **Matrix Exponential:** $e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!} = I + A + \\frac{1}{2!}A^2 + \\dots$
2. **Matrix Logarithm:** $\\log(A) = \\sum_{k=1}^{\\infty} (-1)^{k-1} \\frac{(A-I)^k}{k}$, valid when the eigenvalues of $A-I$ lie within the unit disk.
3. **Matrix Sine:** $\\sin(A) = \\sum_{k=0}^{\\infty} \\frac{(-1)^k A^{2k+1}}{(2k+1)!} = A - \\frac{A^3}{3!} + \\frac{A^5}{5!} - \\dots$

These definitions allow us to apply transcendental operations to linear transformations, providing a bridge between linear algebra and analysis.

## Key Terminology

* **Spectrum ($\\sigma(A)$):** The set of all eigenvalues $\\{\\lambda_1, \\lambda_2, \\dots, \\lambda_n\\}$ of the matrix $A$.
* **Spectral Mapping Theorem:** A fundamental result stating that if $\\lambda$ is an eigenvalue of $A$, then $f(\\lambda)$ is an eigenvalue of $f(A)$.
* **Jordan Canonical Form:** A decomposition $A = PJP^{-1}$, where $J$ is a block-diagonal matrix. This form is essential for evaluating matrix functions, as $f(A) = P f(J) P^{-1}$.
* **Analytic Function:** A function that is locally given by a convergent power series. Matrix functions are defined specifically for analytic functions.
* **Commutativity:** A property where $AB = BA$. Matrix functions $f(A)$ always commute with $A$ itself ($Af(A) = f(A)A$).
* **Principal Value:** For multi-valued functions like the matrix logarithm, the principal value refers to the result obtained by taking the principal branch of the scalar logarithm.

## Purpose

The primary purpose of matrix functions is to solve systems of linear differential equations and to provide analytical tools for studying dynamical systems.

Consider the linear system of differential equations $\\dot{x}(t) = Ax(t)$. The solution is given by $x(t) = e^{At}x(0)$. The matrix exponential $e^{At}$ acts as a "propagator" or "flow" operator, mapping the initial state of the system to its state at time $t$. Without the matrix exponential, finding closed-form solutions for coupled differential equations would be significantly more cumbersome.

The matrix logarithm serves as the inverse operation to the exponential. It is primarily used to find the "generator" of a transformation. For example, if we have a rotation matrix $R$ (where $R = e^A$), the matrix logarithm allows us to extract the skew-symmetric matrix $A$, which represents the infinitesimal rotation.

The matrix sine and cosine functions appear frequently in the study of second-order differential equations of the form $\\ddot{x}(t) + Ax(t) = 0$. These arise in mechanical vibrations, wave propagation, and quantum harmonic oscillators, where the matrix sine represents the transformation of initial displacements and velocities into future states.

## Fundamental Properties

Matrix functions exhibit properties that mirror their scalar counterparts but carry constraints related to matrix dimensions and non-commutativity.

| Property | Scalar Case | Matrix Case |
| :--- | :--- | :--- |
| **Summation** | $e^{a+b} = e^a e^b$ | $e^{A+B} = e^A e^B$ (only if $AB=BA$) |
| **Inverse** | $\\log(e^z) = z$ | $\\log(e^A) = A$ (principal branch) |
| **Identity** | $\\sin^2(z) + \\cos^2(z) = 1$ | $\\sin^2(A) + \\cos^2(A) = I$ |
| **Scaling** | $f(cz)$ | $f(cA)$ (defined by series) |
| **Diagonalization** | $f(\\lambda)$ | $P f(D) P^{-1}$ |

A critical constraint is the requirement that $AB = BA$ for the product property of matrix exponentials to hold. If two matrices do not commute, $e^{A+B} \\neq e^A e^B$ in the general case; instead, one must use the Baker-Campbell-Hausdorff formula. Furthermore, matrix functions are only well-defined if the function is holomorphic on the spectrum of $A$. If $A$ has a zero eigenvalue, the matrix logarithm is undefined, as the scalar $\\log(0)$ is singular.

## Types & Variations

There are several ways to classify or compute matrix functions based on the structure of the matrix:

1. **Diagonalizable Matrices:** If $A = PDP^{-1}$, then $f(A) = P f(D) P^{-1} = P \\text{diag}(f(\\lambda_1), \\dots, f(\\lambda_n)) P^{-1}$. This is the most computationally efficient method for evaluating matrix functions.
2. **Jordan Blocks:** For a Jordan block $J = \\lambda I + N$ (where $N$ is nilpotent), the function is evaluated as $f(J) = f(\\lambda)I + f'(\\lambda)N + \\frac{f''(\\lambda)}{2!}N^2 + \\dots + \\frac{f^{(k-1)}(\\lambda)}{(k-1)!}N^{k-1}$.
3. **Primary Functions:** These are functions that can be represented as polynomials in $A$ using the interpolation of the eigenvalues and their multiplicities (Sylvester's formula).
4. **Non-Primary Functions:** These arise for non-diagonalizable matrices where the function might depend on the structure of the Jordan blocks rather than just the spectrum.

## How to Solve

Evaluating matrix functions manually involves several established approaches. Below is the step-by-step methodology using the spectral decomposition method.

### Method: Diagonalization
1. **Find Eigenvalues:** Solve the characteristic equation $\\det(A - \\lambda I) = 0$ to obtain $\\{\\lambda_1, \\dots, \\lambda_n\\}$.
2. **Find Eigenvectors:** Determine the matrix $P$ whose columns are the eigenvectors of $A$.
3. **Diagonalize:** Compute the diagonal matrix $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$. Verify that $A = PDP^{-1}$.
4. **Apply Function:** Construct the diagonal matrix $F = f(D)$, where each entry is $f(\\lambda_i)$.
5. **Reconstruct:** Calculate $f(A) = P F P^{-1}$.

### Example: Matrix Exponential
To compute $e^A$ for $A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$:
1. **Eigenvalues:** $\\lambda^2 + 1 = 0 \\implies \\lambda = \\pm i$.
2. **Eigenvectors:** Solve $(A - iI)v = 0 \\implies \\begin{pmatrix} -i & 1 \\\\ -1 & -i \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = 0 \\implies y = ix$. Eigenvector $v_1 = [1, i]^T$. Similarly $v_2 = [1, -i]^T$.
3. **Matrix $P$:** $P = \\begin{pmatrix} 1 & 1 \\\\ i & -i \\end{pmatrix}$. $P^{-1} = \\frac{1}{-2i} \\begin{pmatrix} -i & -1 \\\\ -i & 1 \\end{pmatrix} = \\frac{1}{2} \\begin{pmatrix} 1 & -i \\\\ 1 & i \\end{pmatrix}$.
4. **Diagonal:** $e^D = \\begin{pmatrix} e^i & 0 \\\\ 0 & e^{-i} \\end{pmatrix} = \\begin{pmatrix} \\cos(1)+i\\sin(1) & 0 \\\\ 0 & \\cos(1)-i\\sin(1) \\end{pmatrix}$.
5. **Product:** $e^A = P e^D P^{-1}$. Multiplying these results in the rotation matrix $\\begin{pmatrix} \\cos(1) & \\sin(1) \\\\ -\\sin(1) & \\cos(1) \\end{pmatrix}$.

### Interactive Visualization
To visualize how the scalar function $f(x) = \\sin(x)$ behaves across a range of values, consider the following interactive plot. While this shows the scalar function, the matrix sine $\\sin(A)$ acts as the transformation of these spectral values applied to the basis vectors.

\`\`\`interactivegraph
\\sin(ax)
params: a=1
range: a=0:5
\`\`\`

The graph above illustrates $f(x) = \\sin(ax)$. In the context of matrix functions, if $A$ has an eigenvalue $\\lambda$, the corresponding eigenvalue of $\\sin(A)$ is $\\sin(\\lambda)$. Adjusting the parameter $a$ demonstrates how scaling the eigenvalues (as one might scale the matrix by a constant) alters the frequency of the resulting oscillation in the eigenspace.

## Summary

Matrix functions provide a rigorous mathematical framework for extending scalar calculus into higher-dimensional linear spaces. By utilizing power series definitions, the matrix exponential, logarithm, and sine are defined to satisfy the same fundamental identities as their scalar ancestors, provided the operator respects the constraints of the matrix spectrum. 

- **Matrix Exponential:** Essential for solving systems of linear differential equations and describing evolution operators.
- **Matrix Logarithm:** Used to invert the exponential map, typically to find the underlying generator (infinitesimal transformation) of a given transformation matrix.
- **Matrix Sine:** Fundamental in oscillatory systems and second-order dynamics.

The computation of these functions relies heavily on the spectral properties of the matrix. Through diagonalization or the use of the Jordan canonical form, complex transcendental matrix operations are reduced to simple scalar operations on eigenvalues. This transformation from the "matrix domain" to the "eigenvalue domain" remains the most powerful technique for understanding and solving problems involving matrix functions in engineering, physics, and control theory. Proper handling of commutativity and analytic branches is essential for ensuring the validity of these operations in practice.`;export{e as default};