---
sidebar_position: 8
title: useWindowSize
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useWindowSize
---

```jsx live noInline
const useEventListener = (eventType, callback, element = window) => {
  const refCallback = useRef(callback);

  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => refCallback.current(e);
    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener('resize', () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
};

const App = () => {
  const { width, height } = useWindowSize();

  return (
    <h4>
      Width: {width} - Height: {height}
    </h4>
  );
};

render(<App />);
```
