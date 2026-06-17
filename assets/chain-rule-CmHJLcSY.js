var e=`# Chain Rule

In the field of calculus, the Chain Rule stands as one of the most vital theorems for computing the derivative of a composite function. While the product and quotient rules handle functions combined by basic arithmetic, the Chain Rule unlocks the ability to differentiate nested functions—functions where the output of one serves as the input to another.

## Definition

The Chain Rule provides a systematic method for finding the derivative of a composition of functions. Let $f$ and $g$ be functions such that $f$ is differentiable at $g(x)$ and $g$ is differentiable at $x$. The composite function $F(x) = f(g(x))$ is differentiable at $x$, and its derivative is given by the product of the derivative of the outer function evaluated at the inner function and the derivative of the inner function.

Mathematically, the rule is expressed as:
$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$

Alternatively, using Leibniz notation, if $y = f(u)$ and $u = g(x)$, then:
$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$

This identity demonstrates how the rate of change of $y$ with respect to $x$ is composed of the rate of change of $y$ with respect to $u$ multiplied by the rate of change of $u$ with respect to $x$.

## Key Terminology

To master the Chain Rule, one must clearly define the structural components of composite functions:

*   **Outer Function ($f$):** The primary operation applied to the result of the inner function. For example, in $h(x) = \\sin(x^2)$, the sine function is the outer function.
*   **Inner Function ($g$):** The function nested within the outer function. In $h(x) = \\sin(x^2)$, the polynomial $x^2$ is the inner function.
*   **Composite Function:** A function created when one function is substituted into another, denoted as $(f \\circ g)(x) = f(g(x))$.
*   **Intermediate Variable ($u$):** A placeholder variable used in the substitution method to simplify the differentiation process. By letting $u = g(x)$, we simplify the differentiation task to $\\frac{dy}{du} \\cdot \\frac{du}{dx}$.
*   **Differentiability:** A requirement for the rule to apply; both $f$ and $g$ must possess a derivative at the relevant points of evaluation.

## Purpose

The primary purpose of the Chain Rule is to differentiate complex expressions that are not directly solvable by elementary power, trigonometric, or logarithmic rules alone. Without the Chain Rule, we would be limited to differentiating simple sums and products. By providing a bridge between nested layers of functions, the Chain Rule allows for:

1.  **Modeling Dynamic Systems:** Many physical systems evolve through nested dependencies, such as the cooling of a body governed by a time-dependent temperature variable.
2.  **Optimizing Multivariate Functions:** In machine learning, the "Backpropagation" algorithm is effectively a large-scale application of the Chain Rule, allowing the system to update weights by calculating gradients through layers of neurons.
3.  **Solving Related Rates Problems:** The Chain Rule is the mathematical engine behind problems where one variable changes as a function of another, which in turn changes over time (e.g., the expansion of a balloon's volume as its radius changes over time).

## Fundamental Properties

The Chain Rule inherits its legitimacy from the fundamental definition of the derivative as a limit. Consider the difference quotient:
$$\\frac{f(g(x + \\Delta x)) - f(g(x))}{\\Delta x}$$

If we assume $g(x + \\Delta x) - g(x) = \\Delta u$ and $\\Delta u \\neq 0$, we can rewrite the quotient as:
$$\\frac{f(g(x) + \\Delta u) - f(g(x))}{\\Delta u} \\cdot \\frac{\\Delta u}{\\Delta x}$$

As $\\Delta x \\to 0$, $\\Delta u$ also approaches $0$ due to the continuity of $g$. Thus, the expression becomes the product of the limits:
$$\\lim_{\\Delta u \\to 0} \\frac{f(u + \\Delta u) - f(u)}{\\Delta u} \\cdot \\lim_{\\Delta x \\to 0} \\frac{g(x + \\Delta x) - g(x)}{\\Delta x} = f'(u) \\cdot g'(x)$$

This derivation highlights why the rule is so robust; it treats the derivative not just as a static slope, but as a local linear approximation that scales according to the composition of the nested layers.

| Property | Description |
| :--- | :--- |
| Linearity of Scale | The inner derivative $g'(x)$ acts as a scalar multiplier for the rate of $f'(g(x))$. |
| Recursive Nature | The rule can be applied repeatedly to chains of arbitrary length: $\\frac{d}{dx}f(g(h(x))) = f'(g(h(x))) \\cdot g'(h(x)) \\cdot h'(x)$. |
| Inverse Compatibility | It is consistent with the Inverse Function Theorem, where $\\frac{dy}{dx} = \\frac{1}{dx/dy}$. |

## Types & Variations

The Chain Rule manifests in several variations depending on the depth of function nesting and the dimensionality of the variables involved.

### General Power Rule
A common application of the Chain Rule is the generalized power rule for $h(x) = [g(x)]^n$. Applying the rule:
$$\\frac{d}{dx}[g(x)]^n = n[g(x)]^{n-1} \\cdot g'(x)$$
This is essential for differentiating expressions like $(3x^2 + 1)^5$.

### Multivariable Chain Rule
When dealing with a function $z = f(x, y)$ where both $x$ and $y$ are functions of a single variable $t$, the rule expands to:
$$\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$$
This demonstrates that the total change in $z$ is the sum of changes contributed by each input variable.

### Interactive Exploration
The visual nature of the Chain Rule is best observed when examining the composition of transformations. Consider $f(g(x))$ where $g(x) = ax + b$. The Chain Rule tells us the derivative will include the factor $a$.

\`\`\`interactivegraph
f(ax + b)
params: a=1, b=0
range: a=-2:2, b=-2:2
\`\`\`
In the graph above, we plot $f(x) = \\sin(x)$ with internal linear transformations $ax+b$. By adjusting parameter $a$, one can observe how the "frequency" or "stretching" of the wave changes. The derivative's magnitude $a \\cdot \\cos(ax+b)$ reflects this stretching effect precisely, as predicted by the Chain Rule.

## How to Solve

Solving a derivative using the Chain Rule requires a disciplined, step-by-step approach. Follow this workflow to ensure accuracy:

1.  **Decomposition:** Identify the outer function $f(u)$ and the inner function $g(x)$. Write them down explicitly. For example, in $y = \\tan(e^x)$, identify $f(u) = \\tan(u)$ and $u = e^x$.
2.  **Differentiate Components:** Find $f'(u)$ and $g'(x)$ separately. In the previous example, $f'(u) = \\sec^2(u)$ and $g'(x) = e^x$.
3.  **Back-Substitution:** Substitute $g(x)$ back into $f'(u)$ to get $f'(g(x))$. This results in $\\sec^2(e^x)$.
4.  **Multiply:** Apply the Chain Rule formula $f'(g(x)) \\cdot g'(x)$. The final result is $\\sec^2(e^x) \\cdot e^x$.
5.  **Simplify:** Perform any necessary algebraic cleanup, such as moving constants to the front or combining like terms.

### Worked Example: Transcendental Composition
Find the derivative of $y = \\ln(\\sin(x))$.

*   **Step 1:** Define $u = \\sin(x)$. Then $y = \\ln(u)$.
*   **Step 2:** Differentiate with respect to the variables: $\\frac{dy}{du} = \\frac{1}{u}$ and $\\frac{du}{dx} = \\cos(x)$.
*   **Step 3:** Form the product: $\\frac{dy}{dx} = \\frac{1}{u} \\cdot \\cos(x)$.
*   **Step 4:** Replace $u$ with $\\sin(x)$: $\\frac{dy}{dx} = \\frac{1}{\\sin(x)} \\cdot \\cos(x) = \\cot(x)$.

This example illustrates the power of the rule in simplifying trigonometric and logarithmic expressions into more manageable forms.

## Summary

The Chain Rule is the cornerstone of differential calculus, enabling the differentiation of nested functions through the multiplication of local rates of change. By bridging the gap between an outer transformation and an internal input, it allows mathematicians and engineers to break down complex phenomena into simpler, actionable components.

Key takeaways:
*   The rule is defined by $\\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$.
*   It is essential for power functions, trigonometric compositions, and multivariable systems.
*   The "Leibniz notation" perspective ($\\frac{dy}{du}\\frac{du}{dx}$) provides the best intuition for physical systems where variables depend on each other in sequence.
*   Successful application relies on clear identification of inner versus outer functions and diligent multiplication of their respective derivatives.

Understanding the Chain Rule is not merely an academic exercise; it is the fundamental mechanism required to transition from basic algebra to advanced analysis, physics, and modern computational science, such as neural network optimization.`;export{e as default};