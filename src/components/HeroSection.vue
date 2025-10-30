<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="emoji">🚧</span>
        <span class="text">Site em Construção</span>
      </h1>
      <p class="hero-subtitle">
        Estamos preparando algo incrível para você.
      </p>
      <button class="cta-button" @click="scrollToContact">
        Entre em Contato
        <i class="fas fa-arrow-down"></i>
      </button>
    </div>
    <div class="floating-elements">
      <div class="float-circle circle-1"></div>
      <div class="float-circle circle-2"></div>
      <div class="float-circle circle-3"></div>
    </div>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.hero-content {
  text-align: center;
  z-index: 10;
  animation: fadeIn 1s ease-out;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-title .emoji {
  animation: float 3s ease-in-out infinite;
}

.hero-title .text {
  background: linear-gradient(90deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.5s forwards;
}

.cta-button {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Poppins', sans-serif;
  opacity: 0;
  animation: fadeIn 1s ease-out 1s forwards;
}

.cta-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.3);
}

.cta-button i {
  animation: float 2s ease-in-out infinite;
}

/* Elementos flutuantes decorativos */
.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.float-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 5%;
  animation: float 6s ease-in-out infinite;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: 15%;
  right: 10%;
  animation: float 8s ease-in-out infinite 2s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 60%;
  left: 80%;
  animation: float 7s ease-in-out infinite 1s;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 0.875rem 2rem;
  }

  .float-circle {
    opacity: 0.5;
  }

  .circle-1 {
    width: 150px;
    height: 150px;
  }

  .circle-2 {
    width: 100px;
    height: 100px;
  }

  .circle-3 {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
