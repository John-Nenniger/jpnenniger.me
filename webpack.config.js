const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/,
        }, {
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        },
        ]
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

