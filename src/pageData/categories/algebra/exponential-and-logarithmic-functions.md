# Algebra: Exponential & Logarithmic Functions

---

## 1. Definition

### Exponential Functions

An **exponential function** is a mathematical function where a constant base is raised to a variable exponent. Formally, it is defined as:

$$f(x) = a \cdot b^x$$

Where:

- $a$ is a non-zero constant (the initial value).
- $b$ is a positive real number ($b > 0$) and $b \neq 1$ (the base).
- The domain is all real numbers ($x \in \mathbb{R}$).

### Logarithmic Functions

A **logarithmic function** is the inverse of an exponential function. It answers the question: _"To what power must we raise the base to get this number?"_ Formally, it is defined as:

$$y = \log_b(x) \iff b^y = x$$

Where:

- $b$ is the base ($b > 0$ and $b \neq 1$).
- $x$ is the argument ($x > 0$).
- The domain is restricted to positive real numbers.

---

## 2. Key Terminology

- **Base ($b$):** The constant number being repeatedly multiplied in an exponential function, or the foundational number of a logarithm.
- **Exponent ($x$):** The power to which the base is raised.
- **Argument ($x$):** The input value inside the logarithm function.
- **Asymptote:** A line that a graph approaches but never touches.
  - Exponential functions have a **horizontal asymptote** (typically $y = 0$).
  - Logarithmic functions have a **vertical asymptote** (typically $x = 0$).
- **Euler's Number ($e$):** An irrational mathematical constant approximately equal to $2.71828$, used as the base for natural exponential and logarithmic functions.

---

## 3. Purpose

Exponential and logarithmic functions are critical for modeling scenarios where growth or decay accelerates rapidly over time, or where data spans many orders of magnitude.

- **Compounding Growth:** Used in finance for calculating compound interest and in biology for tracking population growth.
- **Decay Models:** Used in physics for radioactive half-life calculations and carbon dating.
- **Data Scaling:** Logarithmic scales compress massive data ranges into manageable scales, such as the Richter scale (earthquake intensity), pH scale (acidity), and decibels (sound intensity).

---

## 4. Fundamental Properties

These core algebraic properties are essential for simplifying expressions and solving equations.

### Algebraic Properties

| Property Name         | Exponential Rule            | Logarithmic Rule                              |
| :-------------------- | :-------------------------- | :-------------------------------------------- |
| **Product Rule**      | $b^x \cdot b^y = b^{x+y}$   | $\log_b(xy) = \log_b(x) + \log_b(y)$          |
| **Quotient Rule**     | $\frac{b^x}{b^y} = b^{x-y}$ | $\log_b(\frac{x}{y}) = \log_b(x) - \log_b(y)$ |
| **Power Rule**        | $(b^x)^y = b^{xy}$          | $\log_b(x^k) = k \cdot \log_b(x)$             |
| **Identity Property** | $b^1 = b$                   | $\log_b(b) = 1$                               |
| **Zero Property**     | $b^0 = 1$                   | $\log_b(1) = 0$                               |

### The Change of Base Formula

To evaluate logarithms with non-standard bases using standard calculators, the change of base formula is used:

$$\log_b(x) = \frac{\log_c(x)}{\log_c(b)}$$

> **Note:** Typically, $c$ is chosen to be $10$ (common log) or $e$ (natural log).

---

## 5. Types & Variations

### 1. Common vs. Natural Logarithms

- **Common Logarithm:** A logarithm with base $10$. It is conventionally written without a explicit base:
  $$\log(x) = \log_{10}(x)$$
- **Natural Logarithm:** A logarithm with base $e$. It uses the unique notation $\ln$:
  $$\ln(x) = \log_e(x)$$

### 2. Growth vs. Decay

- **Exponential Growth:** Occurs when the base $b > 1$. The graph rises sharply from left to right.
- **Exponential Decay:** Occurs when the base $0 < b < 1$. The graph falls sharply from left to right, approaching the horizontal asymptote.

---

## 6. How to Solve

Solving these equations generally relies on isolating the exponential or logarithmic term and applying its inverse operation.

### Strategy A: Solving Exponential Equations Using Common Bases

If both sides of an equation can be written with the same base, use the property: $b^x = b^y \implies x = y$.

**Example:** Solve $3^{2x - 1} = 27$

1. Write $27$ as a power of $3$:  
   $$3^{2x - 1} = 3^3$$
2. Equate the exponents:  
   $$2x - 1 = 3$$
3. Solve for $x$:  
   $$2x = 4 \implies x = 2$$

### Strategy B: Solving Exponential Equations Using Logarithms

When bases cannot be easily matched, take the logarithm of both sides.

**Example:** Solve $5^x = 12$

1. Take the natural logarithm ($\ln$) of both sides:  
   $$\ln(5^x) = \ln(12)$$
2. Apply the power rule to bring down the exponent:  
   $$x \cdot \ln(5) = \ln(12)$$
3. Divide by $\ln(5)$ to isolate $x$:  
   $$x = \frac{\ln(12)}{\ln(5)}$$

### Strategy C: Solving Logarithmic Equations by Converting to Exponential Form

Isolate the logarithm, then rewrite the equation in its exponential counterpart.

**Example:** Solve $\log_2(x + 3) = 4$

1. Convert the equation to its exponential form:  
   $$2^4 = x + 3$$
2. Evaluate the constant:  
   $$16 = x + 3$$
3. Isolate $x$:  
   $$x = 13$$
4. _Check for extraneous solutions:_ Plugging $13$ back into the original argument yields $13 + 3 = 16$. Since $16 > 0$, the solution is valid.

---

## 7. Summary

- **Inverses:** Exponential and logarithmic functions directly undo one another ($b^{\log_b(x)} = x$ and $\log_b(b^x) = x$).
- **Graphs:** The graph of $y = \log_b(x)$ is a reflection of $y = b^x$ across the diagonal line $y = x$.
- **Domain Constraints:** You can raise a positive base to any real number power, but you can **never** take the logarithm of a negative number or zero within the real number system.
