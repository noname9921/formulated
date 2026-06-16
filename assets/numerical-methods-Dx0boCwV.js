var e=`# Numerical Methods: Euler and Runge-Kutta (RK4) Methods

## Definition

Numerical methods are sophisticated algorithmic techniques utilized to solve mathematical problems that are either impossible or computationally expensive to solve using analytical (exact) methods. In the context of ordinary differential equations (ODEs), these methods provide approximate solutions to initial value problems (IVPs) defined by:

$$\\frac{dy}{dt} = f(t,y), \\quad y(t_0) = y_0$$

The Euler method is the simplest first-order numerical procedure for solving such equations by performing a linear extrapolation based on the slope at the current point. In contrast, the Runge-Kutta method of the fourth order (RK4) is a higher-order iterative technique that samples the slope at multiple points within a time interval to produce a highly accurate estimation of the solution curve. While Euler's method provides a foundational understanding of discretization, RK4 is the industry standard for general-purpose scientific computing due to its balance between computational cost and numerical stability.

## Key Terminology

To understand these numerical schemes, one must define the variables and concepts that govern their execution:

1. **Step Size ($h$):** The incremental value in the independent variable $t$ ($h = \\Delta t$). A smaller $h$ generally reduces discretization error but increases computation time and potential round-off error.
2. **Initial Condition ($y_0$):** The known state of the system at time $t_0$, which serves as the starting point for iterative progression.
3. **Truncation Error:** The error resulting from approximating a mathematical process. Local truncation error represents the error introduced in a single step, while global truncation error is the cumulative error over the entire interval.
4. **Order of Accuracy:** An indicator of how quickly the error decreases as the step size $h$ approaches zero. Euler's method is $O(h)$, while RK4 is $O(h^4)$.
5. **Slope Function ($f(t,y)$):** The derivative or rate of change function that defines the system's behavior at any coordinate $(t,y)$.
6. **Iteration:** The process of using the result of the previous step ($y_n$) to calculate the next state ($y_{n+1}$).

## Purpose

The primary purpose of numerical integration methods like Euler and RK4 is to model dynamic systems where a closed-form solution (an algebraic formula) is unavailable. In fields such as aerospace engineering, molecular dynamics, and financial modeling, systems are frequently governed by nonlinear differential equations that do not yield to standard calculus techniques.

Euler's method is primarily pedagogical; it serves as a clear entry point into the mechanics of discretization, demonstrating how a differential equation can be transformed into a sequence of algebraic steps. However, its low accuracy makes it unsuitable for complex, long-term simulations. RK4, conversely, is engineered to handle "stiff" or rapidly changing functions. Its purpose is to minimize the "drift" that occurs when moving along a curved trajectory using only straight-line linear approximations. By averaging the slopes at the start, midpoint, and end of an interval, RK4 maintains high precision, allowing scientists to simulate systems over vast time horizons with minimal accumulated error.

## Fundamental Properties

The difference between Euler and RK4 stems from their mathematical derivation, specifically the number of terms retained in the Taylor series expansion of the solution $y(t+h)$.

### Euler's Method
Euler's method is derived directly from the definition of the derivative. Given $y'(t) = f(t,y)$, we approximate the function over a small interval $h$:
$$y_{n+1} = y_n + h \\cdot f(t_n, y_n)$$
This is a first-order method. Its global error is $O(h)$, meaning that halving the step size roughly halves the error. Geometrically, it represents following the tangent line of the solution curve. Because it ignores higher-order derivatives (curvature), it tends to deviate significantly from the true solution if the function is not linear.

### Runge-Kutta (RK4) Method
RK4 is an iterative "predictor-corrector" type approach. It uses four distinct estimations of the slope ($k_1$ through $k_4$) to calculate a weighted average of the derivative across the interval $[t_n, t_{n+1}]$:
1. $k_1 = f(t_n, y_n)$
2. $k_2 = f(t_n + \\frac{h}{2}, y_n + h \\frac{k_1}{2})$
3. $k_3 = f(t_n + \\frac{h}{2}, y_n + h \\frac{k_2}{2})$
4. $k_4 = f(t_n + h, y_n + h \\cdot k_3)$

The final update is given by:
$$y_{n+1} = y_n + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$
By incorporating the slopes at the midpoints, RK4 effectively cancels out error terms up to the fourth order of $h$, resulting in a global error of $O(h^4)$.

| Property | Euler Method | RK4 Method |
| :--- | :--- | :--- |
| Computational Effort | Very Low | Moderate |
| Accuracy (Global Error) | $O(h)$ | $O(h^4)$ |
| Stability | Poor | Good |
| Implementation Difficulty | Trivial | Moderate |
| Best Usage | Education | General Simulation |

## Types & Variations

Numerical methods are not limited to these two. Variants exist to cater to specific computational needs:

1. **Implicit Methods (e.g., Backward Euler):** Unlike the explicit Euler method, these require solving an algebraic equation at each step. They are significantly more stable for "stiff" equations where $f(t,y)$ changes rapidly.
2. **Predictor-Corrector Methods (e.g., Adams-Bashforth-Moulton):** These use an explicit method to "predict" the next value and an implicit method to "correct" it, often achieving high accuracy with fewer function evaluations than RK4.
3. **Adaptive Step Size Methods (e.g., RK45 / Dormand-Prince):** These modify the step size $h$ dynamically. If the local error estimate is high, the algorithm shrinks $h$; if the solution is stable, it increases $h$ to save time. This is the logic underlying modern solvers like \`ode45\` in MATLAB or \`scipy.integrate.solve_ivp\` in Python.
4. **Symplectic Integrators:** Used specifically in Hamiltonian mechanics, these ensure that the energy of a simulated physical system is conserved, which RK4 does not guarantee.

## How to Solve

To apply these methods to a problem, follow a structured algorithmic approach. Suppose we wish to approximate the solution to $y' = -2y$ with $y(0) = 1$ over the interval $[0, 1]$ with $h = 0.5$.

### Applying Euler's Method
1. **Initial State:** $t_0 = 0, y_0 = 1$.
2. **Step 1:** $t_1 = 0.5$. $y_1 = y_0 + h \\cdot f(t_0, y_0) = 1 + 0.5(-2 \\cdot 1) = 0$.
3. **Step 2:** $t_2 = 1.0$. $y_2 = y_1 + h \\cdot f(t_1, y_1) = 0 + 0.5(-2 \\cdot 0) = 0$.
The result at $t=1$ is 0. Note the exact solution is $y(t) = e^{-2t}$, so $y(1) \\approx 0.135$. The error is large due to the large step size.

### Applying RK4
1. **$k_1$:** $f(0, 1) = -2(1) = -2$.
2. **$k_2$:** $f(0 + 0.25, 1 + 0.5(-1)) = f(0.25, 0.5) = -2(0.5) = -1$.
3. **$k_3$:** $f(0.25, 1 + 0.5(-0.5)) = f(0.25, 0.75) = -2(0.75) = -1.5$.
4. **$k_4$:** $f(0.5, 1 + 0.5(-1.5)) = f(0.5, 0.25) = -2(0.25) = -0.5$.
5. **Weighted average:** $\\frac{0.5}{6}(-2 + 2(-1) + 2(-1.5) - 0.5) = \\frac{0.5}{6}(-7.5) = -0.625$.
6. **Result:** $y_1 = 1 - 0.625 = 0.375$.
Comparing $0.375$ to the exact $0.135$ shows that even with a large step, RK4 is significantly closer to the true value than Euler's method.

The interactive graph below allows for the exploration of how step size $h$ impacts the approximation of an exponential decay function.

\`\`\`interactivegraph
y_0 + (x * -2 * y_0)
params: y_0=1
range: y_0=0.1:2
\`\`\`

The graph above plots the linear extrapolation behavior of a single-step Euler approximation for the differential equation $y' = -2y$. As the parameter $y_0$ varies, the slope of the tangent line changes, illustrating how Euler's method overshoots or undershoots the true exponential curve.

## Summary

The Euler and Runge-Kutta methods form the backbone of modern numerical analysis. While Euler's method offers a direct, first-order approximation that is mathematically intuitive, it is insufficient for rigorous scientific inquiry due to its high accumulation of global error. The fourth-order Runge-Kutta method overcomes these limitations by sampling the derivative at critical points within each time step, providing an $O(h^4)$ accuracy profile that balances computational efficiency with precision. 

In practice, the choice between these methods depends on the complexity of the system being modeled and the required tolerance for error. For simple educational purposes or coarse prototyping, Euler's method suffices. However, for real-world engineering simulations, high-order methods or their adaptive variations are essential to capture the dynamics of complex, time-evolving systems accurately. Understanding these methods is the first step toward mastering computational physics and numerical simulation.`;export{e as default};