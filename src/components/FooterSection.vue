<template>
  <footer class="footer-section">
    <div class="footer-content">
      <p class="footer-text">
        Desenvolvido por <span class="highlight">Tiago Neves</span> 💻
      </p>
      <div class="social-links">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <p class="footer-copyright">
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
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 3rem 2rem;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 500;
}

.highlight {
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.social-link i {
  transition: transform 0.3s ease;
}

.social-link:hover i {
  transform: rotate(360deg);
}

.footer-copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}

/* Responsividade */
@media (max-width: 768px) {
  .footer-section {
    padding: 2rem 1.5rem;
  }

  .footer-text {
    font-size: 1rem;
  }

  .social-link {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 1.5rem 1rem;
  }

  .footer-text {
    font-size: 0.95rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .footer-copyright {
    font-size: 0.8rem;
  }
}
</style>
