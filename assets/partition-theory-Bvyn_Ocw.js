var e=`# Partitions of an Integer

## Definition

In number theory, a partition of a positive integer $n$ is a way of writing $n$ as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If the order of the summands were to matter, the resulting objects would be known as compositions, but in the context of partitions, the sequence is conventionally written in non-increasing order, such as $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_k > 0$, where $\\sum_{i=1}^k \\lambda_i = n$.

The number of such partitions of $n$ is denoted by the partition function $p(n)$. For example, consider $n=4$. The partitions are:
1. $4$
2. $3+1$
3. $2+2$
4. $2+1+1$
5. $1+1+1+1$

Thus, $p(4)=5$. This function grows extremely rapidly as $n$ increases, following the asymptotic behavior derived by Hardy and Ramanujan, which states that $p(n) \\sim \\frac{1}{4n\\sqrt{3}}\\exp\\left(\\pi\\sqrt{\\frac{2n}{3}}\\right)$ as $n \\to \\infty$.

## Key Terminology

To analyze partitions rigorously, several specialized terms are utilized:

- **Summands (or Parts):** The individual integers $\\lambda_i$ that sum to $n$.
- **Ferrers Diagram:** A visual representation of a partition using rows of dots or squares. For a partition $( \\lambda_1, \\lambda_2, \\dots, \\lambda_k )$, the diagram has $\\lambda_i$ dots in the $i$-th row.
- **Conjugate Partition:** The partition obtained by reflecting the Ferrers diagram across its main diagonal, effectively swapping rows and columns.
- **Self-Conjugate Partition:** A partition that is its own conjugate. The number of self-conjugate partitions of $n$ equals the number of partitions of $n$ into distinct odd parts.
- **Restricted Partition:** A partition where the parts are chosen from a specific subset of integers, such as only odd numbers or only distinct numbers.
- **Generating Function:** A power series whose coefficients are the values of the sequence of interest. For partitions, this is given by $P(x) = \\prod_{k=1}^\\infty \\frac{1}{1-x^k}$.

## Purpose

The study of integer partitions serves as a bridge between elementary arithmetic and complex analysis. Beyond pure mathematics, partitions provide essential insights into combinatorics, statistical mechanics, and group theory.

In statistical mechanics, partitions represent the microstates of a system of non-interacting bosons (Bose-Einstein statistics). In computational complexity, the partition problem—deciding whether a given multiset can be partitioned into two subsets with equal sums—is a classical NP-complete problem. Furthermore, Ramanujan's discovery of the partition congruences, such as $p(5n+4) \\equiv 0 \\pmod 5$, revolutionized modular forms and the development of the circle method in analytic number theory. Understanding partitions allows mathematicians to explore symmetry, distribution, and the structure of additive number theory.

## Fundamental Properties

Partitions possess elegant structural properties that allow us to transform complex counting problems into simpler ones.

### The Conjugation Involutions
Every Ferrers diagram defines a unique conjugate. This shows a fundamental bijection between the set of partitions of $n$ with at most $k$ parts and the set of partitions of $n$ with parts no larger than $k$.

### Euler's Identity
A celebrated identity by Euler states that the number of partitions of $n$ into distinct parts is equal to the number of partitions of $n$ into odd parts. This is proved by observing the generating functions:
$$ \\prod_{k=1}^\\infty (1+x^k) = \\prod_{k=1}^\\infty \\frac{1-x^{2k}}{1-x^k} = \\prod_{k=1}^\\infty \\frac{1}{1-x^{2k-1}} $$
The left side represents partitions into distinct parts, while the right side represents partitions into odd parts.

### Pentagonal Number Theorem
Euler also derived a recursive formula for $p(n)$ using the generating function of the inverse:
$$ \\prod_{k=1}^\\infty (1-x^k) = \\sum_{m=-\\infty}^\\infty (-1)^m x^{m(3m-1)/2} $$
This yields the recurrence relation:
$$ p(n) = \\sum_{m \\neq 0} (-1)^{m-1} p\\left(n - \\frac{m(3m-1)}{2}\\right) $$
where the sum is taken over all non-zero integers $m$ such that $m(3m-1)/2 \\le n$.

## Types & Variations

There are many variations of partitions, each introducing constraints on the summands:

| Partition Type | Constraint Description | Generating Function |
| :--- | :--- | :--- |
| Unrestricted | No constraints on parts | $\\prod_{k=1}^\\infty (1-x^k)^{-1}$ |
| Distinct Parts | Each part appears at most once | $\\prod_{k=1}^\\infty (1+x^k)$ |
| Odd Parts | All parts must be odd | $\\prod_{k=1}^\\infty (1-x^{2k-1})^{-1}$ |
| Parts in $S$ | Parts must belong to set $S$ | $\\prod_{s \\in S} (1-x^s)^{-1}$ |
| At most $k$ parts | Largest part is at most $k$ | $\\prod_{j=1}^k (1-x^j)^{-1}$ |

Each variation alters the growth rate of the counting function and requires different analytical techniques to evaluate. For instance, partitions into distinct parts grow much more slowly than unrestricted partitions, as the set of available summands is effectively thinned.

## How to Solve

Solving for $p(n)$ can be approached via three primary methods: manual enumeration, recursive computation, and analytic approximation.

### 1. Manual Enumeration
For small $n$, one can use the "greedy" method of writing partitions in descending order. Start with $(n)$ and decrement the largest possible part while incrementing smaller ones, maintaining the lexicographical order.

### 2. Dynamic Programming (Recursive)
For computational efficiency, the recurrence relation derived from the Pentagonal Number Theorem is the standard approach. By storing previously computed values of $p(n)$ in an array, one avoids the exponential complexity of a naive search. The algorithm complexity is roughly $O(n\\sqrt{n})$ because there are only $\\sqrt{n}$ pentagonal numbers to check for each $n$.

### 3. Asymptotic Calculation
The Hardy-Ramanujan-Rademacher formula provides an exact convergent series for $p(n)$. While computationally intensive, it allows us to calculate $p(n)$ for very large $n$ without computing all intermediate values. It relies on the properties of the Dedekind eta function and the modular group $SL(2, \\mathbb{Z})$.

Consider the growth of the count: The following table illustrates the first few values of $p(n)$.

| $n$ | $p(n)$ |
| :--- | :--- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 5 |
| 5 | 7 |
| 6 | 11 |
| 7 | 15 |
| 8 | 22 |
| 9 | 30 |
| 10 | 42 |

## Summary

The theory of partitions of an integer is a cornerstone of combinatorics that provides a profound look into the additive structure of natural numbers. By moving from simple enumeration to the power of generating functions and complex analytic methods, we can quantify growth patterns that are not immediately obvious. Key takeaways include the realization that constraints on parts (like requiring them to be odd or distinct) often lead to surprising identities, such as Euler's equality. The recursive nature of partitions, underpinned by the Pentagonal Number Theorem, ensures that even as the number of ways to partition an integer explodes, we possess the tools to calculate these values efficiently. Whether through the visual elegance of Ferrers diagrams or the deep modular forms used by Ramanujan, the study of integer partitions remains an essential field for both theoretical exploration and practical computational application.`;export{e as default};