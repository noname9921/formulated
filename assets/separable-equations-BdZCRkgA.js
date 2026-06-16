var e=`# Separable Differential Equations

## Definition

A separable differential equation is a first-order ordinary differential equation (ODE) of the form:

$$\\frac{dy}{dx} = f(x)g(y)$$

where the derivative of a function $y$ with respect to $x$ is expressed as a product of two distinct functions: one depending solely on the independent variable $x$ and the other depending solely on the dependent variable $y$. The term "separable" refers to the ability to algebraically manipulate the equation to isolate all $y$-terms on one side of the equality and all $x$-terms on the other, typically by dividing by $g(y)$ (assuming $g(y) \\neq 0$) and multiplying by $dx$.

Formally, a differential equation $\\frac{dy}{dx} = F(x, y)$ is separable if and only if there exist functions $f(x)$ and $g(y)$ such that $F(x, y) = f(x)g(y)$. This structural property allows for the transformation of the ODE into an integral equation, enabling a solution path through direct integration.

## Key Terminology

To understand separable equations, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| First-Order | An ODE where the highest derivative present is the first derivative, $\\frac{dy}{dx}$. |
| Ordinary Differential Equation | An equation involving a function of one independent variable and its derivatives. |
| General Solution | A family of functions $y(x, C)$ that satisfies the ODE, containing an arbitrary constant $C$. |
| Particular Solution | A specific solution derived from the general solution by applying initial conditions. |
| Initial Value Problem | An ODE combined with a specified condition $y(x_0) = y_0$. |
| Singular Solution | A solution that cannot be obtained from the general solution by assigning a value to $C$. |
| Equilibrium Solution | Constant solutions of the form $y(x) = c$ such that $g(c) = 0$. |

## Purpose

The primary utility of separable differential equations lies in their accessibility; they represent one of the few classes of nonlinear differential equations that can be solved analytically using elementary calculus. By reducing a dynamic relationship between variables to two independent integration problems, scientists and engineers can model complex phenomena including population growth, radioactive decay, chemical reaction rates, and heat dissipation.

The purpose is to transform a local statement about rates of change (the derivative) into a global statement about the state of a system (the function $y(x)$). This is fundamental in physical sciences where laws are often expressed as rates (e.g., Newton's Law of Cooling, where the rate of temperature change is proportional to the difference between the object's temperature and the ambient temperature).

## Fundamental Properties

Separable equations rely on the fundamental theorem of calculus and the chain rule. The method of separation of variables assumes that we can write:

$$\\frac{1}{g(y)} dy = f(x) dx$$

By integrating both sides, we obtain:

$$\\int \\frac{1}{g(y)} dy = \\int f(x) dx + C$$

This property holds because the differential operator $dy$ and $dx$ can be treated as separable components under the Leibniz notation. While formalizing this as a rigorous manipulation of infinitesimals requires the change of variables formula, the algebraic convenience remains the hallmark of the method.

A critical property involves "lost solutions." When dividing by $g(y)$, one must check for values of $y$ such that $g(y) = 0$. These values result in constant equilibrium solutions that are often missed if the reader focuses only on the integration steps. These equilibrium points represent steady states where the rate of change is zero, meaning the system has reached a configuration that does not evolve over time.

## Types & Variations

Separable equations can be classified based on the nature of $f(x)$ and $g(y)$:

1. **Linear Separable Equations:** Where $g(y)$ is a linear function, such as $g(y) = ay + b$. These commonly appear in growth and decay models.
2. **Autonomous Equations:** Equations where $f(x) = 1$, so $\\frac{dy}{dx} = g(y)$. In these systems, the rate of change depends only on the current state, not on the time variable $x$. These are essential for studying phase lines and stability.
3. **Non-separable Equations disguised as separable:** Some equations can be transformed into separable form via substitution. For example, a homogeneous equation $\\frac{dy}{dx} = F(\\frac{y}{x})$ can be converted by the substitution $v = \\frac{y}{x}$.

Consider the autonomous equation $\\frac{dy}{dx} = y(1-y)$, which models logistic population growth. Here, $g(y) = y(1-y)$ and $f(x) = 1$. The equilibrium points occur at $y=0$ and $y=1$. The following graph shows the behavior of various solutions to this logistic equation for different starting values.

\`\`\`graph
y(1-y)
\`\`\`

The graph above demonstrates the slope field characteristics for the logistic growth model. You can observe the horizontal asymptotes at $y=0$ and $y=1$, representing the stable and unstable equilibria of the system.

## How to Solve

Solving a separable differential equation involves a rigorous five-step procedure:

1. **Rearrangement:** Identify the equation as separable. Rewrite the equation $\\frac{dy}{dx} = F(x,y)$ into the form $h(y)dy = k(x)dx$. If the original equation is $\\frac{dy}{dx} = f(x)g(y)$, rewrite it as $\\frac{1}{g(y)}dy = f(x)dx$.
2. **Integration:** Integrate both sides independently:
   $$\\int \\frac{1}{g(y)} dy = \\int f(x) dx$$
3. **Evaluation:** Compute the integrals. This will result in an implicit solution of the form $H(y) = K(x) + C$.
4. **Isolation (if possible):** Attempt to solve for $y$ explicitly to get $y = \\phi(x, C)$. If the algebra is too complex, the implicit form is considered an acceptable final answer.
5. **Initial Conditions:** If an initial value $y(x_0) = y_0$ is provided, substitute these values into the general solution to determine the specific constant $C$. Always verify if the constant solution $g(y) = 0$ is a valid solution that was overlooked.

**Example Case:** Solve $\\frac{dy}{dx} = xy^2$ with $y(0) = 1$.
- Step 1: Separate the variables: $\\frac{1}{y^2} dy = x dx$.
- Step 2: Integrate: $\\int y^{-2} dy = \\int x dx$.
- Step 3: Evaluate: $-y^{-1} = \\frac{1}{2}x^2 + C$.
- Step 4: Apply $y(0) = 1$: $-1^{-1} = 0 + C$, so $C = -1$.
- Step 5: Solve for $y$: $-\\frac{1}{y} = \\frac{1}{2}x^2 - 1 \\implies \\frac{1}{y} = 1 - \\frac{1}{2}x^2 \\implies y = \\frac{1}{1 - 0.5x^2} = \\frac{2}{2-x^2}$.

This methodology allows us to explore how changing the parameters of the growth rate affects the function. Use the interactive graph below to visualize how changing the initial constant $C$ (represented here by shifting the vertical position of the family of curves) affects the resulting behavior of the function $y = \\frac{2}{2-x^2} + C$.

\`\`\`interactivegraph
2/(2-x^2) + C
params: C=0
range: C=-5:5
\`\`\`

The interactive graph allows for the manipulation of the parameter $C$. Observe how the vertical shift changes the domain where the function is defined, reflecting how initial conditions dictate the long-term behavior and existence of a solution in separable systems.

## Summary

Separable differential equations form the cornerstone of analytic differential equation theory. Their primary strength is the decomposition of multivariate dependencies into univariate integration tasks, providing a tractable path to finding both general and particular solutions. 

Key takeaways include:
- The necessity of confirming separability by verifying the existence of $f(x)$ and $g(y)$.
- The importance of identifying singular (equilibrium) solutions by solving $g(y) = 0$, as these are often ignored during the algebraic division process.
- The distinction between implicit and explicit solutions, and the recognition that many valid solutions cannot be expressed in closed-form explicit functions of $x$.
- The requirement to handle constants of integration appropriately when initial conditions are specified.

By mastering the separation of variables, one gains the ability to analyze a vast array of dynamical systems, providing a window into the evolution of variables over time. Whether dealing with autonomous systems or more complex time-dependent growth models, the technique remains a vital tool for any practitioner of applied mathematics or engineering. Future studies in this field typically progress toward non-separable equations, which often require numerical methods or power series expansions, emphasizing why the separable case is so highly valued for its elegant and exact analytical results.`;export{e as default};