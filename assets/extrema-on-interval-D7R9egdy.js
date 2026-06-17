var e=`# Extrema on an Interval

In the study of calculus and real analysis, understanding the behavior of functions over specific domains is fundamental. One of the most significant aspects of this study is the identification of extrema—the highest and lowest values a function attains within a given interval. Whether in engineering, economics, or physics, finding the optimal solution often boils down to locating these maximum and minimum points.

## Definition

Let $f$ be a function defined on an interval $I$ that contains a point $c$. The function $f$ is said to have an absolute maximum at $c$ if $f(c) \\geq f(x)$ for all $x$ in $I$. Conversely, $f$ has an absolute minimum at $c$ if $f(c) \\leq f(x)$ for all $x$ in $I$. These values, $f(c)$, are referred to as the absolute maximum value and the absolute minimum value, respectively. Together, these are collectively called the absolute extrema of $f$ on $I$.

The Extreme Value Theorem provides the bedrock for this definition. It states that if a function $f$ is continuous on a closed, bounded interval $[a,b]$, then $f$ must attain an absolute maximum value and an absolute minimum value at least once within that interval. This theorem is non-constructive; it guarantees existence but does not provide the coordinates of these points, which necessitates the analytical methods discussed in later sections.

## Key Terminology

To analyze extrema effectively, one must distinguish between various types of points and properties:

| Term | Definition |
|:---|:---|
| Absolute Extrema | The largest and smallest values of a function over the entire domain $I$. |
| Local Extrema | The largest and smallest values of a function within some open sub-interval containing $c$. |
| Critical Number | A value $c$ in the domain where $f'(c) = 0$ or where $f'(c)$ does not exist. |
| Endpoint Extrema | Extrema that occur specifically at the boundaries $a$ or $b$ of a closed interval. |
| Stationary Point | A point where the derivative $f'(x) = 0$, indicating a horizontal tangent line. |
| Singular Point | A point where the function is defined, but the derivative is undefined (e.g., cusps or corners). |

Understanding these terms allows for a systematic classification of potential candidates for extrema, ensuring that no point is overlooked during analysis.

## Purpose

The search for extrema is the mathematical engine behind optimization. In economics, a firm seeks to maximize profit or minimize cost. In physics, a mechanical system often evolves toward a state that minimizes potential energy. In data science, gradient descent algorithms attempt to minimize a loss function to improve model accuracy. 

By identifying where a function reaches its highest or lowest points, we gain a global understanding of its behavior. On a closed interval, this allows us to compare the function's internal peaks and valleys against its behavior at the boundaries. Without the mathematical rigor of extremum analysis, these optimizations would rely solely on trial and error, which is inefficient and unreliable for complex, non-linear functions.

## Fundamental Properties

The behavior of extrema is governed by the relationship between a function and its derivative. Fermat's Theorem on stationary points asserts that if $f$ has a local extremum at $c$ and $f$ is differentiable at $c$, then $f'(c)$ must be zero. This is a necessary condition for interior local extrema.

However, the condition $f'(c) = 0$ is not sufficient to guarantee an extremum; consider $f(x) = x^3$ at $x=0$. Here, $f'(0) = 0$, but the point is an inflection point, not an extremum. Furthermore, the derivative-based approach only identifies candidates in the interior of the interval. If a function is strictly increasing or decreasing, its absolute extrema must reside at the endpoints of the interval.

Consider the function $f(x) = x^2$ on the interval $[-2, 3]$. The derivative is $f'(x) = 2x$, which vanishes at $x=0$. Evaluating the function at the critical point $x=0$ and the endpoints $x=-2$ and $x=3$ yields:
$f(0) = 0$ (absolute minimum)
$f(-2) = 4$
$f(3) = 9$ (absolute maximum)

This illustrates the "Closed Interval Method": the absolute extrema must occur at either a critical point within the interval or at the endpoints of the interval.

## Types & Variations

Extrema are classified by their "reach" and their mathematical properties. Absolute (or global) extrema are compared against the entire interval, while local (or relative) extrema are compared only to immediate neighbors.

### Local vs. Global
A function can have multiple local extrema but only one absolute maximum and one absolute minimum on a closed interval. For instance, a wave function like $f(x) = \\sin(x)$ on $[0, 4\\pi]$ has two local maxima and two local minima, with the absolute maximum and minimum values repeated twice.

### Differentiable vs. Non-Differentiable
Some functions exhibit extrema at points where they are not differentiable. The absolute minimum of $f(x) = |x|$ on $[-1, 1]$ occurs at $x=0$. Even though $f'(0)$ does not exist (the derivative is undefined at a cusp), $x=0$ is a valid critical number and the location of the absolute minimum.

### The Role of Boundaries
When an interval is open, such as $(a, b)$, the Extreme Value Theorem does not apply. The function might approach a value but never reach it, meaning it might not possess an absolute maximum or minimum. For example, $f(x) = 1/x$ on $(0, 1)$ has no absolute maximum, as the function increases without bound as $x$ approaches $0$.

## How to Solve

To determine the absolute extrema of a continuous function $f$ on a closed interval $[a, b]$, follow this standardized algorithmic approach:

1. **Verify Continuity:** Ensure that the function $f$ is continuous on the closed interval $[a, b]$. If it is not, the Extreme Value Theorem may not hold, and extrema may not exist.
2. **Find Critical Numbers:** Calculate $f'(x)$ and determine all values $c$ in $(a, b)$ where $f'(c) = 0$ or $f'(c)$ is undefined.
3. **Evaluate at Critical Numbers:** Calculate $f(c)$ for every critical number identified in step 2.
4. **Evaluate at Endpoints:** Calculate the values at the interval boundaries, $f(a)$ and $f(b)$.
5. **Compare Values:** Create a list containing all values computed in steps 3 and 4. The largest value is the absolute maximum, and the smallest is the absolute minimum.

### Illustrative Example
Let $f(x) = x^3 - 3x^2 + 1$ on the interval $[-1, 4]$.

First, find the derivative:
$f'(x) = 3x^2 - 6x$

Set the derivative to zero:
$3x(x - 2) = 0$
$x = 0$ and $x = 2$

Both $0$ and $2$ are within $[-1, 4]$. Now, evaluate the function at the critical points and the endpoints:
- $f(-1) = (-1)^3 - 3(-1)^2 + 1 = -1 - 3 + 1 = -3$
- $f(0) = (0)^3 - 3(0)^2 + 1 = 1$
- $f(2) = (2)^3 - 3(2)^2 + 1 = 8 - 12 + 1 = -3$
- $f(4) = (4)^3 - 3(4)^2 + 1 = 64 - 48 + 1 = 17$

Comparing $\\{-3, 1, -3, 17\\}$, we identify the absolute maximum is $17$ at $x=4$, and the absolute minimum is $-3$ at $x=-1$ and $x=2$.

\`\`\`graph
x^3 - 3*x^2 + 1
\`\`\`
The graph above plots $f(x) = x^3 - 3x^2 + 1$ over the interval $[-1, 4]$, demonstrating the cubic nature of the function, the local maximum at $x=0$, the local minimum at $x=2$, and the global boundaries at the endpoints.

## Summary

The study of extrema on an interval is a cornerstone of mathematical analysis. It transforms the qualitative observation of "highs and lows" into a rigorous quantitative process. By adhering to the Extreme Value Theorem and the systematic Closed Interval Method—identifying critical points and comparing them against boundary values—one can reliably optimize continuous functions. 

The distinction between local and absolute behavior is crucial, as is the recognition of potential extrema at non-differentiable points. Whether analyzing simple polynomials or complex models in applied science, this framework ensures that we identify the optimal state within any constrained domain. Mastering these techniques provides the clarity required to solve problems ranging from simple geometry to the most advanced optimization challenges in global industry.`;export{e as default};