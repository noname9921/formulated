# Functions & Relations

## Definition

A **relation** is any set of ordered pairs $(x, y)$ — a pairing between elements of two sets.

A **function** is a special relation where every input $x$ maps to **exactly one** output $y$. No $x$ value is repeated with a different $y$.

$$f : X \to Y \quad \text{means } f \text{ maps every element of } X \text{ to exactly one element of } Y$$

Formally, a function $f$ satisfies:

$$\forall x \in X,\ \exists!\, y \in Y \text{ such that } f(x) = y$$

where $\exists!$ means "there exists exactly one."

---

## Key Terminology

| Term               | Definition                                                                          |
| :----------------- | :---------------------------------------------------------------------------------- |
| Relation           | Any set of ordered pairs $(x, y)$                                                   |
| Function           | A relation where each input maps to exactly one output                              |
| Domain             | The set of all valid inputs $x$                                                     |
| Codomain           | The set of all possible outputs $y$ is declared to land in                          |
| Range / Image      | The set of all actual outputs produced by the function                              |
| Input / Argument   | The value fed into the function, typically $x$                                      |
| Output / Value     | The result produced, typically $f(x)$ or $y$                                        |
| Mapping            | The assignment of each input to its corresponding output                            |
| Ordered Pair       | A pair $(x, y)$ representing one input-output relationship                          |
| Vertical Line Test | A graphical test — a graph is a function if no vertical line hits it more than once |

---

## Purpose

Functions are the **core language of mathematics** — virtually every field uses them:

- **Algebra** — modeling relationships between quantities
- **Calculus** — analyzing rates of change and accumulation
- **Physics** — describing motion, force, energy as functions of time
- **Computer science** — functions as the fundamental unit of computation
- **Statistics** — probability distributions as functions over outcomes

A function $f(x) = 2x + 3$ tells you exactly what happens to any input — predictable, unambiguous, repeatable. That reliability is what makes functions so useful.

---

## Fundamental Properties

### Well-Definedness

A relation is a function if and only if each $x$ value in the domain maps to **exactly one** $y$:

$$\text{If } (x, y_1) \in f \text{ and } (x, y_2) \in f,\ \text{then } y_1 = y_2$$

### Domain & Range

For $f(x) = \sqrt{x - 2}$:

- Domain: $x - 2 \geq 0 \implies x \geq 2$, written $[2, \infty)$
- Range: $f(x) \geq 0$, written $[0, \infty)$

### Function Equality

Two functions $f$ and $g$ are equal if and only if:

$$f(x) = g(x) \quad \text{for all } x \text{ in their shared domain}$$

### Composition

The composition of $f$ and $g$ is:

$$(f \circ g)(x) = f(g(x))$$

Apply $g$ first, then apply $f$ to the result. Note that $f \circ g \neq g \circ f$ in general.

### Inverse Function

If $f$ is one-to-one, its inverse $f^{-1}$ satisfies:

$$f(f^{-1}(x)) = x \quad \text{and} \quad f^{-1}(f(x)) = x$$

The inverse undoes what $f$ does. Graphically, $f^{-1}$ is the reflection of $f$ over the line $y = x$.

---

## Types & Variations

### 1. One-to-One Function (Injective)

Every output is produced by at most one input:

$$f(a) = f(b) \implies a = b$$

**Example:** $f(x) = 3x + 1$ — each output comes from exactly one input.

> Graphical test: passes the **horizontal line test**.

---

### 2. Onto Function (Surjective)

Every element of the codomain is hit by at least one input:

$$\forall y \in Y,\ \exists x \in X \text{ such that } f(x) = y$$

**Example:** $f : \mathbb{R} \to \mathbb{R},\ f(x) = 2x + 1$ — every real number is reachable.

---

### 3. Bijective Function

Both injective and surjective — a perfect one-to-one correspondence between domain and codomain. Only bijective functions have inverses.

---

### 4. Linear Function

$$f(x) = mx + b$$

- Constant rate of change $m$ (slope)
- Graph is a straight line
- Domain and range: all reals $(-\infty, \infty)$

---

### 5. Quadratic Function

$$f(x) = ax^2 + bx + c, \quad a \neq 0$$

- Graph is a **parabola**
- Vertex at $x = -\dfrac{b}{2a}$
- Domain: all reals; Range: $[k, \infty)$ if $a > 0$, or $(-\infty, k]$ if $a < 0$, where $k$ is the vertex value

---

### 6. Polynomial Function

$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$$

- Degree $n$ determines end behavior and maximum number of roots
- Domain: all reals

---

### 7. Rational Function

$$f(x) = \frac{p(x)}{q(x)}, \quad q(x) \neq 0$$

- Domain excludes values where $q(x) = 0$
- May have vertical asymptotes where denominator is zero

**Example:** $f(x) = \dfrac{1}{x - 3}$ has domain $x \neq 3$

---

### 8. Radical Function

$$f(x) = \sqrt[n]{g(x)}$$

- For even $n$: domain requires $g(x) \geq 0$
- For odd $n$: domain is all reals

---

### 9. Piecewise Function

Defined by different rules over different intervals:

$$f(x) = \begin{cases} x^2 & x < 0 \\ 2x + 1 & x \geq 0 \end{cases}$$

---

### 10. Constant Function

$$f(x) = c$$

Every input maps to the same output $c$. Graph is a horizontal line.

---

### 11. Identity Function

$$f(x) = x$$

Every input maps to itself. Acts as the neutral element under composition:

$$(f \circ \text{id})(x) = f(x)$$

---

### 12. Relation That Is Not a Function

$$\{(1, 2),\ (1, 3),\ (2, 4)\}$$

The input $1$ maps to both $2$ and $3$ — this violates the definition of a function.

A **circle** is a classic non-function relation:

$$x^2 + y^2 = r^2$$

Solving for $y$ gives $y = \pm\sqrt{r^2 - x^2}$ — two outputs for most inputs.

---

## How to Solve

### Finding the Domain

**Step 1 — Identify restrictions:**

- Denominators cannot be zero
- Even roots require non-negative radicand
- Logarithms require positive argument

**Example:** Find the domain of $f(x) = \dfrac{\sqrt{x + 4}}{x - 1}$

Restriction 1 (square root): $x + 4 \geq 0 \implies x \geq -4$

Restriction 2 (denominator): $x - 1 \neq 0 \implies x \neq 1$

$$\text{Domain: } [-4, 1) \cup (1, \infty)$$

---

### Evaluating a Function

Substitute the input directly for the variable.

**Example:** Given $f(x) = 3x^2 - 2x + 1$, find $f(4)$:

$$f(4) = 3(4)^2 - 2(4) + 1 = 48 - 8 + 1 = 41$$

---

### Finding the Inverse

**Step 1 — Replace $f(x)$ with $y$.**

**Step 2 — Swap $x$ and $y$.**

**Step 3 — Solve for $y$.**

**Step 4 — Replace $y$ with $f^{-1}(x)$.**

**Example:** Find the inverse of $f(x) = 2x + 5$

$$y = 2x + 5$$

Swap:

$$x = 2y + 5$$

Solve for $y$:

$$x - 5 = 2y$$

$$y = \frac{x - 5}{2}$$

$$\boxed{f^{-1}(x) = \frac{x-5}{2}}$$

---

### Composition of Functions

**Example:** Given $f(x) = x^2$ and $g(x) = x + 3$, find $(f \circ g)(x)$:

$$(f \circ g)(x) = f(g(x)) = f(x + 3) = (x + 3)^2$$

$$= x^2 + 6x + 9$$

---

### Vertical Line Test

To determine if a graph represents a function:

- Draw (or imagine) vertical lines across the graph
- If **any** vertical line crosses the graph more than once, it is **not** a function
- If every vertical line crosses **at most once**, it **is** a function

---

## Summary

| Concept            | Key Idea                                         |
| :----------------- | :----------------------------------------------- |
| Relation           | Any set of ordered pairs                         |
| Function           | Each input maps to exactly one output            |
| Domain             | Set of valid inputs                              |
| Range              | Set of actual outputs                            |
| Injective          | Each output comes from at most one input         |
| Surjective         | Every codomain element is reached                |
| Bijective          | Both injective and surjective — invertible       |
| Composition        | $(f \circ g)(x) = f(g(x))$                       |
| Inverse            | Undoes $f$ — exists only for bijective functions |
| Vertical Line Test | Graphical check for function validity            |

Functions are the backbone of all of mathematics — they formalize the idea of a **rule that takes an input and produces an output**, making them indispensable across every branch of math and science.
