var e=`# Triangle Similarity and Proportionality

## Definition

Triangle similarity is a foundational geometric concept describing two triangles that possess the same shape but not necessarily the same size. Formally, two triangles are similar if their corresponding angles are congruent and their corresponding sides are in proportion. If $\\triangle ABC \\sim \\triangle DEF$, it implies that $\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, and $\\angle C \\cong \\angle F$, while the side lengths satisfy the constant ratio defined by the scale factor $k$:
$$
\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k
$$
Proportionality in this context refers to the constant relationship between the lengths of segments created by transversals intersecting the sides of a triangle. The most prominent example is the Basic Proportionality Theorem (Thales's Theorem), which states that if a line is drawn parallel to one side of a triangle intersecting the other two sides, then it divides the two sides in the same ratio.

## Key Terminology

To navigate the study of similar triangles and proportional segments, the following terms are essential:

| Term | Definition |
| :--- | :--- |
| **Correspondence** | The mapping of vertices, angles, or sides from one triangle to another. |
| **Scale Factor** | The ratio $k$ of lengths of corresponding sides of two similar figures. |
| **Dilation** | A transformation that changes the size of a figure by a scale factor $k$ relative to a center. |
| **Transversal** | A line that intersects two or more lines in a plane. |
| **Congruence** | A special case of similarity where the scale factor $k=1$. |
| **Intercept** | The segment formed on a side of a triangle by a transversal. |
| **Altitude** | A line segment through a vertex and perpendicular to the opposite side. |

## Purpose

The study of triangle similarity and proportionality serves as the bridge between simple Euclidean geometry and advanced trigonometry and analytical geometry. Its primary purposes include:

1. **Measurement of Inaccessible Distances:** By setting up similar triangles, surveyors and engineers can calculate heights or widths (such as the height of a mountain or the width of a river) that cannot be measured directly.
2. **Scaling and Modeling:** Architects and designers use similarity principles to create scaled models of large structures. Proportionality ensures that the structural integrity and aesthetic proportions are maintained despite size reductions.
3. **Foundation for Trigonometry:** Similarity is the bedrock of trigonometry. The definitions of sine, cosine, and tangent are based on the fact that for any given angle, the ratios of sides in a right triangle are constant, regardless of the size of the triangle.
4. **Logical Deduction:** Mastery of these concepts enhances deductive reasoning by requiring the identification of invariant properties under geometric transformations.

## Fundamental Properties

The geometry of similar triangles is governed by three primary criteria, which serve as the sufficient conditions to prove that two triangles are similar:

### 1. Angle-Angle (AA) Similarity
If two angles of one triangle are congruent to two angles of another triangle, then the third angles must also be congruent because the sum of internal angles in a triangle is always $180^\\circ$. Therefore, the triangles are similar. This is the most efficient test for similarity.

### 2. Side-Angle-Side (SAS) Similarity
If one angle of one triangle is congruent to an angle of another triangle, and the two sides including these angles are proportional, then the triangles are similar. If $\\angle A = \\angle D$ and $\\frac{AB}{DE} = \\frac{AC}{DF}$, then $\\triangle ABC \\sim \\triangle DEF$.

### 3. Side-Side-Side (SSS) Similarity
If all three pairs of corresponding sides of two triangles are proportional, then the triangles are similar. This establishes that the "shape" is entirely dictated by the ratios of the side lengths.

### Proportionality Theorems
Beyond the triangles themselves, the relationship between segments is defined by:
* **The Basic Proportionality Theorem (BPT):** Given $\\triangle ABC$ and a line $DE$ parallel to $BC$ such that $D$ is on $AB$ and $E$ is on $AC$, then $\\frac{AD}{DB} = \\frac{AE}{EC}$.
* **The Converse of BPT:** If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.
* **The Angle Bisector Theorem:** An angle bisector of a triangle divides the opposite side into segments that are proportional to the other two sides of the triangle.

## Types & Variations

Similarity can be analyzed through various lenses, including coordinate geometry and physical transformations. When we place a triangle on a Cartesian plane, similarity can be viewed as a dilation followed by an isometry (rotation, reflection, or translation).

Consider the effect of scaling a triangle defined by base functions. If we observe a linear segment representing the side of a triangle $f(x) = mx$, changing the slope or the bounds creates proportional relationships. While the following interactive graph represents functions rather than triangles, it illustrates how parameters modify a linear structure, simulating how a scale factor $k$ would alter the "steepness" or "length" of a side in a coordinate system.

\`\`\`interactivegraph
k*x
params: k=1
range: k=0.5:2
\`\`\`

In the interactive graph above, the parameter $k$ acts as a scale factor. As $k$ increases, the line $f(x) = kx$ becomes steeper, representing a proportional change in the vertical component of a vector, which is analogous to how sides grow proportionally in similar triangles.

## How to Solve

Solving problems involving similarity and proportionality requires a systematic approach to identifying ratios and setting up algebraic equations.

### Step-by-Step Derivation Method
1. **Identify Correspondence:** List the vertices in the order of their correspondence. For example, if $\\triangle ABC \\sim \\triangle PQR$, write down the ratios: $\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR} = k$.
2. **Select the Theorem:** Determine which criterion (AA, SAS, or SSS) is easiest to satisfy based on the given data.
3. **Set Up the Ratio Equation:** Create an equation using the known values and one unknown variable.
4. **Algebraic Manipulation:** Solve the resulting linear equation. For example, if $\\frac{3}{x} = \\frac{5}{10}$, then $5x = 30$, leading to $x = 6$.
5. **Validation:** Check if the resulting lengths satisfy the Triangle Inequality Theorem, which states that the sum of any two sides of a triangle must be greater than the third side.

### Example Analytical Problem
Consider a triangle $\\triangle ABC$ where side $AB = 10$ and $AC = 12$. A line $DE$ is drawn parallel to $BC$ such that $AD = 4$. We wish to find $DB$. 
By the Basic Proportionality Theorem, $\\frac{AD}{DB} = \\frac{AE}{EC}$. However, we know that $\\triangle ADE \\sim \\triangle ABC$ by AA similarity (since $\\angle ADE = \\angle ABC$ and $\\angle AED = \\angle ACB$). 
Thus, $\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$. 
Substituting $AD=4$ and $AB=10$, the ratio of similarity is $k = \\frac{4}{10} = 0.4$. 
This implies that every segment in $\\triangle ADE$ is $0.4$ times the corresponding segment in $\\triangle ABC$. If we needed to find the length of the segment $DE$ given $BC=15$, we would calculate $DE = 0.4 \\times 15 = 6$.

## Summary

Triangle similarity and proportionality provide the mathematical framework for understanding geometric scale and ratio. The core of these concepts lies in the invariant nature of angles and the consistent scaling of sides. By mastering the AA, SAS, and SSS similarity criteria, as well as the Basic Proportionality Theorem and its variations, one gains the ability to solve complex spatial problems. Whether calculating the height of a building through shadow lengths or understanding the fundamental ratios that define trigonometry, these principles remain essential to the study of geometry and its practical applications in engineering, architecture, and physics. The consistency of these ratios, represented by the scale factor $k$, ensures that regardless of size, the fundamental relationship between parts of a triangle remains constant.`;export{e as default};