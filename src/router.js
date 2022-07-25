import { createRouter, createWebHistory } from 'vue-router'
import HouseInfo from '@/pages/house-info.vue'
import Contact from '@/pages/contact.vue'
import Role from '@/pages/role.vue'
import User from '@/pages/User.vue'
import Posts from '@/pages/posts.vue'
const routes = [
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
        component: Posts
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router
