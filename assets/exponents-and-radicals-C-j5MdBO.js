var e=`# Exponents & Radicals in Algebra\r
\r
---\r
\r
## Definition\r
\r
An **exponent** is a number that indicates how many times a **base** is multiplied by itself:\r
\r
$$\r
a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}\r
$$\r
\r
where $a$ is the **base** and $n$ is the **exponent** (also called the **power** or **index**).\r
\r
A **radical** is the inverse operation — it extracts a root from a number:\r
\r
$$\r
\\sqrt[n]{a} = b \\quad \\Longleftrightarrow \\quad b^n = a\r
$$\r
\r
where $n$ is the **index** of the radical and $a$ is the **radicand**.\r
\r
> **Core relationship:** Radicals and exponents are two sides of the same coin. Every radical can be expressed as a fractional exponent:\r
>\r
> $$\\sqrt[n]{a} = a^{1/n}$$\r
\r
---\r
\r
## Key Terminology\r
\r
| Term                         | Definition                                                                        |\r
| ---------------------------- | --------------------------------------------------------------------------------- |\r
| **Base**                     | The number being raised to a power, e.g., in $a^n$, the base is $a$               |\r
| **Exponent / Power / Index** | The number indicating how many times the base is multiplied, e.g., $n$ in $a^n$   |\r
| **Radical**                  | The symbol $\\sqrt[n]{\\phantom{x}}$ denoting a root operation                      |\r
| **Radicand**                 | The expression inside the radical, e.g., $a$ in $\\sqrt[n]{a}$                     |\r
| **Index**                    | The degree of the root, e.g., $n$ in $\\sqrt[n]{a}$; if omitted, assumed to be $2$ |\r
| **Principal Root**           | The non-negative root returned by convention, e.g., $\\sqrt{9} = 3$, not $-3$      |\r
| **Perfect Power**            | A number expressible as $a^n$ for integer $a$ and $n$, e.g., $8 = 2^3$            |\r
| **Fractional Exponent**      | An exponent of the form $m/n$, equivalent to $\\sqrt[n]{a^m}$                      |\r
| **Negative Exponent**        | $a^{-n} = 1/a^n$; represents the reciprocal                                       |\r
| **Zero Exponent**            | $a^0 = 1$ for any $a \\neq 0$                                                      |\r
| **Rationalization**          | The process of eliminating radicals from a denominator                            |\r
| **Like Radicals**            | Radicals with the same index and radicand, e.g., $3\\sqrt{5}$ and $7\\sqrt{5}$      |\r
\r
---\r
\r
## Purpose\r
\r
**1. Expressing very large or very small numbers compactly**\r
\r
Scientific notation relies entirely on exponents:\r
\r
$$\r
6.022 \\times 10^{23} \\quad \\text{(Avogadro's number)}\r
$$\r
\r
**2. Modeling exponential growth and decay**\r
\r
Population growth, compound interest, radioactive decay:\r
\r
$$\r
A = P\\left(1 + \\frac{r}{n}\\right)^{nt}\r
$$\r
\r
**3. Solving polynomial and radical equations**\r
\r
Exponents and roots are the primary tools for isolating variables in non-linear equations.\r
\r
**4. Expressing irrational quantities**\r
\r
Many important constants and lengths arise naturally as radicals:\r
\r
$$\r
\\text{diagonal of a unit square} = \\sqrt{2}\r
$$\r
\r
**5. Foundation for logarithms and exponential functions**\r
\r
The inverse of $a^x$ is $\\log_a x$ — impossible to understand without a firm grasp of exponents.\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Laws of Exponents\r
\r
Let $a, b \\in \\mathbb{R}$ with $a \\neq 0,\\; b \\neq 0$, and $m, n \\in \\mathbb{Q}$.\r
\r
**Product Rule:**\r
\r
$$\r
a^m \\cdot a^n = a^{m+n}\r
$$\r
\r
**Quotient Rule:**\r
\r
$$\r
\\frac{a^m}{a^n} = a^{m-n}\r
$$\r
\r
**Power of a Power:**\r
\r
$$\r
(a^m)^n = a^{mn}\r
$$\r
\r
**Power of a Product:**\r
\r
$$\r
(ab)^n = a^n b^n\r
$$\r
\r
**Power of a Quotient:**\r
\r
$$\r
\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}\r
$$\r
\r
**Zero Exponent:**\r
\r
$$\r
a^0 = 1, \\quad a \\neq 0\r
$$\r
\r
**Negative Exponent:**\r
\r
$$\r
a^{-n} = \\frac{1}{a^n}\r
$$\r
\r
**Fractional Exponent:**\r
\r
$$\r
a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m\r
$$\r
\r
---\r
\r
### Laws of Radicals\r
\r
Let $a, b \\geq 0$ and $n, m$ be positive integers.\r
\r
**Product Rule:**\r
\r
$$\r
\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}\r
$$\r
\r
**Quotient Rule:**\r
\r
$$\r
\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}, \\quad b \\neq 0\r
$$\r
\r
**Power of a Radical:**\r
\r
$$\r
\\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m} = a^{m/n}\r
$$\r
\r
**Nested Radical (Index Multiplication):**\r
\r
$$\r
\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a} = a^{1/(mn)}\r
$$\r
\r
**Radical of a Power:**\r
\r
$$\r
\\sqrt[n]{a^n} = |a| \\quad \\text{(when } n \\text{ is even)}\r
$$\r
\r
$$\r
\\sqrt[n]{a^n} = a \\quad \\text{(when } n \\text{ is odd)}\r
$$\r
\r
> The absolute value in the even case is critical. $\\sqrt{(-3)^2} = \\sqrt{9} = 3 = |-3|$, not $-3$.\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. Integer Exponents\r
\r
Exponents that are whole numbers (positive, zero, or negative).\r
\r
**Positive:** $a^3 = a \\cdot a \\cdot a$\r
\r
**Zero:** $a^0 = 1$\r
\r
**Negative:** $a^{-2} = \\dfrac{1}{a^2}$\r
\r
---\r
\r
### 2. Fractional Exponents\r
\r
Exponents of the form $m/n$ that unify exponents and radicals.\r
\r
$$\r
8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4\r
$$\r
\r
$$\r
27^{-1/3} = \\frac{1}{\\sqrt[3]{27}} = \\frac{1}{3}\r
$$\r
\r
---\r
\r
### 3. Square Roots\r
\r
The most common radical, with index $n = 2$ (index is omitted by convention):\r
\r
$$\r
\\sqrt{a} = a^{1/2}, \\quad a \\geq 0\r
$$\r
\r
**Example:** $\\sqrt{49} = 7$\r
\r
---\r
\r
### 4. Cube Roots\r
\r
Index $n = 3$. Defined for **all** real numbers (including negatives):\r
\r
$$\r
\\sqrt[3]{a} = a^{1/3}\r
$$\r
\r
**Example:** $\\sqrt[3]{-8} = -2$ since $(-2)^3 = -8$\r
\r
---\r
\r
### 5. nth Roots\r
\r
General radical with any positive integer index $n$:\r
\r
$$\r
\\sqrt[n]{a} = a^{1/n}\r
$$\r
\r
- If $n$ is **even**: $a \\geq 0$ required (in $\\mathbb{R}$)\r
- If $n$ is **odd**: $a$ can be any real number\r
\r
---\r
\r
### 6. Expressions with Multiple Radical Terms\r
\r
Expressions involving addition or subtraction of radical terms.\r
\r
**Like radicals** can be combined:\r
\r
$$\r
3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}\r
$$\r
\r
**Unlike radicals** cannot be combined directly:\r
\r
$$\r
\\sqrt{2} + \\sqrt{3} \\neq \\sqrt{5}\r
$$\r
\r
---\r
\r
### 7. Nested Radicals\r
\r
Radicals inside other radicals:\r
\r
$$\r
\\sqrt{2 + \\sqrt{3}}\r
$$\r
\r
These often appear in trigonometric exact values and can sometimes be simplified using the identity:\r
\r
$$\r
\\sqrt{a \\pm \\sqrt{b}} = \\sqrt{\\frac{a + \\sqrt{a^2 - b}}{2}} \\pm \\sqrt{\\frac{a - \\sqrt{a^2 - b}}{2}}\r
$$\r
\r
---\r
\r
## How to Solve\r
\r
### Simplifying Exponential Expressions\r
\r
Apply the laws of exponents step by step.\r
\r
**Example:** Simplify $\\dfrac{x^5 \\cdot x^{-2}}{x^3}$\r
\r
$$\r
\\frac{x^5 \\cdot x^{-2}}{x^3} = \\frac{x^{5 + (-2)}}{x^3} = \\frac{x^3}{x^3} = x^0 = 1\r
$$\r
\r
---\r
\r
### Simplifying Radical Expressions\r
\r
**Step 1 — Factor out perfect powers from the radicand:**\r
\r
$$\r
\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}\r
$$\r
\r
**Step 2 — Reduce the index where possible:**\r
\r
$$\r
\\sqrt[4]{x^2} = x^{2/4} = x^{1/2} = \\sqrt{x}, \\quad x \\geq 0\r
$$\r
\r
**Step 3 — Combine like radicals:**\r
\r
$$\r
5\\sqrt{3} - 2\\sqrt{3} = 3\\sqrt{3}\r
$$\r
\r
---\r
\r
### Rationalization\r
\r
The process of eliminating radicals from a denominator.\r
\r
**Case 1 — Single radical in denominator:**\r
\r
$$\r
\\frac{3}{\\sqrt{5}} = \\frac{3}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}\r
$$\r
\r
**Case 2 — Binomial denominator with radical (use the conjugate):**\r
\r
$$\r
\\frac{2}{3 + \\sqrt{7}} = \\frac{2}{3 + \\sqrt{7}} \\cdot \\frac{3 - \\sqrt{7}}{3 - \\sqrt{7}} = \\frac{2(3 - \\sqrt{7})}{9 - 7} = \\frac{2(3 - \\sqrt{7})}{2} = 3 - \\sqrt{7}\r
$$\r
\r
> The **conjugate** of $a + \\sqrt{b}$ is $a - \\sqrt{b}$. Their product $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$ eliminates the radical.\r
\r
---\r
\r
### Solving Equations with Exponents\r
\r
**Type 1 — Same base:**\r
\r
$$\r
2^{x+1} = 2^5 \\implies x + 1 = 5 \\implies x = 4\r
$$\r
\r
**Type 2 — Variable as base:**\r
\r
$$\r
x^3 = 64 \\implies x = \\sqrt[3]{64} = 4\r
$$\r
\r
**Type 3 — Fractional exponent:**\r
\r
$$\r
x^{2/3} = 9\r
$$\r
\r
Raise both sides to the power $3/2$:\r
\r
$$\r
\\left(x^{2/3}\\right)^{3/2} = 9^{3/2}\r
$$\r
\r
$$\r
x = \\left(\\sqrt{9}\\right)^3 = 3^3 = 27\r
$$\r
\r
---\r
\r
### Solving Radical Equations\r
\r
**Steps:**\r
\r
1. Isolate the radical on one side\r
2. Raise both sides to the power of the index to eliminate the radical\r
3. Solve the resulting equation\r
4. **Check all solutions** — extraneous solutions are common when the index is even\r
\r
**Example:** Solve $\\sqrt{3x + 4} = x$\r
\r
$$\r
(\\sqrt{3x + 4})^2 = x^2\r
$$\r
\r
$$\r
3x + 4 = x^2\r
$$\r
\r
$$\r
x^2 - 3x - 4 = 0 \\implies (x - 4)(x + 1) = 0\r
$$\r
\r
$$\r
x = 4 \\quad \\text{or} \\quad x = -1\r
$$\r
\r
Check $x = -1$: $\\sqrt{3(-1) + 4} = \\sqrt{1} = 1 \\neq -1$ — **extraneous**, rejected.\r
\r
$$\r
\\therefore \\quad x = 4\r
$$\r
\r
**Example with two radicals:** Solve $\\sqrt{x + 5} - \\sqrt{x} = 1$\r
\r
Isolate one radical:\r
\r
$$\r
\\sqrt{x + 5} = \\sqrt{x} + 1\r
$$\r
\r
Square both sides:\r
\r
$$\r
x + 5 = x + 2\\sqrt{x} + 1\r
$$\r
\r
$$\r
4 = 2\\sqrt{x} \\implies \\sqrt{x} = 2 \\implies x = 4\r
$$\r
\r
Check: $\\sqrt{9} - \\sqrt{4} = 3 - 2 = 1$ ✓\r
\r
$$\r
\\therefore \\quad x = 4\r
$$\r
\r
---\r
\r
### Converting Between Radical and Exponential Form\r
\r
$$\r
\\sqrt[3]{x^2} = x^{2/3}\r
$$\r
\r
$$\r
a^{3/4} = \\sqrt[4]{a^3}\r
$$\r
\r
$$\r
\\frac{1}{\\sqrt{x}} = x^{-1/2}\r
$$\r
\r
---\r
\r
## Summary\r
\r
### Laws of Exponents — Quick Reference\r
\r
| Law                 | Form                      |\r
| ------------------- | ------------------------- |\r
| Product Rule        | $a^m \\cdot a^n = a^{m+n}$ |\r
| Quotient Rule       | $a^m / a^n = a^{m-n}$     |\r
| Power of a Power    | $(a^m)^n = a^{mn}$        |\r
| Power of a Product  | $(ab)^n = a^n b^n$        |\r
| Zero Exponent       | $a^0 = 1$                 |\r
| Negative Exponent   | $a^{-n} = 1/a^n$          |\r
| Fractional Exponent | $a^{m/n} = \\sqrt[n]{a^m}$ |\r
\r
### Laws of Radicals — Quick Reference\r
\r
| Law            | Form                                           |\r
| -------------- | ---------------------------------------------- |\r
| Product Rule   | $\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}$ |\r
| Quotient Rule  | $\\sqrt[n]{a} / \\sqrt[n]{b} = \\sqrt[n]{a/b}$    |\r
| Nested Radical | $\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$         |\r
| Even Index     | $\\sqrt[n]{a^n} = \\lvert a \\rvert$              |\r
| Odd Index      | $\\sqrt[n]{a^n} = a$                            |\r
\r
### Equation Types — Quick Reference\r
\r
| Equation Type         | Strategy                                 | Watch Out For            |\r
| --------------------- | ---------------------------------------- | ------------------------ |\r
| Same-base exponential | Equate exponents directly                | Bases must match exactly |\r
| Variable as base      | Take the $n$-th root of both sides       | Even roots require $\\pm$ |\r
| Fractional exponent   | Raise both sides to the reciprocal power | Order of operations      |\r
| Single radical        | Isolate, then raise to the index power   | Extraneous solutions     |\r
| Two radicals          | Isolate one, square, repeat if needed    | Extraneous solutions     |\r
\r
**The golden rules to never forget:**\r
\r
$$\r
\\boxed{a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m}\r
$$\r
\r
$$\r
\\boxed{\\sqrt[n]{a^n} = |a| \\text{ for even } n, \\quad \\sqrt[n]{a^n} = a \\text{ for odd } n}\r
$$\r
\r
$$\r
\\boxed{\\text{Always verify radical equation solutions in the original equation}}\r
$$\r
`;export{e as default};