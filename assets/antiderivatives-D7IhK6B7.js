var e=`# Antiderivatives and Indefinite Integrals

## Definition
The antiderivative, or primitive, of a function $f(x)$ is a differentiable function $F(x)$ whose derivative is equal to the original function $f(x)$. Mathematically, $F(x)$ is an antiderivative of $f(x)$ on an interval $I$ if:
$$F'(x) = f(x)$$
for all $x$ in $I$. Because the derivative of a constant $C$ is zero, if $F(x)$ is an antiderivative of $f(x)$, then any function $G(x) = F(x) + C$ is also an antiderivative of $f(x)$.

The indefinite integral, denoted by the symbol $\\int$, represents the collection of all antiderivatives of a function. It is expressed as:
$$\\int f(x)dx = F(x) + C$$
where $\\int$ is the integral sign, $f(x)$ is the integrand, $dx$ indicates the variable of integration, $F(x)$ is a specific antiderivative, and $C$ is the constant of integration. The constant $C$ is essential because it acknowledges that without specific boundary conditions, we cannot determine the vertical shift of the original function from its rate of change alone.

## Key Terminology
Understanding calculus requires familiarity with the nomenclature of integration:
* **Integrand:** The function $f(x)$ positioned between the integral sign and the differential $dx$.
* **Variable of Integration:** The variable appearing after the $d$ (usually $x$), which specifies the variable with respect to which we are reversing the derivative.
* **Constant of Integration:** The arbitrary constant $C$ representing the family of functions that share the same derivative.
* **Primitive:** An alternative term for an antiderivative, often used when referring to a specific antiderivative $F(x)$ without the constant $C$.
* **Differential:** The $dx$ component, which originates from the Leibniz notation of the derivative $dy/dx$. In integration, it signifies the infinitesimal width of the partitions being summed.
* **Integral Sign:** The elongated "S" symbol ($\\int$), historically derived from the Latin "summa" (sum), highlighting the link between integration and summation processes.

## Purpose
The primary purpose of antiderivatives is to reverse the process of differentiation. In physical systems, differentiation allows us to determine velocity from position or acceleration from velocity. Integration allows us to recover these underlying "state" functions from known "rate" functions.

Beyond mere inversion, indefinite integrals serve as the foundation for the Fundamental Theorem of Calculus. By identifying the antiderivative, we unlock the ability to compute definite integrals, which represent areas under curves, volumes of solids of revolution, work done by variable forces, and the accumulation of quantities. In engineering and economics, indefinite integrals are used to solve differential equations—equations where the relationship between a function and its derivatives is known, allowing us to model population growth, radioactive decay, and circuit impedance.

## Fundamental Properties
The process of integration is linear, which simplifies the task of finding the indefinite integral for complex expressions. The two primary properties are:

1. **Sum/Difference Rule:** The integral of a sum or difference of functions is the sum or difference of their respective integrals.
$$\\int[f(x) \\pm g(x)]dx = \\int f(x)dx \\pm \\int g(x)dx$$

2. **Constant Multiple Rule:** A constant multiplier $k$ can be factored out of the integral.
$$\\int k f(x)dx = k \\int f(x)dx$$

Furthermore, we utilize a table of elementary integrals derived directly from known differentiation rules.

| Function $f(x)$ | Indefinite Integral $\\int f(x)dx$ |
| :--- | :--- |
| $x^n (n \\neq -1)$ | $\\frac{x^{n+1}}{n+1} + C$ |
| $1/x$ | $\\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $\\sin(x)$ | $-\\cos(x) + C$ |
| $\\cos(x)$ | $\\sin(x) + C$ |
| $\\sec^2(x)$ | $\\tan(x) + C$ |
| $1/\\sqrt{1-x^2}$ | $\\arcsin(x) + C$ |
| $1/(1+x^2)$ | $\\arctan(x) + C$ |

The interactive graph below demonstrates the family of antiderivatives for $f(x) = x^2$. Observe how the parameter $C$ acts as a vertical translation (shift) for the parabola $F(x) = \\frac{1}{3}x^3 + C$.

\`\`\`interactivegraph
(1/3)*x^3 + C
params: C=0
range: C=-3:3
\`\`\`

## Types & Variations
Antiderivatives are categorized by the methodology required to compute them. Since there is no "Product Rule" for integration (only the integration by parts formula), finding the antiderivative can be significantly more challenging than finding a derivative.

**1. Basic Integration:** Using the power rule and elementary function knowledge.
**2. $u$-Substitution:** The reverse of the Chain Rule. If an integrand is of the form $f(g(x))g'(x)$, we substitute $u = g(x)$ and $du = g'(x)dx$.
**3. Integration by Parts:** The reverse of the Product Rule. Based on the formula:
$$\\int u dv = uv - \\int v du$$
This is useful for products of functions, such as $x\\sin(x)$ or $x e^x$.
**4. Partial Fraction Decomposition:** Used for rational functions where the denominator can be factored into linear or irreducible quadratic terms.
**5. Trigonometric Substitutions:** Used for integrals containing forms like $\\sqrt{a^2 - x^2}$ or $\\sqrt{x^2 + a^2}$, utilizing identities such as $\\sin^2\\theta + \\cos^2\\theta = 1$.

## How to Solve
Solving an indefinite integral requires a structured approach. When presented with $\\int f(x)dx$, follow these logical steps:

1. **Simplification:** Inspect the integrand to see if it can be simplified algebraically. For example, expand powers or divide polynomials before integrating.
2. **Recognition:** Check if the expression matches a known elementary derivative. If $f(x)$ looks like a derivative (e.g., $\\sec^2(x)$), write down the answer immediately.
3. **Variable Transformation ($u$-substitution):** Look for an "inner" function $g(x)$ whose derivative $g'(x)$ is also present in the integrand. If you can see the "derivative of the inner function," $u$-substitution is likely the correct path.
4. **Integration by Parts:** If the integrand is a product of two functions that do not share a derivative relationship, assign one part as $u$ (to be differentiated) and the other as $dv$ (to be integrated).
5. **Verification:** Always differentiate your resulting function $F(x) + C$ to ensure it recovers $f(x)$. This is the most effective way to eliminate errors.

Example: Solve $\\int 2x(x^2 + 1)^4 dx$.
* Let $u = x^2 + 1$.
* Then $du = 2x dx$.
* Substituting into the integral: $\\int u^4 du$.
* Integrating: $\\frac{u^5}{5} + C$.
* Back-substituting: $\\frac{(x^2+1)^5}{5} + C$.

The static graph below plots $f(x) = x$ and its antiderivative $F(x) = 0.5x^2$. This illustrates how the linear growth of the derivative is captured as an accumulation of area in the parabolic antiderivative.

\`\`\`graph
0.5*x^2
x
\`\`\`

## Summary
Antiderivatives and indefinite integrals represent the inverse operation of differentiation, providing a robust framework for reconstructing functions from their rates of change. By utilizing the constant of integration $C$, we define an infinite family of curves that share the same slope properties at every point. Through analytical techniques like $u$-substitution and integration by parts, we can resolve complex expressions into manageable solutions. Mastery of these concepts is indispensable for higher-level calculus, physics, and engineering, serving as the bridge between instantaneous rates and total accumulation.`;export{e as default};