<script setup>
import Hero from '../components/Home/Hero.vue';
import Features from '../components/Home/Features.vue';
import Advantages from '../components/Home/Advantages.vue'
import BannerOne from '../components/Home/BannerOne.vue'
import Collaboration from '../components/Home/Collaboration.vue'
import Faq from '../components/Home/Faq.vue';
import Footer from '../components/Home/Footer.vue'
</script>

<template>
    <Header />
    <Hero />
    <Features />
    <Advantages />
    <BannerOne />
    <Collaboration />
    <!-- <Faq /> -->
    <Footer />
</template>

<script>
    export default {
        name: 'HomeView'
    }
</script>