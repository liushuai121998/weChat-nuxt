<template>
    <div>
        <h1>Welcome!</h1>
        <button @click="$store.commit('increment')">{{$store.state.counter}}</button>
        <nuxt-link to="/user/one">to one</nuxt-link>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        layout: 'blog',
        async asyncData ({params}) {
            let {data} = await axios.get('https://www.baidu.com')
            return {
                html: data
            }
        },
        mounted () {
        }
    }
</script>