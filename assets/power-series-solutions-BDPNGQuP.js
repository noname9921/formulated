var e=`# Power Series Solutions Around Ordinary Points

## Definition

A power series solution around an ordinary point is a method used to find the solution to a linear homogeneous differential equation of the form:
$$P(x)y'' + Q(x)y' + R(x)y = 0$$
where $P(x)$, $Q(x)$, and $R(x)$ are polynomials. A point $x_0$ is defined as an **ordinary point** of this differential equation if the function $P(x_0) \\neq 0$. In simpler terms, if we write the equation in the standard form $y'' + p(x)y' + q(x)y = 0$, where $p(x) = Q(x)/P(x)$ and $q(x) = R(x)/P(x)$, the point $x_0$ is ordinary if both $p(x)$ and $q(x)$ are analytic at $x_0$. A function is analytic at $x_0$ if it possesses a power series expansion that converges in some open interval containing $x_0$. 

When $x_0$ is an ordinary point, Fuchs' Theorem guarantees that there exists a solution of the form:
$$y(x) = \\sum_{n=0}^{\\infty} a_n(x - x_0)^n$$
This series converges within a radius of convergence $R$, which is at least the distance from $x_0$ to the nearest singular point (where $P(x) = 0$) in the complex plane.

## Key Terminology

To master this technique, one must understand several technical terms that define the behavior of differential equations:

| Term | Definition |
| :--- | :--- |
| **Analytic Function** | A function that can be locally represented by a convergent power series. |
| **Ordinary Point** | A point $x_0$ where the coefficients of the normalized differential equation are analytic. |
| **Singular Point** | A point $x_0$ where the coefficient $P(x_0) = 0$, requiring special treatment (e.g., Frobenius method). |
| **Radius of Convergence** | The distance $R$ from $x_0$ within which the power series is guaranteed to converge. |
| **Recurrence Relation** | A formula that expresses the coefficient $a_n$ in terms of previous coefficients $a_{n-1}, a_{n-2}, \\dots$. |
| **Linear Independence** | Two solutions $y_1(x)$ and $y_2(x)$ are independent if their Wronskian $W(y_1, y_2) \\neq 0$. |

## Purpose

The primary purpose of seeking power series solutions is to solve linear differential equations that do not have solutions expressible in terms of elementary functions (polynomials, exponentials, logarithms, or trigonometric functions). Many critical equations in physics and engineering, such as Bessel’s equation, Legendre’s equation, and Hermite’s equation, arise naturally in the study of wave propagation, heat conduction, and quantum mechanics.

By converting the differential equation into an algebraic recurrence relation, we translate the calculus problem into a sequence problem. This allows for numerical approximation of solutions to arbitrary precision, which is essential for computational physics. Furthermore, power series provide a rigorous way to define "special functions" that serve as the building blocks for modern mathematical analysis.

## Fundamental Properties

The power series method relies on the term-by-term differentiation of convergent series. If $y(x) = \\sum_{n=0}^{\\infty} a_n(x - x_0)^n$, then:
$$y'(x) = \\sum_{n=1}^{\\infty} n a_n(x - x_0)^{n-1}$$
$$y''(x) = \\sum_{n=2}^{\\infty} n(n-1) a_n(x - x_0)^{n-2}$$

These series possess several fundamental properties:
1. **Term-by-term integration and differentiation:** Within the radius of convergence, these operations are valid and do not change the radius of convergence.
2. **Uniqueness:** If two power series represent the same function, their coefficients $a_n$ must be identical for all $n$.
3. **Identity Theorem:** If $\\sum a_n(x - x_0)^n = 0$ for all $x$ in an interval, then $a_n = 0$ for all $n$. This property is the cornerstone for determining the recurrence relation, as it allows us to set the coefficient of each power of $(x - x_0)$ equal to zero independently.

The convergence of these series is dictated by the singular points of the differential equation. Even if a function like $f(x) = \\frac{1}{1+x^2}$ is smooth on the entire real line, its power series representation around $x=0$ is limited by the singularities at $x = \\pm i$ in the complex plane, resulting in a radius of convergence of exactly $R=1$.

## Types & Variations

There are three primary scenarios encountered when dealing with series solutions:

1. **Simple Polynomial Coefficients:** When $P(x), Q(x),$ and $R(x)$ are low-degree polynomials, the recurrence relation is usually a simple two- or three-term relation. These often result in well-known special functions.
2. **Shifted Power Series:** Sometimes, the calculation is simplified by using a variable substitution such as $u = x - x_0$. This centers the series at $0$, simplifying the indexing arithmetic significantly.
3. **The Method of Frobenius:** This is not for ordinary points, but it is the critical variation used when $x_0$ is a "regular singular point." In this case, we assume a solution of the form $y = (x - x_0)^r \\sum a_n(x - x_0)^n$, where $r$ is a constant index determined by the indicial equation.

The behavior of these solutions can be visualized by considering the partial sums of the power series. For example, considering the solution to Airy's equation, which involves terms growing in complexity.

\`\`\`interactivegraph
a_0 + a_1*x + (a_0/2)*x^2 + (a_1/6)*x^3
params: a_0=1, a_1=1
range: a_0=-2:2, a_1=-2:2
\`\`\`
In the interactive graph above, we represent a truncated power series approximation. The coefficients $a_0$ and $a_1$ represent the two arbitrary constants typical of a second-order differential equation. By varying these parameters, the user can observe how the initial conditions $y(0)=a_0$ and $y'(0)=a_1$ dictate the trajectory of the solution near the ordinary point $x=0$.

## How to Solve

Solving a second-order linear differential equation via power series around $x_0=0$ follows a strict algorithmic process.

**Step 1: Assumption**
Assume the solution takes the form:
$$y(x) = \\sum_{n=0}^{\\infty} a_n x^n$$
**Step 2: Differentiation**
Compute the derivatives:
$$y'(x) = \\sum_{n=1}^{\\infty} n a_n x^{n-1}, \\quad y''(x) = \\sum_{n=2}^{\\infty} n(n-1) a_n x^{n-2}$$
**Step 3: Substitution**
Substitute $y, y',$ and $y''$ into the original differential equation $P(x)y'' + Q(x)y' + R(x)y = 0$. 

**Step 4: Index Alignment**
Distribute the polynomial coefficients into the sums. To combine the sums into a single expression $\\sum (\\dots) x^k = 0$, you must shift the indices so that all terms involve $x^k$. For example, if you have $\\sum n(n-1)a_n x^{n-2}$, let $k = n-2$, so $n = k+2$. The sum becomes $\\sum (k+2)(k+1)a_{k+2}x^k$.

**Step 5: The Recurrence Relation**
Since the series must equal zero for all $x$, the coefficient of each power $x^k$ must be zero. This produces a recurrence relation expressing $a_{k+m}$ in terms of $a_k, a_{k-1}, \\dots$.

**Step 6: Determine Coefficients**
Identify the two linearly independent solutions by setting $(a_0=1, a_1=0)$ and then $(a_0=0, a_1=1)$. These choices naturally separate the two fundamental solutions $y_1(x)$ and $y_2(x)$.

**Example:**
Consider $y'' + y = 0$.
1. Assume $y = \\sum a_n x^n$.
2. Substitute: $\\sum_{n=2}^{\\infty} n(n-1)a_n x^{n-2} + \\sum_{n=0}^{\\infty} a_n x^n = 0$.
3. Shift indices: $\\sum_{k=0}^{\\infty} (k+2)(k+1)a_{k+2}x^k + \\sum_{k=0}^{\\infty} a_k x^k = 0$.
4. Recurrence: $(k+2)(k+1)a_{k+2} + a_k = 0 \\implies a_{k+2} = -\\frac{a_k}{(k+2)(k+1)}$.
5. This leads to the alternating factorial series characteristic of $\\cos(x)$ and $\\sin(x)$.

## Summary

Power series solutions around ordinary points represent a bridge between elementary calculus and the advanced analysis of differential equations. By leveraging the analyticity of functions, we can systematically decompose complex linear equations into infinite series that provide both local approximations and global insights into solution behavior.

The method is robust, relying on the convergence properties of power series and the algebraic consistency of recurrence relations. While limited by the radius of convergence and the presence of singular points, it remains the standard approach for solving equations where closed-form solutions in terms of elementary functions are unavailable. Mastery of this technique requires diligent bookkeeping during index shifting and a firm grasp of the underlying series properties. Through the identification of $a_0$ and $a_1$ as the constants of integration, this method perfectly mirrors the theoretical requirement of two linearly independent solutions for a second-order linear homogeneous ordinary differential equation. As modern computational tools advance, these series representations continue to be the primary means by which we calculate the values of transcendental functions used throughout science and engineering.`;export{e as default};