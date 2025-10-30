<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <h2 class="section-title">Entre em Contato</h2>
      <p class="section-subtitle">
        Vamos conversar sobre seu projeto! Preencha o formulário abaixo.
      </p>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">
            <i class="fas fa-user"></i> Nome
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
            <i class="fas fa-envelope"></i> E-mail
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
            <i class="fas fa-comment"></i> Mensagem
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Descreva seu projeto ou ideia..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-button">
          <i class="fas fa-paper-plane"></i> Enviar Mensagem
        </button>
      </form>

      <div v-if="showAlert" :class="['alert', alertType]">
        <i :class="alertIcon"></i>
        {{ alertMessage }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const showAlert = ref(false);
const alertType = ref('success');
const alertMessage = ref('');

const alertIcon = computed(() => {
  return alertType.value === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
});

const handleSubmit = () => {
  // Validação simples
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    showAlertMessage('error', 'Por favor, preencha todos os campos!');
    return;
  }

  // Simulação de envio bem-sucedido
  showAlertMessage('success', 'Mensagem enviada com sucesso! Em breve entrarei em contato.');
  
  // Limpar formulário
  formData.value = {
    name: '',
    email: '',
    message: ''
  };
};

const showAlertMessage = (type, message) => {
  alertType.value = type;
  alertMessage.value = message;
  showAlert.value = true;

  setTimeout(() => {
    showAlert.value = false;
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
  background: rgba(0, 0, 0, 0.1);
}

.contact-container {
  max-width: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-out;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #fff;
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.submit-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: #fff;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.alert {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  animation: fadeIn 0.5s ease-out;
}

.alert.success {
  background: rgba(76, 175, 80, 0.3);
  border: 2px solid rgba(76, 175, 80, 0.6);
  color: #fff;
}

.alert.error {
  background: rgba(244, 67, 54, 0.3);
  border: 2px solid rgba(244, 67, 54, 0.6);
  color: #fff;
}

/* Responsividade */
@media (max-width: 768px) {
  .contact-container {
    padding: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 2rem 1rem;
  }

  .contact-container {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.8rem;
  }
}
</style>
