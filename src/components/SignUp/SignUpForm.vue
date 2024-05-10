<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col items-center gap-y-5 mx-5 min-h-[90vh] justify-center">
        <input type="text" required placeholder="display name" v-model="displayName" class="px-3 py-2 w-[380px] bg-opacity-30 bg-transparent border border-orange-200 rounded-lg">
        <input type="email" required placeholder="email" v-model="email" class="px-3 py-2 w-[380px] bg-opacity-30 bg-transparent border border-orange-200 rounded-lg">
        <input type="password" required placeholder="password" v-model="password" class="px-3 py-2 w-[380px] bg-opacity-30 bg-transparent border border-orange-200 rounded-lg">
        <div class="text-sm text-red-300">{{ error && error }}</div>
        <button class="bg-teal-300 py-2 px-3 text-[#1e1e1e] text-lg font-semibold rounded-lg hover:border hover:border-teal-300 hover:bg-transparent hover:text-white">Sign up</button>
        <p class="text-sm font-[500]">Already registered? <router-link to="/login" class="text-teal-300 hover:text-teal-500">Login</router-link></p>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../../firebase/useSignup.js'

export default {
    setup() {
        const { error, signup } = useSignup()

        // refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
             await signup(email.value, password.value, displayName.value)
             if(!error.value) {
                alert('user signed up successfully')
            }
        }

        return { displayName, email, password, handleSubmit, error }
    }
}
</script>