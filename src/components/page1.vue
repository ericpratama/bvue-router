<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/desktop1">desktop1</router-link>
        <router-link to="/desktop2">desktop2</router-link>
        <router-link to="/desktop4">desktop4</router-link>
        <router-link to="/desktop9">desktop9</router-link>
        <router-link to="/details">details</router-link>
        <router-link to="/tbar3">tbar3</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Page1',
        data () {
            return {
                msg: 'cek navigate page'
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>