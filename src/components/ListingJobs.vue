<script setup>
import { ref, defineProps, onMounted } from 'vue'

import axios from 'axios'

import JobListingCard from '@/components/ListingJob.vue'
import ViewAllJobs from '@/components/ViewAllJobs.vue'

defineProps({
    limit: {
        type: Number,
        default: 10
    },
    showButton: {
        type: Boolean,
        default: false
    }
})

const jobs = ref([])

const getJobLists = async () => {
    try {
        const res = await axios.get('http://localhost:8080/jobs')
        jobs.value = res.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getJobLists()
})
</script>

<template>
    <section class='bg-blue-500 px-4 py-10'>
        <div class='container-xl lg:container m-auto'>
            <h4 class='text-3xl font-bold text-green-500 mb-6 text-center'>Browse Jobs</h4>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <!-- <p v-for='jbs in jobs' :key='jbs.id'>{{ jbs.title }}</p> -->
                <JobListingCard v-for='jbs in jobs.slice(0, limit || jobs.length)' :key='jbs.id' :job='jbs' />
            </div>
        </div>
    </section>
    <ViewAllJobs :showButton="showButton" />
</template>