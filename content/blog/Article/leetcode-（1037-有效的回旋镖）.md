---
path: leetcode_isBoomerang
date: 2019-11-09T07:28:48.239Z
tag:
  - leetcode
  - js
  - algorithm
title: leetcode （1037.有效的回旋镖）
description: 1037. 有效的回旋镖
---
回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。

给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。

 

### 示例 1：

输入：

```javascript
[[1,1],[2,3],[3,2]]
```

输出：true

### 示例 2：

输入：

```javascript
[[1,1],[2,2],[3,3]]
```

输出：false
 

###提示：

```javascript
points.length == 3
points[i].length == 2
0 <= points[i][j] <= 100
```

## 题解：

本质是一个3点坐标求三角形面积的算法，给予三个坐标点，如果这三个坐标能求出三角形面积则返回true...坐标系 求三角形面积公式：S=(x1y2+x2y3+x3y1-x1y3-x2y1-x3y2) /2。

 因式分解

```javascript
let isBoomerang = function (points) {
		let [a, b, c] = points;
		return (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) != 0;
	};
```
