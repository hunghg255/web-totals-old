---
sidebar_position: 9
title: useSize
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useSize
---

```jsx live noInline
const useSize = (ref) => {
  const [size, setSize] = useState({});

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return size;
};

const App = () => {
  const ref = useRef();
  const size = useSize(ref);

  return (
    <>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </>
  );
};

render(<App />);
```
