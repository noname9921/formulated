var e=`# Composition of Functions and Inverse Functions

## Definition

The composition of functions is a binary operation that takes two functions $f$ and $g$ and produces a new function $h$ such that $h(x) = g(f(x))$. In this operation, the output of the first function, $f(x)$, becomes the input for the second function, $g$. Formally, if $f: A \\to B$ and $g: B \\to C$, then the composition $(g \\circ f): A \\to C$ is defined by the mapping $x \\mapsto g(f(x))$. The domain of $(g \\circ f)$ consists of all $x$ in the domain of $f$ such that $f(x)$ is in the domain of $g$.

An inverse function, denoted by $f^{-1}$, is a function that reverses the action of $f$. Specifically, if $f: X \\to Y$ is a bijection (both injective and surjective), then $f^{-1}: Y \\to X$ is defined such that $f^{-1}(y) = x$ if and only if $f(x) = y$. For a function to possess an inverse, it must be monotonic or satisfy the horizontal line test, ensuring that each output $y$ corresponds to exactly one input $x$.

## Key Terminology

To analyze these concepts effectively, one must master several foundational terms:

| Term | Definition |
| :--- | :--- |
| Domain | The set of all possible input values $x$ for which the function is defined. |
| Range | The set of all resulting output values $y$ produced by the function. |
| Injective | A function where distinct inputs yield distinct outputs (one-to-one). |
| Surjective | A function where every element in the codomain is mapped to by at least one input (onto). |
| Bijective | A function that is both injective and surjective, guaranteeing the existence of an inverse. |
| Identity Function | A function $id(x) = x$ that maps an element to itself. |
| Preimage | The set of values $x$ that map to a specific subset of the codomain. |

## Purpose

The primary utility of function composition lies in its ability to model multi-stage processes. Many physical and mathematical systems are not direct mappings; rather, they are chains of events where the output of one process serves as the input to another. For example, if a currency converter $f$ maps Dollars to Euros, and a tax calculation function $g$ maps Euros to a taxable amount, the composition $g \\circ f$ allows for a direct conversion from Dollars to taxes without intermediate steps.

Inverse functions serve the purpose of "undoing" operations. In algebraic terms, finding an inverse is equivalent to solving an equation for the independent variable. They are critical in solving logarithmic equations (where the exponential function is the inverse), inverse trigonometric problems (finding an angle given a ratio), and cryptography, where the security of data relies on functions that are easy to compute but computationally infeasible to invert without a private key.

## Fundamental Properties

The interaction between composition and inverses provides the structural basis for much of algebra and calculus.

1. **Non-Commutativity:** In general, $f \\circ g \\neq g \\circ f$. Composition order is vital. If $f(x) = x^2$ and $g(x) = x+1$, then $(f \\circ g)(x) = (x+1)^2 = x^2 + 2x + 1$, whereas $(g \\circ f)(x) = x^2 + 1$.
2. **Inverse Identity:** By definition, $(f \\circ f^{-1})(x) = x$ and $(f^{-1} \\circ f)(x) = x$. This property demonstrates that the composition of a function and its inverse returns the input identity.
3. **Reversal of Composition:** The inverse of a composition follows the "socks and shoes" theorem: $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$. To undo a sequence of actions, one must undo the last action first.
4. **Graphical Symmetry:** The graph of $f^{-1}(x)$ is the reflection of the graph of $f(x)$ across the line $y = x$. If the point $(a, b)$ lies on the curve of $f$, then the point $(b, a)$ must lie on the curve of $f^{-1}$.

## Types & Variations

Functions can be categorized based on their behavior, which influences how we approach their composition and inversion.

### Polynomial Compositions
These involve nesting algebraic expressions. These are globally continuous and differentiable, allowing for standard calculus operations on the resulting composite function.

### Transcendental Compositions
These involve mixing algebraic functions with trigonometric, exponential, or logarithmic functions. These often restrict the domain significantly. For instance, the composition of $\\sqrt{x}$ and $\\ln(x)$ results in $\\sqrt{\\ln(x)}$, which is defined only for $x \\geq 1$.

### Piecewise Inversion
Not all functions are invertible over their entire domain. For example, $f(x) = x^2$ is not injective on $(-\\infty, \\infty)$. However, by restricting the domain to $[0, \\infty)$, we can define an inverse $f^{-1}(x) = \\sqrt{x}$. Many real-world functions are defined in "pieces," where each segment may require a different inverse approach.

The following interactive graph illustrates how shifting a function via parameters affects its composition with another, demonstrating how internal transformations change the mapping.

\`\`\`interactivegraph
(ax + b)^2
params: a=1, b=0
range: a=-2:2, b=-2:2
\`\`\`

The graph above plots the function $f(x) = (ax + b)^2$. By adjusting $a$ and $b$, one can observe how the horizontal shift ($b$) and the horizontal stretch/compression ($a$) transform the parabola, which fundamentally alters the domain constraints required to ensure the existence of an inverse.

## How to Solve

### Calculating Composition
To find $(f \\circ g)(x)$:
1. Identify the inner function $g(x)$.
2. Take the expression for $f(x)$.
3. Wherever an $x$ appears in $f(x)$, substitute the entire expression of $g(x)$.
4. Simplify the resulting algebraic expression by combining like terms and reducing fractions.

Example: Let $f(x) = 3x + 2$ and $g(x) = x^2$.
$(f \\circ g)(x) = f(g(x)) = 3(x^2) + 2 = 3x^2 + 2$.

### Determining the Inverse
To determine $f^{-1}(x)$ for a given function $y = f(x)$:
1. Replace $f(x)$ with $y$.
2. Swap the positions of $x$ and $y$. This reflects the function across the line $y=x$.
3. Solve the resulting equation for $y$.
4. Replace $y$ with $f^{-1}(x)$.

Consider $f(x) = 2x - 5$.
1. $y = 2x - 5$
2. $x = 2y - 5$
3. $x + 5 = 2y \\implies y = \\frac{x+5}{2}$
4. $f^{-1}(x) = \\frac{x}{2} + 2.5$

The graph below illustrates the relationship between $f(x) = 2x - 5$ and its inverse $f^{-1}(x) = 0.5x + 2.5$, showing their symmetry across the identity line.

\`\`\`graph
2x - 5
0.5x + 2.5
x
\`\`\`

The graph above plots $f(x) = 2x - 5$ and $f^{-1}(x) = 0.5x + 2.5$, along with the line $y=x$. The visual symmetry confirms that the inverse function effectively mirrors the original across the identity line.

## Summary

The study of composition and inverse functions provides the essential toolkit for understanding how mathematical models interact and reverse. Composition enables the construction of complex relationships from simpler building blocks, while inverse functions provide the necessary pathway to retrieve original inputs from known outputs. Mastery of these topics requires a rigorous adherence to domain restrictions, an understanding of the algebraic manipulation of variables, and a conceptual grasp of the symmetry inherent in bijective mappings. Whether in engineering, economics, or pure mathematics, the interplay between these two operations remains a cornerstone of analytical thinking.`;export{e as default};