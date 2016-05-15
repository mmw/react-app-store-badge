module.exports = {
  entry: './src/example.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/example'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
