var e=`# Ordinary Generating Functions

Ordinary Generating Functions (OGFs) serve as a bridge between discrete mathematics and continuous analysis. By encoding a sequence of numbers $\\{a_n\\}_{n=0}^{\\infty}$ into the coefficients of a formal power series, we can manipulate these sequences using the algebraic tools of calculus and complex analysis. This transformation allows complex combinatorial problems to be reframed as operations on functions, often simplifying otherwise intractable counting arguments.

## Definition

An Ordinary Generating Function for a sequence $\\{a_n\\}_{n=0}^{\\infty}$ is defined as the formal power series $A(x)$ given by:

$$A(x) = \\sum_{n=0}^{\\infty}a_n x^n = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \\dots$$

In the context of formal power series, the variable $x$ acts primarily as a placeholder, marking the position of the coefficient $a_n$. We typically do not concern ourselves with the convergence of the series when performing formal manipulations, although when $A(x)$ represents a function analytic at $x=0$, convergence within a radius $R > 0$ allows us to use techniques from calculus, such as differentiation, integration, and Taylor series expansion, to extract information about the sequence $a_n$.

## Key Terminology

To navigate the theory of OGFs, one must master several foundational terms:

| Term | Definition |
| :--- | :--- |
| Formal Power Series | A series treated algebraically without assuming convergence. |
| Sequence | An ordered list of numbers $a_0, a_1, a_2, \\dots$. |
| Radius of Convergence | The distance $R$ from the origin within which the series converges. |
| Coefficient | The value $a_n$ associated with the term $x^n$. |
| Analytic Function | A function that can be locally represented by a convergent power series. |
| Cauchy Product | The operation $C(x) = A(x)B(x)$ corresponding to discrete convolution. |

The relationship between the sequence and the function is bijective; given a sequence, there is one unique power series, and given a power series (provided it is well-defined), there is one unique sequence of coefficients.

## Purpose

The primary utility of OGFs lies in the reduction of combinatorial complexity. Many problems involving linear recurrence relations, partitioning sets, or counting paths in graphs can be reduced to algebraic identities.

1. **Solving Recurrences:** Linear recurrence relations with constant coefficients, such as the Fibonacci sequence, can be solved by converting the recurrence into an algebraic equation for the OGF.
2. **Counting Problems:** OGFs are excellent for problems involving "selections with repetition." If you have different types of items and want to know how many ways to choose $n$ items, the OGF of each type of item is multiplied together to yield the OGF for the total selection.
3. **Asymptotic Analysis:** By studying the singularities (poles) of the generating function in the complex plane, one can determine the asymptotic growth of the coefficients $a_n$. This provides deep insight into the behavior of sequences as $n \\to \\infty$.

## Fundamental Properties

Generating functions behave according to the standard rules of algebra for power series. Let $A(x) = \\sum a_n x^n$ and $B(x) = \\sum b_n x^n$.

### Addition
Adding two sequences corresponds to adding their generating functions:
$$(A+B)(x) = \\sum_{n=0}^{\\infty}(a_n + b_n)x^n$$

### Cauchy Product
The multiplication of two OGFs results in the convolution of the underlying sequences:
$$(A \\cdot B)(x) = \\sum_{n=0}^{\\infty} c_n x^n, \\text{ where } c_n = \\sum_{k=0}^{n} a_k b_{n-k}$$
This property is critical for solving combinatorial problems where choices are independent and combined.

### Differentiation and Integration
Differentiation allows for the manipulation of the index $n$:
$$A'(x) = \\sum_{n=1}^{\\infty} n a_n x^{n-1} \\implies x A'(x) = \\sum_{n=0}^{\\infty} n a_n x^n$$
This is particularly useful when the sequence $a_n$ is multiplied by a polynomial in $n$. Integration performs the inverse:
$$\\int_0^x A(t) dt = \\sum_{n=0}^{\\infty} \\frac{a_n}{n+1} x^{n+1}$$

### Shift Operators
Shifting the sequence to the right ($a_n \\to a_{n-1}$) corresponds to multiplying by $x$:
$$x A(x) = \\sum_{n=1}^{\\infty} a_{n-1} x^n$$

## Types & Variations

While the OGF is the standard tool for integer-indexed sequences, variations exist for different analytic needs:

1. **Exponential Generating Functions (EGFs):** Defined as $E(x) = \\sum_{n=0}^{\\infty} a_n \\frac{x^n}{n!}$. These are used primarily for labeled combinatorial structures, such as permutations.
2. **Dirichlet Generating Functions:** Defined as $D(s) = \\sum_{n=1}^{\\infty} \\frac{a_n}{n^s}$. These are indispensable in number theory, particularly in the study of multiplicative functions.
3. **Bivariate Generating Functions:** Defined as $F(x, y) = \\sum \\sum a_{n,k} x^n y^k$. These track two parameters simultaneously, such as the number of nodes $n$ and the number of edges $k$ in a graph.

## How to Solve

To solve a problem using OGFs, one generally follows a structured four-step process:

### 1. Set Up the Equation
Identify the recurrence relation or the combinatorial constraint. For example, if $a_n = a_{n-1} + a_{n-2}$, multiply every term by $x^n$ and sum over $n$.

### 2. Express in Terms of $A(x)$
Convert the summation expressions into the closed-form function $A(x)$. Using the recurrence example:
$$\\sum_{n=2}^{\\infty} a_n x^n = \\sum_{n=2}^{\\infty} a_{n-1} x^n + \\sum_{n=2}^{\\infty} a_{n-2} x^n$$
$$A(x) - a_1 x - a_0 = x(A(x) - a_0) + x^2 A(x)$$

### 3. Solve Algebraically
Solve the resulting equation for $A(x)$. In the Fibonacci case, this typically yields a rational function of the form $P(x)/Q(x)$.

### 4. Extract Coefficients
Use partial fraction decomposition or the generalized binomial theorem to return from the function $A(x)$ to the sequence $a_n$. The generalized binomial theorem states:
$$(1+x)^\\alpha = \\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n$$
where $\\binom{\\alpha}{n} = \\frac{\\alpha(\\alpha-1)\\dots(\\alpha-n+1)}{n!}$. This is the standard tool for extracting coefficients from rational or algebraic functions.

## Summary

Ordinary Generating Functions transform the study of sequences into the study of functions. By mapping the discrete index $n$ to the continuous variable $x$, we leverage the power of algebra and analysis to solve combinatorial counting problems and recurrence relations. The core of the technique relies on the Cauchy product for convolution and the Taylor series for coefficient extraction. Mastery of OGFs requires not just algebraic manipulation, but a deep understanding of how generating functions represent the underlying structure of the combinatorial objects being counted. Through this methodology, OGFs remain one of the most elegant and powerful tools in the mathematician's toolkit.`;export{e as default};