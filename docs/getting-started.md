---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /
---

## What is the InboxSDK?
The InboxSDK is a library for building browser extensions for Gmail and soon Inbox too. It provides APIs for browser extensions to interact with and extend the Gmail and Inbox UI. The SDK is built so that multiple extensions can use it on a page at once without conflicting with each other.

The library is intended to facilitate the creation of extensions like our [Streak extension](https://www.streak.com). The library is sophisticated enough for the Streak extension itself to be built on, but the library does not provide facilities for other extensions to interact with user data specific to the Streak extension (pipelines, boxes, etc.). To integrate with Streak itself, see the [Streak API docs](https://www.streak.com/api).

:::info AppId Registration
Don't forget to register for an AppId to run your app in production, it's quick and free: [AppId Registration](https://www.inboxsdk.com/register)
:::

## Quick Start

Get your AppId here: [`🌎 AppId Registration`](https://www.inboxsdk.com/register)  
Download the SDK here: [`⬇️  inboxsdk.js`](https://www.inboxsdk.com/build/inboxsdk.js)

### Hello World! Sample Extension

Here's how simple it is to build a basic app, you need two files: `myapp.js` which is your application code that interacts with the SDK, and the `manifest.json` which describes a basic Chrome extension.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="myapp.js"
  values={[
    { label: 'myapp.js', value: 'myapp.js', },
    { label: 'manifest.json', value: 'manifest.json', },
  ]
}>
<TabItem value="myapp.js">

```js
InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){
  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler(function(composeView){
    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "My Nifty Button!",
      iconUrl: 'https://example.com/foo.png',
      onClick: function(event) {
        event.composeView.insertTextIntoBodyAtCursor('Hello World!');
      },
    });
  });
});
```

</TabItem>
<TabItem value="manifest.json">

```json
{
  "manifest_version": 2,
  "name": "Hello World Extension",
  "version": "1.0",
  "permissions": [
    "https://mail.google.com/",
    "https://inbox.google.com/"
  ],
  "content_scripts" : [
    {
      "matches": ["https://mail.google.com/*", "https://inbox.google.com/*"],
      "js": ["inboxsdk.js", "myapp.js"]
    }
  ]
}
```

</TabItem>
</Tabs>


### Running your Hello World! Extension
To test your new app, open Chrome to `chrome://extensions` and check the "Developer Mode" checkbox. Then click on "Load Unpacked Extension" and point it to your extension directory. Next, open Gmail and stand in awe. For more details on testing Chrome extensions, see [Chrome Getting Started Docs](https://developer.chrome.com/extensions/getstarted#unpacked).


## Structuring Your App

### Required Setup
Browser extensions built using the InboxSDK are structured like normal browser extensions. You must additionally:

1. `inboxsdk.js` should be placed inside your extension directory
2. The `manifest.json` (Chrome) or `info.plist` (Safari) needs to list the above file as a content script which runs on "https://mail.google.com" and "https://inbox.google.com"
3. You must [register for an AppId](https://www.inboxsdk.com/register) to use your app in production. This is a 100% free step and takes about 5 seconds to complete. Your AppId will be tied to your Google account.
4. One of the "Loading Your App" methods must be done as described below

For more basics of Chrome extensions, see: [Chrome Extension Reference](https://developer.chrome.com/extensions)  
For more basics of Safari extensions, see: [Safari Extension Reference](https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/Introduction/Introduction.html)

### Loading using Local App (Basic)
The simplest and easiest way to use the SDK is to have a myapp.js file placed inside your extension. This file will then load the SDK using [`InboxSDK.load()`](WWW.FFIIIIIXXXXMEEEE.COM) 

<Tabs
  defaultValue="myapp.js"
  values={[
    { label: 'myapp.js', value: 'myapp.js', },
    { label: 'manifest.json', value: 'manifest.json', },
  ]
}>
<TabItem value="myapp.js">

```js
InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){
  // your app code using 'sdk' goes in here
});
```

</TabItem>
<TabItem value="manifest.json">

```json
{
  "manifest_version": 2,
  "name": "Hello World Extension",
  "version": "1.0",
  "permissions": [
    "https://mail.google.com/",
    "https://inbox.google.com/"
  ],
  "content_scripts" : [
    {
      "matches": ["https://mail.google.com/*", "https://inbox.google.com/*"],
      "js": ["inboxsdk.js", "myapp.js"]
    }
  ]
}
```

</TabItem>
</Tabs>

### Loading using Remote App
The previous method, while simple, implies that you must release a new extension (typically to the Chrome Web Store) if you want to make changes to the app. For high usage or frequently updated apps, you may not want to wait for the chrome extension system to update all your users extensions to the latest version.

To handle this scenario, you can host your actual application code on your own server (or somewhere convenient) and remotely load it when needed. This allows you to make updates to it and your users will simply need to refresh Gmail to get the changes.

The InboxSDK has convenient functions for remotely loading your application code, you'll need the following files.

<Tabs
  defaultValue="loader.js"
  values={[
    { label: 'loader.js (in extension)', value: 'loader.js', },
    { label: 'myapp.js (on your server)', value: 'myapp.js', },
    { label: 'manifest.json', value: 'manifest.json', },
  ]
}>
<TabItem value="loader.js">

```js
// This file will get downloaded and run by your extension making it easy to update
// Don't forget to add this domain to your manifest.json!

InboxSDK.loadScript('https://www.myserver.com/myapp.js')
```

</TabItem>
<TabItem value="myapp.js">

```js
// notice how this file is exactly the same as what content.js would have been in Method 1 above?

InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){
  // your app code using 'sdk' goes in here
});
```

</TabItem>
<TabItem value="manifest.json">

```json
{
  "manifest_version": 2,
  "name": "Hello World Extension",
  "version": "1.0",
  "permissions": [
    "https://mail.google.com/",
    "https://inbox.google.com/",
    "https://www.myserver.com/"
  ],
  "content_scripts" : [
    {
      "matches": ["https://mail.google.com/*", "https://inbox.google.com/*"],
      "js": ["inboxsdk.js", "loader.js"]
    }
  ]
}
```

</TabItem>
</Tabs>


### Loading Dependencies
You may want to load other JS libraries like mapping or charting libraries for your application to use. You can compile these libraries directly into your `myapp.js` (for libraries like jquery, this may make sense), but sometimes you may want to remotely load these instead.

We recommend that you load these dependencies in your `myapp.js` file so that they can be updated in the same way your application can.

The `InboxSDK.loadScript()` function provides a convenient way to remote load these scripts. This function returns a promise which can be used to chain dependencies or load them in parallel. Conveniently, `InboxSDK.load()` also returns a promise so you can fine tune your ordering of dependencies and the SDK. The following example shows how you would parallel load a dependency.


<Tabs
  defaultValue="myapp.js"
  values={[
    { label: 'loader.js', value: 'loader.js', },
    { label: 'myapp.js', value: 'myapp.js', },
    { label: 'manifest.json', value: 'manifest.json', },
  ]
}>
<TabItem value="loader.js">

```js
// This file will get downloaded and run by your extension making it easy to update
// Don't forget to add this domain to your manifest.json!

InboxSDK.loadScript('https://www.myserver.com/myapp.js')
```

</TabItem>
<TabItem value="myapp.js">

```js
Promise.all([
  InboxSDK.load(2, 'YOUR_APP_ID_HERE'),
  InboxSDK.loadScript('https://www.somedependency.com/somedependency.js')
])
.then(function(results){
  var sdk = results[0];
  // the rest of your app code here
});
```

</TabItem>
<TabItem value="manifest.json">

```json
{
  "manifest_version": 2,
  "name": "Hello World Extension",
  "version": "1.0",
  "permissions": [
    "https://mail.google.com/",
    "https://www.myserver.com"
  ],
  "content_scripts" : [
    {
      "matches": ["https://mail.google.com/*"],
      "js": ["inboxsdk.js", "loader.js"]
    }
  ]
}
```

</TabItem>
</Tabs>


## Concepts

### How It Works
To use the InboxSDK, you must include the `inboxsdk.js` file in your extension. This file is just a small shim and is only responsible for remotely loading the full implementation of the SDK. This is done so that the actual implementation of the SDK can be updated to keep compatibility with Gmail without requiring you to update your extension for every change. The implementation is often updated to maintain compatibility with Gmail, fix bugs, and add new SDK features. All that is required for your end users to reap this benefit is for them to refresh Gmail in their browser.

Since the SDK is remotely loaded, you can't start interacting with it until its been loaded.

The `inboxsdk.js` shim defines a few functions which you can directly use immediately without waiting for the remote implementation to load. These are documented in the `InboxSDK.*` namespace.

### Views & Events
Several methods in the InboxSDK return `View` types. These `View` classes have a variety of functionality depending on the UI element they represent. However, one critical commonality is that they are all `EventEmitter`s. This means that you can subscribe to a variety of events that each `View` emits.

The events they emit are all documented in their respective documentation sections (i.e. see `ComposeView` has a section for events). One commonality is that they all emit a `destroy` event and have their `destroyed` property set to true when they are no longer available in the page. It's often useful to subscribe to this event and then cleanup any resources/memory/references you may no longer need. Performance inside Gmail/Inbox is important to maintain, so it's critical you release any relevant resources when this event is emitted.

To subscribe to events, refer to the documentation for `EventEmitter`s. Here's a simple example showing how to subscribe to events:

```js
InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){
  sdk.Compose.registerComposeViewHandler(function(composeView){
    composeView.on('recipientsChanged', function(event) {
      console.log('Recipients have changed to: ' + event);
    });

    composeView.on('destroy', function(event) {
      console.log('compose view going away, time to clean up');
    });
  });
});
```
### Compatibility
The SDK is currently at version 2 and when loading the SDK that is the number you should specify. The SDK may add backwards compatible API's to the current version, but incompatible changes will come with a version update. Your code is guranteed to work so long as you specify the correct version number AND that version number is at most two releases old.
