<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col items-center gap-y-5 mx-5 min-h-[90vh] justify-center">
        <input type="email" required placeholder="email" v-model="email" class="px-3 py-2 w-[380px] bg-opacity-30 bg-transparent border border-orange-200 rounded-lg">
        <input type="password" required placeholder="password" v-model="password" class="px-3 py-2 w-[380px] bg-opacity-30 bg-transparent border border-orange-200 rounded-lg">
        <div class="text-sm text-red-300">{{ error && error }}</div>
        <button class="bg-teal-300 py-2 px-3 text-[#1e1e1e] text-lg font-semibold rounded-lg hover:border hover:border-teal-300 hover:bg-transparent hover:text-white">Log in</button>
        <p class="text-sm font-[500]">New to Vue? <router-link to="/signup" class="text-teal-300 hover:text-teal-500">Signup</router-link></p>
    </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../../firebase/useLogin.js'

export default {
    setup() {
        // refs
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                alert('user logged in successfully')
            }
        }

        return { email, password, handleSubmit, error }
    }
}
</script>