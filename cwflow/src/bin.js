#!/usr/bin/env node

global.$path = require('path')
global.$root_path = (path) => $path.join(__dirname, '../', path)
global.$src_path = (path) => $path.join(__dirname, path)
global.$version = require($root_path('./package.json')).version

const program = require('commander')

program
  .version($version)
  .command('init <type> [dirname]')
  .action((type, dirname) => {
    global.$task = 'init'
    require('./tasks/init.js')(type, dirname)
  })

program
  .command('start')
  .option('-p, --port <port>', 'listening port')
  .action((port) => {
    global.$task = 'start'
    require('./tasks/start.js')(port)
  })

program
  .command('watch')
  .action(() => {
    global.$task = 'watch'
    require('./tasks/watch.js')()
  })

program
  .command('build')
  .action(() => {
    global.$task = 'build'
    require('./tasks/build.js')()
  })

program
  .command('compile <origin>')
  .option('-o, --out <out>', 'compile code')
  .action((origin, program) => {
    global.$task = 'compile'
    require('./tasks/compile.js')(origin, program)
  })

program
  .command('new <option> [name]')
  .action((option, name) => {
    global.$task = 'new'
    require('./tasks/new.js')(option, name)
  })

program.parse(process.argv)