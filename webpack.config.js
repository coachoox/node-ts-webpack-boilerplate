const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const BASE_URL = "./src/client/ts";

module.exports = {
    entry: {
        index: `${BASE_URL}/index.ts`,
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "assets"),
        clean: true,
    },
    plugins: [new miniCssExtractPlugin({ filename: "css/style.css" })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
