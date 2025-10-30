<template>
  <section class="section">
    <div class="card mx-auto max-w-2xl p-6 sm:p-8">
      <h2 class="text-center text-2xl font-semibold">Entre em Contato</h2>
      <p class="mt-2 text-center text-white/70">Fale comigo sobre seu projeto 😄</p>

      <form class="mt-6 grid gap-4" @submit.prevent="onSubmit">
        <!-- Web3Forms access key (pública) -->
        <input type="hidden" name="access_key" :value="WEB3FORMS_KEY" />

        <div>
          <label class="mb-1 block text-sm text-white/80" for="nome">Nome</label>
          <input
            id="nome"
            name="name"
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
            name="email"
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
            name="message"
            v-model="form.message"
            rows="5"
            placeholder="Conte um pouco sobre o que você precisa"
            class="w-full resize-none rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 transition focus:ring-accent-500"
          ></textarea>
        </div>

        <button type="submit" class="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60" :disabled="loading">
          <i class="fa-solid fa-paper-plane"></i>
          <span v-if="!loading">Enviar mensagem</span>
          <span v-else>Enviando...</span>
        </button>

        <transition name="fade">
          <p v-if="status === 'success'" class="mt-2 text-sm text-emerald-300">Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
        </transition>
        <transition name="fade">
          <p v-if="status === 'error'" class="mt-2 text-sm text-rose-300">Por favor, preencha todos os campos corretamente.</p>
        </transition>
        <transition name="fade">
          <p v-if="status === 'fail'" class="mt-2 text-sm text-rose-300">Não foi possível enviar agora. Tente novamente em instantes.</p>
        </transition>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({ name: '', email: '', message: '' });
const status = ref(''); // '', 'success', 'error', 'fail'
const loading = ref(false);
const WEB3FORMS_KEY = 'ffad2959-4bf9-4783-948e-477c654cf2b5';

function validateEmail(email) {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
}

function resetFeedbackSoon() {
  window.setTimeout(() => { status.value = ''; }, 2500);
}

async function onSubmit() {
  const isValid = form.name.trim() && validateEmail(form.email) && form.message.trim();
  if (!isValid) {
    status.value = 'error';
    resetFeedbackSoon();
    return;
  }

  try {
    loading.value = true;
    status.value = '';
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    formData.append('subject', 'Novo contato — Tiago Neves');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData,
    });
    const data = await response.json();

    if (data && data.success) {
      status.value = 'success';
      form.name = '';
      form.email = '';
      form.message = '';
    } else {
      status.value = 'fail';
    }
  } catch (e) {
    status.value = 'fail';
  } finally {
    loading.value = false;
    resetFeedbackSoon();
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
