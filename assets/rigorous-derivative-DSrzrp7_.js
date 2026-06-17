var e=`# Rigorous Treatment of the Derivative and Mean Value Theorem

The study of calculus, as formalized by Cauchy and Weierstrass, rests upon the rigorous definition of the limit. The derivative represents the culmination of this conceptual framework, evolving from the intuitive notion of "instantaneous speed" to the precise analytical definition involving $\\epsilon$-$\\delta$ arguments. By extension, the Mean Value Theorem (MVT) serves as the primary bridge connecting the local behavior of a function (its derivative) to its global behavior (its net change over an interval).

## Definition

The derivative of a function $f$ at a point $x_0$, denoted as $f'(x_0)$ or $\\frac{df}{dx}|_{x=x_0}$, is defined as the limit of the difference quotient as the interval length approaches zero. Formally, for a function $f: D \\subseteq \\mathbb{R} \\to \\mathbb{R}$, the derivative exists at $x_0 \\in \\text{int}(D)$ if and only if the following limit exists:

$$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h) - f(x_0)}{h}$$

If this limit exists, the function is said to be differentiable at $x_0$. If the limit fails to exist—due to discontinuity, a cusp, or vertical tangency—the function is non-differentiable at that point.

The Mean Value Theorem is a fundamental theorem in real analysis. Let $f:[a,b] \\to \\mathbb{R}$ be a function that satisfies two conditions:
1. $f$ is continuous on the closed interval $[a,b]$.
2. $f$ is differentiable on the open interval $(a,b)$.

Under these conditions, there exists at least one point $c \\in (a,b)$ such that:

$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

This asserts that there is at least one point where the instantaneous rate of change equals the average rate of change over the entire interval.

## Key Terminology

To navigate the rigor of these concepts, one must master specific analytical terminology:

| Term | Definition |
| :--- | :--- |
| **Difference Quotient** | The ratio $\\frac{f(x+h)-f(x)}{h}$, representing the slope of the secant line. |
| **Continuity** | The absence of breaks or jumps in a function; formally $\\lim_{x \\to c} f(x) = f(c)$. |
| **Differentiability** | The condition that a tangent line exists at a point, implying smoothness. |
| **Secant Line** | A line connecting two points $(a, f(a))$ and $(b, f(b))$. |
| **Tangent Line** | The linear approximation of a curve at a single point $x_0$. |
| **Critical Point** | A point where $f'(x)=0$ or $f'(x)$ is undefined. |

## Purpose

The derivative acts as a microscopic lens, allowing us to zoom into an infinitesimal region of a function to determine its slope. This is vital for optimization, where we seek to find maxima and minima by identifying where the tangent is horizontal ($f'(x)=0$).

The Mean Value Theorem serves a different, more structural purpose. While the derivative provides local data, the MVT provides a global constraint. It is essential in proving the following:
* **The Constant Function Theorem:** If $f'(x)=0$ for all $x$ in an interval, then $f$ is constant.
* **Monotonicity:** If $f'(x) > 0$ on an interval, the function is strictly increasing.
* **Taylor's Theorem:** MVT is a special case of the generalized Mean Value Theorem (Lagrange form of the remainder), allowing for the approximation of non-linear functions using polynomials.

## Fundamental Properties

The derivative follows the linearity property, which ensures that for constants $\\alpha, \\beta$ and differentiable functions $f, g$:

$$\\frac{d}{dx}[\\alpha f(x) + \\beta g(x)] = \\alpha f'(x) + \\beta g'(x)$$

Furthermore, the relationship between continuity and differentiability is one of implication: differentiability at a point always implies continuity at that point, though the converse is false (e.g., $f(x)=|x|$ is continuous at $x=0$ but not differentiable).

The Mean Value Theorem relies on Rolle’s Theorem, a specific case where $f(a)=f(b)$. If $f(a)=f(b)$, then there must exist some $c \\in (a,b)$ where $f'(c)=0$. MVT effectively tilts the graph of the function by subtracting a secant line to transform the problem into an application of Rolle’s Theorem.

\`\`\`graph
f(x) = x^3 - 3x
\`\`\`
The graph above plots $f(x) = x^3 - 3x$. By applying the Mean Value Theorem on the interval $[-2, 2]$, we observe that the average rate of change is $\\frac{f(2)-f(-2)}{2-(-2)} = \\frac{2 - (-2)}{4} = 1$. The theorem guarantees there exists a $c \\in (-2, 2)$ where $f'(c) = 3c^2 - 3 = 1$. Solving for $c$, we find $c = \\pm\\sqrt{4/3} \\approx \\pm 1.15$.

## Types & Variations

Several variations exist to accommodate different constraints or dimensions:

1. **Rolle's Theorem:** A simplified version of MVT where $f(a)=f(b)$.
2. **Cauchy's Mean Value Theorem:** Given two functions $f$ and $g$ continuous on $[a,b]$ and differentiable on $(a,b)$, there exists $c \\in (a,b)$ such that $[f(b)-f(a)]g'(c) = [g(b)-g(a)]f'(c)$. This is vital for proving L'Hôpital's Rule.
3. **Generalized MVT (Taylor's Theorem):** Provides the error bound for polynomial approximations of higher-order functions.

\`\`\`interactivegraph
a*x^2 + b*x + c
params: a=1, b=0, c=0
range: a=-2:2, b=-5:5, c=-5:5
\`\`\`
The interactive graph plots $f(x) = ax^2 + bx + c$. By adjusting the parameters $a, b,$ and $c$, one can visualize how the quadratic parabola shifts and stretches. The Mean Value Theorem implies that for any interval $[x_1, x_2]$, there exists a tangent parallel to the secant line segment connecting those points, regardless of how the parameters define the curve's curvature.

## How to Solve

To apply the Mean Value Theorem rigorously to a problem, one should follow these steps:

**Step 1: Verification of Hypotheses**
Before applying MVT, ensure the function is continuous on $[a,b]$ and differentiable on $(a,b)$. If the function has a pole or a jump discontinuity within the interval, the theorem cannot be invoked.

**Step 2: Calculation of the Average Rate**
Compute the slope of the secant line:
$$m_{sec} = \\frac{f(b) - f(a)}{b - a}$$

**Step 3: Setting the Derivative Equal**
Find the expression for $f'(x)$. Set $f'(c) = m_{sec}$ and solve the resulting algebraic equation for $c$.

**Step 4: Interval Validation**
Check if the resulting values of $c$ lie within the open interval $(a, b)$. If a calculated $c$ falls outside, it is discarded as it does not satisfy the theorem's requirements.

**Example Analytical Problem:**
Let $f(x) = \\sqrt{x}$ on the interval $[0, 9]$. 
1. Check continuity: $\\sqrt{x}$ is continuous on $[0, \\infty)$, so it is continuous on $[0, 9]$.
2. Check differentiability: $f'(x) = \\frac{1}{2\\sqrt{x}}$. This is defined for all $x \\in (0, 9)$.
3. Average slope: $\\frac{f(9) - f(0)}{9 - 0} = \\frac{3 - 0}{9} = \\frac{1}{3}$.
4. Equate: $\\frac{1}{2\\sqrt{c}} = \\frac{1}{3} \\implies 2\\sqrt{c} = 3 \\implies \\sqrt{c} = 1.5 \\implies c = 2.25$.
5. Since $2.25 \\in (0, 9)$, the MVT holds.

## Summary

The derivative provides the essential mechanism for describing local change, formalized through the limit process. The Mean Value Theorem serves as the vital analytical link, enabling the transition from local derivative data to global function properties. By requiring only continuity and differentiability, the MVT provides a robust tool for analyzing the behavior of functions over intervals, which is foundational to the development of integral calculus and the study of differential equations. Through this rigorous treatment, one gains not just a tool for computation, but a deeper understanding of the structure of real-valued functions.`;export{e as default};