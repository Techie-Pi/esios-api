const Path = require("path");

module.exports = {
    target: "web",
    entry: "./src/index.js",
    output: {
        path: Path.resolve(__dirname, "build"),
        filename: "esiosapi.bundle.js",
        library: "Esios",
        libraryTarget: "var"
    },
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        }
    },
    mode: "production"
};
