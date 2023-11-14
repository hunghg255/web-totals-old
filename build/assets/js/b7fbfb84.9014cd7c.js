/*! For license information please see b7fbfb84.9014cd7c.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[6896],{45107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=r(85893),n=r(11151),l=r(58640),c=r(77234);const s={sidebar_position:2,title:"RC Picker",comment:!0,tags:["rc-picker","Style","CSS","rc-component"]},o=void 0,i={id:"rc-style/rc-picker",title:"RC Picker",description:"Install rc-picker component",source:"@site/issues/rc-style/rc-picker.mdx",sourceDirName:"rc-style",slug:"/rc-style/rc-picker",permalink:"/issues/rc-style/rc-picker",draft:!1,unlisted:!1,editUrl:"https://github.com/hunghg255/web-totals/tree/main/issues/rc-style/rc-picker.mdx",tags:[{label:"rc-picker",permalink:"/issues/tags/rc-picker"},{label:"Style",permalink:"/issues/tags/style"},{label:"CSS",permalink:"/issues/tags/css"},{label:"rc-component",permalink:"/issues/tags/rc-component"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"RC Picker",comment:!0,tags:["rc-picker","Style","CSS","rc-component"]},sidebar:"tutorialSidebar",previous:{title:"RC Select",permalink:"/issues/rc-style/rc-select"},next:{title:"RC Dialog",permalink:"/issues/rc-style/rc-dialog"}},u={},d=[{value:"Install <code>rc-picker</code> component",id:"install-rc-picker-component",level:2},{value:"Add CSS CDN into html file",id:"add-css-cdn-into-html-file",level:2},{value:"Result",id:"result",level:2}];function p(e){const t={code:"code",h2:"h2",pre:"pre",...(0,n.a)(),...e.components},{Stackblitz:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Stackblitz",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h2,{id:"install-rc-picker-component",children:["Install ",(0,a.jsx)(t.code,{children:"rc-picker"})," component"]}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(c.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install rc-picker\n"})})}),(0,a.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add rc-picker\n"})})}),(0,a.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add rc-picker\n"})})}),(0,a.jsx)(c.Z,{value:"bun",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bun add rc-picker\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"add-css-cdn-into-html-file",children:"Add CSS CDN into html file"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cdnhust/rcstyles@master/rc-picker.css" />\n'})}),"\n",(0,a.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,a.jsx)(r,{name:"react-ts-qox4ne"})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},15903:(e,t,r)=>{r.d(t,{Y:()=>k});var a=r(67294),n=r(16550),l=r(36555),c=r(63962),s=r(69920),o=r(15801),i=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&f(e,r,t[r]);return e},v=(e,t)=>u(e,d(t));function y(e){return function(e){var t,r;return null!=(r=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?r:[]}(e).map((({props:{value:e,label:t,attributes:r,default:a}})=>({value:e,label:t,attributes:r,default:a})))}function g(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:y(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function w({value:e,tabValues:t}){return t.some((t=>t.value===e))}function E({queryString:e=!1,groupId:t}){const r=(0,n.k6)(),l=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(v(b({},r.location),{search:t.toString()}))}),[l,r])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,c=g(e),[s,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(r=t.find((e=>e.default)))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:c}))),[u,d]=E({queryString:r,groupId:n}),[p,m]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,o.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),h=(()=>{const e=null!=u?u:p;return w({value:e,tabValues:c})?e:null})();(0,l.Z)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!w({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,c]),tabValues:c}}},77234:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_s4ch"};var c=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&u(e,r,t[r]);return e};function p({children:e,hidden:t,className:r}){return a.createElement("div",d({role:"tabpanel",className:(0,n.Z)(l.tabItem,r)},{hidden:t}),e)}},58640:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(67294),n=r(86010),l=r(37287),c=r(15903),s=r(35710);const o={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var i=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&f(e,r,t[r]);return e},v=(e,t)=>u(e,d(t));const y={npm:()=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256"},a.createElement("path",{fill:"#C12127",d:"M0 256V0h256v256z"}),a.createElement("path",{fill:"#FFF",d:"M48 48h160v160h-32V80h-48v128H48z"})),yarn:()=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128"},a.createElement("g",{fill:"#2c8ebb"},a.createElement("path",{d:"M99.24 80.71C94.9 80.76 91.1 83 87.89 85c-6 3.71-9 3.47-9 3.47l-.1-.17c-.41-.67 1.92-6.68-.69-13.84c-2.82-7.83-7.3-9.72-6.94-10.32c1.53-2.59 5.36-6.7 6.89-14.36c.91-4.64.67-12.28-1.39-16.28c-.38-.74-3.78 1.24-3.78 1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6 7.61-6 7.61a14 14 0 0 0-11.71 4.5a9.64 9.64 0 0 1-3.85 2.27c-.41.14-.91.12-2.15 3.47c-1.9 5.07 3.24 10.81 3.24 10.81s-6.13 4.33-8.4 9.72a24.78 24.78 0 0 0-1.75 11.68s-4.36 3.78-4.64 7.68a12.87 12.87 0 0 0 1.77 7.83a1.94 1.94 0 0 0 2.63.91s-2.9 3.38-.19 4.81c2.47 1.29 6.63 2 8.83-.19c1.6-1.6 1.92-5.17 2.51-6.63c.14-.34.62.57 1.08 1a10 10 0 0 0 1.36 1s-3.9 1.68-2.3 5.51c.53 1.27 2.42 2.08 5.51 2.06c1.15 0 13.76-.72 17.12-1.53a4.33 4.33 0 0 0 2.61-1.46a63 63 0 0 0 15.49-7c4.74-3.09 6.68-3.93 10.51-4.84c3.16-.75 2.95-5.65-1.24-5.58z"}),a.createElement("path",{d:"M64 2a62 62 0 1 0 62 62A62 62 0 0 0 64 2zm37.3 87.83c-3.35.81-4.91 1.44-9.41 4.36a67 67 0 0 1-15.56 7.18a8.71 8.71 0 0 1-3.64 1.77c-3.81.93-16.88 1.63-17.91 1.63h-.24c-4 0-6.27-1.24-7.49-2.54c-3.4 1.7-7.8 1-11-.69a5.55 5.55 0 0 1-3-3.9a6 6 0 0 1 0-2.06a6.66 6.66 0 0 1-.79-1A16.38 16.38 0 0 1 30 84.52c.29-3.73 2.87-7.06 4.55-8.83A28.56 28.56 0 0 1 36.61 64a26.82 26.82 0 0 1 6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42c1.17-3.11 2.13-4.84 4.24-5.58a6.84 6.84 0 0 0 2.51-1.34A17.65 17.65 0 0 1 60.34 31c.19-.48.41-1 .65-1.46c1.6-3.4 3.3-5.31 5.29-6a4.88 4.88 0 0 1 4.4.5c.65.43 1.48 1 3.9 6a4.69 4.69 0 0 1 2.85-.1a3.81 3.81 0 0 1 2.39 1.94c2.47 4.74 2.8 13.19 1.72 18.62a33.8 33.8 0 0 1-5.84 13.31a25.73 25.73 0 0 1 5.77 9.43a25.42 25.42 0 0 1 1.41 10.41A28.7 28.7 0 0 0 86 81.91c3.06-1.89 7.68-4.74 13.19-4.81a6.62 6.62 0 0 1 7 5.7a6.35 6.35 0 0 1-4.89 7.03z"}))),pnpm:()=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128"},a.createElement("path",{fill:"#f8ab00",d:"M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004Zm0 43.996v39.996H128V44Z"}),a.createElement("path",{fill:"#4c4c4c",d:"M43.996 44v39.996h40V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z"})),bun:()=>a.createElement("svg",{id:"Bun",width:"1.2em",height:"1.2em",viewBox:"0 0 80 70"},a.createElement("path",{id:"Shadow",d:"M71.09,20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46,26.46,0,0,1,75.5,35.7c0,16.57-16.82,30.05-37.5,30.05-11.58,0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55,65.3,30.14,69.75,42,69.75c20.68,0,37.5-13.48,37.5-30C79.5,32.69,76.46,26,71.09,20.74Z"}),a.createElement("g",{id:"Body"},a.createElement("path",{id:"Background",d:"M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z",style:{fill:"#fbf0df"}}),a.createElement("path",{id:"Bottom_Shadow","data-name":"Bottom Shadow",d:"M73,35.7a21.67,21.67,0,0,0-.8-5.78c-2.73,33.3-43.35,34.9-59.32,24.94A40,40,0,0,0,38,63.24C57.3,63.24,73,50.89,73,35.7Z",style:{fill:"#f6dece"}}),a.createElement("path",{id:"Light_Shine","data-name":"Light Shine",d:"M24.53,11.17C29,8.49,34.94,3.46,40.78,3.45A9.29,9.29,0,0,0,38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7c0,.4,0,.8,0,1.19C9.06,15.48,20.07,13.85,24.53,11.17Z",style:{fill:"#fffefc"}}),a.createElement("path",{id:"Top",d:"M35.12,5.53A16.41,16.41,0,0,1,29.49,18c-.28.25-.06.73.3.59,3.37-1.31,7.92-5.23,6-13.14C35.71,5,35.12,5.12,35.12,5.53Zm2.27,0A16.24,16.24,0,0,1,39,19c-.12.35.31.65.55.36C41.74,16.56,43.65,11,37.93,5,37.64,4.74,37.19,5.14,37.39,5.49Zm2.76-.17A16.42,16.42,0,0,1,47,17.12a.33.33,0,0,0,.65.11c.92-3.49.4-9.44-7.17-12.53C40.08,4.54,39.82,5.08,40.15,5.32ZM21.69,15.76a16.94,16.94,0,0,0,10.47-9c.18-.36.75-.22.66.18-1.73,8-7.52,9.67-11.12,9.45C21.32,16.4,21.33,15.87,21.69,15.76Z",style:{fill:"#ccbea7",fillRule:"evenodd"}}),a.createElement("path",{id:"Outline",d:"M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z"})),a.createElement("g",{id:"Mouth"},a.createElement("g",{id:"Background-2","data-name":"Background"},a.createElement("path",{d:"M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z",style:{fill:"#b71422"}})),a.createElement("g",{id:"Tongue"},a.createElement("path",{id:"Background-3","data-name":"Background",d:"M34,47.79a6.91,6.91,0,0,0,4.12,1.9,6.91,6.91,0,0,0,4.11-1.9,10.63,10.63,0,0,0,1-1.07,6.83,6.83,0,0,0-4.9-2.31,6.15,6.15,0,0,0-5,2.78C33.56,47.4,33.76,47.6,34,47.79Z",style:{fill:"#ff6164"}}),a.createElement("path",{id:"Outline-2","data-name":"Outline",d:"M34.16,47a5.36,5.36,0,0,1,4.19-2.08,6,6,0,0,1,4,1.69c.23-.25.45-.51.66-.77a7,7,0,0,0-4.71-1.93,6.36,6.36,0,0,0-4.89,2.36A9.53,9.53,0,0,0,34.16,47Z"})),a.createElement("path",{id:"Outline-3","data-name":"Outline",d:"M38.09,50.19a7.42,7.42,0,0,1-4.45-2,9.52,9.52,0,0,1-3.11-5.05,1.2,1.2,0,0,1,.26-1,1.41,1.41,0,0,1,1.13-.51H44.26a1.44,1.44,0,0,1,1.13.51,1.19,1.19,0,0,1,.25,1h0a9.52,9.52,0,0,1-3.11,5.05A7.42,7.42,0,0,1,38.09,50.19Zm-6.17-7.4c-.16,0-.2.07-.21.09a8.29,8.29,0,0,0,2.73,4.37A6.23,6.23,0,0,0,38.09,49a6.28,6.28,0,0,0,3.65-1.73,8.3,8.3,0,0,0,2.72-4.37.21.21,0,0,0-.2-.09Z"})),a.createElement("g",{id:"Face"},a.createElement("ellipse",{id:"Right_Blush","data-name":"Right Blush",cx:"53.22",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),a.createElement("ellipse",{id:"Left_Bluch","data-name":"Left Bluch",cx:"22.95",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),a.createElement("path",{id:"Eyes",d:"M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z",style:{fillRule:"evenodd"}}),a.createElement("path",{id:"Iris",d:"M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z",style:{fill:"#fff",fillRule:"evenodd"}})))};function g({className:e,block:t,selectedValue:r,selectValue:c,tabValues:s}){const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),n=s[a].value;n!==r&&(u(t),c(n))},p=e=>{var t,r;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;a=null!=(t=i[r])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=null!=(r=i[t])?r:i[i.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:l})=>{const c=y[e.toLowerCase()];return a.createElement("li",v(b({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>i.push(e),onKeyDown:p,onClick:d},l),{className:(0,n.Z)("tabs__item",o.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===e})}),c&&a.createElement(c,null)," ",null!=t?t:e)})))}function w({lazy:e,children:t,selectedValue:r}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=(0,c.Y)(e);return a.createElement("div",{className:(0,n.Z)("tabs-container",o.tabList)},a.createElement(g,b(b({},e),t)),a.createElement(w,b(b({},e),t)))}function k(e){const t=(0,s.Z)();return a.createElement(E,b({key:String(t)},e))}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var a,l={},i=null,u=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,a)&&!o.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:n,type:e,key:i,ref:u,props:l,_owner:s.current}}t.Fragment=l,t.jsx=i,t.jsxs=i},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>c});var a=r(67294);const n={},l=a.createContext(n);function c(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);