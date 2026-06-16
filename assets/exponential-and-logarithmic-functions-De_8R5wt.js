var e=`# Exponential & Logarithmic Functions

## Definition

An exponential function is a mathematical function of the form $f(x)=ab^x$, where $b$ is a positive real number not equal to $1$, and the variable $x$ occurs as an exponent. The constant $a$ is the initial value (the y-intercept), and $b$ is the growth or decay factor. The domain of these functions is the set of all real numbers, while the range is restricted to $(0, \\infty)$ for the parent function $b^x$.

A logarithmic function is defined as the inverse of an exponential function. If $y=b^x$, then its inverse is denoted by $x=\\log_b(y)$, which we express as $f(x)=\\log_b(x)$. Here, $b$ is the base, which must be positive and not equal to $1$. The domain of the parent logarithmic function is $(0, \\infty)$, and the range is the set of all real numbers. Logarithms essentially answer the question: "To what power must the base $b$ be raised to produce the value $x$?"

The relationship between these two is governed by the identity $b^{\\log_b(x)}=x$ for $x>0$, and $\\log_b(b^x)=x$ for all real $x$. This foundational duality makes them essential in analyzing processes that grow or shrink at rates proportional to their current value.

## Key Terminology

To master these functions, one must understand several technical terms that define their behavior and structure:

| Term | Definition |
|---|---|
| Base | The constant $b$ in $b^x$ or $\\log_b(x)$. It dictates the rate of growth or decay. |
| Asymptote | A line that the graph of a function approaches arbitrarily closely as the variable approaches a limit. Exponential functions have horizontal asymptotes; logarithmic functions have vertical asymptotes. |
| Natural Base | The mathematical constant $e \\approx 2.71828$, used extensively in calculus and natural growth models. |
| Common Logarithm | A logarithm with base $10$, often written simply as $\\log(x)$. |
| Natural Logarithm | A logarithm with base $e$, denoted as $\\ln(x)$. |
| Growth Factor | If $b>1$, the function exhibits exponential growth. |
| Decay Factor | If $0<b<1$, the function exhibits exponential decay. |
| Inverse Relationship | The property that exponential and logarithmic functions "undo" each other. |

## Purpose

The primary utility of exponential functions lies in modeling systems where the rate of change is proportional to the current state. This appears in compound interest calculations, population dynamics, radioactive decay, and thermodynamics. For instance, the function $A(t)=Pe^{rt}$ describes the continuous compounding of interest or biological growth over time.

Logarithmic functions serve two main purposes. First, they allow us to solve for exponents in equations like $b^x=y$. Without the logarithm, variables trapped in the exponent remain inaccessible through basic algebraic manipulation. Second, they are used to compress data that spans many orders of magnitude. Because they map large input ranges to smaller output ranges, they are ideal for measuring phenomena like sound intensity (decibels), earthquake magnitude (Richter scale), and chemical acidity (pH).

## Fundamental Properties

The behavior of these functions is governed by rigorous algebraic laws. 

For exponential functions $f(x)=b^x$ (where $b>0, b \\neq 1$):
1. Product Rule: $b^m \\cdot b^n = b^{m+n}$
2. Quotient Rule: $b^m / b^n = b^{m-n}$
3. Power Rule: $(b^m)^n = b^{mn}$
4. Negative Exponent: $b^{-x} = 1/b^x$

For logarithmic functions $f(x)=\\log_b(x)$ (where $b>0, b \\neq 1, x>0$):
1. Product Rule: $\\log_b(MN) = \\log_b(M) + \\log_b(N)$
2. Quotient Rule: $\\log_b(M/N) = \\log_b(M) - \\log_b(N)$
3. Power Rule: $\\log_b(M^k) = k \\cdot \\log_b(M)$
4. Change of Base: $\\log_b(x) = \\frac{\\ln(x)}{\\ln(b)}$

These properties allow for the simplification of complex expressions and the solving of transcendental equations. The change of base formula is particularly useful for computation, as it allows any logarithm to be calculated using standard calculators that typically only support base $10$ or base $e$.

## Types & Variations

Exponential and logarithmic functions can be transformed through horizontal and vertical shifts, stretches, and reflections. 

The interactive graph below demonstrates the effect of varying the base $b$ and horizontal/vertical shifts in an exponential function $f(x)=a \\cdot b^{(x-h)}+k$.

\`\`\`interactivegraph
a * b^(x - h) + k
params: a=1, b=2, h=0, k=0
range: a=-2:2, b=0.1:5, h=-5:5, k=-5:5
\`\`\`

For the exponential family, when $b > 1$, the curve grows rapidly as $x$ increases. When $0 < b < 1$, the function decays toward the horizontal asymptote $y=k$. Modifying $a$ changes the vertical scale and reflects the function across the x-axis if $a$ is negative. Changing $h$ results in a horizontal shift, while $k$ determines the location of the horizontal asymptote.

Logarithmic functions follow similar transformation rules. The function $f(x)=a \\cdot \\log_b(x-h)+k$ features a vertical asymptote at $x=h$. As $b$ increases, the "flatness" of the curve changes, reflecting the slower growth rate of higher-base logarithms.

\`\`\`interactivegraph
a * log(x - h) / log(b) + k
params: a=1, b=2, h=1, k=0
range: a=-3:3, b=1.1:10, h=-5:5, k=-5:5
\`\`\`

Note that in the interactive graph above, $\\log(x-h)/\\log(b)$ utilizes the change-of-base formula to permit variable bases. The reader should observe how the vertical asymptote shifts with $h$ and how the steepness of the curve is dictated by the magnitude of $a$.

## How to Solve

Solving equations involving these functions requires a systematic application of inverse properties.

### Solving Exponential Equations
To solve $b^{f(x)} = c$:
1. Isolate the exponential term: $b^{f(x)} = c$.
2. Take the logarithm of both sides. For base $b$, use $\\log_b$. For base $e$, use $\\ln$.
3. Apply the power rule: $f(x) \\log_b(b) = \\log_b(c)$, which simplifies to $f(x) = \\log_b(c)$.
4. Solve the resulting algebraic equation for $x$.

Example: Solve $3^{2x} = 20$.
- $\\ln(3^{2x}) = \\ln(20)$
- $2x \\ln(3) = \\ln(20)$
- $2x = \\ln(20) / \\ln(3)$
- $x = \\frac{\\ln(20)}{2 \\ln(3)} \\approx 1.363$

### Solving Logarithmic Equations
To solve $\\log_b(f(x)) = c$:
1. Isolate the logarithmic term.
2. Use the definition of a logarithm to convert the equation to exponential form: $f(x) = b^c$.
3. Solve the resulting equation for $x$.
4. Check for extraneous solutions by ensuring the argument of the original logarithm is positive.

Example: Solve $\\log_2(x) + \\log_2(x-2) = 3$.
- Combine logs: $\\log_2(x(x-2)) = 3$
- Rewrite: $x^2 - 2x = 2^3$
- $x^2 - 2x - 8 = 0$
- $(x-4)(x+2) = 0$
- $x=4$ or $x=-2$. Since the argument of $\\log_2(-2)$ is negative, $x=-2$ is invalid. The solution is $x=4$.

## Summary

Exponential and logarithmic functions are the cornerstones of non-linear mathematics. Exponential functions provide a lens through which we view growth and decay, defined by their constant proportionality to current values. Logarithmic functions act as their functional inverses, providing the necessary tools to navigate logarithmic scales and solve for unknown time intervals or growth rates. 

Understanding the translation between these two forms via the definition $y=b^x \\iff x=\\log_b(y)$ is essential. Whether analyzing the stability of a financial investment, the half-life of a radioactive isotope, or the intensity of a wave, the interaction between these two function classes enables the precise modeling of a vast array of natural and synthetic processes. By mastering their properties, transformations, and solution methodologies, one gains the ability to interpret and manipulate the rates of change that define our world.`;export{e as default};