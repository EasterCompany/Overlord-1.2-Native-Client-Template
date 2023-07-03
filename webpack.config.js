const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = async function (env, argv) {
  // Set by expo-cli during `expo build:web`
  const isEnvProduction = process.env.REACT_APP_ENV === "Prd";

  // Create the default config
  const config = await createExpoWebpackConfigAsync(env, argv);

  if (isEnvProduction) {
    config.plugins.push(
      // Generate a service worker script that will pre-cache, and keep up to date,
      // the HTML & assets that are part of the webpack build.
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: path.resolve(__dirname, "web", "service-worker.ts"),
        dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
        exclude: [
          /\.map$/,
          /asset-manifest\.json$/,
          /LICENSE/,
          /\.js\.gz$/,
          // Exclude all apple touch and chrome images because they're cached locally after the PWA is added.
          /(apple-touch-startup-image|chrome-icon|apple-touch-icon).*\.png$/,
        ],
        // Bump up the default maximum size (2mb) that's pre-cached,
        // to make lazy-loading failure scenarios less likely.
        // See https://github.com/cra-template/pwa/issues/13#issuecomment-722667270
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      })
    );
  }

  return config;
};