var e=`# Newton's Method

Newton's Method, also known as the Newton-Raphson method, is a powerful numerical technique for finding successive approximations to the roots (or zeros) of a real-valued function. Named after Isaac Newton and Joseph Raphson, this iterative algorithm relies on the use of the first derivative to approximate the function locally with a straight line, which allows for the rapid identification of points where the function crosses the horizontal axis. Due to its quadratic convergence rate, it serves as the foundation for numerous optimization algorithms and is a staple in scientific computing.

## Definition

Newton's Method is an iterative process defined by the recurrence relation:

$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

In this expression, $x_n$ represents the current estimate of the root, while $x_{n+1}$ represents the updated, more accurate estimate. The process begins with an initial guess, $x_0$, and continues until the difference between successive iterations falls below a predefined tolerance level, $|x_{n+1} - x_n| < \\epsilon$, or the function value $|f(x_n)|$ is sufficiently close to zero. The derivation of this formula stems from the Taylor series expansion of a function $f(x)$ about the point $x_n$:

$$f(x) \\approx f(x_n) + f'(x_n)(x - x_n)$$

To find the root, we set the approximation to zero ($f(x) = 0$) and solve for $x$, which directly yields the iterative formula. Geometrically, this equates to finding the x-intercept of the tangent line to the curve $y = f(x)$ at the point $(x_n, f(x_n))$.

## Key Terminology

Understanding the nuances of numerical analysis requires familiarity with the following terms:

| Term | Definition |
| :--- | :--- |
| **Root** | A value $r$ such that $f(r) = 0$. |
| **Convergence** | The property of the sequence $x_n$ approaching the true root $r$ as $n \\to \\infty$. |
| **Quadratic Convergence** | A rate of convergence where the number of correct digits approximately doubles with each iteration. |
| **Divergence** | A failure of the algorithm where the sequence $x_n$ moves away from the root or becomes chaotic. |
| **Fixed Point** | A point $x$ such that $g(x) = x$, where $g(x)$ is the Newton iteration function. |
| **Tolerance** | A small positive threshold $\\epsilon$ used to determine when to terminate the algorithm. |
| **Derivative** | The slope of the function $f'(x)$, essential for the update step. |

## Purpose

The primary purpose of Newton's Method is to solve equations of the form $f(x) = 0$ that are analytically intractable. While linear and quadratic equations have explicit formulas for their roots, higher-degree polynomials and transcendental functions—such as those involving exponential, logarithmic, or trigonometric terms—often lack closed-form solutions.

Furthermore, Newton's Method is widely used in optimization. Since finding the minimum or maximum of a function $h(x)$ is equivalent to finding the root of its derivative $h'(x) = 0$, one can apply Newton's Method to $h'(x)$ to locate local extrema. This application is central to machine learning, where gradient-based optimization algorithms often utilize second-order information (via the Hessian matrix, an extension of the derivative) to speed up convergence.

## Fundamental Properties

The efficacy of Newton's Method is dictated by its mathematical properties, most notably its speed and sensitivity.

### Quadratic Convergence
Newton's Method is famous for its "quadratic convergence." If the sequence $x_n$ converges to a root $r$ where $f'(r) \\neq 0$, then there exists a constant $C$ such that:
$$|x_{n+1} - r| \\leq C |x_n - r|^2$$
This means that once the iteration is sufficiently close to the root, the error at step $n+1$ is roughly proportional to the square of the error at step $n$. This allows for high-precision results in very few steps compared to linear methods like the Bisection method.

### Sensitivity to Initial Guess
The method is highly dependent on the choice of $x_0$. If $x_0$ is chosen too far from the root, or near a local maximum or minimum where $f'(x) \\approx 0$, the method may diverge, oscillate between points, or settle on a distant root. This sensitivity highlights the need for a "good" starting point, often determined through initial data visualization or coarse grid searching.

### The Problem of Division by Zero
If $f'(x_n) = 0$ at any point in the iteration, the formula involves division by zero, causing the algorithm to fail. Geometrically, this occurs when the tangent line is horizontal, meaning it will never intersect the x-axis to provide the next guess.

## Types & Variations

Several variations exist to overcome the limitations of the classic Newton-Raphson approach:

1. **Secant Method:** When the derivative $f'(x)$ is difficult or expensive to calculate, the Secant Method replaces it with a finite difference approximation:
   $$f'(x_n) \\approx \\frac{f(x_n) - f(x_{n-1})}{x_n - x_{n-1}}$$
   This results in a slightly slower (superlinear) convergence but avoids the need for explicit derivative functions.

2. **Newton's Method for Systems:** For systems of equations, the scalar derivative is replaced by the Jacobian matrix $J$. The update rule becomes:
   $$x_{n+1} = x_n - J(x_n)^{-1} f(x_n)$$
   This requires solving a system of linear equations at each step rather than a single division.

3. **Damped Newton's Method:** To improve stability, a damping factor (or step size) $\\alpha$ is introduced:
   $$x_{n+1} = x_n - \\alpha \\frac{f(x_n)}{f'(x_n)}$$
   where $0 < \\alpha \\leq 1$. This helps prevent "overshooting" the root in functions with high curvature.

## How to Solve

To solve for a root using Newton's Method, follow these systematic steps:

1. **Define the Function:** Identify the function $f(x)$ for which you wish to find the root.
2. **Calculate the Derivative:** Derive $f'(x)$ analytically.
3. **Choose an Initial Guess:** Select $x_0$. A visual plot can help identify a starting point close to the suspected root.
4. **Iterate:** Use the formula $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ to calculate the next value.
5. **Check Convergence:** Compute the absolute difference $|x_{n+1} - x_n|$. If it is less than your desired precision (e.g., $10^{-6}$), stop. If not, set $n = n+1$ and repeat from step 4.

Consider the task of finding the square root of a number $A$, which is equivalent to finding the root of $f(x) = x^2 - A$. The derivative is $f'(x) = 2x$. Applying the update rule:
$$x_{n+1} = x_n - \\frac{x_n^2 - A}{2x_n} = \\frac{2x_n^2 - x_n^2 + A}{2x_n} = \\frac{1}{2}\\left(x_n + \\frac{A}{x_n}\\right)$$
This is the famous Babylonian method for calculating square roots, demonstrating that Newton's Method is a generalization of ancient iterative algorithms.

Below, we visualize the function $f(x) = x^2 - 2$ to estimate $\\sqrt{2}$. The graph displays the intersection of the parabola with the x-axis.

\`\`\`graph
x^2 - 2
\`\`\`

In the interactive model below, one can explore how different starting parameters affect the progression of the estimate toward the root. Note that in the context of Newton's Method, the parameter represents the initial guess $x_0$.

\`\`\`interactivegraph
(x - x0)^2 + f_shift
params: x0=2, f_shift=-2
range: x0=-5:5, f_shift=-5:5
\`\`\`

## Summary

Newton's Method is an indispensable tool in numerical analysis, prized for its efficiency and elegance. By approximating a function with its tangent line, the method rapidly homes in on roots with quadratic convergence. While its performance is unparalleled for well-behaved functions, its sensitivity to the initial guess and the requirement for a non-zero derivative remain critical considerations for the practitioner. When combined with variations like the Secant Method or damped updates, it forms a robust framework for solving complex equations and optimizing high-dimensional systems in engineering, finance, and data science. Mastery of this method requires not just the application of the formula, but an intuitive understanding of the underlying geometry and the potential pitfalls inherent in iterative approximation.`;export{e as default};