import { createRouter, createWebHistory } from 'vue-router'

import Home from 'views/home/Home.vue'
import Category from 'views/category/Category.vue'
import Cart from 'views/cart/Cart.vue'
import Pofile from 'views/profile/Profile.vue'
// const Category = () => import('views/category/Category.vue')
// const Cart = () => import('views/cart/Cart.vue')
// const Pofile = () => import('views/profile/Profile.vue')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Pofile
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router