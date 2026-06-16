var e=`# Total Probability and Bayes' Theorem

## Definition

The Law of Total Probability and Bayes' Theorem represent the cornerstones of probabilistic reasoning, bridging the gap between prior beliefs and updated evidence. 

The Law of Total Probability states that if a sample space $\\Omega$ can be partitioned into a finite or countably infinite collection of mutually exclusive and exhaustive events $\\{B_1, B_2, \\dots, B_n\\}$, then for any event $A$ in $\\Omega$, the probability $P(A)$ is the weighted sum of the conditional probabilities of $A$ given each $B_i$. Mathematically, this is expressed as:
$$P(A)=\\sum_{i=1}^n P(A|B_i)P(B_i)$$
This law acts as a fundamental decomposition principle, allowing complex probabilities to be resolved into simpler, conditional components.

Bayes' Theorem provides the mechanism for "inverting" conditional probabilities. It describes the probability of an event, based on prior knowledge of conditions that might be related to the event. For two events $A$ and $B$, where $P(B)>0$, the theorem is defined as:
$$P(B|A)=\\frac{P(A|B)P(B)}{P(A)}$$
Combining these, we derive the extended form of Bayes' Theorem using the Law of Total Probability, which is essential for inference:
$$P(B_j|A)=\\frac{P(A|B_j)P(B_j)}{\\sum_{i=1}^n P(A|B_i)P(B_i)}$$

## Key Terminology

To navigate these concepts, one must understand the distinct roles of the variables involved:

| Term | Definition |
| :--- | :--- |
| Prior Probability | $P(B_i)$, the initial degree of belief in event $B_i$ before observing evidence $A$. |
| Likelihood | $P(A|B_i)$, the probability of observing evidence $A$ assuming hypothesis $B_i$ is true. |
| Posterior Probability | $P(B_i|A)$, the updated belief in $B_i$ after accounting for the evidence $A$. |
| Marginal Likelihood | $P(A)$, the total probability of observing evidence $A$, serving as a normalizing constant. |
| Partition | A set of events $\\{B_i\\}$ such that $B_i \\cap B_j = \\emptyset$ for $i \\neq j$ and $\\cup B_i = \\Omega$. |

## Purpose

The primary purpose of these theorems is to enable the transition from generative models to diagnostic inference. The Law of Total Probability serves a predictive purpose; it allows us to calculate the probability of an outcome by accounting for all possible pathways or underlying states that could lead to that outcome. 

Bayes' Theorem, conversely, serves an inferential purpose. It is the mathematical foundation for scientific method, machine learning classifiers, and medical diagnosis. It addresses the "inverse problem": we often know the probability of symptoms given a disease (the likelihood), but in practice, we need to know the probability of a disease given symptoms (the posterior). By formalizing how evidence updates our prior knowledge, Bayes' Theorem provides a rigorous framework for learning from data.

## Fundamental Properties

Both theorems rely on the Kolmogorov axioms of probability. The Law of Total Probability is derived directly from the definition of conditional probability:
1. $P(A \\cap B_i) = P(A|B_i)P(B_i)$
2. Since $A = \\cup_{i=1}^n (A \\cap B_i)$, and given the partition $\\{B_i\\}$ is disjoint, the probability of the union is the sum of the probabilities: $P(A) = \\sum_{i=1}^n P(A \\cap B_i)$.
3. Substitution yields the identity $P(A) = \\sum_{i=1}^n P(A|B_i)P(B_i)$.

Bayes' Theorem is a direct consequence of the symmetry of the joint probability $P(A \\cap B)$. Because $P(A \\cap B) = P(B \\cap A)$, it follows that $P(A|B)P(B) = P(B|A)P(A)$. Rearranging this produces the theorem. 

A critical property is the role of $P(A)$ as a normalizing factor. Since $\\sum_j P(B_j|A) = 1$, the marginal likelihood ensures that the posterior probabilities of all mutually exclusive hypotheses sum to unity. This satisfies the requirement that the posterior distribution must be a valid probability distribution.

## Types & Variations

Probability theory encompasses several variations of these concepts, ranging from discrete to continuous domains.

### Discrete vs. Continuous
While the definitions above assume discrete partitions, the principles hold for continuous variables. If $X$ is a continuous random variable with probability density function $f(x)$, the Law of Total Probability becomes an integral:
$$P(A) = \\int_{-\\infty}^{\\infty} P(A|X=x)f(x)dx$$
Similarly, the continuous version of Bayes' Theorem relates the posterior density $f(x|A)$ to the prior density $f(x)$:
$$f(x|A) = \\frac{P(A|X=x)f(x)}{P(A)}$$

### Recursive Bayesian Updating
This variation treats the posterior of one observation as the prior for the next. If we observe a sequence of data $D_1, D_2, \\dots, D_n$, the belief is updated iteratively:
$$P(H|D_1, D_2) \\propto P(D_2|H, D_1)P(H|D_1)$$
This is the operational backbone of Kalman filters and recursive estimation in robotics.

The following interactive graph explores how the "weight" of a prior versus a likelihood shifts the posterior peak. Imagine a model where we combine a Gaussian prior $N(\\mu_p, \\sigma_p)$ and a Gaussian likelihood $N(\\mu_l, \\sigma_l)$. The plot below represents the resulting posterior distribution shape controlled by the parameters.

\`\`\`interactivegraph
(1/(sqrt(2*pi)*s_p)*exp(-(x-m_p)^2/(2*s_p^2))) + (1/(sqrt(2*pi)*s_l)*exp(-(x-m_l)^2/(2*s_l^2)))
params: m_p=0, s_p=1, m_l=2, s_l=1
range: m_p=-3:3, s_p=0.5:2, m_l=-3:3, s_l=0.5:2
\`\`\`

In this interactive visualization, the user can observe how changing the mean ($m$) and standard deviation ($s$) of a prior and a likelihood influences the combined density. Note that the resulting curve illustrates the tension between prior belief and new information.

## How to Solve

Solving problems involving Total Probability and Bayes' Theorem requires a systematic approach. The following methodology ensures accuracy in complex probability trees:

1. **Identify the Partition**: Define the events $B_i$ that partition the sample space. Ensure they are exhaustive and mutually exclusive.
2. **Assign Priors**: Determine $P(B_i)$ for all $i$. If the information is not provided directly, look for base rate data.
3. **Determine Likelihoods**: Identify $P(A|B_i)$ for all $i$. These are the conditional probabilities of the evidence given each possible state.
4. **Calculate the Marginal Likelihood**: Compute $P(A) = \\sum P(A|B_i)P(B_i)$. This value serves as the denominator for Bayes' Theorem.
5. **Compute Posteriors**: Apply the ratio $P(B_j|A) = \\frac{P(A|B_j)P(B_j)}{P(A)}$.

### Numerical Example
Consider a medical test for a disease that affects 1% of the population. The test is 99% accurate (true positive rate) and has a 5% false positive rate.
- $P(D) = 0.01$ (Prior)
- $P(D^c) = 0.99$
- $P(Pos|D) = 0.99$
- $P(Pos|D^c) = 0.05$

Step 1: Calculate $P(Pos)$ using Total Probability:
$$P(Pos) = P(Pos|D)P(D) + P(Pos|D^c)P(D^c)$$
$$P(Pos) = (0.99 \\times 0.01) + (0.05 \\times 0.99) = 0.0099 + 0.0495 = 0.0594$$

Step 2: Calculate $P(D|Pos)$ using Bayes' Theorem:
$$P(D|Pos) = \\frac{0.99 \\times 0.01}{0.0594} \\approx 0.1667$$
Result: Despite a 99% accurate test, the probability of having the disease given a positive test is only approximately 16.67%. This counter-intuitive result highlights the importance of the base rate.

## Summary

The Law of Total Probability and Bayes' Theorem together provide a complete analytical toolkit for probabilistic inference. The Law of Total Probability provides the denominator necessary for normalization by surveying all possible outcomes in the sample space. Bayes' Theorem acts as the logical engine, reversing the conditional flow to derive updated beliefs from new data.

Key takeaways for the practitioner include:
- **Base Rate Neglect**: Always include $P(B_i)$ in calculations; ignoring the prior probability is the most common error in Bayesian inference.
- **Exhaustivity**: When using the Law of Total Probability, verify that the sum of the probabilities of your partition equals 1.
- **Normalization**: The posterior distribution must always be normalized by the marginal likelihood $P(A)$.
- **Iterative Power**: Bayesian inference is inherently iterative, allowing for the continuous refinement of models as more evidence becomes available.

These mathematical structures are not merely academic; they define how information is processed in modern artificial intelligence, clinical decision support systems, and statistical risk assessment. By maintaining a clear distinction between prior beliefs, likelihoods of evidence, and resulting posterior probabilities, one can navigate uncertainty with mathematical rigor.`;export{e as default};