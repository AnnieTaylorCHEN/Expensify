const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode:'production',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }, 
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: "styles.css", 
            chunkFilename: "[id].css"}),
        new CleanWebpackPlugin(), 
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
        historyApiFallback: true
    }
}