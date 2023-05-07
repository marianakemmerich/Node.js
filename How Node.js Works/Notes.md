**EVENT LOOP**: all the application code that is inside callback functions (non-top-level code)

**EVENT-DRIVEN ARCHITECTURE**:
- events are emmited
- event loops pick them up
- callbacks are called

The event loop does the orchestration, which means that it receive events, calls their callback functions and offloads the more expensive tasks to the thread pool.

When we start a Node application, the event loop starts running right away.
The event loop has multiple phases and each phase has a callback queue, which are the callbacks coming from the events that the event loop receives.

MOST IMPORTANT PHASES OF AN EVENT LOOP:
- 1st phase: **expired timer callbacks**
If there are callback functions from timers that just expired, these are the first ones to be processed by the event loop.
If a timer expires later, while one of the other phases are being processed, then the callback of that timer will onyl be called when the event loop comes back to the first phase.

> Callbacks in each queue are processed one by one, until there are no one left in the queue, only then the event loop will enter the next phase.

- 2nd phase: **I/O polling and callbacks**
*Polling* means looking for new I/O events that are ready to be processed and putting them into the callback queue.
In a Node application I/O means stuff like networking and file access.
In this phase, about 90% of the code gets executed.

- 3rd phase: **setImmediate callbacks**
*setImmediate* is a special kind of timer that can be used to process callbacks immediately after the I/O and execution phase.

-4th phase: **close callbacks**
In this phase, all close events are processed, for example, for when a web server or web socket shuts down.
