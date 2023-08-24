const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/styles.scss";`
      }
    }
  },
  publicPath: '',
  devServer: {
    proxy: 'https://api.weather.yandex.ru'
  }
})
