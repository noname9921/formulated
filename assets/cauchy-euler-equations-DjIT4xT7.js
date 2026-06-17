var e=`# Cauchy-Euler Equations

## Definition

A Cauchy-Euler equation, sometimes referred to simply as an equidimensional equation, is a specific type of linear homogeneous ordinary differential equation (ODE) with variable coefficients. The defining characteristic of these equations is that the power of the independent variable $x$ in each term matches the order of the derivative applied to the dependent variable $y(x)$.

The general form of an $n$-th order Cauchy-Euler equation is given by:
$$a_nx^n\\frac{d^ny}{dx^n} + a_{n-1}x^{n-1}\\frac{d^{n-1}y}{dx^{n-1}} + \\dots + a_1x\\frac{dy}{dx} + a_0y = f(x)$$

For the standard homogeneous case, $f(x) = 0$. In the simplest and most common case, the second-order Cauchy-Euler equation is expressed as:
$$ax^2y'' + bxy' + cy = 0$$
where $a, b,$ and $c$ are real constants and $x > 0$. The variable coefficients $x^n$ ensure that the equation remains invariant under a scaling transformation of the independent variable, which is a property that differentiates these equations from constant-coefficient linear ODEs.

## Key Terminology

To analyze these equations effectively, one must understand several technical terms:

| Term | Definition |
|---|---|
| Equidimensional | Refers to the property where the degree of the polynomial $x^k$ matches the derivative order $k$. |
| Characteristic Equation | A quadratic equation derived from the Cauchy-Euler ODE used to find the roots $r_1$ and $r_2$. |
| Indicial Equation | Another name for the characteristic equation specific to Cauchy-Euler and Frobenius methods. |
| Linearly Independent | Solutions that cannot be expressed as a linear combination of each other; essential for the general solution. |
| Fundamental Set | A pair of linearly independent solutions $\\{y_1, y_2\\}$ that form the basis of the general solution. |
| Wronskian | The determinant of a matrix of solutions and their derivatives, used to verify linear independence. |

## Purpose

The primary utility of Cauchy-Euler equations lies in their ability to model systems where the rate of change is proportional to the scaling of the input variable. Because these equations can be transformed into linear ODEs with constant coefficients through a change of variables, they serve as a bridge between elementary differential equations and more complex variable-coefficient systems.

They are frequently encountered in:
1. **Physics and Engineering:** They appear in the solution of Laplace's equation in polar and spherical coordinates.
2. **Structural Mechanics:** They describe the deflection of beams where the stiffness varies with distance from a fixed point.
3. **Electromagnetism:** They arise in solving Maxwell's equations in cylindrical geometry.
4. **Finance:** They are used in certain models of asset pricing where the variance of the underlying process scales with the price level.

## Fundamental Properties

The most critical property of the Cauchy-Euler equation is its scale invariance. If we substitute $x = e^t$ (or $t = \\ln x$), the variable-coefficient equation transforms into a constant-coefficient equation. This transformation effectively maps the power-law growth/decay of the Cauchy-Euler solution space into the exponential growth/decay space of constant-coefficient linear ODEs.

Specifically, for the second-order case, the transformation $y(x) = x^r$ leads to the following behavior based on the discriminant $D = (b-a)^2 - 4ac$:
1. **Distinct Real Roots:** If $D > 0$, the solutions are of the form $y = c_1x^{r_1} + c_2x^{r_2}$.
2. **Repeated Real Roots:** If $D = 0$, the solutions require a logarithmic factor to maintain independence: $y = c_1x^r + c_2x^r \\ln(x)$.
3. **Complex Conjugate Roots:** If $D < 0$, with roots $r = \\alpha \\pm i\\beta$, the solutions involve oscillating power functions: $y = x^\\alpha(c_1 \\cos(\\beta \\ln x) + c_2 \\sin(\\beta \\ln x))$.

The following interactive graph allows exploration of how the roots of the characteristic equation affect the behavior of the solution $y(x) = x^r$. Note that when the exponent $r$ changes, the rate of growth for $x > 1$ or $x < 1$ changes significantly.

\`\`\`interactivegraph
x^r
params: r=1
range: r=-3:3
\`\`\`

The graph above illustrates $f(x) = x^r$, where $r$ acts as a parameter controlling the curvature and growth rate. When $r > 0$, the function approaches zero as $x \\to 0$ and grows as $x \\to \\infty$. When $r < 0$, the function approaches infinity as $x \\to 0$ and zero as $x \\to \\infty$.

## Types & Variations

Cauchy-Euler equations are categorized by their order and their non-homogeneous components.

### Homogeneous vs. Non-homogeneous
The homogeneous form $ax^2y'' + bxy' + cy = 0$ is the standard form. The non-homogeneous form $ax^2y'' + bxy' + cy = f(x)$ can be solved using the method of **Variation of Parameters**, which is particularly effective here because the Wronskian of the fundamental solutions is relatively simple to compute.

### Dimensionality and Order
While second-order equations are the standard, higher-order Cauchy-Euler equations follow the same pattern. An $n$-th order equation:
$$\\sum_{k=0}^n a_k x^k \\frac{d^k y}{d x^k} = 0$$
yields an $n$-th degree polynomial in $r$ (the indicial equation). Each root $r_j$ contributes a term $x^{r_j}$ to the general solution. If a root is repeated $m$ times, the corresponding solutions are $x^{r_j}, x^{r_j}\\ln x, \\dots, x^{r_j}(\\ln x)^{m-1}$.

## How to Solve

The derivation process for solving a Cauchy-Euler equation follows a strict algorithmic path:

### Step 1: Assumption of Solution
We assume the trial solution $y = x^r$. Compute the derivatives:
$y' = rx^{r-1}$
$y'' = r(r-1)x^{r-2}$

### Step 2: Substitution
Substitute these into the ODE $ax^2y'' + bxy' + cy = 0$:
$ax^2(r(r-1)x^{r-2}) + bx(rx^{r-1}) + cx^r = 0$
Factoring out $x^r$ (assuming $x \\neq 0$):
$a(r^2-r) + br + c = 0$
$ar^2 + (b-a)r + c = 0$

### Step 3: Solve the Indicial Equation
Solve the quadratic equation for $r$:
$$r = \\frac{-(b-a) \\pm \\sqrt{(b-a)^2 - 4ac}}{2a}$$

### Step 4: Construct the General Solution
Depending on the discriminant $\\Delta = (b-a)^2 - 4ac$:
1. If $\\Delta > 0$: $y(x) = C_1 x^{r_1} + C_2 x^{r_2}$
2. If $\\Delta = 0$: $y(x) = C_1 x^r + C_2 x^r \\ln(x)$
3. If $\\Delta < 0$: $y(x) = x^\\alpha (C_1 \\cos(\\beta \\ln x) + C_2 \\sin(\\beta \\ln x))$ where $r = \\alpha \\pm i\\beta$.

### Illustrative Example
Consider the equation $x^2y'' - 3xy' + 3y = 0$.
1. Identify coefficients: $a=1, b=-3, c=3$.
2. Indicial equation: $r^2 + (-3-1)r + 3 = 0 \\implies r^2 - 4r + 3 = 0$.
3. Factor: $(r-3)(r-1) = 0$.
4. Roots: $r_1=3, r_2=1$.
5. General solution: $y = C_1 x^3 + C_2 x$.

To visualize the basis solutions, we plot the two components. The graph below displays $f(x) = x^3$ and $g(x) = x$.

\`\`\`graph
x^3
x
\`\`\`

The cubic term $x^3$ represents the faster-growing component of the solution, while the linear term $x$ represents the steady-growth component. The general solution is a weighted sum of these two curves.

## Summary

Cauchy-Euler equations represent a vital class of differential equations characterized by equidimensional coefficients. They allow for an analytical approach to solving problems where systems demonstrate scaling invariance. By transforming these variable-coefficient equations into constant-coefficient equations through a logarithmic coordinate shift, mathematicians can derive closed-form solutions involving powers and logarithms. 

Mastery of these equations requires:
1. Recognizing the equidimensional structure.
2. Formulating the correct indicial equation.
3. Correctly identifying the case for the roots (real distinct, real repeated, or complex).
4. Applying the appropriate basis functions to construct the general solution.

Their elegance lies in how they connect power-law behavior directly to the geometry of the coordinate system, making them indispensable in fields ranging from quantum mechanics to classical potential theory.`;export{e as default};