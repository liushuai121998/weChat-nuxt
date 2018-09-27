# 中间件

*中间件允许您定义一个自定义函数运行在一个页面或一组页面渲染之前*

一个中间件接收[context](https://zh.nuxtjs.org/api#上下文对象)作为第一个参数 
```
// middleware/auth.js
export default function (context) {
    context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent

}
```

中间件执行流程顺序
1. `nuxt.config.js`
2. 匹配布局
3. 匹配页面


中间件异步执行， 返回一个`Promise`
```
// middleware/stats.js
import axios from 'axios'
export default function ({route}) {
    return axios.post('http://my-stats-api.com', {
        url: route.fullPath
    })
}
```

`nuxt.config.js` layouts或pages使用中间件：
nuxt.config.js
```
module.exports = {
    route: {
        middleware: 'stats'
    }
}
// stats 在每个路由改变时调用
```
