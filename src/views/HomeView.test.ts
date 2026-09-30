import { mount } from '@vue/test-utils'
import { test } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia } from 'pinia'
import HomeView from './HomeView.vue'

test('HomeView renders without crashing', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [],
  })
  mount(HomeView, {
    global: {
      plugins: [router, createPinia()],
    },
  })
})
