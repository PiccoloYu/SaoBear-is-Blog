---
path: leetcode_numPairsDivisibleBy60
date: 2019-12-25T03:05:18.903Z
tag:
  - leetcode
  - js
  - algorithm
title: leetcode （1010. 总持续时间可被 60 整除的歌曲）
description: 1010. 总持续时间可被 60 整除的歌曲
---

在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。
返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字  i < j 且有 (time[i] + time[j]) % 60 == 0。

       
### 示例 1：

输入：

```javascript
[30,20,150,100,40]
```
      
输出：

```javascript
3
```
      

### 解释：
这三对的总持续时间可被 60 整数：
      
(time[0] = 30, time[2] = 150): 总持续时间 180
      
(time[1] = 20, time[3] = 100): 总持续时间 120
      
(time[1] = 20, time[4] = 40): 总持续时间 60
      
### 示例 2：

输入：
```javascript
[60,60,60]
```
输出：
```javascript
3
```
### 解释：

所有三对的总持续时间都是 120，可以被 60 整数。
       
#### 提示：
```javascript
   1 <= time.length <= 60000
   1 <= time[i] <= 500
```

## 题解：
依照题意，我们只需要统计相加等于60的倍数的数字对的数量。

过于暴力的算法 O(n^2)，执行用时太长了。
```javascript
var numPairsDivisibleBy60 = (time = []) => {
      let res = 0;
      for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
          if ((time[i] + time[j]) % 60 === 0) {
            res++;
          };
        }
      }
      return res;
    };
```
优化如下：

例如 [30,20,150,100,40]

如果对每个数字都对60取余

得到 [30,20,30,40,40]

如果一个数对60的余数为20，则与它配对的数对60的余数必然为40。故只需查看余数为40的数的个数，即为配对数目，同时记录余数为20的数的数目。最后统计配对数目总和即可

```javascript
   var numPairsDivisibleBy60  = (time = []) =>  {
      //建立并填充一个长度60的数组
      let arr = Array(60).fill(0); 
      //定义返回的值。
      let res = 0;   
      //遍历数组
      for (let i of time) { 
        //获取当前值的余数mod
        let mod = i % 60;
        if (mod == 0) res += arr[0];
        else res += arr[60 - mod];
        arr[mod]++;
      }
      return res;
    }
```


```javascript
    var __numPairsDivisibleBy60 = function (time) {
      let arr = Array(60).fill(0);
      console.log(arr)
      /*let res = 0;
      for (let i of time) {
        let mod = i % 60;
        if (mod == 0) res += arr[0];
        else res += arr[60 - mod];
        arr[mod]++;
      }*/
      return time.reduce((count, cur) => {
        count += arr[(60 - cur % 60) % 60]
        arr[cur % 60] += 1
        return count
      }, 0)
      //return res;
    }
```
