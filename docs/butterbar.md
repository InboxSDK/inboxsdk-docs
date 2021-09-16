---
id: butterbar
title: ButterBar
---
This namespace contains methods for showing informative messages to the user. In Gmail this is a small yellow "butter bar" overlay near the top.

### Namespace methods
#### showMessage(options)
Spawns a new message.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `MessageDescriptor` | message options |

_Returns_ an `Object` that contains a destroy method that can be called to remove the message.

#### showLoading(options)
Spawns a "Loading..." message that stays until it's destroyed.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `LoadingMessageDescriptor` | message options |

_Returns_ an `Object` which has a destroy method that can be called to remove the message.

#### showError(options)
Spawns a new error message. Error messages also have a default priority of 100 instead of 0 (as in the case of ButterBar.showMessage).

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `MessageDescriptor` | message options |

_Returns_ an `Object` which contains a destroy method that can be called to remove the message. 

#### showSaving(options)
Spawns a "Saving..." message that stays until it's removed. 

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **options** | `SavingMessageDescriptor` | message options |

_Returns_ an `Object` which has a resolve method that can be called to show a "Saved" confirmation message, and a reject method that can be called to remove the message immediately with no confirmation.

#### hideMessage(messageKey)
Hides all messages created by the same app with the given messageKey.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **messageKey** | `Object` | the key of the message to hide |


#### hideGmailMessage()
Hides any messages currently displayed by Gmail.


--
## MessageDescriptor
This type is used to describe a message for ButterBar to show.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **text** | `string` | Text to show. Either the text property or the html property must be passed. | No |  |
| **html** | `string` | String to use as the innerHTML of the ButterBar instead of using the given text. | No |  |
| **el** | `HTMLElement` | HTML element to insert into the ButterBar instead of using the given text. | No |  |
| **className** | `string` | String to add as a css class to the ButterBar container element. | No |  |
| **priority** | `number` | Messages with lower priorities won't interrupt a currently displayed message. | No | `0` |
| **time** | `number` | Number of milliseconds the message is displayed before going away on its own. | No | `15000` |
| **hideOnViewChanged** | `boolean` | If true, the message will immediately disappear if the user navigates to another route view. | No | `true` |
| **persistent** | `boolean` | Whether this message should re-appear after being interrupted by another message. | No | `false` |
| **messageKey** | `Object` | If a new message has the same messageKey as the current message, then the current message will always be destroyed, regardless of its priority. | No |  |
| **buttons** | `Array<MessageButtonDescriptor>` | An array of buttons to support functionality in addition to the preview functionality | No |  |




--
## MessageButtonDescriptor
This type is used to describe the buttons for ButterBar to show.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **onClick** | `function(event)` | This is called when a button is clicked and gets passed an event object. | Yes |  |
| **title** | `string` | Text of the button. | Yes |  |




--
## LoadingMessageDescriptor
This type is used to describe the messages for ButterBar.showLoading to show

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **text** | `string` | Text shown while the loading is ongoing. | No | `'Loading...'` |
| **html** | `string` | String to use as the innerHTML of the ButterBar instead of using the given text. | No |  |
| **el** | `HTMLElement` | HTML element to insert into the ButterBar instead of using the given text. | No |  |
| **className** | `string` | String to add as a css class to the ButterBar container element. | No |  |
| **priority** | `number` | Messages with lower priorities won't interrupt a currently displayed message. Loading messages default to a lower priority than other message types. | No | `-3` |
| **hideOnViewChanged** | `boolean` | If true, the message will immediately disappear if the user navigates to another route view. | No | `true` |
| **persistent** | `boolean` | Whether this message should re-appear after being interrupted by another message. | No | `true` |
| **messageKey** | `Object` | If a new message has the same messageKey as the current message, then the current message will always be destroyed, regardless of its priority. Sets the messageKey of both the initial message and the confirmation message. | No |  |

--
## SavingMessageDescriptor
This type is used to describe the messages for ButterBar.showSaving to show

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **text** | `string` | Text shown while the saving is ongoing. | No | `'Saving...'` |
| **confirmationText** | `string` | Text shown when the save is complete. | No | `'Saved'` |
| **confirmationTime** | `number` | Number of milliseconds the confirmation text is shown. | No | `1000` |
| **showConfirmation** | `boolean` | Whether or not to show the confirmation message when the initial message is resolved. | No | `true` |
| **html** | `string` | String to use as the innerHTML of the ButterBar instead of using the given text. | No |  |
| **el** | `HTMLElement` | HTML element to insert into the ButterBar instead of using the given text. | No |  |
| **className** | `string` | String to add as a css class to the ButterBar container element. | No |  |
| **priority** | `number` | Messages with lower priorities won't interrupt a currently displayed message. Loading messages default to a lower priority than other message types. | No | `-3` |
| **hideOnViewChanged** | `boolean` | If true, the message will immediately disappear if the user navigates to another route view. | No | `true` |
| **persistent** | `boolean` | Whether this message should re-appear after being interrupted by another message. | No | `true` |
| **messageKey** | `Object` | If a new message has the same messageKey as the current message, then the current message will always be destroyed, regardless of its priority. Sets the messageKey of both the initial message and the confirmation message. | No |  |
