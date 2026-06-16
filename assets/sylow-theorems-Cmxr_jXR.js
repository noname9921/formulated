var e=`# The Sylow Theorems

The Sylow Theorems form the cornerstone of finite group theory, providing a profound bridge between the arithmetic properties of the order of a group and the structural behavior of its subgroups. Named after the Norwegian mathematician Peter Ludwig Sylow, who published these results in 1872, they offer a partial converse to Lagrange's Theorem. While Lagrange's Theorem asserts that the order of a subgroup must divide the order of the group, it does not guarantee the existence of a subgroup of any arbitrary divisor order. The Sylow Theorems guarantee the existence, conjugacy, and number of subgroups of prime-power order.

## Definition

Let $G$ be a finite group of order $|G| = n$. By the fundamental theorem of arithmetic, we can express the order of $G$ as $n = p^k m$, where $p$ is a prime number, $k \\ge 1$, and $p$ does not divide $m$ (written as $p \\nmid m$). A subgroup $P \\le G$ is called a Sylow $p$-subgroup of $G$ if the order of $P$ is exactly $p^k$. 

The Sylow Theorems provide three specific statements concerning these subgroups:

1. **Existence:** For every prime divisor $p$ of $|G|$, there exists at least one Sylow $p$-subgroup of $G$.
2. **Conjugacy:** All Sylow $p$-subgroups of $G$ are conjugate to one another. That is, if $P_1$ and $P_2$ are Sylow $p$-subgroups, then there exists some element $g \\in G$ such that $P_2 = gP_1g^{-1}$. Furthermore, any $p$-subgroup of $G$ is contained within some Sylow $p$-subgroup.
3. **Number:** Let $n_p$ denote the number of Sylow $p$-subgroups of $G$. Then $n_p$ satisfies two conditions: $n_p \\equiv 1 \\pmod p$ and $n_p$ divides $m$ (the index of the Sylow $p$-subgroup in $G$).

## Key Terminology

To fully grasp the theorems, one must be familiar with several fundamental concepts in group theory:

| Term | Definition |
| :--- | :--- |
| **Order of a group** | The number of elements in the set $G$, denoted $|G|$. |
| **Subgroup** | A subset $H \\subseteq G$ that is itself a group under the operation of $G$. |
| **Sylow $p$-subgroup** | A subgroup of order $p^k$, where $p^k$ is the highest power of $p$ dividing $|G|$. |
| **Conjugation** | The action of an element $g$ on a subgroup $H$ defined by $gHg^{-1} = \\{ghg^{-1} \\mid h \\in H\\}$. |
| **Index** | The number of cosets of a subgroup $H$ in $G$, denoted $[G:H] = |G|/|H|$. |
| **Normal Subgroup** | A subgroup $N$ such that $gNg^{-1} = N$ for all $g \\in G$. |
| **$p$-group** | A group where the order of every element is a power of $p$. |

## Purpose

The primary utility of the Sylow Theorems is to classify finite groups and analyze their internal structure. Because the theorem dictates constraints on the number and existence of subgroups, it acts as a filter for possible group structures.

Before the development of these theorems, the study of groups was often restricted to small or highly structured families (such as cyclic or symmetric groups). With the Sylow Theorems, mathematicians gained a systematic method to determine if a group of a certain order must be simple or whether it must contain specific types of normal subgroups. This is particularly vital in the context of the classification of finite simple groups. By proving that $n_p$ must take certain values, one can frequently show that a group of a specific order cannot be simple, as it must contain a unique—and therefore normal—Sylow $p$-subgroup.

## Fundamental Properties

The Sylow Theorems rely heavily on the study of group actions, specifically the action of a group on the set of its subsets or its subgroups. The proof typically employs the concept of the class equation or the action of a $p$-subgroup on the set of Sylow $p$-subgroups by conjugation.

A critical property derived from the third theorem is the uniqueness of the Sylow $p$-subgroup. If $n_p = 1$, then the unique Sylow $p$-subgroup $P$ satisfies $gPg^{-1} = P$ for all $g \\in G$. This implies that $P$ is a normal subgroup of $G$. This result is frequently used in exams and research to prove that a group is not simple. If an order $n$ can be shown to force $n_p = 1$ for some $p$, then any group of order $n$ possesses a normal subgroup, excluding it from being a non-abelian simple group.

Another fundamental property relates to the intersection of Sylow subgroups. While Sylow subgroups of different primes have trivial intersections (by Lagrange's Theorem), Sylow subgroups of the same prime $p$ may have non-trivial intersections. The structure of these intersections provides deep insight into the group's "local" structure at the prime $p$.

## Types & Variations

While the core Sylow Theorems are fixed, variations exist in the context of generalized Sylow theory, such as:

1. **Hall Subgroups:** In the theory of solvable groups, Hall's generalization allows for the existence of subgroups of order $m$ where $\\gcd(m, n/m) = 1$. This extends the existence property to products of prime powers.
2. **Sylow Theorems in Infinite Groups:** While the traditional theorems apply to finite groups, there are generalizations for locally finite groups, where one considers the directed limit of finite Sylow subgroups.
3. **Application to Group Actions:** The theorems are often rephrased in terms of $G$-sets. If $G$ acts on a set $X$, and $p$ divides $|X|$, then the properties of the stabilizers and orbits are constrained by $p$-group actions, leading to the "Fixed Point Congruence": $|X| \\equiv |X^P| \\pmod p$, where $X^P$ is the set of fixed points under the action of a $p$-group $P$.

## How to Solve

To determine properties of a group $G$ using the Sylow Theorems, follow this analytical framework:

1. **Prime Factorization:** Calculate the prime factorization of the group order $|G| = p_1^{k_1} p_2^{k_2} \\cdots p_m^{k_m}$.
2. **Identify Sylow Subgroups:** For each prime $p_i$, the possible number of Sylow $p_i$-subgroups $n_{p_i}$ is given by the system:
   - $n_{p_i} \\equiv 1 \\pmod{p_i}$
   - $n_{p_i} \\mid \\frac{|G|}{p_i^{k_i}}$
3. **Analyze Constraints:** List all candidates for $n_{p_i}$ that satisfy both conditions.
4. **Test for Simplicity:** If you find that for any $p_i$, the only solution is $n_{p_i} = 1$, then the Sylow $p_i$-subgroup is normal. If the group has a normal subgroup other than the identity and itself, it is not simple.
5. **Counting Elements:** In some cases, one must count the total number of distinct elements of order $p$. Since each Sylow $p$-subgroup of order $p^k$ contains a specific number of non-identity elements, if the sum of these elements exceeds the available slots in the group, a contradiction arises. This often forces $n_p$ to be 1 or proves that such a group cannot exist.
6. **Apply the Normalizer Condition:** Recall that $n_p = [G:N_G(P)]$, where $N_G(P)$ is the normalizer of the Sylow subgroup $P$. This provides an additional algebraic constraint on the size of the normalizer.

Example: Consider a group $G$ of order 15.
- Factors: $15 = 3 \\times 5$.
- Sylow 5-subgroups ($n_5$): $n_5 \\equiv 1 \\pmod 5$ and $n_5 \\mid 3$. The only divisor of 3 is 1 and 3. Since $1 \\equiv 1 \\pmod 5$, $n_5 = 1$.
- Sylow 3-subgroups ($n_3$): $n_3 \\equiv 1 \\pmod 3$ and $n_3 \\mid 5$. The only divisor of 5 is 1 and 5. Since $1 \\equiv 1 \\pmod 3$, $n_3 = 1$.
- Since both Sylow subgroups are normal, $G$ is the direct product of these subgroups, meaning $G$ must be cyclic.

## Summary

The Sylow Theorems serve as the primary toolset for the classification of finite groups. By establishing the existence, conjugacy, and count of subgroups of prime-power order, they allow us to decompose the structure of complex groups into manageable components. The constraints provided by the congruence $n_p \\equiv 1 \\pmod p$ and the divisibility $n_p \\mid m$ are powerful enough to force normalcy in many cases, often revealing that groups of certain orders must be cyclic or possess a non-trivial normal subgroup. Mastery of these theorems is essential for any advanced study in algebra, particularly in the study of finite simple groups, extensions, and the structure of $p$-groups.`;export{e as default};