var e=`# Stochastic Processes and Discrete-Time Markov Chains

## Definition

A stochastic process is a mathematical object defined as a collection of random variables $\\{X_t\\}_{t \\in T}$ representing the evolution of some system over time. In this framework, $T$ denotes the index set, which can be discrete (typically representing steps $0, 1, 2, \\dots$) or continuous (representing time intervals $[0, \\infty)$). The state space $S$ is the set of all possible values that the random variables $X_t$ can take. When the index set $T$ is discrete and the state space $S$ is countable, the process is referred to as a Discrete-Time Markov Chain (DTMC).

At the heart of a DTMC lies the Markov Property, often described as "memorylessness." Formally, a sequence of random variables $\\{X_0, X_1, X_2, \\dots\\}$ is a Markov chain if for all $n \\geq 0$ and all states $i_0, i_1, \\dots, i_n, i_{n+1} \\in S$:

$$P(X_{n+1}=i_{n+1}|X_n=i_n, X_{n-1}=i_{n-1}, \\dots, X_0=i_0) = P(X_{n+1}=i_{n+1}|X_n=i_n)$$

This equality signifies that the conditional probability distribution of future states depends solely upon the current state and is independent of the past history of the system.

## Key Terminology

To analyze stochastic processes, we must define the vocabulary used to describe their structure and behavior:

1. **State Space ($S$):** The set of all possible outcomes for the process. If $|S|$ is finite, the process is a finite-state Markov chain.
2. **Transition Probability:** The probability of moving from state $i$ at time $n$ to state $j$ at time $n+1$, denoted $p_{ij}^{(n)} = P(X_{n+1}=j|X_n=i)$.
3. **Transition Matrix ($P$):** For a time-homogeneous chain (where $p_{ij}$ does not change with time), we define a square matrix where the entry in row $i$ and column $j$ is the transition probability $p_{ij}$. The matrix is stochastic, meaning all rows sum to $1$.
4. **Stationary Distribution ($\\pi$):** A probability distribution vector $\\pi$ such that $\\pi P = \\pi$, indicating a long-term equilibrium where the probability of being in a state remains constant over time.
5. **Irreducibility:** A chain is irreducible if it is possible to reach any state from any other state in a finite number of steps.
6. **Periodicity:** A state $i$ has period $d$ if any return to $i$ must occur in multiples of $d$ steps. A state is aperiodic if $d=1$.

## Purpose

The primary utility of Markov Chains is to model systems that undergo transitions between discrete states based on probabilistic rules. Because they encapsulate the "memoryless" property, they provide an efficient framework for predicting system dynamics without requiring the storage of entire historical trajectories.

They are extensively applied in:
- **Queueing Theory:** Modeling the number of customers waiting in a system.
- **Finance:** Predicting asset price movements (e.g., the Random Walk hypothesis).
- **Computer Science:** PageRank algorithms utilize Markov chains to determine the importance of websites based on transition probabilities between hyperlinked pages.
- **Biology:** Modeling the movement of molecules or the progression of genetic mutations.

## Fundamental Properties

The behavior of a DTMC is governed by its matrix structure. Understanding these properties allows us to derive insights about the system's long-term behavior.

### The Chapman-Kolmogorov Equations
To find the probability of moving from state $i$ to $j$ in $n+m$ steps, we decompose the path:

$$p_{ij}^{(n+m)} = \\sum_{k \\in S} p_{ik}^{(n)} p_{kj}^{(m)}$$

In matrix form, this is expressed simply as $P^{n+m} = P^n \\cdot P^m$. This demonstrates that the $n$-step transition probability is merely the matrix $P$ raised to the power of $n$.

### Classification of States
States are categorized based on their accessibility and recurrence:
- **Recurrent State:** A state $i$ is recurrent if, starting at $i$, the probability of returning to $i$ is 1.
- **Transient State:** A state $i$ is transient if there is a non-zero probability that the process will never return to $i$.
- **Absorbing State:** A state $i$ is absorbing if $p_{ii} = 1$, meaning once the process enters this state, it can never leave.

## Types & Variations

1. **Time-Homogeneous Chains:** The transition probabilities $p_{ij}$ are constant across time. Most introductory theory focuses on these chains.
2. **Time-Inhomogeneous Chains:** The probabilities $p_{ij}^{(n)}$ depend on the time step $n$. These are significantly more complex and often require time-dependent differential or difference equations.
3. **Absorbing Markov Chains:** Chains containing at least one absorbing state and at least one transient state. These are used to calculate the "time to absorption" or "probability of absorption" into a specific state.
4. **Ergodic Chains:** A chain that is both irreducible and aperiodic. Ergodic chains possess a unique stationary distribution to which the process converges regardless of the initial state.

## How to Solve

Solving a Markov chain typically involves finding either the transient behavior (state probabilities at a specific time $n$) or the limiting behavior (steady-state probabilities).

### 1. Calculating $n$-step Probabilities
Given an initial probability distribution vector $\\alpha^{(0)}$, the distribution after $n$ steps is:
$$\\alpha^{(n)} = \\alpha^{(0)} P^n$$
For large $n$, calculating $P^n$ can be done efficiently via spectral decomposition (eigenvalue decomposition), provided $P$ is diagonalizable.

### 2. Solving for the Stationary Distribution
To find the steady state $\\pi = [\\pi_1, \\pi_2, \\dots, \\pi_k]$, we solve the system of linear equations:
$$\\pi P = \\pi$$
Subject to the normalization constraint:
$$\\sum_{i=1}^k \\pi_i = 1$$
This constraint ensures that $\\pi$ represents a valid probability distribution.

### 3. Absorbing Chains Analysis
For absorbing chains, we reorder the transition matrix into a canonical form:
$$P = \\begin{pmatrix} Q & R \\\\ 0 & I \\end{pmatrix}$$
Where $Q$ represents transitions between transient states and $R$ represents transitions from transient to absorbing states. The fundamental matrix $N = (I - Q)^{-1}$ provides the expected number of steps spent in each transient state before absorption. The matrix $B = NR$ gives the probabilities of being absorbed into specific absorbing states.

Below is a representation of a standard growth-decay trend often found in stochastic simulation modeling. The graph plots $f(x) = e^{-0.5x} \\cos(2x)$, illustrating how a process might oscillate while converging toward an equilibrium state.

\`\`\`graph
\\exp(-0.5 * x) * \\cos(2 * x)
\`\`\`

## Summary

Stochastic processes, specifically Discrete-Time Markov Chains, offer a rigorous mathematical language for describing systems that evolve according to probabilistic laws. By relying on the Markov Property, we simplify the complexity of temporal evolution into transition matrices and stationary distributions. The power of this approach lies in the transition from local dynamics—individual step probabilities—to global predictions about system stability, absorption, and long-term equilibrium. Mastery of these concepts, from the Chapman-Kolmogorov equations to the inversion of the fundamental matrix, provides the necessary toolkit for modeling uncertainty in diverse fields ranging from physics to modern data science. Whether analyzing finite systems or observing the limiting behavior of infinite state spaces, Markov chains remain a cornerstone of applied probability.`;export{e as default};