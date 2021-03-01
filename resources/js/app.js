//require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'
import AppLayout from './Layouts/default';

Vue.component('AppLayout', AppLayout);
Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')