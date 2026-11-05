<script setup>
import { ref, defineProps, onMounted , reactive} from 'vue'

import axios from 'axios'
import { PulseLoader } from 'vue-spinner';
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
const state = reactive({
    jobs:[],
    isLoading: true
})

const getJobLists = async () => {
    try {
        const res = await axios.get('/api/jobs')
        state.jobs = res.data
    } catch (error) {
        console.log(error)
    }finally{
        state.isLoading = false
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
             
            <div v-if='state.isLoading' class='text-center text-gray-500 py-6'>
                <PulseLoader/>
            </div>
            <div v-else class='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <JobListingCard v-for='jbs in state.jobs.slice(0, limit || state.jobs.length)' :key='state.jbs?.id' :job='jbs' />
            </div>
        </div>
    </section>
    <ViewAllJobs :showButton="showButton" />
</template>