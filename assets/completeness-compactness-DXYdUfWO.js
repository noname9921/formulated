var e=`# Gödel's Completeness and Compactness Theorems

## Definition

Gödel's Completeness Theorem, proven by Kurt Gödel in 1929, establishes a fundamental bridge between the syntactic realm of formal logic and the semantic realm of model theory. In the context of first-order logic, the theorem states that for any set of first-order sentences $\\Sigma$ and any first-order sentence $\\phi$, if $\\Sigma$ semantically entails $\\phi$ (written $\\Sigma \\vDash \\phi$), then $\\Sigma$ syntactically derives $\\phi$ (written $\\Sigma \\vdash \\phi$). In other words, if a statement is true in all models where the premises hold, then there exists a finite formal proof of that statement within the deductive system.

The Compactness Theorem is a profound corollary derived from the Completeness Theorem. It asserts that a set of first-order sentences $\\Sigma$ has a model if and only if every finite subset $\\Sigma_0 \\subseteq \\Sigma$ has a model. This theorem provides a powerful tool for constructing models of infinite sets of axioms by demonstrating that the consistency of finite parts is sufficient to guarantee the existence of a structure satisfying the entire collection.

## Key Terminology

To grasp these theorems, one must distinguish between the syntax of a formal system and the semantics of model theory.

| Term | Definition |
| :--- | :--- |
| First-Order Logic | A formal system consisting of predicates, variables, quantifiers, and logical connectives. |
| Syntax ($\\vdash$) | The deductive apparatus of a system, involving axioms and rules of inference (e.g., Modus Ponens). |
| Semantics ($\\vDash$) | The interpretation of formal symbols in a mathematical structure or domain. |
| Satisfiability | A set of sentences is satisfiable if there exists at least one structure (model) where all sentences are true. |
| Theory | A set of sentences closed under logical consequence. |
| Consistency | A set of sentences is consistent if no contradiction ($\\phi \\land \\neg \\phi$) can be derived from it. |
| Completeness | The property of a logic where every valid formula is provable ($ \\vDash \\phi \\implies \\vdash \\phi $). |
| Compactness | The property where if every finite subset of $\\Sigma$ is satisfiable, then $\\Sigma$ is satisfiable. |

## Purpose

The primary purpose of these theorems is to regulate the relationship between what we can prove and what is true. Before Gödel, mathematicians like Hilbert were preoccupied with the "Entscheidungsproblem" (decision problem) and the hope that formal systems could be shown to be both consistent and complete for all mathematical truths.

Gödel's Completeness Theorem demonstrates that first-order logic is "perfect" in a specific sense: it perfectly captures semantic truth. There is no "hidden" truth in first-order logic that lies beyond the reach of formal deduction. If a formula is a logical consequence of a set of axioms, you are guaranteed to find a path of reasoning that leads to it. 

The Compactness Theorem serves a distinct, pragmatic purpose in model theory. It allows mathematicians to prove the existence of non-standard models. For example, by applying compactness to the theory of arithmetic, one can prove the existence of models containing "infinite" numbers—structures that satisfy all the axioms of Peano arithmetic but include elements greater than any standard integer. Without compactness, proving the existence of such structures would be significantly more difficult, requiring complex construction methods.

## Fundamental Properties

The interplay between completeness and compactness rests on the structure of first-order languages. Unlike higher-order logics, first-order logic possesses a "low-resolution" view of mathematical structures, which is precisely what makes these theorems hold.

1. **The Equivalence of Consistency and Satisfiability:** Gödel's proof essentially relies on the fact that for first-order logic, $\\Sigma \\nvdash \\bot$ (where $\\bot$ is a contradiction) is equivalent to $\\Sigma$ having a model. If a set of axioms is consistent, there is a model for it. This is the "Model Existence Lemma."
2. **Infinite Models:** A crucial property resulting from the Compactness Theorem is that if a theory has arbitrarily large finite models, it must have an infinite model. By adding an infinite sequence of axioms $\\lambda_n := \\exists x_1, \\dots, x_n (\\bigwedge_{i \\neq j} x_i \\neq x_j)$, one can force the domain size to grow indefinitely. Since any finite subset of this union is satisfied by a sufficiently large finite model, the entire set must be satisfied by some model, which necessarily must be infinite.
3. **Löwenheim–Skolem Theorems:** Compactness is a building block for the Upward and Downward Löwenheim–Skolem theorems. These results show that if a first-order theory has an infinite model, it has models of every infinite cardinality. This reveals the "limit" of first-order logic: it cannot uniquely characterize the structure of the real numbers or the natural numbers up to isomorphism.

To visualize the growth properties often discussed in model theory, consider a function that describes the required size of a model relative to the number of axioms, though these are abstract limits.

\`\`\`graph
x^2
\\exp(x)
\`\`\`
The graph above plots $f(x) = x^2$ and $g(x) = e^x$. While these curves represent simple growth, they illustrate the divergence between polynomial requirements and the exponential growth of possibilities in model construction, reflecting why infinite models eventually become unavoidable when considering sets of axioms that demand increasing size.

## Types & Variations

While the basic theorems apply to first-order logic, variations emerge when we alter the logical constraints.

* **Strong Completeness:** This version states that for any set of formulas $\\Sigma$, if $\\Sigma \\vDash \\phi$, then $\\Sigma \\vdash \\phi$. This is stronger than the "weak" completeness which only requires it for empty $\\Sigma$. Gödel’s result is indeed strong.
* **Second-Order Logic:** It is important to note that Gödel's completeness fails for second-order logic. In second-order logic, we quantify over subsets of the domain. Because of this, the semantics become "richer" than what can be captured by a deductive system, leading to the result that second-order logic is fundamentally incomplete.
* **Countable Compactness:** Some contexts discuss restricted versions where the set $\\Sigma$ must be countable. The full version of the Compactness Theorem applies to sets of any cardinality, but its proof typically utilizes the Axiom of Choice (often in the form of the Ultrafilter Lemma or Zorn's Lemma) to handle uncountable sets of axioms.

## How to Solve

In the context of logic, "solving" usually refers to proving that a theory is consistent or finding a model. The process follows a systematic path based on the Henkin construction:

1. **Consistent Expansion:** Start with a consistent set of sentences $\\Sigma$. Extend it to a maximal consistent set $\\Sigma^*$ by adding sentences $\\phi$ or $\\neg \\phi$ such that consistency is maintained.
2. **Witnessing:** Ensure that for every existential statement $\\exists x \\phi(x)$ in $\\Sigma^*$, there is a "witness" constant $c$ such that $\\phi(c)$ is also in $\\Sigma^*$. This prevents the system from asserting existence without providing a specific object.
3. **Term Model Construction:** Define a domain of objects using the terms of the language. Define relations between these objects based on whether the corresponding predicates are in $\\Sigma^*$.
4. **Truth Lemma:** Prove that for any sentence $\\psi$, $\\psi \\in \\Sigma^*$ if and only if $\\psi$ is true in the constructed term model. Since $\\Sigma^* \\subseteq \\Sigma^*$ and it is consistent, we have successfully created a model where all axioms of $\\Sigma$ are satisfied.

If you are faced with a problem regarding the satisfaction of an infinite set $\\Sigma$, the standard approach is:
- **Finite Check:** Test if every finite subset $\\Sigma_0 \\subseteq \\Sigma$ is satisfiable.
- **Invoke Compactness:** If the check holds, invoke the Compactness Theorem to conclude that $\\Sigma$ is globally satisfiable.
- **Non-Standard Construction:** If you need to prove a property about infinite models (like the existence of infinitesimals in non-standard analysis), add axioms that define the property (e.g., $c > n$ for all standard integers $n$) to your theory, verify that any finite collection of these is satisfiable, and conclude the existence of the non-standard element $c$.

## Summary

Gödel's Completeness Theorem and the Compactness Theorem are foundational pillars of modern mathematical logic. Completeness confirms that our deductive systems are robust, ensuring that the syntactic act of proving is fully equivalent to the semantic truth of an assertion in first-order logic. Compactness acts as a powerful analytical tool, allowing for the existence of models for infinite theories and exposing the inherent limitations of first-order logic in pinning down structures like the natural numbers. Together, they dictate the boundaries of what is provable and define the landscape of what is mathematically possible within the framework of formal systems. Understanding these results is essential for any deep engagement with the foundations of mathematics, computer science, and the philosophy of logic.`;export{e as default};