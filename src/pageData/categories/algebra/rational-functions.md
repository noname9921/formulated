# Rational Functions

## Definition

A **rational function** is any function of the form:

$$
f(x) = \frac{P(x)}{Q(x)}
$$

where $P(x)$ and $Q(x)$ are both polynomials, and $Q(x) \neq 0$.

The domain of $f(x)$ excludes all values of $x$ where $Q(x) = 0$.

---

## Key Terminology

**Numerator polynomial** — the polynomial $P(x)$ on top.

**Denominator polynomial** — the polynomial $Q(x)$ on the bottom.

**Restriction** — a value of $x$ excluded from the domain because it makes $Q(x) = 0$.

**Vertical Asymptote** — a vertical line $x = a$ where the function grows without bound, occurring when $Q(a) = 0$ and $P(a) \neq 0$.

**Horizontal Asymptote** — a horizontal line $y = L$ that $f(x)$ approaches as $x \to \pm\infty$.

**Oblique (Slant) Asymptote** — a non-horizontal, non-vertical line that $f(x)$ approaches as $x \to \pm\infty$, occurring when $\deg(P) = \deg(Q) + 1$.

**Hole (Removable Discontinuity)** — a point excluded from the graph where a common factor cancels from both $P(x)$ and $Q(x)$.

**Degree** — the highest power of $x$ in a polynomial.

---

## Purpose

Rational functions model real-world phenomena where one quantity depends inversely or fractionally on another. Common applications include:

- **Physics**: modeling gravitational force, $F = \frac{Gm_1 m_2}{r^2}$
- **Economics**: average cost functions, $\bar{C}(x) = \frac{C(x)}{x}$
- **Engineering**: transfer functions in control systems
- **Chemistry**: reaction rate equations

They are also foundational in calculus — partial fraction decomposition, limits, and improper integrals all rely heavily on rational functions.

---

## Fundamental Properties

### Domain

The domain is all real numbers except where $Q(x) = 0$:

$$
\text{Domain} = \{ x \in \mathbb{R} \mid Q(x) \neq 0 \}
$$

### Vertical Asymptotes

After fully simplifying $f(x)$, set the remaining denominator equal to zero. Each solution $x = a$ is a vertical asymptote.

$$
Q(a) = 0 \quad \text{and} \quad P(a) \neq 0 \implies x = a \text{ is a vertical asymptote}
$$

### Horizontal Asymptotes

Let $n = \deg(P)$ and $m = \deg(Q)$, with leading coefficients $a$ and $b$ respectively.

| Condition | Horizontal Asymptote     |
| --------- | ------------------------ |
| $n < m$   | $y = 0$                  |
| $n = m$   | $y = \dfrac{a}{b}$       |
| $n > m$   | None (check for oblique) |

### Oblique Asymptote

When $n = m + 1$, divide $P(x)$ by $Q(x)$ using polynomial long division:

$$
f(x) = (\text{linear quotient}) + \frac{\text{remainder}}{Q(x)}
$$

As $x \to \pm\infty$, the remainder term vanishes, leaving the oblique asymptote.

### Holes

Factor both $P(x)$ and $Q(x)$. Any common factor $(x - c)$ that cancels produces a hole at $x = c$.

The $y$-coordinate of the hole is:

$$
y = \lim_{x \to c} f(x)
$$

### Zeros (x-intercepts)

Set the simplified numerator equal to zero:

$$
P(x) = 0 \implies \text{zeros of } f(x)
$$

Values that also make $Q(x) = 0$ are holes, not zeros.

### End Behavior

As $x \to \pm\infty$, the behavior is governed by the ratio of leading terms:

$$
f(x) \approx \frac{a_n x^n}{b_m x^m} = \frac{a_n}{b_m} x^{n - m}
$$

---

## Types & Variations

### Proper Rational Function

$$
\deg(P) < \deg(Q)
$$

The horizontal asymptote is always $y = 0$. Example:

$$
f(x) = \frac{3x + 1}{x^2 - 4}
$$

### Improper Rational Function

$$
\deg(P) \geq \deg(Q)
$$

Can be rewritten via polynomial division as a polynomial plus a proper rational function. Example:

$$
f(x) = \frac{x^3 + 2x}{x^2 - 1} = x + \frac{3x}{x^2 - 1}
$$

### Simple (Unit) Rational Function

The most elementary form:

$$
f(x) = \frac{1}{x}
$$

This is the parent function. It has a vertical asymptote at $x = 0$, horizontal asymptote at $y = 0$, and is defined on $(-\infty, 0) \cup (0, \infty)$.

### Rational Function with a Hole

$$
f(x) = \frac{(x-2)(x+3)}{(x-2)(x-1)}
$$

The factor $(x - 2)$ cancels, leaving a hole at $x = 2$ and a vertical asymptote at $x = 1$.

### Rational Function with Oblique Asymptote

$$
f(x) = \frac{x^2 + 3x + 5}{x + 1}
$$

Performing long division:

$$
f(x) = x + 2 + \frac{3}{x+1}
$$

So the oblique asymptote is $y = x + 2$.

---

## How to Solve

### Finding the Domain

1. Set $Q(x) = 0$ and solve for $x$.
2. Exclude those values from $\mathbb{R}$.

**Example**: $f(x) = \dfrac{2x}{x^2 - 9}$

$$
x^2 - 9 = 0 \implies x = \pm 3
$$

Domain: $(-\infty, -3) \cup (-3, 3) \cup (3, \infty)$

---

### Simplifying & Identifying Holes

1. Factor $P(x)$ and $Q(x)$ fully.
2. Cancel common factors — each cancellation is a hole.
3. Note the $x$-value of the hole, then substitute into the simplified function for the $y$-value.

**Example**: $f(x) = \dfrac{x^2 - x - 6}{x^2 - 5x + 6}$

$$
= \frac{(x-3)(x+2)}{(x-3)(x-2)}= \frac{x+2}{x-2}, \quad x \neq 3
$$

Hole at $x = 3$:

$$
y = \frac{3+2}{3-2} = 5 \implies \text{hole at } (3,\ 5)
$$

---

### Finding Asymptotes

**Vertical**: from remaining denominator after simplification.

**Horizontal**: compare degrees of $P$ and $Q$ using the table in Fundamental Properties.

**Oblique**: apply polynomial long division when $\deg(P) = \deg(Q) + 1$.

**Example**: $f(x) = \dfrac{2x^2 + 3}{x^2 - 1}$

- $\deg(P) = \deg(Q) = 2$, so horizontal asymptote: $y = \dfrac{2}{1} = 2$
- Vertical asymptotes: $x^2 - 1 = 0 \implies x = \pm 1$

---

### Solving Rational Equations

A rational equation sets a rational function equal to a value. Steps:

1. Find the LCD (Least Common Denominator).
2. Multiply both sides by the LCD to clear all fractions.
3. Solve the resulting polynomial equation.
4. **Check** all solutions against the original restrictions — any solution that makes $Q(x) = 0$ is extraneous.

**Example**: Solve $\dfrac{1}{x-2} + \dfrac{1}{x+2} = \dfrac{4}{x^2-4}$

LCD $= (x-2)(x+2)$, multiply through:

$$
(x+2) + (x-2) = 4
$$

$$
2x = 4 \implies x = 2
$$

But $x = 2$ makes the denominator zero — **extraneous solution**. No solution.

---

### Solving Rational Inequalities

1. Move everything to one side: $f(x) \gtreqqless 0$
2. Find zeros of numerator and denominator — these are **critical points**.
3. Use a sign chart: test each interval between critical points.
4. Write the solution in interval notation, **excluding** points where $Q(x) = 0$.

**Example**: $\dfrac{x - 1}{x + 3} > 0$

Critical points: $x = 1$ (zero), $x = -3$ (restriction)

| Interval     | Sign of $(x-1)$ | Sign of $(x+3)$ | Sign of $f(x)$ |
| ------------ | --------------- | --------------- | -------------- |
| $x < -3$     | $-$             | $-$             | $+$            |
| $-3 < x < 1$ | $-$             | $+$             | $-$            |
| $x > 1$      | $+$             | $+$             | $+$            |

Solution: $(-\infty,\ -3) \cup (1,\ \infty)$

---

## Summary

A rational function $f(x) = \dfrac{P(x)}{Q(x)}$ is built from two polynomials and carries rich structure through its asymptotes, holes, and domain restrictions. The key workflow for analyzing one is:

1. **Factor** both $P(x)$ and $Q(x)$
2. **Cancel** common factors → identify holes
3. **Set denominator to zero** → domain restrictions and vertical asymptotes
4. **Compare degrees** → determine horizontal or oblique asymptote
5. **Set numerator to zero** → find $x$-intercepts
6. **Check end behavior** via leading terms

Mastering rational functions is a prerequisite for partial fractions, limits at discontinuities, curve sketching, and a large chunk of integral calculus.
