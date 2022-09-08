import './bootstrap';
import App from './App.vue';

import { createApp } from 'vue';
import { router } from './router';
import { store } from './store';
import { components } from './components';

const app = createApp(App);
app.use(router);
app.use(store);
components(app);
app.mount("#app");