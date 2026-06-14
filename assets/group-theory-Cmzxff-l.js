var e=`# Algebra: Group Theory\r
\r
---\r
\r
## 1. Definition\r
\r
In abstract algebra, **Group Theory** is the study of symmetry. It provides a formal mathematical framework for analyzing systems where elements can be combined according to strict operational laws. A group does not look at what its elements _are_ (such as numbers, geometric rotations, or matrices), but rather at how those elements _behave_ under a given binary operation.\r
\r
Formally, a **group** is an ordered pair $(G, *)$ consisting of a non-empty set $G$ and a binary operation $*: G \\times G \\to G$ that combines any two elements of $G$ to produce another element of $G$. To qualify as a valid mathematical group, the pair must strictly satisfy the following four foundational axioms:\r
\r
### 1. Closure\r
\r
For all elements $a, b \\in G$, the result of the operation $a * b$ must also be contained within the set $G$:\r
$$\\forall a, b \\in G, \\quad a * b \\in G$$\r
\r
### 2. Associativity\r
\r
For all elements $a, b, c \\in G$, the order in which the operations are performed does not affect the final result:\r
$$\\forall a, b, c \\in G, \\quad (a * b) * c = a * (b * c)$$\r
\r
### 3. Identity Element\r
\r
There exists a unique, universal identity element $e \\in G$ such that operating any element $a \\in G$ with $e$ leaves that element completely unchanged:\r
$$\\exists e \\in G \\quad \\text{such that} \\quad \\forall a \\in G, \\quad a * e = e * a = a$$\r
\r
### 4. Inverse Element\r
\r
For every individual element $a \\in G$, there exists a corresponding inverse element $a^{-1} \\in G$ within the set that combines with $a$ to yield the unique identity element $e$:\r
$$\\forall a \\in G, \\quad \\exists a^{-1} \\in G \\quad \\text{such that} \\quad a * a^{-1} = a^{-1} * a = e$$\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze the structural traits and behaviors of groups, the following precise vocabulary definitions are required:\r
\r
- **Order of a Group ($|G|$):** The total number of elements contained within the set $G$. If the set contains infinitely many elements, it is called an infinite group.\r
- **Order of an Element ($|a|$ or $o(a)$):** The smallest positive integer $n$ such that multiplying or combining an element $a$ with itself $n$ times yields the identity element $e$:\r
  $$a^n = \\underbrace{a * a * a * \\dots * a}_{n \\text{ times}} = e$$\r
  If no such positive integer exists, the element is said to have infinite order.\r
- **Abelian Group:** A specialized group where the binary operation is completely commutative, meaning the order of the inputs does not matter: $a * b = b * a$ for all $a, b \\in G$. Non-abelian groups do not preserve this property.\r
- **Subgroup ($H \\le G$):** A subset $H$ of a group $G$ that remains a valid group in its own right when subjected to the same inherited binary operation $*$.\r
- **Coset:** A distinct subset formed by multiplying every element of a subgroup $H$ by a fixed element $g \\in G$.\r
  - **Left Coset:** $gH = \\{g * h \\mid h \\in H\\}$\r
  - **Right Coset:** $Hg = \\{h * g \\mid h \\in H\\}$\r
- **Normal Subgroup ($N \\trianglelefteq G$):** A subgroup $N$ whose left and right cosets are completely identical for every element in the parent group: $gN = Ng$ for all $g \\in G$.\r
- **Group Homomorphism:** A structural mapping function $\\phi: G \\to H$ between two groups that preserves the operation of the domain:\r
  $$\\phi(a *_G b) = \\phi(a) *_H \\phi(b)$$\r
- **Group Isomorphism:** A bijective homomorphism, meaning the mapping is a perfect one-to-one match. Isomorphic groups share the exact same structural behavior, differing only in the names of their elements.\r
\r
---\r
\r
## 3. Purpose\r
\r
Group Theory acts as a language for classifying geometric patterns, finding roots of polynomials, and solving problems in particle physics and digital data security.\r
\r
### Quantifying Abstract Symmetry\r
\r
Symmetry is often viewed as a visual quality, such as a butterfly's wings or a tiled floor. Group theory translates this concept into precise algebra. By treating physical transformations (like rotations and reflections) as elements of a group, mathematicians can analyze the geometric stability of crystals, molecules, and spatial networks.\r
\r
### Determining Polynomial Solvability\r
\r
For centuries, algebraic mathematicians looked for a general formula to solve fifth-degree polynomial equations (quintics), similar to the quadratic formula. By mapping the permutations of polynomial roots to group structures, Évariste Galois developed **Galois Theory**. He proved that because the symmetry groups of higher-degree polynomials lack specific nested subgroups, a general quintic formula cannot be constructed using basic algebraic radicals.\r
\r
### Real-World Quantum and Digital Applications\r
\r
- **Particle Physics & Mechanics:** Subatomic particles (such as quarks and leptons) are classified based on how they behave under rotation and transformation matrix spaces. These operations are governed by continuous Lie groups like $\\text{SU}(3)$.\r
- **Crystallography & Chemistry:** Chemists use point groups to analyze the rotational symmetries of molecular bonds. This helps predict how a chemical structure will absorb light, react with other molecules, or conduct energy.\r
- **Data Security & Cryptography:** Modern encryption systems rely on the difficulty of solving mathematical problems in large cyclic groups. The Discrete Logarithm Problem within multiplicative groups forms the core security layer for cryptographic handshakes like Diffie-Hellman key exchanges.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Groups follow strict structural identities that prevent algebraic errors during calculation.\r
\r
### Uniqueness and Cancellation Properties\r
\r
Let $(G, *)$ be a valid group. The following properties apply universally to all elements within the system:\r
\r
- **Uniqueness of Identity:** A group contains exactly one unique identity element $e$.\r
- **Uniqueness of Inverses:** For every element $a \\in G$, its corresponding inverse element $a^{-1}$ is completely unique.\r
- **The Cancellation Law:** If elements match on either side of an operational equation, they can be cancelled out:\r
  $$a * b = a * c \\implies b = c \\quad (\\text{Left Cancellation})$$\r
  $$b * a = c * a \\implies b = c \\quad (\\text{Right Cancellation})$$\r
- **The Socks-and-Shoes Property:** The inverse of a combined product requires reversing the operational sequence:\r
  $$(a * b)^{-1} = b^{-1} * a^{-1}$$\r
\r
### Lagrange's Theorem\r
\r
One of the most foundational theorems in finite group theory establishes a strict divisibility constraint between a group and its subgroups. If $G$ is a finite group and $H$ is a valid subgroup of $G$, then:\r
\r
$$\\frac{|G|}{|H|} = [G : H]$$\r
\r
$$\\text{Order of Subgroup } H \\text{ must perfectly divide the Order of Parent Group } G$$\r
\r
Where $[G : H]$ is the index of $H$ in $G$, representing the total number of unique cosets generated by $H$.\r
\r
> **Corollary of Lagrange:** The order of any single element $a \\in G$ must perfectly divide the overall order of the finite group $G$. As a result, raising any element to the power of the group's order always yields the identity element: $a^{|G|} = e$.\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Groups are classified into distinct functional families based on their generation rules, element counts, and operational symmetries.\r
\r
### 1. Cyclic Groups\r
\r
A group is classified as **cyclic** if the entire set can be generated by repeatedly applying the binary operation to a single chosen element $a \\in G$, known as the generator. Cyclic groups are always Abelian.\r
\r
- **Finite Model ($\\mathbb{Z}_n$):** The group of integers under addition modulo $n$, where the element $1$ acts as a generator.\r
- **Infinite Model ($\\mathbb{Z}$):** The group of all integers under standard addition, generated by the element $1$.\r
\r
### 2. Permutation & Symmetric Groups ($S_n$)\r
\r
A **permutation group** is a group whose elements are bijective re-arrangements of a finite set of objects, operating via function composition. The complete symmetric group $S_n$ contains all possible permutations of $n$ items, and its order is exactly equal to $n!$. According to **Cayley's Theorem**, every finite group is isomorphic to a subgroup of a permutation group.\r
\r
### 3. Dihedral Groups ($D_n$)\r
\r
A dihedral group represents the complete set of symmetries of a regular $n$-sided polygon. It contains exactly $2n$ elements, split evenly into:\r
\r
- $n$ distinct rotational steps around the center point.\r
- $n$ distinct reflection axes across vertices and edges.\r
\r
### Comparison Matrix of Core Group Variations\r
\r
The following table summarizes and contrasts the operational limits of foundational finite group families.\r
\r
| Group Structure Family          | Conventional Notation |         Group Order ($         |          G           | $)                                                    | Always Abelian (Commutative) | Generative Structural Axis |\r
| :------------------------------ | :-------------------: | :----------------------------: | :------------------: | :---------------------------------------------------- | ---------------------------- | -------------------------- |\r
| **Cyclic Addition Modulo**      |    $\\mathbb{Z}_n$     |              $n$               |         Yes          | Generated by a single scalar step element             |\r
| **Symmetric Permutation**       |         $S_n$         |              $n!$              | No _(for $n \\ge 3$)_ | Tracks bijective re-arrangements of $n$ elements      |\r
| **Dihedral Polygon Symmetries** |         $D_n$         |              $2n$              | No _(for $n \\ge 3$)_ | Tracks physical rotations and axial reflections       |\r
| **General Linear Matrices**     |   $\\text{GL}(n, F)$   | Infinite _(over $\\mathbb{R}$)_ |          No          | Invertible $n \\times n$ matrices under multiplication |\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for checking subgroup criteria, verifying normal configurations, and evaluating cyclic modular elements.\r
\r
### Strategy A: Proving a Subset Forms a Valid Subgroup\r
\r
To check if a subset $H$ of a known group $G$ is a valid subgroup, you do not need to test all four group axioms. Instead, you can use the **One-Step Subgroup Test**.\r
\r
**Example Question:** Prove that the subset $H = 3\\mathbb{Z}$ (the set of all integers that are multiples of 3) forms a valid subgroup of the group of integers under addition $(\\mathbb{Z}, +)$.\r
\r
1. **Verify that the subset is non-empty:**\r
   The number $0$ can be written as $3 \\times 0$, so $0 \\in H$. The subset is non-empty.\r
\r
2. **Recall the One-Step Subgroup Test criterion:**\r
   For a subset $H \\subseteq G$ to be a subgroup under addition, you must show that for any two elements $a, b \\in H$, the combination $a - b$ is also in $H$.\r
\r
3. **Select two arbitrary elements from the subset:**\r
   Let $a, b \\in H$. By definition, this means they can be expressed as multiples of 3:\r
   $$a = 3k, \\quad b = 3m \\quad (\\text{where } k, m \\in \\mathbb{Z})$$\r
\r
4. **Perform the operation and check for closure:**\r
   Evaluate the difference between the two elements:\r
   $$a - b = 3k - 3m = 3(k - m)$$\r
   Since $k$ and $m$ are integers, their difference $k - m$ is also an integer (let $n = k - m$). Therefore:\r
   $$a - b = 3n \\quad (\\text{where } n \\in \\mathbb{Z})$$\r
\r
The result $a - b$ is a multiple of 3, meaning it is contained within $H$. The subset $H = 3\\mathbb{Z}$ is a **valid subgroup**.\r
\r
### Strategy B: Verifying if a Subgroup is Normal\r
\r
A subgroup is normal if its left and right cosets are identical, which allows you to construct a valid quotient group.\r
\r
**Example Question:** Let $G$ be an Abelian group. Prove that _every_ valid subgroup $H \\le G$ is automatically a normal subgroup ($H \\trianglelefteq G$).\r
\r
1. **Recall the formal definition of a normal subgroup:**\r
   A subgroup $H$ is normal in $G$ if for every element $g \\in G$ and every element $h \\in H$, the conjugated element $g * h * g^{-1}$ belongs to $H$:\r
   $$\\forall g \\in G, \\, \\forall h \\in H, \\quad g * h * g^{-1} \\in H$$\r
\r
2. **Apply the commutative property of the parent Abelian group:**\r
   Because the parent group $G$ is Abelian, the elements commute, allowing us to swap the order of operations:\r
   $$g * h * g^{-1} = (g * g^{-1}) * h$$\r
\r
3. **Simplify the expression using the inverse identity property:**\r
   Since $g * g^{-1} = e$ (the identity element):\r
   $$(g * g^{-1}) * h = e * h = h$$\r
\r
4. **Evaluate the final placement:**\r
   The simplified expression is simply $h$. Because $h$ was chosen directly from the subgroup $H$, it is guaranteed that $h \\in H$.\r
\r
Therefore, in an Abelian group, every subgroup is automatically **normal**.\r
\r
### Strategy C: Finding the Subgroup Generated by an Element\r
\r
To find the cyclic subgroup generated by an element, you repeatedly apply the group operation to that element until it returns to the identity.\r
\r
**Example Question:** In the group of integers under addition modulo 12 $(\\mathbb{Z}_{12}, +_{12})$, find the complete cyclic subgroup generated by the element $a = 4$, denoted as $\\langle 4 \\rangle$.\r
\r
1. **Understand the operation rules:**\r
   The group operation is addition modulo 12. The identity element is $0$.\r
\r
2. **Repeatedly apply the operation to the generator element:**\r
   - $4^1 = 4$\r
   - $4^2 = 4 + 4 = 8$\r
   - $4^3 = 4 + 4 + 4 = 12 \\equiv 0 \\pmod{12}$  \r
     _(The system has reached the identity element, so the cycle closes)._\r
\r
3. **Assemble the generated set:**\r
   Collect all the unique values computed during the cycle:\r
   $$\\langle 4 \\rangle = \\{0, 4, 8\\}$$\r
\r
The cyclic subgroup generated by 4 contains exactly 3 elements. The order of the element 4 is $|4| = 3$, which perfectly divides the parent group order of 12, as predicted by Lagrange's Theorem.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Symmetry via Axioms:** A group is an algebraic structure consisting of a set and a binary operation that satisfies four core axioms: closure, associativity,\r
`;export{e as default};