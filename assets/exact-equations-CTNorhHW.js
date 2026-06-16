var e=`# Exact Differential Equations

## Definition

An exact differential equation is a type of first-order ordinary differential equation that arises from the total differential of a multivariable function. Consider a function $F(x, y) = C$, where $C$ is a constant. If we take the total differential of this function, we obtain:

$$dF = \\frac{\\partial F}{\\partial x}dx + \\frac{\\partial F}{\\partial y}dy = 0$$

A first-order differential equation expressed in the form $M(x, y)dx + N(x, y)dy = 0$ is said to be exact if there exists a differentiable function $F(x, y)$ such that:

$$\\frac{\\partial F}{\\partial x} = M(x, y) \\quad \\text{and} \\quad \\frac{\\partial F}{\\partial y} = N(x, y)$$

In this context, the expression $M(x, y)dx + N(x, y)dy$ corresponds exactly to the differential $dF$. If such an $F$ exists, the general solution to the differential equation is given implicitly by the equation $F(x, y) = C$. The study of these equations is fundamental to vector calculus, potential theory, and thermodynamics, as they describe fields where the line integral is path-independent.

## Key Terminology

To master the study of exact differential equations, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| Differential Form | An expression of the type $M(x, y)dx + N(x, y)dy$. |
| Potential Function | The scalar function $F(x, y)$ whose partial derivatives yield $M$ and $N$. |
| Total Differential | The infinitesimal change in a function of multiple variables. |
| Exactness Criterion | The condition $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$, which ensures the existence of a potential function. |
| Integrating Factor | A function $\\mu(x, y)$ used to transform a non-exact equation into an exact one. |
| Conservative Field | A vector field $\\mathbf{F} = \\langle M, N \\rangle$ that is the gradient of a scalar potential. |

## Purpose

The primary purpose of identifying and solving exact differential equations is to solve first-order problems where the dependent and independent variables are coupled in a way that suggests they originate from a single, underlying scalar field. Unlike separable equations, where variables can be isolated through algebraic manipulation, exact equations rely on the geometric and analytical properties of the gradient.

In physics and engineering, the "exactness" of a differential equation is synonymous with the concept of path independence. If an equation representing a work-energy relation is exact, it implies that the energy state of the system is a function of the coordinates rather than the history of the path taken. By solving these equations, engineers can determine the state function of a system, such as gravitational potential, electrostatic potential, or internal energy in thermodynamic cycles.

## Fundamental Properties

The defining characteristic of an exact differential equation is derived from Clairaut's Theorem (or the Schwarz Theorem) regarding the equality of mixed partial derivatives. If $F$ has continuous second-order partial derivatives, then:

$$\\frac{\\partial^2 F}{\\partial y \\partial x} = \\frac{\\partial^2 F}{\\partial x \\partial y}$$

Substituting $M = \\frac{\\partial F}{\\partial x}$ and $N = \\frac{\\partial F}{\\partial y}$ into this identity, we obtain the necessary and sufficient condition for exactness:

$$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$$

This condition is critical. If the equation is exact, the potential function $F(x, y)$ can be constructed by integrating $M$ with respect to $x$ or $N$ with respect to $y$. If the condition $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ is not met, the differential form is not "closed," and the equation is not exact in its current state. However, it may still be possible to force exactness by multiplying the entire equation by an integrating factor $\\mu(x, y)$, provided that the new equation $\\mu M dx + \\mu N dy = 0$ satisfies the condition $\\frac{\\partial (\\mu M)}{\\partial y} = \\frac{\\partial (\\mu N)}{\\partial x}$.

## Types & Variations

Exact differential equations can be categorized based on their complexity and the method required to solve them:

1. **Directly Exact:** The condition $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ is satisfied immediately.
2. **Implicitly Exact:** Equations requiring a transformation or algebraic rearrangement to fit the $Mdx + Ndy = 0$ form.
3. **Non-Exact (Convertible):** Equations that are not exact but can be made so via an integrating factor. 
   - If $\\frac{1}{N}(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}) = f(x)$, then $\\mu(x) = e^{\\int f(x)dx}$.
   - If $\\frac{1}{M}(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}) = g(y)$, then $\\mu(y) = e^{\\int g(y)dy}$.

Understanding these variations is crucial. Consider the following interactive graph, which illustrates the behavior of the potential function $F(x, y) = \\frac{1}{2}x^2 + \\frac{1}{2}y^2 = C$. By varying $C$, we see the family of concentric circles, which are the integral curves of the exact equation $x dx + y dy = 0$.

\`\`\`interactivegraph
\\sqrt{C - x^2}
params: C=4
range: C=1:10
\`\`\`

The graph above shows the upper semi-circle portion of the solutions for the differential equation $x dx + y dy = 0$. As the parameter $C$ changes, the radius of the circle $\\sqrt{C}$ increases, representing different level sets of the potential function $F(x, y) = \\frac{1}{2}x^2 + \\frac{1}{2}y^2$.

## How to Solve

To solve an exact differential equation $M(x, y)dx + N(x, y)dy = 0$, follow these systematic steps:

**1. Verification**
Calculate $\\frac{\\partial M}{\\partial y}$ and $\\frac{\\partial N}{\\partial x}$. If they are not equal, the equation is not exact. Seek an integrating factor or conclude that standard exact methods do not apply.

**2. Integration**
Since $M = \\frac{\\partial F}{\\partial x}$, integrate $M$ with respect to $x$, treating $y$ as a constant:
$$F(x, y) = \\int M(x, y) dx + g(y)$$
Here, $g(y)$ represents an "arbitrary constant" that is actually a function of $y$.

**3. Determination of $g(y)$**
Differentiate your expression for $F(x, y)$ with respect to $y$:
$$\\frac{\\partial F}{\\partial y} = \\frac{\\partial}{\\partial y} \\left[ \\int M(x, y) dx \\right] + g'(y)$$
Equate this result to $N(x, y)$, since we know $\\frac{\\partial F}{\\partial y} = N$:
$$N(x, y) = \\frac{\\partial}{\\partial y} \\left[ \\int M(x, y) dx \\right] + g'(y)$$
Solve this algebraic equation for $g'(y)$ and integrate with respect to $y$ to find $g(y)$.

**4. Final Solution**
Substitute $g(y)$ back into the expression for $F(x, y)$ and set the result equal to a constant $C$:
$$F(x, y) = C$$

**Example:** Solve $(2xy)dx + (x^2 - 1)dy = 0$.
- $M = 2xy, N = x^2 - 1$.
- $\\frac{\\partial M}{\\partial y} = 2x, \\frac{\\partial N}{\\partial x} = 2x$. The equation is exact.
- $\\int 2xy dx = x^2y + g(y)$.
- $\\frac{\\partial}{\\partial y}(x^2y + g(y)) = x^2 + g'(y)$.
- Set equal to $N$: $x^2 + g'(y) = x^2 - 1 \\implies g'(y) = -1 \\implies g(y) = -y$.
- Final solution: $x^2y - y = C$.

## Summary

Exact differential equations occupy a significant position in the hierarchy of mathematical physics. By leveraging the property that a differential expression can be the total derivative of a scalar potential, we transform a dynamic problem into a static problem of finding level curves. The requirement $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ acts as a diagnostic tool, separating systems that possess a conserved potential from those that do not. 

When the exactness condition fails, the search for an integrating factor $\\mu$ represents an attempt to find a scalar field that scales the original equation into a conservative one. This process is ubiquitous, appearing in everything from the construction of thermodynamic potentials to the solution of boundary value problems in fluid mechanics. Mastery of this topic requires careful integration, diligent partial differentiation, and an appreciation for the symmetry of multivariable calculus. Through the structured steps of verification, integration, and identification of the arbitrary function $g(y)$, practitioners can resolve complex differential relationships that appear frequently in engineering and theoretical science.`;export{e as default};