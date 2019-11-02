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
  const deleteFiles = [].concat(
    glob.sync(`build/**/{generate,test}.js`),
    glob.sync(`build/**/{generate,test}.d.ts`)
  )
  deleteFiles.map(fs.unlinkSync)

  // Rename "data" to "index" for easier import
  const dataFiles = [].concat(glob.sync(`build/**/data.js`), glob.sync(`build/**/data.d.ts`))
  dataFiles.map((path) => {
    fs.renameSync(path, path.replace('data', 'index'))
  })

  // Add commonjs export
  const indexFiles = glob.sync(`build/**/index.js`)
  indexFiles.map((path) => {
    const content = fs.readFileSync(path, 'utf-8')
    fs.writeFileSync(path, content + 'module.exports = exports.default;\n', 'utf-8')
  })

  // Add package.json and README into build directory
  sh('cp package.json build/package.json')
  sh('cp README.md build/README.md')
}

cli({
  build
})
