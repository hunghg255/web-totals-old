---
sidebar_position: 15
title: useMemoByObjectVariables
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useMemoByObjectVariables
---

```jsx live noInline
const aStackPool = [];
const bStackPool = [];

/**
 * Checks if two values are equal. Values may be primitives, arrays, or objects.
 * Returns true if both arguments have the same keys and values.
 *
 * @see http://underscorejs.org
 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * @license MIT
 */
export function areEqual(a, b) {
  const aStack = aStackPool.length ? aStackPool.pop() : [];
  const bStack = bStackPool.length ? bStackPool.pop() : [];
  const result = eq(a, b, aStack, bStack);
  aStack.length = 0;
  bStack.length = 0;
  aStackPool.push(aStack);
  bStackPool.push(bStack);
  return result;
}

function eq(a, b, aStack, bStack) {
  if (a === b) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    return a !== 0 || 1 / a == 1 / b;
  }
  if (a == null || b == null) {
    // a or b can be `null` or `undefined`
    return false;
  }
  if (typeof a != 'object' || typeof b != 'object') {
    return false;
  }
  const objToStr = Object.prototype.toString;
  const className = objToStr.call(a);
  if (className != objToStr.call(b)) {
    return false;
  }
  switch (className) {
    case '[object String]':
      return a == String(b);
    case '[object Number]':
      return isNaN(a) || isNaN(b) ? false : a == Number(b);
    case '[object Date]':
    case '[object Boolean]':
      return +a == +b;
    case '[object RegExp]':
      return (
        a.source == b.source &&
        a.global == b.global &&
        a.multiline == b.multiline &&
        a.ignoreCase == b.ignoreCase
      );
  }
  // Assume equality for cyclic structures.
  let length = aStack.length;
  while (length--) {
    if (aStack[length] == a) {
      return bStack[length] == b;
    }
  }
  aStack.push(a);
  bStack.push(b);
  let size = 0;
  // Recursively compare objects and arrays.
  if (className === '[object Array]') {
    size = a.length;
    if (size !== b.length) {
      return false;
    }
    // Deep compare the contents, ignoring non-numeric properties.
    while (size--) {
      if (!eq(a[size], b[size], aStack, bStack)) {
        return false;
      }
    }
  } else {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (a.hasOwnProperty('valueOf') && b.hasOwnProperty('valueOf')) {
      return a.valueOf() == b.valueOf();
    }
    const keys = Object.keys(a);
    if (keys.length != Object.keys(b).length) {
      return false;
    }
    for (let i = 0; i < keys.length; i++) {
      if (!eq(a[keys[i]], b[keys[i]], aStack, bStack)) {
        return false;
      }
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}

const j = 0;

export function useMemoByObjectVariables(a) {
  const _ref = React.useRef(j);
  const [state, setState] = React.useState(a);

  const _areEqual = !areEqual(a, state);
  if (_areEqual) {
    _ref.current += 1;
    setState(a);
  }

  const f = React.useMemo(
    function () {
      return a;
    },
    [_ref.current],
  );

  return React.useMemo(
    function () {
      return [f, _ref.current];
    },
    [f],
  );
}

const App = () => {
  const previousCount = useMemoByObjectVariables(count);

  return <>useMergeRefs</>;
};

render(<App />);
```
