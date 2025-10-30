<template>
  <section class="faq-section">
    <div class="faq-container">
      <h2 class="section-title">Perguntas Frequentes</h2>
      <p class="section-subtitle">
        Tire suas dúvidas sobre nossos serviços
      </p>

      <div class="faq-list">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ active: activeIndex === index }"
        >
          <div class="faq-question" @click="toggleFaq(index)">
            <h3>{{ faq.question }}</h3>
            <i
              class="fas"
              :class="activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'"
            ></i>
          </div>
          <transition name="slide">
            <div v-if="activeIndex === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const faqs = [
  {
    question: 'Quanto custa um site?',
    answer: 'O valor depende da complexidade do projeto e funcionalidades desejadas.'
  },
  {
    question: 'Vocês fazem landing pages?',
    answer: 'Sim! Criamos landing pages modernas e otimizadas para conversão.'
  },
  {
    question: 'Oferecem serviços de design?',
    answer: 'Sim, desenvolvemos identidade visual, banners e peças digitais.'
  },
  {
    question: 'Trabalham com tráfego pago?',
    answer: 'Sim! Fazemos integração e acompanhamento de campanhas de tráfego pago.'
  }
];

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.faq-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.faq-container {
  max-width: 800px;
  width: 100%;
  animation: fadeIn 1s ease-out;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.faq-item.active {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.15);
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.faq-question h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.faq-question i {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease;
}

.faq-item:hover .faq-question i {
  color: #fff;
  transform: scale(1.1);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  animation: fadeIn 0.3s ease-out;
}

.faq-answer p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* Transição de slide */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 200px;
  opacity: 1;
}

/* Responsividade */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .faq-question h3 {
    font-size: 1rem;
  }

  .faq-question {
    padding: 1.2rem;
  }

  .faq-answer {
    padding: 0 1.2rem 1.2rem 1.2rem;
  }
}

@media (max-width: 480px) {
  .faq-section {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .faq-question h3 {
    font-size: 0.95rem;
  }
}
</style>
