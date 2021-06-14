module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: ["./tsconfig.eslint.json", "./tsconfig.json"],
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        "no-console": "off",
    },
};
