# pausable-timer

## 介绍

一个可随时多次暂停以及恢复执行的定时器类,可在浏览器以及node.js运行时使用

## 简单使用

安装

```shell
npm i pausable-timer
# or
yarn add pausable-timer
# or
pnpm i pausable-timer
```

```JavaScript
  import PausableTimer from "pausable-timer";
  const pt = new PausableTimer({
    // 运行模式,只限于'loop','once'
    mode: "loop",
    // 调用周期,毫秒
    timer: 2000,
    // 回调
    callback: () => {
      console.log("panda");
    },
    // 可选,是否开启调试,控制台会打印一些额外信息
    debug: true,
  });
  // 暂停
  pt.pause();
  // 恢复
  pt.resume();
  // 改变运行模式,['loop'|'once'],第二个参数为可选,是否重新计时
  pt.setMode("loop", true);
  // 停止运行
  pt.stop();
```

## 可基于此类封装为任意你喜欢的使用方式.example👇

```JavaScript
  const mySetInterval = (callback, delay) => {
    return new PausableTimer({
      callback,
      timer: delay,
      mode: "loop",
    });
  };
  mySetInterval(() => {
    console.log("666");
  }, 1000);
  const myClearInterval = (t) => {
    t.stop();
  };
```
