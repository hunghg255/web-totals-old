---
title: Convert svgs file to jsx by one script
authors: hunghg
tags: [svg, jsx, reactjs, scripts, generate]
image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png
---

<!--truncate-->

## Run this script on terminal

[npm link](https://www.npmjs.com/package/agile-svg2jsx)

## CLI

<npxConvert packageBinCli="agile-svg2jsx --i $PATH_SVGS_FOLDER --o $PATH_REACT_FOLDER"/>

## setup at `package.json`

```json
"scripts": {
  ...
  "gen-icon": "npx agile-svg2jsx --i $PATH_SVGS_FOLDER --o $PATH_REACT_FOLDER"
},
```

## Demo

[Github](https://github.com/hunghg255/react-generate-svg-2-icon)

![](https://res.cloudinary.com/hunghg255/image/upload/v1682355827/svg2jsx_bbivgm.gif)

## Live code

```jsx live noInline
const IconAccountBook = (props) => {
  return (
    <span {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon'
        viewBox='0 0 1024 1024'
        fill='currentColor'
        width='1em'
        height='1em'
      >
        <path d='M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 0 1 8.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z' />
      </svg>
    </span>
  );
};

const App = () => (
  <>
    <IconAccountBook
      onClick={() => alert('Hello')}
      style={{
        fontSize: 50,
        color: 'red',
      }}
    />

    <IconAccountBook
      onClick={() => alert('Hello')}
      style={{
        fontSize: 50,
        color: 'green',
      }}
    />

    <IconAccountBook
      onClick={() => alert('Hello')}
      style={{
        fontSize: 50,
        color: 'blue',
      }}
    />
  </>
);

render(<App />);
```
