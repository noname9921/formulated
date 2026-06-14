var e=`# Equations in Algebra\r
\r
---\r
\r
## Definition\r
\r
An **equation** is a mathematical statement that asserts the **equality** of two expressions, connected by an equals sign $=$.\r
\r
$$\r
\\text{Expression}_1 = \\text{Expression}_2\r
$$\r
\r
More formally, an equation is a **proposition** of the form:\r
\r
$$\r
f(x) = g(x)\r
$$\r
\r
where $f$ and $g$ are expressions, and the goal is typically to determine the value(s) of the unknown(s) that make the proposition **true**.\r
\r
> **Note:** Not all equations have solutions — some are contradictions (e.g., $x = x + 1$), and some hold for all values (identities).\r
\r
---\r
\r
## Key Terminology\r
\r
| Term                      | Definition                                                                          |\r
| ------------------------- | ----------------------------------------------------------------------------------- |\r
| **Variable**              | A symbol (usually $x$, $y$, $z$) representing an unknown value                      |\r
| **Constant**              | A fixed numerical value in the equation                                             |\r
| **Coefficient**           | A number multiplying a variable, e.g., in $3x$, the coefficient is $3$              |\r
| **Solution / Root**       | A value of the variable that satisfies the equation                                 |\r
| **Solution Set**          | The complete set of all values that satisfy the equation                            |\r
| **Left-Hand Side (LHS)**  | The expression to the left of $=$                                                   |\r
| **Right-Hand Side (RHS)** | The expression to the right of $=$                                                  |\r
| **Identity**              | An equation true for **all** values of the variable, e.g., $(x+1)^2 = x^2 + 2x + 1$ |\r
| **Contradiction**         | An equation true for **no** values, e.g., $x + 1 = x$                               |\r
| **Conditional Equation**  | True only for **specific** values, e.g., $2x = 6$                                   |\r
| **Degree**                | The highest power of the variable in the equation                                   |\r
\r
---\r
\r
## Purpose\r
\r
Equations serve as the **backbone of algebra** and mathematics as a whole. Their main purposes are:\r
\r
**1. Modeling real-world problems**\r
\r
Equations translate word problems and physical phenomena into mathematical language. For example, distance-speed-time:\r
\r
$$\r
d = v \\cdot t\r
$$\r
\r
**2. Finding unknowns**\r
\r
Given partial information, equations allow us to solve for missing quantities.\r
\r
**3. Expressing relationships**\r
\r
Equations describe how quantities relate to one another — not just "what is $x$" but "how does $x$ relate to $y$":\r
\r
$$\r
y = 2x + 5\r
$$\r
\r
**4. Building higher mathematics**\r
\r
Equations are foundational to calculus, linear algebra, differential equations, and beyond.\r
\r
---\r
\r
## Fundamental Properties\r
\r
These properties are the **legal moves** when manipulating equations. They ensure that transformations preserve equality.\r
\r
### Addition Property of Equality\r
\r
$$\r
\\text{If } a = b, \\text{ then } a + c = b + c\r
$$\r
\r
Adding the same value to both sides keeps the equation balanced.\r
\r
### Subtraction Property of Equality\r
\r
$$\r
\\text{If } a = b, \\text{ then } a - c = b - c\r
$$\r
\r
### Multiplication Property of Equality\r
\r
$$\r
\\text{If } a = b, \\text{ then } a \\cdot c = b \\cdot c\r
$$\r
\r
### Division Property of Equality\r
\r
$$\r
\\text{If } a = b \\text{ and } c \\neq 0, \\text{ then } \\frac{a}{c} = \\frac{b}{c}\r
$$\r
\r
> **Important:** Dividing by zero is **undefined** and illegal in any equation manipulation.\r
\r
### Reflexive Property\r
\r
$$\r
a = a\r
$$\r
\r
Every expression equals itself.\r
\r
### Symmetric Property\r
\r
$$\r
\\text{If } a = b, \\text{ then } b = a\r
$$\r
\r
### Transitive Property\r
\r
$$\r
\\text{If } a = b \\text{ and } b = c, \\text{ then } a = c\r
$$\r
\r
### Substitution Property\r
\r
If $a = b$, then $a$ can replace $b$ anywhere in an expression without changing its value.\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. Linear Equations\r
\r
**Degree:** 1\r
\r
**Standard form:**\r
\r
$$\r
ax + b = 0, \\quad a \\neq 0\r
$$\r
\r
**Example:** $3x - 9 = 0$\r
\r
Exactly **one solution** in most cases. Graph is a straight line.\r
\r
---\r
\r
### 2. Quadratic Equations\r
\r
**Degree:** 2\r
\r
**Standard form:**\r
\r
$$\r
ax^2 + bx + c = 0, \\quad a \\neq 0\r
$$\r
\r
**Example:** $x^2 - 5x + 6 = 0$\r
\r
Has at most **two solutions** (real or complex). Graph is a parabola.\r
\r
---\r
\r
### 3. Polynomial Equations\r
\r
**Degree:** $n$\r
\r
**General form:**\r
\r
$$\r
a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0 = 0\r
$$\r
\r
By the **Fundamental Theorem of Algebra**, a degree-$n$ polynomial has exactly $n$ roots in $\\mathbb{C}$ (counting multiplicity).\r
\r
---\r
\r
### 4. Rational Equations\r
\r
Equations involving **fractions with variables** in the denominator.\r
\r
**Example:**\r
\r
$$\r
\\frac{1}{x} + \\frac{2}{x+1} = 3\r
$$\r
\r
> Watch for **extraneous solutions** — values that arise algebraically but make a denominator zero.\r
\r
---\r
\r
### 5. Radical Equations\r
\r
Equations where the variable appears inside a **radical** (root).\r
\r
**Example:**\r
\r
$$\r
\\sqrt{2x + 3} = x - 1\r
$$\r
\r
> Squaring both sides can introduce **extraneous solutions** — always verify in the original equation.\r
\r
---\r
\r
### 6. Absolute Value Equations\r
\r
**Form:**\r
\r
$$\r
|f(x)| = c\r
$$\r
\r
Splits into two cases:\r
\r
$$\r
f(x) = c \\quad \\text{or} \\quad f(x) = -c\r
$$\r
\r
**Example:** $|2x - 3| = 7$\r
\r
---\r
\r
### 7. Exponential Equations\r
\r
Variable appears in the **exponent**.\r
\r
**Example:**\r
\r
$$\r
2^x = 32\r
$$\r
\r
Solved using logarithms or by expressing both sides with the same base.\r
\r
---\r
\r
### 8. Logarithmic Equations\r
\r
**Example:**\r
\r
$$\r
\\log_2(x + 3) = 4\r
$$\r
\r
Solved by converting to exponential form:\r
\r
$$\r
x + 3 = 2^4 = 16 \\implies x = 13\r
$$\r
\r
---\r
\r
### 9. Systems of Equations\r
\r
Multiple equations with multiple unknowns solved **simultaneously**.\r
\r
**Example (linear system):**\r
\r
$$\r
\\begin{cases} 2x + y = 7 \\\\ x - y = 1 \\end{cases}\r
$$\r
\r
---\r
\r
### 10. Trigonometric Equations\r
\r
Variable appears inside a **trig function**.\r
\r
**Example:**\r
\r
$$\r
\\sin(x) = \\frac{1}{2}\r
$$\r
\r
Often produces **infinitely many solutions** due to periodicity:\r
\r
$$\r
x = \\frac{\\pi}{6} + 2k\\pi \\quad \\text{or} \\quad x = \\frac{5\\pi}{6} + 2k\\pi, \\quad k \\in \\mathbb{Z}\r
$$\r
\r
---\r
\r
## How to Solve\r
\r
### Linear Equations — $ax + b = 0$\r
\r
**Goal:** Isolate $x$.\r
\r
**Steps:**\r
\r
1. Expand and simplify both sides\r
2. Move variable terms to one side, constants to the other\r
3. Divide by the coefficient of $x$\r
\r
**Example:** Solve $3x - 9 = 0$\r
\r
$$\r
3x - 9 = 0\r
$$\r
\r
$$\r
3x = 9\r
$$\r
\r
$$\r
x = 3\r
$$\r
\r
---\r
\r
### Quadratic Equations — $ax^2 + bx + c = 0$\r
\r
There are three main methods:\r
\r
**Method 1 — Factoring**\r
\r
$$\r
x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0\r
$$\r
\r
$$\r
x = 2 \\quad \\text{or} \\quad x = 3\r
$$\r
\r
**Method 2 — Completing the Square**\r
\r
$$\r
x^2 + bx = -c\r
$$\r
\r
$$\r
x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = -c + \\left(\\frac{b}{2}\\right)^2\r
$$\r
\r
$$\r
\\left(x + \\frac{b}{2}\\right)^2 = \\frac{b^2 - 4c}{4}\r
$$\r
\r
**Method 3 — Quadratic Formula**\r
\r
$$\r
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\r
$$\r
\r
The **discriminant** $\\Delta = b^2 - 4ac$ determines the nature of roots:\r
\r
| $\\Delta$     | Roots                       |\r
| ------------ | --------------------------- |\r
| $\\Delta > 0$ | Two distinct real roots     |\r
| $\\Delta = 0$ | One repeated real root      |\r
| $\\Delta < 0$ | Two complex conjugate roots |\r
\r
---\r
\r
### Rational Equations\r
\r
**Steps:**\r
\r
1. Find the **LCD** (Least Common Denominator)\r
2. Multiply through by the LCD to eliminate fractions\r
3. Solve the resulting polynomial equation\r
4. **Check** all solutions against original denominators (exclude values that make any denominator zero)\r
\r
**Example:** Solve $\\dfrac{1}{x} + \\dfrac{1}{x+2} = \\dfrac{3}{4}$\r
\r
Multiply both sides by $4x(x+2)$:\r
\r
$$\r
4(x+2) + 4x = 3x(x+2)\r
$$\r
\r
$$\r
4x + 8 + 4x = 3x^2 + 6x\r
$$\r
\r
$$\r
3x^2 - 2x - 8 = 0\r
$$\r
\r
Then apply the quadratic formula.\r
\r
---\r
\r
### Radical Equations\r
\r
**Steps:**\r
\r
1. Isolate the radical on one side\r
2. Raise both sides to the appropriate power to eliminate the radical\r
3. Solve the resulting equation\r
4. **Verify all solutions** in the original equation (extraneous solutions are common)\r
\r
**Example:** Solve $\\sqrt{x + 5} = x - 1$\r
\r
$$\r
(\\sqrt{x+5})^2 = (x-1)^2\r
$$\r
\r
$$\r
x + 5 = x^2 - 2x + 1\r
$$\r
\r
$$\r
x^2 - 3x - 4 = 0 \\implies (x-4)(x+1) = 0\r
$$\r
\r
$$\r
x = 4 \\quad \\text{or} \\quad x = -1\r
$$\r
\r
Check $x = -1$: $\\sqrt{-1+5} = 2$ but $-1 - 1 = -2$. Since $2 \\neq -2$, $x = -1$ is **extraneous**.\r
\r
$$\r
\\therefore \\quad x = 4\r
$$\r
\r
---\r
\r
### Absolute Value Equations — $|f(x)| = c$\r
\r
If $c < 0$: **no solution** (absolute value is always non-negative).\r
\r
If $c \\geq 0$: split into two cases:\r
\r
$$\r
f(x) = c \\quad \\text{or} \\quad f(x) = -c\r
$$\r
\r
**Example:** Solve $|2x - 3| = 7$\r
\r
$$\r
2x - 3 = 7 \\implies x = 5\r
$$\r
\r
$$\r
2x - 3 = -7 \\implies x = -2\r
$$\r
\r
---\r
\r
### Systems of Equations\r
\r
**Three methods:**\r
\r
**Substitution** — Solve one equation for a variable, substitute into the other.\r
\r
**Elimination** — Add or subtract equations to cancel a variable.\r
\r
**Matrix Method (Gaussian Elimination)** — Write the system as an augmented matrix and row-reduce:\r
\r
$$\r
\\begin{bmatrix} 2 & 1 & | & 7 \\\\ 1 & -1 & | & 1 \\end{bmatrix} \\xrightarrow{R_1 \\leftrightarrow R_2} \\begin{bmatrix} 1 & -1 & | & 1 \\\\ 2 & 1 & | & 7 \\end{bmatrix} \\xrightarrow{R_2 - 2R_1} \\begin{bmatrix} 1 & -1 & | & 1 \\\\ 0 & 3 & | & 5 \\end{bmatrix}\r
$$\r
\r
$$\r
y = \\frac{5}{3}, \\quad x = 1 + \\frac{5}{3} = \\frac{8}{3}\r
$$\r
\r
---\r
\r
### Exponential Equations\r
\r
**Strategy 1 — Same base:**\r
\r
$$\r
2^x = 2^5 \\implies x = 5\r
$$\r
\r
**Strategy 2 — Logarithms:**\r
\r
$$\r
3^x = 20 \\implies x = \\log_3 20 = \\frac{\\ln 20}{\\ln 3}\r
$$\r
\r
---\r
\r
### Logarithmic Equations\r
\r
Convert to exponential form:\r
\r
$$\r
\\log_b(x) = c \\implies x = b^c\r
$$\r
\r
**Example:** $\\log_3(x - 2) = 4$\r
\r
$$\r
x - 2 = 3^4 = 81 \\implies x = 83\r
$$\r
\r
> Always check that the argument of the log is **positive** in the solution.\r
\r
---\r
\r
## Summary\r
\r
| Type           | Standard Form            | Degree | Max Solutions | Key Method                        |\r
| -------------- | ------------------------ | ------ | ------------- | --------------------------------- |\r
| Linear         | $ax + b = 0$             | 1      | 1             | Isolation                         |\r
| Quadratic      | $ax^2 + bx + c = 0$      | 2      | 2             | Factoring, Quadratic Formula      |\r
| Polynomial     | $\\sum a_k x^k = 0$       | $n$    | $n$           | Various                           |\r
| Rational       | $\\frac{p(x)}{q(x)} = r$  | varies | varies        | LCD, check extraneous             |\r
| Radical        | $\\sqrt[n]{f(x)} = g(x)$  | varies | varies        | Raise to power, check extraneous  |\r
| Absolute Value | $\\lvert f(x) \\rvert = c$ | varies | 2             | Split into cases                  |\r
| Exponential    | $a^{f(x)} = b$           | —      | varies        | Same base or logarithms           |\r
| Logarithmic    | $\\log_b f(x) = c$        | —      | varies        | Convert to exponential            |\r
| System         | Multiple equations       | —      | varies        | Substitution, Elimination, Matrix |\r
\r
**Core principle:** Whatever you do to one side of an equation, you **must** do to the other — this is the golden rule that makes algebra work.\r
\r
$$\r
\\boxed{a = b \\implies a \\circ c = b \\circ c}\r
$$\r
\r
where $\\circ$ is any valid operation (with domain restrictions respected).\r
`;export{e as default};