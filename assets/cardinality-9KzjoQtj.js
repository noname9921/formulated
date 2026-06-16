var e=`## Definition

In the foundational framework of set theory, the concept of cardinality provides a way to quantify the size of a set. For finite sets, cardinality corresponds to the natural number representing the count of elements. However, Georg Cantor extended this notion to infinite sets, establishing that the "size" of an infinite set is not necessarily synonymous with its containment properties. Two sets $A$ and $B$ are said to have the same cardinality, or be equinumerous, if there exists a bijection between them. A bijection $f: A \\to B$ is a function that is both injective (one-to-one) and surjective (onto). If such a mapping exists, we denote this relationship as $|A| = |B|$, signifying that the sets share the same "power" or "size" in the Cantorian sense. This definition bypasses the limitations of intuitive counting, allowing mathematicians to compare the magnitude of disparate mathematical structures, such as the set of natural numbers $\\mathbb{N}$ and the set of rational numbers $\\mathbb{Q}$, which both share the same cardinality despite the latter appearing intuitively larger.

## Key Terminology

To navigate the intricacies of set size, one must understand several technical terms that delineate the hierarchy of infinity:

- **Set:** A well-defined collection of distinct objects, considered as an object in its own right.
- **Bijection:** A function $f: A \\to B$ where every element in $B$ is mapped to by exactly one element in $A$.
- **Finite Set:** A set with a cardinality equal to some non-negative integer $n \\in \\mathbb{N}_0$.
- **Infinite Set:** A set that is not finite; it can be put into a bijection with a proper subset of itself.
- **Countable Set:** A set that is either finite or has the same cardinality as the natural numbers $\\mathbb{N}$. The cardinality of such sets is denoted by $\\aleph_0$ (aleph-null).
- **Uncountable Set:** An infinite set that is not countable. It has a cardinality strictly greater than $\\aleph_0$, such as the cardinality of the real numbers, denoted as $c$ or $2^{\\aleph_0}$.
- **Cantor's Theorem:** A theorem stating that for any set $S$, the power set $\\mathcal{P}(S)$ has a strictly greater cardinality than $S$ ($|S| < |\\mathcal{P}(S)|$).
- **Continuum Hypothesis:** The unproven conjecture that there is no set whose cardinality is strictly between that of the integers and the real numbers.

## Purpose

The primary purpose of studying cardinality and equinumerosity is to classify infinite structures rigorously. Without this framework, the comparison of infinities would remain purely speculative. By formalizing the concept, Cantor enabled the development of transfinite arithmetic, which allows for the addition, multiplication, and exponentiation of infinite cardinals. This is not merely an abstract exercise; it is essential in analysis, topology, and the foundations of logic. It clarifies that infinity is not a single, monolithic entity but a hierarchy of increasing sizes. Furthermore, it allows for the resolution of paradoxes—such as Hilbert's Hotel, where a fully occupied hotel with infinitely many rooms can still accommodate additional guests—by demonstrating that adding a finite number of elements to an infinite set of size $\\aleph_0$ does not change its cardinality. This provides the mathematical machinery to handle limits, sequences, and measure theory with precision.

## Fundamental Properties

The relation of equinumerosity exhibits properties that qualify it as an equivalence relation on the class of all sets:

1. **Reflexivity:** For any set $A$, there exists an identity function $id_A: A \\to A$ defined by $f(x) = x$, which is a bijection. Thus, $|A| = |A|$.
2. **Symmetry:** If $|A| = |B|$, then there exists a bijection $f: A \\to B$. The inverse function $f^{-1}: B \\to A$ is also a bijection. Thus, $|B| = |A|$.
3. **Transitivity:** If $|A| = |B|$ and $|B| = |C|$, there exist bijections $f: A \\to B$ and $g: B \\to C$. The composition $g \\circ f: A \\to C$ is also a bijection. Thus, $|A| = |C|$.

Furthermore, the Cantor-Bernstein-Schröder Theorem provides the mechanism for comparing cardinalities when a direct bijection is difficult to construct: If there exist injections $f: A \\to B$ and $g: B \\to A$, then there exists a bijection between $A$ and $B$, implying $|A| = |B|$. This theorem is a cornerstone of cardinal arithmetic, as it allows us to establish equinumerosity by demonstrating mutual containment rather than finding the explicit mapping.

| Property Name | Formal Statement |
| :--- | :--- |
| Reflexivity | $|A| = |A|$ |
| Symmetry | $|A| = |B| \\implies |B| = |A|$ |
| Transitivity | $|A| = |B| \\land |B| = |C| \\implies |A| = |C|$ |
| CBS Theorem | $A \\hookrightarrow B \\land B \\hookrightarrow A \\implies |A| = |B|$ |

## Types & Variations

Cardinalities are generally categorized by the nature of the infinity they describe:

- **Finite Cardinality:** These are the natural numbers $\\{0, 1, 2, ...\\}$. They represent the count of elements in sets like $\\{a, b, c\\}$.
- **Countable Infinity:** Denoted by $\\aleph_0$. This is the cardinality of the natural numbers $\\mathbb{N}$, the integers $\\mathbb{Z}$, and the rational numbers $\\mathbb{Q}$. Despite $\\mathbb{Q}$ seeming more dense, it remains countable because the set of rational numbers can be arranged in a sequence.
- **Uncountable Infinity:** Denoted by $2^{\\aleph_0}$ or $c$ (the cardinality of the continuum). This includes the set of real numbers $\\mathbb{R}$ and complex numbers $\\mathbb{C}$. Cantor’s diagonal argument proved that $\\mathbb{R}$ cannot be put into a bijection with $\\mathbb{N}$.
- **Higher Infinitudes:** Through the power set operation, one can generate an infinite chain of cardinalities: $|S| < |\\mathcal{P}(S)| < |\\mathcal{P}(\\mathcal{P}(S))| < \\dots$, leading to $\\aleph_1, \\aleph_2, \\dots$. This sequence continues into the transfinite, governed by the Zermelo-Fraenkel set theory axioms.

## How to Solve

Determining whether two sets are equinumerous involves a systematic analytical approach. When presented with two sets $A$ and $B$, one should proceed as follows:

1. **Attempt to Construct a Bijection:** Define an explicit function $f: A \\to B$. For example, to show $|\\mathbb{N}| = |\\{2n \\mid n \\in \\mathbb{N}\\}|$, define $f(n) = 2n$. This mapping is clearly injective and surjective.
2. **Apply the Cantor-Bernstein-Schröder Theorem:** If an explicit bijection is complex, construct two injections. For instance, to prove the cardinality of the closed interval $[0, 1]$ is the same as the open interval $(0, 1)$, one can easily find injections from each into the other.
3. **Use the Diagonal Argument:** If you suspect one set is larger (uncountable), attempt to show that any proposed bijection from $\\mathbb{N}$ to that set must fail. By assuming a listing exists and constructing an element not in that list, you disprove equinumerosity.
4. **Invoke Known Equinumerosities:** Utilize standard results, such as the fact that any open interval $(a, b)$ is equinumerous to $\\mathbb{R}$ via the tangent function mapping $f(x) = \\tan(\\pi(x - \\frac{a+b}{2})/(b-a))$.
5. **Analyze Subsets and Power Sets:** If $A \\subset B$, and you can show that $B$ has a subset equinumerous to $\\mathcal{P}(A)$, you have established a strict inequality in cardinality.

This analytical framework serves as the standard methodology for verifying the equivalence of size across infinite sets in formal mathematics.

## Summary

The study of cardinality and equinumerosity represents one of the most profound shifts in mathematical history. By transitioning from the finite counting of objects to the structural analysis of mappings, Cantor redefined our understanding of mathematical existence. The existence of different "levels" of infinity, ranging from the countable $\\aleph_0$ to the uncountable continuum $c$, demonstrates that the universe of sets is far more diverse than the finite domain suggests. The foundational equivalence relation—defined by the existence of a bijection—provides the rigor necessary to perform arithmetic with transfinite quantities. Through the application of properties like the Cantor-Bernstein-Schröder Theorem, mathematicians can navigate the complex relationships between sets, ensuring that even the most abstract infinite structures remain grounded in a formal, logical system. Understanding these concepts is not merely about size; it is about recognizing the internal symmetries and mapping potential inherent in all mathematical sets.`;export{e as default};