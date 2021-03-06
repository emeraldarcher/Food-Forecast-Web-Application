var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  context: helpers.root(),
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: [' ', '.ts', '.js', '.css', '.scss']
  },

    module: {
        rules: [
            {
            test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: [{loader: 'html-loader', options: {minimize: false}}]
            },
            {
              test: /\.pug$/,
              use: [{loader: 'html-loader', options: {}}, {loader: 'pug-html-loader', options: {}}]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: ['file-loader?name=assets/[name].[hash].[ext]']
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
            },
            {
                test: /\.scss$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader' })
            },
            {
                test: /\.scss$/,
                include: helpers.root('src', 'app'),
                use: ['raw-loader', 'sass-loader']
            }
        ]
    },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new ExtractTextPlugin('[name].[hash].css'),

    // Fixes warnings on windows
    new webpack.ContextReplacementPlugin(
     /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
     __dirname
    ),

    // Fixes more warnings
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('./src'),
        {}
    ),

    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    })
  ]
};
