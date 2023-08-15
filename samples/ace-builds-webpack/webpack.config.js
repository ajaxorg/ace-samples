"use strict";
var path = require("path")
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
                    },
                    {
                        from: path.dirname(require.resolve('ace-builds/src-noconflict/ace')),
                        to:'./ace-modules',
                        filter: resourcePath =>
                            /worker-yaml\.js$/.test(resourcePath)                            
                    }
                ]
            })
        ]
    };
};
