import{r as t,aT as w,I as x,C as E}from"./index-Dzs6o6Dg.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8b6cdd2f-c3e4-4e04-8bda-99b908bae767",e._sentryDebugIdIdentifier="sentry-dbid-8b6cdd2f-c3e4-4e04-8bda-99b908bae767")}catch{}})();function j(e){return n=>t.createElement(w,{theme:{token:{motion:!1,zIndexPopupBase:0}}},t.createElement(e,Object.assign({},n)))}const S=(e,n,o,d)=>j(i=>{const{prefixCls:p,style:v}=i,a=t.useRef(null),[m,y]=t.useState(0),[h,P]=t.useState(0),[l,C]=x(!1,{value:i.open}),{getPrefixCls:I}=t.useContext(E),u=I(n||"select",p);t.useEffect(()=>{if(C(!0),typeof ResizeObserver<"u"){const f=new ResizeObserver(s=>{const r=s[0].target;y(r.offsetHeight+8),P(r.offsetWidth)}),b=setInterval(()=>{var s;const r=o?`.${o(u)}`:`.${u}-dropdown`,g=(s=a.current)===null||s===void 0?void 0:s.querySelector(r);g&&(clearInterval(b),f.observe(g))},10);return()=>{clearInterval(b),f.disconnect()}}},[]);let c=Object.assign(Object.assign({},i),{style:Object.assign(Object.assign({},v),{margin:0}),open:l,visible:l,getPopupContainer:()=>a.current});d&&(c=d(c));const O={paddingBottom:m,position:"relative",minWidth:h};return t.createElement("div",{ref:a,style:O},t.createElement(e,Object.assign({},c)))});export{S as g,j as w};
//# sourceMappingURL=PurePanel-BmIXK2EO.js.map
