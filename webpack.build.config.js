module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/index.js',
    libraryTarget: 'umd',
    library: 'ReactAppStoreBadge'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: /src/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  externals: {
    'react': 'react'
  }
}
