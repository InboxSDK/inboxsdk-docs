"use strict";(self.webpackChunkinboxsdk_docs=self.webpackChunkinboxsdk_docs||[]).push([[928],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=d(a),h=r,u=k["".concat(p,".").concat(h)]||k[h]||m[h]||o;return a?n.createElement(u,l(l({ref:e},s),{},{components:a})):n.createElement(u,l({ref:e},s))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9064:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={title:"Toolbars"},l=void 0,i={unversionedId:"toolbars",id:"toolbars",title:"Toolbars",description:"The Toolbar namespace allows you to add your own buttons and actions to various toolbars in Gmail or Inbox. Toolbars appear in various Lists, ThreadViews and MessageViews. Within a toolbar, you have control over the placement of your buttons.",source:"@site/docs/toolbars.md",sourceDirName:".",slug:"/toolbars",permalink:"/inboxsdk-docs/toolbars",draft:!1,editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/toolbars.md",tags:[],version:"current",frontMatter:{title:"Toolbars"},sidebar:"someSidebar",previous:{title:"Conversations",permalink:"/inboxsdk-docs/conversations"},next:{title:"Router",permalink:"/inboxsdk-docs/router"}},p={},d=[{value:"Namespace methods",id:"namespace-methods",level:3},{value:"registerThreadButton(toolbarButtonDescriptor)",id:"registerthreadbuttontoolbarbuttondescriptor",level:4},{value:"registerToolbarButtonForList(toolbarButtonDescriptor)",id:"registertoolbarbuttonforlisttoolbarbuttondescriptor",level:4},{value:"registerToolbarButtonForThreadView(toolbarButtonDescriptor)",id:"registertoolbarbuttonforthreadviewtoolbarbuttondescriptor",level:4},{value:"addToolbarButtonForApp(appToolbarButtonDescriptor)",id:"addtoolbarbuttonforappapptoolbarbuttondescriptor",level:4},{value:"ToolbarButtonDescriptor",id:"toolbarbuttondescriptor",level:2},{value:"LegacyToolbarButtonDescriptor",id:"legacytoolbarbuttondescriptor",level:2},{value:"AppToolbarButtonDescriptor",id:"apptoolbarbuttondescriptor",level:2},{value:"AppToolbarButtonView",id:"apptoolbarbuttonview",level:2},{value:"Methods",id:"methods",level:3},{value:"open()",id:"open",level:4},{value:"close()",id:"close",level:4},{value:"remove()",id:"remove",level:4},{value:"Events",id:"events",level:3},{value:"destroy",id:"destroy",level:4},{value:"Properties",id:"properties",level:3},{value:"Enums and Constants",id:"enums-and-constants",level:2},{value:"SectionNames",id:"sectionnames",level:3}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Toolbar namespace allows you to add your own buttons and actions to various toolbars in Gmail or Inbox. Toolbars appear in various Lists, ThreadViews and MessageViews. Within a toolbar, you have control over the placement of your buttons."),(0,r.kt)("p",null,"Toolbar buttons are typically used to take actions on the email(s) that the toolbar applies to. Do not use this API to add buttons that don't take a direct action on the selected email.\nSince toolbar buttons only apply to emails, they will ONLY appear when an email is selected or you are on a ThreadView."),(0,r.kt)("h3",{id:"namespace-methods"},"Namespace methods"),(0,r.kt)("h4",{id:"registerthreadbuttontoolbarbuttondescriptor"},"registerThreadButton(toolbarButtonDescriptor)"),(0,r.kt)("p",null,"Registers a toolbar button to appear on thread rows, above the thread list when some rows are checked, and above threads."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"toolbarButtonDescriptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ToolbarButtonDescriptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The options for the button.")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," which removes the button registration."),(0,r.kt)("h4",{id:"registertoolbarbuttonforlisttoolbarbuttondescriptor"},"registerToolbarButtonForList(toolbarButtonDescriptor)"),(0,r.kt)("p",null,"(This function is deprecated in favor of registerThreadButton.) Registers a toolbar button to appear above any list page such as the Inbox or Sent Mail."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"toolbarButtonDescriptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LegacyToolbarButtonDescriptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The options for the button.")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," which removes the button registration."),(0,r.kt)("h4",{id:"registertoolbarbuttonforthreadviewtoolbarbuttondescriptor"},"registerToolbarButtonForThreadView(toolbarButtonDescriptor)"),(0,r.kt)("p",null,"(This function is deprecated in favor of registerThreadButton.) Registers a toolbar button to appear when viewing a thread."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"toolbarButtonDescriptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LegacyToolbarButtonDescriptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The options for the button.")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," which removes the button registration."),(0,r.kt)("h4",{id:"addtoolbarbuttonforappapptoolbarbuttondescriptor"},"addToolbarButtonForApp(appToolbarButtonDescriptor)"),(0,r.kt)("p",null,'Adds a button and dropdown to the "Global Toolbar". This is typically used to show a dropdown with general information about your application. In Gmail this refers to the navigation area at the top right of the window.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"appToolbarButtonDescriptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AppToolbarButtonDescriptor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The options for the app toolbar button")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"AppToolbarButtonView")),(0,r.kt)("h2",{id:"toolbarbuttondescriptor"},"ToolbarButtonDescriptor"),(0,r.kt)("p",null,"This type is passed into the Toolbars.registerThreadButton() to configure the toolbar button shown."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Text to show when the user hovers the mouse over the button, or to show on the button when the user has the Gmail "Button labels" setting set to "Text".'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"iconUrl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL. Either this property, iconClass, or both must be specified."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"iconClass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An optional class to apply to the icon. Either this property, iconUrl, or both must be specified."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"positions")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},'An optional array of strings specifying the locations the button will be displayed in. The default value of null is treated as equal to the array of all of the possible values: "THREAD", "ROW", and "LIST".'),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"threadSection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SectionNames")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The section of the toolbar to place the button when placing it on a thread. Currently this option only has an effect in Gmail."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'METADATA_STATE'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"listSection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SectionNames")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The section of the toolbar to place the button when placing it above a thread list. Currently this option only has an effect in Gmail."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'METADATA_STATE'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"onClick")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"function(event)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is called when the button is clicked, and gets passed an event object. The event object will have a position property set to 'THREAD', 'ROW', or 'LIST' specifying where the button was that was interacted with. The event object will have selectedThreadViews (ThreadView[]) and selectedThreadRowViews (ThreadRowView[]) properties containing the thread or thread row objects that this button was activated on. The event object will have a dropdown (DropdownView) property if the hasDropdown property was set to true on the button descriptor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"hasDropdown")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If true, the button will open a dropdown menu above it, and the event object will have a dropdown property of type DropdownView that allows the dropdown to be customized when opened."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"hideFor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"function(RouteView)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A function that determines when this toolbar button should be hidden. You may want to hide the toolbar button on certain Routes or in certain conditions. The function should return true when the toolbar button should be hidden. Your function is passed a RouteView."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"orderHint")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If multiple buttons are placed next to each other, then they will be ordered by this value."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"keyboardShortcutHandle")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyboardShortcutHandle")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The keyboard shortcut that will activate this button. This is currently only supported in Gmail."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("h2",{id:"legacytoolbarbuttondescriptor"},"LegacyToolbarButtonDescriptor"),(0,r.kt)("p",null,"This type is passed into the Toolbars.registerToolbarButtonForList() and Toolbars.registerToolbarButtonForThreadView() method as a way to configure the toolbar button shown."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Text to show when the user hovers the mouse over the button, or to show on the button when the user has the Gmail "Button labels" setting set to "Text".'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"iconUrl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL. Either this property, iconClass, or both must be specified."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"iconClass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An optional class to apply to the icon. Either this property, iconUrl, or both must be specified."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"section")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SectionNames")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The section of the toolbar to place the button."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"onClick")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"function(event)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is called when the button is clicked, and gets passed an event object. If this was registered with Toolbars.registerToolbarButtonForList(), then the event object will have a selectedThreadRowViews (ThreadRowView[]) property and a threadRowViews (ThreadRowView[]) property. If this was registered with Toolbars.registerToolbarButtonForThreadView(), then the event object will have a threadView (ThreadView) property. In both cases the event object will optionally have a dropdown (DropdownView) property if you set the hasDropdown property to true on the descriptor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"hasDropdown")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If true, the button will open a dropdown menu above it, and the event object will have a dropdown property of type DropdownView that allows the dropdown to be customized when opened."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"hideFor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"function(RouteView)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A function that determines when this toolbar button should be hidden. You may want to hide the toolbar button on certain Routes or in certain conditions. The function should return true when the toolbar button should be hidden. Your function is passed a RouteView."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"keyboardShortcutHandle")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyboardShortcutHandle")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The keyboard shortcut that will activate this button."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("h2",{id:"apptoolbarbuttondescriptor"},"AppToolbarButtonDescriptor"),(0,r.kt)("p",null,"This type is passed into the Toolbars.addToolbarButtonForApp() method as a way to configure the toolbar button shown."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text to show on the button."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"titleClass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An optional class to apply to the title."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"iconUrl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"iconClass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An optional class to apply to the icon."),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"onClick")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"function(event)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is called when the button is clicked, and gets passed an event object. The event object will have a dropdown (DropdownView) property."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"arrowColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The color to use for the top arrow of the dropdown. Useful if you want the contents of your dropdown to have a specific background color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("h2",{id:"apptoolbarbuttonview"},"AppToolbarButtonView"),(0,r.kt)("p",null,"Object that represents an app toolbar button that has been already added to the top navigation area of Gmail. This class is returned by Toolbars.addToolbarButtonForApp()."),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"open"},"open()"),(0,r.kt)("p",null,"Open the dropdown for the app toolbar button"),(0,r.kt)("h4",{id:"close"},"close()"),(0,r.kt)("p",null,"Close the dropdown for the app toolbar button"),(0,r.kt)("h4",{id:"remove"},"remove()"),(0,r.kt)("p",null,"Remove the app toolbar button from Gmail"),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("h4",{id:"destroy"},"destroy"),(0,r.kt)("p",null,"Fires when this view has been removed."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"destroyed")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This property is set to true once the view is destroyed."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"enums-and-constants"},"Enums and Constants"),(0,r.kt)("h3",{id:"sectionnames"},"SectionNames"),(0,r.kt)("p",null,"The different toolbar sections that exist"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Enum"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"INBOX_STATE")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The section is for buttons that move emails out of or into the users inbox.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"COLLAPSED")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This section is for buttons that alter metadata of emails. Common examples are labeling or moving an email.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"METADATA_STATE")),(0,r.kt)("td",{parentName:"tr",align:"left"},'This sectiom is used for other actions. Typically these will be placed in the "More" menu.')))))}m.isMDXComponent=!0}}]);