var e=`# Differentiability vs Continuity

## Definition

Continuity and differentiability are the two most foundational pillars of real analysis and calculus. A function is continuous if it is possible to draw its graph without lifting a pen from the paper. Formally, a function $f(x)$ is continuous at a point $x=c$ if the limit of the function as it approaches $c$ is equal to the function value at $c$. This is expressed as:
$$\\lim_{x\\to c}f(x)=f(c)$$
For this condition to hold, three specific criteria must be met: $f(c)$ must be defined, the limit $\\lim_{x\\to c}f(x)$ must exist, and the limit must equal the functional value.

Differentiability is a stronger condition. A function $f(x)$ is differentiable at a point $x=c$ if the derivative $f'(c)$ exists. This is defined by the existence of the limit of the difference quotient:
$$f'(c)=\\lim_{h\\to 0}\\frac{f(c+h)-f(c)}{h}$$
If this limit exists and results in a finite value, the function has a well-defined, unique tangent line at that point. While all differentiable functions are continuous, the converse is false. Continuity serves as a necessary, but not sufficient, condition for differentiability.

## Key Terminology

To navigate the distinction between these properties, one must master specific terminology that defines how functions behave at singular points.

*   **Point of Discontinuity:** A coordinate $x=c$ where the graph of $f(x)$ experiences a break, gap, or jump.
*   **Corner or Cusp:** A point where a function is continuous but not differentiable. At a corner, the left-hand derivative and the right-hand derivative exist but are not equal, creating a sharp point.
*   **Smoothness:** An informal descriptor for functions that possess continuous derivatives of all orders. Differentiability implies a form of local "smoothness."
*   **Left-hand and Right-hand Derivatives:** Defined respectively as $\\lim_{h\\to 0^-}\\frac{f(c+h)-f(c)}{h}$ and $\\lim_{h\\to 0^+}\\frac{f(c+h)-f(c)}{h}$. Differentiability requires these two one-sided limits to be identical.
*   **Vertical Tangent:** A case where the slope of the function approaches infinity, meaning the function is continuous but fails the differentiability test because the derivative is not finite.

## Purpose

The primary purpose of distinguishing between continuity and differentiability is to establish the limits of linear approximation. Calculus relies heavily on the "local linearity" of functions. If a function is differentiable at $x=c$, we can zoom in on the graph at that point until it appears indistinguishable from a straight line. This allows for the use of derivatives in physics (velocity, acceleration), economics (marginal utility), and engineering (rate of change analysis).

Continuity ensures the preservation of limits and the application of theorems such as the Intermediate Value Theorem. Differentiability, however, grants us access to the Mean Value Theorem and Taylor Series expansions. Without the requirement of differentiability, we could not guarantee that a function has a predictable "trend" or slope at a specific point, rendering traditional optimization techniques (finding local maxima/minima using critical points) invalid.

## Fundamental Properties

The relationship between these two properties is hierarchical. Let $D$ be the set of differentiable functions and $C$ be the set of continuous functions. It is an established theorem in analysis that $D \\subset C$. 

1.  **Continuity does not imply differentiability:** Consider $f(x)=|x|$. At $x=0$, the function is continuous because $\\lim_{x\\to 0}|x|=0=f(0)$. However, the derivative from the left is $-1$ and the derivative from the right is $+1$. Since these are not equal, the derivative at $x=0$ does not exist.
2.  **Differentiability implies continuity:** If $f'(c)$ exists, then $\\lim_{x\\to c}f(x)=f(c)$. We prove this by writing $f(x)-f(c) = \\frac{f(x)-f(c)}{x-c} \\cdot (x-c)$. Taking the limit as $x \\to c$, we get $f'(c) \\cdot 0 = 0$. Thus, $\\lim_{x\\to c}f(x)=f(c)$.
3.  **Pathology:** There exist functions that are continuous everywhere but differentiable nowhere, such as the Weierstrass function. These represent the "extreme" end of the distinction, where infinite detail precludes any defined tangent.

| Property | Continuous | Differentiable |
| :--- | :--- | :--- |
| **Graph** | Connected, no gaps | Smooth, no corners |
| **Limit** | $\\lim_{x\\to c}f(x)=f(c)$ | $\\lim_{h\\to 0}\\frac{f(c+h)-f(c)}{h}$ exists |
| **Implication** | No jumps/holes | No jumps, holes, or corners |
| **Requirement** | Necessary for Differentiable | Sufficient for Continuous |

The following graph plots $f(x)=|x|$, which illustrates a function that is continuous at the origin but lacks a derivative there due to the sharp turn.

\`\`\`graph
abs(x)
\`\`\`

## Types & Variations

Discontinuities and non-differentiable points are classified by their algebraic and geometric nature. Understanding these categories helps in diagnosing function behavior.

### Types of Discontinuity
*   **Removable (Hole):** The limit exists, but $f(c)$ is either undefined or unequal to the limit (e.g., $f(x)=\\frac{x^2-1}{x-1}$ at $x=1$).
*   **Jump:** The left-hand and right-hand limits exist but are finite and unequal.
*   **Infinite:** The function approaches $\\pm\\infty$ as it nears $x=c$ (e.g., $f(x)=\\frac{1}{x^2}$).

### Types of Non-Differentiability
*   **Corner:** The left and right derivatives exist but differ (e.g., $|x|$ at $x=0$).
*   **Cusp:** The slopes approach $\\pm\\infty$ from opposite sides, creating a sharp point (e.g., $f(x)=x^{2/3}$ at $x=0$).
*   **Vertical Tangent:** The derivative reaches infinity, often appearing as a vertical line (e.g., $f(x)=\\sqrt[3]{x}$ at $x=0$).

The interactive graph below explores the function family $f(x)=|ax-b|$, showing how the translation parameter $b$ and scaling parameter $a$ shift the point of non-differentiability.

\`\`\`interactivegraph
abs(a*x - b)
params: a=1, b=0
range: a=-3:3, b=-3:3
\`\`\`

## How to Solve

To determine if a function $f(x)$ is continuous and differentiable at a point $x=c$, follow this rigorous analytical process:

### Step 1: Check Continuity
1. Calculate the value $f(c)$. If undefined, the function is discontinuous.
2. Calculate $\\lim_{x\\to c^-}f(x)$ and $\\lim_{x\\to c^+}f(x)$.
3. If the limits are equal and equal to $f(c)$, the function is continuous. If not, it is discontinuous, and by definition, it is also not differentiable.

### Step 2: Check Differentiability (Only if continuous)
1. Determine the derivative $f'(x)$ for the regions surrounding $c$.
2. Calculate the left-hand derivative: $L = \\lim_{h\\to 0^-} \\frac{f(c+h)-f(c)}{h}$.
3. Calculate the right-hand derivative: $R = \\lim_{h\\to 0^+} \\frac{f(c+h)-f(c)}{h}$.
4. If $L=R$, the function is differentiable at $x=c$, and $f'(c) = L$. If $L \\neq R$ or if the limits involve infinity, the function is not differentiable.

Consider the piecewise function $f(x)$ defined as:
$$f(x) = \\begin{cases} x^2 & x \\leq 1 \\\\ ax + b & x > 1 \\end{cases}$$
To ensure this function is differentiable at $x=1$, we must enforce both continuity and matching derivatives.
For continuity: $1^2 = a(1) + b \\Rightarrow a + b = 1$.
For differentiability: The derivative of $x^2$ is $2x$ (at $x=1$, $2(1)=2$). The derivative of $ax+b$ is $a$. Therefore, $a=2$. Substituting into the first equation: $2 + b = 1 \\Rightarrow b = -1$.
The function is differentiable at $x=1$ only if $a=2$ and $b=-1$.

## Summary

The distinction between continuity and differentiability is the boundary between "no breaks" and "no sharp turns." Continuity is a topological property concerning the connectivity of the function's range over its domain. Differentiability is a structural property concerning the existence of a linear approximation. 

Continuity requires that the function does not "skip" values. Differentiability requires that the function's rate of change is well-behaved and unique. While continuous functions are ubiquitous in modeling physical reality, differentiable functions allow for the use of the powerful tools of calculus to perform optimization and predictive modeling. When analyzing a function, always confirm continuity first, as any discontinuity automatically disqualifies the function from being differentiable at that point. Following this, one must inspect the left and right slopes to ensure the transition through the point is smooth, thereby confirming differentiability.`;export{e as default};