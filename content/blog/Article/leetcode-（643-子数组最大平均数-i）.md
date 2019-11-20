---
path: leetcode_findMaxAverage
date: 2019-11-20T04:17:31.135Z
tag:
  - leetcode
  - js
  - algorithm
title: leetcode （643.子数组最大平均数 I）
description: 643.子数组最大平均数 I
---
给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

### 示例 1:

输入:
``` 
[1,12,-5,-6,50,3], k = 4
```
输出: 
```
12.75
```

解释:

最大平均数 
```
(12-5-6+50)/4 = 51/4 = 12.75
```

### 注意:

1 <= k <= n <= 30,000。
所给数据范围 [-10,000，10,000]。

## 题解：
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 先求出起始前 k 位的 sum，
 * 然后 每向后移动一位 就用sum 减去最开始第一位的的值 [i - k]
 * 加上 最后一位的 下一位的值
 * 减去上一次的首段再加上新的尾部来计算
 */
    let findMaxAverage = (nums = [], k = 0) => {
      let sum = 0,
        max = 0,
        i = 0;
      while (i < k) {
        sum += nums[i];
        i++;
      }
      max = sum;

      for (let i = k; i < nums.length; i++) {
        max = max - nums[i - k] + nums[i];
        sum = Math.max(max, sum)
      }
      return sum / k
    };
```
