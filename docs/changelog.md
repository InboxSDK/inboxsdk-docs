---
id: changelog
title: Change Log
---

The InboxSDK loads its code remotely from our servers, so users get the latest code and bug fixes automatically without extension developers being required to make any changes. We also often introduce new features over time, and on occasion we deprecate old APIs and recommend new ones. These API changes will be listed here and announced in emails to registered developers as necessary.

This changelog mostly includes details about API changes. Not all bug fixes have been documented here.

**2022-08-10** Added Widgets.isMoleViewTitleBarLightColor() method for detecting if MoleViews have the original dark titlebar or the new lighter titlebar

**2022-02-24** Added ThreadRowView.getElement().

**2022-02-24** Deprecated User.getAccountSwitcherContactList() because of Gmail changes that prevent us from continuing to support the feature. Depending on the version of Gmail in use, the function may now return a one-item list containing only the currently-signed-in user.

**2019-06-13** Removed the limitation on ContentPanelView.open() where it could only be used within a user-input event. The limit was made to discourage extensions from being too aggressive with opening the sidebar, but this limit seemed to be too restrictive.

**2019-06-13** Added Lists.getSelectedThreadRowViews() and Lists.registerThreadRowViewSelectionHandler() methods for detecting selected thread rows.

**2019-05-29** Fixed an issue caused by a Gmail change that caused ComposeView.getDraftID() to not work in some situations.

**2019-04-30** Added ComposeView.addComposeNotice() method to allow adding HTML elements in the compose view.

**2019-02-24** Improved ListRouteView.addCollapsibleSection and ListRouteView.addSection so that if a user leaves the ListRouteView and then returns to it, their scroll position is correctly restored, adjusted for the new sections' heights.

**2019-02-11** Fixed an issue where custom thread lists could cause a Gmail error message to be displayed while open.

**2019-02-11** Fixed an issue where custom thread lists may have threads shown in the wrong order.

**2019-02-06** Fixed an issue where ListRouteView.addCollapsibleSection didn't support the iconUrl and iconClass options being used together on a row.

**2019-02-06** Fixed an issue where some MessageView methods could cause the "Show details" dropdown on a message to close itself. (Some methods that read information about the message work by opening the details dropdown, reading text out of it, and then closing it. These methods didn't account for the situation where the dropdown was already open.)

**2019-02-05** Changed Router.goto to return a Promise (instead of undefined) that resolves once the navigation is complete. Some kinds of navigations to Gmail pages require the InboxSDK to do some work asynchronously before the navigation can happen.

**2019-01-24** Fixed an issue where MessageView.getMessageIDAsync sometimes returned an incorrect value after a pre-existing reply draft was sent.

**2019-01-18** Fixed an issue where ComposeView sent events weren't emitted in some cases when conversation mode was disabled in Gmail.

**2019-01-16** Fixed multiple issues that could cause incorrect ComposeView sent events.

**2018-12-31** Fixed an issue where MessageView.getSender threw an exception on collapsed messages.

**2018-12-03** Fixed an issue caused by a Gmail change that caused ComposeView.getRecipientEmailAddresses and ComposeView.getRecipientsFull to fail sometimes.

**2018-11-13** Fixed an issue where MoleViews were not moved to the left out of the way of the sidebar when an InboxSDK-created sidebar was opened.

**2018-11-02** Fixed an issue where switching between multiple sidebars added by Global.addSidebarContentPanel didn't always work correctly.

**2018-10-10** Added ContentPanelView.open method.

**2018-08-31** Fixed an issue caused by a Gmail change that caused link chips added by ComposeView.insertLinkChipIntoBodyAtCursor to not show up in forwarded emails.

**2018-07-31** Fixed multiple issues where a global or thread sidebar would fail to load if the sidebar was added before certain Gmail elements were present in the page.

**2018-07-31** Added the ContentPanelView.isActive method.

**2018-07-23** Fixed an issue caused by a Gmail change where Widgets.showMoleView() sometimes failed to render a [MoleView](www.FFIIIIIXXXXMEEEE.com) correctly.

**2018-07-09** Fixed an issue caused by a Gmail change where the ComposeView sent event could contain the wrong message and thread IDs.

**2018-07-06** Fixed an issue caused by a Gmail change where Router.goto could no longer navigate to Gmail threads.

**2018-06-27** Fixed an issue caused by a Gmail change where links created by Router.createLink to custom views would not work.

**2018-05-17** Fixed an issue causing [AttachmentCardClickEvent.getDownloadURL()](www.FFIIIIIXXXXMEEEE.com) to not work sometimes in the Gmail redesign.

**2018-05-09** Fixed an issue where ComposeView's sent event didn't fire in some situations.

**2018-05-03** Added isUsingGmailMaterialUI, isConversationViewDisabled and getLanguage to [User](www.FFIIIIIXXXXMEEEE.com). Add new [Global](www.FFIIIIIXXXXMEEEE.com) namespace. Add preautoclose event to [DropdownView](www.FFIIIIIXXXXMEEEE.com).

**2018-03-15** Add title property to [ThreadRowButtonDescriptor](www.FFIIIIIXXXXMEEEE.com), color property to [ModalButtonDescriptor](www.FFIIIIIXXXXMEEEE.com), and constrainTitleWidth property to [ModalOptions](www.FFIIIIIXXXXMEEEE.com).

**2017-07-26** [Lists](www.FFIIIIIXXXXMEEEE.com).registerThreadRowViewHandler, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).addLabel, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).addImage, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).replaceDraftLabel, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).getSubject, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).getThreadIDAsync, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).getThreadIDIfStableAsync, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).getDraftID, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).getVisibleDraftCount, [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).getVisibleMessageCount, and [ThreadRowView](www.FFIIIIIXXXXMEEEE.com).getContacts are now all supported in Inbox.

**2017-07-26** [Toolbars](www.FFIIIIIXXXXMEEEE.com).registerThreadButton, [Toolbars](www.FFIIIIIXXXXMEEEE.com).registerToolbarButtonForList, and [Toolbars](www.FFIIIIIXXXXMEEEE.com).registerToolbarButtonForThreadView are now supported in Inbox.

**2017-07-26** The new function [Toolbars](www.FFIIIIIXXXXMEEEE.com).registerThreadButton has been added which supersedes [Toolbars](www.FFIIIIIXXXXMEEEE.com).registerToolbarButtonForList and [Toolbars](www.FFIIIIIXXXXMEEEE.com).registerToolbarButtonForThreadView.

**2017-06-22** The ComposeView "sent" event is now properly supported in Inbox. Its threadID and messageID properties have been deprecated in favor of its new asynchronous getThreadID() and getMessageID() methods.

**2017-06-14** Deprecated the getThreadID, getThreadIDIfStable, and getMessageID methods of [ThreadView](www.FFIIIIIXXXXMEEEE.com), [ThreadRowView](www.FFIIIIIXXXXMEEEE.com), and [MessageView](www.FFIIIIIXXXXMEEEE.com) in favor of getThreadIDAsync, getThreadIDIfStableAsync, and getMessageIDAsync methods. This is done because it turns out that in some cases in Inbox the InboxSDK needs to make network requests against Gmail in order to correctly resolve the ID.

**2017-06-14** Fixed the modal and its backdrop to display over any open [DrawerView](www.FFIIIIIXXXXMEEEE.com).

**2017-05-16** Fixed an issue where [MessageView](www.FFIIIIIXXXXMEEEE.com).getBodyElement() would on a message if it was an exact duplicate of a previous message within the same thread. (Surprisingly, Gmail put a different classname on the element in that specific case.)

**2017-04-13** The InboxSDK was updated to deal with changes to the format of some of Gmail's network requests. The custom thread list feature was briefly broken today after Gmail's change and before our update.

**2017-04-11** Inbox support for [ComposeView](www.FFIIIIIXXXXMEEEE.com)'s getDraftID() method and some of its events was added.

**2017-01-23** Our initial Inbox support is live!

**2017-01-09** The new ThreadView sidebar design has replaced the old design after an opt-in period.

**2016-11-14** The ThreadView sidebar has been re-designed, and developers are encouraged [to opt-in, try out the new design, and give feedback](https://groups.google.com/forum/#!topic/inboxsdk/hNwHc5ohOPc) before it becomes the default.

**2016-09-14** Added the [DrawerView.associateComposeView](www.FFIIIIIXXXXMEEEE.com) method.

**2016-08-18** Added the [AttachmentCardClickEvent.getDownloadURL()](www.FFIIIIIXXXXMEEEE.com) method, and deprecated the [AttachmentCardView.getDownloadURL()](www.FFIIIIIXXXXMEEEE.com) method. In Inbox, the download URL of an attachment card view can't be retrieved until after the card's preview overlay has been opened by the user, so the API has been restructured to reflect this.

**2016-08-09** Added the Conversations.registerFileAttachmentCardViewHandler() method to allow AttachmentCardViews to be handled directly rather than require them to be retrieved from a MessageView instance. Google Inbox often shows attachment cards outside of messages, so this API is being introduced to allow code to be made forward-compatible with that case now.

**2016-07-21** Added the [Widgets.showDrawerView](www.FFIIIIIXXXXMEEEE.com) method and the [DrawerView](www.FFIIIIIXXXXMEEEE.com) class.

**2015-12-14** Added the ComposeView.getCurrentDraftID() method to allow determining whether a ComposeView has been assigned a draft ID yet.

**2015-12-10** Added the ThreadRowView.getDraftID() method to allow identifying the draft ID from a thread row that represents a draft.

**2015-12-09** Added the ComposeView.getDraftID() method.

**2015-06-17** Added the ComposeView.getInitialMessageID() method and the "messageID" property on the ComposeView destroy event object. The ComposeView.getMessageID() method and the ComposeView messageIDChange event have been deprecated as they weren't dependable for use directly because there was no guarantee that the message ID hadn't been changed on the server by the time a user tried to do anything with the message ID.

**2015-06-26** Deprecate User.getUserContact() in favor of User.getEmailAddress() because it seems that there are situations that the page doesn't contain the data we need to meet the API of User.getUserContact(), and its usage is rare.

**2015-06-17** Added the Widgets.showMoleView() method.
