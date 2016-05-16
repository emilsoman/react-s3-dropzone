var path = require("path")
var webpack = require('webpack')

module.exports = {
  entry: {
    example: "./app/example.js",
    bundle: "./app/s3-dropzone.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: "dist/"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        include: path.join(__dirname, 'app')
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader",
        include: path.join(__dirname, 'app')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${process.env.NODE_ENV}"`
      }
    }),
    new webpack.EnvironmentPlugin([
        "POLICY",
        "SIGNATURE",
        "AWS_ACCESS_KEY_ID",
        "URL"
    ])
  ]
};
