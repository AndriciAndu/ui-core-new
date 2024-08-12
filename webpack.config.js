const path = require('path');


module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve('build'),
    filename: 'main.js',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                namedExport: false,
                exportLocalsConvention: 'as-is',
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
    ],
  },

  externals: {
    react: 'react',
  },
};
