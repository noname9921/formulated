var e=`# Phase Plane Analysis and Autonomous Systems

## Definition

Phase plane analysis is a geometric method used to study the qualitative behavior of autonomous systems of ordinary differential equations. An autonomous system is a system of first-order differential equations where the right-hand sides do not depend explicitly on the independent variable, usually representing time $t$. A system of two autonomous differential equations is expressed as:

$$ \\frac{dx}{dt} = f(x, y) $$
$$ \\frac{dy}{dt} = g(x, y) $$

In this context, the vector field $\\mathbf{V}(x, y) = \\langle f(x, y), g(x, y) \\rangle$ defines the direction and magnitude of the system's evolution at any point $(x, y)$ in the phase plane. The phase plane is a coordinate system where the axes represent the state variables $x$ and $y$ of the system. A solution to the system is a trajectory or orbit $(x(t), y(t))$ that tracks the evolution of the state variables over time. By analyzing the entire collection of trajectories, one can discern the global dynamics of the system without necessarily finding a closed-form analytical solution.

## Key Terminology

To understand phase plane analysis, one must master the nomenclature describing the geometry and stability of trajectories:

1. **Equilibrium Point (Critical Point):** A point $(x^*, y^*)$ where $f(x^*, y^*) = 0$ and $g(x^*, y^*) = 0$. At these points, the system is stationary.
2. **Trajectory (Orbit):** The path traced in the phase plane by a solution $(x(t), y(t))$ as $t$ varies.
3. **Phase Portrait:** A graphical representation of the trajectories of a dynamical system in the phase plane, illustrating the various behaviors for different initial conditions.
4. **Stability:**
   - **Stable (Lyapunov):** Trajectories starting near an equilibrium point remain near it for all $t > 0$.
   - **Asymptotically Stable:** Trajectories starting near an equilibrium point converge to it as $t \\to \\infty$.
   - **Unstable:** Trajectories starting arbitrarily close to an equilibrium point eventually move away from it.
5. **Separatrix:** A trajectory that separates the phase plane into regions with qualitatively different long-term behavior.
6. **Nullclines:** Curves in the phase plane where either $dx/dt = 0$ (the $x$-nullcline) or $dy/dt = 0$ (the $y$-nullcline). These curves are crucial for identifying equilibrium points, which occur at their intersections.

## Purpose

The primary purpose of phase plane analysis is to derive the "long-term fate" of a dynamical system. In many real-world applications, such as biological population models, chemical kinetics, or electrical circuit theory, obtaining a symbolic solution is often impossible due to the nonlinearity of the governing equations. 

Phase plane analysis allows researchers to:
- Predict whether a system will settle into a steady state (equilibrium).
- Identify periodic behavior (limit cycles) where the system oscillates indefinitely.
- Determine the sensitivity of the system to initial conditions (chaos or divergence).
- Categorize the qualitative nature of equilibria, such as nodes, saddles, spirals, and centers.
- Understand how system parameters influence the transition between different regimes of behavior, known as bifurcations.

By mapping the vector field, we gain a global view of the system's topology, which is often more valuable for engineering and scientific design than the specific values of variables at a specific instant in time.

## Fundamental Properties

Autonomous systems possess unique mathematical properties that dictate how their trajectories behave. These properties stem directly from the fact that the vector field is time-invariant.

**Uniqueness of Solutions:** By the Picard-Lindelöf theorem, if $f$ and $g$ are continuously differentiable, there exists a unique trajectory through every point in the phase plane. Consequently, two distinct trajectories can never intersect. If they did, it would imply that a system at a specific state could evolve into two different future paths, violating determinism.

**Temporal Invariance:** Since the system is autonomous, the vector field at $(x, y)$ is the same at any time $t$. If $(x(t), y(t))$ is a solution, then $(x(t+c), y(t+c))$ is also a solution for any constant $c$. This means the system does not "forget" its history, and the structure of the phase portrait is fixed in space.

**Linearization near Equilibrium:** For a nonlinear system, the behavior near an equilibrium $(x^*, y^*)$ can often be approximated by the Jacobian matrix $J$:

$$ J = \\begin{pmatrix} \\frac{\\partial f}{\\partial x} & \\frac{\\partial f}{\\partial y} \\\\ \\frac{\\partial g}{\\partial x} & \\frac{\\partial g}{\\partial y} \\end{pmatrix}_{(x^*, y^*)} $$

The eigenvalues $\\lambda_1, \\lambda_2$ of $J$ determine the local geometry:
- If $\\text{Re}(\\lambda) < 0$ for all $\\lambda$, the equilibrium is a sink (attractor).
- If $\\text{Re}(\\lambda) > 0$ for all $\\lambda$, it is a source (repeller).
- If eigenvalues have opposite signs, it is a saddle point (unstable).
- If eigenvalues are purely imaginary, it is a center (neutrally stable).

## Types & Variations

Phase portraits are classified by the configuration of their trajectories. Below is a categorization of standard behaviors:

| Type | Eigenvalue Characteristics | Stability |
| :--- | :--- | :--- |
| Stable Node | Both $\\lambda < 0$, real | Asymptotically Stable |
| Unstable Node | Both $\\lambda > 0$, real | Unstable |
| Saddle Point | $\\lambda_1 < 0 < \\lambda_2$, real | Unstable |
| Stable Spiral | $\\text{Re}(\\lambda) < 0$, complex | Asymptotically Stable |
| Unstable Spiral | $\\text{Re}(\\lambda) > 0$, complex | Unstable |
| Center | $\\lambda = \\pm i\\beta$ | Neutrally Stable |

### Illustrative Example: The Harmonic Oscillator
A classic example is the undamped harmonic oscillator, described by $\\ddot{x} + \\omega^2 x = 0$. Converting to a system:
$$ \\dot{x} = y $$
$$ \\dot{y} = -\\omega^2 x $$

The eigenvalues of the Jacobian are $\\lambda = \\pm i\\omega$. This results in a center, where trajectories are concentric ellipses in the phase plane, representing constant exchange between potential and kinetic energy.

\`\`\`interactivegraph
\\omega^2 * x
params: \\omega=1
range: \\omega=0.5:2
\`\`\`
*The graph above plots the relationship defined by the linear system of a harmonic oscillator where the velocity $y$ is treated as a function of the displacement $x$. By adjusting the frequency parameter $\\omega$, one observes how the slope of the vector field changes, directly influencing the "tightness" of the elliptical orbits in the phase plane.*

## How to Solve

To perform a complete phase plane analysis, one should follow a structured analytical pipeline:

**1. Locate Equilibrium Points:**
Solve the system of algebraic equations $f(x, y) = 0$ and $g(x, y) = 0$ simultaneously. These points represent the coordinate-based origins of the vector field's behavior.

**2. Compute the Jacobian:**
Calculate the partial derivatives of $f$ and $g$ with respect to $x$ and $y$. Evaluate the Jacobian matrix $J$ at each equilibrium point found in step 1.

**3. Determine Local Stability:**
Solve the characteristic equation $\\det(J - \\lambda I) = 0$ for each equilibrium. Use the eigenvalues $\\lambda$ to classify the point as a node, saddle, spiral, or center.

**4. Sketch Nullclines:**
Draw the curves $f(x, y) = 0$ and $g(x, y) = 0$. These divide the phase plane into regions where the signs of $\\dot{x}$ and $\\dot{y}$ are constant. In each region, determine the direction of the flow (e.g., up and right, down and left).

**5. Analyze Global Behavior:**
Combine the local information (equilibria behavior) with the global information (nullclines and flow directions) to sketch the trajectories. Ensure that no trajectories cross and that they follow the general direction indicated by the vector field.

**6. Verification:**
Check for the existence of closed orbits or heteroclinic/homoclinic connections. If the system is Hamiltonian, a conserved quantity $H(x, y)$ can be used to plot contours directly, as trajectories must lie on the curves $H(x, y) = C$.

## Summary

Phase plane analysis provides the qualitative map required to understand autonomous dynamical systems. By moving from local linearization via the Jacobian matrix to the global mapping of nullclines and flows, an analyst can classify the stability of fixed points and identify complex phenomena such as limit cycles and separators. 

The methodology remains one of the most powerful tools in applied mathematics, bridging the gap between abstract differential equations and tangible physical intuition. Whether modeling the spread of a disease in a population, the competition between two species, or the voltage fluctuations in a nonlinear circuit, the phase plane remains the standard language for describing evolution, stability, and transition in continuous dynamical systems. By mastering this analysis, one gains the ability to predict the long-term qualitative outcome of a system without the limitations of needing exact analytical solutions.`;export{e as default};