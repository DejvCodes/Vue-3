<template>
  <div>
    <h2>{{ name }}</h2><br>

    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p><br>

    <h3>Tasks:</h3>
    <ul>
      <li v-for="task in tasks" :key="task">- {{ task }}</li>
    </ul> <br>
    <!-- <a v-bind:href="link" target="_blank">Click for Google</a> -->
    <a :href="link" target="_blank">Click for Google</a><br>

    <button @click="toggleStatus">Change status</button>
  </div>
</template>

<script>
  export default {
    data() { // Zde jsou data - vracíme je pomocí return
      return {
        name: 'David Kalmus',
        status: 'active', // Může být i boolean (v-if, v-else-if)
        tasks: ['Task One', 'Task Two', 'Task Three'],
        link: 'https://google.com'
      }
    },
    methods: {
      toggleStatus() {
        if (this.status === 'active') {
          this.status = 'pending'
        } else if (this.status === 'pending') {
          this.status = 'inactive'
        } else {
          this.status = 'active'
        }
      }
    }
  }
</script>

<style scoped>
  div {
    padding: 24px;
  }
  h1 {
    color: red;
  }
  h2 {
    background: rgb(220, 220, 220);
  }
</style>