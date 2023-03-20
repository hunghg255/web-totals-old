---
sidebar_position: 1
title: Delay without setTimeout
comment: true
tags:
  - Javascript
  - Utils
---

This is a delay function without setTimeout and promise in javascript

```javascript
const delay = (time) => {
  const now = Date.now();

  while (true) {
    if (Date.now() > now + time) break;
  }
};

console.log('foo');
delay(1000); // 1s
console.log('bar');
```
