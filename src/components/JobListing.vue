<template>
  <div class="bg-white rounded-2xl shadow-lg relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div class="p-6">
      <div class="mb-6">
        <div class="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">{{ job.type }}</div>
        <h3 class="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div class="text-gray-600 leading-relaxed">
          {{ truncatedDescription }}
        </div>

        <button 
          @click="toggleFullDescription" 
          class="text-green-600 hover:text-green-700 font-medium mt-2 transition-colors">
          {{ showFullDescription ? '← Show Less' : 'Show More →' }}
        </button>
      </div>

      <h3 class="text-green-600 mb-4 text-xl font-bold">
        {{ job.salary }} / Year
      </h3>

      <div class="border-t border-gray-200 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div class="text-orange-600 flex items-center gap-2 font-medium">
          <i class="pi pi-map-marker text-orange-600"></i>
          {{ job.location }}
        </div>

        <RouterLink 
          :to="'/jobs/job/' + job.id"
          class="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2.5 rounded-lg text-center font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    job: Object
  });

  const showFullDescription = ref(false);

  const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value;
  };

  const truncatedDescription = computed(() => {
    let description = props.job.description;
    if (!showFullDescription.value) {
      description = description.substring(0, 90) + '...';
    }
    return description;
  })
</script>