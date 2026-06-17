var e=`# The Method of Undetermined Coefficients

## Definition

The Method of Undetermined Coefficients is a powerful, systematic heuristic used to find a particular solution to non-homogeneous linear ordinary differential equations (ODEs) with constant coefficients. Given a linear non-homogeneous equation of the form $L[y] = g(x)$, where $L$ is a linear differential operator with constant coefficients, the method posits that if the non-homogeneous term $g(x)$ belongs to a specific class of "well-behaved" functions—namely polynomials, exponentials, sines, cosines, or finite products and sums thereof—the particular solution $y_p(x)$ will share a similar functional form. By substituting a trial solution involving unknown coefficients into the original differential equation and equating coefficients of corresponding terms, one creates a system of linear algebraic equations that can be solved to determine the precise parameters of $y_p(x)$.

## Key Terminology

*   **Linear Differential Operator ($L$):** An operator defined as $L = a_n \\frac{d^n}{dx^n} + \\dots + a_1 \\frac{d}{dx} + a_0$, where $a_i$ are constants.
*   **Non-homogeneous Term ($g(x)$):** The forcing function on the right-hand side of the equation $L[y] = g(x)$.
*   **Particular Solution ($y_p$):** A single solution to the non-homogeneous equation that does not contain arbitrary constants.
*   **Complementary Solution ($y_c$):** The general solution to the associated homogeneous equation $L[y] = 0$.
*   **Trial Solution (Anzatz):** An educated guess for the form of $y_p$ based on the derivatives of $g(x)$.
*   **Linear Independence:** A set of functions where no function can be expressed as a linear combination of others; essential for ensuring that the algebraic system for coefficients is non-singular.

## Purpose

The primary purpose of this method is to bypass the computationally expensive integration techniques, such as Variation of Parameters, which require calculating integrals of Wronskian determinants. In engineering and physics, where forcing functions are frequently modeled by simple analytic functions (e.g., oscillating mechanical systems or electrical circuits driven by sinusoidal voltages), the Method of Undetermined Coefficients offers a direct algebraic path to finding the steady-state or transient response. It effectively transforms a differential problem into a problem of linear algebra, significantly reducing the potential for error and complexity in analytical derivations.

## Fundamental Properties

The method relies on the principle of superposition and the property that the differential operators act linearly on finite-dimensional vector spaces of functions. If $g(x)$ is a function such that the set of its linearly independent derivatives is finite (which is true for the elementary functions mentioned earlier), then the differential equation can be mapped onto a subspace of the function space. 

1.  **Closure under Differentiation:** The set of functions consisting of $\\{e^{\\alpha x}, \\sin(\\beta x), \\cos(\\beta x), x^n\\}$ and their products form a subspace that is closed under the differentiation operator.
2.  **Superposition:** If $g(x) = g_1(x) + g_2(x)$, the particular solution can be found by solving $L[y_1] = g_1(x)$ and $L[y_2] = g_2(x)$ separately, then taking $y_p = y_1 + y_2$.
3.  **The Modification Rule:** If a term in the proposed trial solution $y_p$ is a solution to the homogeneous equation $L[y] = 0$, the standard ansatz must be multiplied by $x^k$, where $k$ is the smallest positive integer such that $x^k y_p$ is no longer a solution to the homogeneous equation.

## Types & Variations

The trial solution is selected based strictly on the structure of $g(x)$. Below is a taxonomy of standard forms:

| Form of $g(x)$ | Trial Solution ($y_p$) |
| :--- | :--- |
| Polynomial: $P_n(x) = a_n x^n + \\dots + a_0$ | $A_n x^n + \\dots + A_0$ |
| Exponential: $e^{\\alpha x}$ | $A e^{\\alpha x}$ |
| Sine/Cosine: $\\sin(\\beta x)$ or $\\cos(\\beta x)$ | $A \\cos(\\beta x) + B \\sin(\\beta x)$ |
| Product: $x^n e^{\\alpha x}$ | $(A_n x^n + \\dots + A_0) e^{\\alpha x}$ |
| Product: $e^{\\alpha x} \\sin(\\beta x)$ | $e^{\\alpha x} (A \\cos(\\beta x) + B \\sin(\\beta x))$ |

The following interactive graph demonstrates how varying coefficients in a forcing function affects the amplitude of the solution. The interactive graph below plots the steady-state response $y_p(x) = A \\cos(x) + B \\sin(x)$ for the differential equation $y'' + y = C \\cos(x)$, where resonance occurs.

\`\`\`interactivegraph
A * \\cos(x) + B * \\sin(x)
params: A=1, B=0
range: A=-2:2, B=-2:2
\`\`\`

In this interactive graph, notice how changing the coefficients $A$ and $B$ shifts the phase and amplitude of the wave. When $B=0$, the function is a pure cosine wave. Adjusting $B$ introduces a phase shift, which is a common occurrence when solving for $y_p$ in forced harmonic oscillators.

## How to Solve

1.  **Solve the Homogeneous Equation:** Find $y_c = c_1 y_1 + c_2 y_2 + \\dots + c_n y_n$ by solving the characteristic equation $P(r) = 0$.
2.  **Form the Trial Solution:** Identify $g(x)$. Write the appropriate form for $y_p$ based on the taxonomy provided in the previous section.
3.  **Check for Duplication:** Compare the terms in your $y_p$ with the terms in $y_c$. If any term in $y_p$ matches a term in $y_c$, multiply the entire $y_p$ by $x^k$ until no term in $y_p$ satisfies the homogeneous equation.
4.  **Differentiate:** Compute the necessary derivatives of $y_p$ up to the order of the differential operator $L$.
5.  **Substitute:** Plug $y_p$ and its derivatives back into the original non-homogeneous equation $L[y_p] = g(x)$.
6.  **Equate Coefficients:** Group terms by their functional form (e.g., all $x^n$ terms, all $e^{\\alpha x}$ terms) and set the coefficients on both sides of the equation equal to each other.
7.  **Solve System:** Solve the resulting system of linear algebraic equations for the unknown constants ($A, B, C, \\dots$).
8.  **General Solution:** Construct the final solution as $y = y_c + y_p$.

Consider the equation $y'' - 3y' + 2y = 4e^{2x}$. 
The homogeneous solution is $y_c = c_1 e^x + c_2 e^2x$. 
The forcing function $g(x) = 4e^{2x}$ resembles the term $c_2 e^{2x}$ already present in $y_c$. 
Therefore, our trial solution must be $y_p = A x e^{2x}$. 
Taking derivatives: $y_p' = A e^{2x} + 2A x e^{2x}$ and $y_p'' = 4A e^{2x} + 4A x e^{2x}$. 
Substituting into the ODE: $(4A e^{2x} + 4A x e^{2x}) - 3(A e^{2x} + 2A x e^{2x}) + 2(A x e^{2x}) = 4e^{2x}$. 
Simplifying, the $x e^{2x}$ terms cancel out, leaving $A e^{2x} = 4e^{2x}$, which gives $A = 4$.
Thus, $y_p = 4x e^{2x}$.

## Summary

The Method of Undetermined Coefficients provides an elegant and efficient framework for solving linear non-homogeneous ordinary differential equations. By leveraging the algebraic structure of the forcing function $g(x)$, the method transforms the problem of solving a differential equation into a straightforward process of system solving. While restricted to equations with constant coefficients and specific types of forcing functions, its ease of use makes it the preferred tool for many applications in mechanical vibrations, electrical network analysis, and control theory. By strictly adhering to the modification rule and systematically equating coefficients, one can reliably arrive at the particular solution, which, when combined with the complementary solution, provides the complete general description of the system's behavior. The methodology remains a cornerstone of undergraduate mathematical physics and engineering curricula.`;export{e as default};