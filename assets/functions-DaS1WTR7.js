var e=`# Functions: Injection, Surjection, and Bijection

## Definition

In mathematics, a function $f: X \\rightarrow Y$ is a relation between two sets, $X$ (the domain) and $Y$ (the codomain), that assigns each element $x \\in X$ to exactly one element $y \\in Y$. While the general definition of a function guarantees that every input has a unique output, it does not mandate how the output set is covered or whether different inputs can result in the same output.

To refine our understanding, we classify functions based on their mapping behavior. Let $f$ be a function such that $f: X \\rightarrow Y$. We define the following:

1. **Injection (One-to-One):** A function is injective if distinct elements in the domain map to distinct elements in the codomain. Formally, $f$ is injective if for all $x_1, x_2 \\in X$, $f(x_1) = f(x_2)$ implies $x_1 = x_2$.
2. **Surjection (Onto):** A function is surjective if every element in the codomain $Y$ is the image of at least one element in the domain $X$. Formally, $f$ is surjective if for every $y \\in Y$, there exists at least one $x \\in X$ such that $f(x) = y$.
3. **Bijection (One-to-One Correspondence):** A function is bijective if it is both injective and surjective. This implies that each element of the domain maps to a unique element of the codomain, and every element of the codomain is covered exactly once.

These three classifications form the cornerstone of set theory, combinatorics, and functional analysis, allowing mathematicians to determine if two sets have the same cardinality or if a function possesses an inverse.

## Key Terminology

Understanding the behavior of functions requires precise nomenclature regarding the sets involved and the mechanics of the mapping:

| Term | Definition |
| :--- | :--- |
| Domain ($X$) | The set of all possible input values for which the function is defined. |
| Codomain ($Y$) | The set of all possible output values that the function *could* map to. |
| Range (Image) | The subset of the codomain containing all actual outputs of the function. |
| Preimage | Given $y \\in Y$, the set of all $x \\in X$ such that $f(x) = y$. |
| Injective | A function where no two inputs map to the same output. |
| Surjective | A function where the range is equal to the codomain. |
| Bijective | A function that provides a perfect pairing between sets. |
| Inverse Function | A function $f^{-1}: Y \\rightarrow X$ that exists if and only if $f$ is bijective. |

## Purpose

The study of injections, surjections, and bijections serves several critical purposes in formal logic and applied mathematics. 

Primarily, these concepts enable the comparison of infinite sets. Georg Cantor, the father of set theory, utilized these definitions to demonstrate that different "sizes" of infinity exist. By establishing a bijection between two sets, one proves they share the same cardinality, regardless of their apparent density or distribution. 

In computer science, these properties are fundamental to cryptography and data structures. An injective function ensures that no two distinct inputs produce the same hash value, a property essential for avoiding collisions in hash tables. A surjective function is often a design requirement for mapping input spaces to output spaces where full coverage is necessary, such as ensuring that an entire range of memory addresses is accessible.

Furthermore, these classifications are vital for the existence of inverses. A function must be bijective to be invertible. If a function is not injective, the mapping is "many-to-one," meaning the inverse would be "one-to-many," violating the definition of a function. If a function is not surjective, the inverse would have no defined value for those elements in the codomain that were never reached, creating an incomplete mapping.

## Fundamental Properties

The properties of these functions can be expressed through algebraic and analytical constraints.

### Injective Properties
For a function to be injective, it must pass the "Horizontal Line Test" in the Cartesian plane. If any horizontal line $y=c$ intersects the graph of the function at more than one point, the function is not injective because multiple $x$-values yield the same $y$-value. Mathematically, for a differentiable function $f$ on an interval, if $f'(x) > 0$ or $f'(x) < 0$ for all $x$ in the domain, the function is strictly monotonic and therefore injective.

### Surjective Properties
Surjectivity depends heavily on the defined codomain. For instance, $f: \\mathbb{R} \\rightarrow \\mathbb{R}$ defined by $f(x) = x^2$ is not surjective because no negative $y$-value has a preimage in the real numbers. However, by restricting the codomain to the interval $[0, \\infty)$, the function becomes surjective. Therefore, surjectivity is not merely a property of the function's rule, but a property of the relation between the rule and its declared codomain.

### Bijective Properties
A bijection acts as a perfect re-labeling of a set. If $f: X \\rightarrow Y$ is a bijection, then $f$ possesses an inverse $f^{-1}: Y \\rightarrow X$ such that $f^{-1}(f(x)) = x$ for all $x \\in X$, and $f(f^{-1}(y)) = y$ for all $y \\in Y$. This perfect symmetry allows for the definition of group isomorphisms in abstract algebra, where a bijective homomorphism identifies the structural similarity between two algebraic systems.

## Types & Variations

We observe how varying parameters changes the classification of functions.

\`\`\`interactivegraph
ax + b
params: a=1, b=0
range: a=-3:3, b=-3:3
\`\`\`

The interactive graph above demonstrates a linear function $f(x) = ax + b$. When $a \\neq 0$, the function is a bijection from $\\mathbb{R}$ to $\\mathbb{R}$. If we change $a$ to $0$, the function becomes $f(x) = b$, a constant function, which is neither injective (unless the domain contains only one element) nor surjective (unless the codomain contains only the value $b$).

To visualize how different functions behave, consider the static examples below:

\`\`\`graph
x^3
\\exp(x)
\`\`\`

The graph above plots $f(x) = x^3$ and $g(x) = e^x$. Both of these are injective over the domain $\\mathbb{R}$. However, $f(x) = x^3$ is also surjective (it covers the entire real line), while $g(x) = e^x$ is not surjective over $\\mathbb{R}$ because it never reaches zero or negative values. Consequently, $x^3$ is a bijection from $\\mathbb{R}$ to $\\mathbb{R}$, while $e^x$ is a bijection only when the codomain is restricted to $(0, \\infty)$.

## How to Solve

To determine if a function $f: X \\rightarrow Y$ is injective, surjective, or bijective, follow this rigorous analytical process:

### 1. Testing for Injectivity (One-to-One)
Set $f(x_1) = f(x_2)$. Perform algebraic manipulation to solve for the relationship between $x_1$ and $x_2$. 
- If you can conclude $x_1 = x_2$ exclusively, the function is injective.
- If you find a case where $x_1 \\neq x_2$ (e.g., $x_1 = \\pm x_2$), the function is not injective.
- Example: $f(x) = 3x + 5$. Setting $3x_1 + 5 = 3x_2 + 5$ leads to $3x_1 = 3x_2$, which simplifies to $x_1 = x_2$. Thus, it is injective.

### 2. Testing for Surjectivity (Onto)
To check if $f$ is surjective, identify the range of the function. 
- Solve the equation $y = f(x)$ for $x$ in terms of $y$.
- Determine if every $y$ in the codomain $Y$ produces a valid $x$ in the domain $X$. 
- Example: $f: \\mathbb{R} \\rightarrow \\mathbb{R}$ where $f(x) = x^3$. Since $x = \\sqrt[3]{y}$ is defined for every real $y$, the function is surjective.

### 3. Testing for Bijectivity
A function is bijective if and only if it passes both the injective test and the surjective test. If you have already proven that $f$ is injective and surjective, you have proven it is bijective. Alternatively, show that the inverse function $f^{-1}$ exists and is well-defined over the entirety of the codomain.

## Summary

The distinction between injective, surjective, and bijective functions is fundamental to the architecture of mathematical thought. An injective function preserves the uniqueness of inputs, ensuring no information is conflated. A surjective function ensures total coverage of the target space, guaranteeing that every possible output is accounted for. A bijective function bridges the two, creating an ideal symmetry that allows for the construction of inverse processes. 

By analyzing the domain, codomain, and the rule of assignment, one can categorize any mathematical mapping. Whether assessing the invertibility of a system of equations, the entropy of a data transformation, or the cardinality of infinite sets, these three classifications provide the framework required for rigorous verification. Understanding these properties is not merely a theoretical exercise; it is an essential tool for verifying that mathematical models function as intended.`;export{e as default};