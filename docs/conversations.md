---
id: conversations
title: Conversations
---
This namespace allows you to interact with Gmail conversations (typically called threads). The fundamental views you interact with are ThreadView and MessageView and there is a 1 to many relationship between them. The functions in Conversations.* allow you to obtain these views which you can then further manipulate.

It's important to note that ThreadViews and MessageViews can be navigated to in various ways by the user depending on their email client and their settings (i.e. preview pane on in Gmail). This is abstracted completely away from you so you can just focus on manipulating the views once they are given to you.

Finally, when a ThreadView loads, you're not guranteed that every MessageView in it is also loaded. When you call ThreadView.getMessageViews it will return all MessageViews, but its important to remember that the MessageViews might not be loaded. MessageViews can be in several states. Consult the MessageView documentation to learn about what functionality is available in each state.

### Namespace methods
#### registerThreadViewHandler(handler)
Registers your handler to be called when the user navigates to a ThreadView. Your handler is given a ThreadView which you can then further manipulate.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(ComposeView)` | The handler to call when a ThreadView is displayed. This handler is passed one parameter, a ThreadView. |
_Returns_ a `function` which removes the handler registration.


#### registerMessageViewHandler(handler)
Registers your handler to be called when a MessageView is displayed. Your handler is given a MessageView which you can then further manipulate.

IMPORTANT: Your handler will only be called for MessageViews that are "loaded". See docs for MessageView to understand the distinction.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(ComposeView)` | The handler to call when a MessageView is displayed. |
_Returns_ a `function` which removes the handler registration.


#### registerMessageViewHandlerAll(handler)
Registers your handler to be called when the user navigates to a MessageView. Your handler is given a MessageView which you can then further manipulate.

IMPORTANT: Your handler will be called for MessageViews that are both "loaded" and "unloaded". See docs for MessageView to understand the distinction.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(ComposeView)` | The handler to call when a message view is displayed. |
_Returns_ a `function` which removes the handler registration.


#### registerFileAttachmentCardViewHandler(handler)
Registers your handler to be called when an AttachmentCardView is visible.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(ComposeView)` | The handler to call when am attachment card view is displayed. |
_Returns_ a `function` which removes the handler registration.

---
## ThreadView
Object that represents a visible thread view that the user has navigated to

### Methods
#### addNoticeBar()
Inserts a "notice bar" element below the thread subject. The element defaults to having a yellow background color and specific padding to make it look like a warning on the thread, but your code may override these styles of the element.

_Returns_ a `SimpleElementView`

#### addLabel()
Inserts a "label" element alongside the thread subject and all native labels. The element has no default styling. Adding your own is recommended.

_Returns_ a `SimpleElementView`

#### addSidebarContentPanel(contentPanelDescriptor)
Inserts a content panel into the sidebar of a thread view. A content panel simply displays your content to the user, typically in the form of a sidebar. ThreadViews can have multiple content panels added to them and the SDK will handle creating a tabbed interface if needed.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **contentPanelDescriptor** | `ContentPanelDescriptor` | The details of the content panel to add to the thread's sidebar. |

_Returns_ a `ContentPanelView`

#### getMessageViews()
_Returns_ an `Array<MessageView>` of all the loaded MessageView objects currently in the thread. See MessageView for more information on what "loaded" means. Note that more messages may load into the thread later! If it's important to get future messages, use Conversations.registerMessageViewHandler instead.

#### getMessageViewsAll()
_Returns_ an `Array<MessageView>` of all the MessageView objects in the thread regardless of their load state. See MessageView for more information on what "loaded" means.

#### getSubject()
_Returns_ a `string` of the subject of this thread.

#### getThreadIDAsync()
_Returns_ a `Promise<string>` of the Gmail Thread ID of the thread



### Events
#### contactHover
Fires when the user hovers over a contact on any message in the thread ContactHoverEvent.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was hovered over |
| **contactType** | `string` | whether the hovered contact was a 'sender' or 'recipient' |
| **messageView** | `MessageView` | the message view that the contact was a part of |
| **threadView** | `ThreadView` | the thread view that the contact was a part of |


#### destroy
Fires when the thread view is no longer visible (i.e. the user navigates away from the thread).



### Properties
| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |








---
## MessageView
Object that represents a visible message in the UI. There are properties to access data about the message itself as well as change the state of the UI. MessageViews have a view state as well as a loaded state. These 2 properties are orthogonal to each other.

A messages' view state can be one of MessageViewViewStates.EXPANDED, MessageViewViewStates.COLLAPSED or MessageViewViewStates.HIDDEN. Gmail visually display messages in a thread in different ways depending on what they are trying to show a user. These values are described in the enum MessageViewViewStates.
The load state of a message determines whether all of the data pertaining to a message has been loaded in the UI. In some case, not all the information (such as recipients or the body) may be loaded, typically when the the view state is COLLAPSED or HIDDEN. You should not depend on any relationship between the view state and load state. Instead, use the provided MessageView.getViewState() and MessageView.isLoaded() methods.

### Methods
#### addAttachmentCardView(cardOptions)
Adds an AttachmentCardView to the message. Each message has an area where attachments of that message are shown as a set of preview cards. These may be for file attachments or even inline YouTube links. This method allows you to add your own.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **cardOptions** | `AttachmentCardOptions` or `AttachmentCardNoPreviewOptions` | The configuration of the AttachmentCardView to create. |

_Returns_ an `AttachmentCardView`

#### addAttachmentsToolbarButton(buttonOptions)
Adds a button to the download all area of the attachments tray.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **buttonOptions** | `AttachmentsToolbarButtonDescriptor` | The configuration of the button to create. |

#### addToolbarButton(options)
Adds a button to the message.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `MessageViewToolbarButtonDescriptor` | The configuration of the button to create. |

#### getBodyElement()
Returns the body element of the message as displayed to the user. This element includes any qouted areas. Use this method when you want to decorate the body of the message, i.e. if you wanted to linkify all dates you found in a message for scheduling purposes

_Returns_ a `HTMLElement`

#### getMessageIDAsync()
Gets the ID of the message and returns it as a Promise. The promise will reject with an error if this is called on a message that isn't loaded yet.

_Returns_ a `Promise<string>`

#### getFileAttachmentCardViews()
Returns all the attachment card views of type FILE currently visible for this message.

_Returns_ an `Array<AttachmentCardView>`

#### isElementInQuotedArea()
Returns whether the element you provided or not is contained within the qouted area of the MessageView. This is useful when you want to parse through the contents of the HTMLElement returned by MessageView.getBodyElement() and test whether one if its children is in the qouted area (because you'll usually ignore those elements).

_Returns_ a `boolean`

#### isLoaded()
Returns whether this message has been loaded yet. If the message has not been loaded, some of the data related methods on this object may return empty results. The message may be loaded once the user clicks on the message stub.

_Returns_ a `boolean`

#### getLinksInBody()
Returns an array of MessageViewLinkDescriptors representing all the links in the message and their associated metadata. This is useful when you want to parse links in a message and take some action on them, this takes care of detecting whether the link is in the qouted area or not and parsing out the url/anchor text of the link. i.e. if you wanted to linkify all dates you found in a message for scheduling purposes

_Returns_ an `Array<MessageViewLinkDescriptor>`

#### getSender()
Get the contact of the sender of this message.

_Returns_ a `Contact`

#### getRecipientEmailAddresses()
Get all the recipient email addresses of this message (to, cc, bcc). This only reads the values directly present in the page, which may be truncated if there are many items. The asynchronous method getRecipientsFull() should be used instead if the full list is desired.

_Returns_ an `Array<string>`

#### getRecipientsFull()
Get all the recipients of this message (to, cc, bcc). Returns a promise for an array of contact objects.

_Returns_ a `Array<Contact>`

#### getThreadView()
Get the ThreadView that this MessageView is in.

_Returns_ a `ThreadView`

#### getDateString()
Gets Gmail's representation of the timestamp of the message. Note: this returns a string representation because timezone information is not available, the accuracy is limited to minutes, and it is formatted to the user's language.

_Returns_ a `string`

#### addAttachmentIcon(iconDescriptor)
Adds an attachment message's top line near the date. It returns an instance of AttachmentIcon which can subsribe to events 'tooltipShown' and 'tooltipHidden'.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **iconDescriptor** | `MessageAttachmentIconDescriptor` or `Stream(MessageAttachmentIconDescriptor)` | The options for the icon to add. |

_Returns_ an `AttachmentIcon`

#### getViewState()
Returns the view state of this Message view. The possible view states are MessageViewViewStates.HIDDEN (no information visible), MessageViewViewStates.COLLAPSED (partial information visible) or MessageViewViewStates.EXPANDED

_Returns_ a `MessageViewViewStates`



### Events
#### viewStateChange
Fires when message viewState is changed

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **newViewState** | `MessageViewViewStates` | the new state the message view is in |
| **oldViewState** | `MessageViewViewStates` | the old state the message view was in |
| **messageView** | `MessageView` | the message view whose state changed |


#### contactHover
Fires when the user hovers over a contact.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **contact** | `Contact` | the contact that was hovered over |
| **contactType** | `string` | whether the hovered contact was a 'sender' or 'recipient' |
| **messageView** | `MessageView` | the message view that the contact was a part of |
| **threadView** | `ThreadView` | the thread view that the contact was a part of |


#### load
Fires when the data for a message is loaded. This can happen when the message view is first presented or later when the user chooses to expand its view state.


#### destroy
Fires when the view card is destroyed



### Properties
| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |





---
## ContentPanelView
A view representing a panel of your apps content. This is the object that is returned when you add a sidebar content panel to a thread view or similar.

### Methods
#### isActive()
_Returns_ a `boolean` whether the content panel is currently visible.

#### open()
Makes the content panel visible, opening the sidebar if necessary.

#### remove()
Removes the content panel from its host.


### Events
#### activate
Fires when the content panel becomes visisble. This can happen the first time the Panel is shown or subsequent times if the panel is presented in a tabbed interface and the ContentPanels tab is selected.

#### deactivate
Fires when the content panel is hidden. Typically this occurs when the user switches to another ContentPanel.

#### destroy
Fires when the content panel view is no longer valid (i.e. the user navigates away from the thread with the sidebar).


### Properties
| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |






---
## AttachmentCardView
Object that represents an Attachment Card visible in a message containing attachments.

### Methods
#### getAttachmentType()
Returns the type of the attachment card. Values returned include FILE (regular file attachments), DRIVE (Drive attachments that are present as links in the message), CUSTOM (attachment cards added by this or other apps built on the SDK), and UNKNOWN (for other types of attachment cards rendered by Gmail that aren't specifically supported currently such as YouTube and Yelp links).

_Returns_ a `string`

#### addButton(buttonDescriptor)
Adds a button to this attachment card.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **buttonDescriptor** | `CustomButtonDescriptor` | The description of the button. |

#### getTitle()
Reads the title on the attachment card. Typically this will be a filename.

_Returns_ a `string`

#### getDownloadURL()
This method is deprecated. Please use the same-named method on the AttachmentCardClickEvent object instead.

_Returns_ a `Promise<string>`

#### getMessageView()
Get the MessageView that this attachment card belongs to if it belongs to one. AttachmentCardViews in Gmail always belong to a MessageView.

_Returns_ `null` or a `MessageView`

### Events
#### destroy
Fires when the view card is destroyed.

### Properties
| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |






---
## AttachmentCardClickEvent
This object is given to the onClick function defined in a CustomButtonDescriptor added to an AttachmentCardView.
#### getDownloadURL()
Get the URL for the attachment card's download link as a promise for a string. For FILE attachment cards, the URL will be a short-lived URL that can be accessed without cookies. For CUSTOM attachment cards, the URL will be the downloadUrl property of the card's download button if it has one, otherwise null. Other attachment card types may not have a download URL, and the promise may resolve to null.

_Returns_ a `Promise<string>`






---
## AttachmentIcon
Object that represents an AttachmentIcon returned by addAttachmentIcon in message view.
#### tooltipShown
Fires when mouse enters message attachment icon to show custom tooltip html element.

#### tooltipHidden
Fires when mouse leaves message attachment icon to hide custom tooltip html element.






---
## AttachmentCardOptions
This type is accepted by the MessageView.addAttachmentCardView() method to insert an AttachmentCardView for a message. An attachment card offers a way to display a rich preview of any 'attachment' to a message. Note that 'attachments' is referenced in the generic sense and need not be a downloadable file specifically. One example would be to show you YouTube attachment cards for any YouTube links present in an email.


| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | The title of the attachment card. Typically a filename is set here. | Yes |  |
| **description** | `string` | A description of the attachment card displayed subtly. | Yes |  |
| **previewUrl** | `string` | The url of an "open" or "preview" action for this attachment. The attachment cards primary action (clicking on the card) takes the user in a new window to the URL specified here. This is also the URL used if the user right clicks and copies the link address. | Yes |  |
| **previewThumbnailUrl** | `string` | A URL to an image representing the thumbnail preview of the attachment card | Yes |  |
| **failoverPreviewIconUrl** | `string` | URL to an icon to fallback on in case the previewThumbnailUrl fails to load. | Yes |  |
| **previewOnClick** | `function(event)` | A callback to call when the user clicks on the preview area. Note that if the previewUrl is also set, the preview will open in a new window in addition to this callback being called. The PreviewEvent has one property - attachmentCardView. It also has a preventDefault() function. Calling this function prevents the preview from opening in a new window. | Yes |  |
| **fileIconImageUrl** | `string` | The url of the icon of the attachment. | Yes |  |
| **buttons** | `Array<(DownloadButtonDescriptor|CustomButtonDescriptor)>` | An array of buttons to support functionality in addition to the preview functionality | Yes |  |
| **foldColor** | `string` | The color of the attachment card fold and an accompying accent color. | No | `#BEBEBE` |
| **mimeType** | `string` | The mime type of the attachment if it has one. This is used to render image mime types slightly differently to be consistent with Gmail. Specifically, the previewThumbnailUrl images are rendered full bleed to show as much of the image as possible. As such the hover UI looks slightly different. | No | `null` |







---
## AttachmentCardNoPreviewOptions
This type is accepted by the MessageView.addAttachmentCardView() method to insert an AttachmentCardView for a message. An attachment card offers a way to display a rich preview of any 'attachment' to a message. Note that 'attachments' is referenced in the generic sense and need not be a downloadable file specifically. One example would be to show you YouTube attachment cards for any YouTube links present in an email.

These options differ from AttachmentCardOptions in that there is no previewThumbnailUrl, instead you use a iconThumbnailUrl to show a generic icon. These are rendered and positioned slightly differently than preview images.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | The title of the attachment card. Typically a filename is set here. | Yes |  |
| **description** | `string` | A description of the attachment card displayed subtly. | Yes |  |
| **previewUrl** | `string` | The url of an "open" or "preview" action for this attachment. The attachment cards primary action (clicking on the card) takes the user in a new window to the URL specified here. This is also the URL used if the user right clicks and copies the link address. | Yes |  |
| **iconThumbnailUrl** | `string` | A URL to an icon to show in the thumbnail area of the attachment card | Yes |  |
| **previewOnClick** | `function(event)` | A callback to call when the user clicks on the preview area. Note that if the previewUrl is also set, the preview will open in a new window in addition to this callback being called. The PreviewEvent has one property - attachmentCardView. It also has a preventDefault() function. Calling this function prevents the preview from opening in a new window. | Yes |  |
| **fileIconImageUrl** | `string` | The url of the icon of the attachment. | Yes |  |
| **buttons** | `Array<(DownloadButtonDescriptor|CustomButtonDescriptor)>` | An array of buttons to support functionality in addition to the preview functionality. | Yes |  |
| **foldColor** | `string` | The color of the attachment card fold and an accompying accent color. | No | `#BEBEBE` |







---
## ContentPanelDescriptor
This type is passed into the ThreadView.addSidebarContentPanel() method as a way to configure the content panel shown. ContentPanels are typically shown in a sidebar and when multiple are shown they are displayed in a multi tab interface.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **el** | `HTMLElement` | The element to display in the content panel. | Yes |  |
| **title** | `string` | The text to show in the tab. | Yes |  |
| **iconUrl** | `string` | URL for the icon to show in the tab. Should be a local extension file URL or a HTTPS url. | Yes |  |
| **appName** | `string` | When a thread is open but the sidebar isn't, then buttons to open the sidebar will be shown next to the thread. Each button may be associated with multiple sidebars. The sidebars are grouped into buttons based on this appName property, their app's appName passed to `InboxSDK.load()`, or the title property. | No |  |
| **appIconUrl** | `string` | Overrides the icon for the sidebar-opener button. | No |  |
| **id** | `string` | A string can be passed to identify this panel so that user preferences specific to this panel may be saved. If this property is not present, then the title will be used as the id. | No |  |
| **hideTitleBar** | `boolean` | Hide the title bar if this is the only sidebar panel attached to the thread. If multiple panels are added (including panels from other extensions) then the title bar will appear so that the user can adjust the panels with the title bar controls. | No | `false` |
| **orderHint** | `number` | If multiple content panels for your app are added then they will be ordered by this value. | No | `0` |







---
## DownloadButtonDescriptor

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **downloadUrl** | `string` | The url of the file to download when the user presses the download button. | Yes |  |
| **downloadFilename** | `string` | If the URL is a data: or blob: URI, then this sets the filename for the file to be saved as. This works by setting the "download" attribute on an anchor element to the given value. | No | `null` |
| **onClick** | `function(event)` | A callback that is called when the user presses the download button. Note, this is called in addition to file actually downloading which happens automatically. | Yes |  |
| **openInNewTab** | `boolean` | Whether the download action should open in a new tab. It may be useful to open a new tab to perform the download if for example you want to sometimes redirect the user to a login or permission page. By default, the SDK will attempt to download the file in the same tab and not open a new one. This is typically a better user experience. | No | `false` |







---
## CustomButtonDescriptor

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **iconUrl** | `string` | The icon to use. Use a white image with transparent background for consistency. | Yes |  |
| **tooltip** | `string` | The tooltip to show when the user hovers over the button. | Yes |  |
| **onClick** | `function(AttachmentCardClickEvent)` | A callback that is called when the user presses the button. | Yes |  |







---
## AttachmentsToolbarButtonDescriptor

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **tooltip** | `string` | The tooltip of the button. | Yes |  |
| **iconUrl** | `string` | The url of an icon image to use. A black icon with transparent background is preferred. | Yes |  |
| **onClick** | `function(event)` | The callback when the button is clicked. The event object has a property event.attachmentCardViews which is an array of AttachmentCardViews. | Yes |  |







---
## MessageViewLinkDescriptor

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **text** | `string` | The anchor text of the link. | Yes |  |
| **html** | `string` | The html string of the link found. | Yes |  |
| **element** | `HTMLElement` | The actual HTMLElement of the link found. | Yes |  |
| **href** | `string` | The url of the link. | Yes |  |
| **isInQuotedArea** | `boolean` | Whether the link was found in the qouted area of the message or not | Yes |  |







---
## MessageAttachmentIconDescriptor
This type is used to describe a button you add to a MessageView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **iconUrl** | `string` | URL for the icon to show on in the attachments column. Should be a local extension file URL or a HTTPS URL. | Yes |  |
| **iconClass** | `string` | A CSS class to apply to the icon. | No | `MODIFIER` |
| **iconHtml** | `string` | An optional Html for the icon to show. This property can not be used with iconUrl. | No | `null` |
| **tooltip** | `string` or `HTMLElement` | The tooltip text or custom tooltip element to show when the user hovers over the icon. | Yes |  |
| **onClick** | `function` | Function to call when the user clicks the icon. | No |  |





---
## MessageViewToolbarButtonDescriptor
The options to use to configure buttons added to the message.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **section** | `MessageViewToolbarSectionNames` | The section of the message to place the button. | Yes |  |
| **title** | `string` | Text to show on the menu item. | Yes |  |
| **iconUrl** | `string` | URL for the icon to show on the menu item. Should be a local extension file URL or a HTTPS URL. The image will be displayed with a height and width of 16px. | Yes |  |
| **iconClass** | `string` | An optional class to apply to the icon. | No |  |
| **onClick** | `function` | This is called when the menu item is clicked. | Yes |  |
| **orderHint** | `number` | Used to specify the order of added menu items. | Yes |  |






---
## Enums and Constants
### MessageViewViewStates
The various UI states a MessageView can be in.

| Enum | Description |
| :--- | :--- |
| **HIDDEN** | In this state none of the message is visible except for the outline of its existence. |
| **COLLAPSED** | In this state most of the body of the message is not visible and some recipients may not be showing. |
| **EXPANDED** | In this state all of the message is visible including the body. |

### MessageViewToolbarSectionNames
The locations that a button can be added to on a MessageView.

| Enum | Description |
| :--- | :--- |
| **MORE** | The button will be added to the message's "More" dropdown menu. |
