<script setup>
    
</script>

<template>
    <div class="w-full py-4 bg-[#1E1E1E]">
        <div class="w-[90%] mx-auto flex items-center justify-between">
            <router-link to="/">
                <img src="/vite.svg" alt="logo" class="w-[40px] h-[40px] object-cover">
            </router-link>
            <div class="flex gap-x-6 items-center text-white text-[20px]">
                <a href="" class="hover:text-teal-300">Learn</a>
                <a href="" class="hover:text-teal-300">Build</a>
            </div>
            <div class="flex gap-x-5 items-center text-white text-[20px]">
                <a href="" class="hover:text-teal-300">English</a>
                <router-link to="/signup" class="px-2 py-1 border border-white text-teal-300 rounded-[5px] hover:border-teal-300 hover:text-white">
                    Sign Up
                </router-link>
            </div>
        </div>
    </div>
</template>