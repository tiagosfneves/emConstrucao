<script setup>
import { ref } from 'vue'

const items = [
  { q: 'Quanto custa um site?', a: 'O valor depende da complexidade do projeto e funcionalidades desejadas.' },
  { q: 'Vocês fazem landing pages?', a: 'Sim! Criamos landing pages modernas e otimizadas para conversão.' },
  { q: 'Oferecem serviços de design?', a: 'Sim, desenvolvemos identidade visual, banners e peças digitais.' },
  { q: 'Trabalham com tráfego pago?', a: 'Sim! Fazemos integração e acompanhamento de campanhas de tráfego pago.' },
]

const openIndex = ref(null)
const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<template>
  <section class="faq">
    <div class="wrap">
      <h2>Perguntas Frequentes</h2>
      <ul class="list">
        <li v-for="(it, idx) in items" :key="idx" class="item">
          <button class="question" @click="toggle(idx)" :aria-expanded="openIndex === idx">
            <span>{{ it.q }}</span>
            <i class="fa-solid" :class="openIndex === idx ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </button>
          <transition name="accordion">
            <div v-show="openIndex === idx" class="answer">
              <p>{{ it.a }}</p>
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.faq { padding: 3rem 1rem; }
.wrap { max-width: 880px; margin: 0 auto; }

h2 { margin: 0 0 1rem 0; font-size: clamp(1.5rem, 4vw, 2rem); }

.list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem; }
.item { border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.05); }

.question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 180ms ease, filter 180ms ease;
}
.question:hover { filter: brightness(1.08); }

.answer { padding: 0 1.25rem 1rem; color: rgba(255,255,255,0.88); }

/* Accordion transition */
.accordion-enter-from, .accordion-leave-to { max-height: 0; opacity: 0; }
.accordion-enter-to, .accordion-leave-from { max-height: 200px; opacity: 1; }
.accordion-enter-active, .accordion-leave-active { overflow: hidden; transition: all 220ms ease; }
</style>
