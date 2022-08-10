## asynchronous
> Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, 
your program is presented with the result.

> **Asynchronous**: multiple related things happening without waiting for the previous one to complete

Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example:

- Making HTTP requests using fetch()
- Accessing a user's camera or microphone using getUserMedia()
- Asking a user to select files using showOpenFilePicker()
