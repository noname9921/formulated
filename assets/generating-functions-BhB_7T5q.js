var e=`# Ordinary Generating Functions

An Ordinary Generating Function (OGF) serves as a bridge between the discrete world of sequences and the continuous realm of formal power series. By encoding an infinite sequence of numbers as the coefficients of a power series, OGFs transform difficult problems involving counting, recurrence relations, and partitions into algebraic manipulations of functions.

## Definition

An ordinary generating function $A(x)$ for a sequence of numbers $(a_n)_{n \\ge 0} = a_0, a_1, a_2, \\dots$ is defined as the formal power series:
$$A(x) = \\sum_{n=0}^{\\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \\dots$$
In this definition, $x$ acts as a formal variable, or "placeholder," rather than a value intended for numerical evaluation. While we often treat $A(x)$ as a function, the focus is on the algebraic properties of the coefficients. If the series converges for some neighborhood of $x=0$, it represents an analytic function, allowing the use of calculus; however, the formal power series definition remains valid even when the series diverges, as we are concerned with the operations of addition, multiplication, and inversion within the ring of formal power series.

## Key Terminology

To work effectively with OGFs, one must understand several core concepts:

| Term | Definition |
| :--- | :--- |
| Formal Power Series | An expression of the form $\\sum a_n x^n$ where convergence is not required. |
| Coefficients | The values $a_n$ that encode the sequence of interest. |
| Cauchy Product | The result of multiplying two OGFs: $A(x)B(x) = \\sum_{n=0}^\\infty (\\sum_{k=0}^n a_k b_{n-k}) x^n$. |
| Exponential Generating Function | A variant defined by $\\sum a_n \\frac{x^n}{n!}$, used for labeled combinatorial structures. |
| Radius of Convergence | The distance from the origin within which the power series behaves as an analytic function. |
| Singularities | Values of $x$ where the generating function becomes undefined, often dictating the asymptotic growth of $a_n$. |

## Purpose

The primary utility of OGFs lies in their ability to translate combinatorial operations into algebraic ones. Specifically:
1. **Summation of sequences:** Adding two sequences corresponds to the addition of their OGFs.
2. **Convolution:** The Cauchy product naturally represents the process of "choosing" elements from two independent sets and summing their weights, which appears frequently in problems involving ways to combine outcomes.
3. **Solving Recurrences:** Linear recurrence relations with constant coefficients can be converted into rational functions. By using partial fraction decomposition, one can recover the closed-form expression for the $n$-th term of the recurrence.
4. **Asymptotic Analysis:** By studying the singularities of $A(x)$, mathematicians can determine how the sequence $a_n$ behaves as $n \\to \\infty$, even without computing every term.

## Fundamental Properties

Generating functions obey the standard rules of algebra. If $A(x) = \\sum a_n x^n$ and $B(x) = \\sum b_n x^n$, then:

**Linearity:** For constants $c_1, c_2$, the OGF of $c_1 a_n + c_2 b_n$ is $c_1 A(x) + c_2 B(x)$.

**Shifting:** If we shift a sequence to the right by $k$ positions, $0, \\dots, 0, a_0, a_1, \\dots$, the new OGF is $x^k A(x)$.

**Differentiation and Integration:** Multiplying the OGF by $n$ corresponds to the operator $x \\frac{d}{dx} A(x)$. Specifically:
$$x A'(x) = \\sum_{n=1}^\\infty n a_n x^n$$
This is vital when calculating the mean or expected values of distributions defined by sequences.

**Multiplication (Convolution):** As defined previously, the product $A(x)B(x)$ results in a sequence whose $n$-th term is the convolution $\\sum_{k=0}^n a_k b_{n-k}$. This is the cornerstone of solving problems involving partitioning an integer $n$ into parts.

## Types & Variations

While the ordinary generating function is the standard tool for "unlabeled" structures (e.g., distributing identical items into distinct bins), several variations exist:

1. **Exponential Generating Functions (EGFs):** Defined as $E(x) = \\sum a_n \\frac{x^n}{n!}$. These are essential for labeled combinatorial objects, such as permutations or arrangements where the order of distinct items matters.
2. **Dirichlet Generating Functions:** Defined as $\\sum \\frac{a_n}{n^s}$. These are used primarily in number theory to study sequences defined by multiplicative properties, such as the Riemann Zeta function.
3. **Bivariate Generating Functions:** Defined as $A(x, y) = \\sum \\sum a_{n,k} x^n y^k$. These allow the tracking of two different parameters simultaneously, such as the number of items and the number of containers.

## How to Solve

Solving problems with OGFs typically follows a structured four-step process:

**1. Modeling the Recurrence or Set:**
Identify the sequence or the recursive rule defining it. For example, if $a_n = a_{n-1} + a_{n-2}$ with $a_0 = 0, a_1 = 1$, write out the summation:
$$A(x) = \\sum_{n=0}^\\infty a_n x^n = a_0 + a_1 x + \\sum_{n=2}^\\infty (a_{n-1} + a_{n-2}) x^n$$

**2. Algebraic Conversion:**
Substitute the recurrence into the power series to get an equation for $A(x)$. For Fibonacci numbers:
$$A(x) = x + x A(x) + x^2 A(x)$$
Solving for $A(x)$ yields $A(x) = \\frac{x}{1-x-x^2}$.

**3. Expansion and Extraction:**
To extract $a_n$, express $A(x)$ in a form that allows binomial expansion. Using partial fraction decomposition on the rational function:
$$\\frac{x}{1-x-x^2} = \\frac{1}{\\sqrt{5}} \\left( \\frac{1}{1 - \\phi x} - \\frac{1}{1 - \\psi x} \\right)$$
where $\\phi$ and $\\psi$ are the roots of the characteristic equation $1-x-x^2=0$.

**4. Coefficient Retrieval:**
Use the generalized binomial theorem: $(1-z)^{-\\alpha} = \\sum_{n=0}^\\infty \\binom{n+\\alpha-1}{n} z^n$. Applying this to the components of the partial fraction allows the calculation of the explicit formula for $a_n$ (Binet's formula).

## Summary

Ordinary generating functions are a powerful, formal mathematical framework that converts the difficult problem of finding the $n$-th term of a sequence into the analysis of algebraic functions. By using tools like the Cauchy product, differentiation, and partial fraction decomposition, one can navigate from a recurrence relation to a closed-form solution with precision. The methodology extends beyond simple sequences to complex combinatorial structures, making it an indispensable instrument in probability theory, analytical combinatorics, and discrete mathematics. The versatility of the approach relies on the fact that the algebraic structure of the power series faithfully mirrors the combinatorial structure of the sequence being generated.`;export{e as default};