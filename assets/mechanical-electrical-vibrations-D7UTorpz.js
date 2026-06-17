var e=`# Mechanical and Electrical Vibrations (Damped/Undamped)

## Definition

Vibrations in mechanical and electrical systems refer to the periodic back-and-forth motion or oscillation of a physical or electrical quantity about an equilibrium state. In mechanical systems, this is typically represented by the displacement of a mass, while in electrical systems, it is characterized by the flow of current or the oscillation of voltage in a circuit.

Mathematically, these systems are described by linear second-order ordinary differential equations with constant coefficients. A mechanical system consisting of a mass $m$, a spring with constant $k$, and a damper with coefficient $c$ is governed by Newton's Second Law. An electrical system consisting of an inductor $L$, a resistor $R$, and a capacitor $C$ is governed by Kirchhoff's Voltage Law. The striking structural similarity between these two domains allows for a unified analytical approach, where mass $m$ corresponds to inductance $L$, the damping coefficient $c$ corresponds to resistance $R$, and the spring stiffness $k$ corresponds to the reciprocal of capacitance $1/C$.

## Key Terminology

To understand the dynamics of vibrations, one must be familiar with the following fundamental terms:

| Term | Mechanical Analog | Electrical Analog |
|---|---|---|
| Inertial Element | Mass ($m$) | Inductance ($L$) |
| Restoring Element | Spring ($k$) | Reciprocal Capacitance ($1/C$) |
| Dissipative Element | Damper ($c$) | Resistance ($R$) |
| State Variable | Displacement ($x$) | Charge ($q$) |
| Driving Force | Applied Force ($F(t)$) | Electromotive Force ($E(t)$) |
| Natural Frequency | $\\omega_0 = \\sqrt{k/m}$ | $\\omega_0 = 1/\\sqrt{LC}$ |
| Damping Ratio | $\\zeta = c / (2\\sqrt{mk})$ | $\\zeta = R / (2\\sqrt{L/C})$ |

The "Natural Frequency" is the frequency at which the system oscillates in the absence of any damping or driving force. The "Damping Ratio" is a dimensionless measure that describes how oscillations in a system decay after a disturbance.

## Purpose

The study of mechanical and electrical vibrations is essential for engineering design and safety. In mechanical engineering, controlling vibration is crucial for preventing structural failure in buildings, bridges, and aerospace components, where resonance can lead to catastrophic collapse. Conversely, in electrical engineering, the principles of resonance are utilized to design filters, signal processors, and tuning circuits for radio communications.

By modeling these systems, engineers can predict the time-dependent behavior of complex machines or circuits. They can determine if a system will oscillate indefinitely (undamped), return to equilibrium after a disturbance (damped), or potentially vibrate with increasing amplitude if subjected to a periodic driving force (resonance).

## Fundamental Properties

All vibration models rely on the principle of energy conservation and dissipation. In an undamped system, energy oscillates between kinetic and potential forms (mechanical) or between magnetic and electric fields (electrical). In a damped system, energy is continuously converted into heat due to resistance or friction.

The governing equation for a forced damped system is given by the following second-order ODE:
$$m \\frac{d^2x}{dt^2} + c \\frac{dx}{dt} + kx = F(t)$$
For an electrical $RLC$ series circuit:
$$L \\frac{d^2q}{dt^2} + R \\frac{dq}{dt} + \\frac{1}{C}q = E(t)$$

The behavior of these systems is determined by the characteristic equation associated with the homogeneous version of these ODEs: $ms^2 + cs + k = 0$. The roots of this equation dictate the regime of motion:
1. **Underdamped ($c^2 < 4mk$):** The system oscillates with an exponentially decaying amplitude.
2. **Critically Damped ($c^2 = 4mk$):** The system returns to equilibrium as quickly as possible without oscillation.
3. **Overdamped ($c^2 > 4mk$):** The system returns to equilibrium slowly without oscillation.

## Types & Variations

Vibrations are categorized based on the presence of damping and external forces.

### Undamped Free Vibration
Occurs when $c=0$ and $F(t)=0$. The solution is purely sinusoidal, $x(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$, resulting in perpetual motion.

### Damped Free Vibration
Occurs when $c>0$ and $F(t)=0$. The damping term causes the oscillations to decay over time, eventually settling at the equilibrium position $x=0$.

### Forced Vibration
Occurs when $F(t) \\neq 0$. If $F(t)$ is periodic, such as $F(t) = F_0 \\cos(\\omega t)$, the system experiences a steady-state response at the same frequency as the driving force. Resonance occurs when the driving frequency $\\omega$ is close to the natural frequency $\\omega_0$, leading to a massive increase in oscillation amplitude.

The following interactive graph allows the visualization of the damped oscillation of the displacement function $x(t) = e^{-\\zeta \\omega_0 t} \\cos(\\omega_d t)$, where $\\omega_d = \\omega_0 \\sqrt{1-\\zeta^2}$. This represents the displacement decay over time.

\`\`\`interactivegraph
exp(-z * w * x) * cos(w * sqrt(1 - z^2) * x)
params: z=0.1, w=5
range: z=0:1, w=1:10
\`\`\`

In the interactive graph above, the parameter $z$ represents the damping ratio ($\\zeta$). Notice that as $z$ approaches 0, the graph exhibits sustained, undamped oscillations. As $z$ increases toward 1, the frequency of oscillation decreases, and the decay becomes more rapid.

## How to Solve

Solving these differential equations typically involves a systematic four-step procedure.

### Step 1: Formulate the ODE
Identify the physical parameters ($m, c, k$ or $L, R, 1/C$) and write the second-order linear differential equation. Assign appropriate initial conditions, such as initial displacement $x(0)$ and initial velocity $x'(0)$.

### Step 2: Find the Homogeneous Solution
Solve the characteristic equation:
$$ms^2 + cs + k = 0$$
Using the quadratic formula, find the roots $s_{1,2} = \\frac{-c \\pm \\sqrt{c^2 - 4mk}}{2m}$. 
- If the discriminant is negative, the solution involves complex exponentials (oscillatory).
- If the discriminant is zero, the solution involves $e^{st}$ and $te^{st}$.
- If the discriminant is positive, the solution involves two distinct real exponentials.

### Step 3: Find the Particular Solution
If a driving force $F(t)$ exists, use the method of undetermined coefficients. Assume a solution form similar to $F(t)$ (e.g., if $F(t) = F_0 \\cos(\\omega t)$, assume $x_p(t) = A \\cos(\\omega t) + B \\sin(\\omega t)$) and substitute into the original ODE to solve for the constants $A$ and $B$.

### Step 4: Apply Initial Conditions
The general solution is $x(t) = x_h(t) + x_p(t)$. Use the initial conditions to determine the constants of integration $C_1$ and $C_2$ in the homogeneous part of the equation.

As an example of an undamped free vibration with $m=1, k=4, c=0$, the governing equation is $x'' + 4x = 0$. The roots are $s = \\pm 2i$, yielding the solution $x(t) = A\\cos(2t) + B\\sin(2t)$. The graph below shows the result of this undamped motion with initial conditions $x(0)=1$ and $x'(0)=0$.

\`\`\`graph
cos(2 * x)
\`\`\`

## Summary

Mechanical and electrical vibrations constitute a foundational topic in physics and engineering. By treating mechanical systems and electrical circuits as mathematically isomorphic entities, we gain the ability to analyze complex phenomena using a unified framework. 

Undamped systems represent idealized scenarios where energy is perfectly conserved, oscillating indefinitely. Damped systems, representing real-world conditions, account for energy dissipation, leading to the eventual cessation of motion. The inclusion of an external driving force introduces the critical concept of resonance, a phenomenon that can be leveraged for signal amplification or avoided to prevent structural fatigue. Understanding the relationship between the damping ratio $\\zeta$ and the natural frequency $\\omega_0$ allows for the precise control of system behavior, ensuring stability in mechanical structures and signal integrity in electronic systems. Through the use of second-order linear differential equations, we can model, predict, and ultimately optimize the performance of any oscillating system encountered in engineering practice.`;export{e as default};