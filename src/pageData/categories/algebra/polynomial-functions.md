# Polynomial Functions

## Definition

A **polynomial function** is a function of the form:

$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$$

where:

- $n$ is a non-negative integer called the **degree**
- $a_n, a_{n-1}, \dots, a_0$ are real constants called **coefficients**
- $a_n \neq 0$ (the leading coefficient is nonzero)

Each expression $a_k x^k$ is called a **term**. The variable $x$ may only appear with non-negative integer exponents — no roots, no fractions, no negative powers.

---

## Key Terminology

| Term                | Definition                                                        |
| :------------------ | :---------------------------------------------------------------- |
| Degree              | The highest exponent of $x$ with a nonzero coefficient            |
| Leading Coefficient | The coefficient $a_n$ of the highest-degree term                  |
| Leading Term        | The term $a_n x^n$ that dominates end behavior                    |
| Constant Term       | The term $a_0$ — the value of $f(0)$                              |
| Root / Zero         | A value $r$ where $f(r) = 0$                                      |
| Multiplicity        | How many times a root $r$ appears as a factor $(x - r)^k$         |
| End Behavior        | What $f(x)$ does as $x \to \infty$ and $x \to -\infty$            |
| Turning Point       | A local max or min — a point where the function changes direction |
| Monomial            | A polynomial with exactly one term                                |
| Binomial            | A polynomial with exactly two terms                               |
| Trinomial           | A polynomial with exactly three terms                             |
| Monic Polynomial    | A polynomial where the leading coefficient $a_n = 1$              |

---

## Purpose

Polynomial functions are the **most well-behaved and widely used** class of functions in mathematics:

- **Approximation** — any smooth function can be approximated by polynomials (Taylor series)
- **Modeling** — population growth, physical trajectories, engineering curves
- **Computer graphics** — Bézier curves use polynomial interpolation
- **Algebra** — roots of polynomials connect to factoring, systems, and number theory
- **Calculus** — polynomials are the easiest functions to differentiate and integrate

Linear and quadratic functions are just polynomials of degree $1$ and $2$ — polynomial functions generalize them both into a single unified family.

---

## Fundamental Properties

### Degree and Number of Roots

A polynomial of degree $n$ has **at most $n$ real roots** and **exactly $n$ roots** counted in $\mathbb{C}$ (the complex numbers), by the **Fundamental Theorem of Algebra**:

$$f(x) = a_n(x - r_1)(x - r_2) \cdots (x - r_n)$$

### End Behavior

End behavior is determined entirely by the **leading term** $a_n x^n$:

| Leading Coefficient | Degree | $x \to -\infty$ | $x \to +\infty$ |
| :------------------ | :----- | :-------------- | :-------------- |
| $a_n > 0$           | Even   | $+\infty$       | $+\infty$       |
| $a_n < 0$           | Even   | $-\infty$       | $-\infty$       |
| $a_n > 0$           | Odd    | $-\infty$       | $+\infty$       |
| $a_n < 0$           | Odd    | $+\infty$       | $-\infty$       |

Even-degree polynomials have **both ends going the same direction**. Odd-degree polynomials have **ends going opposite directions**.

### Turning Points

A polynomial of degree $n$ has **at most $n - 1$ turning points**. Each turning point is a local maximum or minimum.

### Continuity and Smoothness

Every polynomial function is **continuous and smooth** everywhere on $(-\infty, \infty)$ — no holes, no jumps, no sharp corners, no asymptotes.

### Root Multiplicity Behavior

If $(x - r)^k$ is a factor of $f(x)$:

- $k$ **odd** — graph **crosses** the x-axis at $x = r$
- $k$ **even** — graph **touches** the x-axis at $x = r$ and bounces back

### The Factor Theorem

$(x - r)$ is a factor of $f(x)$ if and only if $f(r) = 0$.

### The Remainder Theorem

When $f(x)$ is divided by $(x - r)$, the remainder equals $f(r)$.

### Intermediate Value Theorem

If $f(a)$ and $f(b)$ have opposite signs, then there exists at least one root in the interval $(a, b)$.

---

## Types & Variations

### 1. Constant Polynomial — Degree 0

$$f(x) = c$$

A horizontal line. No roots unless $c = 0$.

---

### 2. Linear Polynomial — Degree 1

$$f(x) = ax + b, \quad a \neq 0$$

Exactly one root: $x = -\dfrac{b}{a}$

---

### 3. Quadratic Polynomial — Degree 2

$$f(x) = ax^2 + bx + c, \quad a \neq 0$$

At most two real roots. Discriminant $\Delta = b^2 - 4ac$ determines root count.

---

### 4. Cubic Polynomial — Degree 3

$$f(x) = ax^3 + bx^2 + cx + d, \quad a \neq 0$$

Always has at least one real root (odd degree). At most three real roots and at most two turning points.

**Example:** $f(x) = x^3 - 3x^2 - x + 3 = (x-3)(x-1)(x+1)$

Roots: $x = 3,\ 1,\ -1$

---

### 5. Quartic Polynomial — Degree 4

$$f(x) = ax^4 + bx^3 + cx^2 + dx + e, \quad a \neq 0$$

At most four real roots and at most three turning points. Both ends go in the same direction.

---

### 6. Monomial

$$f(x) = ax^n$$

A single term. Graph passes through origin (if $n \geq 1$), symmetric about y-axis for even $n$, symmetric about origin for odd $n$.

---

### 7. Monic Polynomial

Leading coefficient is $1$:

$$f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_0$$

Common in theory — factored forms are often written as monic polynomials.

---

### 8. Polynomial with Repeated Roots

$$f(x) = (x - 2)^2(x + 1)$$

Root $x = 2$ has multiplicity $2$ — graph **touches** x-axis and turns around. Root $x = -1$ has multiplicity $1$ — graph **crosses** x-axis.

---

## How to Solve

### Finding Roots by Factoring

Factor completely, then set each factor to zero.

**Example:** Solve $f(x) = x^3 - 6x^2 + 11x - 6$

Test $x = 1$: $f(1) = 1 - 6 + 11 - 6 = 0$ ✓

Factor out $(x - 1)$ using synthetic division:

$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$$

Factor the quadratic:

$$(x-1)(x-2)(x-3) = 0$$

$$\boxed{x = 1,\quad x = 2,\quad x = 3}$$

---

### Synthetic Division

A fast method to divide $f(x)$ by $(x - r)$.

**Example:** Divide $f(x) = 2x^3 - 3x^2 - 11x + 6$ by $(x - 3)$

Write coefficients: $2,\ -3,\ -11,\ 6$ and $r = 3$

$$\begin{array}{r|rrrr} 3 & 2 & -3 & -11 & 6 \\ & & 6 & 9 & -6 \\ \hline & 2 & 3 & -2 & 0 \end{array}$$

Remainder is $0$, so $(x - 3)$ is a factor:

$$f(x) = (x - 3)(2x^2 + 3x - 2) = (x-3)(2x-1)(x+2)$$

$$\boxed{x = 3,\quad x = \frac{1}{2},\quad x = -2}$$

---

### Rational Root Theorem

If $f(x) = a_n x^n + \cdots + a_0$ has integer coefficients, any rational root has the form:

$$x = \pm\frac{p}{q}$$

where $p$ divides $a_0$ (constant term) and $q$ divides $a_n$ (leading coefficient).

**Example:** $f(x) = 2x^3 - 3x^2 - 11x + 6$

- $p \in \{1, 2, 3, 6\}$ (factors of $6$)
- $q \in \{1, 2\}$ (factors of $2$)
- Candidates: $\pm 1,\ \pm 2,\ \pm 3,\ \pm 6,\ \pm\dfrac{1}{2},\ \pm\dfrac{3}{2}$

Test until $f(r) = 0$, then use synthetic division to reduce.

---

### Determining End Behavior

Look only at the leading term $a_n x^n$:

**Example:** $f(x) = -3x^5 + 7x^3 - 2$

Leading term: $-3x^5$ — degree odd, leading coefficient negative.

$$x \to +\infty \implies f(x) \to -\infty$$

$$x \to -\infty \implies f(x) \to +\infty$$

---

### Sketching a Polynomial Graph

**Step 1 — Find degree and leading coefficient** for end behavior.

**Step 2 — Find all real roots** and their multiplicities.

**Step 3 — Determine crossing vs. touching** at each root using multiplicity.

**Step 4 — Find the y-intercept** by evaluating $f(0) = a_0$.

**Step 5 — Plot and connect** smoothly, consistent with end behavior and turning points.

---

### Multiplicity Summary

| Multiplicity         | Behavior at Root                 |
| :------------------- | :------------------------------- |
| Odd (e.g. $1$, $3$)  | Graph crosses x-axis             |
| Even (e.g. $2$, $4$) | Graph touches x-axis and bounces |
| Higher multiplicity  | Graph is flatter near the root   |

---

## Summary

| Property               | Rule                                                             |
| :--------------------- | :--------------------------------------------------------------- |
| Degree $n$             | At most $n$ real roots, exactly $n$ complex roots                |
| Turning points         | At most $n - 1$                                                  |
| End behavior           | Determined by $a_n x^n$                                          |
| Even degree, $a_n > 0$ | Both ends $\to +\infty$                                          |
| Even degree, $a_n < 0$ | Both ends $\to -\infty$                                          |
| Odd degree, $a_n > 0$  | Left $\to -\infty$, right $\to +\infty$                          |
| Odd degree, $a_n < 0$  | Left $\to +\infty$, right $\to -\infty$                          |
| Factor Theorem         | $(x-r)$ is a factor $\iff$ $f(r) = 0$                            |
| Remainder Theorem      | Remainder of $f(x) \div (x-r)$ equals $f(r)$                     |
| Odd multiplicity       | Graph crosses x-axis at that root                                |
| Even multiplicity      | Graph touches x-axis and bounces at that root                    |
| Rational Root Theorem  | Rational roots are $\pm\dfrac{p}{q}$, $p \mid a_0$, $q \mid a_n$ |
| Continuity             | Smooth and continuous on $(-\infty, \infty)$                     |

Polynomial functions unify everything before them — constants, linear, and quadratic are all special cases. Mastering polynomials means understanding end behavior, roots, multiplicity, and factoring at a level that directly carries into calculus and beyond.
