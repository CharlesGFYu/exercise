const Ora = require('ora')
const Chalk = require('chalk')
const Compiler = require($src_path('./webapck/'))
const Util = require($src_path('./tools/util'))

const watch = () => {
  const spinner = Ora(Chalk.green('Watching...')).start()

  Compiler.watch({}, (err, stats) => {
    if(err) {
      spinner.fail()
      return
    }
    Util.logBuildResults(stats)
    if(stats.hasErrors()) {
      console.log(Chalk.red('Watch failed with errors.'))
    }
  })
}

module.exports = watch