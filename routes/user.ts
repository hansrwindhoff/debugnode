/// <reference path="../Scripts/typings/express/express.d.ts" />
/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/stylus/stylus.d.ts" />
/*
 * GET users listing.
 */
import express = require('express');
import cprocess = require('child_process');

export function list(req: express.Request, res: express.Response) {
  res.send("respond with a resource, this is the users route");

  
};