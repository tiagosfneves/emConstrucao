<template>
  <div class="app-container">
    <HeroSection />
    <ContactForm />
    <FAQSection />
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue'
import ContactForm from './components/ContactForm.vue'
import FAQSection from './components/FAQSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
}
</style>
