# Inequalities in Algebra

---

## Definition

An **inequality** is a mathematical statement that asserts a **relative ordering** between two expressions, using one of the inequality symbols instead of $=$.

$$
\text{Expression}_1 \;\square\; \text{Expression}_2
$$

where $\square$ is one of: $<,\; >,\; \leq,\; \geq,\; \neq$

Unlike equations, inequalities typically yield an **interval** or **range** of solutions rather than discrete values.

> **Contrast with equations:** $x = 3$ has exactly one solution. But $x > 3$ has infinitely many — every real number greater than 3.

---

## Key Terminology

| Term                       | Definition                                                             |
| -------------------------- | ---------------------------------------------------------------------- |
| **Inequality**             | A statement comparing two expressions with $<$, $>$, $\leq$, or $\geq$ |
| **Strict Inequality**      | Uses $<$ or $>$, endpoint is **excluded**                              |
| **Non-strict Inequality**  | Uses $\leq$ or $\geq$, endpoint is **included**                        |
| **Solution Set**           | All values satisfying the inequality                                   |
| **Boundary Point**         | The value where the expression equals zero or changes sign             |
| **Feasible Region**        | In systems, the overlapping region satisfying all inequalities         |
| **Compound Inequality**    | Two inequalities joined by **and** or **or**                           |
| **Absolute Inequality**    | True for all real values, e.g., $x^2 \geq 0$                           |
| **Conditional Inequality** | True only for specific values, e.g., $x + 1 > 3$                       |

---

## Purpose

**1. Modeling constraints**

Real-world problems rarely deal in exact equalities. Inequalities model bounds and limits:

$$
0 \leq \text{temperature} \leq 100
$$

**2. Optimization**

In linear programming, inequalities define the **feasible region** within which an optimal solution is found.

**3. Expressing approximations**

When an exact value is unknown but a range is:

$$
1.4 < \sqrt{2} < 1.5
$$

**4. Error and tolerance analysis**

In engineering and science, tolerances are expressed as inequalities:

$$
|x - \mu| \leq \epsilon
$$

**5. Foundational role in calculus**

Limits, continuity, and the epsilon-delta definition all rely on inequalities.

---

## Fundamental Properties

These are the **legal operations** on inequalities. Most mirror equation rules — with one critical exception.

### Addition & Subtraction Property

$$
\text{If } a < b, \text{ then } a + c < b + c
$$

Adding or subtracting the same value **preserves** the inequality direction.

### Multiplication & Division by a Positive Number

$$
\text{If } a < b \text{ and } c > 0, \text{ then } ac < bc
$$

Direction is **preserved**.

### Multiplication & Division by a Negative Number

$$
\text{If } a < b \text{ and } c < 0, \text{ then } ac > bc
$$

> **Critical rule:** Multiplying or dividing by a **negative number reverses** the inequality sign. This is the most common source of errors.

### Transitive Property

$$
\text{If } a < b \text{ and } b < c, \text{ then } a < c
$$

### Chaining Property

$$
a < b < c \quad \Longleftrightarrow \quad a < b \text{ and } b < c
$$

### Reciprocal Property

$$
\text{If } 0 < a < b, \text{ then } \frac{1}{a} > \frac{1}{b}
$$

Taking reciprocals of **positive** numbers reverses the inequality. If signs differ, extra care is needed.

### Squaring Property

$$
\text{If } a, b \geq 0 \text{ and } a < b, \text{ then } a^2 < b^2
$$

Squaring is only order-preserving when **both sides are non-negative**.

---

## Types & Variations

### 1. Linear Inequalities

**Degree:** 1

**Standard form:**

$$
ax + b < 0 \quad (\text{or } >, \leq, \geq)
$$

**Example:** $2x - 4 > 0$

Solution is an interval, e.g., $x > 2$, written in interval notation as $(2, +\infty)$.

---

### 2. Compound Inequalities

Two inequalities combined with **and** (intersection) or **or** (union).

**"And" type (conjunction):**

$$
-3 < 2x + 1 \leq 7
$$

This is shorthand for $-3 < 2x + 1$ **and** $2x + 1 \leq 7$. Solution is an intersection of two intervals.

**"Or" type (disjunction):**

$$
x < -2 \quad \text{or} \quad x > 5
$$

Solution is a union: $(-\infty, -2) \cup (5, +\infty)$

---

### 3. Quadratic Inequalities

**Degree:** 2

**Standard form:**

$$
ax^2 + bx + c < 0 \quad (\text{or } >, \leq, \geq)
$$

**Example:** $x^2 - x - 6 < 0$

Solutions come from analyzing the **sign** of the quadratic between its roots.

---

### 4. Polynomial Inequalities

**Degree:** $n$

$$
a_n x^n + a_{n-1} x^{n-1} + \cdots + a_0 < 0
$$

Solved using a **sign chart** across the real roots.

---

### 5. Rational Inequalities

Variable in the **denominator**.

**Example:**

$$
\frac{x - 1}{x + 3} > 0
$$

> Never cross-multiply blindly — the sign of the denominator may be positive or negative. Use a sign chart instead.

---

### 6. Absolute Value Inequalities

**Two forms:**

$$
|f(x)| < c \quad \Longleftrightarrow \quad -c < f(x) < c \quad (c > 0)
$$

$$
|f(x)| > c \quad \Longleftrightarrow \quad f(x) < -c \;\text{ or }\; f(x) > c \quad (c > 0)
$$

---

### 7. Systems of Inequalities

Multiple inequalities solved **simultaneously**. The solution is the **intersection** of all individual solution sets (feasible region).

**Example:**

$$
\begin{cases} x + y \leq 6 \\ x - y \geq 1 \\ x \geq 0 \end{cases}
$$

---

## How to Solve

### Linear Inequalities

**Steps:**

1. Expand and simplify both sides
2. Move variable terms to one side, constants to the other
3. Divide by the coefficient of $x$ — **flip the sign if dividing by a negative**
4. Write the solution as an interval

**Example:** Solve $-3x + 6 \leq 0$

$$
-3x + 6 \leq 0
$$

$$
-3x \leq -6
$$

$$
x \geq 2 \quad \leftarrow \text{sign flips (divided by } {-3}\text{)}
$$

$$
\text{Solution: } [2, +\infty)
$$

---

### Compound Inequalities

**"And" type — solve all parts simultaneously:**

**Example:** Solve $-3 < 2x + 1 \leq 7$

Subtract 1 from all parts:

$$
-4 < 2x \leq 6
$$

Divide all parts by 2:

$$
-2 < x \leq 3
$$

$$
\text{Solution: } (-2, 3]
$$

**"Or" type — solve each separately, then union:**

$$
x < -2 \quad \cup \quad x > 5 \quad \Rightarrow \quad (-\infty, -2) \cup (5, +\infty)
$$

---

### Quadratic Inequalities

**Steps:**

1. Move all terms to one side: $ax^2 + bx + c \;\square\; 0$
2. Find the roots by solving $ax^2 + bx + c = 0$
3. Mark the roots on a number line — they divide it into intervals
4. Test a value in each interval to determine the sign
5. Select intervals matching the inequality; include endpoints for $\leq$ or $\geq$

**Example:** Solve $x^2 - x - 6 < 0$

Factor: $(x - 3)(x + 2) = 0 \implies x = 3, \; x = -2$

Sign chart:

| Interval     | $(x - 3)$ | $(x + 2)$ | Product |
| ------------ | --------- | --------- | ------- |
| $x < -2$     | $-$       | $-$       | $+$     |
| $-2 < x < 3$ | $-$       | $+$       | $-$     |
| $x > 3$      | $+$       | $+$       | $+$     |

We want the product $< 0$, so:

$$
\text{Solution: } (-2, 3)
$$

---

### Rational Inequalities

**Steps:**

1. Move all terms to one side: $\dfrac{p(x)}{q(x)} \;\square\; 0$
2. Find all **zeros** of $p(x)$ (numerator) and $q(x)$ (denominator)
3. Mark all critical values on a number line
4. Test each interval using a sign chart
5. Exclude any values that make $q(x) = 0$

**Example:** Solve $\dfrac{x - 1}{x + 3} > 0$

Critical values: $x = 1$ (numerator zero), $x = -3$ (denominator zero)

| Interval     | $(x - 1)$ | $(x + 3)$ | Quotient |
| ------------ | --------- | --------- | -------- |
| $x < -3$     | $-$       | $-$       | $+$      |
| $-3 < x < 1$ | $-$       | $+$       | $-$      |
| $x > 1$      | $+$       | $+$       | $+$      |

We want $> 0$, and $x = -3$ is excluded (undefined), $x = 1$ gives $0$ (excluded since strict):

$$
\text{Solution: } (-\infty, -3) \cup (1, +\infty)
$$

---

### Absolute Value Inequalities

**Case 1 — "Less than":** $\lvert f(x) \rvert < c$

$$
\lvert 2x - 3 \rvert < 5 \quad \Longrightarrow \quad -5 < 2x - 3 < 5
$$

$$
-2 < 2x < 8 \implies -1 < x < 4
$$

$$
\text{Solution: } (-1, 4)
$$

**Case 2 — "Greater than":** $\lvert f(x) \rvert > c$

$$
\lvert x + 1 \rvert > 4 \quad \Longrightarrow \quad x + 1 < -4 \;\text{ or }\; x + 1 > 4
$$

$$
x < -5 \quad \text{or} \quad x > 3
$$

$$
\text{Solution: } (-\infty, -5) \cup (3, +\infty)
$$

> If $c \leq 0$: $\lvert f(x) \rvert < c$ has **no solution**; $\lvert f(x) \rvert > c$ is **all reals**.

---

### Systems of Inequalities

Solve each inequality separately, then find the **intersection** of all solution sets.

For two-variable systems, this is done graphically — graph each boundary line, shade the correct half-plane, and the feasible region is the overlap.

---

## Summary

| Type                 | Form                     | Solution Shape            | Key Method                            |
| -------------------- | ------------------------ | ------------------------- | ------------------------------------- |
| Linear               | $ax + b < 0$             | Single interval           | Isolate, flip sign if $\div$ negative |
| Compound (and)       | $a < f(x) \leq b$        | Intersection of intervals | Solve all parts simultaneously        |
| Compound (or)        | $f(x) < a$ or $f(x) > b$ | Union of intervals        | Solve separately, then union          |
| Quadratic            | $ax^2 + bx + c < 0$      | One or two intervals      | Sign chart from roots                 |
| Polynomial           | $p(x) > 0$               | Multiple intervals        | Sign chart from all real roots        |
| Rational             | $p(x)/q(x) < 0$          | Multiple intervals        | Sign chart, exclude denom zeros       |
| Absolute Value ($<$) | $\lvert f(x) \rvert < c$ | Single interval           | $-c < f(x) < c$                       |
| Absolute Value ($>$) | $\lvert f(x) \rvert > c$ | Union of intervals        | $f(x) < -c$ or $f(x) > c$             |
| System               | Multiple inequalities    | Feasible region           | Intersect all solution sets           |

**The golden rules to never forget:**

$$
\boxed{\text{Multiplying or dividing by a negative} \Rightarrow \text{flip the inequality sign}}
$$

$$
\boxed{\text{Never cross-multiply a rational inequality without checking the sign of the denominator}}
$$
