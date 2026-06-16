var e=`# Pólya Enumeration Theorem

The Pólya Enumeration Theorem (PET) stands as a cornerstone of algebraic combinatorics, providing a powerful methodology for counting distinct objects under the action of a symmetry group. Named after the Hungarian mathematician George Pólya, who published his landmark paper on the subject in 1937, the theorem effectively bridges the gap between group theory and generating functions. By transforming problems of "counting by coloring" into problems of polynomial evaluation, PET bypasses the arduous task of manual configuration enumeration.

## Definition

The Pólya Enumeration Theorem states that if $X$ is a finite set of elements being colored by a set of $m$ colors, and $G$ is a group of permutations acting on $X$, the number of distinct colorings (under the equivalence relation defined by $G$) is given by evaluating the cycle index polynomial of $G$ with all variables set to $m$.

More formally, let $P_G(x_1, x_2, \\dots, x_n)$ be the cycle index of the permutation group $G$ acting on a set $X$ of size $n$. The cycle index is defined as:

$$P_G(x_1, x_2, \\dots, x_n) = \\frac{1}{|G|}\\sum_{g \\in G} x_1^{c_1(g)}x_2^{c_2(g)}\\dots x_n^{c_n(g)}$$

where $c_k(g)$ is the number of cycles of length $k$ in the disjoint cycle decomposition of the permutation $g$. The number of non-equivalent colorings using $m$ available colors is given by:

$$N = P_G(m, m, \\dots, m)$$

When we wish to account for specific color counts (e.g., using $n_1$ of color A and $n_2$ of color B), we use the pattern inventory, which involves substituting the variables $x_k$ with sums of powers of the color weights.

## Key Terminology

To utilize PET effectively, one must grasp several fundamental concepts from group theory and combinatorics:

1. **Group Action:** A formal way of defining how the elements of a symmetry group $G$ rearrange the elements of a set $X$.
2. **Orbit:** The set of elements in $X$ that an element $x \\in X$ can be moved to under the action of $G$. In colorings, an orbit represents a set of configurations that are considered "the same" due to symmetry.
3. **Cycle Index:** A polynomial representation of a group's action that encodes the cycle structures of all permutations within the group.
4. **Burnside's Lemma:** A precursor to PET that counts the number of orbits of a group action, stating that the number of orbits is the average number of fixed points: $N = \\frac{1}{|G|}\\sum_{g \\in G} |X^g|$. PET serves as the "weighted" generalization of this result.
5. **Coloring:** A function $f: X \\rightarrow C$, where $C$ is a set of colors. Two colorings are equivalent if one can be transformed into the other by an element of the symmetry group.

## Purpose

The primary purpose of PET is to solve combinatorial problems that involve counting configurations under symmetry. Without PET, counting distinct necklaces, chemical isomers, or vertex-labeled polyhedra requires brute-force case analysis, which is prone to error. 

PET is particularly indispensable in:
- **Chemistry:** Counting isomers of chemical compounds, such as substituted benzenes or alkanes, where spatial symmetry makes certain arrangements identical.
- **Computer Science:** Determining the number of distinct circuits in logic design or generating non-isomorphic graphs.
- **Combinatorial Design:** Analyzing circular arrangements (necklaces) where rotations and reflections produce the same pattern.
- **Physics:** Statistical mechanics models requiring the enumeration of microstates.

## Fundamental Properties

The power of PET lies in its ability to handle constraints through generating functions. The Cycle Index is a robust algebraic tool because of the following properties:

1. **Invariance:** The cycle index is an intrinsic property of the group action on the set, independent of the number of colors.
2. **Substitution Property:** One can replace each variable $x_k$ in the cycle index with a power series $f(x^k) = \\sum_{i=1}^m w_i^{k}$, where $w_i$ are weights associated with colors. This allows for the calculation of the "pattern inventory," which counts not just the total number of colorings, but the exact frequency of each color usage.
3. **Linearity:** The operations remain linear, meaning complex symmetry groups can be decomposed into simpler subgroups (e.g., direct products) to simplify the construction of the cycle index.

## Types & Variations

There are several ways to apply and categorize the enumeration of structures:

| Variation | Description | Application |
| :--- | :--- | :--- |
| **Unrestricted Coloring** | All configurations allowed; use $x_k = m$. | Counting necklaces with $m$ colors. |
| **Restricted Coloring** | Specific counts of colors required (e.g., 2 red, 3 blue). | Counting chemical isomers with fixed formula. |
| **Fixed Point Enumeration** | Counting arrangements that remain unchanged under specific rotations. | Crystallography. |
| **Weighted Enumeration** | Assigning algebraic weights to colors to distinguish properties. | Statistical mechanics. |

While the standard PET assumes a set of objects being colored, variations include the **Pólya-Read Theorem** for graphs and generalizations for structures where the symmetry group acts on both the vertices and the edges simultaneously.

## How to Solve

To apply PET to a specific problem, follow this rigorous step-by-step framework:

### Step 1: Identify the Symmetry Group
Determine the set of permutations $G$ that map the object to itself while preserving its structure (e.g., rotations and reflections for a square).

### Step 2: Determine the Cycle Structure
For every $g \\in G$, write $g$ in disjoint cycle notation. Count how many cycles of each length $k$ exist. For example, a rotation of a square by 90 degrees consists of one cycle of length 4.

### Step 3: Construct the Cycle Index
Sum these cycle representations and divide by the total number of group elements.
$$P_G(x_1, \\dots, x_n) = \\frac{1}{|G|} \\sum_{g \\in G} \\prod_{k=1}^n x_k^{c_k(g)}$$

### Step 4: Apply the Substitution
If you want the total number of distinct colorings with $m$ colors, evaluate $P_G(m, m, \\dots, m)$. If you want a pattern inventory, replace each $x_k$ with $(a^k + b^k + \\dots + c^k)$, where $a, b, \\dots, c$ are the available colors.

### Step 5: Expand and Simplify
Expand the resulting polynomial. The coefficient of a specific term (e.g., $a^i b^j$) represents the number of ways to color the structure using exactly $i$ of color $a$ and $j$ of color $b$.

### Illustrative Example: The Necklace Problem
Consider a necklace with 3 beads, where each bead can be one of 2 colors (Red or Blue). The group $G$ consists of rotations ($0^\\circ, 120^\\circ, 240^\\circ$) and reflections. Assuming only rotations:
1. Identity: (1)(2)(3) $\\implies x_1^3$
2. 120-degree: (1 2 3) $\\implies x_3^1$
3. 240-degree: (1 3 2) $\\implies x_3^1$

Cycle Index: $P_G = \\frac{1}{3}(x_1^3 + 2x_3^1)$.
To count colorings with 2 colors ($m=2$):
$N = \\frac{1}{3}(2^3 + 2(2^1)) = \\frac{1}{3}(8+4) = 4$.
The distinct necklaces are: RRR, BBB, RRB, RBB.

## Summary

The Pólya Enumeration Theorem provides an elegant, structured approach to a class of combinatorial problems that would otherwise be computationally intractable. By mapping the symmetry of an object to a formal cycle index polynomial, PET transforms the geometric or structural complexity into algebraic evaluation. Whether determining the number of chemical isomers or calculating the variety of patterns in a cyclic system, PET stands as the definitive framework for symmetry-aware enumeration. Its utility in modern discrete mathematics, physics, and computational chemistry underscores the profound impact of Polya's work on the broader scientific landscape.`;export{e as default};