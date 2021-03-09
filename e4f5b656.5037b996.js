(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),b=a(7),r=(a(0),a(99)),c={id:"butterbar",title:"ButterBar"},i={unversionedId:"butterbar",id:"butterbar",isDocsHomePage:!1,title:"ButterBar",description:'This namespace contains methods for showing informative messages to the user. In Gmail this is a small yellow "butter bar" overlay near the top. In Inbox, the UI is different but the purpose is the same.',source:"@site/docs/butterbar.md",slug:"/butterbar",permalink:"/inboxsdk-docs/butterbar",editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/butterbar.md",version:"current",sidebar:"someSidebar",previous:{title:"Widgets",permalink:"/inboxsdk-docs/widgets"},next:{title:"Search",permalink:"/inboxsdk-docs/search-docs"}},l=[{value:"Namespace methods",id:"namespace-methods",children:[]},{value:"MessageButtonDescriptor",id:"messagebuttondescriptor",children:[]},{value:"LoadingMessageDescriptor",id:"loadingmessagedescriptor",children:[]},{value:"SavingMessageDescriptor",id:"savingmessagedescriptor",children:[]}],o={toc:l};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'This namespace contains methods for showing informative messages to the user. In Gmail this is a small yellow "butter bar" overlay near the top. In Inbox, the UI is different but the purpose is the same.'),Object(r.b)("h3",{id:"namespace-methods"},"Namespace methods"),Object(r.b)("h4",{id:"showmessageoptions"},"showMessage(options)"),Object(r.b)("p",null,"Spawns a new message."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"MessageDescriptor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"message options")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns")," an ",Object(r.b)("inlineCode",{parentName:"p"},"Object")," that contains a destroy method that can be called to remove the message."),Object(r.b)("h4",{id:"showloadingoptions"},"showLoading(options)"),Object(r.b)("p",null,'Spawns a "Loading..." message that stays until it\'s destroyed.'),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"LoadingMessageDescriptor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"message options")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns")," an ",Object(r.b)("inlineCode",{parentName:"p"},"Object")," which has a destroy method that can be called to remove the message."),Object(r.b)("h4",{id:"showerroroptions"},"showError(options)"),Object(r.b)("p",null,"Spawns a new error message. Error messages also have a default priority of 100 instead of 0 (as in the case of ButterBar.showMessage)."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"MessageDescriptor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"message options")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns")," an ",Object(r.b)("inlineCode",{parentName:"p"},"Object")," which contains a destroy method that can be called to remove the message. "),Object(r.b)("h4",{id:"showsavingoptions"},"showSaving(options)"),Object(r.b)("p",null,'Spawns a "Saving..." message that stays until it\'s removed. '),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"SavingMessageDescriptor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"message options")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns")," an ",Object(r.b)("inlineCode",{parentName:"p"},"Object"),' which has a resolve method that can be called to show a "Saved" confirmation message, and a reject method that can be called to remove the message immediately with no confirmation.'),Object(r.b)("h4",{id:"hidemessagemessagekey"},"hideMessage(messageKey)"),Object(r.b)("p",null,"Hides all messages created by the same app with the given messageKey."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"messageKey")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"Object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the key of the message to hide")))),Object(r.b)("h4",{id:"hidegmailmessage"},"hideGmailMessage()"),Object(r.b)("p",null,"Hides any messages currently displayed by Gmail. This method is not implemented in Inbox; the InboxSDK does not interact with Inbox's own notifications."),Object(r.b)("p",null,"--"),Object(r.b)("h2",{id:"messagebuttondescriptor"},"MessageButtonDescriptor"),Object(r.b)("p",null,"This type is used to describe a message for ButterBar to show."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required?"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"text")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Text to show. Either the text property or the html property must be passed."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"html")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String to use as the innerHTML of the ButterBar instead of using the given text."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"el")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"HTMLElement")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HTML element to insert into the ButterBar instead of using the given text."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"className")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String to add as a css class to the ButterBar container element."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"priority")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Messages with lower priorities won't interrupt a currently displayed message."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"0"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"time")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Number of milliseconds the message is displayed before going away on its own."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"15000"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"hideOnViewChanged")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If true, the message will immediately disappear if the user navigates to another route view."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"persistent")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Whether this message should re-appear after being interrupted by another message."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"false"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"messageKey")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"Object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If a new message has the same messageKey as the current message, then the current message will always be destroyed, regardless of its priority."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"buttons")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"Array<MessageButtonDescriptor>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An array of buttons to support functionality in addition to the preview functionality"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("p",null,"--"),Object(r.b)("h2",{id:"loadingmessagedescriptor"},"LoadingMessageDescriptor"),Object(r.b)("p",null,"This type is used to describe the buttons for ButterBar to show."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required?"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"onClick")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"function(event)")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"This is called when a button is clicked and gets passed an event object."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"title")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Text of the button."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("p",null,"--"),Object(r.b)("h2",{id:"savingmessagedescriptor"},"SavingMessageDescriptor"),Object(r.b)("p",null,"This type is used to describe the messages for ButterBar.showLoading to show"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required?"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"text")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Text shown while the loading is ongoing."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"'Loading...'"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"html")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String to use as the innerHTML of the ButterBar instead of using the given text."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"el")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"HTMLElement")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HTML element to insert into the ButterBar instead of using the given text."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"className")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String to add as a css class to the ButterBar container element."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"priority")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Messages with lower priorities won't interrupt a currently displayed message. Loading messages default to a lower priority than other message types."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"-3"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"hideOnViewChanged")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If true, the message will immediately disappear if the user navigates to another route view."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"persistent")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Whether this message should re-appear after being interrupted by another message."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"messageKey")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"Object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If a new message has the same messageKey as the current message, then the current message will always be destroyed, regardless of its priority. Sets the messageKey of both the initial message and the confirmation message."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}s.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=s(a),p=n,d=O["".concat(c,".").concat(p)]||O[p]||j[p]||r;return a?b.a.createElement(d,i(i({ref:t},o),{},{components:a})):b.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);