---
title:  "[Competitive coding] LC weekly contest 183 (task 2) "
date:   2020-04-05 12:21:00 +0900
categories: 
- Competitive coding
tag:
- leetcode
- contest
- array
- python3
---
This post is continuation of LC weekly contest 183, task 1 is published [here]("../../lc-weekly-contest-task1.md").

# Task2: 1404. Number of Steps to Reduce a Number in Binary Representation to One (medium level)

## Problem statement
`LC-no 1404. Number of Steps to Reduce a Number in Binary Representation to One (medium level)`

Given a number s in their binary representation. Return the number of steps to reduce it to 1 under the following rules:
- If the current number is even, you have to divide it by 2.
- If the current number is odd, you have to add 1 to it.

It's guaranteed that you can always reach to one for all testcases.

Example 1:
```
Input: s = "1101"
Output: 6
Explanation: "1101" corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14. 
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.  
Step 5) 4 is even, divide by 2 and obtain 2. 
Step 6) 2 is even, divide by 2 and obtain 1.  
```

Example 2:
```
Input: s = "10"
Output: 1
Explanation: "10" corressponds to number 2 in their decimal representation.
Step 1) 2 is even, divide by 2 and obtain 1.  
```
Example 3:
```
Input: s = "1"
Output: 0
```

Constraints:
- 1 <= s.length <= 500 
- s consists of characters '0' or '1' 
- s[0] == '1'

## Solution

I think this problem statement is pretty straightforward, simply asking us to convert given binary string into decimal integer and reach to 1 by applying those constraints.

### Algorithm
 - convert binary string to decimal integers (can be use built-in func, or implement by yourself)
 - run loop till the decimal integer equal to 1 with following conditions
   - if the integer is odd, add + 1
   - if the integer is even, divide by 2

### Implementation

Implementation is written in `python3`.

```py
def numSteps(s: str) -> int:
    integ = 0
    # can use built-in int(binary, 2)
    # I've written my own helper function to convert from bin to int
    
    #dec = int(s, 2)
    leng = len(s)
    
    # helper for converting binary to integer
    for i in range(leng):
        integ += int(s[leng-1-i])*pow(2, i)
    print(integ)

    counter = 0
    while (integ != 1):
        if integ % 2 == 0:
            integ //= 2     # beware that it should be integer, not floating points (/)
        else:
            integ += 1
        counter += 1
    print(counter)
```

`Runtime: 36 ms, Memory Usage: 13.9 MB`

To check out the problem statement in LC, please visit here <https://leetcode.com/contest/weekly-contest-183/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/>.