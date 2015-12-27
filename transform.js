var PassThrough = require('stream').PassThrough

module.exports = createTransform

function createTransform (filename, options) {
  console.log("options", options)

  return PassThrough()
}

