/// <reference path="./Scripts/typings/express/express.d.ts" />
/// <reference path="./Scripts/typings/node/node.d.ts" />
/// <reference path="./Scripts/typings/stylus/stylus.d.ts" />
var workerMod;
(function (workerMod) {
    setTimeout(function () {
        console.log("Process " + process.argv[0] + " at work ");
    }, 500);
})(workerMod || (workerMod = {}));
//# sourceMappingURL=worker.js.map