# Equations in Algebra

---

## Definition

An **equation** is a mathematical statement that asserts the **equality** of two expressions, connected by an equals sign $=$.

$$
\text{Expression}_1 = \text{Expression}_2
$$

More formally, an equation is a **proposition** of the form:

$$
f(x) = g(x)
$$

where $f$ and $g$ are expressions, and the goal is typically to determine the value(s) of the unknown(s) that make the proposition **true**.

> **Note:** Not all equations have solutions — some are contradictions (e.g., $x = x + 1$), and some hold for all values (identities).

---

## Key Terminology

| Term                      | Definition                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| **Variable**              | A symbol (usually $x$, $y$, $z$) representing an unknown value                      |
| **Constant**              | A fixed numerical value in the equation                                             |
| **Coefficient**           | A number multiplying a variable, e.g., in $3x$, the coefficient is $3$              |
| **Solution / Root**       | A value of the variable that satisfies the equation                                 |
| **Solution Set**          | The complete set of all values that satisfy the equation                            |
| **Left-Hand Side (LHS)**  | The expression to the left of $=$                                                   |
| **Right-Hand Side (RHS)** | The expression to the right of $=$                                                  |
| **Identity**              | An equation true for **all** values of the variable, e.g., $(x+1)^2 = x^2 + 2x + 1$ |
| **Contradiction**         | An equation true for **no** values, e.g., $x + 1 = x$                               |
| **Conditional Equation**  | True only for **specific** values, e.g., $2x = 6$                                   |
| **Degree**                | The highest power of the variable in the equation                                   |

---

## Purpose

Equations serve as the **backbone of algebra** and mathematics as a whole. Their main purposes are:

**1. Modeling real-world problems**

Equations translate word problems and physical phenomena into mathematical language. For example, distance-speed-time:

$$
d = v \cdot t
$$

**2. Finding unknowns**

Given partial information, equations allow us to solve for missing quantities.

**3. Expressing relationships**

Equations describe how quantities relate to one another — not just "what is $x$" but "how does $x$ relate to $y$":

$$
y = 2x + 5
$$

**4. Building higher mathematics**

Equations are foundational to calculus, linear algebra, differential equations, and beyond.

---

## Fundamental Properties

These properties are the **legal moves** when manipulating equations. They ensure that transformations preserve equality.

### Addition Property of Equality

$$
\text{If } a = b, \text{ then } a + c = b + c
$$

Adding the same value to both sides keeps the equation balanced.

### Subtraction Property of Equality

$$
\text{If } a = b, \text{ then } a - c = b - c
$$

### Multiplication Property of Equality

$$
\text{If } a = b, \text{ then } a \cdot c = b \cdot c
$$

### Division Property of Equality

$$
\text{If } a = b \text{ and } c \neq 0, \text{ then } \frac{a}{c} = \frac{b}{c}
$$

> **Important:** Dividing by zero is **undefined** and illegal in any equation manipulation.

### Reflexive Property

$$
a = a
$$

Every expression equals itself.

### Symmetric Property

$$
\text{If } a = b, \text{ then } b = a
$$

### Transitive Property

$$
\text{If } a = b \text{ and } b = c, \text{ then } a = c
$$

### Substitution Property

If $a = b$, then $a$ can replace $b$ anywhere in an expression without changing its value.

---

## Types & Variations

### 1. Linear Equations

**Degree:** 1

**Standard form:**

$$
ax + b = 0, \quad a \neq 0
$$

**Example:** $3x - 9 = 0$

Exactly **one solution** in most cases. Graph is a straight line.

---

### 2. Quadratic Equations

**Degree:** 2

**Standard form:**

$$
ax^2 + bx + c = 0, \quad a \neq 0
$$

**Example:** $x^2 - 5x + 6 = 0$

Has at most **two solutions** (real or complex). Graph is a parabola.

---

### 3. Polynomial Equations

**Degree:** $n$

**General form:**

$$
a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0 = 0
$$

By the **Fundamental Theorem of Algebra**, a degree-$n$ polynomial has exactly $n$ roots in $\mathbb{C}$ (counting multiplicity).

---

### 4. Rational Equations

Equations involving **fractions with variables** in the denominator.

**Example:**

$$
\frac{1}{x} + \frac{2}{x+1} = 3
$$

> Watch for **extraneous solutions** — values that arise algebraically but make a denominator zero.

---

### 5. Radical Equations

Equations where the variable appears inside a **radical** (root).

**Example:**

$$
\sqrt{2x + 3} = x - 1
$$

> Squaring both sides can introduce **extraneous solutions** — always verify in the original equation.

---

### 6. Absolute Value Equations

**Form:**

$$
|f(x)| = c
$$

Splits into two cases:

$$
f(x) = c \quad \text{or} \quad f(x) = -c
$$

**Example:** $|2x - 3| = 7$

---

### 7. Exponential Equations

Variable appears in the **exponent**.

**Example:**

$$
2^x = 32
$$

Solved using logarithms or by expressing both sides with the same base.

---

### 8. Logarithmic Equations

**Example:**

$$
\log_2(x + 3) = 4
$$

Solved by converting to exponential form:

$$
x + 3 = 2^4 = 16 \implies x = 13
$$

---

### 9. Systems of Equations

Multiple equations with multiple unknowns solved **simultaneously**.

**Example (linear system):**

$$
\begin{cases} 2x + y = 7 \\ x - y = 1 \end{cases}
$$

---

### 10. Trigonometric Equations

Variable appears inside a **trig function**.

**Example:**

$$
\sin(x) = \frac{1}{2}
$$

Often produces **infinitely many solutions** due to periodicity:

$$
x = \frac{\pi}{6} + 2k\pi \quad \text{or} \quad x = \frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}
$$

---

## How to Solve

### Linear Equations — $ax + b = 0$

**Goal:** Isolate $x$.

**Steps:**

1. Expand and simplify both sides
2. Move variable terms to one side, constants to the other
3. Divide by the coefficient of $x$

**Example:** Solve $3x - 9 = 0$

$$
3x - 9 = 0
$$

$$
3x = 9
$$

$$
x = 3
$$

---

### Quadratic Equations — $ax^2 + bx + c = 0$

There are three main methods:

**Method 1 — Factoring**

$$
x^2 - 5x + 6 = 0 \implies (x - 2)(x - 3) = 0
$$

$$
x = 2 \quad \text{or} \quad x = 3
$$

**Method 2 — Completing the Square**

$$
x^2 + bx = -c
$$

$$
x^2 + bx + \left(\frac{b}{2}\right)^2 = -c + \left(\frac{b}{2}\right)^2
$$

$$
\left(x + \frac{b}{2}\right)^2 = \frac{b^2 - 4c}{4}
$$

**Method 3 — Quadratic Formula**

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

The **discriminant** $\Delta = b^2 - 4ac$ determines the nature of roots:

| $\Delta$     | Roots                       |
| ------------ | --------------------------- |
| $\Delta > 0$ | Two distinct real roots     |
| $\Delta = 0$ | One repeated real root      |
| $\Delta < 0$ | Two complex conjugate roots |

---

### Rational Equations

**Steps:**

1. Find the **LCD** (Least Common Denominator)
2. Multiply through by the LCD to eliminate fractions
3. Solve the resulting polynomial equation
4. **Check** all solutions against original denominators (exclude values that make any denominator zero)

**Example:** Solve $\dfrac{1}{x} + \dfrac{1}{x+2} = \dfrac{3}{4}$

Multiply both sides by $4x(x+2)$:

$$
4(x+2) + 4x = 3x(x+2)
$$

$$
4x + 8 + 4x = 3x^2 + 6x
$$

$$
3x^2 - 2x - 8 = 0
$$

Then apply the quadratic formula.

---

### Radical Equations

**Steps:**

1. Isolate the radical on one side
2. Raise both sides to the appropriate power to eliminate the radical
3. Solve the resulting equation
4. **Verify all solutions** in the original equation (extraneous solutions are common)

**Example:** Solve $\sqrt{x + 5} = x - 1$

$$
(\sqrt{x+5})^2 = (x-1)^2
$$

$$
x + 5 = x^2 - 2x + 1
$$

$$
x^2 - 3x - 4 = 0 \implies (x-4)(x+1) = 0
$$

$$
x = 4 \quad \text{or} \quad x = -1
$$

Check $x = -1$: $\sqrt{-1+5} = 2$ but $-1 - 1 = -2$. Since $2 \neq -2$, $x = -1$ is **extraneous**.

$$
\therefore \quad x = 4
$$

---

### Absolute Value Equations — $|f(x)| = c$

If $c < 0$: **no solution** (absolute value is always non-negative).

If $c \geq 0$: split into two cases:

$$
f(x) = c \quad \text{or} \quad f(x) = -c
$$

**Example:** Solve $|2x - 3| = 7$

$$
2x - 3 = 7 \implies x = 5
$$

$$
2x - 3 = -7 \implies x = -2
$$

---

### Systems of Equations

**Three methods:**

**Substitution** — Solve one equation for a variable, substitute into the other.

**Elimination** — Add or subtract equations to cancel a variable.

**Matrix Method (Gaussian Elimination)** — Write the system as an augmented matrix and row-reduce:

$$
\begin{bmatrix} 2 & 1 & | & 7 \\ 1 & -1 & | & 1 \end{bmatrix} \xrightarrow{R_1 \leftrightarrow R_2} \begin{bmatrix} 1 & -1 & | & 1 \\ 2 & 1 & | & 7 \end{bmatrix} \xrightarrow{R_2 - 2R_1} \begin{bmatrix} 1 & -1 & | & 1 \\ 0 & 3 & | & 5 \end{bmatrix}
$$

$$
y = \frac{5}{3}, \quad x = 1 + \frac{5}{3} = \frac{8}{3}
$$

---

### Exponential Equations

**Strategy 1 — Same base:**

$$
2^x = 2^5 \implies x = 5
$$

**Strategy 2 — Logarithms:**

$$
3^x = 20 \implies x = \log_3 20 = \frac{\ln 20}{\ln 3}
$$

---

### Logarithmic Equations

Convert to exponential form:

$$
\log_b(x) = c \implies x = b^c
$$

**Example:** $\log_3(x - 2) = 4$

$$
x - 2 = 3^4 = 81 \implies x = 83
$$

> Always check that the argument of the log is **positive** in the solution.

---

## Summary

| Type           | Standard Form            | Degree | Max Solutions | Key Method                        |
| -------------- | ------------------------ | ------ | ------------- | --------------------------------- |
| Linear         | $ax + b = 0$             | 1      | 1             | Isolation                         |
| Quadratic      | $ax^2 + bx + c = 0$      | 2      | 2             | Factoring, Quadratic Formula      |
| Polynomial     | $\sum a_k x^k = 0$       | $n$    | $n$           | Various                           |
| Rational       | $\frac{p(x)}{q(x)} = r$  | varies | varies        | LCD, check extraneous             |
| Radical        | $\sqrt[n]{f(x)} = g(x)$  | varies | varies        | Raise to power, check extraneous  |
| Absolute Value | $\lvert f(x) \rvert = c$ | varies | 2             | Split into cases                  |
| Exponential    | $a^{f(x)} = b$           | —      | varies        | Same base or logarithms           |
| Logarithmic    | $\log_b f(x) = c$        | —      | varies        | Convert to exponential            |
| System         | Multiple equations       | —      | varies        | Substitution, Elimination, Matrix |

**Core principle:** Whatever you do to one side of an equation, you **must** do to the other — this is the golden rule that makes algebra work.

$$
\boxed{a = b \implies a \circ c = b \circ c}
$$

where $\circ$ is any valid operation (with domain restrictions respected).
