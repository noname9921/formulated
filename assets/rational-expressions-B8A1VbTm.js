var e=`# Rational Expressions in Algebra\r
\r
---\r
\r
## Definition\r
\r
A **rational expression** is an algebraic expression that can be written in the form of a fraction where both the numerator and the denominator are polynomials. Formally, it is expressed as:\r
\r
$$\\frac{P(x)}{Q(x)}$$\r
\r
where $P(x)$ and $Q(x)$ are polynomials, and $Q(x) \\neq 0$.\r
\r
Just as rational numbers are ratios of integers, rational expressions are ratios of polynomials. Because division by zero is undefined, a critical aspect of working with rational expressions is identifying values of the variable that make the denominator zero.\r
\r
---\r
\r
## Key Terminology\r
\r
- **Numerator:** The polynomial on the top of the fraction ($P(x)$).\r
- **Denominator:** The polynomial on the bottom of the fraction ($Q(x)$).\r
- **Domain:** The set of all possible real numbers for which the expression is defined.\r
- **Excluded Values (Restrictions):** The specific real numbers that make the denominator equal to zero ($Q(x) = 0$). These values must be excluded from the domain.\r
- **Simplest Form (Lowest Terms):** A state where the numerator and the denominator have no common factors other than $\\pm 1$.\r
\r
---\r
\r
## Purpose\r
\r
Rational expressions are foundational in algebra and higher mathematics for several reasons:\r
\r
- **Modeling Real-World Scenarios:** They model rates, work-share problems (e.g., two people painting a house together), and inverse variations (such as gravitational force or electrical resistance).\r
- **Function Analysis:** They form the basis of **rational functions**, allowing mathematicians to study asymptotic behavior, discontinuities, and limits.\r
- **Calculus Prep:** Mastering the manipulation of these expressions is vital for finding derivatives via the quotient rule and integration via partial fraction decomposition.\r
\r
---\r
\r
## Fundamental Properties\r
\r
To prevent rendering issues and table malfunctions in strict GFM environments, the core algebraic properties of rational expressions are detailed below:\r
\r
### 1. Fundamental Principle of Fractions\r
\r
Multiplying or dividing both the numerator and denominator by the same non-zero polynomial yields an equivalent expression:\r
$$\\frac{P(x) \\cdot R(x)}{Q(x) \\cdot R(x)} = \\frac{P(x)}{Q(x)} \\quad \\text{for } Q(x) \\neq 0, R(x) \\neq 0$$\r
\r
### 2. Sign Variations\r
\r
Changing signs across a rational expression follows specific structural rules:\r
$$\\frac{-P(x)}{Q(x)} = \\frac{P(x)}{-Q(x)} = -\\frac{P(x)}{Q(x)}$$\r
\r
### 3. Arithmetic Operations\r
\r
- **Multiplication:** $\\frac{P(x)}{Q(x)} \\cdot \\frac{R(x)}{S(x)} = \\frac{P(x) \\cdot R(x)}{Q(x) \\cdot S(x)}$\r
- **Division:** $\\frac{P(x)}{Q(x)} \\div \\frac{R(x)}{S(x)} = \\frac{P(x)}{Q(x)} \\cdot \\frac{S(x)}{R(x)} = \\frac{P(x) \\cdot S(x)}{Q(x) \\cdot R(x)}$\r
- **Addition/Subtraction (Same Denominator):** $\\frac{P(x)}{Q(x)} \\pm \\frac{R(x)}{Q(x)} = \\frac{P(x) \\pm R(x)}{Q(x)}$\r
\r
---\r
\r
## Types & Variations\r
\r
Rational expressions present themselves in several common structural variations:\r
\r
### Proper Rational Expressions\r
\r
The degree of the numerator polynomial is strictly less than the degree of the denominator polynomial.\r
\r
> **Example:** $\\frac{x + 2}{x^2 - 5x + 6}$ (Degree 1 over Degree 2)\r
\r
### Improper Rational Expressions\r
\r
The degree of the numerator polynomial is greater than or equal to the degree of the denominator polynomial. These can be rewritten using polynomial long division.\r
\r
> **Example:** $\\frac{x^3 - 1}{x^2 + 1}$ (Degree 3 over Degree 2)\r
\r
### Complex Rational Expressions\r
\r
A fraction that contains one or more fractions in its numerator, its denominator, or both.\r
\r
> **Example:** $\\frac{1 + \\frac{1}{x}}{y - \\frac{1}{y}}$\r
\r
---\r
\r
## How to Solve and Simplify\r
\r
While you do not "solve" a standalone expression (you solve _equations_), you **simplify** expressions and **solve** rational equations. Below are the step-by-step methodologies.\r
\r
### 1. How to Simplify a Rational Expression\r
\r
1. **Factor** both the numerator and the denominator completely.\r
2. **State the restrictions** by setting the original denominator factors to $\\neq 0$.\r
3. **Cancel out** common factors shared by the numerator and denominator.\r
\r
#### Example Walkthrough:\r
\r
Simplify the expression:\r
$$\\frac{x^2 - 9}{x^2 + 5x + 6}$$\r
\r
- **Step 1: Factor**\r
  Numerator (difference of squares): $(x - 3)(x + 3)$  \r
   Denominator (trinomial): $(x + 2)(x + 3)$  \r
   Expression becomes: $\\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)}$\r
- **Step 2: Find Restrictions**\r
  $(x + 2)(x + 3) \\neq 0 \\implies x \\neq -2 \\text{ and } x \\neq -3$\r
- **Step 3: Cancel Common Factors**\r
  $$\\frac{(x - 3)\\cancel{(x + 3)}}{(x + 2)\\cancel{(x + 3)}} = \\frac{x - 3}{x + 2} \\quad \\text{for } x \\neq -2, -3$$\r
\r
---\r
\r
### 2. How to Solve a Rational Equation\r
\r
A rational equation is an equation containing one or more rational expressions.\r
\r
1. **Find the Least Common Denominator (LCD)** of all rational expressions in the equation.\r
2. **Note the restrictions** (values of $x$ that make any denominator zero).\r
3. **Multiply every term** by the LCD to clear the fractions.\r
4. **Solve** the resulting polynomial equation.\r
5. **Check for extraneous solutions** against your original restrictions.\r
\r
#### Example Walkthrough:\r
\r
Solve the equation:\r
$$\\frac{2}{x - 1} + \\frac{1}{x} = \\frac{5}{x^2 - x}$$\r
\r
- **Step 1 & 2: Factor denominators and find LCD / Restrictions**\r
  $x^2 - x = x(x - 1)$  \r
   The LCD is $x(x - 1)$.  \r
   _Restrictions:_ $x \\neq 0$ and $x \\neq 1$.\r
- **Step 3: Multiply by LCD**\r
  $$x(x - 1) \\cdot \\left[ \\frac{2}{x - 1} \\right] + x(x - 1) \\cdot \\left[ \\frac{1}{x} \\right] = x(x - 1) \\cdot \\left[ \\frac{5}{x(x - 1)} \\right]$$\r
  $$2(x) + 1(x - 1) = 5$$\r
- **Step 4: Solve the equation**\r
  $$2x + x - 1 = 5$$\r
  $$3x - 1 = 5 \\implies 3x = 6 \\implies x = 2$$\r
- **Step 5: Check restrictions**\r
  Since $2$ is not part of our restrictions ($x \\neq 0, 1$), the solution is valid.  \r
   **Solution:** $x = 2$\r
\r
---\r
\r
## Summary\r
\r
- **Core Structure:** Rational expressions are simply polynomial fractions: $\\frac{P(x)}{Q(x)}$.\r
- **The Golden Rule:** Always identify domain restrictions early by setting denominators to zero ($Q(x) \\neq 0$).\r
- **Operations:** Treat them like arithmetic fractions—factor completely before attempting to simplify, multiply, divide, add, or subtract.\r
- **Equations:** Solve rational equations by multiplying through by the Least Common Denominator (LCD) to eliminate fractions, keeping a strict lookout for extraneous solutions.\r
`;export{e as default};