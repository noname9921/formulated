var e=`# Parametric Tests: Z-tests and t-tests

## Definition

Parametric tests are statistical methods that rely on the assumption that data follows a specific probability distribution, most commonly the normal distribution. These tests involve estimating population parameters, such as the mean ($\\mu$) or variance ($\\sigma^2$), based on sample data. The Z-test and the t-test represent the two primary pillars of frequentist parametric hypothesis testing for means.

A Z-test is a statistical test used to determine whether the difference between a sample mean and a population mean is statistically significant, provided that the population variance is known and the sample size is sufficiently large (typically $n > 30$) to satisfy the Central Limit Theorem. The test statistic follows a standard normal distribution, denoted as $Z \\sim N(0, 1)$.

A t-test, specifically the Student's t-test, is employed when the population standard deviation is unknown and must be estimated from the sample data. Developed by William Sealy Gosset in 1908, the t-test accounts for the additional uncertainty introduced by using a sample estimate of variance ($s$) rather than the true population parameter ($\\sigma$). The test statistic follows the t-distribution, which features heavier tails than the normal distribution, particularly when degrees of freedom ($df$) are low.

## Key Terminology

- **Null Hypothesis ($H_0$):** The default assumption that there is no significant difference or effect; any observed difference is due to chance.
- **Alternative Hypothesis ($H_a$ or $H_1$):** The claim being tested, representing a significant difference or relationship.
- **Significance Level ($\\alpha$):** The probability of rejecting the null hypothesis when it is actually true (Type I error). Common values include $0.05$ or $0.01$.
- **Standard Error ($SE$):** The standard deviation of the sampling distribution of a statistic, representing the precision of the sample mean estimate.
- **Degrees of Freedom ($df$):** The number of values in the calculation of a statistic that are free to vary. For a single sample t-test, $df = n - 1$.
- **Critical Value:** A threshold value that defines the boundaries of the rejection region. If the calculated test statistic exceeds this, $H_0$ is rejected.
- **P-value:** The probability of obtaining test results at least as extreme as the observed results, assuming $H_0$ is true.

## Purpose

The fundamental purpose of Z-tests and t-tests is to provide a rigorous mathematical framework for inference. Researchers use these tests to answer questions about whether an observed sample mean is representative of a hypothetical population mean or if two samples originate from populations with different means.

By calculating these statistics, researchers can quantify the strength of the evidence against the null hypothesis. They transform raw data into a standardized score, allowing for comparison against known probability distributions. This objective approach minimizes subjective bias in scientific research, clinical trials, and industrial quality control. While Z-tests are preferred for large datasets with known parameters, t-tests are more robust for the small sample sizes frequently encountered in experimental psychology and small-scale field studies.

## Fundamental Properties

The validity of parametric tests rests upon several underlying assumptions. If these are violated, the reliability of the p-value and the resulting inference may be compromised.

1. **Normality:** Both Z-tests and t-tests assume the sampling distribution of the mean is normal. For Z-tests, the parent population must be normal or the sample size must be large enough ($n > 30$) to invoke the Central Limit Theorem. For t-tests, the population should be approximately normal, though t-tests are famously robust to moderate deviations from normality.
2. **Independence:** Observations must be independent of one another. This usually requires random sampling.
3. **Measurement Scale:** Data must be continuous (interval or ratio scale).
4. **Homogeneity of Variance (t-test only):** In independent samples t-tests, it is often assumed that the two populations have equal variances (homoscedasticity). If this assumption is violated, Welch's t-test should be used instead of the Student's t-test.

The Z-distribution and t-distribution differ significantly in shape. The Z-distribution is fixed, while the t-distribution family is defined by the degrees of freedom. As $df \\to \\infty$, the t-distribution converges to the standard normal Z-distribution.

The graph below plots the standard normal distribution $f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}$ and the t-distribution with $df=2$ defined by $f(x) = \\frac{\\Gamma(\\frac{df+1}{2})}{\\sqrt{df\\pi}\\Gamma(\\frac{df}{2})} (1 + \\frac{x^2}{df})^{-\\frac{df+1}{2}}$. This visualization demonstrates the "heavier tails" of the t-distribution, which account for greater uncertainty in small samples.

\`\`\`graph
(1/sqrt(2*pi))*exp(-x^2/2)
(gamma(1.5)/(sqrt(2*pi)*gamma(1))) * (1 + x^2/2)^(-1.5)
\`\`\`

## Types & Variations

### Z-tests
- **One-sample Z-test:** Compares a sample mean to a known population mean.
- **Two-sample Z-test:** Compares the means of two independent groups when population variances are known.

### t-tests
- **One-sample t-test:** Compares the mean of a single group against a known or theoretical population mean.
- **Independent Samples t-test:** Compares the means of two unrelated groups (e.g., control vs. experimental).
- **Paired Samples t-test:** Compares means from the same group at different times or under different conditions (e.g., pre-test vs. post-test).

| Test Type | Independent Variable | Dependent Variable | Population $\\sigma$ |
| :--- | :--- | :--- | :--- |
| One-sample Z | Categorical | Continuous | Known |
| One-sample t | Categorical | Continuous | Unknown |
| Independent t | Categorical (2 groups) | Continuous | Unknown |
| Paired t | Categorical (2 conditions) | Continuous | Unknown |

## How to Solve

Solving a parametric test follows a standardized five-step procedure.

### 1. State the Hypotheses
Define the Null ($H_0$) and Alternative ($H_a$) hypotheses. For a two-tailed test, $H_0: \\mu = \\mu_0$ and $H_a: \\mu \\neq \\mu_0$.

### 2. Choose the Test Statistic
Determine the appropriate formula.
For a one-sample Z-test:
$$Z = \\frac{\\bar{x} - \\mu}{\\sigma / \\sqrt{n}}$$
For a one-sample t-test:
$$t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}$$
Where $\\bar{x}$ is the sample mean, $\\mu$ is the population mean, $s$ is the sample standard deviation, and $n$ is the sample size.

### 3. Determine the Significance Level
Select $\\alpha$ (e.g., $0.05$). This dictates the rejection region.

### 4. Calculate the Test Statistic and p-value
Compute the value. Use a Z-table or t-table (based on $df$) to find the corresponding p-value. Alternatively, compare the calculated statistic to the critical value ($Z_{crit}$ or $t_{crit}$).

### 5. Interpret the Results
If the p-value $\\leq \\alpha$, reject $H_0$. If the p-value $> \\alpha$, fail to reject $H_0$. 

To observe how the t-statistic changes as the sample standard deviation ($s$) varies relative to the mean difference, the following interactive graph can be used. This simulates the effect of data variability on the t-statistic calculation $t = (\\bar{x} - \\mu) / (s / \\sqrt{n})$.

\`\`\`interactivegraph
(1 - 0) / (s / sqrt(10))
params: s=1
range: s=0.1:5
\`\`\`

The graph plots $f(s) = \\frac{1}{s / \\sqrt{10}}$, where the numerator is a fixed difference of $1$. As $s$ increases (representing higher variability in the data), the t-statistic decreases, demonstrating how noise reduces the likelihood of achieving statistical significance.

## Summary

Parametric tests are essential tools for inferential statistics. The Z-test provides a foundation for large-sample inference, while the t-test offers a flexible approach for smaller samples where population parameters are unknown. Choosing between them depends primarily on the availability of the population standard deviation and the sample size.

While powerful, these tests rely on assumptions of normality and independence. Practitioners must always verify these assumptions through diagnostic plots (like Q-Q plots) or formal tests (like the Shapiro-Wilk test) before drawing conclusions. By systematically applying these tests, researchers can transition from descriptive observations to robust, evidence-based generalizations about the populations from which their data were drawn. The transition from the rigid Z-distribution to the degrees-of-freedom-dependent t-distribution marks the evolution of statistical thought from theoretical certainty to practical estimation.`;export{e as default};