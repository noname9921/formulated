var e=`# L'Hôpital's Rule

## Definition
L'Hôpital's Rule is a powerful theorem in calculus used to determine the limit of a quotient of two functions when the limit results in an indeterminate form. Formally, if $f(x)$ and $g(x)$ are differentiable functions on an open interval $I$ containing $c$ (except possibly at $c$ itself), and if $\\lim_{x\\to c} f(x) = \\lim_{x\\to c} g(x) = 0$ or $\\lim_{x\\to c} f(x) = \\lim_{x\\to c} g(x) = \\pm\\infty$, then under the condition that $g'(x) \\neq 0$ for all $x$ in $I$ (except possibly at $c$), the rule states:

$$\\lim_{x\\to c} \\frac{f(x)}{g(x)} = \\lim_{x\\to c} \\frac{f'(x)}{g'(x)}$$

provided that the limit on the right exists or is $\\pm\\infty$. This result is named after the 17th-century French mathematician Guillaume de l'Hôpital, who published the rule in his 1696 textbook, *Analyse des infiniment petits pour l'intelligence des lignes courbes*. Historically, the rule was actually discovered by the Swiss mathematician Johann Bernoulli, who was tutoring l'Hôpital at the time; the publication was part of an agreement between the two men.

## Key Terminology
To master this theorem, one must understand several foundational concepts:

*   **Indeterminate Form:** A limit of the form $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$. These expressions do not define a specific value, as the behavior of the functions near the limit point is dictated by their respective rates of growth or decay.
*   **Differentiability:** The rule requires that the functions $f(x)$ and $g(x)$ are differentiable near the point of interest. If the derivatives do not exist, the rule cannot be applied.
*   **Limit Point ($c$):** The value toward which $x$ approaches. This can be a finite real number, or $\\pm\\infty$.
*   **Derivative of the Quotient:** It is vital to note that L'Hôpital's Rule requires the ratio of the *derivatives* ($\\frac{f'}{g'}$), not the derivative of the *quotient* ($\\frac{f}{g}'$), which would require the Quotient Rule. Using the Quotient Rule is a common error that leads to incorrect results.

## Purpose
The primary purpose of L'Hôpital's Rule is to evaluate limits that would otherwise be difficult or impossible to compute using standard algebraic manipulation, such as factoring or canceling common terms. It provides a systematic method to compare the "strength" or "growth rate" of functions.

In many scenarios, such as the behavior of transcendental functions, elementary limit laws are insufficient. For example, consider the limit $\\lim_{x\\to 0} \\frac{\\sin(x)}{x}$. Factoring is not applicable. By observing the instantaneous rate of change of the numerator ($\\cos(x)$) and the denominator ($1$), we can quickly determine that the limit is $1$. The rule is essentially a way to simplify a complex quotient by focusing on how the functions behave locally near $c$.

## Fundamental Properties
The validity of the rule relies on several conditions that must be checked rigorously:

1.  **Requirement of Indeterminacy:** If the limit is not $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ (e.g., if it is $\\frac{0}{1}$), applying the rule will yield an incorrect result. For instance, $\\lim_{x\\to 0} \\frac{x}{1} = 0$, but applying the rule would give $\\lim_{x\\to 0} \\frac{1}{0}$, which is undefined.
2.  **Continuity and Differentiability:** The functions must be continuous and differentiable in an open interval around the point of evaluation.
3.  **Existence of the Resulting Limit:** The rule is applicable if the limit of the ratio of derivatives exists, is finite, or is infinite. If the limit of the ratio of derivatives does not exist (e.g., it oscillates), the rule remains inconclusive.
4.  **Sequential Application:** If $\\frac{f'(x)}{g'(x)}$ is still an indeterminate form, one may apply the rule again to the derivative functions, provided they meet the differentiability criteria, yielding $\\frac{f''(x)}{g''(x)}$. This can be repeated until a determinate form is achieved.

## Types & Variations
While the standard rule addresses $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$, other indeterminate forms can be converted into these types through algebraic manipulation:

| Indeterminate Form | Strategy for Conversion |
| :--- | :--- |
| $0 \\cdot \\infty$ | Rewrite as $\\frac{f(x)}{1/g(x)}$ to obtain $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$. |
| $\\infty - \\infty$ | Use common denominators or rationalization to form a single fraction. |
| $0^0, 1^\\infty, \\infty^0$ | Use the natural logarithm: $y = f(x)^{g(x)} \\implies \\ln(y) = g(x) \\ln(f(x))$. |

Consider the case of $1^\\infty$, such as $\\lim_{x\\to 0} (1+x)^{1/x}$. By taking the natural log, we obtain $\\lim_{x\\to 0} \\frac{\\ln(1+x)}{x}$, which is $\\frac{0}{0}$. Applying the rule once gives $\\lim_{x\\to 0} \\frac{1/(1+x)}{1} = 1$. Since the log of the limit is $1$, the original limit is $e^1 = e$.

\`\`\`interactivegraph
\\frac{\\ln(1 + ax)}{x}
params: a=1
range: a=-2:2
\`\`\`
The interactive graph above demonstrates the ratio $\\frac{\\ln(1+ax)}{x}$. As $x$ approaches $0$, the function approaches the value of the parameter $a$, illustrating how L'Hôpital's Rule can resolve limits involving logarithmic functions.

## How to Solve
When encountering a limit that appears to require L'Hôpital's Rule, follow this systematic procedure:

**Step 1: Substitution.** Direct substitute $x=c$ into the expression. Confirm that the result is an indeterminate form (e.g., $\\frac{0}{0}$). If it is not, the rule may not be applicable.

**Step 2: Differentiation.** Calculate the derivative of the numerator $f'(x)$ and the derivative of the denominator $g'(x)$ independently. 

**Step 3: Evaluation.** Construct the new fraction $\\frac{f'(x)}{g'(x)}$ and attempt to evaluate the limit again by substituting $x=c$.

**Step 4: Iteration.** If the new expression is still indeterminate, verify that the conditions for the rule still hold and differentiate again to find $\\frac{f''(x)}{g''(x)}$. Continue this process until the limit is calculable.

**Step 5: Addressing non-quotient forms.** If the problem is an exponent or product, apply logarithmic properties before differentiating to transform the problem into a quotient.

Consider the limit $\\lim_{x\\to \\infty} \\frac{x^2}{e^x}$. 
1. The form is $\\frac{\\infty}{\\infty}$. 
2. Differentiate once: $\\lim_{x\\to \\infty} \\frac{2x}{e^x}$. Still $\\frac{\\infty}{\\infty}$.
3. Differentiate again: $\\lim_{x\\to \\infty} \\frac{2}{e^x}$. 
4. The numerator is constant ($2$) and the denominator grows toward $\\infty$. Thus, the limit is $0$.

The following graph shows the functions $f(x) = x^2$ and $g(x) = e^x$. Note how $e^x$ dominates the growth of $x^2$ as $x$ increases, confirming the limit result of $0$.

\`\`\`graph
x^2
\\exp(x)
\`\`\`

## Summary
L'Hôpital's Rule is an essential tool in the calculus toolkit, bridging the gap between algebraic limits and the dynamics of functions. By utilizing the relationship between the slopes of two functions at a point of indeterminacy, it allows mathematicians to evaluate complex limits that would otherwise be impenetrable.

Success with L'Hôpital's Rule requires a disciplined approach: checking for the indeterminate form, strictly adhering to the differentiation of individual components rather than the quotient, and recognizing when algebraic transformations are necessary for non-fractional indeterminate forms. While powerful, the rule is not a panacea for all limits; it is an auxiliary technique to be used when standard algebraic methods are exhausted. Mastery of this rule provides deep insights into the relative growth rates of different classes of functions, an understanding central to both pure mathematics and applied fields such as physics, engineering, and computer science analysis.`;export{e as default};