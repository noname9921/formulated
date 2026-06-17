var e=`# Regular Singular Points and the Method of Frobenius

## Definition

In the study of second-order linear homogeneous differential equations of the form:
$$P(x)y''+Q(x)y'+R(x)y=0$$
we often encounter points $x=x_0$ where the functions $p(x)=\\frac{Q(x)}{P(x)}$ and $q(x)=\\frac{R(x)}{P(x)}$ are not analytic. If these functions are not analytic at $x_0$, the point $x_0$ is called a singular point. A singular point $x=x_0$ is classified as a regular singular point if the functions $(x-x_0)p(x)$ and $(x-x_0)^2q(x)$ remain analytic at $x_0$. 

If a point is not regular, it is termed an irregular singular point. The Method of Frobenius is a powerful mathematical technique used to find infinite series solutions for linear differential equations around these regular singular points. Specifically, it seeks a solution of the form:
$$y(x)=\\sum_{n=0}^{\\infty}a_n(x-x_0)^{n+r}$$
where $r$ is a constant called the indicial exponent, which may be real or complex, and $a_0 \\neq 0$.

## Key Terminology

To master the Method of Frobenius, one must be familiar with the following technical terms:

| Term | Definition |
|---|---|
| Ordinary Point | A point $x_0$ where $p(x)$ and $q(x)$ are both analytic. |
| Singular Point | A point where the standard existence theorem for power series fails. |
| Regular Singular Point | A singularity where the growth of coefficients is controlled such that a series solution exists. |
| Indicial Equation | A quadratic equation in $r$ derived from the lowest power of $(x-x_0)$ in the Frobenius series. |
| Frobenius Series | A generalization of the power series allowing for non-integer exponents $r$. |
| Wronskian | The determinant used to check for the linear independence of the two solutions. |

## Purpose

The primary purpose of identifying regular singular points and employing the Method of Frobenius is to solve differential equations that possess physical relevance in science and engineering but cannot be solved by elementary functions or standard Taylor series methods. Many equations arising in mathematical physics, such as Bessel's equation, Legendre's equation, and Hermite's equation, contain regular singular points.

By transforming a differential equation into an indicial equation and a recurrence relation, the Method of Frobenius allows us to extract the behavior of solutions near the singularity. This is critical for studying phenomena such as wave propagation in cylindrical coordinates or quantum mechanical potential wells, where the solution is required to remain finite at the origin.

## Fundamental Properties

The behavior of solutions near a regular singular point $x_0$ is governed by the roots of the indicial equation, denoted as $r_1$ and $r_2$. Assuming $r_1 \\geq r_2$ (real parts), there are three distinct cases for the structure of the two linearly independent solutions, $y_1(x)$ and $y_2(x)$:

1. **Distinct roots not differing by an integer ($r_1 - r_2 \\notin \\mathbb{Z}$):** In this case, two independent Frobenius series solutions exist, both of the form $\\sum a_n(x-x_0)^{n+r}$.

2. **Equal roots ($r_1 = r_2 = r$):** The first solution $y_1(x)$ is a standard Frobenius series. The second solution $y_2(x)$ necessarily involves a logarithmic term: $y_2(x) = y_1(x) \\ln(x-x_0) + \\sum_{n=1}^{\\infty} b_n(x-x_0)^{n+r}$.

3. **Roots differing by a positive integer ($r_1 - r_2 \\in \\mathbb{Z}^+$):** The first solution $y_1(x)$ is a standard Frobenius series. The second solution may involve a logarithmic term, with the coefficient of $\\ln(x-x_0)$ possibly being zero.

These properties ensure that we can always construct a basis for the solution space in the neighborhood of a regular singularity, even when the functions themselves blow up at the point.

## Types & Variations

Variations of the method depend on the nature of the singularity at $x \\to \\infty$. A point at infinity is regular if the substitution $z=1/x$ results in a regular singular point at $z=0$. This is tested by examining the behavior of:
$$f(z) = \\frac{1}{z^2}p\\left(\\frac{1}{z}\\right) \\quad \\text{and} \\quad g(z) = \\frac{1}{z^4}q\\left(\\frac{1}{z}\\right)$$
The Method of Frobenius can be extended to systems of linear differential equations, where the coefficients become matrices. In this scenario, the indicial equation is replaced by an indicial polynomial derived from the eigenvalues of the residue matrix of the system.

The following graph illustrates how the indicial exponent $r$ affects the local behavior of the function $f(x) = x^r$.

\`\`\`interactivegraph
x^r
params: r=0.5
range: r=-2:2
\`\`\`

The graph plots $f(x) = x^r$ for $x > 0$. As $r$ changes via the slider, observe the behavior near $x=0$. When $r > 0$, the function approaches $0$ as $x \\to 0$. When $r = 0$, the function is constant at $1$. When $r < 0$, the function exhibits singular behavior (vertical asymptote) at $x=0$, which is typical of the second solution obtained via the Method of Frobenius.

## How to Solve

To solve $P(x)y''+Q(x)y'+R(x)y=0$ about $x_0=0$ using the Method of Frobenius, follow these systematic steps:

**1. Verification of Regularity:**
Rewrite the equation as $y'' + p(x)y' + q(x)y = 0$. Verify that $x p(x)$ and $x^2 q(x)$ have convergent Taylor series at $x=0$.

**2. The Frobenius Ansatz:**
Assume $y(x) = \\sum_{n=0}^{\\infty} a_n x^{n+r}$. Calculate the derivatives:
$y'(x) = \\sum_{n=0}^{\\infty} (n+r) a_n x^{n+r-1}$
$y''(x) = \\sum_{n=0}^{\\infty} (n+r)(n+r-1) a_n x^{n+r-2}$

**3. Substitution and Alignment:**
Substitute $y, y',$ and $y''$ into the original differential equation. Collect terms with like powers of $x$. The lowest power of $x$ (usually $x^r$ or $x^{r-1}$) will produce the indicial equation by setting its coefficient to zero.

**4. Solving for $r$:**
Solve the indicial equation for the roots $r_1$ and $r_2$.

**5. Deriving the Recurrence Relation:**
Set the coefficients of higher powers of $x$ to zero to obtain a recurrence relation for $a_n$ in terms of $a_0, a_1, \\dots, a_{n-1}$. This allows for the iterative determination of coefficients.

**6. Construction of Solutions:**
Construct the general solution $y(x) = C_1 y_1(x) + C_2 y_2(x)$. If the roots differ by an integer, ensure the second solution is derived using the reduction of order method or the derivative method with respect to the parameter $r$.

## Summary

The Method of Frobenius represents an elegant extension of the power series method, providing the necessary mathematical machinery to navigate the complexities of singular points in linear differential equations. By classifying singular points as regular or irregular, mathematicians can determine the existence of solutions expressed as generalized power series. The indicial equation dictates the fundamental structure of the solution space, particularly the appearance of logarithmic terms when roots of the indicial equation coincide or differ by an integer.

This technique is not merely a theoretical exercise; it is the cornerstone for solving the equations of mathematical physics that describe the behavior of waves, heat, and potentials in geometry involving singularities, such as poles or edges. Understanding the interplay between the indicial exponents and the recurrence relations provides deep insight into how physical systems behave as they approach singular limits, reinforcing the Method of Frobenius as an essential tool in the technical repertoire of any analyst.`;export{e as default};