<template>
    <div id="app">
        <input v-model="message" type="text">
        <h2 @click="popup('oho')" class="message">{{ message }}</h2>
        <h2 @click="popup('aha')" class="message">{{ count }}</h2>

    </div>
</template>

<script>
    let g = 0;

    export default {
        computed: {
            count: function(){return ++g},
        },
        methods: {
            popup: function(msg){alert(msg)},
        },
        data() {
            return {
                message: 'Hello universe!',
                number : 0,
            };
        },
    };
</script>

<style>
    .message {
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        color: blue;
    }
</style>