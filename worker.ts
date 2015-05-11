/// <reference path="./Scripts/typings/express/express.d.ts" />
/// <reference path="./Scripts/typings/node/node.d.ts" />
/// <reference path="./Scripts/typings/stylus/stylus.d.ts" />





module workerMod {

  setTimeout(() => {
    console.log("Process " + process.argv[0] + " at work ");
  }, 500);

}
