var e=`# The Axiom of Completeness and Supremum Property

The Axiom of Completeness, also known as the Least Upper Bound Property, serves as the cornerstone of real analysis. While the rational numbers $\\mathbb{Q}$ satisfy most field axioms—such as associativity, commutativity, and distributivity—they possess a fundamental structural "defect": they contain "holes." The real number system $\\mathbb{R}$ is constructed precisely to fill these gaps. The Axiom of Completeness is the bridge that distinguishes the real line from the rational line, enabling the rigorous development of calculus, including the existence of limits, the convergence of sequences, and the Intermediate Value Theorem.

## Definition

Let $S$ be a non-empty subset of $\\mathbb{R}$. We say $S$ is bounded above if there exists some real number $M$ such that $s \\leq M$ for all $s \\in S$. Such an $M$ is called an upper bound for $S$.

The Axiom of Completeness states: If $S$ is a non-empty subset of $\\mathbb{R}$ that is bounded above, then $S$ has a least upper bound in $\\mathbb{R}$.

The least upper bound is formally known as the supremum of $S$, denoted by $\\sup S$. A number $L = \\sup S$ must satisfy two conditions:
1. $L$ is an upper bound of $S$: For all $s \\in S$, $s \\leq L$.
2. $L$ is the least of all upper bounds: If $M$ is any upper bound of $S$, then $L \\leq M$. Alternatively, for every $\\epsilon > 0$, there exists an element $s \\in S$ such that $s > L - \\epsilon$.

This axiom essentially asserts that there are no "gaps" in the real number system that could prevent a set of numbers from reaching its "peak."

## Key Terminology

To navigate the intricacies of completeness, one must distinguish between various related concepts:

* **Upper Bound:** A value $M$ such that $x \\leq M$ for all $x \\in S$.
* **Lower Bound:** A value $m$ such that $x \\geq m$ for all $x \\in S$.
* **Supremum ($\\sup S$):** The least upper bound. It is the smallest value that is greater than or equal to every element in $S$. Note that the supremum does not necessarily belong to $S$.
* **Infimum ($\\inf S$):** The greatest lower bound. It is the largest value that is less than or equal to every element in $S$.
* **Bounded Set:** A set is bounded if it is both bounded above and bounded below.
* **Maximum:** An element $m \\in S$ such that $x \\leq m$ for all $x \\in S$. Every maximum is a supremum, but a supremum is not always a maximum (e.g., in the interval $(0, 1)$, the supremum is $1$, but there is no maximum).

## Purpose

The primary utility of the Axiom of Completeness is to guarantee that processes of "limiting" converge to real numbers. Without this axiom, we could define a sequence of rational numbers that "should" converge to $\\sqrt{2}$, yet because $\\sqrt{2} \\notin \\mathbb{Q}$, the limit would not exist within the field of rational numbers.

Consider the set $A = \\{x \\in \\mathbb{Q} : x^2 < 2\\}$. This set is bounded above by $2$ and by $1.5$. However, it has no supremum in $\\mathbb{Q}$. If we assumed $\\sup A = q$, then $q$ would have to be $\\sqrt{2}$, which is irrational. The Axiom of Completeness forces the existence of $\\mathbb{R}$, ensuring that every Cauchy sequence in the real numbers converges to a point in the real numbers. This property is known as Dedekind completeness.

## Fundamental Properties

The supremum and infimum behave according to specific algebraic and logical laws:

1. **Uniqueness:** If a set $S$ has a supremum, that supremum is unique. This follows directly from the definition; if there were two least upper bounds, $L_1$ and $L_2$, then $L_1 \\leq L_2$ and $L_2 \\leq L_1$, implying $L_1 = L_2$.
2. **Monotonicity:** If $A \\subseteq B$ and both are bounded above, then $\\sup A \\leq \\sup B$.
3. **Additive Property:** If $S$ is bounded above, then for any $c \\in \\mathbb{R}$, $\\sup(S + c) = \\sup(S) + c$.
4. **Archimedean Property:** This is a consequence of the Axiom of Completeness. It states that for any $x \\in \\mathbb{R}$, there exists an integer $n$ such that $n > x$. This effectively means that real numbers do not have "infinitely large" values that escape the counting numbers.
5. **Density of Rationals:** Between any two distinct real numbers $x$ and $y$, there exists a rational number $q$ such that $x < q < y$. This is proven by applying the Archimedean property and the supremum property.

## Types & Variations

We categorize sets based on their bounds to understand how the completeness axiom applies:

| Set Type | Definition | Supremum Status |
| :--- | :--- | :--- |
| Empty Set | $S = \\emptyset$ | Undefined or $-\\infty$ |
| Unbounded Above | For all $M$, $\\exists s \\in S$ s.t. $s > M$ | $+\\infty$ |
| Bounded Above | $\\exists M$ s.t. $\\forall s \\in S, s \\leq M$ | Exists in $\\mathbb{R}$ |
| Finite Set | Contains a finite number of elements | $\\max(S)$ is the supremum |
| Closed Interval $[a, b]$ | $\\{x \\in \\mathbb{R} : a \\leq x \\leq b\\}$ | $b$ (which is in the set) |
| Open Interval $(a, b)$ | $\\{x \\in \\mathbb{R} : a < x < b\\}$ | $b$ (which is not in the set) |

The distinction between a maximum and a supremum is critical in optimization problems. In calculus, the Extreme Value Theorem relies on the completeness of $\\mathbb{R}$ to guarantee that a continuous function on a closed, bounded interval attains its maximum and minimum.

## How to Solve

Problems involving the supremum usually require proving that a candidate value $L$ is indeed the least upper bound. Follow this two-step verification method:

1. **Verify Upper Bound:** Show that for all $x \\in S$, $x \\leq L$.
   - Often done via algebraic manipulation or contradiction.
2. **Verify Leastness:** Show that for any $\\epsilon > 0$, there exists at least one $x \\in S$ such that $x > L - \\epsilon$.
   - This prevents any value smaller than $L$ from being an upper bound.

**Example Problem:** Find the supremum of $S = \\{1 - \\frac{1}{n} : n \\in \\mathbb{N}\\}$.
- Step 1: Observe that for any $n \\geq 1$, $\\frac{1}{n} > 0$, therefore $1 - \\frac{1}{n} < 1$. Thus, $1$ is an upper bound.
- Step 2: Let $\\epsilon > 0$. We need to find $n$ such that $1 - \\frac{1}{n} > 1 - \\epsilon$.
- Step 3: Simplify: $-\\frac{1}{n} > -\\epsilon$, which leads to $\\frac{1}{n} < \\epsilon$, or $n > \\frac{1}{\\epsilon}$.
- Step 4: By the Archimedean property, such an $n$ always exists for any $\\epsilon$. Therefore, $1$ is the least upper bound.

For visualizing the supremum of functions, consider the graph of $f(x) = 1 - e^{-x}$. As $x \\to \\infty$, the function values approach $1$, but never reach it. The set of values for this function on $[0, \\infty)$ is $[0, 1)$, and its supremum is $1$.

\`\`\`graph
1 - \\exp(-x)
\`\`\`
The graph above plots $f(x) = 1 - e^{-x}$ for $x \\geq 0$. As $x$ increases, the curve asymptotically approaches the horizontal line $y = 1$. The supremum of the range of this function is $1$, despite the function never attaining this value.

## Summary

The Axiom of Completeness is the defining feature of the real number system $\\mathbb{R}$. It asserts that the real line is "packed" with numbers such that no bounded-above set is left hanging without a boundary. Without this property, we would be unable to define the derivative, the integral, or even the basic concept of a continuous function. The supremum property serves as a bridge between the discrete nature of counting and the continuous nature of the real world, providing the formal guarantee that our mathematical models for motion, growth, and change are robust and mathematically sound. Understanding the supremum is not merely an academic exercise; it is the fundamental tool for handling convergence in analysis and is the key to differentiating $\\mathbb{R}$ from $\\mathbb{Q}$ definitively.`;export{e as default};