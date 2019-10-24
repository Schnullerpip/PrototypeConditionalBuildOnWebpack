<template>
    <div id="login-prod">
        <h1>PROD</h1>
    </div>
</template>

<script>
    /// #if BUILD_ENV === 'prod'
    import Vue from 'vue'
    export default Vue.component('login-prod', {
        name: "login-prod"
    })
    /// #endif
</script>


<style scoped>

</style>
