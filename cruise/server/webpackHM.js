
const webpackMW = require("webpack-hot-middleware");
const webpack = require("webpack");

const
    webpackConfig = require("../build/webpack.dev.config"),
    compiler = webpack(webpackConfig),
    heartbeatS = 10;

module.exports = webpackMW(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: heartbeatS * 1000
})