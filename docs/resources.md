---
title: Resources
---

## Example Apps
We've developed several sample extensions that demostrate the use of the InboxSDK. The examples are all hosted on [GitHub](https://github.com/InboxSDK). If you'd like to help develop more samples, let us know!

## Advanced Patterns

### Promises
Several of our API methods accept or provide a promise for a certain value instead of the value itself. A promise is an object that represents an eventual value, and allows callbacks to be registered to be called when the value becomes present. Promises are standardized and are natively available as part of Javascript in modern browsers. Promises help to provide a consistent interface to writing asynchronous code.
Here is a simple example of creating a promise that resolves to a value after a second, and then an example of how to listen to the promise:
```js
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
    resolve('foo');
    }, 1000);
});
promise.then(function(value) {
    console.log("received", value);
});
// Prints "received foo" after one second.
```

Promises can also be created by chaining from existing promises. For more information on promises, see resources such as the [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/es6/promises/) or [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) pages on promises.

### Streams
Several of our API methods accept reactive streams as arguments. A reactive stream is an object that represents a series of eventual values, like a promise that can resolve repeatedly with new values over time. Streams are implemented in libraries such as [Kefir](https://pozadi.github.io/kefir/), [Bacon.js](https://baconjs.github.io/), and [Reactive Extensions for Javascript](https://github.com/Reactive-Extensions/RxJS), which are each supported by the InboxSDK. Streams help to provide a consistent and composable interface to writing asynchronous code, like promises.
In order to create streams, you must include one of the above libraries in your extension. Here is an example of creating and then consuming a stream using the Kefir library:
```js
var stream = Kefir.stream(function(emitter) {
    var timer = setInterval(function() {
    emitter.emit('foo');
    }, 1000);

    // Return a function to be called when the stream is unsubscribed from.
    // Unlike promises, streams can know when they're no longer listened to!
    return function() {
    clearInterval(timer);
    };
});
stream.take(5).onValue(function(value) {
    console.log("received", value);
});
// Prints "received foo" five times each one second apart, and then stops.
```

Note that reactive libraries often contain many specialized functions for creating streams from timers, event listeners, and other streams. This example purposefully uses a general method instead that can be quickly adapted to many uses. The above example should be enough to show you how to interact with the InboxSDK's stream-compatible methods, but if you want more information on reactive streams in order to use them more effectively, some recommended resources include the documentation of the above libraries, [Netflix's talk on Reactive Programming](https://www.youtube.com/watch?v=XRYN2xt11Ek), and [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754).

## FAQ
### What browsers are supported?
Chrome and Safari are currently supported.  Chrome version 36 and Safari 10 are the minimum versions we support.
Firefox support is under consideration; please let us know if you're interested.