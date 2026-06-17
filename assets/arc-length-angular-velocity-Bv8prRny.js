var e=`# Arc Length, Linear Speed, and Angular Velocity

The study of rotational motion serves as a cornerstone of classical mechanics, engineering, and astrophysics. By analyzing the relationship between circular paths and moving objects, we derive fundamental kinematic variables that govern everything from the rotation of celestial bodies to the precision movement of mechanical gears. This document explores the mathematical framework connecting arc length, linear speed, and angular velocity.

## Definition

Arc length ($s$) refers to the distance traveled along the curved path of an object moving along a circle of radius $r$. It is the measure of the "stretch" of a circular segment.

Angular velocity ($\\omega$) defines the rate at which an object rotates or revolves around a center point, measured in radians per unit of time. It describes how rapidly the central angle ($\\theta$) changes as the object traverses its path.

Linear speed ($v$) represents the distance covered per unit of time for an object moving along a path. In the context of circular motion, it is the magnitude of the velocity vector directed tangentially to the circle at any given point.

The foundational relationship linking these quantities is defined by the central angle $\\theta$ (measured in radians) subtended by the arc length $s$ in a circle of radius $r$:
$$s=r\\theta$$
Differentiating this relationship with respect to time ($t$) yields:
$$\\frac{ds}{dt}=r\\frac{d\\theta}{dt}$$
Given that $v=\\frac{ds}{dt}$ and $\\omega=\\frac{d\\theta}{dt}$, the fundamental bridge between linear and angular motion is:
$$v=r\\omega$$

## Key Terminology

| Term | Symbol | Units (SI) | Definition |
|:---|:---|:---|:---|
| Arc Length | $s$ | meters (m) | The distance along the arc of a circle. |
| Radius | $r$ | meters (m) | The distance from the center of rotation to the object. |
| Central Angle | $\\theta$ | radians (rad) | The angle subtended at the center by the arc length. |
| Angular Velocity | $\\omega$ | rad/s | The rate of change of the angular position. |
| Linear Speed | $v$ | m/s | The tangential speed of the object. |
| Period | $T$ | seconds (s) | Time taken for one complete revolution. |
| Frequency | $f$ | Hertz (Hz) | Number of revolutions per unit time ($f=1/T$). |

## Purpose

The primary purpose of quantifying arc length, linear speed, and angular velocity is to map localized, rotational motion to a global coordinate system. In mechanical engineering, these calculations are vital for gear trains, where the linear speed at the pitch diameter must remain consistent across interlocking gears, even if their radii differ. In civil engineering, road design relies on these relationships to calculate "banking" angles for curves to ensure vehicles can maintain a specific linear speed without slipping. Furthermore, in physics, these metrics allow us to analyze centripetal acceleration ($a_c=v^2/r = r\\omega^2$), which is essential for understanding orbits and structural integrity in high-speed rotating systems.

## Fundamental Properties

The relationship $v=r\\omega$ implies several critical physical properties regarding circular motion:

1. **Direct Proportionality:** For a rigid body rotating at a constant angular velocity, the linear speed is directly proportional to the radius. Points further from the axis of rotation must move faster to complete the same rotation as points closer to the center.
2. **Dimensionless Nature of Radians:** Because $\\theta = s/r$, the radian is defined as the ratio of two lengths. This makes $\\theta$ a dimensionless quantity, which is why $\\omega$ is expressed as $\\text{s}^{-1}$ in some contexts, though "radians per second" is maintained for clarity.
3. **Tangential Direction:** The linear velocity vector is always perpendicular to the radial vector. At any instant, the direction of linear motion is tangent to the circle, whereas the angular velocity vector points along the axis of rotation according to the right-hand rule.
4. **Time Invariance:** If $\\omega$ is constant, the object performs Uniform Circular Motion. If $\\omega$ changes, the object experiences angular acceleration ($\\alpha = d\\omega/dt$), introducing a tangential acceleration component $a_t = r\\alpha$.

## Types & Variations

### Uniform Circular Motion
In this state, $\\omega$ is constant. The arc length covered in time $t$ is $s = r\\omega t$. The linear speed remains constant, and the motion is periodic. The period is $T = 2\\pi / \\omega$.

### Non-Uniform Circular Motion
When the angular velocity varies over time, we must account for angular acceleration. The instantaneous angular velocity is the derivative of the angular position function $\\theta(t)$.
$$\\omega(t) = \\frac{d\\theta}{dt}$$
Similarly, the instantaneous linear speed is $v(t) = r \\cdot \\omega(t)$. If $\\omega(t)$ is defined by a polynomial, we can explore how changes in acceleration affect the arc length covered over a specific interval.

The interactive graph below demonstrates the relationship between radius and angular velocity on linear speed. You can adjust the radius $r$ and the angular frequency $a$ to observe how $v = r \\cdot \\omega$ scales.

\`\`\`interactivegraph
r * a * x
params: r=1, a=1
range: r=0.1:5, a=0:5
\`\`\`

The graph above models the linear speed $v(x) = (r \\cdot a) \\cdot x$ where $x$ represents time (or a dummy variable for scaling). Note that for a fixed $r$ and $a$, the linear speed increases linearly with the time parameter, effectively showing the distance covered if the angular velocity were proportional to time.

## How to Solve

To solve problems involving these variables, follow this systematic approach:

1. **Identify Given Values:** Note the radius ($r$), time ($t$), and either the rotation rate (e.g., RPM) or linear distance ($s$).
2. **Convert Units:** Ensure that rotational frequency is converted to radians per second. If given in Revolutions Per Minute (RPM), use $\\omega = \\text{RPM} \\times (2\\pi / 60)$.
3. **Establish the Primary Equation:** Choose the equation relevant to the unknown.
   - To find arc length: $s = r\\theta$
   - To find linear speed: $v = r\\omega$
   - To relate period to speed: $v = 2\\pi r / T$
4. **Verification via Calculus:** If $\\omega$ is not constant, integrate $\\omega(t)$ to find $\\theta(t)$ or $s(t)$.
   $$s(t) = r \\int_{0}^{t} \\omega(\\tau) d\\tau$$

### Worked Example:
Consider a grinding wheel with a radius of $0.25\\text{ m}$ spinning at $1200\\text{ RPM}$.
Step 1: Convert RPM to rad/s.
$$\\omega = 1200 \\times \\frac{2\\pi}{60} = 40\\pi \\approx 125.66 \\text{ rad/s}$$
Step 2: Calculate linear speed at the edge.
$$v = r\\omega = 0.25 \\times 125.66 = 31.415 \\text{ m/s}$$
Step 3: Calculate distance traveled by a point on the edge in $2\\text{ seconds}$.
$$s = v \\times t = 31.415 \\times 2 = 62.83 \\text{ meters}$$

## Summary

The mathematical trio of arc length, linear speed, and angular velocity forms a rigid framework for describing circular motion. The arc length $s$ provides the spatial extent of a rotation, while the angular velocity $\\omega$ provides the temporal rate of change of the orientation. Through the radius $r$, these rotational quantities are mapped directly to linear motion $v$. Mastery of these relationships requires careful unit management—specifically the conversion of revolutions to radians—and an understanding of whether the motion is uniform or accelerating. By applying these principles, one can accurately predict the kinematics of any rotating system, from the smallest gears in a wristwatch to the orbital mechanics of planetary systems. The elegance of $v=r\\omega$ lies in its simplicity and its universal application across all scales of physical reality.`;export{e as default};