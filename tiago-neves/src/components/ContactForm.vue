<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const status = ref({ type: '', message: '' })
const submitting = ref(false)

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

const onSubmit = async (e) => {
  e.preventDefault()
  status.value = { type: '', message: '' }

  if (!form.name || !form.email || !form.message) {
    status.value = { type: 'error', message: 'Preencha todos os campos.' }
    return
  }
  if (!validateEmail(form.email)) {
    status.value = { type: 'error', message: 'Informe um e-mail válido.' }
    return
  }

  submitting.value = true
  await new Promise((r) => setTimeout(r, 700))
  submitting.value = false
  status.value = { type: 'success', message: 'Mensagem enviada! Entrarei em contato em breve.' }
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="wrap">
      <h2>Fale comigo</h2>
      <p class="lead">Tem um projeto em mente? Vamos conversar.</p>

      <form class="form" @submit="onSubmit" novalidate>
        <div class="grid">
          <label class="field">
            <span>Nome</span>
            <input v-model="form.name" type="text" placeholder="Seu nome" />
          </label>
          <label class="field">
            <span>E-mail</span>
            <input v-model="form.email" type="email" placeholder="voce@email.com" />
          </label>
        </div>
        <label class="field">
          <span>Mensagem</span>
          <textarea v-model="form.message" rows="5" placeholder="Conte rapidamente sobre sua ideia"></textarea>
        </label>

        <button class="submit" type="submit" :disabled="submitting">
          <i class="fa-solid fa-paper-plane"></i>
          <span>{{ submitting ? 'Enviando...' : 'Enviar mensagem' }}</span>
        </button>

        <p v-if="status.type" class="status" :class="status.type">
          {{ status.message }}
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 3rem 1rem 4rem;
}
.wrap {
  max-width: 880px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.18);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.wrap:hover { transform: translateY(-2px); box-shadow: 0 20px 40px rgba(0,0,0,0.25); }

h2 {
  margin: 0 0 0.25rem 0;
  font-size: clamp(1.5rem, 4vw, 2rem);
}
.lead {
  margin: 0 0 1.25rem 0;
  color: rgba(255,255,255,0.8);
}

.form { display: grid; gap: 1rem; }
.grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 640px) { .grid { grid-template-columns: 1fr 1fr; } }

.field { display: grid; gap: 0.5rem; }
.field span { font-weight: 600; }
input, textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(10, 10, 10, 0.25);
  color: white;
  outline: none;
  transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
}
input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.55); }
input:focus, textarea:focus {
  border-color: rgba(59, 130, 246, 0.7);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
  background: rgba(20, 20, 20, 0.35);
}

.submit {
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
  color: white;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.25);
  transition: transform 220ms ease, filter 220ms ease, box-shadow 220ms ease, opacity 220ms ease;
}
.submit:hover { transform: translateY(-2px) scale(1.02); filter: brightness(1.08); box-shadow: 0 16px 36px rgba(124, 58, 237, 0.35); }
.submit:disabled { opacity: 0.7; cursor: not-allowed; }

.status { margin-top: 0.75rem; font-weight: 600; }
.status.success { color: #a7f3d0; }
.status.error { color: #fecaca; }
</style>
