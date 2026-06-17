var e=`# Exact Differential Equations

An exact differential equation is a fundamental concept in the study of ordinary differential equations (ODEs). It represents a scenario where a given first-order differential equation can be derived directly from the total differential of a multivariable function without the need for complex integration techniques or arbitrary substitutions. When a differential equation is exact, it implies that the solution is implicitly defined by a level surface of a potential function.

## Definition

A first-order differential equation of the form:
$$M(x,y)dx + N(x,y)dy = 0$$
is said to be exact in a simply connected region $R$ of the $xy$-plane if there exists a differentiable scalar function $\\psi(x,y)$ such that:
$$\\frac{\\partial\\psi}{\\partial x} = M(x,y) \\quad \\text{and} \\quad \\frac{\\partial\\psi}{\\partial y} = N(x,y)$$
In this context, the differential $d\\psi = \\frac{\\partial\\psi}{\\partial x}dx + \\frac{\\partial\\psi}{\\partial y}dy$ is exactly the left-hand side of the differential equation. Because $d\\psi = 0$, it follows that the solution to the differential equation is given by the family of curves defined by:
$$\\psi(x,y) = C$$
where $C$ is an arbitrary constant. This is derived from the multivariable chain rule, which states that if $\\psi(x,y) = C$, then the total derivative $d\\psi$ must equal zero.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Potential Function | The scalar function $\\psi(x,y)$ whose total derivative yields the differential equation. |
| Simply Connected | A region where every closed loop can be shrunk to a point without leaving the region. |
| Total Differential | The expression $d\\psi = \\psi_x dx + \\psi_y dy$ describing the change in $\\psi$. |
| Integrating Factor | A function $\\mu(x,y)$ used to multiply a non-exact equation to make it exact. |
| Clairaut’s Theorem | The principle that if $\\psi$ has continuous second partials, $\\psi_{xy} = \\psi_{yx}$. |

## Purpose

The primary purpose of studying exact differential equations is to solve first-order equations that exhibit internal symmetry. By identifying an equation as exact, we bypass the need for separation of variables, Bernoulli substitutions, or integrating factors (provided the equation is naturally exact). Mathematically, this allows us to transform a differential equation problem into an algebraic problem of finding a function whose gradient field matches the vector field defined by the coefficients $M$ and $N$. This is critical in fields such as thermodynamics, where the existence of state functions (like entropy or internal energy) depends on the exactness of differential forms.

## Fundamental Properties

The identification of an exact differential equation relies on the symmetry of second-order mixed partial derivatives. If $M(x,y)$ and $N(x,y)$ have continuous first-order partial derivatives in a rectangular region $R$, then the differential equation $Mdx + Ndy = 0$ is exact if and only if:
$$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$$
This condition is derived from Clairaut’s Theorem. If $\\psi_x = M$ and $\\psi_y = N$, then for the potential function to exist, we must have:
$$\\frac{\\partial}{\\partial y}(\\psi_x) = \\frac{\\partial}{\\partial x}(\\psi_y) \\implies \\psi_{xy} = \\psi_{yx}$$
If this equality does not hold, the equation is not exact, and the differential form $Mdx + Ndy$ does not originate from the gradient of a single scalar function $\\psi$. 

Another vital property is path independence. In an exact equation, the integral $\\int_{(x_0,y_0)}^{(x,y)} Mdx + Ndy$ is independent of the path taken in the region $R$, depending only on the endpoints. This is analogous to conservative vector fields in vector calculus, where the work done moving a particle is independent of the path, determined solely by the potential difference.

## Types & Variations

Exact differential equations generally fall into two categories: naturally exact and non-exact equations that become exact through an integrating factor.

### Naturally Exact Equations
These equations satisfy the condition $M_y = N_x$ without any modification. They arise frequently in physics, specifically in potential theory and fluid dynamics.

### Equations Requiring an Integrating Factor
Many equations are not exact but can be transformed into an exact form by multiplying by a factor $\\mu(x,y)$. We seek a function $\\mu$ such that:
$$\\mu(x,y)M(x,y)dx + \\mu(x,y)N(x,y)dy = 0$$
is exact. This requires:
$$\\frac{\\partial}{\\partial y}(\\mu M) = \\frac{\\partial}{\\partial x}(\\mu N)$$
Applying the product rule:
$$\\mu \\frac{\\partial M}{\\partial y} + M \\frac{\\partial \\mu}{\\partial y} = \\mu \\frac{\\partial N}{\\partial x} + N \\frac{\\partial \\mu}{\\partial x}$$
If we assume $\\mu$ is a function of $x$ alone, this simplifies to a separable differential equation for $\\mu$. This technique expands the scope of exactness to a much broader class of solvable problems.

The following interactive graph explores the impact of a parameter $c$ on the potential function $\\psi(x,y) = x^2 + cxy + y^2$. Changing $c$ modifies the "exactness" of the resulting field, as the interaction term $cxy$ alters the mixed partials.

\`\`\`interactivegraph
x^2 + c*x + 1
params: c=1
range: c=-3:3
\`\`\`
In the graph above, we visualize the cross-section of the potential function at $y=1$. As $c$ varies, the curvature and the roots of the function change, demonstrating how the potential function parameters define the behavior of the differential curves.

## How to Solve

To solve an exact differential equation, follow this systematic procedure:

1. **Verify Exactness**: Compute $\\frac{\\partial M}{\\partial y}$ and $\\frac{\\partial N}{\\partial x}$. Confirm they are equal.
2. **Setup Integration**: Start with $\\frac{\\partial \\psi}{\\partial x} = M(x,y)$. Integrate this with respect to $x$, treating $y$ as a constant:
   $$\\psi(x,y) = \\int M(x,y) dx + g(y)$$
   where $g(y)$ is the constant of integration relative to $x$.
3. **Differentiate w.r.t $y$**: Compute the partial derivative of the resulting $\\psi$ with respect to $y$:
   $$\\frac{\\partial \\psi}{\\partial y} = \\frac{\\partial}{\\partial y} \\left( \\int M(x,y) dx \\right) + g'(y)$$
4. **Solve for $g'(y)$**: Set the result equal to $N(x,y)$ and solve for $g'(y)$:
   $$g'(y) = N(x,y) - \\frac{\\partial}{\\partial y} \\int M(x,y) dx$$
5. **Find $\\psi$**: Integrate $g'(y)$ to find $g(y)$, then substitute it back into the expression for $\\psi(x,y)$.
6. **State the Solution**: The general solution is $\\psi(x,y) = C$.

### Example
Consider $(2xy)dx + (x^2 + 1)dy = 0$.
1. $M_y = 2x$, $N_x = 2x$. It is exact.
2. $\\psi = \\int 2xy dx = x^2y + g(y)$.
3. $\\psi_y = x^2 + g'(y)$.
4. Set equal to $N$: $x^2 + g'(y) = x^2 + 1 \\implies g'(y) = 1$.
5. $g(y) = y$. Thus, $\\psi = x^2y + y$.
6. Final solution: $x^2y + y = C$.

## Summary

Exact differential equations are a elegant subset of first-order ODEs characterized by the existence of a potential function. The requirement $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ serves as the rigorous gatekeeper for this class. By transforming a differential relation into a scalar potential problem, we leverage the power of multivariable calculus to extract implicit solutions. When natural exactness fails, the method of integrating factors provides a robust alternative, broadening the utility of these techniques in both pure mathematics and applied engineering. Mastering this process is essential for understanding the relationship between differential forms and integral solutions.`;export{e as default};