import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/worktable',
            name: 'worktable',
            component: () => import('../components/Worktable/Worktable.vue')
        },
        {
            path: '/english',
            name: 'english',
            component: () => import('../components/Worktable/CoursesPages/English.vue')
        }
    ]
})

export default router