var e=`# Newton's Method

## Definition

Newton's Method, also known as the Newton-Raphson method, is a powerful numerical technique used to find the roots (or zeros) of a real-valued function $f(x) = 0$. It is an iterative root-finding algorithm that produces successively better approximations of the roots of a differentiable function. The core concept relies on linear approximation: at any given point $x_n$, we approximate the curve of $f(x)$ with its tangent line at that point. By finding the point where this tangent line intersects the x-axis, we obtain a new, generally more accurate estimate $x_{n+1}$.

Formally, given a differentiable function $f: \\mathbb{R} \\rightarrow \\mathbb{R}$ and an initial guess $x_0$, the sequence of approximations is defined by the recurrence relation:

$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

This iteration continues until the difference between $|x_{n+1} - x_n|$ is below a pre-specified tolerance, or the function value $|f(x_n)|$ is sufficiently close to zero. The method is classified as an open method because it does not require an initial bracket to enclose the root, though it requires a good starting point to ensure convergence.

## Key Terminology

To understand Newton's Method deeply, one must master the following technical terms:

| Term | Definition |
| :--- | :--- |
| Root | A value $r$ such that $f(r) = 0$. |
| Iteration | A single step of the recurrence formula $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$. |
| Tangent Line | The linear approximation of $f(x)$ at $x_n$, given by $y - f(x_n) = f'(x_n)(x - x_n)$. |
| Convergence | The property where the sequence $\\{x_n\\}$ approaches a specific limit $r$ as $n \\rightarrow \\infty$. |
| Order of Convergence | The rate at which the error decreases. Newton's Method typically exhibits quadratic convergence. |
| Divergence | The failure of the sequence $\\{x_n\\}$ to approach a root, often caused by oscillation or moving toward infinity. |
| Fixed Point | A value $x$ such that $g(x) = x$, where $g(x) = x - \\frac{f(x)}{f'(x)}$. |

## Purpose

The primary purpose of Newton's Method is to provide an efficient computational approach for solving non-linear equations that cannot be solved algebraically. While linear equations ($ax+b=0$) and quadratic equations ($ax^2+bx+c=0$) have closed-form solutions via the quadratic formula, higher-order polynomials or transcendental functions (e.g., $e^x - \\sin(x) = 0$) often lack such solutions.

Engineers and scientists utilize this method because of its speed. Unlike the Bisection Method, which halves the interval at each step and converges linearly, Newton's Method converges quadratically. This means the number of correct digits approximately doubles with each iteration, provided the initial guess is sufficiently close to the root and the derivative $f'(x)$ is non-zero in the neighborhood of the root. Beyond simple root-finding, Newton's Method serves as the backbone for:

1. Solving systems of non-linear equations using the Jacobian matrix.
2. Optimizing functions by finding the roots of their derivatives ($f'(x) = 0$).
3. Calculating square roots and other transcendental operations in computer hardware/firmware design.
4. Solving transcendental equations in thermodynamics, electromagnetics, and fluid mechanics.

## Fundamental Properties

The behavior of Newton's Method is governed by its mathematical derivation and the nature of the function $f(x)$.

### Derivation
Starting from the Taylor series expansion of $f(x)$ around $x_n$:
$$f(x) \\approx f(x_n) + f'(x_n)(x - x_n) + \\frac{f''(x_n)}{2!}(x - x_n)^2 + \\dots$$
If we truncate the series after the first-order term and set the approximation to zero to find the root:
$$0 = f(x_n) + f'(x_n)(x - x_n)$$
Solving for $x$ gives the next approximation $x_{n+1}$:
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

### Convergence Rates
The "quadratic convergence" property is established by analyzing the error term $e_{n+1} = x_{n+1} - r$. Under the assumptions that $f(r) = 0$, $f'(r) \\neq 0$, and $f''(x)$ is continuous, it can be shown that:
$$\\lim_{n \\to \\infty} \\frac{|e_{n+1}|}{|e_n|^2} = \\left| \\frac{f''(r)}{2f'(r)} \\right|$$
This confirms that the error at the next step is proportional to the square of the error at the current step.

### Limitations and Risks
Newton's Method is not a panacea. Several conditions can lead to failure:
1. **Zero Derivative:** If $f'(x_n) = 0$, the formula involves division by zero. This typically occurs at local extrema or inflection points.
2. **Oscillation:** For certain functions, the iteration may cycle between two or more values without ever converging.
3. **Divergence:** If the initial guess is far from the root, the sequence might move away from the root toward infinity.
4. **Sensitivity:** The method is highly sensitive to the choice of $x_0$.

The following interactive graph allows the exploration of the function $f(x) = x^2 - a$. Adjusting the parameter $a$ shows how the function's root shifts, and the reader should observe how the tangent line behavior changes relative to the root $x = \\sqrt{a}$.

\`\`\`interactivegraph
x^2 - a
params: a=2
range: a=1:10
\`\`\`

## Types & Variations

Several variations of Newton's Method have been developed to overcome the limitations mentioned above.

### Secant Method
When $f'(x)$ is difficult or expensive to calculate, the Secant Method replaces the derivative with a finite difference approximation using two previous points:
$$f'(x_n) \\approx \\frac{f(x_n) - f(x_{n-1})}{x_n - x_{n-1}}$$
This results in a superlinear convergence rate (approx 1.618), which is slower than Newton's but eliminates the need for derivative evaluation.

### Modified Newton's Method
For roots with multiplicity $m > 1$, standard Newton's Method loses its quadratic convergence. The modified version addresses this by introducing a factor $m$:
$$x_{n+1} = x_n - m \\frac{f(x_n)}{f'(x_n)}$$

### Newton-Raphson for Systems
In multidimensional space, where we seek a root for a vector function $\\mathbf{F}(\\mathbf{x}) = 0$, the method becomes:
$$\\mathbf{x}_{n+1} = \\mathbf{x}_n - J_F(\\mathbf{x}_n)^{-1}\\mathbf{F}(\\mathbf{x}_n)$$
where $J_F$ is the Jacobian matrix of partial derivatives.

### Damped Newton's Method
To prevent divergence, a step-size control parameter (damping factor) $\\alpha$ is introduced:
$$x_{n+1} = x_n - \\alpha \\frac{f(x_n)}{f'(x_n)}$$
where $0 < \\alpha \\leq 1$. This ensures that each step results in a decrease in the absolute value of the function.

## How to Solve

Solving a problem using Newton's Method requires a systematic algorithmic approach. Consider the task of finding the root of $f(x) = x^3 - x - 2$.

### Step 1: Define the function and its derivative
Given:
$f(x) = x^3 - x - 2$
$f'(x) = 3x^2 - 1$

### Step 2: Choose an initial guess
We can examine the function values to bracket the root. Since $f(1) = -2$ and $f(2) = 4$, a root exists in $(1, 2)$. Let us choose $x_0 = 1.5$.

### Step 3: Iterate
Apply the formula $x_{n+1} = x_n - \\frac{x_n^3 - x_n - 2}{3x_n^2 - 1}$.

| Iteration ($n$) | $x_n$ | $f(x_n)$ | $f'(x_n)$ | $x_{n+1}$ |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 1.5 | -0.125 | 5.75 | 1.5217 |
| 1 | 1.5217 | 0.0034 | 5.9479 | 1.5213 |
| 2 | 1.5213 | 0.0000 | 5.9442 | 1.5213 |

By the second iteration, the approximation has stabilized to four decimal places.

### Step 4: Verification
Verify that $f(1.5213) \\approx 0$.
$(1.5213)^3 - 1.5213 - 2 \\approx 3.5213 - 1.5213 - 2 = 0$.

The graph below visualizes the function $f(x) = x^3 - x - 2$. Notice how the function crosses the x-axis near $x = 1.52$.

\`\`\`graph
x^3 - x - 2
\`\`\`

## Summary

Newton's Method remains a cornerstone of numerical analysis due to its balance of simplicity and efficiency. It transforms the challenging problem of solving arbitrary non-linear equations into a straightforward iterative process. Its quadratic convergence makes it extremely fast, though users must remain vigilant regarding the quality of the initial guess and the behavior of the derivative near the root. By understanding both the underlying Taylor series derivation and the potential pitfalls—such as division by zero or divergence—practitioners can effectively apply this method across a vast array of scientific and engineering domains. When the derivative is unavailable or the function is poorly behaved, variations like the Secant Method or damped iterations provide robust alternatives, ensuring the method's continued relevance in computational mathematics.`;export{e as default};