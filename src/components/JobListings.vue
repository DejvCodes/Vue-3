<template>
  <section class="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">
        Browse Jobs
      </h2>

      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show job listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing 
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)" 
          :key="job.id" 
          :job="job" 
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink 
      to="/jobs/" 
      class="block bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-4 px-8 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg">
      View All Jobs
    </RouterLink>
  </section>
</template>

<script setup>
  import axios from 'axios';
  import { RouterLink } from 'vue-router';
  import JobListing from './JobListing.vue';
  import { reactive, onMounted } from 'vue';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

  defineProps({
    limit: Number,
    showButton: {
      type: Boolean,
      default: false
    }
  });

  const state = reactive({
    jobs: [],
    isLoading: true
  });

  onMounted(async () => {
    try {
      const response = await axios.get('/api/jobs'); // vite.config.js
      state.jobs = response.data;
    } catch (error) {
      console.error('Error fetching jobs', error);
    } finally {
      state.isLoading = false;
    }
  });
</script>