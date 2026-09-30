import { mount } from '@vue/test-utils'
import { test } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia } from 'pinia'
import NotFoundView from './NotFoundView.vue'

test('NotFoundView renders without crashing', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [],
  })
  mount(NotFoundView, {
    global: {
      plugins: [router, createPinia()],
    },
  })
})
