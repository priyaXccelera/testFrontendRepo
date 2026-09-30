<script setup lang="ts">
import { ref, computed } from 'vue'

const isMenuOpen = ref(false)

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
