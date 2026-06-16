var e=`# Double Integrals over Rectangular and General Regions

## Definition

A double integral is the extension of the single-variable definite integral to functions of two variables, $f(x,y)$, defined over a region $D$ in the $xy$-plane. Conceptually, the double integral represents the signed volume between the surface $z=f(x,y)$ and the $xy$-plane over the domain $D$. Mathematically, we define this through the Riemann sum process. We partition the region $D$ into a grid of $n$ small sub-rectangles with area $\\Delta A_i = \\Delta x_i \\Delta y_i$. The double integral is defined as the limit of the sum:

$$\\iint_D f(x,y) \\, dA = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*, y_i^*) \\Delta A_i$$

where $(x_i^*, y_i^*)$ is any sample point within the $i$-th sub-rectangle. If the limit exists, the function $f$ is said to be integrable over $D$. When $D$ is a rectangle $R = [a, b] \\times [c, d]$, the integral simplifies to the iterated integral form, allowing for evaluation via successive single integrations.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Integrand | The function $f(x,y)$ being integrated over the region. |
| Region of Integration | The domain $D$ in the $xy$-plane where the function is evaluated. |
| Iterated Integral | An integral computed by integrating with respect to one variable at a time. |
| Fubini's Theorem | The principle stating that for continuous functions, the order of integration does not change the result. |
| Differential Area | Denoted as $dA$, representing $dx\\,dy$ or $dy\\,dx$ in Cartesian coordinates. |
| Volume | The primary geometric interpretation of $\\iint_D f(x,y) \\, dA$ when $f(x,y) \\geq 0$. |

## Purpose

The primary purpose of double integrals is to aggregate values of a surface over a specified area. Beyond calculating volumes, double integrals are fundamental in physics and engineering. They are used to calculate the mass of a lamina (a flat plate) with variable density $\\rho(x,y)$, the center of mass, the moment of inertia, and electric charge distribution over a surface. They allow for the transition from point-wise behavior to global properties, serving as the bridge between localized properties and aggregate accumulation across two-dimensional manifolds.

## Fundamental Properties

Double integrals obey several essential properties, largely inherited from single-variable calculus:

1. **Linearity**: For constants $c_1$ and $c_2$, $\\iint_D [c_1 f(x,y) + c_2 g(x,y)] \\, dA = c_1 \\iint_D f(x,y) \\, dA + c_2 \\iint_D g(x,y) \\, dA$.
2. **Monotonicity**: If $f(x,y) \\leq g(x,y)$ for all $(x,y)$ in $D$, then $\\iint_D f(x,y) \\, dA \\leq \\iint_D g(x,y) \\, dA$.
3. **Additivity**: If $D = D_1 \\cup D_2$ and the intersection of $D_1$ and $D_2$ has zero area, then $\\iint_D f(x,y) \\, dA = \\iint_{D_1} f(x,y) \\, dA + \\iint_{D_2} f(x,y) \\, dA$.
4. **Absolute Value**: The inequality $|\\iint_D f(x,y) \\, dA| \\leq \\iint_D |f(x,y)| \\, dA$ holds, providing bounds on the total integral based on the magnitude of the function.

## Types & Variations

There are two primary classifications for the region $D$:

### Rectangular Regions
When $D = [a, b] \\times [c, d]$, the bounds of integration are constant. The integral is evaluated as:
$$\\int_c^d \\int_a^b f(x,y) \\, dx \\, dy = \\int_a^b \\int_c^d f(x,y) \\, dy \\, dx$$
This assumes $f$ is continuous on $R$, allowing the use of Fubini's Theorem.

### General Regions (Type I and Type II)
Most practical applications involve regions bounded by functions rather than constants.

- **Type I Regions**: These are bounded by two continuous functions $g_1(x)$ and $g_2(x)$ such that $a \\leq x \\leq b$ and $g_1(x) \\leq y \\leq g_2(x)$. The integral is:
$$\\iint_D f(x,y) \\, dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x,y) \\, dy \\, dx$$
- **Type II Regions**: These are bounded by two continuous functions $h_1(y)$ and $h_2(y)$ such that $c \\leq y \\leq d$ and $h_1(y) \\leq x \\leq h_2(y)$. The integral is:
$$\\iint_D f(x,y) \\, dA = \\int_c^d \\int_{h_1(y)}^{h_2(y)} f(x,y) \\, dx \\, dy$$

## How to Solve

Solving double integrals requires a systematic approach, often involving the identification of the region's geometry.

### 1. Visualization and Setting Bounds
First, sketch the region $D$ in the $xy$-plane. Identify the boundaries. If the boundaries are constants, it is a rectangle. If they depend on variables, determine if the region is Type I or Type II.

### 2. Choosing the Order of Integration
Sometimes the order $dy\\,dx$ is significantly easier than $dx\\,dy$. For example, if $f(x,y) = e^{x^2}$, you cannot integrate with respect to $x$ first using elementary functions, but you might be able to integrate with respect to $y$ first if the bounds allow.

### 3. Iterated Integration
Evaluate the inner integral, treating the outer variable as a constant. For example, if evaluating $\\int_a^b [\\int_{g_1(x)}^{g_2(x)} f(x,y) \\, dy] \\, dx$:
- Compute $F(x, y) = \\int f(x,y) \\, dy$.
- Evaluate $F(x, g_2(x)) - F(x, g_1(x))$.
- Integrate the result with respect to $x$ from $a$ to $b$.

### 4. Coordinate Transformation
For circular or elliptical regions, Cartesian coordinates often lead to difficult integrals. In such cases, converting to polar coordinates ($x = r \\cos \\theta, y = r \\sin \\theta$) simplifies the domain. The differential area becomes $dA = r \\, dr \\, d\\theta$.

## Summary

Double integration is a robust mathematical framework for extending the concept of accumulation to two-dimensional domains. Whether the region is a simple rectangle or a complex shape defined by functional boundaries, the method relies on Fubini's Theorem to reduce multivariate problems into sequences of single-variable calculus problems. 

The evaluation process involves a transformation of the integral expression into an iterated integral where the order is chosen based on the geometry of the region and the nature of the integrand. By mastering the distinction between Type I and Type II regions, and recognizing when to apply changes of variables, one can calculate volumes, masses, and other spatial properties essential to the physical sciences. The precision of the Riemann sum definition ensures that these results are rigorously tied to the behavior of the function over the entire domain. As one moves into higher dimensions, these principles provide the foundation for triple integrals and surface integrals, cementing the role of double integration as a cornerstone of integral calculus.`;export{e as default};