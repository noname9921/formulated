var e=`# Methods of Proof: Direct, Contradiction, and Contraposition

## Definition

In formal logic and mathematics, a method of proof is a structured sequence of logical deductions starting from a set of known axioms, definitions, and previously established theorems to arrive at the truth value of a specific proposition. A mathematical proof acts as a rigorous verification process, transforming a conjecture into a theorem.

The three foundational methods—Direct Proof, Proof by Contradiction, and Proof by Contraposition—form the bedrock of deductive reasoning. 

A direct proof proceeds by logical progression from the hypothesis $P$ to the conclusion $Q$. It asserts that if $P$ is true, then $Q$ must follow. 

A proof by contraposition relies on the logical equivalence between a conditional statement $P \\implies Q$ and its contrapositive $\\neg Q \\implies \\neg P$. By proving that the negation of the conclusion implies the negation of the hypothesis, we establish the original implication.

A proof by contradiction, or *reductio ad absurdum*, operates by assuming the negation of the proposition ($\\neg P$) is true and demonstrating that this assumption leads to a logical impossibility—a contradiction (e.g., $R \\land \\neg R$). If the negation leads to a falsehood, the original proposition must be true.

## Key Terminology

To navigate formal proofs, one must master the following terminology:

| Term | Definition |
| :--- | :--- |
| Axiom | A starting premise accepted as true without proof. |
| Lemma | A preliminary proposition used as a stepping stone to a larger theorem. |
| Corollary | A proposition that follows directly from a previously proven theorem. |
| Antecedent | The "if" part of a conditional statement ($P$). |
| Consequent | The "then" part of a conditional statement ($Q$). |
| Logical Equivalence | Two statements are equivalent if they have the same truth values in all cases. |
| Tautology | A statement that is true under every possible interpretation. |
| Contradiction | A statement that is false under every possible interpretation. |

## Purpose

The primary objective of these methods is to ensure the absolute certainty of mathematical statements. Unlike empirical sciences, which rely on observation and induction (where findings are always subject to potential revision), mathematics requires deductive certainty.

Direct proof provides clarity and explicitness, serving as the most natural method for verifying constructive statements. Proof by contraposition is essential when direct approaches are algebraically obscured or computationally difficult. Proof by contradiction is perhaps the most powerful tool in the mathematician’s arsenal, allowing for proofs of existence (e.g., showing that a number cannot be rational) where a direct construction of the object might be impossible or nonexistent.

These methods are indispensable in fields ranging from computer science—where they ensure the correctness of algorithms and the security of cryptographic protocols—to theoretical physics, where they establish the constraints of natural law.

## Fundamental Properties

The validity of these proofs rests upon the laws of propositional logic. 

**Direct Proof:**
Based on the Law of Detachment (Modus Ponens):
$((P \\implies Q) \\land P) \\implies Q$

**Proof by Contraposition:**
Based on the Law of Contraposition:
$(P \\implies Q) \\equiv (\\neg Q \\implies \\neg P)$

**Proof by Contradiction:**
Based on the Law of Negation:
$\\neg (\\neg P) \\equiv P$
If we assume $P$ is false ($\\neg P$) and show that $\\neg P \\implies (R \\land \\neg R)$, then since $(R \\land \\neg R)$ is a contradiction, the assumption $\\neg P$ must be false. Thus, $P$ is true.

## Types & Variations

### 1. Direct Proof
This method is used primarily for implications of the form $P \\implies Q$. One assumes $P$ is true, then applies algebraic manipulation, definitions, and theorems to show $Q$ is true.
Example: If $n$ is an even integer, then $n^2$ is even.
Let $n = 2k$ for some integer $k$. Then $n^2 = (2k)^2 = 4k^2 = 2(2k^2)$. Since $2k^2$ is an integer, $n^2$ is even.

### 2. Contraposition
This method is used when the statement $\\neg Q \\implies \\neg P$ is simpler to evaluate than $P \\implies Q$.
Example: If $n^2$ is even, then $n$ is even.
Contrapositive: If $n$ is odd, then $n^2$ is odd.
If $n = 2k + 1$, then $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$. This is the form $2m + 1$, which is odd.

### 3. Contradiction
This is often used for non-implication statements or statements regarding the non-existence of objects.
Example: Prove that $\\sqrt{2}$ is irrational.
Assume $\\sqrt{2} = p/q$ in lowest terms. Then $2 = p^2/q^2$, implying $p^2 = 2q^2$. Thus $p$ is even, $p=2k$. Then $4k^2 = 2q^2$, so $q^2 = 2k^2$, meaning $q$ is also even. This contradicts the assumption that $p/q$ was in lowest terms.

## How to Solve

To determine which method to apply, follow this heuristic framework:

1. **Analyze the Goal:** Is the statement an implication ($P \\implies Q$), or is it an existence/universal assertion?
2. **Attempt Direct Proof:** Start with the hypothesis. Does it naturally transform into the conclusion using standard algebra? If yes, stop here.
3. **Check for Complexity:** If the direct approach introduces square roots, inequalities that are hard to bound, or complicated modular arithmetic, consider the contrapositive.
4. **Assume the Opposite:** If the statement is about non-existence (e.g., "there is no integer $x$ such that...") or if you are stuck, perform a proof by contradiction. Assume the negation is true.
5. **Hunt for the Contradiction:** Look for a violation of a definition (e.g., "a fraction in lowest terms cannot share a factor of 2"), a violation of an axiom, or an impossible state (e.g., $0=1$).

### Mathematical Intuition and Growth
In many cases, the choice between these methods depends on how the variables behave. Consider the behavior of functions. The graph below plots $f(x) = x^2 - 2$ and $g(x) = 0$. The roots of $f(x)$ are where $f(x) = g(x)$.

\`\`\`graph
x^2 - 2
0
\`\`\`

The proof that $\\sqrt{2}$ is irrational, as shown in the contradiction example, essentially relies on the fact that no rational number $x$ can satisfy the equality $x^2 - 2 = 0$. By assuming there exists such a rational $x = p/q$, we lead to a contradiction in the number theory properties of $p$ and $q$.

## Summary

The selection of a proof method is as much an art as it is a science. Direct proof serves as the primary standard for clarity and logical flow. Contraposition provides a path forward when the direct implication is obstructed by "not" conditions or difficult inequalities. Contradiction provides a fallback for the most stubborn problems, utilizing the principle that any assumption leading to an impossibility must be false.

While these three methods cover the majority of standard mathematical inquiry, they are complemented by other techniques such as mathematical induction (used for statements involving natural numbers) and combinatorial proofs (used for counting arguments). Mastery of direct, contrapositive, and contradiction-based reasoning is not merely a technical skill but a foundational competence for anyone engaging in rigorous logical analysis. By internalizing these structures, a practitioner can decompose complex conjectures into manageable, verifiable sequences, ensuring that every step taken is bolstered by the immutable laws of logic.`;export{e as default};