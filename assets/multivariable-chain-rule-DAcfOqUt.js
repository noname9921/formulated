var e=`# The Chain Rule for Multivariable Functions

## Definition

The multivariable chain rule is a fundamental theorem in vector calculus that provides a method for computing the derivative of a composite function when the input variables are themselves functions of other variables. Unlike the single-variable chain rule, where $f(g(x))'=f'(g(x))g'(x)$, the multivariable case accounts for the total influence of multiple independent pathways through which an output variable may depend on an input.

Formally, let $w = f(x_1, x_2, \\dots, x_n)$ be a differentiable function of $n$ variables, where each $x_i$ is a differentiable function of $m$ variables $t_1, t_2, \\dots, t_m$ such that $x_i = g_i(t_1, t_2, \\dots, t_m)$. The partial derivative of $w$ with respect to a specific variable $t_j$ is given by the summation:
$$\\frac{\\partial w}{\\partial t_j} = \\sum_{i=1}^{n} \\frac{\\partial w}{\\partial x_i} \\frac{\\partial x_i}{\\partial t_j}$$

This expression signifies that the total rate of change of $w$ with respect to $t_j$ is the sum of the rates of change of $w$ with respect to each intermediate variable $x_i$, multiplied by the rate of change of that intermediate variable with respect to $t_j$.

## Key Terminology

To master the multivariable chain rule, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| Composite Function | A function formed by substituting one or more functions into another. |
| Intermediate Variable | Variables (e.g., $x, y$) that depend on independent variables but act as inputs to the outer function. |
| Independent Variable | The foundational variables (e.g., $t, s$) upon which all other intermediate variables ultimately depend. |
| Total Derivative | The derivative of a composite function that accounts for both direct and indirect dependencies of the output. |
| Partial Derivative | The rate of change of a multivariable function with respect to one variable, treating all others as constants. |
| Gradient Vector | A vector containing all first-order partial derivatives, denoted $\\nabla f$. |
| Jacobian Matrix | A matrix of all first-order partial derivatives of a vector-valued function, essential for the generalization of the chain rule. |

## Purpose

The primary purpose of the multivariable chain rule is to extend the concept of differentiation to higher-dimensional spaces. In physics, engineering, and data science, complex systems are often modeled by nested dependencies. For instance, the temperature $T$ at a point in a room may depend on coordinates $(x, y, z)$, which in turn change as a particle moves along a trajectory defined by time $t$. 

By using the chain rule, analysts can determine the instantaneous rate of change of the global system (the temperature encountered by the particle) without needing to explicitly substitute the coordinate equations into the temperature function before differentiating. This decoupling of operations simplifies algebraic manipulation and provides a clear conceptual mapping of how perturbations in independent inputs propagate through layers of abstraction to affect the final system output.

## Fundamental Properties

The multivariable chain rule relies on several essential mathematical properties:

1. **Linearity of Differentiation:** The process of taking the partial derivative is a linear operator, ensuring that the summation in the chain rule correctly aggregates independent effects.
2. **Dependence on Differentiability:** For the chain rule to hold, the constituent functions must be differentiable. If any path is non-differentiable, the total derivative may not exist.
3. **Additive Accumulation:** The chain rule assumes that the total effect of a variable change is the sum of individual path effects. This stems from the definition of the total differential: $dw = \\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i} dx_i$.
4. **Consistency with Single-Variable Calculus:** When $n=1$ and $m=1$, the expression naturally collapses into the standard Leibniz notation chain rule: $\\frac{dw}{dt} = \\frac{dw}{dx} \\frac{dx}{dt}$.
5. **Matrix Representation:** In higher dimensions, the chain rule is compactly expressed using the Jacobian matrix. If $\\mathbf{y} = \\mathbf{g}(\\mathbf{t})$ and $\\mathbf{w} = \\mathbf{f}(\\mathbf{y})$, then the Jacobian of the composition is the product of the Jacobians: $J_{\\mathbf{f} \\circ \\mathbf{g}} = J_{\\mathbf{f}} \\cdot J_{\\mathbf{g}}$.

## Types & Variations

There are three primary scenarios encountered when applying the multivariable chain rule:

### Case 1: $w = f(x, y)$ where $x = x(t)$ and $y = y(t)$
This is the simplest variation, representing a path in 2D space. The derivative is computed as:
$$\\frac{dw}{dt} = \\frac{\\partial f}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial f}{\\partial y} \\frac{dy}{dt}$$

### Case 2: $w = f(x, y)$ where $x = x(s, t)$ and $y = y(s, t)$
Here, the function output depends on two independent variables. We compute partial derivatives for each:
$$\\frac{\\partial w}{\\partial s} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial s} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial s}$$
$$\\frac{\\partial w}{\\partial t} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial t}$$

### Case 3: Implicit Differentiation
The chain rule is the engine behind implicit differentiation. Given an equation $F(x, y) = 0$, where $y$ is implicitly defined as a function of $x$, we apply the chain rule with respect to $x$:
$$\\frac{\\partial F}{\\partial x} \\frac{dx}{dx} + \\frac{\\partial F}{\\partial y} \\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{F_x}{F_y}$$

## How to Solve

To solve problems involving the multivariable chain rule effectively, follow this structured analytical framework:

### 1. Construct a Dependence Tree
Identify the dependent variables (top level), intermediate variables (middle level), and independent variables (base level). Draw a diagram where each variable is a node and a line represents a functional dependence. This ensures you do not miss any paths.

### 2. Differentiate Each Link
For every path in your tree, calculate the relevant partial derivative. If the function is $w = f(x, y)$, calculate $f_x$ and $f_y$. If $x = g(t)$, calculate $dx/dt$.

### 3. Multiply Along Paths
For each path connecting the top level to the desired independent variable, multiply the derivatives collected along that path.

### 4. Sum the Contributions
Add the results from step 3 together. This sum represents the total derivative.

### 5. Substitution (Optional)
If a numerical value is required, substitute the values of the independent variables into the expressions. Often, it is easier to substitute the numerical values into the variables $x, y$ first to find their values, and then plug those into the partial derivatives.

**Example Application:**
Consider $w = x^2 y + z$ where $x = t^2$, $y = \\sin(t)$, and $z = e^t$.
To find $dw/dt$:
1. $dw/dt = (\\partial w / \\partial x)(dx/dt) + (\\partial w / \\partial y)(dy/dt) + (\\partial w / \\partial z)(dz/dt)$
2. Partial derivatives: $w_x = 2xy$, $w_y = x^2$, $w_z = 1$
3. Independent derivatives: $dx/dt = 2t$, $dy/dt = \\cos(t)$, $dz/dt = e^t$
4. Assembly: $dw/dt = (2xy)(2t) + (x^2)(\\cos(t)) + (1)(e^t)$
5. Full substitution: Substitute $x=t^2, y=\\sin(t)$ to express in terms of $t$.

## Summary

The Chain Rule for multivariable functions serves as the bridge between simple partial differentiation and the broader scope of vector calculus. By understanding that a change in an output is the aggregation of changes across all contributing functional paths, one gains the ability to solve for sensitivities in complex systems. Whether dealing with parametric surfaces, implicit curves, or high-dimensional mappings, the chain rule maintains a consistent logic: identify paths, differentiate links, and sum the weighted influences. Mastery of this theorem is essential for advanced studies in fluid dynamics, thermodynamics, optimization theory, and neural network backpropagation, where the chain rule is used to distribute error gradients through layers of interconnected weights. Adhering to the dependence tree methodology minimizes errors and provides a scalable approach to even the most intricate systems of equations.`;export{e as default};