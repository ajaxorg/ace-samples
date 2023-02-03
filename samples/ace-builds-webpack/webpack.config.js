"use strict";
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
    return {
        devtool: 'source-map',
        entry: {
            app: './src/index.js'
        },
        mode: "production",
        resolveLoader: {
            modules: [
                "node_modules", __dirname + "/node_modules"
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'bundle.[name].js',
            path: __dirname + '/build'
        },
        optimization: {
            minimize: false
        },
        devServer: {
            compress: true,
            port: 9000,
            client: {
                overlay: false
            }
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: "index.html",
                        to: "."
                    }
                ]
            })
        ]
    };
};
