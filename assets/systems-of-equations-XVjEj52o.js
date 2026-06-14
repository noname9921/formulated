var e=`# System of Equations\r
\r
## Definition\r
\r
A system of equations is a set of two or more equations containing the same variables, where the **solution** is the set of values that satisfies **all equations simultaneously**.\r
\r
$$\\begin{cases} f_1(x, y) = 0 \\\\ f_2(x, y) = 0 \\end{cases}$$\r
\r
Geometrically, each equation represents a curve or surface — the solution is where they **intersect**.\r
\r
---\r
\r
## Key Terminology\r
\r
| Term         | Definition                                                                                 |\r
| :----------- | :----------------------------------------------------------------------------------------- |\r
| System       | A collection of two or more equations with shared variables                                |\r
| Solution     | A set of values satisfying every equation in the system simultaneously                     |\r
| Consistent   | A system that has at least one solution                                                    |\r
| Inconsistent | A system with no solution                                                                  |\r
| Dependent    | A system with infinitely many solutions (equations describe the same line/plane)           |\r
| Independent  | A system with exactly one unique solution                                                  |\r
| Variable     | An unknown quantity shared across equations, e.g. $x$, $y$, $z$                            |\r
| Linear       | An equation where all variables are to the first power                                     |\r
| Nonlinear    | An equation containing variables raised to powers other than one, or products of variables |\r
\r
---\r
\r
## Purpose\r
\r
Systems of equations model situations where **multiple conditions must hold at once**:\r
\r
- Finding intersection points of curves or lines\r
- Solving real-world problems with multiple unknowns (e.g. pricing, mixtures, motion)\r
- Describing equilibrium in physics or economics\r
- Underpinning linear algebra, optimization, and machine learning\r
\r
A classic example — two items with known total count and total cost:\r
\r
$$\\begin{cases} x + y = 10 \\\\ 3x + 5y = 38 \\end{cases}$$\r
\r
Both conditions must be true simultaneously.\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Equivalence Operations\r
\r
The following operations produce an **equivalent system** (same solution set):\r
\r
- Multiplying any equation by a nonzero constant\r
- Adding a multiple of one equation to another\r
- Swapping the order of equations\r
\r
### Solution Set Possibilities\r
\r
For a system of $n$ equations in $n$ unknowns, exactly one of three outcomes holds:\r
\r
**Exactly one solution** — equations intersect at a single point:\r
\r
$$\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases} \\implies x = 3,\\ y = 2$$\r
\r
**No solution** — equations are parallel (inconsistent):\r
\r
$$\\begin{cases} x + y = 3 \\\\ x + y = 7 \\end{cases} \\implies \\text{contradiction: } 3 \\neq 7$$\r
\r
**Infinitely many solutions** — equations are identical or dependent:\r
\r
$$\\begin{cases} x + y = 4 \\\\ 2x + 2y = 8 \\end{cases} \\implies \\text{same line}$$\r
\r
### Consistency Condition (2×2 Linear)\r
\r
For the system:\r
\r
$$\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}$$\r
\r
Define the determinant $D = a_1 b_2 - a_2 b_1$, then:\r
\r
- $D \\neq 0$ — exactly one solution\r
- $D = 0$ and ratios are consistent — infinitely many solutions\r
- $D = 0$ and ratios are inconsistent — no solution\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. Linear System (2 variables)\r
\r
All equations are linear. The most common type in introductory algebra.\r
\r
$$\\begin{cases} 2x + 3y = 12 \\\\ x - y = 1 \\end{cases}$$\r
\r
Geometrically: two lines in a plane.\r
\r
---\r
\r
### 2. Linear System (3 variables)\r
\r
Three equations, three unknowns.\r
\r
$$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$\r
\r
Geometrically: three planes in space — solution is their common intersection point.\r
\r
---\r
\r
### 3. Nonlinear System\r
\r
At least one equation is nonlinear (contains $x^2$, $y^2$, $xy$, etc.).\r
\r
$$\\begin{cases} x^2 + y^2 = 25 \\\\ y = x + 1 \\end{cases}$$\r
\r
Geometrically: a circle and a line — may have $0$, $1$, or $2$ solutions.\r
\r
---\r
\r
### 4. Homogeneous System\r
\r
All constant terms are zero:\r
\r
$$\\begin{cases} a_1x + b_1y = 0 \\\\ a_2x + b_2y = 0 \\end{cases}$$\r
\r
Always has the **trivial solution** $x = 0,\\ y = 0$. May also have nontrivial solutions if $D = 0$.\r
\r
---\r
\r
### 5. Overdetermined System\r
\r
More equations than unknowns — may be inconsistent or have solutions only under special conditions.\r
\r
$$\\begin{cases} x + y = 3 \\\\ x - y = 1 \\\\ 2x + y = 5 \\end{cases}$$\r
\r
---\r
\r
### 6. Underdetermined System\r
\r
Fewer equations than unknowns — typically infinitely many solutions, expressed in terms of free variables.\r
\r
$$\\begin{cases} x + y + z = 6 \\end{cases}$$\r
\r
Here $y$ and $z$ are free — infinitely many solutions exist.\r
\r
---\r
\r
## How to Solve\r
\r
### Method 1 — Substitution\r
\r
Solve one equation for one variable, then substitute into the other.\r
\r
**Example:** Solve the system:\r
\r
$$\\begin{cases} x + y = 5 \\\\ 2x - y = 4 \\end{cases}$$\r
\r
**Step 1 — Solve equation 1 for $x$:**\r
\r
$$x = 5 - y$$\r
\r
**Step 2 — Substitute into equation 2:**\r
\r
$$2(5 - y) - y = 4$$\r
\r
$$10 - 2y - y = 4$$\r
\r
$$10 - 3y = 4$$\r
\r
$$y = 2$$\r
\r
**Step 3 — Back-substitute:**\r
\r
$$x = 5 - 2 = 3$$\r
\r
$$\\boxed{x = 3,\\quad y = 2}$$\r
\r
---\r
\r
### Method 2 — Elimination (Addition Method)\r
\r
Multiply equations to align coefficients, then add to eliminate a variable.\r
\r
**Example:** Solve the system:\r
\r
$$\\begin{cases} 3x + 2y = 16 \\\\ 5x - 2y = 8 \\end{cases}$$\r
\r
**Step 1 — Add both equations directly** (coefficients of $y$ already cancel):\r
\r
$$(3x + 2y) + (5x - 2y) = 16 + 8$$\r
\r
$$8x = 24$$\r
\r
$$x = 3$$\r
\r
**Step 2 — Substitute back:**\r
\r
$$3(3) + 2y = 16$$\r
\r
$$9 + 2y = 16$$\r
\r
$$y = \\frac{7}{2}$$\r
\r
$$\\boxed{x = 3,\\quad y = \\frac{7}{2}}$$\r
\r
---\r
\r
### Method 3 — Graphing\r
\r
Plot each equation and identify intersection point(s) visually. Useful for intuition but imprecise for exact answers.\r
\r
- One intersection → one solution\r
- Parallel lines → no solution\r
- Same line → infinite solutions\r
\r
---\r
\r
### Method 4 — Substitution for Nonlinear Systems\r
\r
**Example:** Solve the system:\r
\r
$$\\begin{cases} x^2 + y^2 = 25 \\\\ y = x + 1 \\end{cases}$$\r
\r
**Step 1 — Substitute $y = x + 1$ into equation 1:**\r
\r
$$x^2 + (x+1)^2 = 25$$\r
\r
$$x^2 + x^2 + 2x + 1 = 25$$\r
\r
$$2x^2 + 2x - 24 = 0$$\r
\r
$$x^2 + x - 12 = 0$$\r
\r
**Step 2 — Factor:**\r
\r
$$(x + 4)(x - 3) = 0$$\r
\r
$$x = -4 \\quad \\text{or} \\quad x = 3$$\r
\r
**Step 3 — Find corresponding $y$ values:**\r
\r
$$x = 3 \\implies y = 4$$\r
\r
$$x = -4 \\implies y = -3$$\r
\r
$$\\boxed{(3,\\ 4) \\quad \\text{and} \\quad (-4,\\ -3)}$$\r
\r
---\r
\r
### General Strategy\r
\r
1. Check if the system is **linear or nonlinear**\r
2. For **2-variable linear** — use substitution or elimination\r
3. For **3-variable linear** — use elimination repeatedly or row reduction\r
4. For **nonlinear** — substitute the simpler equation into the more complex one\r
5. Always **verify** solutions by substituting back into every original equation\r
\r
---\r
\r
## Summary\r
\r
| Property                 | Description                                                  |\r
| :----------------------- | :----------------------------------------------------------- |\r
| Consistent & Independent | Exactly one solution                                         |\r
| Consistent & Dependent   | Infinitely many solutions                                    |\r
| Inconsistent             | No solution                                                  |\r
| Linear (2 vars)          | Two lines — solved by substitution or elimination            |\r
| Linear (3 vars)          | Three planes — solved by elimination or row reduction        |\r
| Nonlinear                | Curves — solved by substitution, may have multiple solutions |\r
| Homogeneous              | Always has trivial solution $x = y = 0$                      |\r
| Overdetermined           | More equations than unknowns — often inconsistent            |\r
| Underdetermined          | Fewer equations than unknowns — often infinite solutions     |\r
\r
A system of equations is one of the most powerful tools in algebra — it bridges abstract math and real-world modeling by letting multiple constraints coexist and interact in a single, solvable structure.\r
`;export{e as default};