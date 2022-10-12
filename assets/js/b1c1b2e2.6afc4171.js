"use strict";(self.webpackChunkinboxsdk_docs=self.webpackChunkinboxsdk_docs||[]).push([[885],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8504:function(t,e,n){n.r(e),n.d(e,{Method:function(){return s},Type:function(){return m},assets:function(){return d},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={title:"InboxSDK.*"},i=void 0,l={unversionedId:"inboxsdk-star",id:"inboxsdk-star",title:"InboxSDK.*",description:"The functions in this class are only used for load related functionality like loading the SDK itself or other external scripts.",source:"@site/docs/inboxsdk-star.md",sourceDirName:".",slug:"/inboxsdk-star",permalink:"/inboxsdk-docs/inboxsdk-star",draft:!1,editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/inboxsdk-star.md",tags:[],version:"current",frontMatter:{title:"InboxSDK.*"},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/inboxsdk-docs/"},next:{title:"Compose",permalink:"/inboxsdk-docs/compose"}},d={},p=[{value:"<code>load()</code>",id:"load",level:3},{value:"<code>loadScript()</code>",id:"loadscript",level:3},{value:"<code>LoadOptions</code>",id:"loadoptions",level:3},{value:"<code>LoadScriptOptions</code>",id:"loadscriptoptions",level:3}],s=t=>{let{children:e,returns:n}=t;return(0,a.kt)("div",{style:{marginBottom:"8px",marginTop:"8px"}},(0,a.kt)("div",{style:{display:"inline-block",marginBottom:"12px",borderBottom:"dashed 4px #1877F2"}},"Method returns:"),(0,a.kt)("span",null," ",(0,a.kt)("code",null,n)))},m=t=>{let{children:e,usedByAnchor:n,usedBy:r}=t;return(0,a.kt)("div",{style:{marginBottom:"8px",marginTop:"8px"}},(0,a.kt)("div",{style:{display:"inline-block",marginBottom:"12px",borderBottom:"dashed 4px rgb(241 119 32)"}},"Type, used by: ",(0,a.kt)("a",{href:"#"+n},r)))},u={toc:p,Method:s,Type:m};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The functions in this class are only used for load related functionality like loading the SDK itself or other external scripts."),(0,a.kt)("h3",{id:"load"},(0,a.kt)("inlineCode",{parentName:"h3"},"load()")),(0,a.kt)(s,{returns:"Promise",mdxType:"Method"}),(0,a.kt)("p",null,'Loads InboxSDK remotely and prepares it to be used. Returns a promise which resolves with the SDK interface (see usage examples under "Structuring Your App") when the SDK is loaded and ready to be used.'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"version")),(0,a.kt)("td",{parentName:"tr",align:null},"The API version of the SDK to use. The recommended value right now is 2."),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"appId")),(0,a.kt)("td",{parentName:"tr",align:null},"The AppId that you registered for on the ",(0,a.kt)("a",{parentName:"td",href:"http://localhost:3000/inboxsdk-docs/api-reference"},"AppId Registration")," page."),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional options object"),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"LoadOptions"))))),(0,a.kt)("h3",{id:"loadscript"},(0,a.kt)("inlineCode",{parentName:"h3"},"loadScript()")),(0,a.kt)(s,{returns:"Promise",mdxType:"Method"}),(0,a.kt)("p",null,"Loads a remote script into the extension's content script space and evals it. Returns a promise which resolves when the script is finished downloading and eval'ing."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"url")),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the remote script to load"),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional options object"),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"LoadScriptOptions"))))),(0,a.kt)("h3",{id:"loadoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"LoadOptions")),(0,a.kt)(m,{usedBy:"InboxSDK.load()",usedByAnchor:"load",mdxType:"Type"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"appName")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of your app. This is used by several methods in the SDK."),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("em",{parentName:"td"},"default: ",(0,a.kt)("inlineCode",{parentName:"em"},"null")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"appIconUrl")),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the icon of your app. Can be HTTPS or a chrome runtime url."),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("em",{parentName:"td"},"default: ",(0,a.kt)("inlineCode",{parentName:"em"},"null")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"suppressAddonTitle")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the Gmail Add-On you want to hide. Use this if you have both an extension and a Gmail Add-On that provide similar functionality."),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("em",{parentName:"td"},"default: ",(0,a.kt)("inlineCode",{parentName:"em"},"null")))))),(0,a.kt)("h3",{id:"loadscriptoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"LoadScriptOptions")),(0,a.kt)(m,{usedBy:"InboxSDK.loadScript()",usedByAnchor:"loadscript",mdxType:"Type"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"nowrap")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of your app. This is used by several methods in the SDK."),(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"),", ",(0,a.kt)("em",{parentName:"td"},"default: ",(0,a.kt)("inlineCode",{parentName:"em"},"false")))))))}c.isMDXComponent=!0}}]);