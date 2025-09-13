# Portfolio Pedro Soeiro

Um portfólio moderno e responsivo construído com Next.js, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Responsivo**: Mobile-first com suporte completo a dispositivos móveis
- **Multi-idioma**: Suporte para Português e Inglês
- **Tema Escuro/Claro**: Toggle automático de tema
- **Animações**: Transições suaves com Framer Motion
- **Formulário de Contato**: Integração com email via API
- **Otimizado**: Performance otimizada para produção
- **SEO**: Meta tags e estrutura otimizada para motores de busca

## 🛠️ Tecnologias

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Deploy**: Vercel
- **Email**: Nodemailer

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/portfolio-pedro-soeiro.git

# Entre no diretório
cd portfolio-pedro-soeiro

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

## 🌐 Deploy no Vercel

Este projeto está configurado para deploy automático no Vercel:

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente:
   - `MAIL_USER`: Seu email de envio
   - `MAIL_PASS`: Senha do email
   - `MAIL_TO`: Email de destino para contatos

3. O deploy será automático a cada push na branch main

## 📱 Responsividade

O projeto foi desenvolvido com foco em responsividade:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🎨 Personalização

Para personalizar o portfólio:
1. Edite as informações em `src/components/`
2. Adicione suas imagens em `src/public/images/`
3. Configure as cores em `tailwind.config.js`
4. Atualize os textos nos componentes

## 📄 Licença

Este projeto está sob a licença MIT.