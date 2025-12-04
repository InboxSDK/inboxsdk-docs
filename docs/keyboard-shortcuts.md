---
title: Keyboard Shortcuts
---
This namespace allows you to setup keyboard shortcuts that your application can response to.

### Namespace methods
#### createShortcutHandle(keyboardShortcutDescriptor)
This method creates a shortcut handle. A shortcut handle can be used in various APIs in the SDK to keyboard enable them.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **keyboardShortcutDescriptor** | `KeyboardShortcutDescriptor` | details of the shortcut. |

_Returns_ a `KeyboardShortcutHandle`


---
## KeyboardShortcutHandle
This class registers a keyboard shortcut. It just defines the key combination itself but not what to when that shortcut is executed. In order to actually do something when this handle is executed, you need to pass this handle to other functions that accept KeyboardShortcutHandle like the toolbar button registration functions.

#### remove()
Deactivates the keyboard shortcut.





---
## KeyboardShortcutDescriptor
Describes a keyboard shortcut combination

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **chord** | `string` | The keys the user has to press to activate the shortcut. Simultaneous keypresses can be defined with "+". For multi-key chords like Gmail's, include a space between the keys, i.e. "g i". Syntax matches the combokeys library. | Yes |  |
| **description** | `string` | The description text that shows up in Gmail's keyboard shortcut help (when the user presses '?'). | Yes |  |
| **orderHint** | `integer` | Used to sort the shortcuts in the Gmail keyboard shortcut help (ascending). Shortcuts without orderHint will be shown at the end. | No | undefined |
