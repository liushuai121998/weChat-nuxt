

# 特殊配置项
```
asyncData(限于页面组件) 最重要的一个键，支持[异步数据处理](https://zh.nuxtjs.org/guide/async-data), 第一个参数是当前组件的上下文对象

fetch 用于获取数据填充应用的状态树（store） `fetch`方法不会设置组件的数据

head 配置当前页面的Meta标签 

layout 指定当前页面使用的布局

transition 指定页面切换的[过渡动效](https://zh.nuxtjs.org/api/pages-transition)

scrollToTop 默认false 判定渲染页面是否需要将当前页面滚动到顶部

validate 校验动态路由的参数

middleware 指定页面的中间件， 中间件会在页面渲染之前被调用

```


# asyncData `由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。`

1. 返回promise
```
export default {
    asyncData ({params}) {
        return axios.get(`https://my-api/posts/${params.id}`)
                .then(res => {
                    return {
                        title: res.data.title
                    }
                })
    }
}
```
2. 使用async 或 await
```
export default {
    async asyncData ({params}) {
        let {data} = axios.get(`https://my-api/posts/${params.id}`)
    }
}
```

3. 使用回调函数
export default {
    asyncData ({params}, callback) {
        axios.get(`https://my-api/posts/${params.id}`)
        .then(res => {
            callback(null, {title: res.data.title})
        })
    }
}

# fetch
```
<template>
  <h1>Stars: {{ $store.state.stars }}</h1>
</template>

<script>
export default {
  fetch ({ store, params }) {
    return axios.get('http://my-api/stars')
    .then((res) => {
      store.commit('setStars', res.data)
    })
  }
}
</script>

```

# layout 属性
```
export default {
    layout: 'blog',
    // 或
    layout (context) {
        return 'blog'
    }
}
```