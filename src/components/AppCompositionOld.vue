<script setup>
import { ref, onMounted } from 'vue'
import { capitalize } from './../utils/helper.js'
const message = ref("This is Vue job search for hands on vue")
const name = ref('Sagar')
const status = ref('Inactive')
const tasks = ref([])
const link = ref('https://www.google.com')

const newTask = ref('')

function toogleStatus(e) {
    if (status.value.toLocaleLowerCase() === 'active') {
        status.value = 'Inactive'
    } else if (status.value.toLocaleLowerCase() === 'inactive') {
        status.value = 'Active'
    } else {
        status.value = 'Unknown'
    }
}
const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value)
        newTask.value = ''
    }
}

const deleteTask = (index) => {
    tasks.value.splice(index, 1)
}
const getTasks = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        tasks.value = data.map(task => capitalize(task.title))
    }
    catch (error) {
        console.log('Error while fetching the tasks', error)
    }
}
onMounted(() => {
    getTasks()
})
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
            <li v-for='(tsks, index) in tasks' :key='tsks'>{{ tsks }} <span @click='deleteTask(index)'
                    class='delete'>x</span></li>
        </ul>
    </div>
    <div>
        <a v-bind:href='link' target="_blank">Click here to visit Google old way</a>
        <br>
        <a :href='link' target="_blank">Click here to visit Google using new way</a>
    </div>

    <button v-on:click='toogleStatus'>Toogle Status</button>
    <!-- For adding new taks using v-bind or binding  -->
    <div>
        <form @submit.prevent='addTask'>
            <label for="new Task">Add New Task</label>
            <input type='text' htmlfor='new Task' name='newTask' id='newTask' v-model='newTask'>
            <button type='submit'>Add Task</button>
        </form>
    </div>
</template>

<style scoped>
h1 {
    color: green
}

button {
    margin-top: 20px;
    cursor: pointer;
    margin-left: 10px;
}

.delete {
    color: red;
    cursor: pointer;
    font-weight: bold;
}
</style>
