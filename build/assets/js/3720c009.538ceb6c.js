"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[3751],{23733:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(67294),l=a(86010),n=a(17766),c=a(55116),o=a(59443),s=a(87870),i=a(68190),m=a(94804),u=Object.defineProperty,g=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&y(e,a,t[a]);if(b)for(var a of b(t))E.call(t,a)&&y(e,a,t[a]);return e},h=(e,t)=>g(e,p(t));function O({title:e}){return r.createElement(r.Fragment,null,r.createElement(n.d,{title:e}),r.createElement(i.Z,{tag:"doc_tags_list"}))}function v({tags:e,title:t}){return r.createElement(n.FG,{className:(0,l.Z)(c.k.page.docsTagsListPage)},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement(m.Z,{as:"h1"},t),r.createElement(s.Z,{tags:e})))))}function j(e){const t=(0,o.M)();return r.createElement(r.Fragment,null,r.createElement(O,h(d({},e),{title:t})),r.createElement(v,h(d({},e),{title:t})))}},77701:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),l=a(86010),n=a(11128);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o({permalink:e,label:t,count:a}){return r.createElement(n.Z,{href:e,className:(0,l.Z)(c.tag,a?c.tagWithCount:c.tagRegular)},t,a&&r.createElement("span",null,a))}},87870:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(67294),l=a(59443),n=a(77701),c=a(94804);const o={tag:"tag_Nnez"};var s=Object.defineProperty,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&g(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&g(e,a,t[a]);return e};function b({letterEntry:e}){return r.createElement("article",null,r.createElement(c.Z,{as:"h2",id:e.letter},e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:o.tag},r.createElement(n.Z,p({},e)))))),r.createElement("hr",null))}function f({tags:e}){const t=(0,l.P)(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(b,{key:e.letter,letterEntry:e}))))}},59443:(e,t,a)=>{a.d(t,{M:()=>l,P:()=>n});var r=a(14699);const l=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}}}]);