var e=`# Burnside's Lemma

Burnside's Lemma is a fundamental result in group theory and combinatorics that provides a powerful method for counting distinct objects under symmetry. Often referred to as the Cauchy-Frobenius Lemma, the orbit-counting lemma, or the Lemma that is not Burnside's (as it was first described by Frobenius), it resolves the difficult problem of counting objects when some configurations are considered identical due to rotations, reflections, or other transformations.

## Definition

Let $X$ be a finite set and $G$ be a finite group that acts on $X$. The action of $G$ on $X$ partitions the set $X$ into disjoint orbits. If we denote the set of orbits as $X/G$, Burnside's Lemma states that the number of distinct orbits $|X/G|$ is equal to the average number of elements in $X$ fixed by the elements of $G$. Mathematically, this is expressed as:

$$|X/G|=\\frac{1}{|G|}\\sum_{g \\in G}|X^g|$$

In this formula:
1. $|X/G|$ is the number of orbits (the number of distinct configurations).
2. $|G|$ is the order of the group (the total number of symmetry operations).
3. $X^g$ is the set of elements in $X$ that remain unchanged (fixed) by the specific group element $g$. Thus, $|X^g|$ is the number of elements fixed by $g$.

## Key Terminology

To fully grasp the lemma, one must be familiar with several core group-theoretic definitions:

* **Group Action:** A formal way to describe how elements of a group $G$ rearrange the elements of a set $X$. For every $g \\in G$, there is a mapping $f_g: X \\to X$.
* **Orbit:** The orbit of an element $x \\in X$, denoted by $Orb(x)$, is the set of all elements in $X$ to which $x$ can be moved by the elements of $G$. Formally, $Orb(x)=\\{g \\cdot x \\mid g \\in G\\}$.
* **Stabilizer:** The stabilizer of an element $x \\in X$, denoted by $Stab(x)$, is the set of all elements in $G$ that leave $x$ unchanged. Formally, $Stab(x)=\\{g \\in G \\mid g \\cdot x = x\\}$.
* **Fixed Points:** An element $x \\in X$ is a fixed point of $g \\in G$ if $g \\cdot x = x$. The set $X^g$ consists of all such $x$ for a given $g$.
* **Symmetry Group:** The collection of transformations (such as rotation or reflection) that map an object onto itself. For a square, this is the Dihedral group $D_4$.

## Purpose

The primary utility of Burnside's Lemma lies in counting the number of non-equivalent colorings or patterns under a group of symmetries. Without this lemma, enumerating unique configurations would require a tedious manual inspection or the Inclusion-Exclusion Principle, both of which become computationally infeasible as the size of the set or the complexity of the symmetry group increases.

For instance, consider the problem of painting the faces of a cube with $k$ colors. Two colorings are considered identical if one can be rotated into the other. The symmetry group of the cube has 24 elements (rotations). Applying Burnside's Lemma allows us to compute the exact number of distinct colorings without having to list each one or navigate the complex overlapping cases of symmetry. It transforms a geometric counting problem into an algebraic one, requiring only the knowledge of the group's structure and the fixed points for each group element.

## Fundamental Properties

The lemma relies on the Orbit-Stabilizer Theorem, which relates the size of an orbit to the size of the stabilizer. The theorem states:

$$|Orb(x)| \\cdot |Stab(x)| = |G|$$

This implies that the size of any orbit must divide the order of the group. Burnside's Lemma essentially aggregates this information across the entire set $X$. 

Key properties include:
1. **Linearity:** The sum is taken over the entire group $G$, meaning that if $G$ is a product of groups, we can often decompose the counting process.
2. **Independence of Representation:** The result depends only on the action of $G$ on $X$, not on the specific labelings or physical properties of the elements of $X$.
3. **Equivalence Classes:** The "orbits" are precisely the equivalence classes under the relation defined by the group action. Burnside's Lemma provides the count of these classes, effectively serving as a quotient set counter.

## Types & Variations

While the standard Burnside's Lemma addresses finite groups acting on finite sets, there are several advanced variations:

* **Polya Enumeration Theorem (PET):** While Burnside's Lemma counts the number of orbits, PET is a more powerful generalization that uses the cycle index of the group. It allows for the counting of colorings with a specific distribution of colors (e.g., "how many ways to color a cube with 3 red faces and 3 blue faces").
* **Infinite Groups:** While Burnside's Lemma as stated requires finite groups, variations exist for compact topological groups acting on sets, where the summation is replaced by integration over the Haar measure.
* **Pro-finite groups:** In algebraic geometry, extensions to pro-finite groups allow for the counting of points on algebraic varieties over finite fields.

## How to Solve

To apply Burnside's Lemma effectively, one should follow a structured analytical process. The steps are as follows:

1. **Define the Set $X$:** Identify the total space of all possible configurations, ignoring symmetries. For example, if coloring a necklace of $n$ beads with $c$ colors, $X$ is the set of all $c^n$ possible colorings.
2. **Identify the Group $G$:** Determine the set of symmetry operations that act on the object. Ensure that the group is closed under composition and includes the identity element.
3. **List the Elements of $G$:** Write down each symmetry operation.
4. **Determine $|X^g|$ for each $g \\in G$:** For every symmetry $g$, count how many configurations in $X$ remain invariant. 
   - *Example:* For a rotation by 90 degrees of a square, a configuration is fixed only if all faces involved in the cycle of the rotation have the same color.
5. **Apply the Formula:** Sum the counts from Step 4 and divide by the total number of symmetry operations $|G|$.

### Illustrative Example: The Necklace Problem
Consider a necklace with 4 beads, where each bead can be colored either Black (B) or White (W). We want to find the number of distinct necklaces under rotational symmetry.

The group $G$ consists of four rotations: $r_0$ (0 degrees), $r_1$ (90 degrees), $r_2$ (180 degrees), and $r_3$ (270 degrees).

| Symmetry ($g$) | Fixed Points ($X^g$) | Calculation |
| :--- | :--- | :--- |
| $r_0$ | $2^4 = 16$ | All colorings are fixed by identity |
| $r_1$ | $2^1 = 2$ | All beads must be the same color |
| $r_2$ | $2^2 = 4$ | Opposite beads must be same color |
| $r_3$ | $2^1 = 2$ | All beads must be the same color |

Applying the formula:
$$|X/G| = \\frac{1}{4}(16 + 2 + 4 + 2) = \\frac{24}{4} = 6$$

There are exactly 6 distinct necklaces.

## Summary

Burnside's Lemma is an elegant and indispensable tool in combinatorics and group theory. By shifting the focus from individual elements to the properties of group actions and fixed points, it simplifies highly complex enumeration problems into solvable arithmetic expressions. Whether calculating the number of unique molecular isomers, necklace patterns, or cube colorings, the lemma provides the necessary rigor to ensure that symmetries are handled correctly without double-counting. Its integration with the Polya Enumeration Theorem further expands its utility, making it a cornerstone for anyone working in fields requiring structured combinatorial counting, such as computer science, formal logic, and theoretical chemistry.`;export{e as default};