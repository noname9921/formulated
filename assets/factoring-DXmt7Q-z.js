var e=`# Factoring\r
\r
## Definition\r
\r
Factoring is the process of decomposing a mathematical expression into a product of simpler expressions (called **factors**) such that when multiplied together, they yield the original expression.\r
\r
$$a \\cdot b = c \\implies \\text{factoring } c \\text{ gives } a \\text{ and } b$$\r
\r
---\r
\r
## Key Terminology\r
\r
| Term               | Definition                                                                 |\r
| :----------------- | :------------------------------------------------------------------------- |\r
| Factor             | An expression that divides another expression evenly                       |\r
| Polynomial         | An expression with one or more terms containing variables and coefficients |\r
| GCF                | Greatest Common Factor — the largest factor shared by all terms            |\r
| Root / Zero        | A value of $x$ that makes the expression equal to zero                     |\r
| Prime (polynomial) | A polynomial that cannot be factored further over the integers             |\r
| Coefficient        | The numerical part of a term, e.g. $5$ in $5x^2$                           |\r
| Degree             | The highest exponent in a polynomial, e.g. degree $2$ in $x^2 + 3x + 1$    |\r
\r
---\r
\r
## Purpose\r
\r
Factoring serves several core purposes in algebra:\r
\r
- **Solving equations** — setting each factor to zero to find roots\r
- **Simplifying expressions** — reducing fractions of polynomials\r
- **Finding zeros/roots** — identifying where a function crosses the x-axis\r
- **Analyzing structure** — understanding how an expression is built\r
\r
If $f(x) = (x - a)(x - b)$, then the roots are $x = a$ and $x = b$, since:\r
\r
$$f(a) = (a - a)(a - b) = 0$$\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Zero Product Property\r
\r
If a product of factors equals zero, at least one factor must be zero:\r
\r
$$A \\cdot B = 0 \\implies A = 0 \\text{ or } B = 0$$\r
\r
### Distributive Property (in reverse)\r
\r
Factoring is the reverse of expanding/distribution:\r
\r
$$ab + ac = a(b + c)$$\r
\r
### Factor Theorem\r
\r
$(x - r)$ is a factor of $f(x)$ if and only if $f(r) = 0$.\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. Greatest Common Factor (GCF)\r
\r
Extract the largest common factor from all terms.\r
\r
$$6x^3 + 9x^2 = 3x^2(2x + 3)$$\r
\r
**General form:**\r
\r
$$a \\cdot m + a \\cdot n = a(m + n)$$\r
\r
---\r
\r
### 2. Difference of Squares\r
\r
Applies when two perfect squares are subtracted.\r
\r
$$a^2 - b^2 = (a + b)(a - b)$$\r
\r
**Example:**\r
\r
$$x^2 - 25 = (x + 5)(x - 5)$$\r
\r
> Note: Sum of squares $a^2 + b^2$ does **not** factor over the reals.\r
\r
---\r
\r
### 3. Perfect Square Trinomial\r
\r
A trinomial that is the square of a binomial.\r
\r
$$a^2 + 2ab + b^2 = (a + b)^2$$\r
\r
$$a^2 - 2ab + b^2 = (a - b)^2$$\r
\r
**Example:**\r
\r
$$x^2 + 6x + 9 = (x + 3)^2$$\r
\r
---\r
\r
### 4. Factoring Trinomials — $x^2 + bx + c$\r
\r
Find two numbers $p$ and $q$ such that:\r
\r
$$p + q = b \\quad \\text{and} \\quad p \\cdot q = c$$\r
\r
Then:\r
\r
$$x^2 + bx + c = (x + p)(x + q)$$\r
\r
**Example:** Factor $x^2 + 5x + 6$\r
\r
Find $p, q$ where $p + q = 5$ and $p \\cdot q = 6$:\r
\r
$$p = 2, \\quad q = 3$$\r
\r
$$x^2 + 5x + 6 = (x + 2)(x + 3)$$\r
\r
---\r
\r
### 5. Factoring Trinomials — $ax^2 + bx + c$\r
\r
Use the **AC method**: multiply $a \\cdot c$, find two numbers that multiply to $ac$ and add to $b$, then split and factor by grouping.\r
\r
**Example:** Factor $2x^2 + 7x + 3$\r
\r
$$a \\cdot c = 2 \\cdot 3 = 6$$\r
\r
Find $p, q$ where $p \\cdot q = 6$ and $p + q = 7$: $p = 1,\\ q = 6$\r
\r
$$2x^2 + x + 6x + 3$$\r
\r
$$= x(2x + 1) + 3(2x + 1)$$\r
\r
$$= (x + 3)(2x + 1)$$\r
\r
---\r
\r
### 6. Sum & Difference of Cubes\r
\r
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$\r
\r
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$\r
\r
**Example:**\r
\r
$$x^3 - 8 = (x - 2)(x^2 + 2x + 4)$$\r
\r
---\r
\r
### 7. Factoring by Grouping\r
\r
Group terms into pairs, factor each pair, then extract the common binomial.\r
\r
**Example:** Factor $x^3 + 2x^2 + 3x + 6$\r
\r
$$= (x^3 + 2x^2) + (3x + 6)$$\r
\r
$$= x^2(x + 2) + 3(x + 2)$$\r
\r
$$= (x^2 + 3)(x + 2)$$\r
\r
---\r
\r
## How to Solve — Solving Equations by Factoring\r
\r
To solve $f(x) = 0$ using factoring:\r
\r
**Step 1 — Move everything to one side:**\r
\r
$$ax^2 + bx + c = 0$$\r
\r
**Step 2 — Factor the expression completely.**\r
\r
**Step 3 — Apply the Zero Product Property:**\r
\r
$$\\text{If } (x - p)(x - q) = 0 \\implies x = p \\text{ or } x = q$$\r
\r
---\r
\r
### Worked Example\r
\r
Solve $x^2 - 5x + 6 = 0$\r
\r
**Step 1:** Already in standard form.\r
\r
**Step 2:** Find $p, q$ where $p + q = -5$ and $p \\cdot q = 6$:\r
\r
$$p = -2, \\quad q = -3$$\r
\r
$$x^2 - 5x + 6 = (x - 2)(x - 3)$$\r
\r
**Step 3:** Apply zero product property:\r
\r
$$(x - 2)(x - 3) = 0$$\r
\r
$$x - 2 = 0 \\quad \\text{or} \\quad x - 3 = 0$$\r
\r
$$\\boxed{x = 2 \\quad \\text{or} \\quad x = 3}$$\r
\r
---\r
\r
### General Factoring Strategy (Decision Order)\r
\r
1. Always check for **GCF** first\r
2. Count the number of terms:\r
   - **2 terms** — check difference of squares, sum/difference of cubes\r
   - **3 terms** — check perfect square trinomial, then trinomial factoring\r
   - **4 terms** — try factoring by grouping\r
3. Check if any factor can be **factored further**\r
4. Verify by **expanding** back\r
\r
---\r
\r
## Summary\r
\r
| Type                  | Pattern             | Factored Form           |\r
| :-------------------- | :------------------ | :---------------------- |\r
| GCF                   | $am + an$           | $a(m + n)$              |\r
| Difference of Squares | $a^2 - b^2$         | $(a+b)(a-b)$            |\r
| Perfect Square        | $a^2 \\pm 2ab + b^2$ | $(a \\pm b)^2$           |\r
| Trinomial (monic)     | $x^2 + bx + c$      | $(x+p)(x+q)$            |\r
| Trinomial (leading)   | $ax^2 + bx + c$     | AC method               |\r
| Sum of Cubes          | $a^3 + b^3$         | $(a+b)(a^2 - ab + b^2)$ |\r
| Difference of Cubes   | $a^3 - b^3$         | $(a-b)(a^2 + ab + b^2)$ |\r
| Grouping              | $4$ terms           | pair, factor, extract   |\r
\r
Factoring is fundamentally about **reversing multiplication** — and mastering it unlocks solving equations, simplifying rational expressions, and understanding polynomial behavior at a deeper level.\r
`;export{e as default};