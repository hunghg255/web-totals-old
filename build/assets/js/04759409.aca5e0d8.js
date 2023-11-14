/*! For license information please see 04759409.aca5e0d8.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_totals=self.webpackChunkweb_totals||[]).push([[5087],{37190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=t(85893),r=t(11151);const o={sidebar_position:6,title:"useCountDown",comment:!0,tags:["Reactjs","Custom Hook","useCountDown"]},u=void 0,c={id:"reactjs/custom-hook/use-count-down",title:"useCountDown",description:"",source:"@site/issues/reactjs/custom-hook/use-count-down.md",sourceDirName:"reactjs/custom-hook",slug:"/reactjs/custom-hook/use-count-down",permalink:"/issues/reactjs/custom-hook/use-count-down",draft:!1,unlisted:!1,editUrl:"https://github.com/hunghg255/web-totals/tree/main/issues/reactjs/custom-hook/use-count-down.md",tags:[{label:"Reactjs",permalink:"/issues/tags/reactjs"},{label:"Custom Hook",permalink:"/issues/tags/custom-hook"},{label:"useCountDown",permalink:"/issues/tags/use-count-down"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"useCountDown",comment:!0,tags:["Reactjs","Custom Hook","useCountDown"]},sidebar:"tutorialSidebar",previous:{title:"useClickOutside",permalink:"/issues/reactjs/custom-hook/use-click-outside"},next:{title:"useMediaQuery",permalink:"/issues/reactjs/custom-hook/use-media-query"}},a={},i=[];function f(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:"const useCountDown = ({ startDate, endDate, onFinish }) => {\n  const [seconds, setSeconds] = useState(0);\n  const refDays = useRef(0);\n  const refHours = useRef(0);\n  const refMinutes = useRef(0);\n\n  const startTime = useMemo(() => new Date(startDate), [startDate]);\n  const endTime = useMemo(() => new Date(endDate), [endDate]);\n  const refEnd = useRef();\n\n  useEffect(() => {\n    if (!refEnd.current) return;\n    onFinish && onFinish();\n  }, [onFinish, refEnd]);\n\n  useEffect(() => {\n    if (startTime.getTime() - new Date().getTime() >= 0) return;\n\n    if (refEnd.current) return;\n\n    const timeInterVal = setInterval(() => {\n      const now = new Date();\n      const difference = endTime.getTime() - now.getTime();\n\n      if (difference <= 0) {\n        setSeconds(0);\n        refEnd.current = true;\n        clearInterval(clearInterval);\n        return;\n      }\n\n      refDays.current = Math.floor(difference / (1000 * 60 * 60 * 24));\n      refHours.current = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n      refMinutes.current = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));\n      const s = Math.ceil((difference % (1000 * 60)) / 1000);\n      refDays.current = refDays.current < 0 ? 0 : refDays.current;\n      refHours.current = refHours.current < 0 ? 0 : refHours.current;\n      refMinutes.current = refMinutes.current < 0 ? 0 : refMinutes.current;\n\n      setSeconds(s < 0 ? s + 60 : s);\n    }, 1000);\n\n    return () => clearInterval(timeInterVal);\n  }, [endDate, endTime, seconds, startDate, startTime]);\n\n  return {\n    days: refDays.current,\n    hours: refHours.current,\n    minutes: refMinutes.current,\n    seconds: seconds,\n  };\n};\n\nconst App = () => {\n  const { days, hours, minutes, seconds } = useCountDown({\n    startDate: new Date(),\n    endDate: new Date('01 Jan 2025'),\n    onFinish: () => {\n      console.log('Done');\n    },\n  });\n  console.log(seconds);\n  return (\n    <>\n      <h4>\n        {days} days, {hours} hours - {minutes} minutes - {seconds} seconds\n      </h4>\n    </>\n  );\n};\n\nrender(<App />);\n"})})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},75251:(e,n,t)=>{var s=t(67294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var s,o={},i=null,f=null;for(s in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(f=n.ref),n)u.call(n,s)&&!a.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:i,ref:f,props:o,_owner:c.current}}n.Fragment=o,n.jsx=i,n.jsxs=i},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>u});var s=t(67294);const r={},o=s.createContext(r);function u(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);