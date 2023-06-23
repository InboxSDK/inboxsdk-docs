---
title: AppMenu
---

This namespace contains functionality associated with adding app menu items to the app menu panel of Gmail. Typically, these app menu items are accessible by the user on the left side of the email client and include built in app menu items like the Mail and optionally either Chat, Meet, or both. If both Chat and Meet aren't enabled, the AppMenu will not be displayed.

This namespace allows you to add your own items to this App menu. Typically, these app menu items are useful to either place high level collapsible panels like the NavMenu or send users to different Routes that you have already registered providing navigation for your entire application.
The app menu is represented as a list of items. Each item can have either a CollapsiblePanel or click handler.
Items with CollapsiblePanels can also have accessories which provide primary actions like providing a "create new" action.

### Namespace methods

#### isShown()

Returns true if the app menu is visible. At time of writing, this typically means they have chose to enable Chat, Meet, or both.

#### addMenuItem(appMenuItemDescriptor)

Adds an app menu item to the app menu. Because the AppMenu may not be shown, this method expects `AppMenu.isShown` to be called first.

If the `AppMenu.isShown` returns `false` and this method is called, the SDK waits a bit for the AppMenu selector and then logs a warning.

If the `insertOrder` option is provided, the app menu item will be added at that index. If it is not, the SDK adds the app menu item after Gmail's default app menu icons.

| Parameters                | Type                    | Description                         |
| :------------------------ | :---------------------- | :---------------------------------- |
| **appMenuItemDescriptor** | `AppMenuItemDescriptor` | A descriptor for the app menu item. |

_Returns_ an `AppMenuItemView`

---

## AppMenuItemView

Each AppMenuItemView represents an entry in the app menu of Gmail. Typically the main action of a AppMenuItemView is performed when the user clicks or hovers on the app menu item.

### Methods

#### addCollapsiblePanel(appMenuItemPanelDescriptor)

Add a panel to an AppMenuItemView.

| Parameters                     | Type                         | Description                                      |
| :----------------------------- | :--------------------------- | :----------------------------------------------- |
| **appMenuItemPanelDescriptor** | `AppMenuItemPanelDescriptor` | A single descriptor for the app menu item panel. |

_Returns_ a `Promise<CollapsiblePanelView | undefined>`. The result is `undefined` if the SDK doesn't detect the AppMenu being shown.

#### update(menuItemDescriptor)

| Parameters                     | Type                         | Description                                     |
| :----------------------------- | :--------------------------- | :---------------------------------------------- |
| **appMenuItemPanelDescriptor** | `AppMenuItemPanelDescriptor` | The new descriptor for the app menu item panel. |

Updates the AppMenuItem's AppMenuItemDescriptor

#### remove()

Remove this AppMenuItemView from its parent

### Events

#### blur

Fires when this AppMenuItemView's menuItem has a `mouseenter` event triggered.

#### click

Fires when this AppMenuItemView's menuItem has a `click` event triggered.

#### hover

Fires when this AppMenuItemView's menuItem has a `mouseleave` event triggered.

#### destroy

Fires when this view is destroyed.

### Properties

| Property               | Type                    | Description                             | Required? | Default |
| :--------------------- | :---------------------- | :-------------------------------------- | :-------- | :------ |
| **menuItemDescriptor** | `AppMenuItemDescriptor` | The current configuration for the view. | Yes       |         |

---

## AppMenuItemDescriptor

This object represents the set of options to configure a new NavItemView.

| Property          | Type                                                  | Description                                                                                                                                 | Required? | Default                   |
| :---------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :-------- | :------------------------ |
| **name**          | `string`                                              | Name of the AppMenuItem to be used for display                                                                                              | Yes       |                           |
| **iconUrl**       | `{ darkTheme?: ThemedIcon; lightTheme?: ThemedIcon }` | The icon to be used for the AppMenuItem. If `darkTheme` doesn't have a value provided, `lightTheme` is used when the Gmail theme is 'dark'. | No        |                           |
| **className**     | `string`                                              | A custom class name added to the app menu item. Can be used to customize the AppMenuItem's appearance.                                      | No        |                           |
| **iconClassName** | `string`                                              | A custom class name added to the app menu item. Can be used to customize the AppMenuItem's icon element's appearance.                       | No        |                           |
| **insertIndex**   | `number`                                              | The desired index for placement of the AppMenuItem.                                                                                         | No        | The count of AppMenuItems |
| **onClick**       | `(e?: MouseEvent) => void`                            | A callback fired when the AppMenuItem is clicked                                                                                            | No        |                           |
| **onHover**       | `(e?: MouseEvent) => void`                            | A callback fired when the AppMenuItem or its CollapsiblePanel has a `mouseenter` event fired                                                | No        |
| **routeID**       | `string`                                              | The SDK route associated with the AppMenuItem. If the `routeID` option is provided, `isRouteActive` should be as well.                      | No        |                           |
| **routeParams**   | `Record<string, string>`                              | RouteParams provided to the SDK route ID when the AppMenuItem is clicked along with the `routeID`                                           | No        |                           |
| **isRouteActive** | `(routeView: RouteView) => boolean`                   | Whether AppMenuItem is active based on the SDK `RouteView`.                                                                                 | Yes       |                           |

---

## ThemedIcon

ThemedIcon allows you to add an icon and optionally have it reflect `active` or `default` states for the ActiveMenuIcon. ThemedIcons can also just be strings if the same icon is preferred by both `active` and `default`.

| Property    | Type     | Description                                                    | Required? | Default |
| :---------- | :------- | :------------------------------------------------------------- | :-------- | :------ |
| **active**  | `string` | The AppMenuItem icon when the AppMenuItem is currently active. | Yes       |         |
| **default** | `string` | The AppMenuItem icon when a different AppMenuItem is active.   | Yes       |         |

---

## AppMenuItemPanelDescriptor

The AppMenuItemPanelDescriptor allows you to add a CollapsiblePanel right next your AppMenuItem which lets the user take a primary or second action.

| Property          | Type                            | Description                                                                                                 | Required? | Default |
| :---------------- | :------------------------------ | :---------------------------------------------------------------------------------------------------------- | :-------- | :------ |
| **className**     | `string`                        | The custom class added to CollapsiblePanel.                                                                 | No        |         |
| **loadingIcon**   | `string`                        | In the form of HTML as a string. If this option is provided, the CollapsiblePanel defaults to loading=true. | No        |         |
| **primaryButton** | `AppMenuItemPanelPrimaryButton` | Configuration for the CollapsiblePanel's optional primary action button.                                    | No        |         |

---

## AppMenuItemPanelPrimaryButton

The primary action for a CollapsiblePanel.

| Property    | Type                                                                                    | Description                                                    | Required? | Default                                       |
| :---------- | :-------------------------------------------------------------------------------------- | :------------------------------------------------------------- | :-------- | :-------------------------------------------- |
| **name**    | `string`                                                                                | The display name of the primary action button                  | Yes       |                                               |
| **onClick** | `(e: MouseEvent) => void`                                                               | The button's click handler                                     | Yes       |                                               |
| **iconUrl** | `{darkTheme?: PanelPrimaryButtonThemedIcon;lightTheme?: PanelPrimaryButtonThemedIcon;}` | Icon URLs to display based on the button being hovered or not. | No        | The Gmail default icon is a multicolored plus |

---

## CollapsiblePanelView

Each AppMenuItem can have a CollapsiblePanelView.

Typically the main action of a CollapsiblePanelView is performed when the user clicks or hovers on the app menu item.

### Methods

#### setLoading(loading: boolean)

Updates the loading property of the CollapsiblePanelView.

#### remove()

Remove this CollapsiblePanelView from its parent

#### addNavItem(navItemDescriptor)

| Parameters            | Type                              | Description                                                             |
| :-------------------- | :-------------------------------- | :---------------------------------------------------------------------- |
| **navItemDescriptor** | CollapsiblePanelNavItemDescriptor | Add a single or Kefir.Observable nav menu item to the CollapsiblePanel. |

##### CollapsiblePanelNavItemDescriptor

CollapsiblePanelNavItemDescriptor is represented by the following TS types `NavItemDescriptor | Kefir.Observable<NavItemDescriptor, any>`

### Events

#### blur

Fires when this CollapsiblePanelView's panel has a `mouseenter` event triggered.

#### destroy

Fires when this view is destroyed.

### Properties

| Property            | Type                         | Description                                                           | Required? | Default                                                                 |
| :------------------ | :--------------------------- | :-------------------------------------------------------------------- | :-------- | :---------------------------------------------------------------------- |
| **loading**         | `boolean`                    | Whether the `AppMenuItemPanelDescriptor['loadingIcon']` is displayed. | No        | Defaults to true if `AppMenuItemPanelDescriptor['loadingIcon']` is set. |
| **panelDescriptor** | `AppMenuItemPanelDescriptor` | The current configuration for the CollapsiblePanel                    | Yes       |                                                                         |
