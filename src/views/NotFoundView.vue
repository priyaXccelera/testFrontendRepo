<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-neutral-light px-4">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-primary-brand mb-4">404</h1>
      <p class="text-2xl font-semibold text-neutral-dark mb-2">Page Not Found</p>
      <p class="text-lg text-neutral-text mb-8">
        The page you're looking for doesn't exist.
      </p>
      <button
        @click="goHome"
        class="bg-primary-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors text-lg"
      >
        Go Home
      </button>
    </div>
  </div>
</template>
