(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),r=(a(0),a(99)),s={id:"changelog",title:"Change Log"},i={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Change Log",description:"The InboxSDK loads its code remotely from our servers, so users get the latest code and bug fixes automatically without extension developers being required to make any changes. We also often introduce new features over time, and on occasion we deprecate old APIs and recommend new ones. These API changes will be listed here and announced in emails to registered developers as necessary.",source:"@site/docs/changelog.md",slug:"/changelog",permalink:"/inboxsdk-docs/changelog",editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/changelog.md",version:"current",sidebar:"someSidebar",previous:{title:"Resources",permalink:"/inboxsdk-docs/resources"}},c=[],b={toc:c};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The InboxSDK loads its code remotely from our servers, so users get the latest code and bug fixes automatically without extension developers being required to make any changes. We also often introduce new features over time, and on occasion we deprecate old APIs and recommend new ones. These API changes will be listed here and announced in emails to registered developers as necessary."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-06-13")," Removed the limitation on ContentPanelView.open() where it could only be used within a user-input event. The limit was made to discourage extensions from being too aggressive with opening the sidebar, but this limit seemed to be too restrictive."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-06-13")," Added Lists.getSelectedThreadRowViews() and Lists.registerThreadRowViewSelectionHandler() methods for detecting selected thread rows."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-05-29")," Fixed an issue caused by a Gmail change that caused ComposeView.getDraftID() to not work in some situations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-04-30")," Added ComposeView.addComposeNotice() method to allow adding HTML elements in the compose view."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-02-24")," Improved ListRouteView.addCollapsibleSection and ListRouteView.addSection so that if a user leaves the ListRouteView and then returns to it, their scroll position is correctly restored, adjusted for the new sections' heights."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-02-11")," Fixed an issue where custom thread lists could cause a Gmail error message to be displayed while open."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-02-11")," Fixed an issue where custom thread lists may have threads shown in the wrong order."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-02-06")," Fixed an issue where ListRouteView.addCollapsibleSection didn't support the iconUrl and iconClass options being used together on a row."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-02-06"),' Fixed an issue where some MessageView methods could cause the "Show details" dropdown on a message to close itself. (Some methods that read information about the message work by opening the details dropdown, reading text out of it, and then closing it. These methods didn\'t account for the situation where the dropdown was already open.)'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-02-05")," Changed Router.goto to return a Promise (instead of undefined) that resolves once the navigation is complete. Some kinds of navigations to Gmail pages require the InboxSDK to do some work asynchronously before the navigation can happen."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-01-24")," Fixed an issue where MessageView.getMessageIDAsync sometimes returned an incorrect value after a pre-existing reply draft was sent."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-01-18")," Fixed an issue where ComposeView sent events weren't emitted in some cases when conversation mode was disabled in Gmail."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2019-01-16")," Fixed multiple issues that could cause incorrect ComposeView sent events."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-12-31")," Fixed an issue where MessageView.getSender threw an exception on collapsed messages."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-12-03")," Fixed an issue caused by a Gmail change that caused ComposeView.getRecipientEmailAddresses and ComposeView.getRecipientsFull to fail sometimes."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-11-13")," Fixed an issue where MoleViews were not moved to the left out of the way of the sidebar when an InboxSDK-created sidebar was opened."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-11-02")," Fixed an issue where switching between multiple sidebars added by Global.addSidebarContentPanel didn't always work correctly."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-10-10")," Added ContentPanelView.open method."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-08-31")," Fixed an issue caused by a Gmail change that caused link chips added by ComposeView.insertLinkChipIntoBodyAtCursor to not show up in forwarded emails."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-07-31")," Fixed multiple issues where a global or thread sidebar would fail to load if the sidebar was added before certain Gmail elements were present in the page."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-07-31")," Added the ContentPanelView.isActive method."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-07-23")," Fixed an issue caused by a Gmail change where Widgets.showMoleView() sometimes failed to render a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"MoleView")," correctly."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-07-09")," Fixed an issue caused by a Gmail change where the ComposeView sent event could contain the wrong message and thread IDs."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-07-06")," Fixed an issue caused by a Gmail change where Router.goto could no longer navigate to Gmail threads."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-06-27")," Fixed an issue caused by a Gmail change where links created by Router.createLink to custom views would not work."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-05-17")," Fixed an issue causing ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"AttachmentCardClickEvent.getDownloadURL()")," to not work sometimes in the Gmail redesign."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-05-09")," Fixed an issue where ComposeView's sent event didn't fire in some situations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-05-03")," Added isUsingGmailMaterialUI, isConversationViewDisabled and getLanguage to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"User"),". Add new ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Global")," namespace. Add preautoclose event to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"DropdownView"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-03-15")," Add title property to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowButtonDescriptor"),", color property to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ModalButtonDescriptor"),", and constrainTitleWidth property to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ModalOptions"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-07-26")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Lists"),".registerThreadRowViewHandler, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".addLabel, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".addImage, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".replaceDraftLabel, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".getSubject, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".getThreadIDAsync, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".getThreadIDIfStableAsync, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".getDraftID, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".getVisibleDraftCount, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".getVisibleMessageCount, and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),".getContacts are now all supported in Inbox."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-07-26")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Toolbars"),".registerThreadButton, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Toolbars"),".registerToolbarButtonForList, and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Toolbars"),".registerToolbarButtonForThreadView are now supported in Inbox."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-07-26")," The new function ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Toolbars"),".registerThreadButton has been added which supersedes ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Toolbars"),".registerToolbarButtonForList and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Toolbars"),".registerToolbarButtonForThreadView."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-06-22"),' The ComposeView "sent" event is now properly supported in Inbox. Its threadID and messageID properties have been deprecated in favor of its new asynchronous getThreadID() and getMessageID() methods.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-06-14")," Deprecated the getThreadID, getThreadIDIfStable, and getMessageID methods of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadView"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ThreadRowView"),", and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"MessageView")," in favor of getThreadIDAsync, getThreadIDIfStableAsync, and getMessageIDAsync methods. This is done because it turns out that in some cases in Inbox the InboxSDK needs to make network requests against Gmail in order to correctly resolve the ID."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-06-14")," Fixed the modal and its backdrop to display over any open ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"DrawerView"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-05-16")," Fixed an issue where ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"MessageView"),".getBodyElement() would on a message if it was an exact duplicate of a previous message within the same thread. (Surprisingly, Gmail put a different classname on the element in that specific case.)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-04-13")," The InboxSDK was updated to deal with changes to the format of some of Gmail's network requests. The custom thread list feature was briefly broken today after Gmail's change and before our update."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-04-11")," Inbox support for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"ComposeView"),"'s getDraftID() method and some of its events was added."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-01-23")," Our initial Inbox support is live!"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2017-01-09")," The new ThreadView sidebar design has replaced the old design after an opt-in period."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2016-11-14")," The ThreadView sidebar has been re-designed, and developers are encouraged ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://groups.google.com/forum/#!topic/inboxsdk/hNwHc5ohOPc"}),"to opt-in, try out the new design, and give feedback")," before it becomes the default."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2016-09-14")," Added the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"DrawerView.associateComposeView")," method."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2016-08-18")," Added the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"AttachmentCardClickEvent.getDownloadURL()")," method, and deprecated the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"AttachmentCardView.getDownloadURL()")," method. In Inbox, the download URL of an attachment card view can't be retrieved until after the card's preview overlay has been opened by the user, so the API has been restructured to reflect this."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2016-08-09")," Added the Conversations.registerFileAttachmentCardViewHandler() method to allow AttachmentCardViews to be handled directly rather than require them to be retrieved from a MessageView instance. Google Inbox often shows attachment cards outside of messages, so this API is being introduced to allow code to be made forward-compatible with that case now."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2016-07-21")," Added the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"Widgets.showDrawerView")," method and the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"www.FFIIIIIXXXXMEEEE.com"}),"DrawerView")," class."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2015-12-14")," Added the ComposeView.getCurrentDraftID() method to allow determining whether a ComposeView has been assigned a draft ID yet."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2015-12-10")," Added the ThreadRowView.getDraftID() method to allow identifying the draft ID from a thread row that represents a draft."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2015-12-09")," Added the ComposeView.getDraftID() method."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2015-06-17")," Added the ComposeView.getInitialMessageID() method and the \"messageID\" property on the ComposeView destroy event object. The ComposeView.getMessageID() method and the ComposeView messageIDChange event have been deprecated as they weren't dependable for use directly because there was no guarantee that the message ID hadn't been changed on the server by the time a user tried to do anything with the message ID."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2015-06-26")," Deprecate User.getUserContact() in favor of User.getEmailAddress() because it seems that there are situations that the page doesn't contain the data we need to meet the API of User.getUserContact(), and its usage is rare."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2015-06-17")," Added the Widgets.showMoleView() method."))}d.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return w}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),d=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,w=p["".concat(s,".").concat(m)]||p[m]||l[m]||r;return a?o.a.createElement(w,i(i({ref:t},b),{},{components:a})):o.a.createElement(w,i({ref:t},b))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var b=2;b<r;b++)s[b]=a[b];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);