var e=`# Stirling Numbers of the First and Second Kind

## Definition

Stirling numbers represent two distinct sets of sequences, both of which play a pivotal role in combinatorics, number theory, and the analysis of algorithms. They are named after the Scottish mathematician James Stirling, who introduced them in the 18th century as part of his work on series expansion and asymptotic analysis.

The Stirling numbers of the first kind, often denoted as $s(n, k)$ or $\\left[ \\begin{smallmatrix} n \\\\ k \\end{smallmatrix} \\right]$, count the number of permutations of $n$ elements with exactly $k$ disjoint cycles. The unsigned Stirling numbers of the first kind, denoted as $\\left[ \\begin{smallmatrix} n \\\\ k \\end{smallmatrix} \\right]$, count the number of permutations of $n$ elements with exactly $k$ cycles. The signed Stirling numbers $s(n, k)$ are related to the unsigned ones by $s(n, k) = (-1)^{n-k} \\left[ \\begin{smallmatrix} n \\\\ k \\end{smallmatrix} \\right]$.

The Stirling numbers of the second kind, denoted as $S(n, k)$ or $\\left\\{ \\begin{smallmatrix} n \\\\ k \\end{smallmatrix} \\right\\}$, count the number of ways to partition a set of $n$ labeled items into exactly $k$ non-empty, unlabeled subsets. While the first kind relates to the structure of permutations, the second kind relates to the structure of partitions.

## Key Terminology

To understand these numbers, we must define the combinatorial structures they inhabit.

A permutation of a set is a bijection from the set to itself. Every permutation can be uniquely decomposed into disjoint cycles. For example, in the permutation of $\\{1, 2, 3\\}$ represented as $(1 3)(2)$, there is one cycle of length 2 and one cycle of length 1. Stirling numbers of the first kind effectively count how many such arrangements yield a specific cycle count $k$.

A partition of a set is a collection of non-empty subsets such that every element of the set is included in exactly one subset. The order of subsets does not matter. Stirling numbers of the second kind ignore the internal order within subsets and the order of the subsets themselves, focusing purely on grouping.

The falling factorial, denoted $(x)_n = x(x-1)(x-2)\\dots(x-n+1)$, is critical because Stirling numbers serve as the coefficients that allow for the change of basis between ordinary powers $x^n$ and falling or rising factorials. Similarly, the rising factorial, denoted $x^{(n)} = x(x+1)(x+2)\\dots(x+n-1)$, is used in the context of the unsigned Stirling numbers.

## Purpose

The primary utility of Stirling numbers lies in their ability to bridge the gap between different mathematical representations of polynomials and power series.

In algebra, they facilitate the transition between power bases. Specifically, $x^n = \\sum_{k=0}^n S(n, k) (x)_k$. This identity demonstrates that any monomial can be expressed as a linear combination of falling factorials using Stirling numbers of the second kind. This is immensely useful in finite calculus, where differences replace derivatives.

In combinatorics, they serve as the fundamental enumerators for arrangement problems. If one needs to distribute $n$ distinct objects into $k$ identical containers such that no container remains empty, the Stirling number of the second kind $S(n, k)$ is the direct solution. Conversely, if one is studying the cycle structure of the symmetric group $S_n$, the Stirling numbers of the first kind provide the distribution of permutations by cycle count, which is essential for determining the expected number of cycles in a random permutation.

## Fundamental Properties

Both types of Stirling numbers satisfy elegant recurrence relations that allow for their computation without needing to list all permutations or partitions.

For Stirling numbers of the second kind, the recurrence is:
$$ \\left\\{ \\begin{matrix} n \\\\ k \\end{matrix} \\right\\} = k \\left\\{ \\begin{matrix} n-1 \\\\ k \\end{matrix} \\right\\} + \\left\\{ \\begin{matrix} n-1 \\\\ k-1 \\end{matrix} \\right\\} $$
with boundary conditions $\\left\\{ \\begin{smallmatrix} 0 \\\\ 0 \\end{smallmatrix} \\right\\} = 1$ and $\\left\\{ \\begin{smallmatrix} n \\\\ 0 \\end{smallmatrix} \\right\\} = \\left\\{ \\begin{smallmatrix} 0 \\\\ n \\end{smallmatrix} \\right\\} = 0$ for $n > 0$. The logic here is that for the $n$-th element, one can either place it in a new subset (leaving $k-1$ subsets to be filled by $n-1$ elements) or add it to one of the $k$ existing subsets (which can be done in $k$ different ways).

For unsigned Stirling numbers of the first kind, the recurrence is:
$$ \\left[ \\begin{matrix} n \\\\ k \\end{matrix} \\right] = (n-1) \\left[ \\begin{matrix} n-1 \\\\ k \\end{matrix} \\right] + \\left[ \\begin{matrix} n-1 \\\\ k-1 \\end{matrix} \\right] $$
with boundary conditions $\\left[ \\begin{smallmatrix} 0 \\\\ 0 \\end{smallmatrix} \\right] = 1$ and $\\left[ \\begin{smallmatrix} n \\\\ 0 \\end{smallmatrix} \\right] = \\left[ \\begin{smallmatrix} 0 \\\\ n \\end{smallmatrix} \\right] = 0$ for $n > 0$. In this case, when adding the $n$-th element, one can either form a new cycle of length 1 (1 way) or insert the element into any of the $n-1$ existing positions within the existing cycles of the $n-1$ elements.

## Types & Variations

Stirling numbers are categorized by their index types and the properties of the objects they count.

### Unsigned vs. Signed
Unsigned Stirling numbers of the first kind are strictly positive integers counting cycle arrangements. Signed Stirling numbers account for the sign of the permutation, defined by the parity of its transpositions. The relationship $s(n, k) = (-1)^{n-k} \\left[ \\begin{smallmatrix} n \\\\ k \\end{smallmatrix} \\right]$ implies that $s(n, k)$ appears as the coefficients in the expansion of the rising factorial:
$$ x^{(n)} = \\sum_{k=0}^n \\left[ \\begin{matrix} n \\\\ k \\end{matrix} \\right] x^k $$
$$ (x)_n = \\sum_{k=0}^n s(n, k) x^k $$

### Associated Stirling Numbers
Associated Stirling numbers are variations where we restrict the size of the cycles or the size of the subsets. For example, $k$-associated Stirling numbers of the second kind count partitions where each subset must contain at least $k$ elements. These are particularly useful in restricted occupancy problems where constraints on bin capacity exist.

### Bell Numbers
The Bell number $B_n$ is the sum of Stirling numbers of the second kind:
$$ B_n = \\sum_{k=0}^n \\left\\{ \\begin{matrix} n \\\\ k \\end{matrix} \\right\\} $$
The Bell number represents the total number of ways to partition a set of $n$ elements into any number of non-empty subsets. This provides a global view of set partitioning, effectively collapsing the second-kind Stirling numbers across all possible partition counts.

## How to Solve

Solving problems involving Stirling numbers usually follows one of three paths: recursive computation, generating functions, or identity application.

### Recursive Computation (Dynamic Programming)
Given the recurrences provided earlier, building a "Stirling Triangle" (analogous to Pascal's Triangle) is the most straightforward method.

| $n \\setminus k$ | 1 | 2 | 3 |
| :--- | :--- | :--- | :--- |
| 1 | 1 | 0 | 0 |
| 2 | 1 | 1 | 0 |
| 3 | 2 | 3 | 1 |

The table above demonstrates $\\left\\{ \\begin{smallmatrix} n \\\\ k \\end{smallmatrix} \\right\\}$ values for $n$ from 1 to 3. For instance, $\\left\\{ \\begin{smallmatrix} 3 \\\\ 2 \\end{smallmatrix} \\right\\} = 3$. This corresponds to the ways to partition $\\{1, 2, 3\\}$ into 2 sets: $\\{1, 2\\}\\{3\\}$, $\\{1, 3\\}\\{2\\}$, and $\\{2, 3\\}\\{1\\}$.

### Explicit Formulas
When the recursive approach is too slow, explicit formulas can be used. For the second kind:
$$ \\left\\{ \\begin{matrix} n \\\\ k \\end{matrix} \\right\\} = \\frac{1}{k!} \\sum_{j=0}^k (-1)^{k-j} \\binom{k}{j} j^n $$
This formula uses the Principle of Inclusion-Exclusion to calculate the number of surjective functions from a set of size $n$ to a set of size $k$, then divides by $k!$ to account for the fact that the order of the target sets does not matter.

### Generating Functions
The exponential generating function for Stirling numbers of the second kind is:
$$ \\sum_{n=k}^\\infty \\left\\{ \\begin{matrix} n \\\\ k \\end{matrix} \\right\\} \\frac{x^n}{n!} = \\frac{(e^x - 1)^k}{k!} $$
This powerful tool allows for the derivation of values using Taylor series expansion, which is beneficial when $n$ is large or when solving complex combinatorial identities that require algebraic manipulation of generating functions.

## Summary

Stirling numbers of the first and second kind provide the mathematical infrastructure for understanding permutations and partitions. By categorizing the arrangement of elements into cycles (first kind) or subsets (second kind), they offer a structured way to quantify complexity in discrete systems.

The Stirling numbers of the first kind are intimately linked to the cycle structure of the symmetric group and the coefficients of rising and falling factorials. Their recurrence relations and generating functions allow for efficient calculation and theoretical analysis.

The Stirling numbers of the second kind provide the foundation for counting set partitions, which underpins the logic of assigning labeled items to unlabeled bins. Their relationship with Bell numbers and their role in the expansion of power functions make them indispensable in both pure and applied combinatorics.

In practice, whether one is performing statistical analysis on random permutations, optimizing partition algorithms in computer science, or simplifying complex polynomial expressions in finite calculus, Stirling numbers remain a cornerstone of combinatorial mathematics. Their dual nature—one focusing on ordering and structure (first kind), the other on grouping and membership (second kind)—ensures they remain relevant across a diverse array of technical disciplines.`;export{e as default};