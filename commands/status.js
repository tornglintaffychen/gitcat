#! /usr/local/bin/node

var chalk = require('chalk');
var cats = require('../cats.js')();
var shell = require('shelljs');

shell.echo(chalk.red(cats.mochaNyan));
// shell.exec("echo hello kitty");
shell.exec('git status')
