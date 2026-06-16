var e=`## Definition

The First and Second Derivative Tests are fundamental analytical tools in calculus used to determine the local extrema of a real-valued function. These tests rely on the behavior of the derivative $f'(x)$ and the second derivative $f''(x)$ to characterize the topography of a function's graph.

The First Derivative Test evaluates the sign changes of $f'(x)$ across a critical point $c$, where $f'(c)=0$ or $f'(c)$ is undefined. If the derivative transitions from positive to negative, the function reaches a local maximum; if it transitions from negative to positive, the function reaches a local minimum.

The Second Derivative Test utilizes the concavity of a function at a critical point $c$ where $f'(c)=0$. If the second derivative $f''(c)>0$, the function is concave up, indicating a local minimum. If $f''(c)<0$, the function is concave down, indicating a local maximum. If $f''(c)=0$ or is undefined, the test is inconclusive, necessitating a return to the First Derivative Test.

## Key Terminology

- Critical Point: An interior point $c$ in the domain of $f$ where $f'(c)=0$ or $f'(c)$ does not exist. These points are candidates for local extrema.
- Extrema: The collective term for local maximum and local minimum values of a function.
- Concavity: A measure of the curvature of a function. A function is concave up if the tangent line lies below the graph, and concave down if the tangent line lies above the graph.
- Stationary Point: A point where $f'(x)=0$. All stationary points are critical points, but not all critical points are stationary points.
- Inflection Point: A point where the concavity changes. At these points, $f''(x)=0$ or is undefined, and the sign of $f''(x)$ flips.
- Monotonicity: The property of a function where it is either non-increasing or non-decreasing over an interval.
- Relative Extrema: Another term for local extrema, referring to the highest or lowest points within a specific neighborhood of the function.

## Purpose

The primary objective of these tests is to optimize functions without the need for extensive point-by-point graphing. In fields such as engineering, economics, and physics, determining the peak performance or minimum cost is vital. 

By identifying where a function stops increasing and begins decreasing, or vice versa, mathematicians can locate precise coordinates for peaks and valleys. This provides a rigorous mathematical foundation for solving optimization problems. For instance, in manufacturing, minimizing the material surface area of a container given a fixed volume requires finding the critical points of a cost function and verifying them as minima.

These tests also allow for the classification of critical points that do not represent extrema, such as horizontal points of inflection. By understanding the local behavior of a function, analysts can derive the global shape, identify intervals of increase and decrease, and understand the stability of dynamic systems.

## Fundamental Properties

The First and Second Derivative Tests are derived from the Mean Value Theorem and Taylor Series expansions. 

The Mean Value Theorem states that for a differentiable function on $[a,b]$, there exists $c$ such that $f'(c) = \\frac{f(b)-f(a)}{b-a}$. This implies that if $f'(x)>0$ on an interval, the function is strictly increasing. Conversely, if $f'(x)<0$, the function is strictly decreasing. The First Derivative Test formalizes this by checking the sign change across a critical point.

The Second Derivative Test is rooted in the quadratic approximation of a function near $c$ using Taylor's Theorem:
$$f(x) \\approx f(c) + f'(c)(x-c) + \\frac{f''(c)}{2!}(x-c)^2$$
Since $f'(c)=0$ at a stationary point, the approximation simplifies to:
$$f(x) \\approx f(c) + \\frac{f''(c)}{2}(x-c)^2$$
If $f''(c)>0$, then $f(x) > f(c)$ for all $x$ near $c$, confirming that $f(c)$ is a local minimum. If $f''(c)<0$, then $f(x) < f(c)$ for all $x$ near $c$, confirming $f(c)$ is a local maximum.

| Feature | First Derivative Test | Second Derivative Test |
| :--- | :--- | :--- |
| Requirement | Sign change of $f'(x)$ | Sign of $f''(x)$ at $f'(c)=0$ |
| Primary Output | Local Max/Min/None | Local Max/Min/Inconclusive |
| Concavity Sensitivity | Not required | High |
| Applicability | All critical points | Stationary points only |
| Ease of Computation | Often requires interval testing | Single value evaluation |

## Types & Variations

There are several variations and extensions to the basic tests:

1. Higher-Order Derivative Test: If $f'(c)=f''(c)=...=f^{(n-1)}(c)=0$ and $f^{(n)}(c) \\neq 0$:
   - If $n$ is even and $f^{(n)}(c)>0$, then $c$ is a local minimum.
   - If $n$ is even and $f^{(n)}(c)<0$, then $c$ is a local maximum.
   - If $n$ is odd, $c$ is a point of inflection.

2. Global vs. Local: The tests identify local extrema. To find global extrema on a closed interval $[a,b]$, one must compare the values of $f(x)$ at the local extrema found via these tests with the values of the function at the endpoints $f(a)$ and $f(b)$.

3. Multivariate Extensions: For functions of several variables, the tests involve the Hessian matrix. The Second Derivative Test in multiple dimensions requires the Hessian matrix to be positive definite for a local minimum and negative definite for a local maximum.

## How to Solve

To apply these tests systematically, follow this rigorous methodology:

**Step 1: Differentiation**
Find the first derivative $f'(x)$ of the function $f(x)$.

**Step 2: Identification of Critical Points**
Solve $f'(x)=0$ for $x$. Also, identify any values of $x$ in the domain where $f'(x)$ is undefined. These represent the complete set of critical points.

**Step 3: Application of the Second Derivative Test (if applicable)**
Calculate $f''(x)$. For each stationary point $c$ (where $f'(c)=0$):
- Evaluate $f''(c)$.
- If $f''(c) > 0$, conclude a local minimum.
- If $f''(c) < 0$, conclude a local maximum.
- If $f''(c) = 0$ or undefined, the test is inconclusive; proceed to Step 4.

**Step 4: Application of the First Derivative Test**
Create a sign chart for $f'(x)$. Choose a test point in the interval to the immediate left and immediate right of each critical point $c$.
- If $f'(x)$ changes from positive to negative, $f(c)$ is a local maximum.
- If $f'(x)$ changes from negative to positive, $f(c)$ is a local minimum.
- If $f'(x)$ does not change sign, the point is a horizontal inflection point, not an extremum.

**Example Analytical Framework:**
Consider $f(x) = x^3 - 3x^2$.
1. $f'(x) = 3x^2 - 6x$.
2. Set $f'(x) = 3x(x-2) = 0$. Critical points are $x=0, x=2$.
3. $f''(x) = 6x - 6$.
4. At $x=0$, $f''(0) = -6 < 0$. Conclusion: Local maximum at $(0,0)$.
5. At $x=2$, $f''(2) = 6(2) - 6 = 6 > 0$. Conclusion: Local minimum at $(2,-4)$.

## Summary

The First and Second Derivative Tests form the bedrock of local optimization in single-variable calculus. The First Derivative Test is robust, handling both stationary points and points of non-differentiability by examining the behavior of the slope across a critical interval. It provides a definitive classification of critical points based on the monotonicity of the function.

The Second Derivative Test offers a more efficient algebraic shortcut for stationary points by leveraging the curvature (concavity) of the function at those specific points. While it is faster to compute, it is strictly limited to cases where the second derivative exists and is non-zero. 

Together, these tools allow for the precise mapping of a function's geometry. By combining these methods, a mathematician can transition from a raw algebraic expression to a deep understanding of a function's maximum capacity, minimum requirements, and inflection boundaries. Mastery of these tests is a prerequisite for advanced study in optimization theory, control systems, and numerical analysis.`;export{e as default};