---
title: "Useful CPP algorithms and Data Structures"
description: "Competitive programming heavily relies on efficient algorithms and data structures. While you can implement many of these from scratch, the C++ Standard Template Library (**STL**) provides a rich collection of highly optimized and widely used built-in components. Mastering them is crucial for speed and correctness in contests."
pubDate: "Jun 01 2025"
---

## I. Data Structures (C++ STL Containers)

These are fundamental building blocks for organizing data.

1.  **`std::vector` (Dynamic Array)**
    * **Description:** A sequence container that encapsulates dynamic size arrays. It can grow or shrink as needed.
    * **Use Cases:**
        * Storing lists of elements where you need dynamic resizing.
        * Implementing stacks or queues (though `std::stack` and `std::queue` are more specialized).
        * Adjacency lists in graph representations.
    * **Common Operations:** `push_back()`, `pop_back()`, `size()`, `empty()`, `clear()`, `begin()`, `end()`, `[]` (for element access).

2.  **`std::string` (String)**
    * **Description:** A sequence of characters. It handles memory management automatically.
    * **Use Cases:**
        * Working with text data.
        * Parsing inputs.
        * String manipulation problems.
    * **Common Operations:** `length()`, `size()`, `empty()`, `append()`, `substr()`, `find()`, `[]` (for character access).

3.  **`std::pair` and `std::tuple`**
    * **Description:**
        * **`std::pair`**: A simple structure holding two heterogeneous objects.
        * **`std::tuple`**: A fixed-size collection of heterogeneous values.
    * **Use Cases:**
        * **`pair`**: Storing coordinates (x, y), key-value pairs (e.g., in `std::map`), returning multiple values from a function.
        * **`tuple`**: More than two values where a custom struct might be overkill.

4.  **`std::set` (Ordered Set)**
    * **Description:** An associative container that stores unique elements in sorted order. Implemented using a self-balancing binary search tree (usually a Red-Black Tree).
    * **Use Cases:**
        * Maintaining a collection of unique elements.
        * Efficiently checking for element presence (`count()` or `find()`).
        * Finding minimum/maximum elements (`*begin()`, `*rbegin()`).
        * Problems requiring sorted unique elements.
    * **Common Operations:** `insert()`, `erase()`, `find()`, `count()`, `size()`, `begin()`, `end()`, `lower_bound()`, `upper_bound()`.

5.  **`std::map` (Ordered Map/Dictionary)**
    * **Description:** An associative container that stores unique key-value pairs in sorted order of keys. Implemented using a self-balancing binary search tree.
    * **Use Cases:**
        * Storing frequency counts of elements.
        * Mapping one type of data to another.
        * Graph problems where nodes are non-integer types (e.g., strings).
    * **Common Operations:** `insert()`, `erase()`, `find()`, `count()`, `size()`, `[]` (for element access/insertion), `begin()`, `end()`, `lower_bound()`, `upper_bound()`.

6.  **`std::unordered_set` and `std::unordered_map` (Hash Table based)**
    * **Description:**
        * **`std::unordered_set`**: Stores unique elements in no particular order, providing average constant time complexity for insertions, deletions, and lookups.
        * **`std::unordered_map`**: Stores unique key-value pairs, providing average constant time complexity for operations.
    * **Use Cases:**
        * When order doesn't matter and average $O(1)$ complexity is preferred over $O(\log N)$ of ordered containers.
        * Frequency counting where keys are numerous.
        * Hashing problems.
    * **Common Operations:** Similar to `set`/`map` but with average $O(1)$ complexity.

7.  **`std::stack` (LIFO - Last-In, First-Out)**
    * **Description:** A container adapter that provides stack functionality. By default, it's implemented on top of `std::deque`.
    * **Use Cases:**
        * Balancing parentheses.
        * DFS (Depth-First Search) iterative implementation.
        * Evaluating expressions (postfix, infix).
    * **Common Operations:** `push()`, `pop()`, `top()`, `empty()`, `size()`.

8.  **`std::queue` (FIFO - First-In, First-Out)**
    * **Description:** A container adapter that provides queue functionality. By default, it's implemented on top of `std::deque`.
    * **Use Cases:**
        * BFS (Breadth-First Search) implementation.
        * Simulations of queues.
        * Scheduling tasks.
    * **Common Operations:** `push()`, `pop()`, `front()`, `back()`, `empty()`, `size()`.

9.  **`std::priority_queue` (Max-Heap by default)**
    * **Description:** A container adapter that provides a max-heap by default (largest element is always at the top). Can be customized to be a min-heap.
    * **Use Cases:**
        * Dijkstra's algorithm (for shortest paths).
        * Prim's algorithm (for Minimum Spanning Tree).
        * Finding $K$ largest/smallest elements.
    * **Common Operations:** `push()`, `pop()`, `top()`, `empty()`, `size()`.
    * **Min-Heap Example:** `std::priority_queue<int, std::vector<int>, std::greater<int>> min_pq;`

10. **`std::deque` (Double-ended Queue)**
    * **Description:** A double-ended queue that allows efficient insertion and deletion at both ends.
    * **Use Cases:**
        * Sliding window maximum/minimum problems.
        * Implementing BFS when you need to add elements to the front (e.g., 0-1 BFS).
        * A more flexible alternative to `std::vector` if frequent insertions/deletions at both ends are needed.
    * **Common Operations:** `push_front()`, `push_back()`, `pop_front()`, `pop_back()`, `front()`, `back()`, `size()`, `empty()`, `[]`.

---

## II. Algorithms (C++ STL `<algorithm>` and `<numeric>`)

These functions operate on ranges of elements, often provided by containers.

1.  **Sorting:**
    * **`std::sort(first, last)`**: Sorts elements in a range in ascending order. $O(N \log N)$ average.
    * **`std::stable_sort(first, last)`**: Sorts while preserving the relative order of equivalent elements.
    * **`std::partial_sort(first, middle, last)`**: Sorts the first `middle - first` elements of a range.
    * **`std::nth_element(first, nth, last)`**: Rearranges elements such that the element at the `nth` position is the one that would be in that position if the whole range was sorted. Average $O(N)$.

2.  **Searching:**
    * **`std::binary_search(first, last, val)`**: Checks if `val` exists in a **sorted** range. Returns boolean. $O(\log N)$.
    * **`std::lower_bound(first, last, val)`**: Returns an iterator to the first element *not less than* `val` in a **sorted** range. $O(\log N)$.
    * **`std::upper_bound(first, last, val)`**: Returns an iterator to the first element *greater than* `val` in a **sorted** range. $O(\log N)$.
    * **`std::find(first, last, val)`**: Finds the first occurrence of `val` in an unsorted range. $O(N)$.
    * **`std::find_if(first, last, predicate)`**: Finds the first element satisfying a given predicate. $O(N)$.

3.  **Permutations:**
    * **`std::next_permutation(first, last)`**: Generates the next lexicographically greater permutation. Useful for iterating through all permutations. Returns boolean.
    * **`std::prev_permutation(first, last)`**: Generates the previous lexicographically smaller permutation.

4.  **Min/Max Elements:**
    * **`std::min_element(first, last)`**: Returns an iterator to the smallest element in a range. $O(N)$.
    * **`std::max_element(first, last)`**: Returns an iterator to the largest element in a range. $O(N)$.
    * **`std::min(a, b)`**, **`std::max(a, b)`**: Returns the minimum/maximum of two values. $O(1)$.

5.  **Numeric Operations (from `<numeric>` header):**
    * **`std::accumulate(first, last, initial_sum)`**: Computes the sum of elements in a range. Can also perform other binary operations. $O(N)$.
    * **`std::gcd(a, b)`** (C++17): Computes the greatest common divisor of two integers.
    * **`std::lcm(a, b)`** (C++17): Computes the least common multiple of two integers.

6.  **Other Useful Algorithms:**
    * **`std::reverse(first, last)`**: Reverses the order of elements in a range.
    * **`std::unique(first, last)`**: Removes consecutive duplicate elements from a **sorted** range (returns an iterator to the new end, actual size needs to be adjusted).
    * **`std::count(first, last, val)`**: Counts occurrences of a specific value.
    * **`std::count_if(first, last, predicate)`**: Counts elements satisfying a predicate.
    * **`std::fill(first, last, val)`**: Fills a range with a specified value.
    * **`std::iota(first, last, value)`** (from `<numeric>`): Fills a range with sequentially increasing values starting from `value`.
    * **`std::merge(first1, last1, first2, last2, result_first)`**: Merges two sorted ranges into a single sorted range.
    * **`std::copy(first, last, result_first)`**: Copies elements from one range to another.

---

## III. Common Mathematical Functions

While not strictly "data structures" or "algorithms" in the complex sense, these built-in mathematical functions are indispensable:

* **`std::abs()`**: Absolute value (for integer and floating-point types).
* **`std::sqrt()`**: Square root.
* **`std::pow()`**: Power function ($x^y$).
* **`std::min()`, `std::max()`**: Minimum/maximum of two values.
* **`__gcd()`** (GNU extension, generally available): Greatest Common Divisor. In C++17, **`std::gcd()`**.
* **`ceil()`**, **`floor()`**: Ceiling and floor functions.

---

## IV. Beyond Built-in (Conceptual but Crucial)

While not strictly "built-in" as a single function call, many common competitive programming problems rely on algorithms that you can efficiently construct using the built-in data structures. Understanding these is essential for problem-solving.

* **Graph Traversal:**
    * **BFS (Breadth-First Search)** - uses `std::queue`
    * **DFS (Depth-First Search)** - uses `std::stack` or recursion
* **Dynamic Programming:** Often uses `std::vector` (for DP table) and `std::max`/`std::min` extensively.
* **Binary Search on Answer:** Leverages `std::binary_search` or manual binary search logic.
* **Two Pointers Technique:** Often used with `std::vector` or arrays.

---

### Tips for Competitive Programming:

* **`#include <bits/stdc++.h>`**: This is a common header in competitive programming environments that includes almost all standard library headers, saving time. (Note: This is not standard C++, but is widely supported in contest systems).