---
title:  "[Competitive coding] LC-1122: Relative sort array"
date:   2020-04-04 22:21:00 +0900
categories: 
- Competitive coding
tag:
- leetcode
- sort
- array
- python3
---

# [Leetcode] 1122 (easy level): Relative sort array

Recently I've developed much interest for competitive coding and leetcode is really good place to practice and learn from others as well.

So the problem statement of this the given task is basically to sort array.
I'll attach the problem statement here more detailed with example input etc. (taken from leetcode problems section).

### Problem statement

`LC-no 1122. Relative Sort Array (easy level)`

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in **ascending** order.

Example 1:
```
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
```
Constraints:
 - arr1.length, arr2.length <= 1000
 - 0 <= arr1[i], arr2[i] <= 1000
 - Each arr2[i] is distinct.
 - Each arr2[i] is in arr1.

Alright, I guess it is asking pretty straightforward solution.

### Solution

Before algorithm implementation, I want to explain what could be possible way to sort arr1 based on arr2 element position.

It clearly says that all elements of arr2 is surely exist in arr1. So first intention is to count all elements occurrence in arr1. After that once we know number of occurrence of each elem in arr1, we can simply append those number of occurrences of each elem in arr2. 

Additionally, we need to store elem of arr1 which is not present in arr2 in an another array. Then we sort them in ascending order and concatenate the both arrays.

#### Algorithm
 - Find out elems from all1 which is not present in arr2. Store them in seperate array, lets say we named it as `notInArr2[]`.
 - Sort `notInArr2[]` in ascending order.
 - Count occurrences of each elem in arr1, store them in a dictionary, or tuple, set or anything. Lets say we named it as `counter{}`.
 - Create [] for storing result, name can be `res[]`.
 - Run loop for each elem in arr2, in order to get elem occurrence count, search it by elem as key from `counter{}`. Then append those elem by their count, store them in `res[]`.
 - When loop finishes, return result by concatinating `notInArr2[]`, and `res[]`.
#### Implementation 

Below I am providing implementation that is written in `python3`.

```py
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        counter = dict((elem, arr1.count(elem)) for elem in set(arr1))
        notinArr2 = [elem for elem in arr1 if elem not in arr2]
        notinArr2.sort()
        
        res=[]
        for i in arr2:
            res = res + [i] * counter[i]
        
        return res + notinArr2
```
`
Runtime: 56ms, 
Memory: 14mB
`

Notice:
Your runtime beats 12.71 % of python3 submissions.

Well, this solution got accepted, however it is not optimized yet. After optimizing the algorithm, I will update the solution.

To check out the problem statement, please visit here:
<https://leetcode.com/problems/relative-sort-array/>
