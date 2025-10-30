# 🚧 Site em Construção - Tiago Neves

Uma página moderna e elegante de "Site em Construção" desenvolvida com **Vue 3** e **Vite**, com animações suaves e design responsivo.

![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Gradiente suave entre azul e roxo com elementos flutuantes
- ⚡ **Animações Suaves**: Efeitos de fade-in, float e hover em todos os elementos
- 📱 **100% Responsivo**: Mobile-first, otimizado para todos os tamanhos de tela
- 📝 **Formulário de Contato**: Com validação e feedback visual
- ❓ **FAQ Accordion**: Seção de perguntas frequentes com animação
- 🎯 **Navegação Suave**: Scroll animado entre seções
- 🔗 **Links Sociais**: GitHub e LinkedIn com hover animado

## 🏗️ Estrutura do Projeto

```
/workspace
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.js
    ├── App.vue
    ├── style.css
    └── components/
        ├── HeroSection.vue      # Título e animação principal
        ├── ContactForm.vue      # Formulário de contato
        ├── FAQSection.vue       # Perguntas frequentes
        └── FooterSection.vue    # Rodapé com links sociais
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd /workspace
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse:
```
http://localhost:5173
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção

## 🎨 Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool ultrarrápida
- **CSS Moderno** - Animações, transições e efeitos glassmorphism
- **Google Fonts** - Família tipográfica Poppins
- **Font Awesome** - Ícones profissionais

## 🎯 Seções do Site

### 1. Hero Section
- Título animado "🚧 Site em Construção"
- Subtítulo com efeito fade-in
- Botão call-to-action que rola até o formulário
- Elementos flutuantes decorativos

### 2. Formulário de Contato
- Campos: Nome, E-mail e Mensagem
- Validação de campos obrigatórios
- Feedback visual de sucesso/erro
- Design glassmorphism

### 3. FAQ Section
- 4 perguntas e respostas
- Accordion com animação suave
- Ícone rotativo ao abrir/fechar

### 4. Rodapé
- Créditos do desenvolvedor
- Links para GitHub e LinkedIn
- Hover animado nos ícones sociais
- Ano dinâmico

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first** e é totalmente responsivo:

- ✅ Smartphones (320px+)
- ✅ Tablets (768px+)
- ✅ Desktops (1024px+)
- ✅ Telas grandes (1440px+)

## 🎨 Paleta de Cores

- **Gradiente Principal**: `#667eea` → `#764ba2`
- **Texto**: `#ffffff`
- **Background Cards**: `rgba(255, 255, 255, 0.1)` com backdrop-filter
- **Bordas**: `rgba(255, 255, 255, 0.2)`

## 🌟 Destaques de Design

- **Glassmorphism**: Efeitos de vidro fosco com `backdrop-filter`
- **Animações CSS**: Float, fade-in, pulse e transitions
- **Hover Effects**: Todos os elementos interativos têm feedback visual
- **Tipografia**: Poppins em diferentes pesos (300, 400, 600, 700)

## 📝 Personalização

Para personalizar o site, edite os seguintes arquivos:

- **Cores**: `/src/style.css` (variáveis CSS no `:root`)
- **Conteúdo**: Componentes individuais em `/src/components/`
- **FAQ**: `/src/components/FAQSection.vue` (array `faqItems`)
- **Links Sociais**: `/src/components/FooterSection.vue`

## 👨‍💻 Desenvolvido por

**Tiago Neves** - Desenvolvedor Front-end

---

💻 Feito com Vue 3 + Vite
