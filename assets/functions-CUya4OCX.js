var e=`# Functions: Injection, Surjection, and Bijection

## Definition

In the formal language of mathematics, a function $f$ from a set $A$ to a set $B$, denoted $f: A \\to B$, is a rule that assigns to each element $x \\in A$ exactly one element $f(x) \\in B$. The set $A$ is known as the domain, and the set $B$ is the codomain. While this basic definition ensures that every input has a unique output, it does not describe the density or the coverage of the mapping. The classification of functions into injections, surjections, and bijections provides a rigorous framework to describe how elements of the domain relate to the codomain.

An injection, or one-to-one function, is a mapping where distinct inputs yield distinct outputs. If $f(x_1) = f(x_2)$, then it must be that $x_1 = x_2$. A surjection, or onto function, is a mapping where every element in the codomain $B$ is mapped to by at least one element $x \\in A$. That is, for every $y \\in B$, there exists at least one $x \\in A$ such that $f(x) = y$. A bijection is a function that is both injective and surjective. This implies a perfect "one-to-one correspondence" between the two sets, meaning every element in $A$ is paired with a unique element in $B$ and vice versa.

## Key Terminology

To navigate the study of these functions, one must be familiar with the following set-theoretic terms:

- Domain ($A$): The set of all possible inputs for the function.
- Codomain ($B$): The set of all potential outputs.
- Image (or Range): The subset of the codomain that is actually reached by the function, denoted as $f(A) = \\{f(x) | x \\in A\\}$.
- Preimage: For an element $y \\in B$, the set of all $x \\in A$ such that $f(x) = y$.
- Identity Function: A function where $f(x) = x$. This is the quintessential bijection.
- Inverse Function ($f^{-1}$): A function that reverses the mapping of $f$. A function has an inverse if and only if it is a bijection.
- Cardinality: The measure of the "number of elements" in a set. Bijections are the primary tool used to compare the cardinalities of infinite sets.

## Purpose

The study of injection, surjection, and bijection is foundational to discrete mathematics, topology, and analysis. Its primary purposes are as follows:

1. **Invertibility:** A function is reversible if and only if it is bijective. If a function is not injective, it fails the horizontal line test, meaning multiple inputs map to the same output, making it impossible to uniquely determine the input from the output. If it is not surjective, some values in the codomain have no corresponding input, leaving the inverse undefined for those values.
2. **Comparing Set Sizes:** In set theory, particularly Cantor's work on transfinite numbers, we say two sets have the same cardinality if there exists a bijection between them. This allows mathematicians to prove, for example, that the set of all integers has the same size as the set of even integers, even though the latter is a proper subset of the former.
3. **Solving Equations:** Determining whether a function is injective or surjective helps in understanding if a system of equations $f(x) = y$ has no solution, a unique solution, or multiple solutions.

## Fundamental Properties

The behavior of these functions is governed by strict logical conditions.

### Injectivity ($f(x_1) = f(x_2) \\implies x_1 = x_2$)
An injective function preserves distinctness. In the context of real-valued functions, this is often checked via the derivative. If $f'(x) > 0$ or $f'(x) < 0$ for all $x$ in the domain, the function is strictly monotonic and therefore injective.

### Surjectivity ($\\forall y \\in B, \\exists x \\in A: f(x) = y$)
A surjective function covers the entire codomain. For a function $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^3$, the function is surjective because for any $y \\in \\mathbb{R}$, we can choose $x = \\sqrt[3]{y}$, which is always a real number. Conversely, $f(x) = x^2$ is not surjective from $\\mathbb{R}$ to $\\mathbb{R}$ because negative values in the codomain are never reached.

### Bijection
A bijection must satisfy both. It functions as a perfect pairing mechanism. Because it is both injective and surjective, it satisfies the condition of being a "permutation" of the set if $A = B$.

| Property | Injective | Surjective | Bijective |
| :--- | :--- | :--- | :--- |
| Unique Preimage | Yes | No (can be multiple) | Yes |
| Codomain = Range | No | Yes | Yes |
| Invertible | No | No | Yes |

## Types & Variations

Functions can be classified based on their algebraic structure and their mapping characteristics. 

The following table summarizes common functions and their classification assuming the codomain is $\\mathbb{R}$:

| Function | Domain | Classification |
| :--- | :--- | :--- |
| $f(x) = x$ | $\\mathbb{R}$ | Bijective |
| $f(x) = x^2$ | $\\mathbb{R}$ | Neither |
| $f(x) = x^3$ | $\\mathbb{R}$ | Bijective |
| $f(x) = e^x$ | $\\mathbb{R}$ | Injective (not surjective) |
| $f(x) = \\sin(x)$ | $\\mathbb{R}$ | Neither |

To visualize the impact of parameters on these properties, consider the transformation of the power function. The interactive graph below allows you to adjust the power $p$ of the function $f(x) = x^p$ for $x > 0$. When $p=1$, we see a linear identity. When $p \\neq 1$, we observe how growth rates affect the mapping.

\`\`\`interactivegraph
x^p
params: p=1
range: p=0.5:3
\`\`\`

In the static graph below, we plot $f(x) = x^2$ and $f(x) = \\sqrt{x}$. $f(x) = x^2$ is not injective on the domain of all real numbers because $f(2) = 4$ and $f(-2) = 4$. However, if we restrict the domain to $x \\ge 0$, the function becomes injective.

\`\`\`graph
x^2
\\sqrt{x}
\`\`\`

## How to Solve

Proving that a function belongs to one of these categories involves systematic algebraic verification.

### Proving Injectivity
To prove $f$ is injective:
1. Assume $f(x_1) = f(x_2)$.
2. Use algebraic manipulation to show that this implies $x_1 = x_2$.
3. If you suspect the function is not injective, find a counterexample: find two distinct values $a$ and $b$ such that $f(a) = f(b)$.

Example: Prove $f(x) = 3x + 5$ is injective.
Let $3x_1 + 5 = 3x_2 + 5$.
Subtract 5: $3x_1 = 3x_2$.
Divide by 3: $x_1 = x_2$.
Therefore, $f$ is injective.

### Proving Surjectivity
To prove $f$ is surjective:
1. Let $y$ be an arbitrary element in the codomain $B$.
2. Set $y = f(x)$ and attempt to solve for $x$ in terms of $y$.
3. If you can express $x = g(y)$ such that $x$ is always within the domain $A$ for any $y \\in B$, then the function is surjective.

Example: Prove $f(x) = 2x - 1$ is surjective on $\\mathbb{R}$.
Let $y \\in \\mathbb{R}$. Set $y = 2x - 1$.
Solve for $x$: $x = (y+1)/2$.
Since $(y+1)/2$ is a real number for any real $y$, there exists an $x$ for every $y$.
Therefore, $f$ is surjective.

### Proving Bijection
To prove $f$ is bijective, one must show the function satisfies both the injective and surjective criteria. Often, this is most efficiently accomplished by showing that $f$ has a well-defined inverse function $f^{-1}: B \\to A$.

## Summary

The distinction between injection, surjection, and bijection forms the backbone of how we categorize transformations in mathematics. An injective function ensures that information is not "compressed" or lost in the mapping, as each input maintains a unique identity. A surjective function ensures that every possible target in the codomain is addressed, leaving no part of the target space unreachable. A bijection, by demanding both, represents the most efficient and symmetrical relationship possible between two sets.

By mastering these definitions, one gains the ability to determine if a system of equations has a unique solution (bijection), multiple solutions (non-injective), or potentially no solution (non-surjective). Whether working in linear algebra, where linear transformations are characterized by these properties, or in calculus, where the existence of an inverse depends entirely on these classifications, the rigorous application of these concepts remains an essential skill for all technical disciplines.`;export{e as default};