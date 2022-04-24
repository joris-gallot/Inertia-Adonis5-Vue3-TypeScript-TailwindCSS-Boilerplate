<script lang="ts" setup>
import Layout from '@/shared/Layout.vue'

defineProps({
  message: String,
})
</script>

<template>
  <Layout
    ><div class="space-y-2 text-center">
      <h1
        class="font-bold text-transparent text-9xl bg-gradient-to-r bg-clip-text from-purple-400 via-green-400 to-purple-600"
      >
        Welcome
      </h1>
      <h2 class="text-3xl font-semibold">{{ message }} 🖖</h2>
    </div>
  </Layout>
</template>
