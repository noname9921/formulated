var e=`# Functions & Relations\r
\r
## Definition\r
\r
A **relation** is any set of ordered pairs $(x, y)$ — a pairing between elements of two sets.\r
\r
A **function** is a special relation where every input $x$ maps to **exactly one** output $y$. No $x$ value is repeated with a different $y$.\r
\r
$$f : X \\to Y \\quad \\text{means } f \\text{ maps every element of } X \\text{ to exactly one element of } Y$$\r
\r
Formally, a function $f$ satisfies:\r
\r
$$\\forall x \\in X,\\ \\exists!\\, y \\in Y \\text{ such that } f(x) = y$$\r
\r
where $\\exists!$ means "there exists exactly one."\r
\r
---\r
\r
## Key Terminology\r
\r
| Term               | Definition                                                                          |\r
| :----------------- | :---------------------------------------------------------------------------------- |\r
| Relation           | Any set of ordered pairs $(x, y)$                                                   |\r
| Function           | A relation where each input maps to exactly one output                              |\r
| Domain             | The set of all valid inputs $x$                                                     |\r
| Codomain           | The set of all possible outputs $y$ is declared to land in                          |\r
| Range / Image      | The set of all actual outputs produced by the function                              |\r
| Input / Argument   | The value fed into the function, typically $x$                                      |\r
| Output / Value     | The result produced, typically $f(x)$ or $y$                                        |\r
| Mapping            | The assignment of each input to its corresponding output                            |\r
| Ordered Pair       | A pair $(x, y)$ representing one input-output relationship                          |\r
| Vertical Line Test | A graphical test — a graph is a function if no vertical line hits it more than once |\r
\r
---\r
\r
## Purpose\r
\r
Functions are the **core language of mathematics** — virtually every field uses them:\r
\r
- **Algebra** — modeling relationships between quantities\r
- **Calculus** — analyzing rates of change and accumulation\r
- **Physics** — describing motion, force, energy as functions of time\r
- **Computer science** — functions as the fundamental unit of computation\r
- **Statistics** — probability distributions as functions over outcomes\r
\r
A function $f(x) = 2x + 3$ tells you exactly what happens to any input — predictable, unambiguous, repeatable. That reliability is what makes functions so useful.\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Well-Definedness\r
\r
A relation is a function if and only if each $x$ value in the domain maps to **exactly one** $y$:\r
\r
$$\\text{If } (x, y_1) \\in f \\text{ and } (x, y_2) \\in f,\\ \\text{then } y_1 = y_2$$\r
\r
### Domain & Range\r
\r
For $f(x) = \\sqrt{x - 2}$:\r
\r
- Domain: $x - 2 \\geq 0 \\implies x \\geq 2$, written $[2, \\infty)$\r
- Range: $f(x) \\geq 0$, written $[0, \\infty)$\r
\r
### Function Equality\r
\r
Two functions $f$ and $g$ are equal if and only if:\r
\r
$$f(x) = g(x) \\quad \\text{for all } x \\text{ in their shared domain}$$\r
\r
### Composition\r
\r
The composition of $f$ and $g$ is:\r
\r
$$(f \\circ g)(x) = f(g(x))$$\r
\r
Apply $g$ first, then apply $f$ to the result. Note that $f \\circ g \\neq g \\circ f$ in general.\r
\r
### Inverse Function\r
\r
If $f$ is one-to-one, its inverse $f^{-1}$ satisfies:\r
\r
$$f(f^{-1}(x)) = x \\quad \\text{and} \\quad f^{-1}(f(x)) = x$$\r
\r
The inverse undoes what $f$ does. Graphically, $f^{-1}$ is the reflection of $f$ over the line $y = x$.\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. One-to-One Function (Injective)\r
\r
Every output is produced by at most one input:\r
\r
$$f(a) = f(b) \\implies a = b$$\r
\r
**Example:** $f(x) = 3x + 1$ — each output comes from exactly one input.\r
\r
> Graphical test: passes the **horizontal line test**.\r
\r
---\r
\r
### 2. Onto Function (Surjective)\r
\r
Every element of the codomain is hit by at least one input:\r
\r
$$\\forall y \\in Y,\\ \\exists x \\in X \\text{ such that } f(x) = y$$\r
\r
**Example:** $f : \\mathbb{R} \\to \\mathbb{R},\\ f(x) = 2x + 1$ — every real number is reachable.\r
\r
---\r
\r
### 3. Bijective Function\r
\r
Both injective and surjective — a perfect one-to-one correspondence between domain and codomain. Only bijective functions have inverses.\r
\r
---\r
\r
### 4. Linear Function\r
\r
$$f(x) = mx + b$$\r
\r
- Constant rate of change $m$ (slope)\r
- Graph is a straight line\r
- Domain and range: all reals $(-\\infty, \\infty)$\r
\r
---\r
\r
### 5. Quadratic Function\r
\r
$$f(x) = ax^2 + bx + c, \\quad a \\neq 0$$\r
\r
- Graph is a **parabola**\r
- Vertex at $x = -\\dfrac{b}{2a}$\r
- Domain: all reals; Range: $[k, \\infty)$ if $a > 0$, or $(-\\infty, k]$ if $a < 0$, where $k$ is the vertex value\r
\r
---\r
\r
### 6. Polynomial Function\r
\r
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$$\r
\r
- Degree $n$ determines end behavior and maximum number of roots\r
- Domain: all reals\r
\r
---\r
\r
### 7. Rational Function\r
\r
$$f(x) = \\frac{p(x)}{q(x)}, \\quad q(x) \\neq 0$$\r
\r
- Domain excludes values where $q(x) = 0$\r
- May have vertical asymptotes where denominator is zero\r
\r
**Example:** $f(x) = \\dfrac{1}{x - 3}$ has domain $x \\neq 3$\r
\r
---\r
\r
### 8. Radical Function\r
\r
$$f(x) = \\sqrt[n]{g(x)}$$\r
\r
- For even $n$: domain requires $g(x) \\geq 0$\r
- For odd $n$: domain is all reals\r
\r
---\r
\r
### 9. Piecewise Function\r
\r
Defined by different rules over different intervals:\r
\r
$$f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x + 1 & x \\geq 0 \\end{cases}$$\r
\r
---\r
\r
### 10. Constant Function\r
\r
$$f(x) = c$$\r
\r
Every input maps to the same output $c$. Graph is a horizontal line.\r
\r
---\r
\r
### 11. Identity Function\r
\r
$$f(x) = x$$\r
\r
Every input maps to itself. Acts as the neutral element under composition:\r
\r
$$(f \\circ \\text{id})(x) = f(x)$$\r
\r
---\r
\r
### 12. Relation That Is Not a Function\r
\r
$$\\{(1, 2),\\ (1, 3),\\ (2, 4)\\}$$\r
\r
The input $1$ maps to both $2$ and $3$ — this violates the definition of a function.\r
\r
A **circle** is a classic non-function relation:\r
\r
$$x^2 + y^2 = r^2$$\r
\r
Solving for $y$ gives $y = \\pm\\sqrt{r^2 - x^2}$ — two outputs for most inputs.\r
\r
---\r
\r
## How to Solve\r
\r
### Finding the Domain\r
\r
**Step 1 — Identify restrictions:**\r
\r
- Denominators cannot be zero\r
- Even roots require non-negative radicand\r
- Logarithms require positive argument\r
\r
**Example:** Find the domain of $f(x) = \\dfrac{\\sqrt{x + 4}}{x - 1}$\r
\r
Restriction 1 (square root): $x + 4 \\geq 0 \\implies x \\geq -4$\r
\r
Restriction 2 (denominator): $x - 1 \\neq 0 \\implies x \\neq 1$\r
\r
$$\\text{Domain: } [-4, 1) \\cup (1, \\infty)$$\r
\r
---\r
\r
### Evaluating a Function\r
\r
Substitute the input directly for the variable.\r
\r
**Example:** Given $f(x) = 3x^2 - 2x + 1$, find $f(4)$:\r
\r
$$f(4) = 3(4)^2 - 2(4) + 1 = 48 - 8 + 1 = 41$$\r
\r
---\r
\r
### Finding the Inverse\r
\r
**Step 1 — Replace $f(x)$ with $y$.**\r
\r
**Step 2 — Swap $x$ and $y$.**\r
\r
**Step 3 — Solve for $y$.**\r
\r
**Step 4 — Replace $y$ with $f^{-1}(x)$.**\r
\r
**Example:** Find the inverse of $f(x) = 2x + 5$\r
\r
$$y = 2x + 5$$\r
\r
Swap:\r
\r
$$x = 2y + 5$$\r
\r
Solve for $y$:\r
\r
$$x - 5 = 2y$$\r
\r
$$y = \\frac{x - 5}{2}$$\r
\r
$$\\boxed{f^{-1}(x) = \\frac{x-5}{2}}$$\r
\r
---\r
\r
### Composition of Functions\r
\r
**Example:** Given $f(x) = x^2$ and $g(x) = x + 3$, find $(f \\circ g)(x)$:\r
\r
$$(f \\circ g)(x) = f(g(x)) = f(x + 3) = (x + 3)^2$$\r
\r
$$= x^2 + 6x + 9$$\r
\r
---\r
\r
### Vertical Line Test\r
\r
To determine if a graph represents a function:\r
\r
- Draw (or imagine) vertical lines across the graph\r
- If **any** vertical line crosses the graph more than once, it is **not** a function\r
- If every vertical line crosses **at most once**, it **is** a function\r
\r
---\r
\r
## Summary\r
\r
| Concept            | Key Idea                                         |\r
| :----------------- | :----------------------------------------------- |\r
| Relation           | Any set of ordered pairs                         |\r
| Function           | Each input maps to exactly one output            |\r
| Domain             | Set of valid inputs                              |\r
| Range              | Set of actual outputs                            |\r
| Injective          | Each output comes from at most one input         |\r
| Surjective         | Every codomain element is reached                |\r
| Bijective          | Both injective and surjective — invertible       |\r
| Composition        | $(f \\circ g)(x) = f(g(x))$                       |\r
| Inverse            | Undoes $f$ — exists only for bijective functions |\r
| Vertical Line Test | Graphical check for function validity            |\r
\r
Functions are the backbone of all of mathematics — they formalize the idea of a **rule that takes an input and produces an output**, making them indispensable across every branch of math and science.\r
`;export{e as default};