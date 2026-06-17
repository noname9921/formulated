var e=`# Simple Linear Regression and Least Squares Estimation

## Definition

Simple Linear Regression (SLR) is a fundamental statistical method used to model the relationship between a single independent variable (often denoted as $x$, the predictor or explanatory variable) and a dependent variable (often denoted as $y$, the response or outcome variable). The model assumes that the relationship can be expressed as a linear function, characterized by a straight line that best fits the observed data points in a two-dimensional space.

Mathematically, the simple linear regression model is expressed as:
$$y_i = \\beta_0 + \\beta_1 x_i + \\epsilon_i$$
where:
- $y_i$ is the $i$-th observation of the dependent variable.
- $x_i$ is the $i$-th observation of the independent variable.
- $\\beta_0$ is the y-intercept, representing the expected value of $y$ when $x=0$.
- $\\beta_1$ is the slope coefficient, representing the change in $y$ for a unit change in $x$.
- $\\epsilon_i$ is the random error term, accounting for the vertical deviation of the observed data point from the true population regression line.

Least Squares Estimation (LSE) is the optimization criterion used to estimate the unknown parameters $\\beta_0$ and $\\beta_1$. It works by minimizing the Sum of Squared Residuals (SSR), which is the sum of the squared differences between the observed values $y_i$ and the values predicted by the model $\\hat{y}_i$.

## Key Terminology

To understand SLR and LSE, one must be familiar with several core statistical concepts:

| Term | Definition |
| :--- | :--- |
| Independent Variable | The input variable used to predict the outcome ($x$). |
| Dependent Variable | The output variable being predicted ($y$). |
| Residual | The vertical distance between an observed data point and the fitted line, calculated as $e_i = y_i - \\hat{y}_i$. |
| Fitted Value | The value predicted by the regression equation, $\\hat{y}_i = \\hat{\\beta}_0 + \\hat{\\beta}_1 x_i$. |
| Sum of Squared Residuals | The objective function $S(\\beta_0, \\beta_1) = \\sum_{i=1}^n (y_i - \\beta_0 - \\beta_1 x_i)^2$. |
| Population Parameters | The true, underlying coefficients $\\beta_0$ and $\\beta_1$ in the total population. |
| Point Estimators | The calculated statistics $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$ derived from a sample. |
| Least Squares Line | The unique line that minimizes the sum of squared deviations from the observed points. |

## Purpose

The primary purpose of SLR is twofold: prediction and inference.

First, SLR is used for prediction. Once the model is fitted to a training dataset, it can be used to forecast the value of $y$ for a new, unseen value of $x$. This is essential in fields ranging from economics (predicting revenue based on advertising spend) to physical sciences (predicting temperature changes based on altitude).

Second, SLR is used for inferential statistics. It allows researchers to quantify the strength and nature of the relationship between variables. By examining the slope coefficient $\\beta_1$, one can test the null hypothesis $H_0: \\beta_1 = 0$, which posits that there is no linear relationship between $x$ and $y$. If the statistical test yields a small p-value, researchers can conclude that there is a statistically significant effect of $x$ on $y$.

Furthermore, SLR serves as the pedagogical gateway to more complex modeling frameworks, such as Multiple Linear Regression, Generalized Linear Models (GLMs), and machine learning algorithms that rely on gradient-based optimization.

## Fundamental Properties

The Least Squares Estimation method possesses several mathematically elegant properties. Under the Gauss-Markov theorem, the least squares estimators $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$ are the Best Linear Unbiased Estimators (BLUE). This means that among all linear unbiased estimators, the LSE possesses the minimum variance.

The estimators follow these key characteristics:
1. **Unbiasedness:** The expected values of the estimators equal the true population parameters: $E[\\hat{\\beta}_0] = \\beta_0$ and $E[\\hat{\\beta}_1] = \\beta_1$.
2. **Consistency:** As the sample size $n$ approaches infinity, the estimators converge in probability to the true population parameters.
3. **Efficiency:** The estimators achieve the lowest possible variance among linear unbiased estimators, assuming the error terms are homoscedastic (constant variance) and uncorrelated.

The model assumes that $\\epsilon_i$ are independent and identically distributed (i.i.d.) with $E[\\epsilon_i] = 0$ and $Var(\\epsilon_i) = \\sigma^2$. The property of homoscedasticity ensures that the regression line remains a reliable predictor across the entire range of $x$.

## Types & Variations

While the standard model assumes a linear relationship, regression analysis is highly adaptable.

1. **Simple Linear Regression:** The baseline case with one independent variable.
2. **Polynomial Regression:** Though technically linear in parameters, it involves higher-order terms of the independent variable, such as $y = \\beta_0 + \\beta_1 x + \\beta_2 x^2 + \\epsilon$. This allows for modeling curvature in the data.
3. **Log-Linear/Linear-Log Models:** These involve taking the logarithm of $y$ or $x$ to handle exponential growth patterns or non-linear relationships, effectively linearizing them for standard OLS procedures.
4. **Weighted Least Squares (WLS):** Used when the assumption of constant variance (homoscedasticity) is violated. Observations with higher variance are assigned lower weights to prevent them from overly influencing the regression line.

The following interactive graph allows for the exploration of how parameters $\\beta_0$ and $\\beta_1$ shift the line. In this context, $\\beta_1$ dictates the slope of the line, while $\\beta_0$ controls the intersection with the y-axis.

\`\`\`interactivegraph
\\beta_1 * x + \\beta_0
params: \\beta_1=1, \\beta_0=0
range: \\beta_1=-3:3, \\beta_0=-3:3
\`\`\`

## How to Solve

To find the values of $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$ that minimize the SSR, we use the method of calculus (specifically, partial differentiation). The objective function is:
$$S(\\beta_0, \\beta_1) = \\sum_{i=1}^n (y_i - \\beta_0 - \\beta_1 x_i)^2$$

To minimize this function, we take the partial derivatives with respect to $\\beta_0$ and $\\beta_1$ and set them to zero:

1. **Partial with respect to $\\beta_0$:**
$$\\frac{\\partial S}{\\partial \\beta_0} = -2 \\sum_{i=1}^n (y_i - \\beta_0 - \\beta_1 x_i) = 0$$
Dividing by $-2n$ and rearranging yields:
$$\\bar{y} = \\beta_0 + \\beta_1 \\bar{x} \\implies \\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$$

2. **Partial with respect to $\\beta_1$:**
$$\\frac{\\partial S}{\\partial \\beta_1} = -2 \\sum_{i=1}^n x_i(y_i - \\beta_0 - \\beta_1 x_i) = 0$$
Substituting $\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$ into the equation and solving for $\\hat{\\beta}_1$ yields the closed-form solution:
$$\\hat{\\beta}_1 = \\frac{\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_{i=1}^n (x_i - \\bar{x})^2}$$

These formulas demonstrate that the slope estimate $\\hat{\\beta}_1$ is essentially the ratio of the sample covariance of $x$ and $y$ to the sample variance of $x$. Once $\\hat{\\beta}_1$ is calculated, $\\hat{\\beta}_0$ is determined by ensuring the regression line passes through the centroid of the data $(\\bar{x}, \\bar{y})$.

To visualize how a line approximates data points, the static graph below plots a representative linear function $f(x) = 0.5x + 1$, which could represent a fitted regression line.

\`\`\`graph
0.5 * x + 1
\`\`\`

## Summary

Simple Linear Regression remains a cornerstone of statistical modeling. Through the method of Least Squares Estimation, analysts can distill complex datasets into interpretable, actionable linear equations. The process relies on identifying the intercept $\\beta_0$ and slope $\\beta_1$ that minimize the sum of squared residuals, providing an unbiased and efficient summary of the underlying trend. 

Despite its simplicity, the strength of SLR lies in its rigid mathematical foundation and its capability to provide clear, statistically significant insights into the nature of associations between variables. Whether used for initial data exploration, predictive forecasting, or hypothesis testing, SLR provides the essential tools required to quantify relationships in both social and physical sciences. Understanding the derivation and properties of this model is a prerequisite for mastering more advanced multivariate and non-parametric statistical techniques.`;export{e as default};