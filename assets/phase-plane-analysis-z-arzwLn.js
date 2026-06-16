var e=`# Phase Plane Analysis and Autonomous Systems

## Definition

Phase plane analysis is a geometric technique used to study the qualitative behavior of autonomous systems of ordinary differential equations (ODEs). An autonomous system is defined as a set of equations where the rate of change of the state variables does not explicitly depend on time. In a two-dimensional system, this is represented as:

$$\\frac{dx}{dt} = f(x, y)$$
$$\\frac{dy}{dt} = g(x, y)$$

Here, the variables $x$ and $y$ represent the state of the system at any given time $t$. Because $f$ and $g$ are functions only of $x$ and $y$, the vector field—which dictates the direction and speed of the system's evolution—is fixed in space and time. A phase plane is a Cartesian coordinate system where the horizontal axis represents $x$ and the vertical axis represents $y$. Each point $(x, y)$ in this plane represents a unique state of the system. A solution to the system starting from an initial condition $(x_0, y_0)$ traces a trajectory (or orbit) through this plane, providing a visual representation of the system's long-term evolution without requiring an explicit solution for $x(t)$ or $y(t)$.

## Key Terminology

To analyze these systems effectively, one must master several foundational terms:

| Term | Definition |
| :--- | :--- |
| Equilibrium Point | A point $(x^*, y^*)$ where $f(x^*, y^*) = 0$ and $g(x^*, y^*) = 0$. |
| Trajectory | The path traced by a solution $(x(t), y(t))$ in the phase plane. |
| Vector Field | A map assigning a vector $(f(x, y), g(x, y))$ to every point $(x, y)$. |
| Stability | A measure of whether nearby trajectories stay near an equilibrium point. |
| Nullcline | Curves where $f(x, y) = 0$ (x-nullclines) or $g(x, y) = 0$ (y-nullclines). |
| Jacobian Matrix | The matrix of partial derivatives $J = \\begin{pmatrix} f_x & f_y \\\\ g_x & g_y \\end{pmatrix}$. |
| Separatrix | A trajectory that separates different flow regimes in the phase plane. |

## Purpose

The primary purpose of phase plane analysis is to understand the global and local behavior of non-linear dynamical systems that are often impossible to solve analytically. By converting differential equations into a geometric problem, researchers can answer critical questions: Will the system settle into a steady state? Does it exhibit periodic, oscillatory behavior? Is it sensitive to initial conditions? 

This technique is indispensable in fields like population dynamics (predator-prey models), chemical kinetics, electrical engineering (nonlinear circuits), and mechanics. Rather than calculating the exact position of a pendulum at time $t=100$, phase plane analysis allows us to conclude that the pendulum will eventually come to rest at the bottom, regardless of its starting displacement.

## Fundamental Properties

Autonomous systems possess several mathematical properties that govern the structure of their phase portraits:

1. **Uniqueness:** Through any point $(x_0, y_0)$ in the phase plane, there exists exactly one trajectory. This implies that trajectories cannot cross or intersect, as such an intersection would violate the existence and uniqueness theorem for ODEs.
2. **Time Invariance:** Because the system is autonomous, shifting time by a constant $\\Delta t$ does not change the shape of the trajectory. If a solution $x(t)$ exists, then $x(t + \\Delta t)$ is also a valid solution trajectory.
3. **Equilibrium Behavior:** An equilibrium point is a trajectory that consists of a single point. If a system starts at an equilibrium, it remains there for all $t$.
4. **Limit Cycles:** An autonomous system can exhibit isolated closed orbits known as limit cycles. These represent self-sustained oscillations where the system returns to its original state after a fixed period $T$.
5. **Linearization:** Near an equilibrium point, the behavior of a nonlinear system is locally approximated by its linear counterpart, calculated using the Jacobian matrix evaluated at that point. If the eigenvalues of the Jacobian are $\\lambda_1, \\lambda_2$, their signs and imaginary components dictate the local topology (e.g., node, saddle, spiral, or center).

## Types & Variations

The topology of a phase portrait is categorized by the nature of the equilibrium points. Consider the linear system $\\mathbf{\\dot{x}} = A\\mathbf{x}$. The behavior depends on the eigenvalues of matrix $A$.

- **Saddle Point:** Real eigenvalues of opposite signs. Trajectories approach the equilibrium along one direction and diverge along another. These are inherently unstable.
- **Node:** Real eigenvalues of the same sign. If both are negative, it is a stable sink (attractor). If both are positive, it is an unstable source (repeller).
- **Spiral (Focus):** Complex conjugate eigenvalues with non-zero real parts. The trajectories rotate around the equilibrium while either spiraling inward (stable) or outward (unstable).
- **Center:** Purely imaginary eigenvalues. Trajectories form closed loops around the equilibrium. These are neutrally stable.

The following interactive graph allows for the observation of how parametric changes in a linear system can influence trajectories. Imagine a simplified system where $dx/dt = ax$ and $dy/dt = by$.

\`\`\`interactivegraph
\\sqrt{x^2+y^2}
params: a=0.5, b=0.2
range: a=-2:2, b=-2:2
\`\`\`

In this visualization, $a$ and $b$ represent the growth rates along the axes. When $a$ and $b$ are negative, the origin acts as a sink; when positive, as a source. If the signs differ, the origin acts as a saddle.

## How to Solve

Analyzing an autonomous system involves a systematic multi-step workflow:

**1. Locate Equilibrium Points:**
Set $f(x, y) = 0$ and $g(x, y) = 0$ simultaneously. Solve this algebraic system to find all points $(x^*, y^*)$ where the system is stationary.

**2. Linearize via the Jacobian:**
At each equilibrium point, calculate the Jacobian matrix:
$$J(x^*, y^*) = \\begin{pmatrix} \\frac{\\partial f}{\\partial x} & \\frac{\\partial f}{\\partial y} \\\\ \\frac{\\partial g}{\\partial x} & \\frac{\\partial g}{\\partial y} \\end{pmatrix}_{(x^*, y^*)}$$
Compute the eigenvalues $\\lambda$ by solving $\\det(J - \\lambda I) = 0$.

**3. Classify Stability:**
- If $\\text{Re}(\\lambda) < 0$ for all eigenvalues, the point is stable.
- If $\\text{Re}(\\lambda) > 0$ for at least one eigenvalue, the point is unstable.
- If $\\text{Re}(\\lambda) = 0$ (for centers), the linear approximation is inconclusive, and higher-order nonlinear terms must be analyzed (e.g., via Lyapunov functions).

**4. Sketch Nullclines:**
Plot the curves $f(x, y) = 0$ and $g(x, y) = 0$. These lines divide the phase plane into regions where the signs of $\\dot{x}$ and $\\dot{y}$ are constant. For example, if $f(x, y) > 0$, the flow is directed toward the right.

**5. Assemble the Portrait:**
Combine the information: place the equilibrium points, draw the nullclines, determine the direction of flow in the regions between nullclines, and sketch the trajectories consistent with the local linear behavior near equilibria.

Consider the simple harmonic oscillator $\\ddot{x} + \\omega^2 x = 0$. Setting $y = \\dot{x}$, we get:
$$\\dot{x} = y$$
$$\\dot{y} = -\\omega^2 x$$

The nullclines are the axes $x=0$ and $y=0$. The equilibrium is at $(0, 0)$. The following graph represents the trajectory of this system for different values of $\\omega$:

\`\`\`graph
\\sqrt{1-x^2}
-\\sqrt{1-x^2}
\`\`\`

The graph shows the elliptical trajectories in the phase plane $(x, y)$, where $x$ is displacement and $y$ is velocity, demonstrating the conservation of energy in the system.

## Summary

Phase plane analysis transforms the study of complex dynamical systems into an intuitive geometric exercise. By identifying equilibrium points and analyzing the Jacobian, we can categorize the local stability of a system. By plotting nullclines and examining vector fields, we capture the global behavior, including the presence of cycles, basins of attraction, and divergent paths. While limited in higher dimensions—where Poincaré-Bendixson and other advanced tools become necessary—the phase plane remains the cornerstone of qualitative analysis for autonomous systems. Mastery of this technique allows the practitioner to predict long-term behavior without the need for high-fidelity numerical integration, providing a deep, structural understanding of the underlying physics or biological processes governing the system.`;export{e as default};