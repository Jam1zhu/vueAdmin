/**
 * Created by ZLY on 2018/12/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import menuStore from './store.menus'

const Store = {
    state: {
        userInfo: {
            avatar: require('images/avatar_default.png')
        }
    },
    mutations: {},
    actions: {},
    getter: {},
    modules: {
        menuStore
    }
}

export default new Vuex.Store(Store)
