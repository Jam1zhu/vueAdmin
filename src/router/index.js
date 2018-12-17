/**
 * Created by ZLY on 2018/12/15.
 */
import Main from 'views/index.vue'
const Login = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    component: () => import('views/login/login.vue')
}
// const Index = {
//     path: '/',
//     redirect: '/index/home_page',
// }
const AppRouter = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        redirect:'/index/home_page',
        meta: {
            title: '首页'
        },
        component: Main,
        children: [
            {
                path: 'home_page',
                name: 'home_page',
                meta: {
                    title: '首页'
                },
                component: () => import('views/home/home.vue')
            }
        ]
    }
]

// const NotFoundPage = {
//     path: '*',
//     redirect: '/index'
// }
export default [
    Login,
    // Index,
    ...AppRouter,
    // NotFoundPage
]