# Polynomials in Algebra

---

## Definition

A **polynomial** is an algebraic expression consisting of variables and coefficients, combined using only **addition, subtraction, multiplication, and non-negative integer exponents**.

$$
P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0
$$

where:

- $a_n, a_{n-1}, \ldots, a_0 \in \mathbb{R}$ are the **coefficients**
- $x$ is the **variable** (indeterminate)
- $n$ is a **non-negative integer** (the degree)
- $a_n \neq 0$ (the leading coefficient is non-zero)

> **What is NOT a polynomial:** Expressions with negative exponents ($x^{-1}$), fractional exponents ($x^{1/2}$), variables in the denominator ($1/x$), or variables inside radicals ($\sqrt{x}$).

---

## Key Terminology

| Term                       | Definition                                                                                   |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| **Term**                   | A single product of a coefficient and a power of the variable, e.g., $3x^2$                  |
| **Coefficient**            | The numerical factor of a term, e.g., $3$ in $3x^2$                                          |
| **Constant Term**          | The term with no variable, i.e., $a_0$                                                       |
| **Degree of a Term**       | The exponent of the variable in that term, e.g., degree of $5x^3$ is $3$                     |
| **Degree of a Polynomial** | The highest degree among all terms, e.g., degree of $4x^3 + x - 7$ is $3$                    |
| **Leading Term**           | The term with the highest degree, e.g., $4x^3$                                               |
| **Leading Coefficient**    | The coefficient of the leading term, e.g., $4$                                               |
| **Monic Polynomial**       | A polynomial where the leading coefficient is $1$, e.g., $x^2 + 3x + 2$                      |
| **Root / Zero**            | A value $r$ such that $P(r) = 0$                                                             |
| **Multiplicity**           | How many times a root appears as a factor; e.g., in $(x-2)^3$, root $2$ has multiplicity $3$ |
| **Standard Form**          | Terms written in descending order of degree                                                  |
| **Like Terms**             | Terms with the same variable and exponent, combinable by adding coefficients                 |

---

## Purpose

**1. Modeling real-world quantities**

Polynomials describe physical phenomena — projectile motion, area, volume, and cost functions:

$$
h(t) = -4.9t^2 + v_0 t + h_0
$$

**2. Approximating complex functions**

By Taylor's theorem, any smooth function can be approximated by a polynomial. This is foundational in numerical analysis and calculus.

**3. Encoding structure in algebra**

Factoring polynomials reveals roots, symmetry, and behavior — making them the primary tool for solving algebraic equations.

**4. Interpolation and curve fitting**

Given $n + 1$ data points, a unique polynomial of degree $\leq n$ passes through all of them (Lagrange interpolation).

**5. Foundation for higher algebra**

Polynomial rings $\mathbb{R}[x]$ are a central object in abstract algebra, analogous to the integers $\mathbb{Z}$ in many structural ways.

---

## Fundamental Properties

### Closure

The sum, difference, and product of two polynomials is always a polynomial. Polynomials are **closed** under $+$, $-$, and $\times$, but **not** under division (dividing two polynomials can produce a rational expression).

### Degree Rules

If $P(x)$ has degree $m$ and $Q(x)$ has degree $n$, then:

$$
\deg(P \pm Q) \leq \max(m, n)
$$

$$
\deg(P \cdot Q) = m + n
$$

### The Fundamental Theorem of Algebra

Every non-constant polynomial $P(x)$ of degree $n$ with complex coefficients has **exactly $n$ roots** in $\mathbb{C}$, counting multiplicity.

$$
P(x) = a_n(x - r_1)(x - r_2) \cdots (x - r_n)
$$

### The Remainder Theorem

When $P(x)$ is divided by $(x - c)$, the remainder is $P(c)$:

$$
P(x) = (x - c) \cdot Q(x) + P(c)
$$

### The Factor Theorem

$(x - c)$ is a factor of $P(x)$ **if and only if** $P(c) = 0$.

$$
P(c) = 0 \quad \Longleftrightarrow \quad (x - c) \mid P(x)
$$

### The Rational Root Theorem

If $P(x) = a_n x^n + \cdots + a_0$ has integer coefficients and a rational root $p/q$ (in lowest terms), then:

$$
p \mid a_0 \quad \text{and} \quad q \mid a_n
$$

### End Behavior

The end behavior of $P(x)$ is governed entirely by its **leading term** $a_n x^n$:

| $n$  | $a_n > 0$                               | $a_n < 0$                               |
| ---- | --------------------------------------- | --------------------------------------- |
| Even | Both ends $\to +\infty$                 | Both ends $\to -\infty$                 |
| Odd  | Left $\to -\infty$, Right $\to +\infty$ | Left $\to +\infty$, Right $\to -\infty$ |

---

## Types & Variations

### By Number of Terms

| Name           | Terms     | Example              |
| -------------- | --------- | -------------------- |
| **Monomial**   | 1         | $5x^3$               |
| **Binomial**   | 2         | $x^2 - 4$            |
| **Trinomial**  | 3         | $x^2 + 3x + 2$       |
| **Polynomial** | 4 or more | $x^3 - 2x^2 + x - 5$ |

---

### By Degree

| Degree | Name          | General Form           |
| ------ | ------------- | ---------------------- |
| $0$    | Constant      | $a$                    |
| $1$    | Linear        | $ax + b$               |
| $2$    | Quadratic     | $ax^2 + bx + c$        |
| $3$    | Cubic         | $ax^3 + bx^2 + cx + d$ |
| $4$    | Quartic       | $ax^4 + \cdots$        |
| $5$    | Quintic       | $ax^5 + \cdots$        |
| $n$    | $n$-th degree | $a_n x^n + \cdots$     |

---

### Special Polynomial Forms

**Difference of Squares:**

$$
a^2 - b^2 = (a + b)(a - b)
$$

**Sum of Squares** (does not factor over $\mathbb{R}$):

$$
a^2 + b^2 \quad \text{— irreducible over } \mathbb{R}
$$

**Perfect Square Trinomial:**

$$
a^2 + 2ab + b^2 = (a + b)^2
$$

$$
a^2 - 2ab + b^2 = (a - b)^2
$$

**Sum of Cubes:**

$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2)
$$

**Difference of Cubes:**

$$
a^3 - b^3 = (a - b)(a^2 + ab + b^2)
$$

---

### Multivariate Polynomials

Polynomials in more than one variable:

$$
P(x, y) = 3x^2 y + 2xy^2 - y + 5
$$

The **total degree** of a term is the sum of all its variable exponents, e.g., $3x^2 y$ has total degree $3$.

---

## How to Solve

### Addition & Subtraction

Combine **like terms** — terms sharing the same variable and exponent.

**Example:** $(3x^3 - 2x + 5) + (x^3 + 4x - 1)$

$$
= (3 + 1)x^3 + (-2 + 4)x + (5 - 1)
$$

$$
= 4x^3 + 2x + 4
$$

---

### Multiplication

Distribute every term of one polynomial across every term of the other.

**Example:** $(x + 3)(x^2 - 2x + 1)$

$$
= x(x^2 - 2x + 1) + 3(x^2 - 2x + 1)
$$

$$
= x^3 - 2x^2 + x + 3x^2 - 6x + 3
$$

$$
= x^3 + x^2 - 5x + 3
$$

**Special products (FOIL for binomials):**

$$
(a + b)(a - b) = a^2 - b^2
$$

$$
(a + b)^2 = a^2 + 2ab + b^2
$$

---

### Polynomial Long Division

Divides $P(x)$ by a divisor $D(x)$, yielding a quotient $Q(x)$ and remainder $R(x)$:

$$
\frac{P(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)}
$$

**Example:** Divide $x^3 - 2x^2 + 4$ by $x - 2$

$$
x^3 - 2x^2 + 0x + 4 \;\div\; (x - 2)
$$

Step 1: $x^3 \div x = x^2$; multiply: $x^2(x-2) = x^3 - 2x^2$; subtract — remainder $0x^2 + 0x + 4$

Step 2: $0 \div x = 0$; bring down — remainder $0x + 4$

Step 3: $0 \div x = 0$; remainder $= 4$

$$
\therefore \quad \frac{x^3 - 2x^2 + 4}{x - 2} = x^2 + \frac{4}{x-2}
$$

---

### Synthetic Division

A shorthand for dividing by a **linear factor** $(x - c)$. Write only the coefficients.

**Example:** Divide $2x^3 - 3x^2 + x - 5$ by $(x - 2)$, so $c = 2$

Coefficients: $2,\; -3,\; 1,\; -5$

$$
\begin{array}{r|rrrr}
2 & 2 & -3 & 1 & -5 \\
  &   &  4 & 2 &  6 \\
\hline
  & 2 &  1 & 3 &  1 \\
\end{array}
$$

$$
\therefore \quad 2x^3 - 3x^2 + x - 5 = (x - 2)(2x^2 + x + 3) + 1
$$

---

### Factoring

Rewriting a polynomial as a **product of lower-degree polynomials**.

**Step 1 — Factor out the GCF (Greatest Common Factor):**

$$
6x^3 + 9x^2 = 3x^2(2x + 3)
$$

**Step 2 — Recognize special forms:**

$$
x^2 - 16 = (x + 4)(x - 4)
$$

$$
x^2 + 6x + 9 = (x + 3)^2
$$

**Step 3 — Factor trinomials** $ax^2 + bx + c$:

Find two numbers that multiply to $ac$ and add to $b$, then split the middle term.

**Example:** Factor $2x^2 + 7x + 3$

$ac = 6$; find two numbers multiplying to $6$ and adding to $7$: $6$ and $1$.

$$
2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)
$$

**Step 4 — Factor by grouping** (for 4-term polynomials):

$$
x^3 + 2x^2 - 3x - 6 = x^2(x + 2) - 3(x + 2) = (x^2 - 3)(x + 2)
$$

---

### Finding Roots / Zeros

**Strategy chain:**

1. Apply the **Rational Root Theorem** to list candidates: $\pm \dfrac{p}{q}$ where $p \mid a_0$ and $q \mid a_n$
2. Test candidates using the **Factor Theorem** ($P(c) = 0$ means $(x - c)$ is a factor)
3. Use **synthetic division** to reduce the degree once a root is found
4. Repeat until the remaining factor is quadratic, then apply the **quadratic formula**

**Example:** Find all roots of $P(x) = x^3 - 6x^2 + 11x - 6$

Rational root candidates: $\pm 1, \pm 2, \pm 3, \pm 6$

Test $x = 1$: $1 - 6 + 11 - 6 = 0$ ✓

Divide by $(x - 1)$ via synthetic division:

$$
\begin{array}{r|rrrr}
1 & 1 & -6 & 11 & -6 \\
  &   &  1 & -5 &  6 \\
\hline
  & 1 & -5 &  6 &  0 \\
\end{array}
$$

Remaining factor: $x^2 - 5x + 6 = (x - 2)(x - 3)$

$$
\therefore \quad P(x) = (x - 1)(x - 2)(x - 3), \quad \text{roots: } x = 1, 2, 3
$$

---

### Evaluating Polynomials — Horner's Method

More efficient than direct substitution for large-degree polynomials. Rewrite $P(x)$ in nested form:

$$
P(x) = a_n x^n + \cdots + a_0 = (\cdots((a_n x + a_{n-1})x + a_{n-2})x + \cdots + a_0)
$$

**Example:** Evaluate $P(x) = 2x^3 - 3x^2 + x - 5$ at $x = 3$

$$
P(3) = ((2 \cdot 3 - 3) \cdot 3 + 1) \cdot 3 - 5 = (3 \cdot 3 + 1) \cdot 3 - 5 = 10 \cdot 3 - 5 = 25
$$

---

## Summary

### Operations — Quick Reference

| Operation              | Method                                                                          |
| ---------------------- | ------------------------------------------------------------------------------- |
| Addition / Subtraction | Combine like terms                                                              |
| Multiplication         | Distribute all terms; use special product identities                            |
| Division               | Long division or synthetic division (linear divisors only)                      |
| Factoring              | GCF → special forms → trinomial method → grouping                               |
| Root finding           | Rational Root Theorem → Factor Theorem → synthetic division → quadratic formula |
| Evaluation             | Direct substitution or Horner's method                                          |

### Key Theorems — Quick Reference

| Theorem                        | Statement                                                   |
| ------------------------------ | ----------------------------------------------------------- |
| Fundamental Theorem of Algebra | Degree-$n$ polynomial has exactly $n$ roots in $\mathbb{C}$ |
| Remainder Theorem              | Remainder of $P(x) \div (x-c)$ equals $P(c)$                |
| Factor Theorem                 | $(x - c)$ is a factor $\Longleftrightarrow$ $P(c) = 0$      |
| Rational Root Theorem          | Rational roots $p/q$ satisfy $p \mid a_0$ and $q \mid a_n$  |

### Special Factoring Identities — Quick Reference

| Form              | Factored                |
| ----------------- | ----------------------- |
| $a^2 - b^2$       | $(a+b)(a-b)$            |
| $a^2 + 2ab + b^2$ | $(a+b)^2$               |
| $a^2 - 2ab + b^2$ | $(a-b)^2$               |
| $a^3 + b^3$       | $(a+b)(a^2 - ab + b^2)$ |
| $a^3 - b^3$       | $(a-b)(a^2 + ab + b^2)$ |

**The golden rules to never forget:**

$$
\boxed{P(c) = 0 \quad \Longleftrightarrow \quad (x - c) \text{ is a factor of } P(x)}
$$

$$
\boxed{\deg(P \cdot Q) = \deg(P) + \deg(Q)}
$$

$$
\boxed{\text{Always factor out the GCF before applying any other factoring method}}
$$
