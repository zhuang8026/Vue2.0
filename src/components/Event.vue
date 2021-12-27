<template>
    <div class="event">
        ------------ 事件 ------------
        <h3>{{ count }}</h3>
        <button type="button" name="button" v-on:click="msgAction('wiils', $event)">Test</button>
        <div class="parent" v-on:click="parent">
            <p>parent</p>
            <p>parent</p>
            <p>parent</p>
            <p>parent</p>
            <div class="child" v-on:click.stop="child">child</div>
            <!-- https://cn.vuejs.org/v2/guide/events.html -->
        </div>
    </div>
</template>

<script>
const Event = {
    data() {
        return {
            count: 1
        };
    },
    methods: {
        msgAction(a, b) {
            this.count++;
            window.console.log(Math.random(), a, b);
        },
        child() {
            window.console.log('child');
        },
        parent() {
            window.console.log('parent');
        }
    }
};

export default Event;
</script>

<style></style>
