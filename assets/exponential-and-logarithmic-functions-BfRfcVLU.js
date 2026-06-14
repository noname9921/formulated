var e=`# Algebra: Exponential & Logarithmic Functions\r
\r
---\r
\r
## 1. Definition\r
\r
### Exponential Functions\r
\r
An **exponential function** is a mathematical function where a constant base is raised to a variable exponent. Formally, it is defined as:\r
\r
$$f(x) = a \\cdot b^x$$\r
\r
Where:\r
\r
- $a$ is a non-zero constant (the initial value).\r
- $b$ is a positive real number ($b > 0$) and $b \\neq 1$ (the base).\r
- The domain is all real numbers ($x \\in \\mathbb{R}$).\r
\r
### Logarithmic Functions\r
\r
A **logarithmic function** is the inverse of an exponential function. It answers the question: _"To what power must we raise the base to get this number?"_ Formally, it is defined as:\r
\r
$$y = \\log_b(x) \\iff b^y = x$$\r
\r
Where:\r
\r
- $b$ is the base ($b > 0$ and $b \\neq 1$).\r
- $x$ is the argument ($x > 0$).\r
- The domain is restricted to positive real numbers.\r
\r
---\r
\r
## 2. Key Terminology\r
\r
- **Base ($b$):** The constant number being repeatedly multiplied in an exponential function, or the foundational number of a logarithm.\r
- **Exponent ($x$):** The power to which the base is raised.\r
- **Argument ($x$):** The input value inside the logarithm function.\r
- **Asymptote:** A line that a graph approaches but never touches.\r
  - Exponential functions have a **horizontal asymptote** (typically $y = 0$).\r
  - Logarithmic functions have a **vertical asymptote** (typically $x = 0$).\r
- **Euler's Number ($e$):** An irrational mathematical constant approximately equal to $2.71828$, used as the base for natural exponential and logarithmic functions.\r
\r
---\r
\r
## 3. Purpose\r
\r
Exponential and logarithmic functions are critical for modeling scenarios where growth or decay accelerates rapidly over time, or where data spans many orders of magnitude.\r
\r
- **Compounding Growth:** Used in finance for calculating compound interest and in biology for tracking population growth.\r
- **Decay Models:** Used in physics for radioactive half-life calculations and carbon dating.\r
- **Data Scaling:** Logarithmic scales compress massive data ranges into manageable scales, such as the Richter scale (earthquake intensity), pH scale (acidity), and decibels (sound intensity).\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
These core algebraic properties are essential for simplifying expressions and solving equations.\r
\r
### Algebraic Properties\r
\r
| Property Name         | Exponential Rule            | Logarithmic Rule                              |\r
| :-------------------- | :-------------------------- | :-------------------------------------------- |\r
| **Product Rule**      | $b^x \\cdot b^y = b^{x+y}$   | $\\log_b(xy) = \\log_b(x) + \\log_b(y)$          |\r
| **Quotient Rule**     | $\\frac{b^x}{b^y} = b^{x-y}$ | $\\log_b(\\frac{x}{y}) = \\log_b(x) - \\log_b(y)$ |\r
| **Power Rule**        | $(b^x)^y = b^{xy}$          | $\\log_b(x^k) = k \\cdot \\log_b(x)$             |\r
| **Identity Property** | $b^1 = b$                   | $\\log_b(b) = 1$                               |\r
| **Zero Property**     | $b^0 = 1$                   | $\\log_b(1) = 0$                               |\r
\r
### The Change of Base Formula\r
\r
To evaluate logarithms with non-standard bases using standard calculators, the change of base formula is used:\r
\r
$$\\log_b(x) = \\frac{\\log_c(x)}{\\log_c(b)}$$\r
\r
> **Note:** Typically, $c$ is chosen to be $10$ (common log) or $e$ (natural log).\r
\r
---\r
\r
## 5. Types & Variations\r
\r
### 1. Common vs. Natural Logarithms\r
\r
- **Common Logarithm:** A logarithm with base $10$. It is conventionally written without a explicit base:\r
  $$\\log(x) = \\log_{10}(x)$$\r
- **Natural Logarithm:** A logarithm with base $e$. It uses the unique notation $\\ln$:\r
  $$\\ln(x) = \\log_e(x)$$\r
\r
### 2. Growth vs. Decay\r
\r
- **Exponential Growth:** Occurs when the base $b > 1$. The graph rises sharply from left to right.\r
- **Exponential Decay:** Occurs when the base $0 < b < 1$. The graph falls sharply from left to right, approaching the horizontal asymptote.\r
\r
---\r
\r
## 6. How to Solve\r
\r
Solving these equations generally relies on isolating the exponential or logarithmic term and applying its inverse operation.\r
\r
### Strategy A: Solving Exponential Equations Using Common Bases\r
\r
If both sides of an equation can be written with the same base, use the property: $b^x = b^y \\implies x = y$.\r
\r
**Example:** Solve $3^{2x - 1} = 27$\r
\r
1. Write $27$ as a power of $3$:  \r
   $$3^{2x - 1} = 3^3$$\r
2. Equate the exponents:  \r
   $$2x - 1 = 3$$\r
3. Solve for $x$:  \r
   $$2x = 4 \\implies x = 2$$\r
\r
### Strategy B: Solving Exponential Equations Using Logarithms\r
\r
When bases cannot be easily matched, take the logarithm of both sides.\r
\r
**Example:** Solve $5^x = 12$\r
\r
1. Take the natural logarithm ($\\ln$) of both sides:  \r
   $$\\ln(5^x) = \\ln(12)$$\r
2. Apply the power rule to bring down the exponent:  \r
   $$x \\cdot \\ln(5) = \\ln(12)$$\r
3. Divide by $\\ln(5)$ to isolate $x$:  \r
   $$x = \\frac{\\ln(12)}{\\ln(5)}$$\r
\r
### Strategy C: Solving Logarithmic Equations by Converting to Exponential Form\r
\r
Isolate the logarithm, then rewrite the equation in its exponential counterpart.\r
\r
**Example:** Solve $\\log_2(x + 3) = 4$\r
\r
1. Convert the equation to its exponential form:  \r
   $$2^4 = x + 3$$\r
2. Evaluate the constant:  \r
   $$16 = x + 3$$\r
3. Isolate $x$:  \r
   $$x = 13$$\r
4. _Check for extraneous solutions:_ Plugging $13$ back into the original argument yields $13 + 3 = 16$. Since $16 > 0$, the solution is valid.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Inverses:** Exponential and logarithmic functions directly undo one another ($b^{\\log_b(x)} = x$ and $\\log_b(b^x) = x$).\r
- **Graphs:** The graph of $y = \\log_b(x)$ is a reflection of $y = b^x$ across the diagonal line $y = x$.\r
- **Domain Constraints:** You can raise a positive base to any real number power, but you can **never** take the logarithm of a negative number or zero within the real number system.\r
`;export{e as default};