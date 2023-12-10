# Desafio Técnico - Ada Tech - Backend

## Tecnologias

- Node v21.2.0
- Typescript
- Express
- SQLite
- Sequilize
- Jest
- Prettier
- Eslint
- TypeDI

## Arquitetura

Foi usada uma arquitetura baseada na arquitetura hexagonal:

1. A camada principal é a `core`, que possui tanto as regras como os modelos da aplicação do ponto de vista de negócio.

- Dentro dela, há os `service`, que possuem os casos de uso em si e são responsáveis por chamar as classes que são responsáveis pela comunicação com o banco de dados. Eles estão organizados em domínios: `auth` e `core`
- A pasta `errors` possui os erros comuns da aplicação
- A pasta `models` possui os modelos da aplicação

2. A camada `api` possui a definição dos Entrypoints e dos Middlewares da aplicação.

- Os Entrypoints ficam na pasta `controllers` e são dividios entre dois domínios: `auth` e `cards`. Todos os `controllers` herdam de uma classe base `BaseController`, que é responsável por transformar os erros da aplicação em respostas HTTP apropriadas

- Os Middlewares ficam na pasta `middleware`. Existem apenas dois: um para validar o token e outro para logar o resultado dos endpoints de edição e deleção

- Ambos apenas recebem as informações do `express`, mapeam para o formato esperado pelos `models` da `core` e chama os serviços necessários da `core`

3. A camada `data` possui o código responsável pela comunicação com o banco de dados.

- A pasta `entities` possui os modelos do ponto de vista do banco de dados e seguem a sintaxe do Sequelize
- A pasta `repositories` contém as classes responsáveis pela comunicação com o banco de dados. Todo `repository` deve implementar um `datasource`
- Os arquivos em `datasource` representam o contrato com o banco de dados. A camada `core`, quando precisa de uma informação da camada `data`, se comunica através dessas interfaces, para que seja feita uma inversão de dependências bem como poliformismo nas classes de `repository`

## Rodando

**Localmente**

Instale as dependências e rode o projeto localmente com:

```
yarn
yarn start:dev
```

**Testes**

Para demonstrar que o projeto possui a arquitetura necessária para se realizarem testes unitários, foram testadas duas classes.

Para rodar:

```
yarn test:ci
```
