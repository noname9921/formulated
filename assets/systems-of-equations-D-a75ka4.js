var e=`# Systems of Equations

## Definition

A system of equations is a collection of two or more equations that involve the same set of variables. In a system, a solution is defined as an assignment of values to the unknown variables such that every equation in the system is satisfied simultaneously. When we represent these systems mathematically, we look for the intersection of the solution sets of the individual equations.

For example, a linear system with $n$ variables and $m$ equations is generally expressed as:
$$
a_{11}x_1 + a_{12}x_2 + \\dots + a_{1n}x_n = b_1
$$
$$
a_{21}x_1 + a_{22}x_2 + \\dots + a_{2n}x_n = b_2
$$
$$
\\vdots
$$
$$
a_{m1}x_1 + a_{m2}x_2 + \\dots + a_{mn}x_n = b_m
$$
Where $x_1, x_2, \\dots, x_n$ are the unknown variables, $a_{ij}$ are the coefficients, and $b_i$ are the constants. The system is considered "consistent" if at least one set of values for the variables satisfies all equations, and "inconsistent" if no such set exists.

## Key Terminology

To analyze systems of equations effectively, one must understand several foundational terms:

*   **Variables (Unknowns):** The symbols (usually $x, y, z$) representing values we aim to determine.
*   **Coefficients:** Numerical constants multiplying the variables, representing the weight or impact of each variable in the equation.
*   **Constant Term:** A value in an equation that does not change regardless of the variables' values.
*   **Consistent System:** A system with at least one solution.
*   **Inconsistent System:** A system with no solution.
*   **Independent System:** A system where each equation provides new, non-redundant information about the relationship between variables.
*   **Dependent System:** A system where at least one equation can be derived from the others, resulting in infinitely many solutions (or a redundant constraint).
*   **Solution Set:** The collection of all ordered pairs or tuples that satisfy the system.

## Purpose

Systems of equations serve as the primary mathematical language for modeling constraints in the physical world. Their purpose extends beyond simple arithmetic; they provide a framework for balancing variables under conflicting or multi-faceted requirements.

In engineering, systems of equations allow for the calculation of equilibrium points in structures. For instance, determining the forces acting on a truss requires solving a system where the sum of forces in the $x$ and $y$ directions equals zero. In economics, they model supply and demand equilibrium, where the price and quantity where the supply curve meets the demand curve represent a system solution. In computational sciences, systems of equations are the backbone of numerical analysis, computer graphics (rendering 3D objects to 2D screens), and cryptography.

## Fundamental Properties

The behavior of systems is governed by the relationship between the number of equations and the number of variables.

1.  **Existence:** For a system to have a unique solution, it generally must have an equal number of independent equations and variables. If there are fewer equations than variables, the system is "underdetermined" and typically possesses infinitely many solutions. If there are more equations than variables, the system is "overdetermined" and is often inconsistent unless the equations are perfectly redundant.
2.  **Superposition:** In linear systems, if you have two solutions to a system $Ax=b$, any linear combination of those solutions is also a solution to the homogeneous version of that system ($Ax=0$). This principle is vital in physics and differential equations.
3.  **Equivalence:** Two systems are equivalent if they share the exact same solution set. Algebraic operations—such as adding a multiple of one equation to another or multiplying an equation by a non-zero constant—create equivalent systems, which is the mechanical basis for solving them.

## Types & Variations

Systems can be categorized based on the nature of their equations:

| System Type | Characteristics | Example |
| :--- | :--- | :--- |
| Linear System | All variables are to the first power; graphs are straight lines/planes. | $x + y = 5, x - y = 1$ |
| Quadratic System | Contains variables raised to the power of 2; graphs are parabolas/conics. | $y = x^2, y = x + 2$ |
| Nonlinear System | Contains transcendental, exponential, or power functions. | $y = \\sin(x), y = e^x$ |
| Homogeneous System | All constant terms are zero ($b_i = 0$); always has a trivial solution. | $2x + 3y = 0, x - 4y = 0$ |

The following graph illustrates a linear system of two equations: $f_1(x) = x + 1$ and $f_2(x) = -x + 3$. The intersection point $(1, 2)$ is the unique solution to the system.

\`\`\`graph
x + 1
-x + 3
\`\`\`

## How to Solve

There are several methodologies for solving systems, ranging from manual substitution to matrix-based algorithmic approaches.

### 1. Substitution Method
This method is best suited for small systems with two or three variables. One variable is isolated in one equation and then substituted into the other equations. This reduces the dimension of the system until a single-variable equation is reached.

### 2. Elimination Method (Gaussian Elimination)
This is the standard approach for larger systems. By adding or subtracting multiples of equations from one another, we eliminate variables one by one. This process transforms the system into "row-echelon form," where the last variable is solved first and then substituted back up through the previous equations (back-substitution).

### 3. Matrix Representation (Cramer's Rule and Inversion)
Linear systems can be written in the form $AX = B$. If $A$ is a square matrix, the solution is $X = A^{-1}B$ (provided the determinant $|A| \\neq 0$). 
- **Cramer's Rule:** Useful for small systems, it uses determinants to find the value of each variable individually.
- **Matrix Inversion:** Computationally intensive but theoretically elegant for larger systems.

### 4. Interactive Analysis
When working with quadratic or non-linear systems, visualizing the effect of constants is crucial. The following interactive graph allows you to explore how changing the constant $c$ in a system of $y = x^2$ and $y = x + c$ affects the number of solutions (intersection points).

\`\`\`interactivegraph
x^2
x + c
params: c=0
range: c=-2:4
\`\`\`

In the interactive model above, when $c < -0.25$, the line does not touch the parabola, resulting in zero real solutions. When $c = -0.25$, the line is tangent to the parabola (one solution). When $c > -0.25$, the line intersects the parabola twice (two solutions).

## Summary

Systems of equations provide a rigorous analytical framework for determining the state of a system subject to multiple constraints. From the basic linear relationships solved in algebra to complex non-linear models required for advanced engineering, the core principles remain constant: we seek a point of intersection in a multi-dimensional space. Whether using manual substitution, Gaussian elimination, or matrix algebra, the objective is to reduce complexity until the underlying values of the unknown variables are revealed. Mastering these systems is an essential precursor to understanding linear algebra, vector calculus, and virtually all quantitative sciences.`;export{e as default};