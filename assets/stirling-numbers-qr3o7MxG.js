var e=`# Stirling Numbers of the First and Second Kind

## Definition

Stirling numbers represent two distinct sets of integers that appear frequently in combinatorial mathematics, specifically in the study of partitions and permutations. They are named after the Scottish mathematician James Stirling, who introduced them in the 18th century.

Stirling numbers of the first kind, often denoted as $\\left[n \\atop k\\right]$ or $s(n,k)$, count the number of permutations of $n$ elements with exactly $k$ disjoint cycles. These are sometimes called "unsigned" Stirling numbers when referring to the absolute value of the coefficients of the rising factorial, or "signed" Stirling numbers when referring to the coefficients of the falling factorial.

Stirling numbers of the second kind, denoted as $\\left\\{n \\atop k\\right\\}$ or $S(n,k)$, count the number of ways to partition a set of $n$ elements into exactly $k$ non-empty, unlabeled subsets. While the order of elements within the subsets does not matter, the subsets themselves are indistinguishable in their definition, making this a fundamental tool in set theory and distribution problems.

## Key Terminology

To navigate the study of Stirling numbers, one must be familiar with several core combinatorial concepts:

1. **Permutations:** An arrangement of $n$ distinct objects. The structure of a permutation can be decomposed into disjoint cycles, which is the combinatorial basis for the first kind.
2. **Partitions:** A way of dividing a set into smaller, non-empty subsets such that every element belongs to exactly one subset. The Stirling number of the second kind counts these partitions where the number of subsets is fixed at $k$.
3. **Falling Factorial:** Defined as $(x)_n = x(x-1)(x-2)\\cdots(x-n+1)$. The signed Stirling numbers of the first kind are the coefficients that express the falling factorial as a polynomial in $x$.
4. **Rising Factorial:** Defined as $x^{(n)} = x(x+1)(x+2)\\cdots(x+n-1)$. The unsigned Stirling numbers of the first kind are the coefficients that express the rising factorial as a polynomial in $x$.
5. **Bell Numbers:** The sum of Stirling numbers of the second kind over all possible values of $k$, defined as $B_n = \\sum_{k=0}^n \\left\\{n \\atop k\\right\\}$. These represent the total number of ways to partition a set of $n$ elements into any number of non-empty subsets.

## Purpose

The primary utility of Stirling numbers lies in their ability to bridge the gap between different mathematical bases. In algebra, the power basis $\\{1, x, x^2, \\dots, x^n\\}$ and the factorial basis $\\{(x)_0, (x)_1, (x)_2, \\dots, (x)_n\\}$ are both essential for polynomial interpolation and operator theory. Stirling numbers serve as the transformation matrix between these bases.

In computer science and discrete mathematics, Stirling numbers are indispensable for:
- **Analysis of Algorithms:** Specifically in calculating the average-case complexity of algorithms like Quicksort or in analyzing the cycle structure of random permutations.
- **Probability Theory:** They appear in the study of distributions where we allocate $n$ labeled items into $k$ unlabeled bins.
- **Combinatorial Identities:** They allow for the simplification of complex summations that involve binomial coefficients and exponents, providing a systematic way to handle partitions and arrangements.

## Fundamental Properties

Stirling numbers satisfy powerful recurrence relations that allow for their computation without direct counting.

For Stirling numbers of the second kind, the recurrence relation is:
$$\\left\\{n \\atop k\\right\\} = k \\cdot \\left\\{n-1 \\atop k\\right\\} + \\left\\{n-1 \\atop k-1\\right\\}$$
This can be interpreted logically: consider the $n$-th element. Either it is in a subset by itself (in $\\left\\{n-1 \\atop k-1\\right\\}$ ways), or it is added to one of the $k$ existing subsets formed by the previous $n-1$ elements (in $k \\cdot \\left\\{n-1 \\atop k\\right\\}$ ways).

For Stirling numbers of the first kind, the recurrence relation is:
$$\\left[n \\atop k\\right] = (n-1) \\cdot \\left[n-1 \\atop k\\right] + \\left[n-1 \\atop k-1\\right]$$
This arises because when adding the $n$-th element, one can either create a new cycle of size 1 (in $\\left[n-1 \\atop k-1\\right]$ ways) or insert the $n$-th element into any of the existing $(n-1)$ positions within the existing cycles of the $(n-1)$ elements.

The relationship between these numbers and powers is given by:
$$x^n = \\sum_{k=0}^n \\left\\{n \\atop k\\right\\} (x)_k$$
This formula demonstrates how Stirling numbers of the second kind allow us to convert an arbitrary power into a sum of falling factorials, which are often easier to manipulate in finite calculus.

## Types & Variations

| Property | Stirling First Kind $\\left[n \\atop k\\right]$ | Stirling Second Kind $\\left\\{n \\atop k\\right\\}$ |
| :--- | :--- | :--- |
| **Interpretation** | Permutations of $n$ with $k$ cycles | Partitions of $n$ into $k$ subsets |
| **Basis Transformation** | $x^{(n)} = \\sum \\left[n \\atop k\\right] x^k$ | $x^n = \\sum \\left\\{n \\atop k\\right\\} (x)_k$ |
| **Recurrence** | $[n, k] = (n-1)[n-1, k] + [n-1, k-1]$ | $\\{n, k\\} = k\\{n-1, k\\} + \\{n-1, k-1\\}$ |
| **Initial Case** | $[0, 0] = 1$ | $\\{0, 0\\} = 1$ |
| **Boundaries** | $[n, 0] = 0$ for $n>0$ | $\\{n, 0\\} = 0$ for $n>0$ |

Beyond these, there exist "Associated" Stirling numbers and "R-Stirling" numbers, which introduce constraints such as the minimum size of cycles or subsets. For instance, Associated Stirling numbers of the second kind $S_2(n,k)$ count partitions where each subset must contain at least two elements.

## How to Solve

Calculating Stirling numbers is best approached through dynamic programming, leveraging the recurrence relations provided in the previous section. For a fixed $n$ and $k$, one can build a table (a "Stirling triangle") similar to Pascal's triangle.

**Step-by-step approach for computing $\\left\\{4 \\atop 2\\right\\}$:**
1. Base cases: $\\left\\{n \\atop 1\\right\\} = 1$, $\\left\\{n \\atop n\\right\\} = 1$.
2. Compute $\\left\\{2 \\atop 1\\right\\} = 1, \\left\\{2 \\atop 2\\right\\} = 1$.
3. Compute row 3:
   - $\\left\\{3 \\atop 2\\right\\} = 2 \\cdot \\left\\{2 \\atop 2\\right\\} + \\left\\{2 \\atop 1\\right\\} = 2(1) + 1 = 3$.
4. Compute row 4:
   - $\\left\\{4 \\atop 2\\right\\} = 2 \\cdot \\left\\{3 \\atop 2\\right\\} + \\left\\{3 \\atop 1\\right\\} = 2(3) + 1 = 7$.

This algorithmic framework ensures that calculations are performed in $O(nk)$ time complexity, which is highly efficient for computational applications.

When solving combinatorial problems analytically, identify whether the items being distributed are labeled or unlabeled. If you are placing labeled balls into unlabeled boxes, the answer involves Stirling numbers of the second kind. If you are arranging labeled items in a way that respects circular symmetry, the answer involves Stirling numbers of the first kind.

## Summary

Stirling numbers of the first and second kind provide a rigorous mathematical language for describing the ways in which objects can be arranged into cycles or partitioned into groups. Their definitions rely on the fundamental properties of factorials and powers, acting as the coefficients for basis transformations in algebraic systems.

The Stirling number of the first kind $\\left[n \\atop k\\right]$ is intrinsically linked to the permutation group structure, specifically the cycle decomposition of $S_n$. Conversely, the Stirling number of the second kind $\\left\\{n \\atop k\\right\\}$ is the cornerstone of set partition theory. Both families of numbers satisfy elegant recursive identities that allow for efficient computation and provide deep insight into the structure of combinatorial sets. By mastering these values, one gains the ability to solve complex problems in enumeration, algorithm analysis, and polynomial algebra, forming a necessary part of the toolkit for any mathematician or computer scientist working in discrete fields. Through their dual nature—linking cyclic arrangements and set partitions to the powers of $x$—Stirling numbers remain a primary bridge between pure combinatorics and functional analysis.`;export{e as default};