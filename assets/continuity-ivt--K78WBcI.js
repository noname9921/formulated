var e=`# Continuity and Intermediate Value Theorem

## Definition

Continuity is a fundamental concept in real analysis that describes a function whose graph can be drawn without lifting a pen from the paper. Formally, a function $f(x)$ is continuous at a point $c$ in its domain if and only if the limit of the function as $x$ approaches $c$ is equal to the value of the function at $c$. This is expressed by the three-part definition:

1. $f(c)$ is defined.
2. $\\lim_{x\\to c} f(x)$ exists.
3. $\\lim_{x\\to c} f(x)=f(c)$.

If a function fails any of these conditions, it is said to be discontinuous at $c$. Extending this to an interval $(a, b)$, a function is continuous on that interval if it is continuous at every point $c \\in (a, b)$.

The Intermediate Value Theorem (IVT) is a pillar of calculus derived from the completeness of real numbers. It states that if a function $f$ is continuous on a closed interval $[a, b]$, and $k$ is any value between $f(a)$ and $f(b)$, then there exists at least one number $c$ in the interval $(a, b)$ such that $f(c)=k$. Effectively, the theorem asserts that a continuous function cannot "skip" values; it must traverse every point between its start and end values.

## Key Terminology

- **Limit:** The value a function approaches as the input approaches some point.
- **Closed Interval:** An interval $[a, b]$ that includes its endpoints $a$ and $b$.
- **Open Interval:** An interval $(a, b)$ that excludes its endpoints.
- **Removable Discontinuity:** A point where the limit exists, but the function value at that point is either missing or does not match the limit (a "hole").
- **Jump Discontinuity:** A point where the left-hand limit and right-hand limit exist but are unequal.
- **Infinite Discontinuity:** A point where the function values grow without bound as $x$ approaches $c$ (a vertical asymptote).
- **Completeness Property:** A property of the real number system ensuring there are no "gaps" on the number line, which is necessary for the validity of the IVT.

## Purpose

The primary purpose of studying continuity is to provide a rigorous framework for calculus operations like differentiation and integration. Continuity ensures that small changes in input lead to small changes in output, providing stability for approximations.

The IVT, conversely, acts as an existence theorem. Its main utility is to prove the existence of roots or solutions to equations where an explicit algebraic solution might be impossible to compute. For instance, if you are analyzing $f(x)=x^5-x-1$, you can show a solution exists in $[1, 2]$ because $f(1)=-1$ and $f(2)=29$. Since $f$ is a polynomial (and thus continuous), there must exist some $c \\in (1, 2)$ where $f(c)=0$. This is the basis for numerical methods like the bisection method.

## Fundamental Properties

Continuous functions exhibit several essential properties that define their behavior over intervals.

1. **Sum, Difference, Product, and Quotient:** If $f$ and $g$ are continuous at $c$, then $f+g$, $f-g$, and $f \\cdot g$ are also continuous at $c$. The quotient $f/g$ is continuous at $c$ provided $g(c)\\neq 0$.
2. **Composition:** If $g$ is continuous at $c$ and $f$ is continuous at $g(c)$, then $(f \\circ g)(x)$ is continuous at $c$.
3. **Extreme Value Theorem (EVT):** A refinement of continuity, stating that a continuous function on a closed interval $[a, b]$ must attain an absolute maximum and an absolute minimum at least once.
4. **Intermediate Value Property:** As defined, a continuous function maps connected sets to connected sets. If the domain is an interval, the image must also be an interval.

## Types & Variations

Discontinuities can be categorized based on their behavior, which assists in diagnosing the failure of the conditions of continuity.

| Type of Discontinuity | Mathematical Behavior | Example |
| :--- | :--- | :--- |
| Removable | $\\lim_{x\\to c} f(x)$ exists but $\\neq f(c)$ | $f(x)=\\frac{x^2-1}{x-1}$ at $x=1$ |
| Jump | $\\lim_{x\\to c^-} f(x) \\neq \\lim_{x\\to c^+} f(x)$ | $f(x)=\\text{sgn}(x)$ at $x=0$ |
| Infinite | $\\lim_{x\\to c} f(x) = \\pm\\infty$ | $f(x)=\\frac{1}{x^2}$ at $x=0$ |
| Essential | Limit does not exist and is not infinite | $f(x)=\\sin(1/x)$ at $x=0$ |

The IVT can also be varied to include the **Bolzano's Theorem**, which is specifically the case where the function changes signs between $a$ and $b$, guaranteeing a root (i.e., $k=0$).

To visualize how parameter variation affects a function crossing a threshold (the IVT in practice), consider a function family shifting relative to a target value.

\`\`\`interactivegraph
x^3 + ax + b
params: a=-1, b=-2
range: a=-5:5, b=-5:5
\`\`\`

The interactive graph above plots the function $f(x) = x^3 + ax + b$. By adjusting the parameter $b$, you can move the function vertically, while $a$ adjusts the curvature. Observe how for any chosen target value $y=k$, you can always find an $x$ such that $f(x)=k$, demonstrating the IVT in a dynamic context.

## How to Solve

Problems involving the IVT and continuity typically fall into three categories: proving existence, determining intervals, or applying numerical bisection.

### Step-by-Step for Proving Existence of a Root
1. **Define the Function:** Identify the function $f(x)$ and the closed interval $[a, b]$ being investigated.
2. **Verify Continuity:** State clearly that the function is a polynomial, rational (within domain), or trigonometric function, all of which are continuous on their defined intervals.
3. **Evaluate Endpoints:** Calculate $f(a)$ and $f(b)$.
4. **Check the Target Value:** Confirm the value you are looking for (usually $0$ for roots) lies between $f(a)$ and $f(b)$.
5. **Invoke the Theorem:** Conclude by citing the IVT: "Since $f$ is continuous on $[a, b]$ and $f(a) < k < f(b)$, there exists $c \\in (a, b)$ such that $f(c) = k$."

### Numerical Bisection Framework
When the IVT guarantees a root, the bisection method allows us to approximate it:
- Given interval $[a, b]$ where $f(a)$ and $f(b)$ have opposite signs.
- Midpoint $m = (a+b)/2$.
- If $f(m) = 0$, $m$ is the root.
- If $f(a)$ and $f(m)$ have opposite signs, the root is in $[a, m]$.
- Otherwise, the root is in $[m, b]$.
- Repeat until the interval width $|b-a|$ is less than a desired tolerance.

The graph below plots $f(x) = \\cos(x) - x$. This function is continuous everywhere. Note that $f(0)=1$ and $f(\\pi/2)=-\\pi/2$. Because the sign changes, the IVT guarantees at least one root between $0$ and $\\pi/2$.

\`\`\`graph
\\cos(x) - x
\`\`\`

## Summary

Continuity is the mathematical formalization of the intuitive notion of "unbrokenness." It is not merely a geometric property but a rigorous requirement for the foundations of calculus. The formal epsilon-delta definition (though not covered in detail here) underpins the limit laws that allow us to calculate derivatives and integrals of complex functions. 

The Intermediate Value Theorem serves as a bridge between the abstract property of continuity and concrete problem-solving. It allows mathematicians and engineers to guarantee the existence of solutions for systems that are impossible to solve analytically. Whether one is verifying the existence of an equilibrium point in a physical system or narrowing down the roots of a polynomial via bisection, the synergy between the property of continuity and the logic of the IVT remains an indispensable tool in the analytical toolkit. By ensuring that a function maps connected intervals to connected output sets, these concepts confirm that the real number line is dense, unbroken, and predictable.`;export{e as default};