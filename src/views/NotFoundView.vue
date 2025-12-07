<template>
  <section class="text-center flex flex-col justify-center items-center h-96 bg-gradient-to-b from-gray-50 to-white">
    <i class="pi pi-exclamation-triangle text-yellow-500 text-8xl mb-8 animate-pulse"></i>
    <h1 class="text-7xl font-bold mb-6 text-gray-800">404 Not Found</h1>
    <p class="text-2xl mb-8 text-gray-600">This page does not exist</p>

    <RouterLink 
      to="/" 
      class="text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-xl px-8 py-4 mt-4 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      Go Back Home
    </RouterLink>
  </section>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>