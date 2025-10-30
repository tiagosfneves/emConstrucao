<template>
  <section class="faq-section">
    <div class="container">
      <h2 class="section-title">Perguntas Frequentes</h2>
      <p class="section-subtitle">
        Tire suas dúvidas sobre nossos serviços
      </p>

      <div class="faq-list">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
        >
          <button
            class="faq-question"
            @click="toggleFaq(index)"
            :class="{ active: activeIndex === index }"
          >
            <span>{{ item.question }}</span>
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: activeIndex === index }"
            ></i>
          </button>
          <transition name="faq-answer">
            <div v-show="activeIndex === index" class="faq-answer">
              <p>{{ item.answer }}</p>
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

const faqItems = [
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

.container {
  max-width: 800px;
  width: 100%;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: transparent;
  border: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
}

.faq-question:hover {
  color: #f0f0f0;
}

.faq-question i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.faq-question i.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  overflow: hidden;
}

.faq-answer p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 1rem;
}

/* Transição do accordion */
.faq-answer-enter-active,
.faq-answer-leave-active {
  transition: all 0.3s ease;
}

.faq-answer-enter-from,
.faq-answer-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsividade */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .faq-question {
    font-size: 1rem;
    padding: 1.25rem;
  }

  .faq-answer {
    padding: 0 1.25rem 1.25rem 1.25rem;
  }

  .faq-answer p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .faq-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .faq-question {
    font-size: 0.95rem;
    padding: 1rem;
  }

  .faq-answer {
    padding: 0 1rem 1rem 1rem;
  }
}
</style>
