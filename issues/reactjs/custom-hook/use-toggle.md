---
sidebar_position: 2
title: useToggle
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useToggle
---

```jsx live noInline
const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value) => {
    setValue((currentValue) => {
      return typeof value === 'boolean' ? value : !currentValue;
    });
  };

  return [value, toggleValue];
};

function ToggleComponent() {
  const [value, setToggle] = useToggle(false);

  return (
    <div>
      <div>Value: {`${value}`}</div>
      <div>
        <button onClick={setToggle}>Toggle</button>
      </div>

      <div>
        <button onClick={() => setToggle(true)}>Set True</button>
      </div>

      <div>
        <button onClick={() => setToggle(false)}>Set False</button>
      </div>
    </div>
  );
}

// Render App
render(<ToggleComponent />);
```
