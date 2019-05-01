const path = require('path');

module.exports = {
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

    // Tell webpack ro run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: [
                    /node-modules/
                ],
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            targets: {
                                browsers: [
                                    'last 2 versions'
                                ]
                            }
                        }]
                    ]
                }
            }
        ]
    }
};