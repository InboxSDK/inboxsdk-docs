---
id: api-reference
title: API Reference
---
---
## InboxSDK.*
The functions in this class are only used for load related functionality like loading the SDK itself or other external scripts.


### `load()` 
<Method returns="Promise"></Method>

Loads InboxSDK remotely and prepares it to be used. Returns a promise which resolves with the SDK interface (see usage examples under "Structuring Your App") when the SDK is loaded and ready to be used.

| Parameter        |      Description      |   Type |
| ---------------- | ------------------- | -----: |
| **version**      | The API version of the SDK to use. The recommended value right now is 2. | `number` |
| **appId**      |   The AppId that you registered for on the [AppId Registration](http://localhost:3000/inboxsdk-docs/api-reference) page. | `string` |
| **options** | Optional options object | `LoadOptions` |


### `loadScript()`
<Method returns="Promise"></Method>

Loads a remote script into the extension's content script space and evals it. Returns a promise which resolves when the script is finished downloading and eval'ing.

| Parameter        |      Description      |   Type |
| ---------------- | ------------------- | -----: |
| **url**      | The URL of the remote script to load | `string` |
| **options** | Optional options object | `LoadScriptOptions` |


### `LoadOptions`
<Type usedBy="InboxSDK.load()" usedByAnchor="load"></Type>

| Property        |      Description      |   Type |
| ---------------- | ------------------- | -----: |
| **appName**      | The name of your app. This is used by several methods in the SDK. | `string`, _default: `null`_ |
| **appIconUrl** | The URL of the icon of your app. Can be HTTPS or a chrome runtime url. | `string`, _default: `null`_ |
| **suppressAddonTitle** | The name of the Gmail Add-On you want to hide. Use this if you have both an extension and a Gmail Add-On that provide similar functionality. | `string`, _default: `null`_ |

### `LoadScriptOptions`
<Type usedBy="InboxSDK.loadScript()" usedByAnchor="loadscript"></Type>

| Property        |      Description      |   Type |
| ---------------- | ------------------- | -----: |
| **nowrap**      | The name of your app. This is used by several methods in the SDK. | `boolean`, _default: `false`_ |

---
## Compose

---
## Lists

---
## Conversations

---
## Toolbars

---
## Router

---
## NavMenu

---
## Widgets

---
## ButterBar

---
## Search

---
## User

---
## Global

---
## Keyboard Shortcuts

---
## Common Data Types

export const Method = ({children, returns}) => ( <div style={{marginBottom: '8px', marginTop: '8px'}}>
    <div style={{
        display: "inline-block",        
        marginBottom: "12px",
        borderBottom: "dashed 4px #1877F2",
    }}>Method returns:</div>
    <span> <code>{returns}</code></span>
</div> );

export const Type = ({children, usedByAnchor, usedBy}) => ( <div style={{marginBottom: '8px', marginTop: '8px'}}>
    <div style={{
        display: "inline-block",
        marginBottom: "12px",
        borderBottom: "dashed 4px rgb(241 119 32)",
    }}>Type, used by: <a href={'#' + usedByAnchor}>{usedBy}</a></div>
</div> );
