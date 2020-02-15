import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/views/Home'
import About from './components/views/About'
import Contact from './components/views/Contact'
import Post from './components/views/Post'
import NotFound from './components/views/404'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: ':slug',
            name: 'post',
            component: Post,
            props: true
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ],

    mode: 'history',
})