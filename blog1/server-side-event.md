---
title:  "How to listen server sent event in client side?"
date:   2020-03-21 21:21:00 +0900
categories: 
- [Events]
tag:
- eventlistener
- sse
- server-side-event
---

There could many cases where we need to listen events that is emitted from server side. In order words, we have to listen server-sent-event (sse).
Before that it is essential to know how the event is activated and operates in window object.
# Server-sent-events
In the front-end, we should have a service where it listens the event from server and act based on that. For that we need to use `EventSource` interface, to open the connection to the server, so it can receive its event information.

# EventSource interface
`EventSource` is kind of interface to the server-sent-events. It opens persistent HTTP server that sends events in `text/event-stream` format.
The connection need to be closed by calling EventSource.close(), otherwise it will be remain as open till the window or DOM destroyed (redirect the window or close the tab). 

Unlike `WebSockets`, SSE events are unidirectional (one direction), from server to client side.

# Receiving events from server

```js
// sse-service.js

const url = "xxx/v1/event"
const eventSource = new EventSource(url) // open connection

// listen or receive event
eventSource.addEventListener("success", eventSuccess)

function eventSuccess(){
    console.log("received event successfully!")
}

// close event connection
eventSource.close()
```
additionally, we can add event handlers such as `onmessage`, `onerror` when receiving event.

```js
const url = "xxx/v1/event"
const eventSource = new EventSource(url) // open connection

eventSource.onmessage = function(event){
    const eventList = document.getElementById("list");
    newElement.innerHTML = "message: " + event.data;
    eventList.appendChild(newElement);
}

eventSource.onerror = function(){
    console.error('Something wrong happened')
}
eventSource.close()
```

While opening event stream connection by initiating its constructor, we can include `options` as well.

For example, if event generator hosted on different origin, we can open connection by including credentials option by adding `options`.

```js
const eventSource = new EventSource("//api.example.com/ssedemo.php", 
    { withCredentials: true } ); // specify option in {}
```

# Event stream format

Events sent from server divides into following categories. Those messages are normal stream of text, which must be encoded using `UTF-8`

Each message consists of one or more lines of text listing the fields for that message. Each field is represented by the field name, followed by a colon, followed by the text data for that field's value.

 - data-only messages
 - named events

## Data-only messages

```js
: this is a test stream

data: some text

data: another message
data: with two lines 
```

Only `data:` field is given, there is no named events.

## Named events
 Each has an event name specified by the `event` field, and a `data` field whose value is an appropriate JSON string with the data needed for the client to act on the event. 

```js
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## Mixing and matching

We can mix those structure and send events into single stream.

```js
data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

Alright, this section might give you some understanding.
If you want to see more detailed info, please go and check this followings.

- https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
- https://developer.mozilla.org/en-US/docs/Web/API/EventSource