# Rational Expressions in Algebra

---

## Definition

A **rational expression** is an algebraic expression that can be written in the form of a fraction where both the numerator and the denominator are polynomials. Formally, it is expressed as:

$$\frac{P(x)}{Q(x)}$$

where $P(x)$ and $Q(x)$ are polynomials, and $Q(x) \neq 0$.

Just as rational numbers are ratios of integers, rational expressions are ratios of polynomials. Because division by zero is undefined, a critical aspect of working with rational expressions is identifying values of the variable that make the denominator zero.

---

## Key Terminology

- **Numerator:** The polynomial on the top of the fraction ($P(x)$).
- **Denominator:** The polynomial on the bottom of the fraction ($Q(x)$).
- **Domain:** The set of all possible real numbers for which the expression is defined.
- **Excluded Values (Restrictions):** The specific real numbers that make the denominator equal to zero ($Q(x) = 0$). These values must be excluded from the domain.
- **Simplest Form (Lowest Terms):** A state where the numerator and the denominator have no common factors other than $\pm 1$.

---

## Purpose

Rational expressions are foundational in algebra and higher mathematics for several reasons:

- **Modeling Real-World Scenarios:** They model rates, work-share problems (e.g., two people painting a house together), and inverse variations (such as gravitational force or electrical resistance).
- **Function Analysis:** They form the basis of **rational functions**, allowing mathematicians to study asymptotic behavior, discontinuities, and limits.
- **Calculus Prep:** Mastering the manipulation of these expressions is vital for finding derivatives via the quotient rule and integration via partial fraction decomposition.

---

## Fundamental Properties

To prevent rendering issues and table malfunctions in strict GFM environments, the core algebraic properties of rational expressions are detailed below:

### 1. Fundamental Principle of Fractions

Multiplying or dividing both the numerator and denominator by the same non-zero polynomial yields an equivalent expression:
$$\frac{P(x) \cdot R(x)}{Q(x) \cdot R(x)} = \frac{P(x)}{Q(x)} \quad \text{for } Q(x) \neq 0, R(x) \neq 0$$

### 2. Sign Variations

Changing signs across a rational expression follows specific structural rules:
$$\frac{-P(x)}{Q(x)} = \frac{P(x)}{-Q(x)} = -\frac{P(x)}{Q(x)}$$

### 3. Arithmetic Operations

- **Multiplication:** $\frac{P(x)}{Q(x)} \cdot \frac{R(x)}{S(x)} = \frac{P(x) \cdot R(x)}{Q(x) \cdot S(x)}$
- **Division:** $\frac{P(x)}{Q(x)} \div \frac{R(x)}{S(x)} = \frac{P(x)}{Q(x)} \cdot \frac{S(x)}{R(x)} = \frac{P(x) \cdot S(x)}{Q(x) \cdot R(x)}$
- **Addition/Subtraction (Same Denominator):** $\frac{P(x)}{Q(x)} \pm \frac{R(x)}{Q(x)} = \frac{P(x) \pm R(x)}{Q(x)}$

---

## Types & Variations

Rational expressions present themselves in several common structural variations:

### Proper Rational Expressions

The degree of the numerator polynomial is strictly less than the degree of the denominator polynomial.

> **Example:** $\frac{x + 2}{x^2 - 5x + 6}$ (Degree 1 over Degree 2)

### Improper Rational Expressions

The degree of the numerator polynomial is greater than or equal to the degree of the denominator polynomial. These can be rewritten using polynomial long division.

> **Example:** $\frac{x^3 - 1}{x^2 + 1}$ (Degree 3 over Degree 2)

### Complex Rational Expressions

A fraction that contains one or more fractions in its numerator, its denominator, or both.

> **Example:** $\frac{1 + \frac{1}{x}}{y - \frac{1}{y}}$

---

## How to Solve and Simplify

While you do not "solve" a standalone expression (you solve _equations_), you **simplify** expressions and **solve** rational equations. Below are the step-by-step methodologies.

### 1. How to Simplify a Rational Expression

1. **Factor** both the numerator and the denominator completely.
2. **State the restrictions** by setting the original denominator factors to $\neq 0$.
3. **Cancel out** common factors shared by the numerator and denominator.

#### Example Walkthrough:

Simplify the expression:
$$\frac{x^2 - 9}{x^2 + 5x + 6}$$

- **Step 1: Factor**
  Numerator (difference of squares): $(x - 3)(x + 3)$  
   Denominator (trinomial): $(x + 2)(x + 3)$  
   Expression becomes: $\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)}$
- **Step 2: Find Restrictions**
  $(x + 2)(x + 3) \neq 0 \implies x \neq -2 \text{ and } x \neq -3$
- **Step 3: Cancel Common Factors**
  $$\frac{(x - 3)\cancel{(x + 3)}}{(x + 2)\cancel{(x + 3)}} = \frac{x - 3}{x + 2} \quad \text{for } x \neq -2, -3$$

---

### 2. How to Solve a Rational Equation

A rational equation is an equation containing one or more rational expressions.

1. **Find the Least Common Denominator (LCD)** of all rational expressions in the equation.
2. **Note the restrictions** (values of $x$ that make any denominator zero).
3. **Multiply every term** by the LCD to clear the fractions.
4. **Solve** the resulting polynomial equation.
5. **Check for extraneous solutions** against your original restrictions.

#### Example Walkthrough:

Solve the equation:
$$\frac{2}{x - 1} + \frac{1}{x} = \frac{5}{x^2 - x}$$

- **Step 1 & 2: Factor denominators and find LCD / Restrictions**
  $x^2 - x = x(x - 1)$  
   The LCD is $x(x - 1)$.  
   _Restrictions:_ $x \neq 0$ and $x \neq 1$.
- **Step 3: Multiply by LCD**
  $$x(x - 1) \cdot \left[ \frac{2}{x - 1} \right] + x(x - 1) \cdot \left[ \frac{1}{x} \right] = x(x - 1) \cdot \left[ \frac{5}{x(x - 1)} \right]$$
  $$2(x) + 1(x - 1) = 5$$
- **Step 4: Solve the equation**
  $$2x + x - 1 = 5$$
  $$3x - 1 = 5 \implies 3x = 6 \implies x = 2$$
- **Step 5: Check restrictions**
  Since $2$ is not part of our restrictions ($x \neq 0, 1$), the solution is valid.  
   **Solution:** $x = 2$

---

## Summary

- **Core Structure:** Rational expressions are simply polynomial fractions: $\frac{P(x)}{Q(x)}$.
- **The Golden Rule:** Always identify domain restrictions early by setting denominators to zero ($Q(x) \neq 0$).
- **Operations:** Treat them like arithmetic fractions—factor completely before attempting to simplify, multiply, divide, add, or subtract.
- **Equations:** Solve rational equations by multiplying through by the Least Common Denominator (LCD) to eliminate fractions, keeping a strict lookout for extraneous solutions.
