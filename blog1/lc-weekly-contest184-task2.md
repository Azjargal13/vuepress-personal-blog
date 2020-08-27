---
title:  "[Competitive coding] LC weekly contest 184 (task 2) "
date:   2020-04-12 11:21:00 +0900
categories: 
- [Competitive coding]
tag:
- leetcode
- contest
- array
- python3
---

This post is continuation of LC weekly contest 184, task 1 is published [here]("../../lc-weekly-contest184-task1.md").

# Task 2: 1409. Queries on a Permutation With Key (medium level)

## Problem statement
`LC-no 1409. Queries on a Permutation With Key (medium level)`

Given the array queries of positive integers between 1 and m, you have to process all queries[i] (from i=0 to i=queries.length-1) according to the following rules:

In the beginning, you have the permutation P=[1,2,3,...,m].
For the current i, find the position of queries[i] in the permutation P (indexing from 0) and then move this at the beginning of the permutation P. Notice that the position of queries[i] in P is the result for queries[i].
Return an array containing the result for the given queries.
Example 1:
```
Input: queries = [3,1,2,1], m = 5
Output: [2,1,2,1] 
Explanation: The queries are processed as follow: 
For i=0: queries[i]=3, P=[1,2,3,4,5], position of 3 in P is 2, then we move 3 to the beginning of P resulting in P=[3,1,2,4,5]. 
For i=1: queries[i]=1, P=[3,1,2,4,5], position of 1 in P is 1, then we move 1 to the beginning of P resulting in P=[1,3,2,4,5]. 
For i=2: queries[i]=2, P=[1,3,2,4,5], position of 2 in P is 2, then we move 2 to the beginning of P resulting in P=[2,1,3,4,5]. 
For i=3: queries[i]=1, P=[2,1,3,4,5], position of 1 in P is 1, then we move 1 to the beginning of P resulting in P=[1,2,3,4,5]. 
Therefore, the array containing the result is [2,1,2,1].  
```
Example 2:
```
Input: queries = [4,1,2,2], m = 4
Output: [3,1,2,0]
```
Example 3:
```
Input: queries = [7,5,5,8,3], m = 8
Output: [6,5,0,7,5]
```

Constraints:
- 1 <= m <= 10^3
- 1 <= queries.length <= m
- 1 <= queries[i] <= m
  
## Solution

As problem is related to array manipulation. All we need to do is based on the position of query item index (given list), find the index of same elem from permutation P arrays and shift the value to the beginning of the P permutation array.

I think this can be solved much simpler way also.
### Algorithm
- create empty res[] for storing result value
- create permutation P array that stores 1 to m.
- run loop for each item of given query list (outer loop)
  - run loop for each of permutation item in order to find given query item's index
    - if permutation item value is same as given query item, then store the position in res[]
    - store permutation item value in temp var
    - remove permutation item value from P array
    - insert the temp value in 0th index (the first index) of P array.


### Implementation

Implementation is written in `python3`.

```py
def processQueries(self, queries: List[int], m: int) -> List[int]:
    p = []
    for i in range(1, m+1):
        p.append(i)
    ret = []
    for i in queries:
        for k in range(len(p)):
            if p[k] == i:
                ret.append(k)
                a = p[k]
                p.remove(p[k])
                p.insert(0, a)
    return ret

```

The way of p[k]'s index finding can be optimize further.


To check out the problem statement in LC, please visit here <https://leetcode.com/contest/weekly-contest-184/problems/queries-on-a-permutation-with-key/>