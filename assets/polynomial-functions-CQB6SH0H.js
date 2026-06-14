var e=`# Polynomial Functions\r
\r
## Definition\r
\r
A **polynomial function** is a function of the form:\r
\r
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$$\r
\r
where:\r
\r
- $n$ is a non-negative integer called the **degree**\r
- $a_n, a_{n-1}, \\dots, a_0$ are real constants called **coefficients**\r
- $a_n \\neq 0$ (the leading coefficient is nonzero)\r
\r
Each expression $a_k x^k$ is called a **term**. The variable $x$ may only appear with non-negative integer exponents — no roots, no fractions, no negative powers.\r
\r
---\r
\r
## Key Terminology\r
\r
| Term                | Definition                                                        |\r
| :------------------ | :---------------------------------------------------------------- |\r
| Degree              | The highest exponent of $x$ with a nonzero coefficient            |\r
| Leading Coefficient | The coefficient $a_n$ of the highest-degree term                  |\r
| Leading Term        | The term $a_n x^n$ that dominates end behavior                    |\r
| Constant Term       | The term $a_0$ — the value of $f(0)$                              |\r
| Root / Zero         | A value $r$ where $f(r) = 0$                                      |\r
| Multiplicity        | How many times a root $r$ appears as a factor $(x - r)^k$         |\r
| End Behavior        | What $f(x)$ does as $x \\to \\infty$ and $x \\to -\\infty$            |\r
| Turning Point       | A local max or min — a point where the function changes direction |\r
| Monomial            | A polynomial with exactly one term                                |\r
| Binomial            | A polynomial with exactly two terms                               |\r
| Trinomial           | A polynomial with exactly three terms                             |\r
| Monic Polynomial    | A polynomial where the leading coefficient $a_n = 1$              |\r
\r
---\r
\r
## Purpose\r
\r
Polynomial functions are the **most well-behaved and widely used** class of functions in mathematics:\r
\r
- **Approximation** — any smooth function can be approximated by polynomials (Taylor series)\r
- **Modeling** — population growth, physical trajectories, engineering curves\r
- **Computer graphics** — Bézier curves use polynomial interpolation\r
- **Algebra** — roots of polynomials connect to factoring, systems, and number theory\r
- **Calculus** — polynomials are the easiest functions to differentiate and integrate\r
\r
Linear and quadratic functions are just polynomials of degree $1$ and $2$ — polynomial functions generalize them both into a single unified family.\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Degree and Number of Roots\r
\r
A polynomial of degree $n$ has **at most $n$ real roots** and **exactly $n$ roots** counted in $\\mathbb{C}$ (the complex numbers), by the **Fundamental Theorem of Algebra**:\r
\r
$$f(x) = a_n(x - r_1)(x - r_2) \\cdots (x - r_n)$$\r
\r
### End Behavior\r
\r
End behavior is determined entirely by the **leading term** $a_n x^n$:\r
\r
| Leading Coefficient | Degree | $x \\to -\\infty$ | $x \\to +\\infty$ |\r
| :------------------ | :----- | :-------------- | :-------------- |\r
| $a_n > 0$           | Even   | $+\\infty$       | $+\\infty$       |\r
| $a_n < 0$           | Even   | $-\\infty$       | $-\\infty$       |\r
| $a_n > 0$           | Odd    | $-\\infty$       | $+\\infty$       |\r
| $a_n < 0$           | Odd    | $+\\infty$       | $-\\infty$       |\r
\r
Even-degree polynomials have **both ends going the same direction**. Odd-degree polynomials have **ends going opposite directions**.\r
\r
### Turning Points\r
\r
A polynomial of degree $n$ has **at most $n - 1$ turning points**. Each turning point is a local maximum or minimum.\r
\r
### Continuity and Smoothness\r
\r
Every polynomial function is **continuous and smooth** everywhere on $(-\\infty, \\infty)$ — no holes, no jumps, no sharp corners, no asymptotes.\r
\r
### Root Multiplicity Behavior\r
\r
If $(x - r)^k$ is a factor of $f(x)$:\r
\r
- $k$ **odd** — graph **crosses** the x-axis at $x = r$\r
- $k$ **even** — graph **touches** the x-axis at $x = r$ and bounces back\r
\r
### The Factor Theorem\r
\r
$(x - r)$ is a factor of $f(x)$ if and only if $f(r) = 0$.\r
\r
### The Remainder Theorem\r
\r
When $f(x)$ is divided by $(x - r)$, the remainder equals $f(r)$.\r
\r
### Intermediate Value Theorem\r
\r
If $f(a)$ and $f(b)$ have opposite signs, then there exists at least one root in the interval $(a, b)$.\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. Constant Polynomial — Degree 0\r
\r
$$f(x) = c$$\r
\r
A horizontal line. No roots unless $c = 0$.\r
\r
---\r
\r
### 2. Linear Polynomial — Degree 1\r
\r
$$f(x) = ax + b, \\quad a \\neq 0$$\r
\r
Exactly one root: $x = -\\dfrac{b}{a}$\r
\r
---\r
\r
### 3. Quadratic Polynomial — Degree 2\r
\r
$$f(x) = ax^2 + bx + c, \\quad a \\neq 0$$\r
\r
At most two real roots. Discriminant $\\Delta = b^2 - 4ac$ determines root count.\r
\r
---\r
\r
### 4. Cubic Polynomial — Degree 3\r
\r
$$f(x) = ax^3 + bx^2 + cx + d, \\quad a \\neq 0$$\r
\r
Always has at least one real root (odd degree). At most three real roots and at most two turning points.\r
\r
**Example:** $f(x) = x^3 - 3x^2 - x + 3 = (x-3)(x-1)(x+1)$\r
\r
Roots: $x = 3,\\ 1,\\ -1$\r
\r
---\r
\r
### 5. Quartic Polynomial — Degree 4\r
\r
$$f(x) = ax^4 + bx^3 + cx^2 + dx + e, \\quad a \\neq 0$$\r
\r
At most four real roots and at most three turning points. Both ends go in the same direction.\r
\r
---\r
\r
### 6. Monomial\r
\r
$$f(x) = ax^n$$\r
\r
A single term. Graph passes through origin (if $n \\geq 1$), symmetric about y-axis for even $n$, symmetric about origin for odd $n$.\r
\r
---\r
\r
### 7. Monic Polynomial\r
\r
Leading coefficient is $1$:\r
\r
$$f(x) = x^n + a_{n-1}x^{n-1} + \\cdots + a_0$$\r
\r
Common in theory — factored forms are often written as monic polynomials.\r
\r
---\r
\r
### 8. Polynomial with Repeated Roots\r
\r
$$f(x) = (x - 2)^2(x + 1)$$\r
\r
Root $x = 2$ has multiplicity $2$ — graph **touches** x-axis and turns around. Root $x = -1$ has multiplicity $1$ — graph **crosses** x-axis.\r
\r
---\r
\r
## How to Solve\r
\r
### Finding Roots by Factoring\r
\r
Factor completely, then set each factor to zero.\r
\r
**Example:** Solve $f(x) = x^3 - 6x^2 + 11x - 6$\r
\r
Test $x = 1$: $f(1) = 1 - 6 + 11 - 6 = 0$ ✓\r
\r
Factor out $(x - 1)$ using synthetic division:\r
\r
$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$$\r
\r
Factor the quadratic:\r
\r
$$(x-1)(x-2)(x-3) = 0$$\r
\r
$$\\boxed{x = 1,\\quad x = 2,\\quad x = 3}$$\r
\r
---\r
\r
### Synthetic Division\r
\r
A fast method to divide $f(x)$ by $(x - r)$.\r
\r
**Example:** Divide $f(x) = 2x^3 - 3x^2 - 11x + 6$ by $(x - 3)$\r
\r
Write coefficients: $2,\\ -3,\\ -11,\\ 6$ and $r = 3$\r
\r
$$\\begin{array}{r|rrrr} 3 & 2 & -3 & -11 & 6 \\\\ & & 6 & 9 & -6 \\\\ \\hline & 2 & 3 & -2 & 0 \\end{array}$$\r
\r
Remainder is $0$, so $(x - 3)$ is a factor:\r
\r
$$f(x) = (x - 3)(2x^2 + 3x - 2) = (x-3)(2x-1)(x+2)$$\r
\r
$$\\boxed{x = 3,\\quad x = \\frac{1}{2},\\quad x = -2}$$\r
\r
---\r
\r
### Rational Root Theorem\r
\r
If $f(x) = a_n x^n + \\cdots + a_0$ has integer coefficients, any rational root has the form:\r
\r
$$x = \\pm\\frac{p}{q}$$\r
\r
where $p$ divides $a_0$ (constant term) and $q$ divides $a_n$ (leading coefficient).\r
\r
**Example:** $f(x) = 2x^3 - 3x^2 - 11x + 6$\r
\r
- $p \\in \\{1, 2, 3, 6\\}$ (factors of $6$)\r
- $q \\in \\{1, 2\\}$ (factors of $2$)\r
- Candidates: $\\pm 1,\\ \\pm 2,\\ \\pm 3,\\ \\pm 6,\\ \\pm\\dfrac{1}{2},\\ \\pm\\dfrac{3}{2}$\r
\r
Test until $f(r) = 0$, then use synthetic division to reduce.\r
\r
---\r
\r
### Determining End Behavior\r
\r
Look only at the leading term $a_n x^n$:\r
\r
**Example:** $f(x) = -3x^5 + 7x^3 - 2$\r
\r
Leading term: $-3x^5$ — degree odd, leading coefficient negative.\r
\r
$$x \\to +\\infty \\implies f(x) \\to -\\infty$$\r
\r
$$x \\to -\\infty \\implies f(x) \\to +\\infty$$\r
\r
---\r
\r
### Sketching a Polynomial Graph\r
\r
**Step 1 — Find degree and leading coefficient** for end behavior.\r
\r
**Step 2 — Find all real roots** and their multiplicities.\r
\r
**Step 3 — Determine crossing vs. touching** at each root using multiplicity.\r
\r
**Step 4 — Find the y-intercept** by evaluating $f(0) = a_0$.\r
\r
**Step 5 — Plot and connect** smoothly, consistent with end behavior and turning points.\r
\r
---\r
\r
### Multiplicity Summary\r
\r
| Multiplicity         | Behavior at Root                 |\r
| :------------------- | :------------------------------- |\r
| Odd (e.g. $1$, $3$)  | Graph crosses x-axis             |\r
| Even (e.g. $2$, $4$) | Graph touches x-axis and bounces |\r
| Higher multiplicity  | Graph is flatter near the root   |\r
\r
---\r
\r
## Summary\r
\r
| Property               | Rule                                                             |\r
| :--------------------- | :--------------------------------------------------------------- |\r
| Degree $n$             | At most $n$ real roots, exactly $n$ complex roots                |\r
| Turning points         | At most $n - 1$                                                  |\r
| End behavior           | Determined by $a_n x^n$                                          |\r
| Even degree, $a_n > 0$ | Both ends $\\to +\\infty$                                          |\r
| Even degree, $a_n < 0$ | Both ends $\\to -\\infty$                                          |\r
| Odd degree, $a_n > 0$  | Left $\\to -\\infty$, right $\\to +\\infty$                          |\r
| Odd degree, $a_n < 0$  | Left $\\to +\\infty$, right $\\to -\\infty$                          |\r
| Factor Theorem         | $(x-r)$ is a factor $\\iff$ $f(r) = 0$                            |\r
| Remainder Theorem      | Remainder of $f(x) \\div (x-r)$ equals $f(r)$                     |\r
| Odd multiplicity       | Graph crosses x-axis at that root                                |\r
| Even multiplicity      | Graph touches x-axis and bounces at that root                    |\r
| Rational Root Theorem  | Rational roots are $\\pm\\dfrac{p}{q}$, $p \\mid a_0$, $q \\mid a_n$ |\r
| Continuity             | Smooth and continuous on $(-\\infty, \\infty)$                     |\r
\r
Polynomial functions unify everything before them — constants, linear, and quadratic are all special cases. Mastering polynomials means understanding end behavior, roots, multiplicity, and factoring at a level that directly carries into calculus and beyond.\r
`;export{e as default};