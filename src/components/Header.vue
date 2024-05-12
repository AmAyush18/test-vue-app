<script>
    import getUser from '../firebase/getUser'
    import useLogout from '../firebase/useLogout'

    export default {
        setup () {
            const { user } = getUser()
            const { logout, error } = useLogout()

            const handleLogout = async () => {
                await logout()
                if (!error.value) {
                    console.log('user logged out!')
                }
            }

            return { user, handleLogout }
        }
    }
</script>

<template>
    <div class="w-full py-4 bg-[#1E1E1E]">
        <div class="w-[90%] mx-auto flex items-center justify-between">
            <router-link to="/">
                <img src="/vite.svg" alt="logo" class="w-[40px] h-[40px] object-cover">
            </router-link>
            <div class="flex gap-x-6 items-center text-white text-[20px]">
                <router-link to="/learn" href="" class="hover:text-teal-300">Learn</router-link>
                <router-link to="/map-game" href="" class="hover:text-teal-300">Map Game</router-link>
            </div>
            <div class="flex gap-x-5 items-center text-white text-[20px]">
                <router-link v-if="!user" to="/signup" class="px-2 py-1 border border-white text-teal-300 rounded-[5px] hover:border-teal-300 hover:text-white">
                    Sign Up
                </router-link>
                <router-link v-if="!user" to="/login" class="px-2 py-1 border border-white text-teal-300 rounded-[5px] hover:border-teal-300 hover:text-white">
                    Login
                </router-link>
                <button v-if="user" @click="handleLogout" class="px-2 py-1 border border-white text-teal-300 rounded-[5px] hover:border-teal-300 hover:text-white">
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>