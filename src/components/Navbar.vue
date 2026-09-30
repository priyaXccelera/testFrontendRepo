<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import CartDropdown from '@/components/CartDropdown.vue'

const isMenuOpen = ref(false)
const isCartOpen = ref(false)
const cartStore = useCartStore()
const cartCount = computed(() => cartStore.totalCount)

function toggleCart() {
  isCartOpen.value = !isCartOpen.value
}

function closeCart() {
  isCartOpen.value = false
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function handleNavClick() {
  isMenuOpen.value = false
}

function handleLogoClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div
          class="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          @click="handleLogoClick"
        >
          <span class="text-2xl font-bold text-primary-brand">ShopFront</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex gap-8">
          <template v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="text-neutral-dark font-medium hover:text-primary-accent transition-colors"
              @click="handleNavClick"
            >
              {{ item.label }}
            </a>
          </template>
        </div>

        <div class="flex items-center gap-4">
          <!-- Cart Icon -->
          <div class="relative">
            <button
              type="button"
              class="relative p-1 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Open cart"
              @click="toggleCart"
            >
              <svg
                class="h-6 w-6 text-neutral-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-10 0a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <span
                v-if="cartCount > 0"
                class="absolute -top-1 -right-1 bg-primary-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {{ cartCount }}
              </span>
            </button>

            <CartDropdown :open="isCartOpen" @close="closeCart" />
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="p-2 rounded-md text-neutral-dark hover:bg-neutral-light transition-colors"
            >
              <svg
                v-if="!isMenuOpen"
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-else
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden bg-neutral-light border-t border-border-color">
        <template v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="block px-4 py-3 text-neutral-dark font-medium hover:bg-white transition-colors"
            @click="handleNavClick"
          >
            {{ item.label }}
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>
