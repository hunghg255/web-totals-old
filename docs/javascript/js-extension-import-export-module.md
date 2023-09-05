---
sidebar_position: 1
title: JS Extension - Import/Export Module
comment: true
tags:
  - Reactjs
last_update:
  date: 05/05/2023
  author: hunghg255
---

## 1. IIFE (Immediately Invoked Function Expression)

- Kỹ thuật khai báo module cho JS thuần (ES5 trở về trước)

```js
var moduleName = (function () {
  // return something to export
})();
```

## 2. CJS (CommonJS)

- Cú pháp khai báo module được sử dụng dưới back-end (phổ biến nhất là NodeJS)
  Các module được import một cách đồng bộ

```js
// export
module.exports = factory;

// import
var alias = require('./moduleName');
```

## 3. AMD (Asynchronous Module Definition)

- Cú pháp khai báo module được sử dụng trên front-end (thông qua bộ loader phổ biến là RequireJS)
  Các module được import một cách bất đồng bộ

```js
// export
define("moduleName", ["dependency1", "dependency2", ...], factory);

// import
require(["moduleName"], function(alias) {
    // code
});
```

## 4. UMD (Universal Module Definition)

- Kỹ thuật kết hợp nhiều cú pháp khai báo module
  Tương thích với front-end lẫn back-end
  Cú pháp tương đối phức tạp

```js
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define('moduleName', factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory;
  } else {
    window['moduleName'] = factory;
  }
})(factory);
```

## 5. ESM (ECMAScript Modules)

- Cú pháp khai báo module được chuẩn hóa, hỗ trợ trực tiếp bởi JS thuần (ES6 trở về sau)
  Tương thích với front-end lẫn back-end
  Cú pháp đơn giản nhưng đa dạng, linh động hơn

```js
// default exports
export default { }
export default function fnA() { }
export default class classB { }

// named exports
export function fnA() { }
export var varB = "";

// default import
import alias from "moduleName";

// named imports
import * as alias from "moduleName";
import { fnA, varB } from "moduleName";
```
