---
sidebar_position: 7
title: useMediaQuery
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useMediaQuery
---

```jsx live noInline
function debounce(func, timeout = 300) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

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

const useMediaQuery = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(false);
  const refDebounce = useRef();

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  refDebounce.current = useCallback(
    debounce((matches) => {
      if (matches !== isMatch) setIsMatch(matches);
    }, 500),
    [isMatch],
  );

  useEventListener('resize', () => {
    const list = window.matchMedia(mediaQuery);
    refDebounce.current(list.matches);
  });

  return isMatch;
};

const App = () => {
  const isLarge = useMediaQuery('(min-width: 1200px)');

  return <div>Large: {isLarge.toString()}</div>;
};

render(<App />);
```
