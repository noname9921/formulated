var e=`# Linear Functions

## Definition
A linear function is a mathematical relationship between two variables, typically denoted as $x$ and $y$, where the change in the output is directly proportional to the change in the input. In the real Cartesian plane, a linear function is characterized by a constant rate of change, meaning its graph is a perfectly straight line. Formally, a function $f: \\mathbb{R} \\to \\mathbb{R}$ is considered linear if it can be expressed in the form:

$$f(x)=mx+b$$

In this equation, $x$ represents the independent variable (the input), $f(x)$ or $y$ represents the dependent variable (the output), $m$ represents the slope or the rate of change, and $b$ represents the $y$-intercept, which is the value of the function when $x=0$. Unlike non-linear functions—such as quadratic or exponential functions where the rate of change is variable—the derivative of a linear function with respect to $x$ is constant, specifically $f'(x)=m$.

## Key Terminology
To master linear functions, one must understand several core technical terms that describe their behavior and geometric representation:

| Term | Definition | Mathematical Significance |
| :--- | :--- | :--- |
| Slope ($m$) | The measure of the steepness and direction of the line. | $m=\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1}$ |
| $y$-intercept ($b$) | The point where the line crosses the vertical axis. | $(0, b)$ |
| $x$-intercept | The point where the line crosses the horizontal axis. | $(-b/m, 0)$ for $m \\neq 0$ |
| Domain | The set of all possible input values ($x$). | $(-\\infty, \\infty)$ for non-vertical lines |
| Range | The set of all possible output values ($y$). | $(-\\infty, \\infty)$ for non-horizontal lines |
| Collinearity | The property of points lying on the same line. | Points are collinear if the slope between any two pairs is identical |

## Purpose
Linear functions serve as the primary building blocks of mathematical modeling and quantitative analysis. Because they describe constant proportional relationships, they are used extensively in fields ranging from economics and physics to engineering and computer science.

The fundamental purpose of a linear function is to provide a predictive framework. If we know the initial state of a system (the $y$-intercept) and the rate at which it evolves (the slope), we can calculate the state of that system at any arbitrary point in time or space. In data science, linear functions form the backbone of "Simple Linear Regression," a statistical method used to estimate relationships between variables by fitting a line through observed data points to minimize the sum of squared residuals.

Furthermore, linear functions simplify complex systems. In calculus, the concept of "local linearity" allows us to approximate complicated, curved functions by zooming in on a small enough interval that the curve appears to be a straight line. This principle is the foundation of the tangent line approximation.

## Fundamental Properties
The nature of linear functions is governed by several rigorous mathematical properties that ensure their stability and predictability.

**1. Constant Rate of Change:**
The slope $m$ remains invariant regardless of the interval chosen. If we evaluate $f(x)=mx+b$ at $x_1$ and $x_2$, the difference quotient is always:
$$\\frac{f(x_2)-f(x_1)}{x_2-x_1} = \\frac{(mx_2+b)-(mx_1+b)}{x_2-x_1} = \\frac{m(x_2-x_1)}{x_2-x_1} = m$$

**2. Additivity and Homogeneity:**
A truly linear function (specifically a linear map $f(x)=mx$) satisfies the principle of superposition:
- Additivity: $f(x_1+x_2) = f(x_1)+f(x_2)$
- Homogeneity: $f(cx) = cf(x)$ for any scalar $c$.
While affine functions ($f(x)=mx+b$ where $b \\neq 0$) do not satisfy these properties in their purest algebraic form, they retain the property of "constant slope" which makes them indispensable in Euclidean geometry.

**3. Geometric Properties:**
- If $m > 0$, the function is strictly increasing.
- If $m < 0$, the function is strictly decreasing.
- If $m = 0$, the function is a horizontal line, indicating that the output is independent of the input.
- If the line is vertical (represented as $x=k$), it is technically not a function by the vertical line test, as one input maps to infinitely many outputs.

The interactive graph below demonstrates how the parameters $m$ and $b$ govern the behavior of the linear function $f(x)=mx+b$. By adjusting $m$, you observe changes in steepness; by adjusting $b$, you observe vertical shifts.

\`\`\`interactivegraph
mx + b
params: m=1, b=0
range: m=-5:5, b=-5:5
\`\`\`

## Types & Variations
Linear functions can be expressed in different algebraic formats depending on the context of the problem being solved.

**1. Slope-Intercept Form:**
$$y=mx+b$$
This is the most common form, used when the rate of change and the starting value are known.

**2. Point-Slope Form:**
$$y-y_1 = m(x-x_1)$$
This is used when a specific point $(x_1, y_1)$ on the line is known, along with the slope. This is often the starting point for deriving the equation of a tangent line in calculus.

**3. Standard Form:**
$$Ax+By=C$$
Where $A$, $B$, and $C$ are integers. This form is particularly useful for finding $x$ and $y$ intercepts easily by setting one variable to zero.

**4. Intercept Form:**
$$\\frac{x}{a} + \\frac{y}{b} = 1$$
This identifies the $x$-intercept at $a$ and the $y$-intercept at $b$ directly.

The following graph plots three distinct linear functions: $f(x)=2x+1$ (steeper, positive slope), $f(x)=-x+3$ (negative slope), and $f(x)=0.5x-2$ (shallower, positive slope).

\`\`\`graph
2*x + 1
-x + 3
0.5*x - 2
\`\`\`

## How to Solve
Solving linear functions typically involves either finding the equation of a line given certain data points or finding the intersection of two lines.

**Finding the Equation Given Two Points:**
Given points $(x_1, y_1)$ and $(x_2, y_2)$:
1. Calculate the slope: $m = \\frac{y_2-y_1}{x_2-x_1}$.
2. Substitute $m$ and one point into the point-slope formula: $y-y_1 = m(x-x_1)$.
3. Distribute $m$ and solve for $y$ to convert to slope-intercept form.

**Solving a System of Linear Equations:**
To find where two linear functions intersect, set them equal to each other:
$$m_1x+b_1 = m_2x+b_2$$
Rearrange the equation:
$$(m_1-m_2)x = b_2-b_1$$
$$x = \\frac{b_2-b_1}{m_1-m_2}$$
After finding $x$, substitute it back into either original function to solve for $y$. If $m_1 = m_2$ and $b_1 \\neq b_2$, the lines are parallel and never intersect. If $m_1 = m_2$ and $b_1 = b_2$, the lines are coincident, sharing an infinite number of points.

**Example Analytical Derivation:**
Consider two functions $f(x)=3x+2$ and $g(x)=-x+6$. 
To find their intersection:
$3x+2 = -x+6$
$4x = 4$
$x = 1$
Substitute $x=1$ into $f(x)$:
$f(1) = 3(1)+2 = 5$
The lines intersect at the coordinate $(1, 5)$.

## Summary
Linear functions represent the most fundamental class of functions in mathematics. They are defined by a constant rate of change and a predictable, straight-line graphical representation. Through the slope-intercept, point-slope, and standard forms, they allow mathematicians and scientists to model proportional relationships, solve for unknown variables, and approximate non-linear processes via local linearization. 

Key takeaways include:
- The slope ($m$) determines the steepness, and the $y$-intercept ($b$) determines the position relative to the origin.
- Linear equations can be solved algebraically through substitution or equating, or geometrically through intersection points.
- They form the basis for higher-level topics including linear algebra, differential calculus, and statistical modeling. 
Understanding the nuances of these functions—how parameters transform the graph and how they interact in systems—is essential for any further study in the mathematical sciences.`;export{e as default};