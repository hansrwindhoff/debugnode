/// <reference path="../Scripts/typings/express/express.d.ts" />
/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/stylus/stylus.d.ts" />
/// <reference path="../Scripts/typings/bluebird/bluebird.d.ts" />



/*
 * GET users listing.
 */
import express = require('express');
import Promise = require("bluebird");

import fs = require('fs');
var fsp = Promise.promisifyAll(fs);
export function tryit(req: express.Request, res: express.Response) {
  res.send("respond with a resource, this is the users route");

  (<any>fsp).readFileAsync("file.json")
    .then(JSON.parse)
    .then(function (val) {
      console.log(val);
     // throw { "bad": "bad" };
    })
    .catch(Error, function (e) {
      console.error(Error);
      console.error(e);

    })
    .catch(SyntaxError, function (e) {
      console.error("invalid json in file");
    })
    .catch(function (e) {
      console.error("unable to read file");
    })
  ;
};