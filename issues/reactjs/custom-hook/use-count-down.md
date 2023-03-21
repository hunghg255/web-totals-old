---
sidebar_position: 6
title: useCountDown
comment: true
tags:
  - Reactjs
  - Custom Hook
  - useCountDown
---

```jsx live noInline
const useCountDown = ({ startDate, endDate, onFinish }) => {
  const [seconds, setSeconds] = useState(0);
  const refDays = useRef(0);
  const refHours = useRef(0);
  const refMinutes = useRef(0);

  const startTime = useMemo(() => new Date(startDate), [startDate]);
  const endTime = useMemo(() => new Date(endDate), [endDate]);
  const refEnd = useRef();

  useEffect(() => {
    if (!refEnd.current) return;
    onFinish && onFinish();
  }, [onFinish, refEnd]);

  useEffect(() => {
    if (startTime.getTime() - new Date().getTime() >= 0) return;

    if (refEnd.current) return;

    const timeInterVal = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference <= 0) {
        setSeconds(0);
        refEnd.current = true;
        clearInterval(clearInterval);
        return;
      }

      refDays.current = Math.floor(difference / (1000 * 60 * 60 * 24));
      refHours.current = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      refMinutes.current = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.ceil((difference % (1000 * 60)) / 1000);
      refDays.current = refDays.current < 0 ? 0 : refDays.current;
      refHours.current = refHours.current < 0 ? 0 : refHours.current;
      refMinutes.current = refMinutes.current < 0 ? 0 : refMinutes.current;

      setSeconds(s < 0 ? s + 60 : s);
    }, 1000);

    return () => clearInterval(timeInterVal);
  }, [endDate, endTime, seconds, startDate, startTime]);

  return {
    days: refDays.current,
    hours: refHours.current,
    minutes: refMinutes.current,
    seconds: seconds,
  };
};

const App = () => {
  const { days, hours, minutes, seconds } = useCountDown({
    startDate: new Date(),
    endDate: new Date('01 Jan 2025'),
    onFinish: () => {
      console.log('Done');
    },
  });
  console.log(seconds);
  return (
    <>
      <h4>
        {days} days, {hours} hours - {minutes} minutes - {seconds} seconds
      </h4>
    </>
  );
};

render(<App />);
```
