var e=`# Integration by Parts

Integration by parts is a fundamental theorem in calculus that provides a method for transforming the integral of a product of functions into a simpler form. It is the integral counterpart to the product rule for differentiation and serves as one of the primary tools in the mathematician's toolkit for evaluating indefinite and definite integrals.

## Definition

The formula for integration by parts is derived directly from the product rule of differentiation. If $u(x)$ and $v(x)$ are two functions of $x$ that are differentiable, the product rule states:

$$\\frac{d}{dx}[u(x)v(x)] = u(x)\\frac{dv}{dx} + v(x)\\frac{du}{dx}$$

By rearranging this equation and integrating both sides with respect to $x$, we obtain the integration by parts formula:

$$\\int u(x)v'(x)dx = u(x)v(x) - \\int v(x)u'(x)dx$$

In differential notation, where $du = u'(x)dx$ and $dv = v'(x)dx$, the formula is commonly expressed as:

$$\\int u dv = uv - \\int v du$$

This identity reduces the complexity of an integral by shifting the derivative from one function to another, provided the resulting integral $\\int v du$ is easier to compute than the original $\\int u dv$.

## Key Terminology

To successfully apply integration by parts, one must be familiar with the following components and classifications:

* **Integrand:** The function being integrated, which in this context must be expressed as a product of two terms, $u$ and $dv$.
* **Differential:** The $dv$ term must include the $dx$ component from the original integral, whereas $u$ is chosen from the original function.
* **LIATE Rule:** A mnemonic used to guide the selection of $u$. The order of priority for choosing $u$ is:
  1. **L**ogarithmic functions: $\\ln(x), \\log_a(x)$.
  2. **I**nverse trigonometric functions: $\\arcsin(x), \\arctan(x)$.
  3. **A**lgebraic functions: $x^n, x^2+3x$.
  4. **T**rigonometric functions: $\\sin(x), \\cos(x)$.
  5. **E**xponential functions: $e^x, a^x$.
* **Cyclic Integral:** An integral that returns to its original form after being integrated by parts twice, requiring algebraic manipulation to solve.
* **Reduction Formula:** An integration formula that expresses an integral of a high power of a function in terms of an integral of a lower power of the same function.

## Purpose

The primary purpose of integration by parts is to evaluate integrals that do not respond to elementary substitution ($u$-substitution). Many functions, such as $x e^x$, $\\ln(x)$, and $x^2 \\cos(x)$, contain products of two functions where the derivative of one does not cancel out the other. Integration by parts allows the analyst to "break down" these products.

Furthermore, it is used extensively in:
* **Physics:** Deriving energy functionals and solving equations in quantum mechanics where operators are moved between functions.
* **Engineering:** Solving differential equations using integral transforms, such as the Laplace transform.
* **Numerical Analysis:** Estimating integrals using Taylor expansions or assisting in the derivation of quadrature rules.

## Fundamental Properties

The validity of the integration by parts formula relies on the continuity of $u'$ and $v'$. If these conditions are met, the technique possesses several useful properties:

1. **Linearity:** Integration by parts respects the linear properties of integrals. If one is integrating a sum, the rule can be applied to each term independently.
2. **Definite Integrals:** The formula extends naturally to definite integrals. For the interval $[a, b]$:
   $$\\int_a^b u dv = [uv]_a^b - \\int_a^b v du$$
   This is essential for calculating physical quantities like work, volume, or center of mass.
3. **Repeated Application:** If the resulting integral $\\int v du$ remains a product, the process can be iterated. Each iteration typically reduces the power of the algebraic component until the integral becomes trivial.
4. **Integration by Parts for Inverse Functions:** A powerful corollary exists for the integral of an inverse function $f^{-1}(x)$:
   $$\\int f^{-1}(x) dx = x f^{-1}(x) - \\int f(f^{-1}(x)) df^{-1}(x)$$
   This effectively reduces the integral of an inverse to an integral of the function itself.

## Types & Variations

There are several variations and specialized applications of integration by parts that extend its utility:

### Tabular Integration
When the chosen $u$ is a polynomial, it will eventually become zero through repeated differentiation. The tabular method allows for a rapid calculation of integrals of the form $\\int P(x)f(x)dx$. By creating a table with two columns—one for differentiating $u$ until zero, and one for integrating $dv$—one can compute the result by summing the products of diagonal terms with alternating signs.

### Cyclic Integration
For integrals involving products like $e^x \\sin(x)$, the integral does not simplify to zero. Instead, applying integration by parts twice yields the original integral multiplied by a constant, allowing for the isolation of the unknown integral using basic algebra.

### Higher-Order Integration
In scenarios where the integral involves powers, such as $\\int \\sin^n(x)dx$, integration by parts can be used to establish a reduction formula. This allows one to express $I_n$ in terms of $I_{n-2}$, eventually reducing the problem to a base case of $n=0$ or $n=1$.

| Case | Typical Strategy | Resulting Complexity |
| :--- | :--- | :--- |
| $\\int x^n e^x dx$ | Differentiate $x^n$ | Decreases polynomial degree |
| $\\int x^n \\ln(x) dx$ | Set $u = \\ln(x)$ | Removes logarithm |
| $\\int e^x \\sin(x) dx$ | Cyclic application | Constant coefficients |
| $\\int \\arcsin(x) dx$ | Set $u = \\arcsin(x)$ | Algebraic integral |

## How to Solve

To solve an integral using integration by parts, follow this rigorous step-by-step process:

1. **Identify the Integrand:** Express the integrand as a product of two parts: $u$ and $dv$. Ensure that $dv$ is easily integrable.
2. **Select $u$ and $dv$:** Use the LIATE rule to choose $u$. The part of the integrand that is left over, including the $dx$, constitutes $dv$.
3. **Differentiate and Integrate:** Compute $du = u'dx$ and $v = \\int dv$. Ensure the constant of integration is included if necessary, though it is standard to omit it until the final step.
4. **Apply the Formula:** Substitute $u, v, du,$ and $dv$ into the formula $\\int u dv = uv - \\int v du$.
5. **Evaluate the Remaining Integral:** Solve $\\int v du$. If this new integral is still complex, repeat the integration by parts procedure.
6. **Final Consolidation:** Combine the parts, add the constant $C$ (for indefinite integrals), and simplify the algebraic expression.

### Example: $\\int x \\ln(x) dx$
1. Let $u = \\ln(x)$ and $dv = x dx$.
2. Then $du = \\frac{1}{x} dx$ and $v = \\frac{x^2}{2}$.
3. Apply formula: $\\int x \\ln(x) dx = (\\ln(x))(\\frac{x^2}{2}) - \\int \\frac{x^2}{2} (\\frac{1}{x}) dx$.
4. Simplify the integral: $\\frac{x^2}{2} \\ln(x) - \\frac{1}{2} \\int x dx$.
5. Final result: $\\frac{x^2}{2} \\ln(x) - \\frac{x^2}{4} + C$.

The graph below plots $f(x) = x \\ln(x)$ to visualize the function before integration.
\`\`\`graph
x * ln(x)
\`\`\`

## Summary

Integration by parts is an indispensable technique that expands the scope of solvable integrals. By treating an integral as the reverse of the product rule, it transforms complex functional products into manageable pieces. Mastery of this technique requires not only memorizing the formula but also developing an intuition for the LIATE selection strategy and recognizing when to apply tabular or cyclic methods. From its foundational role in standard calculus to its utility in advanced engineering mathematics, integration by parts remains a cornerstone of analytical problem-solving. Success in applying this method is characterized by the careful selection of parts and the systematic reduction of integral complexity.`;export{e as default};