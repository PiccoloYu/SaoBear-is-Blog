---
path: leetcode_findUnsortedSubarray
date: 2019-11-22T02:50:22.061Z
tag:
  - leetcode
  - js
  - algorithm
title: leetcode （581. 最短无序连续子数组）
description: 581. 最短无序连续子数组
---
给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。

### 示例 1:

输入: 
```javascript
[2, 6, 4, 8, 10, 9, 15]
```
输出:
```javascript
 5
```
### 解释: 
你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。

### 说明:

输入的数组长度范围在 [1, 10,000]。
输入的数组可能包含重复元素 ，所以升序的意思是<=。

## 题解:
从左到右取最大值，并取出第一个需要调整的 最大值 的位置maxerr，

从右到左取最小值，并取出第一个需要调整的 最小值 的位置minerr ，

他们的差值便是 该最小数组的长度。

```javascript
    let findUnsortedSubarray = function (nums = []) {
      let max = 0;
      let min = 0;
      let maxerr = 0;
      let minerr = 0;

      for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
          max = nums[i]
        } else {
          if (nums[i] < max) {
            maxerr = i;
          }
          max = nums[i] > max ? nums[i] : max;
        }
      }

      for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
          min = nums[i]
        } else {
          if (nums[i] > min) {
            minerr = i;
          }
          min = nums[i] < min ? nums[i] : min;
        }
      }
      let sum = maxerr - minerr + 1;
      return sum > 1 ? sum : 0;
    };
```
