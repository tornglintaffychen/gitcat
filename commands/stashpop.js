#! /usr/local/bin/node

var chalk = require('chalk')
var cats = require('../cats.js')();
var shell = require('shelljs');

shell.echo(chalk.magenta(cats.mochaNyan));
console.log(chalk.yellow("you got it all back~"))
shell.exec("git stash pop");
