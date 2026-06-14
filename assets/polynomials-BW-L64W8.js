var e=`# Polynomials in Algebra\r
\r
---\r
\r
## Definition\r
\r
A **polynomial** is an algebraic expression consisting of variables and coefficients, combined using only **addition, subtraction, multiplication, and non-negative integer exponents**.\r
\r
$$\r
P(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0\r
$$\r
\r
where:\r
\r
- $a_n, a_{n-1}, \\ldots, a_0 \\in \\mathbb{R}$ are the **coefficients**\r
- $x$ is the **variable** (indeterminate)\r
- $n$ is a **non-negative integer** (the degree)\r
- $a_n \\neq 0$ (the leading coefficient is non-zero)\r
\r
> **What is NOT a polynomial:** Expressions with negative exponents ($x^{-1}$), fractional exponents ($x^{1/2}$), variables in the denominator ($1/x$), or variables inside radicals ($\\sqrt{x}$).\r
\r
---\r
\r
## Key Terminology\r
\r
| Term                       | Definition                                                                                   |\r
| -------------------------- | -------------------------------------------------------------------------------------------- |\r
| **Term**                   | A single product of a coefficient and a power of the variable, e.g., $3x^2$                  |\r
| **Coefficient**            | The numerical factor of a term, e.g., $3$ in $3x^2$                                          |\r
| **Constant Term**          | The term with no variable, i.e., $a_0$                                                       |\r
| **Degree of a Term**       | The exponent of the variable in that term, e.g., degree of $5x^3$ is $3$                     |\r
| **Degree of a Polynomial** | The highest degree among all terms, e.g., degree of $4x^3 + x - 7$ is $3$                    |\r
| **Leading Term**           | The term with the highest degree, e.g., $4x^3$                                               |\r
| **Leading Coefficient**    | The coefficient of the leading term, e.g., $4$                                               |\r
| **Monic Polynomial**       | A polynomial where the leading coefficient is $1$, e.g., $x^2 + 3x + 2$                      |\r
| **Root / Zero**            | A value $r$ such that $P(r) = 0$                                                             |\r
| **Multiplicity**           | How many times a root appears as a factor; e.g., in $(x-2)^3$, root $2$ has multiplicity $3$ |\r
| **Standard Form**          | Terms written in descending order of degree                                                  |\r
| **Like Terms**             | Terms with the same variable and exponent, combinable by adding coefficients                 |\r
\r
---\r
\r
## Purpose\r
\r
**1. Modeling real-world quantities**\r
\r
Polynomials describe physical phenomena — projectile motion, area, volume, and cost functions:\r
\r
$$\r
h(t) = -4.9t^2 + v_0 t + h_0\r
$$\r
\r
**2. Approximating complex functions**\r
\r
By Taylor's theorem, any smooth function can be approximated by a polynomial. This is foundational in numerical analysis and calculus.\r
\r
**3. Encoding structure in algebra**\r
\r
Factoring polynomials reveals roots, symmetry, and behavior — making them the primary tool for solving algebraic equations.\r
\r
**4. Interpolation and curve fitting**\r
\r
Given $n + 1$ data points, a unique polynomial of degree $\\leq n$ passes through all of them (Lagrange interpolation).\r
\r
**5. Foundation for higher algebra**\r
\r
Polynomial rings $\\mathbb{R}[x]$ are a central object in abstract algebra, analogous to the integers $\\mathbb{Z}$ in many structural ways.\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Closure\r
\r
The sum, difference, and product of two polynomials is always a polynomial. Polynomials are **closed** under $+$, $-$, and $\\times$, but **not** under division (dividing two polynomials can produce a rational expression).\r
\r
### Degree Rules\r
\r
If $P(x)$ has degree $m$ and $Q(x)$ has degree $n$, then:\r
\r
$$\r
\\deg(P \\pm Q) \\leq \\max(m, n)\r
$$\r
\r
$$\r
\\deg(P \\cdot Q) = m + n\r
$$\r
\r
### The Fundamental Theorem of Algebra\r
\r
Every non-constant polynomial $P(x)$ of degree $n$ with complex coefficients has **exactly $n$ roots** in $\\mathbb{C}$, counting multiplicity.\r
\r
$$\r
P(x) = a_n(x - r_1)(x - r_2) \\cdots (x - r_n)\r
$$\r
\r
### The Remainder Theorem\r
\r
When $P(x)$ is divided by $(x - c)$, the remainder is $P(c)$:\r
\r
$$\r
P(x) = (x - c) \\cdot Q(x) + P(c)\r
$$\r
\r
### The Factor Theorem\r
\r
$(x - c)$ is a factor of $P(x)$ **if and only if** $P(c) = 0$.\r
\r
$$\r
P(c) = 0 \\quad \\Longleftrightarrow \\quad (x - c) \\mid P(x)\r
$$\r
\r
### The Rational Root Theorem\r
\r
If $P(x) = a_n x^n + \\cdots + a_0$ has integer coefficients and a rational root $p/q$ (in lowest terms), then:\r
\r
$$\r
p \\mid a_0 \\quad \\text{and} \\quad q \\mid a_n\r
$$\r
\r
### End Behavior\r
\r
The end behavior of $P(x)$ is governed entirely by its **leading term** $a_n x^n$:\r
\r
| $n$  | $a_n > 0$                               | $a_n < 0$                               |\r
| ---- | --------------------------------------- | --------------------------------------- |\r
| Even | Both ends $\\to +\\infty$                 | Both ends $\\to -\\infty$                 |\r
| Odd  | Left $\\to -\\infty$, Right $\\to +\\infty$ | Left $\\to +\\infty$, Right $\\to -\\infty$ |\r
\r
---\r
\r
## Types & Variations\r
\r
### By Number of Terms\r
\r
| Name           | Terms     | Example              |\r
| -------------- | --------- | -------------------- |\r
| **Monomial**   | 1         | $5x^3$               |\r
| **Binomial**   | 2         | $x^2 - 4$            |\r
| **Trinomial**  | 3         | $x^2 + 3x + 2$       |\r
| **Polynomial** | 4 or more | $x^3 - 2x^2 + x - 5$ |\r
\r
---\r
\r
### By Degree\r
\r
| Degree | Name          | General Form           |\r
| ------ | ------------- | ---------------------- |\r
| $0$    | Constant      | $a$                    |\r
| $1$    | Linear        | $ax + b$               |\r
| $2$    | Quadratic     | $ax^2 + bx + c$        |\r
| $3$    | Cubic         | $ax^3 + bx^2 + cx + d$ |\r
| $4$    | Quartic       | $ax^4 + \\cdots$        |\r
| $5$    | Quintic       | $ax^5 + \\cdots$        |\r
| $n$    | $n$-th degree | $a_n x^n + \\cdots$     |\r
\r
---\r
\r
### Special Polynomial Forms\r
\r
**Difference of Squares:**\r
\r
$$\r
a^2 - b^2 = (a + b)(a - b)\r
$$\r
\r
**Sum of Squares** (does not factor over $\\mathbb{R}$):\r
\r
$$\r
a^2 + b^2 \\quad \\text{— irreducible over } \\mathbb{R}\r
$$\r
\r
**Perfect Square Trinomial:**\r
\r
$$\r
a^2 + 2ab + b^2 = (a + b)^2\r
$$\r
\r
$$\r
a^2 - 2ab + b^2 = (a - b)^2\r
$$\r
\r
**Sum of Cubes:**\r
\r
$$\r
a^3 + b^3 = (a + b)(a^2 - ab + b^2)\r
$$\r
\r
**Difference of Cubes:**\r
\r
$$\r
a^3 - b^3 = (a - b)(a^2 + ab + b^2)\r
$$\r
\r
---\r
\r
### Multivariate Polynomials\r
\r
Polynomials in more than one variable:\r
\r
$$\r
P(x, y) = 3x^2 y + 2xy^2 - y + 5\r
$$\r
\r
The **total degree** of a term is the sum of all its variable exponents, e.g., $3x^2 y$ has total degree $3$.\r
\r
---\r
\r
## How to Solve\r
\r
### Addition & Subtraction\r
\r
Combine **like terms** — terms sharing the same variable and exponent.\r
\r
**Example:** $(3x^3 - 2x + 5) + (x^3 + 4x - 1)$\r
\r
$$\r
= (3 + 1)x^3 + (-2 + 4)x + (5 - 1)\r
$$\r
\r
$$\r
= 4x^3 + 2x + 4\r
$$\r
\r
---\r
\r
### Multiplication\r
\r
Distribute every term of one polynomial across every term of the other.\r
\r
**Example:** $(x + 3)(x^2 - 2x + 1)$\r
\r
$$\r
= x(x^2 - 2x + 1) + 3(x^2 - 2x + 1)\r
$$\r
\r
$$\r
= x^3 - 2x^2 + x + 3x^2 - 6x + 3\r
$$\r
\r
$$\r
= x^3 + x^2 - 5x + 3\r
$$\r
\r
**Special products (FOIL for binomials):**\r
\r
$$\r
(a + b)(a - b) = a^2 - b^2\r
$$\r
\r
$$\r
(a + b)^2 = a^2 + 2ab + b^2\r
$$\r
\r
---\r
\r
### Polynomial Long Division\r
\r
Divides $P(x)$ by a divisor $D(x)$, yielding a quotient $Q(x)$ and remainder $R(x)$:\r
\r
$$\r
\\frac{P(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}\r
$$\r
\r
**Example:** Divide $x^3 - 2x^2 + 4$ by $x - 2$\r
\r
$$\r
x^3 - 2x^2 + 0x + 4 \\;\\div\\; (x - 2)\r
$$\r
\r
Step 1: $x^3 \\div x = x^2$; multiply: $x^2(x-2) = x^3 - 2x^2$; subtract — remainder $0x^2 + 0x + 4$\r
\r
Step 2: $0 \\div x = 0$; bring down — remainder $0x + 4$\r
\r
Step 3: $0 \\div x = 0$; remainder $= 4$\r
\r
$$\r
\\therefore \\quad \\frac{x^3 - 2x^2 + 4}{x - 2} = x^2 + \\frac{4}{x-2}\r
$$\r
\r
---\r
\r
### Synthetic Division\r
\r
A shorthand for dividing by a **linear factor** $(x - c)$. Write only the coefficients.\r
\r
**Example:** Divide $2x^3 - 3x^2 + x - 5$ by $(x - 2)$, so $c = 2$\r
\r
Coefficients: $2,\\; -3,\\; 1,\\; -5$\r
\r
$$\r
\\begin{array}{r|rrrr}\r
2 & 2 & -3 & 1 & -5 \\\\\r
  &   &  4 & 2 &  6 \\\\\r
\\hline\r
  & 2 &  1 & 3 &  1 \\\\\r
\\end{array}\r
$$\r
\r
$$\r
\\therefore \\quad 2x^3 - 3x^2 + x - 5 = (x - 2)(2x^2 + x + 3) + 1\r
$$\r
\r
---\r
\r
### Factoring\r
\r
Rewriting a polynomial as a **product of lower-degree polynomials**.\r
\r
**Step 1 — Factor out the GCF (Greatest Common Factor):**\r
\r
$$\r
6x^3 + 9x^2 = 3x^2(2x + 3)\r
$$\r
\r
**Step 2 — Recognize special forms:**\r
\r
$$\r
x^2 - 16 = (x + 4)(x - 4)\r
$$\r
\r
$$\r
x^2 + 6x + 9 = (x + 3)^2\r
$$\r
\r
**Step 3 — Factor trinomials** $ax^2 + bx + c$:\r
\r
Find two numbers that multiply to $ac$ and add to $b$, then split the middle term.\r
\r
**Example:** Factor $2x^2 + 7x + 3$\r
\r
$ac = 6$; find two numbers multiplying to $6$ and adding to $7$: $6$ and $1$.\r
\r
$$\r
2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)\r
$$\r
\r
**Step 4 — Factor by grouping** (for 4-term polynomials):\r
\r
$$\r
x^3 + 2x^2 - 3x - 6 = x^2(x + 2) - 3(x + 2) = (x^2 - 3)(x + 2)\r
$$\r
\r
---\r
\r
### Finding Roots / Zeros\r
\r
**Strategy chain:**\r
\r
1. Apply the **Rational Root Theorem** to list candidates: $\\pm \\dfrac{p}{q}$ where $p \\mid a_0$ and $q \\mid a_n$\r
2. Test candidates using the **Factor Theorem** ($P(c) = 0$ means $(x - c)$ is a factor)\r
3. Use **synthetic division** to reduce the degree once a root is found\r
4. Repeat until the remaining factor is quadratic, then apply the **quadratic formula**\r
\r
**Example:** Find all roots of $P(x) = x^3 - 6x^2 + 11x - 6$\r
\r
Rational root candidates: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$\r
\r
Test $x = 1$: $1 - 6 + 11 - 6 = 0$ ✓\r
\r
Divide by $(x - 1)$ via synthetic division:\r
\r
$$\r
\\begin{array}{r|rrrr}\r
1 & 1 & -6 & 11 & -6 \\\\\r
  &   &  1 & -5 &  6 \\\\\r
\\hline\r
  & 1 & -5 &  6 &  0 \\\\\r
\\end{array}\r
$$\r
\r
Remaining factor: $x^2 - 5x + 6 = (x - 2)(x - 3)$\r
\r
$$\r
\\therefore \\quad P(x) = (x - 1)(x - 2)(x - 3), \\quad \\text{roots: } x = 1, 2, 3\r
$$\r
\r
---\r
\r
### Evaluating Polynomials — Horner's Method\r
\r
More efficient than direct substitution for large-degree polynomials. Rewrite $P(x)$ in nested form:\r
\r
$$\r
P(x) = a_n x^n + \\cdots + a_0 = (\\cdots((a_n x + a_{n-1})x + a_{n-2})x + \\cdots + a_0)\r
$$\r
\r
**Example:** Evaluate $P(x) = 2x^3 - 3x^2 + x - 5$ at $x = 3$\r
\r
$$\r
P(3) = ((2 \\cdot 3 - 3) \\cdot 3 + 1) \\cdot 3 - 5 = (3 \\cdot 3 + 1) \\cdot 3 - 5 = 10 \\cdot 3 - 5 = 25\r
$$\r
\r
---\r
\r
## Summary\r
\r
### Operations — Quick Reference\r
\r
| Operation              | Method                                                                          |\r
| ---------------------- | ------------------------------------------------------------------------------- |\r
| Addition / Subtraction | Combine like terms                                                              |\r
| Multiplication         | Distribute all terms; use special product identities                            |\r
| Division               | Long division or synthetic division (linear divisors only)                      |\r
| Factoring              | GCF → special forms → trinomial method → grouping                               |\r
| Root finding           | Rational Root Theorem → Factor Theorem → synthetic division → quadratic formula |\r
| Evaluation             | Direct substitution or Horner's method                                          |\r
\r
### Key Theorems — Quick Reference\r
\r
| Theorem                        | Statement                                                   |\r
| ------------------------------ | ----------------------------------------------------------- |\r
| Fundamental Theorem of Algebra | Degree-$n$ polynomial has exactly $n$ roots in $\\mathbb{C}$ |\r
| Remainder Theorem              | Remainder of $P(x) \\div (x-c)$ equals $P(c)$                |\r
| Factor Theorem                 | $(x - c)$ is a factor $\\Longleftrightarrow$ $P(c) = 0$      |\r
| Rational Root Theorem          | Rational roots $p/q$ satisfy $p \\mid a_0$ and $q \\mid a_n$  |\r
\r
### Special Factoring Identities — Quick Reference\r
\r
| Form              | Factored                |\r
| ----------------- | ----------------------- |\r
| $a^2 - b^2$       | $(a+b)(a-b)$            |\r
| $a^2 + 2ab + b^2$ | $(a+b)^2$               |\r
| $a^2 - 2ab + b^2$ | $(a-b)^2$               |\r
| $a^3 + b^3$       | $(a+b)(a^2 - ab + b^2)$ |\r
| $a^3 - b^3$       | $(a-b)(a^2 + ab + b^2)$ |\r
\r
**The golden rules to never forget:**\r
\r
$$\r
\\boxed{P(c) = 0 \\quad \\Longleftrightarrow \\quad (x - c) \\text{ is a factor of } P(x)}\r
$$\r
\r
$$\r
\\boxed{\\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)}\r
$$\r
\r
$$\r
\\boxed{\\text{Always factor out the GCF before applying any other factoring method}}\r
$$\r
`;export{e as default};