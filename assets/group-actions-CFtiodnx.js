var e=`## Definition

A group action is a formal method in abstract algebra to describe how a group $G$ transforms or permutes the elements of a set $X$. Specifically, let $G$ be a group with identity $e$, and let $X$ be a set. A left group action of $G$ on $X$ is a map $\\phi: G \\times X \\to X$, denoted as $g \\cdot x = \\phi(g, x)$, satisfying two foundational axioms:

1. The identity axiom: For all $x \\in X$, $e \\cdot x = x$.
2. The compatibility axiom: For all $g, h \\in G$ and $x \\in X$, $g \\cdot (h \\cdot x) = (gh) \\cdot x$.

These axioms ensure that the group structure is preserved under the transformation, effectively treating $G$ as a set of permutations acting on the elements of $X$. If we map each $g \\in G$ to a bijection $\\sigma_g: X \\to X$ defined by $\\sigma_g(x) = g \\cdot x$, the axioms imply that the map $g \\mapsto \\sigma_g$ is a group homomorphism from $G$ to the symmetric group $S_X$ of all bijections on $X$.

## Key Terminology

To analyze the structure of group actions, we define several essential subsets and mappings:

1. Orbit: For any $x \\in X$, the orbit of $x$ under $G$ is the set $G \\cdot x = \\{g \\cdot x \\mid g \\in G\\}$. The orbit represents all possible locations to which $x$ can be moved by the action of $G$.
2. Stabilizer: For any $x \\in X$, the stabilizer of $x$ is the subgroup $G_x = \\{g \\in G \\mid g \\cdot x = x\\}$. This subgroup consists of all elements in $G$ that leave $x$ fixed.
3. Fixed points: An element $x \\in X$ is a fixed point if $g \\cdot x = x$ for all $g \\in G$. This is equivalent to saying $G_x = G$.
4. Faithful action: An action is faithful if the identity $e$ is the only element that acts as the identity on all $x \\in X$. Formally, this occurs when the homomorphism $g \\mapsto \\sigma_g$ is injective.
5. Transitive action: An action is transitive if there is only one orbit, meaning for any $x, y \\in X$, there exists $g \\in G$ such that $g \\cdot x = y$.
6. Free action: An action is free if the stabilizer $G_x$ is the identity subgroup $\\{e\\}$ for all $x \\in X$.

## Purpose

The study of group actions serves as the bridge between abstract group theory and the geometric or combinatorial properties of objects. By allowing groups to "act" on sets, we gain powerful tools to classify structures and prove existence theorems.

The primary purpose is to simplify the understanding of complex sets $X$ by breaking them into orbits. This is formalized by the orbit-decomposition of $X$, which asserts that the orbits form a partition of the set $X$. Furthermore, the relationship between the group size $|G|$, the orbit size $|G \\cdot x|$, and the stabilizer size $|G_x|$ is given by the Orbit-Stabilizer Theorem, which is central to combinatorial enumeration, such as Burnside’s Lemma. By investigating group actions, we can calculate the number of distinct configurations under symmetry, a task central to chemistry, crystallography, and algorithm analysis.

## Fundamental Properties

The interplay between orbits and stabilizers is governed by several critical theorems:

1. The Orbit-Stabilizer Theorem: Let $G$ be a finite group acting on $X$. For any $x \\in X$, there is a bijection between the orbit $G \\cdot x$ and the set of left cosets of the stabilizer $G_x$ in $G$. Specifically:
$$|G \\cdot x| = [G : G_x] = \\frac{|G|}{|G_x|}$$
This theorem demonstrates that larger orbits correspond to smaller stabilizers, and vice versa. It is a cornerstone for computing the size of symmetrical structures.

2. Orbit Decomposition: The orbits of a group action form an equivalence relation on $X$. Two elements $x, y$ are equivalent if $y = g \\cdot x$ for some $g \\in G$. Because this is an equivalence relation, the orbits partition $X$ into disjoint, non-empty subsets whose union is $X$.

3. Burnside's Lemma (The Cauchy-Frobenius Theorem): This lemma provides a method to count the number of orbits under the action of a finite group $G$ on a finite set $X$. If $N$ is the number of orbits, then:
$$N = \\frac{1}{|G|} \\sum_{g \\in G} |X^g|$$
where $X^g = \\{x \\in X \\mid g \\cdot x = x\\}$ is the set of fixed points of $g$. This formula is vital for counting distinct objects under rotational or reflectional symmetry.

4. Conjugation Action: A group $G$ acts on itself by conjugation: $g \\cdot x = gxg^{-1}$. Here, the orbits are the conjugacy classes of $G$, and the stabilizers are the centralizers $C_G(x) = \\{g \\in G \\mid gx = xg\\}$. This is fundamental to the study of the center of a group and its class equation.

## Types & Variations

| Action Type | Condition | Implications |
| :--- | :--- | :--- |
| Faithful | $g \\cdot x = x$ $\\forall x \\implies g = e$ | $G$ is isomorphic to a subgroup of $S_X$. |
| Free | $G_x = \\{e\\}$ $\\forall x$ | Every orbit has size equal to $|G|$. |
| Transitive | $G \\cdot x = X$ | All elements are equivalent under $G$. |
| Regular | Transitive and Free | $G$ acts like its own Cayley table. |
| Ineffective | $g \\cdot x = x$ $\\forall g$ | The group acts trivially on the set. |

Free actions occur frequently in topological group theory, particularly in the study of covering spaces. If a group $G$ acts freely and properly discontinuously on a topological space $X$, the quotient space $X/G$ inherits many structural properties from $X$, such as being a manifold or a covering space. In contrast, transitive actions are used to describe homogeneous spaces, where every point looks identical to every other point under the symmetry of the group.

## How to Solve

To approach problems involving group actions, one should follow a structured analytical framework:

1. Identify the group $G$ and the set $X$: Clarify the elements of the group (often symmetry groups like $D_n, S_n, C_n$) and the elements of the set being acted upon.
2. Determine the stabilizer $G_x$: For a chosen representative $x$, identify all $g \\in G$ that keep $x$ invariant. Ensure that you test for each group element individually if the action is not intuitively obvious.
3. Apply the Orbit-Stabilizer Theorem: Once $G_x$ is identified, calculate its index $[G : G_x]$. This value tells you the size of the orbit $G \\cdot x$. This is particularly useful if $G$ is large, as calculating the stabilizer is often easier than identifying all elements in an orbit by manual enumeration.
4. Partition the set: If the action is not transitive, partition $X$ into its disjoint orbits. Verify that the sum of the sizes of the orbits equals $|X|$.
5. Use Burnside's Lemma for counting: When asked to find the "number of distinct ways" to color or arrange an object, list the elements of $G$, calculate the fixed points $X^g$ for each element, and compute the arithmetic mean.
6. Check for conjugates: If analyzing the action of $G$ on itself by conjugation, recall that the elements of the same orbit must have the same stabilizer (up to conjugation). Specifically, if $y = g \\cdot x$, then $G_y = g G_x g^{-1}$.

Example: Consider the rotation of a square by the group $C_4 = \\{0, 90, 180, 270\\}$ degrees acting on the four vertices $X = \\{1, 2, 3, 4\\}$.
- For vertex 1, the only rotation leaving it fixed is the identity (0 degrees). Thus $G_1 = \\{0\\}$.
- Orbit-Stabilizer Theorem: $|G \\cdot 1| = |C_4| / |G_1| = 4 / 1 = 4$.
- The orbit is $\\{1, 2, 3, 4\\}$, implying the action is transitive.

## Summary

Group actions provide a robust mathematical language for describing symmetry. By defining an action, we organize a set into orbits, which are governed by the stabilizers of their constituent elements. The Orbit-Stabilizer Theorem serves as the primary tool for relating the size of a group to the size of its orbits and stabilizers. Furthermore, Burnside’s Lemma elevates these concepts into a powerful counting technique. Whether one is studying the geometric symmetry of polyhedra, the permutation of roots in Galois theory, or the classification of homogeneous topological spaces, group actions remain an indispensable instrument for reducing complex global problems into manageable local data. The mastery of these concepts allows for the rigorous exploration of how groups permute, rotate, and reflect mathematical structures, fundamentally revealing the underlying order in seemingly disordered systems.`;export{e as default};