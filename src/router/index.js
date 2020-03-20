import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from 'views/home/Home.vue'
import Star from 'views/star/Star.vue'
import Cart from 'views/cart/Cart.vue'
import Profile from 'views/profile/Profile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },

    {
        path: '/star',
        component: Star
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }

]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router