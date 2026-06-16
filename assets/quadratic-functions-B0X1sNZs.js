var e=`# Quadratic Functions

A quadratic function is a polynomial function of degree two, meaning that the highest power of the variable is two. These functions represent the foundational link between linear algebra and higher-order calculus, serving as the basis for understanding parabolic geometry, optimization, and kinematics. In the field of mathematics, they are defined by the presence of a squared term, which imparts unique geometric properties, such as a single point of extreme value and bilateral symmetry.

## Definition

A quadratic function is formally defined as any function that can be written in the standard form:
$$f(x)=ax^2+bx+c$$
where $a$, $b$, and $c$ are real number constants, and the constraint $a \\neq 0$ must be strictly maintained. If $a$ were equal to zero, the function would collapse into a linear expression, $f(x)=bx+c$, losing the characteristic curvature of a parabola. The variable $x$ acts as the independent input, while $f(x)$ represents the dependent output. The coefficients carry specific functional significance: $a$ dictates the concavity and steepness, $b$ influences the horizontal shift relative to the vertex, and $c$ defines the $y$-intercept.

## Key Terminology

To analyze quadratic functions effectively, one must master several essential components:

| Term | Definition |
| :--- | :--- |
| **Parabola** | The geometric shape formed by the graph of a quadratic function. |
| **Vertex** | The turning point of the parabola, representing the global minimum or maximum. |
| **Axis of Symmetry** | A vertical line passing through the vertex, dividing the parabola into two mirror images. |
| **Discriminant** | The value calculated as $D = b^2-4ac$, which determines the number and nature of roots. |
| **Root/Zero** | The $x$-values where $f(x)=0$, also known as $x$-intercepts. |
| **Concavity** | The direction in which the parabola opens; upward if $a>0$ and downward if $a<0$. |

## Purpose

Quadratic functions are indispensable because they model phenomena that involve acceleration or rate-of-change variation. In classical physics, the displacement of an object under constant acceleration is governed by a quadratic relationship with respect to time, expressed as $d(t) = \\frac{1}{2}at^2 + v_0t + d_0$. Beyond physics, quadratic functions are used in economics to model profit maximization (where marginal revenue equals marginal cost) and in engineering for structural design, such as the shape of suspension bridge cables. Understanding these functions allows analysts to identify optimal values (minima or maxima) within a system, which is a core requirement in operations research and machine learning algorithms like gradient descent.

## Fundamental Properties

The behavior of a quadratic function is dictated primarily by its parameters $a, b$, and $c$. The vertex coordinates $(h, k)$ can be derived using the formula:
$$h = -\\frac{b}{2a}$$
$$k = f\\left(-\\frac{b}{2a}\\right) = c - \\frac{b^2}{4a}$$
This vertex point is critical because it describes the extremum of the function. If $a > 0$, the parabola opens upward, and $k$ represents the minimum value. If $a < 0$, the parabola opens downward, and $k$ represents the maximum value.

The axis of symmetry is defined by the vertical line $x = h = -\\frac{b}{2a}$. Any point on one side of this line has a corresponding point on the other side at the same $y$-coordinate, separated by an equal distance from the axis.

The discriminant $\\Delta = b^2-4ac$ provides a quick diagnostic of the function's interaction with the $x$-axis:
1. If $\\Delta > 0$: The function has two distinct real roots.
2. If $\\Delta = 0$: The function has exactly one real root (the vertex sits on the $x$-axis).
3. If $\\Delta < 0$: The function has no real roots; the parabola lies entirely above or below the $x$-axis.

The following interactive graph allows for the observation of these transformations in real-time, specifically how changing $a, b,$ and $c$ alters the shape and position of the parabola $f(x) = ax^2 + bx + c$.

\`\`\`interactivegraph
ax^2 + bx + c
params: a=1, b=0, c=0
range: a=-3:3, b=-3:3, c=-3:3
\`\`\`

## Types & Variations

Quadratic functions can be expressed in three primary algebraic forms, each providing different insights:

1. **Standard Form:** $f(x) = ax^2 + bx + c$. Best for determining the $y$-intercept and calculating the discriminant.
2. **Vertex Form:** $f(x) = a(x-h)^2 + k$. This form explicitly reveals the vertex $(h, k)$, making it ideal for graphing and identifying extrema.
3. **Intercept (Factored) Form:** $f(x) = a(x-p)(x-q)$. This form highlights the roots ($p$ and $q$) and is useful for solving equations where $f(x)=0$.

Transitions between these forms are performed via algebraic manipulation. Converting Standard to Vertex form is achieved through the process of "completing the square." Converting to Intercept form is achieved through polynomial factorization or the quadratic formula.

## How to Solve

Solving a quadratic function typically involves finding the roots ($f(x)=0$). There are four primary analytical methods:

### 1. Factoring
If the quadratic can be expressed as $(x-p)(x-q)=0$, the roots are simply $x=p$ and $x=q$. This is the fastest method but requires the discriminant to be a perfect square.

### 2. The Quadratic Formula
For any quadratic $ax^2 + bx + c = 0$, the roots are given by:
$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$
This universal formula works for all quadratic equations, including those with complex roots (when $b^2-4ac < 0$).

### 3. Completing the Square
This method involves rearranging the function into the form $(x+d)^2 = e$. By isolating the square, one can solve for $x$ by taking the square root of both sides:
$$x = -d \\pm \\sqrt{e}$$

### 4. Graphing
By plotting the function, one can approximate the intercepts. While less precise than analytical methods, it is vital for visualizing the function's domain and range. The graph below displays $f(x) = x^2 - 4$, illustrating a parabola with its vertex at $(0, -4)$ and roots at $x = 2$ and $x = -2$.

\`\`\`graph
x^2 - 4
\`\`\`

## Summary

Quadratic functions are defined by their second-degree structure, resulting in the iconic parabolic graph. Their utility spans from basic geometric modeling to complex physical simulations. Key metrics, such as the vertex, axis of symmetry, and roots, are calculated directly from the coefficients $a, b,$ and $c$. Whether utilizing the standard, vertex, or factored form, the underlying behavior of the function remains consistent, governed by the principles of polynomial algebra. Mastery of these functions requires a balance between algebraic manipulation—such as completing the square or applying the quadratic formula—and geometric interpretation through the analysis of concavity and extrema. As a foundational topic, the study of quadratics provides the essential tools for approaching higher-level mathematical modeling and calculus.`;export{e as default};