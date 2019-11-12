---
path: leetcode_maximumProduct
date: 2019-11-12T02:32:30.477Z
tag:
  - leetcode
  - js
  - algorithm
title: leetcode （628. 三个数的最大乘积）
description: 628. 三个数的最大乘积
---
给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

### 示例 1:

输入: 
```
[1,2,3]
```

输出: 

6

### 示例 2:

输入: 
```
[1,2,3,4]
```

输出: 

24

### 注意:

给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。

### 题解：
对数组进行从小到大排序，
无论正数积还是负数积，乘数一定会有数组最后一位最大值，接下来取的要不就是数组前两位（负数最小两位）就是数组后两位（正数最大两位）然后取两个积的最大值

```
	var maximumProduct = function (nums) {
		let nums2 = nums.sort((a, b) => a - b); //从小到大排序 负到正排序
		/*
		 *无论正数积还是负数积 乘数一定会有数组最后一位数组最大值
		 *接下来取的要不就是数组前两位（负数最小两位）
		 *就是数组后两位（正数最大两位）
		 *然后取两个积的最大值
		 */
		let a = nums2[0] * nums2[1] * nums2[nums2.length - 1]; 
		let b = nums2[nums2.length - 1] * nums2[nums2.length - 2] * nums2[nums2.length - 3]
		return Math.max(a, b);
	};
```

