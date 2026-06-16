var e=`# The Chain Rule for Multivariable Functions

The study of multivariable calculus centers on understanding how functions of several variables change as their inputs vary. When these inputs are themselves functions of other variables, we enter the domain of the Multivariable Chain Rule. This mathematical framework allows us to compute the rate of change of a complex composition of functions by decomposing the problem into partial derivatives.

## Definition

The Chain Rule for multivariable functions is a theorem that provides a formula for calculating the derivative of the composition of functions where the inner functions depend on multiple variables.

Consider a differentiable function $f(x,y)$. If $x$ and $y$ are themselves differentiable functions of variables $s$ and $t$, such that $x=x(s,t)$ and $y=y(s,t)$, then the composition $z=f(x(s,t),y(s,t))$ is a function of $s$ and $t$. The partial derivatives of $z$ with respect to the intermediate variables are given by:

$$\\frac{\\partial z}{\\partial s} = \\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial s}$$

$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial t}$$

This definition extends to any number of variables. If $w=f(x_1, x_2, \\dots, x_n)$ and each $x_i$ is a function of $t_1, t_2, \\dots, t_m$, the partial derivative of $w$ with respect to any $t_j$ is the sum of the products of the partial derivative of $f$ with respect to each $x_i$ and the partial derivative of $x_i$ with respect to $t_j$.

## Key Terminology

To master the multivariable chain rule, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| Dependent Variable | The variable that changes in response to changes in independent variables (e.g., $z$). |
| Independent Variable | The primary inputs that determine the values of other variables (e.g., $s$ and $t$). |
| Intermediate Variable | Variables that depend on independent variables and serve as inputs to the final function (e.g., $x$ and $y$). |
| Partial Derivative | The rate of change of a multivariable function with respect to one variable while holding others constant. |
| Gradient Vector | A vector containing all first-order partial derivatives of a function, denoted $\\nabla f$. |
| Composition | The application of one function to the output of another function. |

## Purpose

The primary purpose of the multivariable chain rule is to facilitate sensitivity analysis in complex systems. In physical systems, engineering, and economics, variables are rarely isolated. A change in an environmental factor might affect several primary inputs, which in turn influence the final output of a model.

Without the chain rule, we would be forced to substitute the inner functions into the outer function and perform cumbersome algebraic expansions before differentiation. For high-dimensional systems, this is often impossible or algebraically prohibitive. The chain rule provides a modular approach: by calculating the "local" rates of change (the partial derivatives) separately, we can compute the "global" rate of change for the entire composition. This is the mathematical foundation for backpropagation in artificial neural networks, where the gradient of the loss function is calculated through a chain of differentiable operations.

## Fundamental Properties

The multivariable chain rule relies on the assumption of differentiability. A function $f$ is differentiable at a point if its partial derivatives exist and are continuous in a neighborhood of that point. This ensures that the function can be locally approximated by a linear plane (the tangent plane).

1. **Linearity:** The operation is linear, meaning the derivative of a sum is the sum of the derivatives.
2. **Path Independence:** The rate of change depends only on the total change accumulated through all intermediate paths. Whether we change $x$ first then $y$, or vary them simultaneously, the resulting total differential $dz$ remains consistent.
3. **Generalization of the Single-Variable Chain Rule:** When the number of variables is reduced to one, the multivariable chain rule simplifies exactly to the standard single-variable chain rule: $\\frac{dy}{dt} = \\frac{dy}{dx} \\frac{dx}{dt}$.
4. **The Jacobian Matrix:** In vector calculus, the chain rule is expressed as the product of Jacobian matrices. If $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ and $g: \\mathbb{R}^p \\to \\mathbb{R}^n$, the Jacobian of the composition $f \\circ g$ is the matrix product $J_{f \\circ g}(x) = J_f(g(x)) \\cdot J_g(x)$.

## Types & Variations

There are several common scenarios based on the number of intermediate and independent variables.

### Case 1: One Independent Variable
If $z=f(x,y)$ and $x=x(t)$, $y=y(t)$, then $z$ is a function of a single variable $t$. This is referred to as the "Total Derivative" of $z$ with respect to $t$:

$$\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial f}{\\partial y} \\frac{dy}{dt}$$

### Case 2: Several Independent Variables
As defined in the previous section, if $z=f(x,y)$ where $x=x(s,t)$ and $y=y(s,t)$, we compute partial derivatives with respect to both $s$ and $t$.

### Case 3: Implicit Differentiation
The chain rule is the engine behind implicit differentiation. Given a level surface $F(x,y,z)=0$, where $z$ is defined implicitly as a function of $x$ and $y$, the chain rule implies:

$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$

This allows us to find slopes on surfaces without solving for $z$ explicitly, which is often impossible.

## How to Solve

Solving a problem using the multivariable chain rule follows a rigorous five-step procedure:

1. **Identify the Structure:** Determine which variables are independent, intermediate, and dependent. Construct a tree diagram to visualize the dependencies. For example, if $w=f(x,y,z)$ and $x,y,z$ depend on $u,v$, draw a node $w$ at the top, branching to $x,y,z$, which then branch to $u,v$.
2. **Write the Formula:** Based on the tree diagram, construct the chain rule expression. Every path from the top node ($w$) to a bottom node (e.g., $u$) requires multiplying the derivatives along the branches and summing the results for all paths.
3. **Compute Partial Derivatives:** Calculate the partial derivatives for each individual function identified in the diagram.
4. **Substitution:** Substitute the expressions for the intermediate variables back into the derivatives to ensure the final result is in terms of the independent variables ($u,v$).
5. **Evaluation:** If a specific point $(u_0, v_0)$ is provided, substitute those values to obtain the numerical rate of change.

### Illustrative Example
Consider $f(x,y) = x^2y + y^3$, where $x=s+t$ and $y=st$. We want to find $\\frac{\\partial f}{\\partial s}$.

**Step 1: Identify Dependencies**
$f$ depends on $x$ and $y$. $x$ and $y$ depend on $s$ and $t$.

**Step 2: Formula**
$$\\frac{\\partial f}{\\partial s} = \\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial s}$$

**Step 3: Compute Derivatives**
$\\frac{\\partial f}{\\partial x} = 2xy$
$\\frac{\\partial f}{\\partial y} = x^2 + 3y^2$
$\\frac{\\partial x}{\\partial s} = 1$
$\\frac{\\partial y}{\\partial s} = t$

**Step 4: Combine**
$\\frac{\\partial f}{\\partial s} = (2xy)(1) + (x^2 + 3y^2)(t)$

**Step 5: Full Substitution (Optional)**
Replace $x$ and $y$ with $s+t$ and $st$:
$\\frac{\\partial f}{\\partial s} = 2(s+t)(st) + ((s+t)^2 + 3(st)^2)(t)$

## Summary

The Chain Rule for multivariable functions is a fundamental analytical tool that bridges the gap between local linearization and global system behavior. By decomposing complex dependencies into smaller, manageable partial derivatives, it enables the differentiation of functions that would otherwise be intractable.

We began by defining the rule as a summation of path-dependent products. We identified the importance of the Jacobian matrix in higher-dimensional contexts and outlined the step-by-step methodology for applying the rule to practical problems. From implicit differentiation to backpropagation in computational models, the multivariable chain rule remains one of the most critical concepts in calculus, providing the necessary precision to navigate the rates of change in multidimensional space. Mastery of this concept requires not only algebraic proficiency but also a structural understanding of how variables interact within a dependent hierarchy.`;export{e as default};