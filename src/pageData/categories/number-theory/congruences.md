# Number Theory: Congruences

---

## 1. Definition

In the branch of mathematics known as Number Theory, a **congruence** is an algebraic statement describing how integers share structural equivalence relation properties based on their remainders when divided by a fixed non-zero integer. Introduced systematically by Carl Friedrich Gauss in 1801, the congruence framework replaces simple division leftovers with a robust arithmetic language, allowing mathematicians to study infinite families of integers simultaneously.

Formally, let $a$ and $b$ be two arbitrary integers ($a, b \in \mathbb{Z}$), and let $m$ be a positive integer known as the **modulus** ($m \in \mathbb{Z}^{+}$). We state that $a$ is **congruent to** $b$ **modulo** $m$ if the difference between the two numbers ($a - b$) is perfectly divisible by the modulus $m$. This relationship is indicated by the three-lined congruence symbol:

$$a \equiv b \pmod m$$

This equivalence relation can be written identically using any of the following foundational algebraic expressions:

1. **Divisibility Criterion:** The modulus $m$ divides the internal difference value evenly:
   $$m \mid (a - b)$$
2. **Parametric Form:** There exists an independent integer multiplier $k \in \mathbb{Z}$ that balances the difference:
   $$a - b = k \cdot m \implies a = b + k \cdot m$$
3. **Remainder Criterion:** When subjected to the standard division algorithm by the divisor $m$, both $a$ and $b$ yield identical non-negative remainder outputs ($r_a = r_b$).

The formal logic can be summarized as:

$$\forall a, b \in \mathbb{Z}, \, \forall m \in \mathbb{Z}^{+}, \quad a \equiv b \pmod m \iff \exists k \in \mathbb{Z} \text{ such that } a = b + k \cdot m$$

If the modulus $m$ does not divide the difference of the two numbers evenly, the integers are said to be incongruent, which is written as $a \not\equiv b \pmod m$.

---

## 2. Key Terminology

To analyze the behaviors, patterns, and tracking systems of congruences, the following precise vocabulary definitions are required:

- **Modulus ($m$):** The fixed positive integer divisor that defines the wrap-around boundary of the congruence relation system.
- **Congruence Class / Residue Class:** The infinite set containing all integers that are congruent to one another modulo $m$. The complete residue class of a number $a$ is denoted by $\bar{a}$ or $[a]$:
  $$[a] = \{ a + k \cdot m \mid k \in \mathbb{Z} \}$$
- **Complete Residue System:** A set of exactly $m$ integers chosen such that every individual integer in the universe belongs to exactly one residue class within the set. The most common choice is the standard set of remainders: $\{0, 1, 2, \dots, m - 1\}$.
- **Reduced Residue System:** A specific subset of a complete residue system containing only the elements that are relatively prime to the modulus $m$ ($\gcd(a, m) = 1$).
- **Linear Congruence:** An algebraic equation of the form $ax \equiv b \pmod m$, where $x$ represents an unknown integer variable.
- **Modular Multiplicative Inverse:** An integer solution value $x$ that satisfies the unit balance statement $ax \equiv 1 \pmod m$. The unique inverse is denoted as $a^{-1}$ or $x \equiv a^{-1} \pmod m$.
- **Coprime / Relatively Prime:** A structural condition where two integers share no common positive factors other than 1, meaning their greatest common divisor is exactly 1 ($\gcd(a, m) = 1$).

---

## 3. Purpose

Congruences simplify arithmetic operations by organizing integers into predictable, repeating patterns. They serve as a foundational tool for mathematical proofs, computer programming, and digital cryptography.

### Abstracting and Simplifying Large-Scale Arithmetic

When working with very large numbers, computing raw exponential equations can cause arithmetic overflow errors on modern computer hardware. Congruences allow mathematicians and software developers to isolate and compute remainders at every intermediate step of multiplication, addition, or subtraction. This makes it possible to evaluate massive numbers and verify trailing digits without ever calculating the full value of a giant exponent.

### Structuring Computer Systems and Array Sorting

Modern computer systems use congruence logic to manage memory address layouts, parallel processing networks, and index loops.

- **Hash Functions:** Databases apply congruence algorithms to convert random input keys into fixed, predictable index numbers within storage arrays.
- **Data Verification Checksums:** International bank accounts (IBAN), credit card strings (Luhn Algorithm), and standard package barcodes use check digits computed via linear congruences to instantly identify and flag input errors.

### Real-World Technological Applications

- **Public Key Cryptography (RSA & Diffie-Hellman):** Modern network security protocols protect global finance and messaging networks using keys built on the properties of congruences. The security of these systems relies on the **Discrete Logarithm Problem**: while calculating a modular exponent ($a^x \equiv b \pmod m$) is nearly instantaneous, reversing the calculation—finding the exponent $x$ when given the base, result, and modulus—is practically impossible for large numbers without the secret decryption key.
- **Pseudo-Random Number Generation:** Linear Congruential Generators (LCG) use a recursive congruence formula ($X_{n+1} \equiv (aX_n + c) \pmod m$) to generate streams of pseudo-random numbers used in simulation software and video game engine logic.

---

## 4. Fundamental Properties

Congruences follow strict algebraic axioms that mirror standard equations, creating an equivalence relation that preserves addition, subtraction, and multiplication.

### The Equivalence Relation Axioms

For any fixed positive modulus $m \in \mathbb{Z}^{+}$, the congruence relation satisfies the three foundational structural axioms of an equivalence relation across all integers $a, b, c \in \mathbb{Z}$:

- **Reflexivity:** Any integer is automatically congruent to itself under any modulus:
  $$a \equiv a \pmod m$$
- **Symmetry:** If a first integer is congruent to a second, then the second integer is also congruent to the first:
  $$\text{If } a \equiv b \pmod m, \quad \text{then } b \equiv a \pmod m$$
- **Transitivity:** If an integer matches a second number, and that second number matches a third, the first integer is congruent to the third number:
  $$\text{If } a \equiv b \pmod m \quad \text{and} \quad b \equiv c \pmod m, \quad \text{then } a \equiv c \pmod m$$

### Preservation of Operations

Let $a, b, c, d \in \mathbb{Z}$ and $m \in \mathbb{Z}^{+}$. If $a \equiv b \pmod m$ and $c \equiv d \pmod m$, then the following algebraic laws apply:

- **Linear Addition:**
  $$a + c \equiv b + d \pmod m$$
- **Linear Subtraction:**
  $$a - c \equiv b - d \pmod m$$
- **Multiplication Scaling:**
  $$a \cdot c \equiv b \cdot d \pmod m$$
- **Exponential Scaling:** For any positive integer exponent value $k \in \mathbb{Z}^{+}$:
  $$a^k \equiv b^k \pmod m$$

### Factor Cancellation Restrictions

In standard algebra, if $ac = bc$ and $c \neq 0$, you can cancel the $c$ terms to get $a = b$. In the language of congruences, this operation is highly restricted. You can only cancel a shared factor if it is relatively prime to the modulus:

$$\text{If } ac \equiv bc \pmod m \quad \text{and} \quad \gcd(c, m) = 1, \quad \text{then } a \equiv b \pmod m$$

If the shared factor and the modulus have a common divisor greater than 1, you can still cancel the factor, but the modulus must be divided by that common divisor:

$$\text{If } ac \equiv bc \pmod m \quad \text{and} \quad \gcd(c, m) = d, \quad \text{then } a \equiv b \pmod{\frac{m}{d}}$$

---

## 5. Types & Variations

Congruences can be adapted to analyze structural behaviors across linear equations, multi-equation systems, and higher-degree exponential variations.

### Core Mathematical Theorems of Congruence Domains

The following table summarizes the primary foundational theorems used to simplify and solve complex congruence equations.

| Theorem Identity Name         | Primary Mathematical Identity  | Prerequisite Constraint            | Operational Significance                                        |
| :---------------------------- | :----------------------------- | :--------------------------------- | :-------------------------------------------------------------- |
| **Fermat's Little Theorem**   | $a^p \equiv a \pmod p$         | Modulus $p$ must be a prime number | Simplifies high-degree exponential powers over prime systems    |
| **Euler's Generalization**    | $a^{\phi(m)} \equiv 1 \pmod m$ | Requires that $\gcd(a, m) = 1$     | Extends exponential reduction to composite modular systems      |
| **Chinese Remainder Theorem** | $x \equiv a_i \pmod{m_i}$      | Moduli must be pairwise coprime    | Combines multi-equation systems into a single unique solution   |
| **Wilson's Theorem**          | $(p - 1)! \equiv -1 \pmod p$   | Modulus $p$ must be a prime number | Establishes a classic theoretical test for primality validation |

### 1. Linear Congruences

A linear congruence is a single-variable equation of the first degree, written as:

$$ax \equiv b \pmod m$$

A linear congruence has a valid integer solution if and only if the greatest common divisor of the coefficient $a$ and the modulus $m$ perfectly divides the constant term $b$:

$$\text{Solvability Criterion:} \quad \gcd(a, m) \mid b$$

If this divisibility condition is met, the equation has exactly $d = \gcd(a, m)$ unique solutions within the primary range of remainders $\{0, 1, 2, \dots, m - 1\}$.

### 2. Simultaneous Linear Congruence Systems

When a single unknown variable must satisfy multiple congruence conditions at the same time under different moduli, it forms a simultaneous system:

$$x \equiv a_1 \pmod{m_1}, \quad x \equiv a_2 \pmod{m_2}, \quad \dots, \quad x \equiv a_n \pmod{m_n}$$

The **Chinese Remainder Theorem (CRT)** guarantees that if all individual moduli are pairwise coprime ($\gcd(m_i, m_j) = 1$ for all $i \neq j$), this system has a unique solution modulo the product of all the moduli ($M = m_1 \cdot m_2 \dots m_n$).

### 3. Quadratic Congruences

Higher-degree congruences include quadratic forms, which introduce polynomial variables raised to the second power:

$$x^2 \equiv a \pmod m$$

If a solution to this equation exists, the constant $a$ is classified as a **quadratic residue** modulo $m$. If no solution exists, it is called a quadratic non-residue. When the modulus is an odd prime $p$, mathematicians use the **Legendre Symbol** $\left(\frac{a}{p}\right)$ to evaluate these equations and determine whether a quadratic solution path exists.

---

## 6. How to Solve

Here we explore step-by-step methodologies for solving single linear congruences, evaluating multi-equation systems using the Chinese Remainder Theorem, and reducing complex exponents using Fermat's Little Theorem.

### Strategy A: Solving a Single Linear Congruence Equation

To solve a linear congruence $ax \equiv b \pmod m$, we first check its solvability using the greatest common divisor, then find the modular inverse of the coefficient.

**Example Question:** Find all unique integer solutions for $x$ that satisfy the linear congruence equation $9x \equiv 12 \pmod{15}$.

1. **Calculate the $\gcd$ of the coefficient and the modulus to check solvability:**
   Find the greatest common divisor of $a = 9$ and $m = 15$:
   $$\gcd(9, 15) = 3$$
   Now check if this $\gcd$ divides the target constant $b = 12$:
   $$12 \div 3 = 4 \implies 3 \mid 12$$
   Because 3 divides 12, the equation is solvable. The $\gcd$ also tells us that there are exactly **3 unique solutions** within the primary remainder range $[0, 14]$.

2. **Simplify the congruence by dividing all terms by the common factor:**
   $$\frac{9x}{3} \equiv \frac{12}{3} \pmod{\frac{15}{3}}$$
   $$3x \equiv 4 \pmod 5$$

3. **Find the modular multiplicative inverse of the new coefficient:**
   We need an inverse value for 3 modulo 5 ($3^{-1} \pmod 5$). We can find this by testing values in the remainder range $\{0, 1, 2, 3, 4\}$ until we find a number that satisfies $3 \cdot x \equiv 1 \pmod 5$:
   - $3 \cdot 0 = 0 \not\equiv 1$
   - $3 \cdot 1 = 3 \not\equiv 1$
   - $3 \cdot 2 = 6 \equiv 1 \pmod 5$

   The modular inverse of 3 modulo 5 is exactly 2.

4. **Multiply both sides of the simplified congruence by this inverse:**
   $$2 \cdot (3x) \equiv 2 \cdot 4 \pmod 5$$
   $$1x \equiv 8 \pmod 5$$
   Reduce 8 modulo 5 to find the primary base solution:
   $$x_0 \equiv 3 \pmod 5$$

5. **Generate the remaining unique solutions for the original modulus ($m=15$):**
   Find the remaining solutions by repeatedly adding the new simplified modulus ($\frac{m}{d} = 5$) to the base solution, up to the original limit of 15:
   - $x_0 = 3$
   - $x_1 = 3 + 5 = 8$
   - $x_2 = 3 + 5 + 5 = 13$

6. **State the complete solution set:**
   The set of unique solutions modulo 15 is:
   $$x \in \{3, 8, 13\} \pmod{15}$$

### Strategy B: Solving a Multi-Equation System via the Chinese Remainder Theorem

To solve a system of simultaneous congruences under pairwise coprime moduli, we use the constructive formula provided by the Chinese Remainder Theorem.

**Example Question:** Solve the simultaneous linear congruence system for the unique shared variable $x$:
$$x \equiv 2 \pmod 3, \quad x \equiv 3 \pmod 5, \quad x \equiv 2 \pmod 7$$

1. **Verify that the moduli are pairwise coprime and calculate the total product modulus:**
   Check the relationships between the moduli: $\gcd(3, 5) = 1$, $\gcd(3, 7) = 1$, and $\gcd(5, 7) = 1$.
   The moduli are pairwise coprime, so the Chinese Remainder Theorem applies. Calculate the total product modulus $M$:
   $$M = 3 \cdot 5 \cdot 7 = 105$$

2. **Calculate the partial product coefficients ($M_i$) for each individual equation:**
   Divide the total product modulus by each individual modulus:
   - $M_1 = \frac{105}{3} = 35$
   - $M_2 = \frac{105}{5} = 21$
   - $M_3 = \frac{105}{7} = 15$

3. **Calculate the modular inverse ($y_i$) for each partial product coefficient:**
   Find the inverse of each $M_i$ modulo its corresponding original individual modulus $m_i$:
   - For $M_1$: $35y_1 \equiv 1 \pmod 3 \implies 2y_1 \equiv 1 \pmod 3 \implies y_1 = 2$
   - For $M_2$: $21y_2 \equiv 1 \pmod 5 \implies 1y_2 \equiv 1 \pmod 5 \implies y_2 = 1$
   - For $M_3$: $15y_3 \equiv 1 \pmod 7 \implies 1y_3 \equiv 1 \pmod 7 \implies y_3 = 1$

4. **Assemble the final solution using the constructive sum formula:**
   Combine the target remainders ($a_i$), the partial products ($M_i$), and their inverses ($y_i$):
   $$x \equiv a_1M_1y_1 + a_2M_2y_2 + a_3M_3y_3 \pmod M$$
   $$x \equiv (2 \cdot 35 \cdot 2) + (3 \cdot 21 \cdot 1) + (2 \cdot 15 \cdot 1) \pmod{105}$$
   Calculate the total sum:
   $$x \equiv 140 + 63 + 30 = 233 \pmod{105}$$

5. **Reduce the sum to its least non-negative residue modulo 105:**
   $$233 = 2 \cdot 105 + 23$$
   $$x \equiv 23 \pmod{105}$$

The shared solution to the congruence system is exactly $x = 23$. We can double-check this answer by verifying that 23 satisfies all three original equations: $23 \equiv 2 \pmod 3$, $23 \equiv 3 \pmod 5$, and $23 \equiv 2 \pmod 7$.

### Strategy C: Reducing Large Exponential Powers via Fermat's Little Theorem

When evaluating a high-degree modular exponent $a^b \pmod p$ where the modulus is a prime number, you can use Fermat's Little Theorem to simplify the calculation.

**Example Question:** Calculate the least non-negative residue of $2^{84} \pmod{17}$.

1. **Identify the core conditions and verify the prime modulus constraint:**
   The base is $a = 2$ and the modulus is $p = 17$. Since 17 is a prime number and does not divide 2 ($\gcd(2, 17) = 1$), Fermat's Little Theorem applies.

2. **State the baseline identity established by Fermat's Little Theorem:**
   The theorem states that raising the base to the power of $p - 1$ yields a remainder of 1:
   $$a^{p-1} \equiv 1 \pmod p \implies 2^{16} \equiv 1 \pmod{17}$$

3. **Break down the large target exponent using division by this power period:**
   Divide the target exponent 84 by the period 16 to find the quotient and remainder:
   $$84 = 16 \cdot 5 + 4$$

4. **Rewrite the exponential expression using the rules of exponents:**
   $$2^{84} = 2^{16 \cdot 5 + 4} = (2^{16})^5 \cdot 2^4$$

5. **Substitute the Fermat identity value into the equation:**
   Replace the $2^{16}$ term with its modular equivalent, 1:
   $$2^{84} \equiv (1)^5 \cdot 2^4 \pmod{17}$$
   $$2^{84} \equiv 1 \cdot 2^4 = 2^4 \pmod{17}$$

6. **Evaluate the remaining simplified expression:**
   Calculate the final small power:
   $$2^4 = 16$$
   Since 16 is already within the valid remainder range $[0, 16]$, the calculation is complete:
   $$2^{84} \equiv 16 \pmod{17}$$

The large exponential power is successfully reduced.

---

## 7. Summary

- **Foundational Equivalence:** A congruence is an algebraic statement showing that two integers share the exact same remainder relative to a fixed positive divisor called the modulus ($a \equiv b \pmod m \iff m \mid (a - b)$).
- **Operational Preservation:** Congruence relations form a robust equivalence system that allows you to add, subtract, and multiply terms freely across the equivalence sign while preserving balance.
- **Cancellation Constraints:** Standard division cannot be applied directly to congruences. Common factors can only be cancelled if they are relatively prime to the modulus ($\gcd(c, m) = 1$).
- **Solvability Boundary:** A linear congruence $ax \equiv b \pmod m$ can be solved if and only if the greatest common divisor of the coefficient and the modulus divides the constant term ($\gcd(a, m) \mid b$).
- **System Resolution:** The Chinese Remainder Theorem shows that a system of simultaneous linear congruences under pairwise coprime moduli can always be combined into a single, unique solution modulo the product of all those moduli.
