# Algebra: Sequences & Series

---

## 1. Definition

In algebra, discrete patterns of numbers are analyzed systematically using the frameworks of sequences and series. While these two concepts are deeply intertwined, they represent distinctly different mathematical constructs.

### Sequences

A **sequence** is an ordered list of numbers generated according to a specific, well-defined rule or function. Formally, a sequence is a function whose domain is the set of positive integers ($\mathbb{Z}^+$) or a finite subset of them. The individual numbers in the list are referred to as terms.

An arbitrary sequence is conventionally denoted by:

$$\{a_n\} = a_1, a_2, a_3, \dots, a_n, \dots$$

Where:

- $a_1$ represents the first term.
- $a_2$ represents the second term.
- $a_n$ represents the $n$-th term, or the **general term**, expressed as a function of its position index $n$.

### Series

A **series** is the mathematical expression representing the sum of the terms of a sequence. It translates an ordered list into a single cumulative value (for finite structures) or a limit behavior (for infinite structures). Formally, a series is written using summation notation, also known as **Sigma Notation** ($\sum$):

$$S_n = \sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \dots + a_n$$

Where:

- $\sum$ instructs the summation of terms.
- $k$ is the index of summation (or dummy variable).
- $1$ is the lower limit of the summation.
- $n$ is the upper limit of the summation.
- $a_k$ is the explicit formula generating each consecutive term.

---

## 2. Key Terminology

To analyze sequences and series accurately, it is essential to establish precise vocabulary:

- **Term ($a_n$):** A single distinct value within a sequence, identified by its unique positive integer index $n$.
- **General Term / Explicit Formula:** An algebraic formula that calculates the exact value of any term $a_n$ directly from its position index $n$ without needing to calculate preceding terms.
- **Recursive Formula:** A rule that defines a term $a_n$ by relating it to one or more of its immediately preceding terms (e.g., $a_{n-1}$), accompanied by an explicit initial boundary value (e.g., $a_1$).
- **Common Difference ($d$):** The constant, invariant value added to each term in an arithmetic sequence to produce the subsequent term.
- **Common Ratio ($r$):** The constant, invariant factor by which each term in a geometric sequence is multiplied to produce the subsequent term.
- **Partial Sum ($S_n$):** The net sum of the first $n$ consecutive terms of a sequence.
- **Convergence:** A property of an infinite series where the sequence of its partial sums approaches a specific, finite real number limit as $n \to \infty$.
- **Divergence:** A property of an infinite series where the sequence of partial sums fails to approach a finite limit, instead expanding without bound to $\pm\infty$ or oscillating perpetually.

---

## 3. Purpose

Sequences and series provide the structural baseline for handling discrete progressions and infinite accumulation in algebra, calculus, and discrete applied sciences.

### Modeling Discrete Progressions

Many real-world phenomena do not occur continuously; they unfold in step-by-step, discrete intervals. Sequences provide a natural mechanism to track periodic increments, such as clock cycles, seasonal population measurements, and digital signal sampling points.

### Quantifying Long-Term Accumulation

Series allow mathematicians and scientists to determine the total cumulative impact of infinitely repeating microscopic events. They form the foundational mathematics behind:

- **Financial Calculations:** Determining the long-term mechanics of annuity payments, sinking funds, mortgage amortizations, and the time-value calculations of compound investments.
- **Physics Modeling:** Evaluating the total distance traveled by an oscillating pendulum experiencing friction, or measuring the cumulative attenuation of waves passing through multiple barriers.
- **Computer Science Algorithms:** Approximating transcendental functions (such as $\sin(x)$ or $e^x$) via finite polynomial approximations, and analyzing loop complexity runtimes via algorithmic summation bounds.

---

## 4. Fundamental Properties

Sequences and series follow specific structural laws that govern linearity, summation bounds, and convergence behavior.

### Linearity of Summation

Because summation is built directly on standard algebraic addition, the Sigma operator satisfies linear distribution rules over sequences. For any real constant scalar $c$:

$$\sum_{k=1}^{n} c \cdot a_k = c \sum_{k=1}^{n} a_k$$

$$\sum_{k=1}^{n} (a_k \pm b_k) = \sum_{k=1}^{n} a_k \pm \sum_{k=1}^{n} b_k$$

### Fundamental Summation Identities

When evaluating series consisting of simple integer powers, the following direct algebraic simplification shortcuts are utilized:

| Name                          | Series Representation | Closed-Form Algebraic Formula         |
| :---------------------------- | :-------------------- | :------------------------------------ |
| **Constant Series**           | $\sum_{k=1}^{n} c$    | $c \cdot n$                           |
| **Sum of First $n$ Integers** | $\sum_{k=1}^{n} k$    | $\frac{n(n + 1)}{2}$                  |
| **Sum of First $n$ Squares**  | $\sum_{k=1}^{n} k^2$  | $\frac{n(n + 1)(2n + 1)}{6}$          |
| **Sum of First $n$ Cubes**    | $\sum_{k=1}^{n} k^3$  | $\left[ \frac{n(n + 1)}{2} \right]^2$ |

### Infinite Series Convergence Criterion

For an infinite series $\sum_{k=1}^{\infty} a_k$ to converge to a finite value $S$, it is a mandatory (but not completely sufficient) prerequisite that the underlying terms themselves approach zero as the index goes to infinity:

$$\lim_{n \to \infty} a_n = 0$$

> **The Divergence Test Warning:** If $\lim_{n \to \infty} a_n \neq 0$, the series is guaranteed to **diverge**. However, if $\lim_{n \to \infty} a_n = 0$, the series _might_ converge or it _might_ diverge (as seen in the classic Harmonic Series $\sum \frac{1}{n}$, which diverges despite its individual terms approaching zero).

---

## 5. Types & Variations

Sequences and series are classified into distinct categories based on the mathematical operation used to generate successive terms.

### 1. Arithmetic Sequences and Series

An arithmetic sequence progresses via a process of constant addition. The difference between consecutive terms is fixed.

- **Explicit General Term:** $$a_n = a_1 + (n - 1)d$$
- **Finite Sum Formula ($S_n$):** Can be evaluated by averaging the first and last terms, then multiplying by the total number of terms:
  $$S_n = \frac{n}{2}(a_1 + a_n) = \frac{n}{2}\left[2a_1 + (n - 1)d\right]$$

### 2. Geometric Sequences and Series

A geometric sequence progresses via a process of constant multiplication. The quotient of consecutive terms is fixed.

- **Explicit General Term:** $$a_n = a_1 \cdot r^{n-1}$$
- **Finite Sum Formula ($S_n$):** Valid for any common ratio where $r \neq 1$:
  $$S_n = \frac{a_1(1 - r^n)}{1 - r}$$
- **Infinite Sum Formula ($S_\infty$):** An infinite geometric series will converge to a single steady value if and only if the absolute value of the ratio is strictly fractional ($|r| < 1$). The sum is given by:
  $$S_\infty = \frac{a_1}{1 - r}$$

### 3. Alternative Notable Structures

- **Harmonic Sequence:** A sequence formed by taking the reciprocals of an arithmetic sequence. The terms take the form $\frac{1}{a_n}$. They do not possess a simple closed-form finite sum formula.
- **Recursive Fibonacci Sequence:** A sequence defined by adding the two preceding terms, rather than using a fixed common difference or ratio:
  $$F_1 = 1, \quad F_2 = 1 \quad \implies \quad F_n = F_{n-1} + F_{n-2} \quad (\text{for } n \ge 3)$$

---

## 6. How to Solve

Here we explore step-by-step methodology for executing major types of algebraic operations involving finite arithmetic summations, infinite geometric boundaries, and converting recursive definitions into explicit statements.

### Strategy A: Evaluating an Arithmetic Series with Missing Parameters

Often, you are asked to sum an arithmetic structure where the number of terms or the common difference is not explicitly stated.

**Example Question:** Find the total sum of all three-digit positive integers that are exact multiples of 7.

1. **Identify the boundary terms of the sequence:**
   - The smallest three-digit integer is $100$. Dividing $100 / 7 \approx 14.28$. The first valid multiple is $7 \times 15 = 105$. Thus, $a_1 = 105$.
   - The largest three-digit integer is $999$. Dividing $999 / 7 \approx 142.71$. The largest valid multiple is $7 \times 142 = 994$. Thus, $a_n = 994$.
   - Since these are consecutive multiples of 7, the common difference is $d = 7$.

2. **Determine the total number of terms ($n$) using the explicit formula:**
   $$a_n = a_1 + (n - 1)d$$
   $$994 = 105 + (n - 1)7$$
   $$889 = (n - 1)7$$
   $$127 = n - 1 \implies n = 128$$

3. **Apply the arithmetic partial sum formula:**
   $$S_{128} = \frac{n}{2}(a_1 + a_n)$$
   $$S_{128} = \frac{128}{2}(105 + 994)$$
   $$S_{128} = 64 \cdot 1099 = 70336$$

The total sum of all three-digit multiples of 7 is exactly $70,336$.

### Strategy B: Finding the Value of an Infinite Geometric Series

Infinite calculations are solvable provided the common ratio meets the strict convergence constraint ($|r| < 1$).

**Example Question:** Evaluate the infinite series given by the expression:

$$\sum_{k=1}^{\infty} 5 \cdot \left(-\frac{2}{3}\right)^{k-1}$$

1. **Extract the structural parameters:**
   - Expand the first few terms to confirm values. When $k=1$, $a_1 = 5 \cdot (-\frac{2}{3})^0 = 5$.
   - When $k=2$, $a_2 = 5 \cdot (-\frac{2}{3})^1 = -\frac{10}{3}$.
   - The common ratio is explicitly the base of the exponent: $r = -\frac{2}{3}$.

2. **Verify convergence criteria:**
   $$\left|-\frac{2}{3}\right| = \frac{2}{3} < 1$$
   Since the absolute value of the ratio is strictly less than 1, the infinite series converges and can be evaluated.

3. **Substitute parameters into the infinite geometric summation formula:**
   $$S_\infty = \frac{a_1}{1 - r}$$
   $$S_\infty = \frac{5}{1 - \left(-\frac{2}{3}\right)} = \frac{5}{1 + \frac{2}{3}}$$
   $$S_\infty = \frac{5}{\frac{5}{3}}$$

4. **Simplify the complex fraction expression:**
   $$S_\infty = 5 \cdot \frac{3}{5} = 3$$

The infinite series converges to the exact value of $3$.

### Strategy C: Solving a Telescoping Series via Partial Fractions

A telescoping series is a unique variation where nearly every intermediate term cancels out when the summation is expanded, leaving only the first and last components.

**Example Question:** Evaluate the finite sum $\sum_{k=1}^{n} \frac{1}{k(k+1)}$.

1. **Decompose the argument using partial fraction decomposition:**
   $$\frac{1}{k(k+1)} = \frac{A}{k} + \frac{B}{k+1}$$
   $$1 = A(k+1) + Bk$$
   - Setting $k = 0 \implies 1 = A(1) \implies A = 1$.
   - Setting $k = -1 \implies 1 = B(-1) \implies B = -1$.
   - Therefore, the general term can be rewritten as: $\frac{1}{k} - \frac{1}{k+1}$.

2. **Expand the series by writing out consecutive terms:**
   - For $k = 1$: $\left(1 - \frac{1}{2}\right)$
   - For $k = 2$: $\left(\frac{1}{2} - \frac{1}{3}\right)$
   - For $k = 3$: $\left(\frac{1}{3} - \frac{1}{4}\right)$
   - For $k = n$: $\left(\frac{1}{n} - \frac{1}{n+1}\right)$

3. **Observe the cancellation pattern:**
   $$S_n = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \dots + \left(\frac{1}{n} - \frac{1}{n+1}\right)$$
   Notice that the second part of each term cancels with the first part of the succeeding term.

4. **Isolate the surviving terms:**
   $$S_n = 1 - \frac{1}{n+1} = \frac{n}{n+1}$$

The closed-form sum of the telescoping series is $\frac{n}{n+1}$.

---

## 7. Summary

- **List vs. Sum:** A sequence is an ordered, function-driven list of discrete numbers; a series is the formal cumulative summation of those individual list entries.
- **Arithmetic vs. Geometric:** Arithmetic structures change via a fixed common difference ($+d$), whereas geometric structures scale via a fixed common ratio ($\times r$).
- **Closed-Form Efficiency:** Utilizing algebraic sum formulas allows long arrays of values to be evaluated instantly without performing manual addition.
- **The Infinity Barrier:** Summing an infinite list of numbers yields a finite real number if and only if the sequence terms shrink to zero fast enough, as dictated by strict convergence constraints (such as $|r| < 1$ for geometric models).
