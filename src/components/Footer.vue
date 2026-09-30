<script setup lang="ts">
import { ref, computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-primary-brand text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-sm">
          &copy; {{ currentYear }} ShopFront. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
