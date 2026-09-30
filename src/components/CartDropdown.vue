<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const cartStore = useCartStore()
const orderPlaced = ref(false)

function handlePlaceOrder() {
  // Simulate placing the order (no real backend/payment integration)
  orderPlaced.value = true
  cartStore.clearCart()
  setTimeout(() => {
    orderPlaced.value = false
  }, 2500)
}

function handleClose() {
  emit('close')
}
</script>

<template>
  <div v-if="open" class="absolute right-0 top-full mt-2 w-80 sm:w-96 z-50">
    <!-- Backdrop for mobile tap-to-close -->
    <div class="fixed inset-0 z-40" @click="handleClose"></div>

    <div class="relative z-50 bg-white rounded-lg shadow-xl border border-border-color p-4">
      <div class="flex justify-between items-center mb-3">
        <h3 class="text-lg font-semibold text-neutral-dark">Your Cart</h3>
        <button
          class="text-neutral-dark hover:text-primary-accent transition-colors"
          @click="handleClose"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Success message -->
      <div
        v-if="orderPlaced"
        class="bg-green-50 text-green-700 border border-green-200 rounded-md p-3 mb-3 text-sm font-medium"
      >
        Order placed successfully!
      </div>

      <!-- Empty cart -->
      <div
        v-else-if="cartStore.items.length === 0"
        class="text-center text-neutral-dark py-6"
      >
        Your cart is empty
      </div>

      <!-- Cart items -->
      <div v-else>
        <div class="max-h-64 overflow-y-auto divide-y divide-border-color">
          <div
            v-for="item in cartStore.items"
            :key="item.product.id"
            class="py-3 flex justify-between items-start gap-3"
          >
            <div class="flex-1">
              <p class="font-medium text-neutral-dark">{{ item.product.name }}</p>
              <p class="text-sm text-neutral-dark opacity-70">
                ${{ item.product.price.toFixed(2) }} x {{ item.quantity }}
              </p>
            </div>
            <p class="font-semibold text-primary-accent whitespace-nowrap">
              ${{ (item.product.price * item.quantity).toFixed(2) }}
            </p>
          </div>
        </div>

        <div class="flex justify-between items-center border-t border-border-color mt-3 pt-3">
          <span class="font-semibold text-neutral-dark">Total</span>
          <span class="text-xl font-bold text-primary-accent">
            ${{ cartStore.totalPrice.toFixed(2) }}
          </span>
        </div>

        <button
          class="w-full mt-4 bg-primary-accent text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          @click="handlePlaceOrder"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>
