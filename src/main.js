import Vue from 'vue';
import App from './App.vue';

import router from './router';

Vue.config.productionTip = false;

// old
// new Vue({
//     render: h => h(App)
// }).$mount('#app');

// new
new Vue({
    router
}).$mount('#app');
