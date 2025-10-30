<template>
  <section class="section">
    <div class="card mx-auto max-w-2xl p-6 sm:p-8">
      <h2 class="text-center text-2xl font-semibold">Entre em Contato</h2>
      <p class="mt-2 text-center text-white/70">Fale comigo sobre seu projeto 😄</p>

      <form class="mt-6 grid gap-4" @submit.prevent="onSubmit">
        <div>
          <label class="mb-1 block text-sm text-white/80" for="nome">Nome</label>
          <input
            id="nome"
            v-model="form.name"
            type="text"
            placeholder="Seu nome"
            class="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 transition focus:ring-accent-500"
          />
        </div>
        <div>
          <label class="mb-1 block text-sm text-white/80" for="email">E-mail</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="voce@exemplo.com"
            class="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 transition focus:ring-accent-500"
          />
        </div>
        <div>
          <label class="mb-1 block text-sm text-white/80" for="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            v-model="form.message"
            rows="5"
            placeholder="Conte um pouco sobre o que você precisa"
            class="w-full resize-none rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 transition focus:ring-accent-500"
          ></textarea>
        </div>

        <button type="submit" class="btn-primary w-full sm:w-auto">
          <i class="fa-solid fa-paper-plane"></i>
          Enviar mensagem
        </button>

        <transition name="fade">
          <p v-if="status === 'success'" class="mt-2 text-sm text-emerald-300">Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
        </transition>
        <transition name="fade">
          <p v-if="status === 'error'" class="mt-2 text-sm text-rose-300">Por favor, preencha todos os campos corretamente.</p>
        </transition>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({ name: '', email: '', message: '' });
const status = ref(''); // '', 'success', 'error'

function validateEmail(email) {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
}

function resetFeedbackSoon() {
  window.setTimeout(() => { status.value = ''; }, 2500);
}

function onSubmit() {
  const isValid = form.name.trim() && validateEmail(form.email) && form.message.trim();
  if (!isValid) {
    status.value = 'error';
    resetFeedbackSoon();
    return;
  }
  status.value = 'success';
  // Fake submit
  form.name = '';
  form.email = '';
  form.message = '';
  resetFeedbackSoon();
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
