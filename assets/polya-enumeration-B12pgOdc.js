var e=`# Pólya Enumeration Theorem

The Pólya Enumeration Theorem (PET) stands as one of the most powerful tools in combinatorics, providing a systematic method for counting the number of distinct patterns that can be formed by coloring the vertices, edges, or faces of a geometric object under the action of a symmetry group. Named after the Hungarian mathematician George Pólya, who published his landmark paper in 1937, the theorem provides a bridge between group theory and generating functions.

## Definition

At its core, the Pólya Enumeration Theorem relates the number of distinct colorings of a set $X$ to the cycle index of a permutation group $G$ acting on $X$. Let $X$ be a finite set of points, and let $G$ be a group of permutations acting on $X$. Suppose we have a set of $m$ colors available. We wish to find the number of distinct ways to color the points of $X$ such that two colorings are considered equivalent if one can be transformed into the other by an element of $G$.

The theorem states that if $P_G(t_1, t_2, \\dots, t_n)$ is the cycle index polynomial of the group $G$, then the number of distinct colorings using up to $k$ colors is given by $P_G(k, k, \\dots, k)$. More generally, if we assign a weight $w_i$ to each color $c_i$, the generating function for the number of colorings of each total weight is obtained by substituting $t_j$ with $\\sum_{i=1}^k w_i^j$ in the cycle index polynomial:

$$Z_G(x_1, x_2, \\dots, x_n) = \\frac{1}{|G|}\\sum_{g \\in G} \\prod_{j=1}^n x_j^{c_j(g)}$$

Where $|G|$ is the order of the group, and $c_j(g)$ denotes the number of cycles of length $j$ in the permutation $g$.

## Key Terminology

To grasp the mechanics of PET, one must be familiar with several fundamental algebraic and combinatorial concepts:

| Term | Definition |
| :--- | :--- |
| **Group Action** | A formal way of describing how elements of a group $G$ rearrange the elements of a set $X$. |
| **Orbit** | The set of all elements in $X$ to which a specific element $x \\in X$ can be moved by the action of $G$. |
| **Cycle Index** | A multivariate polynomial that encodes the cycle structure of all permutations in a group. |
| **Burnside's Lemma** | A precursor to PET that counts the number of orbits under a group action, specifically the number of distinct configurations. |
| **Generating Function** | A formal power series where the coefficients encode the sequence of interest, in this case, the number of colorings. |
| **Symmetry Group** | The group consisting of all rotations and reflections that leave an object, such as a cube or a polygon, invariant. |

## Purpose

The primary utility of the Pólya Enumeration Theorem is to solve "counting under equivalence" problems. Without PET, one might attempt to list all possible colorings and manually filter out duplicates caused by rotational or reflective symmetry. For small sets, this is manageable; however, for complex structures, the number of colorings grows exponentially, making brute-force enumeration impossible.

PET is essential in:
1. **Chemistry:** Determining the number of possible isomers of a molecule.
2. **Computer Science:** Counting non-equivalent boolean functions or network topologies.
3. **Combinatorial Design:** Designing experiments or layouts that maintain structural balance.
4. **Physics:** Enumerating states in statistical mechanics where particles are indistinguishable under specific operations.

## Fundamental Properties

The power of PET lies in the fact that it separates the geometric constraints (represented by the group $G$) from the combinatorial constraints (the colors and their properties).

1. **Invariance:** The theorem relies on the fact that the symmetry group $G$ partition the set of all possible colorings into equivalence classes (orbits). Each orbit represents a unique pattern.
2. **Linearity:** The cycle index is a linear combination of terms derived from the group elements. This linearity allows for the substitution of generating functions into the cycle index polynomial.
3. **Weighting:** By assigning variables $x_i$ to colors, we can derive the exact count of colorings that use a specific number of each color. For example, if we have two colors, Red (weight $r$) and Blue (weight $b$), setting $x_j = r^j + b^j$ allows us to extract the coefficient of $r^a b^b$ to find exactly how many patterns use $a$ red nodes and $b$ blue nodes.

## Types & Variations

While the standard PET concerns coloring vertices, variations exist to handle more complex structures:

- **Edge Coloring:** Instead of vertices, we define the action of $G$ on the edges of a graph. The cycle index remains the same, but the representation of $g \\in G$ must be expressed as a permutation of edges.
- **Fixed-Point Enumeration:** A variation that accounts for the fact that some configurations are left unchanged by certain rotations (fixed points), leading to the application of the Weighted Burnside's Lemma.
- **Redfield-Pólya Theorem:** Often considered a generalization of PET, it addresses not just coloring but also the composition of structures. It provides a framework for counting structures built from smaller components where both the components and the "container" have their own symmetry groups.

## How to Solve

Applying PET to a problem follows a structured analytical pipeline:

1. **Identify the Group $G$:** Determine the symmetry group that acts on the structure. For a square, this is the Dihedral group $D_4$. For a cube, it is the rotational group $O$ of order 24.
2. **Express Elements in Cycle Notation:** For every element $g \\in G$, decompose the action into disjoint cycles. If an element consists of $c_1$ cycles of length 1, $c_2$ cycles of length 2, and so on, its contribution to the cycle index is $t_1^{c_1} t_2^{c_2} \\dots t_n^{c_n}$.
3. **Form the Cycle Index:** Calculate the average over all elements in the group:
   $$Z_G(t_1, \\dots, t_n) = \\frac{1}{|G|} \\sum_{g \\in G} \\prod_{k=1}^n t_k^{c_k(g)}$$
4. **Substitute and Expand:** Define the weight of the colors. If we have $n$ colors, substitute $t_k = \\sum_{i=1}^n c_i^k$ where $c_i$ represents the value or weight of the $i$-th color. Expand the resulting polynomial.
5. **Extract Coefficients:** The coefficient of the desired monomial in the expanded polynomial represents the number of distinct ways to achieve that specific distribution of colors.

Consider the classic problem of coloring the vertices of a square with 2 colors (say, Black and White).
- The group $D_4$ has 8 elements: Identity, 3 rotations ($90^\\circ, 180^\\circ, 270^\\circ$), and 4 reflections (2 across axes, 2 across diagonals).
- The cycles for each:
  - Identity: (1)(2)(3)(4) $\\rightarrow t_1^4$
  - $90^\\circ$ and $270^\\circ$ rotations: (1 2 3 4) $\\rightarrow t_4^2$ (Wait, 1 cycle of length 4: $t_4^1$)
  - $180^\\circ$ rotation: (1 3)(2 4) $\\rightarrow t_2^2$
  - Axis reflections: (1)(3)(2 4) $\\rightarrow t_1^2 t_2^1$
  - Diagonal reflections: (1)(3)(2)(4) $\\rightarrow t_1^2 t_2^1$ is incorrect; diagonal reflection swaps two pairs, fixing two vertices $\\rightarrow t_1^2 t_2^1$
- The cycle index $Z_G = \\frac{1}{8}(t_1^4 + 2t_4^1 + 3t_1^2 t_2 + 2t_2^2)$.
- Substituting $t_k = r^k + b^k$:
  - $Z_G = \\frac{1}{8}((r+b)^4 + 2(r^4+b^4) + 3(r+b)^2(r^2+b^2) + 2(r^2+b^2)^2)$.
- Expanding this provides the counts for every combination of Red and Black vertices.

## Summary

The Pólya Enumeration Theorem is a sophisticated bridge between the geometric symmetry of objects and the combinatorial counting of configurations. By shifting the problem from one of list-based enumeration to one of polynomial algebra, it allows for the precise determination of distinct patterns even in high-dimensional or highly symmetric spaces. Its primary strength lies in the cycle index, which encapsulates all rotational and reflective information of a set, allowing for modular application of any number of color choices or constraints. As a foundational principle, it underpins modern combinatorial chemistry and network theory, ensuring that mathematical rigor replaces the inherent errors of manual counting. Through the use of generating functions and cycle indices, PET simplifies otherwise intractable problems, making it an indispensable tool for researchers in discrete mathematics.`;export{e as default};