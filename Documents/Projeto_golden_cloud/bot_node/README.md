# Projeto Golden Cloud - Bot Node API

Este repositório contém um microserviço (API) desenvolvido em Node.js para o projeto Chat Bot. O serviço é responsável por receber requisições do sistema Rails contendo comentários feitos por usuários, identificar palavras-chave nesses comentários e retornar respostas apropriadas para o Rails.

## Sumário

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)



## Visão Geral

Este microserviço expõe uma API RESTful para [descrever funcionalidades principais, ex: gerenciamento de usuários, processamento de dados, etc.]. Ele foi projetado para ser escalável, seguro e de fácil integração com outros serviços do ecossistema Golden Cloud.

## Requisitos

- Node.js >= 18.x
- npm >= 9.x


## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd bot_node
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
PORT=3000
DATABASE_URL=...
# Outras variáveis necessárias
```

## Execução

Para iniciar o servidor em modo desenvolvimento:

```bash
npm run dev
```

Para rodar em produção:

```bash
npm start
```

| ...    | ...      

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

---

> Desenvolvido por Leonardo Veras