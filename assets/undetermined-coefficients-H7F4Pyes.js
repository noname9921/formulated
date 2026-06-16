var e=`# The Method of Undetermined Coefficients

The Method of Undetermined Coefficients is a robust, systematic approach in the study of ordinary differential equations (ODEs). It serves as one of the primary techniques for finding a particular solution, $y_p(x)$, to a non-homogeneous linear differential equation with constant coefficients. By assuming a functional form for the solution based on the structure of the forcing function, the method transforms a calculus problem into a system of linear algebraic equations.

## Definition

The Method of Undetermined Coefficients is an algebraic technique used to solve non-homogeneous linear ODEs of the form:
$$a_n y^{(n)} + a_{n-1} y^{(n-1)} + \\dots + a_1 y' + a_0 y = g(x)$$
where the coefficients $a_i$ are constants and the forcing function $g(x)$ belongs to a restricted class of functions. Specifically, $g(x)$ must be a function whose derivatives eventually cycle or terminate, such as polynomials, exponentials, sines, cosines, or finite products and sums thereof. The method posits that the particular solution $y_p(x)$ takes the form of a linear combination of these basis functions, where the coefficients (the "undetermined" parameters) are calculated by substituting the guess into the original differential equation and solving the resulting equality.

## Key Terminology

To master this method, one must understand several foundational terms:

| Term | Definition |
| :--- | :--- |
| Non-homogeneous | An ODE where the forcing function $g(x) \\neq 0$. |
| Complementary Solution ($y_c$) | The general solution to the associated homogeneous equation ($g(x)=0$). |
| Particular Solution ($y_p$) | Any specific solution that satisfies the non-homogeneous equation. |
| Forcing Function ($g(x)$ | The function on the right-hand side of the ODE that drives the system. |
| Annihilator | A differential operator that maps a specific function $g(x)$ to zero. |
| Superposition Principle | The principle stating that if $g(x) = g_1(x) + g_2(x)$, then $y_p = y_{p1} + y_{p2}$. |

## Purpose

The primary purpose of the Method of Undetermined Coefficients is computational efficiency. Unlike the Method of Variation of Parameters, which requires integration—a process that can often lead to non-elementary functions or impossible integrals—the Method of Undetermined Coefficients relies strictly on differentiation and basic algebra. It provides a structured "guess-and-check" framework that bypasses the need for integral calculus, making it the preferred choice for engineering and physical modeling where forcing functions typically take the form of power sources, sinusoidal oscillations, or exponential decay.

## Fundamental Properties

The method relies on the finite-dimensional nature of the derivatives of certain functions. Consider the following properties:

1. **Closure under Differentiation:** If $g(x)$ is a polynomial of degree $n$, its derivatives are polynomials of degree less than or equal to $n$. This finite set of basis functions allows us to define a solution space.
2. **Linearity:** Because the differential operator $L = a_n D^n + \\dots + a_0$ is linear, if we have $L(y_1) = g_1$ and $L(y_2) = g_2$, then $L(c_1 y_1 + c_2 y_2) = c_1 g_1 + c_2 g_2$. This permits the breaking down of complex forcing functions into simpler, manageable components.
3. **Linear Independence:** The chosen trial function must not duplicate any part of the complementary solution $y_c(x)$. If a term in our trial $y_p$ is a solution to the homogeneous equation, applying the operator $L$ will result in zero, rendering the determination of the coefficients impossible.

## Types & Variations

The trial form of $y_p(x)$ depends strictly on the form of $g(x)$. The following table outlines the standard trial forms.

| $g(x)$ form | Trial form $y_p(x)$ |
| :--- | :--- |
| Polynomial: $a_n x^n + \\dots + a_0$ | $A_n x^n + \\dots + A_0$ |
| Exponential: $e^{\\alpha x}$ | $A e^{\\alpha x}$ |
| Sine/Cosine: $\\sin(\\beta x)$ or $\\cos(\\beta x)$ | $A \\cos(\\beta x) + B \\sin(\\beta x)$ |
| Product: $x^n e^{\\alpha x}$ | $(A_n x^n + \\dots + A_0) e^{\\alpha x}$ |
| Complex: $e^{\\alpha x} \\cos(\\beta x)$ | $e^{\\alpha x} (A \\cos(\\beta x) + B \\sin(\\beta x))$ |

### The Resonance Adjustment
When a term in the trial solution is also present in the complementary solution $y_c(x)$, we must multiply the trial form by $x^k$, where $k$ is the smallest positive integer such that no term in $y_p$ is a solution to the homogeneous equation. This handles the case of "resonance," often seen in physical systems where the driving frequency matches the natural frequency of the system.

## How to Solve

To solve a non-homogeneous ODE using this method, follow these systematic steps:

### Step 1: Find the Complementary Solution
Solve the associated homogeneous equation $a_n y^{(n)} + \\dots + a_0 y = 0$ to find the characteristic roots $r$. Construct $y_c(x) = c_1 y_1(x) + c_2 y_2(x) + \\dots + c_n y_n(x)$.

### Step 2: Identify the Forcing Function and Trial Form
Observe $g(x)$. Select the appropriate form for $y_p(x)$ based on the table provided in the previous section. If any component of $y_p$ matches a term in $y_c$, multiply that specific term (or the entire guess if necessary) by $x$.

### Step 3: Differentiate and Substitute
Calculate the necessary derivatives of $y_p(x)$ up to the $n$-th order. Substitute $y_p, y_p', \\dots, y_p^{(n)}$ into the original differential equation. 

### Step 4: Equate Coefficients
Collect terms by their basis functions (e.g., terms with $x^2$, terms with $e^x$, terms with $\\sin(x)$). Set the coefficient of each side of the equation equal to create a system of algebraic equations for the unknown constants $A, B, C, \\dots$.

### Step 5: Solve and Formulate General Solution
Solve the system for the constants. Once found, combine $y_p$ with $y_c$ to obtain the general solution:
$$y(x) = y_c(x) + y_p(x)$$

### Interactive Exploration of Resonance
The behavior of the solution is heavily influenced by the presence of resonance. Consider a simple mass-spring system modeled by $y'' + \\omega^2 y = F_0 \\cos(\\omega x)$. Here, the trial solution for the non-homogeneous part must be adjusted because the homogeneous solution is $y_c = c_1 \\cos(\\omega x) + c_2 \\sin(\\omega x)$.

\`\`\`interactivegraph
x * \\sin(ax)
params: a=1
range: a=0.1:3
\`\`\`

In the graph above, we represent the form of $y_p(x)$ when resonance occurs. As $a$ approaches the natural frequency of the system, the amplitude of the response grows linearly with $x$, as indicated by the term $x \\sin(ax)$.

## Summary

The Method of Undetermined Coefficients is a fundamental tool for solving linear non-homogeneous differential equations. By shifting the burden from integration to algebraic manipulation, it provides a structured path toward finding the particular solution. The core requirements for success include identifying the correct trial function, being vigilant about potential overlaps with the complementary solution (resonance), and systematically equating coefficients. 

While limited to cases where the forcing function is a sum or product of polynomials, exponentials, and trigonometric functions, these categories cover the vast majority of standard problems in classical mechanics, electrical circuit theory, and heat transfer. By adhering to the step-by-step methodology outlined here, one can effectively navigate the transition from a non-homogeneous differential equation to its complete, explicit general solution.`;export{e as default};