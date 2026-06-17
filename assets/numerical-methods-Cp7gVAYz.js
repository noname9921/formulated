var e=`# Numerical Methods: Euler and Runge-Kutta (RK4) Methods

Numerical analysis serves as the backbone of computational science, providing the tools necessary to solve differential equations that lack closed-form analytical solutions. When we encounter an Ordinary Differential Equation (ODE) of the form $\\frac{dy}{dt}=f(t,y)$ with an initial condition $y(t_0)=y_0$, we often rely on discretization techniques to approximate the solution path. Among these techniques, the Euler method represents the simplest approach, while the fourth-order Runge-Kutta (RK4) method stands as the industry standard for precision and reliability.

## Definition

The Euler method, named after Leonhard Euler, is a first-order numerical procedure for solving ODEs. It approximates the solution by taking small steps of size $h$ along the tangent line of the function at the current point. Given the initial state, the next state is predicted by projecting the current slope forward.

The Runge-Kutta (RK4) method is a more sophisticated iterative technique. It does not rely on a single slope calculation at the start of the interval. Instead, it samples four distinct slopes—at the beginning, two at the midpoint, and one at the end of the interval—and calculates a weighted average. This weighted average provides a significantly higher degree of accuracy, as it accounts for the curvature of the solution within the step.

## Key Terminology

To navigate numerical integration, one must master several foundational terms:

1. Step Size ($h$): The interval width chosen for each iteration. Smaller values generally increase accuracy but increase computational cost.
2. Local Truncation Error: The error incurred in a single step of the method. For Euler, this is $O(h^2)$; for RK4, it is $O(h^5)$.
3. Global Truncation Error: The cumulative error across the entire integration interval. For Euler, this is $O(h)$; for RK4, it is $O(h^4)$.
4. Slope Function ($f(t,y)$): The derivative function that describes how $y$ changes with respect to $t$.
5. Discretization: The process of transforming a continuous domain into a sequence of discrete points $t_0, t_1, \\dots, t_n$.

## Purpose

The primary purpose of these methods is to bridge the gap between theoretical calculus and practical computation. Many physical systems, such as orbital mechanics, fluid dynamics, and biochemical reaction networks, are governed by non-linear ODEs that cannot be integrated using standard symbolic techniques.

Euler's method serves an educational and foundational purpose. It demonstrates the fundamental concept of numerical integration: approximating a curve by a sequence of connected line segments. It is rarely used in high-stakes engineering due to its propensity to accumulate error rapidly.

RK4, conversely, is utilized for its balance of stability and precision. It allows scientists to simulate complex dynamic systems—such as weather patterns or circuit transients—with enough accuracy to maintain the physical integrity of the model over long time horizons, provided that the step size $h$ is chosen appropriately to avoid numerical instability.

## Fundamental Properties

Numerical methods are evaluated based on consistency, convergence, and stability. 

Consistency implies that as $h \\to 0$, the numerical method approaches the true differential equation. Both Euler and RK4 are consistent. 

Convergence requires that the numerical approximation approaches the exact solution as the number of steps increases. The Euler method converges linearly, whereas the RK4 method converges at the fourth power of the step size, making it much more robust.

Stability refers to the ability of the method to prevent errors from growing boundlessly. The Euler method is notoriously sensitive to stiff equations—systems where certain components of the solution decay much faster than others. In such cases, Euler's method may oscillate wildly unless $h$ is made infinitesimally small. RK4 possesses a wider region of absolute stability, allowing it to handle a broader class of problems without requiring the step size to be reduced to impractical levels.

The performance characteristics are summarized in the following table:

| Method | Order of Accuracy | Evaluations per Step | Computational Complexity |
| :--- | :--- | :--- | :--- |
| Euler | First Order | 1 | Low |
| Heun's (RK2) | Second Order | 2 | Moderate |
| RK4 | Fourth Order | 4 | High |

## Types & Variations

While the basic Euler and RK4 methods are widely taught, they are part of a larger family of algorithms:

1. Implicit Euler Method: Unlike the explicit Euler method, which uses the current slope, the implicit version uses the slope at the next point: $y_{n+1} = y_n + hf(t_{n+1}, y_{n+1})$. This is much more stable for stiff equations but requires solving an algebraic equation at each step.
2. Adaptive Step-Size Control (e.g., Runge-Kutta-Fehlberg or RK45): This is a modern standard. The algorithm takes two steps (one with order $n$ and one with order $n+1$) and compares the difference. If the error is too high, it decreases the step size $h$ automatically.
3. Multistep Methods: Methods like the Adams-Bashforth approach use historical data from multiple previous points ($y_{n-1}, y_{n-2}$) to calculate the next point, rather than just the current one.

## How to Solve

To implement these methods, follow the iterative logic dictated by the respective formulas.

For the Euler method, given $\\frac{dy}{dt}=f(t,y)$ and $y(t_0)=y_0$:
1. Determine the step size $h$.
2. Calculate the slope at the current point: $k_1 = f(t_n, y_n)$.
3. Update the state: $y_{n+1} = y_n + h \\cdot k_1$.
4. Advance time: $t_{n+1} = t_n + h$.

For the RK4 method, the iterative process is more involved. Calculate four "slopes" at each step:
1. $k_1 = f(t_n, y_n)$
2. $k_2 = f(t_n + \\frac{h}{2}, y_n + h \\frac{k_1}{2})$
3. $k_3 = f(t_n + \\frac{h}{2}, y_n + h \\frac{k_2}{2})$
4. $k_4 = f(t_n + h, y_n + h k_3)$

Then, compute the weighted update:
$$y_{n+1} = y_n + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$

This process ensures that the calculation accounts for the slope at the start, the midpoint (twice), and the endpoint of the interval, effectively canceling out lower-order error terms.

The following interactive graph allows for the observation of how the slope approximation changes as we vary parameters, specifically visualizing the difference between a linear projection (Euler) and a curve-fitted projection (as seen in RK4 logic):

\`\`\`interactivegraph
\\sin(ax) + b
params: a=1, b=0
range: a=0.5:2, b=-1:1
\`\`\`

In the interactive graph above, the parameter $a$ controls the frequency of the oscillation, while $b$ controls the vertical shift. When applying numerical methods, the value of $a$ is critical; for high-frequency functions, the step size $h$ must be sufficiently small to "capture" the peaks and troughs, otherwise, the numerical solution will alias or diverge.

Finally, we consider a static plot of a decay function, often used to test these methods:

\`\`\`graph
e^{-x}
0.5*e^{-x}
\`\`\`

The graph above plots $f(x) = e^{-x}$ (the exponential decay) and $f(x) = 0.5e^{-x}$. This represents a typical ODE solution $\\frac{dy}{dt} = -y$. In Euler's method, the discrete steps will consistently overshoot the curve because the tangent slope at $t_n$ is always steeper than the actual curve for a convex function like $e^{-x}$. RK4, by sampling points mid-interval, corrects for this overshoot, remaining significantly closer to the analytical decay curve.

## Summary

The choice between Euler and RK4 is a classic trade-off in numerical analysis: simplicity versus precision. The Euler method is mathematically transparent and computationally inexpensive, making it a perfect tool for initial debugging or simple, non-sensitive simulations. However, the RK4 method is the workhorse of computational physics. By sampling multiple slopes across the interval, RK4 suppresses the truncation error that plagues the Euler method. For any task where the long-term behavior of a dynamic system is required, the fourth-order accuracy of RK4 makes it the superior choice. Practitioners must always remain mindful of step size, as both methods, despite their differences in order of accuracy, eventually fail if the interval $h$ is too coarse to resolve the underlying differential function.`;export{e as default};