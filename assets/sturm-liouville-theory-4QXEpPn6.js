var e=`# Boundary Value Problems and Sturm-Liouville Theory

## Definition

A Boundary Value Problem (BVP) is a differential equation together with a set of additional constraints, called boundary conditions. Unlike Initial Value Problems (IVP), where all conditions are specified at a single point (usually at $t=0$), BVPs require that the solution satisfy conditions at two or more points in the domain of the independent variable.

Sturm-Liouville (S-L) theory focuses on a specific, highly important class of second-order linear differential equations known as the Sturm-Liouville equation, given by the form:
$$-\\frac{d}{dx}\\left[p(x)\\frac{dy}{dx}\\right]+q(x)y=\\lambda w(x)y$$
defined on an interval $x \\in [a,b]$, subject to boundary conditions of the form:
$$\\alpha_1 y(a) + \\alpha_2 y'(a) = 0$$
$$\\beta_1 y(b) + \\beta_2 y'(b) = 0$$
where $p(x), p'(x), q(x)$, and $w(x)$ are continuous functions, and $p(x) > 0$ and $w(x) > 0$ on $[a,b]$. The parameter $\\lambda$ is known as the eigenvalue, and the non-trivial solutions $y(x)$ associated with these eigenvalues are the eigenfunctions.

## Key Terminology

To navigate S-L theory, one must master several specific terms that define the behavior of these operators:

| Term | Definition |
| :--- | :--- |
| Eigenvalue | A scalar value $\\lambda$ for which the BVP has a non-trivial solution. |
| Eigenfunction | A non-zero function $y(x)$ satisfying the S-L equation for a specific $\\lambda$. |
| Orthogonality | Two functions $u(x)$ and $v(x)$ are orthogonal with respect to weight $w(x)$ if $\\int_a^b w(x)u(x)v(x)dx=0$. |
| Self-Adjoint | An operator $L$ such that $\\langle Lu,v \\rangle = \\langle u,Lv \\rangle$, ensuring real eigenvalues. |
| Weight Function | The strictly positive function $w(x)$ that appears on the right side of the S-L equation. |
| Regular S-L Problem | A problem where $p(x)>0$ and $w(x)>0$ throughout the closed interval $[a,b]$. |
| Singular S-L Problem | A problem where $p(x)$ or $w(x)$ vanish at the boundaries or the interval is infinite. |

## Purpose

The primary purpose of Sturm-Liouville theory is to provide a rigorous mathematical framework for the expansion of arbitrary functions in terms of infinite series of orthogonal functions. This is the foundation of the method of separation of variables used to solve partial differential equations (PDEs) such as the heat equation, the wave equation, and Laplace's equation.

By transforming a PDE into a series of ODEs via separation of variables, we often arrive at an S-L problem. The resulting eigenfunctions form a complete basis for the space of square-integrable functions, allowing us to represent complex signals or spatial distributions as sums of simpler oscillatory components. This theory bridges the gap between linear algebra (eigenvalues of matrices) and calculus (eigenfunctions of differential operators).

## Fundamental Properties

Sturm-Liouville theory possesses several elegant properties that make it incredibly powerful for physical modeling:

1. **Reality of Eigenvalues:** For a regular S-L problem, all eigenvalues $\\lambda$ are real. This is a direct consequence of the self-adjoint nature of the differential operator.
2. **Countable Infinity of Eigenvalues:** There exists an infinite sequence of eigenvalues $\\lambda_1 < \\lambda_2 < \\lambda_3 < \\dots$ such that $\\lambda_n \\to \\infty$ as $n \\to \\infty$.
3. **Orthogonality of Eigenfunctions:** Eigenfunctions $y_n(x)$ and $y_m(x)$ corresponding to distinct eigenvalues $\\lambda_n \\neq \\lambda_m$ are orthogonal with respect to the weight function $w(x)$:
$$\\int_a^b w(x)y_n(x)y_m(x)dx = 0, \\quad n \\neq m$$
4. **Completeness:** Any sufficiently smooth function $f(x)$ defined on $[a,b]$ can be expanded as a generalized Fourier series:
$$f(x) = \\sum_{n=1}^{\\infty} c_n y_n(x), \\quad c_n = \\frac{\\int_a^b w(x)f(x)y_n(x)dx}{\\int_a^b w(x)y_n^2(x)dx}$$
5. **Node Theorem:** The $n$-th eigenfunction $y_n(x)$ has exactly $n-1$ zeros in the open interval $(a,b)$.

The interactive graph below demonstrates the effect of the eigenvalue $\\lambda$ on the behavior of a simple harmonic oscillator, which serves as a prototype for S-L eigenfunctions.

\`\`\`interactivegraph
\\sin(k x)
params: k=1
range: k=1:10
\`\`\`

In this interactive graph, we observe the eigenfunction $y(x) = \\sin(kx)$ on the interval $[0, \\pi]$. The parameter $k$ represents the frequency related to the eigenvalue $\\lambda$. As $k$ increases, the number of nodes (zeros) within the interval increases, consistent with the S-L node theorem.

## Types & Variations

Sturm-Liouville problems are categorized based on the behavior of the coefficients $p(x), q(x), w(x)$ and the nature of the domain $[a,b]$.

### Regular Sturm-Liouville Problems
These are defined on a finite, closed interval $[a,b]$ where all coefficient functions are continuous, and the leading coefficient $p(x)$ and weight function $w(x)$ are strictly positive. The spectral properties described in the Fundamental Properties section hold strictly for these cases.

### Singular Sturm-Liouville Problems
These problems arise when:
1. The interval is infinite (e.g., $[0, \\infty)$).
2. The coefficient $p(x)$ vanishes at one or both endpoints (e.g., $x=0$ in polar coordinates).
3. The functions are not continuous at the boundaries.

Notable examples include the Legendre differential equation and the Bessel differential equation. Despite being "singular," they often still possess a discrete set of eigenvalues and orthogonal eigenfunctions, provided that we require the solutions to remain bounded.

### Periodic Sturm-Liouville Problems
When the boundary conditions are periodic, i.e., $y(a)=y(b)$ and $y'(a)=y'(b)$, the properties shift slightly. Instead of a single sequence, eigenvalues may be degenerate (having more than one associated eigenfunction), leading to more complex spectral structures often seen in quantum mechanics and crystallography.

## How to Solve

Solving a Sturm-Liouville problem generally follows a systematic process, particularly when utilizing the method of separation of variables.

### Step 1: Canonical Form Transformation
Many ODEs are not initially in the S-L form. To transform a general equation $A(x)y'' + B(x)y' + C(x)y + \\lambda D(x)y = 0$, multiply by the integrating factor:
$$\\mu(x) = \\frac{1}{A(x)} \\exp\\left(\\int \\frac{B(x)}{A(x)}dx\\right)$$
This results in the self-adjoint form where $p(x) = \\mu(x)A(x)$.

### Step 2: Determine Eigenvalues
For a given $\\lambda$, solve the ODE. Since it is a second-order linear equation, the solution will be $y(x) = c_1 y_1(x, \\lambda) + c_2 y_2(x, \\lambda)$. Apply the boundary conditions at $a$ and $b$ to obtain a system of two equations for $c_1$ and $c_2$. For a non-trivial solution ($c_1, c_2 \\neq 0$), the determinant of the coefficient matrix must be zero. This condition defines the eigenvalues $\\lambda_n$.

### Step 3: Find Eigenfunctions
Substitute the found eigenvalues $\\lambda_n$ back into the solution $y(x)$. The resulting $y_n(x)$ are the eigenfunctions.

### Step 4: Normalization and Series Expansion
Often, it is useful to normalize the eigenfunctions such that their norm is unity. Once normalized, any target function $f(x)$ can be expanded using the coefficients $c_n$ derived from the orthogonality property.

Consider the simple case of the vibrating string where $y'' + \\lambda y = 0$ with $y(0)=0$ and $y(L)=0$. The solutions are $y(x) = A\\sin(\\sqrt{\\lambda}x)$. Boundary conditions imply $\\sqrt{\\lambda}L = n\\pi$, hence $\\lambda_n = (n\\pi/L)^2$. The eigenfunctions are $y_n(x) = \\sin(n\\pi x/L)$.

The following static graph plots the first three eigenfunctions of this system, illustrating how higher modes oscillate more rapidly.

\`\`\`graph
\\sin(\\pi x)
\\sin(2\\pi x)
\\sin(3\\pi x)
\`\`\`

In the plot above, we see $y_1(x)$, $y_2(x)$, and $y_3(x)$ on the interval $[0, 1]$. Note that the first function has zero internal nodes, the second has one, and the third has two, confirming the node theorem.

## Summary

Sturm-Liouville theory provides the essential mathematical infrastructure for analyzing systems governed by linear differential equations. By defining the concepts of eigenvalues and eigenfunctions within the S-L operator, the theory allows mathematicians and physicists to decompose complex waveforms into orthogonal, fundamental modes. 

From the basic regular problem on a closed interval to singular problems that describe quantum harmonic oscillators and radial waves in spheres, S-L theory remains a cornerstone of analytical mechanics. Its power lies in its ability to guarantee the existence of a complete basis of eigenfunctions, ensuring that any physical state—be it the heat distribution in a rod or the vibration of a membrane—can be fully reconstructed through a series expansion. Through its rigorous treatment of boundary conditions and self-adjoint operators, it transforms daunting differential equations into solvable spectral problems, cementing its role as one of the most practical and elegant frameworks in applied mathematics.`;export{e as default};