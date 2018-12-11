const DevServer = require('webpack-dev-server')
const Compiler = require($src_path('./webpack'))
const { options, webpack } = require($src_path('./config/user'))

const start = () => {
  new DevServer(Compiler, webpack.devServer || {}).listen(options.port)
}

module.exports = start