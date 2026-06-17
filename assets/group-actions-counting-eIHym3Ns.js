var e=`# Group Actions on Sets and Orbit Counting

## Definition

A group action is a formal mathematical framework that describes how the elements of a group $G$ interact with the elements of a set $X$. Formally, let $G$ be a group and $X$ be a set. A group action of $G$ on $X$ is a map $\\phi: G \\times X \\to X$, denoted by $\\phi(g, x) = g \\cdot x$, that satisfies two fundamental axioms for all $x \\in X$ and all $g, h \\in G$:

1. Identity: $e \\cdot x = x$, where $e$ is the identity element of $G$.
2. Compatibility: $(gh) \\cdot x = g \\cdot (h \\cdot x)$.

When these axioms hold, we say that $G$ acts on $X$. This construction provides a powerful bridge between abstract algebraic structure and the geometry or combinatorics of the set $X$. By studying the group action, we decompose the set $X$ into manageable pieces, allowing us to derive deep results about the structure of both the group and the set itself.

## Key Terminology

To analyze group actions, we must define specific subsets and mappings that characterize the behavior of individual elements:

| Term | Mathematical Definition | Description |
|---|---|---|
| Orbit | $Orb(x) = \\{g \\cdot x \\mid g \\in G\\}$ | The set of all elements in $X$ to which $x$ can be moved by the action of $G$. |
| Stabilizer | $Stab(x) = \\{g \\in G \\mid g \\cdot x = x\\}$ | The set of all group elements that leave $x$ fixed. This is a subgroup of $G$. |
| Fixed Point | $X^g = \\{x \\in X \\mid g \\cdot x = x\\}$ | The subset of $X$ consisting of elements that are unmoved by a specific element $g$. |
| Invariant Set | $X_G = \\{x \\in X \\mid g \\cdot x = x, \\forall g \\in G\\}$ | The subset of $X$ containing elements fixed by every element of the group. |
| Transitive Action | $Orb(x) = X$ for any $x$ | An action is transitive if there is only one orbit, meaning $G$ can map any point to any other point. |
| Faithful Action | $\\bigcap_{x \\in X} Stab(x) = \\{e\\}$ | An action is faithful if only the identity acts as the identity mapping on the entire set. |

## Purpose

The primary purpose of studying group actions is to reduce complex combinatorial problems to manageable algebraic ones. When a group acts on a set, the symmetry of the group imposes a structure on the set. This is particularly useful in enumeration problems where we wish to count distinct configurations under a group of symmetries. For instance, in chemical isomer counting or pattern coloring (like the number of distinct ways to color a necklace), the group action organizes the set of all possible colorings into equivalence classes (orbits).

Counting these orbits is equivalent to counting "distinct" objects under equivalence. The Orbit-Stabilizer Theorem provides the bridge: $|Orb(x)| \\times |Stab(x)| = |G|$. This equality allows us to compute the size of orbits even when the set $X$ is too large to iterate over directly. Furthermore, Burnside’s Lemma provides a powerful summation formula: the number of orbits is the average number of fixed points over all group elements.

## Fundamental Properties

The interplay between the size of the group, the orbits, and the stabilizers leads to several elegant results that govern the behavior of group actions.

### The Orbit-Stabilizer Theorem
For any $x \\in X$, there exists a bijection between the orbit of $x$ and the set of left cosets of its stabilizer $Stab(x)$ in $G$. Consequently, the size of the orbit is given by:
$$|Orb(x)| = \\frac{|G|}{|Stab(x)|}$$
This result is profound because it restricts the possible sizes of orbits to be divisors of the group order $|G|$.

### Burnside’s Lemma (Cauchy-Frobenius Theorem)
Let $N$ denote the number of distinct orbits under the action of a finite group $G$ on a finite set $X$. Then:
$$N = \\frac{1}{|G|} \\sum_{g \\in G} |X^g|$$
This formula is the cornerstone of modern enumerative combinatorics. It allows us to count objects up to symmetry by counting how many objects remain unchanged by each specific symmetry in the group.

### The Class Equation
If $G$ acts on itself by conjugation ($g \\cdot x = gxg^{-1}$), the orbits are the conjugacy classes of $G$. The stabilizer of an element $x$ under conjugation is the centralizer $C_G(x)$. The sum of the sizes of these orbits recovers the group order:
$$|G| = |Z(G)| + \\sum_{i=1}^k [G : C_G(x_i)]$$
where $Z(G)$ is the center of the group, and $x_i$ are representatives of the non-central conjugacy classes.

## Types & Variations

Group actions can be categorized by how "freely" the group acts on the set.

1. **Free Action:** An action is free if the stabilizer of every element is trivial ($Stab(x) = \\{e\\}$). This implies that every orbit has the same size, specifically $|Orb(x)| = |G|$.
2. **Effective Action:** An action is effective if the kernel of the action is the identity. That is, if an element $g$ acts as the identity on all $x \\in X$, then $g = e$.
3. **Primitive Action:** A transitive action is primitive if it preserves no non-trivial partition of $X$. This captures the idea that the action cannot be broken down into simpler component actions in a way that respects a block structure.
4. **Group Representations:** When $X$ is a vector space $V$ and the action is linear ($g \\cdot (u+v) = g \\cdot u + g \\cdot v$), the action is a representation. This connects group actions to matrix theory and linear algebra, where we study the trace of the matrices, leading to the theory of characters.

## How to Solve

Solving problems involving group actions and orbit counting generally follows a systematic four-step procedure.

### Step 1: Identify the Group and the Set
Define the set $X$ of configurations (e.g., all possible colorings of a cube) and identify the group $G$ that acts on these configurations (e.g., the group of rotational symmetries of the cube).

### Step 2: Determine the Group Order and Elements
List the elements of $G$ and determine their cycle structures. For symmetry groups, express each element as a permutation of the components of $X$. This is crucial because it allows us to identify how many configurations remain fixed by a specific element.

### Step 3: Count Fixed Points
For each $g \\in G$, calculate $|X^g|$, the number of configurations in $X$ that remain unchanged by $g$. An element $g$ fixes a configuration if and only if all components in the same cycle of the permutation $g$ are assigned the same value (e.g., same color). If there are $k$ colors and the permutation $g$ has $c(g)$ cycles, then $|X^g| = k^{c(g)}$.

### Step 4: Apply Burnside’s Lemma
Plug the counts into the formula $N = \\frac{1}{|G|} \\sum |X^g|$.

### Example Calculation
Consider coloring the four corners of a square with $k$ colors, considering rotations as symmetries.
The group $G$ is the cyclic group $C_4$ of order 4: $\\{id, rot_{90}, rot_{180}, rot_{270}\\}$.
- $id$: Fixes all $k^4$ configurations.
- $rot_{90}$: A 4-cycle $(1,2,3,4)$. All must be the same color. Fixes $k^1$ configurations.
- $rot_{180}$: Two 2-cycles $(1,3)(2,4)$. Fixes $k^2$ configurations.
- $rot_{270}$: A 4-cycle $(1,4,3,2)$. Fixes $k^1$ configurations.
Total orbits $N = \\frac{1}{4}(k^4 + k^1 + k^2 + k^1) = \\frac{1}{4}(k^4 + k^2 + 2k)$.

## Summary

Group actions provide the mathematical machinery to analyze symmetry. By partitioning a set $X$ into orbits, we group equivalent states together, simplifying the landscape of the problem. The Orbit-Stabilizer Theorem establishes the fundamental numerical relationship between the group size and orbit size, while Burnside’s Lemma offers an efficient computational path for counting distinct objects under symmetry.

These concepts extend far beyond pure group theory. In chemistry, they are used to enumerate isomers. In computer science, they assist in calculating the number of distinct circuits in logic design. In physics, group actions are central to Noether’s Theorem, which links symmetries (group actions) to conservation laws. Mastering these principles requires a transition from viewing $X$ as a static set to viewing it as a dynamic field where group elements shuffle positions and colors, uncovering hidden invariants that define the nature of the system. By systematically applying the tools of stabilizers and fixed points, one can solve highly complex enumerative problems that would be intractable through brute-force inspection.`;export{e as default};