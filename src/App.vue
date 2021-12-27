<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld v-bind:msg="msg" static_msg="我是靜態傳遞" v-bind:userName="userName" />
        <Event />
        <Com age="19" v-bind:dy_age="age" @path="pathAction">
            <h1 slot="v1">我要加東西v1</h1>
            <h1 slot="v2">我要加東西v2</h1>
        </Com>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Event from './components/Event.vue';
import Com from './components/Com.vue';

export default {
    name: 'app',
    components: {
        HelloWorld,
        Event,
        Com
    },
    data() {
        return {
            msg: `<span style='color: red'>Hello, Alex_v1 </span>`,
            userName: 'Alex_v2',
            age: 18
        };
    },
    methods: {
        pathAction(data) {
            window.console.log('pathAction', data);
            this.age++;
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
