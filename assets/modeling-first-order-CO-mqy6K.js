var e=`# Modeling with First-Order Equations

First-order ordinary differential equations (ODEs) serve as the mathematical foundation for describing how quantities change over time in response to their current state. By relating a function $y(t)$ to its derivative $\\frac{dy}{dt}$, we can construct rigorous frameworks to analyze systems ranging from radioactive decay to the fluid dynamics of a leaking tank.

## Definition

A first-order differential equation is an equation involving a function $y(t)$ and its first derivative $\\frac{dy}{dt}$. In its most general implicit form, it is expressed as:
$$F(t, y, y')=0$$
where $F$ is a function of three variables. For modeling purposes, we typically work with the explicit form:
$$\\frac{dy}{dt} = f(t, y)$$
A model is formulated when we define the specific function $f(t, y)$ based on physical, biological, or economic principles that govern a system. The goal of modeling is to identify the unique solution $y(t)$ that satisfies both the differential equation and an initial condition $y(t_0)=y_0$, forming what is known as an Initial Value Problem (IVP).

## Key Terminology

To navigate the study of first-order modeling, one must understand several technical concepts:

| Term | Definition |
|:---|:---|
| Independent Variable | Usually denoted as $t$, representing the domain, often time. |
| Dependent Variable | Denoted as $y$, the state variable representing the quantity being modeled. |
| Initial Condition | A specific value $y(t_0)=y_0$ required to select a unique solution from a general family of functions. |
| Autonomous Equation | A differential equation where $f(y)$ does not explicitly depend on $t$, such as $\\frac{dy}{dt} = ky$. |
| Equilibrium Solution | Constant values of $y$ where $\\frac{dy}{dt} = 0$, representing steady-state conditions. |
| Direction Field | A graphical representation of the slope $\\frac{dy}{dt}$ at various points $(t, y)$ in the plane. |

## Purpose

The primary purpose of modeling with first-order equations is to translate observed natural laws into mathematical expressions that allow for prediction and retrospective analysis. Unlike static algebraic equations, differential equations capture the "rate of change." This is essential for:

1. **Prediction:** Calculating the state of a system at any future time $t$ given its current state.
2. **Stability Analysis:** Determining if a system will converge to an equilibrium or diverge toward infinity.
3. **Parameter Estimation:** Using observed data to work backward and determine constants (like growth rates or cooling coefficients) that characterize a specific system.
4. **Optimization:** Identifying the time at which a system reaches a maximum or minimum value.

## Fundamental Properties

First-order models rely on the principle that the rate of change of a variable is often proportional to the variable itself or a function of its current state. 

### Linearity
A first-order equation is linear if it can be written in the form:
$$\\frac{dy}{dt} + p(t)y = g(t)$$
This is a critical classification because linear equations possess a general closed-form solution via the integrating factor method. Nonlinear models, such as the logistic growth model $\\frac{dy}{dt} = ry(1 - y/K)$, are often more realistic in biological contexts but are frequently analytically intractable, requiring numerical methods or qualitative analysis.

### The Role of Initial Conditions
Because integration involves an arbitrary constant $C$, the general solution to $\\frac{dy}{dt} = f(t, y)$ is a family of curves. Modeling requires the selection of exactly one curve from this family. The Picard-Lindelöf theorem provides the theoretical guarantee that if $f$ and $\\frac{\\partial f}{\\partial y}$ are continuous in a region, a unique solution exists for a given initial condition.

## Types & Variations

Modeling encompasses several classic archetypes based on the functional form of the rate of change.

### Exponential Growth and Decay
The simplest model is $\\frac{dy}{dt} = ky$. When $k>0$, the system experiences exponential growth (e.g., bacteria populations without resource constraints). When $k<0$, it experiences exponential decay (e.g., radioactive substances or cooling objects described by Newton's Law of Cooling).

### Logistic Growth
In real-world environments, growth is constrained by a carrying capacity $K$. The model adjusts the growth rate as the population approaches this limit:
$$\\frac{dy}{dt} = ry\\left(1 - \\frac{y}{K}\\right)$$
This nonlinear model shows how population growth slows as $y$ nears $K$.

### Mixing Problems
In chemical modeling, we track the amount of a solute in a tank. If $Q(t)$ is the amount of salt:
$$\\frac{dQ}{dt} = (\\text{rate in}) - (\\text{rate out})$$
This results in a linear first-order equation where the rate out is proportional to the concentration $\\frac{Q(t)}{V(t)}$.

To visualize the behavior of the simplest growth model, consider the function $y(t) = y_0 e^{kt}$. The graph below demonstrates how the growth constant $k$ shifts the behavior of the function.

\`\`\`interactivegraph
y_0 * exp(k * x)
params: y_0=1, k=0.5
range: y_0=0.1:2, k=-2:2
\`\`\`

The interactive graph above plots $y(t) = y_0 e^{kt}$. The user can observe how $k > 0$ leads to rapid divergence, $k < 0$ leads to asymptotic decay toward zero, and $y_0$ determines the starting scale.

## How to Solve

Solving a first-order model generally follows a systematic procedure depending on the type of equation identified.

### 1. Separation of Variables
If the equation is of the form $\\frac{dy}{dt} = g(t)h(y)$, we can rearrange and integrate:
$$\\int \\frac{1}{h(y)} dy = \\int g(t) dt$$
This is the standard approach for autonomous equations.

### 2. Integrating Factors
For linear equations $\\frac{dy}{dt} + p(t)y = g(t)$, we define an integrating factor:
$$\\mu(t) = e^{\\int p(t) dt}$$
Multiplying the entire equation by $\\mu(t)$ transforms the left side into the derivative of a product:
$$\\frac{d}{dt}[\\mu(t)y] = \\mu(t)g(t)$$
Integration then yields the explicit solution for $y(t)$.

### 3. Qualitative Analysis
When a solution cannot be found algebraically, we use direction fields. By plotting small line segments with slope $f(t, y)$ at every point in a grid, we visualize the "flow" of solutions without needing the analytical expression.

Consider the slope field for $\\frac{dy}{dt} = t - y$. The graph below plots the resulting trajectories that satisfy different initial conditions, showing how they eventually converge toward the line $y = t - 1$.

\`\`\`graph
t - y
\`\`\`

(Note: In the plot above, $x$ represents $t$ and the system naturally tends toward the attractor defined by $y=x-1$).

## Summary

Modeling with first-order equations is a bridge between the physical world and abstract mathematics. By identifying the variables, establishing the rate of change, and applying techniques such as separation of variables or integrating factors, we can derive predictive models for complex dynamic systems. Whether dealing with the simple decay of radioactive isotopes or the constrained growth of biological populations, the methodology remains centered on the interplay between the derivative, the state variable, and the specific initial state of the system. Understanding these models provides the ability to quantify change in any system where the instantaneous rate is known.`;export{e as default};