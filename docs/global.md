---
title: Global
---
This namespace contains methods and types related to the UI Elements that are available Globally in Gmail.

### Namespace methods
#### addSidebarContentPanel(contentPanelDescriptor)
Adds an icon in the "global app" icon area on the right side of Gmail. When the user clicks the icon the global sidebar will be open with the el displayed.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **contentPanelDescriptor** | `ContentPanelDescriptor` | The details of the content panel to add to the global sidebar. |

_Returns_ a `Promise<ContentPanelView>`

#### addSupportItem(supportItemDescriptor)
Adds a support item right in the Gmail support menu.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **supportItemDescriptor** | `SupportItemDescriptor` | The details of the support item to be added to the Gmail support menu. |

_Returns_ a `SupportItemView`

---
## SupportItemView
Object that represents a Gmail support item in the support menu. This class is returned by Global.addSupportItem().
### Methods
#### destroy()
Remove the support view item from support menu


---
## SupportItemDescriptor
This type is accepted by the Global.addSupportItem() method to insert a SupportItemView for a Gmail support item. A support item view allows you adding an element that is used for displaying and a callback function to call when the user clicks on the item. Support item view also supports arrow key up/down navigation same as other Gmail support items in the menu and on Enter key press down it fires the onClick call back.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **element** | `HTMLElement` | The actual HTMLElement of the support item. | Yes |  |
| **onClick** | `function(event)` | The callback when the item is clicked. | Yes |  |
