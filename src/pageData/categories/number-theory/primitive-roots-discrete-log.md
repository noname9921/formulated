# Number Theory: Primitive Roots & Discrete Logarithms

---

## 1. Definition

In the field of modular arithmetic and abstract algebra, **primitive roots** and **discrete logarithms** serve as the multiplicative analogs to generators and standard logarithmic operators found in continuous real-number systems. Together, they form the mathematical architecture that describes cyclic relationships within discrete modular systems.

### Primitive Roots

Let $g$ and $n$ be positive integers such that they are relatively prime ($\gcd(g, n) = 1$). According to Euler's Theorem, raising $g$ to the power of the modulus's totient value results in a remainder of 1 ($g^{\phi(n)} \equiv 1 \pmod n$). The smallest positive integer exponent $k$ that satisfies this condition is called the **multiplicative order** of $g$ modulo $n$, denoted as $\text{ord}_n(g)$.

An integer $g$ is classified as a **primitive root modulo $n$** if its multiplicative order is exactly equal to the Euler totient value of the modulus:

$$\text{ord}_n(g) = \phi(n)$$

When an integer qualifies as a primitive root, its sequential powers generate every single non-zero remainder class modulo $n$ that is relatively prime to $n$. The resulting sequence forms a predictable cyclic group:

$$\{g^1, g^2, g^3, \dots, g^{\phi(n)}\} \equiv \{x \in \mathbb{Z}^{+} \mid x \le n \text{ and } \gcd(x, n) = 1\} \pmod n$$

### Discrete Logarithms

Because a primitive root $g$ generates every coprime residue class modulo $n$, we can express any coprime integer $a$ as a power of $g$. Let $g$ be a validated primitive root modulo $n$, and let $a$ be an integer coprime to $n$. The **discrete logarithm** (or modular index) of $a$ to the base $g$ modulo $n$ is the unique integer exponent $x$ that satisfies the exponential congruence equation:

$$g^x \equiv a \pmod n \quad \text{where} \quad 0 \le x < \phi(n)$$

This relationship can be formally defined using standard logarithmic notation:

$$x = \log_g(a) \pmod{\phi(n)}$$

While calculating $g^x \pmod n$ given $x$ is fast and efficient, reversing the process to find $x$ given $a$ is computationally difficult. This asymmetric complexity is known as the **Discrete Logarithm Problem (DLP)**.

---

## 2. Key Terminology

To analyze the structural traits, cycles, and cryptographic boundaries of cyclic modular networks, the following precise vocabulary definitions are required:

- **Multiplicative Order ($\text{ord}_n(g)$):** The smallest positive integer exponent $k$ such that $g^k \equiv 1 \pmod n$.
- **Primitive Root:** A base integer whose multiplicative order matches the modulus's totient value ($\text{ord}_n(g) = \phi(n)$), allowing its powers to generate all coprime residues.
- **Discrete Logarithm:** The unique integer exponent $x$ within the range $0 \le x < \phi(n)$ that solves the equation $g^x \equiv a \pmod n$.
- **Discrete Logarithm Problem (DLP):** The computational challenge of reversing modular exponentiation to find the exponent $x$, a core problem that secures many cryptographic protocols.
- **Cyclic Group:** An algebraic group that can be generated entirely by repeatedly applying its binary operation to a single element.
- **Index Calculus:** An advanced algorithm used to solve discrete logarithms by collecting modular prime factorizations and running linear algebra reductions.
- **Baby-step Giant-step:** A space-time tradeoff algorithm developed by Adi Shamir and Michael Shanks that computes discrete logarithms in $O(\sqrt{n})$ time.

---

## 3. Purpose

Primitive roots and discrete logarithms map structured coordinates onto discrete spaces. They provide a predictable framework for navigating cyclic groups while offering the one-way security needed to protect digital communications.

### Mapping Asymmetric Symmetries for Cryptography

The primary real-world application of discrete logarithms is public-key cryptography. In continuous mathematics, functions like $y = 10^x$ can be easily inverted using standard logarithms ($x = \log_{10}(y)$). However, in modular arithmetic, the sequence of remainders produced by $g^x \pmod n$ appears erratic, resembling digital white noise.

This behavior creates a **one-way function**: an operation that is simple to calculate in the forward direction but computationally impractical to reverse. This asymmetric complexity forms the security foundation for modern digital communication systems.

### Real-World Technological Applications

- **The Diffie-Hellman Key Exchange:** This protocol allows two parties to establish a shared secret key over an unsecure network without transmitting the key itself. Both parties pick private keys ($a$ and $b$) and compute public values using a shared primitive root ($g^a \pmod p$ and $g^b \pmod p$). They exchange these public values and raise them to their private powers to calculate a shared secret ($g^{ab} \pmod p$). An eavesdropper cannot calculate this shared secret without solving the discrete logarithm problem.
- **The ElGamal Encryption System:** Based directly on the Diffie-Hellman framework, this asymmetric cryptographic standard secures data transmissions and generates digital signatures used to verify identity across corporate databases.
- **The Digital Signature Algorithm (DSA):** Global internet frameworks use DSA to verify the authenticity of secure web certificates (HTTPS). This verification step ensures that incoming data packets originate from trusted senders and have not been altered during transmission.

---

## 4. Fundamental Properties

Primitive roots and discrete logarithms follow strict algebraic laws that govern group generation limits, exponent reductions, and calculation constraints.

### The Boundary of Algebraic Existence

Primitive roots do not exist for every modulus. According to abstract algebra properties, a primitive root modulo $n$ exists if and only if the modulus matches one of the following four geometric configurations:

$$n \in \{2, \, 4, \, p^k, \, 2p^k\}$$

Where $p$ represents an odd prime number ($p > 2$) and $k$ is a positive integer exponent ($k \ge 1$). If a modulus does not fit into one of these structural categories—such as $n = 15$—it will not possess a primitive root, and its coprime group cannot be generated by a single base element.

### Total Distribution Density of Generators

If a modulus $n$ passes the existence test, it is guaranteed to possess multiple primitive roots distributed across its remainder space. The total count of unique primitive roots available is determined by applying the Euler totient function to its primary totient value:

$$\text{Total Primitive Root Count} = \phi(\phi(n))$$

Once you find a base primitive root $g$, you can identify all remaining primitive roots by raising $g$ to power values $k$ that are relatively prime to the totient period ($\gcd(k, \phi(n)) = 1$).

### Operational Analogies with Continuous Logarithms

Discrete logarithms follow the same algebraic rules as standard logarithms, converted to fit a modular system. The following properties assume $g$ is a primitive root modulo $n$, and the elements $x$ and $y$ are coprime to $n$:

- **Product Transformation:** $\log_g(x \cdot y) \equiv \log_g(x) + \log_g(y) \pmod{\phi(n)}$
- **Quotient Transformation:** $\log_g\left(\frac{x}{y}\right) \equiv \log_g(x) - \log_g(y) \pmod{\phi(n)}$
- **Power Scaling:** $\log_g(x^k) \equiv k \cdot \log_g(x) \pmod{\phi(n)}$
- **Base Change Identity:** $\log_h(x) \equiv \log_g(x) \cdot (\log_g(h))^{-1} \pmod{\phi(n)}$

### Properties of Structural Generators and Logs

The following table summarizes the primary structural differences between prime and composite modular systems for primitive roots.

| Structural System Modulus       | Existence of Primitive Roots | Total Count of Available Generators                  | Exponential Reduction Period          |
| :------------------------------ | :--------------------------- | :--------------------------------------------------- | :------------------------------------ |
| **Prime Modulus ($p$)**         | Always guaranteed to exist   | $\phi(p-1)$ primitive roots                          | Calculated modulo $p-1$               |
| **Prime Power ($p^k$)**         | Always guaranteed to exist   | $\phi(\phi(p^k)) = p^{k-1}(p-1)\cdot(1-\frac{1}{p})$ | Calculated modulo $p^{k-1}(p-1)$      |
| **Composite Dual-Prime ($pq$)** | Absolutely zero roots exist  | 0 generators available                               | Extends to Carmichael's $\lambda(pq)$ |

---

## 5. Types & Variations

Primitive roots and discrete logarithms can be extended to support elliptic curves, faster indexing checks, and advanced sub-exponential solution routines.

### 1. Elliptic Curve Discrete Logarithms (ECDLP)

To maintain security without requiring massive, computationally expensive key sizes, modern cryptography adapts discrete logarithms to use the geometry of elliptic curves. Instead of working with integer powers modulo a prime ($g^x \pmod p$), **Elliptic Curve Cryptography (ECC)** uses point multiplication over a finite field:

$$Q = k \cdot P = \underbrace{P + P + \dots + P}_{k \text{ times}}$$

Where $P$ and $Q$ are coordinate points on the curve, and $k$ is a scalar private key integer. Finding the integer multiplier $k$ given points $P$ and $Q$ is known as the **Elliptic Curve Discrete Logarithm Problem (ECDLP)**. Because ECDLP is significantly more difficult to solve than standard DLP, systems can use much smaller keys to achieve the same level of security, speeding up calculations on mobile phones and smart devices.

### 2. The Index Calculus Algorithm

While finding a discrete logarithm is difficult, it is not completely impossible. The **Index Calculus** algorithm is an advanced approach used to break discrete logarithms over prime fields. Unlike general group algorithms, Index Calculus uses the prime factorization properties of integers. The algorithm works in two stages:

1. It chooses a "factor base" consisting of small prime numbers and computes the discrete logarithms for these small primes by generating random exponential equations.
2. It uses linear algebra techniques to combine these known small values, allowing it to calculate the discrete logarithm of a target composite value.

Index Calculus runs in sub-exponential time, forcing modern security systems to use larger prime moduli ($p \ge 2048 \text{ bits}$) to keep data safe.

---

## 6. How to Solve

Here we explore step-by-step methodologies for verifying a primitive root, finding discrete logarithms via index tables, and applying the Baby-step Giant-step algorithm.

### Strategy A: Verifying if an Integer is a Primitive Root

To prove that an integer $g$ is a primitive root modulo $p$, you do not need to compute all $p-1$ powers. Instead, you find the prime factors of the totient period $p-1$ and verify that $g$ raised to those fractional powers never leaves a remainder of 1.

**Example Question:** Verify if the integer $g = 3$ is a primitive root modulo the prime number $p = 17$.

1. **Calculate the totient period value:**
   Since the modulus is prime, the totient period is:
   $$\phi(17) = 17 - 1 = 16$$

2. **Find the unique prime factors of the totient period:**
   Factor 16 into its prime components:
   $$16 = 2^4 \implies \text{The only unique prime factor is } q = 2$$

3. **Determine the critical test exponents:**
   The test exponents are formed by dividing the totient period by each unique prime factor ($\frac{\phi(p)}{q}$):
   $$\text{Test Exponent} = \frac{16}{2} = 8$$

4. **Evaluate the base integer raised to the test exponent modulo 17:**
   Calculate $3^8 \pmod{17}$ using successive squaring:
   - $3^1 \equiv 3 \pmod{17}$
   - $3^2 = 9 \equiv 9 \pmod{17}$
   - $3^4 = (3^2)^2 = 81 = 17 \cdot 4 + 13 \equiv 13 \pmod{17} \quad [\text{or } -4 \pmod{17}]$
   - $3^8 \equiv (-4)^2 = 16 \equiv 16 \pmod{17} \quad [\text{or } -1 \pmod{17}]$

5. **Analyze the output against the primality condition:**
   The result is $16$, which means $3^8 \not\equiv 1 \pmod{17}$. Since the test exponent did not reduce to 1, the order of 3 cannot be a fraction of 16. The multiplicative order must be exactly 16:
   $$\text{ord}_{17}(3) = 16 = \phi(17)$$

The integer $g = 3$ is confirmed to be a primitive root modulo 17.

### Strategy B: Solving a Discrete Logarithm using Baby-step Giant-step

The Baby-step Giant-step algorithm uses a space-time tradeoff to find a discrete logarithm $g^x \equiv a \pmod p$ in $O(\sqrt{p})$ steps, rather than running a slow brute-force search.

**Example Question:** Solve for the exponent $x$ in the equation $3^x \equiv 13 \pmod{17}$, using the validated primitive root $g = 3$.

1. **Determine the structural parameters and ceiling boundary ($m$):**
   The totient period is $N = \phi(17) = 16$. Calculate the ceiling boundary by taking the square root of $N$:
   $$m = \lceil \sqrt{N} \rceil = \lceil \sqrt{16} \rceil = 4$$

2. **Generate the Baby-step table ($g^j \pmod p$):**
   Calculate values for $g^j \pmod{17}$ for the range $0 \le j < 4$:
   - $j = 0 \implies 3^0 \equiv 1 \pmod{17}$
   - $j = 1 \implies 3^1 \equiv 3 \pmod{17}$
   - $j = 2 \implies 3^2 \equiv 9 \pmod{17}$
   - $j = 3 \implies 3^3 \equiv 10 \pmod{17}$

   Store these pairs in a lookup table: $\text{Table} = \{(1, 0), \, (3, 1), \, (9, 2), \, (10, 3)\}$.

3. **Calculate the Giant-step multiplier factor ($g^{-m}$):**
   Find the modular multiplicative inverse of $g^m = 3^4 = 81 \equiv 13 \pmod{17}$. Using the Extended Euclidean Algorithm or inspection, find the inverse of 13 modulo 17:
   $$13 \cdot 4 = 52 = 17 \cdot 3 + 1 \equiv 1 \pmod{17} \implies 3^{-4} \equiv 4 \pmod{17}$$

4. **Evaluate the Giant-steps ($a \cdot (g^{-m})^i \pmod p$) to find a table match:**
   Compute values for $i = 0, 1, 2, 3$ until the output matches a value in our Baby-step table:
   - $i = 0 \implies 13 \cdot 4^0 = 13 \cdot 1 = 13$ (No match)
   - $i = 1 \implies 13 \cdot 4^1 = 52 \equiv 1 \pmod{17}$ (Match found!)

   The output value $1$ matches the entry $(1, 0)$ from our Baby-step table, giving us $j = 0$.

5. **Reconstruct the final exponent value ($x$):**
   Use the matching indices $i = 1$ and $j = 0$ in the reconstruction formula:
   $$x = i \cdot m + j$$
   $$x = 1 \cdot 4 + 0 = 4$$

6. **Verify the final result:**
   Check the answer using the original equation: $3^4 = 81 = 17 \cdot 4 + 13 \equiv 13 \pmod{17}$.

The discrete logarithm is exactly $x = 4$.

---

## 7. Summary

- **Cyclic Multiplicative Generators:** A primitive root is a base integer whose sequential power loops generate every coprime remainder class modulo $n$. This occurs when its multiplicative order matches the totient value of the modulus ($\text{ord}_n(g) = \phi(n)$).
- **Existence Limits:** Primitive roots do not exist for all numbers. They occur exclusively within modular systems that match the geometric patterns $2$, $4$, $p^k$, or $2p^k$, where $p$ is an odd prime.
- **The Logarithmic Transformation:** A discrete logarithm is the inverse power exponent $x$ that solves the equation $g^x \equiv a \pmod n$. It follows the same structural algebraic rules as standard calculus logarithms, adjusted to fit a modular system.
- **The Asymmetric Bottleneck:** The Discrete Logarithm Problem (DLP) describes a one-way mathematical relationship: while raising numbers to powers inside a modular system is fast, reversing the calculation to find the exponent is computationally difficult.
- **Cryptographic Foundation:** This asymmetric difficulty provides the security framework that protects modern digital networks, securing transactions and communications through algorithms like Diffie-Hellman, ElGamal, and Elliptic Curve systems.
