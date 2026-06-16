var e=`# Rational Functions

## Definition

A rational function is a mathematical function that can be expressed as the ratio of two polynomials. Formally, a function $f(x)$ is rational if it can be written in the form:

$$f(x)=\\frac{P(x)}{Q(x)}$$

In this definition, $P(x)$ and $Q(x)$ are polynomials in the variable $x$, with the critical constraint that the denominator polynomial $Q(x)$ cannot be the zero polynomial. That is, $Q(x) \\neq 0$. The coefficients of these polynomials are typically real numbers, although the theory of rational functions extends to complex coefficients as well. The domain of a rational function consists of all real numbers except those that cause the denominator to equal zero, as division by zero is undefined in the field of real numbers.

## Key Terminology

To analyze rational functions effectively, one must be familiar with several specific terms that describe their behavior and structure:

*   **Polynomial Degree:** The highest exponent present in a polynomial. For $P(x)$, we denote its degree as $n$, and for $Q(x)$, we denote its degree as $m$.
*   **Vertical Asymptote:** A vertical line $x=a$ toward which the graph of a function approaches infinitely as $x$ approaches $a$. These occur at values of $x$ where $Q(x)=0$ and $P(x) \\neq 0$ (after simplifying common factors).
*   **Horizontal Asymptote:** A horizontal line $y=L$ that the graph approaches as $x$ tends toward positive or negative infinity. This is determined by the relationship between degrees $n$ and $m$.
*   **Hole (Removable Discontinuity):** A point on the graph that is undefined because a factor $(x-a)$ exists in both $P(x)$ and $Q(x)$. If the factor cancels out, the discontinuity is "removed."
*   **Intercepts:** The $x$-intercepts occur where the numerator $P(x)=0$ (provided $Q(x) \\neq 0$), and the $y$-intercept occurs at $f(0)$, assuming $0$ is in the domain.
*   **End Behavior:** The trend of the function as $x \\to \\infty$ or $x \\to -\\infty$.

## Purpose

Rational functions serve as the primary mathematical tool for modeling scenarios where quantities are inversely proportional or where growth rates are governed by ratios. They are essential in physics, economics, and engineering because they can represent complex relationships that simple linear or quadratic functions cannot capture.

For instance, in physics, the law of universal gravitation follows an inverse-square relationship, which is a type of rational function. In electrical engineering, the impedance of complex circuits is often modeled using rational functions of frequency. Economically, rational functions help model cost-benefit analysis where average costs decrease as production volume increases toward a specific capacity limit. By studying rational functions, we gain the ability to predict limits, identify stability thresholds, and optimize systems that are defined by ratios of change.

## Fundamental Properties

The behavior of a rational function $f(x)=\\frac{P(x)}{Q(x)}$ with degrees $n$ and $m$ is dictated by the relationship between $n$ and $m$:

| Condition | Horizontal Asymptote |
| :--- | :--- |
| $n < m$ | The horizontal asymptote is $y=0$ (the $x$-axis). |
| $n = m$ | The horizontal asymptote is $y=\\frac{a}{b}$, where $a$ and $b$ are leading coefficients. |
| $n > m$ | No horizontal asymptote exists; there may be a slant (oblique) asymptote. |

### Asymptotic Behavior
Asymptotes describe the "limiting" behavior of the curve. A vertical asymptote represents a point of infinite discontinuity. A slant asymptote occurs when $n = m+1$. In this case, one can use polynomial long division to express $f(x)$ as $f(x)=ax+b+\\frac{r(x)}{Q(x)}$, where $ax+b$ is the equation of the slant asymptote.

### Domain and Range
The domain is $\\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}$. The range is more complex and depends on the local extrema of the function. Unlike polynomials, which have a domain of all real numbers, rational functions are often fragmented into multiple branches separated by asymptotes.

\`\`\`interactivegraph
\\frac{ax+b}{cx+d}
params: a=1, b=0, c=1, d=-1
range: a=-5:5, b=-5:5, c=-5:5, d=-5:5
\`\`\`

The interactive graph above demonstrates the standard transformation of a basic reciprocal function. By adjusting $a, b, c,$ and $d$, observe how the vertical asymptote shifts with $d/c$ and the horizontal asymptote shifts with $a/c$. This illustrates the flexibility of the rational function family.

## Types & Variations

Rational functions can be categorized based on the complexity of their constituent polynomials:

1.  **Simple Rational Functions:** These include the parent function $f(x)=\\frac{1}{x}$ and its variations, such as $f(x)=\\frac{1}{x-h}+k$. These are known as hyperbolas.
2.  **Proper Rational Functions:** A rational function where the degree of the numerator is strictly less than the degree of the denominator ($n < m$). These functions always possess a horizontal asymptote at $y=0$.
3.  **Improper Rational Functions:** A rational function where $n \\geq m$. These functions often require division to reveal their asymptotic structure.
4.  **Complex Rational Functions:** Those involving higher-degree polynomials where multiple vertical asymptotes and local maxima/minima occur.

Consider the function $f(x) = \\frac{x^2-1}{x^2-4}$. Here, $n=2$ and $m=2$. Because the degrees are equal, there is a horizontal asymptote at $y=\\frac{1}{1}=1$. Because the denominator factors to $(x-2)(x+2)$, there are two vertical asymptotes at $x=2$ and $x=-2$.

## How to Solve

Solving problems involving rational functions requires a systematic algebraic approach.

### Finding Intercepts
To find $x$-intercepts, set the numerator $P(x)=0$ and solve for $x$. Ensure that these values do not make $Q(x)=0$. To find the $y$-intercept, evaluate $f(0)$.

### Identifying Asymptotes
1.  **Vertical:** Factor both $P(x)$ and $Q(x)$. Cancel common factors (these indicate holes). Set remaining factors of $Q(x)$ to zero and solve for $x$.
2.  **Horizontal/Slant:** Compare the leading terms of $P(x)$ and $Q(x)$. If $n < m$, $y=0$. If $n=m$, divide the leading coefficients. If $n=m+1$, use polynomial division to find the slant asymptote.

### Solving Rational Equations
To solve an equation like $\\frac{A}{B} = \\frac{C}{D}$:
1.  Identify the Least Common Denominator (LCD).
2.  Multiply every term by the LCD to clear the fractions. This results in a polynomial equation.
3.  Solve the resulting polynomial equation.
4.  **Verification:** Always check the candidate solutions against the original domain to exclude extraneous solutions (those that would make the original denominator zero).

### Example Analysis
Consider $f(x) = \\frac{x^2-9}{x^2-2x-3}$. 
First, factor both: $f(x) = \\frac{(x-3)(x+3)}{(x-3)(x+1)}$.
The factor $(x-3)$ is common. Thus, there is a hole at $x=3$. 
Simplified, the function is $g(x) = \\frac{x+3}{x+1}$.
Vertical asymptote: $x+1=0 \\implies x=-1$.
Horizontal asymptote: $n=m=2 \\implies y=1/1=1$.
$x$-intercept: $x+3=0 \\implies x=-3$.
$y$-intercept: $g(0) = 3/1 = 3$.

## Summary

Rational functions are the backbone of fractional algebraic analysis. They extend the study of polynomials by introducing the concept of asymptotic behavior and discontinuities. By understanding the relationship between the numerator and denominator degrees, one can predict the long-term trends and local behavior of these functions. Mastering the identification of intercepts, asymptotes, and holes allows for the precise mapping of these curves, which is fundamental to higher-level calculus, optimization, and system modeling in science and engineering. Through careful factorization and division, complex rational expressions reveal their core geometric characteristics, providing a robust framework for solving both theoretical and applied problems.`;export{e as default};