/*! For license information please see 84068cca.a4b5c486.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[1641],{99161:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=s(85893),t=s(11151);const r={sidebar_position:1,title:"Question 1 - 10",comment:!0,date:"2022-10-23 11:03:14",tags:["Javascript"]},l=void 0,c={id:"javascripts/question-1",title:"Question 1 - 10",description:"Q1. What's the output?",source:"@site/questions/javascripts/question-1.md",sourceDirName:"javascripts",slug:"/javascripts/question-1",permalink:"/questions/javascripts/question-1",draft:!1,unlisted:!1,editUrl:"https://github.com/hunghg255/web-totals/tree/main/questions/javascripts/question-1.md",tags:[{label:"Javascript",permalink:"/questions/tags/javascript"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Question 1 - 10",comment:!0,date:"2022-10-23 11:03:14",tags:["Javascript"]},sidebar:"tutorialSidebar",previous:{title:"Questions",permalink:"/questions/"},next:{title:"Question 11 - 20",permalink:"/questions/javascripts/question-2"}},o={},h=[{value:"Q1. What&#39;s the output?",id:"q1-whats-the-output",level:3},{value:"Q2. What&#39;s the output?",id:"q2-whats-the-output",level:3},{value:"Q3. What&#39;s the output?",id:"q3-whats-the-output",level:3},{value:"Q4. What&#39;s the output?",id:"q4-whats-the-output",level:3},{value:"Q5. Which one is true?",id:"q5-which-one-is-true",level:3},{value:"Q6. What&#39;s the output?",id:"q6-whats-the-output",level:3},{value:"Q7. What&#39;s the output?",id:"q7-whats-the-output",level:3},{value:"Q8. What&#39;s the output?",id:"q8-whats-the-output",level:3},{value:"Q9. What&#39;s the output?",id:"q9-whats-the-output",level:3},{value:"Q10. What happens when we do this?",id:"q10-what-happens-when-we-do-this",level:3}];function a(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"q1-whats-the-output",children:"Q1. What's the output?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: Lydia and undefined"}),"\n",(0,i.jsx)(n.li,{children:"B: Lydia and ReferenceError"}),"\n",(0,i.jsx)(n.li,{children:"C: ReferenceError and 21"}),"\n",(0,i.jsx)(n.li,{children:"D: undefined and ReferenceError"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: D"})})}),(0,i.jsxs)(n.p,{children:["Within the function, we first declare the ",(0,i.jsx)(n.code,{children:"name"})," variable with the ",(0,i.jsx)(n.code,{children:"var"})," keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of ",(0,i.jsx)(n.code,{children:"undefined"}),", until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the ",(0,i.jsx)(n.code,{children:"name"})," variable, so it still holds the value of ",(0,i.jsx)(n.code,{children:"undefined"}),"."]}),(0,i.jsxs)(n.p,{children:["Variables with the ",(0,i.jsx)(n.code,{children:"let"})," keyword (and ",(0,i.jsx)(n.code,{children:"const"}),") are hoisted, but unlike ",(0,i.jsx)(n.code,{children:"var"}),", don't get ",(0,i.jsx)("i",{children:"initialized"}),'. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ',(0,i.jsx)(n.code,{children:"ReferenceError"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"q2-whats-the-output",children:"Q2. What's the output?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: 0 1 2 and 0 1 2"}),"\n",(0,i.jsx)(n.li,{children:"B: 0 1 2 and 3 3 3"}),"\n",(0,i.jsx)(n.li,{children:"C: 3 3 3 and 0 1 2"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: C"})})}),(0,i.jsxs)(n.p,{children:["Because of the event queue in JavaScript, the ",(0,i.jsx)(n.code,{children:"setTimeout"})," callback function is called ",(0,i.jsx)(n.em,{children:"after"})," the loop has been executed. Since the variable ",(0,i.jsx)(n.code,{children:"i"})," in the first loop was declared using the ",(0,i.jsx)(n.code,{children:"var"})," keyword, this value was global. During the loop, we incremented the value of ",(0,i.jsx)(n.code,{children:"i"})," by ",(0,i.jsx)(n.code,{children:"1"})," each time, using the unary operator ",(0,i.jsx)(n.code,{children:"++"}),". By the time the ",(0,i.jsx)(n.code,{children:"setTimeout"})," callback function was invoked, ",(0,i.jsx)(n.code,{children:"i"})," was equal to ",(0,i.jsx)(n.code,{children:"3"})," in the first example."]}),(0,i.jsxs)(n.p,{children:["In the second loop, the variable ",(0,i.jsx)(n.code,{children:"i"})," was declared using the ",(0,i.jsx)(n.code,{children:"let"})," keyword: variables declared with the ",(0,i.jsx)(n.code,{children:"let"})," (and ",(0,i.jsx)(n.code,{children:"const"}),") keyword are block-scoped (a block is anything between ",(0,i.jsx)(n.code,{children:"{ }"}),"). During each iteration, ",(0,i.jsx)(n.code,{children:"i"})," will have a new value, and each value is scoped inside the loop."]})]}),"\n",(0,i.jsx)(n.h3,{id:"q3-whats-the-output",children:"Q3. What's the output?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius,\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: 20 and 62.83185307179586"}),"\n",(0,i.jsx)(n.li,{children:"B: 20 and NaN"}),"\n",(0,i.jsx)(n.li,{children:"C: 20 and 63"}),"\n",(0,i.jsx)(n.li,{children:"D: NaN and 63"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: B"})})}),(0,i.jsxs)(n.p,{children:["Note that the value of ",(0,i.jsx)(n.code,{children:"diameter"})," is a regular function, whereas the value of ",(0,i.jsx)(n.code,{children:"perimeter"})," is an arrow function."]}),(0,i.jsxs)(n.p,{children:["With arrow functions, the ",(0,i.jsx)(n.code,{children:"this"})," keyword refers to its current surrounding scope, unlike regular functions! This means that when we call ",(0,i.jsx)(n.code,{children:"perimeter"}),", it doesn't refer to the shape object, but to its surrounding scope (window for example)."]}),(0,i.jsxs)(n.p,{children:["There is no value ",(0,i.jsx)(n.code,{children:"radius"})," on that object, which returns ",(0,i.jsx)(n.code,{children:"NaN"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"q4-whats-the-output",children:"Q4. What's the output?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"console.log(+true);\nconsole.log(!'Lydia');\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: 1 and false"}),"\n",(0,i.jsx)(n.li,{children:"B: false and NaN"}),"\n",(0,i.jsx)(n.li,{children:"C: false and false"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: A"})})}),(0,i.jsxs)(n.p,{children:["The unary plus tries to convert an operand to a number. ",(0,i.jsx)(n.code,{children:"true"})," is ",(0,i.jsx)(n.code,{children:"1"}),", and ",(0,i.jsx)(n.code,{children:"false"})," is ",(0,i.jsx)(n.code,{children:"0"}),"."]}),(0,i.jsxs)(n.p,{children:["The string ",(0,i.jsx)(n.code,{children:"'Lydia'"}),' is a truthy value. What we\'re actually asking, is "is this truthy value falsy?". This returns ',(0,i.jsx)(n.code,{children:"false"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"q5-which-one-is-true",children:"Q5. Which one is true?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const bird = {\n  size: 'small',\n};\n\nconst mouse = {\n  name: 'Mickey',\n  small: true,\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: mouse.bird.size is not valid"}),"\n",(0,i.jsx)(n.li,{children:"B: mouse[bird.size] is not valid"}),"\n",(0,i.jsx)(n.li,{children:'C: mouse[bird["size"]] is not valid'}),"\n",(0,i.jsx)(n.li,{children:"D: All of them are valid"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: A"})})}),(0,i.jsxs)(n.p,{children:["In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not ",(0,i.jsx)(n.em,{children:"type"})," them as strings, they are always converted into strings under the hood."]}),(0,i.jsxs)(n.p,{children:["JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket ",(0,i.jsx)(n.code,{children:"["})," and keeps going until it finds the closing bracket ",(0,i.jsx)(n.code,{children:"]"}),". Only then, it will evaluate the statement."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mouse[bird.size]"}),": First it evaluates ",(0,i.jsx)(n.code,{children:"bird.size"}),", which is ",(0,i.jsx)(n.code,{children:'"small"'}),". ",(0,i.jsx)(n.code,{children:'mouse["small"]'})," returns ",(0,i.jsx)(n.code,{children:"true"})]}),(0,i.jsxs)(n.p,{children:["However, with dot notation, this doesn't happen. ",(0,i.jsx)(n.code,{children:"mouse"})," does not have a key called ",(0,i.jsx)(n.code,{children:"bird"}),", which means that ",(0,i.jsx)(n.code,{children:"mouse.bird"})," is ",(0,i.jsx)(n.code,{children:"undefined"}),". Then, we ask for the ",(0,i.jsx)(n.code,{children:"size"})," using dot notation: ",(0,i.jsx)(n.code,{children:"mouse.bird.size"}),". Since ",(0,i.jsx)(n.code,{children:"mouse.bird"})," is ",(0,i.jsx)(n.code,{children:"undefined"}),", we're actually asking ",(0,i.jsx)(n.code,{children:"undefined.size"}),". This isn't valid, and will throw an error similar to ",(0,i.jsx)(n.code,{children:'Cannot read property "size" of undefined'}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"q6-whats-the-output",children:"Q6. What's the output?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let c = { greeting: 'Hey!' };\nlet d;\n\nd = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: Hello"}),"\n",(0,i.jsx)(n.li,{children:"B: Hey!"}),"\n",(0,i.jsx)(n.li,{children:"C: undefined"}),"\n",(0,i.jsx)(n.li,{children:"D: ReferenceError"}),"\n",(0,i.jsx)(n.li,{children:"E: TypeError"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: A"})})}),(0,i.jsxs)(n.p,{children:["In JavaScript, all objects interact by ",(0,i.jsx)(n.em,{children:"reference"})," when setting them equal to each other."]}),(0,i.jsxs)(n.p,{children:["First, variable ",(0,i.jsx)(n.code,{children:"c"})," holds a value to an object. Later, we assign ",(0,i.jsx)(n.code,{children:"d"})," with the same reference that ",(0,i.jsx)(n.code,{children:"c"})," has to the object."]}),(0,i.jsx)("img",{src:"https://i.imgur.com/ko5k0fs.png",width:"200"}),(0,i.jsx)(n.p,{children:"When you change one object, you change all of them."})]}),"\n",(0,i.jsx)(n.h3,{id:"q7-whats-the-output",children:"Q7. What's the output?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: true false true"}),"\n",(0,i.jsx)(n.li,{children:"B: false false true"}),"\n",(0,i.jsx)(n.li,{children:"C: true false false"}),"\n",(0,i.jsx)(n.li,{children:"D: false true true"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: C"})})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"new Number()"})," is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object."]}),(0,i.jsxs)(n.p,{children:["When we use the ",(0,i.jsx)(n.code,{children:"=="})," operator, it only checks whether it has the same ",(0,i.jsx)(n.em,{children:"value"}),". They both have the value of ",(0,i.jsx)(n.code,{children:"3"}),", so it returns ",(0,i.jsx)(n.code,{children:"true"}),"."]}),(0,i.jsxs)(n.p,{children:["However, when we use the ",(0,i.jsx)(n.code,{children:"==="})," operator, both value ",(0,i.jsx)(n.em,{children:"and"})," type should be the same. It's not: ",(0,i.jsx)(n.code,{children:"new Number()"})," is not a number, it's an ",(0,i.jsx)(n.strong,{children:"object"}),". Both return ",(0,i.jsx)(n.code,{children:"false."})]})]}),"\n",(0,i.jsx)(n.h3,{id:"q8-whats-the-output",children:"Q8. What's the output?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = 'green' } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: 'purple' });\nconsole.log(freddie.colorChange('orange'));\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: orange"}),"\n",(0,i.jsx)(n.li,{children:"B: purple"}),"\n",(0,i.jsx)(n.li,{children:"C: green"}),"\n",(0,i.jsx)(n.li,{children:"D: TypeError"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: D"})})}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"colorChange"})," function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since ",(0,i.jsx)(n.code,{children:"freddie"})," is an instance of class Chameleon, the function cannot be called upon it. A ",(0,i.jsx)(n.code,{children:"TypeError"})," is thrown."]})]}),"\n",(0,i.jsx)(n.h3,{id:"q9-whats-the-output",children:"Q9. What's the output?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n","A: { }","\n"]}),"\n",(0,i.jsx)(n.li,{children:"B: ReferenceError: greetign is not defined"}),"\n",(0,i.jsx)(n.li,{children:"C: undefined"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: A"})})}),(0,i.jsxs)(n.p,{children:["It logs the object, because we just created an empty object on the global object! When we mistyped ",(0,i.jsx)(n.code,{children:"greeting"})," as ",(0,i.jsx)(n.code,{children:"greetign"}),", the JS interpreter actually saw this as ",(0,i.jsx)(n.code,{children:"global.greetign = {}"})," (or ",(0,i.jsx)(n.code,{children:"window.greetign = {}"})," in a browser)."]}),(0,i.jsxs)(n.p,{children:["In order to avoid this, we can use ",(0,i.jsx)(n.code,{children:'"use strict"'}),". This makes sure that you have declared a variable before setting it equal to anything."]})]}),"\n",(0,i.jsx)(n.h3,{id:"q10-what-happens-when-we-do-this",children:"Q10. What happens when we do this?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function bark() {\n  console.log('Woof!');\n}\n\nbark.animal = 'dog';\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A: Nothing, this is totally fine!"}),"\n",(0,i.jsx)(n.li,{children:"B: SyntaxError. You cannot add properties to a function this way."}),"\n",(0,i.jsx)(n.li,{children:'C: "Woof" gets logged.'}),"\n",(0,i.jsx)(n.li,{children:"D: ReferenceError"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"\ud83d\udca1 Answer"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Answer: A"})})}),(0,i.jsx)(n.p,{children:"This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)"}),(0,i.jsx)(n.p,{children:"A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable."})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},75251:(e,n,s)=>{var i=s(67294),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var i,r={},h=null,a=null;for(i in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,i)&&!o.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:t,type:e,key:h,ref:a,props:r,_owner:c.current}}n.Fragment=r,n.jsx=h,n.jsxs=h},85893:(e,n,s)=>{e.exports=s(75251)},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var i=s(67294);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);