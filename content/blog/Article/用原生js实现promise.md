---
path: js_MyPromise
date: 2019-12-16T08:28:26.843Z
tag:
  - js
title: 用原生js实现Promise
description: 用原生js实现Promise
---
```javascript
  const PENDING = "pending"; //初始值，不是fulfilled，也不是rejected
    const RESOLVED = "resolved"; //代表操作成功
    const REJECTED = "rejected"; //代表操作失败

    function MyPromise(fn) {
      let _this = this;
      _this.state = PENDING;
      _this.value = null;
      _this.resolvedCallbacks = []; // 解决回调
      _this.rejectedCallbacks = []; // 拒绝回调；

      const resolve = (value) => {
        if (_this.state === PENDING) {
          _this.state = RESOLVED;
          _this.value = value;
          _this.resolvedCallbacks.map(cb => cb(_this.value));
        }
      }

      const reject = (value) => {
        if (_this.state === PENDING) {
          _this.state = REJECTED;
          _this.value = value;
          _this.resolvedCallbacks.map(cb => cb(_this.value));
        }
      }

      /*
       * 捕获 fn 是否报错
       * 实现很简单，执行传入的参数并且将之前两个函数当做参数传进去
       * 要注意的是，可能执行函数过程中会遇到错误，需要捕获错误并且执行 reject 函数
       * */
      try {
        fn(resolve, reject);
      } catch (e) {
        reject(e);
      }
    }

    //定义实现 then
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
      const _this = this;
      // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
      // 当参数不是函数类型时，需要创建一个函数赋值给对应的参数，同时也实现了透传
      onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
      onRejected = typeof onRejected === "function" ? onRejected : r => {
        throw r
      };

      if (_this.state === PENDING) {
        _this.resolvedCallbacks.push(onFulfilled);
        _this.rejectedCallbacks.push(onRejected);
      }
      if (_this.state === RESOLVED) {
        onFulfilled(_this.value)
      }
      if (_this.state === REJECTED) {
        onRejected(_this.value)
      }
    }

    new MyPromise((resolve, reject) => {
      setTimeout(() => {
        let list = [3, 2, 5, 6, 1, 0];
        Bubbling(list);
        resolve(list)
      }, 1000)
    }).then(res => {
      console.log(res)
    }, err => {
      console.log(8)
    })
```
