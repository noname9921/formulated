var e=`# Gödel's Completeness and Compactness Theorems

## Definition

Gödel's Completeness Theorem, proven by Kurt Gödel in 1929, establishes a fundamental bridge between the syntactic and semantic realms of first-order logic. It states that for any set of first-order formulas $\\Sigma$ and any formula $\\phi$, if $\\Sigma \\models \\phi$ (meaning $\\phi$ is semantically entailed by $\\Sigma$), then $\\Sigma \\vdash \\phi$ (meaning $\\phi$ is syntactically provable from $\\Sigma$). In other words, every logically valid statement that holds in all possible models of a theory is reachable through a finite, formal deductive process.

The Compactness Theorem is a profound corollary of the Completeness Theorem. It asserts that a set of first-order sentences $\\Sigma$ has a model if and only if every finite subset $\\Sigma_0 \\subseteq \\Sigma$ has a model. This result provides a powerful tool for proving the existence of structures that satisfy specific properties, even when those structures are infinite or possess non-standard elements. Together, these theorems provide the foundation for model theory, clarifying the relationship between formal languages and mathematical structures.

## Key Terminology

To understand these theorems, we must distinguish between the syntactic machinery of proof and the semantic reality of truth.

- **First-Order Logic (FOL):** A formal system that uses variables, predicates, quantifiers ($\\forall, \\exists$), and logical connectives.
- **Syntactic Consequence ($\\vdash$):** A relationship where $\\Sigma \\vdash \\phi$ indicates there exists a finite formal derivation of $\\phi$ starting from the axioms in $\\Sigma$ using specified inference rules (such as Modus Ponens).
- **Semantic Consequence ($\\models$):** A relationship where $\\Sigma \\models \\phi$ indicates that in every model (structure) where all sentences in $\\Sigma$ are true, $\\phi$ is also true.
- **Consistency:** A set of formulas $\\Sigma$ is consistent if there is no formula $\\phi$ such that $\\Sigma \\vdash \\phi$ and $\\Sigma \\vdash \\neg \\phi$.
- **Satisfiability:** A set of formulas $\\Sigma$ is satisfiable if there exists at least one model $\\mathcal{M}$ in which every formula in $\\Sigma$ is true.
- **Model:** A structure $\\mathcal{M}$ consisting of a domain $D$ and an interpretation function that assigns values to constants, functions, and predicates, such that the sentences in a theory are satisfied.

## Purpose

The primary purpose of the Completeness Theorem is to validate the formal deductive approach to mathematics. Without completeness, there would exist truths about structures that could never be captured by a formal axiomatic system. Gödel proved that our "proof-calculus" is perfectly calibrated to capture the full scope of "logical truth."

The Compactness Theorem serves a different, more constructive purpose. It is often used to demonstrate the existence of "non-standard" models. For example, if we wish to describe the natural numbers but want to add an element that is greater than every standard natural number $n$, we can define a set of sentences stating that an element $c > 0, c > 1, c > 2, \\dots$ for all $n$. Every finite subset of this theory is satisfiable by the standard natural numbers (just pick a large enough $N$ to satisfy the finite constraints). By Compactness, the entire infinite set is satisfiable, implying the existence of an "infinite" number $c$. This illustrates how these theorems move logic from a static rulebook to a generative engine for mathematical discovery.

## Fundamental Properties

The interplay between these theorems is best summarized by several key properties that characterize first-order logic:

1. **Finite Character of Proof:** Since proofs are finite sequences of strings, the set of provable statements is recursively enumerable. The Completeness Theorem ensures this set coincides with the set of logical consequences.
2. **Downward and Upward Löwenheim-Skolem Properties:** Compactness allows us to infer the existence of models of arbitrary cardinality. If a theory has an infinite model, it has models of every infinite cardinality.
3. **The Relationship to Incompleteness:** It is vital to distinguish the Completeness Theorem (1929) from the Incompleteness Theorems (1931). While Completeness states that FOL can capture all logical consequences of an axiom set, Incompleteness states that for powerful systems like Peano Arithmetic, there exist true statements that cannot be proven *within that specific system*. Completeness applies to the logic itself; Incompleteness applies to the specific theories we build inside it.

The following table summarizes the key properties and their logical implications:

| Property | Description | Logical Significance |
| :--- | :--- | :--- |
| **Soundness** | If $\\Sigma \\vdash \\phi$, then $\\Sigma \\models \\phi$ | Prevents deriving false statements |
| **Completeness** | If $\\Sigma \\models \\phi$, then $\\Sigma \\vdash \\phi$ | Ensures formal power equals semantic truth |
| **Compactness** | Satisfiability of finite subsets implies global satisfiability | Used to construct non-standard models |
| **Decidability** | FOL is undecidable, but semi-decidable | We can list all truths but cannot always verify a falsehood |

## Types & Variations

While the basic theorems apply to standard first-order logic, variations exist based on the language constraints:

- **Strong vs. Weak Completeness:** Strong completeness states that $\\Sigma \\models \\phi$ implies $\\Sigma \\vdash \\phi$ for any set $\\Sigma$. Weak completeness usually refers to the case where $\\Sigma$ is empty (i.e., every valid formula is a theorem).
- **Countable Compactness:** Some versions of compactness are restricted to countable sets of sentences. The full version of the theorem typically relies on the Axiom of Choice (or Zorn's Lemma) to construct a model from a maximal consistent set of formulas.
- **Completeness in Other Logics:** Second-order logic, which allows quantification over predicates rather than just individuals, is famously incomplete. There is no proof system that can capture all the semantic truths of second-order logic because the semantics of second-order quantifiers are too "rich" to be pinned down by finite syntax.

## How to Solve

Problems involving these theorems generally fall into three categories: proving a theory is consistent, demonstrating the existence of a model, or using compactness to show that a property is not "first-order expressible."

**Strategy for demonstrating non-expressibility via Compactness:**
Suppose we want to prove that "finiteness" is not a first-order property.
1. Assume there exists a set of sentences $\\Sigma$ such that $\\mathcal{M} \\models \\Sigma$ if and only if the domain of $\\mathcal{M}$ is finite.
2. Extend the language by adding an infinite set of constants $\\{c_1, c_2, c_3, \\dots\\}$.
3. Define a new theory $\\Sigma' = \\Sigma \\cup \\{c_i \\neq c_j \\mid i \\neq j\\}$.
4. Any finite subset of $\\Sigma'$ uses only a finite number of constants, which can be satisfied by a finite model.
5. By the Compactness Theorem, $\\Sigma'$ must have a model.
6. This model must be infinite because it contains an infinite number of distinct constants.
7. This contradicts the assumption that $\\Sigma$ only has finite models. Thus, "finiteness" is not first-order expressible.

**Visualizing growth properties:**
To understand how these systems interact, we often examine the growth of logical complexity or the behavior of sequences defined within these structures. The graph below plots $f(x) = x^2$ and $g(x) = x^3$, illustrating how different interpretations in models can lead to divergence.

\`\`\`graph
x^2
x^3
\`\`\`

The graph above plots the functions $f(x) = x^2$ and $g(x) = x^3$. These polynomial behaviors represent the types of relationships that first-order theories must manage when defining arithmetic structures. In non-standard models of arithmetic, the "growth" of integers is constrained by the same first-order axioms, yet the underlying structure allows for the presence of elements that behave as if they are "at infinity."

## Summary

Gödel’s Completeness Theorem stands as the pillar of formal logic, demonstrating that the syntactic derivation of truths is exactly as powerful as the semantic exploration of models. It ensures that the symbolic manipulation of logic corresponds perfectly to the behavior of mathematical structures. The Compactness Theorem extends this utility, proving that if a theory is locally consistent (every finite part is satisfiable), it is globally consistent. This allows mathematicians to construct models with specific, often counter-intuitive properties by using finite approximations. Together, these theorems define the boundaries and the potential of first-order logic, serving as the essential toolkit for any rigorous inquiry into the nature of mathematical truth.`;export{e as default};