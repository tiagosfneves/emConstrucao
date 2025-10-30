<template>
  <main class="min-h-screen text-white">
    <HeroSection @scroll-to-contact="scrollToContact" />
    <section id="contato" class="container mx-auto px-4">
      <ContactForm />
    </section>
    <section class="container mx-auto px-4">
      <FAQSection />
    </section>
    <FooterSection />
  </main>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue';
import ContactForm from './components/ContactForm.vue';
import FAQSection from './components/FAQSection.vue';
import FooterSection from './components/FooterSection.vue';

function scrollToContact() {
  const el = document.getElementById('contato');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
</script>
