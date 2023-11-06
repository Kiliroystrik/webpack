// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './index.js',
        products: './src/app/components/products/products.component.js',
        home: './src/app/components/home/home.component.js',
        category: './src/app/components/categories/ProductsByCategories.component.js',
        product: './src/app/components/products/product/product.component.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mon app',
            template: './index.html',
            chunks: ['app'],
        }),
        new HtmlWebpackPlugin({
            title: 'Products Module',
            filename: 'products.html',
            chunks: ['products'], // le bundle du module 'products'
        }),
        new HtmlWebpackPlugin({
            title: 'Home Module',
            filename: 'home.html',
            chunks: ['home'], // le bundle du module 'home'
        }),
        new HtmlWebpackPlugin({
            title: 'Category Module',
            filename: 'category.html',
            chunks: ['category'], // le bundle du module 'category'
        }),
        new HtmlWebpackPlugin({
            title: 'Product Module',
            filename: 'product.html',
            chunks: ['product'], // le bundle du module 'category'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
    },
    devServer: {
        static: {
            directory: __dirname + '/dist',
        },
        port: 9000,
        compress: true,
        historyApiFallback: true,
        hot: true,
        liveReload: true,
    }
};
