#! /usr/local/bin/node

var chalk = require('chalk')
var cats = require('../cats.js')();
var shell = require('shelljs');

shell.echo(chalk.blue(cats.happy));
shell.exec("git stash");
