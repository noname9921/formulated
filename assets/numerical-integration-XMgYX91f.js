var e=`# Numerical Integration

## Definition
Numerical integration, often referred to as numerical quadrature, is a collection of algorithms used to calculate the numerical value of a definite integral. Mathematically, it seeks to approximate the value of the integral $I = \\int_{a}^{b} f(x)dx$ by evaluating the integrand $f(x)$ at a finite set of points within the interval $[a, b]$. 

When an antiderivative $F(x)$ such that $F'(x) = f(x)$ is difficult or impossible to determine analytically, or when the function $f(x)$ is only known at discrete data points (as in experimental observation), numerical integration becomes the primary tool for scientists and engineers. The fundamental concept relies on replacing the complex function $f(x)$ with a simpler function, such as a polynomial, which is easily integrable over the interval.

## Key Terminology
To understand numerical integration, one must master several specific terms that define the precision and behavior of these algorithms:

| Term | Definition |
|:---|:---|
| Integrand | The function $f(x)$ being integrated. |
| Interval | The range $[a, b]$ over which the integration is performed. |
| Subinterval | Smaller partitions of $[a, b]$ denoted by $[x_i, x_{i+1}]$. |
| Nodes | The discrete points $x_i$ where the function $f(x)$ is evaluated. |
| Weights | The coefficients $w_i$ assigned to each function evaluation. |
| Truncation Error | The difference between the exact integral and the numerical approximation. |
| Order of Accuracy | A measure of how fast the error decreases as the step size decreases. |
| Quadrature | The process of finding an area; synonymous with numerical integration. |

## Purpose
The primary purpose of numerical integration is to circumvent the limitations of the Fundamental Theorem of Calculus. Many functions appearing in physics, statistics, and finance do not possess elementary antiderivatives. For example, the Gaussian integral $\\int e^{-x^2}dx$ or the Fresnel integrals $\\int \\sin(x^2)dx$ cannot be expressed in terms of polynomials, logarithms, or trigonometric functions.

Numerical integration also serves as the bridge between continuous mathematical models and discrete computational data. In real-world applications such as digital signal processing, finite element analysis, and risk assessment, data is often provided as a sampled series. Numerical integration allows for the calculation of total energy, displacement, or expected value from these discrete observations. Furthermore, it enables high-precision computing in simulations where closed-form analytical solutions are computationally more expensive or logically non-existent.

## Fundamental Properties
Numerical integration methods are generally derived using the method of undetermined coefficients or polynomial interpolation. The general form is given by:

$$I \\approx \\sum_{i=0}^{n} w_i f(x_i)$$

1. **Linearity:** The operator is linear, meaning $\\int (af(x) + bg(x))dx = a\\int f(x)dx + b\\int g(x)dx$. Numerical quadrature schemes preserve this property.
2. **Convergence:** As the number of subintervals $n \\to \\infty$, the approximation should ideally converge to the exact integral $I$.
3. **Stability:** Small errors in the input data (the evaluations of $f(x)$) should not lead to disproportionately large errors in the final result.
4. **Efficiency:** A balance between the computational cost (number of function evaluations) and the resulting truncation error.
5. **Precision (Degree of Exactness):** An integration rule is said to have a degree of exactness $k$ if it integrates all polynomials of degree $\\le k$ exactly. For instance, the Trapezoidal rule has a degree of exactness of 1 (it integrates lines exactly).

## Types & Variations
There are several families of integration techniques based on how the function $f(x)$ is sampled and approximated.

### Newton-Cotes Formulas
These methods assume that the nodes $x_i$ are equally spaced.
* **Trapezoidal Rule:** Approximates the area under the curve as a series of trapezoids. It uses the endpoints of the interval: $I \\approx \\frac{b-a}{2}[f(a) + f(b)]$.
* **Simpson's 1/3 Rule:** Uses quadratic interpolation through three points, providing higher accuracy for smooth functions.

### Gaussian Quadrature
Unlike Newton-Cotes, Gaussian quadrature chooses the nodes $x_i$ optimally to maximize the degree of precision. By selecting the roots of orthogonal polynomials (such as Legendre polynomials), an $n$-point Gaussian rule can integrate polynomials up to degree $2n-1$ exactly.

### Adaptive Quadrature
These algorithms are designed to adjust the step size $h$ dynamically. In regions where the function $f(x)$ oscillates rapidly or has high curvature, the algorithm uses smaller intervals. In regions where $f(x)$ is nearly flat, it uses larger intervals, significantly optimizing the computational load.

### Composite Methods
Composite methods involve splitting the integral into smaller segments and applying a simple rule (like the Trapezoidal rule) to each segment. The composite Trapezoidal rule is defined as:

$$I \\approx \\frac{h}{2} \\left[ f(a) + 2\\sum_{i=1}^{n-1} f(x_i) + f(b) \\right]$$

The graph below plots $f(x) = \\sin(x) + 0.5$ on the interval $[0, \\pi]$, which helps visualize the area being approximated by trapezoids or rectangles.

\`\`\`graph
\\sin(x) + 0.5
\`\`\`

## How to Solve
Solving a numerical integration problem involves a structured approach to ensure both efficiency and error control.

### Step 1: Analyze the Integrand
Determine if the function $f(x)$ is smooth, periodic, or contains singularities. Smooth functions are well-suited for Gaussian Quadrature, while functions with known discrete values are better suited for Composite Newton-Cotes rules.

### Step 2: Select the Method
If high accuracy is required for a smooth function, select Gaussian Quadrature. If the function is known only at discrete, equally spaced points, select the Composite Simpson's Rule. If the derivative is high or the function is poorly behaved, consider Adaptive Quadrature.

### Step 3: Implement the Algorithm
Define the interval $[a, b]$ and the number of subintervals $n$. Compute the step size $h = \\frac{b-a}{n}$. Evaluate the function at the required nodes.

### Step 4: Error Estimation
Calculate the error term. For the composite trapezoidal rule, the error is given by:

$$E_t = -\\frac{(b-a)^3}{12n^2} f''(\\xi)$$

where $\\xi \\in [a, b]$. If the error exceeds your tolerance threshold, increase $n$ or switch to a higher-order method like Romberg Integration, which uses Richardson extrapolation to improve the result.

### Example Walkthrough
Consider $f(x) = x^2$ over $[0, 2]$. Using the trapezoidal rule with $n=2$ ($h=1$):
Nodes are $x_0=0, x_1=1, x_2=2$.
$f(0)=0, f(1)=1, f(2)=4$.
$I \\approx \\frac{1}{2}[f(0) + 2f(1) + f(2)] = \\frac{1}{2}[0 + 2 + 4] = 3$.
The exact value is $\\int_0^2 x^2 dx = [\\frac{1}{3}x^3]_0^2 = 8/3 \\approx 2.667$. The error is $0.333$. By increasing $n$, the result will approach $2.667$.

Use the following interactive tool to explore how changing the number of segments $n$ affects the approximation of the area under a curve.

\`\`\`interactivegraph
0.5 * x^2 + 1
params: n=5
range: n=1:50
\`\`\`

## Summary
Numerical integration is a fundamental pillar of computational mathematics. By transforming the continuous task of integration into the discrete task of weighted summation, we empower computers to solve complex problems that analytical methods cannot address. 

The choice of method is governed by a trade-off between computational cost and required precision. While Newton-Cotes rules are simple to implement, Gaussian Quadrature remains the gold standard for precision in smooth mathematical functions. Adaptive methods provide the flexibility needed for real-world applications where data density varies. Mastering these techniques requires a deep understanding of the underlying function behavior, error propagation, and the algorithmic structure of each quadrature rule. As computational power continues to grow, the role of these numerical methods remains essential in everything from climate modeling to financial engineering.`;export{e as default};