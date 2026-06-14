var e=`# Number Theory: Primes\r
\r
---\r
\r
## 1. Definition\r
\r
In the field of pure mathematics and elementary number theory, a **prime number** (or simply a **prime**) is a foundational positive integer greater than 1 that cannot be formed by multiplying two smaller positive integers. Structurally, it serves as an indivisible multi-dimensional atom of the multiplicative number system.\r
\r
Formally, a positive integer $p \\in \\mathbb{Z}^{+}$ is classified as a prime number if it strictly satisfies the following dual algebraic conditions:\r
\r
1. **Magnitude Condition:** The integer must be strictly greater than one:\r
   $$p > 1$$\r
2. **Divisor Condition:** The only positive integer divisors (factors) of $p$ are the number 1 and the number $p$ itself.\r
\r
This relationship can be expressed logically as:\r
\r
$$\\forall p \\in \\mathbb{Z}^{+} \\text{ where } p > 1, \\quad p \\in \\mathbb{P} \\iff \\left( d \\mid p \\implies d = 1 \\lor d = p \\right)$$\r
\r
Where $\\mathbb{P}$ represents the infinite set of all prime numbers.\r
\r
Any positive integer greater than 1 that does not fulfill these conditions—meaning it can be split into a product of two smaller positive integers—is called a **composite number**. The integer 1 is unique; it is classified as neither prime nor composite, serving instead as the universal multiplicative identity (a **unit** in ring theory).\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze the behavior, spacing, and application of primes within advanced algebra, the following precise vocabulary definitions are required:\r
\r
- **Prime Number:** A positive integer $p > 1$ whose only positive divisors are 1 and $p$.\r
- **Composite Number:** A positive integer $n > 1$ that possesses at least one positive divisor other than 1 and itself ($n = a \\cdot b$ where $1 < a, b < n$).\r
- **Coprime / Relatively Prime:** A structural relationship between two integers $a$ and $b$ where they share no common prime factors, meaning their greatest common divisor is exactly one ($\\text{gcd}(a, b) = 1$).\r
- **Prime Factorization:** The unique mathematical expression of a composite number as the product of prime numbers.\r
- **Primality Test:** An algorithmic or mathematical procedure used to determine whether a given target number is prime or composite.\r
- **Sieve of Eratosthenes:** An ancient, highly efficient iterative geometric algorithm used to find all prime numbers up to a specified maximum integer boundary.\r
- **Mersenne Prime:** A specialized prime number configuration that can be written in the form $M_p = 2^p - 1$, where the exponent $p$ is also a prime number.\r
- **Twin Primes:** A pair of distinct prime numbers that differ by exactly two units ($p$ and $p + 2$), such as $(11, 13)$.\r
\r
---\r
\r
## 3. Purpose\r
\r
Prime numbers form the structural backbone of arithmetic, serving as a cornerstone for both theoretical proofs and modern digital security infrastructure.\r
\r
### The Atomic Architecture of Mathematics\r
\r
Just as chemical elements combine to form physical molecules, prime numbers combine through multiplication to construct every positive integer. Without prime numbers, the **Fundamental Theorem of Arithmetic** cannot exist. This theorem ensures structural consistency across algebra by proving that every composite number can be broken down into a single, unique combination of prime factors.\r
\r
### Fueling Modern Public Key Cryptography\r
\r
The asymmetry of multiplication and factorization is one of the most critical properties in digital security. While a computer can multiply two thousand-digit prime numbers together almost instantly, reversing the process—finding the original prime factors of that product—would take modern supercomputers billions of years. This computational gap forms the core security mechanism for:\r
\r
- **RSA Encryption:** Securing credit card transactions and international bank transfers.\r
- **Diffie-Hellman Key Exchanges:** Creating secure, encrypted communication channels over public networks.\r
- **Digital Signatures:** Verifying file authenticity and preventing unauthorized modifications.\r
\r
### Optimizing Natural and Industrial Systems\r
\r
- **Biological Emergence Cycles:** Certain species of periodic cicadas remain underground for exactly 13 or 17 years before emerging to breed. Because 13 and 17 are prime numbers, it is incredibly difficult for predators with shorter, shifting life cycles (e.g., 2, 3, or 4 years) to evolve synchronization patterns that exploit the cicada hatches.\r
- **Industrial Gear Optimization:** Engineers design industrial gear assemblies and cutting tools with prime numbers of teeth. This prevents the same teeth from aligning repeatedly on every turn, distributing wear evenly and extending mechanical life.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Primes follow strict structural laws that govern unique factorization, modular configurations, and distribution density.\r
\r
### The Fundamental Theorem of Arithmetic\r
\r
Every integer $n > 1$ can be expressed as a product of prime numbers in exactly one way, ignoring the order of the factors. Formally, any integer $n > 1$ can be uniquely written in its canonical form:\r
\r
$$n = p_1^{e_1} \\cdot p_2^{e_2} \\dots p_k^{e_k} = \\prod_{i=1}^{k} p_i^{e_i}$$\r
\r
Where $p_1 < p_2 < \\dots < p_k$ are distinct prime numbers, and each exponent $e_i$ is a positive integer.\r
\r
### Euclid's Theorem on the Infinitude of Primes\r
\r
The set of prime numbers $\\mathbb{P}$ is infinite. There is no such thing as a "largest prime number."\r
\r
> **Euclid's Classical Proof Outline:** Assume the set of primes is finite, containing only $\\{p_1, p_2, \\dots, p_n\\}$. Construct a new integer $N$ by multiplying all known primes together and adding 1:\r
> $$N = (p_1 \\cdot p_2 \\dots p_n) + 1$$\r
> This number $N$ cannot be divided evenly by any prime in our finite list, because division by any $p_i$ will always leave a remainder of 1. Therefore, $N$ must either be a new prime number itself or be divisible by a prime factor not included in our initial list. Both cases contradict the assumption that the list was finite.\r
\r
### The Prime Number Theorem (PNT)\r
\r
As integers grow larger, prime numbers become less frequent. The Prime Number Theorem describes this distribution, stating that the number of primes less than or equal to a target value $x$ (denoted by the prime-counting function $\\pi(x)$) approaches a clean logarithmic curve as $x$ approaches infinity:\r
\r
$$\\pi(x) \\approx \\frac{x}{\\ln(x)} \\implies \\lim_{x \\to \\infty} \\frac{\\pi(x)}{\\frac{x}{\\ln(x)}} = 1$$\r
\r
### Core Algebraic Properties of Primes\r
\r
The following table summarizes vital mathematical theorems and identities that govern prime interactions.\r
\r
| Theorem Identity Name       | Mathematical Formula                                         | Prerequisite Constraint                 | Operational Significance                                         |\r
| :-------------------------- | :----------------------------------------------------------- | :-------------------------------------- | :--------------------------------------------------------------- |\r
| **Euclid's Lemma**          | $\\text{If } p \\mid ab, \\text{ then } p \\mid a \\lor p \\mid b$ | $p \\in \\mathbb{P}$                      | Proves prime factors cannot be broken apart across products      |\r
| **Fermat's Little Theorem** | $a^p \\equiv a \\pmod p$                                       | $p \\in \\mathbb{P}, \\, a \\in \\mathbb{Z}$ | Provides a foundational mechanism for early primality tests      |\r
| **Wilson's Theorem**        | $(p - 1)! \\equiv -1 \\pmod p$                                 | $p \\in \\mathbb{P}$                      | Formulates a theoretical condition for primality verification    |\r
| **Goldbach's Conjecture**   | $2n = p_1 + p_2$                                             | $\\forall n \\in \\mathbb{Z}, \\, n > 1$    | Unproven assertion that every even number is a sum of two primes |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Primes are classified into various distinct families based on their specific algebraic forms, generation formulas, or geometric relationships.\r
\r
### 1. Mersenne Primes ($M_n$)\r
\r
A Mersenne prime is a prime number that can be expressed as one less than a power of two. Formally written as:\r
\r
$$M_n = 2^n - 1$$\r
\r
For $M_n$ to be prime, the exponent $n$ must also be a prime number. Mersenne primes are highly valued in computational mathematics because they can be verified efficiently using specialized algorithms like the Lucas-Lehmer test.\r
\r
> **The Perfect Number Connection:** Mersenne primes are directly tied to **perfect numbers** (numbers that equal the sum of their proper divisors). According to the Euclid-Euler Theorem, every even perfect number matches the formula:\r
> $$E = 2^{p-1}(2^p - 1) = 2^{p-1}M_p \\quad \\text{where } M_p \\text{ is a Mersenne prime}$$\r
\r
### 2. Sophie Germain Primes\r
\r
A prime number $p$ is classified as a **Sophie Germain prime** if multiplying it by 2 and adding 1 yields another prime number, denoted as $q$:\r
\r
$$q = 2p + 1 \\quad \\text{where } p, q \\in \\mathbb{P}$$\r
\r
The resulting prime $q$ is called a **safe prime**. Safe primes are critical in cryptography because they make modular calculations highly resistant to specific factoring attacks, such as Pollard's rho algorithm.\r
\r
### 3. Structural Configurations based on Modulo Classes\r
\r
Primes greater than 2 can be grouped into distinct algebraic families based on their remainder when divided by 4:\r
\r
- **Pythagorean Primes ($p \\equiv 1 \\pmod 4$):** Primes that can always be written uniquely as the sum of two perfect squares ($p = x^2 + y^2$). Examples include $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$.\r
- **Non-Pythagorean Primes ($p \\equiv 3 \\pmod 4$):** Primes that can never be expressed as the sum of two perfect squares.\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for executing manual trial primality tests, implementing the Sieve of Eratosthenes, and determining the prime factorization of a composite number.\r
\r
### Strategy A: Conducting a Primality Test via Trial Division\r
\r
To determine whether a specific number $n$ is prime or composite, you only need to check if it is divisible by prime numbers up to its square root ($\\sqrt{n}$).\r
\r
**Example Question:** Determine if the integer $n = 143$ is a prime number.\r
\r
1. **Calculate the square root limit of the target number:**\r
   $$\\sqrt{143} \\approx 11.958$$\r
   This means we only need to test for prime factors less than or equal to 11.\r
\r
2. **List all prime numbers up to this calculated limit:**\r
   The relevant primes to check are: $\\{2, 3, 5, 7, 11\\}$.\r
\r
3. **Perform sequential divisibility checks:**\r
   - **Test 2:** 143 is odd, so $2 \\nmid 143$.\r
   - **Test 3:** The digit sum is $1 + 4 + 3 = 8$. Since 8 is not divisible by 3, $3 \\nmid 143$.\r
   - **Test 5:** The final digit is 3, not 0 or 5, so $5 \\nmid 143$.\r
   - **Test 7:** Perform division: $143 = 7 \\cdot 20 + 3$. The remainder is non-zero, so $7 \\nmid 143$.\r
   - **Test 11:** Perform division: $143 \\div 11 = 13$. The remainder is exactly 0 ($143 = 11 \\cdot 13$).\r
\r
4. **Interpret the results:**\r
   Because 143 is divisible by 11, it has a factor other than 1 and itself.\r
\r
Therefore, 143 is a **composite number** ($143 = 11 \\times 13$).\r
\r
### Strategy B: Generating Primes via the Sieve of Eratosthenes\r
\r
The **Sieve of Eratosthenes** is an efficient algorithm for finding all prime numbers up to a specified limit by iteratively marking the multiples of each discovered prime.\r
\r
**Example Question:** Generate all prime numbers up to the limit $n = 30$.\r
\r
1. **Write down all integers from 2 up to 30:**\r
\r
   $$\r
   \\begin{array}{cccccccccc}\r
   & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\\\\r
   11 & 12 & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 \\\\\r
   21 & 22 & 23 & 24 & 25 & 26 & 27 & 28 & 29 & 30\r
   \\end{array}\r
   $$\r
\r
2. **Start with the first unmarked number (2). Circle it as a prime, then cross out all of its larger multiples:**\r
   Cross out: $4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30$.\r
\r
3. **Move to the next unmarked number (3). Circle it as a prime, then cross out all of its larger multiples:**\r
   Cross out: $9, 15, 21, 27$ (multiples like 6 and 12 were already crossed out by 2).\r
\r
4. **Move to the next unmarked number (5). Circle it as a prime, then cross out all of its larger multiples:**\r
   Cross out: $25$ (multiples like 10, 15, 20, and 30 were already crossed out).\r
\r
5. **Continue this process up to $\\sqrt{30} \\approx 5.47$:**\r
   Since we have reached 5, the filtering phase is complete. Every remaining unmarked number in our list is guaranteed to be a prime.\r
\r
6. **Collect the circled numbers:**\r
   $$\\mathbb{P}_{\\le 30} = \\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29\\}$$\r
\r
All prime numbers up to 30 are successfully generated.\r
\r
### Strategy C: Finding the Canonical Prime Factorization\r
\r
Every composite number can be broken down step-by-step into its unique prime factorization using a prime factor tree or sequential division.\r
\r
**Example Question:** Find the canonical prime factorization of the integer $n = 360$.\r
\r
1. **Divide the number by the smallest possible prime factor (2) repeatedly:**\r
   $$360 \\div 2 = 180$$\r
   $$180 \\div 2 = 90$$\r
   $$90 \\div 2 = 45$$\r
   Since 45 is odd, 2 is no longer a factor. Our first prime factor component is $2^3$.\r
\r
2. **Divide the remainder by the next smallest prime factor (3) repeatedly:**\r
   $$45 \\div 3 = 15$$\r
   $$15 \\div 3 = 5$$\r
   Our second prime factor component is $3^2$.\r
\r
3. **Evaluate the final remaining value:**\r
   The remaining value is 5, which is itself a prime number ($5^1$).\r
\r
4. **Assemble the prime factors into canonical exponential form:**\r
   Combine the calculated components:\r
   $$360 = 2^3 \\cdot 3^2 \\cdot 5^1$$\r
\r
The canonical prime factorization of 360 is successfully calculated.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Arithmetic Foundations:** A prime number is a positive integer greater than 1 whose only positive divisors are 1 and itself. These numbers serve as the fundamental building blocks for all integers.\r
- **Structural Uniqueness:** The Fundamental Theorem of Arithmetic guarantees that every composite number can be factored into a completely unique combination of prime numbers.\r
- **Infinite Scope:** There are infinitely many prime numbers. However, as numbers grow larger, the overall density of primes decreases logarithmically according to the formula $\\frac{x}{\\ln(x)}$.\r
- **Cryptographic Value:** The computational difficulty of factoring large numbers into their component primes forms the security foundation for modern digital encryption standards, such as RSA.\r
- **Structural Varieties:** Primes are classified into specialized functional families—such as Mersenne primes ($2^p-1$), Sophie Germain primes ($2p+1$), and modular classes—based on their specific algebraic behaviors.\r
`;export{e as default};