var e=`# Fourier Trigonometric Series

The Fourier Trigonometric Series is a foundational mathematical construct that represents a periodic function as an infinite sum of sine and cosine waves. Named after the French mathematician Joseph Fourier, who introduced the concept in his 1822 work *Théorie analytique de la chaleur*, the series provides a framework for decomposing complex periodic signals into simpler oscillatory components. This decomposition is known as harmonic analysis, which serves as the backbone for signal processing, image compression, heat conduction analysis, and quantum mechanics.

## Definition

A periodic function $f(x)$ with period $T = 2L$ can be represented by a Fourier series. If $f(x)$ satisfies the Dirichlet conditions (being piecewise continuous and having a finite number of extrema), it can be expressed as:

$$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left[ a_n \\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n \\sin\\left(\\frac{n\\pi x}{L}\\right) \\right]$$

In this expression, the constants $a_0$, $a_n$, and $b_n$ are known as the Fourier coefficients. These coefficients are calculated using the orthogonality properties of sine and cosine functions over the interval $[-L, L]$. The formulas for these coefficients are:

$$a_0 = \\frac{1}{L} \\int_{-L}^{L} f(x) \\, dx$$

$$a_n = \\frac{1}{L} \\int_{-L}^{L} f(x) \\cos\\left(\\frac{n\\pi x}{L}\\right) \\, dx$$

$$b_n = \\frac{1}{L} \\int_{-L}^{L} f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) \\, dx$$

The term $\\frac{a_0}{2}$ represents the DC component or the average value of the function over one period. The remaining summation terms represent the harmonics, where $n=1$ is the fundamental frequency, and higher values of $n$ represent higher-order harmonics.

## Key Terminology

Understanding the Fourier series requires familiarity with several core concepts:

| Term | Definition |
| :--- | :--- |
| Periodicity | A function $f(x)$ is periodic if $f(x + T) = f(x)$ for some period $T > 0$. |
| Orthogonality | The property where the integral of the product of two distinct trigonometric functions over a full period is zero. |
| Harmonic | A frequency component that is an integer multiple of the fundamental frequency. |
| Dirichlet Conditions | A set of sufficient conditions (piecewise continuity, absolute integrability) for the convergence of a Fourier series. |
| Convergence | The behavior of the series as $n \\to \\infty$; the series converges to $f(x)$ where the function is continuous. |

The interactive graph below demonstrates the effect of summing multiple harmonic terms to approximate a periodic wave. By adjusting the number of terms $n$, you can observe how the series reconstructs the signal.

\`\`\`interactivegraph
\\frac{4}{\\pi} \\sum_{k=1}^{n} \\frac{\\sin((2k-1)x)}{2k-1}
params: n=1
range: n=1:10
\`\`\`

The graph above displays the partial sums of the Fourier series for a square wave. As the parameter $n$ increases, the series approximation aligns more closely with the target function, though it exhibits the "Gibbs phenomenon" near points of discontinuity.

## Purpose

The primary purpose of the Fourier Trigonometric Series is to transform a function from the spatial or time domain into the frequency domain. In the time domain, a signal is defined by its amplitude over time. In the frequency domain, the same signal is defined by the amplitude and phase of its constituent sinusoidal components.

This conversion is indispensable because:
1. **Linear Systems Analysis:** Many physical systems, such as electrical circuits or mechanical structures, respond differently to different frequencies. Fourier series allow engineers to determine the output of a system by analyzing how it treats each frequency component individually.
2. **Data Compression:** Because many signals have most of their energy concentrated in a few low-frequency harmonics, storing only the primary coefficients $a_n$ and $b_n$ allows for significant reduction in data size without major loss of signal quality.
3. **Solving Partial Differential Equations (PDEs):** Fourier series are essential for solving the heat equation and the wave equation. By expanding the boundary conditions into Fourier series, one can separate variables and solve for the temporal evolution of physical systems.

## Fundamental Properties

The Fourier Trigonometric Series possesses several mathematical properties that make it a powerful analytical tool:

1. **Orthogonality:** The set $\\{\\cos(\\frac{n\\pi x}{L}), \\sin(\\frac{n\\pi x}{L})\\}$ forms an orthogonal basis in the Hilbert space $L^2([-L, L])$. This ensures that each coefficient $a_n$ and $b_n$ is independent of the others, simplifying the calculation of the series for complex functions.
2. **Linearity:** The Fourier series of the sum of two functions $f(x) + g(x)$ is the sum of their individual Fourier series.
3. **Parseval's Theorem:** This relates the total energy of the function to the sum of the squares of its Fourier coefficients:
   $$\\frac{1}{2L} \\int_{-L}^{L} |f(x)|^2 \\, dx = \\left(\\frac{a_0}{2}\\right)^2 + \\frac{1}{2} \\sum_{n=1}^{\\infty} (a_n^2 + b_n^2)$$
   This implies that the power spectral density can be derived directly from the coefficients.
4. **Differentiation and Integration:** If $f(x)$ is continuous and piecewise smooth, its Fourier series can be integrated term-by-term. Differentiation is also possible, provided the resulting series converges.

## Types & Variations

While the basic trigonometric Fourier series is highly versatile, it exists in several variations tailored for specific function types:

### Even and Odd Functions
If a function exhibits symmetry, the calculation of coefficients becomes significantly simpler:
- **Even Functions:** If $f(-x) = f(x)$, then $b_n = 0$ for all $n$. The series becomes a Fourier Cosine Series.
- **Odd Functions:** If $f(-x) = -f(x)$, then $a_n = 0$ for all $n$. The series becomes a Fourier Sine Series.

### Half-Range Expansions
Often, a function is defined only on the interval $[0, L]$ rather than $[-L, L]$. To represent this, one can extend the function to be either even or odd, creating a half-range cosine or sine series. This is useful for solving boundary value problems where the function behavior is only known on one half of the symmetric domain.

### Complex Fourier Series
By using Euler's formula, $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, the trigonometric series can be converted into the complex exponential form:
$$f(x) = \\sum_{n=-\\infty}^{\\infty} c_n e^{i \\frac{n\\pi x}{L}}$$
where $c_n = \\frac{1}{2L} \\int_{-L}^{L} f(x) e^{-i \\frac{n\\pi x}{L}} \\, dx$. This form is mathematically more compact and is the direct precursor to the Fourier Transform used in digital signal processing.

## How to Solve

To determine the Fourier series of a given function $f(x)$ on the interval $[-L, L]$, follow these systematic steps:

1. **Verify Periodicity:** Ensure the function is defined or periodic on the interval of length $2L$. If the period is not explicitly given, identify the interval over which the function repeats.
2. **Check for Symmetry:** Determine if $f(x)$ is even, odd, or neither. If $f(-x) = f(x)$, set $b_n = 0$ and calculate $a_0$ and $a_n$. If $f(-x) = -f(x)$, set $a_n = 0$ and calculate $b_n$. This step drastically reduces integration labor.
3. **Calculate Coefficients:** Evaluate the definite integrals for $a_0$, $a_n$, and $b_n$. Use integration by parts when the function involves products of polynomials and trigonometric functions.
4. **Assemble the Series:** Substitute the calculated coefficients back into the general Fourier series formula.
5. **Analyze Convergence:** For points of discontinuity, note that the series will converge to the average of the left-hand and right-hand limits: $\\frac{f(x^+) + f(x^-)}{2}$.

Example: Consider the function $f(x) = x$ on $[-\\pi, \\pi]$. This is an odd function, so $a_n = 0$. We calculate $b_n$:
$$b_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} x \\sin(nx) \\, dx = \\frac{2}{\\pi} \\int_{0}^{\\pi} x \\sin(nx) \\, dx$$
Using integration by parts:
$$b_n = \\frac{2}{\\pi} \\left[ -\\frac{x \\cos(nx)}{n} + \\frac{\\sin(nx)}{n^2} \\right]_{0}^{\\pi} = -\\frac{2}{n} \\cos(n\\pi) = \\frac{2(-1)^{n+1}}{n}$$
The resulting series is $f(x) = 2 \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} \\sin(nx)$.

The following graph shows the function $f(x) = x$ and its approximation using the first three terms of this series.

\`\`\`graph
x
2(\\sin(x) - 0.5\\sin(2x) + 0.333\\sin(3x))
\`\`\`

## Summary

The Fourier Trigonometric Series provides a bridge between the physical world of time-varying signals and the analytical world of frequency. By expressing complex periodic phenomena as sums of basic sine and cosine functions, we unlock the ability to filter noise, compress information, and solve complex differential equations that describe the physical universe. Through the application of orthogonality, symmetry, and integral calculus, the Fourier series remains a cornerstone of modern mathematical analysis, enabling the digital technologies that define the modern era. Whether utilized in the simple analysis of a vibrating string or the complex processing of digital audio, the principles of Fourier remain constant, providing a universal language for the study of oscillation and wave motion.`;export{e as default};