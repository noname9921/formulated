var e=`# Systems of Equations

## Definition

A system of equations is a set of two or more equations that share the same variables. The solution to a system is the set of values for these variables that satisfy every equation in the system simultaneously. Mathematically, if we have equations $f_1(x_1, x_2, \\dots, x_n) = 0, f_2(x_1, x_2, \\dots, x_n) = 0, \\dots, f_m(x_1, x_2, \\dots, x_n) = 0$, a solution is an ordered tuple $(a_1, a_2, \\dots, a_n)$ such that substituting $x_i = a_i$ makes every equation a true statement.

When we discuss a system in two variables, such as $x$ and $y$, the equations often represent geometric objects in a two-dimensional Euclidean plane. A linear system, for example, represents intersecting lines, while non-linear systems may represent the intersection of parabolas, circles, or other curves. The study of these systems is fundamental to algebra, linear algebra, and multivariable calculus, providing the framework to solve problems where multiple constraints must be balanced concurrently.

## Key Terminology

To navigate the study of systems of equations, one must understand several foundational terms:

| Term | Definition |
| :--- | :--- |
| Variable | An unknown quantity represented by a letter (e.g., $x, y, z$) that we seek to determine. |
| Solution | The specific values of the variables that satisfy all equations in the system. |
| Consistent System | A system that has at least one solution. |
| Inconsistent System | A system that has no solutions (e.g., two parallel lines). |
| Independent System | A system where each equation provides unique information, resulting in a single point of intersection. |
| Dependent System | A system with infinitely many solutions, where the equations are essentially multiples of each other. |
| Coefficient | The constant multiplier attached to a variable (e.g., in $3x$, 3 is the coefficient). |
| Augmented Matrix | A matrix used to represent a system of linear equations for computational efficiency. |

## Purpose

The primary purpose of a system of equations is to find the point or set of points where multiple independent conditions coincide. In physical sciences, these systems are used to model complex environments. For instance, in an economics model, one might have a supply equation and a demand equation; the "equilibrium" of the market is found by solving the system formed by these two curves.

Engineering utilizes systems of equations to analyze circuits (Kirchhoff's Laws), structural stability, and stress distribution. In computer science, systems of equations are the backbone of graphics rendering, data compression algorithms, and machine learning, where optimization problems are often solved by finding the intersection of high-dimensional gradients. By reducing multiple constraints into a solvable form, we can predict outcomes in systems that are too complex to observe directly.

## Fundamental Properties

Systems of equations are governed by algebraic properties that allow for manipulation without altering the underlying solution set. 

1. **Substitution Property:** If $y = f(x)$, one can replace $y$ in any other equation with $f(x)$. This reduces the number of variables, moving the system toward a univariate equation.
2. **Elimination Property:** One can multiply an entire equation by a non-zero scalar or add two equations together. For any two equations $A=B$ and $C=D$, it follows that $A+C=B+D$. This property is the basis for Gaussian elimination.
3. **Existence and Uniqueness:** According to the Fundamental Theorem of Algebra and the study of vector spaces, a linear system with $n$ variables and $n$ independent equations will generally yield exactly one unique solution. If there are fewer equations than variables, the system is underdetermined and may have infinite solutions. If there are more equations than variables, the system is overdetermined and may have no solution unless the equations are consistent.
4. **Geometric Interpretation:** In two dimensions, a linear system $ax+by=c$ and $dx+ey=f$ represents the intersection of two lines. 
   - If the lines are not parallel, they intersect at a single point.
   - If the lines are parallel and distinct, there is no intersection (inconsistent).
   - If the lines are collinear (the same line), there are infinite solutions (dependent).

## Types & Variations

Systems can be categorized by the degree of the variables involved:

### Linear Systems
Linear systems involve equations where all variables are to the first power and there are no products of variables. They take the general form:
$$a_1x + b_1y = c_1$$
$$a_2x + b_2y = c_2$$
These are the most common systems and are solved efficiently using matrix algebra, Cramer's Rule, or Gaussian elimination.

### Non-linear Systems
Non-linear systems involve variables with exponents other than one, products of variables, or transcendental functions (like logarithms or trigonometry). 
Example:
$$x^2 + y^2 = r^2$$
$$y = mx + b$$
This specific system represents the intersection of a circle and a line. Solving these often requires substitution, as elimination becomes significantly more complex when degrees vary.

### Differential Systems
These involve derivatives, such as $\\frac{dx}{dt} = f(x, y)$ and $\\frac{dy}{dt} = g(x, y)$. These systems describe how variables change over time and are critical in chaos theory and population dynamics.

## How to Solve

There are three primary methods for solving systems of equations, each suited for different levels of complexity.

### 1. Substitution
This method is most effective when one variable can be easily isolated.
- **Step 1:** Solve one equation for one variable in terms of the other.
- **Step 2:** Substitute this expression into the other equation(s).
- **Step 3:** Solve the resulting univariate equation.
- **Step 4:** Back-substitute to find the remaining variable.

### 2. Elimination (Addition)
This is preferred for linear systems where coefficients can be easily aligned.
- **Step 1:** Multiply one or both equations by constants so that the coefficients of one variable are additive inverses.
- **Step 2:** Add the equations to eliminate that variable.
- **Step 3:** Solve for the remaining variable.
- **Step 4:** Substitute back into the original equations.

### 3. Matrix Algebra (Row Reduction)
For systems with three or more variables, row reduction is the gold standard. We represent the system as an augmented matrix:
$$
\\begin{bmatrix}
a_1 & b_1 & | & c_1 \\\\
a_2 & b_2 & | & c_2
\\end{bmatrix}
$$
We apply elementary row operations (swapping rows, scaling rows, adding multiples of rows) to achieve row-echelon form. Once in this form, the solution is obtained via back-substitution.

### Visualization of Intersection
Consider the static system where we examine the intersection of a linear function and a quadratic function. The graph below plots $f(x) = x$ and $g(x) = x^2$, illustrating that the two functions intersect at the coordinates $(0,0)$ and $(1,1)$.

\`\`\`graph
x
x^2
\`\`\`

For more complex behaviors, consider an interactive system where we modify the slope and intercept of a line relative to a stationary parabola. The following \`interactivegraph\` demonstrates how changing the slope $m$ and intercept $b$ of $f(x) = mx + b$ affects its intersections with $g(x) = x^2$.

\`\`\`interactivegraph
mx + b
x^2
params: m=1, b=0
range: m=-5:5, b=-5:5
\`\`\`

## Summary

A system of equations serves as a mathematical lens through which we analyze the confluence of multiple constraints. By transforming relationships between variables into solvable algebraic structures, we gain the ability to pinpoint precise states—whether they be the intersection of two trajectories in a physics simulation or the market equilibrium of a supply-demand model.

The transition from simple linear systems solvable by pencil-and-paper substitution to complex, high-dimensional non-linear systems requires a firm grasp of both algebraic manipulation and geometric interpretation. While the methods of elimination and substitution provide the tools for manual calculation, the systematic approach of matrix algebra allows for the scalability necessary for modern computational science. Mastery of these systems is not merely an academic exercise; it is the fundamental prerequisite for understanding how the variables of our world interact, constrain, and define one another.`;export{e as default};