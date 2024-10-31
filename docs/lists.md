---
title: Lists
---

This namespace allows you to interact with Lists of emails. They typically appear in various views like Inbox, Search or Labels. The interaction primarily lets you view and modify data in each row of the list.

### Namespace methods

#### registerThreadRowViewHandler(handler)
Registers a handler that gets called whenever a new ThreadRowView becomes visible on screen. Your handler is guaranteed to be called exactly once per thread per route. That is, each time your user visits a route with ThreadRowViews, this handler will get called once for each ThreadRowView. 

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(ThreadRowView)` | The function to call on each new visible ThreadRowView. |

_Returns_ a `function` which removes the handler registration.


#### getSelectedThreadRowViews()
_Returns_ an `Array<ThreadRowView>` of all the currently checkmarked ThreadRowViews.


#### registerThreadRowViewSelectionHandler(handler)
Registers a handler that gets called whenever a user makes a change in the list of selected threads. 

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(Array<ThreadRowView>)` | The function to call each time the set of selected thread row views changes. |

_Returns_ a `function` which removes the handler registration.






---
## ThreadRowView
### Methods

#### addLabel(labelDescriptor)
Adds a label to the thread row view. This label will appear like a normal Gmail label, but it is purely a temporary visual modification. This method does not cause any change to persist to the user's thread in Gmail.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **labelDescriptor** | `LabelDescriptor` or `Stream(LabelDescriptor)` | An options object for the label. |

#### addImage(imageDescriptor)
Adds an image to the thread row view.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **imageDescriptor** | `ImageDescriptor` or `Stream(ImageDescriptor)` | An options object for the image. |

#### addButton(buttonDescriptor)
Adds an icon style button to this row, placed right next to the star button.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **buttonDescriptor** | `ThreadRowButtonDescriptor` or `Stream(ThreadRowButtonDescriptor)` | An options object for the button. |

#### addActionButton(buttonDescriptor)
Adds an action button to the right of the subject.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **buttonDescriptor** | `ThreadRowActionButtonDescriptor` or `Stream(ThreadRowActionButtonDescriptor)` | An options object for the button. |

#### addAttachmentIcon(threadRowAttachmentIconDescriptor)
Adds an attachment icon to the row.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **threadRowAttachmentIconDescriptor** | `ThreadRowAttachmentIconDescriptor` or `Stream(ThreadRowAttachmentIconDescriptor)` | The options for the icon to add. |

#### replaceDate(threadRowDateDescriptor)
Replaces the text inside the date column.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **threadRowDateDescriptor** | `ThreadRowDateDescriptor` or `Stream(ThreadRowDateDescriptor)` | The options for the date replacement. |

#### replaceDraftLabel(draftLabelDescriptor)
If this row represents a draft, then this allows the word "Draft" and the number next to it to be replaced.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **draftLabelDescriptor** | `ThreadRowDraftLabelDescriptor` or `Stream(ThreadRowDraftLabelDescriptor)` | The options for the replacement. |

#### getSubject()
_Returns_ a `String` of the subject of this thread.

#### getDateString()
_Returns_ a `String` representation of the timestamp of the most recent message on the thread. Note: this returns a string representation because timezone information is not available, the accuracy is limited to minutes, and it is formatted to the user's locale.

#### getThreadIDAsync()
_Returns_ a `Promise<String>` of the Gmail Thread ID of the thread

#### getThreadIDIfStableAsync()
Gets the Gmail Thread ID of the thread only if the thread ID is stable. Some threads such as those with only a single Draft message in them will occasionally change their thread ID. If you're using the thread ID as a key, you may experience unexpected behaviour if you're not careful about this fact. This method provides you with an easy way to tell if the thread has a stable ID. 
_Returns_ a `Promise<String>` for the thread ID if it is expected to stay the same, otherwise it will return a `Promise<null>`

#### getDraftID()
_Returns_ a `Promise<String>` for the thread row's draft ID, if the thread row represents a single draft. Otherwise the promise may resolve to null.

#### getVisibleDraftCount()
_Returns_ a `Number` of visible draft messages in the row. This is purely an estimate based on what is visible in the row.

#### getVisibleMessageCount()
_Returns_ a `Number` of visible messages in the thread based on the visible numeric marker.

#### getContacts()
_Returns_ an `Array<Contact>` of the visible contacts listed on the row. Note: this may not include all participants on the thread as this information is not visible.

#### getElement()
_Returns_ a `HTMLElement`. Use if you need direct access to the DOM element for the row. Be careful when using this because you're exposed to the raw Gmail DOM, and it's up to you to handle all possible Gmail settings and updates.



### Events
#### destroy
Fires when the thread row is no longer visible.




### Properties
| Property | Type | Description |
| :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed |











---
## ThreadRowButtonDescriptor
This type is used to describe a button you add to a ThreadRowView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | Text to show when the user hovers the mouse over the button. | Yes ||
| **iconUrl** | `string` | URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL. | Yes ||
| **iconClass** | `string` | A CSS class to apply to the icon button. | No ||
| **onClick** | `function(event)` | A handler that gets called when the button is clicked on. The event object contains a threadRowView property and optionally a dropdown property if the hasDropdown was set to true. | Yes ||
| **hasDropdown** | `boolean` | If true, the button will open a dropdown menu above it, and the event object will have a dropdown property of type DropdownView that allows the dropdown to be customized when opened. | No | `false` |


---
## ThreadRowActionButtonDescriptor
This type is used to describe an action button you add to a ThreadRowView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **type** | `ActionButtonTypes` | The type of action button to show. Only LINK is currently supported. | Yes |
| **title** | `string` | Text of the button. | Yes |
| **className** | `string` | A CSS class to apply to the action button. | No ||
| **onClick** | `function(event)` | A handler that gets called when the action button is clicked on. | No ||
| **url** | `string` | For LINK action buttons only. This is the URL to open when the button is clicked. | Yes |


---
## LabelDescriptor
This type is used to describe labels that you add to ThreadRowView and CollapsibleSectionView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | Text of the label. | Yes |
| **foregroundColor** | `string` | The text color of the label. | No ||
| **backgroundColor** | `string` | The background color of the label. | No ||
| **maxWidth** | `string` | Max width for the label title. The default label title max-width is 90px. | No ||
| **iconHtml** | `string` | Html for the icon to show on the label. This property can't be used with iconUrl or iconClass. | No ||
| **iconUrl** | `string` | URL for the icon to show on the label. Should be a local extension file URL or a HTTPS URL. | Yes |
| **iconClass** | `string` | A CSS class to apply to the icon. | No ||
| **iconBackgroundColor** | `string` | A background color to put on the icon element if present. | No ||


---
## ImageDescriptor
This type is used to describe images that you add to ThreadRowView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **imageUrl** | `string` | URL for the image to show on the row. Should be a local extension file URL or a HTTPS URL. | Yes |
| **imageClass** | `string` | A CSS class to apply to the image. | No ||
| **tooltip** | `string` | The tooltip text to show when the user hovers over the image. | No ||
| **orderHint** | `number` | If multiple images from your app are added then they will be ordered by this value, | No | `0`


---
## ThreadRowDateDescriptor
This type is used to modify ThreadRowView's which represent drafts.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **text** | `string` | The date text to replace with. | Yes |
| **textColor** | `string` | The text color of the replaced date text. | No ||
| **tooltip** | `string` | The tooltip text to show when the user hovers over the date. | No ||


---
## ThreadRowAttachmentIconDescriptor
This type is used to describe an icon you add to a ThreadRowView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **iconUrl** | `string` | URL for the icon to show on in the attachments column. Should be a local extension file URL or a HTTPS URL. | No ||
| **iconClass** | `string` | A CSS class to apply to the icon. | No ||
| **iconHtml** | `string` | An optional Html for the icon to show. This property can not be used with iconUrl. | No ||
| **tooltip** | `string` | The tooltip text to show when the user hovers over the icon. | No ||


---
## ThreadRowDraftLabelDescriptor
This type is used to describe a modification you can do to a ThreadRowView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **text** | `string` | The text to replace "Draft" with. | Yes |
| **count** | `string` | The number to show in parentheses next to "Draft". No number will be shown if this is 1. | No | `1` |






---
## Enums and Constants
### ActionButtonTypes
The types of action buttons available to ThreadRowView.

| Enum | Description |
| :--- | :--- |
| **`LINK`** | Always opens an external URL. Marked with an arrow icon. |
