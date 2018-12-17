/**
 * Created by ZLY on 2018/12/15.
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './asset/styles/index.scss'
import ElementUI from 'element-ui'

Vue.use(ElementUI, {size: 'small'})

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    store,
    mode: 'history',
})

new Vue({
    el: '#beautyAdmin',
    router,
    store,
    render: (h) => h(App)
})