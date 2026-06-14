var e=`# Number Theory: Euler's Theorem & Totient Function\r
\r
---\r
\r
## 1. Definition\r
\r
In number theory and abstract algebra, **Euler's Theorem** (also known as the Fermat-Euler Theorem) is a foundational proposition that generalizes Fermat's Little Theorem to accommodate composite moduli. Published by Leonhard Euler in 1736, the theorem describes a fundamental symmetry of modular exponentiation: raising a coprime integer base to the power of the modulus's totient value always results in a remainder of 1.\r
\r
The theorem is inextricably bound to **Euler's Totient Function**, denoted by the Greek letter phi ($\\phi$). For any positive integer $n$, $\\phi(n)$ is defined as the total count of positive integers up to $n$ that are relatively prime (coprime) to $n$.\r
\r
Formally, let $a$ and $n$ be two integers such that $n$ is positive ($n \\in \\mathbb{Z}^{+}$) and $a$ is relatively prime to $n$ ($\\gcd(a, n) = 1$). Euler's Theorem asserts that:\r
\r
$$a^{\\phi(n)} \\equiv 1 \\pmod n$$\r
\r
### The Symmetries of Prime Moduli\r
\r
When the modulus is a prime number $p$, every positive integer strictly less than $p$ is automatically coprime to it. Therefore, the totient value of any prime is simply:\r
\r
$$\\phi(p) = p - 1$$\r
\r
Substituting this prime boundary value into Euler's Theorem transforms the formula into:\r
\r
$$a^{p-1} \\equiv 1 \\pmod p$$\r
\r
This matches exactly the reduced form of **Fermat's Little Theorem**, confirming that Euler's Theorem is a true geometric generalization of prime modular behavior.\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze the patterns, properties, and applications of Euler's structural formulas, the following precise vocabulary definitions are required:\r
\r
- **Euler's Totient Function ($\\phi(n)$):** An arithmetic function that counts the positive integers less than or equal to $n$ that are relatively prime to $n$.\r
- **Coprime / Relatively Prime ($\\gcd(a, n) = 1$):** A relationship between two integers indicating that they share no common positive factors other than 1.\r
- **Modulus ($n$):** The integer boundary value defining the wrap-around point of a cyclic arithmetic system.\r
- **Reduced Residue System:** A set of exactly $\\phi(n)$ integers chosen such that every element is relatively prime to the modulus $n$, and no two elements are congruent to each other modulo $n$.\r
- **Modular Multiplicative Inverse:** An integer solution $x$ that satisfies the unit congruence equation $ax \\equiv 1 \\pmod n$. According to Euler, $a^{\\phi(n)-1}$ acts as the inverse of $a$ modulo $n$.\r
- **Arithmetic Multiplicative Function:** A number-theoretic function $f$ that satisfies the condition $f(ab) = f(a) \\cdot f(b)$ for all coprime integer pairs ($\\gcd(a, b) = 1$).\r
- **Order Modulo $n$ ($\\text{ord}_n(a)$):** The smallest positive integer exponent $k$ such that $a^k \\equiv 1 \\pmod n$. According to Lagrange's structural properties, $\\text{ord}_n(a)$ must always divide $\\phi(n)$.\r
\r
---\r
\r
## 3. Purpose\r
\r
Euler's Theorem and the Totient Function serve as foundational components in number theory. They provide the mathematical framework for solving modular equations, optimizing computer algorithms, and securing modern digital networks.\r
\r
### Simplifying Massive Exponential Inverses\r
\r
In pure mathematics, calculating the exact value of a high-degree exponent like $3^{400000}$ is computationally slow and requires huge amounts of memory. Euler's Theorem solves this problem by showing that remainders repeat in predictable cycles. By using $\\phi(n)$ as a cycle period, mathematicians can reduce massive exponents into small, easily manageable calculations.\r
\r
### Mapping the Structure of Finite Commutative Rings\r
\r
In abstract algebra, the set of all integers modulo $n$ forms a ring, denoted as $\\mathbb{Z}/n\\mathbb{Z}$ or $\\mathbb{Z}_n$. Within this ring, elements are divided into units (invertible elements) and zero divisors. The Euler Totient Function acts as a structural map for this space, counting the exact number of units available. This count allows mathematicians to evaluate group structures and predict the behavior of complex algebraic networks.\r
\r
### Real-World Cryptographic Applications\r
\r
- **The RSA Encryption Protocol:** The RSA algorithm secures global internet traffic, digital bank transfers, and encrypted communications. It uses a public key modulus ($n$) formed by multiplying two massive prime numbers together ($n = pq$). The security of the system relies on the properties of the totient function: while computing $\\phi(n) = (p-1)(q-1)$ is instantaneous if you know the prime factors, it is virtually impossible to compute if you only have the product $n$. This mathematical bottleneck protects the secret decryption exponent $d$, which is calculated as a modular inverse using $\\phi(n)$.\r
- **Digital Signatures and Identity Verification:** E-commerce systems use Euler's Theorem to verify digital signatures. This ensures that software updates and online contracts cannot be modified by unauthorized parties during transmission.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Euler's Totient Function and Theorem follow strict algebraic laws that govern multiplication, prime factorization, and modular cycles.\r
\r
### Multiplicative Product Symmetries\r
\r
The Euler Totient Function is **multiplicative**. If two positive integers $a$ and $b$ are relatively prime, the totient of their product is equal to the product of their individual totient values:\r
\r
$$\\phi(a \\cdot b) = \\phi(a) \\cdot \\phi(b) \\quad \\text{whenever} \\quad \\gcd(a, b) = 1$$\r
\r
This multiplicative property allows us to calculate the totient value for any large composite number by simply breaking it down into its prime factors.\r
\r
### The Pure Prime Power Identity\r
\r
When evaluating a prime number raised to an integer exponent ($p^k$), the only numbers that share a common factor with $p^k$ are multiples of $p$. Within the range from 1 to $p^k$, there are exactly $p^{k-1}$ such multiples. Subtracting these from the total count yields the foundational prime power formula:\r
\r
$$\\phi(p^k) = p^k - p^{k-1} = p^k \\left(1 - \\frac{1}{p}\\right)$$\r
\r
### Canonical Factoring via Euler's Product Formula\r
\r
By combining the multiplicative property and the prime power identity, we can derive **Euler's Product Formula**. For any integer $n$ with the unique prime factorization $n = p_1^{e_1} \\cdot p_2^{e_2} \\dots p_m^{e_m}$, its totient value can be calculated as:\r
\r
$$\\phi(n) = n \\cdot \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right)$$\r
\r
This formula shows that the totient value depends entirely on the unique prime factors of a number, rather than the exponents of those factors.\r
\r
### Summary of Foundational Totient Identities\r
\r
The following table summarizes the primary arithmetic and algebraic laws that govern the Euler Totient Function.\r
\r
| Identity Variant Name    | Formulaic Expression          | Operational Prerequisite                      | Strategic Mathematical Value                   |\r
| :----------------------- | :---------------------------- | :-------------------------------------------- | :--------------------------------------------- |\r
| **Prime Value**          | $\\phi(p) = p - 1$             | $p$ must be a prime number                    | Evaluates prime modular systems directly       |\r
| **Prime Power**          | $\\phi(p^k) = p^k - p^{k-1}$   | $p$ must be prime, $k \\ge 1$                  | Calculates values for exponential prime blocks |\r
| **Multiplicative Rule**  | $\\phi(ab) = \\phi(a)\\phi(b)$   | Requires that $\\gcd(a, b) = 1$                | Splits large composite calculations apart      |\r
| **Divisor Sum Identity** | $\\sum_{d \\mid n} \\phi(d) = n$ | Valid for all integers $n \\in \\mathbb{Z}^{+}$ | Links divisor networks to the identity value   |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Euler's Theorem can be adapted to analyze structural behaviors across single variables, multi-equation systems, and abstract algebraic groups.\r
\r
### 1. General Exponential Extension (The Universal Reduction Rule)\r
\r
The standard version of Euler's Theorem requires the base $a$ and the modulus $n$ to be relatively prime ($\\gcd(a, n) = 1$). However, we can adapt the theorem to work with **any integer base**, including numbers that share common factors with the modulus, by adding a buffer condition to the exponent. This generalized version states:\r
\r
$$\\forall a \\in \\mathbb{Z}, \\, \\forall n \\in \\mathbb{Z}^{+}, \\quad \\text{if } x \\ge \\phi(n), \\quad \\text{then } a^x \\equiv a^{x \\pmod{\\phi(n)} + \\phi(n)} \\pmod n$$\r
\r
This extended rule is an essential tool for computer science, allowing software to simplify nested tower exponents ($a^{b^c} \\pmod n$) without being blocked by common factors.\r
\r
### 2. Carmichael's Optimization ($\\lambda(n)$)\r
\r
The **Carmichael Function**, denoted as $\\lambda(n)$, is an optimized variation of Euler's Totient Function. While Euler's Theorem states that $a^{\\phi(n)} \\equiv 1 \\pmod n$, $\\phi(n)$ is not always the _smallest_ exponent that satisfies this condition. The Carmichael Function calculates the absolute smallest positive exponent that works for all coprime bases simultaneously:\r
\r
$$a^{\\lambda(n)} \\equiv 1 \\pmod n \\quad \\forall a \\in \\mathbb{Z} \\text{ such that } \\gcd(a, n) = 1$$\r
\r
The Carmichael value $\\lambda(n)$ always cleanly divides the Euler totient value $\\phi(n)$. For example, if the modulus is $n = 8$:\r
\r
- Euler's function yields $\\phi(8) = 4$, meaning $a^4 \\equiv 1 \\pmod 8$.\r
- Carmichael's function reveals that $\\lambda(8) = 2$, meaning $a^2 \\equiv 1 \\pmod 8$ for all odd numbers ($1^2 \\equiv 3^2 \\equiv 5^2 \\equiv 7^2 = 25 \\equiv 1 \\pmod 8$).\r
\r
Using $\\lambda(n)$ instead of $\\phi(n)$ speeds up modular calculations by minimizing the size of the exponents.\r
\r
### 3. Group Theory: The Unit Group ($U(\\mathbb{Z}/n\\mathbb{Z})$)\r
\r
In abstract algebra, Euler's Theorem can be elegantly explained using group theory. The set of all congruence classes modulo $n$ that are relatively prime to $n$ forms a multiplicative group known as the **Group of Units**, denoted as $U(\\mathbb{Z}/n\\mathbb{Z})$ or $\\mathbb{Z}_n^{\\times}$.\r
\r
The size (order) of this group is exactly equal to $\\phi(n)$. According to **Lagrange's Theorem**, raising any element in a finite group to the power of the group's order always yields the identity element. This group law is exactly what gives us Euler's Theorem:\r
\r
$$g^{|G|} = e \\implies a^{\\phi(n)} \\equiv 1 \\pmod n$$\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for calculating totient values using prime factors, reducing massive exponents via totient cycles, and finding modular inverses.\r
\r
### Strategy A: Computing Euler's Totient Value for Large Composites\r
\r
We can calculate $\\phi(n)$ efficiently by finding a number's prime factors and applying Euler's product formula.\r
\r
**Example Question:** Calculate the total count of coprime integers ($\\phi(n)$) for the composite integer $n = 504$.\r
\r
1. **Find the unique canonical prime factorization of the target number:**\r
   Break 504 down into its component primes:\r
   $$504 = 2 \\cdot 252 = 2^2 \\cdot 126 = 2^3 \\cdot 63 = 2^3 \\cdot 3^2 \\cdot 7^1$$\r
\r
2. **Identify the distinct prime factors:**\r
   The distinct prime factors are $p_1 = 2$, $p_2 = 3$, and $p_3 = 7$. (The exponents are ignored during this selection step).\r
\r
3. **Set up Euler's product formula:**\r
   $$\\phi(n) = n \\cdot \\left(1 - \\frac{1}{p_1}\\right) \\cdot \\left(1 - \\frac{1}{p_2}\\right) \\dots \\left(1 - \\frac{1}{p_m}\\right)$$\r
\r
4. **Substitute the target number and its distinct prime factors into the formula:**\r
   $$\\phi(504) = 504 \\cdot \\left(1 - \\frac{1}{2}\\right) \\cdot \\left(1 - \\frac{1}{3}\\right) \\cdot \\left(1 - \\frac{1}{7}\\right)$$\r
   Simplify the fractional expressions inside the parentheses:\r
   $$\\phi(504) = 504 \\cdot \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{2}{3}\\right) \\cdot \\left(\\frac{6}{7}\\right)$$\r
\r
5. **Multiply the terms together to find the final value:**\r
   Combine the fractions:\r
   $$\\phi(504) = 504 \\cdot \\frac{1 \\cdot 2 \\cdot 6}{2 \\cdot 3 \\cdot 7} = 504 \\cdot \\frac{12}{42}$$\r
   Simplify the fraction to $\\frac{2}{7}$:\r
   $$\\phi(504) = 504 \\cdot \\frac{2}{7}$$\r
   Divide 504 by 7 ($504 \\div 7 = 72$) and multiply by 2:\r
   $$\\phi(504) = 72 \\cdot 2 = 144$$\r
\r
There are exactly 144 positive integers less than or equal to 504 that are relatively prime to it.\r
\r
### Strategy B: Reducing Massive Exponents via Totient Cycles\r
\r
When evaluating a high-degree modular exponent $a^b \\pmod n$ where the base and modulus are coprime, you can use Euler's Theorem to simplify the exponent.\r
\r
**Example Question:** Find the least non-negative remainder of $7^{222} \\pmod{10}$.\r
\r
1. **Verify the prerequisite coprimality condition:**\r
   The base is $a = 7$ and the modulus is $n = 10$. Calculate their greatest common divisor:\r
   $$\\gcd(7, 10) = 1$$\r
   Since they are relatively prime, Euler's Theorem applies.\r
\r
2. **Calculate the totient value of the modulus:**\r
   Factor $10 = 2 \\cdot 5$. Apply the product formula:\r
   $$\\phi(10) = 10 \\cdot \\left(1 - \\frac{1}{2}\\right) \\cdot \\left(1 - \\frac{1}{5}\\right) = 10 \\cdot \\frac{1}{2} \\cdot \\frac{4}{5} = 4$$\r
   This tells us that remainders cycle every 4 powers: $7^4 \\equiv 1 \\pmod{10}$.\r
\r
3. **Divide the large target exponent by the totient cycle period:**\r
   Divide 222 by 4 to find the quotient and remainder:\r
   $$222 = 4 \\cdot 55 + 2$$\r
\r
4. **Rewrite the exponential expression using the rules of exponents:**\r
   $$7^{222} = 7^{4 \\cdot 55 + 2} = (7^4)^{55} \\cdot 7^2$$\r
\r
5. **Substitute the Euler identity value into the equation:**\r
   Replace the $7^4$ term with its modular equivalent, 1:\r
   $$7^{222} \\equiv (1)^{55} \\cdot 7^2 \\pmod{10}$$\r
   $$7^{222} \\equiv 1 \\cdot 7^2 = 49 \\pmod{10}$$\r
\r
6. **Reduce the remaining value to find the final answer:**\r
   Reduce 49 modulo 10:\r
   $$49 = 10 \\cdot 4 + 9 \\implies 49 \\equiv 9 \\pmod{10}$$\r
\r
The calculation evaluates cleanly to 9.\r
\r
### Strategy C: Finding a Modular Inverse via Power Scaling\r
\r
Euler's Theorem provides a direct formula for finding a modular inverse ($a \\cdot x \\equiv 1 \\pmod n$) by raising the base to the power of $\\phi(n) - 1$.\r
\r
**Example Question:** Use Euler's Theorem to find the modular multiplicative inverse of $a = 5$ modulo $n = 12$ (meaning find $5^{-1} \\pmod{12}$).\r
\r
1. **Verify that a modular inverse exists:**\r
   Calculate the greatest common divisor of the base and modulus:\r
   $$\\gcd(5, 12) = 1$$\r
   Since they are coprime, a unique modular inverse exists.\r
\r
2. **Calculate the totient value of the modulus ($\\phi(12)$):**\r
   Factor $12 = 2^2 \\cdot 3^1$. Apply the product formula:\r
   $$\\phi(12) = 12 \\cdot \\left(1 - \\frac{1}{2}\\right) \\cdot \\left(1 - \\frac{1}{3}\\right) = 12 \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} = 4$$\r
\r
3. **Apply the Euler modular inverse formula:**\r
   $$\\text{Formula:} \\quad a^{-1} \\equiv a^{\\phi(n) - 1} \\pmod n$$\r
   Substitute our values into the formula:\r
   $$5^{-1} \\equiv 5^{4 - 1} = 5^3 \\pmod{12}$$\r
\r
4. **Evaluate the remaining exponential expression:**\r
   Calculate the small power value:\r
   $$5^3 = 125$$\r
   Reduce 125 modulo 12 to find the final remainder:\r
   $$125 = 12 \\cdot 10 + 5 \\implies 125 \\equiv 5 \\pmod{12}$$\r
\r
Therefore, $5^{-1} \\equiv 5 \\pmod{12}$. We can double-check this answer by verifying that $5 \\cdot 5 = 25 = (2 \\cdot 12) + 1 \\equiv 1 \\pmod{12}$. In this specific case, 5 acts as its own modular inverse.\r
\r
---\r
\r
## 7. Summary\r
\r
- **The Coprime Power Axiom:** Euler's Theorem states that for any modulus $n$ and integer base $a$ that are relatively prime ($\\gcd(a, n) = 1$), raising $a$ to the power of $\\phi(n)$ always leaves a remainder of 1 ($a^{\\phi(n)} \\equiv 1 \\pmod n$).\r
- **Totient Counting Symmetries:** Euler's Totient Function ($\\phi(n)$) counts how many positive integers up to $n$ share no common factors with it. For a prime number, this count is always exactly $\\phi(p) = p - 1$.\r
- **Algorithmic Reduction:** The theorem provides a fast way to simplify large exponents in modular systems. By dividing the exponent by $\\phi(n)$, you can reduce massive calculations to small, manageable values.\r
- **Direct Inverse Formula:** Euler's Theorem gives us a direct formula to find an element's modular inverse. If $\\gcd(a, n) = 1$, the inverse can be computed by raising the base to the power of $\\phi(n) - 1$.\r
- **Cryptographic Foundation:** The properties of Euler's Totient Function provide the mathematical core that secures modern data encryption algorithms like RSA, protecting global digital communications.\r
`;export{e as default};