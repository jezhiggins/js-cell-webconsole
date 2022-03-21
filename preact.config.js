
export default {
  webpack(config, env, helpers, options) {
    config.output = config.output || {};
    config.output.publicPath = "/jscell-web-console/";
  }
}
