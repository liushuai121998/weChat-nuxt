<template>
    <div>
        <h1>Hi from {{name}}</h1>
        <nuxt-link to="/user">to user</nuxt-link>
    </div>
</template>

<script>
    export default {
        asyncData () {
            return {
                name: process.static ? 'static' : (process.server ? 'server' : 'client')
            }
        },
        head: {
            title: 'User One'
        }
    }
</script>