import{o as h,p as k,j as e,q as I,r as m,F as A,B as f,s as E,T as b,t as T,f as R,h as M,L as w,k as P,i as v,l as N,n as D}from"./index-6IovgF0W.js";import{S as _,B as q,R as B}from"./SideBar-Cyj5sGeY.js";import{u as j}from"./useMutation-WxmkvIM8.js";import{F as u,M as F,I as C,a as O}from"./Table-B0Wi3i17.js";import{T as L,t as $}from"./tags-BiQARsp5.js";import{P as K}from"./index-CY9NJhcA.js";import{R as W,a as G}from"./MoreOutlined-B3oG857e.js";import{R as H}from"./index-CMY6wL_F.js";import"./row-BilTJ1M3.js";import"./Pagination-DoVHVzAl.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},l=new o.Error().stack;l&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[l]="aeba5942-f2e0-4e70-b750-ced4d4ffa27a",o._sentryDebugIdIdentifier="sentry-dbid-aeba5942-f2e0-4e70-b750-ced4d4ffa27a")}catch{}})();const Q=({isOpen:o,onSuccess:l,onCancel:c})=>{const[p]=u.useForm(),{message:n}=h.useApp(),{mutate:d,isPending:a}=j({mutationFn:k,onSuccess:()=>{p.resetFields(),l()},onError:i=>{var r;n.open({type:"error",content:((r=i==null?void 0:i.response)==null?void 0:r.data)||"Couldn't create new app"})}}),t=({appName:i})=>{d({name:i})},s=()=>{p.resetFields(),c()};return e.jsx(e.Fragment,{children:e.jsx(F,{title:"New application",open:o,okText:"Add new app",onOk:()=>p.submit(),confirmLoading:a,onCancel:s,children:e.jsx(u,{form:p,layout:"vertical",onFinish:t,children:e.jsx(u.Item,{label:"Appication name",extra:"With new app we create default deployments: Production and Staging",name:"appName",rules:[{required:!0,message:"Please input your application name!"}],children:e.jsx(C,{})})})})})},{Text:U}=b,V=(o,l)=>{const{message:c,modal:p}=h.useApp(),{mutate:n}=j({mutationFn:I,onSuccess:()=>{c.success("Successfully deleted"),o()},onError:a=>{var t;c.open({type:"error",content:((t=a==null?void 0:a.response)==null?void 0:t.data)||"Couldn't delete application"})}});return m.useMemo(()=>[{title:"Name",dataIndex:"name",key:"name",minWidth:200,className:"table-cursor",render:a=>a},{title:"Deployments",key:"deployments",dataIndex:"deployments",render:(a,{deployments:t})=>(t==null?void 0:t.length)>0?t==null?void 0:t.map((s,i)=>e.jsx(L,{color:$[i],children:s},i)):e.jsx(U,{type:"secondary",children:"No deployments yet"})},{title:"Actions",key:"actions",width:100,align:"center",render:(a,t)=>e.jsx(K,{content:e.jsxs(A,{vertical:!0,gap:"small",children:[e.jsx(f,{onClick:s=>{s.stopPropagation(),l(t==null?void 0:t.name)},type:"text",icon:e.jsx(E,{}),children:"Edit"}),e.jsx(f,{onClick:s=>{s.stopPropagation(),p.confirm({icon:null,title:"Confirm",content:"Are you sure you want to remove application?",onOk:()=>{n(t==null?void 0:t.name)}})},type:"text",danger:!0,icon:e.jsx(W,{}),children:"Delete"})]}),trigger:"click",children:e.jsx(f,{onClick:s=>{s.stopPropagation()},icon:e.jsx(G,{}),type:"text"})})}],[p,n,l])},z=({isOpen:o,application:l,onSuccess:c,onCancel:p})=>{const[n]=u.useForm(),{message:d}=h.useApp();m.useEffect(()=>{n.setFieldValue("appName",l)},[n,l]);const{mutate:a,isPending:t}=j({mutationFn:T,onSuccess:()=>{n.resetFields(),c()},onError:r=>{var x;d.open({type:"error",content:((x=r==null?void 0:r.response)==null?void 0:x.data)||"Couldn't update application"})}}),s=({appName:r})=>{a({name:l,newName:r})},i=()=>{n.resetFields(),p()};return e.jsx(e.Fragment,{children:e.jsx(F,{title:"Edit application",open:o,okText:"Update app",onOk:()=>n.submit(),confirmLoading:t,onCancel:i,children:e.jsx(u,{form:n,layout:"vertical",onFinish:s,children:e.jsx(u.Item,{label:"Appication name",name:"appName",rules:[{required:!0,message:"Please input your application name!"}],children:e.jsx(C,{})})})})})},{Title:J}=b,{Content:X}=w,ce=()=>{var y;const o=R(),[l,c]=m.useState(null),[p,n]=m.useState(!1),[d,a]=m.useState(!1),{isPending:t,data:s,refetch:i}=M({queryKey:["apps"],queryFn:D}),x=V(i,g=>{c(g),a(!0)}),S=[{title:"Home",onClick:()=>o("/")},{title:"Applications"}];return e.jsxs(_,{children:[e.jsx(w,{children:e.jsxs(X,{style:{paddingRight:50,paddingTop:20},children:[e.jsx(q,{separator:">",items:S}),e.jsxs(A,{align:"center",justify:"space-between",children:[e.jsx(J,{level:2,children:"Applications"}),e.jsx(f,{onClick:()=>n(!0),type:"primary",children:"Add an Application"})]}),e.jsx(P,{loading:t,children:((y=s==null?void 0:s.apps)==null?void 0:y.length)>0?e.jsx(O,{rowKey:"name",columns:x,dataSource:s.apps,pagination:!1,onRow:g=>({onClick:()=>{o(`/applications/${g.name}`)}})}):e.jsx(v,{children:e.jsx(H,{title:"Start your project",subTitle:"Get started with Revopush by creating an application.",icon:e.jsx(B,{}),extra:[e.jsx(f,{onClick:()=>n(!0),type:"default",children:"Add an Application"},"console")]})})})]})}),e.jsx(Q,{isOpen:p,onCancel:()=>n(!1),onSuccess:()=>{i(),n(!1)}}),e.jsx(z,{isOpen:d,application:l,onCancel:()=>{a(!1),c(null)},onSuccess:()=>{i(),c(null),a(!1)}}),e.jsx(N,{})]})};export{ce as default};
//# sourceMappingURL=Applications-C4rxHp8I.js.map
