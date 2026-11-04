<!-- This is the traditional way to define a Vue component -->
<script >
export default {
    data(){
        return {
            message: "This is Vue job search for hands on vue",
            name:'Scot',
            status:'Inactive',
            tasks:['Task 1','Task 2','Task 3']
        }
    }
}
// import ListingJobs from './co§mponents/ListingJobs.vue'
</script>

<template>
    <h1>{{message}}</h1>
    <p>Name: {{name}}</p>
    <p v-if='status === "Active"'>You are logged in Active account</p>
    <p v-else-if='status==="Inactive"'>You are in Inactive account</p>
    <p v-else>You are in unknown account</p>

    <div>
        <h5>Mapping the taks using for</h5>
        <ul>
            <li v-for='tsks in tasks' :key='tsks'>{{tsks}}</li>
        </ul>
    </div>

<!-- <h1>This is Vue job search for ha nds on vue</h1> -->
<!-- <ListingJobs/> -->
</template>

<style scoped>
h1{
    color:green
}
</style>
