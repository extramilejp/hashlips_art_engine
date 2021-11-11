"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { startCreating, buildSetup } = require(path.join(
  basePath,
  "/src/main.js"
));

(() => {
  buildSetup(process.argv.slice(2).length === 0);
  startCreating(process.argv.slice(2).length === 0);
})();
