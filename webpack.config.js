const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [{
          loader: 'url-loader'
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: "./dist"
  }
};
