#! /usr/local/bin/node

var chalk = require('chalk')
var cats = require('../cats.js')();
var shell = require('shelljs');

shell.echo(chalk.blue(cats.mochaNyan));
shell.exec("git stash");
