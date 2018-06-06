var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
  },
  // add the babel-loader and presets
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       use: [{
         loader: "babel-loader",
         options: { "presets": ["env", "react"]}
       }]
     }
   ]
 }
};
