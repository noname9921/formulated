# System of Equations

## Definition

A system of equations is a set of two or more equations containing the same variables, where the **solution** is the set of values that satisfies **all equations simultaneously**.

$$\begin{cases} f_1(x, y) = 0 \\ f_2(x, y) = 0 \end{cases}$$

Geometrically, each equation represents a curve or surface — the solution is where they **intersect**.

---

## Key Terminology

| Term         | Definition                                                                                 |
| :----------- | :----------------------------------------------------------------------------------------- |
| System       | A collection of two or more equations with shared variables                                |
| Solution     | A set of values satisfying every equation in the system simultaneously                     |
| Consistent   | A system that has at least one solution                                                    |
| Inconsistent | A system with no solution                                                                  |
| Dependent    | A system with infinitely many solutions (equations describe the same line/plane)           |
| Independent  | A system with exactly one unique solution                                                  |
| Variable     | An unknown quantity shared across equations, e.g. $x$, $y$, $z$                            |
| Linear       | An equation where all variables are to the first power                                     |
| Nonlinear    | An equation containing variables raised to powers other than one, or products of variables |

---

## Purpose

Systems of equations model situations where **multiple conditions must hold at once**:

- Finding intersection points of curves or lines
- Solving real-world problems with multiple unknowns (e.g. pricing, mixtures, motion)
- Describing equilibrium in physics or economics
- Underpinning linear algebra, optimization, and machine learning

A classic example — two items with known total count and total cost:

$$\begin{cases} x + y = 10 \\ 3x + 5y = 38 \end{cases}$$

Both conditions must be true simultaneously.

---

## Fundamental Properties

### Equivalence Operations

The following operations produce an **equivalent system** (same solution set):

- Multiplying any equation by a nonzero constant
- Adding a multiple of one equation to another
- Swapping the order of equations

### Solution Set Possibilities

For a system of $n$ equations in $n$ unknowns, exactly one of three outcomes holds:

**Exactly one solution** — equations intersect at a single point:

$$\begin{cases} x + y = 5 \\ x - y = 1 \end{cases} \implies x = 3,\ y = 2$$

**No solution** — equations are parallel (inconsistent):

$$\begin{cases} x + y = 3 \\ x + y = 7 \end{cases} \implies \text{contradiction: } 3 \neq 7$$

**Infinitely many solutions** — equations are identical or dependent:

$$\begin{cases} x + y = 4 \\ 2x + 2y = 8 \end{cases} \implies \text{same line}$$

### Consistency Condition (2×2 Linear)

For the system:

$$\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$$

Define the determinant $D = a_1 b_2 - a_2 b_1$, then:

- $D \neq 0$ — exactly one solution
- $D = 0$ and ratios are consistent — infinitely many solutions
- $D = 0$ and ratios are inconsistent — no solution

---

## Types & Variations

### 1. Linear System (2 variables)

All equations are linear. The most common type in introductory algebra.

$$\begin{cases} 2x + 3y = 12 \\ x - y = 1 \end{cases}$$

Geometrically: two lines in a plane.

---

### 2. Linear System (3 variables)

Three equations, three unknowns.

$$\begin{cases} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{cases}$$

Geometrically: three planes in space — solution is their common intersection point.

---

### 3. Nonlinear System

At least one equation is nonlinear (contains $x^2$, $y^2$, $xy$, etc.).

$$\begin{cases} x^2 + y^2 = 25 \\ y = x + 1 \end{cases}$$

Geometrically: a circle and a line — may have $0$, $1$, or $2$ solutions.

---

### 4. Homogeneous System

All constant terms are zero:

$$\begin{cases} a_1x + b_1y = 0 \\ a_2x + b_2y = 0 \end{cases}$$

Always has the **trivial solution** $x = 0,\ y = 0$. May also have nontrivial solutions if $D = 0$.

---

### 5. Overdetermined System

More equations than unknowns — may be inconsistent or have solutions only under special conditions.

$$\begin{cases} x + y = 3 \\ x - y = 1 \\ 2x + y = 5 \end{cases}$$

---

### 6. Underdetermined System

Fewer equations than unknowns — typically infinitely many solutions, expressed in terms of free variables.

$$\begin{cases} x + y + z = 6 \end{cases}$$

Here $y$ and $z$ are free — infinitely many solutions exist.

---

## How to Solve

### Method 1 — Substitution

Solve one equation for one variable, then substitute into the other.

**Example:** Solve the system:

$$\begin{cases} x + y = 5 \\ 2x - y = 4 \end{cases}$$

**Step 1 — Solve equation 1 for $x$:**

$$x = 5 - y$$

**Step 2 — Substitute into equation 2:**

$$2(5 - y) - y = 4$$

$$10 - 2y - y = 4$$

$$10 - 3y = 4$$

$$y = 2$$

**Step 3 — Back-substitute:**

$$x = 5 - 2 = 3$$

$$\boxed{x = 3,\quad y = 2}$$

---

### Method 2 — Elimination (Addition Method)

Multiply equations to align coefficients, then add to eliminate a variable.

**Example:** Solve the system:

$$\begin{cases} 3x + 2y = 16 \\ 5x - 2y = 8 \end{cases}$$

**Step 1 — Add both equations directly** (coefficients of $y$ already cancel):

$$(3x + 2y) + (5x - 2y) = 16 + 8$$

$$8x = 24$$

$$x = 3$$

**Step 2 — Substitute back:**

$$3(3) + 2y = 16$$

$$9 + 2y = 16$$

$$y = \frac{7}{2}$$

$$\boxed{x = 3,\quad y = \frac{7}{2}}$$

---

### Method 3 — Graphing

Plot each equation and identify intersection point(s) visually. Useful for intuition but imprecise for exact answers.

- One intersection → one solution
- Parallel lines → no solution
- Same line → infinite solutions

---

### Method 4 — Substitution for Nonlinear Systems

**Example:** Solve the system:

$$\begin{cases} x^2 + y^2 = 25 \\ y = x + 1 \end{cases}$$

**Step 1 — Substitute $y = x + 1$ into equation 1:**

$$x^2 + (x+1)^2 = 25$$

$$x^2 + x^2 + 2x + 1 = 25$$

$$2x^2 + 2x - 24 = 0$$

$$x^2 + x - 12 = 0$$

**Step 2 — Factor:**

$$(x + 4)(x - 3) = 0$$

$$x = -4 \quad \text{or} \quad x = 3$$

**Step 3 — Find corresponding $y$ values:**

$$x = 3 \implies y = 4$$

$$x = -4 \implies y = -3$$

$$\boxed{(3,\ 4) \quad \text{and} \quad (-4,\ -3)}$$

---

### General Strategy

1. Check if the system is **linear or nonlinear**
2. For **2-variable linear** — use substitution or elimination
3. For **3-variable linear** — use elimination repeatedly or row reduction
4. For **nonlinear** — substitute the simpler equation into the more complex one
5. Always **verify** solutions by substituting back into every original equation

---

## Summary

| Property                 | Description                                                  |
| :----------------------- | :----------------------------------------------------------- |
| Consistent & Independent | Exactly one solution                                         |
| Consistent & Dependent   | Infinitely many solutions                                    |
| Inconsistent             | No solution                                                  |
| Linear (2 vars)          | Two lines — solved by substitution or elimination            |
| Linear (3 vars)          | Three planes — solved by elimination or row reduction        |
| Nonlinear                | Curves — solved by substitution, may have multiple solutions |
| Homogeneous              | Always has trivial solution $x = y = 0$                      |
| Overdetermined           | More equations than unknowns — often inconsistent            |
| Underdetermined          | Fewer equations than unknowns — often infinite solutions     |

A system of equations is one of the most powerful tools in algebra — it bridges abstract math and real-world modeling by letting multiple constraints coexist and interact in a single, solvable structure.
