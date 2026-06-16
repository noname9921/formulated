var e=`# Periodic Behavior, Amplitude, Phase Shifts, and Vertical Translations

## Definition

Periodic behavior is a fundamental concept in mathematics and physics describing phenomena that repeat their values at regular intervals. A function $f(x)$ is defined as periodic if there exists a non-zero constant $T$, known as the period, such that $f(x+T) = f(x)$ for all $x$ in the domain of the function. The smallest such positive value $T$ is referred to as the fundamental period.

In the context of trigonometric functions, these behaviors are governed by the general sinusoidal model:
$$f(x) = A\\sin(B(x - C)) + D$$
where $A$ represents amplitude, $B$ relates to the frequency and period, $C$ represents the horizontal phase shift, and $D$ represents the vertical translation (midline). This model serves as the primary mathematical framework for analyzing oscillatory systems, including sound waves, alternating current, mechanical vibrations, and circadian rhythms. By manipulating these parameters, we can describe the entire family of sinusoidal waves that model real-world cyclical motion.

## Key Terminology

To analyze the transformation of periodic functions, one must master the nomenclature associated with sinusoidal oscillations:

| Term | Definition | Mathematical Significance |
| :--- | :--- | :--- |
| Period ($T$) | The distance along the x-axis for one complete cycle. | $T = \\frac{2\\pi}{|B|}$ |
| Amplitude ($A$) | The maximum displacement from the midline. | $|A| = \\frac{\\text{max} - \\text{min}}{2}$ |
| Phase Shift ($C$) | The horizontal displacement of the function. | Determines the starting point of a cycle relative to $x=0$. |
| Midline ($D$) | The horizontal axis of symmetry for the wave. | $D = \\frac{\\text{max} + \\text{min}}{2}$ |
| Frequency ($f$) | The number of cycles completed per unit interval. | $f = \\frac{1}{T} = \\frac{|B|}{2\\pi}$ |
| Angular Frequency ($B$) | The coefficient that scales the input variable $x$. | Governs the compression or expansion of the period. |

## Purpose

The study of periodic behavior is essential because nature is inherently rhythmic. The purpose of understanding these specific transformations—amplitude, frequency, phase, and vertical translation—is to build a predictive model for oscillating systems. 

Historically, this began with the study of circular motion in astronomy. Ancient mathematicians observed that the positions of celestial bodies repeated, leading to the development of early trigonometry. In modern engineering, these transformations allow us to design signal processing hardware (such as equalizers that adjust amplitude) and communications technology (such as phase-shift keying). Furthermore, vertical translations are used in data science to normalize periodic signals, ensuring that seasonal trends or background "noise" levels are accounted for in regression models. Without the ability to quantify these four parameters, our capacity to analyze alternating currents, sound synthesis, or quantum wave functions would be severely limited.

## Fundamental Properties

The general sinusoidal function $f(x) = A\\sin(B(x - C)) + D$ carries specific properties derived from the unit circle:

1. **Amplitude ($A$):** This acts as a vertical stretch factor. If $|A| > 1$, the function is vertically stretched; if $0 < |A| < 1$, it is compressed. If $A$ is negative, the graph undergoes a reflection over the midline.
2. **Periodicity ($B$):** The coefficient $B$ performs a horizontal transformation. Specifically, $B$ serves as a horizontal compression factor of $1/B$. Because the standard period of $\\sin(x)$ is $2\\pi$, the new period $T$ is adjusted such that $BT = 2\\pi$.
3. **Phase Shift ($C$):** This constant dictates the horizontal translation. If $C > 0$, the graph shifts to the right; if $C < 0$, it shifts to the left. It essentially redefines the starting point of the oscillation.
4. **Vertical Translation ($D$):** This shifts the entire wave up or down. It effectively moves the midline of the function away from the x-axis ($y=0$). The range of the function is modified from $[-A, A]$ to $[D-A, D+A]$.

\`\`\`interactivegraph
A * \\sin(B * (x - C)) + D
params: A=1, B=1, C=0, D=0
range: A=-3:3, B=-3:3, C=-3:3, D=-3:3
\`\`\`

In the interactive graph above, observe how varying $A$ changes the peak-to-trough distance, while $B$ adjusts how many cycles fit within a fixed interval. Moving $C$ slides the graph horizontally, and $D$ shifts the entire oscillation vertically.

## Types & Variations

There are several variations of periodic functions beyond the standard sine wave, including cosine-based models and damped oscillations. 

**The Cosine Relationship:**
A cosine function is simply a sine function with a phase shift of $\\pi/2$. Specifically:
$$\\cos(x) = \\sin(x + \\frac{\\pi}{2})$$
Because of this identity, any cosine wave can be represented as a sine wave and vice versa. This is crucial when matching observed data to a specific mathematical model.

**Damped Periodic Behavior:**
In physical systems, oscillations rarely remain constant in amplitude. Damped harmonic motion involves an amplitude that decays over time, typically expressed as:
$$f(x) = A \\cdot e^{-kx} \\cdot \\sin(Bx)$$
In this case, the vertical translation $D$ is often zero, but the amplitude $A$ is no longer a constant; it is a function of $x$. This demonstrates that while the *periodic* component remains, the *amplitude* parameter is dynamic.

**The Tangent Function:**
Unlike sine and cosine, the tangent function $f(x) = \\tan(x)$ is periodic but has vertical asymptotes. Its fundamental period is $\\pi$ rather than $2\\pi$, and it does not possess an amplitude in the traditional sense because it is unbounded.

## How to Solve

When provided with a set of data or a graph and asked to determine the parameters for $f(x) = A\\sin(B(x - C)) + D$, follow this systematic analytical approach:

**Step 1: Identify the Midline ($D$)**
Find the maximum ($y_{max}$) and minimum ($y_{min}$) values of the graph. The midline is the horizontal average:
$$D = \\frac{y_{max} + y_{min}}{2}$$

**Step 2: Calculate the Amplitude ($A$)**
The amplitude is the distance from the midline to either the peak or the trough:
$$|A| = \\frac{y_{max} - y_{min}}{2}$$
If the graph starts by going down from the midline, $A$ may be negative, or a phase shift can be used to compensate.

**Step 3: Determine the Period and $B$**
Identify the horizontal distance between two consecutive peaks or two consecutive troughs. This is the period $T$. Calculate $B$ using:
$$B = \\frac{2\\pi}{T}$$

**Step 4: Find the Phase Shift ($C$)**
Locate a point on the graph where the function crosses the midline while increasing. The x-coordinate of this point is your phase shift $C$. Note that there are infinitely many valid $C$ values for any periodic function due to its cyclic nature.

**Step 5: Assemble the Function**
Plug these values into the standard form $f(x) = A\\sin(B(x - C)) + D$. Always verify by checking a point on the graph against your derived equation to ensure the signs are correct.

Example: If a graph has a peak at $(2, 5)$ and a trough at $(6, 1)$:
1. Midline $D = (5+1)/2 = 3$.
2. Amplitude $A = (5-1)/2 = 2$.
3. Half-period is $6-2=4$, so full period $T=8$. $B = 2\\pi/8 = \\pi/4$.
4. A sine wave starts at the midline at $x=0$ and goes up. If the peak is at $x=2$, the midline crossing occurs at $2 - (T/4) = 2 - 2 = 0$. Thus, $C=0$.
5. The resulting equation is $f(x) = 2\\sin(\\frac{\\pi}{4}x) + 3$.

## Summary

Periodic behavior serves as the mathematical foundation for understanding repetitive systems across science and engineering. By mastering the components of the general sinusoidal function—amplitude, frequency ($B$), phase shift ($C$), and vertical translation ($D$)—we gain the ability to model complex cyclical patterns. 

The amplitude governs the vertical extent of the oscillation, while the coefficient $B$ scales the frequency, dictating how rapidly the function repeats. Phase shifts ($C$) allow for the alignment of cycles to specific starting points, and vertical translations ($D$) permit the repositioning of the entire wave relative to the origin. Whether analyzing the static behavior of a wave through $f(x) = \\sin(x)$ or investigating the dynamic interaction of parameters via interactive models, the principles remain consistent. By applying the step-by-step extraction method, one can convert observed raw data into precise mathematical functions, providing a quantitative bridge between empirical observation and theoretical analysis.`;export{e as default};