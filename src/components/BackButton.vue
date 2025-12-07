<template>
  <section class="border-b-2 border-gray-200 bg-white shadow-sm">
    <div class="container m-auto py-6 px-6">
      <RouterLink 
        to="/jobs" 
        class="text-green-600 hover:text-green-700 flex items-center font-medium transition-colors duration-300 group">
        <i class="pi pi-arrow-circle-left mr-3 text-xl group-hover:transform group-hover:-translate-x-1 transition-transform duration-300"></i>
        Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>

<script setup> 
  import { RouterLink } from 'vue-router';
</script>