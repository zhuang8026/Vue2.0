<template>
    <div class="hello">
        ------------ 模板語法 ------------
        <h1>{{ msg }}</h1>
        <h1>{{ static_msg }}</h1>
        <h1 v-html="msg" v-bind:id="txt_id"></h1>
        <span style="color: red">Hello, {{ userName }} </span>
        <p v-if="see">這是true</p>
        <p v-else>這是false</p>
        <div v-number="num"></div>

        ------------ 樣式 ------------
        <div v-bind:class="[text1, text2]">
            我借你: {{ money_post }}, 你換我: {{ money_get }}, 還剩下:{{ money_last }}
        </div>

        <div v-bind:class="{ text1, text2 }">style object 1</div>
        <div v-bind:class="{ text1: see }">style object 2</div>
        <div v-bind:class="obj">style object 3</div>
        <button v-on:click="btnAction">modify</button>
        <br />
        ------------ 遍歷 ------------
        <ul>
            <li v-for="(item, index) in arr" v-bind:key="index">{{ item }}:{{ index }}</li>
        </ul>
        <ul>
            <template v-for="(item, index) in arr">
                <li v-bind:key="index">{{ item }}:{{ index }}</li>
            </template>
        </ul>
    </div>
</template>

<script>
import './number';

export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: 'no msg'
        },
        static_msg: {
            type: String,
            default: 'no msg'
        },
        userName: {
            type: String,
            default: 'no userName'
        }
    },

    data() {
        return {
            txt_id: 'txt',
            see: false,
            num: 4,
            money_post: 100,
            money_get: 1,
            text1: 'text1',
            text2: 'text2',
            obj: {
                text1: true,
                text2: true
            },
            arr: ['a', 'b', 'c']
        };
    },

    methods: {
        btnAction() {
            this.see = !this.see;
            this.num++;
        }
    },

    computed: {
        money_last() {
            return this.money_post - this.money_get;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
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
