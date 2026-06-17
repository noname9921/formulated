var e=`# Point Estimation: Maximum Likelihood and Method of Moments

## Definition

Point estimation is a fundamental task in inferential statistics that involves the use of sample data to calculate a single value (a point estimate) that serves as the "best guess" for an unknown population parameter. Let $X_1, X_2, \\dots, X_n$ be independent and identically distributed (i.i.d.) random variables with a probability density function (or probability mass function) $f(x; \\theta)$, where $\\theta$ is an unknown parameter or a vector of parameters. A point estimator $\\hat{\\theta}$ is a function of the sample data, $\\hat{\\theta} = g(X_1, \\dots, X_n)$, used to estimate $\\theta$.

The Method of Moments (MoM) and Maximum Likelihood Estimation (MLE) are the two primary analytical frameworks used to derive these estimators. MoM relies on equating population moments to sample moments, while MLE seeks to identify the parameter value that maximizes the probability of observing the given data.

## Key Terminology

- **Parameter Space ($\\Theta$):** The set of all possible values for the unknown parameter $\\theta$.
- **Likelihood Function $L(\\theta; \\mathbf{x})$:** Defined as the joint probability density function of the data viewed as a function of the parameter $\\theta$ for fixed observed data $\\mathbf{x}$.
- **Log-Likelihood $\\ell(\\theta)$:** The natural logarithm of the likelihood function, $\\ln(L(\\theta; \\mathbf{x}))$. It is used because the logarithm is a monotonically increasing function, ensuring that the maximum of the likelihood is the same as the maximum of the log-likelihood while simplifying differentiation.
- **Population Moment:** The $k$-th population moment is defined as $\\mu'_k = E[X^k]$.
- **Sample Moment:** The $k$-th sample moment is defined as $M_k = \\frac{1}{n} \\sum_{i=1}^n X_i^k$.
- **Bias:** The difference between the expected value of an estimator and the true parameter value: $Bias(\\hat{\\theta}) = E[\\hat{\\theta}] - \\theta$.
- **Consistency:** An estimator is consistent if it converges in probability to the true parameter value as the sample size $n$ approaches infinity.
- **Efficiency:** An estimator is efficient if it achieves the minimum possible variance among all unbiased estimators, often reaching the Cramer-Rao Lower Bound.

## Purpose

The primary purpose of point estimation is data reduction and inference. In many scientific and industrial contexts, one cannot observe the entire population (e.g., the true mean height of all humans, or the rate of decay of all radioactive atoms). Point estimation allows researchers to characterize the population using a limited sample.

Method of Moments is frequently used for its computational simplicity; it provides a quick, heuristic approach to finding estimators, especially when the likelihood function is complex or analytically intractable. Maximum Likelihood Estimation is favored for its strong asymptotic properties. Under mild regularity conditions, MLEs are consistent, asymptotically normal, and asymptotically efficient. Thus, MLE is generally considered the "gold standard" for estimation in large-sample settings.

## Fundamental Properties

Statistical theory evaluates estimators based on several criteria:

1. **Unbiasedness:** An estimator is unbiased if $E[\\hat{\\theta}] = \\theta$. While desirable, it is not always possible to obtain an unbiased estimator that is also efficient.
2. **Minimum Variance Unbiased Estimator (MVUE):** An estimator that has the smallest variance among all unbiased estimators.
3. **Consistency:** As $n \\to \\infty$, $\\hat{\\theta}_n \\xrightarrow{P} \\theta$. This ensures that with enough data, the estimate will be arbitrarily close to the true parameter.
4. **Asymptotic Normality:** For large $n$, the distribution of $\\sqrt{n}(\\hat{\\theta} - \\theta)$ converges to a normal distribution $N(0, I(\\theta)^{-1})$, where $I(\\theta)$ is the Fisher Information.

The following table summarizes the comparative characteristics:

| Feature | Method of Moments (MoM) | Maximum Likelihood (MLE) |
| :--- | :--- | :--- |
| **Computational Ease** | Usually high; analytical | Often requires numerical optimization |
| **Statistical Efficiency** | Generally lower | Often reaches asymptotic efficiency |
| **Dependence** | Uses population moments | Uses the entire density function |
| **Large-Sample Theory** | Consistent but often suboptimal | Asymptotically optimal |

The interactive graph below demonstrates the effect of parameter change on the likelihood surface for a Normal distribution $\\mu$.

\`\`\`interactivegraph
-((x - mu)^2) / 2
params: mu=0
range: mu=-3:3
\`\`\`
In this graph, we observe the shape of the log-likelihood (modeled here by the exponent of the Gaussian density) as the parameter $\\mu$ shifts. The peak of the curve represents the Maximum Likelihood Estimate for the true mean.

## Types & Variations

### Method of Moments
The MoM procedure involves setting the first $k$ population moments equal to the first $k$ sample moments:
$$E[X] = \\frac{1}{n}\\sum X_i, \\quad E[X^2] = \\frac{1}{n}\\sum X_i^2, \\quad \\dots, \\quad E[X^k] = \\frac{1}{n}\\sum X_i^k$$
This system of equations is solved for the parameters $\\theta_1, \\dots, \\theta_k$.

### Maximum Likelihood Estimation
The MLE procedure involves maximizing the likelihood function:
$$\\hat{\\theta}_{MLE} = \\arg \\max_{\\theta \\in \\Theta} L(\\theta; \\mathbf{x}) = \\arg \\max_{\\theta \\in \\Theta} \\sum_{i=1}^n \\ln f(x_i; \\theta)$$
Variations include:
- **Conditional MLE:** Used in regression settings where the likelihood is conditioned on covariates.
- **Penalized MLE:** Includes a penalty term (e.g., Lasso or Ridge) to prevent overfitting or handle high-dimensional parameter spaces.
- **Pseudo-MLE:** Used when the true distribution is unknown, but a working model is assumed.

## How to Solve

### Step-by-Step: Method of Moments
1. Define the population moments $\\mu'_1, \\mu'_2, \\dots$ in terms of the unknown parameters.
2. Calculate the sample moments $M_1, M_2, \\dots$ from the dataset.
3. Set $\\mu'_j = M_j$ for $j = 1, 2, \\dots, k$, where $k$ is the number of parameters.
4. Solve the system of equations for the parameters to get $\\hat{\\theta}_{MoM}$.

### Step-by-Step: Maximum Likelihood Estimation
1. Write the likelihood function: $L(\\theta) = \\prod_{i=1}^n f(x_i; \\theta)$.
2. Calculate the log-likelihood: $\\ell(\\theta) = \\ln(L(\\theta)) = \\sum_{i=1}^n \\ln f(x_i; \\theta)$.
3. Take the derivative with respect to each parameter $\\theta_j$ (the "score function").
4. Set the derivatives equal to zero: $\\frac{\\partial}{\\partial \\theta_j} \\ell(\\theta) = 0$.
5. Solve for $\\theta_j$. If the solution is not analytically obtainable, use numerical methods like the Newton-Raphson algorithm.
6. Check the second derivative (Hessian matrix) to ensure the solution is a maximum (concavity).

Example: For a Bernoulli distribution with parameter $p$, $f(x; p) = p^x(1-p)^{1-x}$.
The log-likelihood is $\\ell(p) = \\sum [x_i \\ln(p) + (1-x_i) \\ln(1-p)]$.
Differentiating with respect to $p$: $\\frac{d\\ell}{dp} = \\frac{\\sum x_i}{p} - \\frac{\\sum (1-x_i)}{1-p} = 0$.
Solving yields $\\hat{p} = \\frac{1}{n} \\sum x_i = \\bar{X}$.

## Summary

Point estimation provides the essential bridge between raw observations and statistical inference. The Method of Moments serves as an accessible, intuitive approach that leverages the relationship between population properties and sample characteristics. While powerful for quick approximations, it frequently sacrifices efficiency.

In contrast, Maximum Likelihood Estimation utilizes the full information contained within the probability distribution. By identifying the parameter configuration that makes the observed data most probable, MLE offers optimal properties in the limit of large sample sizes. While MLE requires a fully specified model and can present significant computational challenges, its asymptotic optimality makes it the preferred tool in modern statistical practice. Understanding both methods enables practitioners to balance computational constraints with the requirements for statistical precision.`;export{e as default};