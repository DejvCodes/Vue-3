<template>
  <div :class="`${bg} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`">
    <slot />
  </div>
</template>

<script setup>
  defineProps({
    bg: {
      type: String,
      default: 'bg-gray-100'
    }
  });
</script>