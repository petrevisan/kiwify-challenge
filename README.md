# Kiwify Challenge - Checkout

## DISCLAIMER (Importante)

Embora a vaga tenha especificado a utilização de Vue/Nuxt e eu tenha experiência profissional com essas tecnologias, na data em que o Artur (CEO da Kiwify) divulgou a oportunidade, eu estava em viagem de trabalho. Por conta disso, não teria tempo suficiente para desenvolver com Vue/Nuxt, já que não trabalho com elas há algum tempo e precisaria de 1 ou 2 dias para me reambientar ao ecossitema Vue. Decidi, então, me candidatar utilizando Next.js mesmo.

## 💻 Sobre o Projeto

Este projeto é uma implementação de um checkout responsivo desenvolvido com Next.js, seguindo os padrões de design da Kiwify. O sistema inclui validação de formulários, máscaras de input e uma experiência de usuário fluida.

## 🚀 Tecnologias Utilizadas

- Next.js/React
- TypeScript
- Tailwind CSS
- Zod
- React Hook Form
- Shadcn/ui

## 📋 Funcionalidades

- Formulário de checkout responsivo
- Validação de campos em tempo real
- Máscara para CPF/CNPJ
- Máscara para número de cartão de crédito
- Validação de email
- Seleção de parcelas
- Feedback visual de erros
- Página de sucesso após pagamento

## 🛠 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/kiwify-challenge.git

# Entre na pasta do projeto
cd kiwify-challenge

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🌐 Ambiente de Desenvolvimento

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx
│   └── success/
│       └── page.tsx
├── components/
│   ├── ui/
│   └── organisms/
├── utils/
└── types/
```

## 🔍 Validações Implementadas

- CPF/CNPJ válido
- Email e confirmação de email
- Número de cartão de crédito (4242 4242 4242 4242)
- Código de segurança (CVV)
- Campos obrigatórios

## 👥 Autor

Seu Nome - [GitHub](https://github.com/petrevisan)
