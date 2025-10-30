<template>
  <footer class="footer-section">
    <div class="footer-content">
      <p class="footer-text">
        Desenvolvido por <strong>Tiago Neves</strong> 💻
      </p>
      <div class="social-links">
        <a
          href="https://github.com/tiagoneves"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/tiagoneves"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <p class="copyright">
        © {{ currentYear }} - Todos os direitos reservados
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer-section {
  padding: 3rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-text {
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
}

.footer-text strong {
  font-weight: 600;
  background: linear-gradient(90deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.social-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  transition: var(--transition);
  text-decoration: none;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
}

.social-icon:active {
  transform: translateY(-3px) scale(1.05);
}

.copyright {
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
}

/* Responsividade */
@media (max-width: 768px) {
  .footer-section {
    padding: 2.5rem 1.5rem;
  }

  .footer-text {
    font-size: 1rem;
  }

  .social-icon {
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 2rem 1rem;
  }

  .footer-text {
    font-size: 0.95rem;
  }

  .social-links {
    gap: 1rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .copyright {
    font-size: 0.85rem;
  }
}
</style>
