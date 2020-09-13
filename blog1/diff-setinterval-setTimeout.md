---
title:  "Which one to use for timers? setInterval or setTimeout"
date:   2020-02-27 21:21:00 +0900
categories:
- HTML DOM Window
tag:
- timer
- setInterval 
- setTimeout
---

There are plenty of times we want our application can handle calling function periodically for over time. We normally use `setInterval` or `setTimeout` timers. But how those method actually work? which one is more suitable for my application?

To answer those questions, here i am briefly discussing the main difference of them.

## setInterval method

This method repeatedly calls a function or execute code snippet, with a given time delay.

```js

window.setInterval(callme, 1000) // 1000 means every sec

callMe(){
    // do anything you want
}
```

The above example describes that `callMe()` is called every sec. In other word, `callMe()` is called with a delay of 1 sec.

Since setInterval is called continuosly, it surely consumes some amount of memory. Sometimes misuse of setInterval may cause memory leak.

In order to get rid of such case, we need to free the memory by clearing the interval. setInterval returns `intervalId`, so we need to call `clearInterval` method after planning to stop execution of repeated code execution.

```js
var intervalId = window.setInterval(callMe, 1000)

callMe(){
    // do anything you want
}
// need to give intervalId as input
clearInterval(intervalId)
```

setInterval will be stopped if only clearInterval() is called or window tab is closed. Unless until if we don't give any hint to stop setInterval, it will keep executing. So, please careful in this situation.

## setTimeout method

This method will execute a code snippet or call a function after a delay of given time. It will not repeatedly call the function like `setInterval`, instead it will call after certain duration of time which is specified.

```js
window.setTimeout(callMe, 1000)

callMe(){
    // do anything
}
```

In this case, `callMe()` will be called after a sec, in other word, `callMe()` is called with a delay of 1 sec.

Main difference between `setTimeout` and `setInterval` is that after `setTimeout` is called, its used value will collected as a garbage collection, so it will free the memory just after the execution or function call. It is pretty memory efficient if your app is required to call some specific code execution with some specific time delay. 

## Recursive setTimeout method

Since we know that setTimeout will behave quite similarly to setInterval, we can call setTimeout recursively and achieve what we want as if using `setInterval` but with better memory consumption.

```js 
// Recursive setTimeout

window.setTimeout(callMe, 1000)

callMe(){
    // do something
    window.setTimeout(callMe, 1000)
}
```

After a delay of 1 sec, `callMe` is called, when `callMe` is called, again it calls `callMe` with a delay of a sec.

In this case, after setTimeout execution, used var collected to GC.

If you want to explicitly free the memory, `clearTimeout` method can be used. It behaves as similar as `clearInterval`. It also requires ID to clear specific process.

```js 
// Recursive setTimeout

var timeoutId = window.setTimeout(callMe, 1000)

callMe(){
    // do something
    window.setTimeout(callMe, 1000)
}
clearTimeout(timeoutId)
```

Alright, that's it. If you want to read more details, please visit following links.
<https://www.w3schools.com/jsref/met_win_clearinterval.asp>

<https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval>