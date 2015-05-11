rem you can pull these appart to run on different machines and os's
rem start "" /D"." node --debug-brk lifofifo.js
rem start "" /D"." node .\node_modules\node-inspector\bin\inspector.js &
rem start chrome http://10.180.121.65:8080/debug?port=5858
rem start chrome http://localhost:5859/debug?port=5859


start chrome http://192.128.28.102:8080/debug?port=5858
start chrome http://192.128.28.102:81/