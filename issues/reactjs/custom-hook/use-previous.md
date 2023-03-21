---
sidebar_position: 13
title: usePrevious
comment: true
tags:
  - Reactjs
  - Custom Hook
  - usePrevious
---

```jsx live noInline
const usePrevious = (value) => {
  const refCurrent = useRef(value);
  const refPrevious = useRef();

  if (refCurrent.current !== value) {
    refPrevious.current = refCurrent.current;
    refCurrent.current = value;
  }

  return refPrevious.current;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Kyle');
  const previousCount = usePrevious(count);

  return (
    <>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>

      <button onClick={() => setCount((currentCount) => currentCount + 1)}>Increment</button>
      <button onClick={() => setName('Join')}>Change name</button>
    </>
  );
};

render(<App />);
```
