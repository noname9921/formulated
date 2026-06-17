var e=`# Separable Differential Equations

A separable differential equation represents a foundational class of first-order ordinary differential equations (ODEs). These equations are defined by the ability to algebraically isolate the independent variable and its differential from the dependent variable and its differential. This structural elegance allows for the transformation of a calculus problem into an integration problem, providing a clear pathway to finding an explicit or implicit solution.

## Definition

A first-order differential equation is considered separable if it can be written in the form:

$$\\frac{dy}{dx} = g(x)h(y)$$

where $g(x)$ is a function of the independent variable $x$ and $h(y)$ is a function of the dependent variable $y$. When $h(y) \\neq 0$, we can rearrange the equation to group all terms containing $y$ on one side and all terms containing $x$ on the other:

$$\\frac{1}{h(y)} dy = g(x) dx$$

If a differential equation can be manipulated into this form, the variables are said to be "separated." The solution is then obtained by integrating both sides:

$$\\int \\frac{1}{h(y)} dy = \\int g(x) dx + C$$

where $C$ is the constant of integration. This process transforms the problem from a differential relationship into an algebraic or functional relationship between $x$ and $y$.

## Key Terminology

To understand separable equations, one must be familiar with several core mathematical concepts:

| Term | Definition |
| :--- | :--- |
| Dependent Variable | The variable $y$, which changes as a function of $x$. |
| Independent Variable | The variable $x$, which serves as the input. |
| First-Order ODE | An equation involving only the first derivative $y'$. |
| Equilibrium Solution | A constant solution $y(x) = k$ where $h(k) = 0$. |
| General Solution | A family of solutions containing an arbitrary constant $C$. |
| Particular Solution | A specific solution satisfying an initial condition $y(x_0) = y_0$. |

## Purpose

The primary utility of separable differential equations lies in their solvability. While many differential equations are non-linear or complex enough to lack closed-form analytical solutions, the separable class provides a robust framework for modeling physical phenomena. By reducing the complexity of a differential equation to two independent integrals, we gain the ability to predict the evolution of dynamic systems over time.

This method is frequently employed in physics and biology to model:
1. Radioactive decay and population growth (exponential models).
2. Chemical reaction rates where concentrations change over time.
3. Fluid dynamics and heat transfer scenarios where thermal equilibrium is approached.
4. Classical mechanics involving motion with velocity-dependent air resistance.

## Fundamental Properties

Separable differential equations exhibit several critical mathematical properties that define their behavior and the nature of their solutions.

### Existence and Uniqueness
According to the Picard-Lindelöf theorem, if $g(x)$ and $h(y)$ are continuous functions, then for any initial condition $y(x_0) = y_0$, there exists a unique solution in some interval containing $x_0$. If $h(y_0) = 0$, the function $y(x) = y_0$ is a constant equilibrium solution.

### Equilibrium Solutions
If the equation takes the form $\\frac{dy}{dx} = g(x)h(y)$, any value $c$ such that $h(c) = 0$ provides a solution $y(x) = c$. These solutions are often ignored during the algebraic process of division (because one cannot divide by zero), but they are vital to understanding the full behavior of the system, particularly in long-term stability analysis.

### Integration Constants
Because the method requires integrating both sides, we encounter the constant $C$. This constant represents the "memory" of the system—it is determined by initial conditions. If we have $y(x_0) = y_0$, we substitute these values into the integrated form to find the specific value of $C$, yielding the particular solution.

## Types & Variations

Separable equations can be classified by the nature of the functions $g(x)$ and $h(y)$.

1. **Linear Separable:** Equations where $h(y)$ is a linear function of $y$, such as $\\frac{dy}{dx} = ky$. This leads to exponential growth or decay.
2. **Non-linear Separable:** Equations where $h(y)$ involves powers or transcendental functions, such as $\\frac{dy}{dx} = x\\sqrt{y}$ or $\\frac{dy}{dx} = \\cos(x)e^y$.
3. **Autonomous Equations:** A subset of separable equations where $g(x) = 1$. The rate of change depends only on the current state of $y$, not the independent variable $x$. These are essential for analyzing steady states.

The following interactive graph explores the family of solutions for an autonomous separable equation $\\frac{dy}{dx} = a(y - b)$. This represents linear growth or decay towards a threshold.

\`\`\`interactivegraph
a * (x - b)
params: a=1, b=0
range: a=-2:2, b=-2:2
\`\`\`

In the graph above, observe how the slope changes based on the parameter $a$. When $a > 0$, the function reflects growth; when $a < 0$, it reflects decay. The parameter $b$ acts as a horizontal shift or equilibrium point.

## How to Solve

Solving a separable differential equation requires a systematic approach. Follow these steps to reach an accurate solution.

### Step 1: Identify Separability
Ensure the equation can be written as $\\frac{dy}{dx} = g(x)h(y)$. If there is an additive term that cannot be factored (e.g., $\\frac{dy}{dx} = x + y$), the equation is not separable using this method.

### Step 2: Separate Variables
Move all terms involving $y$ to the left and all terms involving $x$ to the right. Include the differentials $dy$ and $dx$.
$$\\int \\frac{dy}{h(y)} = \\int g(x) dx$$

### Step 3: Integrate
Evaluate both integrals independently. If a definite integral is not provided, include the constant of integration $C$ on the side of the independent variable $x$.

### Step 4: Solve for $y$ (if possible)
Often, the integration results in an implicit equation (e.g., $y^2 + \\sin(y) = x^2 + C$). Attempt to isolate $y$ to obtain an explicit solution $y = f(x)$. If the algebra is too complex, the implicit solution is an acceptable answer.

### Step 5: Check Equilibrium Solutions
Ensure that any solutions discarded during the division step (where $h(y) = 0$) are not valid solutions for the specific boundary conditions given.

### Illustrative Example
Consider the equation $\\frac{dy}{dx} = 2xy$.
1. Separate: $\\frac{1}{y} dy = 2x dx$.
2. Integrate: $\\int \\frac{1}{y} dy = \\int 2x dx$.
3. Result: $\\ln|y| = x^2 + C$.
4. Exponentiate: $e^{\\ln|y|} = e^{x^2 + C} \\implies |y| = e^C e^{x^2}$.
5. Simplify: $y = Ae^{x^2}$, where $A = \\pm e^C$.

The graph below displays the family of functions $y = Ae^{x^2}$ for different values of $A$. This demonstrates how a single differential equation can yield a wide variety of curves depending on the initial conditions of the system.

\`\`\`graph
1 * \\exp(x^2)
0.5 * \\exp(x^2)
-0.5 * \\exp(x^2)
-1 * \\exp(x^2)
\`\`\`

## Summary

Separable differential equations provide a primary tool in the analyst's toolkit for solving dynamical systems. By exploiting the ability to decompose a derivative into functions of independent variables, we turn the daunting task of solving an equation into the manageable task of performing symbolic integration.

Key takeaways:
* The core process is the separation of differentials followed by integration on both sides.
* Equilibrium solutions occur where $h(y) = 0$ and should always be checked.
* Implicit solutions are common, and in many practical applications, they provide sufficient information about the system's behavior without requiring an explicit $y = f(x)$ form.
* The constant of integration $C$ is essential for defining the specific trajectory of a system given an initial starting state.

Mastery of this technique is essential for students of engineering, physics, and applied mathematics, as it serves as the foundation for more advanced techniques like integrating factors, exact equations, and numerical approximations used in computational science.`;export{e as default};