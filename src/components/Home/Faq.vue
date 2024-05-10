<script>
import { ref } from 'vue'

const visible = ref(0)

const isVisible = (check) => check === visible.value
</script>

<template>
    <div class="w-full bg-[#000] py-10">
        <div class="w-[90%] mx-auto">
            <h3 class="text-4xl text-center font-semibold">Frequently Asked Questions</h3>
            <div v-show="isVisible(0)" class="w-[480px] h-[480px] bg-orange-400">

            </div>
        </div>
    </div>
</template>