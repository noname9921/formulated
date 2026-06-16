var e=`# Burnside's Lemma

Burnside's Lemma, also frequently referred to as the Cauchy-Frobenius Lemma, the orbit-counting lemma, or the Lemma that is not Burnside's, is a foundational result in enumerative combinatorics and group theory. It provides a powerful method for counting distinct objects under symmetry, allowing mathematicians and computer scientists to determine the number of inequivalent configurations of a set under the action of a finite group.

## Definition

Let $X$ be a finite set and $G$ be a finite group acting on $X$. The action of $G$ on $X$ induces an equivalence relation on $X$, where two elements $x,y \\in X$ are equivalent if there exists an element $g \\in G$ such that $g \\cdot x = y$. The equivalence classes under this relation are called orbits. Let $X/G$ denote the set of these orbits.

Burnside's Lemma states that the number of orbits, denoted by $|X/G|$, is the average number of points fixed by the elements of $G$. Mathematically, this is expressed as:

$$|X/G| = \\frac{1}{|G|} \\sum_{g \\in G} |X^g|$$

where $X^g$ is the set of elements in $X$ that are fixed by $g$, defined as:

$$X^g = \\{x \\in X \\mid g \\cdot x = x\\}$$

This formula serves as an bridge between the structure of a symmetry group and the enumeration of configurations, effectively circumventing the need to explicitly list or categorize every possible orbit.

## Key Terminology

To fully grasp the mechanics of the lemma, one must be familiar with several key concepts from group theory and combinatorics:

1. Group Action: A mapping $G \\times X \\to X$ such that the identity element of $G$ leaves all $x \\in X$ unchanged, and the composition of group elements is compatible with the action on $X$.
2. Orbit: The set of all elements in $X$ to which a specific element $x$ can be moved by the elements of $G$. The orbit of $x$, denoted $Orb(x)$, is $\\{g \\cdot x \\mid g \\in G\\}$.
3. Stabilizer: The set of elements in $G$ that leave a specific element $x$ fixed. The stabilizer, denoted $Stab(x)$ or $G_x$, is $\\{g \\in G \\mid g \\cdot x = x\\}$. This is a subgroup of $G$.
4. Fixed Set: The subset of $X$ consisting of all elements that are left invariant by a particular group element $g$.
5. Orbit-Stabilizer Theorem: A critical relationship stating that for any $x \\in X$, $|Orb(x)| \\cdot |Stab(x)| = |G|$. This theorem provides the algebraic foundation upon which Burnside's Lemma is derived.

## Purpose

The primary purpose of Burnside's Lemma is to solve "necklacemaking" problems—situations where configurations are considered identical if one can be transformed into the other via a symmetry operation (rotation, reflection, etc.). Without this lemma, counting unique arrangements often requires complex case-by-case analysis or the inclusion-exclusion principle, both of which are error-prone for large sets.

In computer science, this lemma is essential for algorithm design involving graph isomorphism, state-space compression in game theory (e.g., finding the number of distinct configurations of a Rubik's Cube), and chemical informatics for counting isomers of organic molecules. By reducing the complexity of counting problems from $O(|X|)$ to $O(|G|)$, the lemma allows for the efficient computation of configuration spaces that would otherwise be computationally intractable.

## Fundamental Properties

The power of Burnside's Lemma lies in several mathematical properties that simplify complex counting:

| Property | Description |
| :--- | :--- |
| Linearity of Counting | The sum over $G$ allows us to decompose the action of the group into individual elements, regardless of their complexity. |
| Invariance Under Symmetry | If $g$ is a symmetry, then $X^g$ is simply the subset of configurations unchanged by that symmetry. |
| Group Dependency | The result depends exclusively on the group structure and the set $X$, making it highly generalizable. |
| Bridge to Polya | Burnside's Lemma is a special case of the Polya Enumeration Theorem, which extends this logic to include weights or colorings. |

The summation $|X^g|$ is often easier to compute than counting the orbits directly. In many applications, such as coloring the vertices of a polygon with $k$ colors under rotation, the set $X$ is large ($k^n$), but the number of group elements $|G|$ is small ($n$). The Lemma exploits this asymmetry to perform the counting task efficiently.

## Types & Variations

While the basic form of the lemma is ubiquitous, there are several variations and related theorems used in specialized fields:

### Polya Enumeration Theorem
This is the most significant extension of Burnside's Lemma. While Burnside's Lemma counts the number of distinct orbits, the Polya Enumeration Theorem uses a cycle index polynomial to count the number of distinct orbits under a given set of color constraints. It allows for the calculation of how many ways one can color a structure if specific color frequencies are required.

### Cauchy-Frobenius Lemma
This is simply an alternative name for the same result. Historically, the result was known to Cauchy and Frobenius before William Burnside published it in his book on the theory of groups of finite order. Despite the naming convention, they refer to the identical theorem.

### Burnside's Lemma for Infinite Groups
While the standard lemma assumes a finite group $G$, generalizations exist for compact topological groups using Haar measures. Instead of a discrete sum, the result involves integrating the number of fixed points over the group manifold.

## How to Solve

To apply Burnside's Lemma systematically, follow this step-by-step framework:

1. Identify the Set $X$: Define the set of all raw configurations before accounting for symmetry. If you are coloring a shape with $n$ slots using $k$ colors, $|X| = k^n$.
2. Identify the Group $G$: Determine the group of symmetries that map configurations to equivalent ones. Common groups include the Cyclic group $C_n$ for rotations of an $n$-gon or the Dihedral group $D_n$ for rotations and reflections.
3. Enumerate Group Elements: List all elements $g \\in G$. For a rotation of $360/n$ degrees, calculate how many configurations in $X$ remain invariant under this specific rotation.
4. Calculate $|X^g|$ for each $g$: For a configuration to be fixed by a rotation, the elements in the same cycle of the permutation must have the same color. Thus, if a rotation of $n$ elements has $c$ cycles, $|X^g| = k^c$.
5. Compute the Average: Apply the formula by summing the results from step 4 and dividing by the order of the group $|G|$.

### Example: Coloring a Square
Suppose we want to color the 4 corners of a square with 2 colors (Black or White) considering rotations.
- The set $X$ has $2^4 = 16$ configurations.
- The rotation group $G$ has 4 elements: $0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ$.
- $0^\\circ$ rotation: All 16 configurations are fixed ($|X^0| = 16$).
- $90^\\circ$ rotation: Corners must be the same color (e.g., color 1, color 1, color 1, color 1). There are 2 options (all B or all W), so $|X^{90}| = 2$.
- $180^\\circ$ rotation: Diagonal pairs must be the same. There are 2 pairs, each can be B or W. $|X^{180}| = 2^2 = 4$.
- $270^\\circ$ rotation: Similar to $90^\\circ$, $|X^{270}| = 2$.
- Calculation: $\\frac{1}{4}(16 + 2 + 4 + 2) = \\frac{24}{4} = 6$.

There are 6 distinct colorings of the square under rotation.

## Summary

Burnside's Lemma is a cornerstone of combinatorial group theory. By transforming an orbit-counting problem into a fixed-point counting problem, it provides a rigorous and efficient mechanism for managing symmetry. 

The core requirement to master this lemma is the ability to decompose a symmetry group into its constituent permutations and analyze how those permutations affect the configuration set. Whether solving simple coloring puzzles or complex problems in molecular geometry, the lemma remains the standard approach for ensuring that equivalent states are not overcounted. Its direct evolution into the more powerful Polya Enumeration Theorem demonstrates its enduring relevance in modern discrete mathematics. By internalizing the relationship between orbits and stabilizers, one gains the ability to classify the structure of highly symmetrical systems with mathematical precision.`;export{e as default};