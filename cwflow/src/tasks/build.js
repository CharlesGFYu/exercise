const Ora = require('ora')
const Chalk = require('chalk')
const Compiler = require($src_path('./webpack/'))
const Util = require($src_path('./tools/util'))

const build = () => {
  const spinner = Ora('Building...').start()

  Compiler.run((err, stats) => {
    if(err) {
      spinner.fail()
      return
    }
    Util.logBuildResults(stats, spinner)
    if(stats.hasErrors()) {
      console.log(Chalk.red('Build failed with errors.'))
    }
  })
}

module.exports = build