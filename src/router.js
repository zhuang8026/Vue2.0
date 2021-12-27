import Vue from 'vue';
import VueRouter from 'vue-router';

import pageA from './page/a.vue';
import pageB from './page/b.vue';
import pageC from './page/c.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/pageA/:id?', component: pageA },
    { path: '/pageB', component: pageB },
    { path: '/', component: pageC }
];

const router = new VueRouter({ routes });

export default router;
