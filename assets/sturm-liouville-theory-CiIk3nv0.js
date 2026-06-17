var e=`# Boundary Value Problems and Sturm-Liouville Theory

## Definition

A Boundary Value Problem (BVP) is a system of ordinary or partial differential equations with an additional set of constraints, known as boundary conditions, specified at the boundaries of the independent variable domain. Unlike Initial Value Problems (IVP), where all conditions are specified at a single point, BVPs require the solution to satisfy conditions at two or more spatial points.

Sturm-Liouville (S-L) theory focuses on a specific, highly important class of second-order linear differential equations of the form:

$$\\frac{d}{dx}\\left[p(x)\\frac{dy}{dx}\\right] + [q(x) + \\lambda w(x)]y = 0$$

where $p(x)$, $q(x)$, and $w(x)$ are continuous real-valued functions on an interval $[a,b]$, $p(x) > 0$, $w(x) > 0$ (the weight function), and $\\lambda$ is a parameter. This equation, subject to separated boundary conditions at $x=a$ and $x=b$, forms the foundation of Sturm-Liouville Theory. The primary objective is to determine the eigenvalues $\\lambda$ for which non-trivial solutions exist and to analyze the associated eigenfunctions $y(x)$.

## Key Terminology

| Term | Definition |
|---|---|
| Eigenvalue | The scalar $\\lambda$ for which the BVP possesses a non-trivial solution. |
| Eigenfunction | The non-trivial function $y(x)$ corresponding to a specific eigenvalue $\\lambda$. |
| Weight Function | The function $w(x)$ in the S-L operator, influencing the orthogonality condition. |
| Self-Adjoint | An operator $L$ such that $\\langle Lu, v \\rangle = \\langle u, Lv \\rangle$ for all functions in the domain. |
| Separated B.C. | Boundary conditions defined independently at each endpoint: $\\alpha_1 y(a) + \\alpha_2 y'(a) = 0$ and $\\beta_1 y(b) + \\beta_2 y'(b) = 0$. |
| Singularity | Points where $p(x)$ or $w(x)$ vanishes or becomes infinite, requiring special handling in S-L theory. |

## Purpose

The central purpose of Sturm-Liouville theory is to generalize the concept of the Fourier series. Just as the Fourier series allows us to represent functions as linear combinations of sines and cosines (which are eigenfunctions of a simple constant-coefficient BVP), S-L theory provides a framework for expressing arbitrary functions in terms of a complete set of orthogonal eigenfunctions derived from more complex differential operators.

This is indispensable in mathematical physics. Whenever we solve the Wave Equation, the Heat Equation, or Schrödinger's Equation using the method of separation of variables, we inevitably encounter an S-L problem. The eigenfunctions produced by these problems constitute an orthogonal basis in a Hilbert space $L^2([a,b], w(x)dx)$, allowing for the projection of physical fields onto manageable coordinates.

## Fundamental Properties

Sturm-Liouville operators possess remarkable properties that mirror the behavior of symmetric matrices in linear algebra. These properties are the result of the operator being self-adjoint under the inner product $\\langle u, v \\rangle = \\int_a^b u(x)v(x) w(x) dx$.

1. **Reality of Eigenvalues:** All eigenvalues $\\lambda_n$ are real.
2. **Orthogonality:** Eigenfunctions $y_n(x)$ and $y_m(x)$ corresponding to distinct eigenvalues $\\lambda_n \\neq \\lambda_m$ are orthogonal with respect to the weight function $w(x)$:
   $$\\int_a^b y_n(x) y_m(x) w(x) dx = 0$$
3. **Countable Spectrum:** The eigenvalues form an infinite sequence $\\lambda_1 < \\lambda_2 < \\lambda_3 < \\dots$ such that $\\lim_{n \\to \\infty} \\lambda_n = \\infty$.
4. **Completeness:** The set of eigenfunctions $\\{y_n(x)\\}_{n=1}^\\infty$ is complete in $L^2([a,b], w(x))$, meaning any square-integrable function $f(x)$ can be expanded as a generalized Fourier series:
   $$f(x) = \\sum_{n=1}^\\infty c_n y_n(x), \\quad c_n = \\frac{\\int_a^b f(x) y_n(x) w(x) dx}{\\int_a^b y_n^2(x) w(x) dx}$$
5. **Node Theorem:** The $n$-th eigenfunction $y_n(x)$ has exactly $n-1$ zeros in the open interval $(a,b)$.

The following interactive graph demonstrates the nodal structure of the eigenfunctions for the simplest S-L problem: the vibrating string $\\frac{d^2y}{dx^2} + \\lambda y = 0$ with $y(0)=y(L)=0$. Here, the parameter $n$ determines the frequency (eigenvalue) and the number of nodes.

\`\`\`interactivegraph
\\sin(n \\cdot \\pi \\cdot x)
params: n=1
range: n=1:5
\`\`\`

The graph above plots the first five eigenfunctions of the Dirichlet BVP. Note how increasing the parameter $n$ increases the oscillation frequency and adds exactly $n-1$ internal roots to the function.

## Types & Variations

S-L problems are classified by the nature of the coefficients and the domain:

1. **Regular Sturm-Liouville Problems:** Occur when the interval $[a,b]$ is finite, $p(x) > 0$, $w(x) > 0$, and all coefficients are continuous on $[a,b]$.
2. **Singular Sturm-Liouville Problems:** Occur if the interval is infinite (e.g., $(-\\infty, \\infty)$ or $[0, \\infty)$) or if $p(x)$ or $w(x)$ vanishes at an endpoint. Classic examples include:
   - **Legendre's Equation:** Arises in spherical coordinates. The singularities at $x=\\pm 1$ are managed by requiring the solution to be bounded.
   - **Bessel's Equation:** Arises in cylindrical coordinates. The singularity at $x=0$ is typical for problems involving radial symmetry.
3. **Periodic Sturm-Liouville Problems:** Defined on $[a,b]$ with periodic boundary conditions $y(a) = y(b)$ and $y'(a) = y'(b)$. These lead to complex eigenvalues and pairs of eigenfunctions.

## How to Solve

Solving a standard S-L problem generally follows a systematic procedure:

### Step 1: Standard Form Conversion
Ensure the equation is in the form $\\frac{d}{dx}[p(x)y'] + [q(x) + \\lambda w(x)]y = 0$. If given a general linear second-order equation $A(x)y'' + B(x)y' + C(x)y + \\lambda D(x)y = 0$, multiply by the integrating factor:
$$\\mu(x) = \\frac{1}{A(x)} \\exp\\left(\\int \\frac{B(x)}{A(x)} dx\\right)$$
This transforms the equation into the self-adjoint form where $p(x) = \\exp\\left(\\int \\frac{B(x)}{A(x)} dx\\right)$.

### Step 2: Solve the ODE
For a fixed $\\lambda$, solve the linear ODE. Because it is second-order, the general solution will take the form $y(x, \\lambda) = c_1 u_1(x, \\lambda) + c_2 u_2(x, \\lambda)$.

### Step 3: Apply Boundary Conditions
Apply the conditions at $x=a$ and $x=b$. This results in a system of linear equations for the constants $c_1$ and $c_2$:
$$\\begin{pmatrix} M_{11}(\\lambda) & M_{12}(\\lambda) \\\\ M_{21}(\\lambda) & M_{22}(\\lambda) \\end{pmatrix} \\begin{pmatrix} c_1 \\\\ c_2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$$
For a non-trivial solution ($c_1, c_2 \\neq 0$), the determinant of the matrix must be zero: $\\det(M(\\lambda)) = 0$.

### Step 4: Identify Eigenvalues and Eigenfunctions
The equation $\\det(M(\\lambda)) = 0$ is the characteristic equation for the eigenvalues $\\lambda_n$. Solving this yields the discrete spectrum. For each $\\lambda_n$, find the corresponding $y_n(x)$ by back-substituting into the matrix equation.

The static graph below plots the specific case of the BVP $y'' + \\lambda y = 0$ where $\\lambda$ values are determined by the boundary conditions.

\`\`\`graph
\\sin(\\pi * x)
\\sin(2 * \\pi * x)
\\sin(3 * \\pi * x)
\`\`\`

The graph above illustrates three distinct eigenfunctions for the BVP defined on $x \\in [0, 1]$. These curves represent the modes of a vibrating string fixed at both ends, where $\\lambda_n = (n\\pi)^2$.

## Summary

Sturm-Liouville Theory provides the mathematical machinery to decompose functions into basis sets tailored to the geometry and physics of a problem. By transforming differential operators into self-adjoint systems, we gain access to the properties of orthogonality and completeness. This theory is not merely a method for solving ODEs; it is the fundamental bridge between differential equations and Hilbert space analysis. Whether calculating the vibrational modes of a mechanical system or the energy levels of a quantum particle in a potential well, Sturm-Liouville theory defines the structured behavior of eigenvalues and eigenfunctions, ensuring that complex physical phenomena can be simplified into a summation of fundamental, non-interacting modes. Understanding these principles allows for the rigorous analysis of any linear BVP, establishing a clear path from equation formulation to the construction of complete solutions.`;export{e as default};