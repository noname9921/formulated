var e=`# Rational Functions

## Definition

A rational function is defined as the ratio of two polynomial functions. Formally, a function $f(x)$ is a rational function if it can be expressed in the form:

$$f(x)=\\frac{P(x)}{Q(x)}$$

where $P(x)$ and $Q(x)$ are polynomials in $x$, and $Q(x)$ is not the zero polynomial (i.e., $Q(x) \\neq 0$). The domain of a rational function consists of all real numbers except those values of $x$ for which the denominator $Q(x)$ evaluates to zero. If $x_0$ is a value such that $Q(x_0)=0$, the function is undefined at $x_0$, potentially leading to vertical asymptotes or removable discontinuities (holes).

## Key Terminology

Understanding rational functions requires mastery of several specific technical terms:

| Term | Definition |
| :--- | :--- |
| Numerator | The polynomial $P(x)$ positioned above the fraction bar. |
| Denominator | The polynomial $Q(x)$ positioned below the fraction bar. |
| Zeroes | The values of $x$ such that $P(x)=0$ and $Q(x) \\neq 0$. |
| Poles | The values of $x$ such that $Q(x)=0$. |
| Removable Discontinuity | A hole in the graph occurring at $x=a$ if $(x-a)$ is a factor of both $P(x)$ and $Q(x)$. |
| Vertical Asymptote | A line $x=c$ which the graph approaches as $x$ approaches $c$, where $Q(c)=0$ (after simplification). |
| Horizontal Asymptote | A line $y=k$ which the graph approaches as $x \\to \\infty$ or $x \\to -\\infty$. |
| Slant Asymptote | A linear asymptote $y=mx+b$ occurring when the degree of $P(x)$ is exactly one greater than the degree of $Q(x)$. |

## Purpose

Rational functions serve as the primary mathematical tool for modeling scenarios involving ratios, rates, and inverse relationships. In physics, they describe gravitational and electrostatic forces where magnitude is inversely proportional to the square of the distance ($F \\propto 1/r^2$). In economics, they model average cost functions, where the total cost is divided by the number of units produced.

By analyzing the behavior of rational functions, engineers and scientists can predict system stability (where denominators approach zero) and limiting behaviors (where $x$ approaches infinity). They provide a bridge between basic algebraic expressions and the study of calculus, as limits and derivatives of these functions form the foundation for curve sketching and optimization problems.

## Fundamental Properties

The behavior of a rational function $f(x)=\\frac{P(x)}{Q(x)}$ is dictated largely by the relationship between the degrees of $P(x)$ and $Q(x)$. Let $n$ be the degree of $P(x)$ and $m$ be the degree of $Q(x)$.

### Asymptotic Behavior
1. **Case $n < m$:** The horizontal asymptote is $y=0$ (the x-axis).
2. **Case $n = m$:** If $P(x)=a_n x^n + \\dots$ and $Q(x)=b_m x^m + \\dots$, the horizontal asymptote is $y=\\frac{a_n}{b_m}$.
3. **Case $n = m + 1$:** The function possesses a slant (oblique) asymptote found by performing polynomial long division to express $f(x) = (ax+b) + \\frac{R(x)}{Q(x)}$. The slant asymptote is $y=ax+b$.
4. **Case $n > m + 1$:** The function approaches infinity in the parabolic or power-law sense; there is no linear asymptote.

### Continuity and Discontinuity
Rational functions are continuous everywhere except at the roots of $Q(x)$. If $x-c$ is a factor of $Q(x)$ but not $P(x)$, a vertical asymptote exists at $x=c$. If $x-c$ is a factor of both with equal multiplicity, a hole exists at $x=c$.

The following interactive graph allows the exploration of the vertical asymptote and horizontal asymptote behavior by modifying the constants in a standard reciprocal-type rational function.

\`\`\`interactivegraph
\\frac{ax + b}{cx + d}
params: a=1, b=0, c=1, d=-1
range: a=-5:5, b=-5:5, c=-5:5, d=-5:5
\`\`\`

In the interactive graph above, the function $f(x) = \\frac{ax+b}{cx+d}$ demonstrates how changing the coefficients $c$ and $d$ shifts the vertical asymptote $x = -d/c$, while $a$ and $c$ determine the horizontal asymptote $y = a/c$.

## Types & Variations

### Simple Rational Functions
The parent function $f(x) = \\frac{1}{x}$ is the simplest non-trivial rational function. It features a vertical asymptote at $x=0$ and a horizontal asymptote at $y=0$. It is an odd function, meaning $f(-x)=-f(x)$, exhibiting symmetry about the origin.

### Proper vs. Improper Rational Functions
- **Proper:** A rational function is proper if the degree of $P(x)$ is strictly less than the degree of $Q(x)$. 
- **Improper:** A rational function is improper if the degree of $P(x)$ is greater than or equal to the degree of $Q(x)$. Improper functions can always be rewritten as the sum of a polynomial and a proper rational function using division.

### Partial Fraction Decomposition
A vital technique in engineering and integration is decomposing complex rational functions into simpler fractions. For example, if $Q(x)$ can be factored into linear terms $(x-r_1)(x-r_2)$, the function can be written as:

$$\\frac{P(x)}{Q(x)} = \\frac{A}{x-r_1} + \\frac{B}{x-r_2}$$

This simplifies complex algebraic expressions into a sum of simple terms, which is essential for solving differential equations and calculating integrals.

## How to Solve

Analyzing a rational function $f(x)=\\frac{P(x)}{Q(x)}$ follows a rigorous algorithmic approach.

### Step 1: Factorization
Factor both $P(x)$ and $Q(x)$ completely. This step reveals the roots of the numerator (x-intercepts) and the roots of the denominator (potential asymptotes or holes).

### Step 2: Simplify
Identify any common factors $(x-c)$. Cancel them out, but record $x=c$ as a hole (removable discontinuity) in the domain.

### Step 3: Find Intercepts
- **Y-intercept:** Evaluate $f(0)$. If $0$ is in the domain, the y-intercept is $(0, f(0))$.
- **X-intercepts:** Set the simplified numerator to zero and solve for $x$. These are the points $(x, 0)$ where the graph touches or crosses the x-axis.

### Step 4: Identify Asymptotes
- **Vertical:** Set the simplified denominator to zero and solve for $x$.
- **Horizontal/Slant:** Compare the degrees of the numerator and denominator as established in the Fundamental Properties section.

### Step 5: Test Intervals
Use the x-intercepts and vertical asymptotes to divide the x-axis into intervals. Choose a test point in each interval to determine if the function is positive or negative. This helps determine the "branches" of the graph.

### Example Analysis
Consider $f(x)=\\frac{x^2-1}{x^2-4}$.
1. **Factor:** $f(x)=\\frac{(x-1)(x+1)}{(x-2)(x+2)}$.
2. **Intercepts:** X-intercepts at $x=1, -1$. Y-intercept at $f(0)=1/4$.
3. **Vertical Asymptotes:** $x=2$ and $x=-2$.
4. **Horizontal Asymptote:** Degrees are equal, so $y=1/1=1$.

The graph of this function shows three distinct branches separated by the vertical asymptotes, leveling off to the line $y=1$ as $x$ moves toward positive or negative infinity.

\`\`\`graph
(x^2 - 1) / (x^2 - 4)
\`\`\`

The static graph above illustrates $f(x) = \\frac{x^2-1}{x^2-4}$. Observe the horizontal asymptote at $y=1$, vertical asymptotes at $x=2$ and $x=-2$, and the x-intercepts where the curve crosses the horizontal axis.

## Summary

Rational functions are the quotient of two polynomials, serving as a critical bridge between polynomial algebra and advanced analysis. Their properties are defined by the degrees and roots of the numerator and denominator, which dictate the locations of vertical, horizontal, and slant asymptotes. 

The analytical workflow—involving factorization, identifying discontinuities, finding intercepts, and determining asymptotic behavior—provides a systematic method to visualize and understand these functions. Whether modeling physical systems, performing partial fraction decomposition for integration, or analyzing economic averages, rational functions remain a cornerstone of mathematical inquiry. Mastering their structure allows for the interpretation of complex, non-linear relationships that are pervasive in both natural and engineered environments.`;export{e as default};