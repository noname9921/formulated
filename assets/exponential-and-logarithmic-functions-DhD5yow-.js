var e=`# Exponential & Logarithmic Functions

## Definition

An exponential function is a mathematical function of the form $f(x)=ab^x$, where the base $b$ is a positive real number not equal to 1, and the exponent $x$ is a variable. The constant $a$ is the initial value or the value of the function when $x=0$. Unlike polynomial functions where the variable is the base, exponential functions feature the variable in the exponent, representing growth or decay rates that are proportional to the current value.

A logarithmic function is the inverse function of an exponential function. It is defined as $f(x)=\\log_b(x)$ if and only if $b^{f(x)}=x$. For this definition to hold, $b>0$ and $b\\neq 1$, and the argument $x$ must be strictly greater than zero. While exponential functions map all real numbers to positive real numbers, logarithmic functions map positive real numbers to all real numbers, effectively "undoing" the exponential operation.

## Key Terminology

To master these functions, one must understand the following technical components:

| Term | Definition |
| :--- | :--- |
| Base ($b$) | The constant number being raised to a power; must be positive and not equal to 1. |
| Exponent ($x$) | The variable representing the power to which the base is raised. |
| Argument | The value inside the logarithm, which must be strictly positive. |
| Asymptote | A line that the graph of a function approaches arbitrarily closely as the variable approaches infinity or a specific value. |
| Natural Base ($e$) | An irrational constant approximately equal to $2.71828$, essential for continuous growth models. |
| Common Logarithm | A logarithm with base 10, often denoted simply as $\\log(x)$. |
| Natural Logarithm | A logarithm with base $e$, denoted as $\\ln(x)$. |
| Transcendental | A number or function that is not a root of a non-zero polynomial equation with rational coefficients. |

## Purpose

The primary purpose of exponential functions is to model processes where the rate of change is proportional to the current state. This makes them indispensable in fields like biology (population growth), finance (compound interest), and physics (radioactive decay). If a quantity increases by a fixed percentage over a fixed interval, it follows an exponential trajectory.

Logarithmic functions serve two main purposes. First, they are the mathematical tools used to solve for variables located in the exponent, such as determining the time required for an investment to reach a specific target. Second, they are used to compress data that spans many orders of magnitude. For instance, the Richter scale for earthquake intensity and the decibel scale for sound are logarithmic, allowing us to represent massive ranges of physical intensity using manageable, linear numerical values.

## Fundamental Properties

Exponential and logarithmic functions share inverse relationships, which lead to their fundamental properties.

For $b>0, b\\neq 1$:

1. **Exponential Identity:** $b^0=1$. The graph of $f(x)=b^x$ always passes through $(0,1)$.
2. **Logarithmic Identity:** $\\log_b(1)=0$. The graph of $f(x)=\\log_b(x)$ always passes through $(1,0)$.
3. **Inverse Property:** $b^{\\log_b(x)}=x$ for $x>0$, and $\\log_b(b^x)=x$ for all real $x$.
4. **Product Rule:** $\\log_b(MN) = \\log_b(M) + \\log_b(N)$.
5. **Quotient Rule:** $\\log_b(M/N) = \\log_b(M) - \\log_b(N)$.
6. **Power Rule:** $\\log_b(M^k) = k \\cdot \\log_b(M)$.
7. **Change of Base Formula:** $\\log_b(x) = \\frac{\\log_k(x)}{\\log_k(b)}$ for any valid base $k$.

The relationship between the base and the growth rate is critical. If $b>1$, the function $b^x$ exhibits exponential growth. If $0<b<1$, the function $b^x$ exhibits exponential decay. In both cases, the $x$-axis acts as a horizontal asymptote for the exponential function, while the $y$-axis acts as a vertical asymptote for the logarithmic function.

\`\`\`interactivegraph
a^x
params: a=2
range: a=0.1:4
\`\`\`

The interactive graph above demonstrates how changing the base $a$ affects the growth rate of $f(x)=a^x$. Observe that for $a>1$, the function is strictly increasing, while for $0<a<1$, the function is strictly decreasing.

## Types & Variations

1. **Natural Exponential Function ($e^x$):** This is the "gold standard" of exponential functions. Because the derivative of $e^x$ is $e^x$, it appears naturally in calculus, probability, and differential equations.
2. **Common Exponential Function ($10^x$):** Useful in scientific contexts where powers of ten are standard.
3. **Logarithmic Variation:**
   - **Common Logarithm:** Used in historical engineering and standard base-10 scales.
   - **Natural Logarithm:** Used in theoretical analysis and calculus due to the properties of $e$.
   - **Binary Logarithm ($\\log_2$):** Used extensively in computer science to measure information entropy and algorithm complexity (e.g., binary search).

## How to Solve

Solving problems involving these functions typically requires isolating the exponential or logarithmic term and applying inverse operations.

### Solving Exponential Equations
To solve $b^x = c$:
1. Apply the logarithm to both sides: $\\log(b^x) = \\log(c)$.
2. Use the power rule: $x \\cdot \\log(b) = \\log(c)$.
3. Solve for $x$: $x = \\frac{\\log(c)}{\\log(b)}$.

### Solving Logarithmic Equations
To solve $\\log_b(x) = c$:
1. Rewrite in exponential form: $x = b^c$.
2. Verify that the solution is in the domain of the original logarithmic expression (the argument must be positive).

### Example Derivation: Radioactive Decay
Consider a radioactive isotope that decays according to $N(t) = N_0 e^{-kt}$, where $N_0$ is the initial amount, $k$ is the decay constant, and $t$ is time. To find the half-life ($t_{1/2}$), we set $N(t) = 0.5N_0$:
$$0.5N_0 = N_0 e^{-k t_{1/2}}$$
$$0.5 = e^{-k t_{1/2}}$$
$$\\ln(0.5) = -k t_{1/2}$$
$$t_{1/2} = \\frac{\\ln(0.5)}{-k} = \\frac{\\ln(2)}{k}$$

This derivation illustrates how logarithms solve for time variables in exponential processes.

## Summary

Exponential and logarithmic functions are cornerstones of mathematical analysis. The exponential function $f(x)=b^x$ models the principle of growth and decay, where change is recursive. Conversely, the logarithmic function $f(x)=\\log_b(x)$ provides the tools to reverse these processes and analyze the scales at which these changes occur.

Key takeaways include:
- The base $b$ determines the "steepness" and direction (growth vs. decay) of the function.
- The functions are inverses; algebraically, one is used to solve for the input of the other.
- Natural bases ($e$) and natural logs ($\\ln$) are central to advanced mathematics because they simplify differentiation and integration.
- Constraints like $b>0, b\\neq 1$ and $x>0$ for logarithms are not merely conventions but are required to ensure the functions remain well-defined within the real number system.

Mastering these functions enables the translation of complex real-world phenomena—from the propagation of viruses to the accumulation of compound interest—into rigorous, solvable mathematical models.`;export{e as default};