
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform';

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
import VueRouter from 'vue-router';
// import App from './components/App'
import Home from './components/Home';
import Crud from './components/Crud';

Vue.use(VueRouter)
let routes = [
    { path: '/home', component: Home },
    { path: '/crud', component: Crud }
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })


// Vue.component('home', require('./components/Home.vue'));
// Vue.component('crud', require('./components/Crud.vue'));


const app = new Vue({
    el: '#app',
    router
});
