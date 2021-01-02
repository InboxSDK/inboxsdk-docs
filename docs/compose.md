---
id: compose
title: Compose
---

This namespace contains methods and types related to adding your application elements to the Gmail or Inbox Compose UI. The compose UI has two variants. The New Compose UI appears when users are composing new messages and appear as windows above the rest of the app content. The second, the Reply UI, appears when users are replying to existing messages from the message they are replying to. This namespace handles both of these variants equivalently.

The [`ComposeView`](#composeview) type is how you interact with compose windows in gmail and inbox. the most common way to get access to a compose view is to use the [`Compose.registerComposeViewHandler()`](#registercomposeviewhandlerhandler) method which calls you back with every existing [`composeview`](composeview) and all future [`ComposeView`](#composeview)s. From there a typical application will modify the [`ComposeView`](composeview) as needed by adding buttons, adding content to the message, or accessing the recipient data.


### Namespace methods
#### registerComposeViewHandler(handler)
Register a handler to be called for every existing ComposeView as well as for all future ComposeViews that may come into existence. This method is the preferred way to add your application to every compose area such as a new compose window or inline reply compose areas. Returns a `function` which removes the handler registration.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(ComposeView)` | The function to be called |



```javascript
InboxSDK.load(1, 'YOUR_APP_ID_HERE').then(function(sdk){
  sdk.Compose.registerComposeViewHandler(function(composeView){
    console.log("compose view exists!");
  });
});
```

#### openNewComposeView()
Opens a new compose view. Any handlers you've registered for ComposeViews will be called as well. Returns a `Promise<ComposeView>` which will resolve with the new ComposeView once it has opened.







---
## ComposeView 
Object that represents an open compose window **or** reply widget. The fields can be easily read and modified, and certain elements can be attached to it. This includes buttons and sidebars.  

### Methods
> [addButton](#addbuttonbuttondescriptor),
[addComposeNotice](#addcomposenoticecomposenoticedescriptor),
[addStatusBar](#addstatusbarstatusbardescriptor),
[attachFiles](#attachfilesfiles),
[attachInlineFiles](#attachinlinefilesfiles),
[close](#close),
[getBodyElement](#getbodyelement),
[getMetadataForm](#getmetadataform),
[getInitialMessageID](#getinitialmessageid),
[getThreadID](#getthreadid),
[getDraftID](#getdraftid),
[getCurrentDraftID](#getcurrentdraftid),
[getHTMLContent](#gethtmlcontent),
[getSelectedBodyHTML](#getselectedbodyhtml),
[getSelectedBodyText](#getselectedbodytext),
[getSubject](#getsubject),
[getTextContent](#gettextcontent),
[getToRecipients](#gettorecipients),
[getCcRecipients](#getccrecipients),
[getBccRecipients](#getbccrecipients),
[getFromContact](#getfromcontact),
[getFromContactChoices](#getfromcontactchoices),
[insertHTMLIntoBodyAtCursor](#inserthtmlintobodyatcursorhtml),
[insertTextIntoBodyAtCursor](#inserttextintobodyatcursortext),
[insertLinkChipIntoBodyAtCursor](#insertlinkchipintobodyatcursortext-url-iconurl),
[insertLinkIntoBodyAtCursor](#insertlinkintobodyatcursortext-url),
[isForward](#isforward),
[isFullscreen](#isfullscreen),
[isInlineReplyForm](#isinlinereplyform),
[isMinimized](#isminimized),
[isReply](#isreply),
[popOut](#popout),
[send](#sendsendoptions),
[setFullscreen](#setfullscreenminimized),
[setMinimized](#setminimizedminimized),
[setTitleBarColor](#settitlebarcolorcolor),
[setToRecipients](#settorecipientsemails),
[setCcRecipients](#setccrecipientsemails),
[setBccRecipients](#setbccrecipientsemails),
[setFromEmail](#setfromemailemail),
[setSubject](#setsubjecttext),
[setBodyHTML](#setbodyhtmlhtml),
[setBodyText](#setbodytexttext)



#### addButton(buttonDescriptor)
Inserts a button into the compose bar. This method also accepts a stream of ComposeButtonDescriptors so that you can change the appearance of your button after you've added it.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **buttonDescriptor** | `ComposeButtonDescriptor or Stream(ComposeButtonDescriptor)` | The details of the button to add to the compose bar |

#### addComposeNotice(composeNoticeDescriptor)
Adds a notice bar above the compose area of an email. Returns a `ComposeNoticeView`

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **composeNoticeDescriptor** | `ComposeNoticeDescriptor` | The details of the compose notice to add to the compose view |

#### addStatusBar(statusBarDescriptor)
Adds a horizontal bar underneath the control section of the ComposeView. This is useful to add more complex UI interactions but should be used sparingly. Returns a `StatusBarView`

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **statusBarDescriptor** | `StatusBarDescriptor` | The details of the status bar to add to the compose view |

#### attachFiles(files)
Returns a `Promise<void>`
Attaches a set of files into the compose view. The parameter must be an array of File objects, or Blob objects with their name properties set. This function's implementation is asynchronous, and the function returns a `Promise<void>` that resolves after the InboxSDK has handed the files to the page to be uploaded and the file has begun uploading.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **files** | `Array<Blob>` | The file blobs |

#### attachInlineFiles(files)
Returns a `Promise<void>`
Attaches a set of files into the compose view inline in the message if possible. This works with images. The parameter must be an array of File objects, or Blob objects with their name properties set. This function's implementation is asynchronous, and the function returns a `Promise` that resolves after the InboxSDK has handed the files to the page to be uploaded and the file has begun uploading.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **files** | `Array<Blob>` | The file blobs |

#### close()
Closes the compose window.

#### getBodyElement()
Returns the `HTMLElement` of the body of the compose view.

#### getMetadataForm()
Returns a `HTMLElement` of the metadata form of the compose view. This is the form that holds the To, CC, BCC, elements.

#### getInitialMessageID()
Returns a `string` with the initial message ID of the draft. If this is a new compose then the message ID will be null. If the user has opened an existing draft then this function returns the message ID of the draft when it was first opened. The use of the getDraftID() method is recommended over this method. This method will not be implemented in Inbox.

#### getThreadID()
Returns a `string` of the thread ID of the draft. If the draft is not a reply, then this will be null.

#### getDraftID()
Returns a `Promise<string>` for the compose view's draft ID. If this is called on an empty draft that doesn't have a draft ID assigned yet, then the promise won't resolve until the draft gets assigned an ID, or the promise may resolve to null if the draft remains empty and is closed before being assigned an ID.

#### getCurrentDraftID()
Returns a `Promise<string>` for the compose view's draft ID. Acts the same as ComposeView.getDraftID(), except that if the ComposeView does not yet have a draft ID assigned, then the returned Promise resolves to null immediately instead of waiting.

#### getHTMLContent()
Returns an html `string` of the contents of the body of the compose view.

#### getSelectedBodyHTML()
Returns a HTML `string` containing any text and elements highlighted by the user inside the email body.

#### getSelectedBodyText()
Returns a `string` containing any text highlighted by the user inside the email body.

#### getSubject()
Returns a `string` containing the subject of the email.

#### getTextContent()
Returns a `string` containing all the text of the email body.

#### getToRecipients()
Returns an `Array<Contact>` containing the name and email address of all recipients on the TO line.

#### getCcRecipients()
Returns an `Array<Contact>` containing the name and email address of all recipients on the CC line.

#### getBccRecipients()
Returns an `Array<Contact>` containing the name and email address of all recipients on the BCC line.

#### getFromContact()
Returns a `Contact` of the value selection in the "From" field. Gives information about the user even if the From field isn't visible.

#### getFromContactChoices()
Returns an `Array<Contact>` of all the options available in the "From" field.

#### insertHTMLIntoBodyAtCursor(html)
Places HTML inside the body of the message at the cursor or at the beginning of the message if the cursor is not in the body of the message. If anything inside the body is selected, it will be replaced. Returns the root `HTMLElement` of the inserted link.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **html** | `string` or `HTMLElement` | The HTML to insert. You can provide an HTML string or a DOM element |

#### insertTextIntoBodyAtCursor(text)
Places text inside the body of the message at the cursor or at the beginning of the message if the cursor is not in the body of the message. If anything inside the body is selected, it will be replaced.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **text** | `string` | The text to insert |

#### insertLinkChipIntoBodyAtCursor(text, url, iconUrl)
Places a link chip inside the body of the message at the cursor or at the beginning of the message if the cursor is not in the body of the message. If anything inside the body is selected, it will be replaced. A link chip is an enhanced link with an icon and a callout. These are typically used by Gmail when inserting a Google Drive link. Returns the `HTMLElement` of the inserted chip

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **text** | `string` | The anchor text of the link to insert |
| **url** | `string` | The URL of the link to insert |
| **iconUrl** | `string` | The URL of the icon that will be shown in the chip |


#### insertLinkIntoBodyAtCursor(text, url)
Places a link inside the body of the message at the cursor or at the beginning of the message if the cursor is not in the body of the message. If anything inside the body is selected, it will be replaced. Returns the `HTMLElement` of the inserted link.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **text** | `string` | The anchor text of the link to insert |
| **url** | `string` | The URL of the link to insert |

#### isForward()
Returns a `boolean` whether the compose view is in "forward" mode. A compose view may be started in forward mode if it was opened by Gmail's Forward button, and a compose view's mode may be changed while it is active. Changes to this value will be reported by the "responseTypeChanged" event.

#### isFullscreen()
Returns a `boolean` whether or not this compose view is in full-screen mode.

#### isInlineReplyForm()
Returns a `boolean` whether or not this compose view is an inline reply. Inline replies are used by Gmail and Inbox when responding to a message right underneath the original message. You typically will not need to use this.

#### isMinimized()
Returns a `boolean` whether or not this compose view is minimized.

#### isReply()
Returns a `boolean` whether or not this compose view is a reply. Replies can be inline or in a seperate pop out window. You typically will not need to use this.

#### popOut()
If the compose is an inline reply form, this triggers it to be converted to a full compose view. Note that the current ComposeView object will emit its destroy event, and a new ComposeView object will be created. This function Returns a `Promise<ComposeView>`.

#### send(sendOptions)
Simulates clicking the compose's send button.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **sendOptions** | `SendOptions` | An optional configuration object for the send |

#### setFullscreen(minimized)
This allows the fullscreen state to be changed.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **minimized** | `boolean` | If true, the compose view will be made fullscreen |

#### setMinimized(minimized)
This allows the minimize state to be changed.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **minimized** | `boolean` | If true, the compose view will be minimized |

#### setTitleBarColor(color)
Sets the background color of the title bar for non-inline compose views. Will not work for inline compose views (you can check for this via `ComposeView.isInlineReplyForm())`. Returns a `function` which removes the custom title bar color when called.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **color** | `string` | A valid CSS color string (rgba, hex, hsla, etc.) |

#### setToRecipients(emails)
Sets the "To" field of the draft, replacing the existing values.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **emails** | `Array<string>` | Array of email addresses to set |

#### setCcRecipients(emails)
Sets the "CC" field of the draft, replacing the existing values.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **emails** | `Array<string>` | Array of email addresses to set |

#### setBccRecipients(emails)
Sets the "BCC" field of the draft, replacing the existing values.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **emails** | `Array<string>` | Array of email addresses to set |

#### setFromEmail(email)
Changes the email address picked in the from field. Throws an exception if the requested choice isn't available. No error is thrown if the From field is not visible if the user's own email address is chosen.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **email** | `string` | Address to set the from field to use |

#### setSubject(text)
Replaces the entirety of the current subject of the compose and replaces the subject with the passed in text

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **text** | `string` | text to use for the subject |

#### setBodyHTML(html)
Replaces the entirety of the compose's email body with the html value passed in.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **html** | `string` |html to use for the body |

#### setBodyText(text)
Replaces the entirety of the compose's email body with the text value passed in.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **text** | `string` | text to use for the body |












### Events

#### destroy
Fires when the compose view is closed. This can be triggered by the `close()` method, the user clicking the close or discard buttons, the message being sent, etc.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **messageID** | `string` | If the composeView was closed without being sent and the draft was saved, then this property will have the draft's message ID after it saved. Otherwise it will be null. This property is only present in Gmail |
| **closedByInboxSDK** | `boolean` | Whether or not the ComposeView was closed by an extension calling ComposeView.close(), including other extensions besides your own. False if the ComposeView was closed due to a user action like clicking the discard/close buttons or hitting escape |

#### discard
Fires when the compose view is discarded (deleted). `discard` event handlers will always be called before `destroy` handlers.

#### fullscreenChanged
Fires when the From value is changed.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **fullscreen** | `boolean` | tells whether the compose is now fullscreen |

#### presending
Fires when the user presses send. During this phase (between the presending and sending events) you can modify the `ComposeView` before the message actually starts sending. Note that multiple applications may modify the message. This event is the only one which allows you to modify or cancel the sent message. This event may be emitted multiple times for one message.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **cancel** | `function` | a function you can call to cancel the sending of this message. This will prevent the message from being sent. |

#### sendCanceled
Fires after an extension cancels the send during presending (see the `presending` event). Because multiple extensions may choose to cancel the send, your extension may receive a `sendCanceled` event even if it did not initiate the cancellation. This event may be emitted multiple times for one message.

#### sending
Fires when an AJAX request to Gmail has been initiated but the response has not yet been received. Any modifications you make to the ComposeView at this point will not have an effect as the AJAX request has already been sent. You'd typically use this event to record stats about what messages are being sent.

#### sent
Fires when the Gmail server has confirmed receiving the message. An event object containing properties about the sent message will be passed to the event listeners.

| Event methods | Type | Description |
| :--- | :--- | :--- |
| **getThreadID()** | `Promise<string>` | retrieves the thread ID of the message that was just sent |
| **getMessageID()** | `Promise<string>` | retrieves the message ID of the message that was just sent |

#### bodyChanged
Fires whenever the message body's contents change.

#### fromContactChanged
Fires when the From value is changed.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was added to the "To" recipients |

#### recipientsChanged
Fires when any of the To/Cc/Bcc fields are changed.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **to.added** | `Array<Contact>` | a list of contacts that were added to the "To" recipients |
| **to.removed** | `Array<Contact>` | a list of contacts that were removed from the "To" recipients |
| **cc.added** | `Array<Contact>` | a list of contacts that were added to the "CC" recipients |
| **cc.removed** | `Array<Contact>` | a list of contacts that were removed from the "CC" recipients |
| **bcc.added** | `Array<Contact>` | a list of contacts that were added to the "BCC" recipients |
| **bcc.removed** | `Array<Contact>` | a list of contacts that were removed from the "BCC" recipients |

#### toContactAdded
Fires when a to contact is added.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was added to the "To" recipients |

#### toContactRemoved
Fires when a to contact is removed.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was removed from the "To" recipients |

#### ccContactAdded
Fires when a CC contact is added.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was added to the "CC" recipients |

#### ccContactRemoved
Fires when a CC contact is removed.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was removed from the "CC" recipients |

#### bccContactAdded
Fires when BCC to contact is added.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was added to the "BCC" recipients |

#### bccContactRemoved

Fires when a BCC contact is removed.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was removed from the "BCC" recipients |

#### minimized
Fires when the compose view is minimized

#### restored
Fires when the compose view is restored

#### responseTypeChanged
Fires when the compose view's response type is changed.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **isForward** | `boolean` |  |## **ComposeView** properties







### Properties
| Property | Type | Description |
| :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed |






---
## ComposeButtonDescriptor 
This type is passed into the ComposeView.addButton() method as a way to configure the button shown.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | Text to show when the user hovers the mouse over the button. | Yes |
| **onClick** | `function(event)` | This is called when the button is clicked, and gets passed an event object. The event object will have a composeView object and optionally a dropdown property if the button had a dropdown. |  Yes |
| **iconUrl** | `string` | URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL. | No | `null` |
| **iconClass** | `string` | An optional class to apply to the icon. | No | `null` |
| **hasDropdown** | `boolean` | If true, the button will open a dropdown menu above it, and the event object will have a dropdown property of type DropdownView that allows the dropdown to be customized when opened. | No | `false`
| **type** | `string` | There are currently two supported types of compose buttons, one which results in the message being sent and another which just modifies the current message but does not send it. The button is placed according to its type. The permissable values for type are SEND_ACTION and MODIFIER. Only MODIFIER is supported in Inbox currently. | No | `MODIFIER` |
| **orderHint** | `number` | If multiple buttons are placed next to each other, then they will be ordered by this value. | No | `0` |
| **enabled** | `boolean` | If false, the button will be disabled and will not emit any events. | No | `true` |
| **noOverflow** | `boolean` | If true, the button will not move to the responsive overflow menu. | No | `false` |






---
## SendOptions
This type is optionally passed into the ComposeView.send() method as a way to configure the send.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **sendAndArchive** | `boolean` | Whether or not the message should be sent using Gmail's 'send and archive' feature when available. If you set this to true but the ComposeView does not have a Send and Archive button available, ComposeView.send() will fall back to the normal Send button. | No | `false` |










---
## ComposeNoticeView 
Object that represents an open compose window **or** reply widget. The fields can be easily read and modified, and certain elements can be attached to it. This includes buttons and sidebars.  


### Methods

#### destroy()
Removes the element and executes any necessary clean-up.


### Events

#### destroy
Fires when the view is destroyed. This can be triggered by the app calling the destroy() method or by the InboxSDK internally calling the destroy() method.


### Properties
| Property | Type | Description |
| :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed |
| **el** | `HTMLElement` | An element that you should modify and fill with your app's content. |








---
## ComposeNoticeDescriptor
This type is passed into the `ComposeView.addComposeNotice()` method as a way to configure the compose notice shown.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **orderHint** | `Number` | The order in which to show the compose notice. | No | `0` |









---
## StatusBarView 
Object that represents an open compose window **or** reply widget. The fields can be easily read and modified, and certain elements can be attached to it. This includes buttons and sidebars.  


### Methods

#### destroy()
Removes the element and executes any necessary clean-up.

#### setHeight(height)
Replaces the entirety of the compose's email body with the text value passed in.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **height** | `number` | Desired height for status bar in pixels. |



### Events

#### destroy
Fires when the view is destroyed. This can be triggered by the app calling the destroy() method or by the InboxSDK internally calling the destroy() method.


### Properties
| Property | Type | Description |
| :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed |
| **el** | `HTMLElement` | An element that you should modify and fill with your app's content. |




---
## StatusBarDescriptor
This type is passed into the `ComposeView.addStatusBar()` method as a way to configure the status bar shown.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **height** | `Number` | The vertical height of the status bar in pixels. | No | `40` |
| **orderHint** | `Number` | The order in which to show the status bars. | No | `0` |