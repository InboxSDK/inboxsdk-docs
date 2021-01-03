---
id: common-data-types
title: Common Data Types
---

---
## Contact
This type represents a contact

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **name** | `string` | The name of the contact, may be null. | Yes |  |
| **emailAddress** | `string` | The email address of the contact. | Yes |  |









---
## SimpleElementView
Base view for many other views

### Methods
#### destroy()
Removes the element and executes any necessary clean-up.

### Events
#### destroy
Fires when the view is destroyed. This can be triggered by the app calling the destroy() method or by the InboxSDK internally calling the destroy() method.

### Properties

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **el** | `HTMLElement` | An element that you should modify and fill with your app's content. | Yes |  |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |










---
## DropdownView
This class represents a Dropdown returned by the SDK to the app in various places. The dropdown can be filled with your apps content, but it automatically handles dismissing the dropdown on certain user actions.

### Methods
#### setPlacementOptions(options)
This allows the position settings of the dropdown to be changed.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `PositionOptions` |  |

#### close()
Closes the dropdown

#### reposition()
Causes the dropdown element to recalculate its position relative to its button anchor. Use this method if you've changed the height of the dropdown while it is displayed.


### Events
#### destroy
Fires when this DropdownView instance is closed.

#### preautoclose
Fires when this DropdownView instance is about to close itself in response to a user clicking outside of the dropdown or pressing escape. This event may be canceled in order to stop the dropdown from closing itself. You may want to do this if you have created a "subdropdown" menu from this dropdown that isn't part of this DropdownView's element, and you don't want clicks on your subdropdown to cause this DropdownView to auto-close.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **type** | `string` | This will be "outsideInteraction" if the cause is a click or focus outside of the DropdownView, or "escape" if the cause is the user pressing the Escape key. |
| **cause** | `Event` | This is the DOM event that is triggering the DropdownView to auto-close. If `type` is "outsideInteraction", then you may want to check if your your subdropdown element contains the `cause.target` element. |
| **cancel** | `function` | Calling this method will prevent this DropdownView from closing itself. |


### Properties

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **el** | `HTMLElement` | The HTML element that is displayed in the dropdown. | Yes |  |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |











---
## PositionOptions
This object is used to control the positioning of an element (such as a drop-down menu) relative to an anchor element (the button that opened the drop-down menu). It is used by DropdownView.setPlacementOptions().


| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **position** | `string` | This value sets the prioritized position for the element relative to its anchor. It may be set to null, "top", "bottom", "left", or "right". The element will use this position unless it is not possible to do so while fitting the element on-screen. | No | `null` |
| **forcePosition** | `boolean` | If true, then the configured position value will be used even if it results in the element going off of the screen. | No | `false` |
| **hAlign** | `string` | This value sets the prioritized horizontal alignment mode for the element relative to its anchor. The horizontal alignment mode is used if the element is positioned in the top or bottom positions relative to the anchor, and causes the element to be moved horizontally in order to make a specific edge align. It may be set to null, "center", "left", or "right". The element will use this alignment unless it is not possible to do so while fitting the element on-screen. | No | `null` |
| **forceHAlign** | `boolean` | If true, then the configured hAlign value will be used even if it results in the element going off of the screen. | No | `false` |
| **vAlign** | `string` | This value sets the prioritized vertical alignment mode for the element relative to its anchor. The vertical alignment mode is used if the element is positioned in the left or right positions relative to the anchor, and causes the element to be moved vertically in order to make a specific edge align. It may be set to null, "center", "top", or "bottom". The element will use this alignment unless it is not possible to do so while fitting the element on-screen. | No | `null` |
| **forceVAlign** | `boolean` | If true, then the configured vAlign value will be used even if it results in the element going off of the screen. | No | `false` |
| **buffer** | `number` | This property specifies a number of pixels to be used as a buffer zone around the element. For screen-fitting purposes, the element will be treated as if it was this much larger in all directions, requiring it to be placed with the given amount of space between it, the anchor element, and the edges of the screen. The buffer option is useful if the element has children which are positioned such that they escape the boundaries of the element. Buffers do not affect alignment with the anchor element. | No | `0` |
| **topBuffer** | `number` | See buffer property. This specifies an additional buffer space only for the top edge. | No | `0` |
| **bottomBuffer** | `number` | See buffer property. This specifies an additional buffer space only for the bottom edge. | No | `0` |
| **leftBuffer** | `number` | See buffer property. This specifies an additional buffer space only for the left edge. | No | `0` |
| **rightBuffer** | `number` | See buffer property. This specifies an additional buffer space only for the right edge. | No | `0` |

