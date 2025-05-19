# 💻 To Do Frontend

Este é o frontend da aplicação de tarefas, criado com **Next.js**, estilizado com **TailwindCSS + shadcn/ui**, e usando **React Hook Form** com **Zod** para validação.

## ✅ Requisitos

- [Docker](https://www.docker.com/)
- Docker Compose
- Rede Docker compartilhada (`cvlb`)

## 🔌 Criar rede Docker (se ainda não existir)

```bash
docker network create cvlb
```

## 🚀 Subir o frontend com Docker Compose

```bash
docker compose up -d
```

> Isso irá iniciar a aplicação em **[http://localhost:3000](http://localhost:3000)**

## 📦 Recursos implementados

- ✅ Listagem de tarefas
- ✅ Criação com validação (React Hook Form + Zod)
- ✅ Exclusão de tarefas
- ✅ Marcar tarefas como concluídas
