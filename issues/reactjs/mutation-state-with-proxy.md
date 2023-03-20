---
sidebar_position: 1
title: Mutation State with Proxy
comment: true
tags:
  - Reactjs
  - Custom Hook
---

This is a custom hook to mutate state in reactjs

```jsx live noInline
const useReactState = (initialValues) => {
  const [, setTime] = useState(new Date().getTime());

  return useMemo(() => {
    return new Proxy(initialValues, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        setTime(new Date().getTime());

        return true;
      },
    });
  }, []);
};

function App() {
  const state = useReactState({ count: 0 });

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
