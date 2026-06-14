# Number Theory: Quadratic Residues

---

## 1. Definition

In number theory and modular algebra, a **quadratic residue** describes the structural condition under which a given integer possesses a valid square root within a specified modular arithmetic system. Essentially, a quadratic residue is the modular equivalent of a perfect square in standard arithmetic.

Formally, let $a$ be an arbitrary integer ($a \in \mathbb{Z}$), and let $m$ be a positive integer representing the modulus ($m \in \mathbb{Z}^{+}$). We define $a$ as a **quadratic residue** modulo $m$ if there exists an integer solution $x \in \mathbb{Z}$ that satisfies the second-degree polynomial congruence equation:

$$x^2 \equiv a \pmod m$$

If this congruence equation possesses at least one valid integer solution, $a$ is classified as a quadratic residue. Conversely, if no such integer $x$ exists anywhere within the system, $a$ is classified as a **quadratic non-residue** modulo $m$.

The formal mathematical definition can be summarized as:

$$\forall a \in \mathbb{Z}, \, \forall m \in \mathbb{Z}^{+}, \quad a \text{ is a quadratic residue} \pmod m \iff \exists x \in \mathbb{Z} \text{ such that } x^2 \equiv a \pmod m$$

By convention, when analyzing these relationships under an odd prime modulus $p$, integers that are perfectly divisible by $p$ ($a \equiv 0 \pmod p$) are excluded from these categories and treated as a distinct trivial case. This allows mathematicians to focus on the properties of coprime residues.

---

## 2. Key Terminology

To analyze the patterns, behaviors, and properties of second-degree modular equations, the following precise vocabulary definitions are required:

- **Quadratic Residue (QR):** An integer $a$ coprime to the modulus $m$ for which there exists an integer $x$ satisfying the equation $x^2 \equiv a \pmod m$.
- **Quadratic Non-Residue (QNR):** An integer $a$ coprime to the modulus $m$ for which no integer solution exists for the equation $x^2 \equiv a \pmod m$.
- **Legendre Symbol:** A mathematical function, denoted as $\left(\frac{a}{p}\right)$, used to track whether an integer $a$ is a quadratic residue modulo an odd prime $p$.
- **Jacobi Symbol:** A generalization of the Legendre symbol, written as $\left(\frac{a}{n}\right)$, that accommodates composite odd moduli by multiplying individual Legendre symbols together.
- **Euler's Criterion:** A foundational formula stating that for any odd prime $p$, the Legendre symbol can be evaluated using the exponent value $a^{(p-1)/2} \pmod p$.
- **Law of Quadratic Reciprocity:** A deep theorem establishing a clear symmetry between two distinct odd primes, showing how the solvability of $x^2 \equiv q \pmod p$ relates directly to the solvability of $y^2 \equiv p \pmod q$.
- **Primitive Root:** An integer whose sequential powers generate every non-zero remainder class modulo $m$. Quadratic residues match the even powers of a primitive root.

---

## 3. Purpose

Quadratic residues organize numbers into symmetric, repeating patterns. They serve as a foundational tool for evaluating polynomial equations, accelerating primality screening tests, and securing digital cryptographic assets.

### Evaluating Higher-Degree Diophantine Equations

In standard algebra, the quadratic formula ($x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$) is used to solve second-degree polynomial equations. When solving polynomial equations over integers or modular systems, determining whether the discriminant value ($b^2 - 4ac$) possesses a valid square root relies on the properties of quadratic residues. If the discriminant is a quadratic non-residue modulo $m$, the equation has zero valid integer coordinates.

### Accelerating Random Use-Case Primality Screening

Determining whether an incredibly large number is a prime or a composite is a core challenge in computer science. Quadratic residue laws provide a highly efficient screening mechanism. For example, the **Solovay-Strassen primality test** checks if an odd integer $n$ satisfies Euler's Criterion for a randomly selected base $a$. If the calculation values do not match, the system identifies $n$ as a composite number with absolute certainty.

### Real-World Cryptographic Applications

- **The Blum Blum Shub Random Bit Generator:** This cryptographically secure pseudo-random number generator produces random bits using a recursive quadratic formula ($x_{n+1} \equiv x_n^2 \pmod M$), where $M$ is a product of two large prime numbers. The algorithm's security relies on the **Quadratic Residuosity Problem**: determining whether a remainder is a quadratic residue modulo a composite number without knowing its prime factors is computationally infeasible for large numbers. This mathematical bottleneck protects the generated bitstream from predictive tampering.
- **The Goldwasser-Micali Encryption Protocol:** This asymmetric key encryption system encrypts data bit-by-bit by representing a 0 as a random quadratic residue and a 1 as a random quadratic non-residue. Decrypting the ciphertext requires evaluating the residuosity of each block using the secret prime factors of the master modulus.
- **Zero-Knowledge Proofs (Fiat-Shamir Identification Scheme):** Secure identity portals use the symmetries of quadratic residues to verify user credentials. This framework allows a prover to demonstrate possession of a secret key to a verification server without ever transmitting the key itself across the network.

---

## 4. Fundamental Properties

Quadratic residues follow strict algebraic laws that govern solution distribution, multiplication parity, and prime modular symmetries.

### Balanced Residue Distribution Modulo Odd Primes

For any odd prime modulus $p$, the complete set of non-zero remainders $\{1, 2, 3, \dots, p-1\}$ is always split evenly. Exactly half of these integers are quadratic residues ($\frac{p-1}{2}$ elements), and the remaining half are quadratic non-residues.

We can see this distribution pattern by squaring every element in the remainder set. According to modular properties, symmetric elements yield identical squares:

$$x^2 \equiv (-x)^2 \equiv (p - x)^2 \pmod p$$

This matching behavior shows that every valid quadratic residue modulo an odd prime has exactly **two unique square roots** within the primary remainder range.

### Multiplication Parity Symmetries

The interactions between quadratic residues and non-residues under multiplication follow the exact same structural laws as multiplying positive and negative signs in standard arithmetic:

- **Residue $\cdot$ Residue $\equiv$ Residue** (Positive $\cdot$ Positive = Positive)
- **Residue $\cdot$ Non-Residue $\equiv$ Non-Residue** (Positive $\cdot$ Negative = Negative)
- **Non-Residue $\cdot$ Non-Residue $\equiv$ Residue** (Negative $\cdot$ Negative = Positive)

### Definition and Outputs of the Legendre Symbol

The **Legendre Symbol** is an arithmetic function that tracks the quadratic classification of an integer $a$ modulo an odd prime $p$. It is defined as:

$$
\left(\frac{a}{p}\right) = \begin{cases}
1 & \text{if } a \text{ is a quadratic residue modulo } p \text{ and } a \not\equiv 0 \pmod p \\
-1 & \text{if } a \text{ is a quadratic non-residue modulo } p \\
0 & \text{if } a \equiv 0 \pmod p
\end{cases}
$$

### Evaluating Residual Behavior via Euler's Criterion

**Euler's Criterion** provides a direct formulaic path to calculate the value of the Legendre symbol by raising the target integer to the power of $\frac{p-1}{2}$:

$$\left(\frac{a}{p}\right) \equiv a^{\frac{p-1}{2}} \pmod p$$

### Core Properties of Residuosity Functions

The following table summarizes the primary algebraic properties used to simplify and evaluate Legendre symbols.

| Property Identity Name          | Formulaic Identity Expression                                                         | Operational Prerequisite                     | Strategic Mathematical Value                   |
| :------------------------------ | :------------------------------------------------------------------------------------ | :------------------------------------------- | :--------------------------------------------- |
| **Periodic Mapping**            | If $a \equiv b \pmod p \implies \left(\frac{a}{p}\right) = \left(\frac{b}{p}\right)$  | Valid for any odd prime $p$                  | Reduces large target bases instantly           |
| **Multiplicative Rule**         | $\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right) \cdot \left(\frac{b}{p}\right)$ | Valid for all integers $a, b \in \mathbb{Z}$ | Splits complex products into individual terms  |
| **Square Cancellation**         | $\left(\frac{a^2}{p}\right) = 1$                                                      | Requires that $\gcd(a, p) = 1$               | Removes perfect square factors from the symbol |
| **The Prime Negative Identity** | $\left(\frac{-1}{p}\right) = (-1)^{\frac{p-1}{2}}$                                    | Evaluates based on $p \pmod 4$               | Determines if $-1$ has a valid square root     |
| **The Prime Two Identity**      | $\left(\frac{2}{p}\right) = (-1)^{\frac{p^2-1}{8}}$                                   | Evaluates based on $p \pmod 8$               | Determines if $2$ has a valid square root      |

---

## 5. Types & Variations

Quadratic residue laws can be extended from single odd primes to accommodate composite odd moduli, cyclic loops, and reciprocal prime pairings.

### 1. The Jacobi Symbol

The **Jacobi Symbol** generalizes the Legendre symbol to work with any odd composite modulus. Let $n$ be an odd positive integer with the prime factorization $n = p_1^{e_1} \cdot p_2^{e_2} \dots p_k^{e_k}$. The Jacobi symbol $\left(\frac{a}{n}\right)$ is defined as the product of the individual Legendre symbols for each prime factor:

$$\left(\frac{a}{n}\right) = \prod_{i=1}^{k} \left(\frac{a}{p_i}\right)^{e_i} = \left(\frac{a}{p_1}\right)^{e_1} \cdot \left(\frac{a}{p_2}\right)^{e_2} \dots \left(\frac{a}{p_k}\right)^{e_k}$$

> **Critical Logical Guardrail:** If the Jacobi symbol returns a value of $-1$, the integer $a$ is guaranteed to be a quadratic non-residue modulo $n$. However, if the Jacobi symbol returns a value of $1$, it **does not guarantee** that $a$ is a quadratic residue. For example, if $\left(\frac{a}{p_1}\right) = -1$ and $\left(\frac{a}{p_2}\right) = -1$, the Jacobi product is $(-1) \cdot (-1) = 1$, but $a$ has no valid square root modulo $n$ because it lacks a square root modulo the individual prime components.

### 2. The Law of Quadratic Reciprocity

The **Law of Quadratic Reciprocity** is a deep, foundational theorem that connects the residuosity properties of two distinct odd prime numbers, $p$ and $q$. The law states:

$$\left(\frac{p}{q}\right) \cdot \left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}$$

This formula shows that the two Legendre symbols are identical unless both primes are congruent to 3 modulo 4 ($p \equiv q \equiv 3 \pmod 4$). If that specific condition is met, the exponent term becomes odd, and the symbols will have opposite signs ($\left(\frac{p}{q}\right) = -\left(\frac{q}{p}\right)$). This relationship allows mathematicians to flip Legendre symbols upside down, making it much easier to evaluate complex equations.

---

## 6. How to Solve

Here we explore step-by-step methodologies for generating residue sets, evaluating complex symbols using Quadratic Reciprocity, and calculating modular square roots via the Tonelli-Shanks algorithm.

### Strategy A: Generating the Complete Quadratic Residue Set for a Modulus

To find all quadratic residues for a given modulus, we square each integer in the remainder range, reduce the results modulo $m$, and collect the unique outputs.

**Example Question:** Find the complete set of quadratic residues and non-residues modulo $m = 11$.

1. **List the non-zero remainder range:**
   The set of non-zero elements is: $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$.

2. **Square each element and reduce the result modulo 11:**
   - $1^2 = 1 \equiv 1 \pmod{11}$
   - $2^2 = 4 \equiv 4 \pmod{11}$
   - $3^2 = 9 \equiv 9 \pmod{11}$
   - $4^2 = 16 = 11 \cdot 1 + 5 \equiv 5 \pmod{11}$
   - $5^2 = 25 = 11 \cdot 2 + 3 \equiv 3 \pmod{11}$
   - $6^2 = 36 = 11 \cdot 3 + 3 \equiv 3 \pmod{11}$
   - $7^2 = 49 = 11 \cdot 4 + 5 \equiv 5 \pmod{11}$
   - $8^2 = 64 = 11 \cdot 5 + 9 \equiv 9 \pmod{11}$
   - $9^2 = 81 = 11 \cdot 7 + 4 \equiv 4 \pmod{11}$
   - $10^2 = 100 = 11 \cdot 9 + 1 \equiv 1 \pmod{11}$

3. **Collect the unique values to define the residue sets:**
   - **Quadratic Residues (QR):** The unique squared outputs are $QR = \{1, 3, 4, 5, 9\}$.
   - **Quadratic Non-Residues (QNR):** The remaining numbers in the range form the non-residue set: $QNR = \{2, 6, 7, 8, 10\}$.

Notice the balance: exactly half of the 10 non-zero elements are residues, and half are non-residues.

### Strategy B: Evaluating Complex Symbols via Quadratic Reciprocity

By combining periodic mapping, the multiplicative rule, and the Law of Quadratic Reciprocity, we can evaluate complex Legendre and Jacobi symbols efficiently.

**Example Question:** Determine if the congruence equation $x^2 \equiv 219 \pmod{383}$ has a valid integer solution by evaluating the Legendre symbol $\left(\frac{219}{383}\right)$. (Note: 383 is prime).

1. **Factor the base integer into its prime components:**
   $$219 = 3 \cdot 73$$

2. **Apply the multiplicative property to split the symbol apart:**
   $$\left(\frac{219}{383}\right) = \left(\frac{3}{383}\right) \cdot \left(\frac{73}{383}\right)$$

3. **Evaluate the first component symbol ($\left(\frac{3}{383}\right)$) using Quadratic Reciprocity:**
   Check the values of the primes modulo 4: $3 \equiv 3 \pmod 4$ and $383 \equiv 3 \pmod 4$. Since both are congruent to 3 modulo 4, flipping the symbol changes its sign:
   $$\left(\frac{3}{383}\right) = -\left(\frac{383}{3}\right)$$
   Reduce the base 383 modulo 3 ($383 = 3 \cdot 127 + 2 \implies 383 \equiv 2 \pmod 3$):
   $$-\left(\frac{383}{3}\right) = -\left(\frac{2}{3}\right)$$
   Apply the Prime Two Identity to $\left(\frac{2}{3}\right)$, or evaluate it directly ($1^2 \equiv 1, 2^2 \equiv 1 \pmod 3 \implies 2$ is a non-residue, so its symbol is $-1$):
   $$\left(\frac{3}{383}\right) = -(-1) = 1$$

4. **Evaluate the second component symbol ($\left(\frac{73}{383}\right)$) using Quadratic Reciprocity:**
   Check the primes modulo 4: $73 \equiv 1 \pmod 4$ and $383 \equiv 3 \pmod 4$. Since both are not congruent to 3 modulo 4, flipping the symbol preserves its sign:
   $$\left(\frac{73}{383}\right) = \left(\frac{383}{73}\right)$$
   Reduce the base 383 modulo 73 ($383 = 73 \cdot 5 + 18 \implies 383 \equiv 18 \pmod{73}$):
   $$\left(\frac{383}{73}\right) = \left(\frac{18}{73}\right)$$
   Factor the new base integer ($18 = 2 \cdot 3^2 = 2 \cdot 9$):
   $$\left(\frac{18}{73}\right) = \left(\frac{2}{73}\right) \cdot \left(\frac{9}{73}\right) = \left(\frac{2}{73}\right) \cdot 1 = \left(\frac{2}{73}\right)$$
   Apply the Prime Two Identity formula based on $73 \pmod 8$:
   $$73 = 8 \cdot 9 + 1 \implies 73 \equiv 1 \pmod 8$$
   The Prime Two Identity states that $\left(\frac{2}{73}\right) = 1$ if the modulus is congruent to 1 or 7 modulo 8. Therefore:
   $$\left(\frac{73}{383}\right) = 1$$

5. **Multiply the component values together to find the final result:**
   $$\left(\frac{219}{383}\right) = \left(\frac{3}{383}\right) \cdot \left(\frac{73}{383}\right) = 1 \cdot 1 = 1$$

Since the Legendre symbol evaluates to 1, the integer 219 is a quadratic residue modulo 383, confirming that the congruence equation $x^2 \equiv 219 \pmod{383}$ has a valid integer solution.

### Strategy C: Finding Square Roots Modulo Primes Congruent to 3 Modulo 4

If a quadratic residue $a$ exists modulo an odd prime where $p \equiv 3 \pmod 4$, we can calculate its square roots directly using a simplified version of the Tonelli-Shanks algorithm.

**Example Question:** Find the two valid integer roots for the equation $x^2 \equiv 5 \pmod{11}$.

1. **Verify the structural prerequisites:**
   The modulus $p = 11$ is prime, and $11 \equiv 3 \pmod 4$. The base $a = 5$ is a valid quadratic residue, as shown in Strategy A. The prerequisites are met.

2. **Apply the direct root calculation formula:**
   When $p \equiv 3 \pmod 4$, the primary root can be calculated using the formula:
   $$R \equiv a^{\frac{p+1}{4}} \pmod p$$
   Substitute our values into the formula:
   $$R \equiv 5^{\frac{11+1}{4}} = 5^{\frac{12}{4}} = 5^3 \pmod{11}$$

3. **Evaluate and reduce the expression:**
   Calculate the small power value:
   $$5^3 = 125$$
   Reduce 125 modulo 11 to find the primary root:
   $$125 = 11 \cdot 11 + 4 \implies 125 \equiv 4 \pmod{11}$$
   The primary square root is $x_1 = 4$.

4. **Calculate the symmetric secondary square root:**
   The secondary root is the modular negative of the primary root:
   $$x_2 = p - x_1 = 11 - 4 = 7$$

5. **State the complete solution set:**
   The two valid square roots are:
   $$x \in \{4, 7\} \pmod{11}$$
   We can double-check this answer by squaring both roots: $4^2 = 16 \equiv 5 \pmod{11}$ and $7^2 = 49 \equiv 5 \pmod{11}$.

---

## 7. Summary

- **Modular Perfect Squares:** A quadratic residue is an integer that possesses a valid square root within a given modular system ($x^2 \equiv a \pmod m$). If no such integer solution exists, it is called a quadratic non-residue.
- **Balanced Distribution:** For any odd prime modulus, the non-zero remainders are always split evenly: half are quadratic residues, and half are quadratic non-residues. Each valid residue has exactly two unique square roots.
- **Algorithmic Evaluation:** Euler's Criterion ($a^{(p-1)/2} \pmod p$) provides a direct formulaic path to calculate the value of the Legendre symbol, confirming whether an integer is a quadratic residue.
- **Reciprocal Symmetry Dynamics:** The Law of Quadratic Reciprocity establishes a powerful symmetry between two distinct odd primes, allowing you to invert Legendre symbols to simplify complex equations.
- **Cryptographic Value:** The asymmetric difficulty of determining whether a number is a quadratic residue modulo a large composite without knowing its prime factors provides the mathematical security that protects modern random number generators and encryption protocols.
