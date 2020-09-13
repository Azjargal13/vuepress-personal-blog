---
title:  "[Competitive coding] LC weekly contest 183 (task 1) "
date:   2020-04-05 11:21:00 +0900
categories: 
- Competitive coding
tag:
- leetcode
- contest
- array
- python3
---

After quite a long time, I've joined online competitive coding contest, Leetcode weekly contest runs every Sunday from 11.30pm to 13.00.

# Task 1: LC 1403. Minimum Subsequence in Non-Increasing Order (easy level)

## Problem statement
`LC-no 1403. Minimum Subsequence in Non-Increasing Order (easy level)`

Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

Example 1:
```
Input: nums = [4,3,10,9,8]
Output: [10,9] 
Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements. 
```
Example 2:
```
Input: nums = [4,4,7,6,7]
Output: [7,7,6] 
Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to returned in non-decreasing order.  
```
Example 3:
```
Input: nums = [6]
Output: [6]
```

Constraints:
- 1 <= nums.length <= 500
- 1 <= nums[i] <= 100

## Solution

As problem is related with comparison of sum of elem, so we can simply add up all the elements and keep compare other sum of elem which is not in the current subsequence. Please go ahead and check the algo.

### Algorithm
- sort given array in descending order (we get max elem at first, min elem at last of the array)
- calculate sum of all elements in the array
- create [] array for storing result array
- run loop for length of the array, that compares the sum by following condition
  - if sum of all elements is less than sum of elements in the result array, put the elem in the result array and subtract from sum of all elements.
  - else, break the loop and return result array.

### Implementation

Implementation is written in `python3`.

```py
def minSubsequence(nums: [int]) -> [int]:
    if len(nums) == 1:
        return nums
    else:
        nums.sort(reverse=True)
        s = sum(nums)
        res = []
        print(nums, s)
        for i in nums:
            # print(i)
            if s < sum(res):
                break
            s -= i
            print(s)
            res.append(i)
        return res

```

To check out the problem statement in LC, please visit here <https://leetcode.com/contest/weekly-contest-183/problems/minimum-subsequence-in-non-increasing-order/>