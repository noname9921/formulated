var e=`# Limits at Infinity and Asymptotes

## Definition

Limits at infinity are a fundamental analytical tool used to describe the long-term behavior of a function $f(x)$ as the independent variable $x$ grows without bound in either the positive or negative direction. Formally, we define the horizontal limit as follows:

We say that $\\lim_{x \\to \\infty} f(x) = L$ if for every $\\epsilon > 0$, there exists a corresponding number $M > 0$ such that if $x > M$, then $|f(x) - L| < \\epsilon$. 

Similarly, for the negative direction, $\\lim_{x \\to -\\infty} f(x) = L$ if for every $\\epsilon > 0$, there exists a corresponding number $N < 0$ such that if $x < N$, then $|f(x) - L| < \\epsilon$.

Geometrically, these limits represent the value that the function approaches as we move further to the far right or far left of the coordinate plane. When these limits exist and result in a finite real number $L$, the line $y = L$ is defined as a horizontal asymptote of the curve. Unlike vertical asymptotes, which are dictated by points of discontinuity or division by zero, horizontal asymptotes characterize the end-behavior of the function.

## Key Terminology

To understand this topic, one must master several specific terms:

| Term | Definition |
| :--- | :--- |
| End Behavior | The trend of a function's values as $x$ approaches $\\pm \\infty$. |
| Horizontal Asymptote | A horizontal line $y=L$ that the graph of a function approaches as $x \\to \\pm \\infty$. |
| Vertical Asymptote | A vertical line $x=c$ where $f(x) \\to \\pm \\infty$ as $x \\to c$. |
| Oblique (Slant) Asymptote | A line $y=mx+b$ ($m \\neq 0$) that a function approaches as $x \\to \\pm \\infty$. |
| Indeterminate Form | An expression such as $\\frac{\\infty}{\\infty}$ or $\\infty - \\infty$ requiring further analysis. |
| Growth Rate | The relative speed at which a function approaches its limit compared to other functions. |

## Purpose

The study of limits at infinity is essential for sketching accurate function graphs and understanding the global dynamics of mathematical models. In physics, for example, the stability of a system often depends on whether a variable (such as velocity or temperature) reaches a steady-state value as time $t$ approaches infinity. In economics, these limits help determine the long-run average cost or market saturation points.

By calculating these limits, mathematicians can discern whether a function diverges (approaches $\\pm \\infty$), converges to a constant, or oscillates indefinitely. This classification allows for the simplification of complex rational functions and provides a basis for analyzing asymptotic expansion, which is critical in computer science algorithm analysis and numerical integration.

## Fundamental Properties

The arithmetic of limits at infinity mirrors the basic rules of finite limits, provided the limits exist. Let $\\lim_{x \\to \\infty} f(x) = L$ and $\\lim_{x \\to \\infty} g(x) = M$.

1. Sum Rule: $\\lim_{x \\to \\infty} [f(x) + g(x)] = L + M$
2. Difference Rule: $\\lim_{x \\to \\infty} [f(x) - g(x)] = L - M$
3. Product Rule: $\\lim_{x \\to \\infty} [f(x) \\cdot g(x)] = L \\cdot M$
4. Quotient Rule: $\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = \\frac{L}{M}$, provided $M \\neq 0$
5. Power Rule: $\\lim_{x \\to \\infty} [f(x)]^n = L^n$, for any real number $n$ such that $f(x)^n$ is defined.

Additionally, a crucial property is the behavior of the reciprocal of a power function:
$$\\lim_{x \\to \\pm \\infty} \\frac{1}{x^n} = 0$$
for any $n > 0$. This specific identity serves as the foundation for solving limit problems involving rational functions by dividing numerator and denominator terms by the highest power of $x$ present in the denominator.

## Types & Variations

There are three primary scenarios when examining the end behavior of rational functions $f(x) = \\frac{P(x)}{Q(x)}$:

1. **Degree of Numerator < Degree of Denominator**: If $\\text{deg}(P) < \\text{deg}(Q)$, then $\\lim_{x \\to \\pm \\infty} f(x) = 0$. The x-axis ($y=0$) is the horizontal asymptote.
2. **Degree of Numerator = Degree of Denominator**: If $\\text{deg}(P) = \\text{deg}(Q)$, then $\\lim_{x \\to \\pm \\infty} f(x) = \\frac{a}{b}$, where $a$ and $b$ are the leading coefficients of $P(x)$ and $Q(x)$ respectively. The line $y = \\frac{a}{b}$ is the horizontal asymptote.
3. **Degree of Numerator = Degree of Denominator + 1**: In this case, the limit does not exist as a finite number (it approaches $\\pm \\infty$). However, the function possesses an oblique or slant asymptote, found by performing polynomial long division to express the function as $f(x) = (mx + b) + \\frac{R(x)}{Q(x)}$. As $x \\to \\pm \\infty$, the remainder term $\\frac{R(x)}{Q(x)} \\to 0$, and the function approaches the line $y = mx + b$.

\`\`\`interactivegraph
(ax + b) / (x + c)
params: a=1, b=0, c=1
range: a=-2:2, b=-2:2, c=-2:2
\`\`\`
The graph above displays the rational function $f(x) = \\frac{ax+b}{x+c}$. By adjusting the sliders, one can observe how the horizontal asymptote ($y=a$) and the vertical asymptote ($x=-c$) shift in response to the parameters $a$ and $c$, demonstrating how these limits define the global skeleton of the function.

## How to Solve

To evaluate limits at infinity analytically, follow this systematic approach:

### Step 1: Analyze the dominant terms
If the function is a ratio of polynomials, identify the term with the highest exponent in the denominator. This term dictates the growth rate of the denominator.

### Step 2: Divide by the dominant term
Divide every term in both the numerator and the denominator by the highest power of $x$ identified in Step 1. This transforms the expression into a form where each individual piece of the function contains terms of the form $\\frac{k}{x^n}$.

### Step 3: Apply the Limit
Apply the limit operator to each individual term. Since $\\lim_{x \\to \\infty} \\frac{k}{x^n} = 0$ for $n > 0$, the expression simplifies significantly, leaving only the constants or the dominant ratio.

### Example Derivation
Consider the limit:
$$\\lim_{x \\to \\infty} \\frac{3x^2 - 5x + 1}{2x^2 + 4}$$
Divide numerator and denominator by $x^2$:
$$\\lim_{x \\to \\infty} \\frac{\\frac{3x^2}{x^2} - \\frac{5x}{x^2} + \\frac{1}{x^2}}{\\frac{2x^2}{x^2} + \\frac{4}{x^2}} = \\lim_{x \\to \\infty} \\frac{3 - \\frac{5}{x} + \\frac{1}{x^2}}{2 + \\frac{4}{x^2}}$$
Using the property $\\lim_{x \\to \\infty} \\frac{1}{x^n} = 0$:
$$\\frac{3 - 0 + 0}{2 + 0} = \\frac{3}{2}$$
Thus, the horizontal asymptote is $y = 1.5$.

### Transcendental Functions
For non-algebraic functions, growth rates vary. Exponential functions $e^x$ grow faster than any polynomial, while logarithmic functions $\\ln(x)$ grow slower than any power function $x^n$ where $n > 0$. Understanding these hierarchies allows for rapid limit evaluation.

The graph below plots $f(x) = \\arctan(x)$, illustrating a function with two distinct horizontal asymptotes. As $x$ approaches positive infinity, the curve levels off at $\\pi/2$. As $x$ approaches negative infinity, it levels off at $-\\pi/2$.

\`\`\`graph
\\arctan(x)
\\pi/2
-\\pi/2
\`\`\`

## Summary

Limits at infinity are the mathematical lens through which we view the long-term behavior of functions. By identifying whether a function converges to a constant or grows without bound, we classify the presence of horizontal and oblique asymptotes. This analysis requires a rigorous approach: identifying dominant terms, simplifying through division, and applying the fundamental properties of limits. Understanding these concepts is not merely an exercise in calculus, but a prerequisite for modeling systems where identifying steady states, thresholds, and end-state stability is vital to the analytical outcome. By mastering the distinction between the degrees of rational functions and the hierarchies of transcendental growth, one gains the ability to predict the behavior of complex mathematical models with precision.`;export{e as default};