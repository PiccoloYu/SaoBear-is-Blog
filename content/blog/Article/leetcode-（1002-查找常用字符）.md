---
path: leetcode_commonChars
date: 2020-01-03T06:29:34.146Z
tag:
  - leetcode
  - js
  - algorithm
title: leetcode （1002. 查找常用字符）
description: 1002. 查找常用字符
---
给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。

 

### 示例 1：
```javasrcpt
输入：["bella","label","roller"]
输出：["e","l","l"]
```
### 示例 2：
```javascript
输入：["cool","lock","cook"]
输出：["c","o"]
```

### 提示：
```javascript
1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] 是小写字母
```

### 题解
  [大神三种解法](https://leetcode-cn.com/problems/find-common-characters/solution/js-by-blzbanme/)

```javascript
    /**
     * @param {string[]} A
     * @return {string[]}
     */
    let commonChars = (A) => {
      let first = A[0].split('');
      for (let i = 0; i < A.length; i++) {
        let tmp = A[i].split('');
        first = first.filter((a) => {
          let item = tmp.indexOf(a);
          return item !== -1 ? tmp[item] = 1 : false;
        })
      }
      return first;
    };
```



