---
sidebar_position: 16
title: useDelayedState
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useDelayedState
---

```jsx live noInline
const emptyFunction = (...args) => {};

const useDelayedState = (initialValues) => {
  const [value, setValue] = useState(initialValues);
  const e = useRef(null);

  useEffect(function () {
    return function () {
      return clearTimeout(e.current);
    };
  }, []);

  const func = useCallback(function (a, c = 0, f = emptyFunction) {
    clearTimeout(e.current);
    e.current = null;

    if (c === 0) {
      setValue(a), f(a);
    } else {
      e.current = setTimeout(() => {
        setValue(a), f(a);
        e.current = null;
      }, c);
    }
  }, []);

  return [value, func];
};

const App = () => {
  const [v, setV] = useDelayedState(0);

  return (
    <div>
      <button onClick={() => setV(v + 1, 1000)}>Click {v}</button>
    </div>
  );
};

render(<App />);
```
