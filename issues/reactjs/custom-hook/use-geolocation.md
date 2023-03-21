---
sidebar_position: 10
title: useGeolocation
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useGeolocation
---

```jsx live noInline
const useGeolocation = (options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState({});

  useEffect(() => {
    const successHandler = (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    const errorHandler = (e) => {
      setLoading(false);
      setError(e);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

    const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);

    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
};

const App = () => {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation();

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error && error.message}</div>
      <div>
        latitude: {latitude} - longitude: {longitude}
      </div>
    </>
  );
};

render(<App />);
```
