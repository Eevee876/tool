import{d as H,c as l,a as y,b as ce,e as b,f as m,i as ge,g as fe,u as N,h as R,j as ue,k,l as me,m as L,N as be,n as _,o as I}from"./index-BWmusdtY.js";import{d as W,a as v,m as h,r as pe,X as he,o as ve,C as w,D as E,F as O,M as j,E as F,G as $,J as xe,O as M,R as Ce,c as Se}from"./vue-DmyGUHoc.js";import{i as ze,r as S,c as ye,e as z,_ as _e}from"./_plugin-vue_export-helper--GVzvVMK.js";import{f as we,_ as ke}from"./Flex-Do2fzxZn.js";import{N as Ee}from"./Icon-lmVjpcGR.js";let V=!1;function $e(){if(ze&&window.CSS&&!V&&(V=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const Re={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function Te(o){const{primaryColor:a,borderRadius:c,lineHeight:r,fontSize:g,cardColor:i,textColor2:f,textColor1:d,dividerColor:t,fontWeightStrong:e,closeIconColor:n,closeIconColorHover:s,closeIconColorPressed:p,closeColorHover:u,closeColorPressed:x,modalColor:T,boxShadow1:P,popoverColor:B,actionColor:C}=o;return Object.assign(Object.assign({},Re),{lineHeight:r,color:i,colorModal:T,colorPopover:B,colorTarget:a,colorEmbedded:C,colorEmbeddedModal:C,colorEmbeddedPopover:C,textColor:f,titleTextColor:d,borderColor:t,actionColor:C,titleFontWeight:e,closeColorHover:u,closeColorPressed:x,closeBorderRadius:c,closeIconColor:n,closeIconColorHover:s,closeIconColorPressed:p,fontSizeSmall:g,fontSizeMedium:g,fontSizeLarge:g,fontSizeHuge:g,boxShadow:P,borderRadius:c})}const Pe={name:"Card",common:H,self:Te},Be=l([y("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ce({background:"var(--n-color-modal)"}),b("hoverable",[l("&:hover","box-shadow: var(--n-box-shadow);")]),b("content-segmented",[l(">",[m("content",{paddingTop:"var(--n-padding-bottom)"})])]),b("content-soft-segmented",[l(">",[m("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),b("footer-segmented",[l(">",[m("footer",{paddingTop:"var(--n-padding-bottom)"})])]),b("footer-soft-segmented",[l(">",[m("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),l(">",[y("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[m("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),m("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),m("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),m("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),m("content","flex: 1; min-width: 0;"),m("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[l("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),m("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),y("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[l("img",`
 display: block;
 width: 100%;
 `)]),b("bordered",`
 border: 1px solid var(--n-border-color);
 `,[l("&:target","border-color: var(--n-color-target);")]),b("action-segmented",[l(">",[m("action",[l("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("content-segmented, content-soft-segmented",[l(">",[m("content",{transition:"border-color 0.3s var(--n-bezier)"},[l("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("footer-segmented, footer-soft-segmented",[l(">",[m("footer",{transition:"border-color 0.3s var(--n-bezier)"},[l("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("embedded",`
 background-color: var(--n-color-embedded);
 `)]),ge(y("card",`
 background: var(--n-color-modal);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),fe(y("card",`
 background: var(--n-color-popover);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Fe={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},Ie=Object.assign(Object.assign({},R.props),Fe),Oe=W({name:"Card",props:Ie,setup(o){const a=()=>{const{onClose:e}=o;e&&ye(e)},{inlineThemeDisabled:c,mergedClsPrefixRef:r,mergedRtlRef:g}=N(o),i=R("Card","-card",Be,Pe,o,r),f=ue("Card",g,r),d=v(()=>{const{size:e}=o,{self:{color:n,colorModal:s,colorTarget:p,textColor:u,titleTextColor:x,titleFontWeight:T,borderColor:P,actionColor:B,borderRadius:C,lineHeight:D,closeIconColor:G,closeIconColorHover:A,closeIconColorPressed:J,closeColorHover:K,closeColorPressed:X,closeBorderRadius:q,closeIconSize:Q,closeSize:U,boxShadow:Y,colorPopover:Z,colorEmbedded:ee,colorEmbeddedModal:oe,colorEmbeddedPopover:re,[k("padding",e)]:te,[k("fontSize",e)]:ne,[k("titleFontSize",e)]:ae},common:{cubicBezierEaseInOut:ie}}=i.value,{top:de,left:se,bottom:le}=me(te);return{"--n-bezier":ie,"--n-border-radius":C,"--n-color":n,"--n-color-modal":s,"--n-color-popover":Z,"--n-color-embedded":ee,"--n-color-embedded-modal":oe,"--n-color-embedded-popover":re,"--n-color-target":p,"--n-text-color":u,"--n-line-height":D,"--n-action-color":B,"--n-title-text-color":x,"--n-title-font-weight":T,"--n-close-icon-color":G,"--n-close-icon-color-hover":A,"--n-close-icon-color-pressed":J,"--n-close-color-hover":K,"--n-close-color-pressed":X,"--n-border-color":P,"--n-box-shadow":Y,"--n-padding-top":de,"--n-padding-bottom":le,"--n-padding-left":se,"--n-font-size":ne,"--n-title-font-size":ae,"--n-close-size":U,"--n-close-icon-size":Q,"--n-close-border-radius":q}}),t=c?L("card",v(()=>o.size[0]),d,o):void 0;return{rtlEnabled:f,mergedClsPrefix:r,mergedTheme:i,handleCloseClick:a,cssVars:c?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{segmented:o,bordered:a,hoverable:c,mergedClsPrefix:r,rtlEnabled:g,onRender:i,embedded:f,tag:d,$slots:t}=this;return i==null||i(),h(d,{class:[`${r}-card`,this.themeClass,f&&`${r}-card--embedded`,{[`${r}-card--rtl`]:g,[`${r}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${r}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${r}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${r}-card--bordered`]:a,[`${r}-card--hoverable`]:c}],style:this.cssVars,role:this.role},S(t.cover,e=>{const n=this.cover?z([this.cover()]):e;return n&&h("div",{class:`${r}-card-cover`,role:"none"},n)}),S(t.header,e=>{const{title:n}=this,s=n?z(typeof n=="function"?[n()]:[n]):e;return s||this.closable?h("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},h("div",{class:`${r}-card-header__main`,role:"heading"},s),S(t["header-extra"],p=>{const u=this.headerExtra?z([this.headerExtra()]):p;return u&&h("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},u)}),this.closable&&h(be,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),S(t.default,e=>{const{content:n}=this,s=n?z(typeof n=="function"?[n()]:[n]):e;return s&&h("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},s)}),S(t.footer,e=>{const n=this.footer?z([this.footer()]):e;return n&&h("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},n)}),S(t.action,e=>{const n=this.action?z([this.action()]):e;return n&&h("div",{class:`${r}-card__action`,role:"none"},n)}))}});function je(o){const{primaryColor:a,successColor:c,warningColor:r,errorColor:g,infoColor:i,fontWeightStrong:f}=o;return{fontWeight:f,rotate:"252deg",colorStartPrimary:_(a,{alpha:.6}),colorEndPrimary:a,colorStartInfo:_(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:_(r,{alpha:.6}),colorEndWarning:r,colorStartError:_(g,{alpha:.6}),colorEndError:g,colorStartSuccess:_(c,{alpha:.6}),colorEndSuccess:c}}const Me={name:"GradientText",common:H,self:je},Ve=y("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),He=Object.assign(Object.assign({},R.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),Ne=W({name:"GradientText",props:He,setup(o){$e();const{mergedClsPrefixRef:a,inlineThemeDisabled:c}=N(o),r=v(()=>{const{type:e}=o;return e==="danger"?"error":e}),g=v(()=>{let e=o.size||o.fontSize;return e&&(e=we(e)),e||void 0}),i=v(()=>{const e=o.color||o.gradient;if(typeof e=="string")return e;if(e){const n=e.deg||0,s=e.from,p=e.to;return`linear-gradient(${n}deg, ${s} 0%, ${p} 100%)`}}),f=R("GradientText","-gradient-text",Ve,Me,o,a),d=v(()=>{const{value:e}=r,{common:{cubicBezierEaseInOut:n},self:{rotate:s,[k("colorStart",e)]:p,[k("colorEnd",e)]:u,fontWeight:x}}=f.value;return{"--n-bezier":n,"--n-rotate":s,"--n-color-start":p,"--n-color-end":u,"--n-font-weight":x}}),t=c?L("gradient-text",v(()=>r.value[0]),d,o):void 0;return{mergedClsPrefix:a,compatibleType:r,styleFontSize:g,styleBgImage:i,cssVars:c?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:o,onRender:a}=this;return a==null||a(),h("span",{class:[`${o}-gradient-text`,`${o}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Le={id:"list"},We={__name:"index",setup(o){const a=pe(new Map),c=he(),r=()=>{var i;for(let f=0;f<I.length;f++){const d=I[f];if(((i=d.meta)==null?void 0:i.hidden)===!1){const t=d.meta.group||"其他";if(a.value.has(t)){let e=a.value.get(t);e.push(d),a.value.set(t,e)}else{let e=[];e.push(d),a.value.set(t,e)}}}},g=i=>{c.push(i.path)};return ve(()=>{r()}),(i,f)=>{const d=Ne,t=Ee,e=Oe,n=ke;return w(),E("div",Le,[(w(!0),E(O,null,j(a.value,([s,p])=>(w(),E("div",{id:"group",key:s},[F(d,{gradient:{deg:180,from:"rgb(85, 85, 85)",to:"rgb(47, 170, 170)"}},{default:$(()=>[xe("h2",null,M(s),1)]),_:2},1024),F(n,null,{default:$(()=>[(w(!0),E(O,null,j(p,u=>(w(),Ce(e,{key:u.path,title:u.name,hoverable:"",onClick:x=>g(u)},{"header-extra":$(()=>[F(t,{component:u.icon,size:30},null,8,["component"])]),default:$(()=>[Se(" "+M(u.meta.description),1)]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]))),128))])}}},Xe=_e(We,[["__scopeId","data-v-a0e78532"]]);export{Xe as default};
