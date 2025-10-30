<template>
  <div class="app">
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

<style>
.app {
  width: 100%;
  min-height: 100vh;
}
</style>
