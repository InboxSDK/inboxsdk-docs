---
title: Router
---
This namespace contains functionality associated with creating your own content inside Gmail. It allows you to define "Routes" which define a full page of content and an associated URL space for which they are active. You can think of routes as different pages in your application. Gmail already have a few routes built in (Inbox, Sent, Drafts, etc). This namespace allows you to define your own as well as listen in on the built in routes being navigated to.

This is typically used when you want to create content to fill the main content area of Gmail.
Every route has a URL associated with it and can have optional parameters. However, you never construct these URL's manually. The SDK will take care of creating a URL that will work in Gmail for your Route. Since these URL's may change due to implementations of Gmail, you should always create new links when trying to set URL on elements or simply use the goto function which naviagtes to the created link automatically.
Using the handleX family of methods, you can specify which routes your application can handle. You will be called back with and instance of a RouteView or similar when the user navigates to a route you've declared you can handle. For custom routes, you'll typically add your own content and for built in routes, you'll typically modify the existing content.
Route ID's are path like strings with named parameters, for example: "myroute/:someParamMyRouteNeeds".

### Namespace methods
#### createLink(routeID, params)
Get a URL that can be used to navigate to a view. You'll typically want to use this to set the href of an element or similar. Returns the encoded URL string.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **routeID** | `string` | A route specifying where the link should navigate the user to. This should either be a routeID registered with Router.handleCustomRoute or Router.handleCustomListRoute, or a value from Router.NativeRouteIDs. |
| **params** | `Object` | an object containing the parameters that will be encoded in the link and decoded when the user subsequently visits the route. Handlers for the specified routeID will receive a copy of this object. This object must contain only simple key value pairs with no nested arrays/objects. |

_Returns_ a `string`

#### goto(routeID, params)
Change the route to be the one with the given ID and have the given parameters.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **routeID** | `string` | A route specifying where the link should navigate the user to. This should either be a routeID registered with Router.handleCustomRoute or Router.handleCustomListRoute, a value from Router.NativeRouteIDs, or a value previously returned by Router.createLink. If it's a value previously returned by Router.createLink, then the params argument must be omitted. |
| **params** | `Object` | an object containing the parameters that will be encoded in the link and decoded when the user subsequently visits the route. Handlers for the specified routeID will receive a copy of this object. This object must contain only simple key value pairs with no nested arrays/objects. |

_Returns_ a `Promise<void>`

#### handleCustomRoute(routeID, handler)
Registers a handler (callback) to be called when the user navigates to a custom route which matches the routeID you provide. Use this to create your own routes (pages) with your own custom content. Your callback will be passed an instance of a CustomRouteView whose contents you may modify.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **routeID** | `string` | which route this handler is registering for |
| **handler** | `function(CustomRouteView)` | The callback to call when the route changes to a custom route matching the provided routeID |

_Returns_ a `function` which removes the handler registration.

#### handleAllRoutes(handler)
Registers a handler (callback) to be called when the user navigates to any route (both customs and built in routes). Because this can apply to any route, your callback will be given only a generic RouteView. This is typically used when you want to monitor for page changes but don't necessarily need to modify the page. 

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(RouteView)` | The callback to call when the route changes |

_Returns_ a `function` which removes the handler registration.

#### handleListRoute(routeID, handler)
Registers a handler (callback) to be called when the user navigates to a list route which matches the routeID you provide. Gmail have several built in routes which are "Lists". These include routes like Inbox, All Mail, Sent, Drafts, etc. You'll typically use this to modify Gmail's built in List routes.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **routeID** | `NativeListRouteIDs` | which list route this handler is registering for. |
| **handler** | `function(ListRouteView)` | The callback to call when the route changes to a list route matching the routeId. |

_Returns_ a `function` which removes the handler registration.

#### handleCustomListRoute(routeID, handler)
Used to create a custom view that shows a list of threads. When the user navigates to the given routeID, the handler function will be called. The handler function will be passed the starting offset (if the user sees 50 threads per page and is on page 2, then the offset will be 50), and a maximum number of threads to return. It must return a CustomListDescriptor, or a promise which resolves to one.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **routeID** | `string` | Which route this handler is registering for. |
| **handler** | `function(offset, max)` | Passed a page offset and a maximum number of threads to return. Must return a CustomListDescriptor, or a promise which resolves to one. |

_Returns_ a `function` which removes the handler registration.

#### getCurrentRouteView()
_Returns_ a `RouteView` of the current route view

---
## RouteView
RouteViews represent pages within Gmail that a user can navigate to. RouteViews can be "custom", those that the application developer registers, or they can be "builtin" which are those that the email client natively supports like "Sent", "Drafts", or "Inbox"

This class mostly just gives you metadata about the route, most of the functionality to modify the route are defined in subclasses like ListRouteView and CustomRouteView, which you get by handling those types specifically in the Router.

### Methods
#### getRouteID()
_Returns_ a `string` of the ID of the RouteView. This is the same routeID that you give Router.goto() or Router.createLink(). This will be a value from NativeRouteIDs.

#### getRouteType()
_Returns_ a `string` of the type of the route. This will be one of the values in RouteTypes.

#### getParams()
_Returns_ an `Object` of the URL parameters of this RouteView instance. This will be an object where the properties are strings.


### Events
#### destroy
Fires when this RouteView instance is navigated away from

### Properties
| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |





---
## CustomRouteView
Extends `RouteView`. CustomRouteViews represent your own custom pages of content.
### Methods
#### getElement()
_Returns_ a `HTMLElement` of the element representing the content area of this CustomRouteView. You should inject your content into this element.



---
## ListRouteView
Extends `RouteView`. ListRouteViews represent pages within Gmail that show a list of emails. Typical examples are the Inbox, Sent Mail, Drafts, etc. However, views like the Conversation view or Settings would *not* be a ListRouteView.

### Methods
#### addCollapsibleSection(options)
Adds a collapsible section to the top of the page.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `SectionDescriptor` or `Stream(SectionDescriptor)` | configuration options of the CollapsibleSectionView |

_Returns_ a `CollapsibleSectionView`

#### addSection(options)
Adds a non-collapsible section to the top of the page.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `SectionDescriptor` or `Stream(SectionDescriptor)` | configuration options of the SectionView |

_Returns_ a `SectionView`

#### refresh()
Simulates a click on the Gmail thread list refresh button.




---
## SectionView
SectionViews allow you to display additional content on ListRouteViews. They are typically rendered as additional content above the list of threads below. The visual style is similar to that of multiple inbox sections used in native Gmail. Note that the rendering may vary slightly depending on the actual ListRouteView that the SectionView is rendered in. For example, SectionViews rendered on search results pages use different header styles to match Gmail's style more accurately.

You can either render rows (that are visually similar to Gmail rows) or custom content in your SectionView. Until content is provided, the SectionView will simply display a "Loading..." indicator. See ListRouteView.addSection for more information.
### Methods
#### remove()
Removes this section from the current Route.

### Events
#### destroy
Fires when the SectionView is no longer visible.

### Properties

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **destroyed** | `boolean` | This property is set to true once the view is destroyed. | Yes |  |




---
## CollapsibleSectionView
Extends `SectionView`. CollapsibleSectionViews allow you to display additional content on ListRouteViews. They are typically rendered as additional content above the list of threads below. The visual style is similar to that of multiple inbox sections used in native Gmail. Note that the rendering may vary slightly depending on the actual ListRouteView that the CollapsibleSectionView is rendered in. For example, CollapsibleSectionViews rendered on search results pages use different header styles to match Gmail's style more accurately.

You can either render rows (that are visually similar to Gmail rows) or custom content in your CollapsibleSectionView. Until content is provided, the SectionView will simply display a "Loading..." indicator. See ListRouteView.addCollapsibleSection for more information.
### Methods
#### setCollapsed(value)

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **value** | `boolean` | Whether to collapse (minimize) the section view. |

#### remove()
Removes this section from the current Route

### Events
#### destroy
Fires when the CollapsibleSectionView is no longer visible.

#### expanded
Fires when the CollapsibleSectionView is expanded.

#### collapsed
Fires when the CollapsibleSectionView is collapsed.





---
## CustomListDescriptor
This type is returned from the handler function passed to Router.handleCustomListRoute() as a way to configure the custom list route.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **threads** | `Array<(ThreadDescriptor|String)>` | An array of threads to display in the custom list view. Each thread may be in the form of a ThreadDescriptor object or a string that is: 1. A Gmail Thread ID. 2. A message's Message-ID header (which must start with "<" and end with ">"). | Yes |  |
| **total** | `Number` | The total number of threads in the custom list view. Note that this is different from the number of threads currently shown on the page (e.g. there may only be 50 threads currently shown on the page but 150 total threads in the list, in this case total would be 150). If you won't know the total number until you've reached the end of the list (e.g. you're fetching data from a search API where calculating a total is expensive), omit this property and use hasMore instead. | No | `null` |
| **hasMore** | `Boolean` | A boolean representing whether or not there are more threads to be shown after the currently shown threads. Use this when you won't know the total number of threads until you've reached the end of the list. If you already know the total number of threads in the list (not just the ones currently shown), omit this proeprty and use total instead. | No | `null` |



---
## ThreadDescriptor
An object used to describe a specific thread (e.g. when creating a custom list via Router.handleCustomListRoute()). At least one property must be present to identify a thread.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **rfcMessageId** | `String` | The value of a message's Message-ID header (which must start with "<" and end with ">"). | No | `null` |
| **gmailThreadId** | `String` | The Gmail thread ID of a message. | No | `null` |



---
## SectionDescriptor
The properties required to create a SectionView or CollapsibleSectionView.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | Main title | Yes |  |
| **subtitle** | `string` | Subtitle | No | `null` |
| **titleLinkText** | `string` | Link to display in the summary area of the SectionView. Typically page counts are displayed here. | No | `null` |
| **onTitleLinkClick** | `function` | A function to call when the title link has been clicked. | No | `null` |
| **hasDropdown** | `boolean` | Whether to display a dropdown arrow for more options on the collapsible section. | No | `false` |
| **onDropdownClick** | `function(event)` | A function to call when the dropdown is opened. Your function is passed an event object with a single dropdown property. | No | `null` |
| **tableRows** | `Array<RowDescriptor>` | The rows that should be shown. | No | `null` |
| **contentElement** | `HTMLElement` | An arbitrary HTML element to place above the table rows but below the title. | No | `null` |
| **footerLinkText** | `string` | A link to place in the footer of the SectionView. | No | `null` |
| **onFooterLinkClick** | `function(event)` | A function to call when the link in the footer is clicked. | No | `null` |



---
## RowDescriptor
Represents the a single row to render in SectionViews and CollapsibleSectionViews

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **title** | `string` | First textual column | Yes |  |
| **body** | `string` | Second textual column | Yes |  |
| **shortDetailText** | `string` | Last text right-aligned. Often used for dates. | Yes |  |
| **isRead** | `string` | Whether the row should be rendered as read or unread similar to Gmail styles. | Yes |  |
| **labels** | `Array<LabelDescriptor>` | Any labels that should be rendered. | Yes |  |
| **iconHtml** | `string` | An optional HTML to an icon to display on the left side of the row | No | `null` |
| **iconUrl** | `string` | An optional url to an icon to display on the left side of the row | No | `null` |
| **iconClass** | `string` | An optional class to apply to the icon. | No | `null` |
| **routeID** | `string` | The name of the route to navigate to when the row is clicked on. | No | `null` |
| **routeParams** | `Array<string>` | The parameters of the route being navigated to when the row is clicked on. | No | `null` |
| **onClick** | `function` | Callback for when the row is clicked on. | No | `null` |


---
## Enums and Constants
### NativeRouteIDs
All the different route types that exist in Gmail

| Enum | Description |
| :--- | :--- |
| **INBOX** | inbox list, Permissible Route Params: page (optional) |
| **ALL_MAIL** | all mail list, Permissible Route Params: page (optional) |
| **SENT** | sent list, Permissible Route Params: page (optional) |
| **STARRED** | starred list, Permissible Route Params: page (optional) |
| **DRAFTS** | drafts list, Permissible Route Params: page (optional) |
| **LABEL** | any label list, Permissible Route Params: labelName, page (optional), |
| **TRASH** | trash list, Permissible Route Params: page (optional) |
| **SPAM** | spam list, Permissible Route Params: page (optional) |
| **IMPORTANT** | built in list of important emails, Permissible Route Params: page (optional) |
| **SEARCH** | any search results page, Permissible Route Params: query, page (optional) |
| **THREAD** | single conversation view, Permissible Route Params: threadID |
| **CHATS** | list of chats, Permissible Route Params: page (optional) |
| **CHAT** | single chat view, Permissible Route Params: chatID |
| **CONTACTS** | google contacts view, Permissible Route Params: page (optional) |
| **CONTACT** | single google contact view, Permissible Route Params: contactID |
| **SETTINGS** | the settings view, Permissible Route Params: section |
| **ANY_LIST** | this refers to any of the above lists |






### NativeListRouteIDs
The different list routes natively available in Gmail. List routes display lists of threads or messages or other types.

| Enum | Description |
| :--- | :--- |
| **INBOX** | inbox list, Permissible Route Params: page (optional) |
| **ALL_MAIL** | all mail list, Permissible Route Params: page (optional) |
| **SENT** | sent list, Permissible Route Params: page (optional) |
| **STARRED** | starred list, Permissible Route Params: page (optional) |
| **DRAFTS** | drafts list, Permissible Route Params: page (optional) |
| **LABEL** | any label list, Permissible Route Params: labelName, page (optional), |
| **TRASH** | trash list, Permissible Route Params: page (optional) |
| **SPAM** | spam list, Permissible Route Params: page (optional) |
| **IMPORTANT** | built in list of important emails, Permissible Route Params: page (optional) |
| **SEARCH** | any search results page, Permissible Route Params: query, page (optional) |
| **ANY_LIST** | This refers to any of the above lists |

### RouteTypes
The different route types that exist

| Enum | Description |
| :--- | :--- |
| **LIST** | a list of threads or messages |
| **THREAD** | a single thread or message |
| **SETTINGS** | a Gmail settings page |
| **CHAT** | a single chat history |
| **CUSTOM** | a custom route created by any app |
| **UNKNOWN** | an unknown route |