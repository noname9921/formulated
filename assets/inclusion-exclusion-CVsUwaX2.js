var e=`# The Principle of Inclusion-Exclusion

The Principle of Inclusion-Exclusion (PIE) is a counting technique in combinatorics that calculates the size of the union of multiple sets by alternatingly adding and subtracting the sizes of their intersections. It serves as a generalized version of the additive principle for two sets, extending it to any finite number of sets $n$.

## Definition

Let $S$ be a finite set, and let $A_1, A_2, \\dots, A_n$ be a collection of subsets of $S$. The Principle of Inclusion-Exclusion states that the number of elements in the union of these sets is given by:

$$|\\bigcup_{i=1}^n A_i| = \\sum_{i=1}^n |A_i| - \\sum_{1 \\le i < j \\le n} |A_i \\cap A_j| + \\sum_{1 \\le i < j < k \\le n} |A_i \\cap A_j \\cap A_k| - \\dots + (-1)^{n-1} |A_1 \\cap A_2 \\cap \\dots \\cap A_n|$$

In more compact notation, this is often expressed using the summation index over non-empty subsets $J \\subseteq \\{1, 2, \\dots, n\\}$:

$$|\\bigcup_{i=1}^n A_i| = \\sum_{\\emptyset \\neq J \\subseteq \\{1, \\dots, n\\}} (-1)^{|J|-1} |\\bigcap_{j \\in J} A_j|$$

This formula allows us to calculate the cardinality of the union by accounting for the "over-counting" that occurs when we simply sum the cardinalities of the individual sets. When we add the sizes of individual sets, elements belonging to the intersection of two sets are counted twice; thus, we subtract the intersections of pairs. However, elements in the intersection of three sets were added three times, subtracted three times, and now must be added back once more. This alternating pattern continues until the intersection of all sets is reached.

## Key Terminology

* **Cardinality:** Denoted by $|A|$, this represents the number of elements contained in set $A$.
* **Union:** The set containing all elements that are in at least one of the sets $A_1, \\dots, A_n$.
* **Intersection:** The set containing all elements that are common to all sets in a specific collection.
* **Universal Set:** Often denoted by $S$, this is the set containing all elements of interest. When using PIE, we often seek the number of elements in $S$ that belong to *none* of the sets $A_i$. This is given by $|S| - |\\cup_{i=1}^n A_i|$.
* **Property:** In many PIE applications, we define $n$ properties $P_1, P_2, \\dots, P_n$. $A_i$ is defined as the set of elements in $S$ that possess property $P_i$. The principle then helps determine how many elements possess at least one property or, conversely, how many elements possess none of the properties.

## Purpose

The primary purpose of PIE is to solve counting problems that are otherwise intractable by direct enumeration. It is particularly powerful in:

1. **Derangements:** Calculating the number of permutations of a set where no element appears in its original position.
2. **Surjective Functions:** Counting the number of onto functions from a set of size $k$ to a set of size $n$.
3. **Number Theory:** Computing the Euler's totient function $\\phi(n)$, which counts integers up to $n$ that are relatively prime to $n$.
4. **Graph Theory:** Calculating the chromatic polynomial of a graph, which counts the number of ways to color vertices such that no two adjacent vertices share the same color.
5. **Probability:** Determining the probability of the union of multiple events, especially when the events are not mutually exclusive.

By systematically correcting for overlap, PIE transforms a complex "union" problem into a collection of simpler "intersection" problems.

## Fundamental Properties

The logic behind the principle relies on the binomial theorem and the indicator function. For any element $x \\in \\cup_{i=1}^n A_i$, let $m$ be the number of sets $A_i$ to which $x$ belongs ($1 \\le m \\le n$). 

In the summation $\\sum |A_i|$, the element $x$ is counted $\\binom{m}{1}$ times. 
In the subtraction $\\sum |A_i \\cap A_j|$, $x$ is subtracted $\\binom{m}{2}$ times. 
Continuing this, the total number of times $x$ is counted by the PIE formula is:

$$\\binom{m}{1} - \\binom{m}{2} + \\binom{m}{3} - \\dots + (-1)^{m-1} \\binom{m}{m}$$

From the binomial identity $\\sum_{k=0}^m \\binom{m}{k} (-1)^k = 0$, we have:

$$\\binom{m}{0} - \\binom{m}{1} + \\binom{m}{2} - \\dots + (-1)^m \\binom{m}{m} = 0$$
$$1 - (\\binom{m}{1} - \\binom{m}{2} + \\dots + (-1)^{m-1} \\binom{m}{m}) = 0$$

Thus, the sum equals 1. This proves that every element in the union is counted exactly once, regardless of how many sets it belongs to.

## Types & Variations

### The Complementary Principle
Often, it is easier to calculate the number of elements that satisfy *none* of the properties. If $S$ is the universal set, the number of elements with none of the properties is:

$$|S| - \\sum |A_i| + \\sum |A_i \\cap A_j| - \\dots$$

### Bonferroni's Inequalities
When $n$ is very large, computing the full PIE sum is computationally expensive. Bonferroni's Inequalities provide a way to bound the value by truncating the sum. The partial sums of the PIE formula alternate between being upper and lower bounds for the true value of the union.

### Generalization to Inclusion-Exclusion on Partially Ordered Sets
This is a more abstract version where one considers a Mobius inversion on a lattice. It provides a framework for PIE on structures more complex than simple power sets.

## How to Solve

To apply the Principle of Inclusion-Exclusion to a counting problem, follow this structured methodology:

| Step | Action | Description |
| :--- | :--- | :--- |
| 1 | Define the Universal Set | Determine the set $S$ of all possible outcomes without restrictions. |
| 2 | Identify Properties | Clearly define the properties $P_1, \\dots, P_n$ that you want to avoid or count. |
| 3 | Define Sets | Let $A_i$ be the set of elements in $S$ satisfying property $P_i$. |
| 4 | Compute Intersections | For every subset of properties, find the cardinality of the intersection of corresponding sets. |
| 5 | Apply PIE | Substitute the values into the alternating sum formula. |

### Worked Example: Derangements
A derangement is a permutation where no element is in its original position. Let $S$ be the set of all permutations of $\\{1, 2, 3, \\dots, n\\}$, so $|S| = n!$. Let $P_i$ be the property that element $i$ is in its original position.

For a single $i$, $|A_i| = (n-1)!$. There are $\\binom{n}{1}$ such sets.
For a pair $i, j$, $|A_i \\cap A_j| = (n-2)!$. There are $\\binom{n}{2}$ such intersections.
In general, for $k$ properties, the intersection size is $(n-k)!$, and there are $\\binom{n}{k}$ such intersections.

The number of permutations with at least one fixed point is:

$$\\sum_{k=1}^n (-1)^{k-1} \\binom{n}{k} (n-k)! = \\sum_{k=1}^n (-1)^{k-1} \\frac{n!}{k!(n-k)!} (n-k)! = \\sum_{k=1}^n (-1)^{k-1} \\frac{n!}{k!}$$

The number of derangements is $|S|$ minus this value:

$$n! - (n! \\sum_{k=1}^n \\frac{(-1)^{k-1}}{k!}) = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$$

## Summary

The Principle of Inclusion-Exclusion is a cornerstone of combinatorial mathematics. By providing a systematic method to manage over-counting in overlapping sets, it bridges the gap between simple addition and complex set theory problems. 

The strength of PIE lies in its universality; it applies to any finite collection of sets, provided that one can calculate the sizes of their intersections. While the computational complexity can grow exponentially ($2^n$ terms), its theoretical utility is unmatched in solving problems involving constraints, restricted permutations, and probabilistic event analysis. Mastery of PIE requires practice in identifying the correct properties to negate and proficiency in calculating the sizes of intersections, which often reduces to standard counting or binomial coefficient applications. It remains an essential tool for any quantitative practitioner dealing with discrete structures.`;export{e as default};