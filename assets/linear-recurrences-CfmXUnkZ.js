var e=`# Solving Linear Homogeneous Recurrences

## Definition

A linear homogeneous recurrence relation with constant coefficients is a mathematical equation that defines a sequence of numbers $\\{a_n\\}$ where each term is expressed as a linear combination of its preceding terms. The term "linear" signifies that each term $a_i$ appears to the first power and there are no products of different terms or non-linear transformations like squares or trigonometric functions. The term "homogeneous" implies that the relation is equal to zero once all sequence terms are moved to one side, meaning there is no additional "forcing function" or constant term independent of the sequence itself.

Formally, a linear homogeneous recurrence relation of order $k$ is expressed as:
$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \\dots + c_k a_{n-k}$$
where $c_1, c_2, \\dots, c_k$ are constant coefficients and $c_k \\neq 0$. The sequence is determined by this rule alongside $k$ initial conditions, typically $a_0, a_1, \\dots, a_{k-1}$, which anchor the recurrence and ensure a unique solution exists for the infinite sequence.

## Key Terminology

To master this subject, one must be familiar with several fundamental technical terms:

| Term | Definition |
| :--- | :--- |
| Order | The number of previous terms $k$ upon which the current term $a_n$ depends. |
| Constant Coefficients | The values $c_i$ that do not change as $n$ increases. |
| Characteristic Equation | The polynomial equation $r^k - c_1r^{k-1} - \\dots - c_k = 0$ used to find the general solution. |
| Characteristic Roots | The solutions to the characteristic equation, which dictate the base growth of the sequence. |
| Homogeneous | The absence of a non-homogeneous term $f(n)$ that would be added to the linear combination. |
| General Solution | A formula involving arbitrary constants that describes every possible sequence satisfying the recurrence. |
| Initial Conditions | The starting values of the sequence, used to solve for the arbitrary constants in the general solution. |

## Purpose

The primary utility of solving these recurrences is to transform a recursive definition—which requires calculating all previous terms to find a specific term—into a "closed-form" expression. A closed-form solution allows for the direct computation of $a_n$ for any $n$ using only a direct formula, typically involving exponents, without the need for iterative calculation. This is vital in computer science for analyzing the time complexity of recursive algorithms, in biology for modeling population growth, and in financial mathematics for calculating compound interest or amortization schedules.

## Fundamental Properties

Linear homogeneous recurrences operate under the principle of superposition. If we have two distinct solutions to a linear homogeneous recurrence, their sum is also a solution. Similarly, any constant multiple of a solution is also a solution. This allows us to construct a general solution by taking a linear combination of a set of "basis solutions."

The basis solutions are derived from the roots of the characteristic equation. If the characteristic roots are distinct, say $r_1, r_2, \\dots, r_k$, the general solution takes the form:
$$a_n = A_1(r_1)^n + A_2(r_2)^n + \\dots + A_k(r_k)^n$$
where $A_i$ are constants determined by the initial conditions. When roots are repeated, the basis solutions are modified by multiplying by powers of $n$. For instance, if a root $r$ repeats $m$ times, the contribution to the general solution is $(A_0 + A_1n + A_2n^2 + \\dots + A_{m-1}n^{m-1})r^n$.

## Types & Variations

1. **First-Order:** These take the form $a_n = c_1 a_{n-1}$. The solution is a simple geometric progression $a_n = a_0(c_1)^n$.
2. **Second-Order:** These take the form $a_n = c_1 a_{n-1} + c_2 a_{n-2}$. These are the most common in textbooks, exemplified by the Fibonacci sequence.
3. **Higher-Order:** Recurrences where $k > 2$. These require solving a polynomial of degree $k$.
4. **Constant Coefficient:** The coefficients $c_i$ are fixed. If coefficients are functions of $n$ (variable coefficients), the techniques differ significantly (e.g., using generating functions).

The following static graph illustrates the growth patterns of different sequence behaviors based on their characteristic roots. The graph plots $f(x) = 2^x$ (exponential growth) and $f(x) = (0.5)^x$ (exponential decay), representing how different root magnitudes affect the behavior of the recurrence:

\`\`\`graph
2^x
0.5^x
\`\`\`

In this visualization, the curve $2^x$ represents a sequence with a root magnitude greater than 1, leading to rapid growth, while $0.5^x$ represents a root magnitude less than 1, leading to rapid decay toward zero.

## How to Solve

Solving a linear homogeneous recurrence involves a systematic, four-step process:

### Step 1: Form the Characteristic Equation
Given the recurrence $a_n - c_1 a_{n-1} - c_2 a_{n-2} - \\dots - c_k a_{n-k} = 0$, substitute $a_n = r^n$. Dividing by $r^{n-k}$ yields the characteristic equation:
$$r^k - c_1 r^{k-1} - c_2 r^{k-2} - \\dots - c_k = 0$$

### Step 2: Find the Roots
Solve the polynomial for its roots $r_1, r_2, \\dots, r_k$. This may involve factoring or numerical approximation if $k$ is large.

### Step 3: Write the General Solution
Construct the general solution based on the nature of the roots:
- If all roots $r_i$ are distinct: $a_n = \\sum_{i=1}^k A_i (r_i)^n$.
- If there are repeated roots, adjust terms: For a root $r$ of multiplicity $m$, include $(A_0 + A_1 n + \\dots + A_{m-1} n^{m-1}) r^n$ in the sum.

### Step 4: Use Initial Conditions
Apply the $k$ initial conditions to create a system of $k$ linear equations. Solve this system to find the specific values of the constants $A_i$.

#### Illustrative Example: The Fibonacci Sequence
Consider $F_n = F_{n-1} + F_{n-2}$ with $F_0 = 0, F_1 = 1$.
1. **Characteristic Equation:** $r^2 - r - 1 = 0$.
2. **Roots:** Using the quadratic formula, $r = \\frac{1 \\pm \\sqrt{5}}{2}$. Let $\\phi = \\frac{1+\\sqrt{5}}{2}$ and $\\psi = \\frac{1-\\sqrt{5}}{2}$.
3. **General Solution:** $F_n = A\\phi^n + B\\psi^n$.
4. **Initial Conditions:**
   - $F_0 = A + B = 0 \\Rightarrow B = -A$
   - $F_1 = A\\phi + B\\psi = 1 \\Rightarrow A\\phi - A\\psi = 1 \\Rightarrow A(\\phi - \\psi) = 1$
   - Since $\\phi - \\psi = \\sqrt{5}$, we find $A = \\frac{1}{\\sqrt{5}}$ and $B = -\\frac{1}{\\sqrt{5}}$.
   - Final closed form: $F_n = \\frac{1}{\\sqrt{5}} \\left( \\left( \\frac{1+\\sqrt{5}}{2} \\right)^n - \\left( \\frac{1-\\sqrt{5}}{2} \\right)^n \\right)$.

## Summary

The study of linear homogeneous recurrences is a cornerstone of discrete mathematics. By reducing complex iterative processes into characteristic polynomial equations, we gain the ability to predict the long-term behavior of a sequence with precision. The methodology relies on the extraction of roots, which act as the "DNA" of the sequence's growth, and the application of initial conditions to calibrate the model. Whether analyzing the efficiency of a merge-sort algorithm or modeling complex natural growth patterns, the techniques outlined provide the necessary framework to translate recursive definitions into powerful, analytical tools. Mastery of these methods requires both algebraic proficiency in solving high-degree polynomials and the ability to systematically manage systems of linear equations.`;export{e as default};