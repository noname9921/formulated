var e=`# Number Theory: Arithmetic Functions\r
\r
---\r
\r
## 1. Definition\r
\r
In the branch of mathematics known as Number Theory, an **arithmetic function** (or number-theoretic function) is any function whose domain is strictly the set of positive integers ($\\mathbb{Z}^{+}$) and whose codomain is the set of complex numbers ($\\mathbb{C}$). Formally, an arithmetic function is a sequence mapped as follows:\r
\r
$$f: \\mathbb{Z}^{+} \\to \\mathbb{C}$$\r
\r
Rather than measuring continuous values like geometric calculus functions, an arithmetic function quantifies the arithmetic and structural properties of an integer itself. This includes analyzing its prime divisors, its total number of factors, or its positional relationships with smaller numbers.\r
\r
The most valuable arithmetic functions possess structural behaviors under multiplication. An arithmetic function $f$ is classified as **multiplicative** if it preserves the product of coprime integers:\r
\r
$$f(a \\cdot b) = f(a) \\cdot f(b) \\quad \\text{whenever} \\quad \\gcd(a, b) = 1$$\r
\r
Furthermore, an arithmetic function is classified as **completely multiplicative** if this product rule holds true for all integers, regardless of whether they share common factors:\r
\r
$$f(a \\cdot b) = f(a) \\cdot f(b) \\quad \\forall a, b \\in \\mathbb{Z}^{+}$$\r
\r
These multiplicative traits allow us to compute the value of an arithmetic function for any massive integer by simply evaluating its behavior on individual prime power components.\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze the patterns, operations, and transformations of number-theoretic functions, the following precise vocabulary definitions are required:\r
\r
- **Arithmetic Function:** A function that maps positive integers to complex numbers.\r
- **Multiplicative Function:** An arithmetic function where $f(ab) = f(a)f(b)$ for all coprime pairs $\\gcd(a, b) = 1$.\r
- **Completely Multiplicative Function:** An arithmetic function where $f(ab) = f(a)f(b)$ for all positive integers $a$ and $b$.\r
- **Dirichlet Convolution:** An algebraic binary operation that combines two arithmetic functions into a third function by summing their values across all positive divisors.\r
- **Dirichlet Inverse:** A specific function $f^{-1}$ that satisfies the identity $f * f^{-1} = \\epsilon$ under Dirichlet convolution.\r
- **Möbius Inversion Theorem:** A theorem that allows an arithmetic function to be extracted from its sum over divisors, using the Möbius function ($\\mu$).\r
- **Perfect Number:** A positive integer that is exactly equal to the sum of its proper positive divisors, meaning $\\sigma(n) = 2n$.\r
\r
---\r
\r
## 3. Purpose\r
\r
Arithmetic functions act as investigative tools in number theory. They translate discrete patterns of divisibility and prime distribution into structured algebraic equations.\r
\r
### Unlocking the Distribution of Prime Numbers\r
\r
Prime numbers appear erratic when listed linearly. Arithmetic functions uncover the hidden order within this distribution. For instance, **Euler's Totient Function ($\\phi(n)$)** tracks how many integers up to $n$ are coprime to it. This tracking capability provides the mathematical foundation needed to establish **Euler's Theorem**, a cornerstone of modular algebra.\r
\r
### Structuring Abstract Algebra and Field Inverses\r
\r
Arithmetic functions form a structured algebraic ring under addition and **Dirichlet convolution**. Exploring this ring provides the tools needed to prove deep identities about primes, greatest common divisors, and divisors. It allows mathematicians to translate properties of divisor networks into simple algebraic transformations.\r
\r
### Real-World Technological Applications\r
\r
- **Public Key Cryptography (RSA Encryption):** The RSA encryption protocol protects internet traffic, online financial transactions, and secure databases. Generating RSA keys relies on calculating Euler's Totient function for a product of two large prime numbers ($n = pq$). The security of the system relies on the fact that while computing $\\phi(n)$ is instantaneous if the prime factors are known ($\\phi(n) = (p-1)(q-1)$), it is virtually impossible to compute without factoring $n$ first.\r
- **Information Hashing Algorithms:** Data lookup engines use multiplicative functions to index keys across databases. This ensures a uniform distribution of records and minimizes data lookup collisions.\r
- **Digital Signal Processing:** The properties of the Möbius function and Dirichlet arithmetic convolutions are used to construct efficient algorithms for discrete fast Fourier transforms, speeding up digital audio and video processing.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Arithmetic functions follow strict algebraic laws that govern multiplication, divisor summing, and operations within convolution rings.\r
\r
### The Power of Multiplicative Prime Factorization\r
\r
If an arithmetic function $f$ is multiplicative, we can calculate its value for any large composite number by breaking the number down into its canonical prime factorization. Let $n = p_1^{e_1} \\cdot p_2^{e_2} \\dots p_k^{e_k}$. Because distinct prime powers are automatically coprime to one another, we can distribute the function across the prime components:\r
\r
$$f(n) = f(p_1^{e_1}) \\cdot f(p_2^{e_2}) \\dots f(p_k^{e_k}) = \\prod_{i=1}^{k} f(p_i^{e_i})$$\r
\r
This property simplifies the study of multiplicative functions, reducing the analysis of an infinite set of integers to evaluating how the function behaves on single prime powers ($p^e$).\r
\r
### Dirichlet Convolution Operations\r
\r
The **Dirichlet Convolution** is a fundamental binary operation defined on the set of all arithmetic functions. For two arithmetic functions $f$ and $g$, their Dirichlet convolution, denoted as $f * g$, is defined by the formula:\r
\r
$$(f * g)(n) = \\sum_{d \\mid n} f(d) \\cdot g\\left(\\frac{n}{d}\\right)$$\r
\r
The summation runs over all positive divisors $d$ of the integer $n$. This operation satisfies the following structural algebraic properties:\r
\r
- **Commutativity:** $f * g = g * f$\r
- **Associativity:** $(f * g) * h = f * (g * h)$\r
- **Identity Element:** The unique identity function is $\\epsilon(n)$, which evaluates to 1 if $n=1$ and 0 otherwise. Thus, $f * \\epsilon = f$.\r
\r
An essential structural property states that if $f$ and $g$ are both multiplicative functions, their Dirichlet convolution $f * g$ is guaranteed to be multiplicative as well.\r
\r
### Standard Core Arithmetic Functions\r
\r
The following table summarizes the primary core arithmetic functions used in number theory.\r
\r
| Function Name              | Standard Notation Symbol | Definition / Operational Formula                               | Multiplicative Type       |\r
| :------------------------- | :----------------------- | :------------------------------------------------------------- | :------------------------ |\r
| **Identity Function**      | $\\epsilon(n)$            | $\\epsilon(1) = 1$; $\\epsilon(n) = 0$ for all $n > 1$           | Completely Multiplicative |\r
| **Constant Function**      | $1(n)$                   | $1(n) = 1$ for all $n \\in \\mathbb{Z}^{+}$                      | Completely Multiplicative |\r
| **Idempotent Function**    | $\\text{id}(n)$           | $\\text{id}(n) = n$ for all $n \\in \\mathbb{Z}^{+}$              | Completely Multiplicative |\r
| **Divisor Count Function** | $\\tau(n)$ or $d(n)$      | $\\tau(n) = \\sum_{d \\mid n} 1$ (Counts total positive divisors) | Multiplicative            |\r
| **Divisor Sum Function**   | $\\sigma(n)$              | $\\sigma(n) = \\sum_{d \\mid n} d$ (Sums all positive divisors)   | Multiplicative            |\r
| **Euler's Totient**        | $\\phi(n)$                | Counts integers $k \\le n$ such that $\\gcd(k, n) = 1$           | Multiplicative            |\r
| **Möbius Function**        | $\\mu(n)$                 | Maps numbers based on their prime square-free factors          | Multiplicative            |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
We can classify arithmetic functions into distinct categories based on their structural behaviors under Dirichlet convolutions and prime factorizations.\r
\r
### 1. The Möbius Function ($\\mu(n)$)\r
\r
The **Möbius Function** is a critical tool for reversing divisor sums. It is defined as follows for any positive integer $n$:\r
\r
$$\r
\\mu(n) = \\begin{cases}\r
1 & \\text{if } n = 1 \\\\\r
0 & \\text{if } n \\text{ is divisible by a perfect square } (a^2 \\mid n, \\, a > 1) \\\\\r
(-1)^k & \\text{if } n \\text{ is the product of } k \\text{ distinct prime factors}\r
\\end{cases}\r
$$\r
\r
The Möbius function acts as the unique Dirichlet inverse of the constant function $1(n)$, yielding the core identity:\r
$$\\mu * 1 = \\epsilon$$\r
\r
### 2. The Möbius Inversion Theorem\r
\r
This theorem allows us to invert divisor sums. Let $f$ and $g$ be two arithmetic functions. If $g(n)$ is defined as the sum of $f(d)$ over all divisors of $n$:\r
\r
$$g(n) = \\sum_{d \\mid n} f(d) \\implies g = f * 1$$\r
\r
Then the Möbius Inversion Theorem states that you can extract the original function $f(n)$ using the Möbius function:\r
\r
$$f(n) = \\sum_{d \\mid n} \\mu(d) \\cdot g\\left(\\frac{n}{d}\\right) \\implies f = g * \\mu$$\r
\r
### 3. Von Mangoldt Function ($\\Lambda(n)$)\r
\r
Not all valuable arithmetic functions are multiplicative. The **Von Mangoldt Function**, denoted as $\\Lambda(n)$, is an additive arithmetic tool used to analyze prime distributions. It is defined as:\r
\r
$$\r
\\Lambda(n) = \\begin{cases}\r
\\ln(p) & \\text{if } n = p^m \\text{ for some prime } p \\text{ and integer } m \\ge 1 \\\\\r
0 & \\text{otherwise}\r
\\end{cases}\r
$$\r
\r
This function assigns non-zero weights exclusively to prime numbers and their pure powers, serving as a core component in proofs of the **Prime Number Theorem**.\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for evaluating divisor counts, computing Euler's totient values via prime factor reduction, and applying Dirichlet convolution formulas.\r
\r
### Strategy A: Finding the Total Count and Sum of Positive Divisors\r
\r
By using the exponents from a number's prime factorization, we can calculate its total count of divisors ($\\tau(n)$) and its sum of divisors ($\\sigma(n)$) without listing the factors individually.\r
\r
**Example Question:** For the integer $n = 180$, calculate the total number of unique positive divisors ($\\tau(180)$) and find the sum of those divisors ($\\sigma(180)$).\r
\r
1. **Find the unique canonical prime factorization of the target number:**\r
   Break 180 down into its component primes:\r
   $$180 = 18 \\cdot 10 = (2 \\cdot 3^2) \\cdot (2 \\cdot 5) = 2^2 \\cdot 3^2 \\cdot 5^1$$\r
\r
2. **Calculate the total divisor count using the $\\tau(n)$ formula:**\r
   The formula adds 1 to each prime exponent and multiplies the results together:\r
   $$\\tau(n) = \\prod_{i=1}^{k} (e_i + 1)$$\r
   Substitute the exponents $e_1 = 2$, $e_2 = 2$, and $e_3 = 1$:\r
   $$\\tau(180) = (2 + 1) \\cdot (2 + 1) \\cdot (1 + 1)$$\r
   $$\\tau(180) = 3 \\cdot 3 \\cdot 2 = 18$$\r
   The number 180 has exactly 18 unique positive divisors.\r
\r
3. **Calculate the sum of all positive divisors using the $\\sigma(n)$ formula:**\r
   The formula evaluates each prime power component using a geometric series:\r
   $$\\sigma(n) = \\prod_{i=1}^{k} \\frac{p_i^{e_i + 1} - 1}{p_i - 1}$$\r
   Substitute our prime factors and exponents into this formula:\r
   $$\\sigma(180) = \\left( \\frac{2^{2+1} - 1}{2 - 1} \\right) \\cdot \\left( \\frac{3^{2+1} - 1}{3 - 1} \\right) \\cdot \\left( \\frac{5^{1+1} - 1}{5 - 1} \\right)$$\r
   Evaluate each term:\r
   $$\\sigma(180) = \\left( \\frac{8 - 1}{1} \\right) \\cdot \\left( \\frac{27 - 1}{2} \\right) \\cdot \\left( \\frac{25 - 1}{4} \\right)$$\r
   $$\\sigma(180) = \\left( \\frac{7}{1} \\right) \\cdot \\left( \\frac{26}{2} \\right) \\cdot \\left( \\frac{24}{4} \\right)$$\r
   $$\\sigma(180) = 7 \\cdot 13 \\cdot 6 = 546$$\r
\r
The sum of all positive divisors for 180 is exactly 546.\r
\r
### Strategy B: Computing Euler's Totient Function ($\\phi(n)$)\r
\r
Euler's Totient Function can be computed efficiently by applying Euler's product formula to the number's prime factors.\r
\r
**Example Question:** Compute the value of Euler's Totient Function for $n = 120$ (meaning calculate $\\phi(120)$).\r
\r
1. **Find the unique prime factors of the number:**\r
   Break 120 down into its prime components:\r
   $$120 = 12 \\cdot 10 = (2^2 \\cdot 3) \\cdot (2 \\cdot 5) = 2^3 \\cdot 3^1 \\cdot 5^1$$\r
   The distinct prime factors are $p_1 = 2$, $p_2 = 3$, and $p_3 = 5$.\r
\r
2. **Recall Euler's product formula for the totient function:**\r
   $$\\phi(n) = n \\cdot \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right)$$\r
\r
3. **Substitute the target number and its distinct prime factors into the formula:**\r
   $$\\phi(120) = 120 \\cdot \\left(1 - \\frac{1}{2}\\right) \\cdot \\left(1 - \\frac{1}{3}\\right) \\cdot \\left(1 - \\frac{1}{5}\\right)$$\r
   Simplify the fractional terms inside the parentheses:\r
   $$\\phi(120) = 120 \\cdot \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{2}{3}\\right) \\cdot \\left(\\frac{4}{5}\\right)$$\r
\r
4. **Multiply the terms together to find the final value:**\r
   $$\\phi(120) = 120 \\cdot \\frac{1 \\cdot 2 \\cdot 4}{2 \\cdot 3 \\cdot 5} = 120 \\cdot \\frac{8}{30}$$\r
   $$\\phi(120) = 120 \\cdot \\frac{4}{15} = 8 \\cdot 4 = 32$$\r
\r
There are exactly 32 positive integers less than or equal to 120 that are relatively prime to it.\r
\r
### Strategy C: Evaluating an Explicit Dirichlet Convolution Value\r
\r
To compute the value of a Dirichlet convolution $(f * g)(n)$ for a specific integer, you evaluate the product sum across all valid divisor pairs.\r
\r
**Example Question:** Let $f(n) = \\text{id}(n) = n$ and $g(n) = \\mu(n)$. Calculate the value of their Dirichlet convolution $(f * g)(12)$.\r
\r
1. **List all positive divisors ($d$) of the integer 12:**\r
   The divisors are: $d \\in \\{1, 2, 3, 4, 6, 12\\}$.\r
\r
2. **Set up the formal expansion for the Dirichlet convolution sum:**\r
   $$(f * g)(12) = \\sum_{d \\mid 12} \\text{id}(d) \\cdot \\mu\\left(\\frac{12}{d}\\right)$$\r
   Expand the sum across all six divisor terms:\r
\r
   $$\r
   \\begin{aligned}\r
   (f * g)(12) = & \\,\\, \\text{id}(1)\\mu(12) + \\text{id}(2)\\mu(6) + \\text{id}(3)\\mu(4) \\\\\r
   & + \\text{id}(4)\\mu(3) + \\text{id}(6)\\mu(2) + \\text{id}(12)\\mu(1)\r
   \\end{aligned}\r
   $$\r
\r
3. **Evaluate the individual components of the expansion:**\r
   Compute the values for both functions across all terms, recalling that $\\mu(n) = 0$ if $n$ is divisible by a square factor like 4:\r
   - Term 1: $\\text{id}(1)\\cdot\\mu(12) = 1 \\cdot \\mu(2^2 \\cdot 3) = 1 \\cdot 0 = 0$\r
   - Term 2: $\\text{id}(2)\\cdot\\mu(6) = 2 \\cdot \\mu(2 \\cdot 3) = 2 \\cdot (-1)^2 = 2 \\cdot 1 = 2$\r
   - Term 3: $\\text{id}(3)\\cdot\\mu(4) = 3 \\cdot \\mu(2^2) = 3 \\cdot 0 = 0$\r
   - Term 4: $\\text{id}(4)\\cdot\\mu(3) = 4 \\cdot \\mu(3^1) = 4 \\cdot (-1)^1 = -4$\r
   - Term 5: $\\text{id}(6)\\cdot\\mu(2) = 6 \\cdot \\mu(2^1) = 6 \\cdot (-1)^1 = -6$\r
   - Term 6: $\\text{id}(12)\\cdot\\mu(1) = 12 \\cdot 1 = 12$\r
\r
4. **Sum the evaluated terms to find the final result:**\r
   $$(f * g)(12) = 0 + 2 + 0 - 4 - 6 + 12 = 4$$\r
\r
The convolution evaluation equals exactly 4.\r
\r
> **The Identity Connection:** Notice that this calculation matches the identity relation $\\text{id} * \\mu = \\phi$. If we compute $\\phi(12)$ directly using the method from Strategy B, we find $\\phi(12) = 12 \\cdot (1 - \\frac{1}{2}) \\cdot (1 - \\frac{1}{3}) = 12 \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} = 4$. This confirms that the convolution calculation is correct.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Domain Restrictions:** An arithmetic function is a specialized mapping system that accepts positive integer inputs and returns complex number values ($f: \\mathbb{Z}^{+} \\to \\mathbb{C}$).\r
- **Multiplicative Product Properties:** A function is classified as multiplicative if it preserves the product of coprime integer pairs ($f(ab) = f(a)f(b)$ whenever $\\gcd(a, b) = 1$). This property allows us to compute values for large numbers using their prime factors.\r
- **The Dirichlet Convolution Ring:** The Dirichlet convolution operation ($f * g$) provides a structured framework for combining arithmetic functions. This operation forms a commutative algebraic ring with the identity function $\\epsilon(n)$.\r
- **Inversion Transformations:** The Möbius Inversion Theorem provides a mechanism for reversing divisor sums, using the Möbius function ($\\mu$) to isolate underlying arithmetic functions.\r
- **Cryptographic Value:** Multiplicative arithmetic functions, such as Euler's Totient function ($\\phi(n)$), provide the mathematical framework that secures modern public-key cryptography algorithms like RSA.\r
`;export{e as default};