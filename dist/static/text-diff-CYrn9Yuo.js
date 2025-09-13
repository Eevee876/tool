import{i as L,t as V,_ as $}from"./tool_layout-DbWAD8Lj.js";import{a as o,c as i,f as b,u as B,M as G,h as k,k as z,m as T}from"./index-BWmusdtY.js";import{d as P,m as C,a as y,r as d,B as I,C as S,R as U,G as m,E as s,c as R,J as D}from"./vue-DmyGUHoc.js";import{_ as E}from"./Select-BIa5Hy5D.js";import{_ as N}from"./Flex-Do2fzxZn.js";import"./browser-CNOlDb02.js";import"./_plugin-vue_export-helper--GVzvVMK.js";import"./use-compitable-BDkm6hnc.js";import"./color-to-class-B0iQgAn2.js";const O=o("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[i(">",[o("input",[i("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),i("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),o("button",[i("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),i("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),i("*",[i("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[i(">",[o("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),o("base-selection",[o("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),o("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),i("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[i(">",[o("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),o("base-selection",[o("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),o("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),j={},H=P({name:"InputGroup",props:j,setup(e){const{mergedClsPrefixRef:r}=B(e);return G("-input-group",O,r),{mergedClsPrefix:r}},render(){const{mergedClsPrefix:e}=this;return C("div",{class:`${e}-input-group`},this.$slots)}}),J=o("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[b("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),K=Object.assign(Object.assign({},k.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),M=P({name:"InputGroupLabel",props:K,setup(e){const{mergedBorderedRef:r,mergedClsPrefixRef:n,inlineThemeDisabled:a}=B(e),p=k("Input","-input-group-label",J,L,e,n),g=y(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:t},self:{groupLabelColor:f,borderRadius:h,groupLabelTextColor:v,lineHeight:_,groupLabelBorder:x,[z("fontSize",c)]:w,[z("height",c)]:l}}=p.value;return{"--n-bezier":t,"--n-group-label-color":f,"--n-group-label-border":x,"--n-border-radius":h,"--n-group-label-text-color":v,"--n-font-size":w,"--n-line-height":_,"--n-height":l}}),u=a?T("input-group-label",y(()=>e.size[0]),g,e):void 0;return{mergedClsPrefix:n,mergedBordered:r,cssVars:a?void 0:g,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e,r,n;const{mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),C("div",{class:[`${a}-input-group-label`,this.themeClass],style:this.cssVars},(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r),this.mergedBordered?C("div",{class:`${a}-input-group-label__border`}):null)}}),et={__name:"text-diff",setup(e){const r=d("hello world"),n=d("hello"),a=d("split"),p=d("light"),g=d([{label:"split",value:"split"},{label:"unified",value:"unified"}]),u=d([{label:"light",value:"light"},{label:"dark",value:"dark"},{label:"custom",value:"custom"}]);return(c,t)=>{const f=$,h=M,v=E,_=H,x=N,w=I("Diff");return S(),U(V,null,{default:m(()=>[s(x,null,{default:m(()=>[s(f,{type:"textarea",value:r.value,"onUpdate:value":t[0]||(t[0]=l=>r.value=l),placeholder:"旧文本",style:{"max-width":"48%"},autosize:{minRows:6}},null,8,["value"]),s(f,{type:"textarea",value:n.value,"onUpdate:value":t[1]||(t[1]=l=>n.value=l),placeholder:"新文本",style:{"max-width":"48%"},autosize:{minRows:6}},null,8,["value"]),s(_,null,{default:m(()=>[s(h,null,{default:m(()=>t[4]||(t[4]=[R("模式：")])),_:1}),s(v,{style:{width:"25%"},options:g.value,value:a.value,"onUpdate:value":t[2]||(t[2]=l=>a.value=l)},null,8,["options","value"]),s(h,null,{default:m(()=>t[5]||(t[5]=[R("主题：")])),_:1}),s(v,{style:{width:"25%"},options:u.value,value:p.value,"onUpdate:value":t[3]||(t[3]=l=>p.value=l)},null,8,["options","value"])]),_:1})]),_:1}),t[6]||(t[6]=D("h2",null,"对比结果",-1)),s(w,{mode:a.value,theme:p.value,language:c.language,prev:r.value,current:n.value},null,8,["mode","theme","language","prev","current"])]),_:1})}}};export{et as default};
