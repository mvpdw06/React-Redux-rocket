import path from 'path';
import webpack from 'webpack';

const webpackConfig = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index'),
        'webpack-dev-server/client?http://localhost:9487',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: path.join(__dirname, 'output/assets'),
        filename: 'app.js',
        publicPath: '/assets'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: [/node_modules/]
            }
        ]
    }
}

module.exports = webpackConfig;