---
sidebar_position: 11
title: useDebounce
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useDebounce
---

```jsx live noInline
const useTimeout = (callback, delay) => {
  const refCallback = useRef();
  const refTimeout = useRef();

  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    refTimeout.current = setTimeout(() => refCallback.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    refTimeout.current && clearTimeout(refTimeout.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [set, clear]);

  return { clear, reset };
};

const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};

const App = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>Value: {`${count}`}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

render(<App />);
```
