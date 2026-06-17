var e=`# Graphs of Sine, Cosine, and Tangent Functions

## Definition

Trigonometric functions are fundamental mathematical constructs that relate the angles of a right-angled triangle to the ratios of its side lengths. When we extend these ratios to all real numbers, we define the sine, cosine, and tangent functions as periodic, continuous, and differentiable functions.

The sine function, $f(x)=\\sin(x)$, maps a real number $x$ (typically representing an angle in radians) to the $y$-coordinate of a point on the unit circle at an angle of $x$ radians. The cosine function, $f(x)=\\cos(x)$, maps the same input to the $x$-coordinate of that point. The tangent function, $f(x)=\\tan(x)$, is defined as the ratio of the sine to the cosine: $f(x)=\\frac{\\sin(x)}{\\cos(x)}$.

These functions provide a mathematical framework for modeling periodic phenomena, such as wave motion, planetary orbits, electrical signals, and harmonic oscillations. By graphing these functions, we translate algebraic expressions into geometric representations, allowing for a deeper understanding of behavior, symmetry, and rates of change.

## Key Terminology

To analyze trigonometric graphs effectively, one must master several core concepts:

* **Period ($P$):** The length of the shortest interval over which the function repeats its values. For $\\sin(x)$ and $\\cos(x)$, the period is $2\\pi$. For $\\tan(x)$, the period is $\\pi$.
* **Amplitude ($A$):** The maximum displacement from the center line (equilibrium) of the wave. For standard $\\sin(x)$ and $\\cos(x)$, $A=1$. The tangent function has no defined amplitude because it is unbounded.
* **Phase Shift ($h$):** A horizontal translation of the graph. It represents the displacement of the function's starting point from the $y$-axis.
* **Vertical Shift ($k$):** A vertical translation of the graph, moving the center line of the wave up or down.
* **Frequency ($f$):** The number of complete cycles per unit interval. It is the reciprocal of the period, $f=\\frac{1}{P}$.
* **Asymptotes:** Vertical lines that the graph of a function approaches but never touches. The tangent function possesses infinite vertical asymptotes at values where $\\cos(x)=0$.

## Purpose

The study of trigonometric graphs serves three primary purposes:

1. **Modeling Periodicity:** Many physical systems are cyclical. Graphs allow engineers and scientists to visualize the timing and strength of waves, helping to predict future states in systems like audio frequencies or tides.
2. **Transformational Analysis:** By manipulating the parameters in the general form $y=A\\cdot trig(B(x-h))+k$, we can analyze how changing physical conditions (like tension in a string or voltage in a circuit) affect the output signal.
3. **Solving Equations:** Visual intersection points between two trigonometric functions (e.g., where $\\sin(x)=\\cos(x)$) provide graphical solutions to equations that might be difficult to solve algebraically.

## Fundamental Properties

The standard functions exhibit distinct behaviors. The sine function is an odd function, meaning $\\sin(-x)=-\\sin(x)$, reflecting symmetry about the origin. The cosine function is an even function, meaning $\\cos(-x)=\\cos(x)$, reflecting symmetry about the $y$-axis. The tangent function is also an odd function, $\\tan(-x)=-\\tan(x)$.

The following table summarizes the primary metrics for the parent functions:

| Function | Domain | Range | Period | Zeros | Asymptotes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $\\sin(x)$ | $(-\\infty, \\infty)$ | $[-1, 1]$ | $2\\pi$ | $n\\pi$ | None |
| $\\cos(x)$ | $(-\\infty, \\infty)$ | $[-1, 1]$ | $2\\pi$ | $\\frac{\\pi}{2}+n\\pi$ | None |
| $\\tan(x)$ | $x \\neq \\frac{\\pi}{2}+n\\pi$ | $(-\\infty, \\infty)$ | $\\pi$ | $n\\pi$ | $\\frac{\\pi}{2}+n\\pi$ |

Note: In the table above, $n$ represents any integer.

## Types & Variations

Trigonometric functions can be modified using transformations. The most generalized form is $y=A\\cdot \\text{trig}(B(x-h))+k$. The parameter $A$ scales the vertical stretch or compression. If $A < 0$, the graph is reflected across the $x$-axis. The parameter $B$ affects the frequency; specifically, the new period is $P=\\frac{2\\pi}{|B|}$ for sine/cosine and $P=\\frac{\\pi}{|B|}$ for tangent.

The interactive graph below demonstrates how parameters $A$, $B$, $h$, and $k$ influence the shape and position of the sine wave.

\`\`\`interactivegraph
A * \\sin(B * (x - h)) + k
params: A=1, B=1, h=0, k=0
range: A=0.5:3, B=0.5:3, h=-3:3, k=-2:2
\`\`\`

The graph above illustrates $f(x)=A\\sin(B(x-h))+k$. Users should observe how increasing $A$ stretches the wave vertically, increasing $B$ compresses the wave horizontally (increasing frequency), $h$ slides the wave left or right, and $k$ shifts the midline of oscillation.

For the tangent function, the interaction is slightly different because of the inherent asymptotes.

\`\`\`interactivegraph
\\tan(B * (x - h)) + k
params: B=1, h=0, k=0
range: B=0.5:3, h=-3:3, k=-5:5
\`\`\`

The graph above plots $f(x)=\\tan(B(x-h))+k$. Note how the asymptotes move in response to changes in $h$ and how the period changes as $B$ scales the horizontal input.

## How to Solve

To graph a complex trigonometric function, follow this systematic process:

1. **Identify the Parent Function:** Determine if it is sine, cosine, or tangent.
2. **Determine the Midline:** Set the constant $k$ as the horizontal centerline of the graph ($y=k$).
3. **Calculate the Period:** Use the coefficient $B$ to determine the horizontal repetition. For sine and cosine, $P=\\frac{2\\pi}{|B|}$. For tangent, $P=\\frac{\\pi}{|B|}$.
4. **Determine the Amplitude:** Note the absolute value of $A$. This determines the distance of the peaks and valleys from the midline.
5. **Identify the Phase Shift:** Determine the value $h$ by solving the argument of the function for $x=0$. If the expression is $B(x-h)$, the shift is $h$.
6. **Locate Key Points:**
   - For sine, plot points at $(h, k)$, $(h+\\frac{P}{4}, k+A)$, $(h+\\frac{P}{2}, k)$, $(h+\\frac{3P}{4}, k-A)$, and $(h+P, k)$.
   - For tangent, determine the position of the first two asymptotes by solving $B(x-h) = -\\frac{\\pi}{2}$ and $B(x-h) = \\frac{\\pi}{2}$. The function will cross the midline at the midpoint between these asymptotes.
7. **Sketch the Curve:** Draw a smooth, continuous wave connecting the key points, respecting the vertical asymptotes for tangent functions.

Example: To graph $y=2\\cos(2x - \\pi) + 1$:
- Rewrite as $y=2\\cos(2(x - \\frac{\\pi}{2})) + 1$.
- Amplitude $A=2$, vertical shift $k=1$, period $P = \\frac{2\\pi}{2} = \\pi$, phase shift $h = \\frac{\\pi}{2}$.
- The graph oscillates between $1+2=3$ and $1-2=-1$.
- The cycle begins at $x=\\frac{\\pi}{2}$ and completes at $x=\\frac{\\pi}{2}+\\pi = \\frac{3\\pi}{2}$.

## Summary

The study of trigonometric graphs is essential for understanding the geometry of rotation and the algebra of periodic signals. By identifying how amplitude, period, phase, and vertical shifts modify the parent functions $\\sin(x)$, $\\cos(x)$, and $\\tan(x)$, one gains the ability to map physical phenomena into a precise mathematical coordinate system.

The sine and cosine graphs are continuous, bounded waves representing harmonic oscillation, while the tangent graph is a discontinuous function characterized by repeating branches separated by vertical asymptotes. Mastery of these graphs requires a balance between understanding the coordinate geometry of the unit circle and the transformation principles of function theory. Whether determining the frequency of an alternating current or modeling the seasonal variation of temperatures, the visual analysis of these functions remains a cornerstone of applied mathematics and physical engineering. Utilizing the parameters of $A$, $B$, $h$, and $k$ allows for the exact modeling of virtually any simple periodic wave, serving as a gateway to more complex analyses such as Fourier series, where complex signals are synthesized from these fundamental trigonometric components.`;export{e as default};