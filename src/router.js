import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/landing-page.vue'
import HouseInfo from '@/pages/house-info.vue'
import Contact from '@/pages/contact.vue'
import Role from '@/pages/role.vue'
import User from '@/pages/user.vue'
import Info from '@/pages/info.vue'
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
        component: Info
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router
