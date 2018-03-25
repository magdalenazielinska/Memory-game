var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['whatwg-fetch', './js/memory.jsx', './scss/main.scss'],
    output: { filename: "./js/out.js" },
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx$/, exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-2', 'react'],
                            plugins: ['emotion']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader?name=/public/icons/[name].[ext]',
                        options: {
                            limit: 20000,
                            name: '../img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/main.css', {
            allChunks: true
        })
    ]
}
