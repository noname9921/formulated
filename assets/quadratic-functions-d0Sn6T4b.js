var e=`# Quadratic Functions\r
\r
## Definition\r
\r
A **quadratic function** is a polynomial function of degree $2$:\r
\r
$$f(x) = ax^2 + bx + c, \\quad a \\neq 0$$\r
\r
where $a$, $b$, and $c$ are real constants. The condition $a \\neq 0$ is strict — if $a = 0$, the function collapses into a linear function.\r
\r
The graph of every quadratic function is a **parabola** — a symmetric U-shaped (or inverted U-shaped) curve.\r
\r
---\r
\r
## Key Terminology\r
\r
| Term                  | Definition                                                                              |\r
| :-------------------- | :-------------------------------------------------------------------------------------- |\r
| Parabola              | The U-shaped curve that is the graph of every quadratic function                        |\r
| Vertex                | The turning point of the parabola — its highest or lowest point                         |\r
| Axis of Symmetry      | The vertical line $x = -\\dfrac{b}{2a}$ that divides the parabola into two mirror halves |\r
| Roots / Zeros         | The $x$ values where $f(x) = 0$ — where the parabola crosses the x-axis                 |\r
| Y-intercept           | The value $f(0) = c$ — where the parabola crosses the y-axis                            |\r
| Discriminant          | $\\Delta = b^2 - 4ac$ — determines the number and nature of roots                        |\r
| Leading Coefficient   | The coefficient $a$ of $x^2$ — controls direction and width of the parabola             |\r
| Standard Form         | $f(x) = ax^2 + bx + c$                                                                  |\r
| Vertex Form           | $f(x) = a(x - h)^2 + k$ where $(h, k)$ is the vertex                                    |\r
| Factored Form         | $f(x) = a(x - r_1)(x - r_2)$ where $r_1$, $r_2$ are roots                               |\r
| Completing the Square | Rewriting $ax^2 + bx + c$ into vertex form                                              |\r
\r
---\r
\r
## Purpose\r
\r
Quadratic functions model any situation where a quantity changes at a **non-constant, linearly increasing rate**:\r
\r
- **Physics** — projectile motion, free fall, trajectory of thrown objects\r
- **Engineering** — parabolic arches, satellite dishes, reflectors\r
- **Economics** — profit maximization, cost and revenue modeling\r
- **Optimization** — finding maximum area, minimum cost, peak height\r
- **Geometry** — area as a function of side length\r
\r
Whenever you see the word _maximum_ or _minimum_ in an algebra problem, a quadratic is almost certainly involved.\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Direction of Opening\r
\r
The sign of $a$ determines which way the parabola opens:\r
\r
- $a > 0$ — opens **upward**, vertex is a **minimum**\r
- $a < 0$ — opens **downward**, vertex is a **maximum**\r
\r
### Vertex\r
\r
The vertex $(h, k)$ is the most important point on the parabola:\r
\r
$$h = -\\frac{b}{2a}, \\qquad k = f(h) = f\\!\\left(-\\frac{b}{2a}\\right)$$\r
\r
### Axis of Symmetry\r
\r
The parabola is symmetric about the vertical line:\r
\r
$$x = -\\frac{b}{2a}$$\r
\r
For any point $(x_0, y_0)$ on the parabola, the mirror point $\\left(2h - x_0,\\ y_0\\right)$ is also on the parabola.\r
\r
### Domain and Range\r
\r
For any quadratic $f(x) = ax^2 + bx + c$:\r
\r
- Domain: $(-\\infty, \\infty)$\r
\r
- Range when $a > 0$: $[k, \\infty)$\r
\r
- Range when $a < 0$: $(-\\infty, k]$\r
\r
where $k$ is the y-coordinate of the vertex.\r
\r
### The Discriminant\r
\r
$$\\Delta = b^2 - 4ac$$\r
\r
| Discriminant | Number of Real Roots    | Graph Behavior                 |\r
| :----------- | :---------------------- | :----------------------------- |\r
| $\\Delta > 0$ | Two distinct real roots | Parabola crosses x-axis twice  |\r
| $\\Delta = 0$ | One repeated real root  | Parabola touches x-axis once   |\r
| $\\Delta < 0$ | No real roots           | Parabola does not touch x-axis |\r
\r
### Y-intercept\r
\r
Setting $x = 0$ in any form gives:\r
\r
$$f(0) = c$$\r
\r
The y-intercept is always $(0, c)$ directly from the standard form.\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. Standard Form\r
\r
$$f(x) = ax^2 + bx + c$$\r
\r
The default expanded form. Best for identifying the y-intercept $c$ and computing the discriminant $\\Delta = b^2 - 4ac$.\r
\r
**Example:** $f(x) = 2x^2 - 4x + 1$\r
\r
---\r
\r
### 2. Vertex Form\r
\r
$$f(x) = a(x - h)^2 + k$$\r
\r
Best for identifying the vertex $(h, k)$ and axis of symmetry $x = h$ directly.\r
\r
**Example:** $f(x) = 2(x - 1)^2 - 1$ has vertex $(1, -1)$\r
\r
To convert from standard form, complete the square (see How to Solve).\r
\r
---\r
\r
### 3. Factored Form\r
\r
$$f(x) = a(x - r_1)(x - r_2)$$\r
\r
Best for identifying roots $r_1$ and $r_2$ directly. Only expressible in this form when real roots exist.\r
\r
**Example:** $f(x) = 2(x - 3)(x + 1)$ has roots $x = 3$ and $x = -1$\r
\r
---\r
\r
### 4. Perfect Square Quadratic\r
\r
$$f(x) = a(x - h)^2$$\r
\r
A special case of vertex form where $k = 0$. The vertex sits on the x-axis and is the only root (a repeated root):\r
\r
$$\\Delta = 0$$\r
\r
---\r
\r
### 5. Pure Quadratic\r
\r
$$f(x) = ax^2 + c \\quad (b = 0)$$\r
\r
No linear term. Axis of symmetry is always the y-axis ($x = 0$), vertex at $(0, c)$.\r
\r
**Example:** $f(x) = 3x^2 - 12$ — symmetric about y-axis, roots at $x = \\pm 2$\r
\r
---\r
\r
### 6. Upward vs. Downward Parabola\r
\r
**Upward** ($a > 0$):\r
\r
$$f(x) = x^2 - 4x + 3$$\r
\r
Minimum vertex, range $[k, \\infty)$.\r
\r
**Downward** ($a < 0$):\r
\r
$$f(x) = -x^2 + 4x - 3$$\r
\r
Maximum vertex, range $(-\\infty, k]$.\r
\r
---\r
\r
## How to Solve\r
\r
### Solving $f(x) = 0$ by Factoring\r
\r
Set the function equal to zero, factor, apply the zero product property.\r
\r
**Example:** Solve $x^2 - 5x + 6 = 0$\r
\r
Factor:\r
\r
$$(x - 2)(x - 3) = 0$$\r
\r
$$x - 2 = 0 \\quad \\text{or} \\quad x - 3 = 0$$\r
\r
$$\\boxed{x = 2 \\quad \\text{or} \\quad x = 3}$$\r
\r
---\r
\r
### Solving by the Quadratic Formula\r
\r
For any $ax^2 + bx + c = 0$, the roots are:\r
\r
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\r
\r
This always works regardless of whether the quadratic factors nicely.\r
\r
**Example:** Solve $2x^2 - 4x - 6 = 0$\r
\r
$$x = \\frac{4 \\pm \\sqrt{(-4)^2 - 4(2)(-6)}}{2(2)} = \\frac{4 \\pm \\sqrt{16 + 48}}{4} = \\frac{4 \\pm \\sqrt{64}}{4} = \\frac{4 \\pm 8}{4}$$\r
\r
$$x = \\frac{4 + 8}{4} = 3 \\qquad \\text{or} \\qquad x = \\frac{4 - 8}{4} = -1$$\r
\r
$$\\boxed{x = 3 \\quad \\text{or} \\quad x = -1}$$\r
\r
---\r
\r
### Solving by Completing the Square\r
\r
Rewrite the quadratic so the left side is a perfect square, then take square roots.\r
\r
**Example:** Solve $x^2 + 6x + 5 = 0$\r
\r
**Step 1 — Move the constant:**\r
\r
$$x^2 + 6x = -5$$\r
\r
**Step 2 — Add $\\left(\\dfrac{6}{2}\\right)^2 = 9$ to both sides:**\r
\r
$$x^2 + 6x + 9 = 4$$\r
\r
**Step 3 — Write as a perfect square:**\r
\r
$$(x + 3)^2 = 4$$\r
\r
**Step 4 — Take square roots:**\r
\r
$$x + 3 = \\pm 2$$\r
\r
$$\\boxed{x = -1 \\quad \\text{or} \\quad x = -5}$$\r
\r
---\r
\r
### Converting to Vertex Form\r
\r
**Example:** Convert $f(x) = 2x^2 - 8x + 3$ to vertex form.\r
\r
**Step 1 — Factor $a$ from the first two terms:**\r
\r
$$f(x) = 2(x^2 - 4x) + 3$$\r
\r
**Step 2 — Complete the square inside the bracket:**\r
\r
$$\\left(\\frac{4}{2}\\right)^2 = 4$$\r
\r
$$f(x) = 2(x^2 - 4x + 4 - 4) + 3$$\r
\r
$$f(x) = 2((x - 2)^2 - 4) + 3$$\r
\r
**Step 3 — Expand and simplify:**\r
\r
$$f(x) = 2(x - 2)^2 - 8 + 3$$\r
\r
$$\\boxed{f(x) = 2(x - 2)^2 - 5}$$\r
\r
Vertex is $(2, -5)$.\r
\r
---\r
\r
### Finding the Vertex Directly\r
\r
From standard form $f(x) = ax^2 + bx + c$:\r
\r
$$h = -\\frac{b}{2a}, \\qquad k = f(h)$$\r
\r
**Example:** $f(x) = x^2 - 4x + 1$\r
\r
$$h = -\\frac{-4}{2(1)} = 2$$\r
\r
$$k = f(2) = 4 - 8 + 1 = -3$$\r
\r
$$\\text{Vertex: } (2, -3)$$\r
\r
---\r
\r
### Optimization (Max / Min Problems)\r
\r
The vertex gives the maximum or minimum value of the function.\r
\r
**Example:** A ball is thrown upward. Its height in meters is:\r
\r
$$h(t) = -5t^2 + 20t + 2$$\r
\r
Find the maximum height.\r
\r
$$t = -\\frac{20}{2(-5)} = 2 \\text{ seconds}$$\r
\r
$$h(2) = -5(4) + 20(2) + 2 = -20 + 40 + 2 = 22 \\text{ m}$$\r
\r
$$\\boxed{\\text{Maximum height} = 22 \\text{ m at } t = 2 \\text{ s}}$$\r
\r
---\r
\r
## Summary\r
\r
| Concept           | Formula / Rule                            |\r
| :---------------- | :---------------------------------------- |\r
| Standard Form     | $f(x) = ax^2 + bx + c$                    |\r
| Vertex Form       | $f(x) = a(x-h)^2 + k$                     |\r
| Factored Form     | $f(x) = a(x - r_1)(x - r_2)$              |\r
| Vertex            | $h = -\\dfrac{b}{2a}$, $k = f(h)$          |\r
| Axis of Symmetry  | $x = -\\dfrac{b}{2a}$                      |\r
| Quadratic Formula | $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ |\r
| Discriminant      | $\\Delta = b^2 - 4ac$                      |\r
| $\\Delta > 0$      | Two distinct real roots                   |\r
| $\\Delta = 0$      | One repeated real root                    |\r
| $\\Delta < 0$      | No real roots                             |\r
| Opens upward      | $a > 0$ — minimum at vertex               |\r
| Opens downward    | $a < 0$ — maximum at vertex               |\r
| Y-intercept       | $(0,\\ c)$                                 |\r
\r
Quadratic functions are where algebra begins to feel genuinely powerful — they introduce optimization, non-linear behavior, and the discriminant, all of which echo throughout calculus, physics, and beyond.\r
`;export{e as default};