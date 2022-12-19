const {
  WordpressShortcodeWebpackPlugin,
} = require("wordpress-shortcode-webpack-plugin");

module.exports = function override(config, env) {
  config.plugins.push(
    new WordpressShortcodeWebpackPlugin({
      wordpressPluginName: "synesthesia-keyboard",
    })
  );
  return config;
};
