---
sidebar_position: 3
title: useTimeout
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useTimeout
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

function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 2000);

  return (
    <div>
      <div>Value: {count}</div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>

      <div>
        <button onClick={clear}>Clear Timeout</button>
      </div>

      <div>
        <button onClick={reset}>Reset Timeout</button>
      </div>
    </div>
  );
}

// Render App
render(<TimeoutComponent />);
```
