var e=`# Inequalities in Algebra\r
\r
---\r
\r
## Definition\r
\r
An **inequality** is a mathematical statement that asserts a **relative ordering** between two expressions, using one of the inequality symbols instead of $=$.\r
\r
$$\r
\\text{Expression}_1 \\;\\square\\; \\text{Expression}_2\r
$$\r
\r
where $\\square$ is one of: $<,\\; >,\\; \\leq,\\; \\geq,\\; \\neq$\r
\r
Unlike equations, inequalities typically yield an **interval** or **range** of solutions rather than discrete values.\r
\r
> **Contrast with equations:** $x = 3$ has exactly one solution. But $x > 3$ has infinitely many — every real number greater than 3.\r
\r
---\r
\r
## Key Terminology\r
\r
| Term                       | Definition                                                             |\r
| -------------------------- | ---------------------------------------------------------------------- |\r
| **Inequality**             | A statement comparing two expressions with $<$, $>$, $\\leq$, or $\\geq$ |\r
| **Strict Inequality**      | Uses $<$ or $>$, endpoint is **excluded**                              |\r
| **Non-strict Inequality**  | Uses $\\leq$ or $\\geq$, endpoint is **included**                        |\r
| **Solution Set**           | All values satisfying the inequality                                   |\r
| **Boundary Point**         | The value where the expression equals zero or changes sign             |\r
| **Feasible Region**        | In systems, the overlapping region satisfying all inequalities         |\r
| **Compound Inequality**    | Two inequalities joined by **and** or **or**                           |\r
| **Absolute Inequality**    | True for all real values, e.g., $x^2 \\geq 0$                           |\r
| **Conditional Inequality** | True only for specific values, e.g., $x + 1 > 3$                       |\r
\r
---\r
\r
## Purpose\r
\r
**1. Modeling constraints**\r
\r
Real-world problems rarely deal in exact equalities. Inequalities model bounds and limits:\r
\r
$$\r
0 \\leq \\text{temperature} \\leq 100\r
$$\r
\r
**2. Optimization**\r
\r
In linear programming, inequalities define the **feasible region** within which an optimal solution is found.\r
\r
**3. Expressing approximations**\r
\r
When an exact value is unknown but a range is:\r
\r
$$\r
1.4 < \\sqrt{2} < 1.5\r
$$\r
\r
**4. Error and tolerance analysis**\r
\r
In engineering and science, tolerances are expressed as inequalities:\r
\r
$$\r
|x - \\mu| \\leq \\epsilon\r
$$\r
\r
**5. Foundational role in calculus**\r
\r
Limits, continuity, and the epsilon-delta definition all rely on inequalities.\r
\r
---\r
\r
## Fundamental Properties\r
\r
These are the **legal operations** on inequalities. Most mirror equation rules — with one critical exception.\r
\r
### Addition & Subtraction Property\r
\r
$$\r
\\text{If } a < b, \\text{ then } a + c < b + c\r
$$\r
\r
Adding or subtracting the same value **preserves** the inequality direction.\r
\r
### Multiplication & Division by a Positive Number\r
\r
$$\r
\\text{If } a < b \\text{ and } c > 0, \\text{ then } ac < bc\r
$$\r
\r
Direction is **preserved**.\r
\r
### Multiplication & Division by a Negative Number\r
\r
$$\r
\\text{If } a < b \\text{ and } c < 0, \\text{ then } ac > bc\r
$$\r
\r
> **Critical rule:** Multiplying or dividing by a **negative number reverses** the inequality sign. This is the most common source of errors.\r
\r
### Transitive Property\r
\r
$$\r
\\text{If } a < b \\text{ and } b < c, \\text{ then } a < c\r
$$\r
\r
### Chaining Property\r
\r
$$\r
a < b < c \\quad \\Longleftrightarrow \\quad a < b \\text{ and } b < c\r
$$\r
\r
### Reciprocal Property\r
\r
$$\r
\\text{If } 0 < a < b, \\text{ then } \\frac{1}{a} > \\frac{1}{b}\r
$$\r
\r
Taking reciprocals of **positive** numbers reverses the inequality. If signs differ, extra care is needed.\r
\r
### Squaring Property\r
\r
$$\r
\\text{If } a, b \\geq 0 \\text{ and } a < b, \\text{ then } a^2 < b^2\r
$$\r
\r
Squaring is only order-preserving when **both sides are non-negative**.\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. Linear Inequalities\r
\r
**Degree:** 1\r
\r
**Standard form:**\r
\r
$$\r
ax + b < 0 \\quad (\\text{or } >, \\leq, \\geq)\r
$$\r
\r
**Example:** $2x - 4 > 0$\r
\r
Solution is an interval, e.g., $x > 2$, written in interval notation as $(2, +\\infty)$.\r
\r
---\r
\r
### 2. Compound Inequalities\r
\r
Two inequalities combined with **and** (intersection) or **or** (union).\r
\r
**"And" type (conjunction):**\r
\r
$$\r
-3 < 2x + 1 \\leq 7\r
$$\r
\r
This is shorthand for $-3 < 2x + 1$ **and** $2x + 1 \\leq 7$. Solution is an intersection of two intervals.\r
\r
**"Or" type (disjunction):**\r
\r
$$\r
x < -2 \\quad \\text{or} \\quad x > 5\r
$$\r
\r
Solution is a union: $(-\\infty, -2) \\cup (5, +\\infty)$\r
\r
---\r
\r
### 3. Quadratic Inequalities\r
\r
**Degree:** 2\r
\r
**Standard form:**\r
\r
$$\r
ax^2 + bx + c < 0 \\quad (\\text{or } >, \\leq, \\geq)\r
$$\r
\r
**Example:** $x^2 - x - 6 < 0$\r
\r
Solutions come from analyzing the **sign** of the quadratic between its roots.\r
\r
---\r
\r
### 4. Polynomial Inequalities\r
\r
**Degree:** $n$\r
\r
$$\r
a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_0 < 0\r
$$\r
\r
Solved using a **sign chart** across the real roots.\r
\r
---\r
\r
### 5. Rational Inequalities\r
\r
Variable in the **denominator**.\r
\r
**Example:**\r
\r
$$\r
\\frac{x - 1}{x + 3} > 0\r
$$\r
\r
> Never cross-multiply blindly — the sign of the denominator may be positive or negative. Use a sign chart instead.\r
\r
---\r
\r
### 6. Absolute Value Inequalities\r
\r
**Two forms:**\r
\r
$$\r
|f(x)| < c \\quad \\Longleftrightarrow \\quad -c < f(x) < c \\quad (c > 0)\r
$$\r
\r
$$\r
|f(x)| > c \\quad \\Longleftrightarrow \\quad f(x) < -c \\;\\text{ or }\\; f(x) > c \\quad (c > 0)\r
$$\r
\r
---\r
\r
### 7. Systems of Inequalities\r
\r
Multiple inequalities solved **simultaneously**. The solution is the **intersection** of all individual solution sets (feasible region).\r
\r
**Example:**\r
\r
$$\r
\\begin{cases} x + y \\leq 6 \\\\ x - y \\geq 1 \\\\ x \\geq 0 \\end{cases}\r
$$\r
\r
---\r
\r
## How to Solve\r
\r
### Linear Inequalities\r
\r
**Steps:**\r
\r
1. Expand and simplify both sides\r
2. Move variable terms to one side, constants to the other\r
3. Divide by the coefficient of $x$ — **flip the sign if dividing by a negative**\r
4. Write the solution as an interval\r
\r
**Example:** Solve $-3x + 6 \\leq 0$\r
\r
$$\r
-3x + 6 \\leq 0\r
$$\r
\r
$$\r
-3x \\leq -6\r
$$\r
\r
$$\r
x \\geq 2 \\quad \\leftarrow \\text{sign flips (divided by } {-3}\\text{)}\r
$$\r
\r
$$\r
\\text{Solution: } [2, +\\infty)\r
$$\r
\r
---\r
\r
### Compound Inequalities\r
\r
**"And" type — solve all parts simultaneously:**\r
\r
**Example:** Solve $-3 < 2x + 1 \\leq 7$\r
\r
Subtract 1 from all parts:\r
\r
$$\r
-4 < 2x \\leq 6\r
$$\r
\r
Divide all parts by 2:\r
\r
$$\r
-2 < x \\leq 3\r
$$\r
\r
$$\r
\\text{Solution: } (-2, 3]\r
$$\r
\r
**"Or" type — solve each separately, then union:**\r
\r
$$\r
x < -2 \\quad \\cup \\quad x > 5 \\quad \\Rightarrow \\quad (-\\infty, -2) \\cup (5, +\\infty)\r
$$\r
\r
---\r
\r
### Quadratic Inequalities\r
\r
**Steps:**\r
\r
1. Move all terms to one side: $ax^2 + bx + c \\;\\square\\; 0$\r
2. Find the roots by solving $ax^2 + bx + c = 0$\r
3. Mark the roots on a number line — they divide it into intervals\r
4. Test a value in each interval to determine the sign\r
5. Select intervals matching the inequality; include endpoints for $\\leq$ or $\\geq$\r
\r
**Example:** Solve $x^2 - x - 6 < 0$\r
\r
Factor: $(x - 3)(x + 2) = 0 \\implies x = 3, \\; x = -2$\r
\r
Sign chart:\r
\r
| Interval     | $(x - 3)$ | $(x + 2)$ | Product |\r
| ------------ | --------- | --------- | ------- |\r
| $x < -2$     | $-$       | $-$       | $+$     |\r
| $-2 < x < 3$ | $-$       | $+$       | $-$     |\r
| $x > 3$      | $+$       | $+$       | $+$     |\r
\r
We want the product $< 0$, so:\r
\r
$$\r
\\text{Solution: } (-2, 3)\r
$$\r
\r
---\r
\r
### Rational Inequalities\r
\r
**Steps:**\r
\r
1. Move all terms to one side: $\\dfrac{p(x)}{q(x)} \\;\\square\\; 0$\r
2. Find all **zeros** of $p(x)$ (numerator) and $q(x)$ (denominator)\r
3. Mark all critical values on a number line\r
4. Test each interval using a sign chart\r
5. Exclude any values that make $q(x) = 0$\r
\r
**Example:** Solve $\\dfrac{x - 1}{x + 3} > 0$\r
\r
Critical values: $x = 1$ (numerator zero), $x = -3$ (denominator zero)\r
\r
| Interval     | $(x - 1)$ | $(x + 3)$ | Quotient |\r
| ------------ | --------- | --------- | -------- |\r
| $x < -3$     | $-$       | $-$       | $+$      |\r
| $-3 < x < 1$ | $-$       | $+$       | $-$      |\r
| $x > 1$      | $+$       | $+$       | $+$      |\r
\r
We want $> 0$, and $x = -3$ is excluded (undefined), $x = 1$ gives $0$ (excluded since strict):\r
\r
$$\r
\\text{Solution: } (-\\infty, -3) \\cup (1, +\\infty)\r
$$\r
\r
---\r
\r
### Absolute Value Inequalities\r
\r
**Case 1 — "Less than":** $\\lvert f(x) \\rvert < c$\r
\r
$$\r
\\lvert 2x - 3 \\rvert < 5 \\quad \\Longrightarrow \\quad -5 < 2x - 3 < 5\r
$$\r
\r
$$\r
-2 < 2x < 8 \\implies -1 < x < 4\r
$$\r
\r
$$\r
\\text{Solution: } (-1, 4)\r
$$\r
\r
**Case 2 — "Greater than":** $\\lvert f(x) \\rvert > c$\r
\r
$$\r
\\lvert x + 1 \\rvert > 4 \\quad \\Longrightarrow \\quad x + 1 < -4 \\;\\text{ or }\\; x + 1 > 4\r
$$\r
\r
$$\r
x < -5 \\quad \\text{or} \\quad x > 3\r
$$\r
\r
$$\r
\\text{Solution: } (-\\infty, -5) \\cup (3, +\\infty)\r
$$\r
\r
> If $c \\leq 0$: $\\lvert f(x) \\rvert < c$ has **no solution**; $\\lvert f(x) \\rvert > c$ is **all reals**.\r
\r
---\r
\r
### Systems of Inequalities\r
\r
Solve each inequality separately, then find the **intersection** of all solution sets.\r
\r
For two-variable systems, this is done graphically — graph each boundary line, shade the correct half-plane, and the feasible region is the overlap.\r
\r
---\r
\r
## Summary\r
\r
| Type                 | Form                     | Solution Shape            | Key Method                            |\r
| -------------------- | ------------------------ | ------------------------- | ------------------------------------- |\r
| Linear               | $ax + b < 0$             | Single interval           | Isolate, flip sign if $\\div$ negative |\r
| Compound (and)       | $a < f(x) \\leq b$        | Intersection of intervals | Solve all parts simultaneously        |\r
| Compound (or)        | $f(x) < a$ or $f(x) > b$ | Union of intervals        | Solve separately, then union          |\r
| Quadratic            | $ax^2 + bx + c < 0$      | One or two intervals      | Sign chart from roots                 |\r
| Polynomial           | $p(x) > 0$               | Multiple intervals        | Sign chart from all real roots        |\r
| Rational             | $p(x)/q(x) < 0$          | Multiple intervals        | Sign chart, exclude denom zeros       |\r
| Absolute Value ($<$) | $\\lvert f(x) \\rvert < c$ | Single interval           | $-c < f(x) < c$                       |\r
| Absolute Value ($>$) | $\\lvert f(x) \\rvert > c$ | Union of intervals        | $f(x) < -c$ or $f(x) > c$             |\r
| System               | Multiple inequalities    | Feasible region           | Intersect all solution sets           |\r
\r
**The golden rules to never forget:**\r
\r
$$\r
\\boxed{\\text{Multiplying or dividing by a negative} \\Rightarrow \\text{flip the inequality sign}}\r
$$\r
\r
$$\r
\\boxed{\\text{Never cross-multiply a rational inequality without checking the sign of the denominator}}\r
$$\r
`;export{e as default};