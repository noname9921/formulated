var e=`# Extrema on an Interval

In the study of calculus and real analysis, understanding the behavior of functions over specific domains is fundamental. The concept of extrema—the maximum and minimum values a function attains—provides the foundation for optimization theory, physics, economics, and engineering. When we restrict a function to a closed interval $[a,b]$, we enter the domain of the Extreme Value Theorem, which guarantees the existence of these points under conditions of continuity.

## Definition

Let $f$ be a function defined on an interval $I$. An extreme value of $f$ on $I$ is either a global maximum or a global minimum. 

A value $f(c)$ is the absolute maximum of $f$ on $I$ if $f(c) \\geq f(x)$ for all $x \\in I$. Conversely, $f(c)$ is the absolute minimum of $f$ on $I$ if $f(c) \\leq f(x)$ for all $x \\in I$. These points are collectively known as the global extrema. 

In the context of an interval $[a,b]$, the extrema can occur at three specific types of points:
1. At critical points where the derivative $f'(c) = 0$.
2. At points where the derivative $f'(c)$ is undefined (singular points).
3. At the endpoints of the interval, $x=a$ and $x=b$.

If we are considering an open interval $(a,b)$, the function might not attain an absolute maximum or minimum, as the function values might approach a supremum or infimum without ever reaching it. Thus, the closed interval condition is a sufficient, though not always necessary, condition for the existence of extrema.

## Key Terminology

To navigate the analysis of extrema, one must master the following definitions:

| Term | Definition |
| :--- | :--- |
| Absolute Extrema | The largest or smallest output value of a function over the entire domain. |
| Relative Extrema | The largest or smallest value in a small neighborhood around a point. |
| Critical Point | Any point $c$ in the domain where $f'(c)=0$ or $f'(c)$ does not exist. |
| Endpoint Extrema | The values $f(a)$ and $f(b)$ of a closed interval $[a,b]$. |
| Extreme Value Theorem | The theorem stating a continuous function on $[a,b]$ must have a max and min. |
| Stationary Point | A point where $f'(c) = 0$. |

Understanding the distinction between "relative" (local) and "absolute" (global) is crucial. A local maximum is a peak relative to its immediate surroundings, but it may not be the highest point on the entire interval. Every absolute maximum is a local maximum, but the converse is false.

## Purpose

The study of extrema serves several vital roles in mathematics and its applications:

1. **Optimization:** Businesses seek to maximize profit or minimize cost. Engineers seek to maximize the structural integrity or efficiency of a system.
2. **Curve Sketching:** Identifying extrema allows for the precise plotting of functions, helping to reveal the "shape" of a mathematical model.
3. **Physics:** The Principle of Least Action and the behavior of systems under potential energy potentials rely on finding local or global minima of energy functions.
4. **Numerical Methods:** Many algorithms for finding roots or approximating functions depend on navigating the landscape of extrema.

## Fundamental Properties

The primary mathematical bedrock for this topic is the **Extreme Value Theorem (EVT)**. It states that if a function $f$ is continuous on a closed interval $[a,b]$, then $f$ attains both an absolute maximum and an absolute minimum at least once in the interval. 

Important properties derived from this include:
* **Fermat's Theorem:** If a function has a local extremum at $c$ and $f$ is differentiable at $c$, then $f'(c) = 0$.
* **Differentiability:** If a function is differentiable everywhere on $(a,b)$, the absolute extrema must occur at either the critical points or the boundaries $\\{a, b\\}$.
* **Non-Differentiability:** If the function is not differentiable (e.g., $f(x)=|x|$), we must check the points of non-differentiability as potential locations for extrema.

Consider the function $f(x) = x^3 - 3x$ on the interval $[-2, 3]$. By finding the derivative $f'(x) = 3x^2 - 3$, we set it to zero: $3(x^2 - 1) = 0$, giving $x = 1$ and $x = -1$. Evaluating $f(x)$ at $x=-2, -1, 1, 3$:
* $f(-2) = -8 + 6 = -2$
* $f(-1) = -1 + 3 = 2$
* $f(1) = 1 - 3 = -2$
* $f(3) = 27 - 9 = 18$

The absolute minimum is $-2$ (attained at $x=-2$ and $x=1$), and the absolute maximum is $18$ (attained at $x=3$).

## Types & Variations

Extrema can be categorized by their behavior and their position within the interval:

1. **Stationary Extrema:** Occur where the rate of change is zero. These are the most common in elementary calculus.
2. **Boundary Extrema:** These occur specifically due to the confinement of the function. Often, the function is still increasing or decreasing at the boundary, meaning the derivative is not zero at that point.
3. **Singular Extrema:** These occur at "kinks" or "cusps" where the function is continuous but not differentiable. An example is $f(x) = |x|$ at $x=0$.
4. **Parametric Extrema:** In functions involving parameters, the location and value of the extrema may shift as the parameters change.

\`\`\`interactivegraph
ax^2 + bx + c
params: a=1, b=0, c=0
range: a=-2:2, b=-5:5, c=-5:5
\`\`\`

The interactive graph above demonstrates how changing the coefficients $a, b, c$ of a quadratic function $f(x) = ax^2 + bx + c$ shifts the vertex (the extremum) of the parabola. As $a$ changes, the concavity flips, turning a minimum into a maximum. As $b$ changes, the $x$-coordinate of the extremum shifts horizontally.

## How to Solve

To determine the absolute extrema of a continuous function $f$ on a closed interval $[a,b]$, follow the Closed Interval Method:

**Step 1: Find the Critical Points**
Calculate the derivative $f'(x)$. Solve the equation $f'(x) = 0$ and identify any points in $(a,b)$ where $f'(x)$ is undefined. These are your candidates.

**Step 2: Evaluate Endpoints**
Calculate $f(a)$ and $f(b)$.

**Step 3: Compare**
Create a list of all function values calculated from both critical points and endpoints. The largest value in this set is the absolute maximum, and the smallest value is the absolute minimum.

### Illustrative Example
Let $f(x) = 2x^3 - 3x^2 - 12x + 1$ on the interval $[-2, 3]$.

1. Find $f'(x) = 6x^2 - 6x - 12$.
2. Set $6(x^2 - x - 2) = 0 \\implies 6(x-2)(x+1) = 0$.
3. The critical points are $x = 2$ and $x = -1$. Both are within $[-2, 3]$.
4. Test values:
   - $f(-2) = 2(-8) - 3(4) - 12(-2) + 1 = -16 - 12 + 24 + 1 = -3$.
   - $f(-1) = 2(-1) - 3(1) - 12(-1) + 1 = -2 - 3 + 12 + 1 = 8$.
   - $f(2) = 2(8) - 3(4) - 12(2) + 1 = 16 - 12 - 24 + 1 = -19$.
   - $f(3) = 2(27) - 3(9) - 12(3) + 1 = 54 - 27 - 36 + 1 = -8$.

Comparing $\\{-3, 8, -19, -8\\}$, the absolute maximum is $8$ (at $x = -1$) and the absolute minimum is $-19$ (at $x = 2$).

## Summary

The determination of extrema on an interval is a robust process involving the identification of critical points and the assessment of interval boundaries. Through the Extreme Value Theorem, we are assured that any continuous function on a closed interval possesses a global maximum and minimum. By following the systematic Closed Interval Method—finding derivatives, locating critical values, and comparing those against boundaries—one can reliably solve complex optimization problems. This mathematical framework remains a cornerstone for analytical modeling in science and industry, allowing for the precise determination of optimal performance or cost across constrained systems. Whether analyzing a simple quadratic curve or a complex transcendental function, the principles of extrema provide the necessary rigor to locate the high and low points that define the function's global behavior.`;export{e as default};