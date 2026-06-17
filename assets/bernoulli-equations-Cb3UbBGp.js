var e=`# Bernoulli Equations and Substitutions

## Definition

The Bernoulli differential equation is a specific type of first-order non-linear ordinary differential equation (ODE) that is named after Jacob Bernoulli, who discussed it in his 1695 publication. It takes the mathematical form:

$$y' + P(x)y = Q(x)y^n$$

In this equation, $P(x)$ and $Q(x)$ are continuous functions of the independent variable $x$, and $n$ is a real number. The Bernoulli equation is classified as a non-linear equation for most values of $n$. Specifically, if $n=0$, the equation simplifies to a standard first-order linear ODE: $y' + P(x)y = Q(x)$. If $n=1$, the equation becomes $y' + P(x)y = Q(x)y$, which is a first-order linear homogeneous equation separable as $y'(P(x)-Q(x))y$. For any other real number $n$ (where $n \\neq 0$ and $n \\neq 1$), the equation is fundamentally non-linear, but it possesses the remarkable property that it can be transformed into a linear ODE through a specific algebraic substitution.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Independent Variable | The variable $x$, upon which $y$ and the functions $P(x)$ and $Q(x)$ depend. |
| Dependent Variable | The variable $y$, which is a function of $x$. |
| Bernoulli Power ($n$) | The exponent applied to the dependent variable on the right-hand side of the equation. |
| Transformation | The process of changing the dependent variable to linearize the equation. |
| Integrating Factor | A function $\\mu(x)$ used to solve the resulting linear ODE after substitution. |
| Linearization | The methodology of converting a non-linear ODE into a linear ODE form. |

## Purpose

The primary purpose of identifying and solving Bernoulli equations is to bridge the gap between unsolvable non-linear problems and the highly structured, well-understood methods for solving linear first-order ODEs. Because non-linear differential equations rarely yield closed-form analytical solutions, the existence of a substitution that reduces a Bernoulli equation to a linear form is of immense utility in physics, engineering, and population dynamics.

By converting the non-linear expression $y' + P(x)y = Q(x)y^n$ into a linear expression, mathematicians can leverage established techniques such as the method of integrating factors or variation of parameters. This allows for the exact analytical determination of $y(x)$, which is essential in fields where numerical approximations might obscure the underlying qualitative behavior of the system, such as stability, bifurcation, or asymptotic growth.

## Fundamental Properties

The Bernoulli equation relies on the concept of change of variables. To analyze the properties, we look at the interaction between the linear operator $y'$ and the non-linear term $y^n$.

1. **Non-linearity:** The equation is non-linear unless $n \\in \\{0, 1\\}$. The non-linearity stems from the $y^n$ term, which prevents the principle of superposition from being applied directly to the solutions.
2. **Transformability:** The equation is "reducible." It belongs to a small class of non-linear equations that can be converted into a linear system without losing the integrity of the solution set.
3. **Domain Constraints:** Since the transformation involves $y^{1-n}$, the domain of the solution $y(x)$ is restricted by the need for $y(x) \\neq 0$ if $1-n < 0$, or potentially other restrictions depending on the specific functions $P(x)$ and $Q(x)$.
4. **Behavioral Variation:** The exponent $n$ dictates the growth characteristics of the solution. For example, if $n > 1$, the term $Q(x)y^n$ dominates at high magnitudes, often representing logistic growth or friction-limited systems.

## Types & Variations

Bernoulli equations can be categorized based on the nature of $P(x)$, $Q(x)$, and the exponent $n$. 

### The Logistic Growth Model
One of the most famous variations occurs when $P(x) = -r$ and $Q(x) = -r/K$ with $n=2$. This leads to the logistic differential equation:
$$y' = ry\\left(1 - \\frac{y}{K}\\right)$$
This is a Bernoulli equation used extensively in biology to model population growth under resource constraints.

### The Riccati-Related Bernoulli
While a Riccati equation has the form $y' = Q_0(x) + Q_1(x)y + Q_2(x)y^2$, a Bernoulli equation is a specific subset of the Riccati equation where $Q_0(x) = 0$. This highlights that Bernoulli equations are a gateway to more complex non-linear dynamics.

### Interactive Exploration
The following interactive graph demonstrates the effect of varying the exponent $n$ in a simplified Bernoulli equation $y' = y - y^n$. Note how as $n$ changes, the rate at which the function approaches its steady state varies significantly.

\`\`\`interactivegraph
x - x^a
params: a=2
range: a=0:5
\`\`\`

The graph shows the function $f(y) = y - y^n$ (plotted here as $x - x^a$ for the graphing engine). The reader should observe how the root at $y=1$ remains constant for various $n$, but the slope and concavity change, illustrating how the exponent dictates the speed and nature of convergence to equilibrium in the corresponding differential equation $dy/dt = f(y)$.

## How to Solve

The solution process for the Bernoulli equation is procedural and follows these rigorous steps:

### Step 1: Divide by the non-linear term
Given $y' + P(x)y = Q(x)y^n$, divide the entire equation by $y^n$:
$$y^{-n}y' + P(x)y^{1-n} = Q(x)$$

### Step 2: Choose the substitution
Define a new dependent variable $v$ such that:
$$v = y^{1-n}$$
Differentiate $v$ with respect to $x$ using the chain rule:
$$\\frac{dv}{dx} = (1-n)y^{-n}\\frac{dy}{dx}$$
This implies:
$$y^{-n}y' = \\frac{1}{1-n} \\frac{dv}{dx}$$

### Step 3: Substitute and Simplify
Substitute the expressions for $v$ and $y^{-n}y'$ into the equation from Step 1:
$$\\frac{1}{1-n} \\frac{dv}{dx} + P(x)v = Q(x)$$
Multiply by $(1-n)$ to standardize the linear ODE:
$$\\frac{dv}{dx} + (1-n)P(x)v = (1-n)Q(x)$$

### Step 4: Solve the Linear ODE
The equation is now in the standard linear form $v' + p(x)v = q(x)$, where $p(x) = (1-n)P(x)$ and $q(x) = (1-n)Q(x)$. Find the integrating factor $\\mu(x)$:
$$\\mu(x) = e^{\\int p(x)dx}$$
Multiply through by $\\mu(x)$ and solve for $v(x)$.

### Step 5: Back-substitution
Substitute $v = y^{1-n}$ back to solve for $y$:
$$y = v^{\\frac{1}{1-n}}$$

### Illustrative Example
Consider $y' + y = xy^2$. Here $n=2$. 
1. Divide by $y^2$: $y^{-2}y' + y^{-1} = x$.
2. Let $v = y^{-1}$. Then $v' = -y^{-2}y'$.
3. The equation becomes $-v' + v = x$, or $v' - v = -x$.
4. Integrating factor $\\mu(x) = e^{\\int -1 dx} = e^{-x}$.
5. Multiply: $e^{-x}v' - e^{-x}v = -xe^{-x}$.
6. Integrate: $\\frac{d}{dx}(e^{-x}v) = -xe^{-x} \\implies e^{-x}v = xe^{-x} + e^{-x} + C$.
7. Solve for $v$: $v = x + 1 + Ce^x$.
8. Final result: $y = \\frac{1}{x + 1 + Ce^x}$.

## Summary

The Bernoulli equation represents a foundational concept in the study of ordinary differential equations. By recognizing the specific algebraic structure $y' + P(x)y = Q(x)y^n$, we can deploy the transformation $v = y^{1-n}$ to map a non-linear problem onto a linear manifold. This process is not merely a mathematical exercise but a critical tool for modeling real-world phenomena, including fluid dynamics (the Bernoulli principle in physics, though distinct, shares nomenclature due to the family's contributions), logistic population growth, and chemical reaction kinetics. Mastery of this substitution is a prerequisite for advanced work in dynamical systems and analytical mechanics, providing the ability to extract exact solutions from systems that would otherwise require intensive numerical approximation. Through the steps of normalization, substitution, integration, and back-substitution, the student gains the capability to solve a vast range of problems that form the bedrock of applied mathematics.`;export{e as default};