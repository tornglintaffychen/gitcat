#! /usr/local/bin/node

var chalk = require('chalk')
var cats = require('../cats.js')();
var shell = require("shelljs");

shell.echo(chalk.green(cats.bubbleTail))
shell.exec("git push origin master");
