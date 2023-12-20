---
title: SVG icon with pure css
authors: hunghg
tags: [svg, icon, css]
---

## SVG icon with pure css

<!--truncate-->

- Cách cơ bản: Dùng svg qua thẻ `img` hoặc là dùng content của svg trong html

- Cách tiếp cận tiếp theo là chuyển hết svg icon thành một bộ font rồi load bộ font,css đó vào source code, sử dùng bên html chỉ cần thêm class của icon.

  - Cách này sẽ có nhược điêm là không convert được icon multilplechrome

- Cách tiếp theo là chỉ cần chuyển svg thành dataURI rồi dùng trong css, bên html sẽ thêm class icon

  - Cũng có một source họ dựng svg dùng với css [css.gg](https://css.gg/) nhưng bị giới hạn icon và cách họ xử lý cũng phức tạp.

- HTML

```html
<div class="my-icon"></div>
```

- CSS

```css
.my-icon {
  background: url(data:...) no-repeat center;
  background-color: transparent;
  background-size: 16px 16px;
  height: 16px;
  width: 16px;
  display: inline-block;
}
```

- Để convert svg string sang dataURI

```js
const svg = `<svg>...</svg>`;
const dataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
```

- Nếu chuyển sang URI thì đều chọn là base64. nhưng nhược điểm là sẽ nặng khi tải, thực tế base64 để encode data binary như ảnh sang base64 để dùng trong file text như css.

- Với svg thực tế nó đã là text rồi vì thế mình không cần chuyển sang dạng base64 nữa, mn có thể đoc thêm về 2 bài này [probably-dont-base64-svg](https://css-tricks.com/probably-dont-base64-svg/), [optimizing-svgs-in-data-uris](https://codepen.io/Tigt/post/optimizing-svgs-in-data-uris)

- Có một cách khác để chuyển svg sang dataURI như sau

```js
// https://bl.ocks.org/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
function encodeSvg(svg: string) {
  return svg
    .replace('<svg', ~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"')
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E');
}

const dataUri = `data:image/svg+xml;utf8,${encodeSvg(svg)}`;
```

- Về kích thước. ta chỉ cần dùng đơn vị `em` trong css

```css
.my-icon {
  background: url(data:...) no-repeat center;
  background-color: transparent;
  background-size: 100% 100%;
  height: 1em;
  width: 1em;
}
```

- Về màu. với svg ta chỉ cần dùng `fill=currentColor` ([svg currentcolor](https://www.w3.org/TR/css-color-3/#currentcolor)). Cách này svg sẽ fill theo màu của text, nhưng có một điểm là nếu ta dùng `background` thì màu sẽ không ăn với icon. Cũng có 1 bài xử lý vấn đề fill màu cho ảnh dùng css filter ([solved-with-css-colorizing-svg-backgrounds](https://css-tricks.com/solved-with-css-colorizing-svg-backgrounds/)) nhưng cần tính toán matrix để thay đổi màu. nó cũng khá phức tạp nếu dùng cách này. mình chỉ muốn dùng với css thuần.

  - Có vẻ như đã không có cách nào nhưng đã có một bài nói về fill màu cho image dùng css [coloring-svgs-in-css-background-images](https://codepen.io/noahblon/post/coloring-svgs-in-css-background-images). bài viết nói về dùng css mask ([css mask](https://developer.mozilla.org/en-US/docs/Web/CSS/mask)) thuộc tính mình còn chưa nghe đến trước đây

```css
.my-icon {
  background-color: currentColor;
  mask-image: url(icon.svg);
}
```

- Như vậy vấn đề fill màu cho icon monochrome đã được giải quyết, còn icon multiplechorme thì sao.
- Đơn giản mình chỉ cần check xem icon đó có phải là multiplechrome hay không thôi và giữ nguyên màu nếu là multiplechrome

```js
// if an SVG icon have the `currentColor` value,
// it's very likely to be a monochrome icon
const isMonochrome = checkMonochrome(svg);

const uri = `url("data:image/svg+xml;utf8,${encodeSvg(svg)}")`;

// monochrome
if (isMonochrome) {
  return {
    mask: `${uri} no-repeat`,
    'mask-size': '100% 100%',
    'background-color': 'currentColor',
    height: '1em',
    width: '1em',
  };
}
// colored
else {
  return {
    background: `${uri} no-repeat`,
    'background-size': '100% 100%',
    'background-color': 'transparent',
    height: '1em',
    width: '1em',
  };
}
```

Đây là trang demo: https://svg-to-css.surge.sh/
