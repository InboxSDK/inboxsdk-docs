---
id: toolbars
title: Toolbars
---
The Toolbar namespace allows you to add your own buttons and actions to various toolbars in Gmail or Inbox. Toolbars appear in various Lists, ThreadViews and MessageViews. Within a toolbar, you have control over the placement of your buttons.

Toolbar buttons are typically used to take actions on the email(s) that the toolbar applies to. Do not use this API to add buttons that don't take a direct action on the selected email.
Since toolbar buttons only apply to emails, they will ONLY appear when an email is selected or you are on a ThreadView.

### Namespace methods
#### registerThreadButton(toolbarButtonDescriptor)
Registers a toolbar button to appear on thread rows, above the thread list when some rows are checked, and above threads.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **toolbarButtonDescriptor** | `ToolbarButtonDescriptor` | The options for the button. |

_Returns_ a `function` which removes the button registration.

#### registerToolbarButtonForList(toolbarButtonDescriptor)
(This function is deprecated in favor of registerThreadButton.) Registers a toolbar button to appear above any list page such as the Inbox or Sent Mail.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **toolbarButtonDescriptor** | `LegacyToolbarButtonDescriptor` | The options for the button. |

_Returns_ a `function` which removes the button registration.

#### registerToolbarButtonForThreadView(toolbarButtonDescriptor)
(This function is deprecated in favor of registerThreadButton.) Registers a toolbar button to appear when viewing a thread.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **toolbarButtonDescriptor** | `LegacyToolbarButtonDescriptor` | The options for the button. |

_Returns_ a `function` which removes the button registration.

#### addToolbarButtonForApp(appToolbarButtonDescriptor)
Adds a button and dropdown to the "Global Toolbar". This is typically used to show a dropdown with general information about your application. In Gmail this refers to the navigation area at the top right of the window.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **appToolbarButtonDescriptor** | `AppToolbarButtonDescriptor` | The options for the app toolbar button |

_Returns_ a `AppToolbarButtonView`

## ToolbarButtonDescriptor
This type is passed into the Toolbars.registerThreadButton() to configure the toolbar button shown.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | Text to show when the user hovers the mouse over the button, or to show on the button when the user has the Gmail "Button labels" setting set to "Text". | Yes |  |
| **iconUrl** | `string` | URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL. Either this property, iconClass, or both must be specified. | No | `null` |
| **iconClass** | `string` | An optional class to apply to the icon. Either this property, iconUrl, or both must be specified. | No | `null` |
| **positions** | `Array<string>` | An optional array of strings specifying the locations the button will be displayed in. The default value of null is treated as equal to the array of all of the possible values: "THREAD", "ROW", and "LIST". | No | `null` |
| **threadSection** | `SectionNames` | The section of the toolbar to place the button when placing it on a thread. Currently this option only has an effect in Gmail. | No | `'METADATA_STATE'` |
| **listSection** | `SectionNames` | The section of the toolbar to place the button when placing it above a thread list. Currently this option only has an effect in Gmail. | No | `'METADATA_STATE'` |
| **onClick** | `function(event)` | This is called when the button is clicked, and gets passed an event object. The event object will have a position property set to 'THREAD', 'ROW', or 'LIST' specifying where the button was that was interacted with. The event object will have selectedThreadViews (ThreadView[]) and selectedThreadRowViews (ThreadRowView[]) properties containing the thread or thread row objects that this button was activated on. The event object will have a dropdown (DropdownView) property if the hasDropdown property was set to true on the button descriptor. | Yes |  |
| **hasDropdown** | `boolean` | If true, the button will open a dropdown menu above it, and the event object will have a dropdown property of type DropdownView that allows the dropdown to be customized when opened. | No | `false` |
| **hideFor** | `function(RouteView)` | A function that determines when this toolbar button should be hidden. You may want to hide the toolbar button on certain Routes or in certain conditions. The function should return true when the toolbar button should be hidden. Your function is passed a RouteView. | No | `null` |
| **orderHint** | `number` | If multiple buttons are placed next to each other, then they will be ordered by this value. | No | `0` |
| **keyboardShortcutHandle** | `keyboardShortcutHandle` | The keyboard shortcut that will activate this button. This is currently only supported in Gmail. | No | `null` |



## LegacyToolbarButtonDescriptor
This type is passed into the Toolbars.registerToolbarButtonForList() and Toolbars.registerToolbarButtonForThreadView() method as a way to configure the toolbar button shown.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | Text to show when the user hovers the mouse over the button, or to show on the button when the user has the Gmail "Button labels" setting set to "Text". | Yes |  |
| **iconUrl** | `string` | URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL. Either this property, iconClass, or both must be specified. | No | `null` |
| **iconClass** | `string` | An optional class to apply to the icon. Either this property, iconUrl, or both must be specified. | No | `null` |
| **section** | `SectionNames` | The section of the toolbar to place the button. | Yes |  |
| **onClick** | `function(event)` | This is called when the button is clicked, and gets passed an event object. If this was registered with Toolbars.registerToolbarButtonForList(), then the event object will have a selectedThreadRowViews (ThreadRowView[]) property and a threadRowViews (ThreadRowView[]) property. If this was registered with Toolbars.registerToolbarButtonForThreadView(), then the event object will have a threadView (ThreadView) property. In both cases the event object will optionally have a dropdown (DropdownView) property if you set the hasDropdown property to true on the descriptor | Yes |  |
| **hasDropdown** | `boolean` | If true, the button will open a dropdown menu above it, and the event object will have a dropdown property of type DropdownView that allows the dropdown to be customized when opened. | No | `false` |
| **hideFor** | `function(RouteView)` | A function that determines when this toolbar button should be hidden. You may want to hide the toolbar button on certain Routes or in certain conditions. The function should return true when the toolbar button should be hidden. Your function is passed a RouteView. | No | `null` |
| **keyboardShortcutHandle** | `keyboardShortcutHandle` | The keyboard shortcut that will activate this button. | No | `null` |


## AppToolbarButtonDescriptor
This type is passed into the Toolbars.addToolbarButtonForApp() method as a way to configure the toolbar button shown.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | Text to show on the button. | Yes |  |
| **titleClass** | `string` | An optional class to apply to the title. | No | `null` |
| **iconUrl** | `string` | URL for the icon to show on the button. Should be a local extension file URL or a HTTPS URL. | Yes |  |
| **iconClass** | `string` | An optional class to apply to the icon. | No | `null` |
| **onClick** | `function(event)` | This is called when the button is clicked, and gets passed an event object. The event object will have a dropdown (DropdownView) property. | Yes |  |
| **arrowColor** | `string` | The color to use for the top arrow of the dropdown. Useful if you want the contents of your dropdown to have a specific background color | No | `null` |


## AppToolbarButtonView
Object that represents an app toolbar button that has been already added to the top navigation area of Gmail. This class is returned by Toolbars.addToolbarButtonForApp().

### Methods
#### open()
Open the dropdown for the app toolbar button

#### close()
Close the dropdown for the app toolbar button

#### remove()
Remove the app toolbar button from Gmail


### Events
#### destroy
Fires when this view has been removed.

### Properties

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |


## Enums and Constants
### SectionNames
The different toolbar sections that exist

| Enum | Description |
| :--- | :--- |
| **INBOX_STATE** | The section is for buttons that move emails out of or into the users inbox. |
| **COLLAPSED** | This section is for buttons that alter metadata of emails. Common examples are labeling or moving an email. |
| **METADATA_STATE** | This sectiom is used for other actions. Typically these will be placed in the "More" menu. |
