const Spawn = require('cross-spawn')
const compile = (origin, program) => {
  const {
    out
  } = program
  const modules = $path.join($path.resolve(__dirname), '../../node_modules/')
  Spawn(
    $path.join($path.resolve(__dirname), '../../node_modules/@babel/cli/bin/babel.js'),
    [
      origin,
      '--out-dir',
      out || 'lib',
      '--save',
      '--copy-files',
      '--verbose',
      `--presets=${modules}@babel/preset-env,${modules}@babel/preset-react`,
      `--plugins=${modules}@babel/plugins-proposal-class-properties,${modules}@babel/plugins-transfrom-async-to-generator,${modules}@babel/plugins-syntax-dynamic-import`
    ], {
      cwd: $path.resolve(process.cwd()),
      stdio: ['ingore', 'pipe', 'inherit']
    }
  )
}

module.exports = compile