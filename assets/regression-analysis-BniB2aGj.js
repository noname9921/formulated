var e=`# Simple Linear Regression and Least Squares Estimation

## Definition

Simple Linear Regression (SLR) is a fundamental statistical method used to model the relationship between two continuous variables: an independent variable $x$ (often called the predictor, explanatory variable, or feature) and a dependent variable $y$ (often called the response or outcome). The relationship is assumed to be linear, meaning it can be represented by the equation of a straight line.

The mathematical model for SLR is expressed as:
$$y_i = \\beta_0 + \\beta_1 x_i + \\epsilon_i$$
In this equation, $\\beta_0$ represents the intercept, which is the value of $y$ when $x=0$. The parameter $\\beta_1$ represents the slope, indicating the change in $y$ for a unit change in $x$. Finally, $\\epsilon_i$ represents the error term or residual, which accounts for the variability in $y$ that cannot be explained by the linear relationship with $x$. The goal of Least Squares Estimation (LSE) is to find the optimal values for $\\beta_0$ and $\\beta_1$ that minimize the sum of the squares of the vertical deviations between the observed data points and the regression line.

## Key Terminology

To understand SLR, one must be familiar with several core concepts that define the estimation process:

| Term | Definition |
|---|---|
| Dependent Variable | The variable being predicted or modeled ($y$). |
| Independent Variable | The variable used to predict the outcome ($x$). |
| Intercept ($\\beta_0$) | The point where the regression line crosses the y-axis. |
| Slope ($\\beta_1$) | The steepness and direction of the regression line. |
| Residual ($\\epsilon$) | The difference between the observed $y$ and predicted $\\hat{y}$. |
| Sum of Squared Errors (SSE) | The sum of the squares of the vertical distances from points to the line. |
| Least Squares Estimator | The specific $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$ that minimize the SSE. |

The residuals are defined as $e_i = y_i - \\hat{y}_i$, where $\\hat{y}_i = \\hat{\\beta}_0 + \\hat{\\beta}_1 x_i$. The LSE approach minimizes $S = \\sum_{i=1}^n (y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 x_i)^2$.

## Purpose

The primary purpose of Simple Linear Regression is to provide a quantitative framework for understanding the nature of the association between two variables. Specifically, it serves three major objectives:

1. **Prediction:** Once the parameters $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$ are estimated, the model can be used to predict the expected value of $y$ for a given value of $x$ that was not in the original dataset.
2. **Inference:** By evaluating the statistical significance of $\\beta_1$, researchers can determine whether there is a non-zero linear relationship between $x$ and $y$. This involves hypothesis testing, typically setting $H_0: \\beta_1 = 0$.
3. **Quantification:** SLR quantifies the magnitude of impact. For instance, in economics, it might quantify how a one-dollar increase in advertising expenditure relates to an increase in unit sales.

Unlike correlation, which merely measures the strength of a linear association, regression provides a specific functional form that allows for extrapolation and causal hypothesis generation under controlled experimental conditions.

## Fundamental Properties

The Least Squares Estimation method possesses several statistical properties that make it highly desirable for data modeling. According to the Gauss-Markov theorem, if the errors $\\epsilon_i$ are uncorrelated and have constant variance, the Least Squares Estimator is the Best Linear Unbiased Estimator (BLUE).

1. **Unbiasedness:** The expected value of the estimators matches the true population parameters: $E[\\hat{\\beta}_0] = \\beta_0$ and $E[\\hat{\\beta}_1] = \\beta_1$.
2. **Efficiency:** Among all linear unbiased estimators, the LSE has the minimum variance. This means the estimates are as precise as mathematically possible given the data.
3. **Consistency:** As the sample size $n$ approaches infinity, the estimators converge in probability to the true population parameters.
4. **Linearity:** The estimators are linear functions of the response variable $y_i$, simplifying the analytical derivation of their sampling distribution.

The interactive graph below demonstrates how changing the slope and intercept affects the fit of the regression line relative to a hypothetical distribution.

\`\`\`interactivegraph
\\beta_1 * x + \\beta_0
params: \\beta_1=1, \\beta_0=0
range: \\beta_1=-2:2, \\beta_0=-5:5
\`\`\`

The user can observe how $\\beta_1$ rotates the line around the intercept and how $\\beta_0$ shifts the line vertically along the coordinate plane.

## Types & Variations

While SLR is the simplest form of regression, it serves as the foundation for more complex modeling techniques:

- **Multiple Linear Regression:** Extends SLR by including multiple independent variables ($x_1, x_2, ..., x_k$) to account for more complex relationships.
- **Polynomial Regression:** Maintains the linear form in terms of parameters but includes powers of the independent variable (e.g., $y = \\beta_0 + \\beta_1 x + \\beta_2 x^2 + \\epsilon$), allowing the model to capture curvilinear patterns.
- **Non-Linear Regression:** When the relationship between $x$ and $y$ is inherently non-linear and cannot be transformed into a linear form (e.g., exponential growth models $y = \\alpha e^{\\beta x}$).
- **Weighted Least Squares:** Used when the assumption of constant variance (homoscedasticity) is violated, assigning different weights to observations based on their variance.

The following static graph illustrates a linear function $f(x) = 0.5x + 1$ alongside a quadratic function $g(x) = 0.1x^2 + 0.5x + 1$, highlighting how regression types diverge based on complexity.

\`\`\`graph
0.5*x + 1
0.1*x^2 + 0.5*x + 1
\`\`\`

## How to Solve

To find the values of $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$ that minimize $S = \\sum_{i=1}^n (y_i - \\beta_0 - \\beta_1 x_i)^2$, we employ partial differentiation with respect to each parameter and set the results to zero.

Step 1: Partial derivative with respect to $\\beta_0$:
$$\\frac{\\partial S}{\\partial \\beta_0} = -2 \\sum_{i=1}^n (y_i - \\beta_0 - \\beta_1 x_i) = 0$$
Dividing by $-2$ and solving for $\\beta_0$:
$$\\sum y_i - n\\hat{\\beta}_0 - \\hat{\\beta}_1 \\sum x_i = 0 \\implies \\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$$

Step 2: Partial derivative with respect to $\\beta_1$:
$$\\frac{\\partial S}{\\partial \\beta_1} = -2 \\sum_{i=1}^n x_i (y_i - \\beta_0 - \\beta_1 x_i) = 0$$
Substituting $\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$ into the equation and solving for $\\hat{\\beta}_1$:
$$\\sum x_i(y_i - (\\bar{y} - \\hat{\\beta}_1 \\bar{x}) - \\hat{\\beta}_1 x_i) = 0$$
$$\\sum x_i(y_i - \\bar{y}) = \\hat{\\beta}_1 \\sum x_i(x_i - \\bar{x})$$
$$\\hat{\\beta}_1 = \\frac{\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_{i=1}^n (x_i - \\bar{x})^2}$$

These closed-form solutions allow for the rapid computation of the regression line. The resulting model provides the line of best fit that characterizes the average trend of the data.

## Summary

Simple Linear Regression and Least Squares Estimation represent the bedrock of statistical modeling and predictive analytics. By defining a clear mathematical relationship between an independent variable and a dependent outcome, practitioners can distill complex datasets into actionable insights.

The LSE method is mathematically elegant, providing a unique solution that minimizes the sum of squared vertical deviations, ensuring that the resulting line represents the global optimum for the given sample. Its properties of unbiasedness and efficiency confirm its reliability as an estimator. While SLR is limited to linear relationships and two variables, its extension into multiple, polynomial, and generalized regression models provides a robust toolkit for modern data science. Mastering these fundamentals is the prerequisite for understanding advanced machine learning concepts, such as gradient descent, regularization, and generalized linear models. Whether used for economic forecasting, physical science modeling, or social science analysis, the SLR framework remains a primary tool for quantifying causality and predicting future behavior within a structured mathematical environment.`;export{e as default};