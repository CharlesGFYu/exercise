const fs = require('fs')
const chalk = require('chalk')
const runSeries = require('run-series')
const ora = require('ora')
const crossSpawn = require('cross-spawn')
const copyTemplateDir = require('copy-template-dir')
const {NPM} = require($src_path('./config/'))

const installDependencies = (targetDir, cb) => {
  const spinner = ora(chalk.green(`Install dependencies...`)).start()
  const cmd = crossSpawn(NPM, ['install', '--slient', '--no-progress', '--no-package-lock', '--production'], {
    cwd: targetDir,
    stdio: ['ignore', 'pipe', 'inherit']
  })
  cmd.on('close', (code) => {
    if(code !== 0) {
      spinner.fail()
      console.log(chalk.red(`${NPM} install failed`))
      return cb(new Error(`${NPM} install failed`))
    }
    spinner.succeed()
    cb()
  })
}

const initProject = (type, dirname) => {
  if(!dirname) {
    console.log(chalk.red('Please input dirname!'))
    process.exit()
  }

  console.log(chalk.green('Initializing...'))
  
  const targetDir = $path.resolve(dirname)
  if(fs.existsSync(targetDir)) {
    console.log(chalk.red(`${targetDir} already exists`))
    process.exit()
  }

  const templateDir = $root_path(`./templates/${type}`)
  runSeries(
    [
      (cb) => {
        copyTemplateDir(templateDir, targetDir, {
          name: dirname,
          version: $version
        }, (err, createdFiles) => {
          if(err) throw err          
          createdFiles.forEach((filePath) => console.log(`   ${chalk.cyan('create')} ${filePath}`))
          cb()
        })
      },
      (cb) => {
        installDependencies(targetDir, cb)
      }
    ],
    (err, results) => {
      console.log(chalk.green('The project initialization completed!'))
    }
  )
}

module.exports = initProject