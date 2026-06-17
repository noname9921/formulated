var e=`# Linear Functions

A linear function is a mathematical relationship between two variables where the change in the dependent variable is proportional to the change in the independent variable. In the Cartesian coordinate system, the graph of such a function is a non-vertical straight line. Because the rate of change remains constant across the entire domain, linear functions serve as the foundational building blocks for calculus, differential equations, and multivariate analysis.

## Definition

A linear function $f$ is defined as a function whose expression is a first-degree polynomial. In the most general form, a linear function $f: \\mathbb{R} \\to \\mathbb{R}$ is represented by the equation:

$$f(x)=mx+b$$

In this expression:
1. $x$ represents the independent variable (input).
2. $f(x)$ or $y$ represents the dependent variable (output).
3. $m$ is the slope or gradient of the line, representing the rate of change of $f(x)$ with respect to $x$.
4. $b$ is the y-intercept, representing the value of $f(x)$ when $x=0$.

For a relationship to be classified as a linear function, the degree of the variable $x$ must be exactly $1$. Any expression involving $x^n$ where $n \\neq 1$ (such as $x^2$ or $\\sqrt{x}$) or transcendental functions of $x$ (such as $\\sin(x)$ or $e^x$) would disqualify the function from being linear.

## Key Terminology

To understand linear functions, one must master the terminology that defines their behavior and representation.

| Term | Definition |
| :--- | :--- |
| Domain | The set of all possible input values ($x$), typically $(-\\infty, \\infty)$ for linear functions. |
| Range | The set of all possible output values ($f(x)$), typically $(-\\infty, \\infty)$ for non-constant linear functions. |
| Slope ($m$) | The measure of steepness and direction, calculated as the ratio of "rise over run": $\\Delta y / \\Delta x$. |
| Y-intercept | The point $(0, b)$ where the line intersects the y-axis. |
| X-intercept | The point $(x, 0)$ where the line intersects the x-axis, found by setting $f(x)=0$ and solving for $x$. |
| Constant Function | A specific type of linear function where $m=0$, resulting in a horizontal line $f(x)=b$. |
| Identity Function | The simplest linear function where $m=1$ and $b=0$, denoted as $f(x)=x$. |

## Purpose

The primary utility of linear functions lies in their ability to model constant rates of change. In physical sciences, if an object travels at a constant velocity, its position over time is described by a linear function. In economics, linear cost functions model scenarios where the total cost is the sum of fixed overheads and a constant variable cost per unit.

Linear functions also facilitate the approximation of more complex, non-linear curves. Through the process of local linearization (the basis of the tangent line in differential calculus), mathematicians can approximate the behavior of a complicated function $g(x)$ near a specific point $a$ by creating a linear function that mimics $g(x)$ at that point.

## Fundamental Properties

The power of the linear function stems from three core mathematical properties that dictate its behavior across the coordinate plane.

### 1. Constant Rate of Change
For any two distinct points $(x_1, y_1)$ and $(x_2, y_2)$ on a linear function, the slope $m$ remains invariant:
$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$
This property ensures that the function never "bends," as the instantaneous rate of change is identical to the average rate of change.

### 2. Additivity and Homogeneity
A function is strictly linear if it satisfies the principle of superposition:
1. Additivity: $f(x+y) = f(x) + f(y)$
2. Homogeneity: $f(cx) = c \\cdot f(x)$
Note that the standard form $f(x)=mx+b$ is technically an "affine" function. A true linear function (or linear map) must satisfy $f(0)=0$, meaning $b$ must be $0$. However, in standard algebra, the term "linear" is universally accepted to include the y-intercept constant $b$.

### 3. Transformation Properties
Linear functions demonstrate predictable transformations. The slope $m$ dictates vertical stretching or compression, while the intercept $b$ dictates vertical translation.

The following interactive graph allows you to explore how varying $m$ (slope) and $b$ (intercept) alters the visual representation of $f(x)=mx+b$. Observe how $m$ changes the angle of the line relative to the x-axis, and $b$ shifts the line up or down the y-axis.

\`\`\`interactivegraph
m*x + b
params: m=1, b=0
range: m=-5:5, b=-5:5
\`\`\`

## Types & Variations

Linear functions are expressed in different forms based on the available information.

### Slope-Intercept Form
$$f(x)=mx+b$$
This is the most common form, used when the rate of change and the starting value are known.

### Point-Slope Form
$$f(x) - y_1 = m(x - x_1)$$
This form is essential when one point $(x_1, y_1)$ and the slope $m$ are known. It is derived directly from the definition of slope.

### Standard Form
$$Ax + By = C$$
Where $A, B, C$ are integers. This form is often used in systems of linear equations, as it allows for easy calculation of intercepts: the x-intercept is $C/A$ and the y-intercept is $C/B$.

### Vertical Lines
It is important to note that a vertical line (e.g., $x=k$) is *not* a function because it fails the Vertical Line Test; a single input $x$ produces infinitely many outputs $y$. Therefore, vertical lines are excluded from the classification of linear functions.

## How to Solve

Solving problems involving linear functions typically involves finding the equation of a line given specific constraints, or finding the intersection of two linear functions.

### Deriving the Equation
To determine the equation of a line passing through $(x_1, y_1)$ and $(x_2, y_2)$:
1. Calculate the slope: $m = (y_2 - y_1) / (x_2 - x_1)$.
2. Substitute the slope and one point into $y = mx + b$.
3. Solve for the constant $b$: $b = y_1 - m(x_1)$.
4. Write the final expression: $f(x) = mx + b$.

### Intersection of Two Lines
Given two linear functions $f(x) = m_1x + b_1$ and $g(x) = m_2x + b_2$, the intersection point occurs where $f(x) = g(x)$.
$$m_1x + b_1 = m_2x + b_2$$
Solving for $x$:
$$x(m_1 - m_2) = b_2 - b_1$$
$$x = \\frac{b_2 - b_1}{m_1 - m_2}$$
Once $x$ is found, substitute it back into either original equation to find the corresponding $y$-coordinate. If $m_1 = m_2$ and $b_1 \\neq b_2$, the lines are parallel and never intersect. If $m_1 = m_2$ and $b_1 = b_2$, the lines are coincident (identical).

## Summary

Linear functions are the simplest yet most ubiquitous models in mathematics. Defined by their constant rate of change and first-degree polynomial structure, they provide the necessary framework for understanding linear systems, optimization, and the fundamental mechanics of graphs. 

Whether represented in slope-intercept, point-slope, or standard form, linear functions allow us to predict future outcomes based on historical trends. Their properties—specifically the invariance of the slope and the predictable nature of transformations—ensure that they remain essential tools in engineering, economics, physics, and data science. By mastering the manipulation of variables $m$ and $b$, one gains the ability to describe the behavior of any system that evolves linearly, providing a clear window into the underlying structure of quantitative relationships.`;export{e as default};