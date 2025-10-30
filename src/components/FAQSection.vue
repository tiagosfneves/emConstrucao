<template>
  <section id="faq" class="section">
    <div class="container mx-auto">
      <h2 class="text-center text-2xl font-semibold">Perguntas Frequentes</h2>
      <div class="mt-8 space-y-4">
        <div v-for="(item, index) in faqs" :key="index" class="card overflow-hidden">
          <button
            class="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/5"
            @click="toggle(index)"
          >
            <span class="font-medium">{{ item.q }}</span>
            <i
              class="fa-solid fa-chevron-down text-white/70 transition duration-300"
              :class="{ 'rotate-180': openIndex === index }"
            ></i>
          </button>
          <transition name="accordion">
            <div v-if="openIndex === index" class="px-5 pb-5 text-white/80">
              {{ item.a }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const openIndex = ref(null);
const faqs = [
  { q: 'Quanto custa um site?', a: 'O valor depende da complexidade do projeto e funcionalidades desejadas.' },
  { q: 'Vocês fazem landing pages?', a: 'Sim! Criamos landing pages modernas e otimizadas para conversão.' },
  { q: 'Oferecem serviços de design?', a: 'Sim, desenvolvemos identidade visual, banners e peças digitais.' },
  { q: 'Trabalham com tráfego pago?', a: 'Sim! Fazemos integração e acompanhamento de campanhas de tráfego pago.' },
];

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all .25s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
