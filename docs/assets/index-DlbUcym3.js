import{r as i,C as O,aN as _,cQ as S,cR as F,cS as j,cT as v,c as E,cU as $,cV as N,cW as D,cX as c,cY as M,cZ as T,c_ as V,c$ as W,d0 as C,d1 as A,d2 as R}from"./index-DDAWZNc0.js";import{w as U}from"./PurePanel-BeG97g8b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="892abd9e-ac71-487c-91e4-e3fb23d4593f",e._sentryDebugIdIdentifier="sentry-dbid-892abd9e-ac71-487c-91e4-e3fb23d4593f")}catch{}})();var Y=function(e,n){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s};const k=e=>{const{prefixCls:n,className:s,closeIcon:r,closable:o,type:a,title:g,children:u,footer:h}=e,w=Y(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:b}=i.useContext(O),m=b(),l=n||b("modal"),y=_(m),[P,x,I]=S(l,y),f=`${l}-confirm`;let d={};return a?d={closable:o??!1,title:"",footer:"",children:i.createElement(F,Object.assign({},e,{prefixCls:l,confirmPrefixCls:f,rootPrefixCls:m,content:u}))}:d={closable:o??!0,title:g,footer:h!==null&&i.createElement(j,Object.assign({},e)),children:u},P(i.createElement(v,Object.assign({prefixCls:l,className:E(x,`${l}-pure-panel`,a&&f,a&&`${f}-${a}`,s,I,y)},w,{closeIcon:$(l,r),closable:o},d)))},z=U(k);function p(e){return c(R(e))}const t=N;t.useModal=D;t.info=function(n){return c(M(n))};t.success=function(n){return c(T(n))};t.error=function(n){return c(V(n))};t.warning=p;t.warn=p;t.confirm=function(n){return c(W(n))};t.destroyAll=function(){for(;C.length;){const n=C.pop();n&&n()}};t.config=A;t._InternalPanelDoNotUseOrYouWillBeFired=z;export{t as M};
//# sourceMappingURL=index-DlbUcym3.js.map