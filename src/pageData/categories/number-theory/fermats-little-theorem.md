# Number Theory: Fermat's Little Theorem

---

## 1. Definition

In number theory, **Fermat's Little Theorem** (often abbreviated as FLT) is a fundamental theorem concerning the properties of prime numbers under modular exponentiation. First stated by Pierre de Fermat in a letter dated October 18, 1640, the theorem describes a key property of prime numbers within modular systems, serving as a cornerstone for modern cryptography and abstract algebra.

The theorem can be stated in two distinct but mathematically equivalent formulations depending on whether the base variable is required to be coprime to the prime modulus.

### Primality Formulation (General Form)

Let $p$ be a positive prime number ($p \in \mathbb{P}$), and let $a$ be any arbitrary integer ($a \in \mathbb{Z}$). Fermat's Little Theorem states that raising the integer $a$ to the power of $p$ results in a value that is congruent to $a$ modulo $p$:

$$a^p \equiv a \pmod p$$

### Coprimality Formulation (Reduced Form)

If we add the constraint that the integer $a$ is not divisible by the prime $p$ (which means they are relatively prime, or $\gcd(a, p) = 1$), we can divide both sides of the general congruence equation by $a$. This yields the reduced form of the theorem:

$$a^{p-1} \equiv 1 \pmod p$$

This reduced form shows that if you raise any coprime integer to the power of $p-1$, the resulting remainder modulo $p$ is always exactly 1.

The formal mathematical definition can be summarized as:

$$\forall p \in \mathbb{P}, \, \forall a \in \mathbb{Z}, \quad a^p \equiv a \pmod p \quad \text{and} \quad \left(\text{if } \gcd(a, p) = 1 \implies a^{p-1} \equiv 1 \pmod p\right)$$

---

## 2. Key Terminology

To analyze the structural traits, proofs, and applications of Fermat's Little Theorem, the following precise vocabulary definitions are required:

- **Prime Number ($p$):** An integer greater than 1 whose only positive divisors are 1 and itself.
- **Congruence:** An equivalence relation between two integers stating that they share the same remainder relative to a given modulus ($a \equiv b \pmod p$).
- **Modular Exponentiation:** The process of raising an integer to an arithmetic power inside a modular system ($a^b \pmod p$).
- **Coprime / Relatively Prime ($\gcd(a, p) = 1$):** A relationship between two integers where they share no common positive factors other than 1.
- **Modular Multiplicative Inverse:** An integer solution $x$ that satisfies the equation $ax \equiv 1 \pmod p$. According to the theorem, $a^{p-2}$ acts as the inverse of $a$ modulo $p$.
- **Euler's Totient Function ($\phi(n)$):** A function that counts the positive integers up to $n$ that are relatively prime to $n$. For a prime number, $\phi(p) = p - 1$.
- **Pseudoprime:** A composite integer that passes certain primality tests, mimicking the behavior of prime numbers under Fermat's Little Theorem.
- **Carmichael Number:** A composite integer $n$ that satisfies the congruence $a^{n-1} \equiv 1 \pmod n$ for all integers $a$ that are relatively prime to $n$.

---

## 3. Purpose

Fermat's Little Theorem simplifies exponential calculations over large prime systems and provides the foundation for digital identity verification.

### Reducing Large Exponential Calculations

Calculating large exponential powers directly—such as $5^{2000}$—is computationally slow and creates massive numbers. Fermat's Little Theorem simplifies this by showing that remainders repeat in predictable cycles modulo a prime number. By dividing the large exponent by $p-1$, mathematicians and computers can reduce massive numbers into small, easily manageable values.

### The Foundation of Primality Testing

Determining whether an incredibly large number is prime is a vital step in computer science. Fermat's Little Theorem provides a fast way to screen for primes. If an odd integer $n$ fails to satisfy the condition $a^{n-1} \equiv 1 \pmod n$ for a chosen base $a$, we know with absolute certainty that $n$ is a **composite number**. This filtering step is the basis for randomized algorithms like the Miller-Rabin primality test.

### Real-World Technological Applications

- **Public Key Cryptography (The RSA Algorithm):** The RSA algorithm secures global internet traffic, financial data, and encrypted messages. It relies on a mathematical process where data is encrypted using a public exponent and decrypted using a private exponent. Proving that the decryption step correctly reverses the encryption step and recovers the original message relies directly on Fermat's Little Theorem.
- **Diffie-Hellman Key Exchange:** Secure communications channels use the Diffie-Hellman protocol to share cryptographic keys over unsecured networks. The security of this exchange relies on the asymmetric difficulty of modular exponentiation equations derived from Fermat's properties.
- **Digital Signature Verification:** Global security tools use prime modular fields to verify digital signatures, ensuring that downloaded software packages or online identity records have not been altered.

---

## 4. Fundamental Properties

Fermat's Little Theorem exhibits consistent structural laws that can be verified through modular multiplication permutations and algebraic expansions.

### Formal Proof using Permutations and Modular Inverses

We can prove the theorem by observing what happens when we multiply a sequence of integers by a coprime base:

1. **Construct a sequence of distinct residues modulo $p$:**
   Let $p$ be a prime number, and let $a$ be an integer such that $\gcd(a, p) = 1$. Consider the set of the first $p-1$ positive integers:
   $$S = \{1, 2, 3, \dots, p-1\}$$

2. **Multiply each element in the set by the base variable $a$:**
   Create a new set by scaling each term by $a$:
   $$S' = \{1a, 2a, 3a, \dots, (p-1)a\}$$

3. **Prove that the elements of $S'$ are distinct modulo $p$:**
   Assume that two elements are congruent: $ia \equiv ja \pmod p$. Since $\gcd(a, p) = 1$, we can cancel the $a$ term from both sides, leaving $i \equiv j \pmod p$. This shows that every element in $S'$ reduces to a unique remainder modulo $p$. Therefore, the remainders of $S'$ are simply a scrambled permutation of the original set $S$.

4. **Multiply all the elements of both sets together:**
   Because the sets contain the same remainders, their total products must be congruent modulo $p$:
   $$(1a) \cdot (2a) \cdot (3a) \dots ((p-1)a) \equiv 1 \cdot 2 \cdot 3 \dots (p-1) \pmod p$$

5. **Factor out the base variable $a$ from the left side of the equation:**
   Since there are $p-1$ terms, factoring out $a$ leaves us with:
   $$a^{p-1} \cdot [1 \cdot 2 \cdot 3 \dots (p-1)] \equiv 1 \cdot 2 \cdot 3 \dots (p-1) \pmod p$$
   Using factorial notation, this can be written as:
   $$a^{p-1} \cdot (p-1)! \equiv (p-1)! \pmod p$$

6. **Cancel the factorial term to finalize the proof:**
   Because $p$ is prime, none of the individual factors in $(p-1)!$ share a common factor with $p$. This means the entire factorial is relatively prime to the modulus ($\gcd((p-1)!, p) = 1$). We can safely cancel $(p-1)!$ from both sides, leaving the reduced form of the theorem:
   $$a^{p-1} \equiv 1 \pmod p$$

The proof is complete.

### Finding Modular Multiplicative Inverses

In modular arithmetic, standard division is invalid. Instead, we divide by multiplying by a modular inverse. Fermat's Little Theorem gives us a direct formula to find this inverse when the modulus is prime. If $\gcd(a, p) = 1$, we can rewrite the identity as:

$$a \cdot a^{p-2} \equiv 1 \pmod p$$

This equation shows that raising an element to the power of $p-2$ yields its unique modular inverse:
$$a^{-1} \equiv a^{p-2} \pmod p$$

### Core Properties of Prime Modular Exponentiation

The following table summarizes how Fermat's Little Theorem compares to its algebraic generalizations and highlights its unique constraints.

| Theorem Identity Variant   | Core Formulaic Structure       | Required Modulus Constraint                                 | Unique Core Capability                                     |
| :------------------------- | :----------------------------- | :---------------------------------------------------------- | :--------------------------------------------------------- |
| **Fermat's General Form**  | $a^p \equiv a \pmod p$         | Modulus $p$ must be a prime number                          | Valid for all integers, including multiples of $p$         |
| **Fermat's Reduced Form**  | $a^{p-1} \equiv 1 \pmod p$     | Modulus $p$ must be prime, and $\gcd(a, p) = 1$             | Identifies a consistent remainder of 1 for coprime bases   |
| **Euler's Generalization** | $a^{\phi(n)} \equiv 1 \pmod n$ | Valid for any composite modulus $n$, given $\gcd(a, n) = 1$ | Extends exponential reduction to non-prime modular systems |

---

## 5. Types & Variations

Fermat's Little Theorem can be adapted to analyze structural behaviors across composite networks, abstract algebraic structures, and polynomial rings.

### 1. Euler's Totient Generalization

Leonhard Euler extended Fermat's Little Theorem to work with any composite modulus $n$. Known as **Euler's Theorem**, this broader formulation states that if $\gcd(a, n) = 1$, then:

$$a^{\phi(n)} \equiv 1 \pmod n$$

Where $\phi(n)$ is Euler's Totient Function, which counts how many integers up to $n$ are coprime to it. When $n$ is a prime number $p$, then $\phi(p) = p - 1$, and the equation simplifies back into Fermat's reduced form.

### 2. The Symmetries of Carmichael Numbers

Some composite numbers can pass the Fermat primality test, mimicking prime numbers. A **Carmichael Number** is a composite integer $n$ that satisfies Fermat's reduced identity for all possible coprime bases:

$$a^{n-1} \equiv 1 \pmod n \quad \forall a \in \mathbb{Z} \text{ such that } \gcd(a, n) = 1$$

The smallest Carmichael number is $561 = 3 \cdot 11 \cdot 17$. Because these numbers can trick the basic Fermat test into classifying them as primes, they are called **absolute pseudoprimes**. Defeating these edge cases requires using advanced primality tests like the Miller-Rabin algorithm.

### 3. Finite Galois Fields ($\mathbb{F}_p$)

In abstract algebra, the set of remainders modulo a prime number forms a finite field, denoted as $\mathbb{F}_p$ or $\mathbb{Z}/p\mathbb{Z}$. If we translate Fermat's Little Theorem into the language of field theory, it states that every element $a \in \mathbb{F}_p$ is a root of the following polynomial equation:

$$x^p - x = 0$$

This polynomial property is used to factor equations over finite fields and construct error-correcting codes for digital transmissions.

---

## 6. How to Solve

Here we explore step-by-step methodologies for reducing large exponents, computing modular inverses via power scaling, and identifying composite pseudoprimes.

### Strategy A: Reducing Massive Exponents via Period Factoring

Fermat's Little Theorem allows us to simplify large exponents by dividing them by the cycle period $p-1$.

**Example Question:** Calculate the least non-negative residue of $3^{201} \pmod{11}$.

1. **Identify the core terms and verify the prime modulus condition:**
   The base is $a = 3$, the exponent is $b = 201$, and the modulus is $p = 11$ (which is a prime number). Since 11 does not divide 3 ($\gcd(3, 11) = 1$), the reduced form of the theorem applies.

2. **Determine the exponent cycle period:**
   According to Fermat's Little Theorem, the remainder cycles every $p - 1$ powers:
   $$3^{11-1} = 3^{10} \equiv 1 \pmod{11}$$

3. **Divide the large target exponent by the cycle period:**
   Divide 201 by 10 to find the quotient and remainder:
   $$201 = 10 \cdot 20 + 1$$

4. **Rewrite the exponential expression using the rules of exponents:**
   $$3^{201} = 3^{10 \cdot 20 + 1} = (3^{10})^{20} \cdot 3^1$$

5. **Substitute the Fermat identity value into the equation:**
   Replace the $3^{10}$ term with its modular equivalent, 1:
   $$3^{201} \equiv (1)^{20} \cdot 3^1 \pmod{11}$$
   $$3^{201} \equiv 1 \cdot 3^1 = 3 \pmod{11}$$

6. **State the final result:**
   Since 3 is already within the standard remainder range $[0, 10]$, the calculation is complete:
   $$3^{201} \equiv 3 \pmod{11}$$

The large exponential power is successfully reduced.

### Strategy B: Computing a Modular Inverse via Power Scaling

When working modulo a prime number, you can find an element's modular inverse by raising it to the power of $p-2$.

**Example Question:** Use Fermat's Little Theorem to compute the modular multiplicative inverse of $a = 5$ modulo $p = 13$ (meaning find $5^{-1} \pmod{13}$).

1. **Verify the prerequisite conditions:**
   The modulus $p = 13$ is prime, and the base $a = 5$ is not a multiple of 13 ($\gcd(5, 13) = 1$). The conditions are met.

2. **Apply the Fermat modular inverse formula:**
   $$5^{-1} \equiv 5^{p-2} \pmod p \implies 5^{-1} \equiv 5^{13-2} = 5^{11} \pmod{13}$$

3. **Break down the exponent using binary decomposition to simplify the calculation:**
   Examine the exponent value 11:
   $$11 = 8 + 2 + 1$$
   This means we can compute the answer using a few simple squaring steps:
   $$5^{11} = 5^8 \cdot 5^2 \cdot 5^1$$

4. **Compute a sequence of squared base values modulo 13:**
   - $5^1 \equiv 5 \pmod{13}$
   - $5^2 = 25 = (1 \cdot 13) + 12 \equiv 12 \pmod{13} \quad [\text{or } -1 \pmod{13}]$
   - $5^4 \equiv (5^2)^2 \equiv (-1)^2 = 1 \pmod{13}$
   - $5^8 \equiv (5^4)^2 \equiv 1^2 = 1 \pmod{13}$

5. **Combine the components to find the final value:**
   $$5^{11} \equiv 5^8 \cdot 5^2 \cdot 5^1 \pmod{13}$$
   Substitute the modular equivalents computed in the previous step:
   $$5^{11} \equiv 1 \cdot 12 \cdot 5 = 60 \pmod{13}$$

6. **Reduce the final answer to its least non-negative residue:**
   $$60 = 13 \cdot 4 + 8 \implies 60 \equiv 8 \pmod{13}$$

Therefore, $5^{-1} \equiv 8 \pmod{13}$. We can double-check this answer by verifying that $5 \cdot 8 = 40 = (3 \cdot 13) + 1 \equiv 1 \pmod{13}$.

---

## 7. Summary

- **Prime Power Congruence:** Fermat's Little Theorem states that for any prime number $p$ and integer $a$, raising $a$ to the power of $p$ matches $a$ modulo $p$ ($a^p \equiv a \pmod p$).
- **The Coprime Identity:** If the base integer is relatively prime to the modulus ($\gcd(a, p) = 1$), the identity can be simplified to show that raising the base to the power of $p-1$ always leaves a remainder of 1 ($a^{p-1} \equiv 1 \pmod p$).
- **Exponent Reduction:** The theorem provides a fast way to simplify large exponents in modular systems. By dividing the exponent by $p-1$, you can reduce massive calculations to small, manageable leftovers.
- **Direct Inverse Formula:** For a prime modulus $p$, Fermat's Little Theorem gives us a direct formula to find an element's modular inverse by raising it to the power of $p-2$ ($a^{-1} \equiv a^{p-2} \pmod p$).
- **Cryptographic Framework:** The predictable repeating cycles of prime exponents under Fermat's Little Theorem provide the mathematical core that secures modern data encryption algorithms like RSA.
