var e=`# Basic Differentiation Rules

## Definition

Differentiation is the mathematical process of finding the derivative of a function. The derivative represents the instantaneous rate of change of a function with respect to one of its variables. Formally, for a function $f(x)$, the derivative $f'(x)$ or $\\frac{df}{dx}$ is defined by the limit:

$$f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}$$

This limit defines the slope of the tangent line to the graph of $f(x)$ at any point $x$. When we speak of "Basic Differentiation Rules," we refer to the collection of algebraic shortcuts that allow us to compute this limit without evaluating the difference quotient directly every time. These rules translate the limit definition into a set of procedural operations that handle sums, products, quotients, and power functions efficiently.

## Key Terminology

To understand the calculus of derivatives, one must master specific terms that define the behavior of functions and their slopes:

* **Derivative:** The function that gives the slope of the tangent line at any point.
* **Differentiable:** A property of a function where a derivative exists at every point in its domain. A function must be continuous to be differentiable, though continuity does not guarantee differentiability (e.g., the absolute value function at $x=0$).
* **Constant:** A fixed value that does not change with $x$. Its derivative is always $0$.
* **Variable:** A symbol representing a value that can change, usually denoted by $x$.
* **Coefficient:** A numerical factor multiplying a variable term.
* **Tangent Line:** A straight line that touches a curve at a point and has the same slope as the curve at that point.
* **Power Rule:** The fundamental rule for differentiating expressions of the form $x^n$.

## Purpose

The primary purpose of differentiation rules is to simplify the analysis of dynamic systems. By reducing complex limit problems to algebraic manipulation, we gain the ability to determine the velocity of an object given its position, the rate of chemical reaction given concentration, or the marginal cost of production given a total cost function. 

These rules enable the study of optimization. By setting the derivative of a function equal to zero, we can identify critical points—the peaks and valleys of a function—which are essential in engineering, economics, and physics for maximizing efficiency or minimizing waste. Without these rules, calculating these rates for anything beyond simple polynomials would be computationally prohibitive.

## Fundamental Properties

Differentiation is a linear operator. This linearity is encapsulated in two core properties: the Sum Rule and the Constant Multiple Rule.

### The Constant Multiple Rule
If $c$ is a constant and $f$ is a differentiable function, then:
$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$
This implies that constant factors can be factored out of the differentiation process.

### The Sum and Difference Rule
For any two differentiable functions $f(x)$ and $g(x)$:
$$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$$
This indicates that the derivative of a sum is the sum of the derivatives. This allows for the term-by-term differentiation of polynomials.

### The Power Rule
The bedrock of differentiation is the Power Rule. For any real number $n$:
$$\\frac{d}{dx}(x^n) = nx^{n-1}$$
This rule applies whether $n$ is positive, negative, fractional, or irrational, provided the function is defined at $x$.

## Types & Variations

Beyond the fundamental rules, complex expressions require structured approaches for differentiation.

### The Product Rule
When two functions $u(x)$ and $v(x)$ are multiplied, the derivative is not simply the product of their derivatives. Instead, we use:
$$\\frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x)$$

### The Quotient Rule
For the division of two functions $u(x)$ and $v(x)$ where $v(x) \\neq 0$:
$$\\frac{d}{dx}\\left[\\frac{u(x)}{v(x)}\\right] = \\frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}$$

### The Chain Rule
The Chain Rule is used for composite functions $f(g(x))$. It quantifies how the change in $g$ affects $f$:
$$\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)$$

### Summary Table of Basic Derivatives

| Function $f(x)$ | Derivative $f'(x)$ |
| :--- | :--- |
| $c$ (constant) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\\ln(x)$ | $\\frac{1}{x}$ |
| $\\sin(x)$ | $\\cos(x)$ |
| $\\cos(x)$ | $-\\sin(x)$ |

## How to Solve

To differentiate a complex function, follow a systematic approach:

1. **Identify the structure:** Is it a polynomial, a product, a quotient, or a composition?
2. **Apply outer rules first:** If it is a composition, use the Chain Rule. If it is a quotient, use the Quotient Rule.
3. **Decompose:** Break the expression into smaller parts. If you have $f(x) = (x^2 + 1)(3x)$, treat $(x^2+1)$ as $u$ and $3x$ as $v$, then apply the product rule.
4. **Differentiate each piece:** Apply the power rule or the derivative of transcendental functions to the individual components identified in step 3.
5. **Simplify:** Collect like terms. Often, derivatives are left in factored form for easier identification of roots or critical points.

### Interactive Exploration
The following interactive graph allows you to visualize how the slope of a polynomial changes by modifying the power $n$. The function plotted is $f(x) = x^n$. Notice that as $n$ changes, the rate at which $f(x)$ grows changes, directly corresponding to the power rule $nx^{n-1}$.

\`\`\`interactivegraph
x^n
params: n=2
range: n=0.5:4
\`\`\`

### Static Visualization
The graph below plots $f(x) = x^2$ and its derivative $f'(x) = 2x$. Note that when $x=0$, the tangent of the parabola is horizontal (slope $0$), which corresponds to the point where the derivative graph intersects the x-axis.

\`\`\`graph
x^2
2*x
\`\`\`

## Summary

Basic differentiation rules provide the scaffolding for all of calculus. By understanding the Power, Product, Quotient, and Chain rules, a mathematician or scientist can decompose virtually any elementary function into manageable pieces. 

- The **Power Rule** handles algebraic growth.
- The **Sum/Difference/Constant Multiple Rules** ensure linearity.
- The **Product and Quotient Rules** manage interacting functions.
- The **Chain Rule** allows for the nesting of processes.

Mastery of these rules is not merely about mechanical execution; it is about recognizing the "flow" of a mathematical expression. When you differentiate, you are not just calculating a number—you are determining the sensitivity of an output to an input. Whether calculating the velocity of a particle or the marginal profit of a firm, these fundamental rules remain the essential tools of quantitative analysis. Consistent practice in identifying which rule to apply in specific scenarios is the key to moving from basic arithmetic to advanced modeling in engineering and the physical sciences.`;export{e as default};