var e=`# Linear First-Order Equations

## Definition

A linear first-order ordinary differential equation is a differential equation that can be expressed in the form:

$$a_1(x)\\frac{dy}{dx} + a_0(x)y = f(x)$$

Where $y$ is the dependent variable, $x$ is the independent variable, and $a_1(x)$, $a_0(x)$, and $f(x)$ are continuous functions of $x$ over a given interval. In most standard applications, we assume $a_1(x) \\neq 0$ and divide throughout by this coefficient to obtain the standard form:

$$\\frac{dy}{dx} + P(x)y = Q(x)$$

Here, $P(x) = \\frac{a_0(x)}{a_1(x)}$ and $Q(x) = \\frac{f(x)}{a_1(x)}$. The term "linear" signifies that the dependent variable $y$ and its derivative $\\frac{dy}{dx}$ appear only to the first power and are not multiplied together, nor are they part of any non-linear function such as $\\sin(y)$ or $e^y$. The term "first-order" indicates that the highest derivative present in the equation is the first derivative, $\\frac{dy}{dx}$.

## Key Terminology

To analyze linear first-order equations effectively, one must be familiar with several specific terms that define the structure and behavior of the solutions:

| Term | Definition |
| :--- | :--- |
| Dependent Variable | The variable $y$, which changes as a function of $x$. |
| Independent Variable | The variable $x$, which acts as the input for the functions. |
| Integrating Factor | A function $\\mu(x)$ used to transform the equation into an exact derivative. |
| Homogeneous Equation | An equation where $Q(x) = 0$, resulting in a separable structure. |
| Non-homogeneous Equation | An equation where $Q(x) \\neq 0$, requiring a particular solution. |
| General Solution | A solution that includes an arbitrary constant $C$ representing all possible solutions. |
| Particular Solution | A solution obtained when a specific initial condition is applied. |
| Initial Condition | A constraint $y(x_0) = y_0$ that allows for the determination of the constant $C$. |

## Purpose

The primary purpose of studying linear first-order equations is to model dynamic systems where the rate of change of a quantity is proportional to the current value of that quantity plus some external driving force. These equations are ubiquitous in physics, engineering, chemistry, and economics. For example, the rate of change of a population, the temperature of an object cooling in a medium, the voltage across a capacitor in an RC circuit, and the accumulation of radioactive isotopes are all governed by these equations. By mastering this form, one gains the ability to predict the future state of a system given its current state and its external influences.

## Fundamental Properties

Linear first-order equations possess a critical property known as the Principle of Superposition for the associated homogeneous equation. If $y_1$ and $y_2$ are solutions to $\\frac{dy}{dx} + P(x)y = 0$, then any linear combination $c_1y_1 + c_2y_2$ is also a solution. This linearity allows for the decomposition of complex problems into simpler components.

Another fundamental property is the existence and uniqueness theorem. For the equation $\\frac{dy}{dx} + P(x)y = Q(x)$, if $P(x)$ and $Q(x)$ are continuous on an open interval $I$ containing $x_0$, then for any initial value $y_0$, there exists a unique solution $y(x)$ defined on the entire interval $I$ that satisfies the initial condition $y(x_0) = y_0$. This guarantees that if we find a solution through algebraic methods, it is indeed the definitive answer for the system.

## Types & Variations

Linear first-order equations can be categorized based on the behavior of $P(x)$ and $Q(x)$. 

1. **Homogeneous Linear Equations**: When $Q(x) = 0$, the equation is $\\frac{dy}{dx} + P(x)y = 0$. This is a separable equation, which can be solved via direct integration. The solution is always of the form $y(x) = Ce^{-\\int P(x)dx}$.
2. **Non-homogeneous Linear Equations**: When $Q(x) \\neq 0$, the equation requires more sophisticated handling, specifically the use of an integrating factor. 
3. **Autonomous Equations**: These are a special case where $P(x)$ and $Q(x)$ are constants. They are time-invariant, meaning the rate of change depends only on the current value of $y$, not explicitly on $x$. 

The behavior of these equations under parameter variation can be explored using an interactive graph. In the system $\\frac{dy}{dx} = -ay + b$, the equilibrium solution is $y = \\frac{b}{a}$. Adjusting $a$ changes the rate at which the system approaches equilibrium, while $b$ shifts the equilibrium position itself.

\`\`\`interactivegraph
-a*x + b
params: a=1, b=1
range: a=-2:2, b=-2:2
\`\`\`

The graph above plots the derivative function $f(x) = -ax + b$ (representative of a autonomous linear ODE structure), illustrating how parameters $a$ and $b$ shift the slope of the rate-of-change field.

## How to Solve

The standard algorithm for solving a linear first-order equation $\\frac{dy}{dx} + P(x)y = Q(x)$ is the Method of Integrating Factors.

### Step 1: Standard Form
Ensure the equation is in the form $\\frac{dy}{dx} + P(x)y = Q(x)$. If the coefficient of $\\frac{dy}{dx}$ is not 1, divide the entire equation by the coefficient.

### Step 2: Determine the Integrating Factor
Find a function $\\mu(x)$ such that multiplying the entire differential equation by $\\mu(x)$ transforms the left side into the derivative of a product. The integrating factor is defined as:

$$\\mu(x) = e^{\\int P(x)dx}$$

### Step 3: Multiplication
Multiply both sides of the standard form equation by $\\mu(x)$:

$$\\mu(x)\\frac{dy}{dx} + \\mu(x)P(x)y = \\mu(x)Q(x)$$

By the product rule, the left-hand side is exactly $\\frac{d}{dx}[\\mu(x)y]$ because $\\mu'(x) = \\mu(x)P(x)$ by construction. Thus:

$$\\frac{d}{dx}[\\mu(x)y] = \\mu(x)Q(x)$$

### Step 4: Integration
Integrate both sides with respect to $x$:

$$\\int \\frac{d}{dx}[\\mu(x)y]dx = \\int \\mu(x)Q(x)dx$$

$$\\mu(x)y = \\int \\mu(x)Q(x)dx + C$$

### Step 5: Solve for $y$
Divide by $\\mu(x)$ to isolate $y$:

$$y(x) = \\frac{1}{\\mu(x)} \\left( \\int \\mu(x)Q(x)dx + C \\right)$$

This provides the general solution. If an initial condition is provided, substitute $x_0$ and $y_0$ to solve for $C$.

### Example Application
Consider the equation $\\frac{dy}{dx} + 2xy = x$. 
Here, $P(x) = 2x$ and $Q(x) = x$.
1. $\\mu(x) = e^{\\int 2xdx} = e^{x^2}$.
2. Multiply by $\\mu(x)$: $e^{x^2}\\frac{dy}{dx} + 2xe^{x^2}y = xe^{x^2}$.
3. Rewrite as derivative: $\\frac{d}{dx}[e^{x^2}y] = xe^{x^2}$.
4. Integrate: $e^{x^2}y = \\int xe^{x^2}dx = \\frac{1}{2}e^{x^2} + C$.
5. Solve for $y$: $y = \\frac{1}{2} + Ce^{-x^2}$.

This solution shows that all paths eventually decay toward the constant value of $0.5$ as $x \\to \\infty$.

## Summary

Linear first-order differential equations represent a foundational pillar in the study of calculus and analysis. They provide a structured framework for modeling real-world phenomena characterized by proportional change and external forcing. The method of integrating factors offers a robust, algorithmic approach to finding exact solutions for these systems. Whether dealing with autonomous systems or equations with variable coefficients, the core principles of linearity, the existence of an integrating factor, and the significance of initial conditions allow for the precise prediction of system evolution. Understanding these equations is essential for anyone progressing into higher-level engineering, physics, or mathematical modeling, as they are the simplest, yet most frequent, point of departure for solving complex dynamic problems. By identifying the form, calculating the appropriate integrating factor, and performing systematic integration, one can transform an abstract differential relationship into a functional solution that describes the state of a system at any given time.`;export{e as default};