module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/lib'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/node_modules/, /example/],
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js']
  }
}
