# Linear Functions

## Definition

A **linear function** is a function of the form:

$$f(x) = mx + b$$

where $m$ and $b$ are real constants. It produces a **straight line** when graphed, with a constant rate of change throughout its entire domain.

The term _linear_ comes from the fact that the graph is always a line — no curves, no bends, no turning points.

---

## Key Terminology

| Term                 | Definition                                                                        |
| :------------------- | :-------------------------------------------------------------------------------- |
| Slope ($m$)          | The rate of change — how much $y$ changes per unit increase in $x$                |
| Y-intercept ($b$)    | The value of $f(x)$ when $x = 0$ — where the line crosses the y-axis              |
| X-intercept          | The value of $x$ when $f(x) = 0$ — where the line crosses the x-axis              |
| Rate of Change       | How fast the output changes relative to the input — constant for linear functions |
| Slope-Intercept Form | $f(x) = mx + b$ — the standard form of a linear function                          |
| Point-Slope Form     | $y - y_1 = m(x - x_1)$ — built from a known point and slope                       |
| Standard Form        | $ax + by = c$ — both variables on one side                                        |
| Constant Function    | A linear function where $m = 0$, giving $f(x) = b$                                |
| Zero of a Function   | The $x$ value where $f(x) = 0$                                                    |
| Parallel Lines       | Two lines with the same slope $m$ but different intercepts                        |
| Perpendicular Lines  | Two lines whose slopes multiply to $-1$                                           |

---

## Purpose

Linear functions are the **simplest and most fundamental** class of functions in mathematics:

- **Modeling** — constant-speed motion, flat-rate pricing, unit conversion
- **Approximation** — approximating nonlinear behavior near a point (basis of calculus)
- **Systems of equations** — most introductory systems are linear
- **Statistics** — linear regression finds the best-fit line through data
- **Economics** — supply, demand, and cost functions are often modeled linearly

Any time a quantity changes at a **constant rate**, a linear function describes it exactly.

---

## Fundamental Properties

### Constant Rate of Change

For any two points on a linear function, the ratio of the change in output to the change in input is always the same:

$$m = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$$

This is what makes the function _linear_ — the slope $m$ never changes.

### Domain and Range

For any linear function $f(x) = mx + b$ where $m \neq 0$:

- Domain: $(-\infty, \infty)$
- Range: $(-\infty, \infty)$

For a constant function $f(x) = b$ (where $m = 0$):

- Domain: $(-\infty, \infty)$
- Range: $\{b\}$

### One-to-One (when $m \neq 0$)

Every output corresponds to exactly one input — linear functions with nonzero slope are bijective over the reals and therefore **invertible**.

### Linearity Properties

A function $f$ is linear in the algebraic sense if it satisfies:

$$f(x_1 + x_2) = f(x_1) + f(x_2)$$

$$f(cx) = c \cdot f(x)$$

Note: $f(x) = mx + b$ satisfies these only when $b = 0$. When $b \neq 0$, it is technically an **affine** function — though it is universally called linear in algebra.

### Slope Relationships

For two lines with slopes $m_1$ and $m_2$:

**Parallel:** $m_1 = m_2$ and different intercepts

**Perpendicular:** $m_1 \cdot m_2 = -1$, equivalently $m_2 = -\dfrac{1}{m_1}$

---

## Types & Variations

### 1. Slope-Intercept Form

The most common form:

$$f(x) = mx + b$$

- $m$ is the slope
- $b$ is the y-intercept

**Example:** $f(x) = 3x - 2$ has slope $3$ and y-intercept $-2$

---

### 2. Point-Slope Form

Used when a point $(x_1, y_1)$ and slope $m$ are known:

$$y - y_1 = m(x - x_1)$$

**Example:** Line through $(2, 5)$ with slope $4$:

$$y - 5 = 4(x - 2)$$

$$y = 4x - 3$$

---

### 3. Standard Form

$$ax + by = c$$

where $a$, $b$, $c$ are integers and $a \geq 0$. Neither variable is isolated.

**Example:** $2x + 3y = 12$

Useful for finding both intercepts quickly:

- Set $x = 0$: $y = 4$ (y-intercept)
- Set $y = 0$: $x = 6$ (x-intercept)

---

### 4. Constant Function

When $m = 0$:

$$f(x) = b$$

Horizontal line at height $b$. Every input maps to the same output.

**Example:** $f(x) = 7$ — a flat line at $y = 7$

---

### 5. Identity Function

$$f(x) = x$$

A special case where $m = 1$ and $b = 0$. The line passes through the origin at a $45°$ angle.

---

### 6. Direct Variation

$$f(x) = mx$$

A linear function through the origin ($b = 0$). Output is directly proportional to input — doubling $x$ doubles $f(x)$.

$$\frac{f(x)}{x} = m = \text{constant}$$

---

### 7. Increasing vs. Decreasing

- $m > 0$ — function is **increasing** (line rises left to right)
- $m < 0$ — function is **decreasing** (line falls left to right)
- $m = 0$ — function is **constant** (horizontal line)

---

## How to Solve

### Finding Slope from Two Points

Given $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Example:** Find the slope through $(1, 3)$ and $(4, 9)$:

$$m = \frac{9 - 3}{4 - 1} = \frac{6}{3} = 2$$

---

### Writing the Equation of a Line

**Given slope and y-intercept** — plug directly into $f(x) = mx + b$

**Given slope $m$ and point $(x_1, y_1)$:**

**Step 1 — Use point-slope form:**

$$y - y_1 = m(x - x_1)$$

**Step 2 — Solve for $y$:**

$$y = mx - mx_1 + y_1$$

**Example:** Slope $m = 3$, point $(2, 7)$:

$$y - 7 = 3(x - 2)$$

$$y - 7 = 3x - 6$$

$$\boxed{y = 3x + 1}$$

---

**Given two points:**

**Step 1 — Find slope:**

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Step 2 — Use point-slope form with either point.**

**Example:** Through $(1, 2)$ and $(3, 8)$:

$$m = \frac{8 - 2}{3 - 1} = \frac{6}{2} = 3$$

$$y - 2 = 3(x - 1)$$

$$\boxed{y = 3x - 1}$$

---

### Finding the X-Intercept

Set $f(x) = 0$ and solve for $x$:

$$mx + b = 0 \implies x = -\frac{b}{m}$$

**Example:** $f(x) = 2x - 6$:

$$0 = 2x - 6 \implies x = 3$$

X-intercept is $(3, 0)$.

---

### Finding the Inverse

For $f(x) = mx + b$ where $m \neq 0$:

**Step 1 — Replace $f(x)$ with $y$:**

$$y = mx + b$$

**Step 2 — Swap $x$ and $y$:**

$$x = my + b$$

**Step 3 — Solve for $y$:**

$$y = \frac{x - b}{m}$$

$$\boxed{f^{-1}(x) = \frac{x - b}{m}}$$

---

### Writing Parallel and Perpendicular Lines

**Parallel** to $y = 2x + 5$ through $(1, 3)$ — same slope $m = 2$:

$$y - 3 = 2(x - 1) \implies y = 2x + 1$$

**Perpendicular** to $y = 2x + 5$ through $(1, 3)$ — slope $m = -\dfrac{1}{2}$:

$$y - 3 = -\frac{1}{2}(x - 1) \implies y = -\frac{1}{2}x + \frac{7}{2}$$

---

## Summary

| Concept               | Formula / Rule                     |
| :-------------------- | :--------------------------------- |
| Slope-Intercept Form  | $f(x) = mx + b$                    |
| Point-Slope Form      | $y - y_1 = m(x - x_1)$             |
| Standard Form         | $ax + by = c$                      |
| Slope from two points | $m = \dfrac{y_2 - y_1}{x_2 - x_1}$ |
| X-intercept           | Set $f(x) = 0$, solve for $x$      |
| Y-intercept           | Set $x = 0$, evaluate $f(0) = b$   |
| Inverse               | $f^{-1}(x) = \dfrac{x - b}{m}$     |
| Parallel lines        | Equal slopes: $m_1 = m_2$          |
| Perpendicular lines   | $m_1 \cdot m_2 = -1$               |
| Direct variation      | $f(x) = mx$, passes through origin |

Linear functions are the entry point into all of mathematics — simple enough to fully understand, yet powerful enough to model an enormous range of real-world phenomena. Mastering them is mastering the foundation.
