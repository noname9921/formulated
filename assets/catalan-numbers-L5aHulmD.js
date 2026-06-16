var e=`# Catalan Numbers and Dyck Paths

The Catalan numbers are a sequence of natural numbers that occur in various counting problems, often involving recursively defined objects. They are named after the Belgian mathematician Eugène Charles Catalan, who discovered them while studying the triangulation of polygons. These numbers are fundamentally linked to the geometry of paths on a two-dimensional integer lattice, specifically those known as Dyck paths.

## Definition

The $n$-th Catalan number, denoted as $C_n$, is defined for $n \\ge 0$ by the formula involving binomial coefficients:

$$C_n=\\frac{1}{n+1}\\binom{2n}{n}=\\frac{(2n)!}{(n+1)!n!}$$

Alternatively, they can be defined by the recurrence relation:

$$C_0=1, \\quad C_{n+1}=\\sum_{i=0}^{n}C_iC_{n-i} \\quad \\text{for } n \\ge 0$$

A Dyck path of length $2n$ is a path in the Cartesian plane from $(0,0)$ to $(2n,0)$ consisting of $n$ steps of the form $(1,1)$ (up-steps) and $n$ steps of the form $(1,-1)$ (down-steps), such that the path never falls below the $x$-axis. The number of such paths of length $2n$ is precisely $C_n$.

## Key Terminology

To analyze these combinatorial structures, we define the following terms:

- **Up-step:** A step vector $U=(1,1)$.
- **Down-step:** A step vector $D=(1,-1)$.
- **Dyck Path:** A sequence of $n$ up-steps and $n$ down-steps starting at $(0,0)$, ending at $(2n,0)$, satisfying $y \\ge 0$ at all times.
- **Lattice Path:** A path consisting of unit steps on the integer grid.
- **Reflection Principle:** A technique used to count paths that violate a boundary condition by reflecting the path across the line of the violation.
- **Generating Function:** A formal power series whose coefficients are the terms of the sequence, used to solve recurrence relations.

## Purpose

The study of Catalan numbers and Dyck paths serves several crucial roles in mathematics and computer science. First, they provide a canonical example of combinatorial enumeration where diverse problems—ranging from polygon triangulation to balanced parentheses—map onto the same underlying structure.

Second, they are essential in algorithm analysis. Many structures, such as Binary Search Trees, stack-sortable permutations, and expression trees, are counted by Catalan numbers. Understanding these paths allows researchers to calculate the state space of such data structures, which is vital for determining the complexity of operations and the efficiency of memory allocation. Finally, they provide a bridge between discrete counting and analytical methods, as the generating function for Catalan numbers leads directly into complex analysis and functional equations.

## Fundamental Properties

The Catalan sequence begins: $1, 1, 2, 5, 14, 42, 132, 429, 1430, \\dots$ for $n=0, 1, 2, 3, 4, 5, 6, 7, 8$.

### Growth Rate
Using Stirling's approximation, $n! \\approx \\sqrt{2\\pi n}(\\frac{n}{e})^n$, we can derive the asymptotic behavior of $C_n$:

$$C_n \\approx \\frac{4^n}{n^{3/2}\\sqrt{\\pi}}$$

This shows that the Catalan numbers grow exponentially, scaled by a power-law factor, which is characteristic of many branching processes in combinatorics.

### The Generating Function
The generating function $C(x) = \\sum_{n=0}^{\\infty}C_n x^n$ satisfies the functional equation $C(x) = 1 + xC(x)^2$. Solving this quadratic equation for $C(x)$ yields:

$$C(x)=\\frac{1-\\sqrt{1-4x}}{2x}$$

The expansion of this function via the generalized binomial theorem confirms the closed-form expression for $C_n$.

## Types & Variations

There are several generalized versions and related structures involving paths:

1. **Generalized Dyck Paths:** Paths that stay above the line $y=k$ instead of $y=0$.
2. **$k$-ary Trees:** Objects counted by the Fuss-Catalan numbers, $C_n^{(k)} = \\frac{1}{kn+1}\\binom{(k+1)n}{n}$. This represents the number of ways to divide a convex polygon of $kn+2$ sides into $n$ smaller polygons by adding non-intersecting diagonals.
3. **Motzkin Paths:** Paths from $(0,0)$ to $(n,0)$ consisting of steps $(1,1), (1,-1)$, and $(1,0)$, staying above $y=0$. These follow the Motzkin numbers $M_n$, which are related to, but distinct from, Catalan numbers.
4. **Schröder Paths:** Similar to Dyck paths but including double steps $(2,0)$. These are counted by the Large Schröder numbers.

## How to Solve

The most rigorous way to derive the number of Dyck paths is via the Reflection Principle, attributed to André.

### Step-by-Step Derivation
1. **Total Paths:** Without the restriction that the path stays above the $x$-axis, a path of $n$ up-steps and $n$ down-steps is simply a selection of $n$ positions for up-steps out of $2n$ total steps. This is $\\binom{2n}{n}$.
2. **Identifying Bad Paths:** A "bad" path is one that touches $y=-1$. Let $P$ be such a path. Let $k$ be the first index where the path touches $y=-1$.
3. **The Reflection:** Reflect the portion of the path from $(0,0)$ to index $k$ across the line $y=-1$. The new starting point becomes $(0,-2)$.
4. **Bijection:** The reflected path now goes from $(0,-2)$ to $(2n,0)$. The number of steps is still $2n$, but since we reflected a segment that started with $n$ up-steps and $n$ down-steps, the number of up-steps is now $n-1$ and down-steps is $n+1$.
5. **Counting Bad Paths:** The number of such paths is equivalent to choosing $n-1$ positions out of $2n$, which is $\\binom{2n}{n-1}$.
6. **Subtraction:** Subtract the bad paths from total paths:
   $$C_n = \\binom{2n}{n} - \\binom{2n}{n-1} = \\binom{2n}{n} - \\frac{n}{n+1}\\binom{2n}{n} = \\frac{1}{n+1}\\binom{2n}{n}$$

This constructive proof demonstrates that every bad path corresponds exactly to a path ending at $(2n,-2)$, establishing the identity through a visual geometric transformation.

## Summary

Catalan numbers represent a profound intersection of combinatorics, geometry, and analysis. Starting from the simple constraints of Dyck paths—which are foundational in path-counting problems—we reach a robust sequence that permeates computer science and discrete mathematics. By utilizing tools like the reflection principle, recursive definitions, and generating functions, we can classify a wide array of objects under the umbrella of Catalan structures. The reliance on the binomial coefficient $\\binom{2n}{n}$ ensures that these numbers remain computationally accessible while providing deep insights into the growth of branching structures and recursive systems.`;export{e as default};