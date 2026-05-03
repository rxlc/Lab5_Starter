Name: Quinton Fu

Expose: https://rxlc.github.io/Lab5_Starter/expose.html

Explore: https://rxlc.github.io/Lab5_Starter/explore.html

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, since this process would involve accessing databases, servers, and doing asychronious requests, and unit tests should only focus on a function/implementation in isolation

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, since it doesn't need to use other systems like databases and servers, and runs in insolation.
