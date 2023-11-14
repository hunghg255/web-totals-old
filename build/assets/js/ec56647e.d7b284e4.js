/*! For license information please see ec56647e.d7b284e4.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[5921],{91105:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(85893),t=s(11151);const i={sidebar_position:16,title:"Question 151 - 155",comment:!0,tags:["Javascript"]},l=void 0,c={id:"javascripts/question-16",title:"Question 151 - 155",description:"150. What's the output?",source:"@site/questions/javascripts/question-16.md",sourceDirName:"javascripts",slug:"/javascripts/question-16",permalink:"/questions/javascripts/question-16",draft:!1,unlisted:!1,editUrl:"https://github.com/hunghg255/web-totals/tree/main/questions/javascripts/question-16.md",tags:[{label:"Javascript",permalink:"/questions/tags/javascript"}],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,title:"Question 151 - 155",comment:!0,tags:["Javascript"]},sidebar:"tutorialSidebar",previous:{title:"Question 141 - 150",permalink:"/questions/javascripts/question-15"}},a={},o=[{value:"150. What&#39;s the output?",id:"150-whats-the-output",level:3},{value:"Answer: B",id:"answer-b",level:4},{value:"151. What&#39;s the output?",id:"151-whats-the-output",level:3},{value:"Answer: A",id:"answer-a",level:4},{value:"152. What&#39;s the output?",id:"152-whats-the-output",level:3},{value:"Answer: D",id:"answer-d",level:4},{value:"153. What should the value of <code>method</code> be to log <code>{ name: &quot;Lydia&quot;, age: 22 }</code>?",id:"153-what-should-the-value-of-method-be-to-log--name-lydia-age-22-",level:3},{value:"Answer: C",id:"answer-c",level:4},{value:"154. What&#39;s the output?",id:"154-whats-the-output",level:3},{value:"Answer: C",id:"answer-c-1",level:4},{value:"155. What&#39;s the output?",id:"155-whats-the-output",level:3},{value:"Answer: B",id:"answer-b-1",level:4}];function d(e){const n={code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"150-whats-the-output",children:"150. What's the output?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const animals = {};\nlet dog = { emoji: '\ud83d\udc36' };\nlet cat = { emoji: '\ud83d\udc08' };\n\nanimals[dog] = { ...dog, name: 'Mara' };\nanimals[cat] = { ...cat, name: 'Sara' };\n\nconsole.log(animals[dog]);\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A: ",(0,r.jsx)(n.code,{children:'{ emoji: "\ud83d\udc36", name: "Mara" }'})]}),"\n",(0,r.jsxs)(n.li,{children:["B: ",(0,r.jsx)(n.code,{children:'{ emoji: "\ud83d\udc08", name: "Sara" }'})]}),"\n",(0,r.jsxs)(n.li,{children:["C: ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:["D: ",(0,r.jsx)(n.code,{children:"ReferenceError"})]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Answer"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.h4,{id:"answer-b",children:"Answer: B"}),(0,r.jsx)(n.p,{children:"Object keys are converted to strings."}),(0,r.jsxs)(n.p,{children:["Since the value of ",(0,r.jsx)(n.code,{children:"dog"})," is an object, ",(0,r.jsx)(n.code,{children:"animals[dog]"})," actually means that we\u2019re creating a new property called ",(0,r.jsx)(n.code,{children:'"object Object"'})," equal to the new object. ",(0,r.jsx)(n.code,{children:'animals["object Object"]'})," is now equal to ",(0,r.jsx)(n.code,{children:'{ emoji: "\ud83d\udc36", name: "Mara"}'}),"."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"cat"})," is also an object, which means that ",(0,r.jsx)(n.code,{children:"animals[cat]"})," actually means that we\u2019re overwriting the value of ",(0,r.jsx)(n.code,{children:'animals["object Object"]'})," with the new cat properties."]}),(0,r.jsxs)(n.p,{children:["Logging ",(0,r.jsx)(n.code,{children:"animals[dog]"}),", or actually ",(0,r.jsx)(n.code,{children:'animals["object Object"]'})," since converting the ",(0,r.jsx)(n.code,{children:"dog"})," object to a string results ",(0,r.jsx)(n.code,{children:'"object Object"'}),", returns the ",(0,r.jsx)(n.code,{children:'{ emoji: "\ud83d\udc08", name: "Sara" }'}),"."]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"151-whats-the-output",children:"151. What's the output?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const user = {\n  email: 'my@email.com',\n  updateEmail: (email) => {\n    this.email = email;\n  },\n};\n\nuser.updateEmail('new@email.com');\nconsole.log(user.email);\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A: ",(0,r.jsx)(n.code,{children:"my@email.com"})]}),"\n",(0,r.jsxs)(n.li,{children:["B: ",(0,r.jsx)(n.code,{children:"new@email.com"})]}),"\n",(0,r.jsxs)(n.li,{children:["C: ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:["D: ",(0,r.jsx)(n.code,{children:"ReferenceError"})]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Answer"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.h4,{id:"answer-a",children:"Answer: A"}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"updateEmail"})," function is an arrow function, and is not bound to the ",(0,r.jsx)(n.code,{children:"user"})," object. This means that the ",(0,r.jsx)(n.code,{children:"this"})," keyword is not referring to the ",(0,r.jsx)(n.code,{children:"user"})," object, but refers to the global scope in this case. The value of ",(0,r.jsx)(n.code,{children:"email"})," within the ",(0,r.jsx)(n.code,{children:"user"})," object does not get updated. When logging the value of ",(0,r.jsx)(n.code,{children:"user.email"}),", the original value of ",(0,r.jsx)(n.code,{children:"my@email.com"})," gets returned."]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"152-whats-the-output",children:"152. What's the output?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const promise1 = Promise.resolve('First');\nconst promise2 = Promise.resolve('Second');\nconst promise3 = Promise.reject('Third');\nconst promise4 = Promise.resolve('Fourth');\n\nconst runPromises = async () => {\n  const res1 = await Promise.all([promise1, promise2]);\n  const res2 = await Promise.all([promise3, promise4]);\n  return [res1, res2];\n};\n\nrunPromises()\n  .then((res) => console.log(res))\n  .catch((err) => console.log(err));\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A: ",(0,r.jsx)(n.code,{children:"[['First', 'Second'], ['Fourth']]"})]}),"\n",(0,r.jsxs)(n.li,{children:["B: ",(0,r.jsx)(n.code,{children:"[['First', 'Second'], ['Third', 'Fourth']]"})]}),"\n",(0,r.jsxs)(n.li,{children:["C: ",(0,r.jsx)(n.code,{children:"[['First', 'Second']]"})]}),"\n",(0,r.jsxs)(n.li,{children:["D: ",(0,r.jsx)(n.code,{children:"'Third'"})]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Answer"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.h4,{id:"answer-d",children:"Answer: D"}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Promise.all"})," method runs the passed promises in parallel. If one promise fails, the ",(0,r.jsx)(n.code,{children:"Promise.all"})," method ",(0,r.jsx)(n.em,{children:"rejects"})," with the value of the rejected promise. In this case, ",(0,r.jsx)(n.code,{children:"promise3"})," rejected with the value ",(0,r.jsx)(n.code,{children:'"Third"'}),". We\u2019re catching the rejected value in the chained ",(0,r.jsx)(n.code,{children:"catch"})," method on the ",(0,r.jsx)(n.code,{children:"runPromises"})," invocation to catch any errors within the ",(0,r.jsx)(n.code,{children:"runPromises"})," function. Only ",(0,r.jsx)(n.code,{children:'"Third"'})," gets logged, since ",(0,r.jsx)(n.code,{children:"promise3"})," rejected with this value."]})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"153-what-should-the-value-of-method-be-to-log--name-lydia-age-22-",children:["153. What should the value of ",(0,r.jsx)(n.code,{children:"method"})," be to log ",(0,r.jsx)(n.code,{children:'{ name: "Lydia", age: 22 }'}),"?"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const keys = ['name', 'age'];\nconst values = ['Lydia', 22];\n\nconst method =\n  /* ?? */\n  Object[method](\n    keys.map((_, i) => {\n      return [keys[i], values[i]];\n    }),\n  ); // { name: \"Lydia\", age: 22 }\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A: ",(0,r.jsx)(n.code,{children:"entries"})]}),"\n",(0,r.jsxs)(n.li,{children:["B: ",(0,r.jsx)(n.code,{children:"values"})]}),"\n",(0,r.jsxs)(n.li,{children:["C: ",(0,r.jsx)(n.code,{children:"fromEntries"})]}),"\n",(0,r.jsxs)(n.li,{children:["D: ",(0,r.jsx)(n.code,{children:"forEach"})]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Answer"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.h4,{id:"answer-c",children:"Answer: C"}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"fromEntries"})," method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we\u2019re mapping over the ",(0,r.jsx)(n.code,{children:"keys"})," array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index."]}),(0,r.jsxs)(n.p,{children:["This creates an array of subarrays containing the correct keys and values, which results in ",(0,r.jsx)(n.code,{children:'{ name: "Lydia", age: 22 }'})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"154-whats-the-output",children:"154. What's the output?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const createMember = ({ email, address = {} }) => {\n  const validEmail = /.+\\@.+\\..+/.test(email);\n  if (!validEmail) throw new Error('Valid email pls');\n\n  return {\n    email,\n    address: address ? address : null,\n  };\n};\n\nconst member = createMember({ email: 'my@email.com' });\nconsole.log(member);\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A: ",(0,r.jsx)(n.code,{children:'{ email: "my@email.com", address: null }'})]}),"\n",(0,r.jsxs)(n.li,{children:["B: ",(0,r.jsx)(n.code,{children:'{ email: "my@email.com" }'})]}),"\n",(0,r.jsxs)(n.li,{children:["C: ",(0,r.jsx)(n.code,{children:'{ email: "my@email.com", address: {} }'})]}),"\n",(0,r.jsxs)(n.li,{children:["D: ",(0,r.jsx)(n.code,{children:'{ email: "my@email.com", address: undefined }'})]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Answer"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.h4,{id:"answer-c-1",children:"Answer: C"}),(0,r.jsxs)(n.p,{children:["The default value of ",(0,r.jsx)(n.code,{children:"address"})," is an empty object ",(0,r.jsx)(n.code,{children:"{}"}),". When we set the variable ",(0,r.jsx)(n.code,{children:"member"})," equal to the object returned by the ",(0,r.jsx)(n.code,{children:"createMember"})," function, we didn't pass a value for address, which means that the value of address is the default empty object ",(0,r.jsx)(n.code,{children:"{}"}),". An empty object is a truthy value, which means that the condition of the ",(0,r.jsx)(n.code,{children:"address ? address : null"})," conditional returns ",(0,r.jsx)(n.code,{children:"true"}),". The value of address is the empty object ",(0,r.jsx)(n.code,{children:"{}"}),"."]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"155-whats-the-output",children:"155. What's the output?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let randomValue = { name: 'Lydia' };\nrandomValue = 23;\n\nif (!typeof randomValue === 'string') {\n  console.log(\"It's not a string!\");\n} else {\n  console.log(\"Yay it's a string!\");\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A: ",(0,r.jsx)(n.code,{children:"It's not a string!"})]}),"\n",(0,r.jsxs)(n.li,{children:["B: ",(0,r.jsx)(n.code,{children:"Yay it's a string!"})]}),"\n",(0,r.jsxs)(n.li,{children:["C: ",(0,r.jsx)(n.code,{children:"TypeError"})]}),"\n",(0,r.jsxs)(n.li,{children:["D: ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Answer"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.h4,{id:"answer-b-1",children:"Answer: B"}),(0,r.jsxs)(n.p,{children:["The condition within the ",(0,r.jsx)(n.code,{children:"if"})," statement checks whether the value of ",(0,r.jsx)(n.code,{children:"!typeof randomValue"})," is equal to ",(0,r.jsx)(n.code,{children:'"string"'}),". The ",(0,r.jsx)(n.code,{children:"!"})," operator converts the value to a boolean value. If the value is truthy, the returned value will be ",(0,r.jsx)(n.code,{children:"false"}),", if the value is falsy, the returned value will be ",(0,r.jsx)(n.code,{children:"true"}),". In this case, the returned value of ",(0,r.jsx)(n.code,{children:"typeof randomValue"})," is the truthy value ",(0,r.jsx)(n.code,{children:'"number"'}),", meaning that the value of ",(0,r.jsx)(n.code,{children:"!typeof randomValue"})," is the boolean value ",(0,r.jsx)(n.code,{children:"false"}),"."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:'!typeof randomValue === "string"'})," always returns false, since we're actually checking ",(0,r.jsx)(n.code,{children:'false === "string"'}),". Since the condition returned ",(0,r.jsx)(n.code,{children:"false"}),", the code block of the ",(0,r.jsx)(n.code,{children:"else"})," statement gets run, and ",(0,r.jsx)(n.code,{children:"Yay it's a string!"})," gets logged."]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,n,s)=>{var r=s(67294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,i={},o=null,d=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:o,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},85893:(e,n,s)=>{e.exports=s(75251)},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var r=s(67294);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);