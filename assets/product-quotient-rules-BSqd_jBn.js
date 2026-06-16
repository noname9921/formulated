var e=`# Product and Quotient Rules

Calculus is fundamentally the study of change. While the power rule, sum rule, and constant multiple rule handle basic polynomial operations, more complex functions—those resulting from the multiplication or division of two differentiable functions—require specialized techniques. The product and quotient rules are essential pillars of differential calculus, providing the necessary mathematical framework to differentiate composite algebraic, trigonometric, exponential, and logarithmic expressions.

## Definition

The product rule and quotient rule are formulas used to find the derivative of a function that is the product or quotient of two other functions. Suppose we have two functions, $u(x)$ and $v(x)$, which are differentiable at a point $x$.

The product rule states that the derivative of the product $y=u(x)v(x)$ is given by:
$$\\frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x)$$
In shorthand notation, this is often remembered as $f'g + fg'$.

The quotient rule states that the derivative of the quotient $y=\\frac{u(x)}{v(x)}$ (where $v(x) \\neq 0$) is given by:
$$\\frac{d}{dx}\\left[\\frac{u(x)}{v(x)}\\right] = \\frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}$$
This is frequently memorized using the mnemonic "low d-high minus high d-low, over the square of what's below."

## Key Terminology

To utilize these rules effectively, one must understand the specific components involved in the operation:

| Term | Definition |
| :--- | :--- |
| Differentiability | The existence of a derivative at a specific point; a function must be smooth and continuous. |
| $u(x)$ | The "first" function or the "numerator" function in a quotient. |
| $v(x)$ | The "second" function or the "denominator" function in a quotient. |
| $u'(x)$ | The derivative of the first function with respect to $x$. |
| $v'(x)$ | The derivative of the second function with respect to $x$. |
| Derivative | The instantaneous rate of change of a function with respect to one of its variables. |
| Operator | The symbol $\\frac{d}{dx}$, which indicates the operation of differentiation. |

## Purpose

The primary purpose of these rules is to compute derivatives of functions that cannot be simplified into basic polynomials. Without these rules, one would be forced to use the formal limit definition of the derivative:
$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
While mathematically sound, applying this limit definition to products like $f(x) = x^2 \\sin(x)$ or quotients like $f(x) = \\frac{e^x}{x^2+1}$ is computationally prohibitive and prone to error. The product and quotient rules allow mathematicians and engineers to decompose complex functions into simpler, manageable parts, enabling the analysis of growth rates, optimization, and physical dynamics in systems ranging from electrical circuits to quantum mechanics.

## Fundamental Properties

The validity of these rules relies on the linearity of the derivative operator and the properties of limits.

### Derivation of the Product Rule
To derive the product rule, we use the definition of the derivative for $f(x) = u(x)v(x)$:
$$f'(x) = \\lim_{h \\to 0} \\frac{u(x+h)v(x+h) - u(x)v(x)}{h}$$
By adding and subtracting the term $u(x+h)v(x)$ in the numerator, we can regroup:
$$f'(x) = \\lim_{h \\to 0} \\frac{u(x+h)v(x+h) - u(x+h)v(x) + u(x+h)v(x) - u(x)v(x)}{h}$$
$$f'(x) = \\lim_{h \\to 0} \\left[ u(x+h) \\frac{v(x+h)-v(x)}{h} + v(x) \\frac{u(x+h)-u(x)}{h} \\right]$$
Taking the limit as $h \\to 0$, $u(x+h)$ approaches $u(x)$, and the difference quotients approach the respective derivatives $v'(x)$ and $u'(x)$, yielding the result $u(x)v'(x) + v(x)u'(x)$.

### Derivation of the Quotient Rule
The quotient rule is similarly derived by expressing $f(x) = u(x) \\cdot [v(x)]^{-1}$ and applying the product rule in conjunction with the chain rule. The interplay between the signs in the numerator reflects the reciprocal nature of the denominator function.

## Types & Variations

These rules extend to various function types, including trigonometric and exponential functions.

### Product Rule Example
Consider $f(x) = x^3 \\cos(x)$. 
Here, $u(x) = x^3$ and $v(x) = \\cos(x)$. 
Then $u'(x) = 3x^2$ and $v'(x) = -\\sin(x)$.
Applying the rule:
$$f'(x) = (3x^2)(\\cos(x)) + (x^3)(-\\sin(x)) = 3x^2 \\cos(x) - x^3 \\sin(x)$$

### Quotient Rule Example
Consider $f(x) = \\frac{\\ln(x)}{x^2}$.
Here, $u(x) = \\ln(x)$ and $v(x) = x^2$.
Then $u'(x) = \\frac{1}{x}$ and $v'(x) = 2x$.
Applying the rule:
$$f'(x) = \\frac{(\\frac{1}{x})(x^2) - (\\ln(x))(2x)}{(x^2)^2}$$
$$f'(x) = \\frac{x - 2x \\ln(x)}{x^4} = \\frac{1 - 2 \\ln(x)}{x^3}$$

The following graph illustrates the behavior of a product function where the derivative changes signs based on the interplay of the two components.

\`\`\`graph
x*sin(x)
\`\`\`
The graph above plots $f(x) = x \\sin(x)$. Note how the product of a linear function and a periodic function results in an envelope-like oscillation where the amplitude grows as $x$ increases, demonstrating the utility of the product rule in identifying the slope at any given point along this expanding wave.

## How to Solve

To successfully apply the product and quotient rules in a technical or academic setting, follow this systematic workflow:

1. **Identification**: Determine if the expression is a product (terms multiplied) or a quotient (terms divided). If there are multiple layers, identify the "outermost" operation.
2. **Decomposition**: Clearly label your $u(x)$ and $v(x)$. Writing these on the side of your work prevents algebraic confusion.
3. **Differentiation**: Compute $u'(x)$ and $v'(x)$ separately.
4. **Substitution**: Insert these four components into the respective formula template.
5. **Simplification**: This is the most common point of failure. Factor out common terms in the numerator (especially for quotients) to reduce the expression to its simplest form.
6. **Verification**: Check if the derivative makes sense at critical points. For instance, if the function has a local maximum, the derivative should be zero at that point.

### Parameter Exploration
When dealing with quotients, the relative growth of the numerator vs. the denominator dictates the derivative's sign. The interactive tool below allows you to observe how changing parameters influences the quotient $f(x) = \\frac{ax^2+b}{x}$.

\`\`\`interactivegraph
(a*x^2 + b)/x
params: a=1, b=1
range: a=-2:2, b=-2:2
\`\`\`
In this exploration, observe how the parameter $b$ shifts the vertical asymptote and how $a$ affects the steepness of the curve as $x$ moves away from the origin. The quotient rule is vital for finding the critical points of these curves, which shift dynamically as the parameters are adjusted.

## Summary

The product and quotient rules are not merely arbitrary formulas; they are deep mathematical realizations of how growth patterns interact. The product rule captures the simultaneous accumulation of change from two independent sources, while the quotient rule accounts for the inverse sensitivity of the denominator relative to the numerator. Mastery of these rules is a prerequisite for advanced calculus, differential equations, and multivariate analysis. By decomposing complex expressions into their constituent parts—$u(x)$ and $v(x)$—and applying these rigorous templates, one can calculate exact rates of change for virtually any elementary function encountered in scientific inquiry.`;export{e as default};