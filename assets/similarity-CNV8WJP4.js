var e=`# Triangle Similarity and Proportionality

## Definition

Triangle similarity is a geometric relationship between two triangles wherein their corresponding angles are congruent and their corresponding sides are in a constant ratio, known as the scale factor. Two triangles, $\\triangle ABC$ and $\\triangle DEF$, are considered similar (denoted as $\\triangle ABC \\sim \\triangle DEF$) if and only if:

1. $\\angle A = \\angle D$, $\\angle B = \\angle E$, and $\\angle C = \\angle F$.
2. The ratio of their corresponding side lengths is equal: $\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k$.

In this context, $k$ represents the constant of proportionality or the scale factor. If $k=1$, the triangles are congruent. If $k \\neq 1$, the triangles are transformations of one another through dilation (scaling). Proportionality, the foundational mechanism of similarity, dictates that the ratio of segments created by transversals intersecting lines—or segments within triangles—remains invariant regardless of the absolute scale of the system.

## Key Terminology

To analyze triangle similarity effectively, one must master the following terminology:

| Term | Definition |
| :--- | :--- |
| **Correspondence** | The mapping of vertices, angles, or sides of one triangle to another. |
| **Scale Factor ($k$)** | The ratio of lengths of corresponding sides between two similar figures. |
| **Dilation** | A transformation that changes the size of a figure without altering its shape. |
| **Corresponding Parts** | Angles or sides that occupy the same relative position in similar triangles. |
| **Proportion** | An equation stating that two ratios are equal, such as $\\frac{a}{b} = \\frac{c}{d}$. |
| **Transversal** | A line that intersects two or more lines, creating proportional segments. |
| **Altitude** | A line segment through a vertex and perpendicular to the opposite side. |
| **Median** | A line segment joining a vertex to the midpoint of the opposite side. |

## Purpose

The study of triangle similarity and proportionality serves several critical roles in mathematics and applied sciences. Primarily, it provides a mechanism to calculate dimensions of inaccessible objects. If an observer can establish similarity between a small triangle (created by an instrument) and a large triangle (formed by the object and its shadow), the unknown height can be solved via simple algebraic proportion.

Furthermore, these concepts form the bedrock of trigonometry. The definition of sine, cosine, and tangent functions relies on the fact that for a given angle $\\theta$, the ratio of the sides of a right triangle remains constant regardless of the triangle's size. By establishing that triangles with the same angles have proportional sides, mathematicians can standardize calculations for any right triangle. In engineering and architecture, similarity principles are essential for scaled drafting, structural analysis, and understanding how stress distribution ratios remain consistent as structural components are resized.

## Fundamental Properties

The relationship of similarity possesses reflexive, symmetric, and transitive properties. These ensure that the concept is mathematically consistent:

1. **Reflexive Property:** Any triangle is similar to itself: $\\triangle ABC \\sim \\triangle ABC$ with $k=1$.
2. **Symmetric Property:** If $\\triangle ABC \\sim \\triangle DEF$, then $\\triangle DEF \\sim \\triangle ABC$ with scale factor $\\frac{1}{k}$.
3. **Transitive Property:** If $\\triangle ABC \\sim \\triangle DEF$ and $\\triangle DEF \\sim \\triangle GHI$, then $\\triangle ABC \\sim \\triangle GHI$.

Proportionality in triangles is governed by the **Triangle Proportionality Theorem** (also known as Thales's Theorem). If a line is drawn parallel to one side of a triangle intersecting the other two sides, then it divides the two sides proportionally. Mathematically, if in $\\triangle ABC$, a line $DE$ is drawn parallel to $BC$ such that $D$ lies on $AB$ and $E$ lies on $AC$, then:

$$ \\frac{AD}{DB} = \\frac{AE}{EC} $$

This implies that $\\triangle ADE \\sim \\triangle ABC$, as the shared angle $\\angle A$ and the corresponding angles $\\angle ADE = \\angle ABC$ and $\\angle AED = \\angle ACB$ satisfy the conditions for similarity.

## Types & Variations

Similarity is identified through specific criteria known as the postulates of similarity. These shortcuts allow for the determination of similarity without verifying all six elements (three angles and three sides) of the triangles.

### Angle-Angle (AA) Similarity
If two angles of one triangle are congruent to two angles of another triangle, the triangles are similar. This is the most common test because the sum of internal angles is always $180^\\circ$, ensuring the third angle must also be congruent.

### Side-Angle-Side (SAS) Similarity
If the lengths of two sides of one triangle are proportional to the lengths of two corresponding sides of another triangle, and the included angles are congruent, the triangles are similar. If we have $\\frac{AB}{DE} = \\frac{AC}{DF}$ and $\\angle A = \\angle D$, then $\\triangle ABC \\sim \\triangle DEF$.

### Side-Side-Side (SSS) Similarity
If the lengths of all three corresponding sides of two triangles are proportional, the triangles are similar. If $\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k$, then the triangles are similar.

The following interactive graph illustrates how altering the proportional relationship between sides $a$ and $b$ affects the resulting triangle structure, where the ratio $k$ serves as a parameter for scaling:

\`\`\`interactivegraph
k * x
params: k=1.5
range: k=0.5:3.0
\`\`\`

In the interactive graph above, the function $f(x) = kx$ represents the scaling factor of a side length. As the parameter $k$ is adjusted, the reader can observe the linear growth of the proportional side, demonstrating how a constant ratio preserves the "steepness" or geometry of the triangle's profile.

## How to Solve

Solving problems involving triangle similarity requires a systematic approach to identifying the relationships and establishing the proportionality equation.

### Step 1: Identify the Criterion
Analyze the given information. Do you have two angles? (Use AA). Do you have two sides and an angle? (Check SAS). Do you have three sides? (Check SSS). Often, shared angles (reflexive) or vertically opposite angles are keys to identifying congruency in AA cases.

### Step 2: Establish the Proportionality Ratio
Once similarity is confirmed, write the ratios of corresponding sides. Always map the vertices in order (e.g., if $\\triangle ABC \\sim \\triangle DEF$, then $AB$ corresponds to $DE$).

### Step 3: Set up the Equation
Create a proportion using the known and unknown values. For example, if we need to find length $x$:
$$ \\frac{AB}{DE} = \\frac{x}{EF} $$

### Step 4: Solve Algebraically
Use cross-multiplication to isolate the variable. If $\\frac{a}{b} = \\frac{c}{x}$, then $ax = bc$, which leads to $x = \\frac{bc}{a}$.

Consider the case of a "shadow problem." A post of height $H_1$ casts a shadow of length $S_1$. A nearby building of height $H_2$ casts a shadow of length $S_2$. Because the sun’s rays are parallel, the triangles formed by the objects and their shadows are similar. The proportionality is:
$$ \\frac{H_1}{S_1} = \\frac{H_2}{S_2} $$
Solving for $H_2$:
$$ H_2 = \\frac{H_1 \\cdot S_2}{S_1} $$

## Summary

Triangle similarity is a cornerstone of Euclidean geometry, defining the relationship between figures that share identical angular structures but differ in scale. By leveraging the AA, SAS, and SSS similarity criteria, one can perform complex spatial reasoning with relatively simple algebraic ratios. 

The Triangle Proportionality Theorem further extends this utility, allowing for the analysis of segments within triangles and parallel transversal systems. Whether calculating the height of a inaccessible structure, understanding the principles of optical perspective, or scaling engineering designs, the principles of proportionality ensure that the internal relationships of a triangle remain invariant under transformation. Mastering these concepts provides the essential tools to translate geometric properties into rigorous numerical solutions, bridging the gap between theoretical abstract shapes and practical, real-world measurement. Through these relationships, mathematics provides a universal language for describing size and shape across all fields of scientific inquiry.`;export{e as default};