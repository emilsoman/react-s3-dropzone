var path = require("path")
var webpack = require('webpack')

module.exports = {
  entry: {
    example: "./example_standalone.js",
    "react-s3-dropzone": "../../src/s3-dropzone",
    vendor: ["react", "react-dom"]
  },
  devtool: "source-map",
  output: {
    path: path.join(__dirname, 'out'),
    filename: "[name].js",
    publicPath: "out/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        include: [path.join(__dirname), path.join(__dirname, '../../src')]
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader",
        include: path.join(__dirname)
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
    ]),
    new webpack.optimize.CommonsChunkPlugin(
        "vendor", "vendor.js"
    )
  ]
};
