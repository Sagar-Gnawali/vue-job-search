<script>
import { ref } from 'vue'
export default {
    setup() {
        const message = "This is Vue job search for hands on vue"
        const name = 'Sagar'
        const status = 'Inactive'
        const tasks = ['Task 1', 'Task 2', 'Task 3']
        const link = 'https://www.google.com'
        function toogleStatus() {
            if (status.toLocaleLowerCase() === 'active') {
                status = 'Inactive'
            } else if (status.toLocaleLowerCase() === 'inactive') {
                status = 'Active'
            } else {
                status = 'Unknown'
            }
        }
        return {
            message,
            name,
            status,
            tasks,
            link,
            toogleStatus
        }
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
