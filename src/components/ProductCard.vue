<script setup lang="ts">
import type { Product } from '@/types'

defineProps<{
  product: Product
}>()

function handleAddToCart() {
  // MOCK: Non-functional Add to Cart button UI
  // In a real app, this would trigger cart logic
}
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:scale-105 transform duration-300"
  >
    <!-- Product Image -->
    <div class="w-full h-48 bg-neutral-light flex items-center justify-center">
      <img
        :src="product.image_url"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Product Info -->
    <div class="p-4">
      <h3 class="text-lg font-semibold text-neutral-dark mb-2">
        {{ product.name }}
      </h3>

      <p class="text-2xl font-bold text-primary-accent mb-4">
        ${{ product.price.toFixed(2) }}
      </p>

      <button
        @click="handleAddToCart"
        class="w-full bg-primary-accent text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>
