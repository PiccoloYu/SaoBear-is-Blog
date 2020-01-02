---
path: leetcode_canThreePartsEqualSum
date: 2020-01-02T08:14:20.133Z
tag:
  - leetcode
  - js
  - algorithm
title: leetcode （1013. 将数组分成和相等的三个部分）
description: 1013. 将数组分成和相等的三个部分
---
给定一个整数数组 A，只有我们可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果我们可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

 

### 示例 1：
```
输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
```
### 示例 2：
```
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
```
### 示例 3：
```
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
````

### 题解
思路：三个值相等即这个值为数组和的三分之一

例如 [0,2,1,-6,6,-7,9,1,2,0,1]

平均值为 3 ,我们开始遍历数组求子项和

第一个和为 0

第二个和为 0 + 2 = 2

第三个和为 0 + 2 + 1 = 3 与平均值相等，我们得到第一个数组

第四个和我们回到0开始 -6

第五个和 -6 + 6 = 0

第六个 。。。

如此类推，当 count 等于 3 的时候就可以得到 true 的结果了，否则遍历完整个数组 count 都小于 3，返回 false。

可能你会想到 如果没有遍历完 count 就已经等于 3 呢，不用怕，因为如果 count 等于三之后，后面还有项的话，他们的和肯定是等于0。可以归到第三部分去。


```javascript
/**
 * @param {number[]} A
 * @return {boolean}
 */
    let canThreePartsEqualSum = (A) => {
      let posval = 0;

      let count = 0;
    let sum = A.reduce((a,b) => { return a+b });

      if (sum % 3 !== 0) {
        return false;
      }

      for (let i = 0; i < A.length; i++) {
        posval += A[i];
        if (sum / 3 === posval) {
          pos = i;
          count++
          posval = 0;
        }
      }

      return count === 3;

    };
```
