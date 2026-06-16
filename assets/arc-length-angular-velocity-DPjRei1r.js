var e=`# Arc Length, Linear Speed, and Angular Velocity

The study of rotational motion serves as a bridge between elementary geometry and advanced classical mechanics. By analyzing how points move along a circular path, we can derive the fundamental relationships that govern everything from the rotation of planetary bodies to the mechanics of high-speed industrial machinery. Central to these dynamics are the interconnected quantities of arc length, linear velocity, and angular velocity.

## Definition

Arc length, denoted as $s$, is the distance traversed along a curved path, specifically a circular arc. Given a circle of radius $r$ and a central angle $\\theta$ (measured in radians), the arc length is defined as the product of the radius and the angle subtended at the center.

Linear speed, $v$, represents the magnitude of the velocity vector of an object moving along a curved path. It is defined as the rate of change of the arc length with respect to time: $v=\\frac{ds}{dt}$. In the context of uniform circular motion, this is expressed as $v=\\frac{s}{t}$.

Angular velocity, $\\omega$ (the lowercase Greek letter omega), describes the rate at which an object rotates or revolves around a center point. It is defined as the time rate of change of the angular displacement $\\theta$, expressed as $\\omega=\\frac{d\\theta}{dt}$. In uniform circular motion, this is defined as $\\omega=\\frac{\\theta}{t}$.

These three variables are mathematically linked through the radius $r$. The fundamental relationship is derived from the geometric definition of an angle in radians, leading to the primary identity: $s=r\\theta$. By differentiating both sides with respect to time $t$, we obtain $v=r\\omega$.

## Key Terminology

To navigate the physics of circular motion, one must be familiar with the following precise definitions:

| Term | Symbol | SI Unit | Definition |
| :--- | :--- | :--- | :--- |
| Arc Length | $s$ | Meters (m) | The linear distance along a circular arc. |
| Radius | $r$ | Meters (m) | The distance from the center to the edge. |
| Angular Displacement | $\\theta$ | Radians (rad) | The angle through which an object rotates. |
| Linear Speed | $v$ | Meters per second (m/s) | Speed along the tangential path. |
| Angular Velocity | $\\omega$ | Radians per second (rad/s) | The rate of rotation. |
| Period | $T$ | Seconds (s) | The time taken for one full revolution. |
| Frequency | $f$ | Hertz (Hz) | The number of revolutions per unit time. |

The transition between degrees and radians is vital. Since a full circle represents $360^\\circ$ and $2\\pi$ radians, the conversion factor is $\\pi/180$. Failure to work in radians will result in significant errors when applying the $v=r\\omega$ relationship, as this formula is specifically derived under the assumption that $\\theta$ is expressed in radians.

## Purpose

The primary utility of these concepts lies in their ability to describe motion in systems that are constrained to circular or curved paths. In mechanical engineering, calculating linear speed from angular velocity is essential for designing gears, conveyor belts, and transmission systems. If an engine's crankshaft rotates at a specific angular velocity, the linear velocity of the attached belt depends directly on the radius of the pulley.

In celestial mechanics, these principles allow us to determine the orbital speed of planets. If the angular velocity of a planet's orbit is known, its linear velocity can be calculated to determine its kinetic energy and gravitational stability. Furthermore, these variables are the foundation for understanding centripetal acceleration, which is critical for safety design in automotive engineering—specifically regarding how vehicles handle curved road segments.

## Fundamental Properties

The relationships between arc length, linear speed, and angular velocity rely on the linearity of the radius. Because $r$ is constant for any specific point on a rotating rigid body, the linear speed $v$ is directly proportional to both the angular velocity $\\omega$ and the distance from the axis of rotation.

A critical property to observe is that all points on a rotating rigid disk share the same angular velocity $\\omega$. However, points located at different radii $r$ possess different linear speeds. As one moves further from the axis of rotation, the linear speed must increase to cover a larger arc length in the same amount of time. This is why a point on the rim of a rotating vinyl record has a higher linear speed than a point near the center, despite both completing a full rotation in the same duration.

Consider the interactive graph below, which demonstrates how varying the angular frequency $\\omega$ of a rotating point affects the position $x = \\cos(\\omega t)$ over time.

\`\`\`interactivegraph
\\cos(w * x)
params: w=1
range: w=0.5:5
\`\`\`

The graph above visualizes the periodic nature of angular motion projected onto a linear axis. By adjusting the parameter $w$ (representing angular velocity $\\omega$), the observer can see how the frequency of the oscillation changes, directly corresponding to how rapidly the object traverses its circular path.

## Types & Variations

There are two primary modes of analyzing these motions: uniform and non-uniform.

1. **Uniform Circular Motion:** This occurs when the angular velocity $\\omega$ is constant. In this state, the linear speed $v$ is also constant. The relationships $s=r\\theta$ and $v=r\\omega$ remain invariant over time.
2. **Non-Uniform Circular Motion:** If the angular velocity changes over time (angular acceleration $\\alpha = \\frac{d\\omega}{dt} \\neq 0$), the linear speed also changes. This necessitates the introduction of tangential acceleration, $a_t = r\\alpha$.

Additionally, one must differentiate between scalar and vector interpretations. While we often treat these as scalars for simple magnitude calculations, they are fundamentally vectors. The angular velocity vector $\\vec{\\omega}$ points along the axis of rotation according to the right-hand rule, and the linear velocity vector $\\vec{v}$ is always tangent to the arc length $s$.

## How to Solve

Solving problems involving these variables requires a systematic approach, often following these four steps:

**Step 1: Identify Given Information.**
List the knowns: radius $r$, time $t$, angular displacement $\\theta$, or period $T$. Ensure all units are in the SI system. Convert angles to radians if they are provided in degrees.

**Step 2: Establish the Relationship.**
If you have the period $T$, calculate the angular velocity using $\\omega = \\frac{2\\pi}{T}$. If you have the total revolutions, calculate $\\theta = 2\\pi n$.

**Step 3: Apply the Core Formulas.**
Use $v = r\\omega$ to find linear speed. If the problem asks for the distance covered, calculate $s = r\\theta$. If the system involves non-uniform motion, utilize calculus to integrate angular acceleration to find $\\omega(t)$.

**Step 4: Verify Dimensional Consistency.**
Check that the final units match the requested physical quantity. For instance, ensure your final linear speed is in meters per second (m/s).

Example: A wheel with a radius of $0.5$ m rotates at a rate of $10$ revolutions per second. 
1. Convert revolutions to angular velocity: $\\omega = 10 \\text{ rev/s} \\times 2\\pi \\text{ rad/rev} = 20\\pi \\text{ rad/s}$.
2. Calculate linear speed of a point on the rim: $v = r\\omega = 0.5 \\times 20\\pi = 10\\pi \\approx 31.42 \\text{ m/s}$.

The graph below plots the relationship between radius and linear speed for a fixed angular velocity $\\omega = 2$. It demonstrates the linear growth of speed as distance from the center increases.

\`\`\`graph
2 * x
\`\`\`

The graph above plots the linear function $f(x) = 2x$, which represents the linear speed $v$ as a function of the radius $x$ for a fixed angular velocity of $2$ rad/s. As $x$ increases, the linear speed increases proportionally.

## Summary

The synthesis of arc length, linear speed, and angular velocity provides a robust framework for interpreting circular and rotational motion. The arc length $s=r\\theta$ captures the geometric displacement; the angular velocity $\\omega=\\frac{\\theta}{t}$ captures the temporal nature of rotation; and the linear speed $v=r\\omega$ bridges the gap between rotation and linear displacement.

By mastering these relationships, one can transition from analyzing static geometric figures to modeling dynamic systems. Whether calculating the velocity of a particle in a cyclotron or determining the tangential speed of a turbine blade, these variables remain the fundamental constants of rotational analysis. The key takeaway is the realization that while angular properties are intrinsic to the rotation itself, linear properties are extrinsic, depending entirely on the distance from the point of rotation. Maintaining consistent units—specifically the radian—is the most crucial technical requirement when executing these calculations.`;export{e as default};