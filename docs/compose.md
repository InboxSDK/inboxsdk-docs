# Compose

This namespace contains methods and types related to adding your application elements to the Gmail or Inbox Compose UI. The compose UI has two variants. The New Compose UI appears when users are composing new messages and appear as windows above the rest of the app content. The second, the Reply UI, appears when users are replying to existing messages from the message they are replying to. This namespace handles both of these variants equivalently.

The [`ComposeView`](https://www.inboxsdk.com/docs/#ComposeView) type is how you interact with compose windows in Gmail and Inbox. The most common way to get access to a compose view is to use the [`Compose.registerComposeViewHandler()`](javascript:$.find%28"methods-box[doc-class=Compose]"%29[0].scrollMethodIntoView%28"registerComposeViewHandler"%29) method which calls you back with every existing [`ComposeView`](https://www.inboxsdk.com/docs/#ComposeView) and all future [`ComposeView`](https://www.inboxsdk.com/docs/#ComposeView)s. From there a typical application will modify the [`ComposeView`](https://www.inboxsdk.com/docs/#ComposeView) as needed by adding buttons, adding content to the message, or accessing the recipient data.



### `Compose.registerComposeViewHandler(handler)` 

Register a handler to be called for every existing ComposeView as well as for all future ComposeViews that may come into existence. This method is the preferred way to add your application to every compose area such as a new compose window or inline reply compose areas. This function returns a function which removes the handler registration.

Returns: `Function`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(ComposeView)` | The function to be called |

```javascript
InboxSDK.load(1, 'YOUR_APP_ID_HERE').then(function(sdk){
  sdk.Compose.registerComposeViewHandler(function(composeView){
    console.log("compose view exists!");
  });
});
```

### `Compose.openNewComposeView()` 

Opens a new compose view. Any handlers you've registered for ComposeViews will be called as well. Returns a promise which will resolve with the new ComposeView once it has opened.

Returns: `Promise<ComposeView>`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function(ComposeView)` | The function to be called |

## ComposeView

Object that represents an open compose window **or** reply widget. The fields can be easily read and modified, and certain elements can be attached to it. This includes buttons and sidebars.  