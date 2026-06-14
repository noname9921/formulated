# Factoring

## Definition

Factoring is the process of decomposing a mathematical expression into a product of simpler expressions (called **factors**) such that when multiplied together, they yield the original expression.

$$a \cdot b = c \implies \text{factoring } c \text{ gives } a \text{ and } b$$

---

## Key Terminology

| Term               | Definition                                                                 |
| :----------------- | :------------------------------------------------------------------------- |
| Factor             | An expression that divides another expression evenly                       |
| Polynomial         | An expression with one or more terms containing variables and coefficients |
| GCF                | Greatest Common Factor — the largest factor shared by all terms            |
| Root / Zero        | A value of $x$ that makes the expression equal to zero                     |
| Prime (polynomial) | A polynomial that cannot be factored further over the integers             |
| Coefficient        | The numerical part of a term, e.g. $5$ in $5x^2$                           |
| Degree             | The highest exponent in a polynomial, e.g. degree $2$ in $x^2 + 3x + 1$    |

---

## Purpose

Factoring serves several core purposes in algebra:

- **Solving equations** — setting each factor to zero to find roots
- **Simplifying expressions** — reducing fractions of polynomials
- **Finding zeros/roots** — identifying where a function crosses the x-axis
- **Analyzing structure** — understanding how an expression is built

If $f(x) = (x - a)(x - b)$, then the roots are $x = a$ and $x = b$, since:

$$f(a) = (a - a)(a - b) = 0$$

---

## Fundamental Properties

### Zero Product Property

If a product of factors equals zero, at least one factor must be zero:

$$A \cdot B = 0 \implies A = 0 \text{ or } B = 0$$

### Distributive Property (in reverse)

Factoring is the reverse of expanding/distribution:

$$ab + ac = a(b + c)$$

### Factor Theorem

$(x - r)$ is a factor of $f(x)$ if and only if $f(r) = 0$.

---

## Types & Variations

### 1. Greatest Common Factor (GCF)

Extract the largest common factor from all terms.

$$6x^3 + 9x^2 = 3x^2(2x + 3)$$

**General form:**

$$a \cdot m + a \cdot n = a(m + n)$$

---

### 2. Difference of Squares

Applies when two perfect squares are subtracted.

$$a^2 - b^2 = (a + b)(a - b)$$

**Example:**

$$x^2 - 25 = (x + 5)(x - 5)$$

> Note: Sum of squares $a^2 + b^2$ does **not** factor over the reals.

---

### 3. Perfect Square Trinomial

A trinomial that is the square of a binomial.

$$a^2 + 2ab + b^2 = (a + b)^2$$

$$a^2 - 2ab + b^2 = (a - b)^2$$

**Example:**

$$x^2 + 6x + 9 = (x + 3)^2$$

---

### 4. Factoring Trinomials — $x^2 + bx + c$

Find two numbers $p$ and $q$ such that:

$$p + q = b \quad \text{and} \quad p \cdot q = c$$

Then:

$$x^2 + bx + c = (x + p)(x + q)$$

**Example:** Factor $x^2 + 5x + 6$

Find $p, q$ where $p + q = 5$ and $p \cdot q = 6$:

$$p = 2, \quad q = 3$$

$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

---

### 5. Factoring Trinomials — $ax^2 + bx + c$

Use the **AC method**: multiply $a \cdot c$, find two numbers that multiply to $ac$ and add to $b$, then split and factor by grouping.

**Example:** Factor $2x^2 + 7x + 3$

$$a \cdot c = 2 \cdot 3 = 6$$

Find $p, q$ where $p \cdot q = 6$ and $p + q = 7$: $p = 1,\ q = 6$

$$2x^2 + x + 6x + 3$$

$$= x(2x + 1) + 3(2x + 1)$$

$$= (x + 3)(2x + 1)$$

---

### 6. Sum & Difference of Cubes

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

**Example:**

$$x^3 - 8 = (x - 2)(x^2 + 2x + 4)$$

---

### 7. Factoring by Grouping

Group terms into pairs, factor each pair, then extract the common binomial.

**Example:** Factor $x^3 + 2x^2 + 3x + 6$

$$= (x^3 + 2x^2) + (3x + 6)$$

$$= x^2(x + 2) + 3(x + 2)$$

$$= (x^2 + 3)(x + 2)$$

---

## How to Solve — Solving Equations by Factoring

To solve $f(x) = 0$ using factoring:

**Step 1 — Move everything to one side:**

$$ax^2 + bx + c = 0$$

**Step 2 — Factor the expression completely.**

**Step 3 — Apply the Zero Product Property:**

$$\text{If } (x - p)(x - q) = 0 \implies x = p \text{ or } x = q$$

---

### Worked Example

Solve $x^2 - 5x + 6 = 0$

**Step 1:** Already in standard form.

**Step 2:** Find $p, q$ where $p + q = -5$ and $p \cdot q = 6$:

$$p = -2, \quad q = -3$$

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Step 3:** Apply zero product property:

$$(x - 2)(x - 3) = 0$$

$$x - 2 = 0 \quad \text{or} \quad x - 3 = 0$$

$$\boxed{x = 2 \quad \text{or} \quad x = 3}$$

---

### General Factoring Strategy (Decision Order)

1. Always check for **GCF** first
2. Count the number of terms:
   - **2 terms** — check difference of squares, sum/difference of cubes
   - **3 terms** — check perfect square trinomial, then trinomial factoring
   - **4 terms** — try factoring by grouping
3. Check if any factor can be **factored further**
4. Verify by **expanding** back

---

## Summary

| Type                  | Pattern             | Factored Form           |
| :-------------------- | :------------------ | :---------------------- |
| GCF                   | $am + an$           | $a(m + n)$              |
| Difference of Squares | $a^2 - b^2$         | $(a+b)(a-b)$            |
| Perfect Square        | $a^2 \pm 2ab + b^2$ | $(a \pm b)^2$           |
| Trinomial (monic)     | $x^2 + bx + c$      | $(x+p)(x+q)$            |
| Trinomial (leading)   | $ax^2 + bx + c$     | AC method               |
| Sum of Cubes          | $a^3 + b^3$         | $(a+b)(a^2 - ab + b^2)$ |
| Difference of Cubes   | $a^3 - b^3$         | $(a-b)(a^2 + ab + b^2)$ |
| Grouping              | $4$ terms           | pair, factor, extract   |

Factoring is fundamentally about **reversing multiplication** — and mastering it unlocks solving equations, simplifying rational expressions, and understanding polynomial behavior at a deeper level.
