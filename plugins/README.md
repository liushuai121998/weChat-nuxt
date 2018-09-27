# PLUGINS

This directory contains your Javascript plugins that you want to run before instantiating the root vue.js application.

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/plugins

**This directory is not required, you can delete it if you don't want to use it.**

`需要注意的是，在任何 Vue 组件的生命周期内， 只有 ***beforeCreate*** 和 ***created*** 这两个钩子方法会在 客户端和服务端均被调用。其他钩子方法仅在客户端被调用`

axios 避免重复打包
`nuxt.config.js`
```
module.exports = {
    build: {
        vendor: ['axios']
    }
}
```

# 使用vue插件
`plugins/vue-notifications.js`
```
import Vue form 'vue'
import VueNotifications from 'vue-notifications'
Vue.use(VueNotifications)
```
`nuxt.config.js`
```
module.exports = {
    build: {
        vendor: ['~/plugins/vue-notifications'] // 第三方库打包至库文件里以获得更好的缓存效果
    }
    plugins: ['~/plugins/vue-notifications']
    // { src: '~/plugins/vue-notifications', ssr: false }  只在客户端使用
}
```