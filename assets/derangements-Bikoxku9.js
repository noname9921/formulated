var e=`# Derangements and Permutations with Forbidden Positions

## Definition

A derangement is a permutation of the elements of a set such that no element appears in its original position. Formally, given a set $S=\\{1, 2, \\dots, n\\}$, a derangement is a permutation $\\sigma$ of $S$ such that $\\sigma(i) \\neq i$ for all $i \\in \\{1, 2, \\dots, n\\}$. The number of derangements of $n$ elements is commonly denoted by $D_n$ or $!n$.

Permutations with forbidden positions represent a generalization of the concept of derangements. In this broader context, we are given a set of $n$ objects and $n$ positions, along with a set of constraints that define which objects are forbidden from occupying specific positions. Let $X = \\{1, 2, \\dots, n\\}$ be the set of positions and $Y = \\{1, 2, \\dots, n\\}$ be the set of objects. A permutation is a bijection $f: X \\to Y$. The set of forbidden positions is a subset $S \\subseteq X \\times Y$. We seek the number of permutations $f$ such that for every $(i, j) \\in S$, we have $f(i) \\neq j$. The problem of derangements is the specific case where $S = \\{(i, i) : 1 \\leq i \\leq n\\}$, often visualized as the main diagonal of an $n \\times n$ board.

## Key Terminology

1. **Permutation:** A rearrangement of the elements of an ordered list into a one-to-one correspondence with the set itself.
2. **Fixed Point:** An element $i$ such that $\\sigma(i) = i$ under a permutation $\\sigma$. Derangements are permutations with zero fixed points.
3. **Rook Polynomial:** A polynomial $R(x) = \\sum_{k=0}^n r_k x^k$, where $r_k$ is the number of ways to place $k$ non-attacking rooks on the forbidden squares of an $n \\times n$ board.
4. **Inclusion-Exclusion Principle:** A counting technique used to calculate the size of the union of multiple sets by alternating the inclusion and exclusion of the sizes of their intersections.
5. **Non-Attacking Rooks:** A placement of pieces on a board such that no two pieces occupy the same row or column.
6. **Forbidden Square:** A cell $(i, j)$ in a grid representing a constraint where placing object $j$ in position $i$ is prohibited.

## Purpose

The study of derangements and permutations with forbidden positions is central to enumerative combinatorics. Its primary purpose is to solve complex counting problems where constraints exist on the assignment of items. Historically, the problem originated from the "Rencontre" problem (or the problem of matches), first posed by Pierre Raymond de Montmort in 1713. 

Beyond theoretical interest, these problems are vital in:
- **Design Theory:** Creating experimental designs where factors cannot overlap.
- **Computer Science:** Optimizing scheduling algorithms and hashing techniques to avoid collisions.
- **Cryptography:** Analyzing the security of ciphers that rely on permutations and ensuring that certain substitutions are avoided to prevent predictable patterns.
- **Probability:** Determining the probability that a random permutation results in no fixed points, which converges to $1/e$ as $n \\to \\infty$.

## Fundamental Properties

The number of derangements $D_n$ satisfies several critical properties. The most direct approach to its calculation is the recurrence relation:
$D_n = (n-1)(D_{n-1} + D_{n-2})$
with initial conditions $D_1 = 0$ and $D_2 = 1$. This relation arises because if we place object $1$ in position $i$ (where $i \\neq 1$), there are $n-1$ choices for $i$. Then, we consider whether object $i$ goes into position $1$ (yielding $D_{n-2}$ ways) or not (yielding $D_{n-1}$ ways).

Another fundamental property is the explicit formula derived via the Principle of Inclusion-Exclusion:
$D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!} = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right)$

For permutations with forbidden positions defined by a subset of squares $S$ on an $n \\times n$ board, the number of valid permutations $P(S)$ is given by:
$P(S) = \\sum_{k=0}^n (-1)^k r_k (n-k)!$
where $r_k$ are the coefficients of the rook polynomial. This formula links the topological structure of the forbidden board (the arrangement of forbidden squares) to the resulting count of permutations.

## Types & Variations

1. **Standard Derangements:** The classic $S = \\{(i, i) : 1 \\leq i \\leq n\\}$ case.
2. **Menage Problem:** Counting the number of ways to seat $n$ couples at a round table such that no person sits next to their spouse. This involves forbidden positions that form a cycle rather than a main diagonal.
3. **Restricted Positions:** Problems where forbidden squares form specific patterns like Ferrers boards, rectangles, or disconnected sub-boards.
4. **Partial Derangements:** Permutations with exactly $k$ fixed points, calculated as $D_{n,k} = \\binom{n}{k} D_{n-k}$.

The following table summarizes the growth of $D_n$ compared to total permutations $n!$:

| $n$ | Total Permutations ($n!$) | Derangements ($D_n$) | Ratio ($D_n / n!$) |
|:---|:---|:---|:---|
| 1 | 1 | 0 | 0.0000 |
| 2 | 2 | 1 | 0.5000 |
| 3 | 6 | 2 | 0.3333 |
| 4 | 24 | 9 | 0.3750 |
| 5 | 120 | 44 | 0.3666 |
| 6 | 720 | 265 | 0.3680 |

## How to Solve

To solve a problem involving forbidden positions, follow this analytical framework:

**1. Identify the Forbidden Set:**
Represent the constraints as a board of size $n \\times n$. Mark the forbidden cells $(i, j)$ where object $j$ cannot occupy position $i$.

**2. Determine the Rook Polynomial:**
The rook polynomial $R(x, S)$ encapsulates all information about the forbidden configuration. It is defined as:
$R(x, S) = r_0 + r_1 x + r_2 x^2 + \\dots + r_n x^n$
For many problems, the board can be decomposed into disjoint sub-boards. If a board $S$ consists of two disjoint boards $B_1$ and $B_2$, then $R(x, S) = R(x, B_1) \\times R(x, B_2)$.

**3. Applying the Inclusion-Exclusion Formula:**
Once the coefficients $r_k$ are found, substitute them into the formula:
$N = \\sum_{k=0}^n (-1)^k r_k (n-k)!$
This calculates the number of ways to place $n$ non-attacking rooks on the *entire* $n \\times n$ board such that none of them land on a forbidden square.

**4. Advanced Techniques (Generating Functions):**
For very large or recursive constraints, one may use exponential generating functions. The number of derangements is the coefficient of $x^n/n!$ in the expansion of $e^{-x}/(1-x)$. This allows for derivation of limits and asymptotic behavior, particularly the observation that $\\lim_{n \\to \\infty} \\frac{D_n}{n!} = e^{-1} \\approx 0.3678$.

## Summary

Derangements and permutations with forbidden positions form a cornerstone of enumerative combinatorics, bridging simple counting tasks with complex configuration constraints. The transition from simple derangements to generalized forbidden position problems allows mathematicians to tackle real-world logistics and design challenges using the powerful Rook Polynomial framework. By utilizing the Principle of Inclusion-Exclusion and the structural properties of boards, we can effectively navigate constraints that would otherwise be computationally intractable. The rapid convergence of the derangement ratio to $1/e$ provides a fascinating look into the probabilistic nature of random permutations, proving that even with restrictive rules, a surprising level of consistency emerges in the limit. Mastery of these methods requires both a grasp of formal summation and an ability to visualize constraints as board configurations.`;export{e as default};