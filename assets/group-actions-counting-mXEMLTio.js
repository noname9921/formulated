var e=`# Group Actions on Sets and Orbit Counting

## Definition

A group action is a formal mathematical framework that describes how the elements of a group $G$ transform the elements of a set $X$. Formally, let $G$ be a group and $X$ be a set. A group action of $G$ on $X$ is a map $\\phi: G \\times X \\to X$, typically denoted as $g \\cdot x = \\phi(g, x)$, such that the following two axioms are satisfied for all $g, h \\in G$ and $x \\in X$:

1. Identity axiom: $e \\cdot x = x$, where $e$ is the identity element of $G$.
2. Compatibility axiom: $g \\cdot (h \\cdot x) = (gh) \\cdot x$.

When these conditions are met, we say that $G$ acts on $X$. This structure provides a powerful way to study the internal symmetries of an object or set by observing how a group of transformations reshuffles the elements of that set.

## Key Terminology

To analyze group actions, we define several critical concepts that partition the set $X$ based on the group's behavior:

- Orbit: The orbit of an element $x \\in X$, denoted by $\\text{Orb}(x)$ or $G \\cdot x$, is the set of all elements in $X$ to which $x$ can be moved by the action of $G$. Formally, $\\text{Orb}(x) = \\{g \\cdot x \\mid g \\in G\\}$. The set $X$ is partitioned into disjoint orbits.
- Stabilizer: The stabilizer of an element $x \\in X$, denoted by $\\text{Stab}(x)$ or $G_x$, is the set of all elements in $G$ that leave $x$ fixed. Formally, $G_x = \\{g \\in G \\mid g \\cdot x = x\\}$. The stabilizer is always a subgroup of $G$.
- Fixed Points: An element $x \\in X$ is a fixed point if $g \\cdot x = x$ for all $g \\in G$. This implies that $\\text{Stab}(x) = G$ and the orbit $\\text{Orb}(x) = \\{x\\}$.
- Transitive Action: An action is transitive if there is only one orbit, meaning for any two elements $x, y \\in X$, there exists at least one $g \\in G$ such that $g \\cdot x = y$.
- Faithful Action: An action is faithful if the identity is the only element in $G$ that fixes every element in $X$.

## Purpose

The primary purpose of studying group actions is to count configurations under symmetry. Many problems in combinatorics and geometry ask us to count distinct arrangements (e.g., coloring the vertices of a polygon) where certain configurations are considered equivalent if one can be transformed into another via a symmetry operation (like rotation or reflection).

Without the machinery of group actions, one would have to manually list every possibility and filter for duplicates, which is computationally infeasible for large sets. By identifying the symmetry group $G$ acting on the set of configurations $X$, we can utilize tools like Burnside's Lemma to calculate the number of distinct orbits (nonequivalent states) efficiently. This is foundational in fields such as chemical isomer counting, network topology analysis, and the synthesis of combinatorial design.

## Fundamental Properties

The relationship between orbits and stabilizers is governed by the Orbit-Stabilizer Theorem. This theorem states that for any $x \\in X$, there is a bijection between the orbit of $x$ and the set of left cosets of its stabilizer in $G$. Specifically:

$$|\\text{Orb}(x)| = \\frac{|G|}{|\\text{Stab}(x)|}$$

This equation is a cornerstone of algebraic combinatorics. It implies that the size of an orbit must always divide the order of the group.

Furthermore, we utilize the Burnside Lemma (or the Cauchy-Frobenius Lemma). Let $X^g = \\{x \\in X \\mid g \\cdot x = x\\}$ be the set of elements in $X$ fixed by a specific group element $g$. The number of orbits $N$ is given by:

$$N = \\frac{1}{|G|} \\sum_{g \\in G} |X^g|$$

This formula allows us to count orbits without explicitly constructing them. By summing the number of elements fixed by each group element and dividing by the total size of the group, we obtain the number of distinct configurations under the group's action.

## Types & Variations

Actions can be categorized based on their algebraic and set-theoretic properties:

| Action Type | Condition |
| :--- | :--- |
| Free | $\\text{Stab}(x) = \\{e\\}$ for all $x \\in X$ |
| Faithful | Intersection of all stabilizers is $\\{e\\}$ |
| Transitive | Only one orbit exists in $X$ |
| Regular | Transitive and free |

These categories help simplify calculations. For instance, in a free action, every orbit has exactly $|G|$ elements, meaning $|X| = |G| \\times (\\text{number of orbits})$. 

Additionally, we distinguish between actions on finite and infinite sets. While the counting formulas like Burnside's Lemma apply to finite sets, actions on infinite sets are often studied using topological groups, where we look at the properties of orbits as topological subspaces (e.g., whether orbits are closed or dense).

## How to Solve

To solve an orbit-counting problem, follow this structured methodology:

1. Identify the set $X$: Define the objects you are counting (e.g., colorings of a square).
2. Identify the group $G$: Determine the set of symmetries acting on $X$ (e.g., the dihedral group $D_4$ for square symmetries).
3. Determine $|G|$: State the order of the group.
4. Define $X^g$ for each $g \\in G$: For every symmetry, determine how many configurations remain unchanged under that symmetry.
   - For a rotation, a configuration is fixed only if the colors are repeated according to the rotational period.
   - For a reflection, colors must match across the axis of symmetry.
5. Apply Burnside's Lemma: Compute the average: $\\frac{1}{|G|} \\sum_{g \\in G} |X^g|$.

### Example Calculation
Consider coloring the four vertices of a square with 2 colors. Let $G$ be the rotation group of the square, $C_4 = \\{0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ\\}$.
- $g = 0^\\circ$: Fixes all $2^4 = 16$ colorings.
- $g = 90^\\circ$: Fixes colorings where all vertices are the same color (2 choices: all black or all white). $|X^g| = 2$.
- $g = 180^\\circ$: Vertices must be pair-wise identical (2 pairs, $2^2 = 4$ choices). $|X^g| = 4$.
- $g = 270^\\circ$: Similar to $90^\\circ$, all vertices must be same color. $|X^g| = 2$.
- Total: $\\frac{1}{4}(16 + 2 + 4 + 2) = \\frac{24}{4} = 6$. There are 6 distinct ways to color the square under rotation.

## Summary

The study of group actions provides a rigorous language for the concept of "symmetry." By formalizing how elements of a group $G$ redistribute elements of a set $X$, we move from intuitive pattern recognition to exact counting. 

The Orbit-Stabilizer Theorem provides the structural link between the local geometry of an element (its stabilizer) and its global reach (its orbit). Burnside's Lemma elevates this to a powerful counting tool, effectively transforming hard enumeration problems into the simpler task of summing fixed points over group elements. Whether in geometry, chemistry, or computational group theory, these tools remain the definitive approach to understanding structures invariant under transformation. Through these techniques, we can effectively navigate the complexity of state spaces, ensuring that we count each unique configuration exactly once, regardless of its appearance in different symmetry-related orientations.`;export{e as default};