#! /usr/local/bin/node

var chalk = require('chalk');
var cats = require('../cats.js')();
var shell = require('shelljs');

shell.echo(chalk.yellow(cats.mochaNyan));
shell.exec('git commit -m "commit all files"')
