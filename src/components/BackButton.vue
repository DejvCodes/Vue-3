<template>
  <section class="border-b-2 border-slate-300">
    <div class="container m-auto py-6 px-6">
      <RouterLink 
        to="/jobs" 
        class="text-green-500 hover:text-green-600 flex items-center">
        <i class="pi pi-arrow-circle-left mr-3"></i>
        Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>

<script setup> 
  import { RouterLink } from 'vue-router';
</script>