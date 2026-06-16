var e=`# Introduction to Galois Theory

Galois Theory represents one of the most profound intersections in mathematics, linking the structure of algebraic fields with the symmetry of roots of polynomials. Developed by the brilliant yet short-lived Évariste Galois in the early 19th century, this theory provides a systematic framework for understanding why certain polynomial equations cannot be solved using radicals—the square roots, cube roots, and other $n$-th roots we learn in elementary algebra.

## Definition

At its core, Galois Theory is the study of the relationship between field extensions and their corresponding groups of automorphisms. Let $F$ be a field (such as the rational numbers $\\mathbb{Q}$) and let $K$ be an extension field of $F$ (denoted $K/F$). We are primarily interested in the set of field automorphisms $\\sigma: K \\to K$ such that $\\sigma(a) = a$ for all $a \\in F$. This set forms a group under composition, known as the Galois group of $K$ over $F$, denoted $\\text{Gal}(K/F)$.

A field extension $K/F$ is called a Galois extension if it is both normal (the splitting field of a set of polynomials in $F[x]$) and separable (the minimal polynomial of every element in $K$ has distinct roots). The Fundamental Theorem of Galois Theory establishes a bijective correspondence—a Galois correspondence—between the subfields of $K$ containing $F$ and the subgroups of $\\text{Gal}(K/F)$. Specifically, the structure of the extension $K/F$ is perfectly mirrored by the algebraic structure of the symmetry group of the roots of the defining polynomial.

## Key Terminology

To navigate Galois Theory, one must master several specific algebraic concepts:

| Term | Definition |
| :--- | :--- |
| Field Extension | A field $K$ containing $F$ as a subfield. |
| Splitting Field | The smallest extension field $K$ in which a polynomial $f(x) \\in F[x]$ factors into linear terms. |
| Automorphism | A bijective mapping from a field to itself that preserves addition and multiplication. |
| Galois Group | The group $\\text{Gal}(K/F)$ consisting of automorphisms of $K$ that fix $F$ pointwise. |
| Minimal Polynomial | The unique irreducible monic polynomial in $F[x]$ of smallest degree that has a given element as a root. |
| Separable Extension | An extension where the minimal polynomial of every element has no multiple roots in an algebraic closure. |
| Normal Extension | An extension where every irreducible polynomial in $F[x]$ that has one root in $K$ splits completely into linear factors in $K[x]$. |
| Radical Extension | A field extension obtained by adjoining the $n$-th roots of elements of the base field. |

## Purpose

The primary historical and theoretical motivation for Galois Theory was the problem of solvability by radicals. Since the Renaissance, mathematicians had formulas for quadratic, cubic, and quartic equations. However, the general quintic equation ($ax^5 + bx^4 + cx^3 + dx^2 + ex + f = 0$) resisted all attempts at a similar radical formula.

Galois Theory solves this by showing that a polynomial is solvable by radicals if and only if its Galois group is a "solvable group." A group is solvable if it possesses a composition series whose factors are all abelian. Because the symmetric group $S_n$ is not solvable for $n \\ge 5$, there is no general formula using only field operations and radicals to express the roots of a fifth-degree polynomial.

Beyond this, the theory serves as a bridge between geometry (symmetries) and algebra (roots). It allows us to translate difficult questions about fields into manageable questions about finite groups, effectively reducing abstract algebra to combinatorial and group-theoretic problems.

## Fundamental Properties

The Fundamental Theorem of Galois Theory can be summarized by the following core assertions for a finite Galois extension $K/F$ with group $G = \\text{Gal}(K/F)$:

1. **Correspondence:** There is an inclusion-reversing bijection between subfields $E$ (where $F \\subseteq E \\subseteq K$) and subgroups $H \\le G$.
2. **Fixed Fields:** The field $E$ corresponds to the subgroup of elements in $G$ that fix $E$: $H = \\text{Gal}(K/E)$. Conversely, the subgroup $H$ corresponds to the field $E = K^H = \\{x \\in K \\mid \\sigma(x) = x, \\forall \\sigma \\in H\\}$.
3. **Degree Relationship:** The degree of the extension $[K:E]$ equals the order of the subgroup $|H|$, and $[E:F]$ equals the index $[G:H]$.
4. **Normality:** A subfield $E$ is a normal extension of $F$ if and only if the corresponding subgroup $H$ is a normal subgroup of $G$. In this case, $\\text{Gal}(E/F) \\cong G/H$.

These properties allow mathematicians to decompose complex extensions into a sequence of simpler extensions, which is the mechanism used to prove the Abel-Ruffini Theorem.

## Types & Variations

Galois theory can be classified by the nature of the fields involved and the properties of the Galois groups:

1. **Cyclotomic Extensions:** These are extensions formed by adjoining roots of unity ($\\omega = e^{2\\pi i / n}$). The Galois group of $\\mathbb{Q}(\\omega)/\\mathbb{Q}$ is isomorphic to the multiplicative group $(\\mathbb{Z}/n\\mathbb{Z})^\\times$, which is abelian. This is a foundational example of how arithmetic properties of integers dictate field structure.
2. **Infinite Galois Theory:** When the extension is not finite, we use the Krull topology to define a profinite Galois group. This is essential in algebraic number theory, specifically in the study of the absolute Galois group of $\\mathbb{Q}$, $\\text{Gal}(\\bar{\\mathbb{Q}}/\\mathbb{Q})$, which contains the entirety of algebraic number theory.
3. **Differential Galois Theory:** An analogue of standard Galois theory applied to linear differential equations (Picard-Vessiot theory). It determines if a differential equation has solutions expressible in terms of elementary functions and integrals.
4. **Inverse Galois Theory:** A major open area of research asking whether every finite group can be realized as a Galois group over $\\mathbb{Q}$. While proven for many classes of groups (such as all solvable groups), the general case remains unresolved.

## How to Solve

While "solving" a Galois problem implies proof rather than calculation, the systematic procedure for analyzing the Galois group of a polynomial $f(x) \\in F[x]$ generally follows these steps:

1. **Determine the Splitting Field:** Find the extension $K$ obtained by adjoining all roots $\\{\\alpha_1, \\alpha_2, \\dots, \\alpha_n\\}$ of $f(x)$ to $F$. The field is $K = F(\\alpha_1, \\dots, \\alpha_n)$.
2. **Calculate the Degree:** Compute $[K:F]$. If the polynomial is irreducible, this is often related to the number of permutations of the roots that preserve the algebraic relations between them.
3. **Identify Automorphisms:** Determine the permutations of the roots that extend to field automorphisms. For a polynomial of degree $n$, the Galois group is always isomorphic to a subgroup of $S_n$ (the symmetric group on $n$ symbols).
4. **Construct the Subgroup Lattice:** Use the correspondence theorem to list all subgroups of the Galois group. Match these to subfields of $K$.
5. **Check Solvability:** To determine if the polynomial is solvable by radicals, test if the Galois group is a solvable group. This is done by verifying if the group has a chain of normal subgroups such that every quotient is abelian.

Consider the polynomial $x^3 - 2$. The roots are $\\sqrt[3]{2}$, $\\omega\\sqrt[3]{2}$, and $\\omega^2\\sqrt[3]{2}$, where $\\omega = e^{2\\pi i / 3}$. The splitting field is $\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$. The Galois group acts on these roots. One automorphism $\\sigma$ might send $\\sqrt[3]{2} \\to \\omega\\sqrt[3]{2}$, while another $\\tau$ might correspond to complex conjugation ($\\omega \\to \\omega^2$). The resulting group is $S_3$ (the dihedral group of order 6), which is solvable, consistent with the fact that cube roots exist for this equation.

## Summary

Galois Theory provides the definitive answer to the limits of algebraic solution methods. By mapping the messy landscape of field extensions to the structured domain of finite groups, it transforms unsolvable equations into solvable group-theoretic tasks. 

Beyond the quintic equation, the theory's impact is vast. It explains the impossibility of classical geometric construction problems—such as trisecting an angle or doubling a cube—by showing that these operations correspond to field extensions of degree 3, which cannot be achieved by repeated square root extractions (degree 2 extensions). It remains the bedrock of modern arithmetic geometry, providing the tools necessary to study the deep symmetries of algebraic numbers and the structural integrity of fields themselves. Through the lens of Galois, mathematics reveals that the unsolvability of certain equations is not a failure of technique, but a profound reflection of the underlying symmetry of the number system.`;export{e as default};