# Algebra: Group Theory

---

## 1. Definition

In abstract algebra, **Group Theory** is the study of symmetry. It provides a formal mathematical framework for analyzing systems where elements can be combined according to strict operational laws. A group does not look at what its elements _are_ (such as numbers, geometric rotations, or matrices), but rather at how those elements _behave_ under a given binary operation.

Formally, a **group** is an ordered pair $(G, *)$ consisting of a non-empty set $G$ and a binary operation $*: G \times G \to G$ that combines any two elements of $G$ to produce another element of $G$. To qualify as a valid mathematical group, the pair must strictly satisfy the following four foundational axioms:

### 1. Closure

For all elements $a, b \in G$, the result of the operation $a * b$ must also be contained within the set $G$:
$$\forall a, b \in G, \quad a * b \in G$$

### 2. Associativity

For all elements $a, b, c \in G$, the order in which the operations are performed does not affect the final result:
$$\forall a, b, c \in G, \quad (a * b) * c = a * (b * c)$$

### 3. Identity Element

There exists a unique, universal identity element $e \in G$ such that operating any element $a \in G$ with $e$ leaves that element completely unchanged:
$$\exists e \in G \quad \text{such that} \quad \forall a \in G, \quad a * e = e * a = a$$

### 4. Inverse Element

For every individual element $a \in G$, there exists a corresponding inverse element $a^{-1} \in G$ within the set that combines with $a$ to yield the unique identity element $e$:
$$\forall a \in G, \quad \exists a^{-1} \in G \quad \text{such that} \quad a * a^{-1} = a^{-1} * a = e$$

---

## 2. Key Terminology

To analyze the structural traits and behaviors of groups, the following precise vocabulary definitions are required:

- **Order of a Group ($|G|$):** The total number of elements contained within the set $G$. If the set contains infinitely many elements, it is called an infinite group.
- **Order of an Element ($|a|$ or $o(a)$):** The smallest positive integer $n$ such that multiplying or combining an element $a$ with itself $n$ times yields the identity element $e$:
  $$a^n = \underbrace{a * a * a * \dots * a}_{n \text{ times}} = e$$
  If no such positive integer exists, the element is said to have infinite order.
- **Abelian Group:** A specialized group where the binary operation is completely commutative, meaning the order of the inputs does not matter: $a * b = b * a$ for all $a, b \in G$. Non-abelian groups do not preserve this property.
- **Subgroup ($H \le G$):** A subset $H$ of a group $G$ that remains a valid group in its own right when subjected to the same inherited binary operation $*$.
- **Coset:** A distinct subset formed by multiplying every element of a subgroup $H$ by a fixed element $g \in G$.
  - **Left Coset:** $gH = \{g * h \mid h \in H\}$
  - **Right Coset:** $Hg = \{h * g \mid h \in H\}$
- **Normal Subgroup ($N \trianglelefteq G$):** A subgroup $N$ whose left and right cosets are completely identical for every element in the parent group: $gN = Ng$ for all $g \in G$.
- **Group Homomorphism:** A structural mapping function $\phi: G \to H$ between two groups that preserves the operation of the domain:
  $$\phi(a *_G b) = \phi(a) *_H \phi(b)$$
- **Group Isomorphism:** A bijective homomorphism, meaning the mapping is a perfect one-to-one match. Isomorphic groups share the exact same structural behavior, differing only in the names of their elements.

---

## 3. Purpose

Group Theory acts as a language for classifying geometric patterns, finding roots of polynomials, and solving problems in particle physics and digital data security.

### Quantifying Abstract Symmetry

Symmetry is often viewed as a visual quality, such as a butterfly's wings or a tiled floor. Group theory translates this concept into precise algebra. By treating physical transformations (like rotations and reflections) as elements of a group, mathematicians can analyze the geometric stability of crystals, molecules, and spatial networks.

### Determining Polynomial Solvability

For centuries, algebraic mathematicians looked for a general formula to solve fifth-degree polynomial equations (quintics), similar to the quadratic formula. By mapping the permutations of polynomial roots to group structures, Évariste Galois developed **Galois Theory**. He proved that because the symmetry groups of higher-degree polynomials lack specific nested subgroups, a general quintic formula cannot be constructed using basic algebraic radicals.

### Real-World Quantum and Digital Applications

- **Particle Physics & Mechanics:** Subatomic particles (such as quarks and leptons) are classified based on how they behave under rotation and transformation matrix spaces. These operations are governed by continuous Lie groups like $\text{SU}(3)$.
- **Crystallography & Chemistry:** Chemists use point groups to analyze the rotational symmetries of molecular bonds. This helps predict how a chemical structure will absorb light, react with other molecules, or conduct energy.
- **Data Security & Cryptography:** Modern encryption systems rely on the difficulty of solving mathematical problems in large cyclic groups. The Discrete Logarithm Problem within multiplicative groups forms the core security layer for cryptographic handshakes like Diffie-Hellman key exchanges.

---

## 4. Fundamental Properties

Groups follow strict structural identities that prevent algebraic errors during calculation.

### Uniqueness and Cancellation Properties

Let $(G, *)$ be a valid group. The following properties apply universally to all elements within the system:

- **Uniqueness of Identity:** A group contains exactly one unique identity element $e$.
- **Uniqueness of Inverses:** For every element $a \in G$, its corresponding inverse element $a^{-1}$ is completely unique.
- **The Cancellation Law:** If elements match on either side of an operational equation, they can be cancelled out:
  $$a * b = a * c \implies b = c \quad (\text{Left Cancellation})$$
  $$b * a = c * a \implies b = c \quad (\text{Right Cancellation})$$
- **The Socks-and-Shoes Property:** The inverse of a combined product requires reversing the operational sequence:
  $$(a * b)^{-1} = b^{-1} * a^{-1}$$

### Lagrange's Theorem

One of the most foundational theorems in finite group theory establishes a strict divisibility constraint between a group and its subgroups. If $G$ is a finite group and $H$ is a valid subgroup of $G$, then:

$$\frac{|G|}{|H|} = [G : H]$$

$$\text{Order of Subgroup } H \text{ must perfectly divide the Order of Parent Group } G$$

Where $[G : H]$ is the index of $H$ in $G$, representing the total number of unique cosets generated by $H$.

> **Corollary of Lagrange:** The order of any single element $a \in G$ must perfectly divide the overall order of the finite group $G$. As a result, raising any element to the power of the group's order always yields the identity element: $a^{|G|} = e$.

---

## 5. Types & Variations

Groups are classified into distinct functional families based on their generation rules, element counts, and operational symmetries.

### 1. Cyclic Groups

A group is classified as **cyclic** if the entire set can be generated by repeatedly applying the binary operation to a single chosen element $a \in G$, known as the generator. Cyclic groups are always Abelian.

- **Finite Model ($\mathbb{Z}_n$):** The group of integers under addition modulo $n$, where the element $1$ acts as a generator.
- **Infinite Model ($\mathbb{Z}$):** The group of all integers under standard addition, generated by the element $1$.

### 2. Permutation & Symmetric Groups ($S_n$)

A **permutation group** is a group whose elements are bijective re-arrangements of a finite set of objects, operating via function composition. The complete symmetric group $S_n$ contains all possible permutations of $n$ items, and its order is exactly equal to $n!$. According to **Cayley's Theorem**, every finite group is isomorphic to a subgroup of a permutation group.

### 3. Dihedral Groups ($D_n$)

A dihedral group represents the complete set of symmetries of a regular $n$-sided polygon. It contains exactly $2n$ elements, split evenly into:

- $n$ distinct rotational steps around the center point.
- $n$ distinct reflection axes across vertices and edges.

### Comparison Matrix of Core Group Variations

The following table summarizes and contrasts the operational limits of foundational finite group families.

| Group Structure Family          | Conventional Notation |         Group Order ($         |          G           | $)                                                    | Always Abelian (Commutative) | Generative Structural Axis |
| :------------------------------ | :-------------------: | :----------------------------: | :------------------: | :---------------------------------------------------- | ---------------------------- | -------------------------- |
| **Cyclic Addition Modulo**      |    $\mathbb{Z}_n$     |              $n$               |         Yes          | Generated by a single scalar step element             |
| **Symmetric Permutation**       |         $S_n$         |              $n!$              | No _(for $n \ge 3$)_ | Tracks bijective re-arrangements of $n$ elements      |
| **Dihedral Polygon Symmetries** |         $D_n$         |              $2n$              | No _(for $n \ge 3$)_ | Tracks physical rotations and axial reflections       |
| **General Linear Matrices**     |   $\text{GL}(n, F)$   | Infinite _(over $\mathbb{R}$)_ |          No          | Invertible $n \times n$ matrices under multiplication |

---

## 6. How to Solve

Here we explore step-by-step methodologies for checking subgroup criteria, verifying normal configurations, and evaluating cyclic modular elements.

### Strategy A: Proving a Subset Forms a Valid Subgroup

To check if a subset $H$ of a known group $G$ is a valid subgroup, you do not need to test all four group axioms. Instead, you can use the **One-Step Subgroup Test**.

**Example Question:** Prove that the subset $H = 3\mathbb{Z}$ (the set of all integers that are multiples of 3) forms a valid subgroup of the group of integers under addition $(\mathbb{Z}, +)$.

1. **Verify that the subset is non-empty:**
   The number $0$ can be written as $3 \times 0$, so $0 \in H$. The subset is non-empty.

2. **Recall the One-Step Subgroup Test criterion:**
   For a subset $H \subseteq G$ to be a subgroup under addition, you must show that for any two elements $a, b \in H$, the combination $a - b$ is also in $H$.

3. **Select two arbitrary elements from the subset:**
   Let $a, b \in H$. By definition, this means they can be expressed as multiples of 3:
   $$a = 3k, \quad b = 3m \quad (\text{where } k, m \in \mathbb{Z})$$

4. **Perform the operation and check for closure:**
   Evaluate the difference between the two elements:
   $$a - b = 3k - 3m = 3(k - m)$$
   Since $k$ and $m$ are integers, their difference $k - m$ is also an integer (let $n = k - m$). Therefore:
   $$a - b = 3n \quad (\text{where } n \in \mathbb{Z})$$

The result $a - b$ is a multiple of 3, meaning it is contained within $H$. The subset $H = 3\mathbb{Z}$ is a **valid subgroup**.

### Strategy B: Verifying if a Subgroup is Normal

A subgroup is normal if its left and right cosets are identical, which allows you to construct a valid quotient group.

**Example Question:** Let $G$ be an Abelian group. Prove that _every_ valid subgroup $H \le G$ is automatically a normal subgroup ($H \trianglelefteq G$).

1. **Recall the formal definition of a normal subgroup:**
   A subgroup $H$ is normal in $G$ if for every element $g \in G$ and every element $h \in H$, the conjugated element $g * h * g^{-1}$ belongs to $H$:
   $$\forall g \in G, \, \forall h \in H, \quad g * h * g^{-1} \in H$$

2. **Apply the commutative property of the parent Abelian group:**
   Because the parent group $G$ is Abelian, the elements commute, allowing us to swap the order of operations:
   $$g * h * g^{-1} = (g * g^{-1}) * h$$

3. **Simplify the expression using the inverse identity property:**
   Since $g * g^{-1} = e$ (the identity element):
   $$(g * g^{-1}) * h = e * h = h$$

4. **Evaluate the final placement:**
   The simplified expression is simply $h$. Because $h$ was chosen directly from the subgroup $H$, it is guaranteed that $h \in H$.

Therefore, in an Abelian group, every subgroup is automatically **normal**.

### Strategy C: Finding the Subgroup Generated by an Element

To find the cyclic subgroup generated by an element, you repeatedly apply the group operation to that element until it returns to the identity.

**Example Question:** In the group of integers under addition modulo 12 $(\mathbb{Z}_{12}, +_{12})$, find the complete cyclic subgroup generated by the element $a = 4$, denoted as $\langle 4 \rangle$.

1. **Understand the operation rules:**
   The group operation is addition modulo 12. The identity element is $0$.

2. **Repeatedly apply the operation to the generator element:**
   - $4^1 = 4$
   - $4^2 = 4 + 4 = 8$
   - $4^3 = 4 + 4 + 4 = 12 \equiv 0 \pmod{12}$  
     _(The system has reached the identity element, so the cycle closes)._

3. **Assemble the generated set:**
   Collect all the unique values computed during the cycle:
   $$\langle 4 \rangle = \{0, 4, 8\}$$

The cyclic subgroup generated by 4 contains exactly 3 elements. The order of the element 4 is $|4| = 3$, which perfectly divides the parent group order of 12, as predicted by Lagrange's Theorem.

---

## 7. Summary

- **Symmetry via Axioms:** A group is an algebraic structure consisting of a set and a binary operation that satisfies four core axioms: closure, associativity,
