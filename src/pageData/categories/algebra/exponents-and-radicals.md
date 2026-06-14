# Exponents & Radicals in Algebra

---

## Definition

An **exponent** is a number that indicates how many times a **base** is multiplied by itself:

$$
a^n = \underbrace{a \cdot a \cdot a \cdots a}_{n \text{ times}}
$$

where $a$ is the **base** and $n$ is the **exponent** (also called the **power** or **index**).

A **radical** is the inverse operation — it extracts a root from a number:

$$
\sqrt[n]{a} = b \quad \Longleftrightarrow \quad b^n = a
$$

where $n$ is the **index** of the radical and $a$ is the **radicand**.

> **Core relationship:** Radicals and exponents are two sides of the same coin. Every radical can be expressed as a fractional exponent:
>
> $$\sqrt[n]{a} = a^{1/n}$$

---

## Key Terminology

| Term                         | Definition                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------- |
| **Base**                     | The number being raised to a power, e.g., in $a^n$, the base is $a$               |
| **Exponent / Power / Index** | The number indicating how many times the base is multiplied, e.g., $n$ in $a^n$   |
| **Radical**                  | The symbol $\sqrt[n]{\phantom{x}}$ denoting a root operation                      |
| **Radicand**                 | The expression inside the radical, e.g., $a$ in $\sqrt[n]{a}$                     |
| **Index**                    | The degree of the root, e.g., $n$ in $\sqrt[n]{a}$; if omitted, assumed to be $2$ |
| **Principal Root**           | The non-negative root returned by convention, e.g., $\sqrt{9} = 3$, not $-3$      |
| **Perfect Power**            | A number expressible as $a^n$ for integer $a$ and $n$, e.g., $8 = 2^3$            |
| **Fractional Exponent**      | An exponent of the form $m/n$, equivalent to $\sqrt[n]{a^m}$                      |
| **Negative Exponent**        | $a^{-n} = 1/a^n$; represents the reciprocal                                       |
| **Zero Exponent**            | $a^0 = 1$ for any $a \neq 0$                                                      |
| **Rationalization**          | The process of eliminating radicals from a denominator                            |
| **Like Radicals**            | Radicals with the same index and radicand, e.g., $3\sqrt{5}$ and $7\sqrt{5}$      |

---

## Purpose

**1. Expressing very large or very small numbers compactly**

Scientific notation relies entirely on exponents:

$$
6.022 \times 10^{23} \quad \text{(Avogadro's number)}
$$

**2. Modeling exponential growth and decay**

Population growth, compound interest, radioactive decay:

$$
A = P\left(1 + \frac{r}{n}\right)^{nt}
$$

**3. Solving polynomial and radical equations**

Exponents and roots are the primary tools for isolating variables in non-linear equations.

**4. Expressing irrational quantities**

Many important constants and lengths arise naturally as radicals:

$$
\text{diagonal of a unit square} = \sqrt{2}
$$

**5. Foundation for logarithms and exponential functions**

The inverse of $a^x$ is $\log_a x$ — impossible to understand without a firm grasp of exponents.

---

## Fundamental Properties

### Laws of Exponents

Let $a, b \in \mathbb{R}$ with $a \neq 0,\; b \neq 0$, and $m, n \in \mathbb{Q}$.

**Product Rule:**

$$
a^m \cdot a^n = a^{m+n}
$$

**Quotient Rule:**

$$
\frac{a^m}{a^n} = a^{m-n}
$$

**Power of a Power:**

$$
(a^m)^n = a^{mn}
$$

**Power of a Product:**

$$
(ab)^n = a^n b^n
$$

**Power of a Quotient:**

$$
\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}
$$

**Zero Exponent:**

$$
a^0 = 1, \quad a \neq 0
$$

**Negative Exponent:**

$$
a^{-n} = \frac{1}{a^n}
$$

**Fractional Exponent:**

$$
a^{m/n} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m
$$

---

### Laws of Radicals

Let $a, b \geq 0$ and $n, m$ be positive integers.

**Product Rule:**

$$
\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{ab}
$$

**Quotient Rule:**

$$
\frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}}, \quad b \neq 0
$$

**Power of a Radical:**

$$
\left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m} = a^{m/n}
$$

**Nested Radical (Index Multiplication):**

$$
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a} = a^{1/(mn)}
$$

**Radical of a Power:**

$$
\sqrt[n]{a^n} = |a| \quad \text{(when } n \text{ is even)}
$$

$$
\sqrt[n]{a^n} = a \quad \text{(when } n \text{ is odd)}
$$

> The absolute value in the even case is critical. $\sqrt{(-3)^2} = \sqrt{9} = 3 = |-3|$, not $-3$.

---

## Types & Variations

### 1. Integer Exponents

Exponents that are whole numbers (positive, zero, or negative).

**Positive:** $a^3 = a \cdot a \cdot a$

**Zero:** $a^0 = 1$

**Negative:** $a^{-2} = \dfrac{1}{a^2}$

---

### 2. Fractional Exponents

Exponents of the form $m/n$ that unify exponents and radicals.

$$
8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4
$$

$$
27^{-1/3} = \frac{1}{\sqrt[3]{27}} = \frac{1}{3}
$$

---

### 3. Square Roots

The most common radical, with index $n = 2$ (index is omitted by convention):

$$
\sqrt{a} = a^{1/2}, \quad a \geq 0
$$

**Example:** $\sqrt{49} = 7$

---

### 4. Cube Roots

Index $n = 3$. Defined for **all** real numbers (including negatives):

$$
\sqrt[3]{a} = a^{1/3}
$$

**Example:** $\sqrt[3]{-8} = -2$ since $(-2)^3 = -8$

---

### 5. nth Roots

General radical with any positive integer index $n$:

$$
\sqrt[n]{a} = a^{1/n}
$$

- If $n$ is **even**: $a \geq 0$ required (in $\mathbb{R}$)
- If $n$ is **odd**: $a$ can be any real number

---

### 6. Expressions with Multiple Radical Terms

Expressions involving addition or subtraction of radical terms.

**Like radicals** can be combined:

$$
3\sqrt{5} + 7\sqrt{5} = 10\sqrt{5}
$$

**Unlike radicals** cannot be combined directly:

$$
\sqrt{2} + \sqrt{3} \neq \sqrt{5}
$$

---

### 7. Nested Radicals

Radicals inside other radicals:

$$
\sqrt{2 + \sqrt{3}}
$$

These often appear in trigonometric exact values and can sometimes be simplified using the identity:

$$
\sqrt{a \pm \sqrt{b}} = \sqrt{\frac{a + \sqrt{a^2 - b}}{2}} \pm \sqrt{\frac{a - \sqrt{a^2 - b}}{2}}
$$

---

## How to Solve

### Simplifying Exponential Expressions

Apply the laws of exponents step by step.

**Example:** Simplify $\dfrac{x^5 \cdot x^{-2}}{x^3}$

$$
\frac{x^5 \cdot x^{-2}}{x^3} = \frac{x^{5 + (-2)}}{x^3} = \frac{x^3}{x^3} = x^0 = 1
$$

---

### Simplifying Radical Expressions

**Step 1 — Factor out perfect powers from the radicand:**

$$
\sqrt{72} = \sqrt{36 \cdot 2} = \sqrt{36} \cdot \sqrt{2} = 6\sqrt{2}
$$

**Step 2 — Reduce the index where possible:**

$$
\sqrt[4]{x^2} = x^{2/4} = x^{1/2} = \sqrt{x}, \quad x \geq 0
$$

**Step 3 — Combine like radicals:**

$$
5\sqrt{3} - 2\sqrt{3} = 3\sqrt{3}
$$

---

### Rationalization

The process of eliminating radicals from a denominator.

**Case 1 — Single radical in denominator:**

$$
\frac{3}{\sqrt{5}} = \frac{3}{\sqrt{5}} \cdot \frac{\sqrt{5}}{\sqrt{5}} = \frac{3\sqrt{5}}{5}
$$

**Case 2 — Binomial denominator with radical (use the conjugate):**

$$
\frac{2}{3 + \sqrt{7}} = \frac{2}{3 + \sqrt{7}} \cdot \frac{3 - \sqrt{7}}{3 - \sqrt{7}} = \frac{2(3 - \sqrt{7})}{9 - 7} = \frac{2(3 - \sqrt{7})}{2} = 3 - \sqrt{7}
$$

> The **conjugate** of $a + \sqrt{b}$ is $a - \sqrt{b}$. Their product $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$ eliminates the radical.

---

### Solving Equations with Exponents

**Type 1 — Same base:**

$$
2^{x+1} = 2^5 \implies x + 1 = 5 \implies x = 4
$$

**Type 2 — Variable as base:**

$$
x^3 = 64 \implies x = \sqrt[3]{64} = 4
$$

**Type 3 — Fractional exponent:**

$$
x^{2/3} = 9
$$

Raise both sides to the power $3/2$:

$$
\left(x^{2/3}\right)^{3/2} = 9^{3/2}
$$

$$
x = \left(\sqrt{9}\right)^3 = 3^3 = 27
$$

---

### Solving Radical Equations

**Steps:**

1. Isolate the radical on one side
2. Raise both sides to the power of the index to eliminate the radical
3. Solve the resulting equation
4. **Check all solutions** — extraneous solutions are common when the index is even

**Example:** Solve $\sqrt{3x + 4} = x$

$$
(\sqrt{3x + 4})^2 = x^2
$$

$$
3x + 4 = x^2
$$

$$
x^2 - 3x - 4 = 0 \implies (x - 4)(x + 1) = 0
$$

$$
x = 4 \quad \text{or} \quad x = -1
$$

Check $x = -1$: $\sqrt{3(-1) + 4} = \sqrt{1} = 1 \neq -1$ — **extraneous**, rejected.

$$
\therefore \quad x = 4
$$

**Example with two radicals:** Solve $\sqrt{x + 5} - \sqrt{x} = 1$

Isolate one radical:

$$
\sqrt{x + 5} = \sqrt{x} + 1
$$

Square both sides:

$$
x + 5 = x + 2\sqrt{x} + 1
$$

$$
4 = 2\sqrt{x} \implies \sqrt{x} = 2 \implies x = 4
$$

Check: $\sqrt{9} - \sqrt{4} = 3 - 2 = 1$ ✓

$$
\therefore \quad x = 4
$$

---

### Converting Between Radical and Exponential Form

$$
\sqrt[3]{x^2} = x^{2/3}
$$

$$
a^{3/4} = \sqrt[4]{a^3}
$$

$$
\frac{1}{\sqrt{x}} = x^{-1/2}
$$

---

## Summary

### Laws of Exponents — Quick Reference

| Law                 | Form                      |
| ------------------- | ------------------------- |
| Product Rule        | $a^m \cdot a^n = a^{m+n}$ |
| Quotient Rule       | $a^m / a^n = a^{m-n}$     |
| Power of a Power    | $(a^m)^n = a^{mn}$        |
| Power of a Product  | $(ab)^n = a^n b^n$        |
| Zero Exponent       | $a^0 = 1$                 |
| Negative Exponent   | $a^{-n} = 1/a^n$          |
| Fractional Exponent | $a^{m/n} = \sqrt[n]{a^m}$ |

### Laws of Radicals — Quick Reference

| Law            | Form                                           |
| -------------- | ---------------------------------------------- |
| Product Rule   | $\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{ab}$ |
| Quotient Rule  | $\sqrt[n]{a} / \sqrt[n]{b} = \sqrt[n]{a/b}$    |
| Nested Radical | $\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}$         |
| Even Index     | $\sqrt[n]{a^n} = \lvert a \rvert$              |
| Odd Index      | $\sqrt[n]{a^n} = a$                            |

### Equation Types — Quick Reference

| Equation Type         | Strategy                                 | Watch Out For            |
| --------------------- | ---------------------------------------- | ------------------------ |
| Same-base exponential | Equate exponents directly                | Bases must match exactly |
| Variable as base      | Take the $n$-th root of both sides       | Even roots require $\pm$ |
| Fractional exponent   | Raise both sides to the reciprocal power | Order of operations      |
| Single radical        | Isolate, then raise to the index power   | Extraneous solutions     |
| Two radicals          | Isolate one, square, repeat if needed    | Extraneous solutions     |

**The golden rules to never forget:**

$$
\boxed{a^{m/n} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m}
$$

$$
\boxed{\sqrt[n]{a^n} = |a| \text{ for even } n, \quad \sqrt[n]{a^n} = a \text{ for odd } n}
$$

$$
\boxed{\text{Always verify radical equation solutions in the original equation}}
$$
