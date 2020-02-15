

require('./bootstrap');

window.Vue = require('vue');

Vue.component('app', require('./components/AppComponent.vue').default);

Vue.component('navbar-component', require('./components/sections/NavbarComponent.vue').default);
Vue.component('header-component', require('./components/sections/HeaderComponent.vue').default);
Vue.component('main-content', require('./components/views/MainContent.vue').default);
Vue.component('footer-component', require('./components/sections/FooterComponent.vue').default);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import router from './routes'

const app = new Vue({
    el: '#app',
    router
});