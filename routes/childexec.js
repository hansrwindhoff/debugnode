/// <reference path="../Scripts/typings/express/express.d.ts" />
/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/stylus/stylus.d.ts" />
var cprocess = require('child_process');
function childproc(req, res) {
    var myport = parseInt(process.env.PORT) + 1;
    process.argv[2] = myport.toString();
    process.env.PORT = myport;
    //parseInt((Math.random() * 2000).toString());
    console.log('spawning node app.js on port ' + myport);
    //cprocess.exec('start cmd /k node app.js ' + myport, (error, stdout, stderr) => {
    cprocess.exec('node app.js ' + myport, function (error, stdout, stderr) {
        if (error) {
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    }).on('exit', function (code) {
        console.log('Child process exited with exit code ' + code);
    });
}
exports.childproc = childproc;
;
//# sourceMappingURL=childexec.js.map