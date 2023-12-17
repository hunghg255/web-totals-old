---
sidebar_position: 1
title: Documentation
last_update:
  date: 03/03/2023
  author: hunghg255
---

# Tutorial

### This is documentation

```js title="HELLO"
const a = 2;
```

```ts
export function foo() {
  console.log('diff -'); // [!code --]
  console.log('Diff plus'); // [!code ++]
  console.log('highlight'); // [!code highlight]
  console.log('error'); //  [!code error]
  console.log('warning'); // [!code warning]
}
```

```ts
export function foo() {
  console.log('1');
  console.log('Diff plus'); // [!code focus]
  console.log('3');
}
```

```jsx
const App = () => {
  return <div>App</div>;
};
```

```ts twoslash=true
// @log: Custom log message
const a = 1;
// @error: Custom error message
const b = 1;
// @warn: Custom warning message
const c = 1;
// @annotate: Custom annotation message
```

```ts twoslash
// @errors: 2540
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users'.toUpperCase(),
  //  ^?
};

todo.title = 'Hello';

Number.parseInt('123', 10);
//      ^|
//
//
```
