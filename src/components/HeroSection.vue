<template>
  <section class="section">
    <div class="container mx-auto px-4 text-center">
      <div class="relative">
        <div class="absolute inset-0 -z-10 mx-auto h-64 w-64 rounded-full bg-gradient-to-tr from-accent-500/30 to-primary-600/30 blur-3xl" />
      </div>

      
      <h1
        class="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-fadeInUp"
      >
        🚧
      </h1>
      
      <h1
        class="mx-auto max-w-3xl mt-20 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-fadeInUp"
      >
        <span class="inline-block animate-glow">Site em Construção</span>
      </h1>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl animate-fadeInUp" style="animation-delay:.15s">
        Estou preparando algo incrível! Enquanto isso, me diz o que precisa, entre em contato pelo formulário abaixo.
      </p>

      <div class="mt-8 flex items-center justify-center gap-3">
        <button class="btn-primary" @click="$emit('scroll-to-contact')">
          <i class="fa-solid fa-paper-plane"></i>
          Fale Comigo
        </button>
        <a
          href="#faq"
          class="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-medium text-white/90 ring-1 ring-white/15 transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
        >
          <i class="fa-regular fa-circle-question"></i>
          Tire suas dúvidas
        </a>
      </div>

      <p class="mx-auto mt-20 max-w-2xl text-lg text-white/80 md:text-xl animate-fadeInUp" style="animation-delay:.15s">
        O QUE VOCÊ VAI ENCONTRAR AQUI?
      </p>

      <div class="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">

        <div class="card p-6 transition hover:translate-y-[-2px]">
          <div class="text-accent-500"><i class="fa-solid fa-bolt text-2xl"></i></div>
          <h3 class="mt-3 font-semibold">Serviços Gráficos</h3>
          <p class="mt-1 text-sm text-white/70">Tudo que você precisa para para o seu negócio local, do cartão de visita aos impressos de grandes formatos.</p>
        </div>
        <div class="card p-6 transition hover:translate-y-[-2px]">
          <div class="text-accent-500"><i class="fa-solid fa-code text-2xl"></i></div>
          <h3 class="mt-3 font-semibold">Web Sites</h3>
          <p class="mt-1 text-sm text-white/70">Para criar sua presença online, do Web site ao Sistema, do SEO aos primeiros lugares no Google.</p>
        </div>

        <div class="card p-6 transition hover:translate-y-[-2px]">
          <div class="text-accent-500"><i class="fa-solid fa-mobile-screen-button text-2xl"></i></div>
          <h3 class="mt-3 font-semibold">Trafego Pago</h3>
          <p class="mt-1 text-sm text-white/70">O que você precisa para gerar mais visibilidade e conversões para o seu negócio local e virtual.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.animate-glow { animation: glow 2.5s ease-in-out infinite; }
</style>
