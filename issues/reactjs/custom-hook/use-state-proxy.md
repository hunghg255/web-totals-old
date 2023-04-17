---
sidebar_position: 1
title: useStateProxy
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useStateProxy
---

This is a custom hook to mutate state in reactjs

```jsx live noInline
const useStateProxy = (initialValues) => {
  const [, setTime] = useState({});

  return useMemo(() => {
    return new Proxy(initialValues, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        setTime({});

        return true;
      },
    });
  }, []);
};

function App() {
  const state = useStateProxy({ count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>

      <button
        onClick={() => {
          state.count += 1;
        }}
      >
        Click
      </button>
    </div>
  );
}

// Render App
render(<App />);
```
