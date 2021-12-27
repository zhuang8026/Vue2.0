import Vue from 'vue';

Vue.directive('number', {
    /**
     * desc: binding
     * -> name (v-XXX)
     * -> value => binding.value
     * -> oldValue => binding.oldValue(update and componentUpdated use)
     * -> expression => ex: v-demo="1 + 1" / binding.expression 顯示 "1 + 1"
     * -> arg => v-demo:foo (顯示 ) / binding.arg 顯示 "foo"
     * -> modifiers
     * 
     * -> web: https://cn.vuejs.org/v2/guide/custom-directive.html#ad
    */

    // 第一次調用
    bind: function (el, binding) {
        el.textContent = binding.value * 2;
    },
    // 被綁定元素插入父節點是調用
    inserted: function (el, binding) {
        // el.textContent = binding.value * 2;
    },
    // 節點更新調用
    update: function (el, binding) {
        // console.log(binding);
        el.textContent = binding.value * 2;
    },
    componentUpdated: function () {},
    unbind: function () {},
});
