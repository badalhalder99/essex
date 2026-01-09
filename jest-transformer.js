const config = {
  babelrc: false,
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        debug: false,
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
  ],
};
module.exports = require("babel-jest").default.createTransformer(config);
