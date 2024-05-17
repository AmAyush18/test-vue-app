<template lang="">
    <div class=''>
        Sum of {{ num1 }} and {{ num2 }} is {{ num1 + num2 }}
    </div>
</template>
<script setup>
const {num1, num2} = defineProps({
  num1: {
    type: Number,
    required: true
  },
  num2: {
    type: Number,
    required: true
  }
})
</script>