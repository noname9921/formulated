# Number Theory: The Foundations of Divisibility

Divisibility is the cornerstone of elementary number theory, serving as the bedrock upon which complex concepts like prime factorization, modular arithmetic, and cryptographic algorithms are built. At its core, divisibility formalizes what it means for one integer to "evenly divide" another without leaving a remainder.

---

## 1. Definition

In the domain of integers $\mathbb{Z}$, divisibility describes a specific algebraic relationship between two numbers.

### Formal Definition

An integer $a$ is said to be **divisible** by an integer $b$ (where $b \neq 0$) if there exists an integer $k$ such that:

$$a = b \cdot k$$

When this condition is met, we write:

$$b \mid a$$

This is read as "$b$ divides $a$". If $a$ is not divisible by $b$, we write:

$$b \nmid a$$

### Logical Representation

Using formal logical quantifiers, the definition is expressed as:

$$\forall a, b \in \mathbb{Z} \setminus \{0\}, \quad b \mid a \iff \exists k \in \mathbb{Z} : a = bk$$

### Crucial Edge Cases

- **The Case of Zero ($0$):** For any non-zero integer $b$, $b \mid 0$ is always **true** because $0 = b \cdot 0$, and $0 \in \mathbb{Z}$. However, $0 \mid a$ is **undefined** for any $a \neq 0$, as division by zero is mathematically invalid.
- **The Case of One ($1$):** For every integer $a$, $1 \mid a$ and $-1 \mid a$ are always true since $a = 1 \cdot a$ and $a = (-1) \cdot (-a)$.
- **Negative Integers:** Divisibility applies to negative numbers. If $2 \mid 6$, then $2 \mid -6$ and $-2 \mid 6$ are also true, because $k$ can be a negative integer (e.g., $-6 = 2 \cdot (-3)$).

---

## 2. Key Terminology

To navigate number theory fluidly, one must master the precise vocabulary used to describe the components of the expression $b \mid a$.

| Term         | Role in $b \mid a$ | Alternative Names | Conceptual Meaning                                            |
| :----------- | :----------------- | :---------------- | :------------------------------------------------------------ |
| **Dividend** | The integer $a$    | Multiple          | The total quantity being split up or measured.                |
| **Divisor**  | The integer $b$    | Factor            | The size of the pieces or the number of groups measuring $a$. |
| **Quotient** | The integer $k$    | Scaling Factor    | The exact, whole number of times $b$ fits into $a$.           |

### Related Concepts

- **Proper Divisor:** A divisor of $a$ that is strictly less than $a$ and greater than $1$ (for positive integers).
- **Trivial Divisors:** For any integer $a$, the numbers $1$, $-1$, $a$, and $-a$ are considered its trivial divisors.
- **Perfect Number:** A positive integer that is equal to the sum of its positive proper divisors (e.g., $6 = 1 + 2 + 3$).

---

## 3. Purpose

Why do mathematicians isolate divisibility as a core area of study? The concept acts as a structural lens for the integers.

### Unlocking the Architecture of Numbers

Without divisibility, integers are just an infinite, flat sequence of points on a line. Divisibility introduces a **multiplicative hierarchy**. It allows us to break composite structures down into indivisible components: **the prime numbers**.

### Real-World Applications

1.  **Cryptography:** Modern digital security relies heavily on the difficulty of breaking down massive integers into their prime components. The RSA encryption algorithm, for instance, uses the properties of greatest common divisors (GCD) and modular inverses.
2.  **Computer Science Arrays & Hashing:** Hash functions frequently use modular arithmetic (which is built directly on top of divisibility) to map data uniformly across memory slots.
3.  **Scheduling and Cyclical Systems:** Determining when two independent cycles realign (e.g., planetary alignments, traffic light sequences, or leap years) requires finding the Least Common Multiple (LCM).

---

## 4. Fundamental Properties

The relation $\mid$ possesses distinct algebraic properties. Understanding these rules allows for the manipulation of complex number-theoretic proofs without needing to compute actual values.

Let $a, b, c, x, y \in \mathbb{Z}$. The following properties universally hold true:

### Reflexivity

Every integer divides itself.
$$\forall a \in \mathbb{Z}, \quad a \mid a$$
_Proof:_ $a = a \cdot 1$. Since $1 \in \mathbb{Z}$, the condition is satisfied.

### Transitivity

If a number divides another, it also divides any of that number's multiples.
$$\text{If } a \mid b \text{ and } b \mid c, \text{ then } a \mid c$$
_Proof:_ By definition, $b = a \cdot k_1$ and $c = b \cdot k_2$ for some $k_1, k_2 \in \mathbb{Z}$.  
Substituting $b$ into the equation for $c$:  
$$c = (a \cdot k_1) \cdot k_2 = a \cdot (k_1 \cdot k_2)$$  
Since $\mathbb{Z}$ is closed under multiplication, $k_3 = k_1 \cdot k_2$ is an integer. Thus, $a \mid c$.

### Linearity (Linear Combination Property)

If an integer divides two other integers, it divides any linear combination of them.
$$\text{If } a \mid b \text{ and } a \mid c, \text{ then } a \mid (bx + cy) \quad \forall x, y \in \mathbb{Z}$$
_Proof:_ We can write $b = a \cdot k_1$ and $c = a \cdot k_2$.  
Multiply both sides by $x$ and $y$ respectively:  
$$bx = a \cdot k_1 \cdot x$$  
$$cy = a \cdot k_2 \cdot y$$  
Adding the two equations together:  
$$bx + cy = a \cdot k_1 \cdot x + a \cdot k_2 \cdot y = a \cdot (k_1 x + k_2 y)$$  
Because $k_1 x + k_2 y$ is an integer, $a \mid (bx + cy)$.

### Multiplication/Cancellation Property

$$\text{If } a \mid b, \text{ then } ac \mid bc \quad \forall c \in \mathbb{Z}$$
Conversely, if $ac \mid bc$ and $c \neq 0$, then $a \mid b$.

### Boundedness Property

If a positive number divides another positive number, the divisor cannot be larger than the dividend.
$$\text{If } a \mid b \text{ and } b \neq 0, \text{ then } |a| \le |b|$$

---

## 5. Types & Variations

Divisibility branches into several key variations and specialized sub-theorems that handle non-zero remainders and structural relationships.

### A. The Division Algorithm

When an integer does not divide another perfectly, it leaves a remainder. The **Division Algorithm** guarantees that this remainder is unique.

$$\forall a, b \in \mathbb{Z} \text{ with } b > 0, \ \exists! \ q, r \in \mathbb{Z} \quad \text{such that} \quad a = bq + r \quad \text{and} \quad 0 \le r < b$$

- $q$ is the **quotient**.
- $r$ is the **remainder**.
- If $r = 0$, then $b \mid a$.

### B. Greatest Common Divisor (GCD) & Least Common Multiple (LCM)

- **GCD:** The largest positive integer that divides both $a$ and $b$. Written as $\gcd(a, b)$ or simply $(a, b)$.
- **LCM:** The smallest positive integer that is a multiple of both $a$ and $b$. Written as $\text{lcm}(a, b)$ or $[a, b]$.

The fundamental relationship between them is given by:

$$\gcd(a, b) \cdot \text{lcm}(a, b) = |a \cdot b|$$

### C. Coprimality (Relative Primality)

Two integers $a$ and $b$ are said to be **coprime** or **relatively prime** if their only common positive divisor is $1$.
$$\gcd(a, b) = 1$$

### D. Modular Arithmetic

Modular arithmetic can be viewed as an extension of divisibility. We say $a$ is congruent to $b$ modulo $n$ if the difference $a - b$ is divisible by $n$.
$$a \equiv b \pmod n \iff n \mid (a - b)$$

---

## 6. How to Solve Divisibility Problems

Solving proofs and equations involving divisibility generally relies on three core methods: Direct Algebraic Substitution, the Euclidean Algorithm, and Modular Congruence reduction.

### Method 1: The Euclidean Algorithm (Finding GCD)

To find $\gcd(a, b)$, repeatedly apply the Division Algorithm until the remainder becomes $0$. The last non-zero remainder is the GCD.

#### Step-by-Step Example:

Find $\gcd(252, 105)$.

1.  Express the larger number in terms of the smaller one:  
    $$252 = 105 \cdot 2 + 42$$
2.  Shift the divisor ($105$) to the dividend slot, and the remainder ($42$) to the divisor slot:  
    $$105 = 42 \cdot 2 + 21$$
3.  Repeat the process:  
    $$42 = 21 \cdot 2 + 0$$

Since the remainder is now $0$, the last non-zero remainder is **$21$**.  
Therefore, $\gcd(252, 105) = 21$.

### Method 2: Mathematical Induction Proofs

Induction is highly effective for proving that an algebraic expression is divisible by a specific integer for all natural numbers $n$.

#### Problem:

Prove that $3 \mid (n^3 - n)$ for all $n \in \mathbb{N}$.

#### Solution:

**Base Case ($n = 1$):** $$1^3 - 1 = 0$$  
Since $3 \mid 0$ is true ($0 = 3 \cdot 0$), the base case holds.

**Inductive Step:** Assume the statement holds true for $n = k$. That means:  
$$3 \mid (k^3 - k) \implies k^3 - k = 3m \quad \text{for some } m \in \mathbb{Z}$$

Now, we must show it holds true for $n = k + 1$, meaning $3 \mid ((k+1)^3 - (k+1))$.  
Expand the expression for $n = k+1$:  
$$(k+1)^3 - (k+1) = (k^3 + 3k^2 + 3k + 1) - (k + 1)$$  
Rearrange the terms to isolate our inductive assumption:  
$$= (k^3 - k) + 3k^2 + 3k$$  
Substitute $3m$ in place of $(k^3 - k)$:  
$$= 3m + 3k^2 + 3k$$  
Factor out the number $3$:  
$$= 3(m + k^2 + k)$$

Since $(m + k^2 + k)$ is an integer, the entire expression is a multiple of $3$.  
Thus, $3 \mid ((k+1)^3 - (k+1))$. By mathematical induction, the property holds for all $n \in \mathbb{N}$.

### Method 3: Divisibility Tricks (Base-10 Arithmetic)

When working within base-10 systems, shortcuts exist to verify divisibility quickly without full division operations:

- **Divisibility by 3:** An integer is divisible by $3$ if and only if the sum of its digits is divisible by $3$.
- **Divisibility by 4:** An integer is divisible by $4$ if the number formed by its last two digits is divisible by $4$.
- **Divisibility by 9:** An integer is divisible by $9$ if the sum of its digits is divisible by $9$.

---

## 7. Summary

Divisibility provides an analytical framework for breaking down integers into basic foundational units. Rather than dealing with approximation or fractional pieces, divisibility preserves the strict parameters of whole integers.

### Key Takeaways

- **Definition:** $b \mid a \iff a = bk$ for some integer $k$.
- **Linearity:** If a number divides two targets, it divides any linear combination of those targets ($a \mid b \land a \mid c \implies a \mid bx+cy$).
- **Division Algorithm:** If perfect division fails, there exists a unique quotient and remainder system where $a = bq + r$ with $0 \le r < b$.
- **Primary Tool:** The Euclidean Algorithm remains the most computationally efficient method to determine the greatest common factor between integers.
