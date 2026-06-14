var e=`# Number Theory: The Foundations of Divisibility\r
\r
Divisibility is the cornerstone of elementary number theory, serving as the bedrock upon which complex concepts like prime factorization, modular arithmetic, and cryptographic algorithms are built. At its core, divisibility formalizes what it means for one integer to "evenly divide" another without leaving a remainder.\r
\r
---\r
\r
## 1. Definition\r
\r
In the domain of integers $\\mathbb{Z}$, divisibility describes a specific algebraic relationship between two numbers.\r
\r
### Formal Definition\r
\r
An integer $a$ is said to be **divisible** by an integer $b$ (where $b \\neq 0$) if there exists an integer $k$ such that:\r
\r
$$a = b \\cdot k$$\r
\r
When this condition is met, we write:\r
\r
$$b \\mid a$$\r
\r
This is read as "$b$ divides $a$". If $a$ is not divisible by $b$, we write:\r
\r
$$b \\nmid a$$\r
\r
### Logical Representation\r
\r
Using formal logical quantifiers, the definition is expressed as:\r
\r
$$\\forall a, b \\in \\mathbb{Z} \\setminus \\{0\\}, \\quad b \\mid a \\iff \\exists k \\in \\mathbb{Z} : a = bk$$\r
\r
### Crucial Edge Cases\r
\r
- **The Case of Zero ($0$):** For any non-zero integer $b$, $b \\mid 0$ is always **true** because $0 = b \\cdot 0$, and $0 \\in \\mathbb{Z}$. However, $0 \\mid a$ is **undefined** for any $a \\neq 0$, as division by zero is mathematically invalid.\r
- **The Case of One ($1$):** For every integer $a$, $1 \\mid a$ and $-1 \\mid a$ are always true since $a = 1 \\cdot a$ and $a = (-1) \\cdot (-a)$.\r
- **Negative Integers:** Divisibility applies to negative numbers. If $2 \\mid 6$, then $2 \\mid -6$ and $-2 \\mid 6$ are also true, because $k$ can be a negative integer (e.g., $-6 = 2 \\cdot (-3)$).\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To navigate number theory fluidly, one must master the precise vocabulary used to describe the components of the expression $b \\mid a$.\r
\r
| Term         | Role in $b \\mid a$ | Alternative Names | Conceptual Meaning                                            |\r
| :----------- | :----------------- | :---------------- | :------------------------------------------------------------ |\r
| **Dividend** | The integer $a$    | Multiple          | The total quantity being split up or measured.                |\r
| **Divisor**  | The integer $b$    | Factor            | The size of the pieces or the number of groups measuring $a$. |\r
| **Quotient** | The integer $k$    | Scaling Factor    | The exact, whole number of times $b$ fits into $a$.           |\r
\r
### Related Concepts\r
\r
- **Proper Divisor:** A divisor of $a$ that is strictly less than $a$ and greater than $1$ (for positive integers).\r
- **Trivial Divisors:** For any integer $a$, the numbers $1$, $-1$, $a$, and $-a$ are considered its trivial divisors.\r
- **Perfect Number:** A positive integer that is equal to the sum of its positive proper divisors (e.g., $6 = 1 + 2 + 3$).\r
\r
---\r
\r
## 3. Purpose\r
\r
Why do mathematicians isolate divisibility as a core area of study? The concept acts as a structural lens for the integers.\r
\r
### Unlocking the Architecture of Numbers\r
\r
Without divisibility, integers are just an infinite, flat sequence of points on a line. Divisibility introduces a **multiplicative hierarchy**. It allows us to break composite structures down into indivisible components: **the prime numbers**.\r
\r
### Real-World Applications\r
\r
1.  **Cryptography:** Modern digital security relies heavily on the difficulty of breaking down massive integers into their prime components. The RSA encryption algorithm, for instance, uses the properties of greatest common divisors (GCD) and modular inverses.\r
2.  **Computer Science Arrays & Hashing:** Hash functions frequently use modular arithmetic (which is built directly on top of divisibility) to map data uniformly across memory slots.\r
3.  **Scheduling and Cyclical Systems:** Determining when two independent cycles realign (e.g., planetary alignments, traffic light sequences, or leap years) requires finding the Least Common Multiple (LCM).\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
The relation $\\mid$ possesses distinct algebraic properties. Understanding these rules allows for the manipulation of complex number-theoretic proofs without needing to compute actual values.\r
\r
Let $a, b, c, x, y \\in \\mathbb{Z}$. The following properties universally hold true:\r
\r
### Reflexivity\r
\r
Every integer divides itself.\r
$$\\forall a \\in \\mathbb{Z}, \\quad a \\mid a$$\r
_Proof:_ $a = a \\cdot 1$. Since $1 \\in \\mathbb{Z}$, the condition is satisfied.\r
\r
### Transitivity\r
\r
If a number divides another, it also divides any of that number's multiples.\r
$$\\text{If } a \\mid b \\text{ and } b \\mid c, \\text{ then } a \\mid c$$\r
_Proof:_ By definition, $b = a \\cdot k_1$ and $c = b \\cdot k_2$ for some $k_1, k_2 \\in \\mathbb{Z}$.  \r
Substituting $b$ into the equation for $c$:  \r
$$c = (a \\cdot k_1) \\cdot k_2 = a \\cdot (k_1 \\cdot k_2)$$  \r
Since $\\mathbb{Z}$ is closed under multiplication, $k_3 = k_1 \\cdot k_2$ is an integer. Thus, $a \\mid c$.\r
\r
### Linearity (Linear Combination Property)\r
\r
If an integer divides two other integers, it divides any linear combination of them.\r
$$\\text{If } a \\mid b \\text{ and } a \\mid c, \\text{ then } a \\mid (bx + cy) \\quad \\forall x, y \\in \\mathbb{Z}$$\r
_Proof:_ We can write $b = a \\cdot k_1$ and $c = a \\cdot k_2$.  \r
Multiply both sides by $x$ and $y$ respectively:  \r
$$bx = a \\cdot k_1 \\cdot x$$  \r
$$cy = a \\cdot k_2 \\cdot y$$  \r
Adding the two equations together:  \r
$$bx + cy = a \\cdot k_1 \\cdot x + a \\cdot k_2 \\cdot y = a \\cdot (k_1 x + k_2 y)$$  \r
Because $k_1 x + k_2 y$ is an integer, $a \\mid (bx + cy)$.\r
\r
### Multiplication/Cancellation Property\r
\r
$$\\text{If } a \\mid b, \\text{ then } ac \\mid bc \\quad \\forall c \\in \\mathbb{Z}$$\r
Conversely, if $ac \\mid bc$ and $c \\neq 0$, then $a \\mid b$.\r
\r
### Boundedness Property\r
\r
If a positive number divides another positive number, the divisor cannot be larger than the dividend.\r
$$\\text{If } a \\mid b \\text{ and } b \\neq 0, \\text{ then } |a| \\le |b|$$\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Divisibility branches into several key variations and specialized sub-theorems that handle non-zero remainders and structural relationships.\r
\r
### A. The Division Algorithm\r
\r
When an integer does not divide another perfectly, it leaves a remainder. The **Division Algorithm** guarantees that this remainder is unique.\r
\r
$$\\forall a, b \\in \\mathbb{Z} \\text{ with } b > 0, \\ \\exists! \\ q, r \\in \\mathbb{Z} \\quad \\text{such that} \\quad a = bq + r \\quad \\text{and} \\quad 0 \\le r < b$$\r
\r
- $q$ is the **quotient**.\r
- $r$ is the **remainder**.\r
- If $r = 0$, then $b \\mid a$.\r
\r
### B. Greatest Common Divisor (GCD) & Least Common Multiple (LCM)\r
\r
- **GCD:** The largest positive integer that divides both $a$ and $b$. Written as $\\gcd(a, b)$ or simply $(a, b)$.\r
- **LCM:** The smallest positive integer that is a multiple of both $a$ and $b$. Written as $\\text{lcm}(a, b)$ or $[a, b]$.\r
\r
The fundamental relationship between them is given by:\r
\r
$$\\gcd(a, b) \\cdot \\text{lcm}(a, b) = |a \\cdot b|$$\r
\r
### C. Coprimality (Relative Primality)\r
\r
Two integers $a$ and $b$ are said to be **coprime** or **relatively prime** if their only common positive divisor is $1$.\r
$$\\gcd(a, b) = 1$$\r
\r
### D. Modular Arithmetic\r
\r
Modular arithmetic can be viewed as an extension of divisibility. We say $a$ is congruent to $b$ modulo $n$ if the difference $a - b$ is divisible by $n$.\r
$$a \\equiv b \\pmod n \\iff n \\mid (a - b)$$\r
\r
---\r
\r
## 6. How to Solve Divisibility Problems\r
\r
Solving proofs and equations involving divisibility generally relies on three core methods: Direct Algebraic Substitution, the Euclidean Algorithm, and Modular Congruence reduction.\r
\r
### Method 1: The Euclidean Algorithm (Finding GCD)\r
\r
To find $\\gcd(a, b)$, repeatedly apply the Division Algorithm until the remainder becomes $0$. The last non-zero remainder is the GCD.\r
\r
#### Step-by-Step Example:\r
\r
Find $\\gcd(252, 105)$.\r
\r
1.  Express the larger number in terms of the smaller one:  \r
    $$252 = 105 \\cdot 2 + 42$$\r
2.  Shift the divisor ($105$) to the dividend slot, and the remainder ($42$) to the divisor slot:  \r
    $$105 = 42 \\cdot 2 + 21$$\r
3.  Repeat the process:  \r
    $$42 = 21 \\cdot 2 + 0$$\r
\r
Since the remainder is now $0$, the last non-zero remainder is **$21$**.  \r
Therefore, $\\gcd(252, 105) = 21$.\r
\r
### Method 2: Mathematical Induction Proofs\r
\r
Induction is highly effective for proving that an algebraic expression is divisible by a specific integer for all natural numbers $n$.\r
\r
#### Problem:\r
\r
Prove that $3 \\mid (n^3 - n)$ for all $n \\in \\mathbb{N}$.\r
\r
#### Solution:\r
\r
**Base Case ($n = 1$):** $$1^3 - 1 = 0$$  \r
Since $3 \\mid 0$ is true ($0 = 3 \\cdot 0$), the base case holds.\r
\r
**Inductive Step:** Assume the statement holds true for $n = k$. That means:  \r
$$3 \\mid (k^3 - k) \\implies k^3 - k = 3m \\quad \\text{for some } m \\in \\mathbb{Z}$$\r
\r
Now, we must show it holds true for $n = k + 1$, meaning $3 \\mid ((k+1)^3 - (k+1))$.  \r
Expand the expression for $n = k+1$:  \r
$$(k+1)^3 - (k+1) = (k^3 + 3k^2 + 3k + 1) - (k + 1)$$  \r
Rearrange the terms to isolate our inductive assumption:  \r
$$= (k^3 - k) + 3k^2 + 3k$$  \r
Substitute $3m$ in place of $(k^3 - k)$:  \r
$$= 3m + 3k^2 + 3k$$  \r
Factor out the number $3$:  \r
$$= 3(m + k^2 + k)$$\r
\r
Since $(m + k^2 + k)$ is an integer, the entire expression is a multiple of $3$.  \r
Thus, $3 \\mid ((k+1)^3 - (k+1))$. By mathematical induction, the property holds for all $n \\in \\mathbb{N}$.\r
\r
### Method 3: Divisibility Tricks (Base-10 Arithmetic)\r
\r
When working within base-10 systems, shortcuts exist to verify divisibility quickly without full division operations:\r
\r
- **Divisibility by 3:** An integer is divisible by $3$ if and only if the sum of its digits is divisible by $3$.\r
- **Divisibility by 4:** An integer is divisible by $4$ if the number formed by its last two digits is divisible by $4$.\r
- **Divisibility by 9:** An integer is divisible by $9$ if the sum of its digits is divisible by $9$.\r
\r
---\r
\r
## 7. Summary\r
\r
Divisibility provides an analytical framework for breaking down integers into basic foundational units. Rather than dealing with approximation or fractional pieces, divisibility preserves the strict parameters of whole integers.\r
\r
### Key Takeaways\r
\r
- **Definition:** $b \\mid a \\iff a = bk$ for some integer $k$.\r
- **Linearity:** If a number divides two targets, it divides any linear combination of those targets ($a \\mid b \\land a \\mid c \\implies a \\mid bx+cy$).\r
- **Division Algorithm:** If perfect division fails, there exists a unique quotient and remainder system where $a = bq + r$ with $0 \\le r < b$.\r
- **Primary Tool:** The Euclidean Algorithm remains the most computationally efficient method to determine the greatest common factor between integers.\r
`;export{e as default};