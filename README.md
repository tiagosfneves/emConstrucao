# 🚧 Site em Construção - Tiago Neves

Uma página moderna e elegante de "Site em Construção" desenvolvida com Vue 3 + Vite, apresentando animações suaves, design responsivo e uma experiência de usuário excepcional.

## ✨ Funcionalidades

### 🎨 Design e Animações
- ✅ Fundo com gradiente suave (azul → roxo)
- ✅ Animações de entrada (fade-in) em todos os elementos
- ✅ Efeitos hover nos botões e ícones (scale e brilho)
- ✅ Transições suaves entre seções
- ✅ Decorações animadas no fundo (círculos flutuantes)
- ✅ Scrollbar personalizada

### 📱 Seções do Site

#### 1. Hero Section
- Título animado "🚧 Site em Construção" com efeito pulse
- Subtítulo com animação de fade-in
- Botão "Entre em Contato" com scroll suave
- Elementos decorativos animados no fundo

#### 2. Formulário de Contato
- Campos: Nome, E-mail e Mensagem
- Validação de campos obrigatórios
- Alertas visuais de sucesso/erro
- Animações ao focar nos campos
- Design glassmorphism (efeito de vidro)
- Totalmente responsivo

#### 3. FAQ Section (Perguntas Frequentes)
- 4 perguntas com respostas em accordion
- Animação de abertura/fechamento suave
- Efeito hover nos cards
- Ícones animados (chevron up/down)

#### 4. Rodapé
- Assinatura "Desenvolvido por Tiago Neves 💻"
- Ícones sociais (GitHub e LinkedIn) com animação
- Ano dinâmico (JavaScript)
- Design minimalista e elegante

## 🛠️ Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool ultrarrápido
- **CSS3** - Animações e transições modernas
- **Font Awesome** - Ícones profissionais
- **Google Fonts** - Família Poppins

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Instale as dependências**:
```bash
npm install
```

2. **Execute o projeto em modo de desenvolvimento**:
```bash
npm run dev
```

3. **Acesse no navegador**:
   - O Vite irá iniciar o servidor em `http://localhost:5173`
   - Abra o navegador e acesse a URL exibida no terminal

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para visualizar o build de produção localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
workspace/
├── src/
│   ├── components/
│   │   ├── HeroSection.vue      # Seção hero com título animado
│   │   ├── ContactForm.vue      # Formulário de contato
│   │   ├── FAQSection.vue       # Perguntas frequentes
│   │   └── FooterSection.vue    # Rodapé com links sociais
│   ├── App.vue                  # Componente principal
│   ├── main.js                  # Ponto de entrada
│   └── style.css                # Estilos globais
├── index.html                    # Template HTML
├── package.json                  # Dependências do projeto
├── vite.config.js               # Configuração do Vite
└── README.md                     # Este arquivo
```

## 🎯 Componentes Detalhados

### HeroSection.vue
- Título principal com emoji animado
- Subtítulo com fade-in atrasado
- Botão CTA com scroll suave para o formulário
- 3 círculos decorativos com animação float

### ContactForm.vue
- 3 campos com validação (Nome, E-mail, Mensagem)
- Sistema de alertas com ícones
- Efeito glassmorphism nos inputs
- Feedback visual ao enviar

### FAQSection.vue
- 4 perguntas/respostas em accordion
- Apenas uma pergunta aberta por vez
- Transições suaves de slide
- Hover effects nos cards

### FooterSection.vue
- Links sociais com animação de rotação
- Ano dinâmico usando JavaScript
- Design minimalista e elegante

## 🎨 Paleta de Cores

- **Gradiente Principal**: `#667eea` → `#764ba2`
- **Texto**: Branco com variações de opacidade
- **Backgrounds**: Vidro fosco (glassmorphism)
- **Acentos**: Branco com opacidade variável

## 📱 Responsividade

O site é 100% responsivo e otimizado para:
- ✅ Desktop (1920px+)
- ✅ Laptops (1024px - 1919px)
- ✅ Tablets (768px - 1023px)
- ✅ Smartphones (320px - 767px)

### Breakpoints
- `768px` - Ajustes para tablets e smartphones
- `480px` - Otimizações para smartphones pequenos

## ✨ Animações Implementadas

1. **fadeIn** - Entrada suave dos elementos
2. **pulse** - Pulsação do título e emoji
3. **bounce** - Ícone de seta no botão
4. **float** - Círculos decorativos flutuantes
5. **slide** - Accordion das FAQs
6. **hover** - Scale e brilho em botões/ícones

## 🌐 Fontes e Ícones

- **Fonte**: [Poppins](https://fonts.google.com/specimen/Poppins) - Google Fonts
- **Ícones**: [Font Awesome 6.5.1](https://fontawesome.com/)

## 🔧 Personalização

Para personalizar o site:

1. **Cores**: Edite o gradiente em `src/style.css`
2. **Conteúdo**: Modifique os textos nos componentes Vue
3. **FAQs**: Adicione/edite perguntas em `FAQSection.vue`
4. **Links Sociais**: Atualize as URLs em `FooterSection.vue`
5. **Nome**: Substitua "Tiago Neves" nos componentes

## 📝 Notas de Desenvolvimento

- O formulário não está conectado a um backend real
- Os alertas são simulados apenas para feedback visual
- Para integrar com backend, implemente a lógica em `ContactForm.vue`
- O projeto usa Composition API do Vue 3

## 🤝 Contato

Desenvolvido com 💜 por **Tiago Neves**

- GitHub: [Adicione seu link]
- LinkedIn: [Adicione seu link]

---

**Status**: ✅ Projeto finalizado e pronto para uso!
