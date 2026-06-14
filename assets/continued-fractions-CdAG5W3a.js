var e=`# Number Theory: Continued Fractions\r
\r
---\r
\r
## 1. Definition\r
\r
In mathematics and number theory, a **continued fraction** is an alternative way of representing real numbers by expressing them through a hierarchical sequence of nested quotients. Instead of using traditional positional systems like decimal notation (e.g., $3.14159$), a continued fraction breaks a number down into an integer part combined with a reciprocal fraction, whose denominator is itself broken down into an integer part and another reciprocal fraction, and so on.\r
\r
Formally, a general continued fraction representation of a real number $x$ takes the following nested fraction form:\r
\r
$$x = a_0 + \\frac{b_1}{a_1 + \\frac{b_2}{a_2 + \\frac{b_3}{a_3 + \\dots}}}$$\r
\r
Where $a_0$ is the initial integer component, and the remaining values $a_i$ and $b_i$ represent partial denominators and partial numerators respectively.\r
\r
### Simple Continued Fractions\r
\r
When all partial numerators are set exactly equal to 1 ($b_i = 1$ for all $i \\ge 1$), and all partial denominators starting from $a_1$ are restricted to positive integers ($a_i \\in \\mathbb{Z}^{+}$ for $i \\ge 1$), the expression is classified as a **simple continued fraction**:\r
\r
$$x = a_0 + \\frac{1}{a_1 + \\frac{1}{a_2 + \\frac{1}{a_3 + \\dots}}}$$\r
\r
Because writing out these nested fractional towers repeatedly is spatially inefficient, mathematicians use a compact shorthand bracket notation to represent simple continued fractions:\r
\r
$$x = [a_0; a_1, a_2, a_3, a_4, \\dots]$$\r
\r
In this shorthand notation, a semicolon is placed immediately after the leading integer part $a_0$ to separate it from the fractional partial denominators, which are listed sequentially and separated by commas.\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To analyze the structural traits, convergence behaviors, and classifications of continued fractional sequences, the following precise vocabulary definitions are required:\r
\r
- **Simple Continued Fraction:** A continued fraction configuration where every partial numerator is exactly equal to 1, and every partial denominator (except possibly the first) is a positive integer.\r
- **Partial Denominator ($a_i$):** The sequential integer terms that appear within the denominators of a continued fraction tower.\r
- **Convergent ($p_n / q_n$):** The rational number fraction obtained by truncating an infinite continued fraction sequence at a specific term $a_n$.\r
- **Finite Continued Fraction:** A fraction sequence that terminates after a finite number of steps, which always represents a rational number ($\\mathbb{Q}$).\r
- **Infinite Continued Fraction:** A fraction sequence that continues forever without stopping, which always represents an irrational number ($\\mathbb{R} \\setminus \\mathbb{Q}$).\r
- **Periodic Continued Fraction:** An infinite simple continued fraction whose sequential partial denominators repeat in a fixed, cyclic pattern after a certain point.\r
- **Quadratic Irrational:** An irrational number that acts as the root of a second-degree polynomial equation with integer coefficients ($ax^2 + bx + c = 0$).\r
- **Best Rational Approximation:** A rational fraction $p/q$ that lies closer to a target real number than any other fraction with a denominator less than or equal to $q$.\r
\r
---\r
\r
## 3. Purpose\r
\r
Continued fractions reveal the deep algebraic relationships of numbers, offering a more structurally accurate way to represent real values than standard decimal systems.\r
\r
### Revealing the Inner Symmetry of Numbers\r
\r
Decimal representations are tied to the base-10 numbering system, which is an arbitrary human convention. For example, the fraction $1/3$ becomes a repeating sequence ($0.3333\\dots$) in base-10, but transforms into a clean, single-digit fractional term ($0.1$) in base-3.\r
\r
Simple continued fractions remove these base-dependent variations. They display the core arithmetic properties of a number directly through the relationships of its component integers. This mathematical clarity shows exactly how rational or irrational a number is based on how its terms behave.\r
\r
### Calculating Best Rational Approximations\r
\r
In engineering, astronomy, and digital manufacturing, irrational constants like $\\pi$, $e$, and $\\sqrt{2}$ must be approximated using rational fractions that can be handled by physical machinery. Truncating a continued fraction sequence provides a highly accurate method for calculating these values.\r
\r
The resulting fractions, called **convergents**, provide the absolute best possible rational approximations for a target real number. They achieve the highest possible precision while keeping the size of the denominator as small as possible.\r
\r
### Real-World Technological Applications\r
\r
- **Gear Ratio Design and Calibration:** Mechanical engineers use continued fraction convergents to design gear trains for clocks, automotive transmissions, and industrial machinery. When a machine needs to replicate an irrational ratio (such as tracking astronomical movements), continued fractions calculate the exact teeth counts required to minimize mechanical timing errors.\r
- **Calendar Optimization Regimes:** Designing a functional calendar requires matching the earth's daily rotation cycle with its elliptical orbit around the sun. The fractional length of a solar year is roughly $365.24219$ days. Computing the continued fraction for this decimal remainder yields the precise intervals used to schedule leap years across modern global calendars.\r
- **The RSA Cryptographic Attack Vector (Wiener's Theorem):** Public-key cryptographic networks can be broken if security keys are configured improperly. **Wiener's Attack** uses continued fractions to target RSA setups where the private decryption exponent $d$ is set too small. The attack analyzes the public key components ($e$ and $n$) to construct a continued fraction sequence. The true value of the secret decryption key appears directly as one of the fractional convergents, breaking the network's security wrapper.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Continued fractions follow strict algebraic rules that govern rational boundaries, recursive convergence loops, and geometric approximation limits.\r
\r
### Rationality and Finiteness Symmetries\r
\r
A real number $x$ can be written as a **finite** simple continued fraction if and only if $x$ is a **rational number** ($x \\in \\mathbb{Q}$). If the target number is an **irrational number**, its continued fraction sequence will expand **infinitely** without ever stopping.\r
\r
This structural law creates a clean division between number classifications:\r
\r
$$\\text{Finite Range Check:} \\quad x \\in \\mathbb{Q} \\iff x = [a_0; a_1, a_2, \\dots, a_n]$$\r
\r
$$\\text{Infinite Range Check:} \\quad x \\in \\mathbb{R} \\setminus \\mathbb{Q} \\iff x = [a_0; a_1, a_2, \\dots]$$\r
\r
### The Recursive Matrix Formula for Convergents\r
\r
The individual convergent fractions ($C_n = p_n / q_n$) generated by truncating a simple continued fraction can be calculated step-by-step using a set of recursive matrix formulas. The numerator and denominator sequences are governed by the following initial conditions and recursive updates:\r
\r
$$\r
\\begin{aligned}\r
p_{-2} = 0, \\quad p_{-1} = 1 &\\implies p_n = a_n \\cdot p_{n-1} + p_{n-2} \\\\\r
q_{-2} = 1, \\quad q_{-1} = 0 &\\implies q_n = a_n \\cdot q_{n-1} + q_{n-2}\r
\\end{aligned}\r
$$\r
\r
### The Determinant Identity Property\r
\r
Multiplying cross-wise between consecutive convergent terms reveals a strict balancing property known as the **Determinant Identity**:\r
\r
$$p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}$$\r
\r
Dividing this identity formula by the product of the denominators ($q_n q_{n-1}$) yields an alternate expression:\r
\r
$$\\frac{p_n}{q_n} - \\frac{p_{n-1}}{q_{n-1}} = \\frac{(-1)^{n-1}}{q_n q_{n-1}}$$\r
\r
This property shows that the distance between consecutive convergents shrinks rapidly as the sequence progresses, forcing the fractions to lock onto the true target value.\r
\r
### Squeeze Bounds of Alternating Approximation\r
\r
Convergents alternate back and forth, closing in on the target number from opposite sides:\r
\r
- **Even indices** ($C_0, C_2, C_4, \\dots$) create a sequence of increasing lower bounds that approach the target value from below.\r
- **Odd indices** ($C_1, C_3, C_5, \\dots$) create a sequence of decreasing upper bounds that approach the target value from above.\r
\r
This alternating pattern places the true value of the number $x$ between any two consecutive convergents:\r
\r
$$\\frac{p_{2k}}{q_{2k}} < \\frac{p_{2k+2}}{q_{2k+2}} < \\dots < x < \\dots < \\frac{p_{2k+1}}{q_{2k+1}} < \\frac{p_{2k-1}}{q_{2k-1}}$$\r
\r
### Structural Properties of Continued Fractions\r
\r
The following table summarizes the primary structural properties and behaviors of different continued fraction types.\r
\r
| Continued Fraction Category | Visual Term Arrangement                                          | Numerical Classification                     | Convergence Velocity Profile                 |\r
| :-------------------------- | :--------------------------------------------------------------- | :------------------------------------------- | :------------------------------------------- |\r
| **Finite Simple Form**      | Terminates at a final term $a_n$                                 | Always a Rational Number ($\\mathbb{Q}$)      | Finishes in a finite number of steps         |\r
| **Periodic Infinite Form**  | Enters a repeating cycle ($[\\dots, \\overline{a_i, \\dots, a_j}]$) | Always a Quadratic Irrational                | Converges at a steady geometric rate         |\r
| **Non-Periodic Infinite**   | Extends infinitely with no repeating patterns                    | Transcendentals or Higher-Degree Irrationals | Variable convergence depending on term sizes |\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Continued fractions can be grouped into distinct categories based on whether their terms terminate, repeat periodically, or use non-unit numerators.\r
\r
### 1. Finite Continued Fractions\r
\r
Every rational number can be converted into a finite simple continued fraction using the Euclidean Algorithm. Because the division steps must eventually reach a remainder of zero, the continued fraction sequence is guaranteed to terminate.\r
\r
> **Ambiguity Edge Case:** Every finite continued fraction can be written in two equivalent ways. The final term $a_n$ can be broken down into a lower integer plus a unit fraction ($a_n = (a_n - 1) + \\frac{1}{1}$). This means the sequence $[a_0; a_1, \\dots, a_n]$ matches exactly the value of the sequence $[a_0; a_1, \\dots, a_n - 1, 1]$. For example, $[2; 3, 4]$ and $[2; 3, 3, 1]$ evaluate to the same rational number.\r
\r
### 2. Periodic Continued Fractions (Lagrange's Theorem)\r
\r
**Lagrange's Continued Fraction Theorem** states that an infinite simple continued fraction is periodic if and only if the number it represents is a **quadratic irrational** (an irrational root of a quadratic equation with integer coefficients).\r
\r
The periodic repeating block is marked using an overline, matching the convention used for repeating decimals:\r
\r
$$\\sqrt{3} = [1; 1, 2, 1, 2, 1, 2, \\dots] = [1; \\overline{1, 2}]$$\r
\r
The most mathematically significant periodic expansion belongs to the **Golden Ratio** ($\\phi = \\frac{1+\\sqrt{5}}{2}$):\r
\r
$$\\phi = [1; 1, 1, 1, 1, \\dots] = [\\overline{1}]$$\r
\r
Because all of its partial denominators are the smallest possible positive integer (1), the denominators in its convergent formula grow slowly. This makes the Golden Ratio the most difficult number to approximate cleanly with rational fractions, earning it the mathematical title of the **"most irrational" number**.\r
\r
### 3. Generalized Continued Fractions\r
\r
Generalized continued fractions remove the restriction that partial numerators must equal 1 ($b_i = 1$). This allows partial numerators and denominators to use any arbitrary integer or algebraic function values:\r
\r
$$x = a_0 + \\frac{b_1}{a_1 + \\frac{b_2}{a_2 + \\frac{b_3}{a_3 + \\dots}}}$$\r
\r
While generalized continued fractions lose the "best rational approximation" property unique to simple forms, they allow mathematicians to construct elegant infinite expansions for transcendental numbers like $\\pi$ and $e$:\r
\r
$$\\pi = \\frac{4}{1 + \\frac{1^2}{2 + \\frac{3^2}{2 + \\frac{5^2}{2 + \\dots}}}}$$\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodologies for converting rational numbers into finite sequences, evaluating periodic structures into quadratic algebraic roots, and calculating convergent approximations.\r
\r
### Strategy A: Converting a Rational Number into a Finite Continued Fraction\r
\r
We can compute the simple continued fraction of a rational number by running the Euclidean Algorithm to extract successive quotients and remainders.\r
\r
**Example Question:** Find the complete simple continued fraction representation for the rational fraction $x = \\frac{67}{29}$.\r
\r
1. **Extract the integer component from the fraction:**\r
   Divide 67 by 29 to find the quotient and remainder:\r
   $$\\frac{67}{29} = 2 + \\frac{9}{29}$$\r
   This gives our first partial denominator term: $a_0 = 2$.\r
\r
2. **Invert the remaining fractional term to isolate the next step:**\r
   Take the reciprocal of the remainder fraction to set up the next division step:\r
   $$\\frac{9}{29} = \\frac{1}{\\frac{29}{9}}$$\r
\r
3. **Divide the new inverted fractional term:**\r
   Divide 29 by 9:\r
   $$\\frac{29}{9} = 3 + \\frac{2}{9}$$\r
   This gives our next partial denominator term: $a_1 = 3$.\r
\r
4. **Repeat the inversion and division steps for the next remainder:**\r
   Invert the remainder fraction $\\frac{2}{9}$:\r
   $$\\frac{2}{9} = \\frac{1}{\\frac{9}{20}}$$\r
   Divide 9 by 2:\r
   $$\\frac{9}{2} = 4 + \\frac{1}{2}$$\r
   This gives our next partial denominator term: $a_2 = 4$.\r
\r
5. **Process the final remaining fraction component:**\r
   Invert the remainder fraction $\\frac{1}{2}$:\r
   $$\\frac{1}{2} = \\frac{1}{\\frac{2}{1}}$$\r
   Divide 2 by 1:\r
   $$\\frac{2}{1} = 2 + 0$$\r
   This gives our final partial denominator term: $a_3 = 2$. Since the remainder is zero, the calculation terminates.\r
\r
6. **Assemble the partial denominators into bracket notation:**\r
   Collect the sequential quotient terms: $a_0 = 2$, $a_1 = 3$, $a_2 = 4$, $a_3 = 2$.\r
   $$x = [2; 3, 4, 2]$$\r
\r
The rational fraction is successfully converted.\r
\r
### Strategy B: Evaluating a Periodic Continued Fraction into an Algebraic Root\r
\r
We can find the exact algebraic value of a periodic continued fraction by replacing its repeating block with a placeholder variable and solving the resulting quadratic equation.\r
\r
**Example Question:** Determine the exact quadratic irrational value represented by the periodic continued fraction $x = [2; \\overline{3}]$.\r
\r
1. **Expand the shorthand bracket notation to show the repeating loop:**\r
   $$x = 2 + \\frac{1}{3 + \\frac{1}{3 + \\frac{1}{3 + \\dots}}}$$\r
\r
2. **Isolate the repeating periodic block:**\r
   Subtract the initial non-repeating integer term ($a_0 = 2$) from both sides:\r
   $$x - 2 = \\frac{1}{3 + \\frac{1}{3 + \\frac{1}{3 + \\dots}}}$$\r
\r
3. **Substitute the placeholder variable into the repeating part of the fraction:**\r
   Notice that the denominator of the right side matches the definition of the repeating block itself. We can replace this infinite tower with the variable expression $x - 2$:\r
   $$x - 2 = \\frac{1}{3 + (x - 2)}$$\r
\r
4. **Simplify the algebraic equation:**\r
   Combine the terms in the denominator:\r
   $$x - 2 = \\frac{1}{x + 1}$$\r
\r
5. **Convert the expression into a standard quadratic equation:**\r
   Multiply both sides by $(x + 1)$:\r
   $$(x - 2)(x + 1) = 1$$\r
   Expand the left side:\r
   $$x^2 - x - 2 = 1$$\r
   Subtract 1 from both sides to set the equation equal to zero:\r
   $$x^2 - x - 3 = 0$$\r
\r
6. **Solve the quadratic equation using the quadratic formula:**\r
   Apply the quadratic formula with coefficients $a = 1$, $b = -1$, and $c = -3$:\r
   $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-(-1) \\pm \\sqrt{(-1)^2 - 4(1)(-3)}}{2(1)}$$\r
   $$x = \\frac{1 \\pm \\sqrt{1 + 12}}{2} = \\frac{1 \\pm \\sqrt{13}}{2}$$\r
\r
7. **Choose the correct root based on the value of the sequence:**\r
   Since all partial denominators in the sequence are positive, the final value of $x$ must be positive ($x > 0$). We discard the negative root, leaving the final algebraic value:\r
   $$x = \\frac{1 + \\sqrt{13}}{2}$$\r
\r
The periodic sequence is evaluated.\r
\r
### Strategy C: Calculating Convergent Fractions via the Recursive Formula\r
\r
We can find the rational approximations of a continued fraction by calculating its successive convergents using the recursive numerator and denominator formulas.\r
\r
**Example Question:** Calculate the first four convergent fractions ($C_0, C_1, C_2, C_3$) for the continued fraction sequence $x = [1; 2, 2, 2, \\dots]$.\r
\r
1. **Set up a tracking table with the initial baseline conditions:**\r
   Initialize the values for $p$ and $q$:\r
   - $p_{-2} = 0, \\quad p_{-1} = 1$\r
   - $q_{-2} = 1, \\quad q_{-1} = 0$\r
\r
2. **Calculate the first convergent ($C_0$) at index $n = 0$ ($a_0 = 1$):**\r
   $$p_0 = a_0 \\cdot p_{-1} + p_{-2} = 1 \\cdot 1 + 0 = 1$$\r
   $$q_0 = a_0 \\cdot q_{-1} + q_{-2} = 1 \\cdot 0 + 1 = 1$$\r
   $$C_0 = \\frac{p_0}{q_0} = \\frac{1}{1} = 1$$\r
\r
3. **Calculate the second convergent ($C_1$) at index $n = 1$ ($a_1 = 2$):**\r
   $$p_1 = a_1 \\cdot p_0 + p_{-1} = 2 \\cdot 1 + 1 = 3$$\r
   $$q_1 = a_1 \\cdot q_0 + q_{-1} = 2 \\cdot 1 + 0 = 2$$\r
   $$C_1 = \\frac{p_1}{q_1} = \\frac{3}{2} = 1.5$$\r
\r
4. **Calculate the third convergent ($C_2$) at index $n = 2$ ($a_2 = 2$):**\r
   $$p_2 = a_2 \\cdot p_1 + p_0 = 2 \\cdot 3 + 1 = 7$$\r
   $$q_2 = a_2 \\cdot q_1 + q_0 = 2 \\cdot 2 + 1 = 5$$\r
   $$C_2 = \\frac{p_2}{q_2} = \\frac{7}{5} = 1.4$$\r
\r
5. **Calculate the fourth convergent ($C_3$) at index $n = 3$ ($a_3 = 2$):**\r
   $$p_3 = a_3 \\cdot p_2 + p_1 = 2 \\cdot 7 + 3 = 17$$\r
   $$q_3 = a_3 \\cdot q_2 + q_1 = 2 \\cdot 5 + 2 = 12$$\r
   $$C_3 = \\frac{p_3}{q_3} = \\frac{17}{12} \\approx 1.41667$$\r
\r
6. **List the final convergent sequence:**\r
   The first four rational convergents are:\r
   $$C_0 = 1, \\quad C_1 = \\frac{3}{2}, \\quad C_2 = \\frac{7}{5}, \\quad C_3 = \\frac{17}{12}$$\r
\r
This sequence of fractions closes in on the true value of $\\sqrt{2} \\approx 1.41421$, alternating between lower and upper bounds.\r
\r
---\r
\r
## 7. Summary\r
\r
- **Nested Division Symmetries:** A continued fraction represents a real number by breaking it down into a hierarchical sequence of nested integer parts and unit fractions ($x = [a_0; a_1, a_2, \\dots]$).\r
- **Rational Identity Boundaries:** If a number is rational, its continued fraction sequence is finite and terminates. If a number is irrational, its sequence expands infinitely.\r
- **Periodic Quadratics:** According to Lagrange's Theorem, an infinite simple continued fraction develops a repeating periodic cycle if and only if the number it represents is a quadratic irrational.\r
- **Optimal Approximations:** Truncating an infinite continued fraction produces a sequence of rational fractions called convergents ($p_n / q_n$). These fractions provide the absolute best possible rational approximations for a target real number.\r
- **Cryptographic Application:** The predictable structure of continued fractions provides the mathematical framework for Wiener's Attack, which breaks vulnerable RSA encryption keys by extracting secret exponents from public values.\r
`;export{e as default};