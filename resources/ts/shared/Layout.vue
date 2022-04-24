<script lang="ts" setup>
import Navbar from './Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="flex items-center justify-center w-full h-screen bg-gray-100">
    <slot />
  </div>
</template>
