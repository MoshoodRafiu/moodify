import * as VueRouter from 'vue-router';

import Home from '../../components/Home.vue';

const routes = [
    {path: '/', component: Home}
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export {
    router
}