const { sh: _sh, cli } = require('tasksfile')
const glob = require('glob')
const fs = require('fs')
const path = require('path')

function sh (command, options = {}) {
  return _sh(command, { nopipe: true, ...options })
}

function getCacheFiles (generator) {
  const content = fs.readFileSync(generator, 'utf-8')

  return [...content.matchAll(/['"]([^'"]+\.json)['"]/g)]
    .map((match) => match[1])
    .filter((file) => ['items.json', 'achievements.json', 'recipes.json'].includes(file))
}


function resolveGenerator (generators, target) {
  const normalizedTarget = target.replace(/\\/g, '/')
  const match = generators.find((generator) => {
    const normalizedGenerator = generator.replace(/\\/g, '/')

    return (
      normalizedGenerator === `src/${normalizedTarget}/generate.ts` ||
      normalizedGenerator.endsWith(`/${normalizedTarget}/generate.ts`)
    )
  })

  if (!match) {
    throw new Error(`No generator matched "${target}"`)
  }

  return match
}

function generate () {
  const target = process.argv[3]

  const generators = glob.sync(`src/**/generate.ts`).filter((path) => !path.includes('_helpers'))
  const selectedGenerators = target ? [resolveGenerator(generators, target)] : generators

  if (!target) {
    sh('./refresh-cache.sh')
  } else {
    const cacheFiles = [...new Set(selectedGenerators.flatMap(getCacheFiles))]
    const missingCache = cacheFiles.some((file) => !fs.existsSync(path.join(__dirname, '.cache', file)))

    if (missingCache) {
      sh('./refresh-cache.sh')
    }
  }

  selectedGenerators.map((generator) => sh(`ts-node ${generator}`))
}

function build () {
  // Build TypeScript
  sh('rm -rf build/')
  sh('tsc')
  sh('rm -rf build/_helpers/')

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
  generate,
  build
})
