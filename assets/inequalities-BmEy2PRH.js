var e=`# Inequalities

## Definition

An inequality is a mathematical statement that asserts the relative size or order of two values. While an equation establishes equality—denoting that two expressions represent the same quantity—an inequality specifies that one value is strictly greater than, strictly less than, greater than or equal to, or less than or equal to another. 

Formally, given two real numbers $a$ and $b$, an inequality is a relation of the form $a < b$, $a > b$, $a \\leq b$, or $a \\geq b$. These symbols are known as inequality signs. An inequality is considered a statement of comparison that defines a set of possible values (the solution set) rather than a single fixed value. When variables are introduced, such as $f(x) < g(x)$, the solution consists of all values of $x$ for which the inequality holds true.

## Key Terminology

To analyze inequalities effectively, one must understand the lexicon of order theory:

| Term | Symbol | Definition |
|:---|:---|:---|
| Strictly Less Than | $<$ | The value on the left is smaller than the value on the right. |
| Strictly Greater Than | $>$ | The value on the left is larger than the value on the right. |
| Less Than or Equal To | $\\leq$ | The value on the left is smaller than or equal to the value on the right. |
| Greater Than or Equal To | $\\geq$ | The value on the left is larger than or equal to the value on the right. |
| Solution Set | $\\{x \\mid P(x)\\}$ | The collection of all real numbers that satisfy the inequality $P(x)$. |
| Interval Notation | $[a, b), (a, \\infty)$ | A concise way to represent continuous subsets of real numbers. |
| Trichotomy Law | $a < b, a=b, a > b$ | For any two real numbers, exactly one of these relations must hold. |

The Trichotomy Law is fundamental; it asserts that any two points on the real number line have a definitive, singular relationship to one another. Furthermore, the property of transitivity states that if $a < b$ and $b < c$, then $a < c$, which allows for the chaining of inequalities.

## Purpose

Inequalities serve as the mathematical foundation for optimization, constraints, and bounds. In calculus, inequalities are essential for the formal epsilon-delta definition of limits and the proof of the Mean Value Theorem. In real-world applications, they model constraints in linear programming, where resource allocation is limited by $ax + by \\leq C$.

They are also crucial in probability theory, particularly in the study of tail distributions and concentration inequalities like Chebyshev’s Inequality, which provides bounds on the probability that a random variable deviates from its mean. By establishing "ceilings" and "floors," inequalities allow scientists and engineers to guarantee that systems operate within safe or defined parameters, even when exact values cannot be calculated.

## Fundamental Properties

The manipulation of inequalities requires rigorous attention to the signs of the operands. The following properties form the basis of all algebraic operations with inequalities:

1. **Addition/Subtraction Property:** If $a < b$, then $a + c < b + c$ and $a - c < b - c$ for any real number $c$. The order remains invariant under translation.

2. **Multiplication by Positive Constant:** If $a < b$ and $c > 0$, then $ac < bc$. The inequality direction is preserved.

3. **Multiplication by Negative Constant:** If $a < b$ and $c < 0$, then $ac > bc$. The inequality sign must be reversed because multiplication by a negative value maps the real line onto its reflection, effectively swapping the relative order of the points.

4. **Reciprocal Property:** If $0 < a < b$, then $\\frac{1}{a} > \\frac{1}{b}$.

5. **Transitivity:** If $a < b$ and $b < c$, then $a < c$.

These properties imply that the set of real numbers forms an ordered field. The most common pitfall for students is neglecting the sign reversal when multiplying or dividing by negative quantities.

## Types & Variations

Inequalities are categorized by their algebraic structure:

### Linear Inequalities
Expressions of the form $ax + b < c$. These can always be reduced to $x < k$ or $x > k$. 

### Quadratic Inequalities
Expressions of the form $ax^2 + bx + c > 0$. Unlike linear inequalities, these require identifying the roots of the quadratic equation to determine the intervals where the parabola lies above or below the $x$-axis.

### Rational Inequalities
Expressions involving fractions, such as $\\frac{P(x)}{Q(x)} \\geq 0$. These require identifying both zeros of the numerator and points of undefined behavior in the denominator (vertical asymptotes), as the sign of the expression can only change at these critical values.

### Absolute Value Inequalities
Expressions like $|x - a| < \\epsilon$. These represent "distance" on the number line. Specifically, $|x - a| < \\epsilon$ is equivalent to the compound inequality $a - \\epsilon < x < a + \\epsilon$.

### Nonlinear/Transcendental Inequalities
Inequalities involving exponentials, logarithms, or trigonometric functions, such as $e^x > x + 1$ or $\\sin(x) < 0.5$. These often require graphical analysis or specialized iterative methods.

The following interactive graph allows the visualization of a quadratic inequality boundary $y = ax^2 + bx + c$ where we are interested in the region $y > 0$.

\`\`\`interactivegraph
ax^2 + bx + c
params: a=1, b=0, c=-1
range: a=-2:2, b=-2:2, c=-2:2
\`\`\`

In the interactive graph above, the reader can observe how the roots (where the function crosses the $x$-axis) shift as the parameters $a, b,$ and $c$ change. For the inequality $ax^2 + bx + c > 0$, the solution set consists of the intervals where the plotted curve is situated above the horizontal axis.

## How to Solve

Solving inequalities is a process of systematic reduction. The objective is to isolate the variable or determine the interval of validity.

### Step-by-Step Methodology
1. **Rearrange to Zero:** For polynomial or rational inequalities, move all terms to one side so that the expression compares to zero (e.g., $f(x) > 0$).
2. **Find Critical Points:** Solve for $f(x) = 0$ and identify where $f(x)$ is undefined. These are the "critical values" that divide the number line into distinct intervals.
3. **Test Intervals:** Choose a test point within each interval created by the critical values. Substitute the point into the original expression. If the result satisfies the original condition, the entire interval is part of the solution set.
4. **Boundary Evaluation:** Check the critical points themselves. If the inequality includes equality (e.g., $\\leq$ or $\\geq$), include the points where $f(x) = 0$ in the solution set. Exclude points that cause division by zero.
5. **Express in Notation:** Write the final solution using interval notation or set-builder notation.

### Illustrative Example
Consider the quadratic inequality $x^2 - 4 > 0$.
1. **Find Roots:** $x^2 - 4 = 0 \\implies (x-2)(x+2) = 0 \\implies x = 2, x = -2$.
2. **Test Intervals:**
   - Interval $(-\\infty, -2)$: Test $x = -3 \\implies (-3)^2 - 4 = 5 > 0$ (True).
   - Interval $(-2, 2)$: Test $x = 0 \\implies 0^2 - 4 = -4 < 0$ (False).
   - Interval $(2, \\infty)$: Test $x = 3 \\implies 3^2 - 4 = 5 > 0$ (True).
3. **Solution:** The solution is $(-\\infty, -2) \\cup (2, \\infty)$.

The graph below visualizes the function $f(x) = x^2 - 4$. The inequality $x^2 - 4 > 0$ holds where the function is strictly above the $x$-axis.

\`\`\`graph
x^2 - 4
\`\`\`

## Summary

Inequalities are a cornerstone of mathematical analysis, providing the tools to describe ranges, bounds, and comparisons. By moving beyond the binary nature of equality, they allow for the modeling of systems where precision is bounded by constraints rather than defined by fixed points. 

Mastery of this topic requires:
- Strict adherence to the signs of coefficients during algebraic manipulation.
- A deep understanding of critical points for higher-degree polynomial and rational functions.
- The use of interval notation to clearly define solution sets.
- Consistent verification of boundary conditions.

Whether through the application of the Trichotomy Law in algebraic proofs or the calculation of intervals in optimization problems, inequalities represent a fundamental method for narrowing down the "truth" within a field of possibilities. They are essential to every branch of mathematics, from the introductory study of functions to the advanced realms of functional analysis and optimization theory.`;export{e as default};