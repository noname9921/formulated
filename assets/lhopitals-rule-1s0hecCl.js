var e=`# L'Hôpital's Rule

## Definition

L'Hôpital's Rule is a fundamental theorem in calculus that provides a systematic method for evaluating indeterminate forms of limits. In its most basic form, if we are considering the limit of a quotient of two functions $f(x)$ and $g(x)$ as $x$ approaches a value $c$, and both functions either approach zero or both approach infinity, the limit of the quotient of the functions is equal to the limit of the quotient of their derivatives.

Formally, suppose $f$ and $g$ are differentiable functions on an open interval containing $c$ (except possibly at $c$ itself). If:

$$\\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x) = 0$$

or

$$\\lim_{x \\to c} f(x) = \\pm\\infty \\text{ and } \\lim_{x \\to c} g(x) = \\pm\\infty$$

and if $\\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$ exists (or is $\\pm\\infty$), then:

$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$

This rule allows mathematicians and engineers to resolve limits that initially appear "undefined" by transforming them into a form that can be evaluated using standard limit laws.

## Key Terminology

To fully grasp the application of L'Hôpital's Rule, it is essential to understand specific mathematical terms:

* **Indeterminate Form:** An expression involving limits that does not yield a definite value through simple substitution. Common forms include $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, and $\\infty^0$.
* **Differentiability:** A property of a function having a derivative at a specific point or over a specific interval. L'Hôpital's Rule strictly requires $f$ and $g$ to be differentiable near the point of evaluation.
* **Limit:** The value that a function approaches as the input approaches some value. 
* **Quotient Rule:** A method for finding the derivative of a function that is the ratio of two other functions. Note that L'Hôpital's Rule uses the *ratio of the derivatives*, not the *derivative of the ratio*. This is a common point of confusion.
* **Asymptotic Behavior:** The description of how a function behaves as its independent variable approaches infinity or some other limit point.

## Purpose

The primary purpose of L'Hôpital's Rule is to compute limits that cannot be solved by direct substitution. When we attempt to evaluate a limit such as $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$, direct substitution yields $\\frac{0}{0}$. In classical algebra, division by zero is undefined, and thus the limit is not immediately apparent. L'Hôpital's Rule bypasses this by looking at the "rate of change" of the numerator versus the "rate of change" of the denominator.

Historically, the rule is attributed to Guillaume de l'Hôpital, who published it in the first textbook on differential calculus, *Analyse des infiniment petits pour l'intelligence des lignes courbes* (1696). While the rule was discovered by Johann Bernoulli, the textbook helped popularize the concept and integrate it into the standard mathematical canon.

Beyond academic exercises, the rule is vital in:
1. **Asymptotic Analysis:** Determining the comparative growth rates of functions (e.g., comparing logarithmic growth to polynomial growth).
2. **Optimization:** Assessing limit cases in physical systems where variables approach critical boundaries.
3. **Probability Theory:** Evaluating probability density functions and cumulative distribution functions as they approach infinite tails.

## Fundamental Properties

L'Hôpital's Rule relies on several underlying properties of calculus:

1. **Local Linearity:** The rule is essentially a statement about the linear approximation of functions near a point. Since differentiable functions are locally linear, the ratio of the functions is governed by the ratio of their slopes.
2. **Iterative Application:** The rule can be applied multiple times. If $\\frac{f'(x)}{g'(x)}$ still results in an indeterminate form, one may take the derivative again: $\\lim_{x \\to c} \\frac{f''(x)}{g''(x)}$, provided the conditions of the rule still hold.
3. **One-Sided Limits:** The rule applies to one-sided limits (left-hand or right-hand) as well as two-sided limits, provided the functions behave appropriately on the chosen interval.
4. **Non-Equivalence:** It is crucial to note that $\\frac{f(x)}{g(x)}$ is not equal to $\\frac{f'(x)}{g'(x)}$ in a general sense; the equality only holds in the context of the limit.

## Types & Variations

L'Hôpital's Rule is categorized by the types of indeterminate forms it resolves. While the "0/0" and "infinity/infinity" cases are direct applications, other forms require algebraic manipulation to be converted into these standard forms.

| Indeterminate Form | Transformation Strategy |
| :--- | :--- |
| $\\frac{0}{0}$ | Direct application of the rule. |
| $\\frac{\\infty}{\\infty}$ | Direct application of the rule. |
| $0 \\cdot \\infty$ | Rewrite as $\\frac{f}{1/g}$ or $\\frac{g}{1/f}$ to create a quotient. |
| $\\infty - \\infty$ | Use common denominators or rationalization to create a quotient. |
| $1^\\infty, 0^0, \\infty^0$ | Take the natural logarithm ($\\ln$) of the expression and evaluate the limit of the exponent. |

### Growth Rate Comparison
One of the most important uses of the rule is comparing function growth. We define "growth" by looking at the limit of the ratio of two functions as $x \\to \\infty$.

\`\`\`interactivegraph
\\frac{\\ln(x)}{x^a}
params: a=1
range: a=0.1:2
\`\`\`
The interactive graph above plots the function $f(x) = \\frac{\\ln(x)}{x^a}$ for varying values of $a$. Observe how the behavior at infinity changes based on the power of $x$ in the denominator. When $a > 0$, the denominator eventually grows faster than the numerator, forcing the limit to $0$.

## How to Solve

To apply L'Hôpital's Rule successfully, follow this rigorous step-by-step procedure:

1. **Verify the Indeterminate Form:** Ensure the limit is actually $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$. If the limit results in a definite value (e.g., $\\frac{0}{5} = 0$ or $\\frac{5}{0} = \\infty$), the rule does not apply.
2. **Differentiate Individually:** Calculate $f'(x)$ and $g'(x)$. Do not use the quotient rule for the fraction itself.
3. **Take the New Limit:** Evaluate $\\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$.
4. **Iterate if Necessary:** If the result is still an indeterminate form, ensure the conditions are met and apply the rule again (calculating $f''(x)$ and $g''(x)$).
5. **Convert Exponentials/Products:** If faced with forms like $0^0$, let $y = f(x)^{g(x)}$. Then $\\ln(y) = g(x)\\ln(f(x))$. Evaluate the limit of $\\ln(y)$, then exponentiate the result at the end ($\\lim y = e^{\\text{result}}$).

### Illustrative Example
Consider the evaluation of $\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$.

- **Step 1:** Verify form. $\\frac{1 - \\cos(0)}{0^2} = \\frac{1 - 1}{0} = \\frac{0}{0}$. Valid.
- **Step 2:** Differentiate. $f'(x) = \\sin(x)$, $g'(x) = 2x$.
- **Step 3:** Evaluate new limit. $\\lim_{x \\to 0} \\frac{\\sin(x)}{2x}$. Still $\\frac{0}{0}$.
- **Step 4:** Differentiate again. $f''(x) = \\cos(x)$, $g''(x) = 2$.
- **Step 5:** Final evaluation. $\\lim_{x \\to 0} \\frac{\\cos(x)}{2} = \\frac{\\cos(0)}{2} = \\frac{1}{2}$.

The static graph below shows $f(x) = \\frac{1 - \\cos(x)}{x^2}$, demonstrating that as $x$ approaches $0$, the curve indeed approaches the value $0.5$.

\`\`\`graph
(1 - \\cos(x))/(x^2)
\`\`\`

## Summary

L'Hôpital's Rule is a powerful analytical tool that extends the capabilities of calculus to resolve indeterminate limits. By leveraging the ratio of derivatives, it provides a bridge between functions that are otherwise difficult to evaluate at their boundary points. Key takeaways include:

- The rule is strictly for indeterminate forms $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$.
- Other indeterminate forms must be algebraically manipulated into a ratio before applying the rule.
- Repeated application is permissible, provided the conditions are satisfied at each step.
- The rule is not a substitute for the quotient rule; it is a separate technique for limits.
- Proper application requires verifying the indeterminate form before every iteration. 

Mastery of this rule is essential for students of engineering, physics, and advanced mathematics, as it provides the foundation for analyzing complex limits in power series, differential equations, and asymptotic behavior.`;export{e as default};