
const webpackDW = require("webpack-dev-middleware");
const webpack = require("webpack");

const
    webpackConfig = require("../build/webpack.dev.config"),
    compiler = webpack(webpackConfig);

module.exports = webpackDW(compiler, {        
    logLevel: "warn", 
    publicPath: webpackConfig.output.publicPath
});