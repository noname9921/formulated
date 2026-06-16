var e=`# Combinatorics with Repetition (Stars and Bars)

## Definition

The "Stars and Bars" method is a fundamental combinatorial technique used to determine the number of ways to distribute $n$ identical items into $k$ distinct bins. This problem is equivalent to finding the number of non-negative integer solutions to the linear equation:

$$x_1 + x_2 + \\dots + x_k = n$$

where $x_i \\ge 0$ for all $i \\in \\{1, 2, \\dots, k\\}$. The term "Stars and Bars" refers to the visual representation of the problem: we represent the $n$ identical items as stars ($\\star$) and the dividers required to create $k$ distinct groups as bars ($|$). To partition $n$ stars into $k$ bins, we need exactly $k-1$ bars. The total number of symbols in our arrangement is $n + (k - 1)$. Choosing the positions for the $k-1$ bars among the $n + k - 1$ total positions uniquely determines the distribution.

## Key Terminology

To master this method, one must understand the following core concepts:

- **Identical Items ($n$):** The objects being distributed are indistinguishable. Swapping two items does not create a new configuration.
- **Distinct Bins ($k$):** The containers or variables are unique. Even if a bin is empty, its identity is preserved (e.g., "Bin A" is different from "Bin B").
- **Stars ($\\star$):** A graphical symbol used to represent the quantity $n$.
- **Bars ($|$):** A separator placed between stars to delineate bin boundaries.
- **Non-negative Integer Solution:** A solution where $x_i \\in \\{0, 1, 2, \\dots\\}$.
- **Positive Integer Solution:** A solution where $x_i \\in \\{1, 2, 3, \\dots\\}$. This is often called the "restricted" case.

## Purpose

The primary utility of the Stars and Bars method is to solve counting problems that involve multisets or the allocation of resources. In mathematics, this helps compute the number of ways to choose $n$ elements from a set of size $k$ where repetition is allowed. 

Consider a scenario where you are buying 10 pieces of fruit from a shop that sells apples, oranges, and bananas. Because the pieces of fruit of the same type are considered identical, we are not interested in the order of selection, but rather the count of each type. This is a classic application of distributing $n=10$ items into $k=3$ categories. The method provides a direct formula, bypassing the need for exhaustive listing or complex inclusion-exclusion principles in simple cases.

## Fundamental Properties

The power of the Stars and Bars theorem lies in the binomial coefficient. If we have $n$ stars and $k-1$ bars, the total number of positions is $N = n + k - 1$. The number of ways to arrange these is the number of ways to choose $k-1$ positions for the bars:

$$\\binom{n+k-1}{k-1} = \\frac{(n+k-1)!}{n!(k-1)!}$$

Equivalently, this is the same as choosing $n$ positions for the stars:

$$\\binom{n+k-1}{n}$$

These two expressions are equal due to the symmetry property of binomial coefficients, $\\binom{N}{R} = \\binom{N}{N-R}$.

### Algebraic Equivalence
The problem of non-negative integer solutions $x_1 + \\dots + x_k = n$ maps perfectly to the multiset coefficient $\\left(\\!\\binom{k}{n}\\!\\right)$, which denotes the number of $n$-element multisets chosen from a set of $k$ elements.

| Variable | Significance |
| :--- | :--- |
| $n$ | Total count of identical items |
| $k$ | Total count of distinct bins |
| $k-1$ | Total count of dividers (bars) |
| Total Symbols | $n + k - 1$ |
| Formula | $\\binom{n+k-1}{k-1}$ |

## Types & Variations

Combinatorial problems often come with additional constraints that require slight modifications to the standard Stars and Bars formula.

### 1. Positive Integer Solutions
If we require $x_i \\ge 1$, no bin can be empty. We can satisfy this by pre-allocating one star to each of the $k$ bins. We are left with $n - k$ stars to distribute freely. The formula becomes:

$$\\binom{(n-k) + k - 1}{k - 1} = \\binom{n-1}{k-1}$$

### 2. Lower Bound Constraints
If we have a constraint $x_i \\ge a_i$, we define $y_i = x_i - a_i$, where $y_i \\ge 0$. The equation becomes:
$(y_1 + a_1) + (y_2 + a_2) + \\dots + (y_k + a_k) = n$
Substituting $n' = n - \\sum a_i$, the problem reverts to the standard form:
$y_1 + y_2 + \\dots + y_k = n'$

### 3. Upper Bound Constraints
If we have a constraint $x_i \\le c_i$, we must use the Principle of Inclusion-Exclusion. We calculate the total unrestricted solutions and subtract the cases where one or more $x_i > c_i$.

## How to Solve

Follow this structured approach to tackle any Stars and Bars problem:

**Step 1: Identify $n$ and $k$.**
Clearly distinguish between the items being distributed ($n$) and the target containers ($k$). If the items are distinct, Stars and Bars is the wrong tool; use permutations or powers ($k^n$).

**Step 2: Check for constraints.**
Are the bins allowed to be empty? If the problem states "each container must have at least one item," use the positive integer variation $\\binom{n-1}{k-1}$.

**Step 3: Normalize the equation.**
If there are lower bounds (e.g., "Bin 1 must have at least 3 items"), subtract the required items from the total $n$ first. Let $n_{new} = n - \\text{required}$.

**Step 4: Apply the binomial formula.**
Plug $n_{new}$ and $k$ into $\\binom{n_{new}+k-1}{k-1}$.

### Illustrative Example: Distributing Candy
Suppose you have 7 identical candies to distribute among 3 children (Alice, Bob, and Charlie). How many ways can you distribute them?

1. $n = 7, k = 3$.
2. Constraint: None mentioned, so non-negative.
3. Use $\\binom{n+k-1}{k-1} = \\binom{7+3-1}{3-1} = \\binom{9}{2}$.
4. Calculation: $\\frac{9 \\times 8}{2 \\times 1} = 36$.

There are 36 distinct ways to distribute the candy.

## Summary

The Stars and Bars method is a robust combinatorial framework for distributing identical items into distinct bins. By abstracting the distribution process into a sequence of stars and bars, we reduce complex distribution problems to the selection of positions within a sequence. 

The core takeaway is the versatility of the formula $\\binom{n+k-1}{k-1}$. When faced with constraints, the strategy of "pre-allocating" items allows for the reduction of restricted problems into the standard form. Whether calculating the number of ways to select fruit, allocating tasks to workers, or determining the number of integer solutions to an equation, this method remains one of the most elegant tools in the combinatorial toolkit. Remembering that $n$ represents the "stuff" and $k$ represents the "where" is the key to successfully applying this logic to any discrete mathematics problem.`;export{e as default};