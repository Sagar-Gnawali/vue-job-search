<script setup>
import { ref } from 'vue'
import JobData from '@/jobs.json'

const jobs = ref(JobData)


</script>

<template>
    <p class="text-lg">This is listing jobs</p>
    <section class='bg-blue-500 px-4 py-10'>
        <div class='container-xl lg:container m-auto'>
            <h4 class='text-3xl font-bold text-green-500 mb-6 text-center'>Brows Jobs</h4>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <p v-for='jbs in jobs' :key='jbs.id'>{{ jbs.title }}</p>
            </div>
        </div>
    </section>
</template>