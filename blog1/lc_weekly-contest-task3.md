---
title:  "[Competitive coding] LC weekly contest 183 (task 3) "
date:   2020-04-05 13:21:00 +0900
categories: 
- [Competitive coding]
tag:
- leetcode
- contest
- array
- python3
---
This post is continuation of LC weekly contest 183, task 1 is published [here]("../../lc-weekly-contest-task1.md"), and task 2 is published [here]("../../lc-weekly-contest-task2.md).

# Task3: 1405. Longest Happy String (medium level)

## Problem statement
`LC-no 1405. Longest Happy String (medium level)`

A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

Given three integers a, b and c, return any string s, which satisfies following conditions:
- s is happy and longest possible.
- s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
- s will only contain 'a', 'b' and 'c' letters.
If there is no such string s return the empty string "".

Example 1:
```
Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
```

Example 2:
```
Input: a = 2, b = 2, c = 1
Output: "aabbc"
```
Example 3:
```
Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It's the only correct answer in this case.
```

Constraints:
- 0 <= a, b, c <= 100
- a + b + c > 0

## Solution

This problem can be solved by Greedy approach, because we are given set of constraints in order to find max length of string (longest happy string).

So to apply Greedy method, we need to first decide on what specific selection procedure we'll filtering out the potential result? Go ahead and check algorithm section below.



### Algorithm
- create an array which stores all `a`,`b`,`c` with its frequency number given as an input.
- create another array for storing result string
- sort the array by its value (freq number) in descending order (min freq will be at first)
- run a loop with length of first elem's value (freq number) of the array with following conditions
  -  if result array length is greater than or equal to 2 and its last two elem are same and last elem is same as first elem of all elem array
     -  store the key of elem in result array, and go to next elem
     -  if it reaches the freq of next elem is 0, break the loop and return result string
  - else, store first elem's key, 
  - keep sort all elem array in descending order 
### Implementation

Implementation is written in `python3`.

```py
def longestDiverseString(a: int, b: int, c: int) -> str:
    res = []
    # by freq
    all_val = [['a', a], ['b', b], ['c', c]]
    
    # sort all_val by its value
    all_val.sort(key=lambda el: -el[1])
    # [['c', 7], ['b', 1], ['a', 1]]

    while(all_val[0][1]):
        if len(res) >= 2 and res[-1] == res[-2] and res[-1] == all_val[0][0]:
            if all_val[1][1] == 0:
                break
            # go to next array
            all_val[1][1] -= 1
            res.append(all_val[1][0])
        else:
            print(all_val[0][1])
            all_val[0][1] -= 1
            print(all_val[0][1])
            res.append(all_val[0][0])
        all_val.sort(key=lambda x: -x[1])
        # [['c', 7], ['b', 1], ['a', 0]]

    return "".join(res)
```

To check out the problem statement in LC, please visit here <https://leetcode.com/contest/weekly-contest-183/problems/longest-happy-string/>.