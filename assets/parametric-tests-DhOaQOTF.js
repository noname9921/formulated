var e=`# Parametric Tests: Z-tests and t-tests

## Definition

Parametric tests are statistical methods that make specific assumptions about the parameters of the population distribution from which the data is drawn. The most fundamental requirement for these tests is that the data must follow a known distribution, typically the normal distribution, or be capable of being transformed into one. Z-tests and t-tests are the primary inferential tools used to compare means.

A Z-test is a statistical test used to determine whether the means of two datasets differ significantly when the variance is known and the sample size is large (typically $n > 30$). The test statistic follows a standard normal distribution under the null hypothesis.

A t-test, conversely, is used when the population variance is unknown, and the sample size is typically small ($n < 30$). It utilizes the Student's t-distribution, which accounts for the additional uncertainty introduced by estimating the population standard deviation from the sample standard deviation.

## Key Terminology

| Term | Definition |
| :--- | :--- |
| Null Hypothesis ($H_0$) | The default assumption that there is no significant difference between the populations. |
| Alternative Hypothesis ($H_a$) | The hypothesis that contradicts the null, suggesting a significant effect exists. |
| Significance Level ($\\alpha$) | The probability of rejecting the null hypothesis when it is actually true (Type I error). |
| Standard Error ($SE$) | The standard deviation of the sampling distribution of a statistic. |
| Degrees of Freedom ($df$) | The number of values in a calculation that are free to vary; for a t-test, $df = n - 1$. |
| Critical Value | The threshold value that defines the boundaries of the rejection region. |
| P-value | The probability of obtaining results at least as extreme as the observed results, assuming $H_0$ is true. |

## Purpose

The overarching purpose of Z-tests and t-tests is to perform hypothesis testing on population means. These tests allow researchers to draw inferences about a larger population based on a sample.

The Z-test is employed when the investigator has access to the population standard deviation ($\\sigma$). Because the population parameter is known, the distribution of the sample mean is precisely defined by the Central Limit Theorem as the sample size grows.

The t-test is employed when $\\sigma$ is unknown, requiring the use of the sample standard deviation ($s$) as an estimator. William Sealy Gosset, publishing under the pseudonym "Student," developed this test to address the necessity of adjusting for the increased dispersion observed when the sample standard deviation is used. The t-distribution is "flatter" and has "heavier tails" than the normal distribution, reflecting the extra uncertainty of the estimation.

## Fundamental Properties

Both tests rely on the assumption of normality. For a Z-test, if the population is not normal, the Central Limit Theorem ensures that the sampling distribution of the mean approaches normality as the sample size increases.

For the t-test, the underlying population must be normally distributed, or the sample size must be large enough to invoke the Central Limit Theorem. However, the t-test is generally robust to mild violations of normality, provided the distribution is not heavily skewed.

The mathematical formulation of the Z-score is given by:
$$Z = \\frac{\\bar{x} - \\mu}{\\sigma / \\sqrt{n}}$$
Where $\\bar{x}$ is the sample mean, $\\mu$ is the population mean, $\\sigma$ is the population standard deviation, and $n$ is the sample size.

The mathematical formulation of the t-score is:
$$t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}$$
Where $s$ is the sample standard deviation. As $n \\to \\infty$, $s$ becomes a better estimate of $\\sigma$, and the t-distribution converges to the standard normal distribution.

\`\`\`graph
\\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}
\\frac{\\Gamma(\\frac{\\nu+1}{2})}{\\sqrt{\\nu\\pi}\\Gamma(\\frac{\\nu}{2})}(1+\\frac{x^2}{\\nu})^{-\\frac{\\nu+1}{2}}
\`\`\`
The graph above compares the standard normal distribution (the sharper peak) with the t-distribution (the broader, flatter curve) with $df=2$, illustrating the heavier tails and increased variance characteristic of the Student's t-distribution.

## Types & Variations

### Z-tests
1. **One-sample Z-test:** Compares a sample mean to a known population mean.
2. **Two-sample Z-test:** Compares the means of two independent groups where both population variances are known.

### t-tests
1. **One-sample t-test:** Assesses whether the mean of a single group differs from a hypothesized value.
2. **Independent two-sample t-test:** Compares the means of two independent groups. This includes the Student's t-test (assuming equal variances) and Welch's t-test (not assuming equal variances).
3. **Paired t-test:** Used for dependent samples (e.g., pre-test and post-test measurements on the same subjects).

## How to Solve

To solve a hypothesis testing problem using these tests, follow this systematic procedure:

1. **State the Hypotheses:** Define $H_0$ and $H_a$.
2. **Select the Significance Level ($\\alpha$):** Typically set to $0.05$ or $0.01$.
3. **Check Assumptions:** Determine if $\\sigma$ is known (Z-test) or unknown (t-test). Ensure the data satisfies independence and normality requirements.
4. **Calculate the Test Statistic:** Use the formulas defined in the Fundamental Properties section.
5. **Determine the Critical Value or P-value:** Use the normal distribution table for Z or the t-distribution table for t based on $df = n - 1$.
6. **Make a Decision:** If the test statistic falls into the rejection region or the p-value $< \\alpha$, reject $H_0$. Otherwise, fail to reject $H_0$.
7. **Interpret the Results:** Explain what the decision means in the context of the original research question.

Consider an example: A pharmaceutical company claims a drug reduces heart rate by 5 bpm. A sample of $n=16$ patients shows a mean reduction of $4$ bpm with a standard deviation of $1.5$. Since $\\sigma$ is unknown, a t-test is required.

$$t = \\frac{4 - 5}{1.5 / \\sqrt{16}} = \\frac{-1}{1.5 / 4} = \\frac{-1}{0.375} \\approx -2.67$$
With $df=15$, checking a t-table for $\\alpha=0.05$ (two-tailed), the critical value is approximately $2.131$. Since $|-2.67| > 2.131$, we reject the null hypothesis.

## Summary

Parametric tests are essential tools for inferential statistics when data meets the criteria of normality and interval/ratio scaling. The Z-test serves as the foundation for large-sample inference where population parameters are known. The t-test provides the necessary flexibility to handle smaller samples and unknown population parameters by incorporating the t-distribution. Understanding the distinction between these tests allows researchers to select the most appropriate method to minimize errors and maximize the validity of their conclusions. The core of these tests lies in the calculation of a test statistic that quantifies the distance of the sample mean from the hypothesized population mean in units of standard error, providing a rigorous mathematical framework for scientific decision-making.`;export{e as default};