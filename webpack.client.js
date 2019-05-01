const path = require('path');

module.exports = {
    // Tell webpack the root file of our server app.
    entry: './src/client/client.js',

    // Tell webpack where to put the output file.
    output:  {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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