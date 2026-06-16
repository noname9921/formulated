var e=`# Linear First-Order Equations

## Definition

A linear first-order ordinary differential equation is a differential equation that can be expressed in the form:

$$a_1(x)\\frac{dy}{dx} + a_0(x)y = f(x)$$

Where $y$ is the dependent variable as a function of the independent variable $x$, and $a_1(x)$, $a_0(x)$, and $f(x)$ are given functions of $x$. For the equation to be considered a first-order equation, the highest derivative of $y$ present must be the first derivative. The term "linear" signifies that the dependent variable $y$ and its derivative $\\frac{dy}{dx}$ appear to the first power and are not multiplied together or involved in non-linear functions like $\\sin(y)$ or $e^y$.

When $a_1(x) \\neq 0$, we can divide the entire equation by $a_1(x)$ to obtain the standard form:

$$\\frac{dy}{dx} + P(x)y = Q(x)$$

Here, $P(x) = \\frac{a_0(x)}{a_1(x)}$ and $Q(x) = \\frac{f(x)}{a_1(x)}$. This standard form is the foundation for almost all analytical techniques used to solve these equations.

## Key Terminology

To navigate the study of linear first-order equations, one must master several foundational terms:

| Term | Definition |
| :--- | :--- |
| Dependent Variable | The variable $y$, which is determined by the value of $x$. |
| Independent Variable | The variable $x$, which serves as the input to the functions. |
| Standard Form | The simplified equation $\\frac{dy}{dx} + P(x)y = Q(x)$. |
| Integrating Factor | A function $\\mu(x) = e^{\\int P(x)dx}$ used to transform the LHS into a derivative of a product. |
| Homogeneous Equation | A case where $Q(x) = 0$, leading to $\\frac{dy}{dx} + P(x)y = 0$. |
| Non-Homogeneous | A case where $Q(x) \\neq 0$, requiring a specific solution to account for the forcing function. |
| General Solution | A solution containing an arbitrary constant $C$ representing a family of curves. |

## Purpose

The primary purpose of studying linear first-order equations is to model dynamic systems where the rate of change of a quantity is proportional to the quantity itself, plus some external influence. These equations are ubiquitous in physics, biology, economics, and engineering.

By solving these equations, we can predict the future state of a system given its current state and a set of governing rules. For instance, in thermodynamics, Newton's Law of Cooling is a linear first-order equation. In electrical engineering, the behavior of an $RL$ circuit (a resistor and inductor in series) is governed by a linear first-order equation. By understanding these mathematical structures, we transition from observing phenomena to quantifying and controlling them.

## Fundamental Properties

Linear first-order equations possess a critical property known as the Principle of Superposition for the associated homogeneous equation. If $y_1$ and $y_2$ are solutions to the homogeneous equation $\\frac{dy}{dx} + P(x)y = 0$, then any linear combination $c_1y_1 + c_2y_2$ is also a solution.

Another essential property is the existence and uniqueness theorem. For the initial value problem defined by $\\frac{dy}{dx} + P(x)y = Q(x)$ with $y(x_0) = y_0$, if $P(x)$ and $Q(x)$ are continuous on an interval $I$ containing $x_0$, then there exists a unique solution $y(x)$ that satisfies the differential equation and the initial condition for all $x$ in $I$.

The solution to a non-homogeneous equation can be viewed as the sum of two parts: $y(x) = y_h(x) + y_p(x)$, where $y_h$ is the general solution to the homogeneous equation and $y_p$ is a particular solution to the non-homogeneous equation. This decomposition is a powerful conceptual tool that simplifies complex problems by breaking them into manageable components.

## Types & Variations

Linear first-order equations are categorized primarily by the behavior of the functions $P(x)$ and $Q(x)$.

### Constant Coefficient Equations
When $P(x) = k$ (a constant), the equation takes the form $\\frac{dy}{dx} + ky = Q(x)$. These appear frequently in problems involving exponential growth or decay.

### Variable Coefficient Equations
When $P(x)$ is a function of $x$, such as $x$ or $\\sin(x)$, the integrating factor becomes more complex, often involving transcendental functions. These are essential for modeling systems where the environment changes over time.

### The Homogeneous Case
When $Q(x) = 0$, the equation is separable. The solution is always of the form $y = Ce^{-\\int P(x)dx}$. This represents the "natural" behavior of a system without external input.

The following interactive graph demonstrates the behavior of the solution to $\\frac{dy}{dx} + ay = b$, where $a$ is the decay/growth constant and $b$ is the forcing term. Observe how varying $a$ changes the rate of convergence toward the steady state, while varying $b$ shifts the horizontal asymptote.

\`\`\`interactivegraph
e^{-ax} + b/a
params: a=1, b=1
range: a=0.5:5, b=-2:2
\`\`\`

## How to Solve

The standard algorithmic approach to solving $\\frac{dy}{dx} + P(x)y = Q(x)$ is the Method of Integrating Factors.

### Step 1: Standard Form
Ensure the equation is in the form $\\frac{dy}{dx} + P(x)y = Q(x)$. If the coefficient of $\\frac{dy}{dx}$ is not $1$, divide the entire equation by that coefficient.

### Step 2: Determine the Integrating Factor
Define the integrating factor $\\mu(x)$ as:
$$\\mu(x) = e^{\\int P(x)dx}$$
Note that we do not need an arbitrary constant of integration here; any choice of constant will cancel out later.

### Step 3: Multiply the Equation
Multiply every term of the standard form equation by $\\mu(x)$:
$$\\mu(x)\\frac{dy}{dx} + \\mu(x)P(x)y = \\mu(x)Q(x)$$
Due to the definition of $\\mu(x)$, the left-hand side is exactly the result of the product rule:
$$\\frac{d}{dx}[\\mu(x)y] = \\mu(x)Q(x)$$

### Step 4: Integrate
Integrate both sides with respect to $x$:
$$\\int \\frac{d}{dx}[\\mu(x)y]dx = \\int \\mu(x)Q(x)dx$$
$$\\mu(x)y = \\int \\mu(x)Q(x)dx + C$$

### Step 5: Solve for $y$
Divide by $\\mu(x)$ to isolate $y$:
$$y(x) = \\frac{1}{\\mu(x)} \\left( \\int \\mu(x)Q(x)dx + C \\right)$$

This analytical method guarantees a solution provided that the integral $\\int \\mu(x)Q(x)dx$ can be evaluated. In cases where the integral cannot be expressed in terms of elementary functions, numerical methods such as Runge-Kutta may be employed.

## Summary

Linear first-order equations serve as a bridge between simple calculus and advanced differential analysis. By ensuring an equation is in its standard form and applying an integrating factor, we can linearize the relationship between variables, allowing us to find exact solutions for a wide array of physical problems. 

The structure of the solution—consisting of a complementary homogeneous part and a particular non-homogeneous part—mirrors the behavior of physical systems that respond both to their internal nature and to external stimuli. Whether modeling the cooling of a metal plate or the charge in a capacitor, the systematic approach provided by the integrating factor method remains the primary tool in the mathematician's repertoire for addressing these fundamental equations. As we have seen, the linearity of these equations ensures that we can decompose problems and solve them reliably, providing a robust framework for predicting the evolution of linear dynamical systems in nearly every technical discipline.`;export{e as default};