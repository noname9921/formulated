var e=`# Fourier Trigonometric Series

The Fourier Trigonometric Series is a foundational mathematical construct that represents a periodic function as an infinite summation of sine and cosine terms. Named after the French mathematician Joseph Fourier, who introduced the concept in his 1807 work *Théorie analytique de la chaleur* to solve the heat equation, this series provides a bridge between the time domain and the frequency domain. By decomposing complex periodic signals into simpler harmonic oscillators, it allows engineers and scientists to analyze the spectral content of phenomena ranging from acoustic waves to digital signal processing.

## Definition

A Fourier Trigonometric Series of a periodic function $f(x)$ with period $T=2L$ is defined as the infinite series:

$$f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left(a_n\\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n\\sin\\left(\\frac{n\\pi x}{L}\\right)\\right)$$

In this formulation, the coefficients $a_0$, $a_n$, and $b_n$ represent the weights of the constant (DC) component and the higher-order harmonics, respectively. For the series to converge to $f(x)$, the function must satisfy the Dirichlet conditions, which require $f(x)$ to be piecewise continuous, have a finite number of maxima and minima, and have a finite number of discontinuities within one period. The coefficients are determined via the Euler-Fourier formulas:

$$a_0 = \\frac{1}{L}\\int_{-L}^{L} f(x)dx$$

$$a_n = \\frac{1}{L}\\int_{-L}^{L} f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)dx$$

$$b_n = \\frac{1}{L}\\int_{-L}^{L} f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)dx$$

## Key Terminology

To understand the Fourier series, one must be familiar with specific terms related to periodicity and harmonic analysis:

| Term | Definition |
| :--- | :--- |
| Period ($T$) | The interval length after which a function repeats its values. |
| Fundamental Frequency ($\\omega_0$) | The lowest frequency of a periodic waveform, defined as $\\omega_0 = \\frac{2\\pi}{T}$. |
| Harmonic | An integer multiple of the fundamental frequency ($n\\omega_0$). |
| Orthogonality | A property of trigonometric functions where the integral of the product of two different harmonics over a period is zero. |
| Dirichlet Conditions | A set of requirements that ensure the convergence of a Fourier series. |
| Gibbs Phenomenon | The peculiar overshoot and oscillation at points of discontinuity in a truncated Fourier series. |

The principle of orthogonality is critical. Because $\\sin(nx)$ and $\\cos(nx)$ are orthogonal over the interval $[-\\pi, \\pi]$, we can isolate individual coefficients by integrating against the basis functions. This mathematical elegance is what makes the series a robust tool for signal decomposition.

## Purpose

The primary utility of the Fourier Trigonometric Series lies in the principle of superposition. Many physical systems are linear, meaning the response of the system to a complex signal is equal to the sum of the responses to its individual components. By converting a non-sinusoidal periodic wave into a sum of simple sinusoids, we can predict how a physical medium (such as an electrical circuit, an acoustic chamber, or a bridge structure) will affect each frequency component differently.

Furthermore, the series provides a mechanism for approximation. By truncating the series at a finite $N$, we create a "partial sum" that acts as a low-pass filter, retaining the dominant shape of the signal while discarding high-frequency noise. This is the bedrock of data compression, image processing, and audio synthesis.

## Fundamental Properties

The Fourier series possesses several properties that simplify computational efforts:

1. **Linearity:** If $f(x)$ has coefficients $a_n, b_n$ and $g(x)$ has coefficients $c_n, d_n$, then the sum $h(x) = \\alpha f(x) + \\beta g(x)$ has coefficients $\\alpha a_n + \\beta c_n$ and $\\alpha b_n + \\beta d_n$.
2. **Time Shifting:** Shifting a function in the spatial domain $f(x - t_0)$ corresponds to a phase shift in the trigonometric coefficients.
3. **Parity (Even/Odd Symmetry):**
   - If $f(x)$ is an even function ($f(-x) = f(x)$), then $b_n = 0$ for all $n$, resulting in a pure Fourier Cosine Series.
   - If $f(x)$ is an odd function ($f(-x) = -f(x)$), then $a_n = 0$ for all $n$, resulting in a pure Fourier Sine Series.
4. **Parseval's Identity:** The total average power of the signal is the sum of the powers of its individual harmonic components:
   $$\\frac{1}{2L}\\int_{-L}^{L} |f(x)|^2 dx = \\left(\\frac{a_0}{2}\\right)^2 + \\frac{1}{2}\\sum_{n=1}^{\\infty} (a_n^2 + b_n^2)$$

## Types & Variations

Depending on the domain and symmetry of the function, several variations exist:

- **Full Trigonometric Series:** Uses both sine and cosine terms for functions that are neither even nor odd.
- **Fourier Cosine Series:** Used for even functions; simplifies the integration process as $b_n$ terms vanish.
- **Fourier Sine Series:** Used for odd functions; simplifies the integration process as $a_n$ terms vanish.
- **Complex Exponential Series:** An alternative notation using Euler's formula $e^{in\\theta} = \\cos(n\\theta) + i\\sin(n\\theta)$, which is often more compact for analytic derivations.

The following interactive graph demonstrates how adding harmonics alters the shape of a square wave. Observe how increasing the number of terms ($N$) reduces the ripple near the discontinuity.

\`\`\`interactivegraph
\\frac{4}{\\pi} \\sum_{k=1}^{N} \\frac{\\sin((2k-1)x)}{2k-1}
params: N=1
range: N=1:10
\`\`\`

The graph above plots the partial sum of the Fourier series for a square wave. As $N$ increases, the summation converges toward the square waveform, demonstrating the synthesis of a signal from discrete sine waves.

## How to Solve

To calculate the Fourier coefficients for a given function $f(x)$ on the interval $[-L, L]$, follow this systematic workflow:

1. **Identify the Period:** Determine $2L$ from the function definition. If the function is defined on $[0, 2L]$, adjust the integration limits accordingly.
2. **Check Symmetry:** Determine if $f(x)$ is even, odd, or neither.
   - If $f(x) = f(-x)$, only calculate $a_0$ and $a_n$.
   - If $f(x) = -f(-x)$, only calculate $b_n$.
3. **Set Up Integrals:** Use the Euler-Fourier formulas. If the function is piecewise defined, split the integrals at the points of discontinuity.
4. **Evaluate Integrals:** Utilize integration by parts or standard trigonometric identities. Note that $\\sin(n\\pi) = 0$ and $\\cos(n\\pi) = (-1)^n$, which are frequently used to simplify the final coefficients.
5. **Construct the Series:** Substitute the found coefficients into the general form.
6. **Verify Convergence:** Ensure the partial sums represent the original function, keeping in mind the Gibbs phenomenon at discontinuities.

For a function like $f(x) = x$ on $[-\\pi, \\pi]$, which is an odd function, we find $a_n = 0$ and $b_n = \\frac{2}{n}(-1)^{n+1}$. The series is thus:
$$x = 2 \\left( \\sin(x) - \\frac{1}{2}\\sin(2x) + \\frac{1}{3}\\sin(3x) - \\dots \\right)$$

## Summary

The Fourier Trigonometric Series remains one of the most powerful analytical tools in mathematics and physics. By expressing periodic functions as an infinite series of sines and cosines, we decompose complex phenomena into a manageable set of harmonic components. This framework facilitates the solution of partial differential equations, enables signal processing applications such as frequency filtering and spectral analysis, and provides deep insights into the nature of waves and oscillations. Mastering the Fourier series involves understanding the relationship between the time/spatial domain and the frequency domain, a skill essential for anyone working in fields ranging from electrical engineering to quantum mechanics. The beauty of the theory lies in its universal applicability; it turns the chaotic complexity of real-world signals into the structured, rhythmic language of harmonic analysis.`;export{e as default};