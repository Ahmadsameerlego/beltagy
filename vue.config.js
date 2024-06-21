const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://64.227.32.127/api/",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
