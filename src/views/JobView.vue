<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-gradient-to-b from-green-50 to-white">
    <div class="container m-auto py-12 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-8">
        <main>
          <div class="bg-white p-8 rounded-2xl shadow-xl text-center md:text-left border border-gray-100">
            <div class="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {{ state.job.type }}
            </div>
            <h1 class="text-4xl font-bold mb-6 text-gray-800">
              {{ state.job.title }}
            </h1>
            <div class="text-gray-600 mb-4 flex align-middle justify-center md:justify-start items-center gap-2">
              <i class="pi pi-map-marker text-xl text-orange-600"></i>
              <p class="text-orange-600 font-medium text-lg">
                {{ state.job.location }}
              </p>
            </div>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-xl mt-6 border border-gray-100">
            <h3 class="text-green-700 text-2xl font-bold mb-6">
              Job Description
            </h3>

            <p class="mb-6 text-gray-700 leading-relaxed text-lg">
              {{ state.job.description }}
            </p>

            <h3 class="text-green-700 text-2xl font-bold mb-4">Salary</h3>

            <p class="mb-4 text-gray-800 text-xl font-semibold">{{ state.job.salary }} / Year</p>
          </div>
        </main>

        <aside>
          <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 class="text-2xl font-bold mb-6 text-gray-800">Company Info</h3>

            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              {{ state.job.company.name }}
            </h2>

            <p class="my-4 text-gray-600 leading-relaxed">
              {{ state.job.company.description }}
            </p>

            <hr class="my-6 border-gray-200" />

            <h3 class="text-lg font-bold text-gray-700 mb-2">Contact Email:</h3>

            <p class="my-3 bg-gradient-to-r from-green-50 to-green-100 p-4 font-semibold text-gray-800 rounded-lg">
              {{ state.job.company.contactEmail }}
            </p>

            <h3 class="text-lg font-bold text-gray-700 mb-2">Contact Phone:</h3>

            <p class="my-3 bg-gradient-to-r from-green-50 to-green-100 p-4 font-semibold text-gray-800 rounded-lg">
              {{ state.job.company.contactPhone }}
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-xl mt-6 border border-gray-100">
            <h3 class="text-2xl font-bold mb-6 text-gray-800">Manage Job</h3>
            <RouterLink 
              :to="`/jobs/edit/${state.job.id}`"
              class="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-center font-bold py-3 px-6 rounded-xl w-full focus:outline-none focus:ring-4 focus:ring-green-300 mt-4 block transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Edit Job
            </RouterLink>
            <button 
              @click="deleteJob"
              class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-xl w-full focus:outline-none focus:ring-4 focus:ring-red-300 mt-4 block transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { reactive, onMounted } from 'vue';
  import { useToast } from 'vue-toastification';
  import BackButton from '@/components/BackButton.vue';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
  import { useRoute, RouterLink, useRouter } from 'vue-router';

  const route = useRoute();
  const toast = useToast();
  const router = useRouter();

  const jobId = route.params.id;

  const state = reactive({
    job: {},
    isLoading: true
  });

  const deleteJob = async () => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this job?')
      if (confirm) {
        await axios.delete(`/api/jobs/${jobId}`);
        toast.success('Job Deleted Successfully');
        router.push('/jobs');
      }
    } catch (error) {
      console.error('Error deleting job', error);
      toast.error('Job Not Deleted');
    }
  };

  onMounted(async () => {
    try {
      const response = await axios.get(`/api//jobs/${jobId}`); // vite.config.js
      state.job = response.data;
    } catch (error) {
      console.error('Error fetching job', error);
    } finally {
      state.isLoading = false;
    }
  })
</script>