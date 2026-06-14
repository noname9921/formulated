var e=`# Number Theory: Bézout's Lemma\r
\r
---\r
\r
## 1. Definition\r
\r
In elementary number theory and abstract algebra, **Bézout's Lemma** (also called Bézout's Identity) describes a fundamental relationship between the greatest common divisor of two integers and their linear combinations. The lemma states that the greatest common divisor of any two non-zero integers can always be expressed as a linear combination of those integers using integer coefficients.\r
\r
Formally, let $a$ and $b$ be two integers, where at least one is non-zero ($a^2 + b^2 \\neq 0$). Let $d = \\gcd(a, b)$ represent their greatest common divisor. Bézout's Lemma asserts that there exist integers $x$ and $y$ such that the following identity is satisfied:\r
\r
$$ax + by = \\gcd(a, b)$$\r
\r
Furthermore, the lemma states that the set of all linear combinations of $a$ and $b$ (the set containing all numbers of the form $ax + by$ for all $x, y \\in \\mathbb{Z}$) is exactly equal to the set of all integer multiples of $\\gcd(a, b)$. This means that a specific integer $c$ can be written in the form $ax + by$ if and only if $c$ is a multiple of $\\gcd(a, b)$.\r
\r
The mathematical statement can be written as:\r
\r
$$\\forall a, b \\in \\mathbb{Z} \\setminus \\{0\\}, \\quad \\{ax + by \\mid x, y \\in \\mathbb{Z}\\} = \\{k \\cdot \\gcd(a, b) \\mid k \\in \\mathbb{Z}\\}$$\r
\r
The integer multipliers $x$ and $y$ are called **Bézout's coefficients**. They are not unique; for any given pair of integers $a$ and $b$, there are infinitely many pairs of coefficients $(x, y)$ that satisfy the identity.\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze the structural traits and solutions surrounding Bézout's Lemma, the following precise vocabulary definitions are required:\r
\r
- **Linear Combination:** An algebraic expression formed by multiplying each term in a set by a scalar constant and adding the results together. For example, $ax + by$ is a linear combination of $a$ and $b$.\r
- **Greatest Common Divisor ($\\gcd(a, b)$):** The largest positive integer that divides both $a$ and $b$ simultaneously without leaving a remainder.\r
- **Bézout's Coefficients ($x, y$):** The specific integer values that satisfy the identity equation $ax + by = \\gcd(a, b)$.\r
- **Euclidean Algorithm:** An iterative division method used to calculate the greatest common divisor of two integers by repeatedly computing remainders.\r
- **Extended Euclidean Algorithm:** An extension of the Euclidean Algorithm that tracks the quotient operations at each step, allowing you to compute Bézout's coefficients $(x, y)$ alongside the $\\gcd$.\r
- **Coprime / Relatively Prime:** A relationship between two integers $a$ and $b$ where their greatest common divisor is exactly 1 ($\\gcd(a, b) = 1$).\r
- **Linear Diophantine Equation:** An algebraic equation of the form $ax + by = c$ whose solutions are restricted strictly to the set of integers ($\\mathbb{Z}$).\r
\r
---\r
\r
## 3. Purpose\r
\r
Bézout's Lemma acts as a bridge between the structural properties of numbers and concrete equations. It is essential for solving integer equations and constructing modern digital security systems.\r
\r
### Solving Linear Diophantine Equations\r
\r
In many practical problems, fractional answers are invalid. For instance, you cannot buy half a shipping container or print part of a concert ticket. Equations whose solutions are restricted strictly to integers are called **Diophantine Equations**. Bézout's Lemma provides the foundational criterion needed to determine whether a linear Diophantine equation can be solved:\r
\r
$$ax + by = c \\quad \\text{has an integer solution if and only if} \\quad \\gcd(a, b) \\mid c$$\r
\r
If the greatest common divisor of the coefficients $a$ and $b$ divides the constant term $c$, Bézout's Lemma ensures that an integer solution path exists.\r
\r
### Constructing Multiplicative Inverses in Modular Arithmetic\r
\r
In standard algebra, the multiplicative inverse of 5 is $\\frac{1}{5}$. However, modular arithmetic works exclusively with whole numbers, so fractions like $\\frac{1}{5}$ are invalid. Instead, we look for a modular inverse: an integer $x$ such that $5x \\equiv 1 \\pmod n$.\r
\r
Bézout's Lemma shows that if $\\gcd(5, n) = 1$, we can write $5x + ny = 1$. Rewriting this equation modulo $n$ drops the $ny$ term, leaving:\r
\r
$$5x \\equiv 1 \\pmod n$$\r
\r
This shows that Bézout's coefficient $x$ acts as the modular inverse of 5, providing the tool needed to perform division-like operations in modular systems.\r
\r
### Real-World Technological Applications\r
\r
- **Public Key Cryptography (The RSA Algorithm):** The RSA algorithm secures web browsers, online banking, and messaging apps. Generating RSA encryption keys requires finding a secret decryption exponent $d$, which is computed as the modular inverse of an encryption exponent $e$. This step relies directly on using the Extended Euclidean Algorithm to solve Bézout's Identity.\r
- **The Chinese Remainder Theorem (CRT):** Computer processors use the Chinese Remainder Theorem to split massive arithmetic calculations into smaller parallel steps. Assembling these parallel steps back into the final answer requires multiplying each component by weights calculated via Bézout's Lemma.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Bézout's Lemma exhibits consistent structural properties that can be verified through set minimal mappings and structural theorems.\r
\r
### The Smallest Positive Linear Combination Property\r
\r
An alternative way to define the greatest common divisor using Bézout's Lemma is through the properties of sets. For any two non-zero integers $a$ and $b$, look at the set of all positive linear combinations they can generate:\r
\r
$$S = \\{ax + by \\mid x, y \\in \\mathbb{Z} \\text{ and } ax + by > 0\\}$$\r
\r
Because $S$ is a non-empty set of positive integers, the **Well-Ordering Principle** guarantees that $S$ must contain a unique smallest element. That smallest positive element is exactly equal to $\\gcd(a, b)$.\r
\r
### Infinitude and Generation of Coefficient Sets\r
\r
As stated in the definition, Bézout's coefficients are not unique. If you find a single base solution pair $(x_0, y_0)$ that satisfies the equation $ax_0 + by_0 = \\gcd(a, b)$, you can generate infinitely many valid pairs $(x_k, y_k)$ using the following formulas:\r
\r
$$x_k = x_0 + k \\cdot \\frac{b}{\\gcd(a, b)} \\quad \\text{and} \\quad y_k = y_0 - k \\cdot \\frac{a}{\\gcd(a, b)} \\quad \\forall k \\in \\mathbb{Z}$$\r
\r
If we substitute these expressions back into the linear combination, the adjustments cancel each other out:\r
\r
$$a\\left(x_0 + k\\frac{b}{d}\\right) + b\\left(y_0 - k\\frac{a}{d}\\right) = ax_0 + k\\frac{ab}{d} + by_0 - k\\frac{ab}{d} = ax_0 + by_0 = d$$\r
\r
### Core Algebraic Rules derived from Bézout's Lemma\r
\r
The following table summarizes the structural theorems that rely on Bézout's Lemma for their proofs.\r
\r
| Theorem Name            | Core Mathematical Identity                                             | Operational Condition                      | Strategic Structural Value                                        |\r
| :---------------------- | :--------------------------------------------------------------------- | :----------------------------------------- | :---------------------------------------------------------------- |\r
| **Coprime Identity**    | $ax + by = 1$                                                          | Holds true if and only if $\\gcd(a, b) = 1$ | Verifies that two numbers share no common prime factors           |\r
| **Euclid's Lemma**      | $\\text{If } p \\mid ab \\implies p \\mid a \\lor p \\mid b$                 | Divisor $p$ must be a prime number         | Forms the logical basis for unique prime factorization structures |\r
| **Common Divisor Rule** | $\\text{If } c \\mid a \\text{ and } c \\mid b \\implies c \\mid \\gcd(a, b)$ | $\\forall a, b, c \\in \\mathbb{Z}$           | Proves that the $\\gcd$ is a multiple of every common divisor      |\r
| **Linear Solvability**  | $ax + by = c$                                                          | Requires that $\\gcd(a, b) \\mid c$          | Determines whether a linear Diophantine equation can be solved    |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Bézout's Lemma can be extended beyond standard numbers into multi-variable sets, algebraic polynomial rings, and unique factorization domains.\r
\r
### 1. Multi-Variable Generalization ($\\ge 3$ Numbers)\r
\r
Bézout's Lemma scales naturally to sets containing three or more numbers. For any finite collection of integers $a_1, a_2, \\dots, a_n$, there exist corresponding integer coefficients $x_1, x_2, \\dots, x_n$ such that:\r
\r
$$a_1x_1 + a_2x_2 + \\dots + a_nx_n = \\gcd(a_1, a_2, \\dots, a_n)$$\r
\r
This multi-variable version is used to solve complex systems of Diophantine equations with multiple constraints.\r
\r
### 2. Polynomial Rings over a Field ($F[x]$)\r
\r
In polynomial algebra, expressions behave much like standard integers. If $f(x)$ and $g(x)$ are two polynomials with coefficients from a field $F$ (such as the real numbers $\\mathbb{R}$ or complex numbers $\\mathbb{C}$), there exist polynomials $a(x)$ and $b(x)$ that satisfy the polynomial version of Bézout's Lemma:\r
\r
$$a(x)f(x) + b(x)g(x) = \\gcd(f(x), g(x))$$\r
\r
In this domain, the greatest common divisor is defined as the unique monic polynomial (a polynomial whose leading coefficient is 1) of highest degree that divides both expressions.\r
\r
### 3. Principal Ideal Domains (PIDs)\r
\r
In abstract algebra, a **Principal Ideal Domain** is an integral domain where every ideal can be generated by a single element. Bézout's Lemma is used to define these spaces.\r
\r
If we translate the lemma into the language of ring theory, the set of linear combinations $\\{ax + by\\}$ represents the sum of two principal ideals, denoted as $\\langle a \\rangle + \\langle b \\rangle$. Stating that this sum equals the ideal generated by their greatest common divisor ($\\langle \\gcd(a,b) \\rangle$) is equivalent to proving that the underlying ring is a Principal Ideal Domain:\r
\r
$$\\langle a \\rangle + \\langle b \\rangle = \\langle \\gcd(a, b) \\rangle$$\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for calculating the greatest common divisor using the Euclidean Algorithm, computing Bézout's coefficients via back-substitution, and generating the complete set of solutions for linear Diophantine equations.\r
\r
### Strategy A: Finding Bézout's Coefficients via the Extended Euclidean Algorithm\r
\r
To express $\\gcd(a, b)$ as a linear combination of $a$ and $b$, we first run the Euclidean Algorithm forward to calculate the remainders, then substitute those step equations in reverse.\r
\r
**Example Question:** Find the greatest common divisor $d = \\gcd(252, 198)$ and determine a pair of integer coefficients $(x, y)$ that satisfy Bézout's Identity: $252x + 198y = d$.\r
\r
1. **Run the Euclidean Algorithm forward to calculate the remainders:**\r
   - **Step 1:** $252 = 198 \\cdot 1 + 54$\r
   - **Step 2:** $198 = 54 \\cdot 3 + 36$\r
   - **Step 3:** $54 = 36 \\cdot 1 + 18$\r
   - **Step 4:** $36 = 18 \\cdot 2 + 0$\r
\r
   The last non-zero remainder is $18$. Therefore, $\\gcd(252, 198) = 18$.\r
\r
2. **Rearrange each step equation to isolate its remainder:**\r
   - From Step 1: $54 = 252 - 198 \\cdot 1$ _(Equation I)_\r
   - From Step 2: $36 = 198 - 54 \\cdot 3$ _(Equation II)_\r
   - From Step 3: $18 = 54 - 36 \\cdot 1$ _(Equation III)_\r
\r
3. **Substitute the equations in reverse, starting with the equation for the $\\gcd$ (Equation III):**\r
   $$18 = 54 - 36 \\cdot 1$$\r
\r
4. **Substitute the expression for the remainder 36 (Equation II) into this equation:**\r
   $$18 = 54 - (198 - 54 \\cdot 3) \\cdot 1$$\r
   Distribute the terms and group the common factors together. Treat the numbers 54 and 198 as variable variables:\r
   $$18 = 54 \\cdot 1 - 198 \\cdot 1 + 54 \\cdot 3$$\r
   $$18 = 54 \\cdot 4 - 198 \\cdot 1$$\r
\r
5. **Substitute the expression for the remainder 54 (Equation I) into this combined equation:**\r
   $$18 = (252 - 198 \\cdot 1) \\cdot 4 - 198 \\cdot 1$$\r
   Distribute the multiplier 4 across the terms:\r
   $$18 = 252 \\cdot 4 - 198 \\cdot 4 - 198 \\cdot 1$$\r
   Group the final coefficients together:\r
   $$18 = 252 \\cdot (4) + 198 \\cdot (-5)$$\r
\r
6. **Identify Bézout's coefficients:**\r
   The coefficients matching the form $252x + 198y = 18$ are:\r
   $$x = 4, \\quad y = -5$$\r
\r
Checking the arithmetic confirms that $252(4) + 198(-5) = 1008 - 990 = 18$.\r
\r
### Strategy B: Solving Linear Diophantine Equations\r
\r
Bézout's Lemma can be used to find the complete set of integer solutions for a linear Diophantine equation by scaling a base solution pair.\r
\r
**Example Question:** Find all integer solutions for the linear Diophantine equation $252x + 198y = 54$.\r
\r
1. **Calculate the $\\gcd$ of the coefficients and check the solvability condition:**\r
   From Strategy A, we know that $\\gcd(252, 198) = 18$.\r
   Now check if the $\\gcd$ divides the constant term $c = 54$:\r
   $$54 \\div 18 = 3 \\implies 18 \\mid 54$$\r
   Since 18 divides 54, the equation is solvable.\r
\r
2. **Scale the base solution found using Bézout's Identity:**\r
   Strategy A gave us the coefficients for a linear combination that equals 18:\r
   $$252(4) + 198(-5) = 18$$\r
   To scale the right side of the equation from 18 to 54, multiply the entire identity by 3:\r
   $$3 \\cdot [252(4) + 198(-5)] = 3 \\cdot [18]$$\r
   $$252(12) + 198(-15) = 54$$\r
   This gives us our base integer solution pair: $x_0 = 12$ and $y_0 = -15$.\r
\r
3. **Construct the formulas for the general solution set:**\r
   Use the parameter formulas to describe all valid solutions, substituting $a = 252$, $b = 198$, and $d = 18$:\r
   $$x_k = x_0 + k \\cdot \\frac{b}{d} \\implies x_k = 12 + k \\cdot \\frac{198}{18} \\implies x_k = 12 + 11k$$\r
   $$y_k = y_0 - k \\cdot \\frac{a}{d} \\implies y_k = -15 - k \\cdot \\frac{252}{18} \\implies y_k = -15 - 14k$$\r
\r
4. **State the final solution:**\r
   The complete set of solutions is given by the parametric pairs:\r
   $$(x_k, y_k) = (12 + 11k, -15 - 14k) \\quad \\forall k \\in \\mathbb{Z}$$\r
\r
For example, setting $k = -1$ yields the alternative solution pair $x = 1$, $y = -1$. Checking the arithmetic confirms that $252(1) + 198(-1) = 252 - 198 = 54$.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Linear Combinations of the GCD:** Bézout's Lemma states that the greatest common divisor of any two non-zero integers $a$ and $b$ can always be written as a linear combination of those integers using integer coefficients ($ax + by = \\gcd(a, b)$).\r
- **Solvability Boundary:** A linear Diophantine equation $ax + by = c$ has integer solutions if and only if the greatest common divisor of the coefficients divides the constant term ($\\gcd(a, b) \\mid c$).\r
- **Algorithmic Extraction:** You can calculate Bézout's coefficients $(x, y)$ efficiently by running the Euclidean Algorithm forward to find the remainders, then substituting those equations in reverse.\r
- **Modular Inverses:** If two numbers are coprime ($\\gcd(a, n) = 1$), Bézout's Identity simplifies to $ax + ny = 1$. This implies that $ax \\equiv 1 \\pmod n$, proving that $x$ is the unique multiplicative inverse of $a$ modulo $n$.\r
- **Structural Extensions:** Bézout's Lemma extends beyond standard integers, serving as a foundational concept for analyzing multi-variable systems, polynomial rings, and Principal Ideal Domains in abstract algebra.\r
`;export{e as default};