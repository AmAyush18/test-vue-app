<script setup>
import { useRouter } from 'vue-router';
import SignUpForm from '../components/SignUp/SignUpForm.vue';

const router = useRouter()

const signedUp = () => {
    router.push({ name: 'Home' })
}
</script>

<template>
    <SignUpForm @signup="signedUp" />
</template>