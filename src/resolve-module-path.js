const path = require('path');
const resolve = require('resolve')

module.exports = function resolveModulePath(options) {
  try {
    const {
      moduleName,
      filePath,
      extensions
    } = options;

    const absolutePath = resolve.sync(moduleName, {
      basedir: path.dirname(filePath),
      extensions: extensions || ['.js', '.json']
    })
    const isCoreNodeModule = absolutePath.indexOf(path.sep) === -1
    return isCoreNodeModule ? null : absolutePath
  } catch (e) {
    return null
  }
}
