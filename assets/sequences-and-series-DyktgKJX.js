var e=`# Sequences & Series

## Definition

A sequence is an ordered list of numbers that follow a specific pattern or rule. Mathematically, a sequence is defined as a function whose domain is the set of positive integers $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ (or sometimes starting at zero, $\\mathbb{N}_0 = \\{0, 1, 2, \\dots\\}$). If we denote the elements of the sequence as $a_1, a_2, a_3, \\dots, a_n, \\dots$, the sequence is represented by the set $\\{a_n\\}_{n=1}^{\\infty}$. Each individual number $a_n$ is known as a term, where $n$ represents the position or index of the term.

A series, by contrast, is the result of adding the terms of a sequence together. If a sequence is $\\{a_n\\}$, the corresponding series is the sum $S_k = \\sum_{n=1}^{k} a_n$. When $k$ is finite, the series is a finite series. When we consider the limit of the partial sums as $k \\to \\infty$, we arrive at an infinite series, denoted as $S = \\sum_{n=1}^{\\infty} a_n$. The study of sequences and series forms the bedrock of mathematical analysis, enabling the definition of transcendental functions, the evaluation of complex integrals, and the approximation of non-elementary values.

## Key Terminology

To analyze sequences and series effectively, one must master the following vocabulary:

| Term | Definition |
| :--- | :--- |
| **Term** | An individual element $a_n$ within a sequence. |
| **Index** | The integer $n$ indicating the position of $a_n$. |
| **Recursive Formula** | A rule defining $a_n$ based on preceding terms (e.g., $a_n = f(a_{n-1})$). |
| **Explicit Formula** | A rule defining $a_n$ as a direct function of $n$ (e.g., $a_n = 2n + 1$). |
| **Partial Sum** | The sum of the first $k$ terms of a sequence: $S_k = \\sum_{n=1}^{k} a_n$. |
| **Convergence** | A property where the sequence or series approaches a specific finite value $L$. |
| **Divergence** | A property where the sequence or series does not approach a finite value, often tending toward $\\pm\\infty$ or oscillating. |
| **Common Difference** | The constant value $d$ added between terms in an arithmetic sequence. |
| **Common Ratio** | The constant factor $r$ by which each term is multiplied in a geometric sequence. |

## Purpose

The primary utility of sequences and series is to handle "infinite processes" which are otherwise computationally intractable. In calculus, infinite series provide the basis for the Taylor series, which allows us to represent complex, non-polynomial functions (such as $e^x$, $\\sin(x)$, and $\\ln(x)$) as infinite polynomials. This is critical for numerical analysis and computer science, as calculators and software cannot directly "compute" a transcendental value; instead, they compute a partial sum of a power series to a desired degree of accuracy.

Furthermore, sequences allow us to model discrete growth, such as population dynamics, compound interest in finance, or the progression of time in discrete-time dynamical systems. By analyzing the behavior of $a_n$ as $n \\to \\infty$, we can determine the long-term stability or breakdown of these models.

## Fundamental Properties

The behavior of a sequence is largely determined by its limit. We say a sequence $\\{a_n\\}$ converges to $L$ if, for every $\\epsilon > 0$, there exists an integer $N$ such that for all $n > N$, $|a_n - L| < \\epsilon$. If no such finite $L$ exists, the sequence diverges.

For series, the requirements are more stringent. A fundamental property is the **$n$-th Term Test for Divergence**: if $\\lim_{n \\to \\infty} a_n \\neq 0$, then the series $\\sum a_n$ must diverge. Note that the converse is not true; if $\\lim_{n \\to \\infty} a_n = 0$, the series may still diverge (for example, the harmonic series $\\sum \\frac{1}{n}$).

Linearity is another vital property: if $\\sum a_n$ and $\\sum b_n$ are convergent series, then $\\sum (c_1 a_n + c_2 b_n) = c_1 \\sum a_n + c_2 \\sum b_n$. This allows us to decompose complex series into simpler, well-known forms.

## Types & Variations

### Arithmetic Sequences and Series
An arithmetic sequence changes by a constant difference $d$. The explicit formula is $a_n = a_1 + (n-1)d$. The partial sum $S_n$ of an arithmetic series is given by the elegant formula:
$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(2a_1 + (n-1)d)$$

### Geometric Sequences and Series
A geometric sequence changes by a constant ratio $r$. The explicit formula is $a_n = a_1 \\cdot r^{n-1}$. The partial sum is given by:
$$S_n = a_1 \\frac{1-r^n}{1-r} \\quad (\\text{for } r \\neq 1)$$
If $|r| < 1$, the infinite geometric series converges to:
$$S = \\frac{a_1}{1-r}$$

### Power Series
A power series is an infinite series of the form $\\sum_{n=0}^{\\infty} c_n (x-a)^n$. These are used to approximate functions. The radius of convergence $R$ defines the interval $(a-R, a+R)$ within which the series converges.

## How to Solve

Solving problems involving sequences and series typically follows a structured mathematical workflow.

### 1. Identify the Type
Determine if the sequence is arithmetic, geometric, or neither. If it is arithmetic, identify $a_1$ and $d$. If geometric, identify $a_1$ and $r$. If the sequence is more complex, attempt to find a recurrence relation or express the $n$-th term via induction.

### 2. Testing for Convergence
To determine if an infinite series converges, apply standard convergence tests:
* **Ratio Test:** Calculate $L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$. If $L < 1$, the series converges absolutely. If $L > 1$, it diverges. If $L = 1$, the test is inconclusive.
* **Integral Test:** If $a_n = f(n)$ where $f(x)$ is positive, continuous, and decreasing, then $\\sum a_n$ converges if and only if $\\int_{1}^{\\infty} f(x) dx$ converges.
* **Comparison Test:** If $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges. If $a_n \\geq b_n \\geq 0$ and $\\sum b_n$ diverges, then $\\sum a_n$ diverges.

### 3. Finding the Sum
For convergent series, if the form is telescoping (i.e., terms cancel out when written as $a_n = b_n - b_{n+1}$), the infinite sum is simply the limit of the remaining boundary terms. For geometric series, use the ratio formula. For power series, differentiate or integrate the function being represented to identify coefficients.

## Summary

Sequences and series provide the formal language for transition from discrete arithmetic to continuous analysis. By studying the behavior of lists of numbers (sequences) and their cumulative sums (series), we gain the ability to quantify infinite processes, approximate transcendental functions, and model complex dynamic systems. Mastery of these topics requires a firm grasp of convergence criteria, the ability to derive explicit formulas from recursive patterns, and the application of rigorous testing methodologies to determine the validity of infinite summations. Whether in financial modeling, physical simulations, or pure mathematical theory, the study of sequences and series is essential for precision in scientific computation.`;export{e as default};