var e=`# Number Theory: Diophantine Equations\r
\r
---\r
\r
## 1. Definition\r
\r
In the field of number theory and arithmetic geometry, a **Diophantine equation** is an algebraic equation—typically containing polynomial variables—involving two or more unknowns, where the analytical focus is placed strictly on finding solutions that are integers. Named after Diophantus of Alexandria, a 3rd-century mathematician who pioneered their early study, these equations reject continuous fractional or real-number coordinates.\r
\r
Formally, a Diophantine equation can be expressed as a multivariate polynomial function set equal to zero:\r
\r
$$f(x_1, x_2, \\dots, x_n) = 0$$\r
\r
Where the function coefficients are integers, and the target solution space is restricted to the Cartesian product of the integers:\r
\r
$$(x_1, x_2, \\dots, x_n) \\in \\mathbb{Z}^n$$\r
\r
Because the solution domain is restricted to discrete integers, Diophantine equations behave differently than standard continuous equations. A continuous linear equation like $2x + 4y = 5$ defines an infinite line of real numbers. However, as a Diophantine equation over the integers, it has absolutely zero solutions, because the left side will always yield an even number, while the right side is odd.\r
\r
Analyzing these systems requires determining whether an integer solution path exists, calculating the total number of valid coordinates, and establishing parametric formulas to map those coordinates.\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze the structural traits, boundaries, and solution paths of integer polynomial equations, the following precise vocabulary definitions are required:\r
\r
- **Diophantine Equation:** An algebraic polynomial equation with integer coefficients whose target solutions are restricted strictly to the set of integers ($\\mathbb{Z}$).\r
- **Linear Combination:** An expression formed by multiplying each term in a set by a scalar constant and adding the results together (e.g., $ax + by$).\r
- **Greatest Common Divisor ($\\gcd(a, b)$):** The largest positive integer that divides a given set of integers without leaving a remainder.\r
- **Bézout's Identity:** A foundational theorem stating that there always exist integer coefficients $(x, y)$ such that $ax + by = \\gcd(a, b)$.\r
- **Parametric Solution:** A generalized mathematical formula that uses independent integer variables (parameters) to generate all possible individual solutions for a Diophantine system.\r
- **Primitive Pythagorean Triple:** A set of three positive integers $(a, b, c)$ that satisfy the equation $a^2 + b^2 = c^2$, where the terms share no common factors ($\\gcd(a, b, c) = 1$).\r
- **Hilbert's Tenth Problem:** A famous mathematical challenge issued in 1900 asking for a universal algorithm to determine the solvability of any arbitrary Diophantine equation. It was proven in 1970 to be algorithmically undecidable.\r
\r
---\r
\r
## 3. Purpose\r
\r
Diophantine equations model discrete, non-divisible systems where fractional values are invalid. They provide the mathematical framework for optimizing real-world resources and verifying cryptographic security boundaries.\r
\r
### Modeling Discrete Quantities and Constraints\r
\r
In practical optimization, many assets cannot be split into fractions. For instance, a logistics company cannot purchase half a cargo plane, a factory cannot manufacture part of a vehicle, and a store cannot sell a fraction of a product. Diophantine equations allow engineers and financial analysts to model these discrete limitations, ensuring that resource allocations map perfectly to realistic whole-number units.\r
\r
### Balances in Chemical Engineering and Production Scheduling\r
\r
- **Chemical Equation Balancing:** When chemical engineers balance reaction formulas (such as matching inputs of $a\\text{H}_2 + b\\text{O}_2 \\to c\\text{H}_2\\text{O}$), they are solving a simultaneous system of linear Diophantine equations. The resulting molecule counts must be positive integers.\r
- **Automated Scheduling Cycles:** Industrial automation relies on modular intersections to schedule repeating production lines. Diophantine equations determine when two asynchronous assembly lines will sync up or conflict based on their operational timing loops.\r
\r
### Cryptography and Digital Security Systems\r
\r
- **The RSA Key Validation Symmetries:** Public-key cryptography relies on the properties of linear Diophantine equations. Verifying that a decryption key reverses an encryption step requires solving a modular equation that can be rewritten as a linear Diophantine combination ($ed - \\phi(n)k = 1$).\r
- **Elliptic Curve Cryptography (ECC):** Advanced digital signatures and secure web handshakes use elliptic curves defined by the equation $y^2 = x^3 + ax + b$. Finding the integer and rational coordinate points on these curves is a core focus of modern cryptographic research.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Diophantine equations follow strict algebraic constraints that govern structural solvability boundaries and solution density.\r
\r
### The Solvability Criterion for Linear Systems\r
\r
The most critical rule governing a linear Diophantine equation with two variables ($ax + by = c$) is its solvability boundary. According to **Bézout's Lemma**, a linear Diophantine equation has a valid integer solution if and only if the greatest common divisor of the coefficients $a$ and $b$ perfectly divides the constant term $c$:\r
\r
$$\\text{Solvability Boundary Criterion:} \\quad \\gcd(a, b) \\mid c$$\r
\r
If this divisibility condition is not met, the discrete jumps of the linear combination will completely skip over the constant value $c$, leaving the equation with zero integer solutions.\r
\r
### Solution Density Transformations\r
\r
Depending on their degree and structural configuration, Diophantine equations fall into three distinct solution density profiles:\r
\r
1. **Infinite Continuum Solutions:** Linear equations that pass the $\\gcd$ solvability check possess an infinite number of discrete integer coordinates stretching across the number space.\r
2. **Finite Elliptic Coordinates:** Certain higher-degree curves possess only a finite number of integer points, a constraint proven by Siegel's Theorem.\r
3. **Null Empty Sets:** Some equations possess absolutely zero non-trivial integer combinations. The most famous example is **Fermat's Last Theorem**, which states that the equation $x^n + y^n = z^n$ has no positive integer solutions for any exponent value $n > 2$.\r
\r
### Structural Properties of Linear and Quadratic Configurations\r
\r
The following table summarizes the structural identities and solution behaviors of standard Diophantine variants.\r
\r
| Equation Variant Category | Standard Formulaic Expression | Solvability Condition Constraint          | Solution Density Profile                        |\r
| :------------------------ | :---------------------------- | :---------------------------------------- | :---------------------------------------------- |\r
| **Linear Dual-Variable**  | $ax + by = c$                 | $\\gcd(a, b) \\mid c$                       | Infinitely many integer coordinates             |\r
| **Pythagorean Triples**   | $x^2 + y^2 = z^2$             | Always solvable for integer sets          | Infinitely many primitive groups                |\r
| **Pell's Equation**       | $x^2 - Dy^2 = 1$              | $D$ must be a positive non-square integer | Infinitely many hyper-exponential solutions     |\r
| **Fermat's Hyper-Degree** | $x^n + y^n = z^n$             | Exponent constraint must be $n \\le 2$     | Strictly zero non-trivial solutions for $n > 2$ |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Diophantine equations are grouped into distinct families based on their geometric structure, polynomial degree, and coefficient signs.\r
\r
### 1. Linear Diophantine Equations\r
\r
Linear Diophantine equations are first-degree polynomial configurations. They can be written with two variables as $ax + by = c$, or extended to multiple variables:\r
\r
$$a_1x_1 + a_2x_2 + \\dots + a_nx_n = c$$\r
\r
A multi-variable linear equation is solvable if and only if the greatest common divisor of all the coefficients simultaneously divides the constant term: $\\gcd(a_1, a_2, \\dots, a_n) \\mid c$.\r
\r
### 2. Pythagorean Triples\r
\r
Pythagorean Diophantine equations look for sets of three integers that form the sides of a right triangle:\r
\r
$$x^2 + y^2 = z^2$$\r
\r
Every primitive Pythagorean triple can be generated using **Euclid's Formula**. This formula uses two coprime integers $m$ and $n$ of opposite parity ($m > n > 0$) to calculate the triples:\r
\r
$$x = m^2 - n^2, \\quad y = 2mn, \\quad z = m^2 + n^2$$\r
\r
### 3. Pell's Equation\r
\r
Pell's Equation is a specific quadratic Diophantine equation involving two variables, written as:\r
\r
$$x^2 - Dy^2 = 1$$\r
\r
Where $D$ is a fixed positive integer that is not a perfect square. Pell's equation always possesses the trivial baseline solution $(1, 0)$. Its non-trivial integer solutions are directly tied to the periodic continued fraction expansion of $\\sqrt{D}$. Once you find the smallest fundamental solution $(x_1, y_1)$, you can generate all remaining infinite solutions iteratively using algebraic power expansions.\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for identifying linear solution boundaries, deriving parametric coordinate systems via the Extended Euclidean Algorithm, and generating primitive Pythagorean configurations.\r
\r
### Strategy A: Solving a Linear Diophantine Equation via Back-Substitution\r
\r
To solve a linear Diophantine equation $ax + by = c$, we calculate the $\\gcd(a, b)$ using the Euclidean Algorithm, verify the solvability condition, find a base solution pair, and expand it into a general parametric formula.\r
\r
**Example Question:** Find all integer solutions for the linear Diophantine equation $172x + 62y = 38$.\r
\r
1. **Calculate the $\\gcd$ of the coefficients using the Euclidean Algorithm:**\r
   - Step 1: $172 = 62 \\cdot 2 + 48$\r
   - Step 2: $62 = 48 \\cdot 1 + 14$\r
   - Step 3: $48 = 14 \\cdot 3 + 6$\r
   - Step 4: $14 = 6 \\cdot 2 + 2$\r
   - Step 5: $6 = 2 \\cdot 3 + 0$\r
\r
   The last non-zero remainder is 2. Therefore, $\\gcd(172, 62) = 2$.\r
\r
2. **Verify the solvability condition:**\r
   Check if the $\\gcd$ value 2 divides the constant term $c = 38$:\r
   $$38 \\div 2 = 19 \\implies 2 \\mid 38$$\r
   Since 2 divides 38, the equation is guaranteed to have infinitely many integer solutions.\r
\r
3. **Isolate the remainders to prepare for back-substitution:**\r
   - From Step 1: $48 = 172 - 62 \\cdot 2$ _(Equation I)_\r
   - From Step 2: $14 = 62 - 48 \\cdot 1$ _(Equation II)_\r
   - From Step 3: $6 = 48 - 14 \\cdot 3$ _(Equation III)_\r
   - From Step 4: $2 = 14 - 6 \\cdot 2$ _(Equation IV)_\r
\r
4. **Perform back-substitution to solve Bézout's Identity ($172x + 62y = 2$):**\r
   Start with Equation IV and substitute the previous remainder expressions step-by-step:\r
   $$2 = 14 - 6 \\cdot 2$$\r
   Substitute Equation III for the remainder 6:\r
   $$2 = 14 - (48 - 14 \\cdot 3) \\cdot 2 \\implies 2 = 14 \\cdot 7 - 48 \\cdot 2$$\r
   Substitute Equation II for the remainder 14:\r
   $$2 = (62 - 48 \\cdot 1) \\cdot 7 - 48 \\cdot 2 \\implies 2 = 62 \\cdot 7 - 48 \\cdot 9$$\r
   Substitute Equation I for the remainder 48:\r
   $$2 = 62 \\cdot 7 - (172 - 62 \\cdot 2) \\cdot 9$$\r
   $$2 = 172 \\cdot (-9) + 62 \\cdot (25)$$\r
   This gives us the baseline coefficients that generate the $\\gcd$ value 2.\r
\r
5. **Scale the baseline coefficients to match the original constant (38):**\r
   Multiply the entire identity equation by the scaling factor 19 ($2 \\cdot 19 = 38$):\r
   $$19 \\cdot [172(-9) + 62(25)] = 19 \\cdot [2]$$\r
   $$172(-171) + 62(475) = 38$$\r
   This gives us our base integer solution pair: $x_0 = -171$ and $y_0 = 475$.\r
\r
6. **Construct the general parametric formulas to define all solutions:**\r
   Apply the linear parameter formulas, substituting $a = 172$, $b = 62$, and $d = 2$:\r
   $$x_k = x_0 + k \\cdot \\frac{b}{d} \\implies x_k = -171 + k \\cdot \\frac{62}{2} \\implies x_k = -171 + 31k$$\r
   $$y_k = y_0 - k \\cdot \\frac{a}{d} \\implies y_k = 475 - k \\cdot \\frac{172}{2} \\implies y_k = 475 - 86k$$\r
\r
7. **State the complete solution set:**\r
   The general solution set is given by the parametric pairs:\r
   $$(x_k, y_k) = (-171 + 31k, \\, 475 - 86k) \\quad \\forall k \\in \\mathbb{Z}$$\r
\r
### Strategy B: Generating Primitive Pythagorean Triples\r
\r
We can use Euclid's formula to construct unique, coprime sets of integers that satisfy the Pythagorean theorem.\r
\r
**Example Question:** Generate the primitive Pythagorean triple corresponding to the chosen seed parameters $m = 5$ and $n = 2$.\r
\r
1. **Verify that the chosen seed parameters meet Euclid's constraints:**\r
   - Magnitude check: $m > n > 0 \\implies 5 > 2 > 0$ (Pass)\r
   - Coprimality check: $\\gcd(5, 2) = 1$ (Pass)\r
   - Parity check: 5 is odd, 2 is even (Opposite parity check passes)\r
\r
   The seed parameters meet all requirements, so they will generate a primitive triple.\r
\r
2. **Calculate the first leg variable ($x$):**\r
   $$x = m^2 - n^2 = 5^2 - 2^2 = 25 - 4 = 21$$\r
\r
3. **Calculate the second leg variable ($y$):**\r
   $$y = 2mn = 2 \\cdot 5 \\cdot 2 = 20$$\r
\r
4. **Calculate the hypotenuse variable ($z$):**\r
   $$z = m^2 + n^2 = 5^2 + 2^2 = 25 + 4 = 29$$\r
\r
5. **Assemble the triple and verify the algebraic relation:**\r
   The generated coordinate triple is $(21, 20, 29)$. Check the terms using the Pythagorean theorem:\r
   $$21^2 + 20^2 = 441 + 400 = 841$$\r
   $$29^2 = 841$$\r
\r
The relationship holds true ($841 = 841$). Since the seeds were coprime and had opposite parity, the components share no common factors ($\\gcd(21, 20, 29) = 1$), confirming it is a primitive triple.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Discrete Domain Boundaries:** A Diophantine equation is an algebraic polynomial equation with integer coefficients whose solutions are strictly restricted to the set of integers ($f(x_1, \\dots, x_n) = 0 \\implies x_i \\in \\mathbb{Z}$).\r
- **Linear Solvability Rule:** A linear Diophantine equation $ax + by = c$ is solvable if and only if the greatest common divisor of the coefficients divides the constant term ($\\gcd(a, b) \\mid c$). If this condition is met, the equation has infinitely many integer solutions.\r
- **Algorithmic Derivation:** You can find a base solution pair for a linear Diophantine equation by running the Euclidean Algorithm forward to find the remainders, then substituting those equations in reverse. This base pair can then be expanded into a general parametric formula.\r
- **Geometric Variations:** Diophantine equations span multiple mathematical degrees, ranging from first-degree linear combinations to quadratic systems like Pythagorean triples ($x^2+y^2=z^2$) and Pell's equations ($x^2-Dy^2=1$).\r
- **Algorithmic Limits:** Hilbert's Tenth Problem asked for a universal method to determine the solvability of any Diophantine equation. The Matiyasevich-Robinson-Davis-Putnam theorem proved that no such general algorithm can ever exist, making the problem algorithmically undecidable.\r
`;export{e as default};