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
            {test: /\.js$/, loader: 'babel'},
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/}
        ]
    }
};