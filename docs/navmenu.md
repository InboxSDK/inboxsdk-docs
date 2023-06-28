---
title: NavMenu
---
This namespace contains functionality associated with adding navigation items to the navigation menu of Gmail. Typically, these navigation links are accessible by the user on the left side of the email client and include built in navigation items like the Inbox, Sent Mail or Drafts links.

This namespace allows you to add your own items to this Navigation menu. Typically, these navigation items are useful to send users to different Routes that you have already registered providing navigation for your entire application.
The navigation menu is represented as a tree structure of items. Each item can have 0 or more children and there are several options to configure the appearance of the items.
Items can also have accessories which provide secondary actions like opening a dropdown (like Gmails labels) or providing a "create new" action. There are several predefined accesories, see CreateAccessoryDescriptor, IconButtonAccessoryDescriptor or DropdownButtonAccessoryDescriptor.

### Namespace methods
#### addNavItem(navItemDescriptor)
Adds a navigation item to the root of the navigation menu. Navigation items from your app are grouped together where possible but ultimately the SDK optimizes for the best user experience when displaying navigation items.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **navItemDescriptor** | `NavItemDescriptor` | A single descriptor for the nav item or stream of NavItemDescriptors. |

_Returns_ a `NavItemView`


---
## NavItemView
NavItemsViews are the elements placed inside a NavMenu. Each NavItemView represents an entry in the left navigation of Gmail. These NavItemViews can be nested.

Typically the main action of a NavItemView is performed when the user clicks on the main text. However, you can also provide accessories which are secondary actions which typically appear on the right side of the NavItemView but may be rendered in other ways.
For nested NavItemViews, the SDK will handle collapsing and expanding children depending on user input.

### Methods
#### addNavItem(navItemDescriptor)
Add a nested child NavItemView

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **navItemDescriptor** | `NavItemDescriptor` | A single descriptor for the nav item or stream of NavItemDescriptors. |

_Returns_ a `NavItemView`

#### remove()
Remove this NavItemView from its parent

#### isCollapsed()
_Returns_ a `boolean` whether the NavItemView is currently collapsed and hiding its children

#### setCollapsed(collapseValue)
Collapse or uncollapse this NavItemView

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **collapseValue** | `boolean` | whether to collapse or uncollapse |

#### getElement()
_Returns_ the underlying HTMLElement for the `NavItemView`.


### Events
#### destroy
Fires when this view is destroyed.

### Properties
| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |




---
## NavItemDescriptor
This object represents the set of options to configure a new NavItemView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **name** | `string` | Name of the NavItem to be used for display | Yes |  |
| **key** | `string` | Unique identifier for the nav item used for remembering collapse state between sessions. | No | value of name |
| **routeID** | `string` | The ID of the route to navigate to when the NavItemView is clicked on. | No | `null` |
| **routeParams** | `Object` | The parameters of the route being navigated to when the NavItemView is clicked on. | No | `null` |
| **onClick** | `function` | A function that will be called when the NavItemView is clicked. Passed a single event object parameter which includes a preventDefault() function. If the NavItemView has a routeID, calling preventDefault() will prevent navigation to the given route. | No | `null` |
| **orderHint** | `integer` | Used to specify the order in which your NavItemViews should be relative to each other | No | `Number.MAX_SAFE_INTEGER` |
| **accessory** | `CreateAccessoryDescriptor` or `IconButtonAccessoryDescriptor` or `DropdownButtonAccessoryDescriptor` | There are several "accessories" which can provide secondary actions for NavItemViews | No | `null` |
| **iconUrl** | `string` | An optional url to an icon to display an icon alongside the name of the NavItemView | No | `null` |
| **iconClass** | `string` | An optional class to apply to the icon. | No | `null` |
| **iconElement** | `HTMLElement` | An optional icon element to use as the icon. This property can't be used with iconUrl or iconClass. | No | `null` |
| **backgroundColor** | `string` | If you provide none of the iconUrl, iconElement, iconClass properties, then a colored circle will be displayed next to the NavItemView that has its color set by this property, or gray by default. | No | `null` |
| **type** | `NavItemTypes` | The nav item type affects how the item is displayed. | No | `NAVIGATION` |




---
## CreateAccessoryDescriptor
The CreateAccessoryDescriptor allows you to add an action to allow the user to create a new child of this item.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **type** | `string` | For CreateAccessoryDescriptors this should always be set to CREATE | Yes |  |
| **onClick** | `function` | Callback for when the "Create New" accessory is pressed. | Yes |  |




---
## IconButtonAccessoryDescriptor
The IconButtonAccessoryDescriptor allows you to add an icon button right next your NavItem which lets the user take a secondary action

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **type** | `string` | For IconButtonAccessoryDescriptors this should always be set to ICON_BUTTON | Yes |  |
| **onClick** | `function` | Callback for when the IconButton accessory is pressed. | Yes |  |
| **iconUrl** | `string` | A URL for the icon to be displayed in the button. | Yes |  |
| **iconClass** | `string` | An optional class to add to the icon. | No | `null` |




---
## DropdownButtonAccessoryDescriptor
The DropdownButtonAccessoryDescriptor allows you to add a dropdown right next your NavItemView

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **type** | `string` | For DropdownButtonAccessoryDescriptors this should always be set to DROPDOWN_BUTTON | Yes |  |
| **onClick** | `function(event)` | A callback when the dropdown button is pressed. The event object passed to you has a dropdown property which you can fill your content with. | Yes |  |




## Enums and Constants
### NavItemTypes
| Enum | Description |
| :--- | :--- |
| **NAVIGATION** | standard nav item for navigating |
| **LINK** | nav item that looks like a link |