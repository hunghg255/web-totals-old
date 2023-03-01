---
sidebar_position: 5
title: Question 41 - 50
comment: true
tags:
  - Javascript
---

### Q. 41. What's the output?

```javascript
!!null;
!!'';
!!1;
```

- A: false, true, false
- B: false, false, true
- C: false, true, true
- D: true, true, false

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: B_**

`null` is falsy. `!null` returns `true`. `!true` returns `false`.

`""` is falsy. `!""` returns `true`. `!true` returns `false`.

`1` is truthy. `!1` returns `false`. `!false` returns `true`.

</details>

### Q. 42. What does the `setInterval` method return in the browser?

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: a unique id
- B: the amount of milliseconds specified
- C: the passed function
- D: `undefined`

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: A_**

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.

</details>

### Q. 43. What does this return?

```javascript
const name = 'Lydia'
[...name]
```

- A: ["L", "y", "d", "i", "a"]
- B: ["Lydia"]
- C: [[], "Lydia"]
  - D: [["L", "y", "d", "i", "a"]]

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: A_**

A string is an iterable. The spread operator maps every character of an iterable to one element.

</details>

### Q. 44. What's the output?

```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- A: [0, 10], [10, 20]
- B: 20, 20
- C: 10, 20
- D: 0, 10 and 10, 20

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: C_**

Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.

First, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.

Then, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.

</details>

### Q. 45. What does this return?

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

- A: "one"
- B: "two"
- C: "two" "one"
- D: "one" "two"

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: B_**

When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects.

To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`).

This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.

</details>

### Q. 46. What's the output?

```javascript
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);
```

- A: null
- {"B: [null]"}
- {"C: [{}]"}
- {"D: [{ name: 'Lydia' }]"}

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: D_**

First, we declare a variable `person` with the value of an object that has a `name` property.

<img src="https://i.imgur.com/TML1MbS.png" width="200" />

Then, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don't have the _same_ reference!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300" />

Then, we set the variable `person` equal to `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300" />

We are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.

</details>

### Q. 47. What's the output?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```

- {'A: { name: "Lydia" }, { age: 21 }'}
- {'B: "name", "age"'}
- {'C: "Lydia", 21'}
- {'D: ["name", "Lydia"], ["age", 21]'}

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: B_**

With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`.

Under the hood, object keys are strings (if they're not a Symbol).

On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged.

Then, `item` is equal to `age`, which gets logged.

</details>

### Q. 48. What's the output?

```javascript
console.log(3 + 4 + '5');
```

- A: "345"
- B: "75"
- C: 12
- D: "12"

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: B_**

Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.

`3 + 4` gets evaluated first. This results in the number `7`.

`7 + '5'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.

</details>

### Q. 49. What's the value of `num`?

```javascript
const num = parseInt('7*6', 10);
```

- A: 42
- B: "42"
- C: 7
- D: NaN

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: C_**

Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.

</details>

### Q. 50. What's the output?

```javascript
[1, 2, 3].map((num) => {
  if (typeof num === 'number') return;
  return num * 2;
});
```

- A: []
- B: [null, null, null]
- C: [undefined, undefined, undefined]
- D: [ 3 x empty ]

<details>
    <summary>
    <b>💡 Answer</b>
    </summary>

**_Answer: C_**

When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.

However, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.

</details>
