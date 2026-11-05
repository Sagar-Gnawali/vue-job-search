<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import ListingJobs from '@/components/ListingJobs.vue'
</script>
<template>
    <Hero title="Become a Software Engineer" subTitle="Practice your Vue skills and land your dream job" />
    <HomeCards />
    <ListingJobs limit="5" showButton="true" />
</template>