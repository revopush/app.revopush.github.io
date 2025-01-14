import{j as e,C as i,T as l}from"./index-DGRXoS3T.js";import{C as r}from"./CodeSnippet-vI6bhpao.js";const{Title:n,Text:t,Paragraph:s}=l,c=({apiServer:o})=>e.jsxs(i,{title:"Setup environment",style:{width:"100%"},children:[e.jsx(n,{level:5,style:{marginTop:0},children:"CLI Setup"}),e.jsx(s,{children:"Install the CodePush CLI"}),e.jsx(r,{language:"bash",code:"npm install code-push-cli@latest -g"}),e.jsx("br",{}),e.jsx(s,{children:"Login to Revopush server"}),e.jsx(s,{children:"This will launch a browser, asking you to authenticate with your GitHub. This will generate an access key that you need to copy/paste into the CLI (it will prompt you for it). You are now successfully authenticated and can safely close your browser window."}),e.jsx(r,{language:"bash",code:`code-push login ${o}`}),e.jsx("br",{}),e.jsx(n,{level:5,style:{marginTop:0},children:"Android configuration"}),e.jsxs(s,{children:["Add the ",e.jsx(t,{code:!0,children:"CodePushServerUrl"})," to the file"," ",e.jsx(t,{code:!0,children:"android/app/src/main/res/values/strings.xml"}),"I"]}),e.jsx(r,{language:"xml",code:`<resources>
  <string moduleConfig="true" name="CodePushServerUrl">${o}</string>
</resources>`}),e.jsx(n,{level:5,style:{marginTop:0},children:"iOS configuration"}),e.jsxs(s,{children:["Add the ",e.jsx(t,{code:!0,children:"CodePushServerURL"}),"to the file"," ",e.jsx(t,{code:!0,children:"ios/[ProjectName]/Info.plist"})]}),e.jsx(r,{language:"xml",code:`<key>CodePushServerURL</key>
<string>${o}</string>`})]});export{c as default};
