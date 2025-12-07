<template>
    <nav class="bg-gradient-to-r from-green-600 to-green-700 border-b border-green-500 shadow-lg">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <RouterLink 
              to="/"
              class="flex flex-shrink-0 items-center mr-4" href="index.html">
              <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >Vue Jobs</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink 
                  to="/" 
                  :class="[
                    isActiveLink('/') 
                    ? 'bg-white text-green-700 shadow-md' 
                    : 'hover:bg-green-800 text-white', 
                  'rounded-lg', 
                  'px-4', 
                  'py-2',
                  'transition-all',
                  'duration-300',
                  'font-medium'
                ]">
                  Home
                </RouterLink>

                <RouterLink 
                  to="/jobs" 
                  :class="[
                    isActiveLink('/jobs') 
                    ? 'bg-white text-green-700 shadow-md' 
                    : 'hover:bg-green-800 text-white', 
                  'rounded-lg', 
                  'px-4', 
                  'py-2',
                  'transition-all',
                  'duration-300',
                  'font-medium'
                ]">
                  Jobs
                </RouterLink>
                
                <RouterLink 
                  to="/jobs/add" 
                  :class="[
                    isActiveLink('/jobs/add') 
                    ? 'bg-white text-green-700 shadow-md' 
                    : 'hover:bg-green-800 text-white', 
                  'rounded-lg', 
                  'px-4', 
                  'py-2',
                  'transition-all',
                  'duration-300',
                  'font-medium'
                ]">
                  Add Job
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script setup>
  import logo from '@/assets/img/logo.png';
  import { RouterLink, useRoute } from 'vue-router';

  const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
  }
</script>   