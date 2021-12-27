<template>
    <div class="comp">
        ------------ 組建 ------------
        <slot name="v1" />
        
        <p>{{ name }}: {{ age }}</p>
        <p>{{ name }}: {{ dy_age }}</p>
        <button type="button" name="button" v-on:click="$emit('path', 999)">發送到父組建v1</button>
        <button type="button" name="button" v-on:click="path">發送到父組建v2</button>

        <slot name="v2" />
    </div>
</template>

<script>
const Com = {
    props: {
        age: {
            type: String,
            default: 0
        },
        dy_age: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            name: 'william'
        };
    },
    methods: {
        path() {
            this.$emit('path', 888);
        }
    }
};
export default Com;
</script>

<style></style>
