var e=`# The Law of Cosines and Triangulation Applications

## Definition

The Law of Cosines, also known as the cosine rule, is a fundamental theorem in trigonometry that relates the lengths of the sides of a triangle to the cosine of one of its angles. It serves as a powerful extension of the Pythagorean theorem, which applies only to right-angled triangles. For an arbitrary triangle with sides of lengths $a$, $b$, and $c$, and with an angle $\\gamma$ opposite to side $c$, the Law of Cosines states:

$$c^2=a^2+b^2-2ab\\cos(\\gamma)$$

This relationship is universal, holding true for all Euclidean triangles, whether they are acute, obtuse, or right-angled. If $\\gamma=90^\\circ$, then $\\cos(\\gamma)=0$, and the formula simplifies to the Pythagorean identity $c^2=a^2+b^2$. Consequently, the Law of Cosines acts as a generalized distance formula in non-orthogonal coordinate spaces and serves as the mathematical bedrock for triangulation, the process of determining the location of a point by forming triangles to it from known points.

## Key Terminology

To navigate the application of the Law of Cosines, one must be familiar with the following terminology:

| Term | Definition |
| :--- | :--- |
| **Side-Angle-Side (SAS)** | A condition where two sides and the included angle are known, allowing for the calculation of the third side. |
| **Side-Side-Side (SSS)** | A condition where all three sides are known, allowing for the calculation of any interior angle. |
| **Included Angle** | The angle formed by the intersection of two specified sides of a triangle. |
| **Triangulation** | The geometric process of determining a location by measuring angles or side lengths from known base points. |
| **Oblique Triangle** | Any triangle that does not contain a right angle ($90^\\circ$). |
| **Reference Frame** | A coordinate system used to map the relative positions of triangulated points. |
| **Geodesy** | The science of accurately measuring and understanding Earth's geometric shape and orientation in space. |

## Purpose

The primary purpose of the Law of Cosines is to resolve triangles that do not possess a right angle. In practical engineering, surveying, and navigation, data rarely manifests in clean, right-angled geometries. When a surveyor identifies two known landmarks (the base points) and measures the distance and angular offset to a third, unknown point, the Law of Cosines provides the algebraic mechanism to compute the exact coordinate of that point.

Furthermore, the Law of Cosines is indispensable in physics for vector addition. When two forces act on an object at an arbitrary angle, the resultant force vector can be determined by treating the forces as sides of a triangle and solving for the third side. In computer graphics and spatial analysis, this law is frequently employed to calculate distances between points in 3D space and to determine the angle between normal vectors to assess surface lighting (diffuse reflection).

## Fundamental Properties

The Law of Cosines possesses several mathematical properties that make it robust for computational applications:

1. **Symmetry:** The formula is cyclic. Given sides $a, b, c$ and angles $\\alpha, \\beta, \\gamma$ opposite to them respectively, the law can be expressed as:
   $$a^2=b^2+c^2-2bc\\cos(\\alpha)$$
   $$b^2=a^2+c^2-2ac\\cos(\\beta)$$
   $$c^2=a^2+b^2-2ab\\cos(\\gamma)$$

2. **Duality with the Pythagorean Theorem:** As $\\gamma$ approaches $90^\\circ$, the term $-2ab\\cos(\\gamma)$ vanishes, demonstrating that the Law of Cosines is an asymptotic generalization of the Pythagorean theorem.

3. **Inversion for Angles:** The formula can be rearranged to solve for angles when all side lengths are known:
   $$\\cos(\\gamma)=\\frac{a^2+b^2-c^2}{2ab}$$
   This allows for the derivation of $\\gamma = \\arccos\\left(\\frac{a^2+b^2-c^2}{2ab}\\right)$.

4. **Sensitivity to Signs:** Because $\\cos(\\gamma)$ is positive for acute angles ($<90^\\circ$) and negative for obtuse angles ($>90^\\circ$), the sign of the calculated cosine automatically identifies the nature of the triangle's vertex. If $a^2+b^2-c^2 < 0$, then $c^2 > a^2+b^2$, confirming that $\\gamma$ is an obtuse angle.

## Types & Variations

While the basic form of the Law of Cosines is static, its application varies depending on the constraints of the system being modeled.

### The Law of Cosines in Spherical Geometry
On a sphere (such as the surface of the Earth), Euclidean geometry does not apply. The Spherical Law of Cosines relates the sides $a, b, c$ (measured as arc lengths or angular distances) and the angle $\\gamma$:
$$\\cos(c)=\\cos(a)\\cos(b)+\\sin(a)\\sin(b)\\cos(\\gamma)$$
This variation is critical for long-range navigation (great-circle distances), where the curvature of the Earth renders standard planar trigonometry inaccurate.

### Vector Form
In linear algebra, the Law of Cosines is equivalent to the properties of the dot product. For vectors $\\vec{u}$ and $\\vec{v}$:
$$\\|\\vec{u}-\\vec{v}\\|^2 = \\|\\vec{u}\\|^2 + \\|\\vec{v}\\|^2 - 2(\\vec{u} \\cdot \\vec{v})$$
Since $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(\\theta)$, this aligns perfectly with the standard Law of Cosines, confirming its utility in high-dimensional data processing.

The following interactive graph allows for the observation of how the third side of a triangle ($c$) changes as the included angle ($\\theta$) is adjusted, assuming sides $a$ and $b$ are fixed. 

\`\`\`interactivegraph
\\sqrt{a^2 + b^2 - 2*a*b*\\cos(x * 3.14159 / 180)}
params: a=5, b=5
range: a=1:10, b=1:10
\`\`\`
In this graph, the x-axis represents the angle $\\theta$ in degrees, and the function calculates the length of the third side $c$. Observe how the length $c$ increases as the angle approaches $180^\\circ$ and decreases toward $0^\\circ$.

## How to Solve

Solving a triangulation problem involves a systematic approach to breaking down complex spatial constraints into manageable triangles.

### Step 1: Identify Knowns and Unknowns
Determine whether the problem presents an SAS case (two sides and the included angle) or an SSS case (three sides). If dealing with navigation, identify the two known base stations and the observed angles to the target.

### Step 2: Formulate the Equation
Select the appropriate variation of the Law of Cosines based on the side or angle you intend to find. For instance, to find the unknown distance $d$ between two points given a base line of length $L$ and two measured segments $s_1$ and $s_2$, use:
$$d = \\sqrt{s_1^2 + s_2^2 - 2s_1s_2\\cos(\\theta)}$$

### Step 3: Calculation and Sensitivity Analysis
Perform the arithmetic. In real-world triangulation, consider the impact of measurement error. A small error in the angle measurement $\\Delta\\theta$ results in a positional error $\\Delta d$. This can be approximated using the derivative:
$$\\frac{\\partial d}{\\partial \\theta} = \\frac{s_1s_2\\sin(\\theta)}{d}$$
This sensitivity analysis is vital in professional surveying, as it determines the "Geometric Dilution of Precision" (GDOP).

### Step 4: Geometric Verification
Verify that the result obeys the Triangle Inequality Theorem, which states that the sum of any two sides must be strictly greater than the third side: $a+b > c$. If the Law of Cosines yields a result that violates this, the input parameters may be physically impossible due to sensor noise or configuration errors.

## Summary

The Law of Cosines is the essential mathematical bridge between simple Euclidean geometry and the complex reality of spatial navigation. By enabling the resolution of oblique triangles, it serves as the foundation for triangulation, a technique used across disciplines ranging from cartography and satellite positioning systems (GPS) to architectural modeling and mechanical linkage design.

Its mathematical elegance lies in its universality: it provides a continuous, derivable relationship between side lengths and interior angles, accommodating both acute and obtuse orientations with equal accuracy. By integrating the dot product into its structure, it transcends two-dimensional space, becoming a vital tool in high-dimensional vector calculus and computer graphics. 

For the technical practitioner, mastering the Law of Cosines requires more than rote memorization of the algebraic form; it necessitates an understanding of the geometric constraints—specifically the Triangle Inequality—and the sensitivity of the output to variations in input data. Whether determining the position of a celestial body or the internal stresses of a truss bridge, the Law of Cosines remains an indispensable instrument in the quantitative analysis of physical space.`;export{e as default};