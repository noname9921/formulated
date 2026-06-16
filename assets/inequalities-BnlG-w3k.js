var e=`# Inequalities

## Definition

An inequality is a mathematical statement that expresses a relationship of non-equality between two values, expressions, or sets. While an equation asserts that two quantities are identical—represented by the symbol $=$—an inequality asserts that one quantity is greater than, less than, greater than or equal to, or less than or equal to another. 

Formally, if $a$ and $b$ are real numbers, an inequality is a relation defined by one of the following symbols:
1. $<$ (strictly less than)
2. $>$ (strictly greater than)
3. $\\leq$ (less than or equal to)
4. $\\geq$ (greater than or equal to)
5. $\\neq$ (not equal to)

The study of inequalities is fundamental to mathematical analysis, optimization, and real-world resource allocation. Unlike equations, which often yield discrete solutions, inequalities typically define intervals or regions within a domain, representing a range of possible values that satisfy the stated condition.

## Key Terminology

Understanding inequalities requires precise vocabulary to distinguish between the types of relations and the nature of the solutions.

*   **LHS and RHS:** The Left-Hand Side and Right-Hand Side of the inequality, respectively.
*   **Strict Inequality:** A relationship using only $<$ or $>$, indicating that the boundary value itself is excluded from the solution set.
*   **Non-Strict Inequality:** A relationship using $\\leq$ or $\\geq$, indicating that the boundary value is included.
*   **Solution Set:** The collection of all values for the variable that make the inequality a true statement. These are often expressed using interval notation, such as $(a, b]$ or $[a, \\infty)$.
*   **Linear Inequality:** An inequality where the variables are raised to the first power, such as $ax + b < c$.
*   **Quadratic Inequality:** An inequality involving a squared term, such as $ax^2 + bx + c \\geq 0$.
*   **Interval Notation:** A method of writing a solution set using parentheses (for exclusive bounds) and brackets (for inclusive bounds).
*   **Optimization:** The mathematical process of finding the "best" or "extreme" value of a function within the constraints defined by inequalities.

## Purpose

Inequalities are essential because the real world is rarely defined by exact equality. Constraints—such as budget limits, physical space, time, or safety thresholds—are inherently inequality-based. 

The purpose of studying inequalities extends into several core domains:
1.  **Optimization:** In economics and engineering, linear programming uses systems of inequalities to determine how to maximize profit or minimize cost given limited resources.
2.  **Calculus and Analysis:** Many fundamental proofs, such as those for limits and the definition of a derivative, rely on the "epsilon-delta" framework, which is built upon inequalities to define proximity.
3.  **Probability and Statistics:** Inequalities, such as Chebyshev's Inequality or Markov's Inequality, provide bounds on the likelihood of events occurring even when the precise probability distribution is unknown.
4.  **Computer Science:** Algorithms often have performance bounds (Big O notation) expressed as inequalities, describing the worst-case time or space complexity as a function of input size.

## Fundamental Properties

The manipulation of inequalities is governed by a strict set of axioms, derived from the properties of the real number system. Note that the property involving multiplication by a negative number is the most frequent source of error.

| Property Name | Rule | Condition |
| :--- | :--- | :--- |
| Addition Property | If $a < b$, then $a + c < b + c$ | $a, b, c \\in \\mathbb{R}$ |
| Subtraction Property | If $a < b$, then $a - c < b - c$ | $a, b, c \\in \\mathbb{R}$ |
| Positive Multiplication | If $a < b$ and $c > 0$, then $ac < bc$ | $c > 0$ |
| Negative Multiplication | If $a < b$ and $c < 0$, then $ac > bc$ | $c < 0$ |
| Reciprocal Property | If $0 < a < b$, then $\\frac{1}{a} > \\frac{1}{b}$ | $a, b > 0$ |
| Transitive Property | If $a < b$ and $b < c$, then $a < c$ | $a, b, c \\in \\mathbb{R}$ |

The "Negative Multiplication" property highlights the asymmetry of inequalities. When multiplying or dividing both sides of an inequality by a negative value, the direction of the inequality sign must be reversed to preserve the truth of the statement.

## Types & Variations

Inequalities vary based on the functions involved and the number of variables.

### Linear Inequalities
A linear inequality takes the form $ax + b < c$. The solution is found by isolating $x$. For example, $3x + 5 \\geq 11$ leads to $3x \\geq 6$, which simplifies to $x \\geq 2$.

### Quadratic Inequalities
These involve a parabolic term. For $ax^2 + bx + c > 0$, we find the roots of the corresponding quadratic equation. These roots divide the number line into intervals. Testing values within these intervals determines where the inequality holds.

### Rational Inequalities
These involve ratios of polynomials, such as $\\frac{f(x)}{g(x)} \\geq 0$. These require identifying values where the numerator is zero and where the denominator is undefined (vertical asymptotes), as these represent potential sign-change boundaries.

### Absolute Value Inequalities
These define a distance on the number line. $|x| < a$ is equivalent to $-a < x < a$, while $|x| > a$ is equivalent to $x < -a$ or $x > a$.

The following interactive graph allows for the observation of how the parameter $k$ shifts a quadratic function $f(x) = x^2 + k$. This illustrates how the solution set of $x^2 + k > 0$ changes based on the vertical translation of the parabola.

\`\`\`interactivegraph
x^2 + k
params: k=0
range: k=-3:3
\`\`\`

## How to Solve

Solving inequalities requires a systematic approach, particularly for non-linear functions.

### Step-by-Step Methodology for Polynomial Inequalities:
1.  **Standardize:** Move all terms to one side of the inequality so that the expression is in the form $P(x) > 0$ or $P(x) < 0$.
2.  **Find Critical Points:** Solve the equation $P(x) = 0$ to find the roots (zeros). If the expression is rational, include points where the denominator equals zero as critical points.
3.  **Partition:** Use these critical points to divide the real number line into disjoint intervals.
4.  **Test Intervals:** Pick a "test point" in each interval and plug it into the original expression. If the result satisfies the inequality, that entire interval is part of the solution set.
5.  **Check Boundaries:** If the inequality is non-strict ($\\geq$ or $\\leq$), include the roots in the solution set. If it is strict, exclude them. Note that values where the denominator equals zero must *always* be excluded, even for non-strict inequalities.

### Example: Solving $x^2 - 4x + 3 < 0$
1.  Factor the quadratic: $(x - 1)(x - 3) < 0$.
2.  Identify critical points: $x = 1$ and $x = 3$.
3.  Test the intervals:
    *   $(-\\infty, 1)$: Let $x = 0$. $0^2 - 4(0) + 3 = 3$, which is not $< 0$.
    *   $(1, 3)$: Let $x = 2$. $2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$, which is $< 0$.
    *   $(3, \\infty)$: Let $x = 4$. $4^2 - 4(4) + 3 = 3$, which is not $< 0$.
4.  Conclusion: The solution set is $(1, 3)$.

The static graph below illustrates $f(x) = x^2 - 4x + 3$. The inequality $f(x) < 0$ corresponds to the region where the graph dips below the x-axis, which is clearly seen between the roots $x=1$ and $x=3$.

\`\`\`graph
x^2 - 4*x + 3
\`\`\`

## Summary

Inequalities provide the necessary mathematical language to describe constraints, boundaries, and comparative limits. They are distinct from equations because they capture a range of values rather than specific points, reflecting the inherent variability in physical, economic, and logical systems. 

Key takeaways for the reader include:
*   **Directional Sensitivity:** Always reverse the inequality sign when multiplying or dividing by negative numbers.
*   **Critical Thinking:** For complex inequalities (rational, higher-order polynomials), breaking the domain into intervals is the most reliable method for determining the solution set.
*   **Visualization:** Plotting the associated function and identifying where it sits relative to the horizontal axis provides a strong geometric intuition for the solution.
*   **Contextual Importance:** Mastering inequalities is a prerequisite for advanced mathematics, including calculus (limits/continuity), optimization theory, and data science (statistical confidence intervals).

By mastering these rules and methodologies, one gains the ability to handle the "less than" and "greater than" relationships that define the limits of possibility in both theoretical models and practical applications.`;export{e as default};