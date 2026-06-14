var e=`# Algebra: Complex Numbers\r
\r
---\r
\r
## 1. Definition\r
\r
A **complex number** is an element of a number system that extends the real numbers to allow for solutions to equations that cannot be solved using real numbers alone. Formally, a complex number is defined as an expression of the form:\r
\r
$$z = a + bi$$\r
\r
Where:\r
\r
- $a$ and $b$ are real numbers ($a, b \\in \\mathbb{R}$).\r
- $i$ is the **imaginary unit**, defined by the fundamental property:\r
\r
$$i^2 = -1 \\implies i = \\sqrt{-1}$$\r
\r
In this algebraic framework, the set of all complex numbers is denoted by the mathematical symbol $\\mathbb{C}$. The definition establishes a two-dimensional number system, which can be visualized as a plane rather than a traditional one-dimensional number line.\r
\r
### Components of a Complex Number\r
\r
Every complex number $z = a + bi$ is explicitly partitioned into two distinct components:\r
\r
1. **The Real Part:** The real number $a$, denoted as $\\text{Re}(z)$ or $\\Re(z)$.\r
2. **The Imaginary Part:** The real number $b$ (note that it does not include the $i$ itself), denoted as $\\text{Im}(z)$ or $\\Im(z)$.\r
\r
If $\\text{Re}(z) = 0$ and $\\text{Im}(z) \\neq 0$, the number is described as a **purely imaginary number**. Conversely, if $\\text{Im}(z) = 0$, the complex number simplifies directly to a standard **real number**, demonstrating that the set of real numbers is a proper subset of the complex numbers ($\\mathbb{R} \\subset \\mathbb{C}$).\r
\r
---\r
\r
## 2. Key Terminology\r
\r
To work effectively with complex numbers in advanced algebra, it is necessary to establish precise vocabulary definitions:\r
\r
- **Imaginary Unit ($i$):** The primary mathematical building block of complex numbers that satisfies the definition $i = \\sqrt{-1}$.\r
- **Complex Plane (Argand Diagram):** A geometric representation of complex numbers where the horizontal axis represents the **real part** ($\\text{Re}$) and the vertical axis represents the **imaginary part** ($\\text{Im}$).\r
- **Complex Conjugate ($\\bar{z}$ or $z^*$):** For any given complex number $z = a + bi$, its complex conjugate is defined as $\\bar{z} = a - bi$. Geometrically, it represents a reflection of the number across the real horizontal axis.\r
- **Modulus (Absolute Value, $|z|$):** The geometric distance from the origin $(0,0)$ to the point $(a,b)$ in the complex plane. For $z = a + bi$, it is a scalar real number calculated via the Pythagorean theorem:\r
\r
$$|z| = \\sqrt{a^2 + b^2}$$\r
\r
- **Argument ($\\theta$ or $\\arg(z)$):** The angle formed between the positive real axis and the vector representing the complex number in the complex plane, typically measured in radians.\r
- **Principal Argument ($\\text{Arg}(z)$):** The unique value of the argument $\\theta$ that falls strictly within the half-open interval $(-\\pi, \\pi]$.\r
\r
---\r
\r
## 3. Purpose\r
\r
The introduction of complex numbers resolves fundamental limitations inherent within the real number system. They are not merely "imaginary" abstractions; they provide a comprehensive mathematical framework essential for both theoretical algebra and applied sciences.\r
\r
### Solving Unsolvable Equations\r
\r
In the real number system, negative numbers do not possess square roots because squaring any real number invariably yields a non-negative result. Consequently, a simple polynomial equation such as $x^2 + 1 = 0$ has no real solutions. Complex numbers expand the mathematical horizon to guarantee that every polynomial equation has a valid solution set.\r
\r
### Real-World Applications\r
\r
Beyond foundational algebra, complex numbers are vital across various engineering and scientific disciplines:\r
\r
- **Electrical Engineering:** Complex numbers are used to analyze alternating current (AC) circuits. Voltage, current, and impedance are represented as complex quantities (often using $j$ instead of $i$) to simultaneously encode both amplitude and phase shifts.\r
- **Quantum Mechanics:** The fundamental state of a quantum physical system is defined via wave functions that are explicitly complex-valued. The Schrödinger equation relies heavily on complex arithmetic.\r
- **Signal Processing:** Fourier transforms utilize complex exponentials to break down continuous time-domain signals (such as audio or telecommunications) into their constituent frequency components.\r
- **Fractal Geometry:** Famous mathematical structures like the Mandelbrot Set and Julia Sets are mapped entirely by iteratively computing complex number polynomials in the complex plane.\r
\r
---\r
\r
## 4. Fundamental Properties\r
\r
Complex numbers follow specific operational laws that closely mirror real algebra, alongside unique properties involving conjugates and cyclic powers.\r
\r
### Arithmetic Operations\r
\r
Let $z_1 = a + bi$ and $z_2 = c + di$ be two complex numbers.\r
\r
- **Addition:** Combine the real components and the imaginary components independently.\r
  $$(a + bi) + (c + di) = (a + c) + (b + d)i$$\r
- **Subtraction:** Subtract corresponding components.\r
  $$(a + bi) - (c + di) = (a - c) + (b - d)i$$\r
- **Multiplication:** Distribute using the binomial expansion method (FOIL) and substitute $i^2 = -1$.\r
  $$(a + bi)(c + di) = ac + adi + bci + bdi^2$$\r
  $$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$\r
- **Division:** Multiply both the numerator and the denominator by the complex conjugate of the denominator to clear the imaginary component from the bottom.\r
  $$\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{(c + di)(c - di)} = \\frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$$\r
  $$\\frac{a + bi}{c + di} = \\left(\\frac{ac + bd}{c^2 + d^2}\\right) + \\left(\\frac{bc - ad}{c^2 + d^2}\\right)i$$\r
\r
### Algebraic Properties of Conjugates and Moduli\r
\r
The complex conjugate and modulus display several highly predictable, symmetric behaviors under algebraic manipulation:\r
\r
- $z \\cdot \\bar{z} = (a + bi)(a - bi) = a^2 + b^2 = |z|^2$\r
- $\\overline{z_1 + z_2} = \\bar{z}_1 + \\bar{z}_2$\r
- $\\overline{z_1 \\cdot z_2} = \\bar{z}_1 \\cdot \\bar{z}_2$\r
- $|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$\r
- $\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$\r
- **The Triangle Inequality:** $|z_1 + z_2| \\le |z_1| + |z_2|$\r
\r
### The Cyclic Powers of $i$\r
\r
The powers of the imaginary unit $i$ repeat in a predictable, continuous cycle of length 4. This mathematical property allows any arbitrarily high integer power of $i$ to be evaluated instantaneously.\r
\r
| Exponent | Simplification Path                   | Final Value |\r
| :------- | :------------------------------------ | :---------- |\r
| $i^0$    | Baseline definition of zero exponent  | $1$         |\r
| $i^1$    | Base number identity                  | $i$         |\r
| $i^2$    | Core definition of the imaginary unit | $-1$        |\r
| $i^3$    | $i^2 \\cdot i = (-1) \\cdot i$          | $-i$        |\r
| $i^4$    | $i^2 \\cdot i^2 = (-1) \\cdot (-1)$     | $1$         |\r
| $i^5$    | $i^4 \\cdot i = 1 \\cdot i$             | $i$         |\r
| $i^6$    | $i^4 \\cdot i^2 = 1 \\cdot (-1)$        | $-1$        |\r
| $i^7$    | $i^4 \\cdot i^3 = 1 \\cdot (-i)$        | $-i$        |\r
\r
> **Rule for High Powers:** To evaluate $i^n$ where $n$ is any large positive integer, divide the exponent $n$ by 4 and find the remainder $r$. The expression simplifies exactly to $i^r$.\r
> $$\\text{If } n \\equiv r \\pmod 4, \\text{ then } i^n = i^r$$\r
\r
---\r
\r
## 5. Types & Variations\r
\r
Complex numbers can be formulated in three distinct mathematical variations. Each presentation type serves a distinct advantage depending on whether you are performing addition or multi-step multiplication and root-finding.\r
\r
### 1. Rectangular (Algebraic) Form\r
\r
This is the standard representation style that treats the number as a structural coordinate grid value:\r
\r
$$z = a + bi$$\r
\r
- **Pros:** Highly intuitive for carrying out addition and subtraction operations.\r
- **Cons:** Becomes highly tedious when calculating large powers or extracting roots.\r
\r
### 2. Polar (Trigonometric) Form\r
\r
By converting rectangular coordinates $(a, b)$ into polar coordinates $(r, \\theta)$, where $r = |z|$ is the radius modulus and $\\theta$ is the argument angle, a complex number can be restated using trigonometry:\r
\r
$$a = r\\cos(\\theta)$$\r
$$b = r\\sin(\\theta)$$\r
$$z = r(\\cos\\theta + i\\sin\\theta)$$\r
\r
The trigonometric sequence component is occasionally abbreviated in shorthand mathematical notations as $\\text{cis}(\\theta)$, leading to the alternative phrasing $z = r\\text{cis}\\theta$.\r
\r
### 3. Exponential Form\r
\r
Derived directly from **Euler's Formula**, which establishes that $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, exponential form represents the most compact and elegant variation available for complex numbers:\r
\r
$$z = re^{i\\theta}$$\r
\r
Where:\r
\r
- $r$ is the absolute value modulus ($r \\ge 0$).\r
- $\\theta$ is the angle argument expressed explicitly in radians.\r
\r
---\r
\r
## 6. How to Solve\r
\r
Here we explore step-by-step methodology for executing major types of algebraic operations and solving polynomial equations containing complex values.\r
\r
### Strategy A: Simplifying Expressions via Complex Multiplication & Division\r
\r
When handling expressions with complex quotients, you must rationalize the denominator to convert it back into the clean structural format $a + bi$.\r
\r
**Example Question:** Express the quotient $\\frac{3 + 2i}{1 - 4i}$ in rectangular form.\r
\r
1. **Identify the complex conjugate of the denominator:** The denominator is $1 - 4i$, so its complex conjugate is $1 + 4i$.\r
2. **Multiply both numerator and denominator by this conjugate:**\r
   $$\\frac{3 + 2i}{1 - 4i} \\cdot \\frac{1 + 4i}{1 + 4i} = \\frac{(3 + 2i)(1 + 4i)}{(1 - 4i)(1 + 4i)}$$\r
3. **Expand the numerator using FOIL distribution:**\r
   $$(3 \\cdot 1) + (3 \\cdot 4i) + (2i \\cdot 1) + (2i \\cdot 4i)$$\r
   $$= 3 + 12i + 2i + 8i^2$$\r
   $$= 3 + 14i + 8(-1)$$\r
   $$= -5 + 14i$$\r
4. **Expand the denominator using the difference of squares property:**\r
   $$(1)^2 - (4i)^2 = 1 - 16(-1) = 1 + 16 = 17$$\r
5. **Combine components and split into distinct real and imaginary terms:**\r
   $$\\frac{-5 + 14i}{17} = -\\frac{5}{17} + \\frac{14}{17}i$$\r
\r
### Strategy B: Solving Quadratic Equations with Negative Discriminants\r
\r
When calculating real coefficients within standard quadratic formulas, a negative value under the radical yields complex solutions.\r
\r
**Example Question:** Solve the quadratic polynomial equation $x^2 - 4x + 13 = 0$.\r
\r
1. **Recall the standard quadratic formula:**\r
   $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\r
2. **Substitute coefficients $a = 1$, $b = -4$, and $c = 13$ into the equation:**\r
   $$x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(1)(13)}}{2(1)}$$\r
3. **Simplify the terms located under the radical (the discriminant):**\r
   $$x = \\frac{4 \\pm \\sqrt{16 - 52}}{2}$$\r
   $$x = \\frac{4 \\pm \\sqrt{-36}}{2}$$\r
4. **Convert the negative square root into an imaginary expression:**\r
   $$\\sqrt{-36} = \\sqrt{36} \\cdot \\sqrt{-1} = 6i$$\r
   $$x = \\frac{4 \\pm 6i}{2}$$\r
5. **Divide both individual components by the denominator to get the final solution:**\r
   $$x = 2 \\pm 3i$$\r
   The two distinct conjugate solutions are $x_1 = 2 + 3i$ and $x_2 = 2 - 3i$.\r
\r
### Strategy C: Finding Powers Using De Moivre's Theorem\r
\r
Raising a rectangular complex number to a high power directly is geometrically exhausting. Converting it to polar form enables the use of **De Moivre's Theorem**, which states:\r
\r
$$\\left[r(\\cos\\theta + i\\sin\\theta)\\right]^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))$$\r
\r
**Example Question:** Calculate $(1 + i)^{10}$ and express the final result in standard rectangular form.\r
\r
1. **Convert the base number $z = 1 + i$ into polar form:**\r
   - Find the modulus $r$:\r
     $$r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$$\r
   - Find the argument angle $\\theta$ (since it lies in Quadrant I):\r
     $$\\theta = \\tan^{-1}\\left(\\frac{1}{1}\\right) = \\frac{\\pi}{4}$$\r
   - Polar representation:\r
     $$1 + i = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$$\r
2. **Apply De Moivre's Theorem for exponent $n = 10$:**\r
   $$z^{10} = (\\sqrt{2})^{10} \\cdot \\left[ \\cos\\left(10 \\cdot \\frac{\\pi}{4}\\right) + i\\sin\\left(10 \\cdot \\frac{\\pi}{4}\\right) \\right]$$\r
3. **Evaluate the individual components:**\r
   - Compute the modulus power:\r
     $$(\\sqrt{2})^{10} = (2^{1/2})^{10} = 2^5 = 32$$\r
   - Simplify the multiplied angle argument:\r
     $$\\frac{10\\pi}{4} = \\frac{5\\pi}{2}$$\r
4. **Find the coterminal equivalent angle within basic limits:**\r
   The angle $\\frac{5\\pi}{2}$ is coterminal with $\\frac{\\pi}{2}$ (since $\\frac{5\\pi}{2} - 2\\pi = \\frac{\\pi}{2}$).\r
5. **Evaluate the exact trigonometric values:**\r
   $$\\cos\\left(\\frac{\\pi}{2}\\right) = 0$$\r
   $$\\sin\\left(\\frac{\\pi}{2}\\right) = 1$$\r
6. **Substitute back to arrive at the final rectangular output:**\r
   $$z^{10} = 32(0 + 1i) = 32i$$\r
\r
---\r
\r
## 7. Summary\r
\r
- **Foundational Framework:** Complex numbers take the structural shape $a + bi$, pairing real concepts with an imaginary unit defined by $i^2 = -1$.\r
- **Geometric Plane:** Complex quantities cannot be placed on standard linear number paths; they exist on a two-dimensional coordinate system known as the complex plane or Argand diagram.\r
- **The Conjugate Advantage:** Complex conjugates ($a - bi$) serve as an essential tool to rationalize denominators, converting messy fractions into standard rectangular notations.\r
- **The Fundamental Theorem of Algebra:** By acknowledging complex answers, an $n$-th degree polynomial equation is universally guaranteed to possess exactly $n$ complex roots (counting multiplicity).\r
- **Representational Flexibility:** Shifting seamlessly between rectangular coordinates ($a + bi$), polar layouts ($r(\\cos\\theta + i\\sin\\theta)$), and Euler expressions ($re^{i\\theta}$) allows complex equations to be managed using the most efficient arithmetic tool available.\r
`;export{e as default};