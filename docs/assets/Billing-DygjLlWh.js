var ae=e=>{throw TypeError(e)};var W=(e,t,r)=>t.has(e)||ae("Cannot "+r);var y=(e,t,r)=>(W(e,t,"read from private field"),r?r.call(e):t.get(e)),B=(e,t,r)=>t.has(e)?ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),S=(e,t,r,s)=>(W(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r),$=(e,t,r)=>(W(e,t,"access private method"),r);import{R as Ee,r as c,b4 as we,c as H,g as Re,m as Pe,b as Be,bM as Ie,u as P,C as ze,d as Me,c3 as Ne,c4 as te,c5 as Le,c6 as ye,c7 as Te,c8 as Ae,c9 as De,ca as qe,cb as _e,cc as He,cd as Qe,ce,cf as de,cg as Ue,ch as Fe,h as Ge,ak as We,an as Ke,ao as Xe,n as Je,f as Ve,j as n,L as fe,F as ue,i as _,k as Ye,B as K,l as Ze,T as ke}from"./index-YTiL9BK3.js";import{S as et,B as tt,b as X}from"./SideBar-DNofTfNj.js";import{f as st}from"./formatBytes-YXd3RlWJ.js";import{m as ge,u as rt,R as nt,C as J}from"./row-B_yaN2Db.js";import{S as z,P as V}from"./index-D5CpQH6C.js";import"./PurePanel-DT_AclGF.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="578b9d32-79b7-454b-ad91-01e96d16360c",e._sentryDebugIdIdentifier="sentry-dbid-578b9d32-79b7-454b-ad91-01e96d16360c")}catch{}})();const it={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},xe=Ee.createContext({});var lt=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(r[s[i]]=e[s[i]]);return r};const ot=e=>we(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function at(e,t,r){const s=c.useMemo(()=>t||ot(r),[t,r]);return c.useMemo(()=>s.map(o=>{var{span:l}=o,d=lt(o,["span"]);return l==="filled"?Object.assign(Object.assign({},d),{filled:!0}):Object.assign(Object.assign({},d),{span:typeof l=="number"?l:ge(e,l)})}),[s,e])}var ct=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(r[s[i]]=e[s[i]]);return r};function dt(e,t){let r=[],s=[],i=!1,o=0;return e.filter(l=>l).forEach(l=>{const{filled:d}=l,h=ct(l,["filled"]);if(d){s.push(h),r.push(s),s=[],o=0;return}const u=t-o;o+=l.span||1,o>=t?(o>t?(i=!0,s.push(Object.assign(Object.assign({},h),{span:u}))):s.push(h),r.push(s),s=[],o=0):s.push(h)}),s.length>0&&r.push(s),r=r.map(l=>{const d=l.reduce((h,u)=>h+(u.span||1),0);if(d<t){const h=l[l.length-1];return h.span=t-d+1,l}return l}),[r,i]}const ut=(e,t)=>{const[r,s]=c.useMemo(()=>dt(t,e),[t,e]);return r},pt=e=>{let{children:t}=e;return t};function pe(e){return e!=null}const Y=e=>{const{itemPrefixCls:t,component:r,span:s,className:i,style:o,labelStyle:l,contentStyle:d,bordered:h,label:u,content:g,colon:I,type:w}=e,O=r;return h?c.createElement(O,{className:H({[`${t}-item-label`]:w==="label",[`${t}-item-content`]:w==="content"},i),style:o,colSpan:s},pe(u)&&c.createElement("span",{style:l},u),pe(g)&&c.createElement("span",{style:d},g)):c.createElement(O,{className:H(`${t}-item`,i),style:o,colSpan:s},c.createElement("div",{className:`${t}-item-container`},(u||u===0)&&c.createElement("span",{className:H(`${t}-item-label`,{[`${t}-item-no-colon`]:!I}),style:l},u),(g||g===0)&&c.createElement("span",{className:H(`${t}-item-content`),style:d},g)))};function Z(e,t,r){let{colon:s,prefixCls:i,bordered:o}=t,{component:l,type:d,showLabel:h,showContent:u,labelStyle:g,contentStyle:I}=r;return e.map((w,O)=>{let{label:a,children:p,prefixCls:m=i,className:f,style:x,labelStyle:R,contentStyle:v,span:L=1,key:D}=w;return typeof l=="string"?c.createElement(Y,{key:`${d}-${D||O}`,className:f,style:x,labelStyle:Object.assign(Object.assign({},g),R),contentStyle:Object.assign(Object.assign({},I),v),span:L,colon:s,component:l,itemPrefixCls:m,bordered:o,label:h?a:null,content:u?p:null,type:d}):[c.createElement(Y,{key:`label-${D||O}`,className:f,style:Object.assign(Object.assign(Object.assign({},g),x),R),span:1,colon:s,component:l[0],itemPrefixCls:m,bordered:o,label:a,type:"label"}),c.createElement(Y,{key:`content-${D||O}`,className:f,style:Object.assign(Object.assign(Object.assign({},I),x),v),span:L*2-1,component:l[1],itemPrefixCls:m,bordered:o,content:p,type:"content"})]})}const ht=e=>{const t=c.useContext(xe),{prefixCls:r,vertical:s,row:i,index:o,bordered:l}=e;return s?c.createElement(c.Fragment,null,c.createElement("tr",{key:`label-${o}`,className:`${r}-row`},Z(i,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),c.createElement("tr",{key:`content-${o}`,className:`${r}-row`},Z(i,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):c.createElement("tr",{key:o,className:`${r}-row`},Z(i,e,Object.assign({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},mt=e=>{const{componentCls:t,labelBg:r}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${P(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${P(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${P(e.padding)} ${P(e.paddingLG)}`,borderInlineEnd:`${P(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:r,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${P(e.paddingSM)} ${P(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${P(e.paddingXS)} ${P(e.padding)}`}}}}}},bt=e=>{const{componentCls:t,extraColor:r,itemPaddingBottom:s,itemPaddingEnd:i,colonMarginRight:o,colonMarginLeft:l,titleMarginBottom:d}=e;return{[t]:Object.assign(Object.assign(Object.assign({},Be(e)),mt(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:d},[`${t}-title`]:Object.assign(Object.assign({},Ie),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:r,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:s,paddingInlineEnd:i},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${P(l)} ${P(o)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},yt=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText}),ft=Re("Descriptions",e=>{const t=Pe(e,{});return bt(t)},yt);var gt=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(r[s[i]]=e[s[i]]);return r};const se=e=>{const{prefixCls:t,title:r,extra:s,column:i,colon:o=!0,bordered:l,layout:d,children:h,className:u,rootClassName:g,style:I,size:w,labelStyle:O,contentStyle:a,items:p}=e,m=gt(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:f,direction:x,descriptions:R}=c.useContext(ze),v=f("descriptions",t),L=rt(),D=c.useMemo(()=>{var q;return typeof i=="number"?i:(q=ge(L,Object.assign(Object.assign({},it),i)))!==null&&q!==void 0?q:3},[L,i]),je=at(L,p,h),G=Me(w),Oe=ut(D,je),[Se,ve,$e]=ft(v),Ce=c.useMemo(()=>({labelStyle:O,contentStyle:a}),[O,a]);return Se(c.createElement(xe.Provider,{value:Ce},c.createElement("div",Object.assign({className:H(v,R==null?void 0:R.className,{[`${v}-${G}`]:G&&G!=="default",[`${v}-bordered`]:!!l,[`${v}-rtl`]:x==="rtl"},u,g,ve,$e),style:Object.assign(Object.assign({},R==null?void 0:R.style),I)},m),(r||s)&&c.createElement("div",{className:`${v}-header`},r&&c.createElement("div",{className:`${v}-title`},r),s&&c.createElement("div",{className:`${v}-extra`},s)),c.createElement("div",{className:`${v}-view`},c.createElement("table",null,c.createElement("tbody",null,Oe.map((q,oe)=>c.createElement(ht,{key:oe,index:oe,colon:o,prefixCls:v,vertical:d==="vertical",bordered:l,row:q}))))))))};se.Item=pt;function he(e,t){return e.filter(r=>!t.includes(r))}function xt(e,t,r){const s=e.slice(0);return s[t]=r,s}var T,C,N,A,E,M,Q,U,j,re,ne,F,ie,le,be,jt=(be=class extends Ne{constructor(t,r,s){super();B(this,j);B(this,T);B(this,C);B(this,N);B(this,A);B(this,E);B(this,M);B(this,Q);B(this,U);S(this,T,t),S(this,A,s),S(this,N,[]),S(this,E,[]),S(this,C,[]),this.setQueries(r)}onSubscribe(){this.listeners.size===1&&y(this,E).forEach(t=>{t.subscribe(r=>{$(this,j,ie).call(this,t,r)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,y(this,E).forEach(t=>{t.destroy()})}setQueries(t,r,s){S(this,N,t),S(this,A,r),te.batch(()=>{const i=y(this,E),o=$(this,j,F).call(this,y(this,N));o.forEach(u=>u.observer.setOptions(u.defaultedQueryOptions,s));const l=o.map(u=>u.observer),d=l.map(u=>u.getCurrentResult()),h=l.some((u,g)=>u!==i[g]);i.length===l.length&&!h||(S(this,E,l),S(this,C,d),this.hasListeners()&&(he(i,l).forEach(u=>{u.destroy()}),he(l,i).forEach(u=>{u.subscribe(g=>{$(this,j,ie).call(this,u,g)})}),$(this,j,le).call(this)))})}getCurrentResult(){return y(this,C)}getQueries(){return y(this,E).map(t=>t.getCurrentQuery())}getObservers(){return y(this,E)}getOptimisticResult(t,r){const i=$(this,j,F).call(this,t).map(o=>o.observer.getOptimisticResult(o.defaultedQueryOptions));return[i,o=>$(this,j,ne).call(this,o??i,r),()=>$(this,j,re).call(this,i,t)]}},T=new WeakMap,C=new WeakMap,N=new WeakMap,A=new WeakMap,E=new WeakMap,M=new WeakMap,Q=new WeakMap,U=new WeakMap,j=new WeakSet,re=function(t,r){const s=$(this,j,F).call(this,r);return s.map((i,o)=>{const l=t[o];return i.defaultedQueryOptions.notifyOnChangeProps?l:i.observer.trackResult(l,d=>{s.forEach(h=>{h.observer.trackProp(d)})})})},ne=function(t,r){return r?((!y(this,M)||y(this,C)!==y(this,U)||r!==y(this,Q))&&(S(this,Q,r),S(this,U,y(this,C)),S(this,M,Le(y(this,M),r(t)))),y(this,M)):t},F=function(t){const r=new Map(y(this,E).map(i=>[i.options.queryHash,i])),s=[];return t.forEach(i=>{const o=y(this,T).defaultQueryOptions(i),l=r.get(o.queryHash);l?s.push({defaultedQueryOptions:o,observer:l}):s.push({defaultedQueryOptions:o,observer:new ye(y(this,T),o)})}),s},ie=function(t,r){const s=y(this,E).indexOf(t);s!==-1&&(S(this,C,xt(y(this,C),s,r)),$(this,j,le).call(this))},le=function(){var t;if(this.hasListeners()){const r=y(this,M),s=$(this,j,ne).call(this,$(this,j,re).call(this,y(this,C),y(this,N)),(t=y(this,A))==null?void 0:t.combine);r!==s&&te.batch(()=>{this.listeners.forEach(i=>{i(y(this,C))})})}},be);function k({queries:e,...t},r){const s=Te(),i=Ae(),o=De(),l=c.useMemo(()=>e.map(a=>{const p=s.defaultQueryOptions(a);return p._optimisticResults=i?"isRestoring":"optimistic",p}),[e,s,i]);l.forEach(a=>{qe(a),_e(a,o)}),He(o);const[d]=c.useState(()=>new jt(s,l,t)),[h,u,g]=d.getOptimisticResult(l,t.combine);c.useSyncExternalStore(c.useCallback(a=>i?Qe:d.subscribe(te.batchCalls(a)),[d,i]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),c.useEffect(()=>{d.setQueries(l,t,{listeners:!1})},[l,t,d]);const w=h.some((a,p)=>ce(l[p],a))?h.flatMap((a,p)=>{const m=l[p];if(m){const f=new ye(s,m);if(ce(m,a))return de(m,f,o);Ue(a,i)&&de(m,f,o)}return[]}):[];if(w.length>0)throw Promise.all(w);const O=h.find((a,p)=>{const m=l[p];return m&&Fe({result:a,errorResetBoundary:o,throwOnError:m.throwOnError,query:s.getQueryCache().get(m.queryHash)})});if(O!=null&&O.error)throw O.error;return u(g())}function Ot(){const{data:e,isLoading:t,isError:r,error:s}=Ge({queryKey:["apps"],queryFn:Je}),i=(e==null?void 0:e.apps)??[],o=k({queries:i.map(a=>({queryKey:["deployments",a.name],queryFn:()=>We(a.name),enabled:!!e}))}),l=k({queries:o.flatMap((a,p)=>{if(!a.data||a.isError)return[];const{deployments:m}=a.data,f=i[p].name;return m.map(x=>({queryKey:["releases",f,x.name],queryFn:()=>Ke(f,x.name),enabled:!!a.data}))})}),d=k({queries:o.flatMap((a,p)=>{if(!a.data||a.isError)return[];const{deployments:m}=a.data,f=i[p].name;return m.map(x=>({queryKey:["metrics",f,x.name],queryFn:()=>Xe(f,x.name),enabled:!!a.data}))})}),h=i.length,u=l.reduce((a,p)=>{var m;return p.data?a+(((m=p.data.history)==null?void 0:m.length)??0):a},0),g=d.reduce((a,p)=>{var m;return(m=p==null?void 0:p.data)!=null&&m.metrics?a+Object.values(p.data.metrics).reduce((f,x)=>x!=null&&x.downloaded?f+x.downloaded:f,0):a},0),I=l.reduce((a,p)=>{if(!p.data)return a;const f=(p.data.history??[]).reduce((x,R)=>x+(R.size??0),0);return a+f},0),w=t||o.some(a=>a.isLoading)||l.some(a=>a.isLoading),O=r||o.some(a=>a.isError)||l.some(a=>a.isError);return{apps:i,totalApps:h,totalReleases:u,totalSize:I,totalDownloads:g,isLoading:w,isError:O,error:s}}const{Title:me,Text:b,Paragraph:ee}=ke,{Content:St}=fe,Bt=()=>{const e=Ve(),{totalApps:t,totalReleases:r,totalSize:s,isLoading:i,totalDownloads:o}=Ot(),l=[{title:"Home",onClick:()=>e("/")},{title:"Billing"}],d=[{key:"1",label:n.jsxs(z,{children:[n.jsx(b,{children:"Updates"}),n.jsx(V,{content:n.jsx(ee,{children:"Amount of JS bundles downloaded by users per month"}),title:"Updates",children:n.jsx(X,{})})]}),children:"200 000 downloads"},{key:"2",label:n.jsxs(z,{children:[n.jsx(b,{children:"Release bundles"}),n.jsx(V,{content:n.jsx(ee,{children:"Amount JS bundle releases stored on Revopush cloud"}),title:"Release bundles",children:n.jsx(X,{})})]}),children:"Unlimited"},{key:"3",label:n.jsxs(z,{children:[n.jsx(b,{children:"Storage"}),n.jsx(V,{content:n.jsx(ee,{children:"Deployment storage for JS bundles"}),title:"Storage",children:n.jsx(X,{})})]}),children:"1 GiB"}],h=[{key:"1",label:"Total apps",children:n.jsx(b,{strong:!0,children:t})},{key:"2",label:"Updates",children:n.jsx(b,{strong:!0,children:`${o} / 200 000`})},{key:"3",label:"Bundles",children:n.jsx(b,{strong:!0,children:`${r} / Unlimited`})},{key:"4",label:"Storage",children:n.jsx(b,{strong:!0,children:`${st(s)} / 1 GiB`})}];return n.jsxs(et,{children:[n.jsx(fe,{children:n.jsxs(St,{style:{paddingRight:50,paddingTop:20},children:[n.jsx(tt,{separator:">",items:l}),n.jsx(ue,{align:"center",justify:"space-between",children:n.jsx(me,{level:2,children:"Billing"})}),n.jsxs(_,{title:"Plan",children:[n.jsx(se,{title:"Free beta plan",bordered:!0,items:d,column:1,size:"small"}),n.jsx("br",{}),n.jsxs(b,{children:["*",n.jsx(b,{strong:!0,children:"The free beta plan"})," includes 200k updates per month and unlimited bundles until March 31, 2025. Starting April 1, 2025, charges will be based on your usage statistics. If you need more than 200k updates, message us at our support:"," ",n.jsx("a",{href:"mailto:support@revopush.org",target:"_blank",rel:"noreferrer",children:"support@revopush.org"})]})]}),n.jsx("br",{}),n.jsx(_,{title:"Usage statistics",children:n.jsx(Ye,{loading:i,children:n.jsx(se,{bordered:!0,items:h,column:1,size:"small"})})}),n.jsx(ue,{align:"center",justify:"space-between",children:n.jsx(me,{level:2,children:"Choose a plan"})}),n.jsxs(nt,{gutter:24,children:[n.jsx(J,{span:8,children:n.jsxs(_,{title:"Basic",bordered:!1,children:[n.jsxs(z,{size:"small",align:"end",children:[n.jsx(b,{strong:!0,style:{fontSize:24,lineHeight:1},children:"$30"}),n.jsx(b,{type:"secondary",children:"Per Month"})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(z,{size:"small",direction:"vertical",style:{display:"flex"},children:[n.jsx(b,{type:"secondary",children:"Up to 200 bundles"}),n.jsx(b,{type:"secondary",children:"Up to 200 000 updates per month"}),n.jsx(b,{type:"secondary",children:"CI/CD Integration"}),n.jsx(b,{type:"secondary",children:"$0.00015 per update, with tiered pricing above 200K"})]}),n.jsx("br",{}),n.jsx(K,{color:"primary",variant:"solid",disabled:!0,children:"Subscribe"})]})}),n.jsx(J,{span:8,children:n.jsxs(_,{title:"Team",bordered:!1,children:[n.jsxs(z,{size:"small",align:"end",children:[n.jsx(b,{strong:!0,style:{fontSize:24,lineHeight:1},children:"$90"}),n.jsx(b,{type:"secondary",children:"Per Month"})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(z,{size:"small",direction:"vertical",style:{display:"flex"},children:[n.jsx(b,{type:"secondary",children:"Up to 500 bundles"}),n.jsx(b,{type:"secondary",children:"Up to 1 000 000 updates per month"}),n.jsx(b,{type:"secondary",children:"CI/CD Integration"}),n.jsx(b,{type:"secondary",children:"Priority support"})]}),n.jsx("br",{}),n.jsx(K,{color:"primary",variant:"solid",disabled:!0,children:"Subscribe"})]})}),n.jsx(J,{span:8,children:n.jsxs(_,{title:"Enterprise",bordered:!1,children:[n.jsx(z,{size:"small",align:"end",children:n.jsx(b,{strong:!0,style:{fontSize:24,lineHeight:1},children:"Contact us"})}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(z,{size:"small",direction:"vertical",style:{display:"flex"},children:[n.jsx(b,{type:"secondary",children:"Unlimited bundles"}),n.jsx(b,{type:"secondary",children:"Unlimited updates per month"}),n.jsx(b,{type:"secondary",children:"Extended security and SSO"}),n.jsx(b,{type:"secondary",children:"Deploy on AWS, GCP, or your provider"})]}),n.jsx("br",{}),n.jsx(K,{href:"mailto:support@revopush.org",target:"_blank",rel:"noreferrer",color:"primary",variant:"solid",children:"Contact: support@revopush.org"})]})})]})]})}),n.jsx(Ze,{})]})};export{Bt as default};
//# sourceMappingURL=Billing-DygjLlWh.js.map