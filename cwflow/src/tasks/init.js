const fs = require('fs')
const chalk = require('chalk')
const runSeries = require('run-series')
const ora = require('ora')
const spawn = require('cross-spawn')
const copyTemplateDir = require('copy-template-dir')
const {NPM} = require($src_path('./config/'))

