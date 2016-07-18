var webpack = require('webpack'),
    production = process.env.NODE_ENV === 'production',
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CleanPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

    // var cssName = production ? "[name]-[hash].css": '[name].css',
    // jsName = 

options = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: 'dist/'
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
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url?limit=10000',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
            },
            {
                test: /\.scss$/,
                // loaders: ['style', 'css', 'sass'] //é injectado no html
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader") //cria novos ficheiros css
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', // Move dependencies to our main file
            children: true, // Look for common dependencies in all children,
            minChunks: 2, // How many times a dependency must come up before being extracted
        }),
        new CleanPlugin('dist'),
        new ExtractTextPlugin("[name].css?", { allChunks: true }),
        // new HtmlWebpackPlugin({
        //     hash : true,
        //     template: 'index.html',
        //     filename: '../index.html'
        // }),        
    ]
}

if (production) {
    options.plugins = options.plugins.concat([    
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                screw_ie8: true,
                warnings: false
            }
        }),
              
    ]);
}

module.exports = options;