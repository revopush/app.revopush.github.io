import{f as o,ap as h,cF as g,r as i,cE as u,cM as r,j as s,L as f,F as y,S as b}from"./index-MQ4a6Jd9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="45594075-8808-4ebe-9518-a8e19b1d2130",e._sentryDebugIdIdentifier="sentry-dbid-45594075-8808-4ebe-9518-a8e19b1d2130")}catch{}})();const{Content:v}=f,m=()=>{const e=o(),{provider:a}=h(),[c]=g(),l=i.useRef(!1);return i.useEffect(()=>{const n=()=>{e("/")};return window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}},[e]),i.useEffect(()=>{if(!l.current){const n=Object.fromEntries(c.entries()),d=new URLSearchParams(n).toString();l.current=!0,u.send({hitType:"authcallabck",page:`Provider: ${a} Query: ${d}`}),r(d,a).then(t=>{e((t==null?void 0:t.originalUrl)??"/"),u.event({category:"Auth",action:`Auth done: ${(t==null?void 0:t.originalUrl)??"/"}`})}).catch(t=>{(t==null?void 0:t.status)===409&&e("/login?accountExists=true"),(t==null?void 0:t.status)===403&&e("/register?accountEmpty=true"),u.event({category:"Auth",action:`Auth callback error: ${t==null?void 0:t.status}`})})}},[e,a,c]),s.jsx(f,{children:s.jsx(v,{children:s.jsx(y,{justify:"center",align:"center",style:{height:"100vh"},vertical:!0,children:s.jsx(b,{size:"large"})})})})};export{m as default};
//# sourceMappingURL=AuthCallback-rZDxo3Ak.js.map
