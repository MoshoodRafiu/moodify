import * as VueRouter from 'vue-router';

import MainView from '../../components/Dashboard/MainView.vue';

const routes = [
    { path: '/', component: MainView }
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export {
    router
}