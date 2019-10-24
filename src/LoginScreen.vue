<template>
    <div id="login-screen">
        <h1>Login</h1>
        <div><span>Name: <input v-model="message"></span></div>
        <div v-if="message"><span>Welcome: {{message}}</span></div>
        <div style="padding-top:30px;">Target-Platform:</div>
        <component :is="platformDependent"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import LoginDev from './LoginDev.vue'
    import LoginProd from './LoginProd.vue'

    export default {
        name: "login-screen",
        data: function(){return {message:"", platformDependent:"devOrProd"}},
        props: {},
        methods: {},
        components: {
            'devOrProd': ENV === 'dev' ? LoginDev : LoginProd,
        }
    }
</script>

<style scoped>


</style>