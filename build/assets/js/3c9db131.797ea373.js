/*! For license information please see 3c9db131.797ea373.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[5348],{59675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(85893),r=n(11151);const s={sidebar_position:1,title:"Higher-Order Components",comment:!0,tags:["Reactjs"],last_update:{date:"05/05/2023",author:"hunghg255"}},i="Higher-Order Components",a={id:"reactjs/hoc-pattern",title:"Higher-Order Components",description:"Pass reusable logic down as props to components throughout your application",source:"@site/docs/reactjs/hoc-pattern.mdx",sourceDirName:"reactjs",slug:"/reactjs/hoc-pattern",permalink:"/docs/reactjs/hoc-pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/hunghg255/web-totals/tree/main/docs/reactjs/hoc-pattern.mdx",tags:[{label:"Reactjs",permalink:"/docs/tags/reactjs"}],version:"current",lastUpdatedBy:"hunghg255",lastUpdatedAt:1683219600,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Higher-Order Components",comment:!0,tags:["Reactjs"],last_update:{date:"05/05/2023",author:"hunghg255"}},sidebar:"tutorialSidebar",previous:{title:"JS Extension - Import/Export Module",permalink:"/docs/javascript/js-extension-import-export-module"},next:{title:"Compound Pattern",permalink:"/docs/reactjs/compound-pattern"}},l={},c=[{value:"Overview",id:"overview",level:3},{value:"Implementation",id:"implementation",level:3}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Stackblitz:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Stackblitz",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"higher-order-components",children:"Higher-Order Components"}),"\n",(0,o.jsx)(t.p,{children:"Pass reusable logic down as props to components throughout your application"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"Higher-Order Components (HOC) make it easy to pass logic to components by wrapping them."}),"\n",(0,o.jsx)(t.p,{children:"For example, if we wanted to easily change the styles of a text by making the font larger and the font weight bolder, we could create two Higher-Order Components:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"withLargeFontSize"}),", which appends the ",(0,o.jsx)(t.code,{children:'font-size: "90px"'})," field to the ",(0,o.jsx)(t.code,{children:"style"})," attribute."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"withBoldFontWeight"}),", which appends the ",(0,o.jsx)(t.code,{children:'font-weight: "bold"'})," field to the ",(0,o.jsx)(t.code,{children:"style"})," attribute."]}),"\n"]}),"\n",(0,o.jsx)("video",{width:"100%",height:"430",autoPlay:!0,muted:!0,loop:!0,src:"https://res.cloudinary.com/hunghg255/video/upload/v1677958186/blog/hoc_cy2dfl.mov",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,controls:!0}),"\n",(0,o.jsx)(t.p,{children:"Any component that's wrapped with either of these higher-order components will get a larger font size, a bolder font weight, or both!"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.p,{children:"We can apply logic to another component, by:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Receiving another component as its ",(0,o.jsx)(t.code,{children:"props"})]}),"\n",(0,o.jsx)(t.li,{children:"Applying additional logic to the passed component"}),"\n",(0,o.jsx)(t.li,{children:"Returning the same or a new component with additional logic"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://res.cloudinary.com/hunghg255/image/upload/v1677958190/blog/1_irw6pw.png",alt:"HOC"})}),"\n",(0,o.jsxs)(t.p,{children:["To implement the above example, we can create a ",(0,o.jsx)(t.code,{children:"withStyles"})," HOC that adds a ",(0,o.jsx)(t.code,{children:"color"})," and ",(0,o.jsx)(t.code,{children:"font-size"})," prop to the component's style."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"function withStyles(Component) {\n  return (props) => {\n    const style = {\n      color: 'red',\n      fontSize: '1em',\n      // Merge props\n      ...props.style,\n    };\n\n    return <Component {...props} style={style} />;\n  };\n}\n\nconst Text = ({ style }) => <p style={style}>Higher Order Component</p>;\nconst StyledText = withStyles(Text);\n"})}),"\n",(0,o.jsx)(n,{name:"react-ts-zuyzjj"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"If you have a component that always needs to be wrapped within a HOC, you can also directly pass it instead of creating two separate components like we did in the example above."})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const Text = withStyles(() => <p style={{ fontFamily: 'Inter' }}>Hello world!</p>);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},75251:(e,t,n)=>{var o=n(67294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,s={},c=null,d=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:a.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(67294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);