<template>
  <section class="py-8">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg">
        <Card bg="bg-gradient-to-br from-blue-50 to-blue-100">
          <h2 class="text-3xl font-bold text-gray-800 mb-3">For Developers</h2>
          <p class="mt-2 mb-6 text-gray-600 text-lg">
            Browse our Vue jobs and start your career today
          </p>

          <RouterLink 
            to="/" 
            class="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg px-6 py-3 hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold">
            Browse Jobs
          </RouterLink>
        </Card>

        <Card bg="bg-gradient-to-br from-green-50 to-green-100">
          <h2 class="text-3xl font-bold text-gray-800 mb-3">For Employers</h2>
          <p class="mt-2 mb-6 text-gray-600 text-lg">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink 
            to="/jobs/add"
            class="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg px-6 py-3 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold">
            Add Job
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import Card from '@/components/Card.vue';
</script>