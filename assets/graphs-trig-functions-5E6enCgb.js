var e=`# Graphs of Sine, Cosine, and Tangent Functions

## Definition

The trigonometric functions—sine, cosine, and tangent—are fundamental tools in mathematics used to relate the angles of a triangle to the lengths of its sides. When these functions are plotted on a Cartesian coordinate system, where the horizontal axis ($x$) represents the input angle (typically in radians) and the vertical axis ($y$) represents the function value, they produce distinct, periodic patterns.

A trigonometric function $f(x)$ is defined as periodic if there exists a positive constant $P$, called the period, such that $f(x+P) = f(x)$ for all $x$ in the domain. The sine and cosine functions are characterized by their smooth, continuous, wave-like oscillations, while the tangent function is characterized by periodic branches separated by vertical asymptotes. These graphs are essential for modeling physical phenomena such as sound waves, alternating current electricity, seasonal temperature fluctuations, and planetary motion.

## Key Terminology

To analyze these graphs effectively, one must understand several core descriptors that define their shape, position, and scale:

| Term | Definition |
| :--- | :--- |
| Period | The horizontal distance required for the function to complete one full cycle before it begins repeating. |
| Amplitude | Half the distance between the maximum and minimum values of the function; for standard sine and cosine, this is $1$. |
| Phase Shift | The horizontal displacement of the graph relative to the parent function. |
| Vertical Shift | The vertical displacement of the graph relative to the x-axis, often represented by a midline constant. |
| Frequency | The number of cycles the function completes within a unit interval, calculated as $f = 1/P$. |
| Asymptote | A line that a graph approaches arbitrarily closely but never touches or crosses, central to the behavior of $\\tan(x)$. |
| Midline | The horizontal line $y=k$ that acts as the center of oscillation for a periodic function. |

## Purpose

The primary purpose of graphing trigonometric functions is to translate abstract algebraic relationships into visual data that can be analyzed for trends. Graphs allow engineers, physicists, and mathematicians to observe instantaneous values, identify extrema (maximums and minimums), and calculate roots (where the function crosses the x-axis) across infinite domains.

By visualizing these functions, we gain insight into phase relationships. For example, the graph of $f(x) = \\cos(x)$ is simply the graph of $f(x) = \\sin(x)$ shifted horizontally by $\\pi/2$ units. This phase relationship is vital in fields like signal processing, where two waves might interfere constructively or destructively depending on their phase alignment. Furthermore, graphing complex combinations of sine and cosine functions allows for the representation of virtually any periodic waveform through the mechanism of Fourier series analysis.

## Fundamental Properties

The parent functions $f(x) = \\sin(x)$, $f(x) = \\cos(x)$, and $f(x) = \\tan(x)$ possess specific analytic properties that serve as the foundation for all trigonometric graphing.

### Sine and Cosine
The sine and cosine functions are continuous, smooth curves defined for all real numbers $x \\in (-\\infty, \\infty)$. Their range is strictly $[-1, 1]$. The period for both is $2\\pi$. The sine function is an odd function, meaning $\\sin(-x) = -\\sin(x)$, which implies symmetry with respect to the origin. The cosine function is an even function, meaning $\\cos(-x) = \\cos(x)$, which implies symmetry with respect to the y-axis.

### Tangent
The tangent function, defined as $f(x) = \\frac{\\sin(x)}{\\cos(x)}$, introduces critical differences. Because division by zero is undefined, the function has vertical asymptotes wherever $\\cos(x) = 0$. These occur at $x = \\frac{\\pi}{2} + n\\pi$ for any integer $n$. Unlike sine and cosine, the range of the tangent function is $(-\\infty, \\infty)$. The period of tangent is $\\pi$, not $2\\pi$.

The following interactive graph demonstrates how these basic properties are manipulated through transformation parameters.

\`\`\`interactivegraph
\\sin(ax + b) + c
params: a=1, b=0, c=0
range: a=0.1:3, b=-3:3, c=-2:2
\`\`\`

In the interactive plot above, adjusting $a$ modifies the frequency (and thus the period), $b$ controls the phase shift, and $c$ adjusts the vertical position (midline) of the sine wave. Similar logic applies to cosine and tangent functions.

## Types & Variations

Trigonometric graphs are usually expressed in the general form $y = A \\cdot \\text{trig}(B(x - C)) + D$. Each parameter plays a specific geometric role in transforming the parent graph.

### Transformations of Sine and Cosine
1. **Vertical Stretch/Compression ($A$):** The amplitude is $|A|$. If $A$ is negative, the graph is reflected across the midline.
2. **Horizontal Stretch/Compression ($B$):** The period $P$ is determined by $\\frac{2\\pi}{|B|}$. A larger $|B|$ compresses the graph horizontally.
3. **Phase Shift ($C$):** The graph slides horizontally. If $C > 0$, the shift is to the right.
4. **Vertical Shift ($D$):** The entire wave moves up or down, effectively moving the midline to $y = D$.

### Transformations of Tangent
The tangent function follows a similar pattern: $y = A \\cdot \\tan(B(x - C)) + D$. However, because the period of the parent tangent function is $\\pi$, the period of the transformed function is $\\frac{\\pi}{|B|}$. The asymptotes also shift accordingly; they are no longer at $\\frac{\\pi}{2} + n\\pi$ but are found by solving $B(x - C) = \\frac{\\pi}{2} + n\\pi$.

The following static graph illustrates the differences between the parent sine and cosine waves.

\`\`\`graph
\\sin(x)
\\cos(x)
\`\`\`

The graph above shows the periodic nature of $\\sin(x)$ (starting at the origin) and $\\cos(x)$ (starting at $1$ when $x=0$), emphasizing the $\\pi/2$ phase difference between them.

## How to Solve

To graph a trigonometric function effectively, follow a systematic five-step approach. This method ensures all features of the wave are captured accurately.

### Step 1: Identify Parameters
Rewrite the equation into the standard form $y = A \\cdot \\text{trig}(B(x - C)) + D$. Carefully extract the values for $A, B, C,$ and $D$. Note that $B$ must be factored out from the argument if it is not immediately obvious.

### Step 2: Determine Key Metrics
Calculate the following constants:
* **Amplitude:** $|A|$ (For sine/cosine only).
* **Period:** $P = \\frac{2\\pi}{|B|}$ for sine/cosine, and $P = \\frac{\\pi}{|B|}$ for tangent.
* **Midline:** $y = D$.
* **Phase Shift:** $C$.
* **Range:** $[D - |A|, D + |A|]$ for sine/cosine.

### Step 3: Locate Key Points
For sine and cosine, divide the period into four equal intervals (increments of $P/4$). Determine the coordinates at these intervals starting from the phase shift $C$. For example, a sine function starts at $(C, D)$, rises to $(C + P/4, D + A)$, returns to $(C + P/2, D)$, drops to $(C + 3P/4, D - A)$, and completes at $(C + P, D)$.

### Step 4: Define Asymptotes (For Tangent)
Tangent functions require identifying vertical asymptotes. Find two adjacent asymptotes by solving $B(x - C) = -\\frac{\\pi}{2}$ and $B(x - C) = \\frac{\\pi}{2}$. The tangent curve passes through the center point $(C, D)$ and approaches the asymptotes as $x$ increases or decreases.

### Step 5: Sketch the Curve
Plot the points determined in steps 3 or 4, draw the midline, and then sketch the continuous curve through the points. For sine and cosine, ensure the curves are rounded at the extrema. For tangent, ensure the curves approach the asymptotes asymptotically without crossing them.

## Summary

The study of trigonometric graphs provides a rigorous framework for understanding periodic oscillation. The sine and cosine functions are characterized by their continuous, bounded, wave-like behavior with a period of $2\\pi$, while the tangent function is defined by its recurring, unbounded branches and vertical asymptotes occurring every $\\pi$ units.

By manipulating the parameters within the general form $y = A \\cdot \\text{trig}(B(x - C)) + D$, we can stretch, compress, shift, and reflect these functions to model diverse real-world systems. Mastery of these graphs requires a balance of algebraic manipulation and geometric visualization. Understanding how to solve for period, amplitude, phase shift, and asymptotes allows for the precise representation of periodic phenomena, ensuring that we can accurately predict, measure, and analyze cycles within both theoretical mathematics and applied sciences. Through systematic graphing, the hidden order in oscillatory motion becomes clear, revealing the predictable structure of the trigonometric landscape.`;export{e as default};