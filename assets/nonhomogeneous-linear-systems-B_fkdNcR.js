var e=`# Nonhomogeneous Linear Systems

## Definition

A nonhomogeneous linear system is a collection of linear equations in the form $A\\mathbf{x} = \\mathbf{b}$, where $A$ is an $m \\times n$ matrix of coefficients, $\\mathbf{x}$ is an $n \\times 1$ column vector of unknowns, and $\\mathbf{b}$ is an $m \\times 1$ column vector known as the nonhomogeneous term or the forcing vector. The system is classified as "nonhomogeneous" if and only if $\\mathbf{b} \\neq \\mathbf{0}$. If $\\mathbf{b} = \\mathbf{0}$, the system is termed homogeneous.

In scalar notation, a nonhomogeneous linear system of $m$ equations with $n$ variables is represented as:
$$a_{11}x_1 + a_{12}x_2 + \\dots + a_{1n}x_n = b_1$$
$$a_{21}x_1 + a_{22}x_2 + \\dots + a_{2n}x_n = b_2$$
$$\\vdots$$
$$a_{m1}x_1 + a_{m2}x_2 + \\dots + a_{mn}x_n = b_m$$

The system is fundamentally defined by the presence of constant terms that do not multiply the variables. Unlike homogeneous systems, which always possess the trivial solution $\\mathbf{x} = \\mathbf{0}$, nonhomogeneous systems may have no solution (inconsistent) or infinitely many solutions, depending on the relationship between $\\mathbf{b}$ and the column space of $A$.

## Key Terminology

To navigate the analysis of these systems, one must master several foundational terms:

| Term | Definition |
| :--- | :--- |
| Augmented Matrix | The matrix $[A \\mid \\mathbf{b}]$ formed by appending $\\mathbf{b}$ as a final column to $A$. |
| Rank | The dimension of the column space of a matrix, denoted as $\\text{rank}(A)$. |
| Particular Solution | Any single vector $\\mathbf{x}_p$ that satisfies $A\\mathbf{x}_p = \\mathbf{b}$. |
| General Solution | The complete set of all solutions, usually expressed as $\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$. |
| Homogeneous Solution | The solution set $\\mathbf{x}_h$ to the associated equation $A\\mathbf{x} = \\mathbf{0}$. |
| Consistency | The property of having at least one solution, determined by the Rouché-Capelli theorem. |

The Rouché-Capelli theorem states that a system is consistent if and only if the rank of the coefficient matrix $A$ is equal to the rank of the augmented matrix $[A \\mid \\mathbf{b}]$. If $\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$, the system is inconsistent, meaning $\\mathbf{b}$ lies outside the column space of $A$.

## Purpose

Nonhomogeneous linear systems are the backbone of mathematical modeling in physics, engineering, and economics. Their primary purpose is to describe physical states under external influence. While a homogeneous system $A\\mathbf{x} = \\mathbf{0}$ represents an autonomous system or a state of equilibrium, the nonhomogeneous term $\\mathbf{b}$ represents an external input, such as:

1. **Applied Force:** In mechanical systems, $\\mathbf{b}$ represents external forces acting on a structure or mass.
2. **Voltage Sources:** In electrical circuits, $\\mathbf{b}$ represents independent voltage or current sources driving the system.
3. **Demand/Supply:** In economics, $\\mathbf{b}$ represents fixed external demands or constraints on a production system.

Understanding these systems allows us to calculate how a system deviates from its natural (homogeneous) behavior due to external pressure. For instance, in structural analysis, the homogeneous part of the system describes the natural modes of vibration, while the nonhomogeneous part describes the forced vibration caused by external loads.

## Fundamental Properties

The structure of the solution set for nonhomogeneous systems is governed by the Principle of Superposition and the structure of affine subspaces. The total solution is not a subspace but an affine translation of the null space of $A$.

### The Principle of Superposition
If $\\mathbf{x}_p$ is a particular solution to $A\\mathbf{x} = \\mathbf{b}$, and $\\mathbf{x}_h$ is any solution to the homogeneous equation $A\\mathbf{x} = \\mathbf{0}$, then the sum $\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$ is also a solution to the nonhomogeneous system. This is verified by:
$$A(\\mathbf{x}_p + \\mathbf{x}_h) = A\\mathbf{x}_p + A\\mathbf{x}_h = \\mathbf{b} + \\mathbf{0} = \\mathbf{b}$$

### Geometric Interpretation
In $\\mathbb{R}^3$, the solution to a homogeneous system $A\\mathbf{x} = \\mathbf{0}$ is typically a line or a plane passing through the origin. In a nonhomogeneous system $A\\mathbf{x} = \\mathbf{b}$, the solution set is the same line or plane shifted away from the origin by the vector $\\mathbf{x}_p$. This geometric shift illustrates why the solution set of a nonhomogeneous system is rarely a subspace (it does not contain the zero vector unless $\\mathbf{b}=\\mathbf{0}$).

## Types & Variations

Nonhomogeneous systems vary significantly based on their dimensionality and the nature of the coefficients.

1. **Square Systems ($n=n$):** If $A$ is invertible, the system has a unique solution $\\mathbf{x} = A^{-1}\\mathbf{b}$. If $A$ is singular, the system is either inconsistent or has infinitely many solutions.
2. **Overdetermined Systems ($m > n$):** Often encounter inconsistencies where $\\mathbf{b}$ cannot be expressed as a linear combination of the columns of $A$. In such cases, the method of Least Squares is employed to find an "approximate" solution.
3. **Underdetermined Systems ($n > m$):** These systems generally have infinitely many solutions, as there are more degrees of freedom than constraints.

### Sensitivity to Parameters
Nonhomogeneous systems often involve parameters in the matrix $A$ or vector $\\mathbf{b}$. The behavior of these systems under varying parameters can be analyzed using interactive tools. The following interactive graph shows how a 1D nonhomogeneous "system" (a scalar equation $ax=b$) changes as we manipulate the coefficient $a$ and the input $b$.

\`\`\`interactivegraph
(b/a)
params: a=1, b=2
range: a=-5:5, b=-5:5
\`\`\`

In this visualization, $b/a$ represents the solution $x$ for the equation $ax = b$. Observe how the solution approaches infinity as the coefficient $a$ approaches zero, mirroring the instability found in singular matrices.

## How to Solve

Solving a nonhomogeneous linear system typically follows a systematic three-stage process:

### 1. Gaussian Elimination
Transform the augmented matrix $[A \\mid \\mathbf{b}]$ into Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). This process reveals whether the system is consistent by comparing the ranks. If a row appears in the form $[0, 0, \\dots, 0 \\mid k]$ where $k \\neq 0$, the system is inconsistent.

### 2. Finding the Particular Solution ($\\mathbf{x}_p$)
Once the system is in RREF, identify a particular solution by setting all free variables to zero and solving for the pivot variables. For a system $A\\mathbf{x} = \\mathbf{b}$, if $x_3$ is a free variable, setting $x_3 = 0$ simplifies the remaining equations into a solvable system.

### 3. Finding the Homogeneous Solution ($\\mathbf{x}_h$)
Solve the homogeneous equation $A\\mathbf{x} = \\mathbf{0}$ using the same RREF matrix obtained in step 1. Replace $\\mathbf{b}$ with a column of zeros. The resulting vectors span the null space of $A$. The general solution is then written as:
$$\\mathbf{x} = \\mathbf{x}_p + c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\dots + c_k\\mathbf{v}_k$$
where $c_i$ are arbitrary scalars.

### Example Derivation
Consider the system:
$$x + y = 3$$
$$2x + 2y = 6$$

The augmented matrix is:
$$
\\begin{bmatrix}
1 & 1 & \\mid & 3 \\\\
2 & 2 & \\mid & 6
\\end{bmatrix}
$$
Performing $R_2 \\to R_2 - 2R_1$ yields:
$$
\\begin{bmatrix}
1 & 1 & \\mid & 3 \\\\
0 & 0 & \\mid & 0
\\end{bmatrix}
$$
Here, $\\text{rank}(A) = 1$ and $\\text{rank}([A \\mid \\mathbf{b}]) = 1$. The system is consistent. Setting $y = t$ (free variable), we find $x = 3 - t$. The general solution is:
$$
\\mathbf{x} = \\begin{bmatrix} 3 \\\\ 0 \\end{bmatrix} + t \\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix}
$$

## Summary

Nonhomogeneous linear systems represent the essential interplay between system constraints and external stimuli. Unlike homogeneous systems, which characterize the internal structure and null space of a linear operator, nonhomogeneous systems describe how that operator maps space onto a target vector $\\mathbf{b}$. By separating the solution into a particular part $\\mathbf{x}_p$ and a homogeneous part $\\mathbf{x}_h$, we gain clarity on the distinct roles of external forcing and internal system dynamics. Mastery of these systems—specifically through the lens of the Rouché-Capelli theorem and Gaussian elimination—is a prerequisite for advanced work in differential equations, control theory, and high-dimensional numerical analysis. Consistency remains the primary hurdle, turning what would otherwise be a simple inversion task into a study of projection and dimensionality.`;export{e as default};