var e=`# Linear Functions\r
\r
## Definition\r
\r
A **linear function** is a function of the form:\r
\r
$$f(x) = mx + b$$\r
\r
where $m$ and $b$ are real constants. It produces a **straight line** when graphed, with a constant rate of change throughout its entire domain.\r
\r
The term _linear_ comes from the fact that the graph is always a line — no curves, no bends, no turning points.\r
\r
---\r
\r
## Key Terminology\r
\r
| Term                 | Definition                                                                        |\r
| :------------------- | :-------------------------------------------------------------------------------- |\r
| Slope ($m$)          | The rate of change — how much $y$ changes per unit increase in $x$                |\r
| Y-intercept ($b$)    | The value of $f(x)$ when $x = 0$ — where the line crosses the y-axis              |\r
| X-intercept          | The value of $x$ when $f(x) = 0$ — where the line crosses the x-axis              |\r
| Rate of Change       | How fast the output changes relative to the input — constant for linear functions |\r
| Slope-Intercept Form | $f(x) = mx + b$ — the standard form of a linear function                          |\r
| Point-Slope Form     | $y - y_1 = m(x - x_1)$ — built from a known point and slope                       |\r
| Standard Form        | $ax + by = c$ — both variables on one side                                        |\r
| Constant Function    | A linear function where $m = 0$, giving $f(x) = b$                                |\r
| Zero of a Function   | The $x$ value where $f(x) = 0$                                                    |\r
| Parallel Lines       | Two lines with the same slope $m$ but different intercepts                        |\r
| Perpendicular Lines  | Two lines whose slopes multiply to $-1$                                           |\r
\r
---\r
\r
## Purpose\r
\r
Linear functions are the **simplest and most fundamental** class of functions in mathematics:\r
\r
- **Modeling** — constant-speed motion, flat-rate pricing, unit conversion\r
- **Approximation** — approximating nonlinear behavior near a point (basis of calculus)\r
- **Systems of equations** — most introductory systems are linear\r
- **Statistics** — linear regression finds the best-fit line through data\r
- **Economics** — supply, demand, and cost functions are often modeled linearly\r
\r
Any time a quantity changes at a **constant rate**, a linear function describes it exactly.\r
\r
---\r
\r
## Fundamental Properties\r
\r
### Constant Rate of Change\r
\r
For any two points on a linear function, the ratio of the change in output to the change in input is always the same:\r
\r
$$m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$\r
\r
This is what makes the function _linear_ — the slope $m$ never changes.\r
\r
### Domain and Range\r
\r
For any linear function $f(x) = mx + b$ where $m \\neq 0$:\r
\r
- Domain: $(-\\infty, \\infty)$\r
- Range: $(-\\infty, \\infty)$\r
\r
For a constant function $f(x) = b$ (where $m = 0$):\r
\r
- Domain: $(-\\infty, \\infty)$\r
- Range: $\\{b\\}$\r
\r
### One-to-One (when $m \\neq 0$)\r
\r
Every output corresponds to exactly one input — linear functions with nonzero slope are bijective over the reals and therefore **invertible**.\r
\r
### Linearity Properties\r
\r
A function $f$ is linear in the algebraic sense if it satisfies:\r
\r
$$f(x_1 + x_2) = f(x_1) + f(x_2)$$\r
\r
$$f(cx) = c \\cdot f(x)$$\r
\r
Note: $f(x) = mx + b$ satisfies these only when $b = 0$. When $b \\neq 0$, it is technically an **affine** function — though it is universally called linear in algebra.\r
\r
### Slope Relationships\r
\r
For two lines with slopes $m_1$ and $m_2$:\r
\r
**Parallel:** $m_1 = m_2$ and different intercepts\r
\r
**Perpendicular:** $m_1 \\cdot m_2 = -1$, equivalently $m_2 = -\\dfrac{1}{m_1}$\r
\r
---\r
\r
## Types & Variations\r
\r
### 1. Slope-Intercept Form\r
\r
The most common form:\r
\r
$$f(x) = mx + b$$\r
\r
- $m$ is the slope\r
- $b$ is the y-intercept\r
\r
**Example:** $f(x) = 3x - 2$ has slope $3$ and y-intercept $-2$\r
\r
---\r
\r
### 2. Point-Slope Form\r
\r
Used when a point $(x_1, y_1)$ and slope $m$ are known:\r
\r
$$y - y_1 = m(x - x_1)$$\r
\r
**Example:** Line through $(2, 5)$ with slope $4$:\r
\r
$$y - 5 = 4(x - 2)$$\r
\r
$$y = 4x - 3$$\r
\r
---\r
\r
### 3. Standard Form\r
\r
$$ax + by = c$$\r
\r
where $a$, $b$, $c$ are integers and $a \\geq 0$. Neither variable is isolated.\r
\r
**Example:** $2x + 3y = 12$\r
\r
Useful for finding both intercepts quickly:\r
\r
- Set $x = 0$: $y = 4$ (y-intercept)\r
- Set $y = 0$: $x = 6$ (x-intercept)\r
\r
---\r
\r
### 4. Constant Function\r
\r
When $m = 0$:\r
\r
$$f(x) = b$$\r
\r
Horizontal line at height $b$. Every input maps to the same output.\r
\r
**Example:** $f(x) = 7$ — a flat line at $y = 7$\r
\r
---\r
\r
### 5. Identity Function\r
\r
$$f(x) = x$$\r
\r
A special case where $m = 1$ and $b = 0$. The line passes through the origin at a $45°$ angle.\r
\r
---\r
\r
### 6. Direct Variation\r
\r
$$f(x) = mx$$\r
\r
A linear function through the origin ($b = 0$). Output is directly proportional to input — doubling $x$ doubles $f(x)$.\r
\r
$$\\frac{f(x)}{x} = m = \\text{constant}$$\r
\r
---\r
\r
### 7. Increasing vs. Decreasing\r
\r
- $m > 0$ — function is **increasing** (line rises left to right)\r
- $m < 0$ — function is **decreasing** (line falls left to right)\r
- $m = 0$ — function is **constant** (horizontal line)\r
\r
---\r
\r
## How to Solve\r
\r
### Finding Slope from Two Points\r
\r
Given $(x_1, y_1)$ and $(x_2, y_2)$:\r
\r
$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$\r
\r
**Example:** Find the slope through $(1, 3)$ and $(4, 9)$:\r
\r
$$m = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$$\r
\r
---\r
\r
### Writing the Equation of a Line\r
\r
**Given slope and y-intercept** — plug directly into $f(x) = mx + b$\r
\r
**Given slope $m$ and point $(x_1, y_1)$:**\r
\r
**Step 1 — Use point-slope form:**\r
\r
$$y - y_1 = m(x - x_1)$$\r
\r
**Step 2 — Solve for $y$:**\r
\r
$$y = mx - mx_1 + y_1$$\r
\r
**Example:** Slope $m = 3$, point $(2, 7)$:\r
\r
$$y - 7 = 3(x - 2)$$\r
\r
$$y - 7 = 3x - 6$$\r
\r
$$\\boxed{y = 3x + 1}$$\r
\r
---\r
\r
**Given two points:**\r
\r
**Step 1 — Find slope:**\r
\r
$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$\r
\r
**Step 2 — Use point-slope form with either point.**\r
\r
**Example:** Through $(1, 2)$ and $(3, 8)$:\r
\r
$$m = \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$$\r
\r
$$y - 2 = 3(x - 1)$$\r
\r
$$\\boxed{y = 3x - 1}$$\r
\r
---\r
\r
### Finding the X-Intercept\r
\r
Set $f(x) = 0$ and solve for $x$:\r
\r
$$mx + b = 0 \\implies x = -\\frac{b}{m}$$\r
\r
**Example:** $f(x) = 2x - 6$:\r
\r
$$0 = 2x - 6 \\implies x = 3$$\r
\r
X-intercept is $(3, 0)$.\r
\r
---\r
\r
### Finding the Inverse\r
\r
For $f(x) = mx + b$ where $m \\neq 0$:\r
\r
**Step 1 — Replace $f(x)$ with $y$:**\r
\r
$$y = mx + b$$\r
\r
**Step 2 — Swap $x$ and $y$:**\r
\r
$$x = my + b$$\r
\r
**Step 3 — Solve for $y$:**\r
\r
$$y = \\frac{x - b}{m}$$\r
\r
$$\\boxed{f^{-1}(x) = \\frac{x - b}{m}}$$\r
\r
---\r
\r
### Writing Parallel and Perpendicular Lines\r
\r
**Parallel** to $y = 2x + 5$ through $(1, 3)$ — same slope $m = 2$:\r
\r
$$y - 3 = 2(x - 1) \\implies y = 2x + 1$$\r
\r
**Perpendicular** to $y = 2x + 5$ through $(1, 3)$ — slope $m = -\\dfrac{1}{2}$:\r
\r
$$y - 3 = -\\frac{1}{2}(x - 1) \\implies y = -\\frac{1}{2}x + \\frac{7}{2}$$\r
\r
---\r
\r
## Summary\r
\r
| Concept               | Formula / Rule                     |\r
| :-------------------- | :--------------------------------- |\r
| Slope-Intercept Form  | $f(x) = mx + b$                    |\r
| Point-Slope Form      | $y - y_1 = m(x - x_1)$             |\r
| Standard Form         | $ax + by = c$                      |\r
| Slope from two points | $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ |\r
| X-intercept           | Set $f(x) = 0$, solve for $x$      |\r
| Y-intercept           | Set $x = 0$, evaluate $f(0) = b$   |\r
| Inverse               | $f^{-1}(x) = \\dfrac{x - b}{m}$     |\r
| Parallel lines        | Equal slopes: $m_1 = m_2$          |\r
| Perpendicular lines   | $m_1 \\cdot m_2 = -1$               |\r
| Direct variation      | $f(x) = mx$, passes through origin |\r
\r
Linear functions are the entry point into all of mathematics — simple enough to fully understand, yet powerful enough to model an enormous range of real-world phenomena. Mastering them is mastering the foundation.\r
`;export{e as default};