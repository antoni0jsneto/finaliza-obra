# Finaliza Obra

Landing page institucional com formulário de orçamento integrado a uma API Node.js para envio de mensagens via WhatsApp (Twilio).

## 📌 Sobre o projeto

O **Finaliza Obra** é um monorepo com duas aplicações:

- **Web**: site em React + Vite com páginas institucionais e modal de orçamento.
- **API**: serviço em Express responsável por receber os dados do formulário e enviar mensagem WhatsApp.

Objetivo: apresentar serviços de finalização e limpeza pós-obra e facilitar geração de leads.

---

## 🧱 Arquitetura

Monorepo NPM Workspaces:

- `apps/web` → frontend (React)
- `apps/api` → backend (Express)
- `package.json` (raiz) → scripts orquestrados com `concurrently`

---

## 🚀 Tecnologias utilizadas

### Frontend (`apps/web`)

- React 18
- Vite 7
- React Router DOM
- Tailwind CSS
- Radix UI
- Framer Motion
- Lucide React
- React Helmet
- ESLint

### Backend (`apps/api`)

- Node.js (ESM)
- Express 5
- Twilio SDK
- dotenv
- CORS
- Helmet
- Morgan
- ESLint

### Monorepo / Tooling

- NPM Workspaces
- concurrently

---

## 📂 Estrutura de pastas

```text
.
├── apps
│   ├── api
│   │   └── src
│   │       ├── constants
│   │       ├── middleware
│   │       ├── routes
│   │       ├── utils
│   │       └── main.js
│   └── web
│       ├── public
│       ├── plugins
│       ├── tools
│       └── src
│           ├── components
│           ├── hooks
│           ├── lib
│           └── pages
└── package.json
```

---

## ✅ Pré-requisitos

- Node.js 18+ (recomendado Node.js 20 LTS)
- npm 9+

---

## ⚙️ Instalação

Na raiz do projeto:

```bash
npm install
```

> Como o repositório usa **workspaces**, instale dependências na **raiz**.

---

## ▶️ Executando localmente

### Desenvolvimento (web + api juntos)

```bash
npm run dev
```

- Web: `http://localhost:3000`
- API: `http://localhost:3001`

### Somente frontend

```bash
npm run dev --prefix apps/web
```

### Somente API

```bash
npm run dev --prefix apps/api
```

---

## 🔐 Variáveis de ambiente

Crie o arquivo `apps/api/.env` com:

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000

TWILIO_ACCOUNT_SID=seu_account_sid
TWILIO_AUTH_TOKEN=seu_auth_token
TWILIO_WHATSAPP_FROM=+14155238886
```

### Observações importantes

- `TWILIO_WHATSAPP_FROM` deve ser um número/canal WhatsApp válido no Twilio.
- O endpoint de envio usa os dados do formulário para montar a mensagem de orçamento.

---

## 🌐 Rotas e endpoints

### Frontend

- `/` → Home
- `/servicos` → Serviços
- `/sobre` → Sobre
- `/contato` → Contato

### Backend

- `GET /health` → health-check
- `POST /contact/send-whatsapp` → envio de orçamento via WhatsApp

Payload esperado em `POST /contact/send-whatsapp`:

```json
{
  "name": "Nome completo",
  "phone": "+5511999999999",
  "email": "email@dominio.com",
  "propertyType": "Apartamento",
  "size": "120",
  "message": "Mensagem opcional"
}
```

---

## 📜 Scripts disponíveis

### Raiz

- `npm run dev` → roda web + api em paralelo
- `npm run build` → build do frontend
- `npm run start` → sobe API em modo start
- `npm run lint` → lint web + api

### `apps/web`

- `npm run dev --prefix apps/web`
- `npm run build --prefix apps/web`
- `npm run start --prefix apps/web`
- `npm run lint --prefix apps/web`

### `apps/api`

- `npm run dev --prefix apps/api`
- `npm run start --prefix apps/api`
- `npm run lint --prefix apps/api`

---

## 🔌 Integração front ↔ API

No frontend, as chamadas usam `"/hcgi/api"` como base (`apps/web/src/lib/apiServerClient.js`).

Em ambiente local, garanta que esse caminho esteja roteado para a API (reverse proxy) ou ajuste conforme seu ambiente de execução.

---

## 🛡️ Boas práticas já aplicadas

- Segurança básica com Helmet no backend
- CORS configurável por variável de ambiente
- Logging de requisições com Morgan
- Tratamento centralizado de erros na API

---

## 🤝 Contribuição

1. Crie uma branch para sua feature/correção
2. Faça commits pequenos e descritivos
3. Rode `npm run lint` antes de abrir PR
4. Abra um Pull Request com contexto das mudanças

---

## 👤 Autor / Time

Antônio Neto.
