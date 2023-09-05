---
title: Example Callstack And Event loop
authors: hunghg
tags: [javascript, callstack, event loop]
image: https://cdn.hashnode.com/res/hashnode/image/upload/v1644518372680/XWZCTFGrJ.png?auto=compress,format&format=webp
---

Example callstack and event loop

<!--truncate-->

## Example

```js
async function abc() {
  console.log(8);
  await Promise.resolve(2).then(console.log);
  console.log(3); // same .then(() => console.log(3))
}

setTimeout(() => console.log(1), 0);
abc();
Promise.resolve(4).then(console.log);
console.log(6);
```

## Information

:::info

- `Macrotasks`: setTimeout , setInterval , setImmediate , requestAnimationFrame , I / O , giao diện người dùng render

- `Microtasks`: process.nextTick , Promises , queueMicrotask , MutationObserver

:::

![](https://res.cloudinary.com/hunghg255/image/upload/v1693889526/js-microtask-macro-task_gre5dw.webp)

## Explain

```md
1. Chạy `setTimeout` => push `log(1)` vào `MacroTask Queue`

2. Chạy func `abc` => `log(8)` => push `log(2)` vào `MicroTask Queue` => `await`
   `Output: 8`

3. push `log(4)` vào `MicroTask Queue`

4. `log(6)`
   `Output: 8 6`

5. Thực thi `MicroTask Queue` có 2 callback `log(2)` và `log(4)`
   `log(2)` => coi `log(3) là .then(() => log(3))` push `log(3)` vào `MicroTask Queue`
   `log(4)` => `log(3)`

   `Output: 8 6 2 4 3`

6. `MicroTask Queue` đã rỗng kết thúc turn => bắt đầu 1 turn mới thực thi `MacroTask Queue` có 1 callback `log(1)`
   `log(1)`
   `Output: 8 6 2 4 3 1`
```
