---
sidebar_position: 5
title: useClickOutside
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useClickOutside
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

const useClickOutside = (ref, cb) => {
  useEventListener('click', (e) => {
    if (ref.current == null || ref.current.contains(e.target)) return;
    cb(e);
  });
};

const App = () => {
  const [open, setOpen] = useState(false);
  const refModal = useRef();

  useClickOutside(refModal, () => {
    if (open) setOpen(false);
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <div
        ref={refModal}
        style={{
          display: open ? 'block' : 'none',
          backgroundColor: 'blue',
          color: 'white',
          width: 100,
          height: 100,
          position: 'fixed',
          top: 'calc(50% - 50px)',
          left: 'calc(50% - 50px)',
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
};

render(<App />);
```
