<script setup lang="ts">
import { ref, reactive } from 'vue'
import Navbar from '@/components/Navbar.vue'
import ProductCard from '@/components/ProductCard.vue'
import Footer from '@/components/Footer.vue'
import { mockProducts } from '@/data/mockData'

const products = ref(mockProducts)

// Contact form state
const contactForm = reactive({
  name: '',
  email: '',
  message: '',
})

const contactSubmitted = ref(false)

function handleContactSubmit() {
  // MOCK: UI-only contact form submission
  // In a real app, this would send data to a backend
  if (contactForm.name && contactForm.email && contactForm.message) {
    contactSubmitted.value = true
    // Reset form
    contactForm.name = ''
    contactForm.email = ''
    contactForm.message = ''
    // Hide success message after 3 seconds
    setTimeout(() => {
      contactSubmitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <div class="bg-white">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <section id="home" class="pt-24 pb-12 bg-gradient-to-b from-neutral-light to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-primary-brand mb-6 leading-tight">
          Welcome to ShopFront
        </h1>
        <p class="text-xl text-neutral-text mb-8 max-w-2xl mx-auto">
          Discover premium products and amazing deals. Experience the future of online shopping.
        </p>
        <a
          href="#products"
          class="inline-block bg-primary-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors text-lg"
        >
          Shop Now
        </a>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-primary-brand mb-12 text-center">
          Our Products
        </h2>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-neutral-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-primary-brand mb-8 text-center">
          About ShopFront
        </h2>

        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-neutral-text mb-6 leading-relaxed">
            ShopFront is a premier online shopping destination dedicated to bringing you the
            finest selection of products from around the world. With over a decade of experience
            in e-commerce, we've established ourselves as a trusted marketplace for quality
            goods and exceptional customer service.
          </p>

          <p class="text-lg text-neutral-text mb-6 leading-relaxed">
            Our mission is to make online shopping convenient, enjoyable, and affordable for
            everyone. We carefully curate our product selection to ensure that every item meets
            our high standards for quality and value. Whether you're looking for the latest
            technology, home essentials, or lifestyle products, ShopFront has something for you.
          </p>

          <p class="text-lg text-neutral-text leading-relaxed">
            We're committed to providing excellent customer support, fast shipping, and a
            hassle-free shopping experience. Thank you for choosing ShopFront as your trusted
            online shopping partner.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-primary-brand mb-12 text-center">
          Get In Touch
        </h2>

        <!-- Success Message -->
        <div
          v-if="contactSubmitted"
          class="mb-6 p-4 bg-green-50 border border-secondary-accent rounded-lg text-secondary-accent font-medium"
        >
          Thank you! We've received your message and will get back to you soon.
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="handleContactSubmit" class="space-y-6">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-neutral-dark mb-2">
              Full Name
            </label>
            <input
              id="name"
              v-model="contactForm.name"
              type="text"
              placeholder="John Doe"
              class="w-full px-4 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              required
            />
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-neutral-dark mb-2">
              Email Address
            </label>
            <input
              id="email"
              v-model="contactForm.email"
              type="email"
              placeholder="john@example.com"
              class="w-full px-4 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              required
            />
          </div>

          <!-- Message Field -->
          <div>
            <label for="message" class="block text-sm font-medium text-neutral-dark mb-2">
              Message
            </label>
            <textarea
              id="message"
              v-model="contactForm.message"
              placeholder="Your message here..."
              rows="5"
              class="w-full px-4 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent resize-none"
              required
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-primary-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>
