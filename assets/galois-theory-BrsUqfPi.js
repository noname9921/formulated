var e=`# Introduction to Galois Theory

Galois theory stands as one of the most profound achievements in the history of mathematics. Named after the French mathematician Évariste Galois, who developed the theory in the early 19th century before his untimely death, it provides a bridge between field theory and group theory. By studying the symmetries of the roots of polynomials, Galois theory reveals why certain algebraic equations cannot be solved by radicals, effectively closing the book on the centuries-old quest to find general formulas for roots of high-degree polynomials.

## Definition

At its core, Galois theory is the study of the correspondence between subfields of a field extension and subgroups of the group of automorphisms of that extension. Given a field $K$ and a polynomial $f(x) \\in K[x]$, there exists a splitting field $E$ that contains all the roots of $f(x)$. The Galois group of $f(x)$, denoted by $\\text{Gal}(E/K)$, is the group of all field automorphisms $\\sigma: E \\to E$ such that $\\sigma(k) = k$ for all $k \\in K$.

Formally, a field extension $E/K$ is a Galois extension if it is both normal (every irreducible polynomial in $K[x]$ that has a root in $E$ splits completely in $E$) and separable (the minimal polynomial of every element in $E$ has distinct roots). The Fundamental Theorem of Galois Theory establishes an inclusion-reversing bijection between the set of intermediate fields $F$ such that $K \\subseteq F \\subseteq E$ and the set of subgroups $H$ of $\\text{Gal}(E/K)$.

## Key Terminology

To navigate the landscape of Galois theory, one must understand several technical concepts that serve as building blocks for the theory:

| Term | Definition |
| :--- | :--- |
| Field Extension | A field $E$ that contains $K$ as a subfield, often denoted $E/K$. |
| Splitting Field | The smallest extension $E$ of $K$ in which a polynomial $f(x)$ factors into linear terms. |
| Automorphism | A bijective mapping from a field to itself that preserves the field operations (addition and multiplication). |
| Galois Group | The group consisting of all automorphisms of $E$ that fix $K$ elementwise. |
| Minimal Polynomial | The unique monic irreducible polynomial in $K[x]$ of smallest degree that has a given element $\\alpha$ as a root. |
| Separable Extension | A field extension where the minimal polynomial of every element has no multiple roots in an algebraic closure. |
| Normal Extension | An extension where every irreducible polynomial in $K[x]$ with a root in $E$ splits into linear factors in $E[x]$. |

## Purpose

The primary motivation behind the development of Galois theory was the "solvability of quintic equations." For centuries, mathematicians sought formulas for roots using radicals (square roots, cube roots, etc.) analogous to the quadratic formula. While formulas were found for degrees 2, 3, and 4, the degree 5 (quintic) case remained elusive.

Galois theory proved that a polynomial is solvable by radicals if and only if its Galois group is a solvable group. Because the symmetric group $S_5$ (the Galois group of a general quintic) is not a solvable group, it is impossible to construct a universal formula involving only radicals for polynomials of degree 5 or higher. Beyond this historical achievement, the theory serves as a powerful framework for classification problems in number theory, algebraic geometry, and cryptography. It allows mathematicians to translate difficult problems about fields into more manageable problems about finite groups.

## Fundamental Properties

The power of the theory resides in the Fundamental Theorem of Galois Theory. If $E/K$ is a finite Galois extension with group $G = \\text{Gal}(E/K)$, then:

1. **Bijection:** There is a one-to-one correspondence between the intermediate fields $F$ ($K \\subseteq F \\subseteq E$) and subgroups $H$ of $G$.
2. **Inclusion-Reversing:** If $F_1 \\subseteq F_2$, then $\\text{Gal}(E/F_2) \\subseteq \\text{Gal}(E/F_1)$.
3. **Normality:** An intermediate field $F$ is a normal extension of $K$ if and only if its corresponding subgroup $H$ is a normal subgroup of $G$. In this case, the Galois group of $F/K$ is isomorphic to the quotient group $G/H$.
4. **Degree Correspondence:** The degree of the extension $[E:F]$ is equal to the order of the subgroup $H$, and $[F:K]$ is equal to the index $[G:H]$.

These properties mean that the internal structure of the group $G$ dictates the structure of the field extension. For instance, the lattice of intermediate fields is exactly the lattice of subgroups turned upside down.

## Types & Variations

Galois theory can be categorized based on the nature of the fields and groups involved:

1. **Finite Galois Theory:** The most common form, dealing with finite-dimensional extensions. This is the realm where the fundamental theorem is most directly applicable.
2. **Infinite Galois Theory:** Deals with infinite algebraic extensions. Here, the Galois group is equipped with the Krull topology, turning it into a profinite group. The fundamental theorem is preserved by focusing only on closed subgroups.
3. **Differential Galois Theory:** An analogue for differential equations. It studies the "Galois group" of a linear differential equation, which is an algebraic group that captures the algebraic relations among solutions.
4. **Arithmetic Galois Theory:** Focuses on the absolute Galois group $\\text{Gal}(\\overline{\\mathbb{Q}}/\\mathbb{Q})$, an object of central interest in modern number theory, particularly regarding the Langlands Program.

## How to Solve

To determine if a polynomial $f(x)$ is solvable by radicals using Galois theory, one follows a systematic analytical process. Note that this is not a computational "formula" in the sense of a quadratic equation, but a structural verification:

**Step 1: Compute the Galois Group**
Identify the roots $\\alpha_1, \\alpha_2, \\dots, \\alpha_n$ of $f(x)$ in its splitting field. Determine the group of permutations of these roots that preserves all algebraic relations over the base field $K$. For a general polynomial of degree $n$, the group is usually the symmetric group $S_n$.

**Step 2: Check for Solvability**
A group $G$ is solvable if it possesses a composition series whose factors are cyclic groups. Specifically, there must exist a chain of subgroups $1 = H_0 \\triangleleft H_1 \\triangleleft \\dots \\triangleleft H_k = G$ such that each $H_{i+1}/H_i$ is abelian. 

**Step 3: Relate to the Abel-Ruffini Theorem**
If $n \\ge 5$, the symmetric group $S_n$ contains the alternating group $A_n$, which is simple and non-abelian for $n \\ge 5$. Since $A_n$ is not abelian, $S_n$ cannot be solvable. Therefore, for a general polynomial of degree 5 or higher, the Galois group is $S_n$, which is not solvable, implying the non-existence of a radical formula.

**Analytical Framework Example:**
Consider $f(x) = x^3 - 2$ over $\\mathbb{Q}$. The roots are $\\sqrt[3]{2}, \\omega\\sqrt[3]{2}, \\omega^2\\sqrt[3]{2}$, where $\\omega = e^{2\\pi i / 3}$. The splitting field is $\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$. The Galois group is $S_3$, which has order 6. The subgroup lattice includes $A_3$ (normal, cyclic of order 3) and three subgroups of order 2 (not normal). Because $S_3$ is solvable, the roots can be expressed in terms of radicals.

## Summary

Galois theory transformed mathematics by shifting the focus from individual elements and formulas to algebraic structures. By associating field extensions with symmetry groups, it provided the definitive proof that quintic equations cannot be solved by radicals, a problem that had stumped mathematicians for generations.

The theory does not stop at polynomials. Its influence permeates modern mathematics, providing the conceptual foundation for class field theory, the study of modular forms, and the classification of algebraic varieties. By mastering the correspondence between subfields and subgroups, one gains a powerful lens through which the rigidity of algebraic equations and the elegance of symmetry become visible. Whether one is investigating the absolute Galois group of the rationals or solving basic extensions in field theory, the principles established by Évariste Galois remain the cornerstone of structural algebra.`;export{e as default};