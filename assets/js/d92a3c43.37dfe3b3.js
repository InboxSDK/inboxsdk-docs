"use strict";(self.webpackChunkinboxsdk_docs=self.webpackChunkinboxsdk_docs||[]).push([[798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Resources"},s=void 0,i={unversionedId:"resources",id:"resources",title:"Resources",description:"Example Apps",source:"@site/docs/resources.md",sourceDirName:".",slug:"/resources",permalink:"/inboxsdk-docs/resources",draft:!1,editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/resources.md",tags:[],version:"current",frontMatter:{title:"Resources"},sidebar:"someSidebar",previous:{title:"Common Data Types",permalink:"/inboxsdk-docs/common-data-types"},next:{title:"Change Log",permalink:"/inboxsdk-docs/changelog"}},l={},c=[{value:"Example Apps",id:"example-apps",level:2},{value:"Advanced Patterns",id:"advanced-patterns",level:2},{value:"Promises",id:"promises",level:3},{value:"Streams",id:"streams",level:3},{value:"FAQ",id:"faq",level:2},{value:"What browsers are supported?",id:"what-browsers-are-supported",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-apps"},"Example Apps"),(0,o.kt)("p",null,"We've developed several sample extensions that demostrate the use of the InboxSDK. The examples are all hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InboxSDK"},"GitHub"),". If you'd like to help develop more samples, let us know!"),(0,o.kt)("h2",{id:"advanced-patterns"},"Advanced Patterns"),(0,o.kt)("h3",{id:"promises"},"Promises"),(0,o.kt)("p",null,"Several of our API methods accept or provide a promise for a certain value instead of the value itself. A promise is an object that represents an eventual value, and allows callbacks to be registered to be called when the value becomes present. Promises are standardized and are natively available as part of Javascript in modern browsers. Promises help to provide a consistent interface to writing asynchronous code.\nHere is a simple example of creating a promise that resolves to a value after a second, and then an example of how to listen to the promise:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var promise = new Promise(function(resolve, reject) {\n    setTimeout(function() {\n    resolve(\'foo\');\n    }, 1000);\n});\npromise.then(function(value) {\n    console.log("received", value);\n});\n// Prints "received foo" after one second.\n')),(0,o.kt)("p",null,"Promises can also be created by chaining from existing promises. For more information on promises, see resources such as the ",(0,o.kt)("a",{parentName:"p",href:"http://www.html5rocks.com/en/tutorials/es6/promises/"},"HTML5 Rocks")," or ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Mozilla Developer Network")," pages on promises."),(0,o.kt)("h3",{id:"streams"},"Streams"),(0,o.kt)("p",null,"Several of our API methods accept reactive streams as arguments. A reactive stream is an object that represents a series of eventual values, like a promise that can resolve repeatedly with new values over time. Streams are implemented in libraries such as ",(0,o.kt)("a",{parentName:"p",href:"https://pozadi.github.io/kefir/"},"Kefir"),", ",(0,o.kt)("a",{parentName:"p",href:"https://baconjs.github.io/"},"Bacon.js"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Reactive-Extensions/RxJS"},"Reactive Extensions for Javascript"),", which are each supported by the InboxSDK. Streams help to provide a consistent and composable interface to writing asynchronous code, like promises.\nIn order to create streams, you must include one of the above libraries in your extension. Here is an example of creating and then consuming a stream using the Kefir library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var stream = Kefir.stream(function(emitter) {\n    var timer = setInterval(function() {\n    emitter.emit(\'foo\');\n    }, 1000);\n\n    // Return a function to be called when the stream is unsubscribed from.\n    // Unlike promises, streams can know when they\'re no longer listened to!\n    return function() {\n    clearInterval(timer);\n    };\n});\nstream.take(5).onValue(function(value) {\n    console.log("received", value);\n});\n// Prints "received foo" five times each one second apart, and then stops.\n')),(0,o.kt)("p",null,"Note that reactive libraries often contain many specialized functions for creating streams from timers, event listeners, and other streams. This example purposefully uses a general method instead that can be quickly adapted to many uses. The above example should be enough to show you how to interact with the InboxSDK's stream-compatible methods, but if you want more information on reactive streams in order to use them more effectively, some recommended resources include the documentation of the above libraries, ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=XRYN2xt11Ek"},"Netflix's talk on Reactive Programming"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/staltz/868e7e9bc2a7b8c1f754"},"The introduction to Reactive Programming you've been missing"),"."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"what-browsers-are-supported"},"What browsers are supported?"),(0,o.kt)("p",null,"Chrome and Safari are currently supported.  Chrome version 36 and Safari 10 are the minimum versions we support.\nFirefox support is under consideration; please let us know if you're interested."))}m.isMDXComponent=!0}}]);