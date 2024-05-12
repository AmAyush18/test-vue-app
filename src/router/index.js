import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import LearnView from '../views/LearnView.vue'
import MapGameView from '../views/MapGameView.vue'
import { projectAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    if(!user) {
        next({ name: 'Login' })
    }
    next()
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/learn',
        name: 'Learn',
        component: LearnView,
        beforeEnter: requireAuth
    },
    {
        path: '/map-game',
        name: 'MapGame',
        component: MapGameView,
        beforeEnter: requireAuth
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router