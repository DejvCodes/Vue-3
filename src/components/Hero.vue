<template>
  <section class="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-24 mb-8 relative overflow-hidden">
    <div class="absolute inset-0 bg-black opacity-10"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
      <div class="text-center">
        <h1 class="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl mb-6 drop-shadow-lg animate-fade-in">
          {{ title }}
        </h1>
        <p class="my-6 text-2xl text-white font-light drop-shadow-md max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-10 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: 'Become a Vue Dev'
    },
    subtitle: {
      type: String,
      default: 'Find the Vue job that fits your skills and needs'
    }
  });
</script>