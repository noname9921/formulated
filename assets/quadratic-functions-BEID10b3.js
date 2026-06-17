var e=`# Quadratic Functions

## Definition

A quadratic function is a polynomial function of degree two, characterized by the highest exponent of the independent variable $x$ being exactly 2. In its most general form, a quadratic function is defined by the equation:

$$f(x)=ax^2+bx+c$$

In this expression, $a$, $b$, and $c$ are real constants, often referred to as coefficients, with the fundamental constraint that $a \\neq 0$. If $a$ were equal to zero, the term $ax^2$ would vanish, reducing the expression to a linear function $f(x)=bx+c$, which no longer possesses the characteristic curvature of a parabola. The domain of any quadratic function is the set of all real numbers, $\\mathbb{R}$, while the range is restricted based on the direction and position of the function's vertex.

## Key Terminology

To analyze quadratic functions effectively, one must understand several technical terms that describe their geometry and behavior:

| Term | Definition |
|:---|:---|
| Parabola | The geometric shape of the graph of a quadratic function. |
| Vertex | The point at which the parabola changes direction; it is either the global minimum or maximum. |
| Axis of Symmetry | The vertical line passing through the vertex, dividing the parabola into two mirror images. |
| Roots/Zeros | The $x$-values where $f(x)=0$, representing the $x$-intercepts of the graph. |
| Discriminant | The value $\\Delta=b^2-4ac$, which determines the nature and number of roots. |
| Leading Coefficient | The coefficient $a$; it dictates the concavity and the "width" of the parabola. |

## Purpose

Quadratic functions serve as the foundational mathematical model for phenomena involving acceleration and area. Because the rate of change of a linear function is constant, the rate of change of a quadratic function (its derivative, $f'(x)=2ax+b$) is itself a linear function. This implies that quadratic models describe systems where the change is proportional to the input, such as:

1. **Projectile Motion:** In classical mechanics, the height of an object under constant gravity is modeled by $h(t)=-\\frac{1}{2}gt^2+v_0t+h_0$.
2. **Optimization:** Businesses use quadratic functions to model revenue or cost, where finding the vertex allows for the determination of maximum profit or minimum cost.
3. **Area Relationships:** Since the area of a square or circle is proportional to the square of its dimensions, quadratic functions naturally describe geometric scaling.
4. **Data Fitting:** Quadratic regression is used in statistics to model non-linear trends that possess a single turning point, providing a better fit than linear regression for certain datasets.

## Fundamental Properties

The behavior of a quadratic function is entirely dictated by its coefficients. The leading coefficient $a$ determines the "opening" of the parabola. If $a>0$, the parabola opens upward, and the vertex represents a global minimum. If $a<0$, the parabola opens downward, and the vertex represents a global maximum.

The axis of symmetry is defined by the formula $x=-\\frac{b}{2a}$. This value is derived by setting the derivative of the quadratic function to zero: $f'(x)=2ax+b=0$, which yields $x=-\\frac{b}{2a}$. Because the vertex lies on the axis of symmetry, its coordinates are $(-\\frac{b}{2a}, f(-\\frac{b}{2a}))$.

The discriminant, $\\Delta=b^2-4ac$, categorizes the roots:
1. If $\\Delta>0$, the function has two distinct real roots.
2. If $\\Delta=0$, the function has exactly one real root (a repeated root), and the vertex sits on the $x$-axis.
3. If $\\Delta<0$, the function has two complex conjugate roots and no $x$-intercepts.

The following interactive graph allows for the visualization of how varying the coefficients $a$, $b$, and $c$ alters the shape and position of the parabola.

\`\`\`interactivegraph
ax^2 + bx + c
params: a=1, b=0, c=0
range: a=-2:2, b=-5:5, c=-5:5
\`\`\`

The user should observe that changing $a$ adjusts the steepness and direction, $b$ shifts the vertex horizontally and vertically, and $c$ determines the $y$-intercept.

## Types & Variations

Quadratic functions are expressed in three primary algebraic forms, each providing specific insights:

**1. Standard Form:** $f(x)=ax^2+bx+c$
This form is the most common for algebraic manipulation, such as applying the quadratic formula or integration. It explicitly identifies the $y$-intercept at the coordinate $(0,c)$.

**2. Vertex Form:** $f(x)=a(x-h)^2+k$
Here, $(h,k)$ represents the vertex. This form is powerful for graphing because it directly shows the horizontal shift ($h$) and vertical shift ($k$) from the parent function $f(x)=x^2$. Expanding $a(x-h)^2+k$ returns the function to standard form.

**3. Intercept Form:** $f(x)=a(x-p)(x-q)$
In this form, $p$ and $q$ are the $x$-intercepts of the function. This is highly useful for determining the roots and the axis of symmetry, as the axis of symmetry is exactly halfway between the intercepts at $x=\\frac{p+q}{2}$.

## How to Solve

Solving quadratic equations involves finding the roots ($f(x)=0$). There are four primary analytical techniques:

**1. Factoring:** If the quadratic can be written as $(x-p)(x-q)=0$, the roots are simply $x=p$ and $x=q$. This is efficient for expressions with simple integer coefficients.

**2. The Quadratic Formula:** This universal tool is derived by completing the square on $ax^2+bx+c=0$. The solutions are given by:
$$x=\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$
This formula works for all quadratic equations, including those with complex roots.

**3. Completing the Square:** This process involves rewriting $ax^2+bx+c$ into vertex form. By adding and subtracting $(\\frac{b}{2a})^2$, one can isolate the square term, allowing for solution by square roots:
$$f(x)=a(x+\\frac{b}{2a})^2 + (c-\\frac{b^2}{4a})$$

**4. Square Root Property:** If an equation is in the form $(x-h)^2=K$, then $x-h=\\pm\\sqrt{K}$, leading to $x=h \\pm \\sqrt{K}$.

Consider the following static graph illustrating the parabola $f(x)=x^2-4x+3$. By observing the graph, one can verify the roots at $x=1$ and $x=3$, and the vertex at $(2,-1)$.

\`\`\`graph
x^2 - 4*x + 3
\`\`\`

## Summary

Quadratic functions represent a vital intersection of algebra, geometry, and calculus. Through their parabolic nature, they provide the necessary framework to model systems involving non-linear growth, acceleration, and parabolic paths. Proficiency with quadratic functions requires moving fluidly between their three algebraic representations—standard, vertex, and intercept—and mastering the analytical methods for identifying key characteristics such as roots, vertices, and axes of symmetry. Whether utilizing the discriminant to categorize behavior or applying the vertex formula for optimization, these functions remain indispensable in scientific and economic analysis.`;export{e as default};