var e=`# Linear Approximation and Differentials

## Definition

Linear approximation, also known as the tangent line approximation or linearization, is a method of approximating the value of a complex, non-linear function $f(x)$ near a specific point $x=a$ using a linear function $L(x)$. This local linearization is based on the premise that a differentiable function, when viewed through a sufficiently high-powered lens or over an infinitesimally small interval, behaves like a straight line.

Formally, the linear approximation of a function $f$ at the point $a$ is given by the equation of the tangent line:
$$L(x)=f(a)+f'(a)(x-a)$$
Here, $f'(a)$ represents the derivative of the function evaluated at the point of tangency, which serves as the slope of the approximating line.

Differentials provide a formal notation for describing the relationship between infinitesimal changes in variables. If $y=f(x)$, we define the differential $dx$ as an independent variable representing a small change in $x$. The corresponding differential of $y$, denoted by $dy$, is defined as:
$$dy=f'(x)dx$$
This represents the change in the linear approximation of the function for a given change in $x$. While $\\Delta y = f(x+\\Delta x) - f(x)$ represents the actual change in the function, $dy$ represents the change in the tangent line, serving as an estimation of $\\Delta y$ when $\\Delta x$ is small.

## Key Terminology

To master this topic, one must distinguish between several critical terms:

| Term | Symbol | Definition |
|:---|:---|:---|
| Function Value | $f(a)$ | The exact value of the function at the point of tangency. |
| Derivative | $f'(a)$ | The instantaneous rate of change (slope) at point $a$. |
| Linearization | $L(x)$ | The first-degree Taylor polynomial centered at $a$. |
| Actual Change | $\\Delta y$ | The exact change $f(a+\\Delta x)-f(a)$. |
| Differential of $x$ | $dx$ | An arbitrary increment assigned to $x$, often equal to $\\Delta x$. |
| Differential of $y$ | $dy$ | The change along the tangent line: $f'(a)dx$. |
| Error | $E$ | The discrepancy between actual change and linear change: $\\Delta y - dy$. |

## Purpose

The primary utility of linear approximation lies in simplification. In many fields, such as physics, engineering, and numerical analysis, calculating the exact value of a transcendental function (like $e^x$, $\\sin(x)$, or $\\sqrt{x}$) can be computationally expensive or algebraically impossible without a calculator. Linearization allows for:

1. **Simplification of Physics Equations:** Many laws of physics are derived by linearizing non-linear systems. For instance, the pendulum model $\\sin(\\theta) \\approx \\theta$ for small angles is a direct application of linear approximation.
2. **Error Estimation:** Differentials allow scientists to quantify how sensitive an output variable is to small measurement errors in input variables (propagation of error).
3. **Root Finding:** Algorithms such as Newton's Method rely entirely on linear approximation to iteratively converge to the roots of functions.
4. **Computational Efficiency:** Replacing complex functions with polynomials reduces the overhead in real-time simulations and hardware-level calculations.

## Fundamental Properties

The validity of linear approximation is rooted in the definition of the derivative. Recall that:
$$f'(a) = \\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}$$
For $x$ sufficiently close to $a$, the ratio is approximately equal to the derivative:
$$f'(a) \\approx \\frac{f(x)-f(a)}{x-a}$$
Multiplying both sides by $(x-a)$ yields:
$$f'(a)(x-a) \\approx f(x)-f(a)$$
$$f(x) \\approx f(a) + f'(a)(x-a)$$
This demonstrates that $L(x)$ is a first-order approximation. As $x$ approaches $a$, the approximation error $E(x) = f(x) - L(x)$ vanishes faster than the distance $(x-a)$. Specifically, $\\lim_{x \\to a} \\frac{E(x)}{x-a} = 0$.

Differentials inherit these properties, acting as "linear parts" of increments. The property $dy = f'(x)dx$ is particularly powerful because it treats $dx$ and $dy$ as variables that can be manipulated through algebraic rules, effectively transforming differential equations into solvable forms.

\`\`\`interactivegraph
f(x) = x^2 / 4 + a * x + b
params: a=0, b=0
range: a=-2:2, b=-5:5
\`\`\`
The graph above illustrates the function $f(x) = \\frac{1}{4}x^2 + ax + b$. By adjusting the parameters $a$ (slope adjustment) and $b$ (vertical shift), one can visualize how the tangent line changes at a fixed point $x=0$. Notice how the linear approximation remains locally accurate near the origin regardless of the function's global curvature.

## Types & Variations

1. **Tangent Line Approximation:** The most basic form, using the derivative as the slope.
2. **First-Order Taylor Polynomials:** Linear approximation is the Taylor polynomial $P_1(x)$ of degree 1. Extending this to degree 2 (using $f''(a)$) yields the quadratic approximation, which provides better accuracy for functions with high curvature.
3. **Multivariable Differentials:** For a function $z=f(x,y)$, the total differential is given by:
   $$dz = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy$$
   This extends the concept to planes tangent to surfaces in 3D space.
4. **Logarithmic Differentials:** Taking the natural log before differentiating can simplify products or powers into sums or products, allowing for easier calculation of relative errors.

## How to Solve

To perform a linear approximation or compute differentials, follow this structured procedural framework:

### Step 1: Identify the "Nice" Point
Choose a value $a$ near your target value $x$ such that $f(a)$ and $f'(a)$ are easy to compute exactly. For example, if approximating $\\sqrt{26}$, choose $a=25$ because $\\sqrt{25}=5$ is an integer.

### Step 2: Define the Function and its Derivative
Express the problem as a function $f(x)$. Calculate the first derivative $f'(x)$.
For $\\sqrt{x}$, $f(x) = x^{1/2}$ and $f'(x) = \\frac{1}{2\\sqrt{x}}$.

### Step 3: Evaluate at the Point $a$
Calculate $f(a)$ and $f'(a)$. 
Using $a=25$:
$f(25) = \\sqrt{25} = 5$
$f'(25) = \\frac{1}{2\\sqrt{25}} = \\frac{1}{10} = 0.1$

### Step 4: Apply the Linearization Formula
Substitute these values into $L(x) = f(a) + f'(a)(x-a)$.
For $x=26$:
$L(26) = 5 + 0.1(26 - 25) = 5 + 0.1(1) = 5.1$

### Step 5: Compute the Differential (if required)
If you are asked for the differential $dy$, use $dy = f'(a)dx$.
For $dx = \\Delta x = 1$, $dy = 0.1(1) = 0.1$.
The actual change is $\\Delta y = \\sqrt{26} - 5 \\approx 5.0990 - 5 = 0.0990$.
The error is $0.1 - 0.0990 = 0.001$.

\`\`\`graph
\\sqrt{x}
0.1x + 2.5
\`\`\`
The graph above shows the function $f(x)=\\sqrt{x}$ and its tangent line approximation at $x=25$, represented by $L(x)=0.1x+2.5$. The viewer should observe that as $x$ moves away from $25$, the vertical gap between the square root curve and the line increases, illustrating that the accuracy of the approximation degrades as the interval $\\Delta x$ increases.

## Summary

Linear approximation and differentials represent the transition from static algebra to dynamic calculus. By replacing curved paths with straight lines, we gain the ability to estimate values, predict trends, and simplify complex systems. The key take-away is that linear approximation is a local tool; its accuracy is inversely proportional to the curvature of the function and the size of the interval chosen. 

Differentials elevate this concept by providing an algebraic language for sensitivities and error propagation. Whether calculating the displacement of a pendulum or the tolerance of a mechanical component, these tools remain fundamental. One must always remember that $L(x)$ provides the "best" linear fit at a point, but it remains an approximation—one that necessitates careful consideration of the remainder term, often explored in deeper Taylor series theory. Through the methods described, complex non-linear reality becomes manageable through linear lenses.`;export{e as default};