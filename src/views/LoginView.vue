<script setup>
import LoginForm from '../components/Login/LoginForm.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const loggedIn = () => {
    console.log('emitted')
    router.push({ name: 'Home'})
}
</script>

<template>
    <LoginForm @login="loggedIn" />
</template>