/*! For license information please see e02170ef.7e8c807e.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[1243],{49680:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=t(85893),s=t(11151);const a={title:"Centering in CSS",authors:"hunghg",tags:["html","css","tips"],image:"https://res.cloudinary.com/hunghg255/image/upload/v1683865180/css-center_m1zi5l.png"},r=void 0,o={permalink:"/blog/center-css",editUrl:"https://github.com/hunghg255/web-totals/tree/main/blog/center-css.md",source:"@site/blog/center-css.md",title:"Centering in CSS",description:"1. Content Center",date:"2023-05-12T04:20:35.000Z",formattedDate:"May 12, 2023",tags:[{label:"html",permalink:"/blog/tags/html"},{label:"css",permalink:"/blog/tags/css"},{label:"tips",permalink:"/blog/tags/tips"}],readingTime:.685,hasTruncateMarker:!0,authors:[{name:"Gia Hung",title:"Creator of Web totals",url:"https://github.com/hunghg255",email:"giahung197bg@gmail.com",imageURL:"https://res.cloudinary.com/hunghg255/image/upload/v1654956015/Screen_Shot_2022-06-07_at_11.25.34_bpnymt.png",key:"hunghg"}],frontMatter:{title:"Centering in CSS",authors:"hunghg",tags:["html","css","tips"],image:"https://res.cloudinary.com/hunghg255/image/upload/v1683865180/css-center_m1zi5l.png"},unlisted:!1,prevItem:{title:"Example Callstack And Event loop",permalink:"/blog/event-loop-call-stack-example"},nextItem:{title:"Vscode extensions useful",permalink:"/blog/vscode-extensions-useful"}},i={authorsImageUrls:[void 0]},c=[{value:"1. Content Center",id:"1-content-center",level:2},{value:"2. Gentle Flex",id:"2-gentle-flex",level:2},{value:"3. Autobot",id:"3-autobot",level:2},{value:"4. Fluffy Center",id:"4-fluffy-center",level:2},{value:"5. Pop &amp; Plop",id:"5-pop--plop",level:2}];function p(e){const n={code:"code",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"1-content-center",children:"1. Content Center"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:"title=HTML",children:'<div class="content-center">...</div>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",metastring:"title=CSS",children:".content-center {\n  display: grid;\n  place-content: center;\n  gap: 1ch;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"2-gentle-flex",children:"2. Gentle Flex"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:"title=HTML",children:'<div class="gentle-flex">...</div>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",metastring:"title=CSS",children:".gentle-flex {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1ch;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"3-autobot",children:"3. Autobot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:"title=HTML",children:'<div class="autobot">...</div>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",metastring:"title=CSS",children:".autobot {\n  display: flex;\n}\n.autobot > * {\n  margin: auto;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"4-fluffy-center",children:"4. Fluffy Center"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:"title=HTML",children:'<div class="fluffy-center">...</div>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",metastring:"title=CSS",children:".fluffy-center {\n  padding: 10ch;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"5-pop--plop",children:"5. Pop & Plop"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:"title=HTML",children:'<div class="parent">\n  <div class="pop-plop">...</div>\n</div>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",metastring:"title=CSS",children:".parent {\n  position: relative;\n}\n\n/* Option 1 */\n.pop-plop {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Option 2 */\n.pop-plop {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},75251:(e,n,t)=>{var l=t(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var l,a={},c=null,p=null;for(l in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)r.call(n,l)&&!i.hasOwnProperty(l)&&(a[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===a[l]&&(a[l]=n[l]);return{$$typeof:s,type:e,key:c,ref:p,props:a,_owner:o.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var l=t(67294);const s={},a=l.createContext(s);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);