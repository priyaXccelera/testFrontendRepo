<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '@/types'
import { useCartStore } from '@/stores/cart'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()
const justAdded = ref(false)

function handleAddToCart() {
  cartStore.addToCart(props.product)
  justAdded.value = true
  setTimeout(() => {
    justAdded.value = false
  }, 1500)
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
        :class="[
          'w-full font-semibold py-2 px-4 rounded-lg transition-colors',
          justAdded
            ? 'bg-green-600 text-white'
            : 'bg-primary-accent text-white hover:bg-blue-600',
        ]"
      >
        {{ justAdded ? 'Added!' : 'Add to Cart' }}
      </button>
    </div>
  </div>
</template>
