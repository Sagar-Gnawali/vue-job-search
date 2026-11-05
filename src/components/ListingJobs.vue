<script setup>
import { ref } from 'vue'
import JobData from '@/jobs.json'

const jobs = ref(JobData)


</script>

<template>
    <p class="text-lg">This is listing jobs</p>
    <p v-for='jbs in jobs' :key='jbs.id'>{{jbs}}</p>
</template>