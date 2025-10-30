<script setup>
const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <h1 class="title" aria-label="Site em Construção">
        <span class="emoji" role="img" aria-hidden="true">🚧</span>
        <span class="text">Site em Construção</span>
      </h1>
      <p class="subtitle">Estamos preparando algo incrível para você.</p>
      <button class="cta" @click="scrollToContact">Entre em Contato</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  place-items: center;
  min-height: 78vh;
  padding: 4rem 1.25rem 2rem;
}

.hero-inner {
  text-align: center;
  animation: rise-in 800ms ease-out both;
}

.title {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: clamp(2rem, 6vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  background: linear-gradient(120deg, #7c3aed 0%, #2563eb 50%, #22d3ee 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.emoji {
  filter: drop-shadow(0 6px 16px rgba(124, 58, 237, 0.45));
  animation: float 3s ease-in-out infinite;
}

.subtitle {
  margin-top: 0.75rem;
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: rgba(255, 255, 255, 0.85);
  opacity: 0;
  animation: fade-in 900ms ease 200ms forwards;
}

.cta {
  margin-top: 1.75rem;
  padding: 0.9rem 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
  color: white;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.25);
  transition: transform 220ms ease, filter 220ms ease, box-shadow 220ms ease;
}
.cta:hover {
  transform: translateY(-2px) scale(1.02);
  filter: brightness(1.08);
  box-shadow: 0 16px 36px rgba(124, 58, 237, 0.35);
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes rise-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
</style>
