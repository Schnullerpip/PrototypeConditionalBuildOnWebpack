<template>
    <div id="login-screen">
        <h1>Login</h1>
        <p>{{message}}</p>
        <component :is="platformDependent"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import LoginDev from './LoginDev.vue'
    import LoginProd from './LoginProd.vue'

    export default {
        name: "login-screen",
        data: function(){return {message:"helluuuu", platformDependent:"devOrProd"}},
        props: {},
        methods: {},
        components: {
            'devOrProd': ENV === 'dev' ? LoginDev : LoginProd,
        }
    }
</script>

<style scoped>


</style>