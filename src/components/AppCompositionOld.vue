<script setup>
import { ref } from 'vue'
const message = ref("This is Vue job search for hands on vue")
const name = ref('Sagar')
const status = ref('Inactive')
const tasks = ref(['Task 1', 'Task 2', 'Task 3'])
const link = ref('https://www.google.com')
function toogleStatus(e) {
    console.log('e', status)
    if (status.value.toLocaleLowerCase() === 'active') {
        status.value = 'Inactive'
    } else if (status.value.toLocaleLowerCase() === 'inactive') {
        status.value = 'Active'
    } else {
        status.value = 'Unknown'
    }
}
</script>

<template>
    <h1>{{ message }}</h1>
    <p>Name: {{ name }}</p>
    <p v-if='status === "Active"'>You are logged in Active account</p>
    <p v-else-if='status === "Inactive"'>You are in Inactive account</p>
    <p v-else>You are in unknown account</p>

    <div>
        <h5>Mapping the taks using for</h5>
        <ul>
            <li v-for='tsks in tasks' :key='tsks'>{{ tsks }}</li>
        </ul>
    </div>
    <div>
        <a v-bind:href='link' target="_blank">Click here to visit Google old way</a>
        <br>
        <a :href='link' target="_blank">Click here to visit Google using new way</a>
    </div>

    <button v-on:click='toogleStatus'>Toogle Status</button>
</template>

<style scoped>
h1 {
    color: green
}

button {
    margin-top: 20px;
    cursor: pointer;
}
</style>
