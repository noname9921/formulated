var e=`# Basic Differentiation Rules

## Definition

Differentiation is the mathematical process of finding the derivative of a function. The derivative represents the instantaneous rate of change of a function with respect to one of its variables. Formally, for a function $f(x)$, the derivative $f'(x)$ or $\\frac{dy}{dx}$ is defined by the limit:

$$f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}$$

This limit defines the slope of the tangent line to the curve $y=f(x)$ at any point $x$ in the domain where the function is differentiable. Basic differentiation rules provide an algebraic alternative to evaluating this limit from first principles for common function classes, such as polynomials, exponentials, and trigonometric functions. By applying these rules systematically, one can determine the sensitivity of an output value to changes in the input value without performing the complex limit process for every instance.

## Key Terminology

To understand the calculus of derivatives, one must master several foundational terms:

1. **Independent Variable:** The input variable, typically denoted as $x$, which represents the domain of the function.
2. **Dependent Variable:** The output variable, typically denoted as $y$ or $f(x)$, which changes as the input varies.
3. **Derivative:** The function that calculates the instantaneous slope at any point. If the derivative is positive, the function is increasing; if negative, it is decreasing.
4. **Differentiability:** A condition where a function is "smooth" and lacks breaks, sharp corners, or vertical tangents. A function must be continuous to be differentiable.
5. **Linear Operator:** Differentiation is a linear operator, meaning it obeys the properties of additivity and homogeneity.
6. **Tangent Line:** A line that touches a curve at exactly one point and has the same slope as the function at that point.

## Purpose

The primary purpose of differentiation rules is to simplify the computation of complex functions. Without these rules, finding the derivative of a high-degree polynomial or a product of functions would require tedious algebraic manipulation of the difference quotient.

In physics, these rules allow for the derivation of velocity from position and acceleration from velocity. In economics, differentiation is used to calculate "marginal" values—such as marginal cost or marginal revenue—by analyzing the change in total output relative to a unit change in input. In engineering, they are essential for optimization problems, where identifying the points where the derivative equals zero helps locate local maxima and minima, which correspond to optimal performance or stability points in a system.

## Fundamental Properties

Differentiation rules rely on the principle of linearity and specific operational axioms. These rules allow for the decomposition of complex expressions into manageable parts.

1. **Constant Rule:** The derivative of a constant is zero. If $f(x)=c$, then $f'(x)=0$. This reflects the fact that a constant value does not change, and therefore has a slope of zero.
2. **Sum and Difference Rule:** The derivative of a sum (or difference) is the sum (or difference) of the derivatives. If $h(x)=f(x)\\pm g(x)$, then $h'(x)=f'(x)\\pm g'(x)$.
3. **Constant Multiple Rule:** For a constant $c$, the derivative of $cf(x)$ is $c \\cdot f'(x)$. This allows for the scaling of rates of change.
4. **Power Rule:** Perhaps the most frequently used rule, it states that for any real number $n$, if $f(x)=x^n$, then $f'(x)=nx^{n-1}$. 

These properties imply that the derivative of a polynomial $P(x)=a_n x^n + a_{n-1} x^{n-1} + \\dots + a_0$ can be found simply by differentiating each term individually.

## Types & Variations

Beyond the basic rules for polynomials, there are specialized rules for different function families.

### Exponential and Logarithmic Rules
For the natural exponential function $f(x)=e^x$, the derivative is itself: $\\frac{d}{dx}e^x = e^x$. This is a unique property of the base $e$. For general logarithms, such as $f(x)=\\ln(x)$, the derivative is $f'(x)=\\frac{1}{x}$.

### Trigonometric Rules
Trigonometric functions follow cyclical patterns. The derivative of $\\sin(x)$ is $\\cos(x)$, and the derivative of $\\cos(x)$ is $-\\sin(x)$. These rules are fundamental in wave analysis and harmonic motion.

### The Product and Quotient Rules
When functions are multiplied or divided, the derivative is not simply the product or quotient of the individual derivatives.
* **Product Rule:** For $f(x)=u(x)v(x)$, $f'(x)=u'(x)v(x)+u(x)v'(x)$.
* **Quotient Rule:** For $f(x)=\\frac{u(x)}{v(x)}$, $f'(x)=\\frac{u'(x)v(x)-u(x)v'(x)}{[v(x)]^2}$.

### The Chain Rule
The Chain Rule is used for the composition of functions, $f(g(x))$. It states $f'(x)=f'(g(x)) \\cdot g'(x)$. This is crucial for differentiating complex functions where one function is nested inside another, such as $f(x)=\\sin(x^2)$.

## How to Solve

Solving differentiation problems effectively requires a methodical approach, often referred to as the "decompose and apply" strategy.

| Rule Category | Mathematical Expression | Derivative Result |
| :--- | :--- | :--- |
| Power Rule | $f(x)=x^n$ | $f'(x)=nx^{n-1}$ |
| Constant Rule | $f(x)=c$ | $f'(x)=0$ |
| Sum Rule | $f(x)=g(x)+h(x)$ | $f'(x)=g'(x)+h'(x)$ |
| Product Rule | $f(x)=u(x)v(x)$ | $f'(x)=u'v+uv'$ |
| Quotient Rule | $f(x)=u(x)/v(x)$ | $f'(x)=(u'v-uv')/v^2$ |

### Step-by-Step Workflow
1. **Identify the structure:** Determine if the function is a single term, a sum, a product, a quotient, or a composition.
2. **Apply the outermost rule first:** If the function is a composition, use the Chain Rule. If it is a quotient, start with the Quotient Rule.
3. **Differentiate internal components:** Work inward through the function, applying the Power, Exponential, or Trigonometric rules to the sub-expressions.
4. **Simplify:** Collect terms and factor expressions to reach a standard, readable form.

For example, to differentiate $f(x)=3x^2 + \\sin(x)$:
1. Apply the Sum Rule: $\\frac{d}{dx}(3x^2) + \\frac{d}{dx}(\\sin(x))$.
2. Apply the Constant Multiple and Power Rules: $3(2x) + \\cos(x)$.
3. Simplify: $6x + \\cos(x)$.

The following interactive graph allows the exploration of the power rule for functions of the form $f(x)=ax^n+b$. By adjusting the power $n$ and the scalar $a$, one can visualize how the steepness of the curve changes.

\`\`\`interactivegraph
ax^n + b
params: a=1, n=2, b=0
range: a=-2:2, n=1:4, b=-3:3
\`\`\`

In the interactive graph above, changing $n$ illustrates the power rule $nx^{n-1}$. For $n=2$, the derivative is $2ax$, which represents a line. For $n=1$, the derivative is simply $a$, representing a horizontal line.

## Summary

Basic differentiation rules transform the abstract limit definition of the derivative into a set of accessible algebraic procedures. By mastering the Power, Product, Quotient, and Chain rules, a student or practitioner can efficiently compute the rates of change for virtually any elementary function. 

These tools are not merely academic exercises; they form the bedrock of calculus-based modeling. Whether analyzing the behavior of a polynomial curve using the Power Rule or evaluating the interaction of two dynamic systems using the Product Rule, the ability to differentiate is fundamental to understanding motion, growth, and change in any quantitative field. Consistent practice with these rules, combined with an understanding of when to apply the Chain Rule versus the Quotient Rule, ensures proficiency in navigating the functional relationships that define modern science and engineering.`;export{e as default};