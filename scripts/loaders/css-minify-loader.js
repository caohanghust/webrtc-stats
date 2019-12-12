const cssnano = require('cssnano')

const cssnanoOpts = {
  preset: 'default',
}

async function loader (content) {
  const minCss = await cssnano.process(content, {}, cssnanoOpts)
  return minCss.css
}

module.exports = loader