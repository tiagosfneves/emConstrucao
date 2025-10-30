<script setup>
</script>

<template>
  <footer class="footer">
    <p>Desenvolvido por <strong>Tiago Neves</strong> 💻</p>
    <div class="icons">
      <a class="icon" href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub">
        <i class="fa-brands fa-github"></i>
      </a>
      <a class="icon" href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: grid;
  place-items: center;
  gap: 0.75rem;
  padding: 2.25rem 1rem 2.75rem;
  color: rgba(255,255,255,0.85);
}
.icons { display: flex; gap: 0.75rem; }
.icon {
  display: inline-grid; place-items: center;
  width: 44px; height: 44px; border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
  color: white;
  box-shadow: 0 6px 18px rgba(124,58,237,0.25);
  transition: transform 200ms ease, filter 200ms ease, box-shadow 200ms ease;
}
.icon:hover {
  transform: translateY(-2px) scale(1.06);
  filter: brightness(1.1);
  box-shadow: 0 12px 28px rgba(37,99,235,0.35);
}
</style>
