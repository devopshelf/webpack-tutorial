const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                use:"babel-loader",
                test:/\.js$/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
              }
        ]
    },
    plugins:[
        new ExtractTextPlugin('style.css')
    ]
}

module.exports = config;