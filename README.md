# Desafio Técnico - Ada Tech

Este é o [Desafio Técnico Fullstack](https://gitlab.com/gabriel.militello1/desafio-tecnico-fullstack) do processo seletivo da Ada Tech feito por João Victor Golias. Como o enunciado do projeto estava em português, optou-se por fazer os arquivos README.md aqui presentes também em português.

## Entrega Final
A entrega final desse projeto consiste em:

1. Um [repositório público](https://github.com/joaogolias/ada-challenge) do github
2. Um [vídeo](https://youtu.be/BwAgiM1u2Wk) com uma demonstração do projeto funcionado 

## Estrutura
Todo o código principal do projeto encontra-se na pasta `src`, dividida em:

**1. Diretório `src/back`** 

Esta é a pasta do projeto do backend, feito com:
- `typescript`
- `express`
- `sqlite`
- `sequilize`

Você pode encontrar uma documentação mais detalhada do Frontend no seu arquivo [README.md](https://github.com/joaogolias/ada-challenge/blob/main/src/back/README.md)

**2. Diretório `src/front`**  

Esta é a pasta do projeto do backend, feito com:
- `typescript`
- `react`
- `next`
- `tailwind`
- `mui`

Você pode encontrar uma documentação mais detalhada do Frontend no seu arquivo [README.md](https://github.com/joaogolias/ada-challenge/blob/main/src/front/README.md)

**3. Demais arquivos**

Os demais arquivos desse repositório correspondem aos arquivos de configuração que se aplicam aos dois projetos, como eslint, preetier, docker-compose e outros.


## Rodando o sistema

**Pré-requisitos**

Você precisa ter o docker instalado na sua máquina

**Rodando**

Abra o arquivo `src/back/.env` e defina os valores marcados com `<SECRET VALUE>`, que são as *secrets* do projeto (isso foi feito devido a uma solicitação no enunciado do projeto). Você o encotrará desta forma:

```
PORT=5000
JWT_AUDIENCE=localhost

ADMIN_USERNAME=<SECRET VALUE>
ADMIN_PASSWORD=<SECRET VALUE>
JWT_SECRET=<SECRET VALUE>
```

A partir do *root* do projeto, rode:
```sh
docker compose build --no-cache
docker compose up
```