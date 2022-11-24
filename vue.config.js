module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/base.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://yanxuan.xiecheng.live:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  publicPath: './',
  outputDir: 'dist',
  // indexPath: 'index2.html',
  productionSourceMap: false
}

// www.yanxuan.com/yx
