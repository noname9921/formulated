var e=`# Introduction to Bayesian Inference

Bayesian inference represents a foundational paradigm in statistics and machine learning, offering a rigorous mathematical framework for updating the probability of a hypothesis as more evidence or information becomes available. Unlike the frequentist approach, which treats parameters as fixed unknown constants and considers the long-run frequency of events, Bayesian inference treats parameters as random variables characterized by probability distributions. This distinction allows for the systematic incorporation of prior knowledge into data analysis, making it an essential tool for decision-making under uncertainty.

## Definition

At its core, Bayesian inference is the process of applying Bayes' Theorem to update the probability of a hypothesis ($H$) given some observed data ($D$). The process begins with a "prior" belief, which is then updated by the "likelihood" of the observed data to produce a "posterior" distribution. Mathematically, this is expressed as:

$$P(H|D)=\\frac{P(D|H)P(H)}{P(D)}$$

In this equation, $P(H|D)$ is the posterior, $P(D|H)$ is the likelihood, $P(H)$ is the prior, and $P(D)$ is the marginal likelihood or evidence. The evidence acts as a normalizing constant to ensure the posterior integrates to one. Because the evidence is often computationally difficult to calculate, researchers frequently work with the proportionality:

$$P(H|D)\\propto P(D|H)P(H)$$

This relationship dictates that the posterior belief is proportional to the product of the likelihood of the data and the prior knowledge.

## Key Terminology

To navigate Bayesian analysis, one must master several specific terms that define the components of the inferential process:

| Term | Definition | Role in Bayesian Inference |
| :--- | :--- | :--- |
| Prior | $P(H)$ | Initial probability distribution representing knowledge before observing new data. |
| Likelihood | $P(D|H)$ | The probability of observing the data given a specific set of parameters. |
| Posterior | $P(H|D)$ | The updated probability distribution after incorporating evidence. |
| Marginal Likelihood | $P(D)$ | The total probability of the data, calculated by integrating the likelihood over all possible parameters. |
| Conjugate Prior | Prior & Posterior pair | A choice of prior distribution that results in a posterior of the same distribution family. |
| Hyperparameters | Parameters of the Prior | Values that define the shape and scale of the prior distribution. |

These terms function together to transform subjective or existing information into a refined objective estimate of model parameters.

## Purpose

The primary purpose of Bayesian inference is to provide a coherent framework for statistical modeling that accounts for both measurement error and inherent model uncertainty. In many scientific fields, data is scarce or expensive to collect. Bayesian methods excel here because they allow the researcher to "inject" domain expertise into the model via the prior distribution.

Furthermore, Bayesian inference excels in prediction and decision-making. By calculating the posterior distribution, a Bayesian model provides not just a single "best fit" point estimate, but a full distribution of plausible values. This distribution quantifies the uncertainty of the inference, which is critical for risk assessment. For instance, in finance or clinical trials, knowing the variance of a parameter is often as important as knowing its mean, as it informs the potential range of extreme outcomes.

## Fundamental Properties

Bayesian inference relies on the consistent application of probability theory, specifically the axioms of probability. One of its most significant properties is its iterative nature. A posterior distribution calculated today can serve as the prior distribution for an analysis conducted tomorrow when new data arrives. This recursive updating process is a hallmark of Bayesian thinking.

Another fundamental property is the handling of nuisance parameters. If a model involves parameters we are not interested in, Bayesian inference allows us to marginalize these parameters out by integrating over their distributions. This produces a "marginal posterior" for the parameter of interest, effectively accounting for the uncertainty of the nuisance parameters.

Consider the interaction between likelihood and prior. The following graph shows the potential shape of a Gaussian likelihood $f(x) = \\exp(-(x-a)^2/2b)$ and a Gaussian prior $f(x) = \\exp(-(x-c)^2/2d)$.

\`\`\`graph
\\exp(-(x-0)^2/2)
\\exp(-(x-2)^2/0.5)
\`\`\`

The graph above plots two Gaussian functions, representing the contrast between a prior centered at 0 with high variance and a likelihood function centered at 2 with lower variance, illustrating how the product of these functions (the posterior) would shift the peak toward the data.

## Types & Variations

Bayesian methods can be broadly categorized based on how the prior is selected and how the posterior is computed.

1. **Objective Bayesian Inference:** In this approach, one attempts to specify "non-informative" or "flat" priors that have minimal impact on the posterior, letting the data "speak for itself." These are often used when prior information is unavailable or when the goal is to avoid subjective bias.
2. **Subjective Bayesian Inference:** Here, the prior is explicitly defined based on expert knowledge, historical data, or physical constraints. This is common in complex engineering systems where previous test data provides a strong foundation for future predictions.
3. **Empirical Bayesian Inference:** This is a hybrid approach where the hyperparameters of the prior are estimated from the data itself. While sometimes criticized for violating the strict definition of Bayesianism, it is highly effective in hierarchical modeling where data is shared across multiple groups.
4. **Hierarchical Bayesian Modeling:** This involves parameters that are themselves drawn from a distribution with its own hyperparameters. This structure is powerful for modeling clustered or multilevel data, where information about one cluster informs our understanding of another.

## How to Solve

Solving for the posterior distribution analytically is often impossible for complex, high-dimensional models because the integral required for the evidence $P(D)$ is intractable. This necessitates numerical methods.

### Conjugacy
If one chooses a conjugate prior, the posterior calculation simplifies algebraically. For example, if the likelihood is a Bernoulli process and the prior is a Beta distribution, the posterior is also a Beta distribution. This eliminates the need for complex integration.

### Computational Methods (MCMC)
When conjugacy is not available, we turn to Markov Chain Monte Carlo (MCMC) algorithms, such as the Metropolis-Hastings algorithm or Gibbs Sampling. These methods generate samples from the posterior distribution without requiring the direct calculation of the marginal likelihood. The core idea is to construct a Markov Chain whose stationary distribution is the desired posterior distribution. By simulating the chain for a large number of iterations, we can approximate the mean, variance, and confidence intervals of the posterior.

### Variational Inference (VI)
Alternatively, one can use Variational Inference. Instead of sampling, VI reformulates the inference problem as an optimization problem. We choose a family of simpler, tractable distributions and minimize the Kullback-Leibler divergence between the chosen distribution and the true, complex posterior. This is generally much faster than MCMC, making it the preferred choice for large-scale machine learning applications involving neural networks or massive datasets.

Interactive exploration of how shifting the mean of a prior impacts the posterior can be seen below.

\`\`\`interactivegraph
\\exp(-(x-m)^2/2)
params: m=0
range: m=-2:2
\`\`\`

The interactive graph above plots a Gaussian likelihood centered at zero. By adjusting the parameter $m$, the user can simulate the effect of shifting a hypothetical prior mean, demonstrating how the relative weight given to prior beliefs versus the data observation influences the combined distribution.

## Summary

Bayesian inference provides a robust and flexible framework for statistical learning. By treating parameters as random variables and employing Bayes' Theorem, it allows for the seamless integration of prior information with new observations. While analytical solutions are limited to specific conjugate cases, advancements in MCMC and Variational Inference have made Bayesian methods accessible for a vast array of modern applications. Its ability to quantify uncertainty, update beliefs incrementally, and incorporate domain-specific expertise makes it a cornerstone of contemporary data science, distinguishing it from traditional frequentist techniques. As computational power continues to grow, the adoption of Bayesian paradigms will likely continue to expand, particularly in fields requiring high-stakes decision-making and complex, multilevel data analysis.`;export{e as default};