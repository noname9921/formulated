var e=`# Solving Linear Homogeneous Recurrences

## Definition

A linear homogeneous recurrence relation with constant coefficients is a mathematical equation that defines a sequence of values $a_n$ by expressing each term as a linear combination of its preceding terms. Formally, a recurrence relation of order $k$ is defined by the expression:

$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \\dots + c_k a_{n-k}$$

In this definition, $c_1, c_2, \\dots, c_k$ are real or complex constant coefficients, with the constraint that $c_k \\neq 0$ to ensure the relation is truly of order $k$. The term "linear" signifies that each term $a_{i}$ appears to the first power and is not multiplied by other terms of the sequence. The term "homogeneous" implies that there is no additive constant or independent function of $n$ (often denoted as $f(n)$) added to the linear combination. If such a term existed, the recurrence would be classified as "non-homogeneous."

The sequence is typically uniquely determined by providing $k$ initial conditions, such as $a_0, a_1, \\dots, a_{k-1}$. Without these conditions, the recurrence defines a general solution space rather than a specific sequence.

## Key Terminology

To analyze these relations effectively, one must master the underlying vocabulary:

*   **Order ($k$):** The number of preceding terms upon which the current term $a_n$ depends. A recurrence of order 1 is simple, whereas order 2 and above require more sophisticated characteristic equation methods.
*   **Characteristic Equation:** A polynomial equation derived from the recurrence relation, represented as $r^k - c_1 r^{k-1} - c_2 r^{k-2} - \\dots - c_k = 0$. The roots of this equation dictate the functional form of the solution.
*   **Characteristic Roots:** The specific values of $r$ that satisfy the characteristic equation. These roots can be distinct real numbers, repeated real numbers, or complex conjugate pairs.
*   **General Solution:** A formula for $a_n$ that contains arbitrary constants (usually denoted $A, B, C, \\dots$) representing the family of sequences satisfying the recurrence.
*   **Particular Solution:** The specific sequence that satisfies both the recurrence and the provided initial conditions.

## Purpose

The study of linear homogeneous recurrence relations is fundamental to computer science, combinatorics, and discrete mathematics. Their primary purpose is to provide a closed-form expression for sequences defined recursively.

In computer science, these relations are essential for analyzing the time complexity of recursive algorithms. For instance, the divide-and-conquer strategy used in Merge Sort or Quick Sort often yields recurrence relations that describe the growth of resource consumption as the input size $n$ increases. By solving these, we can prove the efficiency of algorithms in Big-O notation.

In combinatorics, these relations model population growth, tiling problems, and path-counting on graphs. Historically, the Fibonacci sequence ($F_n = F_{n-1} + F_{n-2}$) is the most famous example of such a recurrence, appearing in biological patterns and financial modeling. Solving these equations allows mathematicians to bypass the computational burden of calculating thousands of iterations by jumping directly to the value of $a_n$ for any given $n$.

## Fundamental Properties

Linear homogeneous recurrences satisfy the **Principle of Superposition**. If two sequences $\\{u_n\\}$ and $\\{v_n\\}$ satisfy a linear homogeneous recurrence, then any linear combination $\\{w_n\\} = \\alpha u_n + \\beta v_n$ (where $\\alpha, \\beta$ are constants) also satisfies the same recurrence.

This property is a direct result of the linearity of the operator. Because the equation is homogeneous, the zero sequence is always a potential (though trivial) solution. This leads to the construction of the solution space: if the characteristic equation has distinct roots $r_1, r_2, \\dots, r_k$, then the general solution is:

$$a_n = A_1(r_1)^n + A_2(r_2)^n + \\dots + A_k(r_k)^n$$

Where $A_i$ are constants determined by the initial conditions. This structure implies that the growth rate of the sequence is dominated by the root with the largest absolute value (the spectral radius), which governs the long-term asymptotic behavior of the sequence.

## Types & Variations

Recurrence relations are categorized based on their structural characteristics, which in turn dictate the solving methodology.

| Type | Structure Example | Characteristic Behavior |
| :--- | :--- | :--- |
| First-Order | $a_n = c a_{n-1}$ | Geometric progression, $a_n = a_0 c^n$. |
| Second-Order | $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ | Oscillatory or exponential growth. |
| Higher-Order | $a_n = \\sum c_i a_{n-i}$ | Complex polynomial combinations. |
| Repeated Roots | $a_n = 2a_{n-1} - a_{n-2}$ | Polynomial growth multiplied by exponential. |
| Complex Roots | $a_n = -a_{n-2}$ | Periodic, trigonometric-like oscillation. |

The behavior of these systems is best understood by observing how different roots influence growth. For example, if roots are $|r| > 1$, the sequence diverges; if $|r| < 1$, it decays to zero; and if $|r| = 1$, it maintains a steady or periodic state.

## How to Solve

The standard procedure for solving a linear homogeneous recurrence with constant coefficients involves four primary steps:

### 1. Formulate the Characteristic Equation
Given the recurrence $a_n - c_1 a_{n-1} - c_2 a_{n-2} - \\dots - c_k a_{n-k} = 0$, replace $a_n$ with $r^n$, $a_{n-1}$ with $r^{n-1}$, and so on. Dividing by $r^{n-k}$, we obtain:
$$r^k - c_1 r^{k-1} - c_2 r^{k-2} - \\dots - c_k = 0$$

### 2. Find the Characteristic Roots
Solve for $r$. If the polynomial is of degree 2, the quadratic formula suffices. For higher degrees, one may use numerical methods, synthetic division, or the Rational Root Theorem.

### 3. Write the General Solution
*   **For distinct roots $r_1, r_2, \\dots, r_k$:** 
    $$a_n = A_1 r_1^n + A_2 r_2^n + \\dots + A_k r_k^n$$
*   **For repeated roots:** If a root $r$ repeats $m$ times, the contribution to the general solution is:
    $$(A_0 + A_1 n + A_2 n^2 + \\dots + A_{m-1} n^{m-1})r^n$$

### 4. Determine Constants via Initial Conditions
Substitute the known values for $a_0, a_1, \\dots, a_{k-1}$ into the general solution to create a system of $k$ linear equations. Solve this system to find the unique values for the constants.

### Illustrative Example
Consider $a_n = 5a_{n-1} - 6a_{n-2}$ with $a_0 = 2, a_1 = 5$.
1. Characteristic equation: $r^2 - 5r + 6 = 0$.
2. Factor: $(r-2)(r-3) = 0$. Roots are $r_1 = 2, r_2 = 3$.
3. General form: $a_n = A(2^n) + B(3^n)$.
4. Initial conditions:
   - For $n=0$: $A + B = 2$
   - For $n=1$: $2A + 3B = 5$
   Solving the system: Multiply first by 2: $2A + 2B = 4$. Subtract from second: $B = 1$. Consequently, $A = 1$.
   The closed-form solution is $a_n = 2^n + 3^n$.

## Summary

Solving linear homogeneous recurrences is a cornerstone of discrete analysis, providing a bridge between recursive definitions and explicit closed-form expressions. By translating the recurrence into a characteristic polynomial, we transform a discrete sequence problem into an algebraic root-finding exercise. Whether managing simple exponential growth or complex, oscillatory sequences, the method of characteristic roots remains the most robust analytical tool. 

Key takeaways include the importance of the initial conditions in selecting the specific solution from the general solution space, and the critical role of root multiplicity in determining whether the solution includes polynomial factors. Through this framework, complex recursive behaviors in computer science and mathematics are rendered solvable, predictable, and computable.`;export{e as default};