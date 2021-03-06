const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    // inform webpack that we're building a bundle
    // for nodejs, rather than the browser.
    target: 'node',

    // Tell webpack the root file of our server app.
    entry: './src/index.js',

    // Tell webpack where to put the output file.
    output:  {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Do not bundle any node modules
    externals: [
        webpackNodeExternals()
    ]
};

module.exports = merge(baseConfig, config);