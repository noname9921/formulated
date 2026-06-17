var e=`# Equations

## Definition

An equation is a mathematical statement asserting the equality of two expressions. It is structured around the equality symbol, denoted by $=$, which serves as the relational operator separating the left-hand side (LHS) and the right-hand side (RHS). Formally, if $f(x)$ and $g(x)$ are expressions, the equation $f(x)=g(x)$ expresses that both sides evaluate to the same value for a given set of variables.

At the core of an equation lies the concept of balance. Unlike an identity, which is true for all values of its variables, an equation typically defines a condition or a constraint. The set of values for the variables that satisfy this condition is known as the solution set. If no such values exist, the equation is considered inconsistent; if every value in the domain satisfies the equation, it is classified as an identity.

Equations are the language of science and engineering. They allow us to translate physical observations—such as the motion of a planet, the flow of electricity, or the growth of a population—into formal mathematical logic. By manipulating these symbols according to defined axioms, we can derive unknown quantities and predict future states of a system.

## Key Terminology

To discuss equations effectively, one must understand the lexicon used to categorize and describe them:

| Term | Definition |
| :--- | :--- |
| Variable | A symbol (e.g., $x, y, z$) representing an unknown or changing value. |
| Constant | A fixed numeric value (e.g., $5, \\pi, e$) that does not change within the context of the problem. |
| Coefficient | A constant multiplier applied to a variable (e.g., $3$ in $3x$). |
| Term | A single mathematical expression involving variables, constants, and operators. |
| Solution | A specific value that, when substituted for the variable, makes the equation a true statement. |
| Degree | The highest exponent of the variable in a polynomial equation. |
| Root | A synonym for the solution, particularly used when discussing functions where $f(x)=0$. |
| Domain | The set of all possible input values for which the equation is defined. |

## Purpose

The primary purpose of an equation is to provide a framework for solving problems. By establishing equality, we create a "problem-space" where we can isolate variables to reveal hidden information. Equations serve three main functional roles in mathematics:

1. **Modeling:** Equations represent real-world phenomena. For instance, $d=vt$ models distance traveled at a constant velocity, while $F=ma$ links force, mass, and acceleration in classical mechanics.
2. **Constraint Satisfaction:** Equations define the limits of a system. In optimization, we often seek the maximum value of a function subject to constraints defined by equations.
3. **Equivalence:** Equations demonstrate that two different-looking expressions represent the same underlying reality. For example, the Pythagorean theorem $a^2+b^2=c^2$ defines the equivalence between the squares of the legs and the square of the hypotenuse in a right triangle.

## Fundamental Properties

Equations obey specific logical properties based on the axioms of equality. These properties ensure that when we manipulate an equation, we maintain the truth value of the equality.

The **Reflexive Property** states that for any value $a$, $a=a$. This seems trivial, but it serves as the basis for algebraic consistency.

The **Symmetric Property** asserts that if $a=b$, then $b=a$. This allows us to reorient equations based on our analytical needs, such as moving the variable to the left side: $5=x$ becomes $x=5$.

The **Transitive Property** states that if $a=b$ and $b=c$, then $a=c$. This allows for the chaining of equations, which is vital when deriving complex solutions across multiple steps.

The **Addition and Multiplication Properties** are the "mechanics" of algebra:
- If $a=b$, then $a+c=b+c$.
- If $a=b$, then $ac=bc$.
These properties permit the isolation of a variable by performing the inverse operation on both sides of the equation.

## Types & Variations

Equations are categorized by their complexity and the nature of their variables. The simplest form is the linear equation, where variables are only raised to the power of one.

### Linear Equations
A linear equation in one variable takes the form $ax+b=0$. When graphed on a Cartesian plane, it produces a straight line. The following static graph illustrates $f(x)=2x-1$.

\`\`\`graph
2x-1
\`\`\`

### Quadratic Equations
Quadratic equations are of the form $ax^2+bx+c=0$. These are defined by a degree of two, resulting in a parabolic curve. The interaction between coefficients $a, b,$ and $c$ dictates the width, direction, and vertex of the parabola. The interactive graph below allows you to manipulate the parameter $a$, which influences the "steepness" of the curve $ax^2+1$.

\`\`\`interactivegraph
ax^2+1
params: a=1
range: a=-3:3
\`\`\`

### Transcendental Equations
These involve non-algebraic functions, such as trigonometric, exponential, or logarithmic terms. Examples include $\\sin(x)=0.5$ or $e^x=10$. These equations often cannot be solved via basic algebraic isolation and require numerical methods or inverse functions.

### Differential Equations
These relate a function to its derivatives, such as $\\frac{dy}{dx} = ky$. They are the backbone of physics, describing how quantities change over time or space.

## How to Solve

Solving an equation is the systematic process of finding the values that satisfy the equality. The technique chosen depends on the equation type.

### Algebraic Manipulation
For linear equations, we use the principle of inverse operations. To solve $3x+5=14$, we subtract $5$ from both sides ($3x=9$), then divide by $3$ to find $x=3$.

### Factoring
For higher-order polynomials, we often set the equation to zero and factor the expression. For $x^2-5x+6=0$, we factor into $(x-2)(x-3)=0$. By the Zero Product Property, either $x-2=0$ or $x-3=0$, giving solutions $x=2$ and $x=3$.

### The Quadratic Formula
When an equation cannot be easily factored, the quadratic formula provides a universal solution for $ax^2+bx+c=0$:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
This formula handles any quadratic, including those with irrational or complex roots.

### Numerical Methods
For complex transcendental equations where symbolic isolation is impossible (e.g., $x + \\cos(x) = 0$), we use numerical approximation. The Newton-Raphson method is a common iterative approach:
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
By repeatedly calculating $x_{n+1}$ from an initial guess $x_n$, the sequence converges to the root of the equation with high precision.

## Summary

Equations are the fundamental building blocks of mathematical inquiry. They provide a precise syntax for describing relationships, constraints, and dependencies between quantities. From basic linear equations that define simple ratios to complex differential equations that model the curvature of spacetime, the study of equations involves understanding both the structure of the equality and the methods required to find the values that maintain that structure.

By mastering the properties of equality—reflexivity, symmetry, and transitivity—and learning the specific techniques for solving linear, quadratic, and transcendental forms, one gains the ability to decode the mathematical patterns of the natural world. Whether through exact algebraic factoring or iterative numerical computation, the search for the solution of an equation remains one of the most powerful tools in human logic and scientific advancement.`;export{e as default};