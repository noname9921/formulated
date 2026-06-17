var e=`# Euler's Formula and Complex Exponential Forms

Euler’s formula stands as a cornerstone of modern mathematics, bridging the gap between trigonometry and complex analysis. It establishes a profound relationship between the trigonometric functions and the complex exponential function, providing a unified framework for understanding oscillation, rotation, and periodic phenomena.

## Definition

Euler’s formula states that for any real number $x$, the complex exponential function can be expressed in terms of trigonometric functions as:

$$e^{ix}=\\cos(x)+i\\sin(x)$$

where $e$ is the base of the natural logarithm (approximately $2.71828$), $i$ is the imaginary unit satisfying $i^2=-1$, and $x$ is an angle measured in radians. This formula represents a mapping from the real line (the input $x$) to the complex plane (the output $e^{ix}$). When $x$ is interpreted as an angle, $e^{ix}$ traces a unit circle in the complex plane, known as the unit circle $S^1$.

## Key Terminology

To understand this identity, we define the primary components involved:

| Term | Definition |
|---|---|
| Complex Plane | A two-dimensional geometric representation of complex numbers with a real axis and an imaginary axis. |
| Imaginary Unit | The value $i$, defined as $\\sqrt{-1}$, which allows for the extension of the real number system to the complex field. |
| Euler's Identity | The specific case where $x=\\pi$, resulting in $e^{i\\pi}+1=0$, linking five fundamental mathematical constants. |
| Complex Exponential | A function of the form $f(z)=e^z$, extended from real variables to complex variables using power series. |
| Polar Form | The expression of a complex number $z=a+bi$ as $z=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}$. |
| Modulus | The magnitude of a complex number, denoted $|z|=\\sqrt{a^2+b^2}$, representing the distance from the origin. |
| Argument | The angle $\\theta$ a complex number makes with the positive real axis in the complex plane. |

## Purpose

The primary utility of Euler’s formula is to simplify the manipulation of periodic functions. In engineering, physics, and signal processing, calculations involving trigonometric functions (such as adding phase-shifted sine waves) are algebraically cumbersome. By converting these into complex exponential form, the laws of exponents $e^a \\cdot e^b = e^{a+b}$ can be applied, effectively turning multiplication into addition of exponents.

This formula is indispensable for:
1. **Solving Differential Equations:** Converting linear constant-coefficient differential equations into algebraic equations.
2. **Signal Analysis:** Representing signals in the frequency domain through Fourier transforms.
3. **Control Theory:** Analyzing the stability and frequency response of complex systems.
4. **Quantum Mechanics:** Describing the phase and amplitude of wave functions.

## Fundamental Properties

The power of Euler's formula originates from the Taylor series expansion of the functions involved. For any real $x$, the Maclaurin series are:

$$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$$
$$\\cos(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots$$
$$\\sin(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots$$

By substituting $ix$ into the series for $e^x$, we obtain:

$$e^{ix} = 1 + (ix) + \\frac{(ix)^2}{2!} + \\frac{(ix)^3}{3!} + \\frac{(ix)^4}{4!} + \\dots$$

Since $i^2=-1, i^3=-i, i^4=1$, the terms group into real and imaginary parts that exactly match the series for $\\cos(x)$ and $i\\sin(x)$.

\`\`\`interactivegraph
\\cos(ax) + i * \\sin(ax)
params: a=1
range: a=0:5
\`\`\`

The interactive graph above illustrates the complex output $e^{iax}$ as a function of $x$. Note that while the graph plots the result in a projection, the parameter $a$ controls the frequency of oscillation, demonstrating how Euler's formula creates rotating vectors in the complex plane.

## Types & Variations

There are several vital variations and extensions derived from Euler's formula:

### Trigonometric Identities
By adding and subtracting $e^{ix}=\\cos(x)+i\\sin(x)$ and $e^{-ix}=\\cos(x)-i\\sin(x)$, we derive:

$$\\cos(x) = \\frac{e^{ix}+e^{-ix}}{2}$$
$$\\sin(x) = \\frac{e^{ix}-e^{-ix}}{2i}$$

### De Moivre's Theorem
This theorem states that for any integer $n$:

$$(\\cos(x)+i\\sin(x))^n = \\cos(nx)+i\\sin(nx)$$

This is a direct consequence of the exponential property $(e^{ix})^n = e^{i(nx)}$. It provides a powerful method for computing powers and roots of complex numbers.

### Generalized Complex Exponentiation
For any complex base $z=re^{i\\theta}$, raising it to a complex power $w=a+bi$:

$$z^w = (re^{i\\theta})^{a+bi} = r^{a+bi} e^{i\\theta(a+bi)}$$

This expansion allows for the definition of logarithms and powers of complex numbers, which are multi-valued in nature.

## How to Solve

Problems involving Euler's formula generally fall into three categories: conversion, simplification, and solving equations.

### Example 1: Converting to Exponential Form
To convert $z=1+i$ to polar form:
1. Find the modulus: $r = |z| = \\sqrt{1^2+1^2} = \\sqrt{2}$.
2. Find the argument: $\\theta = \\arctan(\\frac{1}{1}) = \\frac{\\pi}{4}$.
3. Express as: $1+i = \\sqrt{2}e^{i\\pi/4}$.

### Example 2: Simplifying Expressions
Consider the product of two complex numbers $z_1 = r_1 e^{i\\theta_1}$ and $z_2 = r_2 e^{i\\theta_2}$.
Multiplying them: $z_1 z_2 = r_1 r_2 e^{i(\\theta_1+\\theta_2)}$.
This proves that multiplying complex numbers corresponds to multiplying their magnitudes and adding their arguments.

### Example 3: Solving Differential Equations
Consider the equation $y'' + y = 0$. Using the characteristic equation $r^2+1=0$, we get $r = \\pm i$.
The general solution is $y(x) = c_1 e^{ix} + c_2 e^{-ix}$.
Applying Euler's formula, this becomes $y(x) = A\\cos(x) + B\\sin(x)$.

## Summary

Euler's formula is the bridge between the algebraic world of exponentials and the geometric world of circles and waves. By transforming $\\sin(x)$ and $\\cos(x)$ into components of $e^{ix}$, the complexity of trigonometric manipulation is replaced by the elegant simplicity of exponent laws. 

The fundamental takeaway is that complex exponentials represent rotation and scaling. A complex number $z$ multiplied by $e^{i\\theta}$ is simply rotated by an angle $\\theta$ in the complex plane without changing its magnitude. This perspective is vital in fields ranging from electrical engineering, where AC circuits are solved using phasors, to physics, where wave mechanics rely entirely on the exponential representation of periodic states. Mastery of this formula provides the necessary mathematical machinery to handle the dynamics of nearly every oscillating system in the natural world.`;export{e as default};