module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) { //为客户端和服务端的构建配置进行手工的扩展处理。
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // analyze: false, //默认值false 分析并可视化构建后的打包文件，你可以基于分析结果来决定如何优化它。
    // babel: {presets: ['vue-app']},  //  JS 和 Vue 文件设定自定义的 babel 配置。
    // filenames: {vendor: 'vendor.bundle.[hash].js', app: 'nuxt.bundle.[chunkhash].js'},
    // loaders: [] // 自定义 webpack 加载器
    // plugins: []  // 配置webpack插件
    // postcss: [] 自定义postcss配置
    // publicPath: '/_nuxt/' // Nuxt.js 允许你将待发布的文件直接上传至 CDN 以获得最佳访问性能，只需设置 publicPath 为你的 CDN 地址即可。
    // vendor: [] // Nuxt.js 允许你在自动生成的 vendor.bundle.js 文件中添加一些模块，以减少应用 bundle 的体积。这里说的是一些你所依赖的第三方模块 (比如 axios)
  },
  // cache: true or {max: 1000, maxAge: 9000000} // 缓存配置
  // css: []  // Nuxt.js 让你可以配置全局 CSS 文件、模块、库（每个页面都会被引入）。
  dev: (process.env.NODE_ENV !== 'production'), // 配置是开发模式还是生产模式
  // env: {}  // Nuxt.js 让你可以配置在客户端和服务端共享的环境变量。

  // plugins: [] // plugins 属性使得你可以轻易地为 Nuxt.js 配置使用 Vue.js 插件。

  // router: {
  //   base: '/app/', // 基础路由
  //   mode: 'history', //配置路由的模式，鉴于服务端渲染的特性，不建议修改该配置。
  //   linkActiveClass: 'nuxt-link-active', // 全局配置 <nuxt-link> 组件默认的激活类名。
  //   scrollBehavior: function () {}, // 用于个性化配置跳转至目标页面后的页面滚动位置
  //   middleware: 'user-agent', // or [] // 为应用的每个页面设置默认的中间件。
  //   extendRoutes(routes) {  // 自定义的路由配置：
  //     routes.push({
  //       name: 'custom',
  //       path: '*',
  //       component: resolve(__dirname, 'pages/404.vue')
  //     })
  //   }
  // },
  // srcDir: '/' // Nuxt.js 应用的源码目录
  // transition: 'page' // 用于设置页面切换过渡效果的默认属性值。
}
