(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(2),s=r(6),o=(r(0),r(80)),n={id:"resources",title:"Resources"},i={unversionedId:"resources",id:"resources",isDocsHomePage:!1,title:"Resources",description:"Example Apps",source:"@site/docs/resources.md",slug:"/resources",permalink:"/inboxsdk-docs/resources",editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/resources.md",version:"current",sidebar:"someSidebar",previous:{title:"API Reference",permalink:"/inboxsdk-docs/api-reference"},next:{title:"Change Log",permalink:"/inboxsdk-docs/changelog"}},c=[{value:"Example Apps",id:"example-apps",children:[]},{value:"Advanced Patterns",id:"advanced-patterns",children:[{value:"Promises",id:"promises",children:[]},{value:"Streams",id:"streams",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"What browsers are supported?",id:"what-browsers-are-supported",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-apps"},"Example Apps"),Object(o.b)("p",null,"We've developed several sample extensions that demostrate the use of the InboxSDK. The examples are all hosted on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/InboxSDK"}),"GitHub"),". If you'd like to help develop more samples, let us know!"),Object(o.b)("h2",{id:"advanced-patterns"},"Advanced Patterns"),Object(o.b)("h3",{id:"promises"},"Promises"),Object(o.b)("p",null,"Several of our API methods accept or provide a promise for a certain value instead of the value itself. A promise is an object that represents an eventual value, and allows callbacks to be registered to be called when the value becomes present. Promises are standardized and are natively available as part of Javascript in modern browsers. Promises help to provide a consistent interface to writing asynchronous code.\nHere is a simple example of creating a promise that resolves to a value after a second, and then an example of how to listen to the promise:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'var promise = new Promise(function(resolve, reject) {\n    setTimeout(function() {\n    resolve(\'foo\');\n    }, 1000);\n});\npromise.then(function(value) {\n    console.log("received", value);\n});\n// Prints "received foo" after one second.\n')),Object(o.b)("p",null,"Promises can also be created by chaining from existing promises. For more information on promises, see resources such as the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.html5rocks.com/en/tutorials/es6/promises/"}),"HTML5 Rocks")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Mozilla Developer Network")," pages on promises."),Object(o.b)("h3",{id:"streams"},"Streams"),Object(o.b)("p",null,"Several of our API methods accept reactive streams as arguments. A reactive stream is an object that represents a series of eventual values, like a promise that can resolve repeatedly with new values over time. Streams are implemented in libraries such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pozadi.github.io/kefir/"}),"Kefir"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://baconjs.github.io/"}),"Bacon.js"),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Reactive-Extensions/RxJS"}),"Reactive Extensions for Javascript"),", which are each supported by the InboxSDK. Streams help to provide a consistent and composable interface to writing asynchronous code, like promises.\nIn order to create streams, you must include one of the above libraries in your extension. Here is an example of creating and then consuming a stream using the Kefir library:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'var stream = Kefir.stream(function(emitter) {\n    var timer = setInterval(function() {\n    emitter.emit(\'foo\');\n    }, 1000);\n\n    // Return a function to be called when the stream is unsubscribed from.\n    // Unlike promises, streams can know when they\'re no longer listened to!\n    return function() {\n    clearInterval(timer);\n    };\n});\nstream.take(5).onValue(function(value) {\n    console.log("received", value);\n});\n// Prints "received foo" five times each one second apart, and then stops.\n')),Object(o.b)("p",null,"Note that reactive libraries often contain many specialized functions for creating streams from timers, event listeners, and other streams. This example purposefully uses a general method instead that can be quickly adapted to many uses. The above example should be enough to show you how to interact with the InboxSDK's stream-compatible methods, but if you want more information on reactive streams in order to use them more effectively, some recommended resources include the documentation of the above libraries, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=XRYN2xt11Ek"}),"Netflix's talk on Reactive Programming"),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/staltz/868e7e9bc2a7b8c1f754"}),"The introduction to Reactive Programming you've been missing"),"."),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"what-browsers-are-supported"},"What browsers are supported?"),Object(o.b)("p",null,"Chrome and Safari are currently supported.  Chrome version 36 and Safari 10 are the minimum versions we support.\nFirefox support is under consideration; please let us know if you're interested."))}p.isMDXComponent=!0}}]);