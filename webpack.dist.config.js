var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: "./app/s3-dropzone.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "s3-dropzone.js",
    libraryTarget: "umd",
    library: 'S3Dropzone'
  },
  externals: {
    react: "react"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        include: path.join(__dirname, "app")
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader",
        include: path.join(__dirname, "app")
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": `"${process.env.NODE_ENV}"`
      }
    })
  ]
};

