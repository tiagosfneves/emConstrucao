<script setup>
import HeroSection from './components/HeroSection.vue'
import ContactForm from './components/ContactForm.vue'
import FAQSection from './components/FAQSection.vue'
import FooterSection from './components/FooterSection.vue'

// Marca seções como "in-view" ao aparecerem (efeito de transição suave)
import { onMounted } from 'vue'
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view')
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.section').forEach((el) => observer.observe(el))
})
</script>

<template>
  <main>
    <div class="section in-view">
      <HeroSection />
    </div>
    <div class="section">
      <ContactForm />
    </div>
    <div class="section">
      <FAQSection />
    </div>
    <div class="section">
      <FooterSection />
    </div>
  </main>
</template>

<style scoped>
main { display: block; }
</style>
