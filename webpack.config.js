/**
 * Created by josh on 8/27/15.
 */
module.exports = {
    context: __dirname + '/client',
    entry: './app.js',
    output: {
        path: __dirname + '/client',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};