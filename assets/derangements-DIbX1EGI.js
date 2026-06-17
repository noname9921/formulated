var e=`# Derangements and Permutations with Forbidden Positions

## Definition

A derangement of a set is a permutation of the elements of the set such that no element appears in its original position. In formal terms, let $S = \\{1, 2, \\dots, n\\}$. A permutation $\\sigma$ of $S$ is a derangement if $\\sigma(i) \\neq i$ for all $i \\in \\{1, 2, \\dots, n\\}$. The number of such derangements is denoted by $!n$ or $D_n$.

Permutations with forbidden positions represent a broader generalization of this concept. In this scenario, we consider a set of $n$ objects and $n$ positions. Certain assignments (pairs of object $i$ to position $j$) are restricted or "forbidden." The problem asks for the number of ways to arrange the $n$ objects into the $n$ positions such that no object occupies a forbidden position. If we define a subset of positions $B \\subseteq \\{1, \\dots, n\\} \\times \\{1, \\dots, n\\}$ as the set of forbidden cells in an $n \\times n$ board, the task is to count the number of permutations $\\sigma$ such that $(i, \\sigma(i)) \\notin B$ for all $i$. Derangements are the specific case where $B = \\{(i, i) : 1 \\leq i \\leq n\\}$.

## Key Terminology

- **Subfactorial ($!n$):** The notation for the number of derangements of $n$ elements.
- **Rook Polynomial:** A polynomial $R(x, B) = \\sum_{k=0}^n r_k x^k$, where $r_k$ is the number of ways to place $k$ non-attacking rooks on the forbidden squares $B$ of an $n \\times n$ board.
- **Inclusion-Exclusion Principle (IEP):** The fundamental combinatorial tool used to count objects that satisfy none of a set of properties (the "forbidden" conditions).
- **Non-attacking Rooks:** Two rooks are non-attacking if they are not in the same row or column. Placing $k$ non-attacking rooks on forbidden squares corresponds to choosing $k$ forbidden assignments that are mutually compatible.
- **Permutation Matrix:** A binary $n \\times n$ matrix with exactly one $1$ in each row and column. A permutation with forbidden positions corresponds to a permutation matrix where no $1$ coincides with a forbidden cell.

## Purpose

The study of derangements and permutations with forbidden positions serves as a cornerstone of enumerative combinatorics. Its primary purpose is to provide systematic methods for counting arrangements under constraints. This is essential in fields such as:

1. **Cryptography:** Designing permutations that avoid specific patterns to prevent linear or differential cryptanalysis.
2. **Operations Research:** Solving assignment problems where certain personnel cannot be assigned to specific tasks due to training or logistical constraints.
3. **Statistical Design:** Constructing Latin squares or constrained grids for experimental designs where certain treatments cannot occupy specific blocks.
4. **Computer Science:** Optimizing scheduling algorithms and task allocation where resource conflicts exist.

By formalizing the constraint set as a board, we transform complex logical constraints into algebraic problems solvable via rook polynomials and the principle of inclusion-exclusion.

## Fundamental Properties

The number of derangements $D_n$ satisfies several elegant recursive and closed-form properties. The most direct approach to calculating $D_n$ is the inclusion-exclusion formula:

$$D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$$

This demonstrates that for large $n$, the ratio $D_n/n!$ approaches $1/e \\approx 0.3678$. This implies that a random permutation has approximately a $36.8\\%$ chance of being a derangement.

Another critical property is the recurrence relation:

$$D_n = (n-1)(D_{n-1} + D_{n-2})$$

With base cases $D_1 = 0$ and $D_2 = 1$. This recurrence arises because if we move element $1$ to position $j$ (where $j \\neq 1$), we have $n-1$ choices for $j$. Now, consider element $j$. If $j$ moves to position $1$, we are left with $D_{n-2}$ arrangements. If $j$ does not move to position $1$, we essentially have a derangement problem on $n-1$ elements.

When moving to general forbidden positions, the number of valid permutations $N$ is given by:

$$N = \\sum_{k=0}^n (-1)^k r_k (n-k)!$$

Where $r_k$ are the coefficients of the rook polynomial for the forbidden board $B$. This formula generalizes the $D_n$ formula, where $r_k = \\binom{n}{k}$ for the main diagonal forbidden squares.

## Types & Variations

There are several variations of forbidden position problems based on the structure of the forbidden board $B$:

| Problem Type | Forbidden Board Structure |
| :--- | :--- |
| **Standard Derangements** | Main diagonal of an $n \\times n$ board. |
| **Menage Problem** | Circular constraints (e.g., seating $n$ couples such that no spouse sits next to their own). |
| **Rectangular Boards** | $m \\times n$ boards where $m \\neq n$. |
| **Disjoint Boards** | Forbidden areas consist of isolated sub-blocks. |
| **Restricted Permutations** | Boards defined by inequality constraints, such as $\\sigma(i) < i+k$. |

The Menage problem is particularly significant, as it involves forbidden positions forming a cyclic pattern, requiring more complex rook polynomial calculations or the use of Kaplansky’s lemma.

## How to Solve

To solve a problem of permutations with forbidden positions, one follows a structured three-step analytical process:

### 1. Identifying the Forbidden Board
Represent the constraints as a set of squares $B$ on an $n \\times n$ grid. If an object $i$ cannot be in position $j$, shade square $(i, j)$.

### 2. Calculating the Rook Polynomial
Determine the coefficients $r_k$, representing the number of ways to place $k$ non-attacking rooks on the squares in $B$. If $B$ can be decomposed into disjoint sub-boards $B_1$ and $B_2$, the rook polynomial is the product of the sub-polynomials: $R(x, B) = R(x, B_1) \\cdot R(x, B_2)$.

### 3. Applying the Inclusion-Exclusion Formula
Substitute the values of $r_k$ into the general formula:

$$N = n! - r_1(n-1)! + r_2(n-2)! - \\dots + (-1)^n r_n(0)!$$

**Example: Small Derangement Calculation**
For $n=3$, the forbidden positions are $(1,1), (2,2), (3,3)$.
- $r_0 = 1$ (the empty board).
- $r_1 = 3$ (placing one rook on one of the three diagonal cells).
- $r_2 = 3$ (placing two rooks on two of the three diagonal cells).
- $r_3 = 1$ (placing three rooks on all three diagonal cells).
- $N = 3! - 3(2!) + 3(1!) - 1(0!) = 6 - 6 + 3 - 1 = 2$.
The two derangements of $\\{1, 2, 3\\}$ are $(2, 3, 1)$ and $(3, 1, 2)$.

## Summary

The theory of derangements and permutations with forbidden positions provides a robust mathematical framework for constrained combinatorial counting. Starting from the specific case of derangements—where the forbidden board is the diagonal of a square matrix—we expand into general problems solvable via rook polynomials and the Principle of Inclusion-Exclusion. By transforming logical restrictions into the geometry of non-attacking rooks, mathematicians and computer scientists can quantify the number of valid permutations in highly constrained systems. The utility of this approach lies in its scalability, allowing for the decomposition of complex constraint boards into simpler, manageable sub-problems, eventually leading to a precise count of allowed configurations in systems where traditional brute-force searching would be computationally prohibitive.`;export{e as default};