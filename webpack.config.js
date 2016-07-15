var webpack = require('webpack'),
    production = process.env.NODE_ENV === 'production',
    path = require('path');


options = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test:   /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url?limit=10000',
            },   
            {
            test: /\.css$/,
            loader: "css-loader!autoprefixer-loader"
            },
            {
            test: /\.scss$/,
            loader: "css-loader!sass-loader"
            }                             
        ]
    },
    plugins: [
    ]
}

if (production){

    options.plugins = options.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                screw_ie8: true,
                warnings: false
            }
        })
    ]);  
}

module.exports = options;