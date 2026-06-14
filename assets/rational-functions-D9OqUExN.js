var e=`# Rational Functions\r
\r
## Definition\r
\r
A **rational function** is any function of the form:\r
\r
$$\r
f(x) = \\frac{P(x)}{Q(x)}\r
$$\r
\r
where $P(x)$ and $Q(x)$ are both polynomials, and $Q(x) \\neq 0$.\r
\r
The domain of $f(x)$ excludes all values of $x$ where $Q(x) = 0$.\r
\r
---\r
\r
## Key Terminology\r
\r
**Numerator polynomial** — the polynomial $P(x)$ on top.\r
\r
**Denominator polynomial** — the polynomial $Q(x)$ on the bottom.\r
\r
**Restriction** — a value of $x$ excluded from the domain because it makes $Q(x) = 0$.\r
\r
**Vertical Asymptote** — a vertical line $x = a$ where the function grows without bound, occurring when $Q(a) = 0$ and $P(a) \\neq 0$.\r
\r
**Horizontal Asymptote** — a horizontal line $y = L$ that $f(x)$ approaches as $x \\to \\pm\\infty$.\r
\r
**Oblique (Slant) Asymptote** — a non-horizontal, non-vertical line that $f(x)$ approaches as $x \\to \\pm\\infty$, occurring when $\\deg(P) = \\deg(Q) + 1$.\r
\r
**Hole (Removable Discontinuity)** — a point excluded from the graph where a common factor cancels from both $P(x)$ and $Q(x)$.\r
\r
**Degree** — the highest power of $x$ in a polynomial.\r
\r
---\r
\r
## Purpose\r
\r
Rational functions model real-world phenomena where one quantity depends inversely or fractionally on another. Common applications include:\r
\r
- **Physics**: modeling gravitational force, $F = \\frac{Gm_1 m_2}{r^2}$\r
- **Economics**: average cost functions, $\\bar{C}(x) = \\frac{C(x)}{x}$\r
- **Engineering**: transfer functions in control systems\r
- **Chemistry**: reaction rate equations\r
\r
They are also foundational in calculus — partial fraction decomposition, limits, and improper integrals all rely heavily on rational functions.\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Domain\r
\r
The domain is all real numbers except where $Q(x) = 0$:\r
\r
$$\r
\\text{Domain} = \\{ x \\in \\mathbb{R} \\mid Q(x) \\neq 0 \\}\r
$$\r
\r
### Vertical Asymptotes\r
\r
After fully simplifying $f(x)$, set the remaining denominator equal to zero. Each solution $x = a$ is a vertical asymptote.\r
\r
$$\r
Q(a) = 0 \\quad \\text{and} \\quad P(a) \\neq 0 \\implies x = a \\text{ is a vertical asymptote}\r
$$\r
\r
### Horizontal Asymptotes\r
\r
Let $n = \\deg(P)$ and $m = \\deg(Q)$, with leading coefficients $a$ and $b$ respectively.\r
\r
| Condition | Horizontal Asymptote     |\r
| --------- | ------------------------ |\r
| $n < m$   | $y = 0$                  |\r
| $n = m$   | $y = \\dfrac{a}{b}$       |\r
| $n > m$   | None (check for oblique) |\r
\r
### Oblique Asymptote\r
\r
When $n = m + 1$, divide $P(x)$ by $Q(x)$ using polynomial long division:\r
\r
$$\r
f(x) = (\\text{linear quotient}) + \\frac{\\text{remainder}}{Q(x)}\r
$$\r
\r
As $x \\to \\pm\\infty$, the remainder term vanishes, leaving the oblique asymptote.\r
\r
### Holes\r
\r
Factor both $P(x)$ and $Q(x)$. Any common factor $(x - c)$ that cancels produces a hole at $x = c$.\r
\r
The $y$-coordinate of the hole is:\r
\r
$$\r
y = \\lim_{x \\to c} f(x)\r
$$\r
\r
### Zeros (x-intercepts)\r
\r
Set the simplified numerator equal to zero:\r
\r
$$\r
P(x) = 0 \\implies \\text{zeros of } f(x)\r
$$\r
\r
Values that also make $Q(x) = 0$ are holes, not zeros.\r
\r
### End Behavior\r
\r
As $x \\to \\pm\\infty$, the behavior is governed by the ratio of leading terms:\r
\r
$$\r
f(x) \\approx \\frac{a_n x^n}{b_m x^m} = \\frac{a_n}{b_m} x^{n - m}\r
$$\r
\r
---\r
\r
## Types & Variations\r
\r
### Proper Rational Function\r
\r
$$\r
\\deg(P) < \\deg(Q)\r
$$\r
\r
The horizontal asymptote is always $y = 0$. Example:\r
\r
$$\r
f(x) = \\frac{3x + 1}{x^2 - 4}\r
$$\r
\r
### Improper Rational Function\r
\r
$$\r
\\deg(P) \\geq \\deg(Q)\r
$$\r
\r
Can be rewritten via polynomial division as a polynomial plus a proper rational function. Example:\r
\r
$$\r
f(x) = \\frac{x^3 + 2x}{x^2 - 1} = x + \\frac{3x}{x^2 - 1}\r
$$\r
\r
### Simple (Unit) Rational Function\r
\r
The most elementary form:\r
\r
$$\r
f(x) = \\frac{1}{x}\r
$$\r
\r
This is the parent function. It has a vertical asymptote at $x = 0$, horizontal asymptote at $y = 0$, and is defined on $(-\\infty, 0) \\cup (0, \\infty)$.\r
\r
### Rational Function with a Hole\r
\r
$$\r
f(x) = \\frac{(x-2)(x+3)}{(x-2)(x-1)}\r
$$\r
\r
The factor $(x - 2)$ cancels, leaving a hole at $x = 2$ and a vertical asymptote at $x = 1$.\r
\r
### Rational Function with Oblique Asymptote\r
\r
$$\r
f(x) = \\frac{x^2 + 3x + 5}{x + 1}\r
$$\r
\r
Performing long division:\r
\r
$$\r
f(x) = x + 2 + \\frac{3}{x+1}\r
$$\r
\r
So the oblique asymptote is $y = x + 2$.\r
\r
---\r
\r
## How to Solve\r
\r
### Finding the Domain\r
\r
1. Set $Q(x) = 0$ and solve for $x$.\r
2. Exclude those values from $\\mathbb{R}$.\r
\r
**Example**: $f(x) = \\dfrac{2x}{x^2 - 9}$\r
\r
$$\r
x^2 - 9 = 0 \\implies x = \\pm 3\r
$$\r
\r
Domain: $(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$\r
\r
---\r
\r
### Simplifying & Identifying Holes\r
\r
1. Factor $P(x)$ and $Q(x)$ fully.\r
2. Cancel common factors — each cancellation is a hole.\r
3. Note the $x$-value of the hole, then substitute into the simplified function for the $y$-value.\r
\r
**Example**: $f(x) = \\dfrac{x^2 - x - 6}{x^2 - 5x + 6}$\r
\r
$$\r
= \\frac{(x-3)(x+2)}{(x-3)(x-2)}= \\frac{x+2}{x-2}, \\quad x \\neq 3\r
$$\r
\r
Hole at $x = 3$:\r
\r
$$\r
y = \\frac{3+2}{3-2} = 5 \\implies \\text{hole at } (3,\\ 5)\r
$$\r
\r
---\r
\r
### Finding Asymptotes\r
\r
**Vertical**: from remaining denominator after simplification.\r
\r
**Horizontal**: compare degrees of $P$ and $Q$ using the table in Fundamental Properties.\r
\r
**Oblique**: apply polynomial long division when $\\deg(P) = \\deg(Q) + 1$.\r
\r
**Example**: $f(x) = \\dfrac{2x^2 + 3}{x^2 - 1}$\r
\r
- $\\deg(P) = \\deg(Q) = 2$, so horizontal asymptote: $y = \\dfrac{2}{1} = 2$\r
- Vertical asymptotes: $x^2 - 1 = 0 \\implies x = \\pm 1$\r
\r
---\r
\r
### Solving Rational Equations\r
\r
A rational equation sets a rational function equal to a value. Steps:\r
\r
1. Find the LCD (Least Common Denominator).\r
2. Multiply both sides by the LCD to clear all fractions.\r
3. Solve the resulting polynomial equation.\r
4. **Check** all solutions against the original restrictions — any solution that makes $Q(x) = 0$ is extraneous.\r
\r
**Example**: Solve $\\dfrac{1}{x-2} + \\dfrac{1}{x+2} = \\dfrac{4}{x^2-4}$\r
\r
LCD $= (x-2)(x+2)$, multiply through:\r
\r
$$\r
(x+2) + (x-2) = 4\r
$$\r
\r
$$\r
2x = 4 \\implies x = 2\r
$$\r
\r
But $x = 2$ makes the denominator zero — **extraneous solution**. No solution.\r
\r
---\r
\r
### Solving Rational Inequalities\r
\r
1. Move everything to one side: $f(x) \\gtreqqless 0$\r
2. Find zeros of numerator and denominator — these are **critical points**.\r
3. Use a sign chart: test each interval between critical points.\r
4. Write the solution in interval notation, **excluding** points where $Q(x) = 0$.\r
\r
**Example**: $\\dfrac{x - 1}{x + 3} > 0$\r
\r
Critical points: $x = 1$ (zero), $x = -3$ (restriction)\r
\r
| Interval     | Sign of $(x-1)$ | Sign of $(x+3)$ | Sign of $f(x)$ |\r
| ------------ | --------------- | --------------- | -------------- |\r
| $x < -3$     | $-$             | $-$             | $+$            |\r
| $-3 < x < 1$ | $-$             | $+$             | $-$            |\r
| $x > 1$      | $+$             | $+$             | $+$            |\r
\r
Solution: $(-\\infty,\\ -3) \\cup (1,\\ \\infty)$\r
\r
---\r
\r
## Summary\r
\r
A rational function $f(x) = \\dfrac{P(x)}{Q(x)}$ is built from two polynomials and carries rich structure through its asymptotes, holes, and domain restrictions. The key workflow for analyzing one is:\r
\r
1. **Factor** both $P(x)$ and $Q(x)$\r
2. **Cancel** common factors → identify holes\r
3. **Set denominator to zero** → domain restrictions and vertical asymptotes\r
4. **Compare degrees** → determine horizontal or oblique asymptote\r
5. **Set numerator to zero** → find $x$-intercepts\r
6. **Check end behavior** via leading terms\r
\r
Mastering rational functions is a prerequisite for partial fractions, limits at discontinuities, curve sketching, and a large chunk of integral calculus.\r
`;export{e as default};