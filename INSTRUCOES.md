# 📋 Instruções de Uso - Site em Construção

## 🚀 Como Executar o Projeto Localmente

### Passo 1: Instalar Dependências
```bash
npm install
```

Este comando irá instalar todas as dependências necessárias do projeto:
- Vue 3 (v3.4.21)
- Vite (v5.1.6)
- Plugin Vue para Vite

### Passo 2: Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```

O servidor será iniciado em: **http://localhost:5173**

Você verá algo como:
```
VITE v5.1.6  ready in 300 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

### Passo 3: Acessar no Navegador
Abra seu navegador e acesse:
```
http://localhost:5173
```

---

## 📦 Outros Comandos Úteis

### Build de Produção
```bash
npm run build
```
Cria a versão otimizada do projeto na pasta `dist/`.

### Visualizar Build de Produção
```bash
npm run preview
```
Inicia um servidor local para visualizar a build de produção.

---

## ✅ Confirmação: Design Responsivo

✔️ **SIM, o design é 100% responsivo!**

O site foi desenvolvido com abordagem **mobile-first** e testado para:

### 📱 Smartphones (320px - 767px)
- Layout em coluna única
- Tamanhos de fonte reduzidos
- Botões e ícones com tamanho otimizado
- Elementos flutuantes com opacidade reduzida
- Espaçamento ajustado para telas pequenas

### 💻 Tablets (768px - 1023px)
- Layout responsivo com melhor aproveitamento de espaço
- Formulários centralizados
- Cards com largura ajustada

### 🖥️ Desktops (1024px+)
- Layout completo com todos os elementos
- Animações em full power
- Elementos flutuantes visíveis
- Espaçamento generoso

---

## 🎨 Características de Design

### Animações Implementadas
- ✨ **Fade-in**: Entrada suave dos elementos
- 🎈 **Float**: Movimento flutuante do emoji e ícones
- 📈 **Scale on Hover**: Aumento de tamanho ao passar o mouse
- 💫 **Smooth Transitions**: Transições suaves em 0.3s
- 🔄 **Rotate**: Ícone de chevron no FAQ

### Efeitos Visuais
- 🎭 **Glassmorphism**: Efeito de vidro fosco com `backdrop-filter`
- 🌈 **Gradiente Dinâmico**: De azul (#667eea) para roxo (#764ba2)
- ✨ **Hover Glow**: Brilho ao passar o mouse
- 💎 **Box Shadows**: Sombras suaves e profundidade

### Interatividade
- 🎯 **Scroll Suave**: Navegação animada entre seções
- 📝 **Validação de Formulário**: Feedback em tempo real
- ❓ **Accordion Animado**: FAQ com abertura/fechamento suave
- 🔗 **Links Sociais**: Hover animado nos ícones

---

## 📂 Estrutura de Componentes

```
src/components/
│
├── HeroSection.vue
│   ├── Título animado com emoji flutuante
│   ├── Subtítulo com fade-in
│   ├── Botão CTA com scroll suave
│   └── Elementos decorativos flutuantes
│
├── ContactForm.vue
│   ├── Formulário com 3 campos
│   ├── Validação de campos
│   ├── Sistema de alertas (sucesso/erro)
│   └── Design glassmorphism
│
├── FAQSection.vue
│   ├── 4 perguntas e respostas
│   ├── Accordion animado
│   ├── Ícone chevron rotativo
│   └── Hover effects
│
└── FooterSection.vue
    ├── Nome do desenvolvedor
    ├── Links sociais (GitHub/LinkedIn)
    ├── Ano dinâmico
    └── Hover animado nos ícones
```

---

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Técnicos
- [x] Projeto em Vue 3 + Vite
- [x] Estrutura de componentes organizada
- [x] CSS moderno com animações
- [x] Responsividade mobile-first

### ✅ Design e Animações
- [x] Fundo com gradiente suave
- [x] Título animado "🚧 Site em Construção"
- [x] Subtítulo com efeito fade-in
- [x] Animações ao passar o mouse
- [x] Transições suaves nas seções

### ✅ Seções do Site
- [x] Hero Section com animação
- [x] Formulário de Contato funcional
- [x] FAQ Section com accordion
- [x] Rodapé com links sociais

### ✅ Extras
- [x] Fonte Poppins (Google Fonts)
- [x] Ícones Font Awesome
- [x] CSS transitions para hover
- [x] Responsividade completa
- [x] Paleta moderna (azul e roxo)

---

## 🛠️ Personalização Rápida

### Alterar Cores
Edite as variáveis CSS em `src/style.css`:
```css
:root {
  --primary-color: #667eea;    /* Cor primária */
  --secondary-color: #764ba2;  /* Cor secundária */
}
```

### Alterar Conteúdo do FAQ
Edite o array `faqItems` em `src/components/FAQSection.vue`:
```javascript
const faqItems = [
  {
    question: 'Sua pergunta aqui',
    answer: 'Sua resposta aqui'
  }
];
```

### Alterar Links Sociais
Edite os links em `src/components/FooterSection.vue`:
```html
<a href="https://github.com/seu-usuario">
<a href="https://linkedin.com/in/seu-usuario">
```

---

## 💡 Dicas

1. **Hot Module Replacement (HMR)**: Ao fazer alterações, o navegador atualiza automaticamente!
2. **DevTools Vue**: Instale a extensão Vue DevTools para debug
3. **Performance**: O site usa CSS puro para máxima performance
4. **SEO**: Adicione meta tags no `index.html` para SEO

---

## ❓ Problemas Comuns

### Porta 5173 já está em uso
```bash
# Use outra porta
npm run dev -- --port 3000
```

### Dependências não instaladas
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através dos links sociais no rodapé do site!

---

**Desenvolvido por Tiago Neves** 💻
