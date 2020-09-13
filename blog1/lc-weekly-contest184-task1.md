---
title:  "[Competitive coding] LC weekly contest 184 (task 1) "
date:   2020-04-12 11:21:00 +0900
categories: 
- Competitive coding
tag:
- leetcode
- contest
- array
- python3
---


# Task 1: LC 1408. String Matching in an Array (Easy level)

## Problem statement
` LC 1408. String Matching in an Array (Easy level)`

Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].
Example 1:
```
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
```
Example 2:
```
Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".
```
Example 3:
```
Input: words = ["blue","green","bu"]
Output: []
```

Constraints:
- 1 <= words.length <= 100
- 1 <= words[i].length <= 30
- words[i] contains only lowercase English letters.
- It's guaranteed that words[i] will be unique.

## Solution

The problem is related to substring, so we can simply compare given string is substring of any string. For that we need two loops, one for running each words of given string array, and another loop for keep comparing whether the string is substring of any string.

### Algorithm
- create an empty res[].
- run for loop of each string in array
- run another for loop for again each string of array
- compare whether index elem of inner loop and index elem of outer loop is different (same words are not substring of each other) 
  - if not same, check whether elem of outer loop is substring of elem of inner loop. If the string is substring, store to res[] and break the loop.

### Implementation

Implementation is written in `python3`.

```py
def stringMatching(words: List[str]) -> List[str]:
    ans = []
    for i, x in enumerate(words):
        for j, y in enumerate(words):
            if i != j:
                if x in y:
                    ans.append(x)
                    break
    return ans
```

To check out the problem statement in LC, please visit here <https://leetcode.com/contest/weekly-contest-184/problems/string-matching-in-an-array/>