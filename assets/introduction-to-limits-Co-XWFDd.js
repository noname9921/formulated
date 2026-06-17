var e=`# Introduction to Limits

The concept of a limit is the cornerstone of calculus. It provides the necessary framework for defining derivatives, integrals, and the continuity of functions. Without limits, we would be unable to describe the behavior of functions at points where they might be undefined, such as in the case of division by zero, or to grasp the behavior of functions as they approach infinity.

## Definition

Informally, the limit of a function $f(x)$ as $x$ approaches a value $c$ is the value that $f(x)$ gets closer and closer to as $x$ gets closer and closer to $c$ from either side. We write this as:
$$\\lim_{x \\to c} f(x) = L$$

Formally, we use the epsilon-delta definition of a limit, attributed to Augustin-Louis Cauchy and Karl Weierstrass. We say that $\\lim_{x \\to c} f(x) = L$ if, for every $\\epsilon > 0$, there exists a $\\delta > 0$ such that if $0 < |x - c| < \\delta$, then $|f(x) - L| < \\epsilon$.

This definition encapsulates the idea that we can make the output of the function arbitrarily close to $L$ by choosing a value of $x$ sufficiently close to $c$, without ever needing $x$ to actually reach $c$. It is crucial to note that the limit describes the behavior of the function near $c$, but it is completely independent of the actual value of $f(c)$. The function does not even need to be defined at $c$ for the limit to exist.

## Key Terminology

To discuss limits rigorously, we must define several important terms:

1. **Approaching a value:** This implies that $x$ moves toward $c$ but does not necessarily arrive at $c$.
2. **Two-sided limit:** A limit $\\lim_{x \\to c} f(x) = L$ exists if and only if both the left-hand limit ($\\lim_{x \\to c^-} f(x)$) and the right-hand limit ($\\lim_{x \\to c^+} f(x)$) exist and are equal to $L$.
3. **Left-hand limit:** The value $f(x)$ approaches as $x$ approaches $c$ from values less than $c$.
4. **Right-hand limit:** The value $f(x)$ approaches as $x$ approaches $c$ from values greater than $c$.
5. **Indeterminate form:** An expression such as $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ that does not have a defined value but may have a limit through algebraic manipulation or calculus techniques.
6. **Continuity:** A function $f$ is continuous at $c$ if $\\lim_{x \\to c} f(x) = f(c)$. If this equality fails, the function has a discontinuity.

## Purpose

The primary purpose of limits is to allow mathematicians to perform operations on functions that would otherwise be impossible or undefined. 

- **Calculus of Variations:** Limits allow us to find the "instantaneous" rate of change. By calculating the slope of a secant line between $(c, f(c))$ and $(c+h, f(c+h))$ and taking the limit as $h \\to 0$, we derive the derivative.
- **Area under a curve:** Limits allow us to sum an infinite number of infinitely thin rectangles, forming the basis of the Riemann integral.
- **Asymptotic behavior:** Limits describe the end behavior of functions, helping us understand horizontal and vertical asymptotes.
- **Approximating curves:** Limits enable the use of Taylor and Maclaurin series to approximate complex transcendental functions with simple polynomials.

## Fundamental Properties

Limits follow a set of algebraic rules that make computing them much easier. Assuming $\\lim_{x \\to c} f(x) = L$ and $\\lim_{x \\to c} g(x) = M$, the following laws hold:

| Operation | Property |
| :--- | :--- |
| Sum | $\\lim_{x \\to c} [f(x) + g(x)] = L + M$ |
| Difference | $\\lim_{x \\to c} [f(x) - g(x)] = L - M$ |
| Constant Multiple | $\\lim_{x \\to c} [k \\cdot f(x)] = k \\cdot L$ |
| Product | $\\lim_{x \\to c} [f(x) \\cdot g(x)] = L \\cdot M$ |
| Quotient | $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{L}{M}$ (provided $M \\neq 0$) |
| Power | $\\lim_{x \\to c} [f(x)]^n = L^n$ |

Furthermore, the **Squeeze Theorem** is a vital tool for finding limits that are difficult to solve directly. It states that if $g(x) \\leq f(x) \\leq h(x)$ for all $x$ in an open interval containing $c$ (except possibly at $c$), and $\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$, then $\\lim_{x \\to c} f(x) = L$.

## Types & Variations

Limits are categorized by their behavior:

1. **Finite limits:** As $x \\to c$, $f(x) \\to L$. This is the standard case discussed above.
2. **Infinite limits:** As $x \\to c$, $f(x) \\to \\pm \\infty$. This often indicates a vertical asymptote at $x=c$.
3. **Limits at infinity:** As $x \\to \\pm \\infty$, $f(x) \\to L$. This indicates a horizontal asymptote at $y=L$.
4. **Limits involving infinity:** As $x \\to \\infty$, $f(x) \\to \\infty$. This describes rapid growth, such as $f(x) = e^x$.

To visualize these behaviors, consider the function $f(x) = \\frac{1}{x-c}$. 
\`\`\`graph
1/(x-2)
\`\`\`
The graph above plots $f(x) = \\frac{1}{x-2}$. As $x$ approaches $2$ from the right ($2^+$), $f(x)$ approaches $+\\infty$. As $x$ approaches $2$ from the left ($2^-$), $f(x)$ approaches $-\\infty$. Because the one-sided limits are not equal (and indeed are not finite), we say the limit as $x \\to 2$ does not exist.

## How to Solve

Solving limits requires a systematic approach, often beginning with simple substitution and evolving into more sophisticated techniques.

### 1. Direct Substitution
Always attempt to evaluate the function at $c$ first. If $f(c)$ is defined and the function is continuous, then $\\lim_{x \\to c} f(x) = f(c)$.

### 2. Algebraic Simplification
If direct substitution results in $\\frac{0}{0}$, try to simplify the expression. Common methods include:
- **Factoring:** If the numerator and denominator share a common root $(x-c)$, factor and cancel the term.
- **Rationalization:** If square roots are present, multiply the numerator and denominator by the conjugate to eliminate the root.
- **Common Denominators:** For complex fractions, find a common denominator to simplify the expression into a form where division is possible.

### 3. L'Hôpital's Rule
If a limit results in an indeterminate form like $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, one can use L'Hôpital's Rule, which states:
$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$
This assumes that both functions are differentiable and that the derivative of the denominator is not zero.

### 4. Special Trigonometric Limits
Some limits are foundational and serve as proofs for later theorems. The most famous is:
$$\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$$
This result is crucial for calculating the derivative of $\\sin(x)$.

### 5. Numerical and Graphical Investigation
When algebraic methods fail, one can evaluate the function at points increasingly closer to $c$ (e.g., $c \\pm 0.1, c \\pm 0.01, c \\pm 0.001$) to identify a pattern or "target value."

## Summary

The limit is the mathematical bridge between static algebra and dynamic analysis. By understanding that a limit describes the "trend" of a function rather than its specific value at a point, we gain the ability to analyze motion, growth, and change. 

Mastery of limits involves understanding the rigorous $\\epsilon-\\delta$ definition, recognizing the algebraic properties that allow for the manipulation of limit expressions, and knowing when to apply advanced tools like L'Hôpital's Rule or the Squeeze Theorem. As we progress from basic algebra into calculus, the limit remains the single most important instrument for quantifying the nature of infinitesimally small changes, forming the basis for everything from engineering mechanics to economic modeling and physics. Whether dealing with indeterminate forms or investigating asymptotic behavior, the limit provides the clarity required to describe the behavior of functions in all their complexity.`;export{e as default};