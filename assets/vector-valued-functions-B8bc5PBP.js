var e=`# Vector-Valued Functions and Space Curves

## Definition

A vector-valued function is a mathematical construct that maps a real number $t$ from a domain $I \\subseteq \\mathbb{R}$ to a vector in an $n$-dimensional space $\\mathbb{R}^n$. In the context of three-dimensional space, we represent a vector-valued function as:

$$\\mathbf{r}(t) = \\langle f(t), g(t), h(t) \\rangle = f(t)\\mathbf{i} + g(t)\\mathbf{j} + h(t)\\mathbf{k}$$

In this expression, the individual functions $f(t)$, $g(t)$, and $h(t)$ are known as the component functions of $\\mathbf{r}(t)$. The variable $t$ is typically referred to as the parameter. As $t$ varies over its domain, the tips of the position vectors $\\mathbf{r}(t)$ trace out a set of points in space. This set of points constitutes a space curve $C$, provided the functions are continuous. A space curve is formally defined as the image of an interval $I$ under a continuous vector-valued function.

The domain of $\\mathbf{r}(t)$ is the intersection of the domains of its component functions $f$, $g$, and $h$. If any component function is undefined at a point $t_0$, the vector function $\\mathbf{r}(t)$ is likewise undefined at that point.

## Key Terminology

To analyze space curves effectively, several technical terms are essential:

| Term | Definition |
| :--- | :--- |
| **Parameter** | An independent variable $t$ used to define coordinates as functions of a single input. |
| **Component Functions** | Scalar-valued functions determining the $x$, $y$, and $z$ coordinates of the position vector. |
| **Space Curve** | A path traced by $\\mathbf{r}(t)$ in 3D space, synonymous with the trajectory of a particle. |
| **Smooth Curve** | A curve where $\\mathbf{r}'(t)$ is continuous and $\\mathbf{r}'(t) \\neq \\mathbf{0}$ for all $t$ in the domain. |
| **Tangent Vector** | The derivative vector $\\mathbf{r}'(t)$, representing the instantaneous direction of motion. |
| **Arc Length** | The total distance traveled along the curve between two points, defined by $\\int_{a}^{b} \\|\\mathbf{r}'(t)\\| dt$. |
| **Unit Tangent** | The vector $\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\|\\mathbf{r}'(t)\\|}$, which captures direction independent of speed. |

## Purpose

Vector-valued functions serve as the primary mathematical framework for modeling motion in physics and engineering. While scalar functions describe relationships between two variables (e.g., $y=f(x)$), vector-valued functions provide the capacity to describe dynamic systems where position, velocity, and acceleration are simultaneously tracked through time.

By parameterizing a curve, we convert a static geometric object into a temporal process. This is crucial for:
1. **Kinematics:** Describing the position of a particle at time $t$.
2. **Path Integration:** Calculating work done by a force field along a specific trajectory.
3. **Differential Geometry:** Analyzing the curvature, torsion, and intrinsic properties of curves in higher dimensions.
4. **Engineering Design:** Defining the geometry of complex mechanical parts, such as gears or cams, using parametric splines (Bézier curves).

## Fundamental Properties

### Limits and Continuity
A vector-valued function $\\mathbf{r}(t)$ is continuous at $t=a$ if $\\lim_{t \\to a} \\mathbf{r}(t) = \\mathbf{r}(a)$. This holds if and only if each component function $f(t)$, $g(t)$, and $h(t)$ is continuous at $a$. The limit of the vector function is simply the vector of the limits of its components.

### Differentiation
The derivative of a vector-valued function is defined as:
$$\\mathbf{r}'(t) = \\lim_{\\Delta t \\to 0} \\frac{\\mathbf{r}(t+\\Delta t) - \\mathbf{r}(t)}{\\Delta t} = \\langle f'(t), g'(t), h'(t) \\rangle$$
Geometrically, if $\\mathbf{r}(t)$ represents position, $\\mathbf{r}'(t)$ represents the velocity vector. The magnitude $\\|\\mathbf{r}'(t)\\|$ is the speed of the particle. The second derivative $\\mathbf{r}''(t)$ represents the acceleration vector.

### Integration
Indefinite and definite integrals are computed component-wise:
$$\\int \\mathbf{r}(t)dt = \\left\\langle \\int f(t)dt, \\int g(t)dt, \\int h(t)dt \\right\\rangle + \\mathbf{C}$$
where $\\mathbf{C}$ is a constant vector of integration.

### Derivatives of Products
Vector-valued functions follow product rule variants:
1. $\\frac{d}{dt} [u(t)\\mathbf{r}(t)] = u'(t)\\mathbf{r}(t) + u(t)\\mathbf{r}'(t)$
2. $\\frac{d}{dt} [\\mathbf{u}(t) \\cdot \\mathbf{v}(t)] = \\mathbf{u}'(t) \\cdot \\mathbf{v}(t) + \\mathbf{u}(t) \\cdot \\mathbf{v}'(t)$
3. $\\frac{d}{dt} [\\mathbf{u}(t) \\times \\mathbf{v}(t)] = \\mathbf{u}'(t) \\times \\mathbf{v}(t) + \\mathbf{u}(t) \\times \\mathbf{v}'(t)$

## Types & Variations

Space curves can be classified based on their geometric behavior and the nature of their component functions.

### Algebraic Curves
These involve polynomial components. For example, the twisted cubic $\\mathbf{r}(t) = \\langle t, t^2, t^3 \\rangle$ is a classic algebraic curve. Such curves are essential in computer-aided design (CAD) because they can be computed efficiently.

### Transcendental Curves
These involve trigonometric, exponential, or logarithmic functions. The circular helix defined by $\\mathbf{r}(t) = \\langle a\\cos(t), a\\sin(t), bt \\rangle$ is a primary example. The circular components create rotation, while the linear component creates vertical translation.

The following interactive graph demonstrates the components of a helix, where $a$ controls the radius of the circular motion and $b$ controls the vertical stretch or "pitch" of the helix:

\`\`\`interactivegraph
\\cos(ax)
\\sin(ax)
bx
params: a=1, b=0.5
range: a=0.5:5, b=0.1:2
\`\`\`

In this interactive setup, $a$ modulates the frequency of the oscillation in the $x$ and $y$ projections (the radius is fixed here as an amplitude), while $b$ represents the linear growth rate along the third dimension. By adjusting these, one can visualize how changing the "tightness" of the circular component versus the speed of the vertical displacement transforms the geometry of the curve.

### Planar Curves
A curve is planar if it lies entirely within a single plane. This occurs if there exists a constant vector $\\mathbf{n}$ such that $(\\mathbf{r}(t) - \\mathbf{r}_0) \\cdot \\mathbf{n} = 0$ for all $t$.

## How to Solve

Solving problems involving space curves typically follows a systematic analytical approach.

### 1. Determining the Domain
Given $\\mathbf{r}(t) = \\langle \\ln(t), \\sqrt{1-t}, \\frac{1}{t-2} \\rangle$, one must find the intersection of:
- $t > 0$ (for $\\ln(t)$)
- $t \\le 1$ (for $\\sqrt{1-t}$)
- $t \\neq 2$ (for $\\frac{1}{t-2}$)
Resulting in the domain $(0, 1]$.

### 2. Finding Tangent Vectors
To find the tangent vector at a point, differentiate each component with respect to $t$. If asked for the unit tangent vector $\\mathbf{T}(t)$, calculate:
$$\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\|\\mathbf{r}'(t)\\|}$$
The magnitude $\\|\\mathbf{r}'(t)\\|$ is calculated using the Pythagorean theorem in 3D: $\\sqrt{(f'(t))^2 + (g'(t))^2 + (h'(t))^2}$.

### 3. Calculating Arc Length
The arc length $s$ of a curve from $t=a$ to $t=b$ is the integral of the speed:
$$s = \\int_{a}^{b} \\sqrt{f'(t)^2 + g'(t)^2 + h'(t)^2} dt$$
This is often difficult to compute analytically, requiring numeric integration techniques such as Simpson's rule or Gaussian quadrature in practical engineering applications.

### 4. Curvature
Curvature $\\kappa$ measures how sharply a curve bends. It is defined as the rate of change of the unit tangent vector with respect to arc length:
$$\\kappa = \\left\\| \\frac{d\\mathbf{T}}{ds} \\right\\| = \\frac{\\|\\mathbf{r}'(t) \\times \\mathbf{r}''(t)\\|}{\\|\\mathbf{r}'(t)\\|^3}$$
This formula is preferred for calculations as it avoids the need to parameterize the curve by arc length $s$, which is often computationally prohibitive.

## Summary

Vector-valued functions provide the mathematical language necessary to describe trajectories in space. By parameterizing $x, y,$ and $z$ coordinates through a single variable $t$, we bridge the gap between static geometry and dynamic motion. The core toolkit for working with these functions—differentiation, integration, and the extraction of geometric quantities like curvature and arc length—allows for the precise analysis of motion.

Whether calculating the velocity of a particle, designing a cam profile, or analyzing the structural integrity of a twisted fiber, these functions remain the fundamental analytical building block. Mastery of this subject requires moving beyond simple scalar calculus into a realm where algebraic, trigonometric, and geometric properties converge to describe the paths taken through the physical world. Understanding the relationship between the parameter $t$ and the resulting vector output is key to transitioning from static algebraic manipulation to the dynamic modeling required in modern physical science and engineering.`;export{e as default};