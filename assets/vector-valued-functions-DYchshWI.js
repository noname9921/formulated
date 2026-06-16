var e=`## Definition

A vector-valued function is a mathematical function whose domain is a set of real numbers (scalars) and whose range is a set of vectors in either two-dimensional space ($ \\mathbb{R}^2 $) or three-dimensional space ($ \\mathbb{R}^3 $). More formally, a vector-valued function $ \\mathbf{r}(t) $ maps a real number $ t $ to a vector $ \\langle f(t), g(t), h(t) \\rangle $.

In the context of three-dimensional space, the function is defined as:
$$ \\mathbf{r}(t) = f(t)\\mathbf{i} + g(t)\\mathbf{j} + h(t)\\mathbf{k} = \\langle f(t), g(t), h(t) \\rangle $$
where $ f $, $ g $, and $ h $ are real-valued component functions of the parameter $ t $. The set of all points $ (f(t), g(t), h(t)) $ traced by the tip of the vector $ \\mathbf{r}(t) $ as $ t $ varies over an interval $ I $ constitutes a space curve. 

Unlike scalar functions, which map a variable to a single point on a number line, vector-valued functions provide a dynamic framework for describing motion, paths, and orientation in space. The parameter $ t $ is frequently interpreted as time, allowing $ \\mathbf{r}(t) $ to describe the position of a particle at any instant.

## Key Terminology

To analyze space curves effectively, one must understand several foundational terms:

*   **Parameterization:** The process of representing a curve using a variable $ t $, which acts as an independent coordinate, allowing the curve to be defined by a set of equations $ x=f(t), y=g(t), z=h(t) $.
*   **Domain:** The set of all values of $ t $ for which the component functions $ f(t), g(t), $ and $ h(t) $ are simultaneously defined.
*   **Vector Derivative:** The derivative of a vector-valued function, defined as $ \\mathbf{r}'(t) = \\lim_{\\Delta t \\to 0} \\frac{\\mathbf{r}(t+\\Delta t) - \\mathbf{r}(t)}{\\Delta t} $. This vector is tangent to the curve at the point $ \\mathbf{r}(t) $.
*   **Unit Tangent Vector:** The normalized version of the derivative vector, given by $ \\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{|\\mathbf{r}'(t)|} $.
*   **Arc Length:** The distance traveled along a curve from a starting point $ t=a $ to a point $ t=b $, calculated via $ s = \\int_{a}^{b} |\\mathbf{r}'(t)| dt $.
*   **Curvature:** A measure of how sharply a curve bends at a specific point, defined as $ \\kappa = \\frac{|\\mathbf{T}'(t)|}{|\\mathbf{r}'(t)|} $.
*   **Principal Normal Vector:** The vector $ \\mathbf{N}(t) = \\frac{\\mathbf{T}'(t)}{|\\mathbf{T}'(t)|} $, which points in the direction the curve is turning.
*   **Binormal Vector:** The vector $ \\mathbf{B}(t) = \\mathbf{T}(t) \\times \\mathbf{N}(t) $, which is orthogonal to both the tangent and normal vectors.

## Purpose

Vector-valued functions serve as the primary language for kinematics and geometry in three-dimensional space. Their primary purposes include:

1.  **Modeling Physical Motion:** They allow engineers and physicists to describe the trajectory of objects in motion. By taking derivatives with respect to time, one can determine the velocity vector $ \\mathbf{v}(t) = \\mathbf{r}'(t) $ and the acceleration vector $ \\mathbf{a}(t) = \\mathbf{r}''(t) $.
2.  **Geometry of Paths:** Space curves allow for the formal analysis of complex shapes, such as helices, spirals, and intersections of surfaces. These curves provide insights into structural integrity, fluid flow, and electromagnetic fields.
3.  **Path Integration:** Vector-valued functions are essential for evaluating line integrals, which are used to calculate work done by a force field along a specific path, or the flux of a field through a surface.
4.  **Computer-Aided Design (CAD):** Modern engineering relies on parameterization to define smooth curves and surfaces for complex manufactured components. Splines and Bezier curves are specific applications of vector-valued functions.

## Fundamental Properties

Vector-valued functions follow specific algebraic and calculus rules that derive from their component structure.

### Limits and Continuity
A function $ \\mathbf{r}(t) $ is continuous at $ t=a $ if $ \\lim_{t \\to a} \\mathbf{r}(t) = \\mathbf{r}(a) $. This condition holds if and only if each component function $ f(t), g(t), $ and $ h(t) $ is continuous at $ a $.

### Differentiation Rules
The derivative behaves according to linearity and the product rule:
*   $ \\frac{d}{dt} [ \\mathbf{u}(t) + \\mathbf{v}(t) ] = \\mathbf{u}'(t) + \\mathbf{v}'(t) $
*   $ \\frac{d}{dt} [ c \\cdot \\mathbf{r}(t) ] = c \\cdot \\mathbf{r}'(t) $
*   $ \\frac{d}{dt} [ \\phi(t) \\cdot \\mathbf{r}(t) ] = \\phi'(t)\\mathbf{r}(t) + \\phi(t)\\mathbf{r}'(t) $ (where $ \\phi $ is a scalar function)
*   $ \\frac{d}{dt} [ \\mathbf{u}(t) \\cdot \\mathbf{v}(t) ] = \\mathbf{u}'(t) \\cdot \\mathbf{v}(t) + \\mathbf{u}(t) \\cdot \\mathbf{v}'(t) $
*   $ \\frac{d}{dt} [ \\mathbf{u}(t) \\times \\mathbf{v}(t) ] = \\mathbf{u}'(t) \\times \\mathbf{v}(t) + \\mathbf{u}(t) \\times \\mathbf{v}'(t) $

### Integration
Integration of a vector function is performed component-wise:
$$ \\int \\mathbf{r}(t) dt = \\left\\langle \\int f(t) dt, \\int g(t) dt, \\int h(t) dt \\right\\rangle + \\mathbf{C} $$
where $ \\mathbf{C} $ is a constant vector of integration.

## Types & Variations

Space curves can be categorized based on their geometric properties and parameterization methods:

| Type | Description | Key Characteristic |
| :--- | :--- | :--- |
| Algebraic Curves | Defined by polynomials in $ x, y, z $. | Finite degree, often smooth. |
| Transcendental Curves | Involve trigonometric, exponential, or log terms. | Examples include helix $ \\langle \\cos t, \\sin t, t \\rangle $. |
| Plane Curves | Curves lying entirely within a single plane. | Torsion is zero at all points. |
| Space Curves | Curves that do not lie within a single plane. | Non-zero curvature and torsion. |
| Rectifiable Curves | Curves with finite arc length. | Integrable derivative. |

### The Frenet-Serret Frame
The Frenet-Serret frame is a trio of orthonormal vectors $ \\{ \\mathbf{T}, \\mathbf{N}, \\mathbf{B} \\} $ that provides a local coordinate system at each point on the curve. This frame evolves along the curve, describing how the curve twists in space.

| Vector | Role | Derivation |
| :--- | :--- | :--- |
| Tangent $ \\mathbf{T} $ | Instantaneous direction | $ \\frac{\\mathbf{r}'}{|\\mathbf{r}'|} $ |
| Normal $ \\mathbf{N} $ | Direction of bending | $ \\frac{\\mathbf{T}'}{|\\mathbf{T}'|} $ |
| Binormal $ \\mathbf{B} $ | Direction of twisting | $ \\mathbf{T} \\times \\mathbf{N} $ |

## How to Solve

Solving problems involving vector-valued functions generally follows a structured analytical workflow.

### 1. Determining Domain and Range
To find the domain of $ \\mathbf{r}(t) = \\langle \\ln(t), \\sqrt{1-t}, \\frac{1}{t} \\rangle $:
1. Identify constraints on each component: $ t > 0 $, $ t \\leq 1 $, and $ t \\neq 0 $.
2. Intersect the intervals: $ (0, 1] $.
3. The domain is $ t \\in (0, 1] $.

### 2. Finding Derivatives and Tangent Lines
To find the equation of the tangent line to the curve $ \\mathbf{r}(t) = \\langle t^2, \\sin t, e^t \\rangle $ at $ t=0 $:
1. Calculate the derivative vector: $ \\mathbf{r}'(t) = \\langle 2t, \\cos t, e^t \\rangle $.
2. Evaluate at $ t=0 $: $ \\mathbf{r}'(0) = \\langle 0, 1, 1 \\rangle $. This is the direction vector of the line.
3. Calculate the point $ \\mathbf{r}(0) = \\langle 0, 0, 1 \\rangle $.
4. Construct the parametric line equations: $ x=0, y=s, z=1+s $.

### 3. Calculating Arc Length
To calculate the length of the helix $ \\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle $ from $ t=0 $ to $ t=2\\pi $:
1. Find $ \\mathbf{r}'(t) = \\langle -\\sin t, \\cos t, 1 \\rangle $.
2. Compute the magnitude: $ |\\mathbf{r}'(t)| = \\sqrt{(-\\sin t)^2 + (\\cos t)^2 + 1^2} = \\sqrt{1+1} = \\sqrt{2} $.
3. Integrate: $ L = \\int_{0}^{2\\pi} \\sqrt{2} dt = 2\\pi\\sqrt{2} $.

### 4. Curvature Analysis
Curvature $ \\kappa $ is determined by:
$$ \\kappa(t) = \\frac{|\\mathbf{r}'(t) \\times \\mathbf{r}''(t)|}{|\\mathbf{r}'(t)|^3} $$
This formula is often more computationally efficient than using the unit tangent derivative for complex space curves.

## Summary

Vector-valued functions are indispensable tools in multi-variable calculus, bridging the gap between algebraic manipulation and geometric interpretation. By defining space curves as the range of these functions, we gain the ability to analyze motion, shape, and curvature in three-dimensional space with rigor. 

Central to the study of these functions is the understanding of the Frenet-Serret frame, which provides a local moving coordinate system at every point along a curve. The derivative, which yields velocity in physical contexts, serves as the fundamental link between the curve's parameterization and its geometric properties. From basic limit laws and differentiation rules to the integration of path-dependent quantities, the properties of vector-valued functions allow us to quantify phenomena that are otherwise difficult to express in scalar terms. 

Mastery of these functions requires a systematic approach to parameterization, vector calculus, and the interpretation of local invariants like curvature and torsion. Whether in the trajectory calculation of satellite mechanics, the structural analysis of architectural beams, or the design of computer-generated shapes, the mathematical framework of vector-valued functions remains a cornerstone of applied science and engineering. Through the careful evaluation of derivatives and integrals of components, one can decompose complex three-dimensional problems into manageable, solvable one-dimensional components, maintaining the full contextual integrity of the spatial path.`;export{e as default};