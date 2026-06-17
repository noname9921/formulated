var e=`# Perturbation Theory of Eigenvalues

## Definition

Perturbation theory of eigenvalues is a mathematical framework used to determine how the eigenvalues and eigenvectors of a linear operator change when that operator is subjected to a small modification, or "perturbation." In many physical and engineering systems, the exact solutions to the eigenvalue problem $Ax=\\lambda x$ are difficult or impossible to obtain. However, if we can express the operator $A$ as $A=A_0+\\epsilon V$, where $A_0$ is an operator with known eigenvalues and eigenvectors, and $\\epsilon V$ represents a small change governed by a parameter $\\epsilon \\ll 1$, we can approximate the perturbed eigenvalues and eigenvectors as power series expansions in $\\epsilon$. This technique is indispensable in quantum mechanics, structural vibration analysis, and control theory.

## Key Terminology

To navigate the theory, one must master several foundational terms:

* **Unperturbed Operator ($A_0$):** The base operator whose spectral properties (eigenvalues $\\lambda_n^{(0)}$ and eigenvectors $|n^{(0)}\\rangle$) are already solved.
* **Perturbation ($V$):** The correction term applied to the unperturbed operator.
* **Small Parameter ($\\epsilon$):** A dimensionless scalar that quantifies the strength of the perturbation.
* **Non-degenerate Perturbation:** A scenario where the unperturbed eigenvalue $\\lambda_n^{(0)}$ is distinct, meaning no other eigenvector shares the same eigenvalue.
* **Degenerate Perturbation:** A scenario where multiple linearly independent eigenvectors correspond to the same unperturbed eigenvalue.
* **Rayleigh-Schrödinger Expansion:** The standard approach of expanding eigenvalues and eigenvectors in a Taylor series with respect to $\\epsilon$.
* **Secular Equation:** The determinantal equation solved in degenerate perturbation theory to determine the correct linear combinations of unperturbed states.

## Purpose

The primary purpose of perturbation theory is to provide accurate approximations to spectral problems that lack analytical closed-form solutions. By focusing on local changes around a known system, we avoid the computational complexity of solving high-dimensional secular equations directly.

In practice, the theory serves three specific goals:
1. **Computational Efficiency:** Reducing complex matrix diagonalizations to simple algebraic summations and inner products.
2. **Qualitative Insight:** Revealing how symmetries of the original system are broken or restored by the perturbation. For instance, in molecular physics, the "Stark effect" describes how an external electric field shifts atomic spectral lines—a phenomenon perfectly captured by eigenvalue perturbation.
3. **Robustness Analysis:** Determining the sensitivity of system eigenvalues to modeling errors. This is vital in aerospace engineering, where structural resonances (eigenvalues) must remain outside specific frequency bands despite slight manufacturing deviations.

## Fundamental Properties

The power of perturbation theory lies in the linearity of the underlying vector space and the stability of the eigenvalue problem. The fundamental property is the existence of an analytic mapping from the perturbation parameter $\\epsilon$ to the spectrum of the operator $A(\\epsilon)$.

Consider the perturbed eigenvalue problem:
$$(A_0+\\epsilon V)|\\psi_n\\rangle = \\lambda_n |\\psi_n\\rangle$$
We assume the series expansions:
$$\\lambda_n = \\lambda_n^{(0)} + \\epsilon \\lambda_n^{(1)} + \\epsilon^2 \\lambda_n^{(2)} + \\dots$$
$$|\\psi_n\\rangle = |n^{(0)}\\rangle + \\epsilon |n^{(1)}\\rangle + \\epsilon^2 |n^{(2)}\\rangle + \\dots$$

| Property | Description |
| :--- | :--- |
| **First-Order Shift** | The change in eigenvalue is the expectation value of the perturbation in the unperturbed state. |
| **Orthogonality** | The perturbed eigenvectors remain orthogonal to each other if $A$ remains Hermitian. |
| **Normalization** | The perturbed eigenvector maintains a unit norm, requiring constraints on higher-order terms. |
| **Convergence** | The series converges provided the perturbation is small relative to the gap between eigenvalues. |

The gap between eigenvalues, $\\Delta_{nm} = |\\lambda_n^{(0)} - \\lambda_m^{(0)}|$, is critical. If this gap is very small, the denominator in higher-order corrections becomes tiny, leading to the "small denominator problem," which indicates that the perturbation is likely causing the levels to "repel" or "cross."

## Types & Variations

Perturbation theory is categorized based on the nature of the spectrum of $A_0$:

### Non-degenerate Perturbation Theory
Used when all $\\lambda_n^{(0)}$ are unique. The first-order correction to the eigenvalue is simply $\\langle n^{(0)}|V|n^{(0)}\\rangle$. The first-order correction to the eigenvector involves a sum over all other states $|m^{(0)}\\rangle$ scaled by the inverse of the energy difference.

### Degenerate Perturbation Theory
When $\\lambda_n^{(0)} = \\lambda_m^{(0)}$, the standard series diverges. Here, we must diagonalize the perturbation matrix $V$ restricted to the degenerate subspace. This process "lifts the degeneracy," meaning the perturbation selects the specific linear combination of the degenerate states that are stable under the perturbation.

### Time-Dependent Perturbation
While strictly distinct from eigenvalue problems, time-dependent perturbations (e.g., oscillating fields) use these expansions to calculate transition probabilities between eigenstates, effectively treating the time-evolution operator as a perturbation of the identity.

Below is an interactive graph demonstrating how a perturbation parameter $\\epsilon$ shifts the roots of a characteristic polynomial. Observe how the roots move as $\\epsilon$ increases.

\`\`\`interactivegraph
x^2 - 1 + e*x
params: e=0
range: e=-1:1
\`\`\`

In this visualization, the function represents a simplified spectral characteristic equation. As you adjust $e$ (the perturbation), the roots (eigenvalues) shift. Note that for small $e$, the movement is linear, consistent with first-order theory.

## How to Solve

To solve an eigenvalue perturbation problem, follow this structured analytical procedure:

**1. Establish the Unperturbed Basis**
Solve $A_0|n^{(0)}\\rangle = \\lambda_n^{(0)}|n^{(0)}\\rangle$. Ensure that all vectors are orthonormal: $\\langle n^{(0)}|m^{(0)}\\rangle = \\delta_{nm}$.

**2. Formulate the First-Order Correction**
Substitute the series expansions into the eigenvalue equation and group terms by orders of $\\epsilon$.
For order $\\epsilon^1$:
$$A_0|n^{(1)}\\rangle + V|n^{(0)}\\rangle = \\lambda_n^{(0)}|n^{(1)}\\rangle + \\lambda_n^{(1)}|n^{(0)}\\rangle$$
Projecting with $\\langle n^{(0)}|$ yields the first-order energy shift:
$$\\lambda_n^{(1)} = \\langle n^{(0)}|V|n^{(0)}\\rangle$$

**3. Address Higher Orders**
For non-degenerate cases, the first-order eigenvector correction is calculated as:
$$|n^{(1)}\\rangle = \\sum_{m \\neq n} \\frac{\\langle m^{(0)}|V|n^{(0)}\\rangle}{\\lambda_n^{(0)} - \\lambda_m^{(0)}} |m^{(0)}\\rangle$$
The second-order energy shift is then:
$$\\lambda_n^{(2)} = \\sum_{m \\neq n} \\frac{|\\langle m^{(0)}|V|n^{(0)}\\rangle|^2}{\\lambda_n^{(0)} - \\lambda_m^{(0)}}$$

**4. Handle Degeneracies**
If $\\lambda_n^{(0)} = \\lambda_m^{(0)}$, define the subspace $S$ spanned by these vectors. Construct the matrix $V_{ij} = \\langle i^{(0)}|V|j^{(0)}\\rangle$ for all $i, j \\in S$. Diagonalize this sub-matrix; the resulting eigenvalues are the first-order corrections.

## Summary

Perturbation theory of eigenvalues is a cornerstone of mathematical physics and linear algebra. It transforms intractable global problems into a sequence of local calculations, provided the perturbation is sufficiently small. By rigorously defining the unperturbed state and systematically accounting for spectral shifts through Rayleigh-Schrödinger expansions, one can predict complex system behaviors with high precision. While non-degenerate cases yield straightforward corrections, degenerate cases require the diagonalizing of sub-spaces to resolve conflicts. As demonstrated, the fundamental dependency on the spectral gap $(\\lambda_n^{(0)} - \\lambda_m^{(0)})$ dictates the validity and convergence of the approximation, making this theory a powerful tool for analyzing structural stability, quantum transitions, and sensitivity in high-dimensional linear systems.`;export{e as default};