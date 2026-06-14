# Quadratic Functions

## Definition

A **quadratic function** is a polynomial function of degree $2$:

$$f(x) = ax^2 + bx + c, \quad a \neq 0$$

where $a$, $b$, and $c$ are real constants. The condition $a \neq 0$ is strict — if $a = 0$, the function collapses into a linear function.

The graph of every quadratic function is a **parabola** — a symmetric U-shaped (or inverted U-shaped) curve.

---

## Key Terminology

| Term                  | Definition                                                                              |
| :-------------------- | :-------------------------------------------------------------------------------------- |
| Parabola              | The U-shaped curve that is the graph of every quadratic function                        |
| Vertex                | The turning point of the parabola — its highest or lowest point                         |
| Axis of Symmetry      | The vertical line $x = -\dfrac{b}{2a}$ that divides the parabola into two mirror halves |
| Roots / Zeros         | The $x$ values where $f(x) = 0$ — where the parabola crosses the x-axis                 |
| Y-intercept           | The value $f(0) = c$ — where the parabola crosses the y-axis                            |
| Discriminant          | $\Delta = b^2 - 4ac$ — determines the number and nature of roots                        |
| Leading Coefficient   | The coefficient $a$ of $x^2$ — controls direction and width of the parabola             |
| Standard Form         | $f(x) = ax^2 + bx + c$                                                                  |
| Vertex Form           | $f(x) = a(x - h)^2 + k$ where $(h, k)$ is the vertex                                    |
| Factored Form         | $f(x) = a(x - r_1)(x - r_2)$ where $r_1$, $r_2$ are roots                               |
| Completing the Square | Rewriting $ax^2 + bx + c$ into vertex form                                              |

---

## Purpose

Quadratic functions model any situation where a quantity changes at a **non-constant, linearly increasing rate**:

- **Physics** — projectile motion, free fall, trajectory of thrown objects
- **Engineering** — parabolic arches, satellite dishes, reflectors
- **Economics** — profit maximization, cost and revenue modeling
- **Optimization** — finding maximum area, minimum cost, peak height
- **Geometry** — area as a function of side length

Whenever you see the word _maximum_ or _minimum_ in an algebra problem, a quadratic is almost certainly involved.

---

## Fundamental Properties

### Direction of Opening

The sign of $a$ determines which way the parabola opens:

- $a > 0$ — opens **upward**, vertex is a **minimum**
- $a < 0$ — opens **downward**, vertex is a **maximum**

### Vertex

The vertex $(h, k)$ is the most important point on the parabola:

$$h = -\frac{b}{2a}, \qquad k = f(h) = f\!\left(-\frac{b}{2a}\right)$$

### Axis of Symmetry

The parabola is symmetric about the vertical line:

$$x = -\frac{b}{2a}$$

For any point $(x_0, y_0)$ on the parabola, the mirror point $\left(2h - x_0,\ y_0\right)$ is also on the parabola.

### Domain and Range

For any quadratic $f(x) = ax^2 + bx + c$:

- Domain: $(-\infty, \infty)$

- Range when $a > 0$: $[k, \infty)$

- Range when $a < 0$: $(-\infty, k]$

where $k$ is the y-coordinate of the vertex.

### The Discriminant

$$\Delta = b^2 - 4ac$$

| Discriminant | Number of Real Roots    | Graph Behavior                 |
| :----------- | :---------------------- | :----------------------------- |
| $\Delta > 0$ | Two distinct real roots | Parabola crosses x-axis twice  |
| $\Delta = 0$ | One repeated real root  | Parabola touches x-axis once   |
| $\Delta < 0$ | No real roots           | Parabola does not touch x-axis |

### Y-intercept

Setting $x = 0$ in any form gives:

$$f(0) = c$$

The y-intercept is always $(0, c)$ directly from the standard form.

---

## Types & Variations

### 1. Standard Form

$$f(x) = ax^2 + bx + c$$

The default expanded form. Best for identifying the y-intercept $c$ and computing the discriminant $\Delta = b^2 - 4ac$.

**Example:** $f(x) = 2x^2 - 4x + 1$

---

### 2. Vertex Form

$$f(x) = a(x - h)^2 + k$$

Best for identifying the vertex $(h, k)$ and axis of symmetry $x = h$ directly.

**Example:** $f(x) = 2(x - 1)^2 - 1$ has vertex $(1, -1)$

To convert from standard form, complete the square (see How to Solve).

---

### 3. Factored Form

$$f(x) = a(x - r_1)(x - r_2)$$

Best for identifying roots $r_1$ and $r_2$ directly. Only expressible in this form when real roots exist.

**Example:** $f(x) = 2(x - 3)(x + 1)$ has roots $x = 3$ and $x = -1$

---

### 4. Perfect Square Quadratic

$$f(x) = a(x - h)^2$$

A special case of vertex form where $k = 0$. The vertex sits on the x-axis and is the only root (a repeated root):

$$\Delta = 0$$

---

### 5. Pure Quadratic

$$f(x) = ax^2 + c \quad (b = 0)$$

No linear term. Axis of symmetry is always the y-axis ($x = 0$), vertex at $(0, c)$.

**Example:** $f(x) = 3x^2 - 12$ — symmetric about y-axis, roots at $x = \pm 2$

---

### 6. Upward vs. Downward Parabola

**Upward** ($a > 0$):

$$f(x) = x^2 - 4x + 3$$

Minimum vertex, range $[k, \infty)$.

**Downward** ($a < 0$):

$$f(x) = -x^2 + 4x - 3$$

Maximum vertex, range $(-\infty, k]$.

---

## How to Solve

### Solving $f(x) = 0$ by Factoring

Set the function equal to zero, factor, apply the zero product property.

**Example:** Solve $x^2 - 5x + 6 = 0$

Factor:

$$(x - 2)(x - 3) = 0$$

$$x - 2 = 0 \quad \text{or} \quad x - 3 = 0$$

$$\boxed{x = 2 \quad \text{or} \quad x = 3}$$

---

### Solving by the Quadratic Formula

For any $ax^2 + bx + c = 0$, the roots are:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

This always works regardless of whether the quadratic factors nicely.

**Example:** Solve $2x^2 - 4x - 6 = 0$

$$x = \frac{4 \pm \sqrt{(-4)^2 - 4(2)(-6)}}{2(2)} = \frac{4 \pm \sqrt{16 + 48}}{4} = \frac{4 \pm \sqrt{64}}{4} = \frac{4 \pm 8}{4}$$

$$x = \frac{4 + 8}{4} = 3 \qquad \text{or} \qquad x = \frac{4 - 8}{4} = -1$$

$$\boxed{x = 3 \quad \text{or} \quad x = -1}$$

---

### Solving by Completing the Square

Rewrite the quadratic so the left side is a perfect square, then take square roots.

**Example:** Solve $x^2 + 6x + 5 = 0$

**Step 1 — Move the constant:**

$$x^2 + 6x = -5$$

**Step 2 — Add $\left(\dfrac{6}{2}\right)^2 = 9$ to both sides:**

$$x^2 + 6x + 9 = 4$$

**Step 3 — Write as a perfect square:**

$$(x + 3)^2 = 4$$

**Step 4 — Take square roots:**

$$x + 3 = \pm 2$$

$$\boxed{x = -1 \quad \text{or} \quad x = -5}$$

---

### Converting to Vertex Form

**Example:** Convert $f(x) = 2x^2 - 8x + 3$ to vertex form.

**Step 1 — Factor $a$ from the first two terms:**

$$f(x) = 2(x^2 - 4x) + 3$$

**Step 2 — Complete the square inside the bracket:**

$$\left(\frac{4}{2}\right)^2 = 4$$

$$f(x) = 2(x^2 - 4x + 4 - 4) + 3$$

$$f(x) = 2((x - 2)^2 - 4) + 3$$

**Step 3 — Expand and simplify:**

$$f(x) = 2(x - 2)^2 - 8 + 3$$

$$\boxed{f(x) = 2(x - 2)^2 - 5}$$

Vertex is $(2, -5)$.

---

### Finding the Vertex Directly

From standard form $f(x) = ax^2 + bx + c$:

$$h = -\frac{b}{2a}, \qquad k = f(h)$$

**Example:** $f(x) = x^2 - 4x + 1$

$$h = -\frac{-4}{2(1)} = 2$$

$$k = f(2) = 4 - 8 + 1 = -3$$

$$\text{Vertex: } (2, -3)$$

---

### Optimization (Max / Min Problems)

The vertex gives the maximum or minimum value of the function.

**Example:** A ball is thrown upward. Its height in meters is:

$$h(t) = -5t^2 + 20t + 2$$

Find the maximum height.

$$t = -\frac{20}{2(-5)} = 2 \text{ seconds}$$

$$h(2) = -5(4) + 20(2) + 2 = -20 + 40 + 2 = 22 \text{ m}$$

$$\boxed{\text{Maximum height} = 22 \text{ m at } t = 2 \text{ s}}$$

---

## Summary

| Concept           | Formula / Rule                            |
| :---------------- | :---------------------------------------- |
| Standard Form     | $f(x) = ax^2 + bx + c$                    |
| Vertex Form       | $f(x) = a(x-h)^2 + k$                     |
| Factored Form     | $f(x) = a(x - r_1)(x - r_2)$              |
| Vertex            | $h = -\dfrac{b}{2a}$, $k = f(h)$          |
| Axis of Symmetry  | $x = -\dfrac{b}{2a}$                      |
| Quadratic Formula | $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ |
| Discriminant      | $\Delta = b^2 - 4ac$                      |
| $\Delta > 0$      | Two distinct real roots                   |
| $\Delta = 0$      | One repeated real root                    |
| $\Delta < 0$      | No real roots                             |
| Opens upward      | $a > 0$ — minimum at vertex               |
| Opens downward    | $a < 0$ — maximum at vertex               |
| Y-intercept       | $(0,\ c)$                                 |

Quadratic functions are where algebra begins to feel genuinely powerful — they introduce optimization, non-linear behavior, and the discriminant, all of which echo throughout calculus, physics, and beyond.
