(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"Method",(function(){return l})),n.d(t,"Type",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),b=(n(0),n(99)),o={id:"inboxsdk-star",title:"InboxSDK.*"},i={unversionedId:"inboxsdk-star",id:"inboxsdk-star",isDocsHomePage:!1,title:"InboxSDK.*",description:"The functions in this class are only used for load related functionality like loading the SDK itself or other external scripts.",source:"@site/docs/inboxsdk-star.md",slug:"/inboxsdk-star",permalink:"/inboxsdk-docs/inboxsdk-star",editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/inboxsdk-star.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/inboxsdk-docs/"},next:{title:"Compose",permalink:"/inboxsdk-docs/compose"}},c=[{value:"<code>load()</code>",id:"load",children:[]},{value:"<code>loadScript()</code>",id:"loadscript",children:[]},{value:"<code>LoadOptions</code>",id:"loadoptions",children:[]},{value:"<code>LoadScriptOptions</code>",id:"loadscriptoptions",children:[]}],l=function(e){e.children;var t=e.returns;return Object(b.b)("div",{style:{marginBottom:"8px",marginTop:"8px"}},Object(b.b)("div",{style:{display:"inline-block",marginBottom:"12px",borderBottom:"dashed 4px #1877F2"}},"Method returns:"),Object(b.b)("span",null," ",Object(b.b)("code",null,t)))},d=function(e){e.children;var t=e.usedByAnchor,n=e.usedBy;return Object(b.b)("div",{style:{marginBottom:"8px",marginTop:"8px"}},Object(b.b)("div",{style:{display:"inline-block",marginBottom:"12px",borderBottom:"dashed 4px rgb(241 119 32)"}},"Type, used by: ",Object(b.b)("a",{href:"#"+t},n)))},p={toc:c,Method:l,Type:d};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The functions in this class are only used for load related functionality like loading the SDK itself or other external scripts."),Object(b.b)("h3",{id:"load"},Object(b.b)("inlineCode",{parentName:"h3"},"load()")),Object(b.b)(l,{returns:"Promise",mdxType:"Method"}),Object(b.b)("p",null,'Loads InboxSDK remotely and prepares it to be used. Returns a promise which resolves with the SDK interface (see usage examples under "Structuring Your App") when the SDK is loaded and ready to be used.'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"version")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The API version of the SDK to use. The recommended value right now is 2."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"number"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"appId")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The AppId that you registered for on the ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"http://localhost:3000/inboxsdk-docs/api-reference"}),"AppId Registration")," page."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"options")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional options object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"LoadOptions"))))),Object(b.b)("h3",{id:"loadscript"},Object(b.b)("inlineCode",{parentName:"h3"},"loadScript()")),Object(b.b)(l,{returns:"Promise",mdxType:"Method"}),Object(b.b)("p",null,"Loads a remote script into the extension's content script space and evals it. Returns a promise which resolves when the script is finished downloading and eval'ing."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"url")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The URL of the remote script to load"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"options")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional options object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"LoadScriptOptions"))))),Object(b.b)("h3",{id:"loadoptions"},Object(b.b)("inlineCode",{parentName:"h3"},"LoadOptions")),Object(b.b)(d,{usedBy:"InboxSDK.load()",usedByAnchor:"load",mdxType:"Type"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"appName")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of your app. This is used by several methods in the SDK."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"string"),", ",Object(b.b)("em",{parentName:"td"},"default: ",Object(b.b)("inlineCode",{parentName:"em"},"null")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"appIconUrl")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The URL of the icon of your app. Can be HTTPS or a chrome runtime url."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"string"),", ",Object(b.b)("em",{parentName:"td"},"default: ",Object(b.b)("inlineCode",{parentName:"em"},"null")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"suppressAddonTitle")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the Gmail Add-On you want to hide. Use this if you have both an extension and a Gmail Add-On that provide similar functionality."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"string"),", ",Object(b.b)("em",{parentName:"td"},"default: ",Object(b.b)("inlineCode",{parentName:"em"},"null")))))),Object(b.b)("h3",{id:"loadscriptoptions"},Object(b.b)("inlineCode",{parentName:"h3"},"LoadScriptOptions")),Object(b.b)(d,{usedBy:"InboxSDK.loadScript()",usedByAnchor:"loadscript",mdxType:"Type"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"nowrap")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of your app. This is used by several methods in the SDK."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean"),", ",Object(b.b)("em",{parentName:"td"},"default: ",Object(b.b)("inlineCode",{parentName:"em"},"false")))))))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,m=p["".concat(o,".").concat(O)]||p[O]||s[O]||b;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,o=new Array(b);o[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<b;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);