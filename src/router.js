import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/landing-page.vue'
import HouseInfo from '@/pages/house-info.vue'
import Contact from '@/pages/contact.vue'
import Role from '@/pages/role.vue'
import User from '@/pages/User.vue'
import info from '@/pages/info.vue'
import Maps from '@/pages/Maps.vue'

import House1 from '@/pages/house1.vue'
import House2 from '@/pages/house2.vue'
import House3 from '@/pages/house3.vue'
import House4 from '@/pages/house4.vue'
import House5 from '@/pages/house5.vue'
import House6 from '@/pages/house6.vue'
const routes = [
    {
        path: '/trang-chu',
        component: LandingPage
    },
    {
        path: '/quan-ly-nha',
        component: HouseInfo
    },
    {
        path: '/trang-chu',
        component: LandingPage
    },
    {
        path: '/quyen-han',
        component: Role
    },
    {
        path: '/lien-he',
        component: Contact
    },
    {
        path: '/nguoi-dung',
        component: User
    },
    {
        path: '/bai-viet',
        component: info
    },
    {
        path: '/ban-do',
        component: Maps
    },
    {
        path: '/house1',
        component: House1
    },
    {
        path: '/house2',
        component: House2
    },
    {
        path: '/house3',
        component: House3
    },
    {
        path: '/house4',
        component: House4
    },
    {
        path: '/house5',
        component: House5
    },
    {
        path: '/house6',
        component: House6
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router
