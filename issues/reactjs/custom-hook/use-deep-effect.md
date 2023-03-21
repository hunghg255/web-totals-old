---
sidebar_position: 12
title: useDeepEffect
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useDeepEffect
---

```jsx live noInline
function deepCompareEquals(a, b) {
  // return isEqual(a, b); // lodash func
  return JSON.stringify(a) === JSON.stringify(b);
}

function useDeepCompareMemoize(value) {
  const ref = useRef();

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

const useDeepEffect = (callback, dependencies) => {
  useEffect(callback, dependencies.map(useDeepCompareMemoize));
};

const App = () => {
  const [obj, setObj] = useState({ a: 1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check inspect console tab
    console.log('useEffect');
  }, [obj]);

  useDeepEffect(() => {
    // Check inspect console tab
    console.log('useDeepEffect');
  }, [obj]);

  return (
    <div>
      <div>{JSON.stringify(obj)}</div>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          setObj({ a: 1 });
        }}
      >
        Click
      </button>
    </div>
  );
};

render(<App />);
```
