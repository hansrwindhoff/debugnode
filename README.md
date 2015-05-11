

# ways of debugging node

use remotedebug.js to connect to a remote severr from vs or idea:

- on the server run sudo node RemoteDebug.js app.js
- in idea or vs attach debugger to the <ip>:5858
- hit the service by using a browser of other tool, http://<ip>:81/users. put break point in users route handler function
- if you detatch the debugger restart the server before attaching again, you may need to kill the node 	process (ps -al / sudo kill <pid>)

use node-inspector to connect from chrome dev tool to remotely running node server:

- start the app (as sudo in linux), use the sh file if you like
- start node-inspector (as sudo in linux), use the sh file if you like
- on the client start chrome via the AAA...bat or equivalent command, adapt the ip address






