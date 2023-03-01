# Share all about web development

# Write markdown

## Embed StackBlitz

```
<stackblitz name={'react-ts-mdxcmx'} />
```

## Live code: Add block with keywork live

````
```tsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}```
````

## Mermaid: add block with keyword mermaid

````
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;```
````
