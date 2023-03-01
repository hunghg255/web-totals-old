---
sidebar_position: 16
title: Question 151 - 155
comment: true
tags:
  - Javascript
---

### 150. What's the output?

```javascript
const animals = {};
let dog = { emoji: '🐶' };
let cat = { emoji: '🐈' };

animals[dog] = { ...dog, name: 'Mara' };
animals[cat] = { ...cat, name: 'Sara' };

console.log(animals[dog]);
```

- A: `{ emoji: "🐶", name: "Mara" }`
- B: `{ emoji: "🐈", name: "Sara" }`
- C: `undefined`
- D: `ReferenceError`

<details>
<summary>
<b>Answer</b>
</summary>
<p>

#### Answer: B

Object keys are converted to strings.

Since the value of `dog` is an object, `animals[dog]` actually means that we’re creating a new property called `"object Object"` equal to the new object. `animals["object Object"]` is now equal to `{ emoji: "🐶", name: "Mara"}`.

`cat` is also an object, which means that `animals[cat]` actually means that we’re overwriting the value of `animals["object Object"]` with the new cat properties.

Logging `animals[dog]`, or actually `animals["object Object"]` since converting the `dog` object to a string results `"object Object"`, returns the `{ emoji: "🐈", name: "Sara" }`.

</p>
</details>

### 151. What's the output?

```javascript
const user = {
  email: 'my@email.com',
  updateEmail: (email) => {
    this.email = email;
  },
};

user.updateEmail('new@email.com');
console.log(user.email);
```

- A: `my@email.com`
- B: `new@email.com`
- C: `undefined`
- D: `ReferenceError`

<details>
<summary>
<b>Answer</b>
</summary>
<p>

#### Answer: A

The `updateEmail` function is an arrow function, and is not bound to the `user` object. This means that the `this` keyword is not referring to the `user` object, but refers to the global scope in this case. The value of `email` within the `user` object does not get updated. When logging the value of `user.email`, the original value of `my@email.com` gets returned.

</p>
</details>

### 152. What's the output?

```javascript
const promise1 = Promise.resolve('First');
const promise2 = Promise.resolve('Second');
const promise3 = Promise.reject('Third');
const promise4 = Promise.resolve('Fourth');

const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2]);
  const res2 = await Promise.all([promise3, promise4]);
  return [res1, res2];
};

runPromises()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

- A: `[['First', 'Second'], ['Fourth']]`
- B: `[['First', 'Second'], ['Third', 'Fourth']]`
- C: `[['First', 'Second']]`
- D: `'Third'`

<details>
<summary>
<b>Answer</b>
</summary>
<p>

#### Answer: D

The `Promise.all` method runs the passed promises in parallel. If one promise fails, the `Promise.all` method _rejects_ with the value of the rejected promise. In this case, `promise3` rejected with the value `"Third"`. We’re catching the rejected value in the chained `catch` method on the `runPromises` invocation to catch any errors within the `runPromises` function. Only `"Third"` gets logged, since `promise3` rejected with this value.

</p>
</details>

### 153. What should the value of `method` be to log `{ name: "Lydia", age: 22 }`?

```javascript
const keys = ['name', 'age'];
const values = ['Lydia', 22];

const method =
  /* ?? */
  Object[method](
    keys.map((_, i) => {
      return [keys[i], values[i]];
    }),
  ); // { name: "Lydia", age: 22 }
```

- A: `entries`
- B: `values`
- C: `fromEntries`
- D: `forEach`

<details>
<summary>
<b>Answer</b>
</summary>
<p>

#### Answer: C

The `fromEntries` method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the `keys` array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index.

This creates an array of subarrays containing the correct keys and values, which results in `{ name: "Lydia", age: 22 }`

</p>
</details>

### 154. What's the output?

```javascript
const createMember = ({ email, address = {} }) => {
  const validEmail = /.+\@.+\..+/.test(email);
  if (!validEmail) throw new Error('Valid email pls');

  return {
    email,
    address: address ? address : null,
  };
};

const member = createMember({ email: 'my@email.com' });
console.log(member);
```

- A: `{ email: "my@email.com", address: null }`
- B: `{ email: "my@email.com" }`
- C: `{ email: "my@email.com", address: {} }`
- D: `{ email: "my@email.com", address: undefined }`

<details>
<summary>
<b>Answer</b>
</summary>
<p>

#### Answer: C

The default value of `address` is an empty object `{}`. When we set the variable `member` equal to the object returned by the `createMember` function, we didn't pass a value for address, which means that the value of address is the default empty object `{}`. An empty object is a truthy value, which means that the condition of the `address ? address : null` conditional returns `true`. The value of address is the empty object `{}`.

</p>
</details>

### 155. What's the output?

```javascript
let randomValue = { name: 'Lydia' };
randomValue = 23;

if (!typeof randomValue === 'string') {
  console.log("It's not a string!");
} else {
  console.log("Yay it's a string!");
}
```

- A: `It's not a string!`
- B: `Yay it's a string!`
- C: `TypeError`
- D: `undefined`

<details>
<summary>
<b>Answer</b>
</summary>
<p>

#### Answer: B

The condition within the `if` statement checks whether the value of `!typeof randomValue` is equal to `"string"`. The `!` operator converts the value to a boolean value. If the value is truthy, the returned value will be `false`, if the value is falsy, the returned value will be `true`. In this case, the returned value of `typeof randomValue` is the truthy value `"number"`, meaning that the value of `!typeof randomValue` is the boolean value `false`.

`!typeof randomValue === "string"` always returns false, since we're actually checking `false === "string"`. Since the condition returned `false`, the code block of the `else` statement gets run, and `Yay it's a string!` gets logged.

</p>
</details>
