var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: "./src/s3-dropzone.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "react-s3-dropzone.js",
    libraryTarget: "umd",
    library: 'S3Dropzone'
  },
  externals: {
    react: "React"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        include: path.join(__dirname, "src")
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

