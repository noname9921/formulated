var e=`# Bernoulli Equations and Substitutions

## Definition

A Bernoulli differential equation is a specific type of first-order non-linear ordinary differential equation (ODE) that can be transformed into a linear ODE through a specific algebraic substitution. Formally, a Bernoulli equation is expressed in the general form:

$$\\frac{dy}{dx} + P(x)y = Q(x)y^n$$

In this equation, $P(x)$ and $Q(x)$ are continuous functions of the independent variable $x$. The exponent $n$ is a real number. The classification of this equation depends heavily on the value of $n$:

1. If $n=0$, the equation becomes $\\frac{dy}{dx} + P(x)y = Q(x)$, which is a standard first-order linear ODE.
2. If $n=1$, the equation becomes $\\frac{dy}{dx} + P(x)y = Q(x)y$, which can be rewritten as $\\frac{dy}{dx} + (P(x) - Q(x))y = 0$. This is a separable first-order linear ODE.
3. If $n \\neq 0$ and $n \\neq 1$, the equation is inherently non-linear, necessitating a transformation to reach a solvable linear state.

The equation is named after Jacob Bernoulli, who discussed it in 1695, though it was Leibniz who shortly thereafter demonstrated the method of substitution to reduce it to a linear form.

## Key Terminology

To navigate the study of Bernoulli equations, one must be familiar with several core mathematical terms:

| Term | Definition |
|:---|:---|
| Dependent Variable | The variable $y$, which is a function of the independent variable $x$. |
| Independent Variable | The variable $x$, with respect to which the differentiation is performed. |
| Non-linear ODE | An equation where the dependent variable $y$ or its derivatives appear with exponents other than one or as non-linear functions. |
| Bernoulli Exponent | The constant $n$, which determines the degree of non-linearity of the term $y^n$. |
| Substitution | A change of variables (e.g., $v = y^{1-n}$) used to simplify the structure of an equation. |
| Integrating Factor | A function $\\mu(x) = e^{\\int P(x)dx}$ used to solve the resulting linear differential equation. |

## Purpose

The primary purpose of identifying a Bernoulli equation is to exploit its structural symmetry. While general non-linear equations are notoriously difficult to solve analytically and often require numerical approximations or power series methods, Bernoulli equations possess a unique "hidden" linearity. By applying the correct substitution, we move from the domain of non-linear dynamics—which may feature complex behaviors—into the domain of linear equations, where established tools such as the method of integrating factors or variation of parameters provide an exact closed-form solution.

Furthermore, these equations are essential for modeling physical systems where the rate of change is proportional to the current state modified by a power-law interaction. This frequently arises in fluid dynamics, population growth models with limited resources, and chemical kinetics.

## Fundamental Properties

The power of the Bernoulli substitution lies in its ability to map the non-linear space of $y$ into a linear space of $v$. Consider the transformation $v = y^{1-n}$. Differentiating $v$ with respect to $x$ using the chain rule yields:

$$\\frac{dv}{dx} = (1-n)y^{-n} \\frac{dy}{dx}$$

If we divide the original Bernoulli equation $\\frac{dy}{dx} + P(x)y = Q(x)y^n$ by $y^n$, we obtain:

$$y^{-n} \\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$$

Substituting $v = y^{1-n}$ and its derivative $\\frac{dv}{dx} = (1-n)y^{-n} \\frac{dy}{dx}$ (or $\\frac{1}{1-n} \\frac{dv}{dx} = y^{-n} \\frac{dy}{dx}$) into the equation, we get:

$$\\frac{1}{1-n} \\frac{dv}{dx} + P(x)v = Q(x)$$

Multiplying by $(1-n)$, we arrive at the linear form:

$$\\frac{dv}{dx} + (1-n)P(x)v = (1-n)Q(x)$$

This resulting equation is first-order and linear in $v$. Its properties are governed by the behavior of $(1-n)P(x)$. If $P(x)$ is a constant, the solution follows exponential decay or growth. If $P(x)$ varies, the integrating factor $e^{\\int (1-n)P(x)dx}$ dictates the solution's evolution.

## Types & Variations

Bernoulli equations manifest in various contexts based on the behavior of the coefficients $P(x)$ and $Q(x)$. 

### Constant Coefficient Bernoulli Equations
When $P(x) = a$ and $Q(x) = b$, the equation $\\frac{dy}{dx} + ay = by^n$ describes systems that reach a steady state. The equilibrium solution occurs when $\\frac{dy}{dx} = 0$, leading to $ay = by^n$, or $y^{n-1} = a/b$.

### Variable Coefficient Bernoulli Equations
When coefficients are functions of $x$, the equation often models non-steady systems. An example is the Logistic Growth Model, where $P(x) = -r$ (a growth rate) and $Q(x) = -r/K$ (carrying capacity interaction). The equation takes the form $\\frac{dy}{dx} = ry(1 - \\frac{y}{K})$, which is a Bernoulli equation with $n=2$.

\`\`\`interactivegraph
\\frac{a * y * (1 - (y/K))}{1}
params: a=1, K=2
range: a=0:2, K=1:5
\`\`\`

In the interactive graph above, we represent the logistic growth rate $\\frac{dy}{dx}$ as a function of the population $y$ (plotted on the x-axis). The reader should observe how the growth rate changes sign at $y=K$ (the carrying capacity), demonstrating how the Bernoulli structure captures natural resource limitations.

## How to Solve

Solving a Bernoulli equation involves a rigorous algorithmic approach. Follow these steps to ensure consistency:

1. **Standardization:** Ensure the equation is in the form $\\frac{dy}{dx} + P(x)y = Q(x)y^n$. If the coefficient of $\\frac{dy}{dx}$ is not 1, divide the entire equation by it.
2. **Identification:** Identify $P(x)$, $Q(x)$, and $n$. If $n=0$ or $n=1$, use standard linear methods.
3. **Substitution:** Define the new variable $v = y^{1-n}$. Calculate $\\frac{dv}{dx} = (1-n)y^{-n} \\frac{dy}{dx}$.
4. **Transformation:** Divide the original equation by $y^n$ to isolate the $y^{-n} \\frac{dy}{dx}$ term. Substitute $v$ and $\\frac{dv}{dx}$ into the equation.
5. **Linear Solution:** Solve the resulting linear equation $\\frac{dv}{dx} + (1-n)P(x)v = (1-n)Q(x)$ using an integrating factor: $\\mu(x) = e^{\\int (1-n)P(x)dx}$.
6. **Back-substitution:** Once $v(x)$ is found, substitute back $y = v^{\\frac{1}{1-n}}$ to obtain the general solution for $y(x)$.

### Illustrative Example
Consider the equation $\\frac{dy}{dx} + y = xy^3$. Here $n=3$, $P(x)=1$, and $Q(x)=x$.
1. Divide by $y^3$: $y^{-3} \\frac{dy}{dx} + y^{-2} = x$.
2. Substitute $v = y^{1-3} = y^{-2}$.
3. Then $\\frac{dv}{dx} = -2y^{-3} \\frac{dy}{dx}$.
4. Substitute into the equation: $-\\frac{1}{2} \\frac{dv}{dx} + v = x$, or $\\frac{dv}{dx} - 2v = -2x$.
5. The integrating factor is $e^{\\int -2 dx} = e^{-2x}$.
6. Multiply by $e^{-2x}$: $\\frac{d}{dx}(v e^{-2x}) = -2x e^{-2x}$.
7. Integrate: $v e^{-2x} = \\int -2x e^{-2x} dx = x e^{-2x} + \\frac{1}{2}e^{-2x} + C$.
8. Solve for $v$: $v = x + \\frac{1}{2} + Ce^{2x}$.
9. Final solution: $y = (x + \\frac{1}{2} + Ce^{2x})^{-1/2}$.

## Summary

The Bernoulli equation serves as a bridge between elementary linear differential equations and the complex landscape of non-linear analysis. By utilizing the substitution $v = y^{1-n}$, we effectively "linearize" the interaction between the growth rate and the power-law dependence of the dependent variable. 

This transformation remains one of the most elegant examples of the power of algebraic substitution in calculus. While modern computational methods often rely on numerical integration for general non-linear systems, the ability to solve Bernoulli equations analytically provides deep insight into the behavior of systems governed by power-law dynamics, such as those found in biology, physics, and economics. Mastering this technique is essential for any practitioner of differential equations, as it provides a reliable method for tackling equations that appear non-linear but possess an underlying structure amenable to exact solution techniques.`;export{e as default};