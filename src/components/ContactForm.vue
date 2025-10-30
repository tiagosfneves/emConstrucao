<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Entre em Contato</h2>
      <p class="section-subtitle">
        Preencha o formulário abaixo e entraremos em contato em breve!
      </p>
      
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">
            <i class="fas fa-user"></i>
            Nome
          </label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">
            <i class="fas fa-envelope"></i>
            E-mail
          </label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">
            <i class="fas fa-message"></i>
            Mensagem
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Conte-nos sobre seu projeto..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-button">
          <i class="fas fa-paper-plane"></i>
          Enviar mensagem
        </button>
      </form>

      <!-- Alert de feedback -->
      <transition name="alert">
        <div v-if="alert.show" :class="['alert', alert.type]">
          <i :class="alert.type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
          {{ alert.message }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const alert = reactive({
  show: false,
  type: 'success',
  message: ''
});

const handleSubmit = () => {
  // Validação simples
  if (!formData.name || !formData.email || !formData.message) {
    showAlert('error', 'Por favor, preencha todos os campos!');
    return;
  }

  // Simulação de envio com sucesso
  showAlert('success', 'Mensagem enviada com sucesso! Entraremos em contato em breve.');
  
  // Limpar formulário
  formData.name = '';
  formData.email = '';
  formData.message = '';
};

const showAlert = (type, message) => {
  alert.show = true;
  alert.type = type;
  alert.message = message;
  
  setTimeout(() => {
    alert.show = false;
  }, 5000);
};
</script>

<style scoped>
.contact-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 600px;
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

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Poppins', sans-serif;
  margin-top: 1rem;
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.3);
}

/* Alert */
.alert {
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  animation: fadeIn 0.3s ease-out;
}

.alert.success {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.5);
}

.alert.error {
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.5);
}

.alert i {
  font-size: 1.25rem;
}

/* Transição do alert */
.alert-enter-active,
.alert-leave-active {
  transition: all 0.3s ease;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsividade */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }
}
</style>
