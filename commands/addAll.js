#! /usr/local/bin/node

var chalk = require('chalk')
var cats = require('../cats.js')();
var shell = require("shelljs");

shell.echo(chalk.green(cats.standing))
console.log("added all files");
shell.exec("git add -A");
