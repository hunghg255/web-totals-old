---
sidebar_position: 14
title: useMergeRefs
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useMergeRefs
---

```jsx live noInline
function mergeRefs(...args) {
  let a = arguments.length,
    c = new Array(a);
  for (let d = 0; d < a; d++) c[d] = arguments[d];
  return function (a) {
    c.forEach(function (c) {
      if (c == null) return;
      if (typeof c === 'function') {
        c(a);
        return;
      }
      if (typeof c === 'object') {
        c.current = a;
        return;
      }
      console.warn(
        'mergeRefs cannot handle Refs of type boolean, number or string, received ref ' + String(c),
        'comet_ui',
      );
    });
  };
}

function useMergeRefs(...args) {
  const a = arguments.length;
  const c = new Array(a);
  for (let d = 0; d < a; d++) {
    c[d] = arguments[d];
  }
  return React.useMemo(function () {
    return mergeRefs.apply(void 0, c);
  }, [c].flat());
}

const App = () => {
  const previousCount = useMergeRefs(count);

  return <>useMergeRefs</>;
};

render(<App />);
```
