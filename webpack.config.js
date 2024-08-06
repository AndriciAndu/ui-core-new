const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./src"],
    open: true,
    hot: true,
    liveReload: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: 'css-loader', 
            options: {
              modules: true
            }
          }
        ],
      },
    ],
  },
};
