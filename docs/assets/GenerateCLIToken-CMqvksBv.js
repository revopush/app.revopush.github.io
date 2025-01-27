import{cG as j,f as p,r as l,cF as T,j as e,L as y,F as u,i as w,B as k,cH as v,l as I,T as C,a_ as A}from"./index-Dzs6o6Dg.js";import{u as E,a as S}from"./useErrorMessage-CIwAEmCD.js";import{d as h}from"./dayjs.min-CKIEpEJm.js";import{d as F}from"./duration-BML1DXEd.js";import{R as L}from"./index-Bp6bbdPA.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new s.Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="ec7602f5-9362-439f-98b7-bae17f8c05ff",s._sentryDebugIdIdentifier="sentry-dbid-ec7602f5-9362-439f-98b7-bae17f8c05ff")}catch{}})();h.extend(F);const{Content:G}=y,{Title:P,Paragraph:R,Text:f}=C,z=()=>{const[s]=j(),n=p(),[i,g]=l.useState(null),m=E(),{mutate:c,isPending:x,isError:b,error:a}=S({mutationFn:A,onSuccess:t=>{var o,r,d;(o=t==null?void 0:t.data)!=null&&o.accessKey&&g((d=(r=t==null?void 0:t.data)==null?void 0:r.accessKey)==null?void 0:d.name)},onError:t=>{t.status!==409&&m(t,"Couldn't create new access key")}});return l.useEffect(()=>{const t=s.get("hostname");if(t){T.event({category:"Auth",action:`CLI Token requested ${t}`,label:"CLI Token"});const o=h.duration(60,"days").asMilliseconds();c({friendlyName:t,ttl:o})}},[c,s]),e.jsx(y,{children:e.jsx(G,{children:e.jsxs(u,{justify:"center",align:"center",style:{height:"100vh"},vertical:!0,children:[e.jsx(w,{loading:x,children:b||!s.get("hostname")?e.jsx(L,{status:"error",title:(a==null?void 0:a.status)===409?"The access key already exists":"Authentication Failed",subTitle:(a==null?void 0:a.status)===409?"Got to Settings -> Add new key to release a new key.":"Try again or contact our support: support@revopush.org",extra:(a==null?void 0:a.status)===409?[e.jsx(k,{onClick:()=>n("/settings"),type:"primary",children:"Go to Settings"},"console")]:[]}):e.jsxs(u,{justify:"center",align:"start",vertical:!0,children:[e.jsx(P,{level:2,style:{marginBottom:0,marginTop:0},children:"Authentication succeeded"}),e.jsx("br",{}),e.jsx(f,{children:"Please copy and paste this token to the command window:"}),e.jsx("br",{}),e.jsx(R,{code:!0,copyable:{icon:e.jsx(v,{style:{fontSize:18,marginLeft:10}})},style:{fontSize:22},children:i}),e.jsx(f,{children:"After doing so, please close this browser tab."})]})}),e.jsx(I,{})]})})})};export{z as default};
//# sourceMappingURL=GenerateCLIToken-CMqvksBv.js.map
