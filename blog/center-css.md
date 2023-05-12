---
title: Centering in CSS
authors: hunghg
tags: [html, css, tips]
image: https://res.cloudinary.com/hunghg255/image/upload/v1683865180/css-center_m1zi5l.png
---

<!--truncate-->

## 1. Content Center

```html title=HTML
<div class="content-center">...</div>
```

```css title=CSS
.content-center {
  display: grid;
  place-content: center;
  gap: 1ch;
}
```

## 2. Gentle Flex

```html title=HTML
<div class="gentle-flex">...</div>
```

```css title=CSS
.gentle-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1ch;
}
```

## 3. Autobot

```html title=HTML
<div class="autobot">...</div>
```

```css title=CSS
.autobot {
  display: flex;
}
.autobot > * {
  margin: auto;
}
```

## 4. Fluffy Center

```html title=HTML
<div class="fluffy-center">...</div>
```

```css title=CSS
.fluffy-center {
  padding: 10ch;
}
```

# 5. Pop & Plop

```html title=HTML
<div class="parent">
  <div class="pop-plop">...</div>
</div>
```

```css title=CSS
.parent {
  position: relative;
}

/* Option 1 */
.pop-plop {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* Option 2 */
.pop-plop {
  position: absolute;
  inset: 0;
  margin: auto;
}
```
