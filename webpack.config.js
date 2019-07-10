const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' })
}

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public','dist'),
        filename: 'bundle.js'
    }, 
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: "styles.css", 
            chunkFilename: "[id].css"}),
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
        })
      ],
    module: {
        rules: [{
            loader: 'babel-loader',
            test:/\.js$/,
            exclude: /node_modules/
        }, {
            test:/\.s?css$/,
            use:[
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'sass-loader'
            ]
        }]
    }, 
    devtool: 
    'source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public'), 
        watchContentBase: true,
        historyApiFallback: true,
        publicPath: '/dist/'
    }
}