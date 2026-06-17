var e=`# Partial Fractions

Partial fraction decomposition is a fundamental algebraic technique used to decompose a complex rational function into a sum of simpler fractions. In the context of calculus and complex analysis, this method acts as an inverse operation to finding a common denominator. By breaking down a complicated expression into its constituent parts, mathematicians and engineers can perform operations—such as integration, inverse Laplace transforms, or power series expansions—that would otherwise be analytically intractable.

## Definition

A rational function is defined as the ratio of two polynomials, $f(x) = \\frac{P(x)}{Q(x)}$, where $P(x)$ and $Q(x)$ are polynomials and $Q(x) \\neq 0$. Partial fraction decomposition is the process of expressing such a function as a sum of simpler rational functions, specifically those where the denominator is a factor of the original denominator $Q(x)$ and the numerator has a lower degree than the factor.

Formally, if $Q(x)$ can be factored into linear and irreducible quadratic terms over the real numbers, then:
$$\\frac{P(x)}{Q(x)} = S(x) + \\sum \\frac{A}{(ax+b)^k} + \\sum \\frac{Bx+C}{(ax^2+bx+c)^m}$$
where $S(x)$ is a polynomial (the result of polynomial long division if $\\deg(P) \\geq \\deg(Q)$), and the remaining terms represent the partial fractions. The degree of the numerator in each partial fraction must be strictly less than the degree of its denominator.

## Key Terminology

To master partial fractions, one must be familiar with the following technical terms:

| Term | Definition |
| :--- | :--- |
| Proper Rational Function | A rational function where $\\deg(P) < \\deg(Q)$. |
| Improper Rational Function | A rational function where $\\deg(P) \\geq \\deg(Q)$. |
| Linear Factor | A factor of the form $(ax+b)$. |
| Irreducible Quadratic | A factor of the form $(ax^2+bx+c)$ where $b^2-4ac < 0$. |
| Multiplicity | The number of times a specific factor appears in the denominator $Q(x)$. |
| Residue | A coefficient used in complex analysis context, often found using the cover-up method. |
| Decomposition | The act of rewriting a single fraction as a summation of simpler ones. |

## Purpose

The primary utility of partial fraction decomposition is to simplify the process of integration. In calculus, integration rules for simple fractions (like $\\frac{1}{x+a}$ or $\\frac{1}{x^2+a^2}$) are well-defined and straightforward. However, integrating a high-degree rational function directly is often impossible without simplification.

Furthermore, partial fractions are indispensable in:
1. **Inverse Laplace Transforms:** In differential equations, the Laplace transform of a function is often expressed as a rational function in the $s$-domain. To return to the $t$-domain, we must decompose the expression to match standard transform table entries.
2. **Probability Theory:** Generating functions often require decomposition to determine the coefficients of a power series, allowing for the calculation of probabilities in discrete distributions.
3. **Control Theory:** When analyzing the stability of a system, the transfer function is expressed as a rational function. Decomposing this into partial fractions reveals the poles of the system, which dictate its dynamic behavior.

## Fundamental Properties

The decomposition relies on the Fundamental Theorem of Algebra, which states that every non-constant polynomial with real coefficients can be factored into a product of linear and quadratic factors. The decomposition process is governed by these specific rules:

1. **Polynomial Division:** If the fraction is improper, we must first perform polynomial long division to extract a polynomial part, ensuring the remainder is a proper rational function.
2. **Uniqueness:** For a given rational function, the partial fraction decomposition is unique. This means that regardless of the algebraic path taken to solve for the coefficients, the resulting coefficients will be identical.
3. **Linearity of Fractions:** If $\\frac{P(x)}{Q(x)} = \\frac{A}{L_1} + \\frac{B}{L_2}$, the relationship holds for all $x$ where $Q(x) \\neq 0$. This allows us to use techniques like the "Heaviside Cover-up Method" to isolate specific coefficients.
4. **Degree Constraints:** For a denominator factor of $(ax+b)^k$, the decomposition must include a sum of $k$ fractions with numerators of degree 0: $\\frac{A_1}{ax+b} + \\frac{A_2}{(ax+b)^2} + \\dots + \\frac{A_k}{(ax+b)^k}$.

## Types & Variations

Partial fractions are categorized based on the nature of the factors in the denominator $Q(x)$.

### 1. Distinct Linear Factors
If $Q(x) = (x-r_1)(x-r_2)\\dots(x-r_n)$, the decomposition takes the form:
$$\\frac{P(x)}{Q(x)} = \\frac{A_1}{x-r_1} + \\frac{A_2}{x-r_2} + \\dots + \\frac{A_n}{x-r_n}$$

### 2. Repeated Linear Factors
If a factor $(x-r)$ appears with multiplicity $k$, the decomposition must account for every power from 1 to $k$:
$$\\frac{P(x)}{(x-r)^k} = \\frac{A_1}{x-r} + \\frac{A_2}{(x-r)^2} + \\dots + \\frac{A_k}{(x-r)^k}$$

### 3. Irreducible Quadratic Factors
If $Q(x)$ contains a term $(ax^2+bx+c)$ that cannot be factored further over the reals, the numerator must be linear:
$$\\frac{P(x)}{ax^2+bx+c} = \\frac{Bx+C}{ax^2+bx+c}$$

### 4. Repeated Quadratic Factors
If the quadratic factor $(ax^2+bx+c)$ is raised to the power $k$, the decomposition expands to include higher-degree denominators:
$$\\frac{P(x)}{(ax^2+bx+c)^k} = \\sum_{i=1}^{k} \\frac{B_ix+C_i}{(ax^2+bx+c)^i}$$

## How to Solve

Solving for the unknown coefficients ($A, B, C, \\dots$) involves a systematic approach, generally using one of two methods: the Method of Undetermined Coefficients or the Heaviside Cover-up Method.

### Step-by-Step Procedure
1. **Verify Properness:** Ensure $\\deg(P) < \\deg(Q)$. If not, divide.
2. **Factor the Denominator:** Completely factor $Q(x)$ into linear and irreducible quadratic factors.
3. **Set up the Identity:** Write the expression as a sum of partial fractions with unknown numerators.
4. **Clear Denominators:** Multiply the entire equation by the original $Q(x)$ to obtain a polynomial equation that holds for all $x$.
5. **Solve for Constants:**
   - **Substitution:** Choose strategic values of $x$ (e.g., the roots of the factors) to zero out terms and solve for coefficients directly.
   - **Comparing Coefficients:** Expand the right-hand side and group terms by powers of $x$ ($x^n, x^{n-1}, \\dots, 1$). Match these to the coefficients of the left-hand side to create a system of linear equations.
   - **Differentiation:** In cases of repeated factors, differentiating the polynomial identity can yield additional equations to solve for remaining constants.

### Example: Distinct Linear Factors
Consider $f(x) = \\frac{1}{x^2-1}$.
1. Factor: $\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$.
2. Clear Denominators: $1 = A(x+1) + B(x-1)$.
3. Substitute $x=1$: $1 = A(2) \\implies A = 0.5$.
4. Substitute $x=-1$: $1 = B(-2) \\implies B = -0.5$.
5. Result: $\\frac{0.5}{x-1} - \\frac{0.5}{x+1}$.

### Interactive Exploration
The decomposition of $f(x) = \\frac{A}{x-c_1} + \\frac{B}{x-c_2}$ allows us to observe how shifts in roots $c_1, c_2$ affect the curve.
\`\`\`interactivegraph
\\frac{A}{x-c1} + \\frac{B}{x-c2}
params: A=1, B=1, c1=1, c2=-1
range: A=-2:2, B=-2:2, c1=-3:3, c2=-3:3
\`\`\`
In the graph above, users can adjust the constants $A$ and $B$ (which determine the scale and orientation of the asymptotes) and $c_1$ and $c_2$ (which dictate the positions of the vertical asymptotes). Note how changing $c_1$ and $c_2$ effectively shifts the singularities along the x-axis, fundamentally altering the rational function's topography.

## Summary

Partial fraction decomposition serves as a bridge between complex rational functions and elementary calculus. By transforming products of factors in a denominator into a sum of simple terms, we move from a global perspective of a rational function to a local perspective, where each term represents a distinct component of the function's behavior. 

The method is robust and systematic, relying on polynomial algebra to determine unknown coefficients. Whether addressing the integration of complicated fractions, solving linear differential equations via Laplace transforms, or expanding rational functions into power series, partial fractions remain a corner-stone technique in the mathematician's toolkit. Mastery of this process requires not only proficiency in algebra but also the ability to recognize which form of decomposition is necessitated by the specific denominator of the rational function being analyzed.`;export{e as default};