var e=`# Differentiability vs Continuity

## Definition

Continuity and differentiability represent two of the most significant pillars in mathematical analysis, particularly within the study of calculus. While they are intrinsically linked, they characterize fundamentally different behaviors of functions.

A function $f(x)$ is continuous at a point $x=c$ if the graph of the function can be drawn through that point without lifting the pen. Formally, a function $f$ is continuous at $c$ if it satisfies three conditions:
1. $f(c)$ is defined.
2. $\\lim_{x\\to c}f(x)$ exists.
3. $\\lim_{x\\to c}f(x)=f(c)$.

In essence, continuity requires that the local behavior of the function near $c$ aligns perfectly with its value at $c$. If the limit as $x$ approaches $c$ exists but does not equal $f(c)$, or if the limit does not exist entirely, the function is considered discontinuous.

Differentiability is a more stringent requirement. A function $f$ is differentiable at a point $x=c$ if the derivative $f'(c)$ exists. This is defined by the limit of the difference quotient:
$$f'(c)=\\lim_{h\\to 0}\\frac{f(c+h)-f(c)}{h}$$
For this limit to exist, the function must be "smooth" at $c$. This means the slope of the secant line must approach a single, unique value as $h$ approaches zero from both the left and the right sides. If a function is differentiable at $c$, it implies that the function possesses a well-defined tangent line at that point.

## Key Terminology

To navigate the distinction between these two concepts, one must understand several technical terms that appear frequently in analytical proofs:

- **Limit:** The value that a function approaches as the input approaches a specific point.
- **One-Sided Limits:** The values a function approaches from either the positive side ($\\lim_{x\\to c^+}f(x)$) or the negative side ($\\lim_{x\\to c^-}f(x)$). Continuity requires that these two are equal to each other and to the function value.
- **Tangent Line:** A line that touches a curve at a single point and describes the instantaneous rate of change at that point.
- **Smoothness:** An informal way of describing a function that has continuous derivatives.
- **Corner/Cusp:** Points where a function is continuous but not differentiable, characterized by an abrupt change in direction where the left-hand derivative does not equal the right-hand derivative.
- **Vertical Tangent:** A point where the derivative approaches infinity, making the function continuous but non-differentiable.

## Purpose

The primary purpose of distinguishing between continuity and differentiability is to understand the local and global behavior of mathematical models. Continuity guarantees that there are no "gaps" or "jumps" in the domain. It is a necessary prerequisite for the Intermediate Value Theorem, which states that a continuous function on $[a,b]$ must take on every value between $f(a)$ and $f(b)$.

Differentiability, on the other hand, provides the analytical power to determine rates of change, optimization, and accumulation. Without differentiability, concepts like velocity in physics, marginal cost in economics, or slope in geometry would be undefined at critical points. Differentiability acts as a bridge to the Fundamental Theorem of Calculus. While continuity allows us to talk about the area under a curve (integration), differentiability allows us to talk about the precise "speed" at which a function accumulates or changes.

## Fundamental Properties

The most critical relationship between these two properties is the hierarchical implication: Differentiability implies continuity, but continuity does not imply differentiability.

If $f$ is differentiable at $c$, then $f$ is continuous at $c$. We can prove this by examining the limit:
$$\\lim_{x\\to c}(f(x)-f(c))=\\lim_{x\\to c}\\left(\\frac{f(x)-f(c)}{x-c}\\right)(x-c)$$
By the product law of limits, this becomes:
$$\\lim_{x\\to c}\\left(\\frac{f(x)-f(c)}{x-c}\\right) \\cdot \\lim_{x\\to c}(x-c) = f'(c) \\cdot 0 = 0$$
Since $\\lim_{x\\to c}(f(x)-f(c))=0$, it follows that $\\lim_{x\\to c}f(x)=f(c)$, which satisfies the definition of continuity.

Conversely, the converse is false. Consider the function $f(x)=|x|$ at $x=0$.
- **Continuity:** $\\lim_{x\\to 0^-}(-x)=0$ and $\\lim_{x\\to 0^+}(x)=0$. Thus, the function is continuous.
- **Differentiability:** The left-hand derivative is $\\lim_{h\\to 0^-}\\frac{|h|-0}{h}=-1$, while the right-hand derivative is $\\lim_{h\\to 0^+}\\frac{|h|-0}{h}=1$. Since $-1 \\neq 1$, the limit does not exist, and the function is not differentiable at $0$.

The following table summarizes these relationships:

| Property | Can imply Continuity? | Can imply Differentiability? |
| :--- | :--- | :--- |
| Differentiable | Yes | N/A |
| Continuous | N/A | No |
| Jump Discontinuity | No | No |
| Vertical Tangent | Yes | No |

## Types & Variations

There are several "classic" examples that clarify how these concepts diverge.

### 1. The Corner/Cusp
As seen with $f(x)=|x|$, a function can be continuous but fail to be differentiable because the "slope" on either side of the point is different. The limit of the difference quotient does not settle on a single value.

### 2. The Vertical Tangent
Consider $f(x)=\\sqrt[3]{x}$ at $x=0$. As $x$ approaches 0, the derivative $f'(x)=\\frac{1}{3}x^{-2/3}$ approaches infinity. The function is continuous at 0, but the tangent line becomes vertical, meaning the derivative is undefined (or infinite) at that point.

### 3. The Weierstrass Function
Historically, mathematicians once believed that a continuous function must be differentiable "almost everywhere." Karl Weierstrass disproved this by constructing a function that is continuous everywhere but differentiable nowhere. This counter-intuitive result forced a rigorous re-evaluation of calculus foundations.

\`\`\`graph
abs(x)
0.5*x^2
\`\`\`
The graph above plots $f(x)=|x|$ and $f(x)=0.5x^2$. The function $f(x)=|x|$ (the V-shape) is continuous everywhere but fails to be differentiable at $x=0$ due to the sharp corner. In contrast, $f(x)=0.5x^2$ is both continuous and differentiable everywhere, showing a smooth transition.

## How to Solve

To determine if a function $f(x)$ is continuous and differentiable at a point $c$, follow these algorithmic steps:

**Step 1: Check Continuity at $c$**
Evaluate $f(c)$. Then, calculate the limit from the left and the right. If $f(c) = \\lim_{x\\to c^-}f(x) = \\lim_{x\\to c^+}f(x)$, the function is continuous. If they are not equal, the function is discontinuous and therefore cannot be differentiable.

**Step 2: Calculate the Derivative from the Left**
Compute $L_- = \\lim_{h\\to 0^-} \\frac{f(c+h)-f(c)}{h}$. If this limit is finite, it represents the slope from the left.

**Step 3: Calculate the Derivative from the Right**
Compute $L_+ = \\lim_{h\\to 0^+} \\frac{f(c+h)-f(c)}{h}$. If this limit is finite, it represents the slope from the right.

**Step 4: Compare**
- If $L_- = L_+$, the function is differentiable at $c$, and the derivative $f'(c) = L_- = L_+$.
- If $L_- \\neq L_+$, the function is continuous but not differentiable (a corner).
- If either $L_-$ or $L_+$ results in $\\pm\\infty$, the function is continuous but not differentiable (a vertical tangent).

### Example Analysis
Consider $f(x) = \\{x^2 \\text{ if } x \\le 1; 2x-1 \\text{ if } x > 1\\}$.
1. **Continuity:** $f(1)=1^2=1$. $\\lim_{x\\to 1^-}x^2=1$. $\\lim_{x\\to 1^+}(2x-1)=1$. Continuous.
2. **Differentiability:** Left derivative of $x^2$ at $x=1$ is $2x|_{x=1}=2$. Right derivative of $2x-1$ at $x=1$ is $2$.
Since $2=2$, the function is differentiable at $x=1$.

\`\`\`interactivegraph
a*abs(x) + b
params: a=1, b=0
range: a=-2:2, b=-2:2
\`\`\`
The interactive graph allows you to modify the parameter $a$ and $b$ to see how the sharpness of the absolute value function at the origin remains, regardless of shifting or scaling. No matter the values of $a$ and $b$, the function remains continuous but clearly fails to be differentiable at $x=0$ whenever $a \\neq 0$ because the left and right slopes will never coincide.

## Summary

The relationship between continuity and differentiability is one of inclusion: the set of differentiable functions is a proper subset of the set of continuous functions. While continuity ensures a path that is unbroken, differentiability demands a path that is smooth. In practical applications, continuity is the minimum requirement for a function to be considered "well-behaved" enough to exist as a physical or economic model. Differentiability is the "gold standard" that allows for the extraction of dynamic information, such as rates of change, optimization via critical points, and the application of Taylor series approximations. Understanding the distinction is essential for identifying where standard calculus tools remain valid and where they fail due to non-smoothness in the underlying function.`;export{e as default};