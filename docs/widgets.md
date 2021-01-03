---
id: widgets
title: Widgets
---
This namespace contains functions for creating various widgets that are styled to look and feel native to Gmail and Inbox.

### Namespace methods
#### showModalView(options)
This creates a ModalView and shows it. You can insert an arbitrary HTMLElement for content of the modal.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `ModalOptions` | The options to configure the returned ModalView. |

_Returns_ a `ModalView`

#### showMoleView(options)
This creates a MoleView and shows it. A mole view is a modal that is attached to the bottom of the viewport and has minimize and close buttons just like a compose view.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `MoleOptions` | The options to configure the returned MoleView. |

_Returns_ a `MoleView`

#### showDrawerView(options)
This creates a DrawerView and shows it. A drawer view is a panel that slides in from the right side of the screen, and it fades the rest of the screen out. By default, it has a title and a close button.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `DrawerOptions` | The options to configure the returned DrawerView. |

_Returns_ a `DrawerView`


---
## ModalOptions
The options used to configure a modal when calling Widgets.showModalView().

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **el** | `HTMLElement` | An HTMLElement representing the content you'd like to put inside the modal | Yes |  |
| **chrome** | `boolean` | Whether to show the close (X) button in the top right of the Modal as well as padding around your content. | No | `true` |
| **constrainTitleWidth** | `boolean` | If true, then the modal's width is determined solely by the content and not the title's width, and the title's text is line-wrapped if necessary. | No | `false` |
| **showCloseButton** | `boolean` | When chrome is set to false, this option controls whether a close (X) button should be added to the modal anyway. If chrome is set to true then this property doesn't do anything. | No | `false` |
| **title** | `string` | Text to show as the title of the modal | No | `''` |
| **buttons** | `Array<ModalButtonDescriptor>` | An array of buttons to add to the modal. The UI will be consistent with native Gmail/Inbox buttons. If none are provided, your el will occupy all of the modal. There may only be one button with a type of PRIMARY_ACTION, see ModalButtonDescriptor docs | No | `[]` |






---
## ModalButtonDescriptor
The options to use to configure buttons in a modal.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **text** | `string` | The text displayed in the button. | Yes |  |
| **title** | `string` | Text to show when the user hovers the mouse over the button. | Yes |  |
| **onClick** | `function` | This is called when the button is clicked. | Yes |  |
| **type** | `string` | There are currently two supported types of modal buttons, PRIMARY_ACTION and SECONDARY action. There may only be one PRIMARY_ACTION button per modal. | No | `SECONDARY_ACTION` |
| **color** | `string` | Color of the modal button. Only 'blue', 'red', or 'green' string values are valid. | No | `null` |
| **orderHint** | `number` | If multiple buttons are placed next to each other, then they will be ordered by this value. | No | `0` |






---
## MoleOptions
The options used to configure a modal when calling Widgets.showMoleView().

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **el** | `HTMLElement` | An HTMLElement representing the content to put inside the mole view. | Yes |  |
| **title** | `string` | Text that the modal should start with as the title. | No | `''` |
| **titleEl** | `HTMLElement` | An HTMLElement to place in the title bar instead of the title text. | No |  |
| **minimizedTitleEl** | `HTMLElement` | An HTMLElement to place in the title bar when the mole is minimized instead of the title text. | No |  |
| **className** | `string` | Extra CSS class names to add to the mole widget. | No | `''` |
| **titleButtons** | `Array<MoleButtonDescriptor>` | An array of buttons to add to the mole widget between the minimize and close buttons in the title bar. | No | `[]` |
| **chrome** | `boolean` | When chrome is set to false then the header of the mole is not rendered. This includes the title and mimize/close buttons. This means the app is totally responsible for the look and behavior of the mole, while the SDK is responsible only for the positioning. | No | `true` |






---
## MoleButtonDescriptor
The options to use to configure buttons in a mole.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | Text to show when the user hovers the mouse over the button. | Yes |  |
| **iconUrl** | `string` | URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL. The image will be displayed with a height and width of 24px. | Yes |  |
| **iconClass** | `string` | An optional class to apply to the icon. | No |  |
| **onClick** | `function` | This is called when the button is clicked. | Yes |  |







---
## DrawerOptions
The options used to configure a drawer when calling Widgets.showDrawerView().

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **el** | `HTMLElement` | An HTMLElement representing the content you'd like to put inside the drawer. Use the CSS property "flex-grow: 1" on it if you want it to expand to the available space in the drawer. | Yes |  |
| **chrome** | `boolean` | Whether to show the close (X) button and the title at the top of the drawer. | No | `true` |
| **title** | `string` | Text to show as the title of the drawer. Not shown if chrome is set to false. | No |  |
| **composeView** | `ComposeView` | You can optionally specify a ComposeView to associate with the DrawerView. The ComposeView will be interactable next to the DrawerView instead of being blocked. Using this option will animate the ComposeView into position along with the opening DrawerView unlike the DrawerView.associateComposeView() method. | No |  |
| **closeWithCompose** | `boolean` | If this is true, then if any associated ComposeView is closed or otherwise becomes inaccessible, then the DrawerView will close too. | No | `false` |
| **matchSidebarContentPanelWidth** | `boolean` | When true, uses a slimmer drawer that matches the width of the sidebar content panel. | No | `false` |







---
## ModalView
Represents a modal dialog.

### Methods
#### close()
This closes the modal. Does nothing if already closed.

### Events
#### destroy
Fires when this ModalView instance is closed.

### Properties

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |







---
## MoleView
Represents a mole view. These are modals attached to the bottom of the viewport, like a compose view.

### Methods
#### close()
This closes the mole view. Does nothing if already closed.

#### setTitle(text)
This allows the title to be changed.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **text** | `string` |  |

#### setMinimized(minimized)
This allows the minimize state to be changed.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **minimized** | `boolean` | If true, the mole view will be minimized. |

#### getMinimized()
_Returns_ a `boolean` of the minimize state


### Events
#### destroy
Fires when this MoleView instance is closed.


#### minimize
Fires when this MoleView instance is minimized.


#### restore
Fires when this MoleView instance is restored.


### Properties

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |






---
## DrawerView
Represents a drawer panel.

### Methods
#### close()
This closes the drawer. Does nothing if already closed.

#### associateComposeView(composeView, closeWithCompose)
This method allows a compose view to be associated with a pre-existing drawer. The compose view will be usable and shown next to the drawer instead of being hidden behind it.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **composeView** | `ComposeView` |  |
| **closeWithCompose** | `boolean` | Controls whether the DrawerView should close if the ComposeView is closed or otherwise becomes inaccessible. |

#### disassociateComposeView()
If there is a ComposeView currently associated, this will remove its association and visually place the ComposeView back behind the darkened DrawerView backdrop.

### Events
#### slideAnimationDone
Fires when this DrawerView instance is visible and in position.

#### closing
Fires when this DrawerView has started closing and animating to off-screen.

#### destroy
Fires when this DrawerView instance is closed and not visible.

#### preautoclose
Fires when this DrawerView instance is about to close itself in response to a user clicking outside of the drawer or pressing escape. This event may be canceled in order to stop the drawer from closing itself. You may want to do this if you want to show a confirmation dialog before the drawer closes.

| Event properties | Type | Description |
| :--- | :--- | :--- |
| **type** | `string` | This will be "outsideInteraction" if the cause is a click or focus outside of the DrawerView, or "escape" if the cause is the user pressing the Escape key. |
| **cause** | `Event` | This is the DOM event that is triggering the DrawerView to auto-close. |
| **cancel** | `function` | Calling this method will prevent this DrawerView from closing itself. |


### Properties

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |




