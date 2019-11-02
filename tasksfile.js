const { sh: _sh, cli } = require('tasksfile')
const glob = require('glob')
const fs = require('fs')

function sh (command, options = {}) {
  return _sh(command, { nopipe: true, ...options })
}

function build () {
  // Build TypeScript
  sh('rm -rf build/')
  sh('tsc')

  // Remove build time dependencies
  const deleteFiles = glob.sync(`build/**/{generate,test}.js`)
  deleteFiles.map(fs.unlinkSync)

  // Add commonjs export and rename for easier import syntax
  const dataFiles = glob.sync(`build/**/data.js`)
  dataFiles.map((file) => {
    const content = fs.readFileSync(file, 'utf-8')
    fs.writeFileSync(file, content + 'module.exports = exports.default;\n', 'utf-8')
    fs.renameSync(file, file.replace('data.js', 'index.js'))
  })
}

cli({
  build
})
