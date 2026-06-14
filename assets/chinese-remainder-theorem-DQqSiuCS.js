var e=`# Number Theory: Chinese Remainder Theorem (CRT)\r
\r
---\r
\r
## 1. Definition\r
\r
In number theory and abstract algebra, the **Chinese Remainder Theorem** (commonly abbreviated as **CRT**) is a foundational theorem that establishes the conditions under which a simultaneous system of linear congruence equations is guaranteed to possess a unique integer solution. First documented in the 3rd century AD by the Chinese mathematician Sunzi in the mathematical text _Sunzi Suanjing_, the theorem provides an algebraic bridge showing that a single unknown integer can be completely reconstructed from its remainders relative to a sequence of different, non-overlapping divisors.\r
\r
Formally, let $k$ be a positive integer, and let $a_1, a_2, \\dots, a_k$ be any arbitrary set of integers representing target remainders. Let $m_1, m_2, \\dots, m_k$ be a collection of positive integers representing divisors, known as the **moduli**. Consider the simultaneous system of $k$ linear congruences written as:\r
\r
$$\r
\\begin{aligned}\r
x &\\equiv a_1 \\pmod{m_1} \\\\\r
x &\\equiv a_2 \\pmod{m_2} \\\\\r
&\\,\\,\\,\\vdots \\\\\r
x &\\equiv a_k \\pmod{m_k}\r
\\end{aligned}\r
$$\r
\r
The Chinese Remainder Theorem asserts that if the moduli are **pairwise coprime**—meaning that no two distinct moduli share any common positive factors other than 1 ($\\gcd(m_i, m_j) = 1$ for all $i \\neq j$)—then there exists a unique integer solution $x$ for the system within the primary bounding range defined by the product of all individual moduli:\r
\r
$$0 \\le x < M \\quad \\text{where} \\quad M = m_1 \\cdot m_2 \\cdots m_k = \\prod_{i=1}^{k} m_i$$\r
\r
Furthermore, any other integer $y$ satisfies this system if and only if it is congruent to the primary solution $x$ modulo $M$, which is written as $y \\equiv x \\pmod M$.\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze the structures, proofs, and constructive solution steps of simultaneous congruence systems, the following precise vocabulary definitions are required:\r
\r
- **Moduli ($m_i$):** The set of independent positive integer divisors that establish the distinct modular scales of a congruence system.\r
- **Pairwise Coprime:** A structural condition across an integer set where every possible pairing of numbers shares no common factors other than 1, meaning $\\gcd(m_i, m_j) = 1$ for all $i \\neq j$.\r
- **Product Modulus ($M$):** The master modulus formed by multiplying all individual pairwise coprime moduli together, establishing the unique solution boundary limit.\r
- **Partial Product Coefficient ($M_i$):** The value obtained by dividing the master product modulus $M$ by an individual modulus $m_i$. It is defined as $M_i = \\frac{M}{m_i}$, which ensures that $M_i$ is relatively prime to $m_i$ but perfectly divisible by every other modulus in the system.\r
- **Partial Modular Inverse ($y_i$):** The unique integer value that satisfies the inverse balance equation $M_i \\cdot y_i \\equiv 1 \\pmod{m_i}$.\r
- **Simultaneous Linear System:** A mathematical model where an unknown variable is constrained by multiple linear equations or congruences that must all be satisfied at the same time.\r
- **Ring Isomorphism ($\\cong$):** A formal map in abstract algebra showing that two algebraic structures are completely identical in behavior. Under CRT, the direct product ring $\\mathbb{Z}_{m_1} \\times \\mathbb{Z}_{m_2} \\times \\dots \\times \\mathbb{Z}_{m_k}$ is isomorphic to the master ring $\\mathbb{Z}_M$.\r
\r
---\r
\r
## 3. Purpose\r
\r
The Chinese Remainder Theorem simplifies complex arithmetic operations by breaking a large calculation down into independent, small-scale computations that can be run at the same time.\r
\r
### Breaking Apart Complex Modular Equations\r
\r
When a modulus is an extremely large composite number, computing equations directly within that system can cause arithmetic overflow errors on modern computer hardware. The Chinese Remainder Theorem allows mathematicians to break a large calculation down into independent components using the prime factors of the original modulus. This mapping allows complex calculations to be resolved quickly inside small, separate remainder tracking pools.\r
\r
### Enabling Parallel Processing in Computer Architecture\r
\r
- **High-Speed Hardware Arithmetic:** Computer processing units (CPUs) use the **Residue Number System (RNS)**, which is directly derived from the Chinese Remainder Theorem. Instead of forcing digital logic paths to calculate huge 64-bit binary additions or multiplications sequentially, RNS splits the numbers across small, coprime modular registers. These smaller numbers can be added or multiplied in parallel, and the final 64-bit answer is reconstructed using CRT formulas. This approach removes processing bottlenecks and increases calculation speeds.\r
- **Optimizing Public-Key Cryptography (RSA Decryption):** Generating and verifying digital signatures or decrypting files via the RSA cryptosystem requires calculating large exponents modulo a giant composite number $n = pq$. Standard calculation routines can be slow. By using CRT, the secret key can be split across the prime factors $p$ and $q$. The system calculates two separate exponents ($x \\pmod p$ and $x \\pmod q$) and combines them using the CRT formula. This optimization makes RSA decryption up to **four times faster** than calculating the master exponent directly.\r
\r
### Real-World Technological Applications\r
\r
- **Secret Sharing Schemes (Adi Shamir's Threshold Variant):** Cryptographers use CRT to split sensitive digital assets or encryption keys into individual fragments distributed among a group of users. A single fragment reveals no data about the master secret. However, if a required threshold number of users combine their fragments, the system sets up a simultaneous congruence system and applies the CRT formula to reconstruct the original master file.\r
- **Digital Signal Processing (DSP):** Fast Fourier Transform (FFT) algorithms use CRT index mapping to convert a massive one-dimensional array of digital data points into a manageable multi-dimensional matrix. This layout modification accelerates the processing of audio waves, radar scans, and digital images.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
The Chinese Remainder Theorem follows strict algebraic rules that govern structural existence conditions, ring representations, and constructive balance steps.\r
\r
### The Constructive Solution Formula\r
\r
If the individual moduli are verified to be pairwise coprime, we can find the unique solution to the system of equations by using an explicit constructive formula. Let $M = \\prod_{i=1}^k m_i$ be the total product modulus. For each equation, we calculate a partial product coefficient:\r
\r
$$M_i = \\frac{M}{m_i}$$\r
\r
Because the moduli are pairwise coprime, the greatest common divisor of this partial product and the individual modulus is guaranteed to be 1 ($\\gcd(M_i, m_i) = 1$). This means each coefficient has a unique modular multiplicative inverse ($y_i$) modulo $m_i$:\r
\r
$$M_i \\cdot y_i \\equiv 1 \\pmod{m_i}$$\r
\r
By combining these components, we can assemble the final solution to the simultaneous system using the following linear combination formula:\r
\r
$$x = \\sum_{i=1}^{k} a_i \\cdot M_i \\cdot y_i = (a_1 M_1 y_1 + a_2 M_2 y_2 + \\dots + a_k M_k y_k) \\pmod M$$\r
\r
### Verifying the Correctness of the Construction\r
\r
We can prove that this constructed value for $x$ satisfies every individual equation in the system by evaluating it modulo any arbitrary single divisor $m_j$:\r
\r
$$x = a_1 M_1 y_1 + \\dots + a_j M_j y_j + \\dots + a_k M_k y_k \\pmod{m_j}$$\r
\r
Consider how each term in the sum behaves modulo $m_j$:\r
\r
- For any term where $i \\neq j$, the partial product coefficient $M_i$ contains the factor $m_j$ in its numerator. This means $M_i \\equiv 0 \\pmod{m_j}$, so all of those terms drop out of the equation.\r
- For the remaining target term where $i = j$, the inverse condition applies ($M_j \\cdot y_j \\equiv 1 \\pmod{m_j}$).\r
\r
Substituting these conditions reduces the equation down to:\r
$$x \\equiv 0 + \\dots + (a_j \\cdot 1) + \\dots + 0 \\equiv a_j \\pmod{m_j}$$\r
\r
This matches our initial condition, proving that the constructive formula successfully satisfies every congruence equation in the system.\r
\r
### Properties of Modular Systems and Extensions\r
\r
The following table summarizes the behavior of simultaneous congruence equations under different moduli configurations.\r
\r
| Structural Configuration       | Moduli Relationship Status                                | Existence of Solutions                                  | Solution Uniqueness Boundary                                          |\r
| :----------------------------- | :-------------------------------------------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------- |\r
| **Standard Coprime System**    | Pairwise Coprime ($\\gcd(m_i, m_j) = 1$)                   | Always guaranteed to exist                              | Unique modulo the total product $M = \\prod m_i$                       |\r
| **General Non-Coprime System** | Shared Factors Exist ($\\gcd(m_i, m_j) > 1$)               | Conditional: Requires $\\gcd(m_i, m_j) \\mid (a_i - a_j)$ | Unique modulo the least common multiple $\\text{lcm}(m_1, \\dots, m_k)$ |\r
| **Incompatible System**        | Shared Factors Exist ($\\gcd(m_i, m_j) \\nmid (a_i - a_j)$) | Absolutely zero solutions exist                         | No solution space (Null Empty Set)                                    |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
The Chinese Remainder Theorem can be adapted to handle non-coprime moduli, abstract algebraic structures, and polynomial fields.\r
\r
### 1. General Non-Coprime Extension\r
\r
The classic formulation of the theorem requires all moduli to be pairwise coprime. If the equations share common factors ($\\gcd(m_i, m_j) = d > 1$), a solution is not guaranteed. A non-coprime system is solvable if and only if the difference between any pair of target remainders is perfectly divisible by the greatest common divisor of their corresponding moduli:\r
\r
$$\\text{Solvability Criterion:} \\quad \\gcd(m_i, m_j) \\mid (a_i - a_j) \\quad \\forall i \\neq j$$\r
\r
If the system passes this check, it has a unique solution modulo the **least common multiple** of all the individual moduli:\r
\r
$$M_{\\text{lcm}} = \\text{lcm}(m_1, m_2, \\dots, m_k)$$\r
\r
### 2. Abstract Algebra Ring Isomorphism\r
\r
In abstract algebra, the Chinese Remainder Theorem can be written elegantly using ideal ring theory. Let $R$ be a commutative unital ring, and let $I_1, I_2, \\dots, I_k$ be comaximal ideals in $R$ (meaning $I_i + I_j = R$ for all $i \\neq j$). The generalized theorem states that the quotient ring of the intersection of these ideals is structurally isomorphic to the direct product of their individual quotient rings:\r
\r
$$R / (I_1 \\cap I_2 \\cap \\dots \\cap I_k) \\cong R/I_1 \\times R/I_2 \\times \\dots \\times R/I_k$$\r
\r
When applied to the integers, this algebraic mapping shows that working within the master ring $\\mathbb{Z}_M$ is functionally identical to processing calculations across separate, smaller rings ($\\mathbb{Z}_{m_i}$).\r
\r
### 3. Polynomial Congruence Fields ($F[x]$)\r
\r
The principles of the theorem can be extended beyond numbers to single-variable polynomial fields. Let $P_1(x), P_2(x), \\dots, P_k(x)$ be a set of polynomials that are pairwise coprime to one another. Given a target set of remainder polynomials $A_1(x), A_2(x), \\dots, A_k(x)$, there exists a unique master polynomial solution $X(x)$ that satisfies the system:\r
\r
$$X(x) \\equiv A_i(x) \\pmod{P_i(x)}$$\r
\r
This polynomial variation forms the mathematical framework used to construct error-correcting codes, manage digital transmissions, and build secret-sharing algorithms.\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for solving simultaneous congruence equations using the constructive formula, resolving systems via inductive substitution, and handling non-coprime moduli.\r
\r
### Strategy A: The Constructive Method (Standard CRT Formula)\r
\r
The constructive method resolves a coprime system of congruences by building a single, balanced solution equation using partial product coefficients and their modular inverses.\r
\r
**Example Question:** Solve the simultaneous linear congruence system for the unique shared integer variable $x$:\r
$$x \\equiv 2 \\pmod 3, \\quad x \\equiv 3 \\pmod 5, \\quad x \\equiv 2 \\pmod 7$$\r
\r
1. **Verify that the moduli are pairwise coprime and calculate the master product modulus ($M$):**\r
   Calculate the relationships between the moduli:\r
   $$\\gcd(3, 5) = 1, \\quad \\gcd(3, 7) = 1, \\quad \\gcd(5, 7) = 1$$\r
   The moduli are pairwise coprime, so the Chinese Remainder Theorem applies. Calculate the master product modulus $M$:\r
   $$M = 3 \\cdot 5 \\cdot 7 = 105$$\r
\r
2. **Calculate the partial product coefficients ($M_i$) for each individual equation:**\r
   Divide the total product modulus by each individual modulus:\r
   - $M_1 = \\frac{105}{3} = 35$\r
   - $M_2 = \\frac{105}{5} = 21$\r
   - $M_3 = \\frac{105}{7} = 15$\r
\r
3. **Calculate the modular inverse ($y_i$) for each partial product coefficient:**\r
   Find the inverse of each $M_i$ modulo its corresponding individual modulus $m_i$:\r
   - For $M_1$: $35y_1 \\equiv 1 \\pmod 3 \\implies 2y_1 \\equiv 1 \\pmod 3$. Testing values shows $2 \\cdot 2 = 4 \\equiv 1 \\pmod 3$, so $y_1 = 2$.\r
   - For $M_2$: $21y_2 \\equiv 1 \\pmod 5 \\implies 1y_2 \\equiv 1 \\pmod 5$, so $y_2 = 1$.\r
   - For $M_3$: $15y_3 \\equiv 1 \\pmod 7 \\implies 1y_3 \\equiv 1 \\pmod 7$, so $y_3 = 1$.\r
\r
4. **Assemble the final solution using the constructive linear formula:**\r
   Combine the target remainders ($a_i$), the partial products ($M_i$), and their modular inverses ($y_i$):\r
   $$x \\equiv a_1M_1y_1 + a_2M_2y_2 + a_3M_3y_3 \\pmod M$$\r
   $$x \\equiv (2 \\cdot 35 \\cdot 2) + (3 \\cdot 21 \\cdot 1) + (2 \\cdot 15 \\cdot 1) \\pmod{105}$$\r
   Calculate the total sum:\r
   $$x \\equiv 140 + 63 + 30 = 233 \\pmod{105}$$\r
\r
5. **Reduce the sum to its least non-negative residue modulo 105:**\r
   Divide 233 by 105 to find the remainder:\r
   $$233 = 2 \\cdot 105 + 23 \\implies 233 \\equiv 23 \\pmod{105}$$\r
\r
The unique solution within our boundary is $x = 23$. We can verify this answer by checking it against our original equations: $23 \\equiv 2 \\pmod 3$, $23 \\equiv 3 \\pmod 5$, and $23 \\equiv 2 \\pmod 7$.\r
\r
### Strategy B: The Inductive Substitution Method\r
\r
The substitution method resolves a system step-by-step, converting congruences into linear algebraic expressions and substituting them into the remaining equations.\r
\r
**Example Question:** Find the primary unique solution for the following system of congruences:\r
$$x \\equiv 1 \\pmod 5, \\quad x \\equiv 5 \\pmod 6, \\quad x \\equiv 4 \\pmod 7$$\r
\r
1. **Convert the first congruence equation into its equivalent parametric form:**\r
   $$x \\equiv 1 \\pmod 5 \\implies x = 1 + 5k_1 \\quad (\\text{for some integer } k_1 \\in \\mathbb{Z})$$\r
\r
2. **Substitute this expression into the second congruence equation:**\r
   $$1 + 5k_1 \\equiv 5 \\pmod 6$$\r
   Isolate the variable term $k_1$:\r
   $$5k_1 \\equiv 4 \\pmod 6$$\r
   We can simplify the coefficient by rewriting 5 as $-1 \\pmod 6$:\r
   $$-1k_1 \\equiv 4 \\pmod 6 \\implies k_1 \\equiv -4 \\equiv 2 \\pmod 6$$\r
\r
3. **Convert this new variable condition into its parametric form:**\r
   $$k_1 = 2 + 6k_2 \\quad (\\text{for some integer } k_2 \\in \\mathbb{Z})$$\r
\r
4. **Substitute this expression back into the primary equation for $x$:**\r
   $$x = 1 + 5(2 + 6k_2) = 1 + 10 + 30k_2 = 11 + 30k_2$$\r
   This combined equation represents the unique solution for the first two equations, valid modulo 30 ($M_{12} = 5 \\cdot 6 = 30$).\r
\r
5. **Substitute this combined expression into the third congruence equation:**\r
   $$11 + 30k_2 \\equiv 4 \\pmod 7$$\r
   Simplify the constants modulo 7 ($11 \\equiv 4$ and $30 \\equiv 2$):\r
   $$4 + 2k_2 \\equiv 4 \\pmod 7$$\r
   Isolate the variable term $k_2$:\r
   $$2k_2 \\equiv 0 \\pmod 7$$\r
   Since $\\gcd(2, 7) = 1$, we can divide by 2:\r
   $$k_2 \\equiv 0 \\pmod 7 \\implies k_2 = 7k_3 \\quad (\\text{for some integer } k_3 \\in \\mathbb{Z})$$\r
\r
6. **Substitute this final parameter value back into the master expression for $x$:**\r
   $$x = 11 + 30(7k_3) = 11 + 210k_3$$\r
   This gives us the final parametric formula. Rewriting this as a congruence modulo 210 ($M = 5 \\cdot 6 \\cdot 7 = 210$) gives our solution:\r
   $$x \\equiv 11 \\pmod{210}$$\r
\r
The unique solution is exactly $x = 11$.\r
\r
### Strategy C: Solving a Non-Coprime System\r
\r
When a system contains moduli that share common factors, we must check the solvability condition before calculating a solution modulo their least common multiple.\r
\r
**Example Question:** Find the integer solution for the non-coprime system:\r
$$x \\equiv 3 \\pmod 6, \\quad x \\equiv 5 \\pmod 8$$\r
\r
1. **Check the solvability condition using the greatest common divisor:**\r
   The moduli are $m_1 = 6$ and $m_2 = 8$. Calculate their $\\gcd$:\r
   $$\\gcd(6, 8) = 2$$\r
   Now check if this $\\gcd$ divides the difference between the target remainders ($a_2 - a_1 = 5 - 3 = 2$):\r
   $$2 \\div 2 = 1 \\implies 2 \\mid 2$$\r
   Because 2 divides the difference between the remainders, the non-coprime system is solvable.\r
\r
2. **Determine the target boundary modulus for the final solution:**\r
   Calculate the least common multiple of the two moduli:\r
   $$M_{\\text{lcm}} = \\text{lcm}(6, 8) = 24$$\r
   The final solution will be unique modulo 24.\r
\r
3. **Solve the system using the substitution method:**\r
   Convert the first equation into its parametric form:\r
   $$x \\equiv 3 \\pmod 6 \\implies x = 3 + 6k$$\r
   Substitute this expression into the second equation:\r
   $$3 + 6k \\equiv 5 \\pmod 8$$\r
   Isolate the variable term:\r
   $$6k \\equiv 2 \\pmod 8$$\r
   Since the coefficient, constant, and modulus are all even, we can divide the entire congruence equation by 2:\r
   $$3k \\equiv 1 \\pmod 4$$\r
   Find the modular inverse of 3 modulo 4. Since $3 \\cdot 3 = 9 \\equiv 1 \\pmod 4$, the inverse is 3. Multiply both sides by 3:\r
   $$3 \\cdot (3k) \\equiv 3 \\cdot 1 \\pmod 4 \\implies 1k \\equiv 3 \\pmod 4$$\r
   Convert this result into its parametric form:\r
   $$k = 3 + 4n$$\r
\r
4. **Substitute this value back into the primary equation for $x$:**\r
   $$x = 3 + 6(3 + 4n) = 3 + 18 + 24n = 21 + 24n$$\r
   Convert this parametric expression back into a congruence modulo 24:\r
   $$x \\equiv 21 \\pmod{24}$$\r
\r
The system resolves cleanly to $x = 21$. We can verify this answer by checking it against our original equations: $21 \\equiv 3 \\pmod 6$ and $21 \\equiv 5 \\pmod 8$.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Simultaneous Resolution:** The Chinese Remainder Theorem proves that a simultaneous system of linear congruence equations has a guaranteed, unique integer solution if its individual moduli are pairwise coprime ($\\gcd(m_i, m_j) = 1$).\r
- **Unique Solution Space Boundary:** For a coprime system, the final solution is unique within a primary range defined by the product of all individual moduli ($M = m_1 \\cdot m_2 \\cdots m_k$).\r
- **Algorithmic Reconstruction:** You can find the unique solution to a coprime system using an explicit constructive formula built from partial product coefficients ($M_i = \\frac{M}{m_i}$) and their modular inverses ($M_i \\cdot y_i \\equiv 1 \\pmod{m_i}$).\r
- **Non-Coprime Symmetries:** If the equations share common factors ($\\gcd(m_i, m_j) > 1$), the system is solvable if and only if the $\\gcd$ of the moduli divides the difference between their remainders. The resulting solution is unique modulo the least common multiple of the moduli.\r
- **Hardware Acceleration Architecture:** By allowing large calculations to be broken down and processed in parallel across small, separate remainder tracking registers, the Chinese Remainder Theorem provides the mathematical framework that accelerates modern computing processors and cryptographic systems.\r
`;export{e as default};