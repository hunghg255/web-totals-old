/*! For license information please see 3504ed04.65b11d66.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[2030],{54976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var l=s(85893),i=s(11151);const r={sidebar_position:12,title:"Question 111 - 120",comment:!0,tags:["Javascript"]},c=void 0,t={id:"javascripts/question-12",title:"Question 111 - 120",description:"111. What's the output?",source:"@site/questions/javascripts/question-12.md",sourceDirName:"javascripts",slug:"/javascripts/question-12",permalink:"/questions/javascripts/question-12",draft:!1,unlisted:!1,editUrl:"https://github.com/hunghg255/web-totals/tree/main/questions/javascripts/question-12.md",tags:[{label:"Javascript",permalink:"/questions/tags/javascript"}],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Question 111 - 120",comment:!0,tags:["Javascript"]},sidebar:"tutorialSidebar",previous:{title:"Question 101 - 110",permalink:"/questions/javascripts/question-11"},next:{title:"Question 121 - 130",permalink:"/questions/javascripts/question-13"}},d={},o=[{value:"111. What&#39;s the output?",id:"111-whats-the-output",level:3},{value:"Answer: D",id:"answer-d",level:4},{value:"112. What&#39;s the output?",id:"112-whats-the-output",level:3},{value:"Answer: C",id:"answer-c",level:4},{value:"113. What&#39;s the output?",id:"113-whats-the-output",level:3},{value:"Answer: A",id:"answer-a",level:4},{value:"114. What will happen?",id:"114-what-will-happen",level:3},{value:"Answer: C",id:"answer-c-1",level:4},{value:"115. Which method(s) will return the value <code>&#39;Hello world!&#39;</code>?",id:"115-which-methods-will-return-the-value-hello-world",level:3},{value:"Answer: B",id:"answer-b",level:4},{value:"116. What&#39;s the output?",id:"116-whats-the-output",level:3},{value:"Answer: C",id:"answer-c-2",level:4},{value:"117. Which of the following options will return <code>6</code>?",id:"117-which-of-the-following-options-will-return-6",level:3},{value:"Answer: C",id:"answer-c-3",level:4},{value:"118. What&#39;s the output?",id:"118-whats-the-output",level:3},{value:"Answer: B",id:"answer-b-1",level:4},{value:"119. What&#39;s the output?",id:"119-whats-the-output",level:3},{value:"Answer: B",id:"answer-b-2",level:4},{value:"120. What&#39;s the output?",id:"120-whats-the-output",level:3},{value:"Answer: B",id:"answer-b-3",level:4}];function a(e){const n={code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"111-whats-the-output",children:"111. What's the output?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"let name = 'Lydia';\n\nfunction getName() {\n  console.log(name);\n  let name = 'Sarah';\n}\n\ngetName();\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A: Lydia"}),"\n",(0,l.jsx)(n.li,{children:"B: Sarah"}),"\n",(0,l.jsxs)(n.li,{children:["C: ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(n.li,{children:["D: ",(0,l.jsx)(n.code,{children:"ReferenceError"})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-d",children:"Answer: D"}),(0,l.jsxs)(n.p,{children:["Each function has its own ",(0,l.jsx)(n.em,{children:"execution context"})," (or ",(0,l.jsx)(n.em,{children:"scope"}),"). The ",(0,l.jsx)(n.code,{children:"getName"})," function first looks within its own context (scope) to see if it contains the variable ",(0,l.jsx)(n.code,{children:"name"})," we're trying to access. In this case, the ",(0,l.jsx)(n.code,{children:"getName"})," function contains its own ",(0,l.jsx)(n.code,{children:"name"})," variable: we declare the variable ",(0,l.jsx)(n.code,{children:"name"})," with the ",(0,l.jsx)(n.code,{children:"let"})," keyword, and with the value of ",(0,l.jsx)(n.code,{children:"'Sarah'"}),"."]}),(0,l.jsxs)(n.p,{children:["Variables with the ",(0,l.jsx)(n.code,{children:"let"})," keyword (and ",(0,l.jsx)(n.code,{children:"const"}),") are hoisted, but unlike ",(0,l.jsx)(n.code,{children:"var"}),", don't get ",(0,l.jsx)("i",{children:"initialized"}),'. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ',(0,l.jsx)(n.code,{children:"ReferenceError"}),"."]}),(0,l.jsxs)(n.p,{children:["If we wouldn't have declared the ",(0,l.jsx)(n.code,{children:"name"})," variable within the ",(0,l.jsx)(n.code,{children:"getName"})," function, the javascript engine would've looked down the ",(0,l.jsx)(n.em,{children:"scope chain"}),". The outer scope has a variable called ",(0,l.jsx)(n.code,{children:"name"})," with the value of ",(0,l.jsx)(n.code,{children:"Lydia"}),". In that case, it would've logged ",(0,l.jsx)(n.code,{children:"Lydia"}),"."]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"let name = 'Lydia';\n\nfunction getName() {\n  console.log(name);\n}\n\ngetName(); // Lydia\n"})})]})]}),"\n",(0,l.jsx)(n.h3,{id:"112-whats-the-output",children:"112. What's the output?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"function* generatorOne() {\n  yield ['a', 'b', 'c'];\n}\n\nfunction* generatorTwo() {\n  yield* ['a', 'b', 'c'];\n}\n\nconst one = generatorOne();\nconst two = generatorTwo();\n\nconsole.log(one.next().value);\nconsole.log(two.next().value);\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A: ",(0,l.jsx)(n.code,{children:"a"})," and ",(0,l.jsx)(n.code,{children:"a"})]}),"\n",(0,l.jsxs)(n.li,{children:["B: ",(0,l.jsx)(n.code,{children:"a"})," and ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(n.li,{children:["C: ",(0,l.jsx)(n.code,{children:"['a', 'b', 'c']"})," and ",(0,l.jsx)(n.code,{children:"a"})]}),"\n",(0,l.jsxs)(n.li,{children:["D: ",(0,l.jsx)(n.code,{children:"a"})," and ",(0,l.jsx)(n.code,{children:"['a', 'b', 'c']"})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-c",children:"Answer: C"}),(0,l.jsxs)(n.p,{children:["With the ",(0,l.jsx)(n.code,{children:"yield"})," keyword, we ",(0,l.jsx)(n.code,{children:"yield"})," values in a generator function. With the ",(0,l.jsx)(n.code,{children:"yield*"})," keyword, we can yield values from another generator function, or iterable object (for example an array)."]}),(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.code,{children:"generatorOne"}),", we yield the entire array ",(0,l.jsx)(n.code,{children:"['a', 'b', 'c']"})," using the ",(0,l.jsx)(n.code,{children:"yield"})," keyword. The value of ",(0,l.jsx)(n.code,{children:"value"})," property on the object returned by the ",(0,l.jsx)(n.code,{children:"next"})," method on ",(0,l.jsx)(n.code,{children:"one"})," (",(0,l.jsx)(n.code,{children:"one.next().value"}),") is equal to the entire array ",(0,l.jsx)(n.code,{children:"['a', 'b', 'c']"}),"."]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(one.next().value); // ['a', 'b', 'c']\nconsole.log(one.next().value); // undefined\n"})}),(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.code,{children:"generatorTwo"}),", we use the ",(0,l.jsx)(n.code,{children:"yield*"})," keyword. This means that the first yielded value of ",(0,l.jsx)(n.code,{children:"two"}),", is equal to the first yielded value in the iterator. The iterator is the array ",(0,l.jsx)(n.code,{children:"['a', 'b', 'c']"}),". The first yielded value is ",(0,l.jsx)(n.code,{children:"a"}),", so the first time we call ",(0,l.jsx)(n.code,{children:"two.next().value"}),", ",(0,l.jsx)(n.code,{children:"a"})," is returned."]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(two.next().value); // 'a'\nconsole.log(two.next().value); // 'b'\nconsole.log(two.next().value); // 'c'\nconsole.log(two.next().value); // undefined\n"})})]})]}),"\n",(0,l.jsx)(n.h3,{id:"113-whats-the-output",children:"113. What's the output?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(`${((x) => x)('I love')} to program`);\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A: ",(0,l.jsx)(n.code,{children:"I love to program"})]}),"\n",(0,l.jsxs)(n.li,{children:["B: ",(0,l.jsx)(n.code,{children:"undefined to program"})]}),"\n",(0,l.jsxs)(n.li,{children:["C: ",(0,l.jsx)(n.code,{children:"${(x => x)('I love') to program"})]}),"\n",(0,l.jsxs)(n.li,{children:["D: ",(0,l.jsx)(n.code,{children:"TypeError"})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-a",children:"Answer: A"}),(0,l.jsxs)(n.p,{children:["Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function ",(0,l.jsx)(n.code,{children:"(x => x)('I love')"})," in this case. We pass the value ",(0,l.jsx)(n.code,{children:"'I love'"})," as an argument to the ",(0,l.jsx)(n.code,{children:"x => x"})," arrow function. ",(0,l.jsx)(n.code,{children:"x"})," is equal to ",(0,l.jsx)(n.code,{children:"'I love'"}),", which gets returned. This results in ",(0,l.jsx)(n.code,{children:"I love to program"}),"."]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"114-what-will-happen",children:"114. What will happen?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"let config = {\n  alert: setInterval(() => {\n    console.log('Alert!');\n  }, 1000),\n};\n\nconfig = null;\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A: The ",(0,l.jsx)(n.code,{children:"setInterval"})," callback won't be invoked"]}),"\n",(0,l.jsxs)(n.li,{children:["B: The ",(0,l.jsx)(n.code,{children:"setInterval"})," callback gets invoked once"]}),"\n",(0,l.jsxs)(n.li,{children:["C: The ",(0,l.jsx)(n.code,{children:"setInterval"})," callback will still be called every second"]}),"\n",(0,l.jsxs)(n.li,{children:["D: We never invoked ",(0,l.jsx)(n.code,{children:"config.alert()"}),", config is ",(0,l.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-c-1",children:"Answer: C"}),(0,l.jsxs)(n.p,{children:["Normally when we set objects equal to ",(0,l.jsx)(n.code,{children:"null"}),", those objects get ",(0,l.jsx)(n.em,{children:"garbage collected"})," as there is no reference anymore to that object. However, since the callback function within ",(0,l.jsx)(n.code,{children:"setInterval"})," is an arrow function (thus bound to the ",(0,l.jsx)(n.code,{children:"config"})," object), the callback function still holds a reference to the ",(0,l.jsx)(n.code,{children:"config"})," object.\nAs long as there is a reference, the object won't get garbage collected.\nSince this is an interval, setting ",(0,l.jsx)(n.code,{children:"config"})," to ",(0,l.jsx)(n.code,{children:"null"})," or ",(0,l.jsx)(n.code,{children:"delete"}),"-ing ",(0,l.jsx)(n.code,{children:"config.alert"})," won't garbage-collect the interval, so the interval will still be called.\nIt should be cleared with ",(0,l.jsx)(n.code,{children:"clearInterval(config.alert)"})," to remove it from memory.\nSince it was not cleared, the ",(0,l.jsx)(n.code,{children:"setInterval"})," callback function will still get invoked every 1000ms (1s)."]})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"115-which-methods-will-return-the-value-hello-world",children:["115. Which method(s) will return the value ",(0,l.jsx)(n.code,{children:"'Hello world!'"}),"?"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const myMap = new Map();\nconst myFunc = () => 'greeting';\n\nmyMap.set(myFunc, 'Hello world!');\n\n//1\nmyMap.get('greeting');\n//2\nmyMap.get(myFunc);\n//3\nmyMap.get(() => 'greeting');\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A: 1"}),"\n",(0,l.jsx)(n.li,{children:"B: 2"}),"\n",(0,l.jsx)(n.li,{children:"C: 2 and 3"}),"\n",(0,l.jsx)(n.li,{children:"D: All of them"}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-b",children:"Answer: B"}),(0,l.jsxs)(n.p,{children:["When adding a key/value pair using the ",(0,l.jsx)(n.code,{children:"set"})," method, the key will be the value of the first argument passed to the ",(0,l.jsx)(n.code,{children:"set"})," function, and the value will be the second argument passed to the ",(0,l.jsx)(n.code,{children:"set"})," function. The key is the ",(0,l.jsx)(n.em,{children:"function"})," ",(0,l.jsx)(n.code,{children:"() => 'greeting'"})," in this case, and the value ",(0,l.jsx)(n.code,{children:"'Hello world'"}),". ",(0,l.jsx)(n.code,{children:"myMap"})," is now ",(0,l.jsx)(n.code,{children:"{ () => 'greeting' => 'Hello world!' }"}),"."]}),(0,l.jsxs)(n.p,{children:["1 is wrong, since the key is not ",(0,l.jsx)(n.code,{children:"'greeting'"})," but ",(0,l.jsx)(n.code,{children:"() => 'greeting'"}),".\n3 is wrong, since we're creating a new function by passing it as a parameter to the ",(0,l.jsx)(n.code,{children:"get"})," method. Object interact by ",(0,l.jsx)(n.em,{children:"reference"}),". Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory."]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"116-whats-the-output",children:"116. What's the output?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nconst changeAge = (x = { ...person }) => (x.age += 1);\nconst changeAgeAndName = (x = { ...person }) => {\n  x.age += 1;\n  x.name = 'Sarah';\n};\n\nchangeAge(person);\nchangeAgeAndName();\n\nconsole.log(person);\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A: ",(0,l.jsx)(n.code,{children:'{name: "Sarah", age: 22}'})]}),"\n",(0,l.jsxs)(n.li,{children:["B: ",(0,l.jsx)(n.code,{children:'{name: "Sarah", age: 23}'})]}),"\n",(0,l.jsxs)(n.li,{children:["C: ",(0,l.jsx)(n.code,{children:'{name: "Lydia", age: 22}'})]}),"\n",(0,l.jsxs)(n.li,{children:["D: ",(0,l.jsx)(n.code,{children:'{name: "Lydia", age: 23}'})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-c-2",children:"Answer: C"}),(0,l.jsxs)(n.p,{children:["Both the ",(0,l.jsx)(n.code,{children:"changeAge"})," and ",(0,l.jsx)(n.code,{children:"changeAgeAndName"})," functions have a default parameter, namely a ",(0,l.jsx)(n.em,{children:"newly"})," created object ",(0,l.jsx)(n.code,{children:"{ ...person }"}),". This object has copies of all the key/values in the ",(0,l.jsx)(n.code,{children:"person"})," object."]}),(0,l.jsxs)(n.p,{children:["First, we invoke the ",(0,l.jsx)(n.code,{children:"changeAge"})," function and pass the ",(0,l.jsx)(n.code,{children:"person"})," object as its argument. This function increases the value of the ",(0,l.jsx)(n.code,{children:"age"})," property by 1. ",(0,l.jsx)(n.code,{children:"person"})," is now ",(0,l.jsx)(n.code,{children:'{ name: "Lydia", age: 22 }'}),"."]}),(0,l.jsxs)(n.p,{children:["Then, we invoke the ",(0,l.jsx)(n.code,{children:"changeAgeAndName"})," function, however we don't pass a parameter. Instead, the value of ",(0,l.jsx)(n.code,{children:"x"})," is equal to a ",(0,l.jsx)(n.em,{children:"new"})," object: ",(0,l.jsx)(n.code,{children:"{ ...person }"}),". Since it's a new object, it doesn't affect the values of the properties on the ",(0,l.jsx)(n.code,{children:"person"})," object. ",(0,l.jsx)(n.code,{children:"person"})," is still equal to ",(0,l.jsx)(n.code,{children:'{ name: "Lydia", age: 22 }'}),"."]})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"117-which-of-the-following-options-will-return-6",children:["117. Which of the following options will return ",(0,l.jsx)(n.code,{children:"6"}),"?"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"function sumValues(x, y, z) {\n  return x + y + z;\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A: ",(0,l.jsx)(n.code,{children:"sumValues([...1, 2, 3])"})]}),"\n",(0,l.jsxs)(n.li,{children:["B: ",(0,l.jsx)(n.code,{children:"sumValues([...[1, 2, 3]])"})]}),"\n",(0,l.jsxs)(n.li,{children:["C: ",(0,l.jsx)(n.code,{children:"sumValues(...[1, 2, 3])"})]}),"\n",(0,l.jsxs)(n.li,{children:["D: ",(0,l.jsx)(n.code,{children:"sumValues([1, 2, 3])"})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-c-3",children:"Answer: C"}),(0,l.jsxs)(n.p,{children:["With the spread operator ",(0,l.jsx)(n.code,{children:"..."}),", we can ",(0,l.jsx)(n.em,{children:"spread"})," iterables to individual elements. The ",(0,l.jsx)(n.code,{children:"sumValues"})," function receives three arguments: ",(0,l.jsx)(n.code,{children:"x"}),", ",(0,l.jsx)(n.code,{children:"y"})," and ",(0,l.jsx)(n.code,{children:"z"}),". ",(0,l.jsx)(n.code,{children:"...[1, 2, 3]"})," will result in ",(0,l.jsx)(n.code,{children:"1, 2, 3"}),", which we pass to the ",(0,l.jsx)(n.code,{children:"sumValues"})," function."]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"118-whats-the-output",children:"118. What's the output?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"let num = 1;\nconst list = ['\ud83e\udd73', '\ud83e\udd20', '\ud83e\udd70', '\ud83e\udd2a'];\n\nconsole.log(list[(num += 1)]);\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A: ",(0,l.jsx)(n.code,{children:"\ud83e\udd20"})]}),"\n",(0,l.jsxs)(n.li,{children:["B: ",(0,l.jsx)(n.code,{children:"\ud83e\udd70"})]}),"\n",(0,l.jsxs)(n.li,{children:["C: ",(0,l.jsx)(n.code,{children:"SyntaxError"})]}),"\n",(0,l.jsxs)(n.li,{children:["D: ",(0,l.jsx)(n.code,{children:"ReferenceError"})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-b-1",children:"Answer: B"}),(0,l.jsxs)(n.p,{children:["With the ",(0,l.jsx)(n.code,{children:"+="})," operand, we're incrementing the value of ",(0,l.jsx)(n.code,{children:"num"})," by ",(0,l.jsx)(n.code,{children:"1"}),". ",(0,l.jsx)(n.code,{children:"num"})," had the initial value ",(0,l.jsx)(n.code,{children:"1"}),", so ",(0,l.jsx)(n.code,{children:"1 + 1"})," is ",(0,l.jsx)(n.code,{children:"2"}),". The item on the second index in the ",(0,l.jsx)(n.code,{children:"list"})," array is \ud83e\udd70, ",(0,l.jsx)(n.code,{children:"console.log(list[2])"})," prints \ud83e\udd70."]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"119-whats-the-output",children:"119. What's the output?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const person = {\n  firstName: 'Lydia',\n  lastName: 'Hallie',\n  pet: {\n    name: 'Mara',\n    breed: 'Dutch Tulip Hound',\n  },\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n};\n\nconsole.log(person.pet?.name);\nconsole.log(person.pet?.family?.name);\nconsole.log(person.getFullName?.());\nconsole.log(member.getLastName?.());\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A: ",(0,l.jsx)(n.code,{children:"undefined"})," ",(0,l.jsx)(n.code,{children:"undefined"})," ",(0,l.jsx)(n.code,{children:"undefined"})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(n.li,{children:["B: ",(0,l.jsx)(n.code,{children:"Mara"})," ",(0,l.jsx)(n.code,{children:"undefined"})," ",(0,l.jsx)(n.code,{children:"Lydia Hallie"})," ",(0,l.jsx)(n.code,{children:"ReferenceError"})]}),"\n",(0,l.jsxs)(n.li,{children:["C: ",(0,l.jsx)(n.code,{children:"Mara"})," ",(0,l.jsx)(n.code,{children:"null"})," ",(0,l.jsx)(n.code,{children:"Lydia Hallie"})," ",(0,l.jsx)(n.code,{children:"null"})]}),"\n",(0,l.jsxs)(n.li,{children:["D: ",(0,l.jsx)(n.code,{children:"null"})," ",(0,l.jsx)(n.code,{children:"ReferenceError"})," ",(0,l.jsx)(n.code,{children:"null"})," ",(0,l.jsx)(n.code,{children:"ReferenceError"})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-b-2",children:"Answer: B"}),(0,l.jsxs)(n.p,{children:["With the optional chaining operator ",(0,l.jsx)(n.code,{children:"?."}),", we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an ",(0,l.jsx)(n.code,{children:"undefined"})," or ",(0,l.jsx)(n.code,{children:"null"})," value (",(0,l.jsx)(n.em,{children:"nullish"}),"), the expression short-circuits and returns ",(0,l.jsx)(n.code,{children:"undefined"}),"."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"person.pet?.name"}),": ",(0,l.jsx)(n.code,{children:"person"})," has a property named ",(0,l.jsx)(n.code,{children:"pet"}),": ",(0,l.jsx)(n.code,{children:"person.pet"})," is not nullish. It has a property called ",(0,l.jsx)(n.code,{children:"name"}),", and returns ",(0,l.jsx)(n.code,{children:"Mara"}),".\n",(0,l.jsx)(n.code,{children:"person.pet?.family?.name"}),": ",(0,l.jsx)(n.code,{children:"person"})," has a property named ",(0,l.jsx)(n.code,{children:"pet"}),": ",(0,l.jsx)(n.code,{children:"person.pet"})," is not nullish. ",(0,l.jsx)(n.code,{children:"pet"})," does ",(0,l.jsx)(n.em,{children:"not"})," have a property called ",(0,l.jsx)(n.code,{children:"family"}),", ",(0,l.jsx)(n.code,{children:"person.pet.family"})," is nullish. The expression returns ",(0,l.jsx)(n.code,{children:"undefined"}),".\n",(0,l.jsx)(n.code,{children:"person.getFullName?.()"}),": ",(0,l.jsx)(n.code,{children:"person"})," has a property named ",(0,l.jsx)(n.code,{children:"getFullName"}),": ",(0,l.jsx)(n.code,{children:"person.getFullName()"})," is not nullish and can get invoked, which returns ",(0,l.jsx)(n.code,{children:"Lydia Hallie"}),".\n",(0,l.jsx)(n.code,{children:"member.getLastName?.()"}),": variable ",(0,l.jsx)(n.code,{children:"member"})," is non existent therefore a ",(0,l.jsx)(n.code,{children:"ReferenceError"})," gets thrown!"]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"120-whats-the-output",children:"120. What's the output?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const groceries = ['banana', 'apple', 'peanuts'];\n\nif (groceries.indexOf('banana')) {\n  console.log('We have to buy bananas!');\n} else {\n  console.log(`We don't have to buy bananas!`);\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A: We have to buy bananas!"}),"\n",(0,l.jsx)(n.li,{children:"B: We don't have to buy bananas"}),"\n",(0,l.jsxs)(n.li,{children:["C: ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(n.li,{children:["D: ",(0,l.jsx)(n.code,{children:"1"})]}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"Answer"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(n.h4,{id:"answer-b-3",children:"Answer: B"}),(0,l.jsxs)(n.p,{children:["We passed the condition ",(0,l.jsx)(n.code,{children:'groceries.indexOf("banana")'})," to the if-statement. ",(0,l.jsx)(n.code,{children:'groceries.indexOf("banana")'})," returns ",(0,l.jsx)(n.code,{children:"0"}),", which is a falsy value. Since the condition in the if-statement is falsy, the code in the ",(0,l.jsx)(n.code,{children:"else"})," block runs, and ",(0,l.jsx)(n.code,{children:"We don't have to buy bananas!"})," gets logged."]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},75251:(e,n,s)=>{var l=s(67294),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var l,r={},o=null,a=null;for(l in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,l)&&!d.hasOwnProperty(l)&&(r[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===r[l]&&(r[l]=n[l]);return{$$typeof:i,type:e,key:o,ref:a,props:r,_owner:t.current}}n.Fragment=r,n.jsx=o,n.jsxs=o},85893:(e,n,s)=>{e.exports=s(75251)},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var l=s(67294);const i={},r=l.createContext(i);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);